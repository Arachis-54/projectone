package com.mapper;

import com.pojo.category;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface categorymapper {
    public category getcategorybyid(@Param("id") int id);

    public void addcategory(@Param("category") category category);

    public void updatacategorybyid(@Param("category") category category);

    public void deletecategorybyid(@Param("id") int id);

//    public category getcategorybyidresultmap(@Param("id") int id);

    public List<category> findcategoryByname(String name);

    public int countall();
}
