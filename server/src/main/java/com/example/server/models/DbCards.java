package com.example.server.models;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "ccgcards")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DbCards {
    private String id;
    private String description;
    private List<Card> cardsCollection;

    public List<Card> getAllCards() {
        return this.cardsCollection;
    }
}
