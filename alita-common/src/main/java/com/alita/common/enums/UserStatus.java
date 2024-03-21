package com.alita.common.enums;

import com.baomidou.mybatisplus.annotation.IEnum;


/**
 * 用户账号状态枚举类型
 * @author alita
 */
public enum UserStatus implements IEnum<String> {

    NORMAL("0","正常"),
    DISABLE("1","停用"),
    LOCKED("2","锁定")
    ;

    private String value;
    private String desc;

    UserStatus(String value, String desc) {
        this.value = value;
        this.desc = desc;
    }

    @Override
    public String getValue() {
        return this.value;
    }
}
