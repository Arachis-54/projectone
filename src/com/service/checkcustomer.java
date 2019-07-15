package com.service;

import com.mapper.customermapper;
import com.pojo.customer;
import com.utils.MybatisUtil;
import org.apache.ibatis.session.SqlSession;

import javax.servlet.http.HttpServletRequest;

public class checkcustomer {
    public boolean check(String adminsnmae, String password, HttpServletRequest request) {

        SqlSession session = MybatisUtil.getSqlSession();

        try {


            customermapper mapper = session.getMapper(customermapper.class);

            if (mapper.checkcustomer(adminsnmae, password)) {
                customer customer = mapper.getcustomerbynamepsd(adminsnmae,password);
                request.getSession().setAttribute("adminsinfo", customer);

                return true;
            } else {
                return false;
            }




        }  finally {
            if (session != null) {
                session.close();
            }

        }

    }

}
