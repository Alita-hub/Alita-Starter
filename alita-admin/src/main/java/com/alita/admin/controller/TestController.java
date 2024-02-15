package com.alita.admin.controller;

import com.alita.common.domain.model.HttpResult;
import com.alita.common.enums.HttpCode;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author: whz
 */
@RequestMapping("/test")
@RestController
public class TestController {

    @GetMapping("/1")
    public HttpResult test()
    {
        return HttpResult.response(HttpCode.FAIL);
    }

}
