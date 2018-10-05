$(function() {

  $('nav a').click(function(e){
    e.preventDefault();
    var id=$(this).attr('href');
    // console.log(id);
    $('html').stop().animate({
      scrollTop:$(id).offset().top
    })
  })

  var index=0;
  //스크롤스파이
  $(window).scroll(function(){
    scrollTop=$(window).scrollTop();
    // console.log(scrollTop);
    home=$('#home').offset().top;
    about=$('#about').offset().top;
    project=$('#project').offset().top;
    profile=$('#profile').offset().top;

    if(scrollTop>=home && scrollTop<about){//home
      index=0;
    }else if(scrollTop>=about && scrollTop<project){//about
      index=1;
    }else if(scrollTop>=project && scrollTop<profile){//project
      index=2;
    }else if(scrollTop>=profile){//profile
      index=3;
    }

    $('section nav a').removeClass().eq(index).addClass('active');
  })

  //skill
  $('.progress li').mouseenter(function(){
  	var i=$(this).index()
  	var skill=$(this).attr('skill')
  	$('.aboutme_bar').eq(i).animate({'width':skill+'%'},{
    	duration:1000,
    	easing:"linear",
    	step:function(x){
    	   // $('.aboutme_val').eq(i).text(Math.round(x*100/280)+"%") //Math.round ->소수점안보임
         $('.aboutme_val').eq(i).text(Math.round(x)+"%")
    	}
    })
	 });
});
