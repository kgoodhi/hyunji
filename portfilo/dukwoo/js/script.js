$(document).ready(function(){

  
  //네비게이션
  var $mainmnu=$("#main_bar .gnb>li");
  var $submnu=$("#main_bar .sub_menu>li");
  var $sub=$("#main_bar .sub_menu");
  var $bg=$(".sub_bg");
  
    //메인메뉴
  $mainmnu.on("mouseover",function(){
    $sub.stop().fadeIn(200);
    $bg.stop().fadeIn();
  });
  $mainmnu.on("mouseout",function(){
    $sub.stop().fadeOut(200);
    $bg.stop().fadeOut();
  });

  $(window).on("load",function(){
  $(".main_bg>img").css({transform:"scale(1.0)"});
  });
  
  
 //햄버거
  $("#btn").on("click",function(){
    $(this).hide();
    $("#close").show();
    $("nav").stop().animate({right:"0"})
  });

    $("#close").on("click",function(){
    $(this).hide();
    $("#btn").show();
    $("nav").stop().animate({right:"-100%"})
  });
  
//모바일용 메뉴
  $(".fr>ul>li>a").on("click",function(){
    $(this).parent().siblings().find(".sub_menu").hide();
    $(this).siblings().toggle();
    $(this).children().toggleClass("on");
  });
  
 $(window).resize(function(){
   if($(window).width()>=1230){
     $("#btn").hide();
     $(".fr").css({right:"-100%"})
   }
   if($(window).width()<1230){
     $("#btn").show();
     $(".fr").css({right:"-100%"})
   }
 });
});