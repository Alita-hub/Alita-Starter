package com.alita.admin.authentication;

import com.alita.admin.mapper.SysUserAccountMapper;
import com.alita.common.domain.entity.SysUserAccount;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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
    private SysUserAccountMapper userAuthMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        SysUserAccount sysUserAuth = userAuthMapper.queryUserAuthByUsername(username);

        if (!Optional.ofNullable(sysUserAuth).isPresent())
        {

        }

        return null;
    }

}
