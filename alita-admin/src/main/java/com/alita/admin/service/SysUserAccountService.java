package com.alita.admin.service;

import com.alita.framework.security.context.AuthenticationContextHolder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * (SysUserAccount)表服务实现类
 *
 * @author alita
 */
@Service
public class SysUserAccountService {

    @Resource
    private AuthenticationManager authenticationManager;


    /**
     * 用户名密码登录认证
     * @param usernamePasswordAuthenticationToken
     */
    public void login(UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken)
    {
        Authentication authenticate = authenticationManager.authenticate(usernamePasswordAuthenticationToken);
        AuthenticationContextHolder.setContext(authenticate);

        System.out.println(authenticate.toString());
    }

}
