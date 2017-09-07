
//播放图片的背景图变化
function showPieceImgChange(){	
	 setInterval(function(){
	 	$("#showPiece_img").animate({"background-positionX":"-120"},1000,function(){
	 		$(this).animate({"background-positionX":"-160"},1000,function(){
	 			$(this).animate({"background-positionY":"-50"},1000,function(){
	 				$(this).animate({"background-positionY":"-90"},1000)
	 			})
	 		});
	 	});
	 },1000)
}
showPieceImgChange();

//产品点击信息
var a1 = document.getElementById("a1");
	a1.onmouseenter = function(e){
		e = e || event;
		x = e.pageX;
		y = e.pageY;
		var showPiece_one_message = document.getElementById("showPiece_one_message");
		showPiece_one_message.style.display = "block";		
		showPiece_one_message.style.left = x + "px";
		showPiece_one_message.style.top = y + 10 + "px";
	}
	a1.onmouseleave = function(){
		var showPiece_one_message = document.getElementById("showPiece_one_message");
		showPiece_one_message.style.display = "none";		
	}

var a2 = document.getElementById("a2");
	a2.onmouseenter = function(e){
		e = e || event;
		x = e.pageX;
		y = e.pageY;
		var showPiece_two_message = document.getElementById("showPiece_two_message");
		showPiece_two_message.style.display = "block";		
		showPiece_two_message.style.left = x + "px";
		showPiece_two_message.style.top = y + 10 + "px";
	}
	a2.onmouseleave = function(){
		var showPiece_two_message = document.getElementById("showPiece_two_message");
		showPiece_two_message.style.display = "none";		
	}
	
//图片与文字的切换变化
function wordOver(){
	$("#bigWord").animate({"top":25,"opacity":1},1000,function(){//大文字进来
		$("#showPieceLast2").animate({"top":0},1000,function(){//大文字进来后红色图片进来
			wordOut();
		});
	})
}

function wordOut(){
	$("#bigWord").animate({"opacity":0},500,function(){//大文字消失
		$("#showPieceLast2").animate({"left":0},function(){//红色图片向左移动
			  $("#bigWord").css({"top":95});//大文字回到原来的位置
			$("#franceSieling").animate({"top":10},1000,function(){//法国西林进来
				$("#styleBrand").animate({"top":40},1000,function(){
                 $("#styleBrand").css("top",100);
               	$("#showPieceLast2").css({"left":30,"top":200}) //红色图片回到原来的位置
	           $("#franceSieling").css("top",-30); //园林回到原来的位置
	           showImg()
				});//设计师品牌进来
				//$("#showPieceLast2").css({"left":30,"top":200,"z-index":0},1000) //红色图片回到原来的位置

			})
		})
	})
}
wordOver();

function showImg(){
    $("#showPieceLast1").animate({"top":0},1000,function(){//第二张图片进入
    	$("#showPieceLast1_word").animate({"left":80},1000,function(){//第二张图片对应的文字进入
    		$("#showPieceLast1_word").css("left",160);
    		$("#showPieceLast1").css("top",200);
    		wordOver();
    	})
    	
    })
}


//大轮播图本页第一个轮播图
             //四             //三            //二             //一
 //var arr = ["#ccd3ff","#ecede8","#de002c","#d5bda1"] //定义一个颜色数组
 
 var arr = ["#d5bda1","#de002c","#ecede8","#d5bda1","#ccd3ff"]
   slideShowTimer =   setInterval(slideShowAutoPlay,2000);
   var slideShowIndex = 0;
    
   function slideShowAutoPlay(){
   	 slideShowIndex++;
   	 if(slideShowIndex == 5){
   	 	 slideShowIndex = 0;
   	 }
   	 $("#img-list li").eq(slideShowIndex)
   	                  .animate({"opacity":1},1000)
   	                  .siblings()
   	                  .animate({"opacity":0},1000)
   	 
   	 $(".slideShow_left").animate({"background-color":arr[slideShowIndex]},1000);
   	 
   	 $("#banner-nav-list li").eq(slideShowIndex).addClass("active").siblings().removeClass("active");                
   }
   
      //鼠标移入定时器停止
      
      $(".slideShow_main").mouseenter(function(){
      	clearInterval(slideShowTimer);
      })
      
  	 $(".slideShow_main").mouseleave(function(){
  	 	slideShowTimer =   setInterval(slideShowAutoPlay,2000);
  	 })
  	 
  	 $("#banner-nav-list li").click(function(){
  	 	slideShowIndex = $(this).index()-1
  	 	slideShowAutoPlay();
  	 })
  
      //几个商品展示的移入移出事件 
      $("#advertisement_shop_left").mouseenter(function(){
      	 $(this).find("img").animate({"left":140},500)
      	 $(this).find(".p1").animate({"top":50,"opacity":1},500);
      	 $(this).find(".p2").animate({"top":70,"opacity":1},500).css("color","red");
      
      	 
      })
      
     $("#advertisement_shop_left").mouseleave(function(){
      	 $(this).find("img").animate({"left":120},500)
      	 $(this).find(".p1").animate({"top":30,"opacity":0.9},500);
      	 $(this).find(".p2").animate({"top":50,"opacity":1},500).css("color","#b6b6b6");
      	 
      })
     
     
      $("#advertisement_shop_center_one").mouseenter(function(){
      	 $(this).find("img").animate({"left":140},500)
      	 $(this).find(".p1").animate({"top":50,"opacity":1},500);
      	 $(this).find(".p2").animate({"top":70,"opacity":1},500).css("color","red");
      
      	 
      })
      
     $("#advertisement_shop_center_one").mouseleave(function(){
      	 $(this).find("img").animate({"left":120},500)
      	 $(this).find(".p1").animate({"top":30,"opacity":0.9},500);
      	 $(this).find(".p2").animate({"top":50,"opacity":1},500).css("color","#b6b6b6");
      	 
      })


     $("#advertisement_shop_center_two").mouseenter(function(){
      	 $(this).find("img").animate({"left":140},500)
      	 $(this).find(".p1").animate({"top":50,"opacity":1},500);
      	 $(this).find(".p2").animate({"top":70,"opacity":1},500).css("color","red");
      
      	 
      })
      
     $("#advertisement_shop_center_two").mouseleave(function(){
      	 $(this).find("img").animate({"left":120},500)
      	 $(this).find(".p1").animate({"top":30,"opacity":0.9},500);
      	 $(this).find(".p2").animate({"top":50,"opacity":1},500).css("color","#b6b6b6");
      	 
      })
     

    $("#advertisement_shop_right").mouseenter(function(){
      	 $(this).find("img").animate({"left":140},500)
      	 $(this).find(".p1").animate({"top":50,"opacity":1},500);
      	 $(this).find(".p2").animate({"top":70,"opacity":1},500).css("color","red");
      
      	 
      })
      
     $("#advertisement_shop_right").mouseleave(function(){
      	 $(this).find("img").animate({"left":120},500)
      	 $(this).find(".p1").animate({"top":30,"opacity":0.9},500);
      	 $(this).find(".p2").animate({"top":50,"opacity":1},500).css("color","#b6b6b6");
      	 
      })
     
