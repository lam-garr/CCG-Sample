package com.example.server.models;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "ccgusers")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {
    private String id;
    private String username;
    private String password;
    private List<Card> userCardCollection;
    private List<Deck> userDeckCollection;
    private GameState gameState;
}
