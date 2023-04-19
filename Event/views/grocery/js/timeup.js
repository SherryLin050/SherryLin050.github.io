var old_event_status = -1;
var event_status = -1;
var tt = 0;
$.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1KfA4nYSCdRZqta_nRO8YjiAGsuWvHfh59S83_EsIaJg/values/良興商行-限時下殺?alt=json&key=AIzaSyAASQpbH73oZzAU_0Vwer1GO__nh3iTjqo",
        function (json) {
            var e = json.values,
                l = e.length,
                demolst_today = "",
                timeup_html = "",
                demolst_tomorrow = "",
                entry, i, saledate, pro_img, pro_url, pro_alt, saleout;
            var _test=[];
            for (var i = 1; i < e.length ; i++) {
                _test.push({
                	saledate:e[i][0],
                	pro_img:e[i][1],
                	pro_url:e[i][2],
                	pro_alt:e[i][3],
                	saleout:e[i][4]
                });
            }
		    function addDaysToDate(date, days){
			    var res = new Date(date);
			    res.setDate(res.getDate() + days);
			    return res;
			}	
		    setInterval(function () { 
		    	var today = new Date();
				// 倒數計時器
        		for(var n = 0; n < _test.length; n++){
	            	var saledate = new Date(_test[n].saledate);
	            	var saledate_add = addDaysToDate(saledate, 2);
	            	var cdate = addDaysToDate(saledate, 1);	     
	            	var before_saledate = addDaysToDate(saledate, -1);	
	            	var sdate = new Date(_test[n].saledate + ' 08:00:00');
	            	var edate = new Date(_test[n].saledate + ' 20:00:00');
	            	
	            	if(today >= before_saledate && today <= cdate ){
		            	// 活動前
		            	if(today >= saledate && today < sdate){
		            		event_status = 0;
		            		var overDate = (sdate.getTime()) - (today.getTime());
					        var days = Math.floor(overDate / 24 / 60 / 60 / 1000);
					        var hours = Math.floor(overDate / 60 / 60 / 1000) % 24;
					        var minute = Math.floor(overDate / 60 / 1000) % 60;
					        var seconds = Math.floor(overDate / 1000) % 60;
		            		timeup_html = '<div class="inner">倒數<p id="countDownHour" class="num">' + hours + '</p>時<p id="countDownMinute" class="num">' + minute  + '</p>分<p id="countDownSecond" class="num">' + seconds + '</p>秒</div>'
		            		demolst_today += '<div class="col-xs-6 col-md-3 ProB"><a href="'+ _test[n].pro_url +'" target="_blank" class="col-xs-12 todayPro"><img src="'+ _test[n].pro_img +'" alt="' + _test[n].pro_alt + '" class="img-responsive"></a></div>';
		            	}
		            	// 活動期間
		            	if(today >= sdate && today <= edate){
		            		event_status = 1;
		            		timeup_html = '';
		            		if(_test[n].saleout == "1"){
		            			demolst_today += '<div class="col-xs-6 col-md-3 ProS"><a href="'+ _test[n].pro_url +'" target="_blank" class="col-xs-12 todayPro"><img src="'+ _test[n].pro_img +'" alt="' + _test[n].pro_alt + '" class="img-responsive"></a></div>'
		            		}else{
		            			demolst_today += '<div class="col-xs-6 col-md-3"><a href="'+ _test[n].pro_url +'" target="_blank" class="col-xs-12 todayPro"><img src="'+ _test[n].pro_img +'" alt="' + _test[n].pro_alt + '" class="img-responsive"></a></div>'
		            		}
		            	}
		            	// 活動後
		            	if(today > edate && today < cdate){
		            		event_status = 2;
		            		timeup_html = '';
		            		demolst_today += '<div class="col-xs-6 col-md-3 ProS"><a href="'+ _test[n].pro_url +'" target="_blank" class="col-xs-12 todayPro"><img src="'+ _test[n].pro_img +'" alt="' + _test[n].pro_alt + '" class="img-responsive"></a></div>'
		            	}
		            	if(today >= before_saledate && today < saledate){
		            		demolst_tomorrow += '<a href="'+ _test[n].pro_url +'" target="_blank" class="col-xs-6 col-md-3 comingPro"><img src="'+ _test[n].pro_img +'" alt="' + _test[n].pro_alt + '" class="img-responsive"></a>'
		            	}
	            	}
	            }
	            $(".timeup").html(timeup_html);
	            if ((event_status != old_event_status && tt!=2) || (old_event_status == -1)){
	            	tt = tt + 1;
                    if (tt == 2) {
                        tt = 0;
                        old_event_status = event_status;
                    }
                    if( demolst_tomorrow != ""){
                    	demolst_tomorrow += '<div class="col-xs-12 comingMask"><picture><source srcset="https://img.eclife.com.tw/EDM/11105/grocery202205/timeup/commingsoon-pc.png" media="(min-width: 1200px)"><source srcset="https://img.eclife.com.tw/EDM/11105/grocery202205/timeup/commingsoon.png" media="(max-width: 992px)"><img src="https://img.eclife.com.tw/EDM/11105/grocery202205/timeup/commingsoon-pc.png" alt="Coming" class="img-responsive"></picture></div>'
                    }
                    $(".todayProBox .inner").html(demolst_today);
                    $(".comingProBox .inner").html(demolst_tomorrow);
                    demolst_today = "";
                    demolst_tomorrow = "";
	            }
	            
            }, 1000);	
	        
			setTimeout(function (){
				$(".htmlfix").fadeOut(1000);
				$(".ttBox").css("animation","app 1s");
				$(".todayProBox").css("animation","flipInX 1s");
			},1000);
            
            
});