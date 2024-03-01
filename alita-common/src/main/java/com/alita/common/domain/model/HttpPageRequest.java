package com.alita.common.domain.model;

/**
 * 分页数据请求模型
 *
 * @author: alita
 */
public class HttpPageRequest<T> {

    /**
     * 每页数量
     */
    private int pageSize;

    /**
     * 页码
     */
    private int pageNum;

    /**
     * 排序字段
     */
    private String orderBy;

    /**
     * 排序算法： asc(由小到大)，desc(由大到小)
     */
    private String order;

    /**
     * 实体参数
     */
    private T params;

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getPageNum() {
        return pageNum;
    }

    public void setPageNum(int pageNum) {
        this.pageNum = pageNum;
    }

    public String getOrderBy() {
        return orderBy;
    }

    public void setOrderBy(String orderBy) {
        this.orderBy = orderBy;
    }

    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
    }

    public T getParams() {
        return params;
    }

    public void setParams(T params) {
        this.params = params;
    }
}
