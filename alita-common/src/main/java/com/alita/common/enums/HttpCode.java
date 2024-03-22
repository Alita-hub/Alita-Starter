package com.alita.common.enums;

/**
 * Http 状态码定义
 * 标准编码：
 *     2xx 请求成功
 *     4xx 客户端错误，不影响服务可用性
 *     5xx 服务端错误，影响服务可用性
 * 自定义系统编码：
 *     601-620 用户认证
 *     621-630 JWT令牌
 *     631-650 系统功能
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
    UNAUTHORIZED(401, "未经身份认证的请求！"),

    /**
     * 服务端错误
     */
    ERROR(500),

    SELECT_SUCCESS(SUCCESS.code, "查询成功！"),
    ADD_SUCCESS(SUCCESS.code,"添加成功！"),
    UPDATE_SUCCESS(SUCCESS.code, "更新成功！"),
    DELETE_SUCCESS(SUCCESS.code, "删除成功！"),

    /**
    * 用户认证（601 - 620）
    */
    AUTHENTICATION_SUCCESS(SUCCESS.code, "认证成功！"),
    AUTHENTICATION_FAIL(BAD_REQUEST.code, "认证失败！"),
    USERNAME_NOT_FOUND(601, "账号不存在！"),
    USER_DISABLE(602, "账号被停用！"),
    USER_LOCKED(603, "账号被锁定！"),
    USER_NOT_FOUND(604, "用户不存在！"),

    /**
     * JWT令牌（621 - 630）
     */
    JWT_EXPIRED(621, "令牌过期！"),
    JWT_UNSUPPORTED(622, "无效的令牌！"),
    JWT_MAL_FORMED(623, "令牌格式错误！"),
    JWT_WRONG_SIGNATURE(624, "令牌签名错误！"),
    JWT_ILLEGAL_ARGUMENT(625, "令牌解析错误！")

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
