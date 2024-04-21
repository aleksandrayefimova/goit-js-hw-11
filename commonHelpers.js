import{a as f,i as u,S as m}from"./assets/vendor-eded45c0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d={url:"https://pixabay.com/api/",params:{key:"35337679-b7947e609f482c58d47f4cd5a",q:"",image_type:"photo",orientation:"horizontal",safesearch:"true",page:1,per_page:20},onRequestServer(r=this.params.q){return this.params.q=r,this.params.page+=1,f.get(this.url,{params:this.params})}};function p(r){return r.map(({webformatURL:s,largeImageURL:o,tags:n,likes:e,views:t,comments:l,downloads:c})=>`
    <div class="gallery__item">
      <a class="gallery__link" href="${o}">
        <img class="gallery__image" src="${s}" alt="${n}" loading="lazy"/>
      </a>
      <div class="gallery__info">
        <p class="gallery__info-item">
          <b>Likes ${e}</b>
        </p>
        <p class="gallery__info-item">
          <b>Views ${t}</b>
        </p>
        <p class="gallery__info-item">
          <b>Comments ${l}</b>
        </p>
        <p class="gallery__info-item">
          <b>Downloads ${c}</b>
        </p>
      </div>
    </div>`).join("")}const a={isHiden:!0,disabled:!0,loading:!1,buttonAdress:null,buttonState({isHiden:r=this.isHiden,disabled:s=this.disabled,loading:o=this.loading}){r?this.buttonAdress.classList.add("visually-hidden"):this.buttonAdress.classList.remove("visually-hidden"),s?this.buttonAdress.disabled=!0:this.buttonAdress.disabled=!1,o?this.buttonAdress.textContent="Loading...":this.buttonAdress.textContent="Load-more"}},i={form:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),loadMoreButton:document.querySelector(".load-more"),searchButton:document.querySelector("#search-form button")};a.buttonAdress=i.loadMoreButton;console.log(123);a.buttonState({});i.form.addEventListener("submit",g);async function g(r){r.preventDefault();const{searchQuery:s}=r.currentTarget.elements;if(!s.value.trim()){u.info({message:"Please, enter data to search!",position:"topRight"});return}i.searchButton.disabled=!0,d.params.page=0,i.gallery.innerHTML="",a.buttonState({isHiden:!1,loading:!0});try{const o=await d.onRequestServer(s.value),{hits:n,totalHits:e}=o.data;if(!e){u.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"}),a.buttonState({isHiden:!0}),i.searchButton.disabled=!1;return}u.success({message:`Hooray! We found ${e} images.`,position:"topRight"}),i.gallery.insertAdjacentHTML("beforeend",p(n)),i.searchButton.disabled=!1,new m(".gallery a").refresh(),e<=20?a.buttonState({isHiden:!0,disabled:!0}):a.buttonState({isHiden:!1,disabled:!1,loading:!1})}catch(o){u.error({message:"Будь ласка, введіть дані для пошуку!",position:"topRight"}),console.log(o),a.buttonState({isHiden:!0,disabled:!0})}finally{a.buttonState({isHiden:!0,disabled:!0})}}
//# sourceMappingURL=commonHelpers.js.map
