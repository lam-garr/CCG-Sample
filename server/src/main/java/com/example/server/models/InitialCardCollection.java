package com.example.server.models;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InitialCardCollection {

    private List<Card> cardCollection;

    public InitialCardCollection(List<Card> list) {
        this.cardCollection = list;
    }

}
