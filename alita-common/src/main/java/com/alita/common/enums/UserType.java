package com.alita.common.enums;

import com.baomidou.mybatisplus.annotation.IEnum;

/**
 * 用户类型
 * @author: alita
 */
public enum  UserType implements IEnum<String> {

    ADMIN("admin","管理员"),
    NORMAL("normal","普通用户");

    private String value;
    private String desc;

    UserType(String value, String desc) {
        this.value = value;
        this.desc = desc;
    }

    @Override
    public String getValue() {
        return this.value;
    }
}
