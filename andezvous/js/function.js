$(function(){
    
  $('#id').on('click',function(){
    $('.smbn').hide(200);
  });
var g1=$('.gnb>ul>li');
g1.on('mouseover',function(){
  $(this).find('.sub').stop().slideDown();
  });
g1.on('mouseout',function(){
  $(this).find('.sub').stop().slideUp();
  });
$('.gnb2>ul>li:nth-of-type(7)>a').click(function(event){
  event.preventDefault();
  $('html,body').animate({scrollTop:0},800);
  });

});

//슬라이더

$(function(){
    var $main_slides=$("#wrap>.banner>.mainbanner>.main_slides");
    var $mainW=$("#wrap>.banner>.mainbanner>.main_slides>li").width(); 
    
    
function mainSlide(){
 $main_slides.stop().animate({
    left:-$mainW 
 },600,function(){
     $("#wrap>.banner>.mainbanner>.main_slides>li:first").appendTo($main_slides);
     $main_slides.css({left:0},600);
 });
}
var timer=setInterval(mainSlide,4000);

function mainSlide2(){
    $("#wrap>.banner>.mainbanner>.main_slides>li:last").prependTo($main_slides);
    $main_slides.css({left:-$mainW});
    $main_slides.stop().animate({left:0},600);
 }
    
 $(".left").on("click",function(){
     clearInterval(timer);
     mainSlide2();
     timer=setInterval(mainSlide2,4000);
 });
    
 $('.right').on('click',function(){
     clearInterval(timer);
     mainSlide(); 
     timer=setInterval(mainSlide,4000);
    });
    
  /* weekly 사진 변경*/
  
  $('.weekly li').mouseover(function(){
    var i = $(this).index();    
    
    $(".weekly li").eq(i).find('img').attr('src',"weekly/wimg" + (i+1) + "_1.jpg");
  });
  
  $('.weekly li').mouseleave(function(){
    var i = $(this).index();
    $(".weekly li").eq(i).find('img').attr('src',"weekly/wimg" + (i+1) + ".jpg");
  });  
  
  /* new 사진 변경*/
  
 $(".new li").mouseover(function(){
     var ii = $(this).index();
   
  $(".new li").eq(ii).find("img").attr('src',"new/nimg" + (ii+1) + "_1.jpg");
 });
  
  $(".new li").mouseleave(function(){
     var ii = $(this).index();
  $(".new li").eq(ii).find('img').attr('src',"new/nimg" + (ii+1) + ".jpg");
  });
  
  
  
});









