/**
 * Created by wangxuefeng on 2017/6/21.
 */
(function () {
    var ul=document.getElementById("ul");
    var lis=ul.getElementsByTagName("li");
    var divs=ul.getElementsByTagName("div");
    for(var i = 0 ; i < lis.length ; i++){
      lis[i].index=i;
      lis[i].onclick=function () {
          for(var j = 0 ; j < divs.length ; j++){
            divs[j].style.display="none";
          }
          divs[this.index].style.display="block";
      }
    }
})();

(function () {
    var ul=document.getElementById("ul");
    var lis=ul.getElementsByTagName("li");
    for(var i = 0 ; i < lis.length ; i++){
      lis[i].onmouseover=function () {
        for(var i = 0 ; i < lis.length ; i++){
          lis[i].style.backgroundImage="";
        }
        this.style.backgroundImage="url(../images/nav_hover_7928b1f.png)";
        this.style.zIndex=5;
      }
    }
})();