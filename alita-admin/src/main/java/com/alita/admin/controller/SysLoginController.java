package com.alita.admin.controller;

import com.alita.admin.service.SysUserAccountService;
import com.alita.common.domain.model.HttpResult;
import com.alita.common.domain.model.Login;
import com.alita.common.enums.HttpCode;
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
        if (!usernameCheckout(login.getUsername()))
        {
            return HttpResult.response(HttpCode.USER_INVALID);
        }

        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(login.getUsername(), login.getPassword());
        sysUserAccountService.login(authentication);

        return HttpResult.response(HttpCode.SUCCESS);
    }

    @GetMapping("/test")
    public HttpResult test()
    {
        return HttpResult.response(HttpCode.SUCCESS);
    }


    /**
     * 以字母开头
     * 只能包含字母、数字和下划线
     * 长度介于6-20个字符之间
     *
     * @param username
     * @return boolean
     */
    private boolean usernameCheckout(String username)
    {
        String pattern = "^[a-zA-Z]\\w{5,19}$";
        Pattern regex = Pattern.compile(pattern);
        Matcher matcher = regex.matcher(username);

        return matcher.matches();
    }

}
