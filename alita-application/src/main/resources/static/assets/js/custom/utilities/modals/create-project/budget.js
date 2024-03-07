"use strict";var AlitaModalCreateProjectBudget=function(){var e,t,a,r,o;return{init:function(){r=AlitaModalCreateProject.getForm(),o=AlitaModalCreateProject.getStepperObj(),e=AlitaModalCreateProject.getStepper().querySelector('[data-alita-element="budget-next"]'),t=AlitaModalCreateProject.getStepper().querySelector('[data-alita-element="budget-previous"]'),a=FormValidation.formValidation(r,{fields:{budget_setup:{validators:{notEmpty:{message:"Budget amount is required"},callback:{message:"The budget amount must be greater than $100",callback:function(e){var t=e.value;if(t=t.replace(/[$,]+/g,""),parseFloat(t)<100)return!1}}}},budget_usage:{validators:{notEmpty:{message:"Budget usage type is required"}}},budget_allow:{validators:{notEmpty:{message:"Allowing budget is required"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap5({rowSelector:".fv-row",eleInvalidClass:"",eleValidClass:""})}}),AlitaDialer.getInstance(r.querySelector("#alita_modal_create_project_budget_setup")).on("alita.dialer.changed",(function(){a.revalidateField("budget_setup")})),e.addEventListener("click",(function(t){t.preventDefault(),e.disabled=!0,a&&a.validate().then((function(t){console.log("validated!"),"Valid"==t?(e.setAttribute("data-alita-indicator","on"),setTimeout((function(){e.removeAttribute("data-alita-indicator"),e.disabled=!1,o.goNext()}),1500)):(e.disabled=!1,Swal.fire({text:"Sorry, looks like there are some errors detected, please try again.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}))}))})),t.addEventListener("click",(function(){o.goPrevious()}))}}}();"undefined"!=typeof module&&void 0!==module.exports&&(window.AlitaModalCreateProjectBudget=module.exports=AlitaModalCreateProjectBudget);