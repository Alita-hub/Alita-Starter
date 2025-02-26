package com.alita.application.init;

import com.alita.api.admin.ISysUserAuthService;
import com.alita.api.admin.ISysUserInfoService;
import com.alita.common.domain.entity.system.SysUserAuth;
import com.alita.common.domain.entity.system.SysUserInfo;
import com.alita.common.enums.LoginType;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.Optional;

/**
 * 管理员账号初始化
 * @author alita
 */
@Component
public class AdminInit implements CommandLineRunner {

    @Resource
    private ISysUserInfoService sysUserInfoService;

    @Resource
    private ISysUserAuthService sysUserAuthService;

    @Resource
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        SysUserAuth admin = sysUserAuthService.getUserByprincipal("admin");

        if (!Optional.ofNullable(admin).isPresent())
        {
            SysUserInfo sysUser = new SysUserInfo();
            sysUser.setName("admin");
            sysUserInfoService.addUserInfo(sysUser);

            SysUserAuth sysUserAuth = new SysUserAuth();
            sysUserAuth.setUserId(sysUser.getId());
            sysUserAuth.setPrincipal("admin");
            sysUserAuth.setCredential(passwordEncoder.encode("admin@123456"));
            sysUserAuth.setLoginType(LoginType.USERNAME);

            sysUserAuthService.saveUserAuth(sysUserAuth);

            System.out.println("管理员初始化完成： admin:admin@123456");
        }

    }

}
