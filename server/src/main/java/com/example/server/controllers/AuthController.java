package com.example.server.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.models.LoginReq;
import com.example.server.models.LoginRes;
import com.example.server.security.JwtIssuer;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final JwtIssuer jwtIssuer;

    @PostMapping("/login")
    public LoginRes login(@RequestBody LoginReq req){

        var token = jwtIssuer.issue(123456789, "token");

        return LoginRes.builder()
            .accessToken(token)
            .build();
    }

    @GetMapping("/secure")
    public String secure(){
        return "ok!";
    }
}
