package com.example.server.services;

import java.util.ArrayList;
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

    private void setPriority(String id, String newPriority) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.priority", newPriority);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    public String getWinner(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User targetUser = mongoTemplate.findOne(query, User.class);

        final GameState gameState = targetUser.getGameState();

        String leftLocationWinner;
        String middleLocationWinner;
        String rightLocationWinner;

        if(gameState.getPlayerLeftPower() > gameState.getOppLeftPower()) {
            leftLocationWinner = "player";
        } else {
            leftLocationWinner = "opp";
        }

        if(gameState.getPlayerMiddlePower() > gameState.getOppMiddlePower()) {
            middleLocationWinner = "player";
        } else {
            middleLocationWinner = "opp";
        }

        if(gameState.getPlayerRightPower() > gameState.getOppRightPower()) {
            rightLocationWinner = "player";
        } else {
            rightLocationWinner = "opp";
        }

        if(leftLocationWinner.equals("player") &&
            middleLocationWinner.equals("player") &&
            rightLocationWinner.equals("player")) {
            return "player";
        } else if(leftLocationWinner.equals("opp") &&
            middleLocationWinner.equals("opp") &&
            rightLocationWinner.equals("opp")) {
            return "opp";
        }

        if(leftLocationWinner.equals("player") && middleLocationWinner.equals("player")) {
            return "player";
        } else if(leftLocationWinner.equals("opp") && middleLocationWinner.equals("opp")) {
            return "opp";
        }

        if(middleLocationWinner.equals("player") && rightLocationWinner.equals("player")) {
            return "player";
        } else if(middleLocationWinner.equals("opp") && rightLocationWinner.equals("opp")) {
            return "opp";
        }

        if(leftLocationWinner.equals("player") && rightLocationWinner.equals("player")) {
            return "player";
        } else if(leftLocationWinner.equals("player") && rightLocationWinner.equals("player")) {
            return "opp";
        }

        return getTieBreaker((gameState.getPlayerLeftPower() + gameState.getPlayerMiddlePower() + gameState.getPlayerRightPower()),
        (gameState.getOppLeftPower() + gameState.getOppMiddlePower() + gameState.getOppRightPower()));
    }

    private String getTieBreaker(int playerMaxLocationPower, int oppMaxLocationPower) {
        if(playerMaxLocationPower > oppMaxLocationPower) {
            return "player";
        }
        return "opp";
    }

    public void resetGameState(String id) {
        resetGameStatePresent(id);
        resetTurnNumber(id);
        resetPriority(id);
        resetMana(id);
        resetPlayerLeftLocation(id);
        resetPlayerMiddleLocation(id);
        resetPlayerRightLocation(id);
        resetOppLeftLocation(id);
        resetOppMiddleLocation(id);
        resetOppRightLocation(id);
        resetPlayerLeftPower(id);
        resetPlayerMiddlePower(id);
        resetPlayerRightPower(id);
        resetOppLeftPower(id);
        resetOppMiddlePower(id);
        resetOppRightPower(id);
        return;
    }

    private void resetGameStatePresent(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.gameStatePresent", false);

        mongoTemplate.findAndModify(query, update, User.class);
        return;
    }

    private void resetTurnNumber(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.turnNumber", 0);

        mongoTemplate.findAndModify(query, update, User.class);
        return;
    }

    private void resetPriority(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.priority", "");

        mongoTemplate.findAndModify(query, update, User.class);
        return;
    }

    private void resetMana(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.mana", 0);

        mongoTemplate.findAndModify(query, update, User.class);
        return;
    }

    private void resetPlayerLeftLocation(String id) {
        List<Card> resetLocation = new ArrayList<Card>();

        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.playerLeftLocation", resetLocation);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    private void resetPlayerMiddleLocation(String id) {
        List<Card> resetLocation = new ArrayList<Card>();

        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.playerMiddleLocation", resetLocation);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    private void resetPlayerRightLocation(String id) {
        List<Card> resetLocation = new ArrayList<Card>();

        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.playerRightLocation", resetLocation);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    private void resetOppLeftLocation(String id) {
        List<Card> resetLocation = new ArrayList<Card>();

        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.oppLeftLocation", resetLocation);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    private void resetOppMiddleLocation(String id) {
        List<Card> resetLocation = new ArrayList<Card>();

        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.oppMiddleLocation", resetLocation);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    private void resetOppRightLocation(String id) {
        List<Card> resetLocation = new ArrayList<Card>();

        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.oppRightLocation", resetLocation);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    private void resetPlayerLeftPower(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.playerLeftPower", 0);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    private void resetPlayerMiddlePower(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.playerMiddlePower", 0);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    private void resetPlayerRightPower(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.playerRightPower", 0);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    private void resetOppLeftPower(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.oppLeftPower", 0);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    private void resetOppMiddlePower(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.oppMiddlePower", 0);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    private void resetOppRightPower(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.oppRightPower", 0);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    private void setGameStateLeftLocation(String id, String newLocation) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.leftLocation", newLocation);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    private void setGameStateMiddleLocation(String id, String newLocation) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update();
        update.set("gameState.middleLocation", newLocation);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

    private void setGameStateRightLocation(String id, String newLocation) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));

        Update update = new Update()