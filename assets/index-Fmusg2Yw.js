var e=(e,t)=>()=>(e&&(t=e(e=0)),t),t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n,r=e((()=>{n=[{id:`materi-1`,title:`Pengenalan Candlestick Basic`,description:`Memahami anatomi dasar candlestick dan cara membacanya di pasar crypto.`,content:`
# Anatomi Candlestick

Candlestick adalah visualisasi pergerakan harga pada rentang waktu tertentu. Memahami candlestick adalah syarat mutlak sebelum melakukan *scalping* atau *sniper trading*.

## Komponen Utama
Setiap candle memiliki 4 data harga utama, sering disingkat **OHLC**:
* **Open (O):** Harga pembukaan.
* **High (H):** Harga tertinggi yang dicapai.
* **Low (L):** Harga terendah yang dicapai.
* **Close (C):** Harga penutupan.

## Jenis Candle

### 1. Bullish Candle (Hijau)
Menandakan bahwa tekanan beli lebih kuat.
* Terjadi jika **Close > Open**
* Body berwarna hijau (atau putih di chart tradisional).

### 2. Bearish Candle (Merah)
Menandakan bahwa tekanan jual mendominasi.
* Terjadi jika **Close < Open**
* Body berwarna merah (atau hitam).

> **Pro Tip dari Gemini:**
> "Ekor (wick) yang panjang pada sebuah candle menunjukkan adanya *rejection* atau penolakan harga yang sangat kuat. Ini sering kali menjadi sinyal awal terjadinya pembalikan arah (reversal)."

### Contoh Format Tabel

| Pola Reversal | Arah Trend | Kekuatan Sinyal |
| :--- | :---: | :---: |
| Hammer | Bullish | Sedang - Kuat |
| Shooting Star | Bearish | Sedang - Kuat |
| Engulfing | Keduanya | Sangat Kuat |

### Pseudo-code Logika Sederhana
Jika kamu ingin membuat algoritma deteksi, logikanya sangat simpel:
\`\`\`javascript
function isBullish(open, close) {
    if (close > open) {
        return true;
    }
    return false;
}
\`\`\`
`},{id:`materi-2`,title:`Psikologi Trading & Risk Management`,description:`Aturan emas dalam menjaga modal dan mental saat menghadapi volatilitas pasar.`,content:`
# Psikologi Trading

Trading bukanlah sekadar adu strategi, melainkan **adu mental**. Bahkan jika strategi kamu memiliki *win-rate* 80%, kamu tetap bisa rugi besar jika tidak memiliki psikologi yang stabil.

## Musuh Utama Trader

1. **FOMO (Fear of Missing Out):** Ketakutan ketinggalan profit. Membuatmu sering masuk di pucuk harga.
2. **Revenge Trading:** Berusaha "balas dendam" ke pasar setelah kena *Stop Loss*. Biasanya berujung dengan open posisi asal-asalan tanpa analisa.
3. **Over-leveraging:** Menggunakan leverage telalu besar (misal 50x atau 100x) karena serakah ingin cepat kaya.

> "Pasar adalah alat pemindah uang dari orang yang tidak sabaran kepada orang yang sabar." - Warren Buffett

## Aturan Risk Management 1%

Cara paling aman bertahan di market adalah merisikokan maksimal **1% - 2%** dari total modal per transaksi.

**Rumus Sederhana:**
1. Jika modal kamu $1000.
2. Risiko per trade adalah 1% = $10.
3. Artinya, jarak dari *Entry* ke *Stop Loss* kerugiannya maksimal hanya $10.

Dengan sistem ini, kamu harus salah **100 kali berturut-turut** baru uangmu habis. 
`}]}));t((()=>{r(),document.addEventListener(`DOMContentLoaded`,()=>{window.markedKatex&&marked.use(window.markedKatex({throwOnError:!1}));let e=[],t=[],r=null,i=`all`,a=1,o=localStorage.getItem(`eduPwaScale`);o&&(a=parseFloat(o),R());let s=localStorage.getItem(`eduPwaLessons`);s?(e=JSON.parse(s),e.forEach(e=>{e.categoryId===`uncategorized`&&(e.categoryId=``)})):n!==void 0&&(e=n.map(e=>({...e,categoryId:``})),l());let c=localStorage.getItem(`eduPwaCategories`);c&&(t=JSON.parse(c).filter(e=>e.id!==`uncategorized`)),u();function l(){localStorage.setItem(`eduPwaLessons`,JSON.stringify(e))}function u(){localStorage.setItem(`eduPwaCategories`,JSON.stringify(t))}let d=document.getElementById(`home-view`),f=document.getElementById(`reading-view`),p=document.getElementById(`editor-view`),m=document.getElementById(`settings-view`),h=document.getElementById(`lesson-list`),g=document.getElementById(`add-lesson-btn`),_=document.getElementById(`category-filter`),v=document.getElementById(`settings-btn`),y=document.getElementById(`back-btn`),b=document.getElementById(`reading-title`),x=document.getElementById(`lesson-content`),S=document.getElementById(`edit-lesson-btn`),C=document.getElementById(`editor-cancel-btn`),w=document.getElementById(`editor-save-btn`),T=document.getElementById(`input-title`),E=document.getElementById(`input-content`),D=document.getElementById(`input-category`),O=document.getElementById(`settings-back-btn`),k=document.getElementById(`scale-up-btn`),A=document.getElementById(`scale-down-btn`),j=document.getElementById(`scale-display`),M=document.getElementById(`save-category-btn`),N=document.getElementById(`input-new-category`),P=document.getElementById(`category-list`),F=document.getElementById(`export-btn`),I=document.getElementById(`load-btn`),L=document.getElementById(`load-file`);function R(){document.body.style.zoom=a,document.documentElement.style.setProperty(`--ui-scale`,a),j&&(j.textContent=Math.round(a*100)+`%`),k&&(k.disabled=a>=1),A&&(A.disabled=a<=.6),localStorage.setItem(`eduPwaScale`,a)}function z(){_.innerHTML=`<option value="all">Semua Kategori</option>`,t.forEach(e=>{_.innerHTML+=`<option value="${e.id}">${e.name}</option>`}),_.value=i,D.innerHTML=`<option value="">-- Tanpa Kategori --</option>`,t.forEach(e=>{D.innerHTML+=`<option value="${e.id}">${e.name}</option>`}),D.innerHTML+=`<option value="add_new_category" style="font-weight: bold;">+ Tambah Kategori Baru...</option>`}function B(){h.innerHTML=``;let t=e;if(i!==`all`&&(t=e.filter(e=>e.categoryId===i)),t.length===0){h.innerHTML=`<p style="text-align:center; color:#666; padding: 40px 0;">Belum ada materi di kategori ini.</p>`;return}t.forEach((e,t)=>{let n=document.createElement(`li`);n.innerHTML=`
                <div class="lesson-card" data-id="${e.id}">
                    <h3 class="lesson-title">${e.title}</h3>
                </div>
            `,h.appendChild(n)}),document.querySelectorAll(`.lesson-card`).forEach(e=>{e.addEventListener(`click`,()=>{U(e.getAttribute(`data-id`))})})}function V(){d.classList.remove(`active`),f.classList.remove(`active`),p.classList.remove(`active`),m.classList.remove(`active`)}function H(){V(),d.classList.add(`active`),setTimeout(()=>{x.innerHTML=``},300),r=null}function U(t){let n=e.find(e=>e.id===t);if(n){r=n.id,b.textContent=n.title,window.scrollTo(0,0);try{x.innerHTML=marked.parse(n.content)}catch{x.innerHTML=`<p>Gagal merender Markdown.</p>`}V(),f.classList.add(`active`)}}function W(){r=null,T.value=``,E.value=``,i===`all`?D.value=``:D.value=i,V(),p.classList.add(`active`)}function G(){if(!r)return;let t=e.find(e=>e.id===r);t&&(T.value=t.title,E.value=t.content,D.value=t.categoryId||``,V(),p.classList.add(`active`))}function K(){let t=T.value.trim(),n=E.value.trim(),i=D.value;if(!t||!n){alert(`Harap isi semua kolom!`);return}if(r){let a=e.findIndex(e=>e.id===r);a!==-1&&(e[a].title=t,e[a].content=n,e[a].categoryId=i)}else{let r={id:`materi-`+Date.now(),title:t,content:n,categoryId:i};e.push(r)}l(),B(),H()}function q(){V(),m.classList.add(`active`),j&&(j.textContent=Math.round(a*100)+`%`),J()}function J(){P.innerHTML=``,t.forEach(e=>{let t=document.createElement(`li`);t.className=`category-item`,t.innerHTML=`
                <span>${e.name}</span>
                <button class="delete-cat-btn" data-id="${e.id}">Hapus</button>
            `,P.appendChild(t)}),document.querySelectorAll(`.delete-cat-btn`).forEach(e=>{e.addEventListener(`click`,e=>{X(e.target.getAttribute(`data-id`))})})}function Y(){let e=N.value.trim();if(!e)return;let n={id:`cat-`+Date.now(),name:e};t.push(n),u(),N.value=``,J(),z()}function X(n){confirm(`Hapus kategori ini? Materi di dalamnya akan menjadi tanpa kategori dan tampil di halaman depan.`)&&(t=t.filter(e=>e.id!==n),u(),e.forEach(e=>{e.categoryId===n&&(e.categoryId=``)}),l(),i===n&&(i=`all`),J(),z(),B())}_.addEventListener(`change`,e=>{i=e.target.value,B()});let Z=``;D.addEventListener(`focus`,function(){Z=this.value}),D.addEventListener(`change`,function(e){if(this.value===`add_new_category`){let e=prompt(`Masukkan nama kategori baru:`);if(e&&e.trim()){let n={id:`cat-`+Date.now(),name:e.trim()};t.push(n),u(),z(),J(),this.value=n.id,Z=n.id}else this.value=Z}else Z=this.value}),g.addEventListener(`click`,W),S.addEventListener(`click`,G),y.addEventListener(`click`,H),C.addEventListener(`click`,H),w.addEventListener(`click`,K),v.addEventListener(`click`,q),O.addEventListener(`click`,H),k.addEventListener(`click`,()=>{a<1&&(a=Math.min(1,a+.1),R())}),A.addEventListener(`click`,()=>{a>.6&&(a-=.1,R())}),M.addEventListener(`click`,Y),F.addEventListener(`click`,()=>{let n=`data:text/json;charset=utf-8,`+encodeURIComponent(JSON.stringify({lessons:e,categories:t,scale:a},null,2)),r=document.createElement(`a`);r.setAttribute(`href`,n);let i=new Date,o=`${i.getFullYear()}${(i.getMonth()+1).toString().padStart(2,`0`)}${i.getDate().toString().padStart(2,`0`)}`;r.setAttribute(`download`,`edupwa_backup_${o}.json`),document.body.appendChild(r),r.click(),r.remove()}),I.addEventListener(`click`,()=>{L.click()}),L.addEventListener(`change`,n=>{let r=n.target.files[0];if(!r)return;let o=new FileReader;o.onload=function(n){try{let r=JSON.parse(n.target.result);r.lessons&&Array.isArray(r.lessons)?confirm(`Data saat ini akan tertimpa dengan data dari file backup. Lanjutkan?`)&&(e=r.lessons,t=r.categories||[],r.scale&&(a=parseFloat(r.scale),R()),l(),u(),i=`all`,z(),J(),B(),alert(`Data berhasil di-load!`)):alert(`Format file tidak valid. Pastikan file backup berasal dari aplikasi ini.`)}catch{alert(`Gagal membaca file JSON. File mungkin korup.`)}L.value=``},o.readAsText(r)}),z(),B()})}))();