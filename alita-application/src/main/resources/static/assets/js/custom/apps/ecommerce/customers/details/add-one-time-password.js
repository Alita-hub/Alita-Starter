"use strict";var AlitaUsersAddOneTimePassword=function(){const t=document.getElementById("alita_modal_add_one_time_password"),e=t.querySelector("#alita_modal_add_one_time_password_form"),n=new bootstrap.Modal(t);return{init:function(){(()=>{var o=FormValidation.formValidation(e,{fields:{otp_mobile_number:{validators:{notEmpty:{message:"Valid mobile number is required"}}},otp_confirm_password:{validators:{notEmpty:{message:"Password confirmation is required"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap5({rowSelector:".fv-row",eleInvalidClass:"",eleValidClass:""})}});t.querySelector('[data-alita-users-modal-action="close"]').addEventListener("click",(t=>{t.preventDefault(),Swal.fire({text:"Are you sure you would like to close?",icon:"warning",showCancelButton:!0,buttonsStyling:!1,confirmButtonText:"Yes, close it!",cancelButtonText:"No, return",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-active-light"}}).then((function(t){t.value&&n.hide()}))})),t.querySelector('[data-alita-users-modal-action="cancel"]').addEventListener("click",(t=>{t.preventDefault(),Swal.fire({text:"Are you sure you would like to cancel?",icon:"warning",showCancelButton:!0,buttonsStyling:!1,confirmButtonText:"Yes, cancel it!",cancelButtonText:"No, return",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-active-light"}}).then((function(t){t.value?(e.reset(),n.hide()):"cancel"===t.dismiss&&Swal.fire({text:"Your form has not been cancelled!.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}})}))}));const i=t.querySelector('[data-alita-users-modal-action="submit"]');i.addEventListener("click",(function(t){t.preventDefault(),o&&o.validate().then((function(t){console.log("validated!"),"Valid"==t?(i.setAttribute("data-alita-indicator","on"),i.disabled=!0,setTimeout((function(){i.removeAttribute("data-alita-indicator"),i.disabled=!1,Swal.fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}).then((function(t){t.isConfirmed&&n.hide()}))}),2e3)):Swal.fire({text:"Sorry, looks like there are some errors detected, please try again.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}})}))}))})()}}}();AlitaUtil.onDOMContentLoaded((function(){AlitaUsersAddOneTimePassword.init()}));