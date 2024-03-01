package com.alita.common.domain.model;


import com.alita.common.enums.HttpCode;
import com.fasterxml.jackson.annotation.JsonInclude;

/**
 * 前端统一响应模型
 * JsonInclude: 为Null的字段不进行序列化
 *
 * @author alita
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class HttpResponse<T> {

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
     * @return {@link HttpResponse}<{@link ?}>
     */
    public static HttpResponse<?> success(String msg) {
        HttpResponse<?> result = new HttpResponse<>();
        result.setCode(HttpCode.SUCCESS.getCode());
        result.setMessage(msg);

        return result;
    }

    /**
     * 自定义成功消息和数据
     * @param msg
     * @param data
     * @return {@link HttpResponse}<{@link T}>
     */
    public static <T> HttpResponse<T> success(String msg, T data) {
        HttpResponse<T> result = new HttpResponse<>();
        result.setCode(HttpCode.SUCCESS.getCode());
        result.setMessage(msg);
        result.setData(data);

        return result;
    }

    /**
     * 自定义请求参数异常类的消息
     * @param msg
     * @return {@link HttpResponse}<{@link ?}>
     */
    public static HttpResponse<?> badRequest(String msg) {
        HttpResponse<?> result = new HttpResponse<>();
        result.setCode(HttpCode.BAD_REQUEST.getCode());
        result.setMessage(msg);

        return result;
    }

    /**
     * 自定义服务端报错信息
     * @param msg
     * @return {@link HttpResponse}<{@link ?}>
     */
    public static HttpResponse<?> error(String msg) {
        HttpResponse<?> result = new HttpResponse<>();
        result.setCode(HttpCode.ERROR.getCode());
        result.setMessage(msg);

        return result;
    }

    /**
     * 使用封装的Http响应枚举
     * @param httpCode
     * @return {@link HttpResponse}<{@link ?}>
     */
    public static HttpResponse<?> response(HttpCode httpCode) {
        HttpResponse<?> result = new HttpResponse<>();
        result.setCode(httpCode.getCode());
        result.setMessage(httpCode.getMsg());

        return result;
    }

    /**
     * 使用封装的Http响应枚举和数据
     * @param httpCode
     * @param data
     * @return {@link HttpResponse}<{@link T}>
     */
    public static <T> HttpResponse<T> response(HttpCode httpCode, T data) {
        HttpResponse<T> result = new HttpResponse<T>();
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
