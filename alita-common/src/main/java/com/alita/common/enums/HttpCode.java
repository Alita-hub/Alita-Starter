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

    SUCCESS(200, "请求成功！"),
    SELECT_SUCCESS(200, "查询成功！"),
    UPDATE_SUCCESS(200, "更新成功！"),
    DELETE_SUCCESS(200, "删除成功！"),

    FAIL(500, "请求失败！"),
    SELECT_FAIL(500, "查询失败！"),
    UPDATE_FAIL(500, "更新失败！"),
    DELETE_FAIL(500, "删除失败！"),

    /**
    * 用户认证
    */
    USER_NOT_FOUND(5001, "账号不存在！"),
    USER_DISABLE(5002, "账号被停用！"),
    USER_LOCKED(5003, "账号被锁定！"),
    USER_INVALID(5004, "账号不合法！")

    ;

    private Integer code;

    private String msg;

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
