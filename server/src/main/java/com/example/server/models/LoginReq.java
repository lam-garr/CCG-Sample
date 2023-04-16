package com.example.server.models;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class LoginReq {
    private String username;
    private String password;
}
