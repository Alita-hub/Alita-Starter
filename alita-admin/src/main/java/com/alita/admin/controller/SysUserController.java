package com.alita.admin.controller;

import com.alita.api.admin.ISysUserService;
import com.alita.common.domain.entity.SysUser;
import com.alita.common.domain.model.HttpPageRequest;
import com.alita.common.domain.model.HttpPageResponse;
import com.alita.common.domain.model.HttpResponse;
import com.alita.common.domain.po.AddUserPo;
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
    public HttpPageResponse list(@RequestBody HttpPageRequest<SysUser> request)
    {
        Page<SysUser> page = sysUserService.getUserList(request);
        return HttpPageResponse.response(page);
    }

    /**
     * 新增用户
     *
     * @param addUserPo
     * @return {@link HttpResponse}
     */
    @PostMapping("/add")
    public HttpResponse add(@RequestBody AddUserPo addUserPo) {
        sysUserService.addUser(addUserPo);
        return HttpResponse.response(HttpCode.ADD_SUCCESS);
    }

    /**
     * 根据用户id获取用户详细信息
     * @param userId
     * @return {@link HttpResponse}
     */
    @GetMapping("/{userId}")
    public HttpResponse detail(@PathVariable Integer userId) {
        SysUser sysUser = sysUserService.getUserInfo(userId);
        return HttpResponse.success(sysUser);
    }

    /**
     * 更新用户信息
     * @param sysUser
     * @return {@link HttpResponse}
     */
    @PostMapping("/update")
    public HttpResponse update(@RequestBody SysUser sysUser) {
        sysUserService.updateUser(sysUser);
        return HttpResponse.success(HttpCode.UPDATE_SUCCESS);
    }

    /**
     * 根据id删除用户
     * @param userId
     * @return {@link HttpResponse}
     */
    @GetMapping("/{userId}")
    public HttpResponse delete(@PathVariable Integer userId) {
        sysUserService.deleteUser(userId);
        return HttpResponse.success(HttpCode.DELETE_SUCCESS);
    }

}
