package com.example.server.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Card {
    private String id;
    private String name;
    private String description;
    private int cost;
    private int power;
    private boolean flip;
}
