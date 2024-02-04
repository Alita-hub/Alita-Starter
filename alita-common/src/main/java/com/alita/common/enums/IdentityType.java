package com.alita.common.enums;

import com.baomidou.mybatisplus.annotation.IEnum;

/**
 * 用户认证枚举类型
 * @author alita
 */
public enum IdentityType implements IEnum<String> {

    USERNAME("username", "用户名"),
    PHONE("phone", "手机验证码"),
    QQ("qq", "腾讯QQ"),
    WECHAT("wechat", "微信");

    private String value;
    private String desc;

    IdentityType(String value, String desc) {
        this.value = value;
        this.desc = desc;
    }

    @Override
    public String getValue() {
        return this.value;
    }
}
