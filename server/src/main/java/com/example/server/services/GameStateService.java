package com.example.server.services;

import java.util.List;
import java.util.Random;

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

        this.updateUserLeftLocationPower(id);

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

        this.updateUserMiddleLocationPower(id);

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

        this.updateUserRightLocationPower(id);

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

        this.updateOppLeftLocationPower(id);

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

        this.updateOppMiddleLocationPower(id);

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

        this.updateOppRightLocationPower(id);

        return theCards;
    }

    public int getUserLeftLocationPower(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        return gameState.getPlayerLeftPower();
    }

    public int getUserMiddleLocationPower(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        return gameState.getPlayerMiddlePower();
    }

    public int getUserRightLocationPower(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        return gameState.getPlayerRightPower();
    }

    public int getOppLeftLocationPower(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        return gameState.getOppLeftPower();
    }

    public int getOppMiddleLocationPower(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        return gameState.getOppMiddlePower();
    }

    public int getOppRightLocationPower(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        return gameState.getOppRightPower();
    }

    private void updateUserLeftLocationPower(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        final List<Card> locationArr = gameState.getPlayerLeftLocation();

        int power = 0;

        for(Card card : locationArr){
            power += card.getPower();
        }

        Update update = new Update();
        update.set("gameState.playerLeftPower", power);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    private void updateUserMiddleLocationPower(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        final List<Card> locationArr = gameState.getPlayerMiddleLocation();

        int power = 0;

        for(Card card : locationArr){
            power += card.getPower();
        }

        Update update = new Update();
        update.set("gameState.playerMiddlePower", power);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    private void updateUserRightLocationPower(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        final List<Card> locationArr = gameState.getPlayerRightLocation();

        int power = 0;

        for(Card card : locationArr){
            power += card.getPower();
        }

        Update update = new Update();
        update.set("gameState.playerRightPower", power);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    private void updateOppLeftLocationPower(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        final List<Card> locationArr = gameState.getOppLeftLocation();

        int power = 0;

        for(Card card : locationArr){
            power += card.getPower();
        }

        Update update = new Update();
        update.set("gameState.oppLeftPower", power);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    private void updateOppMiddleLocationPower(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        final List<Card> locationArr = gameState.getOppMiddleLocation();

        int power = 0;

        for(Card card : locationArr){
            power += card.getPower();
        }

        Update update = new Update();
        update.set("gameState.oppMiddlePower", power);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    private void updateOppRightLocationPower(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        final List<Card> locationArr = gameState.getOppRightLocation();

        int power = 0;

        for(Card card : locationArr){
            power += card.getPower();
        }

        Update update = new Update();
        update.set("gameState.oppRightPower", power);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    public boolean getGameStatePresent(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        return gameState.isGameStatePresent();
    }

    private void setGameStatePresentTrue(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.gameStatePresent", true);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    public int getMana(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        return gameState.getMana();
    }

    private void setMana(String id, int manaAmount) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.mana", manaAmount);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    public int getPlayerOne() {
        Random rand = new Random();
        //will return either 1 or 2
        return 1 + rand.nextInt(1); 
    }

    public int getTurnNumber(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        return gameState.getTurnNumber();
    }

    private void setTurnNumber(String id, int newTurnNumber) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.turnNumber", newTurnNumber);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    public String getPriority(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        return gameState.getPriority();
    }
}
