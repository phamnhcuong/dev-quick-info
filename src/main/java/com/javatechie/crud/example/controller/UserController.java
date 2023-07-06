package com.javatechie.crud.example.controller;

import com.javatechie.crud.example.entity.User;
import com.javatechie.crud.example.entity.UserLogin;
import com.javatechie.crud.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.awt.*;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService service;
    @GetMapping("/getUserInfo/{id}")
    public User getUserInfoById(@PathVariable int id){
        return service.getUserbyID(id);
    }
    @PostMapping(value = "/registerQuickInfo" , consumes = {MediaType.APPLICATION_JSON_VALUE,MediaType.MULTIPART_FORM_DATA_VALUE})
    public User addUser(@RequestPart("json") @Valid String user, @RequestPart("userAvatar") @Valid @NotNull @NotBlank MultipartFile file){
        User userResult = service.saveUser(user,file);
        return userResult;
    }
    @PostMapping("/loginUser")
    public UserLogin getUserInfo(@RequestBody UserLogin userLogin){

        UserLogin ObjectUserLogin = service.getUserInfo(userLogin.getUserEmail(), userLogin.getUserPassword());
        if(Objects.nonNull(ObjectUserLogin)){
            return ObjectUserLogin;
        }else {
            return null;
        }
    }

}
