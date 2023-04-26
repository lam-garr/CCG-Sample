package com.example.server.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.server.models.DbCards;

@Repository
public interface DbCardsRepository extends MongoRepository<DbCards, String>{
    
}
