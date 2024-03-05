package com.alita.common.util;

import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

import static io.jsonwebtoken.SignatureAlgorithm.HS256;

@Component
public class JwtUtil {

    @Value("${jwt.secretKey}")
    private String secretKey;

    @Value("${jwt.expired}")
    private int expired;

    /**
     * 生成Jwt令牌
     *
     * @param principal
     * @return {@link String}
     */
    public String createToken(String principal) {
        long exp = System.currentTimeMillis() + expired * 60 * 1000;
        Date expiredDate = new Date(exp);

        String token = Jwts.builder()
                .setSubject(principal)
                .setIssuedAt(new Date())
                .setExpiration(expiredDate)
                .signWith(HS256, secretKey)
                .compact();

        return token;
    }

    /**
     * 解析Jwt令牌
     *
     * @param token
     * @return {@link Claims}
     */
    public Claims parseJwt(String token) {
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody();
    }

}
