package com.alita.application.init;

import com.alita.api.admin.ISysUserAuthService;
import com.alita.api.admin.ISysUserProfileService;
import com.alita.common.domain.entity.SysUserAuth;
import com.alita.common.domain.entity.SysUserProfile;
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
    private ISysUserProfileService sysUserProfileService;

    @Resource
    private ISysUserAuthService sysUserAuthService;

    @Resource
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        SysUserAuth admin = sysUserAuthService.getUserByUsername("admin");

        if (!Optional.ofNullable(admin).isPresent())
        {
            SysUserProfile sysUserProfile = new SysUserProfile();
            sysUserProfile.setNickname("admin");
            sysUserProfileService.saveUserProfile(sysUserProfile);

            SysUserAuth sysUserAccount = new SysUserAuth();
            sysUserAccount.setUserId(sysUserProfile.getId());
            sysUserAccount.setPrincipal("admin");
            sysUserAccount.setCredential(passwordEncoder.encode("admin@123456"));
            sysUserAccount.setLoginType(LoginType.USERNAME);

            sysUserAuthService.saveUserAuth(sysUserAccount);

            System.out.println("管理员初始化完成！");
        }

    }

}
