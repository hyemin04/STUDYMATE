$(function(){
	import AOS from 'aos';
import 'aos/dist/aos.css'; 
    AOS.init();
});

$(function(){
	$(".board> li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	});
});

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100                                                          ) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});


