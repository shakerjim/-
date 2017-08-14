//顶部标题飞入
(function () {
  var tb1=document.getElementById("tb1");
  var ptm=document.getElementsByClassName("ptm")[0];
  ptm.onmouseover=function () {
    animate(tb1,{top:35,opacity:1});
  }
})();

//关闭固定定位
$(function () {
  $("#tb2 .xcc").click(function () {
    console.log(111);
    $(this).parent().fadeOut();
  });
});
  
//导航跟随效果
(function () {
  var dn=document.getElementsByClassName("dn")[0];
  var dh=document.getElementById("dh");
  var lis=dh.children;
  window.onscroll=function () {
    var top=window.pageYOffset;
    if(top>=700){
      dn.classList.add("fix");
    }else{
      dn.classList.remove("fix");
    }
    if(top<880){
      for(var i=0; i<lis.length; i++){
        lis[i].classList.remove("top-h");
      }
      lis[0].classList.add("top-h");
    }
    if(top>=880 && top<1550){
      for(var i=0; i<lis.length; i++){
        lis[i].classList.remove("top-h");
      }
      lis[1].classList.add("top-h");
    }
    if(top>=1550 && top<2800){
      for(var i=0; i<lis.length; i++){
        lis[i].classList.remove("top-h");
      }
      lis[2].classList.add("top-h");
    }
    if(top>2800 && top<3000){
      for(var i=0; i<lis.length; i++){
        lis[i].classList.remove("top-h");
      }
      lis[3].classList.add("top-h");
    }
    if(top>=3000){
      for(var i=0; i<lis.length; i++){
        lis[i].classList.remove("top-h");
      }
      lis[4].classList.add("top-h");
    }
  }
  for(var i=0; i<lis.length; i++){
    lis[i].onclick=function () {
        for(var i=0; i<lis.length; i++){
          lis[i].classList.remove("top-h");
        }
        this.classList.add("top-h");
    }
  }
})();








//表格轮播图
$(window).load(function() {


(function () {
   var tabtitle=document.getElementsByClassName("tab-title")[0];
  var lis=tabtitle.children;
  var tabtb=document.getElementsByClassName("tab-tb")[0];
  var tas=document.getElementById("tas");
  var right=document.getElementsByClassName("s-right")[0];
  var left=document.getElementsByClassName("s-left")[0];
  var divs=tas.children;
  var clo=divs[0].cloneNode(true);
  tas.appendChild(clo);
  clo.id="ta9";
  imgWidth=divs[7].offsetWidth;
  //标题轮播
  for(var i=0; i<lis.length; i++){
    lis[i].index=i;
    lis[i].onclick=function () {
        for(var i=0; i<lis.length; i++){
          lis[i].classList.remove("col-1");
        }
        this.classList.add("col-1");
      count=this.index;
      animate(tas,{left:-this.index*imgWidth});
    }
  }
  //左右点击轮播
  var count=0;
  right.onclick=function () {
    if(count==divs.length-1){
      count=0;
      tas.style.left=0;
    }
      count++;
    tas.style.left=-count*imgWidth+"px";
    //标题跟动
    for(var i=0; i<lis.length; i++){
      lis[i].classList.remove("col-1");
    }
    
    if(count==divs.length-1){
      lis[0].classList.add("col-1");
    }else{
      lis[count].classList.add("col-1");
    }
  }
  
  left.onclick=function () {
      if(count==0){
        count=divs.length-1;
        tas.style.left=-count*imgWidth+"px";
      }
      count--;
    tas.style.left=-count*imgWidth+"px";
    //标题跟动
    for(var i=0; i<lis.length; i++){
      lis[i].classList.remove("col-1");
    }
    lis[count].classList.add("col-1");
  }
  //自动轮播
  var timer=null;
  timer=setInterval(function () {
    right.onclick();
  },2000)
  tabtb.onmouseover=function () {
      clearInterval(timer);
  }
  tabtb.onmouseout=function () {
    timer=setInterval(function () {
      right.onclick();
    },2000);
  }
  
  
  
  
})();
});




//切换栏
(function () {
    var lef=document.getElementsByClassName("left")[0];
  var rig=document.getElementsByClassName("right")[0];
  var tabt=document.getElementsByClassName("tab-t")[0];
  var tabj=document.getElementsByClassName("tab-j")[0];
  lef.onclick=function () {
      rig.classList.remove("yes");
    lef.classList.add("yes");
    tabt.style.display="block";
    tabj.style.display="none";
  }
  rig.onclick=function () {
   lef.classList.remove("yes");
    rig.classList.add("yes");
    tabj.style.display="block";
    tabt.style.display="none";
  }
})();

