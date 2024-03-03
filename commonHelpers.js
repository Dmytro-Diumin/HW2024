import{a as u,i as l}from"./assets/vendor-5d96d100.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const p="https://books-backend.p.goit.global/books/";async function k(){return await u.get(`${p}top-books`)}async function L(o){return await u.get(`${p}category?category=${o}`)}let d;const g=document.querySelector(".main-category-title");function f(o){const e=o;console.log(o),L(e).then(s=>{Object.keys(s.data).length!==0?(n.innerHTML="",S(s.data,e)):(n.innerHTML="",l.error({message:"Sorry, there are no books to render",position:"topRight"}))}).catch(s=>{console.log("Error loading data:",s),l.info({message:"Sorry, there are no books to render",position:"topRight",timeout:3e3,progressBar:!1,title:"Error"})})}function S(o,e){n.insertAdjacentHTML("afterbegin",'<ul class="category-books-list"></ul>'),d=document.querySelector(".category-books-list");const s=o.map(r=>`
        <li class="home-books-item" id="${r._id}">
        <div class="image-overlay">
            <img class="book-image" src="${r.book_image}" alt="${r.title}">
            <p class="image-overlay-text">QUICK VIEW</p>
        </div>
            <div class="book-info">
                <p class="book-title break-text">${r.title}</p>
                <p class="book-author">${r.author}</p>
            </div>
        </li>`).join("");d.insertAdjacentHTML("beforeend",s),d.insertAdjacentHTML("afterend",'<div class="all-cat-btn-wrap"><button class="all-cat-btn">All Categories</button></div>');let a=document.querySelector(".all-cat-btn");v(a);const t=e.split(" ");if(t.length>3){const r=t[Math.round((t.length-1)/2)];let i=e.split(r).join(" ");i=i.replace(t[t.length-1],`<span class="main-category-title-span">${t[t.length-1]}</span>`),g.innerHTML=i}else e=e.replace(t[t.length-1],`<span class="main-category-title-span">${t[t.length-1]}</span>`),g.innerHTML=e}function v(o){o.addEventListener("click",()=>{m(),h()})}function h(){g.innerHTML='Best Sellers <span class="main-category-title-span">Books</span>'}const n=document.querySelector(".home-categories-list");let y;const C=document.querySelector(".loader");window.addEventListener("load",()=>{C.style.display="none"});const E={titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1},T={...E,backgroundColor:"#EF4040",maxWidth:400};function m(){k().then(o=>{Object.keys(o.data).length!==0?(n.innerHTML="",H(o.data)):(n.innerHTML="",l.error({message:"Sorry, there are no books to render",position:"topRight"}))}).catch(o=>{console.log("Error loading data:",o),l.info({message:"Sorry, there are no books to render",position:"topRight",timeout:3e3,progressBar:!1,title:"Error",...T})})}function H(o){const e=o.map(s=>`
        <li class="home-categories-item">
        <h3 class="home-category-title">${s.list_name}</h3>
        <ul class="home-books-list">${$(s.books)}</ul>
        <div class="see-more-wrapper">
            <button class="button see-more" data-js="${s.list_name}">See more</button>
        </div>
        </li>`).join("");n.insertAdjacentHTML("beforeend",e),y=document.querySelectorAll(".see-more"),B()}function $(o){return o.map(e=>`
        <li class="home-books-item" id="${e._id}">
            <div class="image-overlay">
                <img class="book-image" src="${e.book_image}" alt="${e.title}">
                <p class="image-overlay-text">QUICK VIEW</p>
            </div>
            <div class="book-info">
                <p class="book-title break-text">${e.title}</p>
                <p class="book-author">${e.author}</p>
            </div>
        </li>`).join("")}function B(){for(let o of y)o.addEventListener("click",()=>f(o.getAttribute("data-js")))}const c={themeCheckbox:document.querySelector("#theme-switch"),categoriesRef:document.querySelector(".categories__list"),upButton:document.querySelector(".up-button")};c.categoriesRef.addEventListener("click",b);function b(o){if(!o||!o.target||!o.target.classList.contains("categories__item"))return;const e=o.target;e.dataset.category==="all categories"?(Array.from(e.parentElement.children).forEach(a=>{a.classList.remove("selected")}),e.classList.add("selected"),m(),h()):(Array.from(e.parentElement.children).forEach(a=>{a.classList.remove("selected")}),e.classList.add("selected"),f(e.dataset.category))}function M(){c.themeCheckbox.checked?localStorage.setItem("theme","dark"):localStorage.removeItem("theme")}localStorage.getItem("theme")==="dark"&&(c.themeCheckbox.checked=!0);m();b();c.themeCheckbox.addEventListener("change",M);
//# sourceMappingURL=commonHelpers.js.map
