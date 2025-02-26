package com.alita.system.authentication.strategy;

import com.alita.system.authentication.core.ILoginStrategy;
import com.alita.common.domain.vo.LoginVo;
import com.alita.common.util.JwtUtil;
import com.alita.framework.security.context.AuthenticationContextHolder;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * 手机验证码登录实现类
 * @author alita
 */
@Service("phone")
public class PhoneLoginStrategy implements ILoginStrategy {

    @Lazy
    @Resource
    private AuthenticationManager authenticationManager;

    @Resource
    private JwtUtil jwtUtil;

    @Override
    public String login(LoginVo login) {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(login.getPhone(), login.getCode());

        AuthenticationContextHolder.setContext(authenticationToken);
        //底层调用phoneDetailsServiceImpl的loadUserByUsername
        Authentication authenticate = authenticationManager.authenticate(authenticationToken);

        User principal = (User) authenticate.getPrincipal();
        //生成jwt令牌
        String token = jwtUtil.createToken(principal.getUsername());

        return token;
    }
}
