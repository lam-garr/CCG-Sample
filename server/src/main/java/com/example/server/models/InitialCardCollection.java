package com.example.server.models;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class InitialCardCollection {
    private List<Card> cardCollection;

    public InitialCardCollection() {
        this.cardCollection = new ArrayList<Card>();
        this.populateInitialCardCollection();
    }

    private void populateInitialCardCollection() {
        this.cardCollection.add(new Card("1", "Goku", "Son Goku", 2, 3, false));
        this.cardCollection.add(new Card("2", "Vegeta", "Prince Vegeta", 2, 3, false));
    }
}
