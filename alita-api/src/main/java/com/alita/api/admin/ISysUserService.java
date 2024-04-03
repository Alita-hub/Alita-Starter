package com.alita.api.admin;

import com.alita.common.domain.entity.SysUserInfo;
import com.alita.common.domain.model.HttpPageRequest;
import com.alita.common.domain.vo.SysUserVo;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

/**
 *
 * @author alita
 * @date 2024/04/03
 */
public interface ISysUserService {

    /**
     * 条件分页获取用户列表
     *
     * @param request
     * @return {@link Page}<{@link SysUserInfo}>
     */
    Page<SysUserInfo> getUserList(HttpPageRequest<SysUserInfo> request);


    /**
     * 新增用户
     * @param sysUserVo
     * @return boolean
     */
    boolean addUser(SysUserVo sysUserVo);


    /**
     * 更新用户
     * @param sysUserVo
     * @return boolean
     */
    boolean updateUser(SysUserVo sysUserVo);


    /**
     * 删除用户
     * @param userId
     * @return boolean
     */
    boolean deleteUser(int userId);

}
