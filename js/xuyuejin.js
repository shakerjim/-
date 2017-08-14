/**
 * Created by lenovo on 2017/6/18.
 */
//网易链接
(function () {
    $(function () {
      $(".wygame .wyLogo>ul>li:eq(2)").mouseenter(function () {
  
        $(".wygame .wyLogo>ul>li:eq(2)>.linkPic").stop().fadeIn(1000);
      });
      $(".wygame .wyLogo>ul>li:eq(2)").mouseleave(function () {
    
        $(".wygame .wyLogo>ul>li:eq(2)>.linkPic").stop().fadeOut(1000);
      });
    });
})();

//表单控件
(function () {
  $("#zh").click(function () {
    $(".bigRegsiter").show();
    /*$(window).on("mousewheel",function () {
      return false;
    });*/
  });
  $(".cha").click(function () {
     $(".bigRegsiter").hide();
    /*$(window).off("mousewheel");*/
  });
  var btn4 = document.getElementById("btnFour");
  var btn1=document.getElementById("btn1");
  var btn2=document.getElementById("btn2");
  var phoneReg = /^(13[0-9]|14[578]|15[0-46-9]|17[0-9]|18[0-9])\d{8}$/;
  checkReg(btn4, phoneReg);
  var emailReg = /^\w+@\w+(\.\w+)+$/;
  checkReg(btn1, emailReg);
  var nameReg = /^\D+\w$/;
  checkReg(btn2, nameReg);
  var btn3 = document.getElementById("btn3");
  var strength = document.getElementById("strength");
  var strengthLevel = document.getElementById("strengthLevel");
  var arr = ["", "弱", "中", "强"];
  //判断他得长度
  btn3.onkeyup = function () {
    var level = 0;
    
    var count = this.value;
    
    if (/\d/.test(count)) {
      level++;
    }
    if (/[a-z]/.test(count)) {
      level++;
    }
    if (/[^a-z0-9]/.test(count)) {
      level++;
    }
    if (count.length < 6) {
      level = 0;
    }
    //根据level设置他的内容强弱
    strength.innerHTML = arr[level];
    //根据level设置他的类名
    strengthLevel.className = "strengthLv"+level;
  }
  var btn6=document.getElementById("btn6");
  
  var timer;
    btn6.onclick=function () {
      clearInterval(timer);
      var index=5;
      timer=setInterval(function () {
        index--
        btn6.value=index+"秒"
        btn6.disabled=true;
        if(index==0){
          clearInterval(timer);
          btn6.value="点击发送";
          btn6.disabled=false;
        }
      },1000);
    };
})();

// 视频播放图片缩放
(function () {
 $(function () {
   setInterval(function () {
     $("#downloadPic").animate({width:120,width:136},1000,function () {
       $("#downloadPic").animate({width:136,width:120},1000)
     });
   },2000);
    });
  $("#downloadPic").on("click",function () {
    $(".action").show();
  });
  $(".action").on("dblclick",function () {
    $(".action").hide();
  });
  $(".action").on("mouseenter",function () {
    $(".action").attr("controls","controls");
  });
  $(".action").on("mouseleave",function () {
    $(".action").removeAttr("controls");
  });
  
  
})();



// 顶部职业介绍
(function () {
  $(function () {
    $(".top_nav>ul>li:eq(3)").mouseenter(function () {
      $(".top_nav>ul>li:eq(3)>ul").show();
    });
    $(".top_nav>ul>li:eq(3)").mouseleave(function () {
      $(".top_nav>ul>li:eq(3)>ul").hide();
    });
    $(".top_nav>ul>li:eq(3)>ul>li").mouseenter(function () {
      $(".top_nav>ul>li:eq(3)>ul>li").css("box-shadow", "0 0 0 0 rgba(0,0,0,1)");
      
      $(this).css("box-shadow", "0 0 5px 5px rgba(228,191,37,1)");
    });
  });
})();


