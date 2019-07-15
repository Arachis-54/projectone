<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <title>登入</title>
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
            <form id="LAY-user-login-from" action="login" method="post">
            <div class="layui-form-item">
                <label class="layadmin-user-login-icon layui-icon layui-icon-username" for="LAY-user-login-username"></label>
                <input type="text" name="username" id="LAY-user-login-username" lay-verify="required" placeholder="用户名" class="layui-input">
            </div>
            <div class="layui-form-item">
                <label class="layadmin-user-login-icon layui-icon layui-icon-password" for="LAY-user-login-password"></label>
                <input type="password" name="password" id="LAY-user-login-password" lay-verify="required" placeholder="密码" class="layui-input">
            </div>
            <div class="layui-form-item">
                <div class="layui-row">
                    <div class="layui-col-xs7">
                        <label class="layadmin-user-login-icon layui-icon layui-icon-vercode" for="LAY-user-login-vercode"></label>
                        <input type="text" name="vercode" id="LAY-user-login-vercode" lay-verify="required" placeholder="图形验证码" class="layui-input">
                    </div>
                    <div class="layui-col-xs5">
                        <div style="margin-left: 10px;">
                            <img src="code" class="layadmin-user-login-codeimg" id="LAY-user-get-vercode">
                        </div>
                    </div>
                </div>
            </div>
            <div class="layui-form-item" style="margin-bottom: 20px;">
                <input type="checkbox" name="remember" lay-skin="primary" title="记住密码">
                <a href="forget.html" class="layadmin-user-jump-change layadmin-link" style="margin-top: 7px;">忘记密码？</a>
            </div>
            <div class="layui-form-item">
                <button id="LAY-user-login-btn" type="submit" class="layui-btn layui-btn-fluid" lay-submit lay-filter="LAY-user-login-submit"  >登陆</button>
            </div>
            </form>
            <div class="layui-trans layui-form-item layadmin-user-login-other">

                <a href="register.jsp" class="layadmin-user-jump-change layadmin-link">注册帐号</a>
            </div>
        </div>
    </div>

    <div class="layui-trans layadmin-user-login-footer">

    </div>

    <c:if test="${sessionScope.error == 'true'}">
        <script>
            layui.use('layer', function () {
                layer.msg("用户名或密码不正确",function () {

                })
            });
        </script>

    </c:if>

</div>

<script src="static/layuiadmin/layui/layui.js"></script>
<script src="static/jquery/jquery-3.1.0.min.js"></script>

<script>
    layui.use('layer', function(){
        
        var code = '${sessionScope.code}';
        var layer = layui.layer;
        var codeImg = document.getElementById("LAY-user-get-vercode");
        var username = document.getElementById("LAY-user-login-username");
        var password = document.getElementById("LAY-user-login-password");
        var vercode = document.getElementById("LAY-user-login-vercode");
        var from = document.getElementById("LAY-user-login-from");


        
        //修改验证码
        codeImg.onclick = function (ev) {
            codeImg.src = "code?token="+Math.random();
        }
        //完成登录逻辑
        document.getElementById("LAY-user-login-btn").onclick = function (ev) {
            code = '${sessionScope.code}';
            if(username.value == '' || username.value == null){
            layer.msg("用户名不能为空！",function () {
            });
            return false;
            }
            if(password.value == '' || password.value == null){
            layer.msg("密码不能为空！",function () {
            });
            return false;
            }

            var param = {
                code: vercode.value
            };


            $.post("codeVerify", param, function (data) {
                if (data === "true") {

                    from.submit();

                } else {
                    layer.msg("验证码输入有误！", function () {
                    });
                }
            });
            return false;
        };
    });
</script>
</body>
</html>