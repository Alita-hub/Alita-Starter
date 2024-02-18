package com.alita.admin.controller;

import com.alita.admin.service.SysUserAccountService;
import com.alita.common.domain.model.HttpResult;
import com.alita.common.domain.model.Login;
import com.alita.common.enums.HttpCode;
import com.alita.common.exception.core.BadRequestException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 用户认证接口
 * @author alita
 */
@RequestMapping("/authentication")
@RestController
public class SysLoginController {

    @Resource
    private SysUserAccountService sysUserAccountService;

    @PostMapping("/login")
    public HttpResult usernameLogin(@RequestBody Login login)
    {
        //用户名校验
        usernameCheckout(login.getUsername());

        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(login.getUsername(), login.getPassword());
        sysUserAccountService.login(authentication);

        return HttpResult.response(HttpCode.AUTHENTICATION_SUCCESS);
    }

    @GetMapping("/test")
    public HttpResult test()
    {
        return HttpResult.response(HttpCode.SUCCESS);
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
