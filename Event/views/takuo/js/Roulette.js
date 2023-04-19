$(document).ready(function() {
    var audio = new Audio("https://img.eclife.com.tw/EDM/11008/Roulette/And%20Just%20Like%20That.mp3");
    var audio2 = new Audio("https://img.eclife.com.tw/EDM/11008/Roulette/10762.mp3");
    var audio3 = new Audio("https://img.eclife.com.tw/EDM/11008/Roulette/12746.mp3");
    var turnplate = {
        restaraunts: [], //大轉盤獎品名稱
        lotteryTimes: 1, //抽獎次數
        bRotate: false, //false:停止;ture:旋轉
        dtimer: null, //存放間隔動畫的定時器，用來清除運動   
        timeInterval: 2, //定時器的間隔時間，旋轉角度的速度，越小表示速度越快
        deg: 0, //角度，和css設置對應,初始為0
        speed: 0, //角度變化增量
        turnNum: 5, //旋轉總圈數
        sigalTurnNum: 1 //當前累計圈數
    };
    var lottery = document.getElementById("lottery");
    //旋轉轉盤總角度 angles,獎品位置; txt：提示語;
    function rotateFn(angles, txt, modalurl) {
        /*清除上一個定時器*/
        clearInterval(turnplate.dtimer);
        turnplate.dtimer = null;
        //變化累計角度
        turnplate.deg = turnplate.deg + turnplate.speed;
        // console.log(turnplate.turnNum);
        if (turnplate.deg < angles + 5400) {
            // lottery.style.transform = "rotate(" + turnplate.deg + "deg)";
            $('#lottery').css({
                '-webkit-transform' : 'rotate(' + turnplate.deg + 'deg)',
                '-moz-transform'    : 'rotate(' + turnplate.deg + 'deg)',
                '-ms-transform'     : 'rotate(' + turnplate.deg + 'deg)',
                '-o-transform'      : 'rotate(' + turnplate.deg + 'deg)',
                'transform'         : 'rotate(' + turnplate.deg + 'deg)'
            });
            if (turnplate.deg % 360 === 0) { //判斷第幾圈
                turnplate.sigalTurnNum += 1;
                console.log("幾圈 = "+ turnplate.sigalTurnNum);
                if (turnplate.sigalTurnNum === turnplate.turnNum - 8) { //到最後二圈
                    turnplate.speed = 2;
                    console.log(turnplate.turnNum);
                } else if (turnplate.sigalTurnNum === turnplate.turnNum - 5) { //到最後一圈
                    turnplate.speed = 1;
                    console.log(turnplate.turnNum);
                };
            }
            if (turnplate.sigalTurnNum === turnplate.turnNum - 2) { //到最後1圈圈
                turnplate.speed = (turnplate.speed <= 0.2) ? 0.2 : (turnplate.speed - 0.0015);
            };
            turnplate.dtimer = setInterval(function() {
                rotateFn(angles, txt, modalurl);
            }, turnplate.timeInterval);
        } else {
            // alert(txt);
            audio.pause();
            // audio2.play();
            audio3.play();
            setTimeout(function(){
                $("#modal-container1 .modal-content").html("<div class='col-xs-12'><p class='modal-title'>" + txt + "</p><p class='modal-ps'><a href=" + modalurl +" >專屬連結</a></p></div>");
                $("#modal-container1").modal();
            }, 500)
            console.log(modalurl);           
            turnplate.bRotate = !turnplate.bRotate;
        }
    };
   //window.onload = function () { //jsfiddle裡這句會執行不起來，因此屏蔽
    //動態添加大轉盤的獎品的提示語
    turnplate.restaraunts = [{
        title:"1PS5購買連結",
        url:"#",
        angle: "360"
    }, {
        title:"羅技PRO X滑鼠 $3XXX",
        url:"#",
        angle: "15"
    }, {
        title:"Cherry櫻桃3.0S茶軸$2XXX",
        url:"#",
        angle: "45"
    }, {
        title:"賽睿Arctis 1耳麥 $X6XX",
        url:"#",
        angle: "75"
    }, {
        title:"$55全館購物金",
        url:"#",
        angle: "105"
    }, {
        title:"$111品牌購物金",
        url:"#",
        angle: "150"
    }, {
        title:"$222品牌購物金",
        url:"#",
        angle: "195"
    }, {
        title:"$333品牌購物金",
        url:"#",
        angle: "240"
    }, {
        title:"曼都免費燙髮券",
        url:"#",
        angle: "285"
    }, {
        title:"一小時後再來了QQ",
        url:"#",
        angle: "300"
    }];
    document.getElementById("pointer").onclick = function() {
        console.log("Audio");        
        audio.play();
        if (turnplate.bRotate) return false;
        if (turnplate.lotteryTimes <= 0) {
            alert("抽獎次數已經用完！");
            return false;
        } else {
            turnplate.lotteryTimes -= 1;
        }
        turnplate.bRotate = !turnplate.bRotate;
        //初始化
        turnplate.deg = 0;
        turnplate.speed = 4;
        turnplate.sigalTurnNum = 0;
        // 獲取隨機數(獎品個數範圍內)
        var item = rnd(1, turnplate.restaraunts.length);
        // var item =0;
        // 指針轉到指定位置的中間,這個角度為逆時針方向的，要根據順時針方向的定位前面要取負數
        var angles = -turnplate.restaraunts[item - 1].angle;
        rotateFn(angles, turnplate.restaraunts[item - 1].title, turnplate.restaraunts[item - 1].url);
    }
    //}
    function rnd(n, m) {
        var random = Math.floor(Math.random() * (m - n + 1) + n);
        return random;
    }
});