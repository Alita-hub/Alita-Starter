package com.alita.framework.security.context;

import org.springframework.security.core.Authentication;
import org.springframework.util.Assert;

/**
 * 保存用户登录信息
 *
 * @author alita
 */
public class AuthenticationContextHolder {

    private static final ThreadLocal<Authentication> contextHolder = new ThreadLocal<>();

    public static void clearContext() {
        contextHolder.remove();
    }

    public static Authentication getContext() {
        Authentication ctx = contextHolder.get();
        return ctx;
    }

    public static void setContext(Authentication context) {
        Assert.notNull(context, "Authentication 实例不允许为Null！");
        contextHolder.set(context);
    }

}
