package com.alita.common.exception;

import com.alita.common.domain.model.HttpResponse;
import com.alita.common.enums.HttpCode;
import com.alita.common.exception.core.AppInternalException;
import com.alita.common.exception.data.DataExistedException;
import com.alita.common.exception.data.DataNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 数据异常全局处理
 * @author: alita
 */
@ControllerAdvice
@ResponseBody
public class DataExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(DataExceptionHandler.class);

    /**
     * 数据已存在
     * @param e
     * @return {@link HttpResponse}
     */
    @ExceptionHandler
    public HttpResponse handleDataExisted(DataExistedException e) {
        log.error(e.getMessage());
        return HttpResponse.error(e.getMessage());
    }

}
