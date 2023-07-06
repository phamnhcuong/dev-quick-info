package com.javatechie.crud.example.repository;

import com.javatechie.crud.example.entity.User;
import com.javatechie.crud.example.entity.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserLoginRepository extends JpaRepository<UserLogin,Integer> {
    UserLogin findByUserEmailAndUserPassword(String email, String password);

}
