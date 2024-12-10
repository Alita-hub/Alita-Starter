package com.alita.admin.service;

import com.alita.admin.mapper.SysUserInfoMapper;
import com.alita.api.admin.ISysUserService;
import com.alita.common.domain.entity.SysUserAuth;
import com.alita.common.domain.entity.SysUserInfo;
import com.alita.common.domain.model.HttpPageRequest;
import com.alita.common.domain.vo.SysUserVo;
import com.alita.common.enums.LoginType;
import com.alita.common.exception.data.DataExistedException;
import com.alita.common.util.file.FileManager;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.Optional;

/**
 * 用户管理
 * @author: alita
 */
@Service
public class SysUserService implements ISysUserService {

    @Resource
    private SysUserInfoMapper sysUserInfoMapper;

    @Resource
    private SysUserAuthService sysUserAuthService;

    @Resource
    private SysUserInfoService sysUserInfoService;

    @Resource
    private PasswordEncoder passwordEncoder;

    @Resource
    private FileManager fileManager;

    /**
     * 条件分页查询用户列表
     *
     * @param request
     * @return {@link Page}<{@link SysUserInfo}>
     */
    @Override
    public Page<SysUserInfo> getUserList(HttpPageRequest<SysUserInfo> request) {
        // 实体参数
        SysUserInfo sysUser = request.getParams();
        // 创建一个QueryWrapper对象，用于构建查询条件
        QueryWrapper<SysUserInfo> queryWrapper = Wrappers.query();

        if (Optional.ofNullable(sysUser).isPresent()) {
            if (!StringUtils.isEmpty(sysUser.getName())) {
                queryWrapper.eq("nickname", sysUser.getName());
            }
            if (Optional.ofNullable(sysUser.getStatus()).isPresent()) {
                queryWrapper.eq("status", sysUser.getStatus());
            }
        }

        //分页构造
        Page<SysUserInfo> page = new Page(request.getPageNum(), request.getPageSize());
        //分页结果
        Page<SysUserInfo> sysUsers = sysUserInfoMapper.selectPage(page, queryWrapper);

        return sysUsers;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean addUser(SysUserVo sysUserVo) {
        // 判断用户是否存在
        SysUserAuth userAuth = sysUserAuthService.getUserByprincipal(sysUserVo.getPrincipal());
        if (!Optional.ofNullable(userAuth).isPresent())
        {
            // 保存用户基本信息
            SysUserInfo sysUser = new SysUserInfo();
            sysUser.setName(sysUserVo.getName());
            sysUser.setAvatar(fileManager.upload(sysUserVo.getAvatar()));
            sysUser.setStatus(sysUserVo.getStatus());
            sysUser.setEmail(sysUserVo.getEmail());
            sysUser.setPhone(sysUserVo.getPhone());
            sysUserInfoService.addUserInfo(sysUser);

            // 保存用户认证信息
            SysUserAuth sysUserAuth = new SysUserAuth();
            sysUserAuth.setUserId(sysUser.getId());
            sysUserAuth.setPrincipal(sysUserVo.getPrincipal());
            sysUserAuth.setCredential(passwordEncoder.encode(sysUserVo.getCredential()));
            sysUserAuth.setLoginType(LoginType.USERNAME);

            sysUserAuthService.saveUserAuth(sysUserAuth);
        } else {
            throw new DataExistedException("登录账号已存在！");
        }

        return false;
    }

    @Override
    public boolean updateUser(SysUserVo sysUserVo) {
        return false;
    }

    @Override
    public boolean deleteUser(int userId) {
        return false;
    }
}
