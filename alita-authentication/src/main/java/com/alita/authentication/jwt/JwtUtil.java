package com.alita.authentication.jwt;

import io.jsonwebtoken.Jwts;

import java.util.HashMap;

import static io.jsonwebtoken.SignatureAlgorithm.HS256;

public class JwtUtil {

        public String createToken() {
            String compact = Jwts.builder().setPayload("").setClaims(new HashMap<>()).signWith(HS256,"a111").compact();
            Jwts.parser().setSigningKey("".getBytes()).parseClaimsJwt("").getBody();
            return "";
        }

}
