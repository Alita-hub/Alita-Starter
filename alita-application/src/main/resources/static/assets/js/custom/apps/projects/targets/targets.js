"use strict";var AlitaProjectTargets={init:function(){!function(){const t=document.getElementById("alita_profile_overview_table");t.querySelectorAll("tbody tr").forEach((t=>{const e=t.querySelectorAll("td"),o=moment(e[1].innerHTML,"MMM D, YYYY").format();e[1].setAttribute("data-order",o)})),$(t).DataTable({info:!1,order:[],paging:!1})}()}};AlitaUtil.onDOMContentLoaded((function(){AlitaProjectTargets.init()}));