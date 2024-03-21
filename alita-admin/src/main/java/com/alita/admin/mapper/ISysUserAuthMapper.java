package com.alita.admin.mapper;

import com.alita.common.domain.entity.SysUserAuth;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

/**
 * (SysUserAccount)表数据库访问层
 *
 * @author alita
 */
public interface ISysUserAuthMapper extends BaseMapper<SysUserAuth> {

    /**
     * 根据用户名查询账户信息
     * @param username
     * @return {@link SysUserAuth}
     */
    @Select("select * from sys_user_account where principal = #{username}")
    SysUserAuth queryUserByUsername(@Param("username") String username);


}
