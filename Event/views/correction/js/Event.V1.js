$.getJSON("https://spreadsheets.google.com/feeds/list/1qLT2qlp8o6h4M2Zw9C6C4cvH8kTZAIzE_2WMNmXJnZo/1/public/values?alt=json-in-script&callback=?",
		function(json){
			var e = json.feed.entry,
				saleout, i,
				saleoutbox = "<a href='https://www.eclife.com.tw/EDM/Cont5960.htm' target='_blank' class='col-xs-12 tb-a'><picture><source srcset='https://img.eclife.com.tw/EDM/11006/618correction/index_09.png' media='(min-width: 1023px)'><source srcset='https://img.eclife.com.tw/EDM/11006/618correction/index-m_02.png' media='(max-width: 1023px)'><img src='https://img.eclife.com.tw/EDM/11006/618correction/index_09.png' class='img-responsive' alt='滿額贈品' /></picture></a>";
			
			// 主活動頁商品更換
			for(i=0;i<=2;i++) {
				entry = e[i];
				saleout = entry.gsx$saleout.$t;
				if(saleout == "yes"){
					if(i==0){
						console.log("風扇送完了");
						saleoutbox = "<a href='https://www.eclife.com.tw/EDM/Cont5960.htm' target='_blank' class='col-xs-12 tb-a'><picture><source srcset='https://img.eclife.com.tw/EDM/11006/618correction/index_09_Rsaleout.png' media='(min-width: 1023px)'><source srcset='https://img.eclife.com.tw/EDM/11006/618correction/index-m_02_Rsaleout.png' media='(max-width: 1023px)'><img src='https://img.eclife.com.tw/EDM/11006/618correction/index_09_Rsaleout.png' class='img-responsive' alt='滿額贈品' /></picture></a>";
					}else if(i==1){
						console.log("五日券送完了");
						saleoutbox = "<a href='https://www.eclife.com.tw/EDM/Cont5960.htm' target='_blank' class='col-xs-12 tb-a'><picture><source srcset='https://img.eclife.com.tw/EDM/11006/618correction/index_09_Lsaleout.png' media='(min-width: 1023px)'><source srcset='https://img.eclife.com.tw/EDM/11006/618correction/index-m_02_Lsaleout.png' media='(max-width: 1023px)'><img src='https://img.eclife.com.tw/EDM/11006/618correction/index_09_Lsaleout.png' class='img-responsive' alt='滿額贈品' /></picture></a>";
					}else if(i==2){
						console.log("通通送完了");
						saleoutbox = "<a href='https://www.eclife.com.tw/EDM/Cont5960.htm' target='_blank' class='col-xs-12 tb-a'><picture><source srcset='https://img.eclife.com.tw/EDM/11006/618correction/index_09_saleout.png' media='(min-width: 1023px)'><source srcset='https://img.eclife.com.tw/EDM/11006/618correction/index-m_02_allsaleout.png' media='(max-width: 1023px)'><img src='https://img.eclife.com.tw/EDM/11006/618correction/index_09_saleout.png' class='img-responsive' alt='滿額贈品' /></picture></a>";
					}
				}
				
	        }
	        $(".gift").html(saleoutbox);
	    });	