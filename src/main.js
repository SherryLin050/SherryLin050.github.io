import { createApp } from 'vue'
// 全域css
import './css/style.css'
import 'bootstrap';
import 'https://code.jquery.com/jquery-3.6.4.min.js';
import Header from './Header.vue'
import Footer from './Footer.vue'

createApp(Header).mount('header')
createApp(Footer).mount('footer')

window.addEventListener('load', function () {
    var loading = document.getElementById('loading');
    setTimeout(function() {
      loading.style.display = 'none';
    }, 1000); // 1秒後隱藏 loading 畫面
});