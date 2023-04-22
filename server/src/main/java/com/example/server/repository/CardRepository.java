package com.example.server.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.server.models.Card;

@Repository
public interface CardRepository extends MongoRepository<Card, String> {

}
