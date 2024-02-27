package com.alita.common.enums;

import com.baomidou.mybatisplus.annotation.IEnum;

import java.util.Arrays;
import java.util.Iterator;

/**
 * 用户认证枚举类型
 * @author alita
 */
public enum LoginType implements IEnum<String> {

    USERNAME("username", "用户名"),
    PHONE("phone", "手机验证码"),
    QQ("qq", "腾讯QQ"),
    WECHAT("wechat", "微信");

    private String value;
    private String desc;

    LoginType(String value, String desc) {
        this.value = value;
        this.desc = desc;
    }

    @Override
    public String getValue() {
        return this.value;
    }

    /**
     * 是否包含该枚举值
     * @param value
     * @return boolean
     */
    public static boolean isContain(String value) {
        Iterator<LoginType> iterator = Arrays.stream(LoginType.values()).iterator();
        while (iterator.hasNext()) {
            LoginType next = iterator.next();
            if (next.value.equals(value)) {
                return true;
            }
        }
        return false;
    }
}
