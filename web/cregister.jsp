<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<meta charset="utf-8" xmlns:c="http://www.w3.org/1999/XSL/Transform">
<head>
	<meta charset="utf-8" />	
	<title>天天生鲜－注册</title>
	<link rel="stylesheet" type="text/css" href="front/css/reset.css">
	<link rel="stylesheet" type="text/css" href="front/css/main.css">
</head>
<body>

	
	<div class="register_con">
		<div class="l_con fl">
			<a href="front/index.html" class="reg_logo"><img src="front/images/logo.png"></a>
			<div class="reg_slogan">足不出户  ·  新鲜每一天</div>
			<div class="reg_banner"></div>
		</div>

		<div class="r_con fr">
			<div class="reg_title clearfix">
				<h1>用户注册</h1>
				<a href="clogin.jsp">登录</a>
			</div>
			<div class="reg_form clearfix">
				<form action="cregister" method="post" id="reg_form">
					<input type="hidden" name="" value="e">
				<ul>
					<li>
						<label>用户名:</label>
						<input type="text" name="user_name" id="user_name">
						<span class="error_tip">提示信息</span>
					</li>
					<li>
						<label>密码:</label>
						<input type="password" name="pwd" id="pwd">
						<span class="error_tip">提示信息</span>
					</li>
					<li>
						<label>确认密码:</label>
						<input type="password" name="cpwd" id="cpwd">
						<span class="error_tip">提示信息</span>
					</li>
					<li>
						<label>电话:</label>
						<input type="text" name="tel" id="tel">
						<span class="error_tip">提示信息</span>
					</li>
					<li>
						<label>邮箱:</label>
						<input type="text" name="email" id="email">
						<span class="error_tip">提示信息</span>
					</li>
			
					<li class="agreement">
						<input type="checkbox" name="allow" id="allow" checked="checked">
						<label>同意”天天生鲜用户使用协议“</label>
						<span class="error_tip2">提示信息</span>
					</li>
					<li class="reg_sub">
						<input id="subbtn" type="submit" value="注 册">
					</li>
				</ul>				
				</form>
			</div>
		</div>
	</div>
    
    <!--底部开始-->
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
	<!--底部结束-->

	<script src="static/layuiadmin/layui/layui.js"></script>
	<script src="static/jquery/jquery-3.1.0.min.js"></script>
	<c:if test="${sessionScope.cregister == 'true'}">
		<script>
			layui.use('layer', function () {
				layer.msg("注册成功",function () {
					window.location.href = "${pageContext.request.contextPath}/clogin.jsp";
				})
			});
		</script>

	</c:if>
	<script>
		layui.use('layer', function(){

			var code = '${sessionScope.code}';
			var layer = layui.layer;

			var username = document.getElementById("user_name");
			var password = document.getElementById("pwd");
			var cpassword = document.getElementById("cpwd");
			var from = document.getElementById("reg_form");




			//完成登录逻辑
			document.getElementById("subbtn").onclick = function (ev) {
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
				if (password.value == cpassword.value) {
					from.submit();
				} else {
					layer.msg("两次密码不一样！",function () {
					});
					return false;
				}


				return false;
			};
		});
	</script>
</body></html>