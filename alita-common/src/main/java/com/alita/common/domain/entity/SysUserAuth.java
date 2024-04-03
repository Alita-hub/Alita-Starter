package com.alita.common.domain.entity;

import com.alita.common.enums.LoginType;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.util.Date;

/**
 * (SysUserAccount)用户认证信息
 *
 * @author alita
 */
@TableName("sys_user_auth")
public class SysUserAuth {

    /**
     * 自增id
     */
    @TableId(type = IdType.AUTO)
    private Integer id;

    /**
     * 用户唯一id
     */
    private Integer userId;

    /**
     * 认证类型
     *（username=用户名认证，phone=手机验证码，qq=第三方，wechat=第三方）
     */
    private LoginType loginType;

    /**
     * 身份标识
     * (手机号/邮箱/用户名或第三方应用的唯一标识)
     */
    private String principal;

    /**
     * 密码凭证
     *（密码/验证码/第三方登录access_token）
     */
    private String credential;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 更新时间
     */
    private Date updateTime;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public LoginType getLoginType() {
        return loginType;
    }

    public void setLoginType(LoginType loginType) {
        this.loginType = loginType;
    }

    public String getPrincipal() {
        return principal;
    }

    public void setPrincipal(String principal) {
        this.principal = principal;
    }

    public String getCredential() {
        return credential;
    }

    public void setCredential(String credential) {
        this.credential = credential;
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
