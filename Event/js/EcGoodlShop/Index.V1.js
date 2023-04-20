var lsdv = new Vue({
    el: "#lsdv",
    methods:{ //實作range的function
        range : function (start, end) {
            return Array(end - start + 1).fill().map((_, idx) => start + idx)
        }
    },
    data: {
        rowNums: 6, //一列顯示幾個
      // TopBn
        TopBn: [{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10703/1070314-IR_BN.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10705/1070426-IR_06.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": false
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10705/1070426-IR_08.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": false
        }],
        // LogoBn
        LogoBn: [{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10705/msi.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10705/ASUS.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10705/SteelSeries.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10703/EPSON.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10705/Seagate.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10703/WD.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10705/PX.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10705/ProsKit-02.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10705/ProsKit-01.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10705/LG.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10705/esense.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10703/WD.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10705/esense.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10703/WD.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10705/esense.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10703/WD.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10705/esense.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10705/msi.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10705/ASUS.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        },{
            "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Memo": "",
            "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
            "Img": "https://img.eclife.com.tw/edm/10705/esense.jpg",
            "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
            "Click": "",
            "isBanner": true
        }],
     // chicken
    chicken: [{
        "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
        "Memo": "",
        "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
        "Img": "https://img.eclife.com.tw/edm/10703/1070315-CM-222x255.jpg",
        "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
        "Click": "",
        "isBanner": true
    },{
        "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
        "Memo": "",
        "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
        "Img": "https://img.eclife.com.tw/edm/10703/1070315-CM-222x255-01.jpg",
        "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
        "Click": "",
        "isBanner": true
    },{
        "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
        "Memo": "",
        "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
        "Img": "https://img.eclife.com.tw/edm/10703/1070315-CM-222x255-02.jpg",
        "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
        "Click": "",
        "isBanner": true
    },{
        "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
        "Memo": "",
        "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
        "Img": "https://img.eclife.com.tw/edm/10703/1070315-CM-222x255-03.jpg",
        "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
        "Click": "",
        "isBanner": true
    },{
        "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
        "Memo": "",
        "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
        "Img": "https://img.eclife.com.tw/edm/10703/1070315-CM-222x255-04.jpg",
        "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
        "Click": "",
        "isBanner": true
    }],


    
      // 分類頁
      ProdListBn: [{
        "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
        "Memo": "",
        "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
        "Img": "https://img.eclife.com.tw/edm/10703/LOGO-01-steelserier.png",
        "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
        "Click": ""
        },],
      // ProdListAll: {
      //   "ProdListBn": {
      //       "Title": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
      //       "Memo": "",
      //       "Url": "https://www.eclife.com.tw/pc_nb/0809160001/1206110002/",
      //       "Img": "https://img.eclife.com.tw/edm/10703/LOGO-01-steelserier.png",
      //       "Alt": "ASUS華碩 K31CD-0031A640GTT 桌上型電腦",
      //       "Click": ""
      //   },
    ProdList: [{
        "Url": "/SSD/moreinfo_127725.htm",
        "ProdMemo": "",
        "ProdName": "R2【福利品】D-LINK DIR-879 AC1900 雙頻Gigabit無線路由器",
        "SpicalPrice": "3599",
        "DiscountPrice": "1400",
        "Img": "https://img.eclife.com.tw/edm/10703/LOGO-01-steelserier.png",
        "Sdate": null,
        "Rocom1": "",
        "Rocom2": "",
        "Click": "",
        "isBanner": true,
        "isVip": true,
        "isHr24": false,
        "isPromotion": false
      }, {
        "Url": "/pc_nb/moreinfo_128445.htm",
        "ProdMemo": "買到賺到",
        "ProdName": "R3【福利品】ASUS華碩 VA325H 32型濾藍光不閃屏護眼寬螢幕 ",
        "SpicalPrice": "6990",
        "DiscountPrice": "2910",
        "Img": "/web/images/pro1.jpg",
        "Sdate": null,
        "Rocom1": "",
        "Rocom2": "",
        "Click": "",
        "isBanner": false,
        "isVip": true,
        "isHr24": true,
        "isPromotion": true
      }, {
        "Url": "/SSD/moreinfo_127254.htm",
        "ProdMemo": "支援microSD擴充達32GB",
        "ProdName": "R2【福利品】D-LINK DWM-222 4G LTE 150Mbps行動網路介面卡",
        "SpicalPrice": "2099",
        "DiscountPrice": "900",
        "Img": "/web/images/pro2.jpg",
        "Sdate": null,
        "Rocom1": "",
        "Rocom2": "",
        "Click": "$.post('/lib/bannerClick.ashx', bid:0);",
        "isBanner": false,
        "isVip": true,
        "isHr24": true,
        "isPromotion": true
      }, {
        "Url": "/pc_nb/moreinfo_128445.htm",
        "ProdMemo": "買到賺到",
        "ProdName": "R3【福利品】ASUS華碩 VA325H 32型濾藍光不閃屏護眼寬螢幕 ",
        "SpicalPrice": "6990",
        "DiscountPrice": "2910",
        "Img": "/web/images/pro3.png",
        "Sdate": null,
        "Rocom1": "",
        "Rocom2": "",
        "Click": "",
        "isBanner": false,
        "isVip": true,
        "isHr24": true,
        "isPromotion": true
      }, {
        "Url": "/SSD/moreinfo_127725.htm",
        "ProdMemo": "",
        "ProdName": "R2【福利品】D-LINK DIR-879 AC1900 雙頻Gigabit無線路由器",
        "SpicalPrice": "3599",
        "DiscountPrice": "1400",
        "Img": "/web/images/pro4.png",
        "Sdate": null,
        "Rocom1": "",
        "Rocom2": "",
        "Click": "",
        "isBanner": false,
        "isVip": true,
        "isHr24": false,
        "isPromotion": false
      }, {
        "Url": "/SSD/moreinfo_127725.htm",
        "ProdMemo": "",
        "ProdName": "R2【福利品】D-LINK DIR-879 AC1900 雙頻Gigabit無線路由器",
        "SpicalPrice": "3599",
        "DiscountPrice": "1400",
        "Img": "/web/images/pro5.png",
        "Sdate": null,
        "Rocom1": "",
        "Rocom2": "",
        "Click": "",
        "isBanner": false,
        "isVip": true,
        "isHr24": false,
        "isPromotion": false
      },{
        "Url": "/SSD/moreinfo_127725.htm",
        "ProdMemo": "",
        "ProdName": "R2【福利品】D-LINK DIR-879 AC1900 雙頻Gigabit無線路由器",
        "SpicalPrice": "3599",
        "DiscountPrice": "1400",
        "Img": "http://img.eclife.com.tw/edm/10706/LOGO-02.png",
        "Sdate": null,
        "Rocom1": "",
        "Rocom2": "",
        "Click": "",
        "isBanner": true,
        "isVip": true,
        "isHr24": false,
        "isPromotion": false
      }, {
        "Url": "/pc_nb/moreinfo_128445.htm",
        "ProdMemo": "買到賺到",
        "ProdName": "R3【福利品】ASUS華碩 VA325H 32型濾藍光不閃屏護眼寬螢幕 ",
        "SpicalPrice": "6990",
        "DiscountPrice": "2910",
        "Img": "/web/images/pro6.jpg",
        "Sdate": null,
        "Rocom1": "",
        "Rocom2": "",
        "Click": "",
        "isBanner": false,
        "isVip": true,
        "isHr24": true,
        "isPromotion": true
      }, {
        "Url": "/SSD/moreinfo_127254.htm",
        "ProdMemo": "支援microSD擴充達32GB",
        "ProdName": "R2【福利品】D-LINK DWM-222 4G LTE 150Mbps行動網路介面卡",
        "SpicalPrice": "2099",
        "DiscountPrice": "900",
        "Img": "/web/images/pro2.jpg",
        "Sdate": null,
        "Rocom1": "",
        "Rocom2": "",
        "Click": "$.post('/lib/bannerClick.ashx', bid:0);",
        "isBanner": false,
        "isVip": true,
        "isHr24": true,
        "isPromotion": true
      }, {
        "Url": "/pc_nb/moreinfo_128445.htm",
        "ProdMemo": "買到賺到",
        "ProdName": "R3【福利品】ASUS華碩 VA325H 32型濾藍光不閃屏護眼寬螢幕 ",
        "SpicalPrice": "6990",
        "DiscountPrice": "2910",
        "Img": "/web/images/pro3.png",
        "Sdate": null,
        "Rocom1": "",
        "Rocom2": "",
        "Click": "",
        "isBanner": false,
        "isVip": true,
        "isHr24": true,
        "isPromotion": true
      }, {
        "Url": "/SSD/moreinfo_127725.htm",
        "ProdMemo": "",
        "ProdName": "R2【福利品】D-LINK DIR-879 AC1900 雙頻Gigabit無線路由器",
        "SpicalPrice": "3599",
        "DiscountPrice": "1400",
        "Img": "/web/images/pro4.png",
        "Sdate": null,
        "Rocom1": "",
        "Rocom2": "",
        "Click": "",
        "isBanner": false,
        "isVip": true,
        "isHr24": false,
        "isPromotion": false
      }, {
        "Url": "/SSD/moreinfo_127725.htm",
        "ProdMemo": "",
        "ProdName": "R2【福利品】D-LINK DIR-879 AC1900 雙頻Gigabit無線路由器",
        "SpicalPrice": "3599",
        "DiscountPrice": "1400",
        "Img": "/web/images/pro5.png",
        "Sdate": null,
        "Rocom1": "",
        "Rocom2": "",
        "Click": "",
        "isBanner": false,
        "isVip": true,
        "isHr24": false,
        "isPromotion": false
      }],
    }
})