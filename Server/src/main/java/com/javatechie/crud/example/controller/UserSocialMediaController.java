package com.javatechie.crud.example.controller;

import com.javatechie.crud.example.entity.AddUserSocialMedia;
import com.javatechie.crud.example.entity.UserSocialMedia;
import com.javatechie.crud.example.service.UserSocialMediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/quick-info")
public class UserSocialMediaController {
    @Autowired
    private UserSocialMediaService service;

    @GetMapping("/getAllUserSM")
    public List<UserSocialMedia> getAllUserSocialMedia(){
        return service.getUserSocialMedia();
    }
    @GetMapping(value = "/{user_code}")
    public List<UserSocialMedia> getUserSocialMediaById(@PathVariable String user_code, Optional<UserSocialMedia> userSocialMedia){
        return service.getUserSocialMediaById(user_code);
    }
    @PostMapping("/addUserSocialMedia")
    public List<AddUserSocialMedia> addUserSocialMedia(@RequestBody List<AddUserSocialMedia> addUserSocialMedia){
        return service.saveAddUserSocialMedia(addUserSocialMedia);
    }

}
