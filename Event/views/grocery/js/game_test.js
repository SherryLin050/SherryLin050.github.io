//遊戲開始函式
function GameStart() {
    if (Game.time > 0 && Game.time != 31) {
        alert("遊戲尚未結束,不能重新開始哦!");
        return;
    }
    Game.reset();
    Game.init();
    Game.start();
    Game.startTime();
    $(".start").css("display", "none")
}
var Mouse = function(type) {
    //地鼠的具體dom元素,新增到頁面上的
    this.mouse = null;
    //地鼠的編號
    this.num = -1;
    //地洞的編號(地鼠藏身在哪個洞)
    this.hole = -1;
    //初始化,type為地鼠型別,好與壞
    this.init(type);
}
Mouse.prototype = {
    //地鼠型別,好,壞,好的被殺,壞的被殺
    mousetype: {
        "good": "https://img.eclife.com.tw/EDM/11105/grocery202205/shoot_r.png",
        "bad": "https://img.eclife.com.tw/EDM/11105/grocery202205/shoot_y.png",
        "goodkill": "https://img.eclife.com.tw/EDM/11105/grocery202205/Get.png",
        "badkill": "https://img.eclife.com.tw/EDM/11105/grocery202205/Get.png"
    },
    //初始化地鼠
    init: function(type) {
        type = type || "good";
        var _this = this;
        //建立地鼠的dom元素
        this.mouse = document.createElement("span");
        //擴充套件屬性--地鼠型別
        this.mouse.mousetype = type;
        //擴充套件型別--屬否活著
        this.mouse.islive = true;
        if (screen.width < 1025) {
            this.mouse.style.cssText = "width:220px;height:220px;background:url('" + this.mousetype[type] + "') no-repeat;left:50%;transform: translateX(-50%);bottom:0;position:absolute;margin:auto;";
            this.mouse.style.backgroundRepeat = "no-repeat";
            if (screen.width < 768) {
                this.mouse.style.cssText = "width:95px;height:103px;background:url('" + this.mousetype[type] + "') no-repeat;left:50%;transform: translateX(-50%);bottom:-6px;position:absolute;margin:auto;";
                this.mouse.style.backgroundRepeat = "no-repeat";
            }
        } else {
            this.mouse.style.cssText = "width:220px;height:250px;background:url('" + this.mousetype[type] + "') no-repeat;left:50%;transform: translateX(-50%);bottom:-20px;position:absolute;margin:auto;";
            this.mouse.style.backgroundRepeat = "no-repeat";
        }
        //繫結地鼠被點選事件
        this.mouse.onclick = function(e) { _this.beat(e); };
    },
    //地鼠被點中
    beat: function(e) {
        if (this.mouse.islive) {
            this.mouse.islive = false;
            this.onbeat();
            this.mouse.style.background = "url(" + this.mousetype[this.mouse.mousetype + "kill"] + ")";
            this.mouse.style.backgroundRepeat = "no-repeat";
        }
    },
    //地鼠的動畫
    animation: function(speed) {
        if (screen.width < 992) {
            // 手機速度
            speed = speed == 'fast' ? 30 : speed == 'normal' ? 70 : 110;
        } else {
            // 電腦速度
            speed = speed == 'fast' ? 100 : speed == 'normal' ? 90 : 110;
        }
        var obj = this.mouse,
            ost = obj.style,
            oTop = parseInt(ost.top, 10),
            cut = 5,
            _this = this;
        //讓地鼠從地洞冒出來
        var show = function(top) {
            top = top - cut;
            if (top >= -40) {
                ost.top = top + 'px';
                setTimeout(function() { show(top); }, speed);
            } else {
                setTimeout(function() { hide(-40); }, speed * 10);
            }
        }
        //隱藏地鼠
        var hide = function(top) {
            top = top + cut;
            if (top <= oTop) {
                ost.top = top + 'px';
                setTimeout(function() { hide(top); }, speed);
            } else {
                _this.reset();
            }
        }
        show(oTop);
    },
    //重置地鼠,當地鼠滾回洞裡的時候
    reset: function() {
        this.mouse.islive = true;
        this.mouse.style.background = "url(" + this.mousetype[this.mouse.mousetype] + ")";
        this.mouse.style.backgroundRepeat = "no-repeat";
        this.onend();
    },
    //擴充套件方法:地鼠被點中
    onbeat: function() {},
    //擴充套件方法:地鼠動畫結束後
    onend: function() {}
}


