		function copyurl1() {
		    var copyText = document.getElementById("txt_output1");
		    copyText.select();
		    copyText.setSelectionRange(0, 99999)
		    document.execCommand("copy");
		    alert('複製成功');
		}

		$.getJSON("https://script.google.com/macros/s/AKfycbyQzETGXOheuy0wxp4DDx14nQLpVYSyiQgwEw6g6a1gcdTOJs9BQF-_YGzhgC1Tw-N1/exec",
		    function(json) {
		    	console.log(json);
		        var e = json,
		        	demolst = "",
		        	demolst1 = "",
		        	demolst2 = "",
		        	demolst3 = "",
		        	demolst4 = "",
		        	demolst5 = "",
		            entry, i, imgsrcm, imgsrcpc, imgalt, prourl;
		 
		        // 主活動頁商品更換
		        for(i=4;i<6;i++) {
		            entry = e[i];
		            imgsrcm = entry.imgsrcm;
		            imgsrcpc = entry.imgsrcpc;
		            imgalt = entry.imgalt;
		            prourl = entry.prourl;
		            if(i==4){
		                demolst += "<a href=" + prourl + " target='_blank' class='col-xs-12 col-md-4 ProL flipInX'><picture><source srcset=" + imgsrcpc + " media='(min-width: 1200px)'><source srcset=" + imgsrcm + " media='(max-width: 992px)'><img src=" + imgsrcpc + " alt=" + imgalt + " class='img-responsive'></picture></a>";
		            } else if(i==5){
		                demolst += "<a href=" + prourl + " target='_blank' class='col-xs-12 col-md-4 ProR flipInX'><picture><source srcset=" + imgsrcpc + " media='(min-width: 1200px)'><source srcset=" + imgsrcm + " media='(max-width: 992px)'><img src=" + imgsrcpc + " alt=" + imgalt + " class='img-responsive'></picture></a>";
		            }
		        }
		        $("#topProhome").html(demolst);

		        // 奧運專區頁商品更換
		        for(i=9;i<11;i++) {
		            entry = e[i];
		            imgsrcm = entry.imgsrcm;
		            imgsrcpc = entry.imgsrcpc;
		            imgalt = entry.imgalt;
		            prourl = entry.prourl;
		            if(i==9){
		                demolst1 += "<a href=" + prourl + " target='_blank' class='col-xs-12 col-md-4 ProL flipInX'><picture><source srcset=" + imgsrcpc + " media='(min-width: 1200px)'><source srcset=" + imgsrcm + " media='(max-width: 992px)'><img src=" + imgsrcpc + " alt=" + imgalt + " class='img-responsive'></picture></a>";
		            } else if(i==10){
		                demolst1 += "<a href=" + prourl + " target='_blank' class='col-xs-12 col-md-4 ProR flipInX'><picture><source srcset=" + imgsrcpc + " media='(min-width: 1200px)'><source srcset=" + imgsrcm + " media='(max-width: 992px)'><img src=" + imgsrcpc + " alt=" + imgalt + " class='img-responsive'></picture></a>";
		            }
		        }
		        $("#topProscreen").html(demolst1);

		       	// 庫存方唐鏡頁商品更換
		        for(i=15;i<17;i++) {
		            entry = e[i];
		            imgsrcm = entry.imgsrcm;
		            imgsrcpc = entry.imgsrcpc;
		            imgalt = entry.imgalt;
		            prourl = entry.prourl;
		            if(i==15){
		                demolst2 += "<a href=" + prourl + " target='_blank' class='col-xs-12 col-md-4 ProL flipInX'><picture><source srcset=" + imgsrcpc + " media='(min-width: 1200px)'><source srcset=" + imgsrcm + " media='(max-width: 992px)'><img src=" + imgsrcpc + " alt=" + imgalt + " class='img-responsive'></picture></a>";
		            } else if(i==16){
		                demolst2 += "<a href=" + prourl + " target='_blank' class='col-xs-12 col-md-4 ProR flipInX'><picture><source srcset=" + imgsrcpc + " media='(min-width: 1200px)'><source srcset=" + imgsrcm + " media='(max-width: 992px)'><img src=" + imgsrcpc + " alt=" + imgalt + " class='img-responsive'></picture></a>";
		            }
		        }
		        $("#topProarrival").html(demolst2);

		        // 力挺中華隊跑馬燈
		        for(i=7;i<8;i++) {
		            entry = e[i];
		            imgsrcm = entry.imgsrcm;
		            imgsrcpc = entry.imgsrcpc;
		            imgalt = entry.imgalt;
		            prourl = entry.prourl;
		            if(i==7){
		                demolst3 += "<span>" + imgalt + "</span>";
		            }
		        }
		        $("#googleform").html(demolst3);

		        // 金銀銅獎牌
		        for(i=1;i<4;i++) {
		            entry = e[i];
		            imgsrcm = entry.imgsrcm;
		            imgsrcpc = entry.imgsrcpc;
		            imgalt = entry.imgalt;
		            prourl = entry.prourl;
		            if(i==1){
		                demolst4 += "<span class='gold'>" + imgalt + "</span>";
		            } else if(i==2){
		                demolst4 += "<span class='silver'>" + imgalt + "</span>";
		            } else if(i==3){
		                demolst4 += "<span class='copper'>" + imgalt + "</span>";
		            }
		        }
		        $("#awards").html(demolst4);
		        
		        // 折扣碼
		        for(i=6;i<7;i++) {
		            entry = e[i];
		            imgsrcm = entry.imgsrcm;
		            imgsrcpc = entry.imgsrcpc;
		            imgalt = entry.imgalt;
		            prourl = entry.prourl;
		            if(i==6){
		                demolst5 +="" + imgsrcpc + "<input type='text' value='" + imgalt + "' id='txt_output1' readonly='readonly'>" + prourl + " ";
		            }
		        }
		        $("#coupon").html(demolst5);
		    });

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


		         