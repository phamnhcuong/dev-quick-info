package com.javatechie.crud.example.service.Impl;

import com.javatechie.crud.example.entity.AddUserSocialMedia;
import com.javatechie.crud.example.entity.UserSocialMedia;
import com.javatechie.crud.example.repository.AddUserSocialMediaRepository;
import com.javatechie.crud.example.repository.UserSocialMediaRepository;
import com.javatechie.crud.example.service.UserSocialMediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserSocialMediaServiceImpl implements UserSocialMediaService {
    @Autowired
    private UserSocialMediaRepository repository;
    @Autowired
    private AddUserSocialMediaRepository addUserSocialMediaRepository;
    @Override
    public List<UserSocialMedia> getUserSocialMedia(){
        return repository.findAll();
    }


    @Override
    public List<UserSocialMedia> getUserSocialMediaById(String user_code){
        return repository.findByUserCode(user_code);
    }

    public List<AddUserSocialMedia> saveAddUserSocialMedia(List<AddUserSocialMedia> addUserSocialMedia){
        return addUserSocialMediaRepository.saveAll(addUserSocialMedia);
    }

}
