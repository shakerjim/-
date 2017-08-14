/**
 * Created by lenovo on 2017/6/24.
 */
(function () {
  $(function () {
    $("#pic li").click(function () {
      $(this).css({
        /*"-webkit-transform": "rotateY(360deg)",
         "-webkit-transform": "rotateX(360deg)",*/
        "-webkit-transform": "rotateZ(360deg)"
      });
      var dex = $(this).index();
      var url = "../images/member" + dex + ".jpg";
      
      setTimeout(function () {
        $("#pic li").eq(dex).children('img').attr('src', url);
      }, 1000);
      $(".member").hide()
      $(".member").eq(dex).slideDown(1000);
      $(".small").click(function () {
        $(this).parent(".member").slideUp(1000);
      });
    });
  });
})();


(function () {
  
  $(function () {
     $(".content p:odd").css("backgroundColor","#FFF6AA");
    $(".content p:even").css("backgroundColor","#97A8FF");
  });
})();