package com.example.server.models;

import java.util.List;

import com.example.server.models.Card;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DeckReq {
    private String id;
    private String name;
    private List<Card> deck;
}
