package com.javatechie.crud.example.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.javatechie.crud.example.entity.User;
import com.javatechie.crud.example.entity.UserLogin;
import com.javatechie.crud.example.repository.UserLoginRepository;
import com.javatechie.crud.example.repository.UserRepositoty;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.DataInput;
import java.io.IOException;
import java.sql.Blob;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepositoty repositoty;
    @Autowired
    UserLoginRepository loginRepository;
    public User getUserbyID(int id){
        return repositoty.findById(id).orElse(null);
    }

    public User saveUser(String user, MultipartFile file){
        User us = new User();
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            us = objectMapper.readValue(user, User.class);
            us.setUserAvatar(file.getBytes());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


         /*us.setUserCode(user.getUserCode());
         us.setUserName(user.getUserName());
         us.setUserEmail(user.getUserEmail());
         us.setUserPassword(user.getUserPassword());
         us.setUserPhone(user.getUserPhone());
         us.setUserAvatar(user.getUserAvatar());
         us.setUserDescribe(user.getUserDescribe());*/

        return repositoty.save(us);
    }

    public UserLogin getUserInfo(String email, String password){
        return loginRepository.findByUserEmailAndUserPassword(email,password);
    }
}
