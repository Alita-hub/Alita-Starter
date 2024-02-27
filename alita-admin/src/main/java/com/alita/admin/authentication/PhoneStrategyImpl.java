package com.alita.admin.authentication;

import com.alita.common.domain.model.Login;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

/**
 * 手机验证码登录实现类
 * @author alita
 */
@Service("phone")
public class PhoneStrategyImpl implements LoginStrategy{

    @Override
    public boolean login(Login login) {
        return false;
    }
}
