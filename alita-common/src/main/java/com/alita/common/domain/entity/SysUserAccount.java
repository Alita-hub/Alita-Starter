package com.alita.common.domain.entity;

import com.alita.common.enums.AccountStatus;
import com.alita.common.enums.IdentityType;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;

/**
 * (SysUserAccount)用户账号实体类
 *
 * @author alita
 */
@TableName("sys_user_account")
public class SysUserAccount implements UserDetails {

    /**
     * 自增id
     */
    @TableId(type = IdType.AUTO)
    private Integer id;

    /**
     * 认证类型
     *（username=用户名认证，phone=手机验证码，qq=第三方，wechat=第三方）
     */
    private IdentityType identityType;

    /**
     * 身份标识
     * (手机号/邮箱/用户名或第三方应用的唯一标识)
     */
    private String identity;

    /**
     * 密码凭证
     *（密码/验证码/第三方登录access_token）
     */
    private String credential;

    /**
     * 账号状态（0=正常，1=停用）
     */
    private AccountStatus status;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 更新时间
     */
    private Date updateTime;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return this.credential;
    }

    @Override
    public String getUsername() {
        return this.identity;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        if (status == AccountStatus.LOCKED)
        {
            return true;
        }

        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public IdentityType getIdentityType() {
        return identityType;
    }

    public void setIdentityType(IdentityType identityType) {
        this.identityType = identityType;
    }

    public String getIdentity() {
        return identity;
    }

    public void setIdentity(String identity) {
        this.identity = identity;
    }

    public String getCredential() {
        return credential;
    }

    public void setCredential(String credential) {
        this.credential = credential;
    }

    public AccountStatus getStatus() {
        return status;
    }

    public void setStatus(AccountStatus status) {
        this.status = status;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

}
