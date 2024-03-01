package com.alita.admin.service;

import com.alita.admin.mapper.ISysConfigMapper;
import com.alita.common.domain.entity.SysConfig;
import com.alita.common.domain.model.HttpPageRequest;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * 系统配置Service层
 *
 * @author: alita
 */
@Service
public class SysConfigService {

    @Resource
    private ISysConfigMapper sysConfigMapper;

    /**
     * 根据条件查询配置列表
     *
     * @param request
     * @return {@link List}<{@link SysConfig}>
     */
    public Page<SysConfig> listConfig(HttpPageRequest<SysConfig> request) {
        //实体参数
        SysConfig sysConfig = request.getParams();
        // 创建一个QueryWrapper对象，用于构建查询条件
        QueryWrapper<SysConfig> queryWrapper = Wrappers.query();

        // 判断查询条件是否为空，并动态拼接查询条件
        if (!StringUtils.isEmpty(sysConfig.getConfigGroup()))
        {
            queryWrapper.eq("config_group",sysConfig.getConfigGroup());
        }
        if (!StringUtils.isEmpty(sysConfig.getConfigName()))
        {
            queryWrapper.eq("config_name",sysConfig.getConfigName());
        }
        queryWrapper.eq("config_status", 0);

        //分页构造
        Page<SysConfig> page = new Page(request.getPageNum(), request.getPageSize());
        //分页结果
        Page<SysConfig> sysConfigPage = sysConfigMapper.selectPage(page, queryWrapper);

        return sysConfigPage;
    }

}
