package com.alita.admin.service;

import com.alita.admin.mapper.ISysUserProfileMapper;
import com.alita.api.admin.ISysUserProfileService;
import com.alita.common.domain.entity.SysUserProfile;
import com.alita.common.domain.model.HttpPageRequest;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * 用户管理
 * @author: alita
 */
@Service
public class SysUserProfileService implements ISysUserProfileService {

    @Resource
    private ISysUserProfileMapper sysUserProfileMapper;

    /**
     * 条件分页查询用户列表
     *
     * @param request
     * @return {@link Page}<{@link SysUserProfile}>
     */
    @Override
    public Page<SysUserProfile> getUserList(HttpPageRequest<SysUserProfile> request) {
        return null;
    }


    /**
     * 根据用户id获取用户
     * @param id
     * @return {@link SysUserProfile}
     */
    @Override
    public SysUserProfile getUserById(int id) {
        SysUserProfile userProfile = sysUserProfileMapper.selectById(id);
        return userProfile;
    }

    /**
     * 保存用户基本信息
     * @param sysUserProfile
     * @return int
     */
    @Override
    public int saveUserProfile(SysUserProfile sysUserProfile) {
        return sysUserProfileMapper.insert(sysUserProfile);
    }

}