//简单轮播图
(function () {
  var pic_box = document.getElementById("pic_box");
  var bigPic = document.getElementById("bigPic");
  var smallPic = document.getElementById("smallPic");
  var lis = smallPic.getElementsByTagName("li");
  var imgs = smallPic.getElementsByTagName("img");
  for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onmouseover = function () {
      for (var i = 0; i < imgs.length; i++) {
        animate(imgs[i], {width: 100, height: 40, left: 0, top: 0, opacity: .4});
      }
      animate(imgs[this.index], {width: 150, height: 60, left: -20, top: -10, opacity: 1});
      animate(bigPic, {left: -this.index * 500});
    }
    lis[i].onmouseout = function () {
      for (var i = 0; i < imgs.length; i++) {
        animate(imgs[i], {width: 100, height: 40, left: 0, top: 0, opacity: 1});
      }
      /*animate(imgs[this.index], {width:150,height:60});
       animate(bigPic, {left: -this.index * 500});*/
    }
  }
})();

// 轮播图中间tab栏
(function () {
  var centerTop = document.getElementsByClassName("centerTop")[0];
  var lis = centerTop.getElementsByTagName("li");
  var centerBottom = document.getElementsByClassName("centerBottom")[0];
  var uls = centerBottom.getElementsByTagName("ul");
  var colors = ["red", "deeppink", "green", "blue"];
  for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onmouseover = function () {
      for(var i = 0;i < lis.length ; i++ ){
       lis[i].className="";
      }
      this.className="ss";
      for (var i = 0; i < uls.length; i++) {
        uls[i].style.display = "none";
      }
      uls[this.index].style.display = "block";
      uls[this.index].style.color = colors[this.index];
    }
  }
})();

// 轮播图最右边tab栏
(function () {
  $(function () {
    $(".news>.right>.rightTop li").mouseenter(function () {
      var num = $(this).index();
      $(".news>.right>.rightBottom ul").eq(num).slideDown().siblings().slideUp();
    });
  });
})();


// 图片链接高亮效果
(function () {
  $(function () {
    $(".news>.bottom>ul li").mouseenter(function () {
      $(".news>.bottom>ul li a").css("color", "#494f5d");
      $(".news>.bottom>ul li a").css("fontSize", "16px");
      $(this).css("opacity", 1).siblings().css("opacity", .6);
      $(this).children("a").css("color", "red");
      $(this).children("a").css("fontSize", "18px");
    });
    $(".news>.bottom").mouseleave(function () {
      $(".news>.bottom>ul li a").css("color", "#494f5d");
      $(".news>.bottom>ul li a").css("fontSize", "16px");
      $(".news>.bottom>ul li").css("opacity", .6);
    });
  });
})();


