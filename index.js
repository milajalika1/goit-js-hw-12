import{a as h,S as b,i as n}from"./assets/vendor-aorzEjyT.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const y=t=>`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags}"
    />
    <div class="wrapper">
    <ul class="wrapper-list">
    <li class="wrapper-item">Likes<span class="span-number">${t.likes}</span></li>
    <li class="wrapper-item">Views<span class="span-number">${t.views}</span></li>
    <li class="wrapper-item">Comments<span class="span-number">${t.comments}</span></li>
    <li class="wrapper-item">Downloads<span class="span-number">${t.downloads}</span></li>
    </ul>
    </div>
  </a>
</li>
`;h.defaults.baseURL="https://pixabay.com/api";const g=async(t,e)=>{try{const a={params:{key:"45538852-2ab6a380c393410172122f885",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}};return h.get("/",a)}catch(a){throw console.error("Error fetching images:",a),a}},l=document.querySelector(".search-form"),c=document.querySelector(".gallery"),m=document.querySelector(".loader"),u=document.querySelector(".load-more"),f=new b(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});let o=1,d="",L=0;const w=async t=>{try{t.preventDefault(),c.innerHTML="",m.classList.remove("is-hidden"),d=l.elements.user_query.value,o=1;const e=await g(d,o);if(console.log(e),d===""){n.warning({title:"Caution",message:"Fill in the search field",timeout:2e3,position:"topCenter"});return}if(m.classList.add("is-hidden"),e.data.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",timeout:2e3}),c.innerHTML="",l.reset();return}const a=e.data.hits.map(r=>y(r)).join("");c.innerHTML=a,L=document.querySelector("li").getBoundingClientRect().height,u.classList.remove("is-hidden"),f.refresh(),o>=Math.ceil(e.data.totalHits/15)&&(u.classList.add("is-hidden"),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),l.reset()}catch(e){console.log(e),n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",timeout:2e3})}},v=async t=>{try{o++;const e=await g(d,o),a=e.data.hits.map(i=>y(i)).join("");c.insertAdjacentHTML("beforeend",a),f.refresh(),scrollBy({top:L*2,behavior:"smooth"}),o>=Math.ceil(e.data.totalHits/15)&&(u.classList.add("is-hidden"),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(e){console.log(e)}};l.addEventListener("submit",w);u.addEventListener("click",v);
//# sourceMappingURL=index.js.map
