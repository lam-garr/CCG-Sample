package com.example.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.models.Card;
import com.example.server.models.Deck;
import com.example.server.models.SignUpReq;
import com.example.server.security.UserPrincipal;
import com.example.server.services.UserService;

@RestController
public class UserController {
    
    @Autowired
    private UserService userService;

    @PostMapping(path="/signup")
    public void add(@RequestBody SignUpReq req) {
        userService.addUser(req.getUsername(), req.getPassword());
        return;
    }

    @GetMapping("/id")
    public String secure(@AuthenticationPrincipal UserPrincipal principal){
        return "Logged in as: " + principal.getUsername();
    }

    @GetMapping(path="/card-collection")
    public ResponseEntity<List<Card>> getUserCardCollection(@AuthenticationPrincipal UserPrincipal principal) {
        return new ResponseEntity<List<Card>>(userService.getUserCardCollection(principal.getUserId()), HttpStatus.OK);
    }

    @GetMapping(path="/deck-collection")
    public ResponseEntity<List<Deck>> getUserDeckCollection(@AuthenticationPrincipal UserPrincipal principal) {
        return new ResponseEntity<List<Deck>>(userService.getUserDeckCollection(principal.getUserId()), HttpStatus.OK);
    }
}
