package com.alita.authentication.jwt;

import com.alita.common.domain.entity.SysUserAccount;
import io.jsonwebtoken.Jwts;

import static io.jsonwebtoken.SignatureAlgorithm.HS256;

public class JwtUtil {

    public String createToken(SysUserAccount userAccount) {
        String jwtToken = Jwts.builder()
                .setSubject(userAccount.getPrincipal())
                .signWith(HS256,"a111")
                .compact();

        return jwtToken;
    }

}
