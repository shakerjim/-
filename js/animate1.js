/**
 * Created by HUCC on 2017/6/16.
 */
function getStyle(element, attr) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(element, null)[attr];
  } else {
    return element.currentStyle[attr];
  }
}

function animate(element, obj, fn) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    var flag = true;
    for (var k in obj) {
      var attr = k;
      var target = obj[k];
      
      //如果是opacity特殊处理
      //保留小数 parseFloat
      //放大1000倍
      //结果缩小 去除px
      if (attr == "opacity") {
        var leader = getStyle(element, attr);
        leader = parseFloat(leader) || 0;
        
        leader = leader * 1000;
        target = target * 1000;
        
        var step = (target - leader) / 10;
        
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader += step;
        
        element.style[attr] = leader / 1000;
        
        if (leader != target) {
          flag = false;
        }
      } else if (attr == "zIndex") {
        element.style.zIndex = target;
      } else {
        //offsetLeft:获取的是left值， 获取attr对应的值
        var leader = getStyle(element, attr);
        //leader是一个字符串，带单位, 如果发现转换失败的时候，给一个默认值：0
        leader = parseInt(leader) || 0;
        
        
        // var step = (target - leader) / 10;
        var step=-1;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader += step;
        
        //设置的时候，不能设置left，应该设置attr
        element.style[attr] = leader + "px";
        
        if (leader != target) {
          flag = false;
        }
      }
    }
    
    
    if (flag) {
      clearInterval(element.timer);
      //fn：传递了才调用    清除定时器才调用
      fn && fn();
    }
  }, 15);
}

function animate1(element, obj, fn) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    var flag = true;
    for (var k in obj) {
      var attr = k;
      var target = obj[k];
      
      //如果是opacity特殊处理
      //保留小数 parseFloat
      //放大1000倍
      //结果缩小 去除px
      if (attr == "opacity") {
        var leader = getStyle(element, attr);
        leader = parseFloat(leader) || 0;
        
        leader = leader * 1000;
        target = target * 1000;
        
        var step = (target - leader) / 10;
        
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader += step;
        
        element.style[attr] = leader / 1000;
        
        if (leader != target) {
          flag = false;
        }
      } else if (attr == "zIndex") {
        element.style.zIndex = target;
      } else {
        //offsetLeft:获取的是left值， 获取attr对应的值
        var leader = getStyle(element, attr);
        //leader是一个字符串，带单位, 如果发现转换失败的时候，给一个默认值：0
        leader = parseInt(leader) || 0;
        
        
        // var step = (target - leader) / 10;
        var step = 1;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader += step;
        
        //设置的时候，不能设置left，应该设置attr
        element.style[attr] = leader + "px";
        
        if (leader != target) {
          flag = false;
        }
      }
    }
    
    
    if (flag) {
      clearInterval(element.timer);
      //fn：传递了才调用    清除定时器才调用
      fn && fn();
    }
  }, 15);
}
