package com.alita.common.exception;

import com.alita.common.domain.model.HttpResponse;
import com.alita.common.enums.HttpCode;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Jwt令牌异常处理
 *
 * @author: alita
 */
@ControllerAdvice
@ResponseBody
public class JwtExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(JwtExceptionHandler.class);

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
