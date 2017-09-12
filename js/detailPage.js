/* 放大镜  控制mask出现与消失 */

$(".small").mouseenter(function(){
	$("#mask").css("display","block");
})
$(".small").mouseleave(function(){
	$("#mask").css("display","none");
})


$(".small").on({
	mouseenter:function(){
		$("#mask").css("display","block");
		$("#big").css("display","block");
	},
	mouseleave:function(){
		$("#mask").css("display","none");
		$("#big").css("display","none");
	},
	mousemove:function(e){
		var e = e || event;
			var x = e.pageX - $(".box").offset().left - $("#mask").width()/2;
			var y = e.pageY - $(".box").offset().top - $("#mask").height()/2;
			var maxL = $(".box").width() - $("#mask").width();
			var maxT = $(".box").height() - $("#mask").height();
			x =Math.min( maxL , Math.max( 0 ,x ) ); 
			y =Math.min( maxT , Math.max( 0 ,y ) ); 
			$("#mask").css({
				left : x , 
				top : y,
				backgroundPositionX : -x,
				backgroundPositionY : -y
			})
			
			//大图宽度/小图宽度 = 大图left/ x
			var bigImgX = x*$("#bigImg").width()/$(".box").width();
			var bigImgY = y*$("#bigImg").height()/$(".box").height();
			
			$("#bigImg").css({
				left : -bigImgX,
				top : -bigImgY
			})

	}
})
