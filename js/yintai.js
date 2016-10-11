 
	$(function(){
		var bannerbox=$(".banner_box")[0];
		var boxWheel=$(".box_wheel")[0];
		var box=$(".box",boxWheel)[0];
		var as=$("a",box);
		var uls=$(".uls",bannerbox)[0]
		var lis=$("li",uls);
		// console.log(lis.length)
		var btnl=$(".wheel2_left",boxWheel)[0];
		var btnr=$(".wheel2_right",boxWheel)[0];
		lis[0].style.backgroundColor="#e5004f";
		var index=0;
		var asw=parseInt(getStyle(as[0],"width"));
		box.style.width=asw*as.length+"px";
		// alert(box.style.width)
		var t=setInterval(move,2000)
		function move(){
			index++;
			if(index==as.length){index=0}
				// animate(box,{left:-index*asw},500)
				for (var i = 0; i < as.length; i++) {
					lis[i].style.backgroundColor="";
					as[i].style.display="none"
				};
				lis[index].style.backgroundColor="#e5004f";
				as[index].style.display="block";
			}
		bannerbox.onmouseover=function(){
			clearInterval(t);
			animate(btnl,{opacity:1},100);
			animate(btnr,{opacity:1},100);
		}
		bannerbox.onmouseout=function(){
			t=setInterval(move,2000);
			animate(btnl,{opacity:0},100);
			animate(btnr,{opacity:0},100);
		}
		for (var i = 0; i < lis.length; i++) {
			lis[i].index=i;
			lis[i].onclick=function(){
				for(var j=0;j<lis.length;j++){
					lis[j].style.backgroundColor="";
					as[j].style.display="none";
				}
				lis[this.index].style.backgroundColor="#e5004f";
				as[this.index].style.display="block"
			}
		}
		btnr.onclick=function(){
			move();
		}
		btnl.onclick=function(){
			index--;
			if(index<0){index=lis.length-1}
				// animate(box,{left:-index*asw})
			for (var i = 0; i < lis.length; i++) {
				lis[i].style.backgroundColor="";
				as[i].style.display="none";
			}
			lis[index].style.backgroundColor="#e5004f";
			as[index].style.display="block"
		}
//分类遮罩
var bmask=$(".mask",bannerbox);
// console.log(bmask)
var bannerl=$(".banner_left",bannerbox)[0];
var blis=$("li",bannerl);
var bb=0;
for (var i = 0; i < blis.length; i++) {
	blis[i].bb=i;
	bmask[i].cc=i;
	console.log(bmask[i].cc)
	blis[i].onmouseover=function(){
		for (var j = 0; j < bmask.length; j++) {
			bmask[j].style.display="none"
		};
		bmask[this.bb].style.display="block"
	}
	blis[i].onmouseout=function(){
		bmask[this.bb].style.display="none";
	}
	bmask[i].onmouseover=function(){
		for (var j = 0; j < bmask.length; j++) {
			bmask[j].style.display="none"
		};
		bmask[this.cc].style.display="block";
	}
	bmask[i].onmouseout=function(){
		bmask[this.cc].style.display="none"
	}
};
var barr=$(".banner_right")[0];

var barrimg=$('img',barr)[0];
// console.log(barrimg)
barr.onmouseover=function(){
	animate(barr,{right:10},500)
}
barr.onmouseout=function(){
	animate(barr,{right:0},500)
}

//顶部效果
//调试
var wchat=$(".top_left2")[0];
var weimg=$(".weimg")[0];
wchat.onmouseover=function(){
	weimg.style.display="block"
}
wchat.onmouseout=function(){
	weimg.style.display="none"
}
var tphone=$(".tphone")[0];
var t3=$(".top_left3")[0];
console.log(tphone)
t3.onmouseover=function(){
	tphone.style.display="block"
}
t3.onmouseout=function(){

	tphone.style.display="none"
}


var tr1=$(".top_right5")[0];
var mt=$(".mt")[0]
console.log(mt)
tr1.onmouseover=function(){
	mt.style.display="block";
	this.style.backgroundColor="#fff";
}
tr1.onmouseout=function(){
	mt.style.display="none";
	this.style.backgroundColor=""
}
mt.onmouseover=function(){
	this.style.display="block"
	tr1.style.backgroundColor="#fff"
}
mt.onmouseout=function(){
	this.style.display="none";
	tr1.style.backgroundColor="";
}
//main1
	var main1=$(".main1")[0];
	var link=$(".main1_left_top",main1)[0];
	// console.log(link)
	var links=$("li",link);
	// console.log(links)
	var span=$("span",link);
	// console.log(span.length)
	var imgBox=$(".main1_left_bottom1")[0];
	var list=$(".main1_left_bottom",main1)
	// var iw=parseInt(getStyle(list[0],"width"))
	// alert(iw)
	// imgBox.style.width=iw*list.length+"px";
	// alert(imgBox)
	links[0].style.borderBottomColor="#e5004f";
	span[0].style.display="block";
	// console.dir(links[0])
	for(var i=0;i<links.length;i++){//给每个a标签加点击事件
		links[i].index=i;//保存i的下标
		links[i].onmouseover=function(){
			for(var j=0;j<list.length;j++){//隐藏内容
				list[j].style.display="none";
				links[j].style.borderBottomColor="";
				span[j].style.display="none";
				}
			list[this.index].style.display="block";
			this.style.borderBottomColor="#e5004f";
			span[this.index].style.display="block";
			// animate()
		}
	}


//main2线框变化
var m1lbox=$(".main1_left_bottom")
m2line(0)
m2line(1)
function m2line(a){
	var m1linebox=$(".mlb1",m1lbox[a]);
	for (var i = 0; i < m1linebox.length; i++) {
	m1linebox[i].onmouseover=function(){
			var m1line=$("div",this);
			animate(m1line[0],{width:218},500);
			animate(m1line[1],{height:258},500);
			animate(m1line[2],{width:218},500);
			animate(m1line[3],{height:258},500);
		}
	m1linebox[i].onmouseout=function(){
			var m1line=$("div",this);
			animate(m1line[0],{width:0},500);
			animate(m1line[1],{height:0},500);
			animate(m1line[2],{width:0},500);
			animate(m1line[3],{height:0},500);
		}

};
}


// main2选项卡
	var m2Brt=$(".main2_bottomrt")[0];
	var m2Lis=$("li",m2Brt);
	var m2BrtBox=$(".main2_bottomrb");
	// console.log(m2BrtBox)
	var m2Span=$("span",m2Brt);
	m2Lis[0].style.borderBottomColor="#e5004f";
	m2Span[0].style.display="block";
	var index1=0;
	for(var i=0;i<m2Lis.length;i++){
		m2Lis[i].index1=i;
		m2Lis[i].onmouseover=function(){
		   for (var j = 0; j < m2BrtBox.length; j++) {
		   	  m2Lis[j].style.borderBottomColor="";
		   	  m2BrtBox[j].style.display="none";
		   	  m2Span[j].style.display="none";
			}	
			this.style.borderBottomColor="#e5004f";
			m2BrtBox[this.index1].style.display="block";
			m2Span[this.index1].style.display="block";
		}
	}


//main2线框变化

var m2box=$(".main2_bottomrbt1")
for (var j = 0; j < m2box.length; j++) {
	var m2linebox=$("ul",m2box[j]);

	for (var i = 0; i < m2linebox.length; i++) {
		
		m2linebox[i].onmouseover=function(){
			var m2line=$("div",this);
			animate(m2line[0],{width:195,height:248},800);
			animate(m2line[1],{width:195,height:248},500);
		}
		m2linebox[i].onmouseout=function(){
			var m2line=$("div",this);
			animate(m2line[0],{width:0,height:0},800);
			animate(m2line[1],{width:0,height:0},500);
		}
	}
};
	//main3
	// var t=$(".bottom_mbox")
	// // console.log(t.length)
	// for (var i = 0; i < t.length; i++) {
	// 	changeT(t[i])
	// };
	function changeT(t){
	var main=$(".main3")[t];
	var mimgBox=$(".bimgbox",main)[0];
	// console.log(mimgBox)
	var m3Mbox=$(".bottom_mbox",main)[0];
	var mas=$("a",mimgBox);
	// console.log(mas)
	var miw=parseInt(getStyle(mas[0],"width"));
	// alert(miw)
	mimgBox.style.width=miw*mas.length+"px";
	// alert(mimgBox.style.width)
	var m3Lis=$("li",m3Mbox);
	var m3AnL=$(".main3_angel_l",m3Mbox)[0];
	// console.dir(m3AnL)
	var m3AnR=$(".main3_angel_r",m3Mbox)[0];
	// console.dir(m3AnL)
	m3Lis[0].style.backgroundColor="#e5400f";
	for (var i = 0; i < m3Lis.length; i++) {
		m3Lis[i].index=i;
		m3Lis[i].onclick=function(){
			for (var j = 0; j < mas.length; j++) {
				// mas[j].style.display="none";
				m3Lis[j].style.backgroundColor="";
			}
			// mas[this.index].style.display="block";
			m3Lis[this.index].style.backgroundColor="#e5400f";
			animate(mimgBox,{left:-this.index*miw},500)

		}
	}
	m3Mbox.onmouseover=function(){
		animate(m3AnL,{opacity:1},100)
		animate(m3AnR,{opacity:1},100)
	}
	m3Mbox.onmouseout=function(){
	     animate(m3AnR,{opacity:0},100)
	     animate(m3AnL,{opacity:0},100)
	}
	// 左右切换
	    var k=0;
		function change(){
			k++;
		if(k==mas.length){k=mas.length-1;}
		animate(mimgBox,{left:-k*miw},500)
		for(var i=0;i<mas.length;i++){
			// mas[i].style.display="none";//让所有的zIndex为0
			// mas[i].style.zIndex="0";
			m3Lis[i].style.backgroundColor="";
		}
		// mas[index].style.zIndex="10";//让当前的的zIndex为10
		// mas[k].style.display="block";
		m3Lis[k].style.backgroundColor="#e5400f";

	}
	m3AnR.onclick=function(){
		// alert(1)
			change();
		}
	m3AnL.onclick=function(){
		k--;
		if(k<0){k=0;}
		animate(mimgBox,{left:-k*miw},500)
			for(var i=0;i<mas.length;i++){
			// mas[i].style.zIndex="0";//让所有的zIndex为0
			// mas[i].style.display="none";
			m3Lis[i].style.backgroundColor="";
		}
		// mas[k].style.zIndex="10";//让当前的的zIndex为10
		// mas[k].style.display="block";
		m3Lis[k].style.backgroundColor="#e5400f";
	}


	//线框的线变化
	var botRbox=$(".bottom_rbox",main)[0];
	var abox=$("a",botRbox);	
	// console.log(abox.length)
	for (var i = 0; i < abox.length; i++) {
		abox[i].onmouseover=function(){
			var line=$(".border",this);
			animate(line[0],{width:257,height:179},800);
			animate(line[1],{width:257,height:179},500);
		}

		abox[i].onmouseout=function(){
				var line=$(".border",this);
				animate(line[0],{width:0,height:0},800);
				animate(line[1],{width:0,height:0},500);
		}
	};


//无缝轮播
var main=$(".main3")[t];
var bottomLt=$(".bottom_lt",main)[0]
var bottomWheel=$(".bottom_wheel",bottomLt)[0];
var imgs=$(".bottom_lt_box",bottomWheel);
// var liss=$("li",bottomLt);
// console.log(liss.length)
var anl=$(".angel_l",bottomLt)[0];
var anr=$(".angel_r",bottomLt)[0];
var indexx=0;
var next=0;
var iw=parseInt(getStyle(imgs[0],"width"));
// alert(iw)
imgs[0].style.left=0+"px";
// var t=setInterval(achange,2000)
	function achange(){

		next++;
		if(next==imgs.length){next=0}
		for (var i = 0; i < imgs.length; i++) {
			imgs[next].style.left=iw+"px";
			animate(imgs[indexx],{left:-iw},500);
			animate(imgs[next],{left:0},500);
		
			// liss[i].className="";
		}
		// liss[indexx].className="hot"
		indexx=next;
	}
	anr.onclick=function(){
		achange();
	}
	anl.onclick=function(){
		next--;
		if(next<0){next=imgs.length-1}		
		for (var i = 0; i < imgs.length; i++){
			imgs[next].style.left=-iw+"px";
			// alert(1)
			animate(imgs[indexx],{left:iw},500);
			animate(imgs[next],{left:0},500);
		
			// liss[i].className="";
		}
		// liss[index].className="hot"
		indexx=next;
	}
}
changeT(0);
changeT(1);
changeT(2);
changeT(3);
changeT(4);
changeT(5);
changeT(6);
changeT(7);
changeT(8);
changeT(9);

//右边固定效果
var fr=$(".mix_box")[0];
var tops=[];
var ft=true
var mflag=[];
var fras=$("a",fr)
var divs=$("div",fr)
var main=$(".main3")
var sh=document.documentElement.clientHeight
for (var i = 0; i < main.length; i++) {
	tops.push(main[i].offsetTop);
};
var mload=$(".main");
// console.log(mload)
var mtops=[];
for (var i = 0; i < mload.length; i++) {
	mtops.push(mload[i].offsetTop)
	mflag.push(true)
};
// console.log(mtops)
window.onscroll=function(){
	var stops=document.body.scrollTop||document.documentElement.scrollTop
	// 右边浮动的出现和消失
	if(stops>=800){
		if(ft){
			ft=false
			animate(fr,{marginRight:-650},200)
		}
		
	}else{
		if(!ft){
			ft=true;
			animate(fr,{marginRight:-800},200)
		}
	}
//滚动颜色变化
for (var i = 0; i < main.length; i++) {
	if(stops+200>=tops[i]){
		for (var j = 0; j< divs.length; j++) {
			divs[j].style.display="none";
		};
		divs[i].style.display="block"
	}
};
//点击到达指定模块
var frindex=0
for (var i = 0; i < fras.length; i++) {
	fras[i].frindex=i
	fras[i].onclick=function(){
		animate(document.body,{scrollTop:tops[this.frindex]-200},200)
		animate(document.documentElement,{scrollTop:tops[this.frindex]-200},200)
	}		
	}
fras[fras.length-1].onclick=function(){
	animate(document.body,{scrollTop:0},300)
	animate(document.documentElement,{scrollTop:0},300)
}

//移入改变颜色
for (var i = 0; i < fras.length; i++){
	// fras[i].frindex=i
	frchange(i)
	};
function frchange(i){
	fras[i].onmouseover=function(){
	divs[i].style.display="block"
	}
	fras[i].onmouseout=function(){
		divs[i].style.display="none"
	}
}

//按需加载图片 滚动到指定位置开始加载图片
	for(var i = 0; i < mload.length; i++) {
	var imgs=$("img",mload[i])
	if(stops+sh>=mtops[i]&&mflag[i]+100){
		mflag[i]=false;
		// console.log(1)
		for(var j=0;j<imgs.length;j++){
			imgs[j].src=imgs[j].getAttribute("asrc")
		}
	}
};




};


})

	
 