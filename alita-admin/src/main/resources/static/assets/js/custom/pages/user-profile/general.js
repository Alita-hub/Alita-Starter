"use strict";var AlitaProfileGeneral=function(){var t,e,i,o;return{init:function(){t=document.querySelector("#alita_followers_show_more_button"),e=document.querySelector("#alita_followers_show_more_cards"),i=document.querySelector("#alita_user_follow_button"),o=document.querySelector("#alita_user_profile_nav"),t&&t.addEventListener("click",(function(i){t.setAttribute("data-alita-indicator","on"),t.disabled=!0,setTimeout((function(){t.removeAttribute("data-alita-indicator"),t.disabled=!1,t.classList.add("d-none"),e.classList.remove("d-none"),AlitaUtil.scrollTo(e,200)}),2e3)})),i&&i.addEventListener("click",(function(t){t.preventDefault(),i.setAttribute("data-alita-indicator","on"),i.disabled=!0,i.classList.contains("btn-success")?setTimeout((function(){i.removeAttribute("data-alita-indicator"),i.classList.remove("btn-success"),i.classList.add("btn-light"),i.querySelector("i").classList.add("d-none"),i.querySelector(".indicator-label").innerHTML="Follow",i.disabled=!1}),1500):setTimeout((function(){i.removeAttribute("data-alita-indicator"),i.classList.add("btn-success"),i.classList.remove("btn-light"),i.querySelector("i").classList.remove("d-none"),i.querySelector(".indicator-label").innerHTML="Following",i.disabled=!1}),1e3)})),AlitaUtil.on(document.body,'[data-alita-follow-btn="true"]',"click",(function(t){t.preventDefault();var e=this,i=e.querySelector(".indicator-label"),o=e.querySelector(".following"),n=e.querySelector(".follow");e.setAttribute("data-alita-indicator","on"),e.disabled=!0,n.classList.add("d-none"),o.classList.add("d-none"),setTimeout((function(){e.removeAttribute("data-alita-indicator"),e.disabled=!1,e.classList.contains("btn-light-primary")?(e.classList.remove("btn-light-primary"),e.classList.add("btn-light"),n.classList.remove("d-none"),i.innerHTML="Follow"):(e.classList.add("btn-light-primary"),e.classList.remove("btn-light"),o.classList.remove("d-none"),i.innerHTML="Following")}),2e3)})),o&&o.getAttribute("data-alita-sticky")&&AlitaUtil.isBreakpointUp("lg")&&("1"===localStorage.getItem("nav-initialized")&&window.scroll({top:parseInt(o.getAttribute("data-alita-page-scroll-position")),behavior:"smooth"}),localStorage.setItem("nav-initialized","1"))}}}();AlitaUtil.onDOMContentLoaded((function(){AlitaProfileGeneral.init()}));