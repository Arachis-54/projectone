<%--
  Created by IntelliJ IDEA.
  User: arachis
  Date: 2019-07-12
  Time: 16:36
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>



<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>注册</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="stylesheet" href="static/layuiadmin/layui/css/layui.css" media="all">
    <link rel="stylesheet" href="static/layuiadmin/style/admins.css" media="all">
    <link rel="stylesheet" href="static/layuiadmin/style/login.css" media="all">
</head>
<body>


<div class="layadmin-user-login layadmin-user-display-show" id="LAY-user-login" style="display: none;">
    <div class="layadmin-user-login-main">
        <div class="layadmin-user-login-box layadmin-user-login-header">
            <h2>天天生鲜</h2>
            <p>天天生鲜后台管理系统</p>
        </div>
        <div class="layadmin-user-login-box layadmin-user-login-body layui-form">
            <form id="LAY-user-login-from" action="register" method="post">
            <div class="layui-form-item">
                <label class="layadmin-user-login-icon layui-icon layui-icon-username" for="LAY-user-login-nickname"></label>
                <input type="text" name="nickname" id="LAY-user-login-nickname" lay-verify="nickname" placeholder="昵称" class="layui-input">
            </div>
            <div class="layui-form-item">
                <label class="layadmin-user-login-icon layui-icon layui-icon-password" for="LAY-user-login-password"></label>
                <input type="password" name="password" id="LAY-user-login-password" lay-verify="pass" placeholder="密码" class="layui-input">
            </div>
            <div class="layui-form-item">
                <label class="layadmin-user-login-icon layui-icon layui-icon-password" for="LAY-user-login-repass"></label>
                <input type="password" name="repass" id="LAY-user-login-repass" lay-verify="required" placeholder="确认密码" class="layui-input">
            </div>

            <div class="layui-form-item">
                <input type="checkbox" name="agreement" lay-skin="primary" title="同意用户协议" checked>
            </div>
            <div class="layui-form-item">
                <button id="subbtn" class="layui-btn layui-btn-fluid" type="submit" lay-submit lay-filter="LAY-user-reg-submit">注 册</button>
            </div>
            </form>
            <div class="layui-trans layui-form-item layadmin-user-login-other">

                <a href="clogin.jsp" class="layadmin-user-jump-change layadmin-link layui-hide-xs">用已有帐号登入</a>
                <a href="clogin.jsp" class="layadmin-user-jump-change layadmin-link layui-hide-sm layui-show-xs-inline-block">登入</a>
            </div>
        </div>

    </div>


</div>

<script src="static/layuiadmin/layui/layui.js"></script>
<c:if test="${sessionScope.register == 'true'}">
    <script>
        layui.use('layer', function () {
            layer.msg("注册成功",function () {
                window.location.href = "${pageContext.request.contextPath}/login.jsp";
            })
        });
    </script>

</c:if>
<script>
    var layer = layui.layer;

    var username = document.getElementById("LAY-user-login-nickname");
    var password = document.getElementById("LAY-user-login-password");
    var cpassword = document.getElementById("LAY-user-login-repass");
    var from = document.getElementById("LAY-user-login-from");


    document.getElementById("subbtn").onclick = function (ev) {
        if (username.value == '' || username.value == null) {
            layer.msg("用户名不能为空！", function () {
            });
            return false;
        }
        if (password.value == '' || password.value == null) {
            layer.msg("密码不能为空！", function () {
            });
            return false;
        }
        if (password.value == cpassword.value) {
            from.submit();
        } else {
            layer.msg("两次密码不一样！", function () {
            });
            return false;
        }
        return false;
    };


</script>
</body>
</html>