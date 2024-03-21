package com.alita.api.admin;

import com.alita.common.domain.entity.SysConfig;
import com.alita.common.domain.model.HttpPageRequest;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

/**
 * 系统配置接口
 * @author alita
 * @date 2024/03/21
 */
public interface ISysConfigService {

    /**
     * 条件分页查询配置列表
     * @param request
     * @return {@link Page}<{@link SysConfig}>
     */
    Page<SysConfig> getConfigList(HttpPageRequest<SysConfig> request);

}
