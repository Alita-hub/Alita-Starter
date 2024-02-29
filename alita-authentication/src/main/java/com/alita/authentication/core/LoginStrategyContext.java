package com.alita.authentication.core;

import com.alita.common.domain.model.Login;
import com.alita.common.enums.LoginType;
import com.alita.common.exception.core.BadRequestException;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.Optional;

/**
 * 登录策略上下文
 *
 * @author: alita
 */
@Component
public class LoginStrategyContext {

    @Resource
    private LoginStrategyFactory loginStrategyFactory;

    /**
     * 登录处理
     * @param login
     * @return boolean
     */
    public boolean loginHandle(Login login)
    {
        if (!Optional.ofNullable(login.getLoginType()).isPresent() && !LoginType.isContain(login.getLoginType()))
        {
            throw new BadRequestException("暂不支持该登录方式!");
        }

        //获取对应登录策略实现类
        ILoginStrategy loginStrategy = loginStrategyFactory.getLoginStrategy(login.getLoginType());

        //登录验证
        boolean isLogin = loginStrategy.login(login);

        //登录后处理
        // todo

        return isLogin;
    }

}
