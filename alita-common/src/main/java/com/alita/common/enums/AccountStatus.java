package com.alita.common.enums;

import com.baomidou.mybatisplus.annotation.EnumValue;
import com.baomidou.mybatisplus.annotation.IEnum;


/**
 * 用户账号状态枚举类型
 * @author alita
 */
public enum AccountStatus implements IEnum<String> {

    NORMAL("0","正常"),
    LOCKED("1","停用");

    private String value;
    private String desc;

    AccountStatus(String value, String desc) {
        this.value = value;
        this.desc = desc;
    }

    @Override
    public String getValue() {
        return this.value;
    }
}
