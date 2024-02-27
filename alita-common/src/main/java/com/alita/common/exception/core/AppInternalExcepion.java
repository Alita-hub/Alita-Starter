package com.alita.common.exception.core;

/**
 * 系统内部通用异常
 *
 * @author: alita
 */
public class AppInternalExcepion extends RuntimeException{

    public AppInternalExcepion() {
        super();
    }

    public AppInternalExcepion(String message) {
        super(message);
    }

    public AppInternalExcepion(String message, Throwable cause) {
        super(message, cause);
    }

    public AppInternalExcepion(Throwable cause) {
        super(cause);
    }

    protected AppInternalExcepion(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
