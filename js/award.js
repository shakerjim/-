/**
 * Created by SHAKER on 2017/6/18.
 */
//图片隐藏
(function () {
  $(function () {
    $("#topBarspan").mouseenter(function () {
      $("#menuImg").stop().show(1000);
      $("#menuImg").css("zIndex", 5)
    });
    $("#menuImg").mouseleave(function () {
      $("#menuImg").stop().hide(300)
    });
  })
})();

//固定导航栏
(function () {
  var topBar = document.getElementsByClassName("topBar")[0];
  var firstmain = document.getElementsByClassName("firstmain")[0];
  var navwrap = document.getElementsByClassName("navwrap")[0];
  var main = document.getElementsByClassName("main")[0];
  window.onscroll = function () {
    if (getScrollTop() >= (topBar.offsetHeight + firstmain.offsetHeight)) {
      navwrap.style.position = "fixed";
      navwrap.style.zIndex = 10;
      main.style.marginTop = 100 + "px";
      navwrap.style.top = 0;
    } else {
      navwrap.style.position = "static";
      main.style.marginTop = 0;
    }
  }
  function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
})();

//对阵轮播
(function () {
  var term = document.getElementsByClassName("term")[0];
  var prev = document.getElementsByClassName("prev")[0];
  var next = document.getElementsByClassName("next")[0];
  var match = document.getElementById("match");
  var index = 0;
  var timer = null;
  prev.onclick = function () {
    if (index == 14) {
      match.style.left = 0;
      index = 0;
    } else {
      index++;
      match.style.left = -185 * index + "px";
    }
  }
  next.onclick = function () {
    if (index == 0) {
      return;
    } else {
      index--;
      match.style.left = -185 * index + "px";
    }
  }
  timer = setInterval(function () {
    prev.onclick();
  }, 1000)
  term.onmouseover = function () {
    clearInterval(timer)
  }
  term.onmouseout = function () {
    timer = setInterval(function () {
      prev.onclick();
    }, 1500)
  }
})();

//直播频道轮播
(function () {
  var sliderbox = document.getElementsByClassName("slider-box")[0];
  var toparrow = document.getElementsByClassName("toparrow")[0];
  var bottomarrow = document.getElementsByClassName("bottomarrow")[0];
  var zbnav = document.getElementsByClassName("zb-nav")[0];
  var count = 0;
  var timer = null;
  toparrow.onclick = function () {
    if (zbnav.offsetTop <= -1080) {
      zbnav.style.top = "0px";
      count = 0;
    }
    count++;
    animate(zbnav, {top: -count * 180})
  }
  bottomarrow.onclick = function () {
    if (zbnav.offsetTop == 0) {
      zbnav.style.top = "-1080px";
      count = 6;
    }
    count--;
    animate1(zbnav, {top: -count * 180})
  }
  timer = setInterval(function () {
    if (zbnav.offsetTop == -1080) {
      zbnav.style.top = 0;
      count = 0;
    }
    toparrow.onclick();
  }, 3000);
  
  zbnav.onmouseover = function () {
    clearInterval(timer)
  }
  toparrow.onmouseover = function () {
    clearInterval(timer)
  }
  bottomarrow.onmouseover = function () {
    clearInterval(timer)
  }
  
  
  zbnav.onmouseout = function () {
    timer = setInterval(function () {
      if (zbnav.offsetTop == -1080) {
        zbnav.style.top = 0;
        count = 0;
      }
      toparrow.onclick();
    }, 3000);
  }
})();

//回到顶部

(function () {
  $(function () {
    $(window).scroll(function () {
      if($(this).scrollTop() >= 800) {
        $(".backtop").fadeIn();
      }else {
        $(".backtop").fadeOut();
      }
    });
    $(".backtop").click(function () {
      $("html,body").animate({scrollTop:0}, 2000, "linear");
    });
  });
})();

