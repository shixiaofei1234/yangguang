
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
  
      
