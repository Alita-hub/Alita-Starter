package com.alita.common.convert;

import com.alita.common.enums.UserStatus;
import org.apache.commons.lang3.StringUtils;
import org.springframework.core.convert.converter.Converter;

/**
 * UserStatus数据转换器
 * @author: alita
 */
public class UserStatusConvert implements Converter<String, UserStatus> {

    @Override
    public UserStatus convert(String source) {
        if (StringUtils.isEmpty(source)) {
            return null;
        }

        return UserStatus.getType(source);
    }

}
