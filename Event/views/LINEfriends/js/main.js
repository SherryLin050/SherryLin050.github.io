// 依照第一次Coupon對換購物金活動的正式JS做修正，僅修改 axios.post 的網址，以後的Coupon兌換購物金活動可用此JS在做微調畫面相關的JS
$(document).ready(function() {
    var w = 0;
    if ($(window).width() > 1199) {
        w = 0;
    } else {
        w = 130;
    }
    if (w > 0) {
        $(".flexslider.txtlink").flexslider({
            animation: "slide",
            animationLoop: false,
            itemWidth: w,
            itemMargin: 5,
            minItems: 2,
            pausePlay: false,
            controlNav: false,
        });
    }
    var sdate = new Date('2022/1/29');
    var sdate2 = new Date('2022/2/7');
    var edate = new Date('2022/2/14');
    var TPtime = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }).split(' ')[0];
    var parserDate = function(date) {
        var t = Date.parse(date);
        if (!isNaN(t)) {
            return new Date(Date.parse(date.replace(/-/g, "/")));
        } else {
            return new Date();
        }
    };
    // 活動說明試算表小型資料庫
    $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1BvKITNj9ngjKqZ6ul2lE-Yu41qok-2wSA3KbOJe40tc/values/活動說明?alt=json&key=AIzaSyDR0s1Xrx9412kwvVqhEhywS3qdEipMUaM",
        function(json) {
            var e = json.values,
                l = e.length,
                detail_active = "",
                demolst_mblb = "",
                entry, i, blbtitle, blbimg, blburl, blbalt;
            var obj = Object.assign({}, e);
            detail_active += "<strong>活動說明</strong>";
            for(var i = 0; i < l; i++ ){
                entry = obj[i];
                if(i%2 == 0){
                    detail_active += "<p class='tt'>"+ entry +"</p>";
                }
                if(i%2 == 1){
                    var le = entry.length
                    detail_active += "<ul class='lst'>";
                    for(var j = 0 ; j < le ;j++){
                        detail_active += "<li>"+ obj[i][j] +"</li>";
                    }
                    detail_active += "</ul>";
                }
            }
            $("#ADetail").html(detail_active);
        }
    );
    // 活動說明試算表小型資料庫
    $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1BvKITNj9ngjKqZ6ul2lE-Yu41qok-2wSA3KbOJe40tc/values/注意事項?alt=json&key=AIzaSyDR0s1Xrx9412kwvVqhEhywS3qdEipMUaM",
        function(json) {
            var e = json.values,
                l = e.length,
                detail_lst= "",
                entry, i;

            detail_lst += "<strong>注意事項</strong><ul class='lst'>";
            for(var i = 0; i < l; i++ ){
                entry = e[i];
                detail_lst += "<li>"+ e[i] +"</li>";
            }
            detail_lst += "</ul>";
            $("#BDetail").html(detail_lst);
        }
    );
    // 活動說明試算表小型資料庫
    $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1BvKITNj9ngjKqZ6ul2lE-Yu41qok-2wSA3KbOJe40tc/values/首禮?alt=json&key=AIzaSyDR0s1Xrx9412kwvVqhEhywS3qdEipMUaM",
        function(json) {
            var e = json.values,
                l = e.length,
                demolst_img= "",
                entry, i, imgalt, imgsrc, imgurl, imgsrc_m
                obj = Object.assign({}, e);
            for(var i = 0; i < l; i++ ){
                entry = e[i];
                if(e[i][0] == "imgalt"){
                    imgalt = e[i][1];
                }
                if(e[i][0] == "imgsrc"){
                    imgsrc = e[i][1];
                }
                if(e[i][0] == "imgurl"){
                    imgurl = e[i][1];
                }
                if(e[i][0] == "imgsrc_m"){
                    imgsrc_m = e[i][1];
                }
                
            }
            demolst_img= "<a class='col-xs-12 ad' href=" + imgurl + "><picture><source srcset=" + imgsrc +" media='(min-width: 768px)'><source srcset=" + imgsrc_m + " media='(max-width: 767px)'><img src=" + imgsrc + " alt=" + imgalt + " class='img-responsive'></picture></a>"
            $("#AD").html(demolst_img);
        }
    );
});