// 京东式轮播图
(function () {
  var bigImg = document.getElementsByClassName("bigImg")[0];
  var imgLis = bigImg.getElementsByTagName("li");
  var arrow = document.getElementsByClassName("arrow")[0];
  var dot = document.getElementsByClassName("dot")[0];
  var dotLis = dot.getElementsByTagName("li");
  var introduce = document.getElementsByClassName("introduce")[0];
  var arrowRight = document.getElementById("arrowRight");
  var arrowLeft = document.getElementById("arrowLeft");
  var count = 0;
  var timer;
  // 圆点轮播
  for (var i = 0; i < dotLis.length; i++) {
    dotLis[i].index = i;
    dotLis[i].onclick = function () {
      for (var i = 0; i < dotLis.length; i++) {
        dotLis[i].id = "";
      }
      this.id = "bg";
      if(count==imgLis.length-1){
        count=0;
        bigImg.style.left=0;
      }
      animate(bigImg, {left: -this.index * 1180})
      count = this.index;
      
    }
  }
  
  // 无缝轮播
  bigImg.appendChild(imgLis[0].cloneNode(true));
  timer=setInterval(arrowRight.onclick,2000);
  introduce.onmouseover = function () {
    arrow.style.display = "block";
    clearInterval(timer);
  }
  introduce.onmouseout = function () {
    arrow.style.display = "none";
    timer=setInterval(arrowRight.onclick,2000);
  }
  arrowRight.onclick = function () {
    for (var i = 0; i < dotLis.length; i++) {
      dotLis[i].id = "";
    }
    if (count == imgLis.length - 1) {
      count = 0;
      bigImg.style.left = 0;
    }
    count++
    animate(bigImg, {left: -count * 1180})
    if (count == imgLis.length - 1) {
      dotLis[0].id = "bg";
    } else {
      dotLis[count].id = "bg";
    }
  }
  arrowLeft.onclick = function () {
    for (var i = 0; i < dotLis.length; i++) {
      dotLis[i].id = "";
    }
    if (count == 0) {
      count = imgLis.length - 1;
      bigImg.style.left = -count * 1180 + "px";
    }
    count--
    animate(bigImg, {left: -count * 1180})
    dotLis[count].id = "bg";
  }
  
  
  
  
  
  
  
  
})();
//旋转木马
(function () {
  var playerPhotos=document.getElementById("playerPhotos");
  var uls=playerPhotos.getElementsByTagName("ul");
  var arrow=document.getElementById("arrow");
  var divs=arrow.children;
  var lis=playerPhotos.getElementsByTagName("li");
  var timer;
  var arr=[
    {"top":-80, "left":-150, "zIndex": 1,"opacity": 0.3},
    {"top":0, "left":-150, "zIndex": 3,"opacity": 0.5},
    {"top":100, "left":120, "zIndex": 5,"opacity": 1},
    {"top":0, "left":430, "zIndex": 3,"opacity": 0.5},
    {"top":-80, "left":400, "zIndex": 1,"opacity": 0.3}
  ];
  var classArr=["icon1","icon2","icon3","icon4","icon5"]
  for (var i = 0; i < uls.length; i++) {
    uls[i].className=classArr[i];
    animate(uls[i], arr[i]);
    playerPhotos.onmouseover = function () {
      animate(arrow, {opacity: 1});
      clearInterval(timer)
    }
    playerPhotos.onmouseout = function () {
      animate(arrow, {opacity: 0});
      timer=setInterval(divs[1].onclick,2000);
    }
    divs[1].onclick = function () {
        arr.unshift(arr.pop())
        classArr.unshift(classArr.pop())
        for (var i = 0; i < uls.length; i++) {
          uls[i].className=classArr[i];
          animate(uls[i], arr[i]);
        }
    }
    divs[0].onclick = function () {
        classArr.push(classArr.shift())
        arr.push(arr.shift())
        for (var i = 0; i < uls.length; i++) {
          uls[i].className = classArr[i];
          animate(uls[i], arr[i]);
        }
    }
  }
  for(var i = 0;i < lis.length ; i++ ){
     lis[i].onclick=function () {
       for(var i = 0;i < lis.length ; i++ ){
         lis[i].style.boxShadow="";
       }
       this.style.boxShadow="0 0 10px red"
     }
  }
})();
// 获奖公示
(function () {
  var $wP=$(".winPublicity>ul>li");
  var random=parseInt(Math.random()*$wP.length)
  $wP.slideUp();
  $(".winPublicity>ul>li").eq(random).slideDown();
  setInterval(function () {
    var $wP=$(".winPublicity>ul>li");
    var random=parseInt(Math.random()*$wP.length)
    $wP.slideUp();
    $(".winPublicity>ul>li").eq(random).slideDown();
  },2000);
    
  
})();
// 扫一扫
(function () {
  
  $(".actionLine").animate({top:0,top:210},2000,function () {
    $(".actionLine").animate({top:210,top:0},2000 )
  })
  
  setInterval(function () {
    $(".actionLine").animate({top:0,top:205},2000,function () {
      $(".actionLine").animate({top:205,top:0},2000 )
    })
  },4000);
})();
// 回到顶部
(function () {
 $(function () {
  $(".returnTop").on("click",function () {
    $(window).scrollTop(0);
  })
 });
  
})();