package com.alita.framework.security.events;

import org.springframework.context.event.EventListener;
import org.springframework.security.authentication.event.AbstractAuthenticationFailureEvent;
import org.springframework.security.authentication.event.AuthenticationSuccessEvent;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

/**
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
        // todo

    }

    /**
     * 认证失败事件
     * @param failures
     */
    @EventListener
    public void onFailure(AbstractAuthenticationFailureEvent failures) {
        System.out.println(failures.getException());

        if (failures.getException().equals(UsernameNotFoundException.class))
        {
            System.out.println("用户未找到！");
        }
    }

}