//图片放大
$(function () {
   $(".pho li img").mouseenter(function () {
       $(this).addClass("big");
   });
  $(".pho li img").mouseleave(function () {
    $(this).removeClass("big");
  });
});
//旋转
(function () {
    var paw=document.getElementsByClassName("paw")[0];
  var lis=paw.children;
  for(var i=0; i<lis.length; i++){
    lis[i].onmouseover=function () {
        this.classList.add("fz");
    }
    lis[i].onmouseout=function () {
      this.classList.remove("fz");
    }
  }
})();

//中间自动轮播图
$(function () {
  var tvmain = $(".tvmain");
  var img = $(".tv2>img");
  var zsj=$(".zsj");
  var ysj=$(".ysj");
  var index = 0;
  
  tvmain.mouseenter(function () {
    zsj.css("display","block");
    ysj.css("display","block");
    clearInterval(timer);
  });
  
  tvmain.mouseleave(function () {
    zsj.css("display","none");
    ysj.css("display","none");
  
    timer=setInterval(function () {
      ysj.click();
    },3500);
  });
  
  ysj.click(function () {
    index++;
    if (index == 10) {
      index = 0;
    }
    img.eq(index).fadeIn(2000).siblings().fadeOut(2000);
  });
  
  zsj.click(function () {
    index--;
    if(index==-1){
      index=9;
    }
    img.eq(index).fadeIn(2000).siblings().fadeOut(2000);
  });
  
  
  //自动轮播
  var timer=null;
  timer=setInterval(function () {
    ysj.click();
  },3500);
  
});


//中间旋转木马
(function () {
  var datas= [
    {
      "width": 350,
      "top": 20,
      "left": 50,
      "opacity": 0.2,
      "zIndex": 2
    },//0
    {
      "width": 450,
      "top": 70,
      "left": 0,
      "opacity": 0.8,
      "zIndex": 3
    },//1
    {
      "width": 700,
      "top": 100,
      "left": 100,
      "opacity": 1,
      "zIndex": 4
    },//2
    {
      "width": 450,
      "top": 70,
      "left": 480,
      "opacity": 0.8,
      "zIndex": 3
    },//3
    {
      "width": 350,
      "top": 20,
      "left": 530,
      "opacity": 0.2,
      "zIndex": 2
    },//4
    {
      "width": 250,
      "top": 0,
      "left": 320,
      "opacity": 0.1,
      "zIndex": 1
    },//5
  ];
  var tv3=document.getElementsByClassName("tv3")[0];
  var zsj=document.getElementsByClassName("zsj")[0];
  var ysj=document.getElementsByClassName("ysj")[0];
  var tv3=document.getElementsByClassName("tv3")[0];
  var imgs=tv3.children;
  var flag=true;
  for(var i=0; i<imgs.length; i++){
    animate(imgs[i],datas[i]);
  };
  ysj.onclick=function () {
    if(flag){
      flag=false;
      datas.unshift(datas.pop());
      for(var i=0; i<imgs.length; i++){
        animate(imgs[i],datas[i],(function () {
          flag=true;
        }));
      }
   
    }
  };
  zsj.onclick=function () {
    datas.push(datas.shift());
    for(var i=0; i<imgs.length; i++){
      animate(imgs[i],datas[i]);
    }
  };
  var timer=null;
  timer=setInterval(function () {
    ysj.onclick();
  },5000);
  
  tv3.onmouseenter=function () {
    clearInterval(timer);
  }
  tv3.onmouseleave=function () {
    timer=setInterval(function () {
      ysj.onclick();
    },4000);
  }
  
  
  
  
  
})();

//中间tap栏
$(function () {
  var tvtap=$(".tvtap>div");
  var tap=$(".tvmain>div");
  tvtap.click(function () {
    var index=$(this).index();
    tap.eq(index).css("display","block").siblings().css("display","none");
    //视频暂停
    /*var video=$("video");
    var dis=$(".tv1").css("display");
    console.log(dis);
    if(dis=="none"){
      video.pause();
    }*/
    
  });
  
});

//中间视频