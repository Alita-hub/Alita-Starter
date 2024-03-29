package com.alita.common.enums;

import com.alita.common.exception.core.UnknownEnumValueException;
import com.baomidou.mybatisplus.annotation.IEnum;


/**
 * 用户状态枚举
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

    public static UserStatus getType(String value) {
        if (null == value) {
            return null;
        }

        for (UserStatus item : UserStatus.values()) {
            if (value.equals(item.getValue())) {
                return item;
            }
        }

        throw new UnknownEnumValueException("UserStatus: unknown value: " + value);
    }
}
