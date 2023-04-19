<script>
import Portfolio from "./components/Portfolio.vue";
export default {
  components: {
    Portfolio
  },
  data() {
    return {
      posts: [
        { id: 1, title: "良興官網",list:[{item:"學習規劃面，從良興購物網提升至看整個良興的事業體"},{item:"初次當專案負責人整合各部門資訊並與設計溝通如何切版"},{item:"串接google sheet API讓企劃可以輕易上稿修改官網內容"},{item:"使用Vue及bootstrap切版，並使用SVG製圖及做hover效果。"}],img: "/ad01.jpg", innerimg: "/servce.jpg", modal:"#portfolioModal",url:"https://ls3c.eclife.com.tw/" },
        { id: 7, title: "良興購物網介面流程優化",list:[{item:"購物流程優化-增加記錄歷史資訊可直接帶入減輕消費者填寫的時間、填寫資料頁增加購物車明細讓消費者可以最後確認"},{item:"購物車分車-各個配送方式及商品體積的限制，加上使用者體驗更佳化，減輕填資料頁及產品頁的loading，讓網頁速度提升"},{item:"訂單查詢頁-加入配送狀態，減輕客服常見的問題讓消費者能在訂單查詢一併了解資訊，另外將本來沒有的收件人訊息增加，並使用開合的模式讓消費者能夠輕易地查詢關於訂單的相關資訊"},{item:"購物金介面優化，更改原本呆板的表格設計，使用折價券的模式，讓消費者更清楚明瞭每張購物金的使用狀態、限制、金額。"},{item:"產品頁-加入門市庫存，讓實體門市與線上購物結合，消費者能更清楚的了解門市庫存狀態，可以去線下做體驗及購買。"}],img: "/ad07.jpg", innerimg: "/UI-inner.jpg", modal:"#portfolioModal",url:"https://www.eclife.com.tw/Personal/OrdHistory/" },
        { id: 9, title: "服務員商城後台介面優化",list:[{item:"運用adobeXD設計介面"},{item:"商品推播及圖片推播使用卡片式設計，讓服務員使用起來更清楚明瞭的設定推播"},{item:"使用Vue3、SPA的模式去執行每個頁面切版。"}],img: "/ad09.jpg", innerimg: "/HOYA-inner.jpg", modal:"#portfolioModal",url:"https://xd.adobe.com/view/9aed8f94-98ef-4866-8255-dda1131f8e48-cfbe/" },
        { id: 2, title: "行銷活動：校正啤酒肚",list:[{item:"開發網頁遊戲翻牌對對碰，搭配行銷手法讓客人的網頁停留時間增長"}],img: "/ad02.jpg", innerimg: "/correction-inner.jpg", modal:"#portfolioModal",url:"/Event/views/correction/Index.V1.html" },
        { id: 3, title: "行銷活動：雙11瘋狂配對",list:[{item:"運用CSS position屬性做出舞台浮動的效果讓使用者體驗更加貼近設計的設計理念"}],img: "/ad03.jpg", innerimg: "/CrazyMate-inner.jpg", modal:"#portfolioModal",url:"/Event/views/CrazyMate/Index.V1.html" },
        { id: 4, title: "行銷活動：良興商行",list:[{item:"運用JS製造出計時器及判斷商品特賣時刻，讓行銷活動更有飢餓感集預告的效果"},{item:"串接google sheet API讓企劃可以輕易修改行銷內容"}],img: "/ad04.jpg", innerimg: "/grocery-inner.jpg", modal:"#portfolioModal",url:"/Event/views/grocery/timeup.html" },
        { id: 5, title: "行銷活動：LINE 好友招募",list:[{item:"與企劃合作將畫面設計的更讓消費者了解加入LINE好友的優惠"},{item:"並設計步驟圖讓使用者以簡單幾個步驟就加好友"}],img: "/ad05.jpg", innerimg: "/LINE-inner.jpg", modal:"#portfolioModal",url:"/Event/views/LINEfriends/Index.V1.html" },
        { id: 6, title: "行銷活動：電源百寶袋",list:[{item:"與PM共同發想怎樣的互動可以讓消費者更明白各個電源供應產品的不同用途"},{item:"網頁利用滾視差的效果，區分不同的情境"}],img: "/ad06.jpg", innerimg: "/Power-inner.jpg", modal:"#portfolioModal",url:"/Event/views/PowerStore/Index.V1.html" },        
        { id: 8, title: "行銷活動：改造計畫 良興x曼都",list:[{item:"與曼都的合作，以良興TA偏男性為主軸去設計做一個改造計畫。"},{item:"開發網頁遊戲輪盤並加入音效，讓使用者更有抽獎的感覺。"}],img: "/ad08.jpg", innerimg: "/takuo-inner.jpg", modal:"#portfolioModal",url:"/Event/views/takuo/Index.V1.html" },
        
      ],
      modalcontent:{}
    };
  },
  methods: {
    // 產品列表中查找與指定的 product_id 相符的產品對象
    getProduct: function (id) {
      let vm = this;
      return vm.posts.filter((e) => e.id == id).pop();
    },
    // 作用是將指定的產品設置為當前選擇的產品
    setSelectedProduct: function (id) {
      let vm = this;
      vm.modalcontent = vm.getProduct(id);
      console.log(vm.modalcontent);
    },
  },
};
</script>

<template>
  <div class="container">
    <!-- Portfolio Section Heading-->
    <h2 class="page-section-heading text-center text-white">PORTFOLIO</h2>
    <div class="row justify-content-center">
      <Portfolio
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :img="post.img"
      :modal="post.modal"
      @click="setSelectedProduct(post.id)"
      ></Portfolio>
    </div>  
  </div>
  
  <!-- Modal -->
  <div class="modal fade portfolio-modal" id="portfolioModal" tabindex="-1" aria-labelledby="portfolioModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">          
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="imgbox">
            <img class="img-fluid" :src="modalcontent.innerimg" :alt="modalcontent.title" />
          </div>
          <div class="inner">
            <h5 class="modal-title" id="portfolioModalLabel">
              {{ modalcontent.title }}
            </h5>
            <ul>
              <li v-for="lst in modalcontent.list">{{ lst.item }}</li>
            </ul>
          </div>
          <div class="link text-right"><a :href="modalcontent.url" target="_blank">專案連結</a></div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
  .modal-body{
    @media (min-width: 992px) {            
      padding: 10px 15%;
    }
    
  }
  .imgbox{
    @media (min-width: 992px) {            
      width: 100%;
      margin: 0 auto;
    }
  }
  .inner{
    padding: 10px;
  }
  .link{
    text-align: right;
    a{
      font-size: 1.2rem;
      border-bottom: 1px solid;
    }
  }
  .btn-secondary{
    color: white;
  }
</style>
