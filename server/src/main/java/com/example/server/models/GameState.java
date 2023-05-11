package com.example.server.models;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class GameState {
    private boolean gameStatePresent;
    private int turnNumber;
    private String priority;
    private int mana;
    private List<Card> playerLeftLocation;
    private List<Card> playerMiddleLocation;
    private List<Card> playerRightLocation;
    private int playerLeftPower;
    private int playerMiddlePower;
    private int playerRightPower;
    private List<Card> oppLeftLocation;
    private List<Card> oppMiddleLocation;
    private List<Card> oppRightLocation;
    private int oppLeftPower;
    private int oppMiddlePower;
    private int oppRightPower;

    public GameState() {
        this.gameStatePresent = false;
        this.turnNumber = 1;
        this.priority = "";
        this.mana = 0;
        this.playerLeftLocation = new ArrayList<Card>();
        this.playerMiddleLocation = new ArrayList<Card>();
        this.playerRightLocation = new ArrayList<Card>();
        this.playerLeftPower = 0;
        this.playerMiddlePower = 0;
        this.playerRightPower = 0;
        this.oppLeftLocation = new ArrayList<Card>();
        this.oppMiddleLocation = new ArrayList<Card>();
        this.oppRightLocation = new ArrayList<Card>();
        this.oppLeftPower = 0;
        this.oppMiddlePower = 0;
        this.oppRightPower = 0;
    }
}
