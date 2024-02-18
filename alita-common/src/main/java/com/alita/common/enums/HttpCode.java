package com.alita.common.enums;

/**
 * Http 状态码定义
 * 标准编码：
 *     2xx 请求成功
 *     4xx 客户端错误，不影响服务可用性
 *     5xx 服务端错误，影响服务可用性
 * 自定义系统编码：
 *
 *
 * @author: alita
 */
public enum HttpCode {

    /**
     * 响应成功
     */
    SUCCESS(200),

    /**
     * 客户端错误
     */
    BAD_REQUEST(400),

    /**
     * 服务端错误
     */
    ERROR(500),

    SELECT_SUCCESS(SUCCESS.code, "查询成功！"),
    ADD_SUCCESS(SUCCESS.code,"添加成功！"),
    UPDATE_SUCCESS(SUCCESS.code, "更新成功！"),
    DELETE_SUCCESS(SUCCESS.code, "删除成功！"),


    SELECT_FAIL(ERROR.code, "查询失败！"),
    ADD_FAIL(ERROR.code, "添加失败！"),
    UPDATE_FAIL(ERROR.code, "更新失败！"),
    DELETE_FAIL(ERROR.code, "删除失败！"),


    /**
    * 用户认证
    */
    AUTHENTICATION_SUCCESS(SUCCESS.code, "认证成功！"),
    AUTHENTICATION_FAIL(BAD_REQUEST.code, "认证失败！"),
    USER_NOT_FOUND(601, "账号不存在！"),
    USER_DISABLE(602, "账号被停用！"),
    USER_LOCKED(603, "账号被锁定！"),

    ;

    private Integer code;

    private String msg;

    HttpCode(Integer code) {
        this.code = code;
    }

    HttpCode(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public Integer getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }

}
