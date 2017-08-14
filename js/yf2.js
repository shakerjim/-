/**
 * Created by sandy on 2017/6/21.
 */
(function () {
  //page2手风琴效果图
  var box=document.getElementById("box");
  var lis=box.getElementsByTagName("li");
  for(var i=0;i<lis.length;i++) {
    lis[i].index = i;
    if (i == 0) {
      lis[i].style.left = 0;
    } else {
      lis[i].style.left = i * 86 + 720 + "px";
    }
    lis[i].onmouseover = function () {
      for (var i = 0; i < lis.length; i++) {
        if (i <= this.index) {
          animate(lis[i], {left: 86 * i})
        } else {
          animate(lis[i], {left: 86 * i + 720})
        }
      }
    }
  }
  })();

(function () {
  //ios的透明度变成0.4
  var ios1=document.getElementById("ios1");
    ios1.onmouseover=function () {
      this.style.opacity=0.4;
  };
  ios1.onmouseout=function () {
    this.style.opacity=1;
  }
  
})();

(function () {
  //android1的透明度变成0.4
  var android1=document.getElementById("android1");
  android1.onmouseover=function () {
    this.style.opacity=0.4;
  };
  android1.onmouseout=function () {
    this.style.opacity=1;
  }
  
})();

(function () {
  //android1的透明度变成0.4
  var pc1=document.getElementById("pc1");
  pc1.onmouseover=function () {
    this.style.opacity=0.4;
  };
  pc1.onmouseout=function () {
    this.style.opacity=1;
  }
  })();



(function () {
  //回到顶部
  $(function () {
    $(".foot .go_top").click(function () {
      $("html,body").scrollTop(0);
    })
  })
  })();
(function () {
  $(function () {
    //二维码扫描
    setInterval(function () {
      if($(".pc_code .light").css("top")=="88px"){
        $(".pc_code .light").animate({top:0},1000,"linear")
      }else {
        $(".pc_code .light").animate({top:88},1000,"linear")
      }
    },1100)
  })
})();

(function () {
  $(function () {
    $(".person li").on("click",function () {
     var idx=$(this) .index();//存下标
      $(this).addClass("active").siblings().removeClass("active");
      $(".name div").eq(idx).animate({left:100});
      $(".name div").eq(idx).css("display","block").siblings().css("display","none");
      $(".per div").eq(idx).show(1000).siblings().hide(1000);
      $(".btn div").eq(idx).css("display","block").siblings().css("display","none");
      $(".circle div").eq(idx).css("display","block").siblings().css("display","none");
      $(".job_position div").eq(idx).css("display","block").siblings().css("display","none");
      $(".job_position div").eq(idx).animate({right:50}).siblings().css("display","none");
      $(".videolist video").hide();
    })
  })
  })();

(function () {
  //点击视频播放
 $(function () {
 $(".circle div").click(function () {
 var idx=$(this).index();
 $(".videolist video").eq(idx).css("display","block").siblings().css("display","none")
 })
 })
 })();

(function () {
  $(function () {
    $(".download_pc .ios").on("mouseenter",function () {
      $(this).css("opacity","0.4");
    });
    $(".download_pc .ios").on("mouseleave",function () {
      $(this).css("opacity","1");
    })
  })
  })();

(function () {
  $(function () {
    $(".download_pc .android").on("mouseenter",function () {
      $(this).css("opacity","0.4");
    });
    $(".download_pc .android").on("mouseleave",function () {
      $(this).css("opacity","1");
    })
  })
})();
 
  
