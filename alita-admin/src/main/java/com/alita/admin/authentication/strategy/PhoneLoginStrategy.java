package com.alita.admin.authentication.strategy;

import com.alita.admin.authentication.core.ILoginStrategy;
import com.alita.common.domain.vo.LoginVo;
import org.springframework.stereotype.Service;

/**
 * 手机验证码登录实现类
 * @author alita
 */
@Service("phone")
public class PhoneLoginStrategy implements ILoginStrategy {

    @Override
    public String login(LoginVo login) {
        return "false";
    }
}
