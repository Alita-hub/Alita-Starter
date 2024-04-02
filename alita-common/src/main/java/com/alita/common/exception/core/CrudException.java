package com.alita.common.exception.core;

/**
 * 增删改查功能异常
 *
 * @author: alita
 */
public class CrudException extends RuntimeException {
    public CrudException() {
        super();
    }

    public CrudException(String message) {
        super(message);
    }

    public CrudException(String message, Throwable cause) {
        super(message, cause);
    }

    public CrudException(Throwable cause) {
        super(cause);
    }

    protected CrudException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
