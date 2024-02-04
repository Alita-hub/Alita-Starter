package com.alita.admin.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.alita.admin.mapper.SysUserAccountMapper;
import com.alita.admin.entity.UserAuth;
import com.alita.admin.service.UserAuthService;
import org.springframework.stereotype.Service;

/**
 * (UserAuth)表服务实现类
 *
 * @author makejava
 * @since 2024-02-02 15:05:19
 */
@Service("userAuthService")
public class UserAuthServiceImpl extends ServiceImpl<SysUserAccountMapper, UserAuth> implements UserAuthService {

}
