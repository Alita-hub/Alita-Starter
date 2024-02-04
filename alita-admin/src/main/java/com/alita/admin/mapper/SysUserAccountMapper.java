package com.alita.admin.mapper;

import com.alita.common.domain.entity.SysUserAccount;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

/**
 * (UserAuth)表数据库访问层
 *
 * @author alita
 */
public interface SysUserAccountMapper extends BaseMapper<SysUserAccount> {

    /**
     * 根据用户名查询账户信息
     * @param username
     * @return {@link SysUserAccount}
     */
    @Select("select * from sys_user_auth")
    SysUserAccount queryUserAuthByUsername(@Param("username") String username);

}
