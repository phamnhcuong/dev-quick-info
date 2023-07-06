package com.javatechie.crud.example.entity;
import javax.persistence.*;

@Entity
public class UserSocialMedia{
    public UserSocialMedia(){}
    @Id
    private int infoId;
    private String userCode;
    private String userName;
    private String userDescribe;
    private String infoLink;
    private String socialName;
    private String socialKey;
    private byte[] userAvatar;


    public UserSocialMedia(int infoId, String userCode, String userName, String userDescribe, String infoLink, String socialName, String socialKey, byte[] userAvatar) {
        this.infoId = infoId;
        this.userCode = userCode;
        this.userName = userName;
        this.userDescribe = userDescribe;
        this.infoLink = infoLink;
        this.socialName = socialName;
        this.socialKey = socialKey;
        this.userAvatar = userAvatar;
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserDescribe() {
        return userDescribe;
    }

    public void setUserDescribe(String userDescribe) {
        this.userDescribe = userDescribe;
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

    public String getSocialKey() {
        return socialKey;
    }

    public void setSocialKey(String socialKey) {
        this.socialKey = socialKey;
    }

    public byte[] getUserAvatar() {
        return userAvatar;
    }

    public void setUserAvatar(byte[] userAvatar) {
        this.userAvatar = userAvatar;
    }
}
