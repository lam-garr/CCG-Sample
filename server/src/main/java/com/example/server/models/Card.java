package com.example.server.models;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Card {
    private String id;
    private String name;
    private String description;
    private int cost;
    private int power;
    private boolean flip;
}
