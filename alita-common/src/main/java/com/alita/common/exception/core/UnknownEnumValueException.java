package com.alita.common.exception.core;

/**
 * 未知的枚举值异常
 * @author: alita
 */
public class UnknownEnumValueException extends RuntimeException {

    public UnknownEnumValueException() {
        super();
    }

    public UnknownEnumValueException(String message) {
        super(message);
    }

    public UnknownEnumValueException(String message, Throwable cause) {
        super(message, cause);
    }

    public UnknownEnumValueException(Throwable cause) {
        super(cause);
    }

    protected UnknownEnumValueException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
