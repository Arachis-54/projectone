package com.service;

import com.mapper.customermapper;
import com.pojo.customer;
import com.utils.MybatisUtil;
import org.apache.ibatis.session.SqlSession;

import javax.servlet.http.HttpServletRequest;

public class cregister {
    public void register(String name, String psd,String tel,String email, HttpServletRequest request) {

        SqlSession session = MybatisUtil.getSqlSession();

        try {

            customermapper mapper = session.getMapper(customermapper.class);


            customer customer = new customer();
            customer.setCname(name);
            customer.setcpass(psd);
            customer.setCtel(tel);
            customer.setCemail(email);
            mapper.addcustomer(customer);





        }  finally {
            if (session != null) {
                session.close();
            }

        }

    }
}
