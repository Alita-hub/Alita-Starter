"use strict";var AlitaModalOfferADeal=function(){var e,t,o;return{init:function(){e=document.querySelector("#alita_modal_offer_a_deal_stepper"),o=document.querySelector("#alita_modal_offer_a_deal_form"),t=new AlitaStepper(e)},getStepper:function(){return e},getStepperObj:function(){return t},getForm:function(){return o}}}();AlitaUtil.onDOMContentLoaded((function(){document.querySelector("#alita_modal_offer_a_deal")&&(AlitaModalOfferADeal.init(),AlitaModalOfferADealType.init(),AlitaModalOfferADealDetails.init(),AlitaModalOfferADealFinance.init(),AlitaModalOfferADealComplete.init())})),"undefined"!=typeof module&&void 0!==module.exports&&(window.AlitaModalOfferADeal=module.exports=AlitaModalOfferADeal);