/**
 * Created by sandy on 2017/6/23.
 */
(function () {
  $(function () {
    //轮播图
    $(".science ol li").on("click",function () {
      $(this).css(
        {"transform":"scale(2,2)",
          //"boxShadow":"-3px 1px 18px 9px pink "
          
        }).siblings().css({
        "transform":"scale(1,1)",
        //"boxShadow":"0px 0px 0px 0px pink "
      })
    })
    
    
  })
 })();
(function () {
  //tab栏
  $(function () {
    $(".nav a").click(function () {
      var idx=$(this).index();
      $(this).animate({left:-60}).siblings().animate({left:0});
      $(".main_context div").eq(idx).css("display","block").siblings().css("display","none");
      return false;
    })
  })
})();

(function () {
  $(function () {
   $(".science ol li").on("click",function () {
     var idx=$(this).index();
     $(".science ul li").eq(idx).css("display","block").siblings().css("display","none")
     
   })
  })
})();
