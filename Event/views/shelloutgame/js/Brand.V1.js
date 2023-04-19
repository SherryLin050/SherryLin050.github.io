//GOTOP
$(function() {
    $("#gotop").click(function() {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 100);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $("#gotop").fadeIn("fast");
        } else {
            $("#gotop").stop().fadeOut("fast");
        }
    });
});


//header選單
$(function () {
	$('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemMargin: 5,
        pausePlay: false
    });
	$("#js-mainNAV button").click(function(){
	  $("#js-side-nav-open").css("right", "0%");
	  $("#js-doc-bg").show();
	  $("html").addClass("htmlFix");
	});
	$("#js-doc-bg").click(function(event) {
	  $("#js-side-nav-open").css("right", "");
	  $("#js-doc-bg").hide();
	  $("html").removeClass("htmlFix");
	});
	// 算螢幕的寬度
	function getTotalWidth() {
	    var myWidth;
	    if (typeof (window.innerWidth) == 'number') {
	        myWidth = window.innerWidth - 20;
	    } else {
	        myWidth = document.documentElement.clientWidth - 20;
	    }
	    return myWidth;
	}

    if (getTotalWidth() < 1200) {
        $("#js-side-nav-open .megaMENU").css("margin-left", "");
        // 點擊 li 打開次選單
        $("#js-side-nav-open li").click(function(){
          $("#js-side-nav-open li").removeClass("js-side-nav-in");
          $(this).toggleClass("js-side-nav-in");
        });
        $(".megaMENU").css("width", "");
    }
});