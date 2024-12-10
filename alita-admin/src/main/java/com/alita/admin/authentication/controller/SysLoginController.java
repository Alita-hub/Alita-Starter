package com.alita.admin.authentication.controller;

import com.alita.admin.authentication.core.LoginStrategyContext;
import com.alita.common.domain.model.HttpResponse;
import com.alita.common.domain.vo.LoginVo;
import com.alita.common.enums.HttpCode;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * 开发规范：Controller层主要是对访问控制进行转发，各类基本参数校验，或者不复用的业务简单处理。
 * 所以，该层尽量轻薄，避免编写涉及业务处理的代码
 *
 * 登录接口运用了策略模式，避免多次使用if，方面后续维护管理
 *
 * 用户认证接口
 * @author alita
 */
@RequestMapping("/authentication")
@Controller
public class SysLoginController {

    @Resource
    private LoginStrategyContext loginStrategyContext;

    /**
     * 登录
     * @param login
     * @return {@link HttpResponse}
     */
    @PostMapping("/login")
    @ResponseBody
    public HttpResponse login(@RequestBody LoginVo login)
    {
        //用户登录处理
        String token = loginStrategyContext.loginHandle(login);

        return HttpResponse.response(HttpCode.AUTHENTICATION_SUCCESS,token);
    }


}
