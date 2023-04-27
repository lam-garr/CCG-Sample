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
    private boolean state;
    private String turn;
    private List<Card> playerLeftLocation;
    private List<Card> playerMiddleLoaction;
    private List<Card> playerRightLocation;
    private int playerLeftPower;
    private int playerMiddlePower;
    private int playerRightPower;
    private List<Card> oppLeftLocation;
    private List<Card> oppMiddleLoaction;
    private List<Card> oppRightLocation;
    private int oppLeftPower;
    private int oppMiddlePower;
    private int oppRightPower;

    public GameState() {
        this.state = false;
        this.turn = "";
        this.playerLeftLocation = new ArrayList<Card>();
        this.playerMiddleLoaction = new ArrayList<Card>();
        this.playerRightLocation = new ArrayList<Card>();
        this.playerLeftPower = 0;
        this.playerMiddlePower = 0;
        this.playerRightPower = 0;
        this.oppLeftLocation = new ArrayList<Card>();
        this.oppMiddleLoaction = new ArrayList<Card>();
        this.oppRightLocation = new ArrayList<Card>();
        this.oppLeftPower = 0;
        this.oppMiddlePower = 0;
        this.oppRightPower = 0;
    }
}
