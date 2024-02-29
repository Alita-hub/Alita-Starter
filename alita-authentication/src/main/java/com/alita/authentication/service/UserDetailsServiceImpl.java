package com.alita.authentication.service;

import com.alita.admin.mapper.ISysUserAccountMapper;
import com.alita.common.domain.entity.SysUserAccount;
import com.alita.common.enums.AccountStatus;
import com.alita.framework.security.context.AuthenticationContextHolder;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Optional;

/**
 * 自定义认证，检索用户名、密码
 * @author: alita
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Resource
    private ISysUserAccountMapper userAuthMapper;

    @Resource
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) {
        SysUserAccount userAccount = userAuthMapper.queryUserByUsername(username);

        //未找到用户
        if (!Optional.ofNullable(userAccount).isPresent())
        {
            throw new UsernameNotFoundException("账号: " + username + " 不存在");
        }

        //账号被停用
        if (userAccount.getStatus().equals(AccountStatus.DISABLE))
        {
            throw new DisabledException("账号: " + username + " 被停用");
        }

        //账号被锁定（密码输错超过限制）
        if (userAccount.getStatus().equals(AccountStatus.LOCKED))
        {
            throw new LockedException("账号: " + username + " 被锁定");
        }

        //校验密码
        if (!passwordEncoder.matches(AuthenticationContextHolder.getContext().getCredentials().toString(), userAccount.getPassword()))
        {
            throw new BadCredentialsException("用户：" + username + " 密码输入错误");
        }

        return userAccount;
    }



}
