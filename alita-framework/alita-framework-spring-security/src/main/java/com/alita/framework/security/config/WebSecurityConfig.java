package com.alita.framework.security.config;

import com.alita.framework.security.filter.JwtAuthenticationFilter;
import com.alita.framework.security.service.UserPasswordDetailsService;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.*;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedAuthenticationProvider;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedGrantedAuthoritiesUserDetailsService;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;


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
    private AuthenticationEntryPoint unAuthorizedHandler;

    /**
     * Jwt令牌过滤器
     */
    @Resource
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    /**
    ///可以向 ProviderManager 注入多个 AuthenticationProviders。每个 AuthenticationProvider 都执行特定类型的身份验证。
    ///例如，DaoAuthenticationProvider 支持基于用户名/密码的身份验证，而 JwtAuthenticationProvider 则支持 JWT 令牌身份验证。
    */

    /**
     * 校验用户密码
     */
    @Resource
    private UserPasswordDetailsService userPasswordDetailsService;

    /**
     * 校验手机验证码
     */
    /*@Resource
    private PhoneDetailsService phoneDetailsService;*/

    /**
     * 1. Spring Security默认使用ProviderManager和DaoAuthenticationProvider。
     * 2. ProviderManager的认证事件监听器默认为NullEventPublisher，未进行任何处理。
     *    自定义处理认证事件，必须设置AuthenticationEventPublisher到ProviderManager
     * 3. 在认证失败后UsernameNotFoundException异常会被默认转换成BadCredentialsException异常，导致不能捕获到UsernameNotFoundException,
     *    setHideUserNotFoundExceptions(false) 可以解决这个问题
     *
     * @param passwordEncoder
     * @param authenticationEventPublisher
     * @return {@link AuthenticationManager}
     */
    @Bean
    public AuthenticationManager authenticationManager(PasswordEncoder passwordEncoder, AuthenticationEventPublisher authenticationEventPublisher)
    {
        //支持多种身份认证方式
        List<AuthenticationProvider> providers = new ArrayList<>();

        //基于用户名密码的身份验证器
        DaoAuthenticationProvider usernamepasswordAuthenticationProvider = new DaoAuthenticationProvider();
        usernamepasswordAuthenticationProvider.setUserDetailsService(userPasswordDetailsService);
        usernamepasswordAuthenticationProvider.setPasswordEncoder(passwordEncoder);
        usernamepasswordAuthenticationProvider.setHideUserNotFoundExceptions(false);
        providers.add(usernamepasswordAuthenticationProvider);

        //基于手机验证码的身份验证器
        /*DaoAuthenticationProvider phoneAuthenticationProvider = new DaoAuthenticationProvider();
        phoneAuthenticationProvider.setUserDetailsService(userPasswordDetailsService);
        phoneAuthenticationProvider.setPasswordEncoder(passwordEncoder);
        phoneAuthenticationProvider.setHideUserNotFoundExceptions(false);
        providers.add(phoneAuthenticationProvider);*/

        //基于外部认证（SSO）
        /*PreAuthenticatedAuthenticationProvider preAuthenticatedAuthenticationProvider = new PreAuthenticatedAuthenticationProvider();
        preAuthenticatedAuthenticationProvider.setPreAuthenticatedUserDetailsService(new PreAuthenticatedGrantedAuthoritiesUserDetailsService());
        providers.add(preAuthenticatedAuthenticationProvider);*/

        ProviderManager providerManager = new ProviderManager(providers);
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

        //以下不需要认证
        http = http
                .authorizeRequests(
                        request -> request
                                // 允许所有预检请求
                                .antMatchers(HttpMethod.OPTIONS).permitAll()
                                .antMatchers("/assets/**").permitAll()
                                .antMatchers("/authentication/**").permitAll()
                );

        //任何请求都需要认证后才能访问
        http = http
                .authorizeRequests()
                .anyRequest()
                .authenticated()
                .and();

        //未登录异常处理，引导去登录页面
        http = http
                .exceptionHandling()
                .authenticationEntryPoint(unAuthorizedHandler)
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
