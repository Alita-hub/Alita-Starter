package com.alita.common.domain.entity;

import com.baomidou.mybatisplus.annotation.TableName;

import java.util.Date;

/**
 * (SysConfig)实体类
 *
 * @author alita
 */
@TableName("sys_config")
public class SysConfig {

    private Integer id;

    /**
     * 配置组
     */
    private String configGroup;

    /**
     * 配置名称
     */
    private String configName;

    /**
     * 键
     */
    private String configKey;

    /**
     * 值
     */
    private String configValue;

    /**
     * 配置状态：0=正常，1=禁用
     */
    private String configStatus;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 更新时间
     */
    private Date updateTime;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getConfigGroup() {
        return configGroup;
    }

    public void setConfigGroup(String configGroup) {
        this.configGroup = configGroup;
    }

    public String getConfigName() {
        return configName;
    }

    public void setConfigName(String configName) {
        this.configName = configName;
    }

    public String getConfigKey() {
        return configKey;
    }

    public void setConfigKey(String configKey) {
        this.configKey = configKey;
    }

    public String getConfigValue() {
        return configValue;
    }

    public void setConfigValue(String configValue) {
        this.configValue = configValue;
    }

    public String getConfigStatus() {
        return configStatus;
    }

    public void setConfigStatus(String configStatus) {
        this.configStatus = configStatus;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

}
