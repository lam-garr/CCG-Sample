package com.example.server.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.models.LoginReq;
import com.example.server.models.LoginRes;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class AuthController {
    @PostMapping
    public LoginRes login(@RequestBody LoginReq req){
        return LoginRes.builder()
            .accessToken("accessToken")
            .build();
    }
}
