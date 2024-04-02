package com.alita.admin.authentication.core;

import com.alita.common.domain.po.LoginPo;
import com.alita.common.enums.LoginType;
import com.alita.common.exception.core.BadRequestException;
import com.alita.framework.security.context.AuthenticationContextHolder;
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
    public String loginHandle(LoginPo login)
    {
        if (!Optional.ofNullable(login.getLoginType()).isPresent() && !LoginType.isContain(login.getLoginType()))
        {
            throw new BadRequestException("暂不支持该登录方式!");
        }

        //获取对应登录策略实现类
        ILoginStrategy loginStrategy = loginStrategyFactory.getLoginStrategy(login.getLoginType());

        //登录验证
        String token = loginStrategy.login(login);

        //清除临时保存的认证信息
        AuthenticationContextHolder.clearContext();

        return token;
    }

}
