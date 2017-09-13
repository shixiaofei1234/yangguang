/* 放大镜  控制mask出现与消失 */



$(function(){
	var html = "";
	var str = location.href;
	//http://127.0.0.1:8020/%E5%A4%AE%E5%B9%BF%E8%B4%AD%E7%89%A9/yangguang/html/detailPage.html?pid=001
	 str = str.split("?")[1];
	 pid = str.split("=")[1];
	
	 $.ajax({
	 	type:"get",
	 	url:"http://127.0.0.1/yggw/yangguang/json/shop_data.json",
	 	success:function(res){
	 		for(var i in res){
	 			if(res[i].pid == pid){
	 				ch = res[i]
	 				html=`<div class="detail_page">
					        	<div class="box">
					        		<div class="small" id="small">
					        			<img src="../image/detailPage/${res[i].src}">
					        			<div id="mask">
					        				
					        			</div>
					        		</div>
					        		<div class="big" id="big">
					        			<img src="../image/detailPage/${res[i].src}" id="bigImg">
					        		</div>	
					        	</div>
					        	<div class="construct">
					        		<div class="good_names">
					        		<h1>${res[i].name}</h1>
					        		<strong>${res[i].introduce}</strong>
					        		</div>
					        		<div class="price">
					        			<dl class="good_price">
					        				<dt>价格</dt>
					        				<dd>${res[i].price}</dd>
					        			</dl>
					        		</div>
					        		<dl class="logistics">
				        				<dt>物流</dt>
				        				<dd>
				        					配送至上海上海市宝山区
				                        </dd>
					        		</dl>	
					        		
					        		<dl class="sever">
				        				<dt>服务</dt>
				        				<dd>
				        					由神栗食品发货，并提供售后服务。
				                        </dd>
					        		</dl>
					        		
					        		<dl class="count">
					        			<dt>数量</dt>
				        				<dd>
				        					<div class="inputs">
				        						<span class="add">-</span>
				        						<input type="text" value="1" class="input_count"> 
				        						<span class="subtract">+</span>
				        					</div>	
				                        </dd>
					        		</dl>	
					        		<div class="nsc_buy">
					        			<div class="ncs_btn">
					        				<a href="#" class="buy_now">立即购买</a>
					        				<span data-id=${ch.pid}  data-name=${ch.name} data-src=${ch.src} data-price=${ch.price} data-introduce=${ch.introduce}  style="display:none"></span>
					        				<a href="#" class="add_shop_car">加入购物车</a>
					        			</div>
					        		</div>
					        		
					        	</div>	
				        	</div>`
	 			}
	 		}
	 		$(".worp").html(html);
	 		/*放大镜 开始*/
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
	 		/*放大镜 结束*/
	 		/* 加入购物车 */
	 		$(".add_shop_car").click(function(){
	 			var arr=[];
	 			var flag = true;
	 			var _json = {
					id:$(this).prev().data("id"),
					name:$(this).prev().data("name"),
					src:$(this).prev().data("src"),
					price:$(this).prev().data("price"),
					introduce:$(this).prev().data("introduce"),
					count:$(".input_count").val()
				}
	 			
	 			var cookieInfo = getCookie("shoplist");
	 			if(cookieInfo.length!=0){
	 				arr=cookieInfo;
	                for(var i in arr ){
	                	if(_json.id == arr[i].id && _json.name == arr[i].name){
							arr[i].count = parseInt(arr[i].count)  + parseInt(_json.count);
							flag = false;
							break;
						}
	                }
	 			}
	 			if(flag){
	 				arr.push(_json)
	 			}
	 			setCookie("shoplist",JSON.stringify(arr));
		 		var f = confirm("是否继续购买?确定--继续购买，取消---去购物车结算");
					if( !f ){
						location.href = "shopCar.html";
					}

	 		})
	 		/*加入购物车结束*/
	 		/*数量的加减运算 开始*/
	 		 check();
	 		function check(){
	 			if(parseInt( $(".input_count").val())==1){
	 				$(".add").css({"cursor":"not-allowed","color":"#E1E1E1"});
	 			}else{
	 				$(".add").css({"cursor":"pointer","color":"#111111"});
	 			}
	 		}
	 		
	 		$(".subtract").click(function(){
	 			//alert($(".input_count").val())
	 	        count =  parseInt( $(".input_count").val()) +1;
	 	        $(".input_count").val(count);
	 	         check();
	 		})
	 		
	 		$(".add").click(function(){
	 			//alert($(".input_count").val())
	 	        count =  parseInt( $(".input_count").val()) -1;
	 	        $(".input_count").val(count);
	 	        
	 	        if(count <= 1){
	 	        	 $(".input_count").val(1);
	 	        }
	 	         check();
	 		})
	 		
	 		
	 		/*数量的加减运算 结束*/
	 		
	 	}
	 })	
})










$(".small").mouseenter(function(){
	$("#mask").css("display","block");
})
$(".small").mouseleave(function(){
	$("#mask").css("display","none");
})



