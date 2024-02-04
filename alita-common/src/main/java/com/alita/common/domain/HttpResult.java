package com.alita.common.domain;


import com.alita.common.enums.HttpCode;
import org.apache.ibatis.jdbc.Null;

/**
 * Http请求响应实体
 *
 * @author: alita
 */
public class HttpResult<T> {

    /**
     * 响应码
     */
    private int code;

    /**
     * 响应信息
     */
    private String message;

    /**
     * 返回结果
     */
    private T data;

    public static HttpResult<?> response(HttpCode httpCode) {
        HttpResult<?> result = new HttpResult<>();
        result.setCode(httpCode.getCode());
        result.setMessage(httpCode.getMsg());

        return result;
    }

    public static <T> HttpResult<T> response(HttpCode httpCode, T data) {
        HttpResult<T> result = new HttpResult<T>();
        result.setCode(httpCode.getCode());
        result.setMessage(httpCode.getMsg());
        result.setData(data);
        return result;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
