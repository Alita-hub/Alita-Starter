package com.alita.framework.security.event;

import org.springframework.context.event.EventListener;
import org.springframework.security.authentication.event.*;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.stereotype.Component;

/**
 * 认证事件处理
 * @author: alita
 */
@Component
public class AuthenticationEvents {

    /**
     * 认证成功事件
     * @param success
     */
    @EventListener
    public void onSuccess(AuthenticationSuccessEvent success) {

    }

    /**
     * 认证失败事件
     * @param failures
     */
    @EventListener
    public void onFailure(AbstractAuthenticationFailureEvent failures) {

        // 用户名或密码错误
        if (failures instanceof AuthenticationFailureBadCredentialsEvent)
        {
            // todo
        }
        // 密码过期
        if (failures instanceof AuthenticationFailureCredentialsExpiredEvent)
        {
            // todo
        }
        // 账户禁用
        if (failures instanceof AuthenticationFailureDisabledEvent)
        {
            // todo
        }
        // 账户过期
        if (failures instanceof AuthenticationFailureExpiredEvent)
        {
            // todo
        }
        // 账户锁定
        if (failures instanceof AuthenticationFailureLockedEvent)
        {
            // todo
        }

    }

}
