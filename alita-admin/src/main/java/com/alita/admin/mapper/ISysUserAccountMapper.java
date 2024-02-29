package com.alita.admin.mapper;

import com.alita.common.domain.entity.SysUserAccount;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

/**
 * (SysUserAccount)表数据库访问层
 *
 * @author alita
 */
public interface ISysUserAccountMapper extends BaseMapper<SysUserAccount> {

    /**
     * 根据用户名查询账户信息
     * @param username
     * @return {@link SysUserAccount}
     */
    @Select("select * from sys_user_account where principal = #{username}")
    SysUserAccount queryUserByUsername(@Param("username") String username);


}