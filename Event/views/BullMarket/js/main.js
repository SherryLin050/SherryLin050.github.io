	

$(document).ready(function() {

	var w = 0;
	if ($(window).width() > 1199) {
		w = 0;
	}else{
		w = 120;
	}
	if (w >0 ){
	    $(".itemInner .flexslider-item").flexslider({
	        animation: "slide",
	        animationLoop: false,
	        itemWidth: w,
	        itemMargin: 5,
	        pausePlay: false,
	        controlNav: false,
	    });
	}
	$(window).scroll(function() {
        var Fix = $( ".ProdList" );
        var position = Fix.position();
            if (position.top <= $(this).scrollTop()) {
                $(".item-fluid").addClass("js-Nav");
            }else{
                $(".item-fluid").removeClass("js-Nav");
            }
      });
	
	
	// 	台股當日收盤漲幾點，就發幾點折扣碼
	$.getJSON("https://spreadsheets.google.com/feeds/list/1qLT2qlp8o6h4M2Zw9C6C4cvH8kTZAIzE_2WMNmXJnZo/1/public/values?alt=json-in-script&callback=?",
		function(json){
			var e = json.feed.entry,
				l = e.length,
				demolst = "",
				entry,  title;
				
				demolst = "<p>" + e[0].gsx$title.$t + "<small>" + e[1].gsx$title.$t + "</small></p><p>" + e[2].gsx$title.$t + "</p><h3>" + e[3].gsx$title.$t + "<span id='copyText'>" + e[4].gsx$title.$t + "</span><span class='copybtn' onclick='copy();'>複製</span></h3>";
			$(".TTBox").html(demolst);
	});
	$.getJSON("https://spreadsheets.google.com/feeds/list/1qLT2qlp8o6h4M2Zw9C6C4cvH8kTZAIzE_2WMNmXJnZo/2/public/values?alt=json-in-script&callback=?",
		function(json){
			var e = json.feed.entry,
				l = e.length,
				demolst = "",
				entry, i, proname, prourl, proimg, percent, price, txt;

			for(i=0;i<5;i++) {
				entry = e[i];
				proname = entry.gsx$proname.$t;
				prourl = entry.gsx$prourl.$t;
				proimg = entry.gsx$proimg.$t;
				percent = entry.gsx$percent.$t;
				price = entry.gsx$price.$t;
				txt = entry.gsx$txt.$t;
				if(i==0){
					demolst += "<a href=" + prourl + " target='_blank' class='col-xs-12 Top'><div class='col-xs-3 col-md-5 TopImg'><img src=" + proimg +" alt=" + proname + " class='img-responsive' /></div><div class='col-xs-9 col-sm-8 col-md-7 TopTxt'><p class='TopProName'>" + proname + "</p><p class='TopPrice'><b>" + txt + "</b><strong>" + price + "</strong><span>" + percent + "</span></p></div></a>";
				}else if(i>0){
					demolst += "<a href=" + prourl + " target='_blank' class='col-xs-12 Txt'><div class='col-xs-12 TopTxt'><p class='col-xs-6 col-md-12 TopProName'>" + proname + "</p><p class='col-xs-6 col-md-12 TopPrice'><span>" + percent + "</span><strong>" + price + "</strong></p></div></a>";
				}
				
	        }
	        
			$(".GProInner").html(demolst);
	});
	$.getJSON("https://spreadsheets.google.com/feeds/list/1qLT2qlp8o6h4M2Zw9C6C4cvH8kTZAIzE_2WMNmXJnZo/3/public/values?alt=json-in-script&callback=?",
		function(json){
			var e = json.feed.entry,
				l = e.length,
				demolst = "",
				entry, i, proname, prourl, proimg, percent, price, txt;
			for(i=0;i<5;i++) {
				entry = e[i];
				proname = entry.gsx$proname.$t;
				prourl = entry.gsx$prourl.$t;
				proimg = entry.gsx$proimg.$t;
				percent = entry.gsx$percent.$t;
				price = entry.gsx$price.$t;
				txt = entry.gsx$txt.$t;
				if(i==0){
					demolst += "<a href=" + prourl + " target='_blank' class='col-xs-12 Top'><div class='col-xs-3 col-md-5 TopImg'><img src=" + proimg +" alt=" + proname + " class='img-responsive' /></div><div class='col-xs-9 col-sm-8 col-md-7 TopTxt'><p class='TopProName'>" + proname + "</p><p class='TopPrice'><b>" + txt + "</b><strong>" + price + "</strong><span>" + percent + "</span></p></div></a>";
				}else if(i>0){
					demolst += "<a href=" + prourl + " target='_blank' class='col-xs-12 Txt'><div class='col-xs-12 TopTxt'><p class='col-xs-6 col-md-12 TopProName'>" + proname + "</p><p class='col-xs-6 col-md-12 TopPrice'><span>" + percent + "</span><strong>" + price + "</strong></p></div></a>";
				}
				
	        }
	        
			$(".RProInner").html(demolst);
	});
	$.getJSON("https://spreadsheets.google.com/feeds/list/1qLT2qlp8o6h4M2Zw9C6C4cvH8kTZAIzE_2WMNmXJnZo/4/public/values?alt=json-in-script&callback=?",
		function(json){
			var e = json.feed.entry,
				l = e.length,
				demolst = "",
				entry, i, toptxt, topurl;
			demolst += "<marquee class='Marquee' direction='left' scrollamount='5' onmouseover='this.stop()' onmouseout='this.start()' >"
			for(i=0;i<l;i++) {
				entry = e[i];
				topurl = entry.gsx$topurl.$t;
				toptxt = entry.gsx$toptxt.$t;
				demolst += "<a href=" + topurl + " class='link-a'>" + toptxt + "</a>";
			}
			demolst += "</marquee>"
	        $("#MarqueeBox").html(demolst);
	});
});
	function copy() {
        var text =document.getElementById("copyText").innerText;
        var input = document.createElement('input');
        input.setAttribute('id', 'copyInput');
        input.setAttribute('value', text);
        document.getElementsByTagName('body')[0].appendChild(input);
        document.getElementById('copyInput').select();
        if (document.execCommand('copy')) {
            alert('複製成功');
        }
        document.getElementById('copyInput').remove();
    }