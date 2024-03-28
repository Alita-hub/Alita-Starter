package com.alita.admin.service;

import com.alita.admin.mapper.ISysUserMapper;
import com.alita.api.admin.ISysUserService;
import com.alita.common.domain.entity.SysUser;
import com.alita.common.domain.model.HttpPageRequest;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Optional;

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

        if (Optional.ofNullable(sysUser).isPresent()) {
            if (!StringUtils.isEmpty(sysUser.getNickname())) {
                queryWrapper.eq("nickname", sysUser.getNickname());
            }
            if (Optional.ofNullable(sysUser.getStatus()).isPresent()) {
                queryWrapper.eq("status", sysUser.getStatus());
            }
        }

        //分页构造
        Page<SysUser> page = new Page(request.getPageNum(), request.getPageSize());
        //分页结果
        Page<SysUser> sysUsers = sysUserMapper.selectPage(page, queryWrapper);

        return sysUsers;
    }


    /**
     * 根据用户id获取用户
     * @param id
     * @return {@link SysUser}
     */
    @Override
    public SysUser getUserById(int id) {
        SysUser sysUser = sysUserMapper.selectById(id);
        return sysUser;
    }

    /**
     * 保存用户基本信息
     * @param sysUser
     * @return int
     */
    @Override
    public int saveUser(SysUser sysUser) {
        return sysUserMapper.insert(sysUser);
    }

}
