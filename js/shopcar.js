
//页面加载

/*<div class="nc_car_b">
	<div class="m-r-5">
		<span><input type="checkbox"></span>
	</div>
	<div class="good-img">
		<img src="../image/detailPage/1.jpg" style="width: 80px;height: 80px;">
	</div>
	<div class="good-main">
		<div class="good-main-t">
			<a href="#">神栗河北特产有机板栗仁66g*4袋 原产地直供</a>
		</div>
		<div class="good-main-b">
			<div class="quantity">
				<div class="minus">-</div>
				<input type="text" value="1" class="goods_text" />
				<div class="add">+</div>
			</div>
			<div class="goods_price">
				39.80
			</div>
			<div class="goods_total_price">
				39.80
			</div>
		</div>
	</div>
</div>*/
$(function(){
	 arr = getCookie("shoplist");
   if(arr.length == 0){
   	   str = $("<div class='sss' style='text-aligh:center;line-height:400px;height:800px;width:800px;font-size:40px;color:#F15C18'>你的购物车还是空的</div>");
       str.css({"position":"absolute","left":500,"top":140})   	 
   	   $(".shop_car_b").append(str);
   	   return;
   }
  var count = arr.length+"/100"; 
  $(".s").html(count);
  $(".small_s").css("width",arr.length);
  for(var i in arr){
  	 var shopinfo = arr[i]
  	 var html = "";
  	 var price = shopinfo.price.replace("￥","");
  	 var zprice = ( parseInt(shopinfo.count)*price ).toFixed(2);
  	 html = `<div class="nc_car_b">
				<div class="m-r-5">
					<span><input type="checkbox" class='ck'></span>
				</div>
				<div class="good-img">
					<img src="../image/detailPage/${shopinfo.src}" style="width: 80px;height: 80px;">
				</div>
				<div class="good-main">
					<div class="good-main-t">
						<a href="#">${shopinfo.name}</a>
					</div>
					<div class="good-main-b">
						<div class="quantity">
							<div class="minus">-</div>
							<input type="text" value="${shopinfo.count}" class="goods_text" />
							<div class="add">+</div>
						</div>
						<div class="goods_price">
							${shopinfo.price}
						</div>
						<div class="goods_total_price">${zprice}</div>
					</div>
				</div>
			</div>`
          $(".shop_car_b").append(html);
    } 
    
    if(parseInt(shopinfo.count ) == 1){
    	$(".minus").css("cursor","not-allowed");
    }else{
    	$(".minus").css("cursor","pointer");;
    }
})

//加法运算
$(".shop_car_b").on("click",".add",function(){
	 var count = parseInt($(".goods_text").val() ) +1 ;
	 $(".goods_text").val(count);
	 var unitPrice = $(this).parent().next().html();
	 unitPrice =unitPrice.replace("￥","");
	 var zprive = Number(unitPrice)*count;
	 $(".goods_total_price").html(zprive.toFixed(2));
	 check()
	 //获取当前点击的商品id
	 var name = $(this).parent().parent().prev().find("a").html();
	 for(var i in arr){
	 	if(name == arr[i].name){
	 		arr[i].count++;
	 		setCookie("shoplist",JSON.stringify(arr));
	 	}
	 }
	 //点击增加数量 总价增加
	  
	 
})

//减法运算
$(".shop_car_b").on("click",".minus",function(){
	 var count = parseInt($(".goods_text").val() ) -1 ;
	 $(".goods_text").val(count); 
	 var name = $(this).parent().parent().prev().find("a").html();
	 var unitPrice = $(this).parent().next().html();
	 unitPrice =unitPrice.replace("￥","");
	 var zprive = Number(unitPrice)*count;
	 $(".goods_total_price").html(zprive.toFixed(2));
	 for(var i in arr){
	 	if(name == arr[i].name){
	 		arr[i].count--;
	 		setCookie("shoplist",JSON.stringify(arr));
	 	}
	 }
	 
	  check();
	 if(count <= 1){
	 	$(".minus").css("cursor","not-allowed");
	 	 $(".goods_text").val(1);
	 	 arr[i].count = 1;
	 	 setCookie("shoplist",JSON.stringify(arr));
	 	 $(".goods_total_price").html(unitPrice);
	 }
})



function check(){
	if(parseInt( $(".input_count").val())==1){
		$(".minus").css({"cursor":"not-allowed"});
	}else{
		$(".minus").css({"cursor":"pointer"});
	}
}



//全选  计算总个数  与总价
$(".shop_car_b_warp").on("click",".quan",function(){
	$(".ck").prop("checked", $(this).prop("checked"));
	$(".quan").prop("checked", $(this).prop("checked"));
	if( $(this).prop("checked") ){
		var typeNum = arr.length;
		var zNum = 0;
		var zPrice = 0;
		for(var i in arr){
			zNum += parseInt(arr[i].count); 
			zPrice  += ( parseInt(arr[i].count)*arr[i].price.replace("￥","") ) 
		}
		$(".zPrice").html(zPrice.toFixed(2));
		$(".typeNumber").html(typeNum);	
		$(".zNumber").html(zNum);
	}else{
		$(".typeNumber").html(0);	
		$(".zNumber").html(0);
	}
})


//删除选中的商品

$(".shop_car_b_warp").on("click",".deal",function(){
	
	for(let i=0;i<$(".ck").size();i++){
		if( $(".ck").eq(i).prop("checked") ){
			$(".ck").eq(i).parent().parent().parent().remove();
		}
	}
})


