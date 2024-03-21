package com.alita.framework.security.service;

import com.alita.api.admin.ISysUserAuthService;
import com.alita.api.admin.ISysUserProfileService;
import com.alita.common.domain.entity.SysUserAuth;
import com.alita.common.domain.entity.SysUserProfile;
import com.alita.common.enums.UserStatus;
import com.alita.framework.security.context.AuthenticationContextHolder;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.userdetails.User;
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
    private ISysUserAuthService userAccountService;

    @Resource
    private ISysUserProfileService userProfileService;

    @Resource
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) {
        // 查询用户认证信息
        SysUserAuth userAuth = userAccountService.getUserByUsername(username);

        //未找到用户
        if (!Optional.ofNullable(userAuth).isPresent())
        {
            throw new UsernameNotFoundException("账号: " + username + " 不存在");
        }

        // 查询用户信息
        SysUserProfile userProfile = userProfileService.getUserById(userAuth.getId());

        // 构造安全用户
        UserDetails userDetails = User.builder()
                .username(userAuth.getPrincipal())
                .password(userAuth.getCredential())
                .accountExpired(true)
                .accountLocked(userProfile.getStatus().equals(UserStatus.LOCKED) ? false : true)
                .credentialsExpired(true)
                .disabled(userProfile.getStatus().equals(UserStatus.DISABLE) ? false : true)
                .build();

        //账号被停用
        if (!userDetails.isEnabled())
        {
            throw new DisabledException("账号: " + username + " 被停用");
        }

        //账号被锁定（密码输错超过限制）
        if (!userDetails.isAccountNonLocked())
        {
            throw new LockedException("账号: " + username + " 被锁定");
        }

        //校验密码
        if (!passwordEncoder.matches(AuthenticationContextHolder.getContext().getCredentials().toString(), userDetails.getPassword()))
        {
            throw new BadCredentialsException("用户：" + username + " 密码输入错误");
        }

        return userDetails;
    }



}
