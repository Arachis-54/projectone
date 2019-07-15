package com.mapper;


import com.pojo.admins;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface adminmapper {

    public admins getadminbyid(@Param("adminid") int id);

    public void addadmin(@Param("admins") admins admins);

    public void updataadminbyid(@Param("admins") admins admins);

    public void deleteadminbyid(@Param("id") int id);

//    public admins getadminbyidresultmap(@Param("id") int id);

    public boolean checkadmin(@Param("name") String name, @Param("psd") String psd);

    public admins getadminbynamepsd(@Param("name") String name, @Param("psd") String psd);

    public List<admins> findadminByname(String name);

    public int countall();





    /**
 * 弃用
 * **/
//    public abstract User getUser(@Param("username") String username);
//
//    public abstract void addUser(User user);
//
//    public abstract void deleteUser(@Param("username") String username);
//
//    public abstract void updateUserbyid(User user);
//
//    public abstract boolean checkadmin(@Param("username") String usernmae, @Param("password") String password);

}
