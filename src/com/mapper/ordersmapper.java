package com.mapper;

import com.pojo.orders;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ordersmapper {
    public orders getordersbyid(@Param("id") int id);

    public void addorders(@Param("orders") orders orders);

    public void updataordersbyid(@Param("orders") orders orders);

    public void deleteordersbyid(@Param("id") int id);

//    public orders getordersbyidresultmap(@Param("id") int id);

    public List<orders> findordersByname(String name);

    public int countall();
}
