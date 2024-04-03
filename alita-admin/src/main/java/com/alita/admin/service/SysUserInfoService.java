package com.alita.admin.service;

import com.alita.admin.mapper.ISysUserInfoMapper;
import com.alita.api.admin.ISysUserInfoService;
import com.alita.common.domain.entity.SysUserInfo;
import com.alita.common.exception.core.CrudException;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * 用户管理
 * @author: alita
 */
@Service
public class SysUserInfoService implements ISysUserInfoService {

    @Resource
    private ISysUserInfoMapper sysUserInfoMapper;


    /**
     * 根据用户id获取用户基本信息
     * @param id
     * @return {@link SysUserInfo}
     */
    @Override
    public SysUserInfo getUserInfo(int id) {
        SysUserInfo sysUser = sysUserInfoMapper.selectById(id);
        return sysUser;
    }

    /**
     * 保存用户基本信息
     *
     * @param sysUser
     * @return int
     */
    @Override
    public boolean addUserInfo(SysUserInfo sysUser) {
        if (sysUserInfoMapper.insert(sysUser) > 0) {
            return true;
        }

        throw new CrudException("用户信息保存失败！");
    }

    /**
     * 更新用户基本信息
     * @param sysUser
     * @return int
     */
    @Override
    public boolean updateUserInfo(SysUserInfo sysUser) {
        if (sysUserInfoMapper.updateById(sysUser) > 0) {
            return true;
        }

        throw new CrudException("用户信息更新失败！");
    }

    /**
     * 根据id删除用户
     * @param id
     * @return int
     */
    @Override
    public boolean deleteUserInfo(int id) {
        if (sysUserInfoMapper.deleteById(id) > 0) {
            return true;
        }

        throw new CrudException("用户信息删除失败！");
    }
}
