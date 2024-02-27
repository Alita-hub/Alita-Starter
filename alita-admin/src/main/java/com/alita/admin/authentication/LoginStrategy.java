package com.alita.admin.authentication;


import com.alita.common.domain.model.Login;

/**
 * 登录策略
 * @author alita
 */
public interface LoginStrategy {

    /**
     * 登录接口
     * @param login
     * @return boolean
     */
    boolean login(Login login);

}
