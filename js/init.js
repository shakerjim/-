$(function () {
  
  $('.socials').mobilyblocks();
  
  $('.nature').mobilyblocks({
    trigger: 'hover',
    direction: 'counter',
    duration: 500,
    zIndex: 50,
    widthMultiplier: 1.15
  });
});
//扫一扫
(function () {
  $(".actionLine").animate({top: 0, top: 210}, 1500, function () {
    $(".actionLine").animate({top: 210, top: 0}, 1500)
  })
  
  setInterval(function () {
    $(".actionLine").animate({top: 0, top: 210}, 1500, function () {
      $(".actionLine").animate({top: 210, top: 0}, 1500)
    })
  }, 3000);
})();