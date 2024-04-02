package com.alita.common.exception.core;

/**
 * 系统内部通用异常
 *
 * @author: alita
 */
public class AppInternalException extends RuntimeException {

    public AppInternalException() {
        super();
    }

    public AppInternalException(String message) {
        super(message);
    }

    public AppInternalException(String message, Throwable cause) {
        super(message, cause);
    }

    public AppInternalException(Throwable cause) {
        super(cause);
    }

    protected AppInternalException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
