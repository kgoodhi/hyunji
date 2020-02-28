$(document).ready(function(){

  
  //네비게이션
  var $mainmnu=$(".main_bar .gnb>li");
  var $submnu=$(".main_bar .sub_menu>li");
  var $sub=$(".main_bar .sub_menu");
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
  $(".main_bg>h1").stop().animate({
    top:"28%",opacity:"1"},800,function(){
  $(".main_bg>img").css({transform:"scale(1.0)"});    
    });
  });
  
  
  
 //햄버거
  $(".btn").on("click",function(){
    $(this).hide();
    $(".close").show();
    $(".fr").stop().animate({right:"0"})
  });

    $(".close").on("click",function(){
    $(this).hide();
    $(".btn").show();
    $(".fr").stop().animate({right:"-80%"})
  });
  
//모바일용 메뉴
  $(".fr>ul>li>a").on("click",function(){
    $(".sub_menu").stop().slideUp();
    $(this).siblings().stop().slideToggle();
    $(this).children().toggleClass("on");
  });
  
 $(window).resize(function(){
   if($(window).width()>=1024){
     $(".btn").hide();
     $(".fr").css({right:"-80%"});
   }else{
     $(".btn").show();
   }
 });
  
 
  //완공사진 슬라이드
  
  var $ul=$(".cont3>.container>div>ul");
  var $ulw=$(".cont3>.container>div>ul").width()/4;
  
  $(window).resize(function(){
      var $ulw=$(".cont3>.container>div>ul").width()/4;
  });  
  
  $(".dot>li").on("click",function(){
    var i=$(".dot>li").index(this);
    $(this).addClass("onn").siblings().removeClass("onn");
    $ul.stop().animate({left:-$ulw*i});
  });
});