package com.alita.common.exception;

import com.alita.common.domain.model.HttpResponse;
import com.alita.common.exception.core.AppInternalException;
import com.alita.common.exception.core.BadRequestException;
import com.alita.common.exception.core.CrudException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * 全局异常处理
 * @author: alita
 */
@ControllerAdvice
@ResponseBody
public class CommonExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(CommonExceptionHandler.class);

    /**
     * 系统内部错误异常
     * @param e
     * @return {@link HttpResponse}
     */
    @ExceptionHandler
    public HttpResponse handleAppInternal(AppInternalException e) {
        log.error(e.getMessage());
        return HttpResponse.error(e.getMessage());
    }

    /**
     * 请求参数错误异常
     * @param e
     * @return {@link HttpResponse}
     */
    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public HttpResponse handleBadRequest(BadRequestException e) {
        log.error(e.getMessage());
        return HttpResponse.badRequest(e.getMessage());
    }

    /**
     * 增删改查错误异常
     * @param e
     * @return {@link HttpResponse}
     */
    @ExceptionHandler
    public HttpResponse handleCrud(CrudException e) {
        log.error(e.getMessage());
        return HttpResponse.error(e.getMessage());
    }

}
