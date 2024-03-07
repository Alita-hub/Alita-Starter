"use strict";var AlitaModalAddAddress=function(){var t,e,n,o,r,i;return{init:function(){i=new bootstrap.Modal(document.querySelector("#alita_modal_add_address")),r=document.querySelector("#alita_modal_add_address_form"),t=r.querySelector("#alita_modal_add_address_submit"),e=r.querySelector("#alita_modal_add_address_cancel"),n=r.querySelector("#alita_modal_add_address_close"),o=FormValidation.formValidation(r,{fields:{name:{validators:{notEmpty:{message:"Address name is required"}}},country:{validators:{notEmpty:{message:"Country is required"}}},address1:{validators:{notEmpty:{message:"Address 1 is required"}}},city:{validators:{notEmpty:{message:"City is required"}}},state:{validators:{notEmpty:{message:"State is required"}}},postcode:{validators:{notEmpty:{message:"Postcode is required"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap5({rowSelector:".fv-row",eleInvalidClass:"",eleValidClass:""})}}),$(r.querySelector('[name="country"]')).on("change",(function(){o.revalidateField("country")})),t.addEventListener("click",(function(e){e.preventDefault(),o&&o.validate().then((function(e){console.log("validated!"),"Valid"==e?(t.setAttribute("data-alita-indicator","on"),t.disabled=!0,setTimeout((function(){t.removeAttribute("data-alita-indicator"),Swal.fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}).then((function(e){e.isConfirmed&&(i.hide(),t.disabled=!1)}))}),2e3)):Swal.fire({text:"Sorry, looks like there are some errors detected, please try again.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}})}))})),e.addEventListener("click",(function(t){t.preventDefault(),Swal.fire({text:"Are you sure you would like to cancel?",icon:"warning",showCancelButton:!0,buttonsStyling:!1,confirmButtonText:"Yes, cancel it!",cancelButtonText:"No, return",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-active-light"}}).then((function(t){t.value?(r.reset(),i.hide()):"cancel"===t.dismiss&&Swal.fire({text:"Your form has not been cancelled!.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}})}))})),n.addEventListener("click",(function(t){t.preventDefault(),Swal.fire({text:"Are you sure you would like to cancel?",icon:"warning",showCancelButton:!0,buttonsStyling:!1,confirmButtonText:"Yes, cancel it!",cancelButtonText:"No, return",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-active-light"}}).then((function(t){t.value?(r.reset(),i.hide()):"cancel"===t.dismiss&&Swal.fire({text:"Your form has not been cancelled!.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}})}))}))}}}();AlitaUtil.onDOMContentLoaded((function(){AlitaModalAddAddress.init()}));