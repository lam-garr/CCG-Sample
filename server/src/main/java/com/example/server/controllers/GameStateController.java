package com.example.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.models.Card;
import com.example.server.models.LocationReq;
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

    @PostMapping(path="/update-user-left-location")
    public List<Card> updateUserLeftLocation(@RequestBody LocationReq locationCards, @AuthenticationPrincipal UserPrincipal principal) {
        return gameStateService.updateUserLeftLocation(locationCards.getLocationCards(), principal.getUserId());
    }

    @PostMapping(path="/update-user-middle-location")
    public List<Card> updateUserMiddleLocation(@RequestBody LocationReq locationCards, @AuthenticationPrincipal UserPrincipal principal) {
        return gameStateService.updateUserMiddleLocation(locationCards.getLocationCards(), principal.getUserId());
    }

    @PostMapping(path="/update-user-right-location")
    public List<Card> updateUserRightLocation(@RequestBody LocationReq locationCards, @AuthenticationPrincipal UserPrincipal principal) {
        return gameStateService.updateUserRightLocation(locationCards.getLocationCards(), principal.getUserId());
    }

    @PostMapping(path="/update-opp-left-location")
    public List<Card> updateOppLeftLocation(@RequestBody LocationReq locationCards, @AuthenticationPrincipal UserPrincipal principal) {
        return gameStateService.updateOppLeftLocation(locationCards.getLocationCards(), principal.getUserId());
    }

    @PostMapping(path="/update-opp-middle-location")
    public List<Card> updateOppMiddleLocation(@RequestBody LocationReq locationCards, @AuthenticationPrincipal UserPrincipal principal) {
        return gameStateService.updateOppMiddleLocation(locationCards.getLocationCards(), principal.getUserId());
    }

    @PostMapping(path="/update-opp-right-location")
    public List<Card> updateOppRightLocation(@RequestBody LocationReq locationCards, @AuthenticationPrincipal UserPrincipal principal) {
        return gameStateService.updateOppRightLocation(locationCards.getLocationCards(), principal.getUserId());
    }

    @GetMapping(path="/user-left-location-power")
    public int getUserLeftLocationPower(@AuthenticationPrincipal UserPrincipal principal) {
        return gameStateService.getUserLeftLocationPower(principal.getUserId());
    }

    @GetMapping(path="/user-middle-location-power")
    public int getUserMiddleLocationPower(@AuthenticationPrincipal UserPrincipal principal) {
        return gameStateService.getUserMiddleLocationPower(principal.getUserId());
    }

    @GetMapping(path="/user-right-location-power")
    public int getUserRightLocationPower(@AuthenticationPrincipal UserPrincipal principal) {
        return gameStateService.getUserRightLocationPower(principal.getUserId());
    }
    //
    @GetMapping(path="/opp-left-location-power")
    public int getOppLeftLocationPower(@AuthenticationPrincipal UserPrincipal principal) {
        return gameStateService.getUserLeftLocationPower(principal.getUserId());
    }

    @GetMapping(path="/opp-middle-location-power")
    public int getOppMiddleLocationPower(@AuthenticationPrincipal UserPrincipal principal) {
        return gameStateService.getUserMiddleLocationPower(principal.getUserId());
    }

    @GetMapping(path="/opp-right-location-power")
    public int getoppRightLocationPower(@AuthenticationPrincipal UserPrincipal principal) {
        return gameStateService.getUserRightLocationPower(principal.getUserId());
    }

    @GetMapping(path="/game-state-present")
    public boolean getGameStatePresent(@AuthenticationPrincipal UserPrincipal principal) {
        return gameStateService.getGameStatePresent(principal.getUserId());
    }
}

