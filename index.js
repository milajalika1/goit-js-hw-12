import{a as p,S as m,i as l}from"./assets/vendor-aorzEjyT.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d=r=>`<li class="gallery-item">
  <a class="gallery-link" href="${r.largeImageURL}">
    <img
      class="gallery-image"
      src="${r.webformatURL}"
      alt="${r.tags}"
    />
    <div class="wrapper">
    <ul class="wrapper-list">
    <li class="wrapper-item">Likes<span class="span-number">${r.likes}</span></li>
    <li class="wrapper-item">Views<span class="span-number">${r.views}</span></li>
    <li class="wrapper-item">Comments<span class="span-number">${r.comments}</span></li>
    <li class="wrapper-item">Downloads<span class="span-number">${r.downloads}</span></li>
    </ul>
    </div>
  </a>
</li>
`;p.defaults.baseURL="https://pixabay.com/api";const f=r=>{const s={params:{key:"45538852-2ab6a380c393410172122f885",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}};return p.get("/",s)},i=document.querySelector(".search-form"),c=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=new m(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),h=async r=>{try{r.preventDefault(),c.innerHTML="",u.classList.remove("is-hidden");const s=i.elements.user_query.value,a=await f(s);if(console.log(a),s===""){l.warning({title:"Caution",message:"Fill in the search field",timeout:2e3,position:"topCenter"});return}if(u.classList.add("is-hidden"),a.data.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",timeout:2e3}),c.innerHTML="",i.reset();return}const o=a.data.hits.map(e=>d(e)).join("");c.innerHTML=o,y.refresh(),i.reset()}catch(s){console.log(s),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",timeout:2e3})}};i.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
