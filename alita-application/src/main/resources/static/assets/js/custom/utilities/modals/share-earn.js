"use strict";var AlitaModalShareEarn={init:function(){var e,n,s;e=document.querySelector("#alita_share_earn_link_copy_button"),n=document.querySelector("#alita_share_earn_link_input"),(s=new ClipboardJS(e))&&s.on("success",(function(s){var t=e.innerHTML;n.classList.add("bg-success"),n.classList.add("text-inverse-success"),e.innerHTML="Copied!",setTimeout((function(){e.innerHTML=t,n.classList.remove("bg-success"),n.classList.remove("text-inverse-success")}),3e3),s.clearSelection()}))}};AlitaUtil.onDOMContentLoaded((function(){AlitaModalShareEarn.init()}));