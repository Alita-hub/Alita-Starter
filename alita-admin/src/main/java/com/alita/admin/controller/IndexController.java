package com.alita.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 后台管理首页
 * @author: alita
 */
@RequestMapping
@Controller
public class IndexController {

    @GetMapping("index")
    public String index() {
        return "index";
    }
}
