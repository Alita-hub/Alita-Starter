package com.alita.api.admin;

import com.alita.common.domain.entity.SysUserAuth;

/**
 * 用户认证信息接口
 * @author alita
 * @date 2024/03/08
 */
public interface ISysUserAuthService {

    /**
     * 根据用户名查询账户信息
     * @param principal
     * @return {@link SysUserAuth}
     */
    SysUserAuth getUserByprincipal(String principal);


    /**
     * 保存用户认证信息
     * @param sysUserAuth
     * @return int
     */
    int saveUserAuth(SysUserAuth sysUserAuth);

}
