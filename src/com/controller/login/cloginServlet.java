package com.controller.login;

import com.service.checkcustomer;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(value = "/clogin")
public class cloginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        if (new checkcustomer().check(request.getParameter("username"), request.getParameter("password"), request)) {
            System.out.println("跳转");
            request.getRequestDispatcher("/page/index.html").forward(request,response);

        } else {
            session.setAttribute("error", "true");
            request.getRequestDispatcher("/clogin.jsp");
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
