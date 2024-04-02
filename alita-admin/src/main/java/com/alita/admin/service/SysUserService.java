package com.alita.admin.service;

import com.alita.admin.mapper.ISysUserMapper;
import com.alita.api.admin.ISysUserAuthService;
import com.alita.api.admin.ISysUserService;
import com.alita.common.domain.entity.SysUser;
import com.alita.common.domain.entity.SysUserAuth;
import com.alita.common.domain.model.HttpPageRequest;
import com.alita.common.domain.po.AddUserPo;
import com.alita.common.enums.LoginType;
import com.alita.common.enums.UserStatus;
import com.alita.common.exception.core.CrudException;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
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

    @Resource
    private ISysUserAuthService sysUserAuthService;

    @Resource
    private PasswordEncoder passwordEncoder;

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
     * 根据用户id获取用户基本信息
     * @param id
     * @return {@link SysUser}
     */
    @Override
    public SysUser getUserInfo(int id) {
        SysUser sysUser = sysUserMapper.selectById(id);
        return sysUser;
    }

    /**
     * 新增用户
     * @param addUserPo
     * @return boolean
     */
    @Override
    public boolean addUser(AddUserPo addUserPo) {
        // 判断用户是否存在
        SysUserAuth userAuth = sysUserAuthService.getUserByprincipal(addUserPo.getPrincipal());
        if (!Optional.ofNullable(userAuth).isPresent())
        {
            SysUser sysUser = new SysUser();
            sysUser.setNickname(addUserPo.getNickname());
            addUserInfo(sysUser);

            SysUserAuth sysUserAuth = new SysUserAuth();
            sysUserAuth.setUserId(sysUser.getId());
            sysUserAuth.setPrincipal(addUserPo.getPrincipal());
            sysUserAuth.setCredential(passwordEncoder.encode(addUserPo.getCredential()));
            sysUserAuth.setLoginType(LoginType.USERNAME);

            sysUserAuthService.saveUserAuth(sysUserAuth);
        } else {

        }

        return false;
    }

    /**
     * 保存用户基本信息
     *
     * @param sysUser
     * @return int
     */
    @Override
    public boolean addUserInfo(SysUser sysUser) {
        if (sysUserMapper.insert(sysUser) > 0) {
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
    public boolean updateUser(SysUser sysUser) {
        if (sysUserMapper.updateById(sysUser) > 0) {
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
    public boolean deleteUser(int id) {
        if (sysUserMapper.deleteById(id) > 0) {
            return true;
        }

        throw new CrudException("用户删除失败！");
    }
}
