package com.alita.framework.security.event;

import com.alita.common.domain.entity.SysUserAccount;
import com.alita.common.enums.UserType;
import org.springframework.context.event.EventListener;
import org.springframework.security.authentication.event.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.stereotype.Component;

/**
 * 认证事件处理
 * @author: alita
 */
@Component
public class AuthenticationEvents {

    private final RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

    /**
     * 认证成功事件
     * @param success
     */
    @EventListener
    public void onSuccess(AuthenticationSuccessEvent success) {
        Authentication authentication = success.getAuthentication();
        SysUserAccount user = (SysUserAccount) authentication.getPrincipal();

        if (user.getUserType().equals(UserType.ADMIN)) {
            //管理员跳转到后台主页
            //redirectStrategy.sendRedirect(request, response, "/authentication/loginPage");
        }

        if (user.getUserType().equals(UserType.NORMAL)) {
            //普通用户跳转到网站首页
        }
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
