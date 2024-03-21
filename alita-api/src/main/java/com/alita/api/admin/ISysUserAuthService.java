package com.alita.api.admin;

import com.alita.common.domain.entity.SysUserAuth;

/**
 * 用户账号接口
 * @author alita
 * @date 2024/03/08
 */
public interface ISysUserAuthService {

    /**
     * 根据用户名查询账户信息
     * @param username
     * @return {@link SysUserAuth}
     */
    SysUserAuth getUserByUsername(String username);


    /**
     * 保存用户认证信息
     * @param sysUserAuth
     * @return int
     */
    int saveUserAuth(SysUserAuth sysUserAuth);

}
