package com.alita.admin.authentication;

import com.alita.common.enums.LoginType;
import com.alita.common.exception.core.AppInternalExcepion;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.Map;

/**
 * 登录策略工厂类
 *
 * @author: alita
 */
@Component
public class LoginStrategyFactory {

    /**
     * 自动将LoginStrategy接口的实现类注入到这个Map中, Key为@Qualifier指定的名称
     */
    @Resource
    private Map<String, LoginStrategy> loginStrategyMap;

    /**
     * 根据登录枚举获取对应登录策略实现类
     *
     * @param loginType
     * @return {@link LoginStrategy}
     */
    public LoginStrategy getLoginStrategy(LoginType loginType)
    {
        if (!loginStrategyMap.containsKey(loginType.getValue())) {
            throw new AppInternalExcepion("该登录方式还未实现： " + loginType.getValue());
        }

        return loginStrategyMap.get(loginType.getValue());
    }

}
