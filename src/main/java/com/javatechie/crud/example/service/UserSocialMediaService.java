package com.javatechie.crud.example.service;

import com.javatechie.crud.example.entity.AddUserSocialMedia;
import com.javatechie.crud.example.entity.UserSocialMedia;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;


public interface UserSocialMediaService {
    public List<UserSocialMedia> getUserSocialMedia();

    public List<UserSocialMedia> getUserSocialMediaById(String user_code);

    public List<AddUserSocialMedia> saveAddUserSocialMedia(List<AddUserSocialMedia> addUserSocialMedia);
}
