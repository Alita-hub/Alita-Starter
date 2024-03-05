package com.alita.framework.security.config;

import com.alita.framework.security.filter.JwtAuthenticationFilter;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationEventPublisher;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.DefaultAuthenticationEventPublisher;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.annotation.Resource;


/**
 * 在 Spring Security 5.7.0-M2 中，我们弃用了 WebSecurityConfigurerAdapter，因为我们鼓励用户转向基于组件的安全配置。
 * <a href="https://spring.io/blog/2022/02/21/spring-security-without-the-websecurityconfigureradapter">...</a>
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

    /**
     * 未登录异常处理
     */
    @Resource
    private AuthenticationEntryPoint authEntryPoint;

    @Resource
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    /**
     * 1. Spring Security默认使用ProviderManager和DaoAuthenticationProvider。
     * 2. ProviderManager的认证事件监听器默认为NullEventPublisher，未进行任何处理。
     *    自定义处理认证事件，必须设置AuthenticationEventPublisher到ProviderManager
     * 3. 在认证失败后UsernameNotFoundException异常会被默认转换成BadCredentialsException异常，导致不能捕获到UsernameNotFoundException,
     *    setHideUserNotFoundExceptions(false) 可以解决这个问题
     *
     * @param userDetailsService
     * @param passwordEncoder
     * @param authenticationEventPublisher
     * @return {@link AuthenticationManager}
     */
    @Bean
    public AuthenticationManager authenticationManager(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder, AuthenticationEventPublisher authenticationEventPublisher)
    {
        DaoAuthenticationProvider daoAuthenticationProvider= new DaoAuthenticationProvider();
        daoAuthenticationProvider.setUserDetailsService(userDetailsService);
        daoAuthenticationProvider.setPasswordEncoder(passwordEncoder);
        daoAuthenticationProvider.setHideUserNotFoundExceptions(false);

        ProviderManager providerManager = new ProviderManager(daoAuthenticationProvider);
        providerManager.setAuthenticationEventPublisher(authenticationEventPublisher);

        return providerManager;
    }


    /**
     * Spring Security 配置
     *
     * @param http
     * @return {@link SecurityFilterChain}
     * @throws Exception
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception
    {
        //CSRF需要禁用，否则无法使用post请求
        http = http.csrf().disable();

        //不使用session
        http = http
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and();

        //以下接口不需要认证
        http = http
                .authorizeRequests(
                        request -> request
                                .antMatchers("/**/*.js", "/**/*.css", "/**/*.js", "/**/*.html", "/**/*.png").permitAll()
                                .antMatchers("/loginPage", "/login").permitAll()
                );

        //任何请求都需要认证后才能访问
        http = http
                .authorizeRequests()
                .anyRequest()
                .authenticated()
                .and();

        //未登录异常处理，执行重定向到登录页面
        http = http
                .exceptionHandling()
                .authenticationEntryPoint(authEntryPoint)
                .and();

        //添加Jwt Token 过滤器
        http = http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }


    /**
     * 认证事件-发布异常与事件的映射
     * 每次身份验证成功或失败，都会分别触发一个 AuthenticationSuccessEvent 或 AbstractAuthenticationFailureEvent 事件。
     * 要监听这些事件，必须先发布一个 AuthenticationEventPublisher。Spring Security 的 DefaultAuthenticationEventPublisher 或许可以满足要求：
     * @param applicationEventPublisher
     * @return {@link AuthenticationEventPublisher}
     */
    @Bean
    public AuthenticationEventPublisher authenticationEventPublisher(ApplicationEventPublisher applicationEventPublisher)
    {
        return new DefaultAuthenticationEventPublisher(applicationEventPublisher);
    }


    /**
     * 加密方式: bcrypt
     * @return {@link PasswordEncoder}
     */
    @Bean
    public PasswordEncoder passwordEncoder()
    {
        return new BCryptPasswordEncoder();
    }
}
