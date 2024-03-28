package com.alita.common.exception;

import com.alita.common.domain.model.HttpResponse;
import com.alita.common.enums.HttpCode;
import com.alita.common.exception.authentication.CustomAuthenticationException;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;


/**
 * 认证异常全局处理
 * 统一响应401状态码
 * @author: alita
 */
@ControllerAdvice
@ResponseBody
@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class AuthenticationExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(AuthenticationExceptionHandler.class);

    /**
     * 处理自定义认证异常
     * @param ex
     * @return {@link HttpResponse}
     */
    @ExceptionHandler
    public HttpResponse handleUserNotFound(CustomAuthenticationException ex) {
        log.error(ex.getMessage());
        return HttpResponse.response(HttpCode.USER_NOT_FOUND);
    }

    /**
     * 处理账号不存在异常
     * @param ex
     * @return {@link HttpResponse}
     */
    @ExceptionHandler
    public HttpResponse handleUsernameNotFoundException(UsernameNotFoundException ex) {
        log.error(ex.getMessage());
        return HttpResponse.response(HttpCode.USERNAME_NOT_FOUND);
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

    /***    JWT令牌异常    ***/

    /**
     * 处理令牌过期
     * @param ex
     * @return {@link HttpResponse}
     */
    @ExceptionHandler
    public HttpResponse handleExpiredJwtException(ExpiredJwtException ex) {
        log.error(ex.getMessage());
        return HttpResponse.response(HttpCode.JWT_EXPIRED);
    }

    /**
     * 处理无效的令牌
     * @param ex
     * @return {@link HttpResponse}
     */
    @ExceptionHandler
    public HttpResponse handleUnsupportedJwtException(UnsupportedJwtException ex) {
        log.error(ex.getMessage());
        return HttpResponse.response(HttpCode.JWT_UNSUPPORTED);
    }

    /**
     * 处理令牌格式错误
     * @param ex
     * @return {@link HttpResponse}
     */
    @ExceptionHandler
    public HttpResponse handleMalformedJwtException(MalformedJwtException ex) {
        log.error(ex.getMessage());
        return HttpResponse.response(HttpCode.JWT_MAL_FORMED);
    }


    /**
     * 处理令牌签名错误
     * @param ex
     * @return {@link HttpResponse}
     */
    @ExceptionHandler
    public HttpResponse handleSignatureException(SignatureException ex) {
        log.error(ex.getMessage());
        return HttpResponse.response(HttpCode.JWT_WRONG_SIGNATURE);
    }

    /**
     * 处理令牌解析错误
     * @param ex
     * @return {@link HttpResponse}
     */
    @ExceptionHandler
    public HttpResponse handleIllegalArgumentException(IllegalArgumentException ex) {
        log.error(ex.getMessage());
        return HttpResponse.response(HttpCode.JWT_ILLEGAL_ARGUMENT);
    }

}
