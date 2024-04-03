package com.alita.common.exception.data;

/**
 * 数据已存在异常
 * @author: alita
 */
public class DataExistedException extends RuntimeException {
    public DataExistedException() {
        super();
    }

    public DataExistedException(String message) {
        super(message);
    }

    public DataExistedException(String message, Throwable cause) {
        super(message, cause);
    }

    public DataExistedException(Throwable cause) {
        super(cause);
    }

    protected DataExistedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
