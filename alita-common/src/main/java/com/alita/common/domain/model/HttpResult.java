package com.alita.common.domain.model;


import com.alita.common.enums.HttpCode;
import com.fasterxml.jackson.annotation.JsonInclude;

/**
 * 前端统一响应实体
 * JsonInclude: 为Null的字段不进行序列化
 *
 * @author alita
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
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

    /**
     * 自定义成功消息
     * @param msg
     * @return {@link HttpResult}<{@link ?}>
     */
    public static HttpResult<?> success(String msg) {
        HttpResult<?> result = new HttpResult<>();
        result.setCode(HttpCode.SUCCESS.getCode());
        result.setMessage(msg);

        return result;
    }

    /**
     * 自定义成功消息和数据
     * @param msg
     * @param data
     * @return {@link HttpResult}<{@link T}>
     */
    public static <T> HttpResult<T> success(String msg, T data) {
        HttpResult<T> result = new HttpResult<>();
        result.setCode(HttpCode.SUCCESS.getCode());
        result.setMessage(msg);
        result.setData(data);

        return result;
    }

    /**
     * 自定义请求参数异常类的消息
     * @param msg
     * @return {@link HttpResult}<{@link ?}>
     */
    public static HttpResult<?> badRequest(String msg) {
        HttpResult<?> result = new HttpResult<>();
        result.setCode(HttpCode.BAD_REQUEST.getCode());
        result.setMessage(msg);

        return result;
    }

    /**
     * 自定义服务端报错信息
     * @param msg
     * @return {@link HttpResult}<{@link ?}>
     */
    public static HttpResult<?> error(String msg) {
        HttpResult<?> result = new HttpResult<>();
        result.setCode(HttpCode.ERROR.getCode());
        result.setMessage(msg);

        return result;
    }

    /**
     * 使用封装的Http响应枚举
     * @param httpCode
     * @return {@link HttpResult}<{@link ?}>
     */
    public static HttpResult<?> response(HttpCode httpCode) {
        HttpResult<?> result = new HttpResult<>();
        result.setCode(httpCode.getCode());
        result.setMessage(httpCode.getMsg());

        return result;
    }

    /**
     * 使用封装的Http响应枚举和数据
     * @param httpCode
     * @param data
     * @return {@link HttpResult}<{@link T}>
     */
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
