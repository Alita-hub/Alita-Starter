package com.alita.system.authentication.strategy;

import com.alita.system.authentication.core.ILoginStrategy;
import com.alita.common.domain.vo.LoginVo;
import com.alita.common.exception.core.BadRequestException;
import com.alita.common.util.JwtUtil;
import com.alita.framework.security.context.AuthenticationContextHolder;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 用户名密码登录策略实现类
 *
 * @author: alita
 */
@Service("username")
public class UsernameLoginStrategy implements ILoginStrategy {

    @Lazy
    @Resource
    private AuthenticationManager authenticationManager;

    @Resource
    private JwtUtil jwtUtil;

    /**
     * 用户名密码登录认证
     * @param login
     */
    @Override
    public String login(LoginVo login)
    {
        //用户名校验
        usernameCheckout(login.getUsername());

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(login.getUsername(), login.getPassword());

        AuthenticationContextHolder.setContext(authenticationToken);
        //底层调用UserDetailsServiceImpl的loadUserByUsername
        Authentication authenticate = authenticationManager.authenticate(authenticationToken);

        User principal = (User) authenticate.getPrincipal();
        //生成jwt令牌
        String token = jwtUtil.createToken(principal.getUsername());

        return token;
    }

    /**
     * 1.以字母开头
     * 2.只能包含字母、数字和下划线
     * 3.长度介于4-20个字符之间
     *
     * @param username
     * @return boolean
     */
    private void usernameCheckout(String username)
    {
        String pattern1 = "^[a-zA-Z].*$";
        String pattern2 = "^[a-zA-Z0-9_]*$";
        String pattern3 = "^.{4,20}$";
        Pattern regex1 = Pattern.compile(pattern1);
        Pattern regex2 = Pattern.compile(pattern2);
        Pattern regex3 = Pattern.compile(pattern3);
        Matcher matcher1 = regex1.matcher(username);
        Matcher matcher2 = regex2.matcher(username);
        Matcher matcher3 = regex3.matcher(username);

        if (!matcher1.matches()) {
            throw new BadRequestException("非法格式，请使用字母开头！");
        }
        if (!matcher2.matches()) {
            throw new BadRequestException("非法格式，只能包含字母、数字、和下划线！");
        }
        if (!matcher3.matches()) {
            throw new BadRequestException("非法格式，长度需要介于4-20个字符之间！");
        }
    }

}
