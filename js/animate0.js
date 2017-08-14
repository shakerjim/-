/**
 * Created by Administrator on 2017/6/14.
 */
//缓动函数封装
function animate(element,obj,fn) {
  //清除多次点击的计时器bug
  clearInterval(element.timer);
  element.timer=setInterval(function () {
    //假设成立法 假设所有属性操作执行完毕
    var flag=true;
    for (var k in obj ) {
      //定义一个对象,可以执行多个属性
      //转化参数
      var attr=k;
      var target=obj[k];
      
      //1.透明度的特殊处理
      if(attr=="opacity"){
        //调用获得当前属性值的函数
        var leader=getStyle(element,attr);
        //设置当属性不是px类值的时候的默认值为0
        leader=parseFloat(leader) || 0;
        //放大1000倍处理
        leader=leader*1000;
        target=target*1000;
        //设置渐进函数(缓动函数)
        var step=(target-leader)/10;
        //保证每次都前进至/后退少一个像素
        step=step>0 ? Math.ceil(step): Math.floor(step);
        leader+=step;
        //给当前属性赋值并还原
        element.style[attr]=leader/1000;
        //有函数没有达到,则假设失败
        if(target!=leader){
          flag=false;
        }
        
      } else if(attr=="zIndex"){
        element.style.zIndex=target;
        //3.通常带px值的处理
      } else {
        //调用获得当前属性值的函数
        var leader=getStyle(element,attr);
        //设置当属性不是px类值的时候的默认值为0
        leader=parseInt(leader) || 0;
        //设置渐进函数(缓动函数)
        var step=(target-leader)/10;
        //保证每次都前进至/后退少一个像素
        step=step>0 ? Math.ceil(step): Math.floor(step);
        leader+=step;
        //给当前属性赋值
        element.style[attr]=leader+"px";
        //有函数没有达到,则假设失败
        if(target!=leader){
          flag=false;
        }
      }
      
    }
    //假设成功,清除函数计时器
    if(flag){
      clearInterval(element.timer);
      //判断最后一个回调函数不需要调用fn,找假值,让函数分步执行的关键
      fn && fn();
    }
  },15)
}

//3.获取热恩一对象的任意样式
function getStyle(element,attr) {
    if(window.getComputedStyle){
      return window.getComputedStyle(element,null)[attr];
    }else{
      return element.currentStyle[attr];
    }
}