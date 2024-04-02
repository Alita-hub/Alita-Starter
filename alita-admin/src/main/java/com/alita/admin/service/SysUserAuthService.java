package com.alita.admin.service;

import com.alita.admin.mapper.ISysUserAuthMapper;
import com.alita.api.admin.ISysUserAuthService;
import com.alita.common.domain.entity.SysUserAuth;
import com.alita.common.enums.LoginType;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * 用户认证
 * @author: alita
 * @date 2024/03/08
 */
@Service
public class SysUserAuthService implements ISysUserAuthService {

    @Resource
    private ISysUserAuthMapper userAuthMapper;

    /**
     * 根据用户名查询认证信息
     * @param principal
     * @return {@link SysUserAuth}
     */
    @Override
    public SysUserAuth getUserByprincipal(String principal) {
        // 创建一个QueryWrapper对象，用于构建查询条件
        QueryWrapper<SysUserAuth> queryWrapper = Wrappers.query();

        // 拼接查询条件
        queryWrapper.eq("principal", principal);
        queryWrapper.eq("login_type", LoginType.USERNAME.getValue());

        // 查询结果
        SysUserAuth sysUserAccount = userAuthMapper.selectOne(queryWrapper);

        return sysUserAccount;
    }

    /**
     * 保存用户认证信息
     * @param sysUserAuth
     * @return int
     */
    @Override
    public int saveUserAuth(SysUserAuth sysUserAuth) {
        return userAuthMapper.insert(sysUserAuth);
    }

}
