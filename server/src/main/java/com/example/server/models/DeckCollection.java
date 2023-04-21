package com.example.server.models;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class DeckCollection {
    private List<Deck> decks;

    public DeckCollection() {
        this.decks = new ArrayList<Deck>();
    }
}
