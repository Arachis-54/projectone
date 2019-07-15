package com.service;

import com.mapper.adminmapper;
import com.pojo.admins;
import com.utils.MybatisUtil;
import org.apache.ibatis.session.SqlSession;

import javax.servlet.http.HttpServletRequest;

public class register {
    public void register(String name, String psd, HttpServletRequest request) {

        SqlSession session = MybatisUtil.getSqlSession();

        try {

            adminmapper mapper = session.getMapper(adminmapper.class);


            admins admins = new admins();
            admins.setAdminname(name);
            admins.setAdminpass(psd);
            mapper.addadmin(admins);





        }  finally {
            if (session != null) {
                session.close();
            }

        }

    }
}
