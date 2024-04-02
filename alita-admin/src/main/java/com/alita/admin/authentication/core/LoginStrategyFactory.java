package com.alita.admin.authentication.core;

import com.alita.common.exception.core.AppInternalException;
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
     * 自动将LoginStrategy接口的实现类注入到这个Map中
     */
    @Resource
    private Map<String, ILoginStrategy> loginStrategyMap;

    /**
     * 根据登录枚举获取对应登录策略实现类
     *
     * @param loginType
     * @return {@link ILoginStrategy}
     */
    public ILoginStrategy getLoginStrategy(String loginType)
    {
        if (!loginStrategyMap.containsKey(loginType)) {
            throw new AppInternalException("该登录方式还未实现： " + loginType);
        }

        return loginStrategyMap.get(loginType);
    }

}
