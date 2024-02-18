package com.alita.common.exception;

import com.alita.common.domain.model.HttpResult;
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
 * 认证异常响应
 * @author: alita
 */
@ControllerAdvice
@ResponseBody
public class AuthenticationExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(AuthenticationExceptionHandler.class);

    @ExceptionHandler
    public HttpResult handleUsernameNotFoundException(UsernameNotFoundException ex) {
        log.error(ex.getMessage());
        return HttpResult.response(HttpCode.USER_NOT_FOUND);
    }

    @ExceptionHandler
    public HttpResult handleUserDisableException(DisabledException ex) {
        log.error(ex.getMessage());
        return HttpResult.response(HttpCode.USER_DISABLE);
    }

    @ExceptionHandler
    public HttpResult handleUserLockedException(LockedException ex) {
        log.error(ex.getMessage());
        return HttpResult.response(HttpCode.USER_LOCKED);
    }

    @ExceptionHandler
    public HttpResult handleBadCredentialException(BadCredentialsException ex) {
        log.error(ex.getMessage());
        return HttpResult.response(HttpCode.AUTHENTICATION_FAIL);
    }

}
