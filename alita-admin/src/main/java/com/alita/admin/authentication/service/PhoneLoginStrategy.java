package com.alita.admin.authentication.service;

import com.alita.admin.authentication.core.ILoginStrategy;
import com.alita.common.domain.po.LoginPo;
import org.springframework.stereotype.Service;

/**
 * 手机验证码登录实现类
 * @author alita
 */
@Service("phone")
public class PhoneLoginStrategy implements ILoginStrategy {

    @Override
    public String login(LoginPo login) {
        return "false";
    }
}
