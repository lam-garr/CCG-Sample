package com.example.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.models.Card;
import com.example.server.security.UserPrincipal;
import com.example.server.services.GameStateService;

@RestController
public class GameStateController {
    
    @Autowired
    private GameStateService gameStateService;


    @GetMapping(path="/user-left-location")
    public List<Card> getUserLeftLocation(@AuthenticationPrincipal UserPrincipal principal) {
        return gameStateService.getUserLeftLocation(principal.getUserId());
    }

    @GetMapping(path="/user-mid-location")
    public List<Card> getUserMidLocation(@AuthenticationPrincipal UserPrincipal principal) {
        return gameStateService.getUserMidLocation(principal.getUserId());
    }

    @GetMapping(path="/user-right-location")
    public List<Card> getUserRightLocation(@AuthenticationPrincipal UserPrincipal principal) {
        return gameStateService.getUserRightLocation(principal.getUserId());
    }

    @GetMapping(path="/opp-left-location")
    public List<Card> getOppLeftLocation(@AuthenticationPrincipal UserPrincipal principal) {
        return gameStateService.getOppLeftLocation(principal.getUserId());
    }

    @GetMapping(path="/opp-mid-location")
    public List<Card> getOppMidLocation(@AuthenticationPrincipal UserPrincipal principal) {
        return gameStateService.getOppMidLocation(principal.getUserId());
    }

    @GetMapping(path="/opp-right-location")
    public List<Card> getOppRightLocation(@AuthenticationPrincipal UserPrincipal principal) {
        return gameStateService.getOppRightLocation(principal.getUserId());
    }
}
