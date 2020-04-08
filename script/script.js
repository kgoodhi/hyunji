$(document).ready(function(){

   $(window).load(function(){
    $(".main h2").animate({top:"-15px",opacity:"1"},1000);
    $(".main h3").animate({left:"0px",opacity:"1"},1000);

    });
  
  //마우스 강아지
    $(window).mousemove(function(a){
      var xx=a.pageX;
      var yy=a.pageY;

      $(".pos_x").text(xx);
      $(".pos_y").text(yy);
      $("#box").css({left:xx+15,top:yy+15});

    });
  
  
  //로딩화면 애니큐빅
    $(".loading>p").fadeOut();
    $(".loading").delay(4500).slideUp(1000, function () {        
    });
  
  var f=0;  
  var $txt_move = $('.loading>.loadtext>p');  
  var loading_intervalKey;

 loading_intervalKey = setInterval(function () {
  if(f<3){
     f++;
     $txt_move.eq(f).addClass('on');
 
    }else{
     $txt_move.eq(0).addClass('on');
    }
},800);

  
  
  //페이지 전환  
    $(".m_btn>.left").click(function(){
      $("#container").animate({marginLeft:"0"});
      $(".center_info").css({width:0,height:0,opacity:0});
      $(".bg").css({width:0,height:0}); 
    });

    $(".m_btn>.right").click(function(){
      $("#container").animate({marginLeft:"-200%"});
      $('.btn01').addClass('click');
      $(".center_info").css({width:0,height:0,opacity:0});
      $(".bg").css({width:0,height:0});
      $('.profile').show();
      
    });
  
    $(".m_btn>.center").click(function(){
      $(".center_info").css({width:"50%",height:"50%",opacity:"1"},1000);
      $(".bg").css({width:"100%",height:"100%"});
    });

    $(".bg").click(function(){
      $(".center_info").css({width:0,height:0,opacity:0});
      $(".bg").css({width:0,height:0});     
    });
  
  //about me - Skill bar     
    $('#skills').on('inview',function(event, visible){
      if(visible){
       $('#skills .bar').each(function(){
        $(this).css({
          width:$(this).parent().attr('data-bar')+'%'
        });
       });
      }
     }); 
  
  //about me 탭 누르면 내용 나오기
   var $btn=$(".aboutme .btn>p>a")
  
      $btn.click(function(){
        var i=$btn.index(this);
        $btn.parent().removeClass("click").eq(i).addClass("click");
        
        $(".tab1").hide().eq(i).show();
        if($('.btn03').hasClass('click')){        
        $('.keyword>.keyicon>li').stop().animate({bottom:'0',opacity:1},1000);
        }else{
          $('.keyword>.keyicon>li').css({bottom:'-20%',opacity:0});
        }
        
        if($(".btn02").hasClass("click")){
          $("#skills>.stick").stop().animate({top:"50%",opacity:1},1000);
        }else{
          $("#skills>.stick").css({top:'70%',opacity:0});
        }
        if($(".btn02").hasClass("click")){
          $(".skill_text").stop().animate({top:"18%",opacity:1},1500);
        }else{
          $(".skill_text").css({top:"18%",opacity:0});
        }        
        
        if($(".btn04").hasClass("click")){
          $(".experience").stop().animate({bottom:"0",opacity:1},1000);
        }else{
          $(".experience").css({bottom:"-20%",opacity:0});
        }
      }); 
  
  //포트폴리오 누르면 내용 나오기

   var $btn2=$(".p")
  
      $btn2.click(function(){
        var d=$btn2.index(this);
        $btn2.parent().removeClass("on").eq(d).addClass("on");
        $('.tab').hide().eq(d).show();
      });

  //home 버튼 누르면 main으로 이동
      $(".btn05").click(function(){
        $("#container").animate({marginLeft:"-100%"});
      });
    
      $(".hoom").click(function(){
        $("#container").animate({marginLeft:"-100%"});
      
      });
  
  //포트폴리오 메뉴이동
  
$(".port_menu>p").click(function(){
  var i = $(this).index();
  $(".p").removeClass('on');
  $(".port_menu>p").eq(i).addClass('on');
});
  
$(".other_menu>p").click(function(){
  var i = $(this).index();
  $(".p").removeClass('on');
  $(".other_menu>p").eq(i).addClass('on');
});
  
  
  
  
});//도큐먼트끝