//楼梯悬浮侧 鼠标移入变色
$(".stairs_nav_t").find("span").mouseenter(function(){
	$(this).css("background-color","#f15c18");
})
$(".stairs_nav_t").find("span").mouseleave(function(){
	$(this).css("background-color","#fff");
})
$(".stairs_nav_t").find("span").eq(0).mouseleave(function(){
	$(this).css("background-color","#f15c18");
})

//楼梯部分的js代码

$(window).scroll(function(){
	sTop = $(document).scrollTop();
	//console.log(sTop);
	// console.log( $(".stairs_stage .header").offset().top ) 
	if(sTop > $(".stairs_stage .stairs_stage_header").offset().top ){//控制左侧悬浮显示与消失
		$(".stairs_nav").css("display","block");
		
	}else{
		$(".stairs_nav").css("display","none");
	}
	
	for(var i = 0 ; i<$(".Louti").size(); i++){//楼梯效果代码
		if( Math.abs( $(".Louti").eq(i).offset().top - sTop )< $(".Louti").eq(i).height()/2   ){
			$(".stairs_nav_t ul li span").eq(i).css("background-color","#f15c18");
		}else{
			if(i){				
     			$(".stairs_nav_t ul li span").eq(i).css("background-color","#fff");
			}
		}
	}
	
})

//点击左侧楼梯的页面移动效果

$(".stairs_nav_t li:not('.top')").click(function(){
    var index = $(this).index();
	$("html,body").animate({"scrollTop":$(".Louti").eq(index).offset().top},1000)
})

//点击top回到顶部

$(".top").click(function(){
	$("html,body").animate({"scrollTop":0},1000)
})


//移到品牌各个dl下改变其透明度
$(".stairs_stage_header dl").mouseenter(function(){
	$(this).css("opacity","0.6")
})
$(".stairs_stage_header dl").mouseleave(function(){
	$(this).css("opacity","1")
})

//食品酒水选项卡
$(".foodBeverage_t_r .list").find("a").mouseenter(function(){
	$(this).addClass("active").siblings().removeClass("active");
	index = $(this).index();
    $(".foodBeverage_t_r .content").css("display","none");
    
     $(".foodBeverage_t_r .content").eq(index).css("display","block")
})


//食品酒水里面的轮播图
         var flag = true;
         var index = 0;
		 function autoPlay(){
		 	index++;
		 	if(index==4){
		 		index = 0;
		 	}
	 	     $(".content_carousel ul").animate({"margin-left":-339},1000,function(){
	 	    	 $(".content_carousel ul").css("margin-left",0);
	 		     $(".content_carousel ul").append($(".content_carousel ul li").eq(0));
	 		     flag = true;
	 	    })
	 	    $(".content_cicle span").eq(index).addClass("content_active").siblings().removeClass("content_active"); 
	 	    
	 }
    timer1 = setInterval(autoPlay,1500);
     
     $(".content_carousel").mouseover(function(){
     	clearInterval(timer1);
     	$(".left,.right").show();
     })
     
     $(".content_carousel").mouseout(function(){
     	timer1 = setInterval(autoPlay,1500);
     	$(".left,.right").hide();
     })
	 
	 $(".left").click(function(){
	 	if(flag){
	 		flag = false;
	  	 autoPlay();
	 		
	 	}
	 })
	 
	 
	 $(".right").click(function(){
	 	index--
	 	if(index==0){
	 		index = 4; 
	 	}
	 	 $(".content_cicle span").eq(index).addClass("content_active").siblings().removeClass("content_active"); 
	 	if(flag){
	 		flag = false;	
		 	$(".content_carousel ul").prepend( $("li:last") );
		 	$(".content_carousel ul").css("margin-left",-339);
		 	$(".content_carousel ul").animate({"margin-left":0},1000,function(){
		 		flag = true;
		 	})
	 	}
	 })

	



