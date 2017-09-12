

//点及导航切换登录方式

$(".tab_nav_login_common").click(function(){
	$(this).addClass("tablogin_active").parent().siblings().find("a").removeClass("tablogin_active");
	$(".mobieleLogin").css("display","none");
	$(".commonModule").css("display","block");
	
})

$(".tab_nav_login_phone").click(function(){
	$(this).addClass("tablogin_active").parent().siblings().find("a").removeClass("tablogin_active");
	$(".commonModule").css("display","none");
	$(".mobieleLogin").css("display","block");
	
})

//登录验证

var uname = getCookie("uname");
var pwd = getPwd("upwd");


$("#login").click(function(){
	
	if($("#verificationcode").val() == $("#verificationcode_s").html()){
		if(uname == $("#photoName").val() ){
	     if(pwd == $("#pwd").val()){
	        alert("登录成功，点击确定跳转到首页");
	        location.href = "index.html";
	     }else{
	     	 $("#pwd").parent().next(".phone_error").css("display","block")
		     $("#pwd").parent().next(".phone_error").html("密码不正确");	
	     }
	 }else{
	     $("#photoName").parent().next(".phone_error").css("display","block")
		 $("#photoName").parent().next(".phone_error").html("用户名不存在");	
		 return;
	 }
	}else{
		 $("#verificationcode").parent().next(".phone_error").css("display","block")
		 $("#verificationcode").parent().next(".phone_error").html("验证码输入错误");
	}
})



function getPwd(key){
	var str = document.cookie;
	if( str ){
		var arr = str.split("; ");
		for (var i = 0 ; i < arr.length ; i++) {
			var item = arr[i].split("=");
			if( item[0] == key ){
				return item[1];
			}
		}
		//循环结束后  有cookie。但是没有key，就可以返回一个空数组
		return [];
	}
	//如果没有cookie  也返回一个空数组
	return [];
}


//获取焦点     错误提示消失

$("#photoName").focus(function(){
	$("#photoName").parent().next(".phone_error").html("");
	$("#photoName").parent().next(".phone_error").css("display","none")
})


$("#pwd").focus(function(){
	$(this).parent().next(".phone_error").html("");
	$(this).parent().next(".phone_error").css("display","none")
})

$("#verificationcode").focus(function(){
	$(this).parent().next(".phone_error").html("");
	$(this).parent().next(".phone_error").css("display","none")
	$("#verificationcode_s").html(setYan());
	
})

//随机获取验证码 并赋值到验证码框中


//鼠标移到验证码上面出现
$("#verificationcode_s").mouseenter(function(){
	$(".verificationcode_d").css("display","block")
})

$(".verificationcode_d").mouseleave(function(){
	$(this).css("display","none");
})

$(function(){
	$("#verificationcode_s").html(setYan());
})
function setYan(){
	var arr = [];
	for(var i= 0;i<4;i++){
		var code = Math.floor(Math.random()*(122-48+1)+48);
		if(code >= 58 && code <= 64   ||  code >= 91 && code <= 96 ){
			i--;
		}else{
			arr[i] = String.fromCharCode(code);
		}
	}
	arr = arr.join("");
	return arr;
}

$(".verificationcode_d").click(function(){
	
	$("#verificationcode_s").html(setYan());
	
})

