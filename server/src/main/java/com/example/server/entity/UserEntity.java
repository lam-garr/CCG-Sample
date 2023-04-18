package com.example.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserEntity {
    
    private String id;
    private String username;
    @JsonIgnore
    private String password;
}
