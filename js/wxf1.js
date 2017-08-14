/**
 * Created by wangxuefeng on 2017/6/21.
 */
/*
(function () {
  $(function () {
    $(".zero li").mouseover(function () {
      $(this).css({
        "-webkit-transform": "rotateZ(360deg)"
      });
    })
  });
})();
*/


(function () {
    $(function () {
      $("#smallLine").animate({top:0},{top:90},1000,function () {
        $("#smallLine").animate({top:90},{top:0},1000)
      })
      setInterval(function () {
        $("#smallLine").animate({top:0,top:90},1000,function () {
          $("#smallLine").animate({top:90,top:0},1000)
        })
      },2000)
    })
})();





(function () {
  var summer = document.getElementById("summer");
  var datas = [
    {
      "width": 400,
      "top": 82,
      "opacity": 1
    }];
  animate(summer, datas[0])
})();

(function () {
  var summer = document.getElementById("kuize");
  var datas = [
    {
      "width": 337,
      "top": 468,
      "opacity": 1
    }];
  animate(kuize, datas[0])
})();


(function () {
  var text = document.getElementById("text");
  var ios = document.getElementById("ios");
  var jt = document.getElementById("jt");
  var ck = document.getElementById("ck");
  var java = document.getElementById("java");
  var jt1 = document.getElementById("jt1");
  var ck1 = document.getElementById("ck1");
  ios.onclick = function () {
    jt.style.display = "block";
    ck.style.display = "block";
    jt1.style.display = "none";
    ck1.style.display = "none";
  };
  java.onclick = function () {
    jt1.style.display = "block";
    ck1.style.display = "block";
    jt.style.display = "none";
    ck.style.display = "none";
  }
})();
(function () {
  $(function () {
    // var timer=null;
    var index = 0;
    var $img = $("#ul>li");
    $(".summer").on("click", function () {
      index++;
      if (index == 7) {
        index = 0;
      }
      $img.eq(index).fadeIn(2000).siblings().fadeOut(2000);
    });
    setInterval(function () {
      $(".summer").click();
    }, 5000)
  });
})();