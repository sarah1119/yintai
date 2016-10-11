//

function $(selector,range){
	//获取元素
	
	if(typeof selector=="string"){
		var range=range||document;
		if(selector.charAt(0)=="#"){
			return range.getElementById(selector.slice(1));
		}
		if(selector.charAt(0)=="."){
			return getClass(selector.substr(1),range);
		}
		if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
			return range.getElementsByTagName(selector)
		
		}

		// alert("字符");
	}
	//页面加载
	if(typeof selector=="function"){
		window.onload=selector;
		// alert("hanshu");
	}
}


//classname兼容
function getClass(classname,range){
	if(range.getElementsByClassName){
		return range.getElementsByClassName(classname);
	}else{
		var arr=[];
		//获取所有的标签
		var all=range.getElementsByTagName('*');
		//遍历 根据类名查找所需类
		for (var i = 0; i < all.length; i++){
			if(checkClass(all[i].className,classname)){
			arr.push(all[i]);
			}
		}
	return arr; 
	}
}
//检测当前元素的类名中是否包含查找的元素
function checkClass(tagClass,classname){
	var arr=tagClass.split(" ");//
	for(var i=0;i<arr.length;i++){
		if(arr[i]==classname){
			return true;
		}
	}
	return false;
}

//文本兼容
function textContent(obj,val){
	if(val==undefined){
		if(obj.textContent!=undefined){
			return obj.textContent;
		}else{
			return obj.innerText;
		}
	}else{
		if(obj.textContent!=undefined){
			obj.textContent=val;
		}else{
			obj.innerText=val;
		}
	}
}

//获取通用兼容
//getStyle(obj,attr)
//obj 要获取的对象 attr 要获取的属性
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		// if(getComoutedStyle(obj,null).attr){
		return window.getComputedStyle(obj,null)[attr];
		}
}