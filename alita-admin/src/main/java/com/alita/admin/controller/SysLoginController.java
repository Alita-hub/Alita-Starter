package com.alita.admin.controller;

import com.alita.admin.service.SysUserAccountService;
import com.alita.common.domain.HttpResult;
import com.alita.common.enums.HttpCode;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * 用户认证接口
 * @author alita
 */
@RequestMapping("/authentication")
@RestController
public class SysLoginController {

    @Resource
    private SysUserAccountService sysUserAccountService;

    @GetMapping("/login")
    public HttpResult login(String username, String password)
    {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(username, password);
        sysUserAccountService.login(usernamePasswordAuthenticationToken);

        return HttpResult.response(HttpCode.SUCCESS);
    }

    @GetMapping("/test")
    public HttpResult test()
    {
        return HttpResult.response(HttpCode.SUCCESS);
    }
}
