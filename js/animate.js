
/**
 * Created by wangxuefeng on 2017/6/16.
 */
function animate(element,obj,fn) {
  clearInterval(element.timer);
  element.timer=setInterval(function () {
    var flag=true;
    for(k in obj){
      var attr=k;
      var target=obj[k];
      if(attr=="opacity"){
        var leader=getstyle(element,attr);
        leader=leader*1000;
        target=target*1000;
        leader=parseFloat(leader) || 0;
        var step=(target-leader)/10;
        //对step向上取整，保证每次都至少能跑一像素
        step=step>0?Math.ceil(step):Math.floor(step);
        leader+=step;
        element.style[attr]=leader/1000;
        if(target!=leader){
          flag=false;
        }
      }else{
        var leader=getstyle(element,attr);
        leader=parseInt(leader) || 0;
        var step=(target-leader)/10;
        //对step向上取整，保证每次都至少能跑一像素
        step=step>0?Math.ceil(step):Math.floor(step);
        leader+=step;
        element.style[attr]=leader+"px";
        if(target!=leader){
          flag=false;
        }
      }
    }
    if(flag){
      clearInterval(element.timer);
      fn && fn();
    }
  },100);
}

function getstyle(element,attr) {
  if(window.getComputedStyle){
    return window.getComputedStyle(element,null)[attr];
  }else{
    return element.currentStyle[attr];
  }
}