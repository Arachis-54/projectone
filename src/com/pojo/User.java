package com.pojo;

import java.util.Date;

public class User {
    private Integer id;
    private String userName;
    private String password;
    private String profile;
    private Date lasttime;
    private Date  recenttime;
    private String lastip;
    private String recentip;
    private Byte permission;

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", profile='" + profile + '\'' +
                ", lasttime=" + lasttime +
                ", recenttime=" + recenttime +
                ", lastip='" + lastip + '\'' +
                ", recentip='" + recentip + '\'' +
                ", permission=" + permission +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public Date getLasttime() {
        return lasttime;
    }

    public void setLasttime(Date lasttime) {
        this.lasttime = lasttime;
    }

    public Date getRecenttime() {
        return recenttime;
    }

    public void setRecenttime(Date recenttime) {
        this.recenttime = recenttime;
    }

    public String getLastip() {
        return lastip;
    }

    public void setLastip(String lastip) {
        this.lastip = lastip;
    }

    public String getRecentip() {
        return recentip;
    }

    public void setRecentip(String recentip) {
        this.recentip = recentip;
    }

    public Byte getPermission() {
        return permission;
    }

    public void setPermission(Byte permission) {
        this.permission = permission;
    }
}

