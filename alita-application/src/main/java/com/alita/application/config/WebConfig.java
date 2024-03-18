package com.alita.application.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;


/**
 * WebMvcConfigurer配置类其实是Spring内部的一种配置方式，采用JavaBean的形式来代替传统的xml配置文件形式进行针对框架个性化定制
 * 可以用来自定义处理器、拦截器、视图解析器、转换器、设置跨域等
 * @author alita
 * @date 2024/03/18
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

    /**
     * CORS跨域配置
     * @param registry
     */
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowCredentials(true)
                .allowedOriginPatterns("*")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*")
                .exposedHeaders("*");
    }

    /**
     * spring mvc路径的匹配规则
     * @param configurer
     */
    @Override
    public void configurePathMatch(PathMatchConfigurer configurer) { }

    /**
     * 异步请求
     * @param configurer
     */
    @Override
    public void configureAsyncSupport(AsyncSupportConfigurer configurer) { }

    /**
     * Spring MVC 生命周期拦截器，对请求进行拦截处理
     * @param registry
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) { }

    /**
     * 主要用于实现无业务逻辑跳转，例如主页跳转，简单的请求重定向，错误页跳转等
     * @param registry
     */
    @Override
    public void addViewControllers(ViewControllerRegistry registry) { }

}
