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

    public Deck(List<Card> deck) {
        this.deck = new ArrayList<Card>();
        for(Card card : deck) {
            this.addToDeck(card);
        }
    }

    public void addToDeck(Card card) {
        this.deck.add(card);
    }
}
