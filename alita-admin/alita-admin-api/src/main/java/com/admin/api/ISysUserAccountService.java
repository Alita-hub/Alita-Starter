package com.admin.api;

import com.alita.common.domain.entity.SysUserAccount;

/**
 * 用户账号接口
 * @author alita
 * @date 2024/03/08
 */
public interface ISysUserAccountService {

    /**
     * 根据用户名查询账户信息
     * @param username
     * @return {@link SysUserAccount}
     */
    SysUserAccount queryUserByUsername(String username);

}
