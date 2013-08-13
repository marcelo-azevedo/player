/* ==========================================================================
   Slide
   ========================================================================== */

$(function(){
  var slides = $('#slide img')
  var total = slides.length
  var atual = 0
  slides.each(function(){
    $('#navigation').append('<a href="#"></a>')
  })
  $('#navigation a').click(function(){
    atual = $(this).index()
    go()
    return false
  })
  function go(){
    $('.slider').animate({left:-920*atual},500)
    $('#navigation a').removeClass('active')
    $('#navigation a:eq('+atual+')').addClass('active')
  }
  go()
  function next(){
    atual++
    if(atual == total)atual = 0
    go()
  }
  function prev(){
    atual--
    if(atual == -1)atual = total-1
    go()
  }
  $('#prev').click(prev)
  $('#next').click(next)
  $(window).keydown(function(e){
    if(e.keyCode == 37)prev()
    if(e.keyCode == 39)next()
  })
  setInterval(next,5000)

/* ==Center navigation
**********************************************/
  var nav = $('#navigation');
  var width_nav = nav.width();
  var mar_left = width_nav/2;

  nav.css('margin-left', -mar_left);

})




