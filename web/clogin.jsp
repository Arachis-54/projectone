<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">	
	<title>天天生鲜－登录</title>
	<link rel="stylesheet" type="text/css" href="front/css/reset.css">
	<link rel="stylesheet" type="text/css" href="front/css/main.css">

</head>

<body>

	<div class="login_top clearfix">
		<a href="front/index.html" class="login_logo"><img src="front/images/logo.png"></a>
	</div>

	<div class="login_form_bg">
		<div class="login_form_wrap clearfix">
			<div class="login_banner fl"></div>
			<div class="slogan fl">日夜兼程 · 急速送达</div>
			<div class="login_form fr">
				<div class="login_title clearfix">
					<h1>用户登录</h1>
					<a href="cregister.jsp">立即注册</a>
				</div>
				<div class="form_input">
					<form action="clogin.jsp" method="post" id="from_login">
						<input type="text" name="username" id="username" class="name_input" placeholder="请输入用户" value="">
						<div class="user_error">输入错误</div>
						<input type="password" name="pwd" id="pwd" class="pass_input" placeholder="请输入密码" value="">
						<div class="pwd_error" style="display: none;">输入错误</div>
						
                            <img src="front/images/error.png" alt="captcha" class="captcha">
							<input id="id_captcha_0" name="captcha_0" type="hidden" value="">
                            <input autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" id="id_captcha_1" name="captcha_1" type="text" placeholder="请输入验证码">
						<img src="code" class="layadmin-user-login-codeimg" id="LAY-user-get-vercode">

						<div class="more_input clearfix">
							<input type="checkbox" name="" id="" checked="checked">
							<label>记住用户名</label>
							<a href="front/fogetPwd.html">忘记密码</a>
						</div>
						<input type="submit" id="subbtn" value="登录" class="input_submit">
					</form>
				</div>
			</div>
		</div>
	</div>

	<div class="footer login_footer">
		<div class="links">
			<a href="">关于软帝</a>
			<span>|</span>
			<a href="">热门培训</a>
			<span>|</span>
			<a href="">联系我们</a>
			<span>|</span>
			<a href="">在线报名</a>
		</div>
		<p>CopyRight © 2019 武汉软帝信息科技有限责任公司</p>
	</div>

	<script src="static/layuiadmin/layui/layui.js"></script>
	<script src="static/jquery/jquery-3.1.0.min.js"></script>

	<script>
		layui.use('layer', function(){

			var code = '${sessionScope.code}';
			var layer = layui.layer;
			var codeImg = document.getElementById("LAY-user-get-vercode");
			var username = document.getElementById("username");
			var password = document.getElementById("pwd");
			var vercode = document.getElementById("id_captcha_1");
			var from = document.getElementById("from_login");


			codeImg.onclick = function (ev) {
				codeImg.src = "code?token="+Math.random();
			}

			//完成登录逻辑
			document.getElementById("subbtn").onclick = function (ev) {
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