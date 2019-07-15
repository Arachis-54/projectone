package com.mapper;

import com.pojo.goods;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface goodsmapper {
    public goods getgoodsbyid(@Param("id") int id);

    public void addgoods(@Param("goods") goods goods);

    public void updatagoodsbyid(@Param("goods") goods goods);

    public void deletegoodsbyid(@Param("id") int id);

//    public goods getgoodsbyidresultmap(@Param("id") int id);

    public List<goods> findgoodsByname(String name);

    public int countall();

}
