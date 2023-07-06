package com.javatechie.crud.example.service;

import com.javatechie.crud.example.entity.SocialMedia;
import com.javatechie.crud.example.repository.SocialMediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SocialMediaService {
    @Autowired
    private SocialMediaRepository repository;

    public List<SocialMedia> getSocialMedia(){
        return repository.findAll();
    }
}
