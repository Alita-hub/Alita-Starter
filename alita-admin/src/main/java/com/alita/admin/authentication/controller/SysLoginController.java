package com.alita.admin.authentication.controller;

import com.alita.admin.authentication.core.LoginStrategyContext;
import com.alita.common.domain.model.HttpResponse;
import com.alita.common.domain.model.Login;
import com.alita.common.enums.HttpCode;
import com.alita.common.exception.core.BadRequestException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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
    public HttpResponse login(@RequestBody Login login)
    {
        //用户名校验
        usernameCheckout(login.getUsername());
        //用户登录处理
        String token = loginStrategyContext.loginHandle(login);

        return HttpResponse.response(HttpCode.AUTHENTICATION_SUCCESS,token);
    }


    /**
     * 1.以字母开头
     * 2.只能包含字母、数字和下划线
     * 3.长度介于4-20个字符之间
     *
     * @param username
     * @return boolean
     */
    private void usernameCheckout(String username)
    {
        String pattern1 = "^[a-zA-Z].*$";
        String pattern2 = "^[a-zA-Z0-9_]*$";
        String pattern3 = "^.{4,20}$";
        Pattern regex1 = Pattern.compile(pattern1);
        Pattern regex2 = Pattern.compile(pattern2);
        Pattern regex3 = Pattern.compile(pattern3);
        Matcher matcher1 = regex1.matcher(username);
        Matcher matcher2 = regex2.matcher(username);
        Matcher matcher3 = regex3.matcher(username);

        if (!matcher1.matches()) {
            throw new BadRequestException("非法格式，请使用字母开头！");
        }
        if (!matcher2.matches()) {
            throw new BadRequestException("非法格式，只能包含字母、数字、和下划线！");
        }
        if (!matcher3.matches()) {
            throw new BadRequestException("非法格式，长度需要介于4-20个字符之间！");
        }
    }

}
