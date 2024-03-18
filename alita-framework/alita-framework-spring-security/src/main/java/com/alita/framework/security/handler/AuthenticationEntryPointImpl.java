package com.alita.framework.security.handler;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Spring Security 核心异常（如 AuthenticationException 和 AccessDeniedException）属于运行时异常。
 * 由于这些异常是由 DispatcherServlet 后面的 Authentication Filter 在调用 Controller 方法之前抛出的，因此 @ControllerAdvice 无法捕获这些异常。
 * 通过添加自定义 Filter 和构建响应体，可以直接处理 Spring Security 异常。
 * 要通过@ExceptionHandler 和 @ControllerAdvice 在全局级别处理这些异常，需要自定义 AuthenticationEntryPoint 的实现。
 *
 * @author: alita
 */
@Component
public class AuthenticationEntryPointImpl implements AuthenticationEntryPoint {

    @Resource
    @Qualifier("handlerExceptionResolver")
    private HandlerExceptionResolver resolver;

    /**
     * 主要作用：
     *      1. 处理未认证的用户，引导进入认证流程（直接重定向到登录页面）
     *      2. 处理认证过程中的异常
     * @param request
     * @param response
     * @param authException
     */
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException {

        /*
        * 这里注入了 DefaultHandlerExceptionResolver，并将 Handler 委托给该 Resolver（spring mvc解析器）。
        * 现在，可以使用 Exception Handler 方法通过 Controller Advice 来处理此 Security 异常。
        * */
        resolver.resolveException(request, response, null, authException);

        //返回401
        response.sendError(HttpStatus.UNAUTHORIZED.value(), HttpStatus.UNAUTHORIZED.getReasonPhrase());
    }


}
