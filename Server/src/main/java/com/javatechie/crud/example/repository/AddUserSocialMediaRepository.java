package com.javatechie.crud.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.javatechie.crud.example.entity.AddUserSocialMedia;

import java.util.List;

public interface AddUserSocialMediaRepository extends JpaRepository<AddUserSocialMedia,Integer> {
}
