package com.alita.admin.service;

import com.alita.admin.mapper.SysConfigMapper;
import com.alita.api.admin.ISysConfigService;
import com.alita.common.domain.entity.SysConfig;
import com.alita.common.domain.model.HttpPageRequest;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

/**
 * 系统配置Service层
 *
 * @author: alita
 */
@Service
public class SysConfigService implements ISysConfigService {

    @Resource
    private SysConfigMapper sysConfigMapper;

    /**
     * 条件分页查询配置列表
     *
     * @param request
     * @return {@link List}<{@link SysConfig}>
     */
    @Override
    public Page<SysConfig> getConfigList(HttpPageRequest<SysConfig> request) {
        //实体参数
        SysConfig sysConfig = request.getParams();
        // 创建一个QueryWrapper对象，用于构建查询条件
        QueryWrapper<SysConfig> queryWrapper = Wrappers.query();

        if (Optional.ofNullable(sysConfig).isPresent()) {
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
        }

        //分页构造
        Page<SysConfig> page = new Page(request.getPageNum(), request.getPageSize());
        //分页结果
        Page<SysConfig> sysConfigPage = sysConfigMapper.selectPage(page, queryWrapper);

        return sysConfigPage;
    }


    /**
     * 根据configKey查询配置值
     * @param configKey
     * @return {@link SysConfig}
     */
    public SysConfig getConfig(String configKey) {
        // 创建一个QueryWrapper对象，用于构建查询条件
        QueryWrapper<SysConfig> queryWrapper = Wrappers.query();
        queryWrapper.eq("config_key", configKey);

        SysConfig sysConfig = sysConfigMapper.selectOne(queryWrapper);

        return sysConfig;
    }

}
