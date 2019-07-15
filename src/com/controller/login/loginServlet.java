package com.controller.login;

import com.service.checkadmin;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;

@WebServlet("/login")
public class loginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        if (new checkadmin().check(request.getParameter("username"), request.getParameter("password"), request)) {
            System.out.println("跳转");
            Cookie cookie1 = new Cookie("name", request.getParameter("username"));
            Cookie cookie2 = new Cookie("psd", request.getParameter("password"));
            response.addCookie(cookie1);
            response.addCookie(cookie2);
            response.sendRedirect(request.getContextPath()+"/page/index.html");
//            request.getRequestDispatcher("/page/index.html").forward(request,response);

        } else {
            session.setAttribute("error", "true");

            request.getRequestDispatcher("/login.jsp");
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        doPost(request,response);
    }
}
