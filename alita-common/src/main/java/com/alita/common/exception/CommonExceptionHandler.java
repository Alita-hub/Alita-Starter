package com.alita.common.exception;

import com.alita.common.domain.model.HttpResult;
import com.alita.common.enums.HttpCode;
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
     * 捕捉请求参数错误异常
     * @param e
     * @return {@link HttpResult}
     */
    @ExceptionHandler
    public HttpResult handleBadRequest(BadRequestException e) {
        return HttpResult.badRequest(e.getMessage());
    }

}
