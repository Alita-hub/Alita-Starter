package com.alita.admin.authentication.core;


import com.alita.common.domain.po.LoginPo;

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
    String login(LoginPo login);

}