//遊戲控制類
var Game = {
    //遊戲時間,20秒
    time: 31,
    //地鼠地圖,總共有十隻,其中兩隻是壞的
    mouseMap: {
        1: 'good',
        2: 'bad',
        3: 'good',
        4: 'bad',
        5: 'good',
        6: 'bad',
        7: 'good',
        8: 'bad',
        9: 'good',
        10: 'bad',
        11: 'good',
        12: 'bad'
    },
    //所有的地鼠dom元素
    allMouse: [],
    //目前分數
    nowScore: 0,
    //目前有哪幾個地洞給佔用
    hasHole: {},
    //目前有哪幾只地鼠是活動的
    hasMouse: {},
    //頁面的地洞集合
    lis: null,
    //初始化地鼠與地洞
    init: function() {
        //獲取頁面的地洞集合
        this.lis = document.getElementById('panel').getElementsByTagName('li');
        _this = this;
        //初始化10只地鼠
        for (var i = 1; i <= 12; i++) {
            var mouse = new Mouse(this.mouseMap[i]);
            //擴充套件地鼠被點中事件
            mouse.onbeat = function() {
                //修改分數
                Game.changeScore(+10);
            }
            //擴充套件地鼠動畫結束事件
            mouse.onend = function() {
                //移除地洞中的地鼠
                var li = _this.lis[this.hole];
                li.removeChild(li.mouse.mouse);
                li.mouse = null;
                //清除對應的地洞與地鼠
                _this.hasHole[this.hole] = null;
                _this.hasMouse[this.num] = null;
            }
            this.allMouse.push(mouse);
        }
    },
    //修改遊戲分數
    changeScore: function(score) {
        this.nowScore += score;
        document.getElementById('score').innerHTML = this.nowScore;
    },
    //遊戲開始
    start: function() {
        if (this.time <= 0) return;
        var _this = this;
        //隨機地洞編號
        var random = parseInt(Math.random() * 12, 10);
        while (this.hasHole[random]) {
            random = parseInt(Math.random() * 12, 10);
        }
        //隨機地鼠編號
        var randomMouse = parseInt(Math.random() * 12, 10);
        while (this.hasMouse[randomMouse]) {
            randomMouse = parseInt(Math.random() * 12, 10);
        }
        //新增地鼠到地洞中
        this.allMouse[randomMouse].hole = random;
        this.allMouse[randomMouse].num = randomMouse;
        this.lis[random].appendChild(this.allMouse[randomMouse].mouse);
        this.lis[random].mouse = this.allMouse[randomMouse];
        this.lis[random].mouse.animation('normal');
        //記錄地鼠與地洞編號
        this.hasHole[random] = 'true';
        this.hasMouse[randomMouse] = 'true';
        setTimeout(function() { _this.start(); }, 200);
    },
    //倒計時
    startTime: function() {
        this.time -= 1;
        var _this = this;
        document.getElementById('time').innerHTML = this.time;
        if (this.time > 0) {
            setTimeout(function() { _this.startTime() }, 1000);
        }
        if (this.time == 0) {
            scoremodal()
            $(".start").css("display", "block")
        }
    },
    //重置遊戲設定
    reset: function() {
        this.time = 30;
        this.allMouse = [];
        this.nowScore = 0;
        this.hasHole = {};
        this.hasMouse = {};
        this.lis = null;
        this.changeScore(0);
    }
}

//領取購物金跳窗
function scoremodal() {
    var scorenum = $("#score").text();
    var scoreTotal = scorenum.toString();
    if (scoreTotal < 110) {
        // 未達成再玩一次訊息
        $("#modal-container2").modal();
    } else if (scoreTotal >= 110) {
        // 達成110枚以上時，領取購物金跳窗
        $("#modal-container1").modal();
    }
}

//複製折扣碼
function copyurl1() {
    var copyText = document.getElementById("txt_output1");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert('複製成功');
}
