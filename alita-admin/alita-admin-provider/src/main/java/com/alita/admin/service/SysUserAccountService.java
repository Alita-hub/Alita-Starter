package com.alita.admin.service;

import com.admin.api.ISysUserAccountService;
import com.alita.admin.mapper.ISysUserAccountMapper;
import com.alita.common.domain.entity.SysUserAccount;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * 用户账号实现
 * @author: alita
 * @date 2024/03/08
 */
@Service
public class SysUserAccountService implements ISysUserAccountService {

    @Resource
    private ISysUserAccountMapper userAccountMapper;

    @Override
    public SysUserAccount queryUserByUsername(String username) {
        // 创建一个QueryWrapper对象，用于构建查询条件
        QueryWrapper<SysUserAccount> queryWrapper = Wrappers.query();

        // 拼接查询条件
        queryWrapper.eq("principal", username);

        // 查询结果
        SysUserAccount sysUserAccount = userAccountMapper.selectOne(queryWrapper);

        return sysUserAccount;
    }
}
