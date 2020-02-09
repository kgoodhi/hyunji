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
  $(".main_bg>img").css({transform:"scale(1.0)"});
  });
  
  
 //햄버거
  $(".btn").on("click",function(){
    $(this).hide();
    $("#close").show();
    $("nav").stop().animate({right:"0"})
  });

    $("#close").on("click",function(){
    $(this).hide();
    $(".btn").show();
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
     $(".btn").hide();
     $(".fr").css({right:"-100%"})
   }
   if($(window).width()<1230){
     $(".btn").show();
     $(".fr").css({right:"-100%"})
   }
 });
  
//  
//  
//  var $aUl=$('.apart_right>ul');
//  var $aLiW=$('.apart_right>ul').width()/4;
//  
//  $(window).resize(function(){
//    $aLiW=$('.apart_right>ul').width()/4;
//  });
//  
//  $('.a_btn>button').on('click',function(){
//    var idx=$('.a_btn>button').index(this);
//    $(this).addClass('on').siblings().removeClass('on');
//    $('.apart_right>ul').stop().animate({left:-$aLiW*idx});
//  });
//  
 
  //완공사진 슬라이드
  
  var $ul=$(".cont3>.container>ul");
  var $ulw=$(".cont3>.container>ul").width()/4;
  
  $(window).resize(function(){
      var $ulw=$(".cont3>.container>ul").width()/4;
  });  
  
  $(".dot>li").on("click",function(){
    var i=$(".dot>li").index(this);
    $(this).addClass("onn").siblings().removeClass("onn");
    $(".cont3>.container>ul").stop().animate({left:-$ulw*i});
  });
});