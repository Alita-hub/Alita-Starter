"use strict";var AlitaModalUserSearch=function(){var e,t,n,s,a,r=function(e){setTimeout((function(){var a=AlitaUtil.getRandomInt(1,3);t.classList.add("d-none"),3===a?(n.classList.add("d-none"),s.classList.remove("d-none")):(n.classList.remove("d-none"),s.classList.add("d-none")),e.complete()}),1500)},o=function(e){t.classList.remove("d-none"),n.classList.add("d-none"),s.classList.add("d-none")};return{init:function(){(e=document.querySelector("#alita_modal_users_search_handler"))&&(e.querySelector('[data-alita-search-element="wrapper"]'),t=e.querySelector('[data-alita-search-element="suggestions"]'),n=e.querySelector('[data-alita-search-element="results"]'),s=e.querySelector('[data-alita-search-element="empty"]'),(a=new AlitaSearch(e)).on("alita.search.process",r),a.on("alita.search.clear",o))}}}();AlitaUtil.onDOMContentLoaded((function(){AlitaModalUserSearch.init()}));