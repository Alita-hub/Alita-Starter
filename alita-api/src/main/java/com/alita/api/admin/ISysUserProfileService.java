package com.alita.api.admin;

import com.alita.common.domain.entity.SysUserProfile;
import com.alita.common.domain.model.HttpPageRequest;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;


/**
 * 用户管理
 * @author alita
 * @date 2024/03/21
 */
public interface ISysUserProfileService {

    /**
     * 条件分页获取用户列表
     *
     * @param request
     * @return {@link Page}<{@link SysUserProfile}>
     */
    Page<SysUserProfile> getUserList(HttpPageRequest<SysUserProfile> request);


    /**
     * 根据用户id获取用户
     * @param id
     * @return {@link SysUserProfile}
     */
    SysUserProfile getUserById(int id);


    /**
     * 保存用户基本信息
     * @param sysUserProfile
     * @return int
     */
    int saveUserProfile(SysUserProfile sysUserProfile);

}
