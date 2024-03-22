package com.alita.admin.controller;

import com.alita.api.admin.ISysUserService;
import com.alita.common.domain.entity.SysUser;
import com.alita.common.domain.model.HttpPageRequest;
import com.alita.common.domain.model.HttpResponse;
import com.alita.common.enums.HttpCode;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * 用户管理
 *
 * @author alita
 * @date 2024/03/21
 */
@RequestMapping("/user")
@RestController
public class SysUserController {

    @Resource
    private ISysUserService sysUserService;

    /**
     * 条件分页获取用户列表
     * @param request
     * @return {@link HttpResponse}<{@link Page}>
     */
    @PostMapping("/list")
    public HttpResponse<Page> list(@RequestBody HttpPageRequest<SysUser> request)
    {
        Page<SysUser> userList = sysUserService.getUserList(request);
        return HttpResponse.response(HttpCode.SUCCESS, userList);
    }

}
