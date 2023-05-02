package com.example.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
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

    public List<Card> updateUserLeftLocation(List<Card> locationCards, String id) {
        List<Card> theCards = locationCards;

        for(Card card : theCards){
            card.setFlip(true);
        }

        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.playerLeftLocation", theCards);

        mongoTemplate.findAndModify(query, update, User.class);

        return theCards;

    }

    public List<Card> updateUserMiddleLocation(List<Card> locationCards, String id) {
        List<Card> theCards = locationCards;

        for(Card card : theCards){
            card.setFlip(true);
        }

        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        Update update = new Update();
        update.set("gameState.playerMiddleLocation", theCards);

        mongoTemplate.findAndModify(query, update, User.class);

        return theCards;
    }

    public List<Card> updateUserRightLocation(List<Card> locationCards, String id) {
        List<Card> theCards = locationCards;

        for(Card card : theCards){
            card.setFlip(true);
        }

        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.playerRightLocation", theCards);

        mongoTemplate.findAndModify(query, update, User.class);

        return theCards;
    }

    public List<Card> updateOppLeftLocation(List<Card> locationCards, String id) {
        List<Card> theCards = locationCards;

        for(Card card : theCards){
            card.setFlip(true);
        }

        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.oppLeftLocation", theCards);

        mongoTemplate.findAndModify(query, update, User.class);

        return theCards;
    }

    public List<Card> updateOppMiddleLocation(List<Card> locationCards, String id) {
        List<Card> theCards = locationCards;

        for(Card card : theCards){
            card.setFlip(true);
        }

        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.oppMiddleLocation", theCards);

        mongoTemplate.findAndModify(query, update, User.class);

        return theCards;
    }

    public List<Card> updateOppRightLocation(List<Card> locationCards, String id) {
        List<Card> theCards = locationCards;

        for(Card card : theCards){
            card.setFlip(true);
        }

        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.oppRightLocation", theCards);

        mongoTemplate.findAndModify(query, update, User.class);

        return theCards;
    }
}
