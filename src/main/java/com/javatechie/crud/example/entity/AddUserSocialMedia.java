package com.javatechie.crud.example.entity;

import javax.persistence.*;

@Entity
@Table(name = "social_media_user_info")
public class AddUserSocialMedia {
    public AddUserSocialMedia(){}
    @Id
    @GeneratedValue
    @Column(name = "info_id")
    private int infoId;
    @Column(name = "user_code")
    private String userCode;
    @Column(name = "social_id")
    private int socialId;
    @Column(name = "info_link")
    private String infoLink;
    @Column(name = "social_name")
    private String socialName;

    public AddUserSocialMedia(int infoId, String userCode, int socialId, String infoLink, String socialName) {
        this.infoId = infoId;
        this.userCode = userCode;
        this.socialId = socialId;
        this.infoLink = infoLink;
        this.socialName = socialName;
    }

    public int getInfoId() {
        return infoId;
    }

    public void setInfoId(int infoId) {
        this.infoId = infoId;
    }

    public String getUserCode() {
        return userCode;
    }

    public void setUserCode(String userCode) {
        this.userCode = userCode;
    }

    public int getSocialId() {
        return socialId;
    }

    public void setSocialId(int socialId) {
        this.socialId = socialId;
    }

    public String getInfoLink() {
        return infoLink;
    }

    public void setInfoLink(String infoLink) {
        this.infoLink = infoLink;
    }

    public String getSocialName() {
        return socialName;
    }

    public void setSocialName(String socialName) {
        this.socialName = socialName;
    }
}
