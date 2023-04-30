package com.example.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.example.server.models.Card;
import com.example.server.models.GameState;
import com.example.server.models.User;

@Service
public class GameStateService {

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Card> getUserLeftLocation(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        return gameState.getPlayerLeftLocation();
    }

    public List<Card> getUserMidLocation(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        return gameState.getPlayerMiddleLocation();
    }

    public List<Card> getUserRightLocation(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        return gameState.getPlayerRightLocation();
    }

    public List<Card> getOppLeftLocation(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        return gameState.getOppLeftLocation();
    }

    public List<Card> getOppMidLocation(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        return gameState.getOppMiddleLocation();
    }

    public List<Card> getOppRightLocation(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        return gameState.getOppRightLocation();
    }
}
