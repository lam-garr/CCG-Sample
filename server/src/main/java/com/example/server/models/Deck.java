package com.example.server.models;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Deck {
    private List<Card> deck;

    public Deck() {
        this.deck = new ArrayList<Card>();
    }
}
