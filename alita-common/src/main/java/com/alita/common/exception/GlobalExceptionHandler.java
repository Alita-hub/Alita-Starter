package com.alita.common.exception;

import com.alita.common.domain.model.HttpResult;
import com.alita.common.enums.HttpCode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 全局异常处理
 * @author: alita
 */
@ControllerAdvice
@ResponseBody
public class GlobalExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler
    public HttpResult userNotFound(UsernameNotFoundException e) {
        log.error("账号不存在", e);
        return HttpResult.response(HttpCode.USER_NOT_FOUND);
    }

}
