package com.mapper;

import com.pojo.customer;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface customermapper {


    public customer getcustomerbyid(@Param("id") int id);

    public void addcustomer(@Param("customer") customer customer);

    public void updatacustomerbyid(@Param("customer") customer customer);

    public void deletecustomerbyid(@Param("id") int id);

//    public customer getcustomerbyidresultmap(@Param("id") int id);

    public boolean checkcustomer(@Param("cname") String cname, @Param("psd") String cpsd);

    public customer getcustomerbynamepsd(@Param("cname") String cname, @Param("psd") String cpsd);

    public List<customer> findcustomerByname(String cname);

    public int countall();

}
