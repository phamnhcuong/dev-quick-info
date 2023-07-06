package com.javatechie.crud.example.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
public class SocialMedia {
    public SocialMedia(){}
    @Id
    private int socialId;
    private String socialKey;
    private int socialCode;
    private String socialName;
    private String socialLogo;

    public SocialMedia(int socialId,String socialKey,int socialCode,String socialName,String socialLogo){
        this.socialId = socialId;
        this.socialKey = socialKey;
        this.socialCode = socialCode;
        this.socialName = socialName;
        this.socialLogo = socialLogo;
    }

    public int getSocialId() {
        return socialId;
    }

    public void setSocialId(int socialId) {
        this.socialId = socialId;
    }

    public String getSocialKey() {
        return socialKey;
    }

    public void setSocialKey(String socialKey) {
        this.socialKey = socialKey;
    }

    public int getSocialCode() {
        return socialCode;
    }

    public void setSocialCode(int socialCode) {
        this.socialCode = socialCode;
    }

    public String getSocialName() {
        return socialName;
    }

    public void setSocialName(String socialName) {
        this.socialName = socialName;
    }

    public String getSocialLogo() {
        return socialLogo;
    }

    public void setSocialLogo(String socialLogo) {
        this.socialLogo = socialLogo;
    }
}
