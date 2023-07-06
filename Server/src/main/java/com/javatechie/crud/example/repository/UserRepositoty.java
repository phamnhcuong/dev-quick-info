package com.javatechie.crud.example.repository;

import com.javatechie.crud.example.entity.User;
import com.javatechie.crud.example.entity.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepositoty extends JpaRepository<User,Integer> {

}
