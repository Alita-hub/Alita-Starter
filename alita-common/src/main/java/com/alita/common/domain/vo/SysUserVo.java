package com.alita.common.domain.vo;

import com.alita.common.enums.UserStatus;
import org.springframework.web.multipart.MultipartFile;

/**
 * 新增用户请求实体
 * @author alita
 */
public class SysUserVo {
    
    /**
     * 头像
     */
    private MultipartFile avatar;

    /**
     * 姓名
     */
    private String name;

    /**
     * 账号
     */
    private String principal;

    /**
     * 密码
     */
    private String credential;

    /**
     * 用户状态
     */
    private UserStatus status;

    /**
     * 手机号
     */
    private String phone;

    /**
     * 邮箱
     */
    private String email;

    public MultipartFile getAvatar() {
        return avatar;
    }

    public void setAvatar(MultipartFile avatar) {
        this.avatar = avatar;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public UserStatus getStatus() {
        return status;
    }

    public void setStatus(UserStatus status) {
        this.status = status;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
