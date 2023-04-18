package com.example.server.services;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.server.entity.UserEntity;
import com.example.server.models.User;
import com.example.server.repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Optional<UserEntity> findByUsername(String username){
        final Query query = new Query();
        query.addCriteria(Criteria.where("username").is(username));
        final User theUser = mongoTemplate.findOne(query, User.class);

        if(theUser == null) return Optional.empty();

        var user = new UserEntity();

        user.setId(theUser.getId());
        user.setUsername(theUser.getUsername());
        user.setPassword(new BCryptPasswordEncoder().encode(theUser.getPassword()));
        return Optional.of(user);
    }
}
