//判断手机号
var photoFlag = null;
$("#photoName").blur(function(){	
	var str = $("#photoName").val();
	var reg1 = /^$/
	var reg = /^1[0-9]{10}$/;//手机号为一开头 的11位数 //^1[0-9]{10}$
	
	if( !reg1.test(str) ){
		if(!reg.test(str)){
			$("#photoName").parent().next(".phone_error").css("display","block")
			$("#photoName").parent().next(".phone_error").html("手机是1开头并且为11位数字");
			photoFlag = false;
		}else{
			photoFlag = true;
		}
	}else{
		$("#photoName").parent().next(".phone_error").css("display","block")
	    $("#photoName").parent().next(".phone_error").html("手机号不能为空");	
	    photoFlag = false;
	}
	//$(".phone_error").css("display","none").html("");
})

var pwdFlag = null;
$("#pwdName").blur(function(){
	var str = $(this).val();
	var reg = /^([\d]|[\w]){6,20}$///密码必须为6到11位的字母或数字
	var reg1 = /^$/
	if(!reg1.test(str)){
		if(!reg.test(str)){
			$(this).parent().next(".phone_error").css("display","block")
			$(this).parent().next(".phone_error").html("密码必须为6到11位的字母或数字");
			pwdFlag = false;
		}else{
			pwdFlag = true;
		}
	}else{
		$(this).parent().next(".phone_error").css("display","block")
	    $(this).parent().next(".phone_error").html("密码不能为空");	
	    pwdFlag = false;
	}
})


 var qpwdFlag = null;
$("#qpwdName").blur(function(){
	var pwd = $("#pwdName").val();
	var qpwd = $(this).val();
	if(pwd == qpwd){
		qpwdFlag = true;
	}else{
		$(this).parent().next(".phone_error").css("display","block")
		$(this).parent().next(".phone_error").html("两次输入的密码不一致");
		qpwdFlag = false;
	}
})




$("#photoName").focus(function(){
	$("#photoName").parent().next(".phone_error").html("");
	$("#photoName").parent().next(".phone_error").css("display","none")
})


$("#pwdName").focus(function(){
	$(this).parent().next(".phone_error").html("");
	$(this).parent().next(".phone_error").css("display","none")
})

$("#qpwdName").focus(function(){
	$(this).parent().next(".phone_error").html("");
	$(this).parent().next(".phone_error").css("display","none")
})


$("#submit").click(function(){
	if( $("#checkbox").prop("checked") ){
    	if(photoFlag && pwdFlag && qpwdFlag){
           setCookie("uname",$("#photoName").val(),3);
           setCookie("upwd",$("#pwdName").val(),3);
           alert("注册成功，点击确定跳转到首页");
           location.href = "index.html";
    	}	  
    }else{
    	$("#checkbox").parent().next(".phone_error").css("display","block")
    	$("#checkbox").parent().next(".phone_error").html("请勾选服务协议");
    }
})


$("#checkbox").click(function(){
	if( $("#checkbox").prop("checked") ){
    	$("#checkbox").parent().next(".phone_error").html("");
	    $("#checkbox").parent().next(".phone_error").css("display","none")
    }else{
    	$("#checkbox").parent().next(".phone_error").css("display","block")
    	$("#checkbox").parent().next(".phone_error").html("请勾选服务协议");
    }
})
