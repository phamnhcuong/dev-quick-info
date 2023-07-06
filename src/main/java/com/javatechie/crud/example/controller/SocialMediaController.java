package com.javatechie.crud.example.controller;

import com.javatechie.crud.example.entity.SocialMedia;
import com.javatechie.crud.example.service.SocialMediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RequestMapping("/socialMedia")
@RestController
public class SocialMediaController {
    @Autowired
    private SocialMediaService service;

    @GetMapping("/getSocialMedia")
    public List<SocialMedia> getSocialMedia() {
        return service.getSocialMedia();
    }
}
