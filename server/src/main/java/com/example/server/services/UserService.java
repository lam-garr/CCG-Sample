package com.example.server.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.server.entity.UserEntity;
import com.example.server.models.Card;
import com.example.server.models.DbCards;
import com.example.server.models.Deck;
import com.example.server.models.DeckCollection;
import com.example.server.models.GameState;
import com.example.server.models.InitialCardCollection;
import com.example.server.models.User;
import com.example.server.repository.UserRepository;
import com.mongodb.BasicDBObject;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public void addUser(String username, String password) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is("1"));
        final DbCards dbCards = mongoTemplate.findOne(query, DbCards.class);

        InitialCardCollection cardCollection = new InitialCardCollection(dbCards.getAllCards());
        DeckCollection deckCollection = new DeckCollection();
        GameState gameState = new GameState();
        userRepository.save(new User(UUID.randomUUID().toString(),
            username,
            new BCryptPasswordEncoder().encode(password),
            cardCollection.getCardCollection(),
            deckCollection.getDecks(),
            gameState));
            
        return;
    }

    public Optional<UserEntity> findByUsername(String username){
        final Query query = new Query();
        query.addCriteria(Criteria.where("username").is(username));
        final User theUser = mongoTemplate.findOne(query, User.class);
        
        if(theUser == null) return Optional.empty();

        var user = new UserEntity();

        user.setId(theUser.getId());
        user.setUsername(theUser.getUsername());
        user.setPassword(theUser.getPassword());
        return Optional.of(user);
    }

    public List<Card> getUserCardCollection(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User theUser = mongoTemplate.findOne(query, User.class);

        return theUser.getUserCardCollection();
    }

    public List<Deck> getUserDeckCollection(String id) {
        final Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        final User theUser = mongoTemplate.findOne(query, User.class);

        return theUser.getUserDeckCollection();
    }

    public void addDeckToCollection(List<Card> deck, String id, String deckId, String deckName) {
        mongoTemplate.update(User.class)
            .matching(Criteria.where("id").is(id))
            .apply(new Update().push("userDeckCollection").value(new Deck(deck, deckId, deckName)))
            .first();
            
        return;
    }

    public void deleteDeckFromCollection(String id, String deckId) {
        mongoTemplate.updateFirst(
            Query.query(Criteria.where("id").is(id)),
            new Update().pull("userDeckCollection", new BasicDBObject("id", deckId)),
            User.class
        );
    }

    public void updateDeckFromCollection(List<Card> deck, String id, String deckId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id).and("userDeckCollection")
            .elemMatch(Criteria.where("id").is(deckId)));

        Update update = new Update();
        update.set("userDeckCollection.$.deck", deck);

        mongoTemplate.findAndModify(query, update, User.class);

        return;
    }

}
