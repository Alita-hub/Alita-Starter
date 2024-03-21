package com.alita.common.domain.model;

import com.alita.common.enums.HttpCode;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import java.util.Collection;

/**
 * 分页数据响应模型
 *
 * @author: alita
 */
public class HttpPageResponse {

    /**
     * 响应码
     */
    private int code;

    /**
     * 响应信息
     */
    private String message;

    /**
     * 总条数
     */
    private long total;

    /**
     * 返回结果
     */
    private Collection<?> data;

    /**
     * 分页数据响应封装
     *
     * @param page
     * @return {@link HttpPageResponse}
     */
    public static HttpPageResponse response(Page<?> page) {
        HttpPageResponse httpPageResult = new HttpPageResponse();
        httpPageResult.setCode(HttpCode.SELECT_SUCCESS.getCode());
        httpPageResult.setMessage(HttpCode.SELECT_SUCCESS.getMsg());
        httpPageResult.setTotal(page.getTotal());
        httpPageResult.setData(page.getRecords());

        return httpPageResult;
    }

    /**
     * 分页数据自定义封装
     *
     * @param total
     * @param data
     * @return {@link HttpPageResponse}
     */
    public static HttpPageResponse response(long total, Collection data) {
        HttpPageResponse httpPageResult = new HttpPageResponse();
        httpPageResult.setCode(HttpCode.SELECT_SUCCESS.getCode());
        httpPageResult.setMessage(HttpCode.SELECT_SUCCESS.getMsg());
        httpPageResult.setTotal(total);
        httpPageResult.setData(data);

        return httpPageResult;
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

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public Collection<?> getData() {
        return data;
    }

    public void setData(Collection<?> data) {
        this.data = data;
    }
}
