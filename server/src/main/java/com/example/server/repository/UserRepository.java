package com.example.server.repository;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.server.models.User;

@Repository
public interface UserRepository extends MongoRepository<User, Integer> {
    
    Optional<User> findByUsername(String username);
}
