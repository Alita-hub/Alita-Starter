"use strict";
var AlitaSigninGeneral = (function () {
    var formElement, submitButton, formValidator;

    function init() {
        formElement = document.querySelector("#alita_login_form");
        submitButton = document.querySelector("#alita_login_submit");
        formValidator = FormValidation.formValidation(formElement, {
            fields: {
                email: {
                    validators: {
                        regexp: {
                            regexp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "The value is not a valid email address"
                        },
                        notEmpty: {
                            message: "Email address is required"
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: "The password is required"
                        }
                    }
                }
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger,
                bootstrap: new FormValidation.plugins.Bootstrap5({
                    rowSelector: ".fv-row",
                    eleInvalidClass: "",
                    eleValidClass: ""
                })
            }
        });

        submitButton.addEventListener("click", handleAxiosRequest);
    }

    function handleFormRequest(event) {
        console.log("form请求");
        event.preventDefault();
        formValidator.validate().then(function (result) {
            if (result === "Valid") {
                submitButton.setAttribute("data-alita-indicator", "on");
                submitButton.disabled = true;
                setTimeout(function () {
                    submitButton.removeAttribute("data-alita-indicator");
                    submitButton.disabled = false;
                    Swal.fire({
                        text: "You have successfully logged in!",
                        icon: "success",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {confirmButton: "btn btn-primary"}
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            formElement.querySelector('[name="email"]').value = "";
                            formElement.querySelector('[name="password"]').value = "";
                            var redirectUrl = formElement.getAttribute("data-alita-redirect-url");
                            if (redirectUrl) {
                                location.href = redirectUrl;
                            }
                        }
                    });
                }, 2000);
            } else {
                Swal.fire({
                    text: "Sorry, looks like there are some errors detected, please try again.",
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    customClass: {confirmButton: "btn btn-primary"}
                });
            }
        });
    }

    function handleAxiosRequest(event) {
        console.log("axios请求");
        event.preventDefault();
        formValidator.validate().then(function (result) {
            if (result === "Valid") {
                submitButton.setAttribute("data-alita-indicator", "on");
                submitButton.disabled = true;
                //请求参数构造
                var params = {

                }
                //发送请求
                axios.post(submitButton.closest("form").getAttribute("action"), params).then(function (response) {
                    if (response) {
                        formElement.reset();
                        Swal.fire({
                            text: "You have successfully logged in!",
                            icon: "success",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {confirmButton: "btn btn-primary"}
                        });
                        const redirectUrl = formElement.getAttribute("data-alita-redirect-url");
                        if (redirectUrl) {
                            location.href = redirectUrl;
                        }

                    } else {
                        Swal.fire({
                            text: "Sorry, the email or password is incorrect, please try again.",
                            icon: "error",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {confirmButton: "btn btn-primary"}
                        });
                    }
                }).catch(function (error) {
                    Swal.fire({
                        text: "Sorry, looks like there are some errors detected, please try again.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {confirmButton: "btn btn-primary"}
                    });
                }).then(function () {
                    submitButton.removeAttribute("data-alita-indicator");
                    submitButton.disabled = false;
                });
            } else {
                Swal.fire({
                    text: "Sorry, looks like there are some errors detected, please try again.",
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    customClass: {confirmButton: "btn btn-primary"}
                });
            }
        });
    }

    return {
        init: init
    };
})();

AlitaUtil.onDOMContentLoaded((function () {
    AlitaSigninGeneral.init()
}));