package com.alita.api.admin;

import com.alita.common.domain.entity.SysUser;
import com.alita.common.domain.model.HttpPageRequest;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;


/**
 * 用户管理
 * @author alita
 * @date 2024/03/21
 */
public interface ISysUserService {

    /**
     * 条件分页获取用户列表
     *
     * @param request
     * @return {@link Page}<{@link SysUser}>
     */
    Page<SysUser> getUserList(HttpPageRequest<SysUser> request);


    /**
     * 根据用户id获取用户
     * @param id
     * @return {@link SysUser}
     */
    SysUser getUserById(int id);


    /**
     * 保存用户基本信息
     * @param sysUserProfile
     * @return int
     */
    int saveUserProfile(SysUser sysUserProfile);

}
