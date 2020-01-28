$(document).ready(function(){

  //화면높이값 구하기
  
  $(window).scroll(function(){
    var top=$(window).scrollTop();
  });
  
  $(".btn1").click(function(){
    var h = $(".history").height();
    $("html").animate({scrollTop:h},500);
  });

    $(".btn2").click(function(){
    var h = $(".history").height();
    $("html").animate({scrollTop:h*2},500);
  });
  
      $(".btn3").click(function(){
    var h = $(".history").height();
    $("html").animate({scrollTop:h*3},500);
  });
  
        $(".btn4").click(function(){
    var h = $(".history").height();
    $("html").animate({scrollTop:h*4},500);
  });
  
          $(".btn5").click(function(){
    var h = $(".history").height();
    $("html").animate({scrollTop:h*5.2},500);
  });
  
  


 $(window).on("load",function(){
  new WOW().init(); //WOW 플러그인 연동
 });
  
});




