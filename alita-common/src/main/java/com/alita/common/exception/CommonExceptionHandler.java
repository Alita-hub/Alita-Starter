package com.alita.common.exception;

import com.alita.common.domain.model.HttpResponse;
import com.alita.common.exception.core.AppInternalExcepion;
import com.alita.common.exception.core.BadRequestException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

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
    public HttpResponse handleBadRequest(AppInternalExcepion e) {
        log.error(e.getMessage());
        return HttpResponse.badRequest(e.getMessage());
    }

    /**
     * 请求参数错误异常
     * @param e
     * @return {@link HttpResponse}
     */
    @ExceptionHandler
    public HttpResponse handleBadRequest(BadRequestException e) {
        log.error(e.getMessage());
        return HttpResponse.badRequest(e.getMessage());
    }

}
