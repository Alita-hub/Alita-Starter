package com.alita.system.controller;

import com.alita.system.service.SysConfigService;
import com.alita.common.domain.entity.system.SysConfig;
import com.alita.common.domain.model.HttpPageRequest;
import com.alita.common.domain.model.HttpPageResponse;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

/**
 * 系统配置接口
 * @author: alita
 */
@RequestMapping("/config")
@Controller
public class SysConfigController {

    @Resource
    private SysConfigService sysConfigService;

    /**
     * 条件分页查询系统配置列表
     * @param request
     * @return {@link HttpPageResponse}
     */
    @PostMapping("/list")
    @ResponseBody
    public HttpPageResponse list(@RequestBody HttpPageRequest<SysConfig> request)
    {
        Page<SysConfig> sysConfigs = sysConfigService.getConfigList(request);

        return HttpPageResponse.response(sysConfigs);
    }

}
