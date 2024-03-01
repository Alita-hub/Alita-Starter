package com.alita.common.exception;

import com.alita.common.domain.model.HttpResponse;
import com.alita.common.enums.HttpCode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 认证异常全局处理
 * @author: alita
 */
@ControllerAdvice
@ResponseBody
public class AuthenticationExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(AuthenticationExceptionHandler.class);

    /**
     * 处理账号不存在异常
     * @param ex
     * @return {@link HttpResponse}
     */
    @ExceptionHandler
    public HttpResponse handleUsernameNotFoundException(UsernameNotFoundException ex) {
        log.error(ex.getMessage());
        return HttpResponse.response(HttpCode.USER_NOT_FOUND);
    }

    /**
     * 处理账号被停用异常
     * @param ex
     * @return {@link HttpResponse}
     */
    @ExceptionHandler
    public HttpResponse handleUserDisableException(DisabledException ex) {
        log.error(ex.getMessage());
        return HttpResponse.response(HttpCode.USER_DISABLE);
    }

    /**
     * 处理账号被锁定异常
     * @param ex
     * @return {@link HttpResponse}
     */
    @ExceptionHandler
    public HttpResponse handleUserLockedException(LockedException ex) {
        log.error(ex.getMessage());
        return HttpResponse.response(HttpCode.USER_LOCKED);
    }

    /**
     * 处理用户密码输入错误异常
     * @param ex
     * @return {@link HttpResponse}
     */
    @ExceptionHandler
    public HttpResponse handleBadCredentialException(BadCredentialsException ex) {
        log.error(ex.getMessage());
        return HttpResponse.response(HttpCode.AUTHENTICATION_FAIL);
    }

}
