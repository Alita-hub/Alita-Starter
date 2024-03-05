package com.alita.framework.security.filter;

import com.alita.common.util.JwtUtil;
import io.jsonwebtoken.Claims;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;

import javax.annotation.Resource;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Resource
    @Qualifier("handlerExceptionResolver")
    private HandlerExceptionResolver resolver;

    @Resource
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        //1. 判断请求头有无Jwt Header
        String token = request.getHeader(HttpHeaders.AUTHORIZATION);
        if(StringUtils.isEmpty(token)) {
            filterChain.doFilter(request, response);
            return;
        }

        //2. 解析Jwt Token
        Claims claims = null;
        try {
            claims = jwtUtil.parseJwt(token);
        } catch (Exception e) {
            // 交给全局异常处理类处理
            resolver.resolveException(request, response, null, e);
            return;
        }

        //3. 设置SecurityContextHolder
        if (claims != null) {
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(claims.getSubject(), null, null);
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        }

        filterChain.doFilter(request, response);
    }

}
