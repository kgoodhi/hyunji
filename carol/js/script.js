$(document).ready(function(){

 var h=$('.move').height();
 
  //네비 메뉴를 클릭시 화면이동
  $("nav>ul>li").click(function(){
    var h=$('.move').height();
    var i=$(this).index();
    var top=h*i;
    $("html,body").stop().animate({scrollTop:top},500);
    
    $("nav>ul>li").removeClass("on")
    $(this).addClass("on")
  });
  
  //캐릭터소개 왼쪽
  $(".leftop>i").click(function(){
    $(".character>.allch>.allch1").stop().animate({left:-604},function(){
      $(".character figure:first").appendTo(".character>.allch>.allch1");
      $(".character>.allch>.allch1").css({left:0});
    });
    $(".character figure").css('transform',"scale(0.9)");
    $(".character figure").eq(2).css('transform',"scale(1)");
    
  });//캐릭터소개 왼쪽 끝
  
 //캐릭터소개 오른쪽
  $(".rightop>i").click(function(){
    $(".character>.allch>.allch1").css({left:-604});
    $(".character figure:last").prependTo(".character>.allch>.allch1");
    $(".character>.allch>.allch1").stop().animate({left:0});
    
    $(".character figure").css('transform',"scale(0.9)");
    $(".character figure").eq(1).css('transform',"scale(1)");
  });
  
  
  
    //갤러리 슬라이드 탑
 var n=0;
 var l=$(".btn>ul>li").length;
  
 function btn(){
  $(".btn>ul").stop().animate({top:-110*n});
  if(n==0){
     $(".slide_btn .top").hide();
     }else if(n==l-4){
      $(".slide_btn .bottom").hide();
     }else{
      $(".slide_btn .top").show();
      $(".slide_btn .bottom").show();
     }
   
 }//btn 끝
  
  $(".slide_btn .top").click(function(){
    if(n>0){
       n--;
       btn();
       }
  });
  
  $(".slide_btn .bottom").click(function(){
    if(n<l-4){
       n++;
       btn();
       }
  });
  
  //갤러리 클릭 이벤트
  
  $(".btn>ul>li").click(function(){
    var n=$(this).index();
    
    $(".tab>img").attr("src","images/movie_image_"+(n+1)+".jpg")
    
  });
  
  
  
  
  
  
  $(".move").mousewheel(function (event, delta) {
      
     //마우스 휠을 올렸을때	
     if (delta > 0) {
         var prev = $(this).prev().offset().top;
         $("html,body").stop().animate({ "scrollTop": prev }, 1800);
     //마우스 휠을 내렸을때	 
     } else if (delta < 0) {
         var next = $(this).next().offset().top;
         $("html,body").stop().animate({ "scrollTop": next }, 1400);
     }
  });        
  
      //화면 높이에 따라 네비 메뉴 바꾸기
    $(window).scroll(function(){
      var h=$(window).height();
      var s_top=$("html").scrollTop();

      for(var j=0;j<5;j++){
        if(s_top>=(h*j)-200 && s_top<h*(j+1)){
          $(".gnb>li").removeClass("on");
          $(".gnb>li").eq(j).addClass("on");
       }
      }
    });
  
  
   //갤러리 슬라이드 
  
   var nowIdx=0;
  
  setInterval(function(){
    //다음 슬라이드의 인덱스 번호 추출
    if(nowIdx<1){
       nowIdx++;
       }else{
         nowIdx=0;
       }
    //컨테이너 이동
    $(".bi>ul").stop().animate({
      top:-200*nowIdx
    })
  },4000);
  
  
  
  
  
  
  
});//document )끝