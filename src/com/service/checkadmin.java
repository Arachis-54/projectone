package com.service;


import com.mapper.adminmapper;
import com.pojo.admins;
import com.utils.MybatisUtil;
import org.apache.ibatis.session.SqlSession;

import javax.servlet.http.HttpServletRequest;

public class checkadmin {


    public boolean check(String adminsnmae, String password, HttpServletRequest request) {

        SqlSession session = MybatisUtil.getSqlSession();

        try {


            adminmapper mapper = session.getMapper(adminmapper.class);

            if (mapper.checkadmin(adminsnmae, password)) {
                admins admins = mapper.getadminbynamepsd(adminsnmae,password);
                request.getSession().setAttribute("adminsinfo", admins);

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