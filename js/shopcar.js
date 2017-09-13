
//页面加载
$(function(){
	var arr = getCookie("shoplist");
   if(arr.length == 0){
   	   str = $("<div style='text-aligh:center;line-height:400px;height:800px;width:800px;font-size:40px;color:#F15C18';float:left;>你的购物车还是空的</div>");
   	   $(".main_warp").append(str);
   }
  
})
