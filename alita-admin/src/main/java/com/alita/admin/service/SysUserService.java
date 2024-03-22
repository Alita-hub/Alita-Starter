package com.alita.admin.service;

import com.alita.admin.mapper.ISysUserMapper;
import com.alita.api.admin.ISysUserService;
import com.alita.common.domain.entity.SysConfig;
import com.alita.common.domain.entity.SysUser;
import com.alita.common.domain.model.HttpPageRequest;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * 用户管理
 * @author: alita
 */
@Service
public class SysUserService implements ISysUserService {

    @Resource
    private ISysUserMapper sysUserMapper;

    /**
     * 条件分页查询用户列表
     *
     * @param request
     * @return {@link Page}<{@link SysUser}>
     */
    @Override
    public Page<SysUser> getUserList(HttpPageRequest<SysUser> request) {
        // 实体参数
        SysUser sysUser = request.getParams();
        // 创建一个QueryWrapper对象，用于构建查询条件
        QueryWrapper<SysUser> queryWrapper = Wrappers.query();

        if (!StringUtils.isEmpty(sysUser.getNickname())) {
            queryWrapper.eq("nickname", sysUser.getNickname());
        }
        if (!StringUtils.isAllBlank(sysUser.getStatus().getValue())) {
            queryWrapper.eq("status", sysUser.getStatus());
        }

        List<SysUser> sysUsers = sysUserMapper.selectList(queryWrapper);

        return null;
    }


    /**
     * 根据用户id获取用户
     * @param id
     * @return {@link SysUser}
     */
    @Override
    public SysUser getUserById(int id) {
        SysUser userProfile = sysUserMapper.selectById(id);
        return userProfile;
    }

    /**
     * 保存用户基本信息
     * @param sysUserProfile
     * @return int
     */
    @Override
    public int saveUserProfile(SysUser sysUserProfile) {
        return sysUserMapper.insert(sysUserProfile);
    }

}
