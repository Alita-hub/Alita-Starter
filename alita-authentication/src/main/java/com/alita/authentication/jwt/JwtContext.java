package com.alita.authentication.jwt;

import com.alita.admin.service.SysConfigService;
import com.alita.common.constants.ConfigConstants;
import com.alita.common.domain.entity.SysConfig;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.Optional;

/**
 *
 *
 * @author: alita
 */
@Component
public class JwtContext {

    @Resource
    private JwtUtil jwtUtil;

    @Resource
    private SysConfigService sysConfigService;

    public String createToken() {


    }

}
