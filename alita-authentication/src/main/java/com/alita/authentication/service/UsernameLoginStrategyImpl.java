package com.alita.authentication.service;

import com.alita.authentication.core.ILoginStrategy;
import com.alita.common.util.JwtUtil;
import com.alita.common.domain.entity.SysUserAccount;
import com.alita.common.domain.model.Login;
import com.alita.framework.security.context.AuthenticationContextHolder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * 用户名密码登录策略实现类
 *
 * @author: alita
 */
@Service("username")
public class UsernameLoginStrategyImpl implements ILoginStrategy {

    @Resource
    private AuthenticationManager authenticationManager;

    @Resource
    private JwtUtil jwtUtil;

    /**
     * 用户名密码登录认证
     * @param login
     */
    @Override
    public String login(Login login)
    {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(login.getUsername(), login.getPassword());

        AuthenticationContextHolder.setContext(authenticationToken);
        //底层调用UserDetailsServiceImpl的loadUserByUsername
        Authentication authenticate = authenticationManager.authenticate(authenticationToken);

        SysUserAccount principal = (SysUserAccount) authenticate.getPrincipal();
        //生成jwt令牌
        String token = jwtUtil.createToken(principal.getPrincipal());

        return token;
    }

}
