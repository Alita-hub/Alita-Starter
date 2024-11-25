package com.alita.api.admin;

import com.alita.common.domain.entity.SysUserInfo;
import com.alita.common.domain.vo.SysUserVo;
import com.baomidou.mybatisplus.extension.service.IService;


/**
 * 用户基本信息接口
 * @author alita
 * @date 2024/03/21
 */
public interface ISysUserInfoService extends IService<SysUserInfo> {

    /**
     * 根据用户id获取用户基本信息
     * @param id
     * @return {@link SysUserInfo}
     */
    SysUserInfo getUserInfo(int id);


    /**
     * 新增用户基本信息
     * @param sysUserInfo
     * @return int
     */
    boolean addUserInfo(SysUserInfo sysUserInfo);


    /**
     * 更新用户基本信息
     * @param sysUserInfo
     * @return int
     */
    boolean updateUserInfo(SysUserInfo sysUserInfo);


    /**
     * 根据id删除用户基本信息
     * @param id
     * @return int
     */
    boolean deleteUserInfo(int id);

}
