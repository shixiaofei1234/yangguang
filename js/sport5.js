// obj要操作的对象
// json  存放多个attr和多个target
// callback 回调函数
var flag=null;// 开关  值为 true 时， 停止定时器 
function startMove(obj,json,callback){
	clearInterval( obj.timer );
	obj.timer = setInterval(function(){
		flag = true;
		for( var attr in json ){
			var current = 0;
			if( attr == "opacity" ){ //透明度的current值的获取
				current = parseFloat( getStyle( obj, attr ) ) * 100; 
			}else if( attr == "zIndex" ){
				current = parseInt( getStyle(obj,attr) ) ;
			}else{
				current = parseInt( getStyle(obj,attr) ) ;//  Number("100px") --> NaN
			}
			
			
			
			var speed = (json[attr] - current)/10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if( json[attr] != current ){
				flag = false;
			}
			
			
			if( attr == "opacity" ){
				obj.style.opacity = ( current + speed )/100;
			}else if( attr == "zIndex" ){
				obj.style.zIndex = json[attr];
			}else{
				obj.style[attr] = current + speed + "px";
			}
		}

		//停止定时器   循环结束后判断开关变量的值是否为true
		if( flag ){
			//上一个动作结束了
			clearInterval( obj.timer );
			if( callback ){
				callback();// 调用回调函数
			}
		}
		
	},30)
}

function getStyle(obj,attr){
	if( window.getComputedStyle ){
		return window.getComputedStyle(obj,false)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}