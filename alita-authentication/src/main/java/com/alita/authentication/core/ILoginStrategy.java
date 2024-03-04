package com.alita.authentication.core;


import com.alita.common.domain.model.Login;

/**
 * 登录策略
 * @author alita
 */
public interface ILoginStrategy {

    /**
     * 登录接口
     * @param login
     * @return boolean
     */
    String login(Login login);

}
