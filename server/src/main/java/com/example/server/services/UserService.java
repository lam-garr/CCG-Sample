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
import com.example.server.models.Deck;
import com.example.server.models.DeckCollection;
import com.example.server.models.InitialCardCollection;
import com.example.server.models.User;
import com.example.server.repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public void addUser(String username, String password) {
        //int randId = (int)(Math.random() * 9999 + 1);
        InitialCardCollection cardCollection = new InitialCardCollection();
        DeckCollection deckCollection = new DeckCollection();
        userRepository.save(new User(UUID.randomUUID().toString(), username, new BCryptPasswordEncoder().encode(password), cardCollection.getCardCollection(), deckCollection.getDecks()));
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

    public void addDeckToCollection(List<Card> deck, String id) {
        
        mongoTemplate.update(User.class)
            .matching(Criteria.where("id").is(id))
            .apply(new Update().push("userDeckCollection").value(new Deck(deck)))
            .first();
            
        return;
    }
}
