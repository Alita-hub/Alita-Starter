package com.alita.application.init;

import com.alita.admin.mapper.ISysUserAccountMapper;
import com.alita.admin.mapper.ISysUserProfileMapper;
import com.alita.common.domain.entity.SysUserAccount;
import com.alita.common.domain.entity.SysUserProfile;
import com.alita.common.enums.AccountStatus;
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
    private ISysUserProfileMapper sysUserProfileMapper;

    @Resource
    private ISysUserAccountMapper sysUserAccountMapper;

    @Resource
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        SysUserAccount admin = sysUserAccountMapper.queryUserByUsername("admin");

        if (!Optional.ofNullable(admin).isPresent())
        {
            SysUserProfile sysUserProfile = new SysUserProfile();
            sysUserProfile.setNickname("admin");
            sysUserProfileMapper.insert(sysUserProfile);

            SysUserAccount sysUserAccount = new SysUserAccount();
            sysUserAccount.setUserId(sysUserProfile.getId());
            sysUserAccount.setPrincipal("admin");
            sysUserAccount.setCredential(passwordEncoder.encode("admin@123456"));
            sysUserAccount.setStatus(AccountStatus.NORMAL);
            sysUserAccount.setLoginType(LoginType.USERNAME);

            sysUserAccountMapper.insert(sysUserAccount);
        }

        System.out.println("管理员初始化完成！");
    }

}
