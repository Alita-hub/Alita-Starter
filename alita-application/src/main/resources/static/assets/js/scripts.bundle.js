var AlitaComponents = {
  init: function () {
    AlitaApp.init(),
      AlitaDrawer.init(),
      AlitaMenu.init(),
      AlitaScroll.init(),
      AlitaSticky.init(),
      AlitaSwapper.init(),
      AlitaToggle.init(),
      AlitaScrolltop.init(),
      AlitaDialer.init(),
      AlitaImageInput.init(),
      AlitaPasswordMeter.init();
  },
};

//网页加载后进行初始化，并导出模块
"loading" === document.readyState
  ? document.addEventListener("DOMContentLoaded", function () {
      AlitaComponents.init();
    })
  : AlitaComponents.init(),
  window.addEventListener("load", function () {
    AlitaApp.hidePageLoading();
  }),
  "undefined" != typeof module &&
    void 0 !== module.exports &&
    (window.AlitaComponents = module.exports = AlitaComponents);


var AlitaApp = (function () {
  var e = !1,
    t = !1,
    n = function (e, t) {
      if ("1" !== e.getAttribute("data-alita-initialized")) {
        var n = {};
        e.hasAttribute("data-bs-delay-hide") &&
          (n.hide = e.getAttribute("data-bs-delay-hide")),
          e.hasAttribute("data-bs-delay-show") &&
            (n.show = e.getAttribute("data-bs-delay-show")),
          n && (t.delay = n),
          e.hasAttribute("data-bs-dismiss") &&
            "click" == e.getAttribute("data-bs-dismiss") &&
            (t.dismiss = "click");
        var i = new bootstrap.Tooltip(e, t);
        return (
          t.dismiss &&
            "click" === t.dismiss &&
            e.addEventListener("click", function (e) {
              i.hide();
            }),
          e.setAttribute("data-alita-initialized", "1"),
          i
        );
      }
    },
    i = function (e, t) {
      if ("1" !== e.getAttribute("data-alita-initialized")) {
        var n = {};
        e.hasAttribute("data-bs-delay-hide") &&
          (n.hide = e.getAttribute("data-bs-delay-hide")),
          e.hasAttribute("data-bs-delay-show") &&
            (n.show = e.getAttribute("data-bs-delay-show")),
          n && (t.delay = n),
          "true" == e.getAttribute("data-bs-dismiss") && (t.dismiss = !0),
          !0 === t.dismiss &&
            (t.template =
              '<div class="popover" role="tooltip"><div class="popover-arrow"></div><span class="popover-dismiss btn btn-icon"></span><h3 class="popover-header"></h3><div class="popover-body"></div></div>');
        var i = new bootstrap.Popover(e, t);
        if (!0 === t.dismiss) {
          var r = function (e) {
            i.hide();
          };
          e.addEventListener("shown.bs.popover", function () {
            document
              .getElementById(e.getAttribute("aria-describedby"))
              .addEventListener("click", r);
          }),
            e.addEventListener("hide.bs.popover", function () {
              document
                .getElementById(e.getAttribute("aria-describedby"))
                .removeEventListener("click", r);
            });
        }
        return e.setAttribute("data-alita-initialized", "1"), i;
      }
    },
    r = function () {
      "undefined" != typeof countUp &&
        [].slice
          .call(
            document.querySelectorAll('[data-alita-countup="true"]:not(.counted)')
          )
          .map(function (e) {
            if (AlitaUtil.isInViewport(e) && AlitaUtil.visible(e)) {
              if ("1" === e.getAttribute("data-alita-initialized")) return;
              var t = {},
                n = e.getAttribute("data-alita-countup-value");
              (n = parseFloat(n.replace(/,/g, ""))),
                e.hasAttribute("data-alita-countup-start-val") &&
                  (t.startVal = parseFloat(
                    e.getAttribute("data-alita-countup-start-val")
                  )),
                e.hasAttribute("data-alita-countup-duration") &&
                  (t.duration = parseInt(
                    e.getAttribute("data-alita-countup-duration")
                  )),
                e.hasAttribute("data-alita-countup-decimal-places") &&
                  (t.decimalPlaces = parseInt(
                    e.getAttribute("data-alita-countup-decimal-places")
                  )),
                e.hasAttribute("data-alita-countup-prefix") &&
                  (t.prefix = e.getAttribute("data-alita-countup-prefix")),
                e.hasAttribute("data-alita-countup-separator") &&
                  (t.separator = e.getAttribute("data-alita-countup-separator")),
                e.hasAttribute("data-alita-countup-suffix") &&
                  (t.suffix = e.getAttribute("data-alita-countup-suffix")),
                new countUp.CountUp(e, n, t).start(),
                e.classList.add("counted"),
                e.setAttribute("data-alita-initialized", "1");
            }
          });
    },
    o = function (e) {
      if (!e) return;
      const t = {};
      e.getAttributeNames().forEach(function (n) {
        if (/^data-tns-.*/g.test(n)) {
          let r = n
            .replace("data-tns-", "")
            .toLowerCase()
            .replace(/(?:[\s-])\w/g, function (e) {
              return e.replace("-", "").toUpperCase();
            });
          if ("data-tns-responsive" === n) {
            const i = e
              .getAttribute(n)
              .replace(/(\w+:)|(\w+ :)/g, function (e) {
                return '"' + e.substring(0, e.length - 1) + '":';
              });
            try {
              t[r] = JSON.parse(i);
            } catch (e) {}
          } else
            t[r] = "true" === (i = e.getAttribute(n)) || ("false" !== i && i);
        }
        var i;
      });
      const n = Object.assign(
        {},
        {
          container: e,
          slideBy: "page",
          autoplay: !0,
          center: !0,
          autoplayButtonOutput: !1,
        },
        t
      );
      return (
        e.closest(".tns") &&
          AlitaUtil.addClass(e.closest(".tns"), "tns-initiazlied"),
        tns(n)
      );
    };
  return {
    init: function () {
      var a;
      !(function () {
        if ("undefined" == typeof lozad) return;
        lozad().observe();
      })(),
        !0 !== e &&
          "undefined" != typeof SmoothScroll &&
          new SmoothScroll('a[data-alita-scroll-toggle][href*="#"]', {
            speed: 1e3,
            speedAsDuration: !0,
            offset: function (e, t) {
              return e.hasAttribute("data-alita-scroll-offset")
                ? AlitaUtil.getResponsiveValue(
                    e.getAttribute("data-alita-scroll-offset")
                  )
                : 0;
            },
          }),
        AlitaUtil.on(
          document.body,
          '[data-alita-card-action="remove"]',
          "click",
          function (e) {
            e.preventDefault();
            const t = this.closest(".card");
            if (!t) return;
            const n = this.getAttribute("data-alita-card-confirm-message");
            "true" === this.getAttribute("data-alita-card-confirm")
              ? Swal.fire({
                  text: n || "Are you sure to remove ?",
                  icon: "warning",
                  buttonsStyling: !1,
                  confirmButtonText: "Confirm",
                  denyButtonText: "Cancel",
                  customClass: {
                    confirmButton: "btn btn-primary",
                    denyButton: "btn btn-danger",
                  },
                }).then(function (e) {
                  e.isConfirmed && t.remove();
                })
              : t.remove();
          }
        ),
        (a = Array.prototype.slice.call(
          document.querySelectorAll("[data-bs-stacked-modal]")
        )) &&
          a.length > 0 &&
          a.forEach((e) => {
            "1" !== e.getAttribute("data-alita-initialized") &&
              (e.setAttribute("data-alita-initialized", "1"),
              e.addEventListener("click", function (e) {
                e.preventDefault();
                const t = document.querySelector(
                  this.getAttribute("data-bs-stacked-modal")
                );
                t && new bootstrap.Modal(t, { backdrop: !1 }).show();
              }));
          }),
        !0 !== e &&
          AlitaUtil.on(
            document.body,
            '[data-alita-check="true"]',
            "change",
            function (e) {
              var t = this,
                n = document.querySelectorAll(
                  t.getAttribute("data-alita-check-target")
                );
              AlitaUtil.each(n, function (e) {
                "checkbox" == e.type
                  ? (e.checked = t.checked)
                  : e.classList.toggle("active");
              });
            }
          ),
        !0 !== e &&
          AlitaUtil.on(
            document.body,
            '.collapsible[data-bs-toggle="collapse"]',
            "click",
            function (e) {
              if (
                (this.classList.contains("collapsed")
                  ? (this.classList.remove("active"), this.blur())
                  : this.classList.add("active"),
                this.hasAttribute("data-alita-toggle-text"))
              ) {
                var t = this.getAttribute("data-alita-toggle-text"),
                  n =
                    (n = this.querySelector(
                      '[data-alita-toggle-text-target="true"]'
                    )) || this;
                this.setAttribute("data-alita-toggle-text", n.innerText),
                  (n.innerText = t);
              }
            }
          ),
        !0 !== e &&
          AlitaUtil.on(
            document.body,
            '[data-alita-rotate="true"]',
            "click",
            function (e) {
              this.classList.contains("active")
                ? (this.classList.remove("active"), this.blur())
                : this.classList.add("active");
            }
          ),
        [].slice
          .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
          .map(function (e) {
            n(e, {});
          }),
        [].slice
          .call(document.querySelectorAll('[data-bs-toggle="popover"]'))
          .map(function (e) {
            i(e, {});
          }),
        [].slice.call(document.querySelectorAll(".toast")).map(function (e) {
          if ("1" !== e.getAttribute("data-alita-initialized"))
            return (
              e.setAttribute("data-alita-initialized", "1"),
              new bootstrap.Toast(e, {})
            );
        }),
        (function () {
          if ("undefined" != typeof jQuery && void 0 !== $.fn.daterangepicker) {
            var e = [].slice.call(
                document.querySelectorAll('[data-alita-daterangepicker="true"]')
              ),
              t = moment().subtract(29, "days"),
              n = moment();
            e.map(function (e) {
              if ("1" !== e.getAttribute("data-alita-initialized")) {
                var i = e.querySelector("div"),
                  r = e.hasAttribute("data-alita-daterangepicker-opens")
                    ? e.getAttribute("data-alita-daterangepicker-opens")
                    : "left",
                  o = function (e, t) {
                    var n = moment();
                    i &&
                      (n.isSame(e, "day") && n.isSame(t, "day")
                        ? (i.innerHTML = e.format("D MMM YYYY"))
                        : (i.innerHTML =
                            e.format("D MMM YYYY") +
                            " - " +
                            t.format("D MMM YYYY")));
                  };
                "today" === e.getAttribute("data-alita-daterangepicker-range") &&
                  ((t = moment()), (n = moment())),
                  $(e).daterangepicker(
                    {
                      startDate: t,
                      endDate: n,
                      opens: r,
                      ranges: {
                        Today: [moment(), moment()],
                        Yesterday: [
                          moment().subtract(1, "days"),
                          moment().subtract(1, "days"),
                        ],
                        "Last 7 Days": [moment().subtract(6, "days"), moment()],
                        "Last 30 Days": [
                          moment().subtract(29, "days"),
                          moment(),
                        ],
                        "This Month": [
                          moment().startOf("month"),
                          moment().endOf("month"),
                        ],
                        "Last Month": [
                          moment().subtract(1, "month").startOf("month"),
                          moment().subtract(1, "month").endOf("month"),
                        ],
                      },
                    },
                    o
                  ),
                  o(t, n),
                  e.setAttribute("data-alita-initialized", "1");
              }
            });
          }
        })(),
        [].slice
          .call(document.querySelectorAll('[data-alita-buttons="true"]'))
          .map(function (e) {
            if ("1" !== e.getAttribute("data-alita-initialized")) {
              var t = e.hasAttribute("data-alita-buttons-target")
                  ? e.getAttribute("data-alita-buttons-target")
                  : ".btn",
                n = [].slice.call(e.querySelectorAll(t));
              AlitaUtil.on(e, t, "click", function (e) {
                n.map(function (e) {
                  e.classList.remove("active");
                }),
                  this.classList.add("active");
              }),
                e.setAttribute("data-alita-initialized", "1");
            }
          }),
        "undefined" != typeof jQuery &&
          void 0 !== $.fn.select2 &&
          [].slice
            .call(
              document.querySelectorAll(
                '[data-control="select2"], [data-alita-select2="true"]'
              )
            )
            .map(function (e) {
              if ("1" !== e.getAttribute("data-alita-initialized")) {
                var t = { dir: document.body.getAttribute("direction") };
                if (
                  ("true" == e.getAttribute("data-hide-search") &&
                    (t.minimumResultsForSearch = 1 / 0),
                  $(e).select2(t),
                  e.hasAttribute("data-dropdown-parent") &&
                    e.hasAttribute("multiple"))
                ) {
                  var n = document.querySelector(
                    e.getAttribute("data-dropdown-parent")
                  );
                  if (n && n.hasAttribute("data-alita-menu")) {
                    var i = AlitaMenu.getInstance(n);
                    i || (i = new AlitaMenu(n)),
                      i &&
                        ($(e).on("select2:unselect", function (t) {
                          e.setAttribute("data-multiple-unselect", "1");
                        }),
                        i.on("alita.menu.dropdown.hide", function (t) {
                          if ("1" === e.getAttribute("data-multiple-unselect"))
                            return (
                              e.removeAttribute("data-multiple-unselect"), !1
                            );
                        }));
                  }
                }
                e.setAttribute("data-alita-initialized", "1");
              }
            }),
        r(),
        "undefined" != typeof countUp &&
          (!1 === t && (r(), window.addEventListener("scroll", r)),
          [].slice
            .call(
              document.querySelectorAll(
                '[data-alita-countup-tabs="true"][data-bs-toggle="tab"]'
              )
            )
            .map(function (e) {
              "1" !== e.getAttribute("data-alita-initialized") &&
                (e.addEventListener("shown.bs.tab", r),
                e.setAttribute("data-alita-initialized", "1"));
            }),
          (t = !0)),
        "undefined" != typeof autosize &&
          [].slice
            .call(document.querySelectorAll('[data-alita-autosize="true"]'))
            .map(function (e) {
              "1" !== e.getAttribute("data-alita-initialized") &&
                (autosize(e), e.setAttribute("data-alita-initialized", "1"));
            }),
        (function () {
          if ("undefined" == typeof tns) return;
          const e = Array.prototype.slice.call(
            document.querySelectorAll('[data-tns="true"]'),
            0
          );
          (e || 0 !== e.length) &&
            e.forEach(function (e) {
              "1" !== e.getAttribute("data-alita-initialized") &&
                (o(e),
                AlitaUtil.data(e).set("tns", tns),
                e.setAttribute("data-alita-initialized", "1"));
            });
        })(),
        (e = !0);
    },
    initTinySlider: function (e) {
      o(e);
    },
    showPageLoading: function () {
      document.body.classList.add("page-loading"),
        document.body.setAttribute("data-alita-app-page-loading", "on");
    },
    hidePageLoading: function () {
      document.body.classList.remove("page-loading"),
        document.body.removeAttribute("data-alita-app-page-loading");
    },
    createBootstrapPopover: function (e, t) {
      return i(e, t);
    },
    createBootstrapTooltip: function (e, t) {
      return n(e, t);
    },
  };
})();
"undefined" != typeof module &&
  void 0 !== module.exports &&
  (module.exports = AlitaApp);
var AlitaBlockUI = function (e, t) {
  var n = this;
  if (null != e) {
    var i = {
        zIndex: !1,
        overlayClass: "",
        overflow: "hidden",
        message: '<span class="spinner-border text-primary"></span>',
      },
      r = function () {
        (n.options = AlitaUtil.deepExtend({}, i, t)),
          (n.element = e),
          (n.overlayElement = null),
          (n.blocked = !1),
          (n.positionChanged = !1),
          (n.overflowChanged = !1),
          AlitaUtil.data(n.element).set("blockui", n);
      };
    AlitaUtil.data(e).has("blockui") ? (n = AlitaUtil.data(e).get("blockui")) : r(),
      (n.block = function () {
        !(function () {
          if (!1 !== AlitaEventHandler.trigger(n.element, "alita.blockui.block", n)) {
            var e = "BODY" === n.element.tagName,
              t = AlitaUtil.css(n.element, "position"),
              i = AlitaUtil.css(n.element, "overflow"),
              r = e ? 1e4 : 1;
            n.options.zIndex > 0
              ? (r = n.options.zIndex)
              : "auto" != AlitaUtil.css(n.element, "z-index") &&
                (r = AlitaUtil.css(n.element, "z-index")),
              n.element.classList.add("blockui"),
              ("absolute" !== t && "relative" !== t && "fixed" !== t) ||
                (AlitaUtil.css(n.element, "position", "relative"),
                (n.positionChanged = !0)),
              "hidden" === n.options.overflow &&
                "visible" === i &&
                (AlitaUtil.css(n.element, "overflow", "hidden"),
                (n.overflowChanged = !0)),
              (n.overlayElement = document.createElement("DIV")),
              n.overlayElement.setAttribute(
                "class",
                "blockui-overlay " + n.options.overlayClass
              ),
              (n.overlayElement.innerHTML = n.options.message),
              AlitaUtil.css(n.overlayElement, "z-index", r),
              n.element.append(n.overlayElement),
              (n.blocked = !0),
              AlitaEventHandler.trigger(n.element, "alita.blockui.after.blocked", n);
          }
        })();
      }),
      (n.release = function () {
        !1 !== AlitaEventHandler.trigger(n.element, "alita.blockui.release", n) &&
          (n.element.classList.add("blockui"),
          n.positionChanged && AlitaUtil.css(n.element, "position", ""),
          n.overflowChanged && AlitaUtil.css(n.element, "overflow", ""),
          n.overlayElement && AlitaUtil.remove(n.overlayElement),
          (n.blocked = !1),
          AlitaEventHandler.trigger(n.element, "alita.blockui.released", n));
      }),
      (n.isBlocked = function () {
        return n.blocked;
      }),
      (n.destroy = function () {
        AlitaUtil.data(n.element).remove("blockui");
      }),
      (n.on = function (e, t) {
        return AlitaEventHandler.on(n.element, e, t);
      }),
      (n.one = function (e, t) {
        return AlitaEventHandler.one(n.element, e, t);
      }),
      (n.off = function (e, t) {
        return AlitaEventHandler.off(n.element, e, t);
      }),
      (n.trigger = function (e, t) {
        return AlitaEventHandler.trigger(n.element, e, t, n, t);
      });
  }
};
(AlitaBlockUI.getInstance = function (e) {
  return null !== e && AlitaUtil.data(e).has("blockui")
    ? AlitaUtil.data(e).get("blockui")
    : null;
}),
  "undefined" != typeof module &&
    void 0 !== module.exports &&
    (module.exports = AlitaBlockUI);
var AlitaCookie = {
  get: function (e) {
    var t = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return t ? decodeURIComponent(t[1]) : null;
  },
  set: function (e, t, n) {
    null == n && (n = {}),
      (n = Object.assign({}, { path: "/" }, n)).expires instanceof Date &&
        (n.expires = n.expires.toUTCString());
    var i = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    for (var r in n)
      if (!1 !== n.hasOwnProperty(r)) {
        i += "; " + r;
        var o = n[r];
        !0 !== o && (i += "=" + o);
      }
    document.cookie = i;
  },
  remove: function (e) {
    this.set(e, "", { "max-age": -1 });
  },
};
"undefined" != typeof module &&
  void 0 !== module.exports &&
  (module.exports = AlitaCookie);
var AlitaDialer = function (e, t) {
  var n = this;
  if (e) {
    var i = {
        min: null,
        max: null,
        step: 1,
        currency: !1,
        decimals: 0,
        prefix: "",
        suffix: "",
      },
      r = function () {
        (n.options = AlitaUtil.deepExtend({}, i, t)),
          (n.element = e),
          (n.incElement = n.element.querySelector(
            '[data-alita-dialer-control="increase"]'
          )),
          (n.decElement = n.element.querySelector(
            '[data-alita-dialer-control="decrease"]'
          )),
          (n.inputElement = n.element.querySelector("input[type]")),
          "true" === c("currency") && (n.options.currency = !0),
          c("decimals") && (n.options.decimals = parseInt(c("decimals"))),
          c("prefix") && (n.options.prefix = c("prefix")),
          c("suffix") && (n.options.suffix = c("suffix")),
          c("step") && (n.options.step = parseFloat(c("step"))),
          c("min") && (n.options.min = parseFloat(c("min"))),
          c("max") && (n.options.max = parseFloat(c("max"))),
          (n.value = parseFloat(n.inputElement.value.replace(/[^\d.]/g, ""))),
          s(),
          o(),
          AlitaUtil.data(n.element).set("dialer", n);
      },
      o = function () {
        AlitaUtil.addEvent(n.incElement, "click", function (e) {
          e.preventDefault(), a();
        }),
          AlitaUtil.addEvent(n.decElement, "click", function (e) {
            e.preventDefault(), l();
          }),
          AlitaUtil.addEvent(n.inputElement, "input", function (e) {
            e.preventDefault(), s();
          });
      },
      a = function () {
        return (
          AlitaEventHandler.trigger(n.element, "alita.dialer.increase", n),
          (n.inputElement.value = n.value + n.options.step),
          s(),
          AlitaEventHandler.trigger(n.element, "alita.dialer.increased", n),
          n
        );
      },
      l = function () {
        return (
          AlitaEventHandler.trigger(n.element, "alita.dialer.decrease", n),
          (n.inputElement.value = n.value - n.options.step),
          s(),
          AlitaEventHandler.trigger(n.element, "alita.dialer.decreased", n),
          n
        );
      },
      s = function (e) {
        AlitaEventHandler.trigger(n.element, "alita.dialer.change", n),
          (n.value = void 0 !== e ? e : u(n.inputElement.value)),
          null !== n.options.min &&
            n.value < n.options.min &&
            (n.value = n.options.min),
          null !== n.options.max &&
            n.value > n.options.max &&
            (n.value = n.options.max),
          (n.inputElement.value = d(n.value)),
          n.inputElement.dispatchEvent(new Event("change")),
          AlitaEventHandler.trigger(n.element, "alita.dialer.changed", n);
      },
      u = function (e) {
        return (
          (e = e
            .replace(/[^0-9.-]/g, "")
            .replace(/(\..*)\./g, "$1")
            .replace(/(?!^)-/g, "")
            .replace(/^0+(\d)/gm, "$1")),
          (e = parseFloat(e)),
          isNaN(e) && (e = 0),
          e
        );
      },
      d = function (e) {
        return (
          (e = parseFloat(e).toFixed(n.options.decimals)),
          n.options.currency &&
            (e = e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")),
          n.options.prefix + e + n.options.suffix
        );
      },
      c = function (e) {
        return !0 === n.element.hasAttribute("data-alita-dialer-" + e)
          ? n.element.getAttribute("data-alita-dialer-" + e)
          : null;
      };
    !0 === AlitaUtil.data(e).has("dialer")
      ? (n = AlitaUtil.data(e).get("dialer"))
      : r(),
      (n.setMinValue = function (e) {
        n.options.min = e;
      }),
      (n.setMaxValue = function (e) {
        n.options.max = e;
      }),
      (n.setValue = function (e) {
        s(e);
      }),
      (n.getValue = function () {
        return n.inputElement.value;
      }),
      (n.update = function () {
        s();
      }),
      (n.increase = function () {
        return a();
      }),
      (n.decrease = function () {
        return l();
      }),
      (n.getElement = function () {
        return n.element;
      }),
      (n.destroy = function () {
        AlitaUtil.data(n.element).remove("dialer");
      }),
      (n.on = function (e, t) {
        return AlitaEventHandler.on(n.element, e, t);
      }),
      (n.one = function (e, t) {
        return AlitaEventHandler.one(n.element, e, t);
      }),
      (n.off = function (e, t) {
        return AlitaEventHandler.off(n.element, e, t);
      }),
      (n.trigger = function (e, t) {
        return AlitaEventHandler.trigger(n.element, e, t, n, t);
      });
  }
};
(AlitaDialer.getInstance = function (e) {
  return null !== e && AlitaUtil.data(e).has("dialer")
    ? AlitaUtil.data(e).get("dialer")
    : null;
}),
  (AlitaDialer.createInstances = function (e = '[data-alita-dialer="true"]') {
    var t = document.querySelectorAll(e);
    if (t && t.length > 0)
      for (var n = 0, i = t.length; n < i; n++) new AlitaDialer(t[n]);
  }),
  (AlitaDialer.init = function () {
    AlitaDialer.createInstances();
  }),
  "undefined" != typeof module &&
    void 0 !== module.exports &&
    (module.exports = AlitaDialer);
var AlitaDrawerHandlersInitialized = !1,
  AlitaDrawer = function (e, t) {
    var n = this;
    if (null != e) {
      var i = {
          overlay: !0,
          direction: "end",
          baseClass: "drawer",
          overlayClass: "drawer-overlay",
        },
        r = function () {
          (n.options = AlitaUtil.deepExtend({}, i, t)),
            (n.uid = AlitaUtil.getUniqueId("drawer")),
            (n.element = e),
            (n.overlayElement = null),
            (n.name = n.element.getAttribute("data-alita-drawer-name")),
            (n.shown = !1),
            n.lastWidth,
            n.lastHeight,
            (n.toggleElement = null),
            n.element.setAttribute("data-alita-drawer", "true"),
            o(),
            u(),
            AlitaUtil.data(n.element).set("drawer", n);
        },
        o = function () {
          var e = m("toggle"),
            t = m("close");
          null !== e &&
            e.length > 0 &&
            AlitaUtil.on(document.body, e, "click", function (e) {
              e.preventDefault(), (n.toggleElement = this), a();
            }),
            null !== t &&
              t.length > 0 &&
              AlitaUtil.on(document.body, t, "click", function (e) {
                e.preventDefault(), (n.closeElement = this), l();
              });
        },
        a = function () {
          !1 !== AlitaEventHandler.trigger(n.element, "alita.drawer.toggle", n) &&
            (!0 === n.shown ? l() : s(),
            AlitaEventHandler.trigger(n.element, "alita.drawer.toggled", n));
        },
        l = function () {
          !1 !== AlitaEventHandler.trigger(n.element, "alita.drawer.hide", n) &&
            ((n.shown = !1),
            c(),
            document.body.removeAttribute("data-alita-drawer-" + n.name, "on"),
            document.body.removeAttribute("data-alita-drawer"),
            AlitaUtil.removeClass(n.element, n.options.baseClass + "-on"),
            null !== n.toggleElement &&
              AlitaUtil.removeClass(n.toggleElement, "active"),
            AlitaEventHandler.trigger(n.element, "alita.drawer.after.hidden", n));
        },
        s = function () {
          !1 !== AlitaEventHandler.trigger(n.element, "alita.drawer.show", n) &&
            ((n.shown = !0),
            d(),
            document.body.setAttribute("data-alita-drawer-" + n.name, "on"),
            document.body.setAttribute("data-alita-drawer", "on"),
            AlitaUtil.addClass(n.element, n.options.baseClass + "-on"),
            null !== n.toggleElement &&
              AlitaUtil.addClass(n.toggleElement, "active"),
            AlitaEventHandler.trigger(n.element, "alita.drawer.shown", n));
        },
        u = function () {
          var e = f(),
            t = p(),
            i = m("direction"),
            r = m("top"),
            o = m("bottom"),
            a = m("start"),
            s = m("end");
          !0 === AlitaUtil.hasClass(n.element, n.options.baseClass + "-on") &&
          "on" ===
            String(document.body.getAttribute("data-alita-drawer-" + n.name + "-"))
            ? (n.shown = !0)
            : (n.shown = !1),
            !0 === m("activate")
              ? (AlitaUtil.addClass(n.element, n.options.baseClass),
                AlitaUtil.addClass(n.element, n.options.baseClass + "-" + i),
                e && (AlitaUtil.css(n.element, "width", e, !0), (n.lastWidth = e)),
                t &&
                  (AlitaUtil.css(n.element, "height", t, !0), (n.lastHeight = t)),
                r && AlitaUtil.css(n.element, "top", r),
                o && AlitaUtil.css(n.element, "bottom", o),
                a &&
                  (AlitaUtil.isRTL()
                    ? AlitaUtil.css(n.element, "right", a)
                    : AlitaUtil.css(n.element, "left", a)),
                s &&
                  (AlitaUtil.isRTL()
                    ? AlitaUtil.css(n.element, "left", s)
                    : AlitaUtil.css(n.element, "right", s)))
              : (AlitaUtil.removeClass(n.element, n.options.baseClass),
                AlitaUtil.removeClass(n.element, n.options.baseClass + "-" + i),
                AlitaUtil.css(n.element, "width", ""),
                AlitaUtil.css(n.element, "height", ""),
                r && AlitaUtil.css(n.element, "top", ""),
                o && AlitaUtil.css(n.element, "bottom", ""),
                a &&
                  (AlitaUtil.isRTL()
                    ? AlitaUtil.css(n.element, "right", "")
                    : AlitaUtil.css(n.element, "left", "")),
                s &&
                  (AlitaUtil.isRTL()
                    ? AlitaUtil.css(n.element, "left", "")
                    : AlitaUtil.css(n.element, "right", "")),
                l());
        },
        d = function () {
          !0 === m("overlay") &&
            ((n.overlayElement = document.createElement("DIV")),
            AlitaUtil.css(
              n.overlayElement,
              "z-index",
              AlitaUtil.css(n.element, "z-index") - 1
            ),
            document.body.append(n.overlayElement),
            AlitaUtil.addClass(n.overlayElement, m("overlay-class")),
            AlitaUtil.addEvent(n.overlayElement, "click", function (e) {
              e.preventDefault(), !0 !== m("permanent") && l();
            }));
        },
        c = function () {
          null !== n.overlayElement && AlitaUtil.remove(n.overlayElement);
        },
        m = function (e) {
          if (!0 === n.element.hasAttribute("data-alita-drawer-" + e)) {
            var t = n.element.getAttribute("data-alita-drawer-" + e),
              i = AlitaUtil.getResponsiveValue(t);
            return (
              null !== i && "true" === String(i)
                ? (i = !0)
                : null !== i && "false" === String(i) && (i = !1),
              i
            );
          }
          var r = AlitaUtil.snakeToCamel(e);
          return n.options[r] ? AlitaUtil.getResponsiveValue(n.options[r]) : null;
        },
        f = function () {
          var e = m("width");
          return "auto" === e && (e = AlitaUtil.css(n.element, "width")), e;
        },
        p = function () {
          var e = m("height");
          return "auto" === e && (e = AlitaUtil.css(n.element, "height")), e;
        };
      AlitaUtil.data(e).has("drawer") ? (n = AlitaUtil.data(e).get("drawer")) : r(),
        (n.toggle = function () {
          return a();
        }),
        (n.show = function () {
          return s();
        }),
        (n.hide = function () {
          return l();
        }),
        (n.isShown = function () {
          return n.shown;
        }),
        (n.update = function () {
          u();
        }),
        (n.goElement = function () {
          return n.element;
        }),
        (n.destroy = function () {
          AlitaUtil.data(n.element).remove("drawer");
        }),
        (n.on = function (e, t) {
          return AlitaEventHandler.on(n.element, e, t);
        }),
        (n.one = function (e, t) {
          return AlitaEventHandler.one(n.element, e, t);
        }),
        (n.off = function (e, t) {
          return AlitaEventHandler.off(n.element, e, t);
        }),
        (n.trigger = function (e, t) {
          return AlitaEventHandler.trigger(n.element, e, t, n, t);
        });
    }
  };
(AlitaDrawer.getInstance = function (e) {
  return null !== e && AlitaUtil.data(e).has("drawer")
    ? AlitaUtil.data(e).get("drawer")
    : null;
}),
  (AlitaDrawer.hideAll = function (e = null, t = '[data-alita-drawer="true"]') {
    var n = document.querySelectorAll(t);
    if (n && n.length > 0)
      for (var i = 0, r = n.length; i < r; i++) {
        var o = n[i],
          a = AlitaDrawer.getInstance(o);
        a && (e ? o !== e && a.hide() : a.hide());
      }
  }),
  (AlitaDrawer.updateAll = function (e = '[data-alita-drawer="true"]') {
    var t = document.querySelectorAll(e);
    if (t && t.length > 0)
      for (var n = 0, i = t.length; n < i; n++) {
        var r = AlitaDrawer.getInstance(t[n]);
        r && r.update();
      }
  }),
  (AlitaDrawer.createInstances = function (e = '[data-alita-drawer="true"]') {
    var t = document.querySelectorAll(e);
    if (t && t.length > 0)
      for (var n = 0, i = t.length; n < i; n++) new AlitaDrawer(t[n]);
  }),
  (AlitaDrawer.handleShow = function () {
    AlitaUtil.on(
      document.body,
      '[data-alita-drawer-show="true"][data-alita-drawer-target]',
      "click",
      function (e) {
        e.preventDefault();
        var t = document.querySelector(
          this.getAttribute("data-alita-drawer-target")
        );
        t && AlitaDrawer.getInstance(t).show();
      }
    );
  }),
  (AlitaDrawer.handleEscapeKey = function () {
    document.addEventListener("keydown", (e) => {
      if ("Escape" === e.key) {
        if (!(e.ctrlKey || e.altKey || e.shiftKey)) {
          var t,
            n = document.querySelectorAll(
              '.drawer-on[data-alita-drawer="true"]:not([data-alita-drawer-escape="false"])'
            );
          if (n && n.length > 0)
            for (var i = 0, r = n.length; i < r; i++)
              (t = AlitaDrawer.getInstance(n[i])).isShown() && t.hide();
        }
      }
    });
  }),
  (AlitaDrawer.handleDismiss = function () {
    AlitaUtil.on(
      document.body,
      '[data-alita-drawer-dismiss="true"]',
      "click",
      function (e) {
        var t = this.closest('[data-alita-drawer="true"]');
        if (t) {
          var n = AlitaDrawer.getInstance(t);
          n.isShown() && n.hide();
        }
      }
    );
  }),
  (AlitaDrawer.handleResize = function () {
    window.addEventListener("resize", function () {
      AlitaUtil.throttle(
        undefined,
        function () {
          var e = document.querySelectorAll('[data-alita-drawer="true"]');
          if (e && e.length > 0)
            for (var t = 0, n = e.length; t < n; t++) {
              var i = AlitaDrawer.getInstance(e[t]);
              i && i.update();
            }
        },
        200
      );
    });
  }),
  (AlitaDrawer.init = function () {
    AlitaDrawer.createInstances(),
      !1 === AlitaDrawerHandlersInitialized &&
        (AlitaDrawer.handleResize(),
        AlitaDrawer.handleShow(),
        AlitaDrawer.handleDismiss(),
        AlitaDrawer.handleEscapeKey(),
        (AlitaDrawerHandlersInitialized = !0));
  }),
  "undefined" != typeof module &&
    void 0 !== module.exports &&
    (module.exports = AlitaDrawer);
var AlitaEventHandler = (function () {
  var e = {},
    t = function (t, n, i, r) {
      var o = AlitaUtil.getUniqueId("event"),
        a = AlitaUtil.data(t).get(n);
      return (
        a || (a = []),
        a.push(o),
        AlitaUtil.data(t).set(n, a),
        e[n] || (e[n] = {}),
        (e[n][o] = { name: n, callback: i, one: r, fired: !1 }),
        o
      );
    };
  return {
    trigger: function (t, n, i) {
      return (function (t, n, i) {
        var r,
          o = !0;
        if (!0 === AlitaUtil.data(t).has(n))
          for (var a, l = AlitaUtil.data(t).get(n), s = 0; s < l.length; s++)
            if (((a = l[s]), e[n] && e[n][a])) {
              var u = e[n][a];
              u.name === n &&
                (1 == u.one
                  ? 0 == u.fired &&
                    ((e[n][a].fired = !0), (r = u.callback.call(this, i)))
                  : (r = u.callback.call(this, i)),
                !1 === r && (o = !1));
            }
        return o;
      })(t, n, i);
    },
    on: function (e, n, i) {
      return t(e, n, i);
    },
    one: function (e, n, i) {
      return t(e, n, i, !0);
    },
    off: function (t, n, i) {
      return (function (t, n, i) {
        var r = AlitaUtil.data(t).get(n),
          o = r && r.indexOf(i);
        -1 !== o && (r.splice(o, 1), AlitaUtil.data(t).set(n, r)),
          e[n] && e[n][i] && delete e[n][i];
      })(t, n, i);
    },
    debug: function () {
      for (var t in e) e.hasOwnProperty(t) && console.log(t);
    },
  };
})();
"undefined" != typeof module &&
  void 0 !== module.exports &&
  (module.exports = AlitaEventHandler);
var AlitaFeedback = function (e) {
  var t = this,
    n = { width: 100, placement: "top-center", content: "", type: "popup" },
    i = function () {
      (t.options = AlitaUtil.deepExtend({}, n, e)),
        (t.uid = AlitaUtil.getUniqueId("feedback")),
        t.element,
        (t.shown = !1),
        r(),
        AlitaUtil.data(t.element).set("feedback", t);
    },
    r = function () {
      AlitaUtil.addEvent(t.element, "click", function (e) {
        e.preventDefault(), _go();
      });
    },
    o = function () {
      (t.element = document.createElement("DIV")),
        AlitaUtil.addClass(t.element, "feedback feedback-popup"),
        AlitaUtil.setHTML(t.element, t.options.content),
        "top-center" == t.options.placement && a(),
        document.body.appendChild(t.element),
        AlitaUtil.addClass(t.element, "feedback-shown"),
        (t.shown = !0);
    },
    a = function () {
      var e = AlitaUtil.getResponsiveValue(t.options.width),
        n = AlitaUtil.css(t.element, "height");
      AlitaUtil.addClass(t.element, "feedback-top-center"),
        AlitaUtil.css(t.element, "width", e),
        AlitaUtil.css(t.element, "left", "50%"),
        AlitaUtil.css(t.element, "top", "-" + n);
    },
    l = function () {
      t.element.remove();
    };
  i(),
    (t.show = function () {
      return (function () {
        if (!1 !== AlitaEventHandler.trigger(t.element, "alita.feedback.show", t))
          return (
            "popup" === t.options.type && o(),
            AlitaEventHandler.trigger(t.element, "alita.feedback.shown", t),
            t
          );
      })();
    }),
    (t.hide = function () {
      return (function () {
        if (!1 !== AlitaEventHandler.trigger(t.element, "alita.feedback.hide", t))
          return (
            "popup" === t.options.type && l(),
            (t.shown = !1),
            AlitaEventHandler.trigger(t.element, "alita.feedback.hidden", t),
            t
          );
      })();
    }),
    (t.isShown = function () {
      return t.shown;
    }),
    (t.getElement = function () {
      return t.element;
    }),
    (t.destroy = function () {
      AlitaUtil.data(t.element).remove("feedback");
    }),
    (t.on = function (e, n) {
      return AlitaEventHandler.on(t.element, e, n);
    }),
    (t.one = function (e, n) {
      return AlitaEventHandler.one(t.element, e, n);
    }),
    (t.off = function (e, n) {
      return AlitaEventHandler.off(t.element, e, n);
    }),
    (t.trigger = function (e, n) {
      return AlitaEventHandler.trigger(t.element, e, n, t, n);
    });
};
"undefined" != typeof module &&
  void 0 !== module.exports &&
  (module.exports = AlitaFeedback);
var AlitaImageInput = function (e, t) {
  var n = this;
  if (null != e) {
    var i = {},
      r = function () {
        (n.options = AlitaUtil.deepExtend({}, i, t)),
          (n.uid = AlitaUtil.getUniqueId("image-input")),
          (n.element = e),
          (n.inputElement = AlitaUtil.find(e, 'input[type="file"]')),
          (n.wrapperElement = AlitaUtil.find(e, ".image-input-wrapper")),
          (n.cancelElement = AlitaUtil.find(
            e,
            '[data-alita-image-input-action="cancel"]'
          )),
          (n.removeElement = AlitaUtil.find(
            e,
            '[data-alita-image-input-action="remove"]'
          )),
          (n.hiddenElement = AlitaUtil.find(e, 'input[type="hidden"]')),
          (n.src = AlitaUtil.css(n.wrapperElement, "backgroundImage")),
          n.element.setAttribute("data-alita-image-input", "true"),
          o(),
          AlitaUtil.data(n.element).set("image-input", n);
      },
      o = function () {
        AlitaUtil.addEvent(n.inputElement, "change", a),
          AlitaUtil.addEvent(n.cancelElement, "click", l),
          AlitaUtil.addEvent(n.removeElement, "click", s);
      },
      a = function (e) {
        if (
          (e.preventDefault(),
          null !== n.inputElement &&
            n.inputElement.files &&
            n.inputElement.files[0])
        ) {
          if (
            !1 === AlitaEventHandler.trigger(n.element, "alita.imageinput.change", n)
          )
            return;
          var t = new FileReader();
          (t.onload = function (e) {
            AlitaUtil.css(
              n.wrapperElement,
              "background-image",
              "url(" + e.target.result + ")"
            );
          }),
            t.readAsDataURL(n.inputElement.files[0]),
            n.element.classList.add("image-input-changed"),
            n.element.classList.remove("image-input-empty"),
            AlitaEventHandler.trigger(n.element, "alita.imageinput.changed", n);
        }
      },
      l = function (e) {
        e.preventDefault(),
          !1 !== AlitaEventHandler.trigger(n.element, "alita.imageinput.cancel", n) &&
            (n.element.classList.remove("image-input-changed"),
            n.element.classList.remove("image-input-empty"),
            "none" === n.src
              ? (AlitaUtil.css(n.wrapperElement, "background-image", ""),
                n.element.classList.add("image-input-empty"))
              : AlitaUtil.css(n.wrapperElement, "background-image", n.src),
            (n.inputElement.value = ""),
            null !== n.hiddenElement && (n.hiddenElement.value = "0"),
            AlitaEventHandler.trigger(n.element, "alita.imageinput.canceled", n));
      },
      s = function (e) {
        e.preventDefault(),
          !1 !== AlitaEventHandler.trigger(n.element, "alita.imageinput.remove", n) &&
            (n.element.classList.remove("image-input-changed"),
            n.element.classList.add("image-input-empty"),
            AlitaUtil.css(n.wrapperElement, "background-image", "none"),
            (n.inputElement.value = ""),
            null !== n.hiddenElement && (n.hiddenElement.value = "1"),
            AlitaEventHandler.trigger(n.element, "alita.imageinput.removed", n));
      };
    !0 === AlitaUtil.data(e).has("image-input")
      ? (n = AlitaUtil.data(e).get("image-input"))
      : r(),
      (n.getInputElement = function () {
        return n.inputElement;
      }),
      (n.getElement = function () {
        return n.element;
      }),
      (n.destroy = function () {
        AlitaUtil.data(n.element).remove("image-input");
      }),
      (n.on = function (e, t) {
        return AlitaEventHandler.on(n.element, e, t);
      }),
      (n.one = function (e, t) {
        return AlitaEventHandler.one(n.element, e, t);
      }),
      (n.off = function (e, t) {
        return AlitaEventHandler.off(n.element, e, t);
      }),
      (n.trigger = function (e, t) {
        return AlitaEventHandler.trigger(n.element, e, t, n, t);
      });
  }
};
(AlitaImageInput.getInstance = function (e) {
  return null !== e && AlitaUtil.data(e).has("image-input")
    ? AlitaUtil.data(e).get("image-input")
    : null;
}),
  (AlitaImageInput.createInstances = function (e = "[data-alita-image-input]") {
    var t = document.querySelectorAll(e);
    if (t && t.length > 0)
      for (var n = 0, i = t.length; n < i; n++) new AlitaImageInput(t[n]);
  }),
  (AlitaImageInput.init = function () {
    AlitaImageInput.createInstances();
  }),
  "undefined" != typeof module &&
    void 0 !== module.exports &&
    (module.exports = AlitaImageInput);
var AlitaMenuHandlersInitialized = !1,
  AlitaMenu = function (e, t) {
    var n = this;
    if (null != e) {
      var i = {
          dropdown: { hoverTimeout: 200, zindex: 107 },
          accordion: { slideSpeed: 250, expand: !1 },
        },
        r = function () {
          (n.options = AlitaUtil.deepExtend({}, i, t)),
            (n.uid = AlitaUtil.getUniqueId("menu")),
            (n.element = e),
            n.triggerElement,
            (n.disabled = !1),
            n.element.setAttribute("data-alita-menu", "true"),
            d(),
            u(),
            AlitaUtil.data(n.element).set("menu", n);
        },
        o = function (e) {
          e || (e = n.triggerElement), !0 === m(e) ? l(e) : a(e);
        },
        a = function (e) {
          e || (e = n.triggerElement),
            !0 !== m(e) &&
              ("dropdown" === v(e) ? y(e) : "accordion" === v(e) && A(e),
              AlitaUtil.data(e).set("type", v(e)));
        },
        l = function (e) {
          e || (e = n.triggerElement),
            !1 !== m(e) &&
              ("dropdown" === v(e) ? w(e) : "accordion" === v(e) && x(e));
        },
        s = function (e) {
          if (!1 !== f(e)) {
            var t = g(e);
            AlitaUtil.data(e).has("type") &&
              AlitaUtil.data(e).get("type") !== v(e) &&
              (AlitaUtil.removeClass(e, "hover"),
              AlitaUtil.removeClass(e, "show"),
              AlitaUtil.removeClass(t, "show"));
          }
        },
        u = function () {
          var e = n.element.querySelectorAll(
            ".menu-item[data-alita-menu-trigger]"
          );
          if (e && e.length > 0)
            for (var t = 0, i = e.length; t < i; t++) s(e[t]);
        },
        d = function () {
          var e = document.querySelector(
            '[data-alita-menu-target="#' + n.element.getAttribute("id") + '"]'
          );
          null !== e
            ? (n.triggerElement = e)
            : n.element.closest("[data-alita-menu-trigger]")
            ? (n.triggerElement = n.element.closest("[data-alita-menu-trigger]"))
            : n.element.parentNode &&
              AlitaUtil.child(n.element.parentNode, "[data-alita-menu-trigger]") &&
              (n.triggerElement = AlitaUtil.child(
                n.element.parentNode,
                "[data-alita-menu-trigger]"
              )),
            n.triggerElement && AlitaUtil.data(n.triggerElement).set("menu", n);
        },
        c = function (e) {
          return n.triggerElement === e;
        },
        m = function (e) {
          var t = g(e);
          return (
            null !== t &&
            ("dropdown" === v(e)
              ? !0 === AlitaUtil.hasClass(t, "show") &&
                !0 === t.hasAttribute("data-popper-placement")
              : AlitaUtil.hasClass(e, "show"))
          );
        },
        f = function (e) {
          return (
            AlitaUtil.hasClass(e, "menu-item") &&
            e.hasAttribute("data-alita-menu-trigger")
          );
        },
        p = function (e) {
          return AlitaUtil.child(e, ".menu-link");
        },
        g = function (e) {
          return !0 === c(e)
            ? n.element
            : !0 === e.classList.contains("menu-sub")
            ? e
            : AlitaUtil.data(e).has("sub")
            ? AlitaUtil.data(e).get("sub")
            : AlitaUtil.child(e, ".menu-sub");
        },
        v = function (e) {
          var t = g(e);
          return t && parseInt(AlitaUtil.css(t, "z-index")) > 0
            ? "dropdown"
            : "accordion";
        },
        T = function (e) {
          var t, n;
          return c(e) || e.hasAttribute("data-alita-menu-trigger")
            ? e
            : AlitaUtil.data(e).has("item")
            ? AlitaUtil.data(e).get("item")
            : (t = e.closest(".menu-item"))
            ? t
            : (n = e.closest(".menu-sub")) && !0 === AlitaUtil.data(n).has("item")
            ? AlitaUtil.data(n).get("item")
            : void 0;
        },
        h = function (e) {
          var t,
            n = e.closest(".menu-sub");
          return n && AlitaUtil.data(n).has("item")
            ? AlitaUtil.data(n).get("item")
            : n && (t = n.closest(".menu-item[data-alita-menu-trigger]"))
            ? t
            : null;
        },
        K = function (e) {
          var t,
            i = [],
            r = 0;
          do {
            (t = h(e)) && (i.push(t), (e = t)), r++;
          } while (null !== t && r < 20);
          return n.triggerElement && i.unshift(n.triggerElement), i;
        },
        b = function (e) {
          var t = e;
          return (
            AlitaUtil.data(e).get("sub") && (t = AlitaUtil.data(e).get("sub")),
            (null !== t &&
              t.querySelector(".menu-item[data-alita-menu-trigger]")) ||
              null
          );
        },
        k = function (e) {
          var t,
            n = [],
            i = 0;
          do {
            (t = b(e)) && (n.push(t), (e = t)), i++;
          } while (null !== t && i < 20);
          return n;
        },
        y = function (e) {
          if (
            !1 !== AlitaEventHandler.trigger(n.element, "alita.menu.dropdown.show", e)
          ) {
            AlitaMenu.hideDropdowns(e);
            c(e) || p(e);
            var t = g(e),
              i = L(e, "width"),
              r = L(e, "height"),
              o = n.options.dropdown.zindex,
              a = AlitaUtil.getHighestZindex(e);
            null !== a && a >= o && (o = a + 1),
              o > 0 && AlitaUtil.css(t, "z-index", o),
              null !== i && AlitaUtil.css(t, "width", i),
              null !== r && AlitaUtil.css(t, "height", r),
              AlitaUtil.css(t, "display", ""),
              AlitaUtil.css(t, "overflow", ""),
              U(e, t),
              AlitaUtil.addClass(e, "show"),
              AlitaUtil.addClass(e, "menu-dropdown"),
              AlitaUtil.addClass(t, "show"),
              !0 === L(e, "overflow")
                ? (document.body.appendChild(t),
                  AlitaUtil.data(e).set("sub", t),
                  AlitaUtil.data(t).set("item", e),
                  AlitaUtil.data(t).set("menu", n))
                : AlitaUtil.data(t).set("item", e),
              AlitaEventHandler.trigger(n.element, "alita.menu.dropdown.shown", e);
          }
        },
        w = function (e) {
          if (
            !1 !== AlitaEventHandler.trigger(n.element, "alita.menu.dropdown.hide", e)
          ) {
            var t = g(e);
            AlitaUtil.css(t, "z-index", ""),
              AlitaUtil.css(t, "width", ""),
              AlitaUtil.css(t, "height", ""),
              AlitaUtil.removeClass(e, "show"),
              AlitaUtil.removeClass(e, "menu-dropdown"),
              AlitaUtil.removeClass(t, "show"),
              !0 === L(e, "overflow") &&
                (e.classList.contains("menu-item")
                  ? e.appendChild(t)
                  : AlitaUtil.insertAfter(n.element, e),
                AlitaUtil.data(e).remove("sub"),
                AlitaUtil.data(t).remove("item"),
                AlitaUtil.data(t).remove("menu")),
              E(e),
              AlitaEventHandler.trigger(n.element, "alita.menu.dropdown.hidden", e);
          }
        },
        U = function (e, t) {
          var n,
            i = L(e, "attach");
          n = i
            ? "parent" === i
              ? e.parentNode
              : document.querySelector(i)
            : e;
          var r = Popper.createPopper(n, t, S(e));
          AlitaUtil.data(e).set("popper", r);
        },
        E = function (e) {
          !0 === AlitaUtil.data(e).has("popper") &&
            (AlitaUtil.data(e).get("popper").destroy(),
            AlitaUtil.data(e).remove("popper"));
        },
        S = function (e) {
          var t = L(e, "placement");
          t || (t = "right");
          var n = L(e, "offset"),
            i = n ? n.split(",") : [];
          return (
            2 === i.length &&
              ((i[0] = parseInt(i[0])), (i[1] = parseInt(i[1]))),
            {
              placement: t,
              strategy: !0 === L(e, "overflow") ? "absolute" : "fixed",
              modifiers: [
                { name: "offset", options: { offset: i } },
                {
                  name: "preventOverflow",
                  options: { altAxis: !1 !== L(e, "flip") },
                },
                { name: "flip", options: { flipVariations: !1 } },
              ],
            }
          );
        },
        A = function (e) {
          if (
            !1 !==
            AlitaEventHandler.trigger(n.element, "alita.menu.accordion.show", e)
          ) {
            var t = g(e),
              i = n.options.accordion.expand;
            !0 === L(e, "expand")
              ? (i = !0)
              : !1 === L(e, "expand")
              ? (i = !1)
              : !0 === L(n.element, "expand") && (i = !0),
              !1 === i && I(e),
              !0 === AlitaUtil.data(e).has("popper") && w(e),
              AlitaUtil.addClass(e, "hover"),
              AlitaUtil.addClass(e, "showing"),
              AlitaUtil.slideDown(t, n.options.accordion.slideSpeed, function () {
                AlitaUtil.removeClass(e, "showing"),
                  AlitaUtil.addClass(e, "show"),
                  AlitaUtil.addClass(t, "show"),
                  AlitaEventHandler.trigger(
                    n.element,
                    "alita.menu.accordion.shown",
                    e
                  );
              });
          }
        },
        x = function (e) {
          if (
            !1 !==
            AlitaEventHandler.trigger(n.element, "alita.menu.accordion.hide", e)
          ) {
            var t = g(e);
            AlitaUtil.addClass(e, "hiding"),
              AlitaUtil.slideUp(t, n.options.accordion.slideSpeed, function () {
                AlitaUtil.removeClass(e, "hiding"),
                  AlitaUtil.removeClass(e, "show"),
                  AlitaUtil.removeClass(t, "show"),
                  AlitaUtil.removeClass(e, "hover"),
                  AlitaEventHandler.trigger(
                    n.element,
                    "alita.menu.accordion.hidden",
                    e
                  );
              });
          }
        },
        I = function (e) {
          var t,
            i = AlitaUtil.findAll(n.element, ".show[data-alita-menu-trigger]");
          if (i && i.length > 0)
            for (var r = 0, o = i.length; r < o; r++)
              (t = i[r]),
                "accordion" === v(t) &&
                  t !== e &&
                  !1 === e.contains(t) &&
                  !1 === t.contains(e) &&
                  x(t);
        },
        L = function (e, t) {
          var n,
            i = null;
          return (
            e &&
              e.hasAttribute("data-alita-menu-" + t) &&
              ((n = e.getAttribute("data-alita-menu-" + t)),
              null !== (i = AlitaUtil.getResponsiveValue(n)) &&
              "true" === String(i)
                ? (i = !0)
                : null !== i && "false" === String(i) && (i = !1)),
            i
          );
        };
      !0 === AlitaUtil.data(e).has("menu")
        ? (n = AlitaUtil.data(e).get("menu"))
        : r(),
        (n.click = function (e, t) {
          return (function (e, t) {
            if (
              (!e.hasAttribute("href") || "#" === e.getAttribute("href")) &&
              (t.preventDefault(), !0 !== n.disabled)
            ) {
              var i = T(e);
              "click" === L(i, "trigger") &&
                (!1 === L(i, "toggle") ? a(i) : o(i));
            }
          })(e, t);
        }),
        (n.link = function (e, t) {
          return (function (e, t) {
            !0 !== n.disabled &&
              !1 !==
                AlitaEventHandler.trigger(n.element, "alita.menu.link.click", e) &&
              (AlitaMenu.hideDropdowns(),
              AlitaEventHandler.trigger(n.element, "alita.menu.link.clicked", e));
          })(e);
        }),
        (n.dismiss = function (e, t) {
          return (function (e, t) {
            var n = T(e),
              i = k(n);
            if (null !== n && "dropdown" === v(n) && (l(n), i.length > 0))
              for (var r = 0, o = i.length; r < o; r++)
                null !== i[r] && "dropdown" === v(i[r]) && l(tems[r]);
          })(e);
        }),
        (n.mouseover = function (e, t) {
          return (function (e, t) {
            var i = T(e);
            !0 !== n.disabled &&
              null !== i &&
              "hover" === L(i, "trigger") &&
              ("1" === AlitaUtil.data(i).get("hover") &&
                (clearTimeout(AlitaUtil.data(i).get("timeout")),
                AlitaUtil.data(i).remove("hover"),
                AlitaUtil.data(i).remove("timeout")),
              a(i));
          })(e);
        }),
        (n.mouseout = function (e, t) {
          return (function (e, t) {
            var i = T(e);
            if (
              !0 !== n.disabled &&
              null !== i &&
              "hover" === L(i, "trigger")
            ) {
              var r = setTimeout(function () {
                "1" === AlitaUtil.data(i).get("hover") && l(i);
              }, n.options.dropdown.hoverTimeout);
              AlitaUtil.data(i).set("hover", "1"),
                AlitaUtil.data(i).set("timeout", r);
            }
          })(e);
        }),
        (n.getItemTriggerType = function (e) {
          return L(e, "trigger");
        }),
        (n.getItemSubType = function (e) {
          return v(e);
        }),
        (n.show = function (e) {
          return a(e);
        }),
        (n.hide = function (e) {
          return l(e);
        }),
        (n.toggle = function (e) {
          return o(e);
        }),
        (n.reset = function (e) {
          return s(e);
        }),
        (n.update = function () {
          return u();
        }),
        (n.getElement = function () {
          return n.element;
        }),
        (n.setActiveLink = function (e) {
          return (function (e) {
            var t = T(e);
            if (t) {
              var i = K(t),
                r = e.closest(".tab-pane"),
                o = [].slice.call(
                  n.element.querySelectorAll(".menu-link.active")
                ),
                a = [].slice.call(
                  n.element.querySelectorAll(".menu-item.here, .menu-item.show")
                );
              if (
                ("accordion" === v(t) ? A(t) : t.classList.add("here"),
                i && i.length > 0)
              )
                for (var l = 0, s = i.length; l < s; l++) {
                  var u = i[l];
                  "accordion" === v(u) ? A(u) : u.classList.add("here");
                }
              if (
                (o.map(function (e) {
                  e.classList.remove("active");
                }),
                a.map(function (e) {
                  !1 === e.contains(t) &&
                    (e.classList.remove("here"), e.classList.remove("show"));
                }),
                r && bootstrap.Tab)
              ) {
                var d = n.element.querySelector(
                    '[data-bs-target="#' + r.getAttribute("id") + '"]'
                  ),
                  c = new bootstrap.Tab(d);
                c && c.show();
              }
              e.classList.add("active");
            }
          })(e);
        }),
        (n.getLinkByAttribute = function (e, t = "href") {
          return (function (e, t = "href") {
            var i = n.element.querySelector(
              ".menu-link[" + t + '="' + e + '"]'
            );
            if (i) return i;
          })(e, t);
        }),
        (n.getItemLinkElement = function (e) {
          return p(e);
        }),
        (n.getItemToggleElement = function (e) {
          return (function (e) {
            return n.triggerElement ? n.triggerElement : p(e);
          })(e);
        }),
        (n.getItemSubElement = function (e) {
          return g(e);
        }),
        (n.getItemParentElements = function (e) {
          return K(e);
        }),
        (n.isItemSubShown = function (e) {
          return m(e);
        }),
        (n.isItemParentShown = function (e) {
          return (function (e) {
            return AlitaUtil.parents(e, ".menu-item.show").length > 0;
          })(e);
        }),
        (n.getTriggerElement = function () {
          return n.triggerElement;
        }),
        (n.isItemDropdownPermanent = function (e) {
          return (function (e) {
            return !0 === L(e, "permanent");
          })(e);
        }),
        (n.destroy = function () {
          AlitaUtil.data(n.element).remove("menu");
        }),
        (n.disable = function () {
          n.disabled = !0;
        }),
        (n.enable = function () {
          n.disabled = !1;
        }),
        (n.hideAccordions = function (e) {
          return I(e);
        }),
        (n.on = function (e, t) {
          return AlitaEventHandler.on(n.element, e, t);
        }),
        (n.one = function (e, t) {
          return AlitaEventHandler.one(n.element, e, t);
        }),
        (n.off = function (e, t) {
          return AlitaEventHandler.off(n.element, e, t);
        });
    }
  };
(AlitaMenu.getInstance = function (e) {
  var t;
  if (!e) return null;
  if (AlitaUtil.data(e).has("menu")) return AlitaUtil.data(e).get("menu");
  if ((t = e.closest(".menu")) && AlitaUtil.data(t).has("menu"))
    return AlitaUtil.data(t).get("menu");
  if (AlitaUtil.hasClass(e, "menu-link")) {
    var n = e.closest(".menu-sub");
    if (AlitaUtil.data(n).has("menu")) return AlitaUtil.data(n).get("menu");
  }
  return null;
}),
  (AlitaMenu.hideDropdowns = function (e) {
    var t = document.querySelectorAll(
      ".show.menu-dropdown[data-alita-menu-trigger]"
    );
    if (t && t.length > 0)
      for (var n = 0, i = t.length; n < i; n++) {
        var r = t[n],
          o = AlitaMenu.getInstance(r);
        o &&
          "dropdown" === o.getItemSubType(r) &&
          (e
            ? !1 === o.getItemSubElement(r).contains(e) &&
              !1 === r.contains(e) &&
              r !== e &&
              o.hide(r)
            : o.hide(r));
      }
  }),
  (AlitaMenu.updateDropdowns = function () {
    var e = document.querySelectorAll(
      ".show.menu-dropdown[data-alita-menu-trigger]"
    );
    if (e && e.length > 0)
      for (var t = 0, n = e.length; t < n; t++) {
        var i = e[t];
        AlitaUtil.data(i).has("popper") &&
          AlitaUtil.data(i).get("popper").forceUpdate();
      }
  }),
  (AlitaMenu.initHandlers = function () {
    document.addEventListener("click", function (e) {
      var t,
        n,
        i,
        r = document.querySelectorAll(
          '.show.menu-dropdown[data-alita-menu-trigger]:not([data-alita-menu-static="true"])'
        );
      if (r && r.length > 0)
        for (var o = 0, a = r.length; o < a; o++)
          if (
            ((t = r[o]),
            (i = AlitaMenu.getInstance(t)) && "dropdown" === i.getItemSubType(t))
          ) {
            if (
              (i.getElement(),
              (n = i.getItemSubElement(t)),
              t === e.target || t.contains(e.target))
            )
              continue;
            if (n === e.target || n.contains(e.target)) continue;
            i.hide(t);
          }
    }),
      AlitaUtil.on(
        document.body,
        '.menu-item[data-alita-menu-trigger] > .menu-link, [data-alita-menu-trigger]:not(.menu-item):not([data-alita-menu-trigger="auto"])',
        "click",
        function (e) {
          var t = AlitaMenu.getInstance(this);
          if (null !== t) return t.click(this, e);
        }
      ),
      AlitaUtil.on(
        document.body,
        ".menu-item:not([data-alita-menu-trigger]) > .menu-link",
        "click",
        function (e) {
          var t = AlitaMenu.getInstance(this);
          if (null !== t) return t.link(this, e);
        }
      ),
      AlitaUtil.on(
        document.body,
        '[data-alita-menu-dismiss="true"]',
        "click",
        function (e) {
          var t = AlitaMenu.getInstance(this);
          if (null !== t) return t.dismiss(this, e);
        }
      ),
      AlitaUtil.on(
        document.body,
        "[data-alita-menu-trigger], .menu-sub",
        "mouseover",
        function (e) {
          var t = AlitaMenu.getInstance(this);
          if (null !== t && "dropdown" === t.getItemSubType(this))
            return t.mouseover(this, e);
        }
      ),
      AlitaUtil.on(
        document.body,
        "[data-alita-menu-trigger], .menu-sub",
        "mouseout",
        function (e) {
          var t = AlitaMenu.getInstance(this);
          if (null !== t && "dropdown" === t.getItemSubType(this))
            return t.mouseout(this, e);
        }
      ),
      window.addEventListener("resize", function () {
        var e;
        AlitaUtil.throttle(
          undefined,
          function () {
            var t = document.querySelectorAll('[data-alita-menu="true"]');
            if (t && t.length > 0)
              for (var n = 0, i = t.length; n < i; n++)
                (e = AlitaMenu.getInstance(t[n])) && e.update();
          },
          200
        );
      });
  }),
  (AlitaMenu.updateByLinkAttribute = function (e, t = "href") {
    var n = document.querySelectorAll('[data-alita-menu="true"]');
    if (n && n.length > 0)
      for (var i = 0, r = n.length; i < r; i++) {
        var o = AlitaMenu.getInstance(n[i]);
        if (o) {
          var a = o.getLinkByAttribute(e, t);
          a && o.setActiveLink(a);
        }
      }
  }),
  (AlitaMenu.createInstances = function (e = '[data-alita-menu="true"]') {
    var t = document.querySelectorAll(e);
    if (t && t.length > 0)
      for (var n = 0, i = t.length; n < i; n++) new AlitaMenu(t[n]);
  }),
  (AlitaMenu.init = function () {
    AlitaMenu.createInstances(),
      !1 === AlitaMenuHandlersInitialized &&
        (AlitaMenu.initHandlers(), (AlitaMenuHandlersInitialized = !0));
  }),
  "undefined" != typeof module &&
    void 0 !== module.exports &&
    (module.exports = AlitaMenu);
var AlitaPasswordMeter = function (e, t) {
  var n = this;
  if (e) {
    var i = {
        minLength: 8,
        checkUppercase: !0,
        checkLowercase: !0,
        checkDigit: !0,
        checkChar: !0,
        scoreHighlightClass: "active",
      },
      r = function () {
        (n.options = AlitaUtil.deepExtend({}, i, t)),
          (n.score = 0),
          (n.checkSteps = 5),
          (n.element = e),
          (n.inputElement = n.element.querySelector("input[type]")),
          (n.visibilityElement = n.element.querySelector(
            '[data-alita-password-meter-control="visibility"]'
          )),
          (n.highlightElement = n.element.querySelector(
            '[data-alita-password-meter-control="highlight"]'
          )),
          n.element.setAttribute("data-alita-password-meter", "true"),
          o(),
          AlitaUtil.data(n.element).set("password-meter", n);
      },
      o = function () {
        n.highlightElement &&
          n.inputElement.addEventListener("input", function () {
            a();
          }),
          n.visibilityElement &&
            n.visibilityElement.addEventListener("click", function () {
              p();
            });
      },
      a = function () {
        var e = 0,
          t = m();
        !0 === l() && (e += t),
          !0 === n.options.checkUppercase && !0 === s() && (e += t),
          !0 === n.options.checkLowercase && !0 === u() && (e += t),
          !0 === n.options.checkDigit && !0 === d() && (e += t),
          !0 === n.options.checkChar && !0 === c() && (e += t),
          (n.score = e),
          f();
      },
      l = function () {
        return n.inputElement.value.length >= n.options.minLength;
      },
      s = function () {
        return /[a-z]/.test(n.inputElement.value);
      },
      u = function () {
        return /[A-Z]/.test(n.inputElement.value);
      },
      d = function () {
        return /[0-9]/.test(n.inputElement.value);
      },
      c = function () {
        return /[~`!#@$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(
          n.inputElement.value
        );
      },
      m = function () {
        var e = 1;
        return (
          !0 === n.options.checkUppercase && e++,
          !0 === n.options.checkLowercase && e++,
          !0 === n.options.checkDigit && e++,
          !0 === n.options.checkChar && e++,
          (n.checkSteps = e),
          100 / n.checkSteps
        );
      },
      f = function () {
        var e = [].slice.call(n.highlightElement.querySelectorAll("div")),
          t = e.length,
          i = 0,
          r = m(),
          o = g();
        e.map(function (e) {
          i++,
            r * i * (n.checkSteps / t) <= o
              ? e.classList.add("active")
              : e.classList.remove("active");
        });
      },
      p = function () {
        var e = n.visibilityElement.querySelector(":scope > i:not(.d-none)"),
          t = n.visibilityElement.querySelector(":scope > i.d-none");
        "password" === n.inputElement.getAttribute("type").toLowerCase()
          ? n.inputElement.setAttribute("type", "text")
          : n.inputElement.setAttribute("type", "password"),
          e.classList.add("d-none"),
          t.classList.remove("d-none"),
          n.inputElement.focus();
      },
      g = function () {
        return n.score;
      };
    !0 === AlitaUtil.data(e).has("password-meter")
      ? (n = AlitaUtil.data(e).get("password-meter"))
      : r(),
      (n.check = function () {
        return a();
      }),
      (n.getScore = function () {
        return g();
      }),
      (n.reset = function () {
        return (n.score = 0), void f();
      }),
      (n.destroy = function () {
        AlitaUtil.data(n.element).remove("password-meter");
      });
  }
};
(AlitaPasswordMeter.getInstance = function (e) {
  return null !== e && AlitaUtil.data(e).has("password-meter")
    ? AlitaUtil.data(e).get("password-meter")
    : null;
}),
  (AlitaPasswordMeter.createInstances = function (e = "[data-alita-password-meter]") {
    var t = document.body.querySelectorAll(e);
    if (t && t.length > 0)
      for (var n = 0, i = t.length; n < i; n++) new AlitaPasswordMeter(t[n]);
  }),
  (AlitaPasswordMeter.init = function () {
    AlitaPasswordMeter.createInstances();
  }),
  "undefined" != typeof module &&
    void 0 !== module.exports &&
    (module.exports = AlitaPasswordMeter);
var AlitaScrollHandlersInitialized = !1,
  AlitaScroll = function (e, t) {
    var n = this;
    if (e) {
      var i = { saveState: !0 },
        r = function () {
          (n.options = AlitaUtil.deepExtend({}, i, t)),
            (n.element = e),
            (n.id = n.element.getAttribute("id")),
            n.element.setAttribute("data-alita-scroll", "true"),
            l(),
            AlitaUtil.data(n.element).set("scroll", n);
        },
        o = function (e) {
          return document.body.hasAttribute("data-alita-name")
            ? document.body.getAttribute("data-alita-name") + "_"
            : "";
        },
        a = function () {
          var e = o();
          localStorage.setItem(e + n.id + "st", n.element.scrollTop);
        },
        l = function () {
          var e, t;
          !0 === f("activate") ||
          !1 === n.element.hasAttribute("data-alita-scroll-activate")
            ? ((e = p()),
              null !== (t = u()) && t.length > 0
                ? AlitaUtil.css(n.element, e, t)
                : AlitaUtil.css(n.element, e, ""),
              s(),
              !0 === f("save-state") && n.id
                ? n.element.addEventListener("scroll", a)
                : n.element.removeEventListener("scroll", a),
              (function () {
                var e = o();
                if (
                  !0 === f("save-state") &&
                  n.id &&
                  localStorage.getItem(e + n.id + "st")
                ) {
                  var t = parseInt(localStorage.getItem(e + n.id + "st"));
                  t > 0 && n.element.scroll({ top: t, behavior: "instant" });
                }
              })())
            : (AlitaUtil.css(n.element, p(), ""),
              n.element.removeEventListener("scroll", a));
        },
        s = function () {
          var e = f("stretch");
          if (null !== e) {
            var t = document.querySelectorAll(e);
            if (t && 2 == t.length) {
              var i = t[0],
                r = t[1],
                o = c(r) - c(i);
              if (o > 0) {
                var a = parseInt(AlitaUtil.css(n.element, p())) + o;
                AlitaUtil.css(n.element, p(), String(a) + "px");
              }
            }
          }
        },
        u = function () {
          var e = f(p());
          return e instanceof Function
            ? e.call()
            : null !== e && "string" == typeof e && "auto" === e.toLowerCase()
            ? d()
            : e;
        },
        d = function () {
          var e,
            t = AlitaUtil.getViewPort().height,
            i = f("dependencies"),
            r = f("wrappers"),
            o = f("offset");
          if (
            ((t -= m(n.element)), null !== i) &&
            (e = document.querySelectorAll(i)) &&
            e.length > 0
          )
            for (var a = 0, l = e.length; a < l; a++)
              !1 !== AlitaUtil.visible(e[a]) && (t -= c(e[a]));
          if (null !== r && (e = document.querySelectorAll(r)) && e.length > 0)
            for (a = 0, l = e.length; a < l; a++)
              !1 !== AlitaUtil.visible(e[a]) && (t -= m(e[a]));
          return (
            null !== o && "object" != typeof o && (t -= parseInt(o)),
            String(t) + "px"
          );
        },
        c = function (e) {
          var t = 0;
          return (
            null !== e &&
              ((t += parseInt(AlitaUtil.css(e, "height"))),
              (t += parseInt(AlitaUtil.css(e, "margin-top"))),
              (t += parseInt(AlitaUtil.css(e, "margin-bottom"))),
              AlitaUtil.css(e, "border-top") &&
                (t += parseInt(AlitaUtil.css(e, "border-top"))),
              AlitaUtil.css(e, "border-bottom") &&
                (t += parseInt(AlitaUtil.css(e, "border-bottom")))),
            t
          );
        },
        m = function (e) {
          var t = 0;
          return (
            null !== e &&
              ((t += parseInt(AlitaUtil.css(e, "margin-top"))),
              (t += parseInt(AlitaUtil.css(e, "margin-bottom"))),
              (t += parseInt(AlitaUtil.css(e, "padding-top"))),
              (t += parseInt(AlitaUtil.css(e, "padding-bottom"))),
              AlitaUtil.css(e, "border-top") &&
                (t += parseInt(AlitaUtil.css(e, "border-top"))),
              AlitaUtil.css(e, "border-bottom") &&
                (t += parseInt(AlitaUtil.css(e, "border-bottom")))),
            t
          );
        },
        f = function (e) {
          if (!0 === n.element.hasAttribute("data-alita-scroll-" + e)) {
            var t = n.element.getAttribute("data-alita-scroll-" + e),
              i = AlitaUtil.getResponsiveValue(t);
            return (
              null !== i && "true" === String(i)
                ? (i = !0)
                : null !== i && "false" === String(i) && (i = !1),
              i
            );
          }
          var r = AlitaUtil.snakeToCamel(e);
          return n.options[r] ? AlitaUtil.getResponsiveValue(n.options[r]) : null;
        },
        p = function () {
          return f("height")
            ? "height"
            : f("min-height")
            ? "min-height"
            : f("max-height")
            ? "max-height"
            : void 0;
        };
      AlitaUtil.data(e).has("scroll") ? (n = AlitaUtil.data(e).get("scroll")) : r(),
        (n.update = function () {
          return l();
        }),
        (n.getHeight = function () {
          return u();
        }),
        (n.getElement = function () {
          return n.element;
        }),
        (n.destroy = function () {
          AlitaUtil.data(n.element).remove("scroll");
        });
    }
  };
(AlitaScroll.getInstance = function (e) {
  return null !== e && AlitaUtil.data(e).has("scroll")
    ? AlitaUtil.data(e).get("scroll")
    : null;
}),
  (AlitaScroll.createInstances = function (e = '[data-alita-scroll="true"]') {
    var t = document.body.querySelectorAll(e);
    if (t && t.length > 0)
      for (var n = 0, i = t.length; n < i; n++) new AlitaScroll(t[n]);
  }),
  (AlitaScroll.handleResize = function () {
    window.addEventListener("resize", function () {
      AlitaUtil.throttle(
        undefined,
        function () {
          var e = document.body.querySelectorAll('[data-alita-scroll="true"]');
          if (e && e.length > 0)
            for (var t = 0, n = e.length; t < n; t++) {
              var i = AlitaScroll.getInstance(e[t]);
              i && i.update();
            }
        },
        200
      );
    });
  }),
  (AlitaScroll.init = function () {
    AlitaScroll.createInstances(),
      !1 === AlitaScrollHandlersInitialized &&
        (AlitaScroll.handleResize(), (AlitaScrollHandlersInitialized = !0));
  }),
  "undefined" != typeof module &&
    void 0 !== module.exports &&
    (module.exports = AlitaScroll);
var AlitaScrolltop = function (e, t) {
  var n = this;
  if (null != e) {
    var i = { offset: 300, speed: 600 },
      r = function () {
        (n.options = AlitaUtil.deepExtend({}, i, t)),
          (n.uid = AlitaUtil.getUniqueId("scrolltop")),
          (n.element = e),
          n.element.setAttribute("data-alita-scrolltop", "true"),
          o(),
          AlitaUtil.data(n.element).set("scrolltop", n);
      },
      o = function () {
        window.addEventListener("scroll", function () {
          AlitaUtil.throttle(
            undefined,
            function () {
              a();
            },
            200
          );
        }),
          AlitaUtil.addEvent(n.element, "click", function (e) {
            e.preventDefault(), l();
          });
      },
      a = function () {
        var e = parseInt(s("offset"));
        AlitaUtil.getScrollTop() > e
          ? !1 === document.body.hasAttribute("data-alita-scrolltop") &&
            document.body.setAttribute("data-alita-scrolltop", "on")
          : !0 === document.body.hasAttribute("data-alita-scrolltop") &&
            document.body.removeAttribute("data-alita-scrolltop");
      },
      l = function () {
        parseInt(s("speed"));
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      s = function (e) {
        if (!0 === n.element.hasAttribute("data-alita-scrolltop-" + e)) {
          var t = n.element.getAttribute("data-alita-scrolltop-" + e),
            i = AlitaUtil.getResponsiveValue(t);
          return (
            null !== i && "true" === String(i)
              ? (i = !0)
              : null !== i && "false" === String(i) && (i = !1),
            i
          );
        }
        var r = AlitaUtil.snakeToCamel(e);
        return n.options[r] ? AlitaUtil.getResponsiveValue(n.options[r]) : null;
      };
    AlitaUtil.data(e).has("scrolltop")
      ? (n = AlitaUtil.data(e).get("scrolltop"))
      : r(),
      (n.go = function () {
        return l();
      }),
      (n.getElement = function () {
        return n.element;
      }),
      (n.destroy = function () {
        AlitaUtil.data(n.element).remove("scrolltop");
      });
  }
};
(AlitaScrolltop.getInstance = function (e) {
  return e && AlitaUtil.data(e).has("scrolltop")
    ? AlitaUtil.data(e).get("scrolltop")
    : null;
}),
  (AlitaScrolltop.createInstances = function (e = '[data-alita-scrolltop="true"]') {
    var t = document.body.querySelectorAll(e);
    if (t && t.length > 0)
      for (var n = 0, i = t.length; n < i; n++) new AlitaScrolltop(t[n]);
  }),
  (AlitaScrolltop.init = function () {
    AlitaScrolltop.createInstances();
  }),
  "undefined" != typeof module &&
    void 0 !== module.exports &&
    (module.exports = AlitaScrolltop);
var AlitaSearch = function (e, t) {
  var n = this;
  if (e) {
    var i = {
        minLength: 2,
        keypress: !0,
        enter: !0,
        layout: "menu",
        responsive: null,
        showOnFocus: !0,
      },
      r = function () {
        (n.options = AlitaUtil.deepExtend({}, i, t)),
          (n.processing = !1),
          (n.element = e),
          (n.contentElement = v("content")),
          (n.formElement = v("form")),
          (n.inputElement = v("input")),
          (n.spinnerElement = v("spinner")),
          (n.clearElement = v("clear")),
          (n.toggleElement = v("toggle")),
          (n.submitElement = v("submit")),
          (n.toolbarElement = v("toolbar")),
          (n.minLength = parseInt(g("min-length"))),
          (n.resultsElement = v("results")),
          (n.suggestionElement = v("suggestion")),
          (n.emptyElement = v("empty")),
          n.element.setAttribute("data-alita-search", "true"),
          (n.layout = g("layout")),
          "menu" === n.layout
            ? (n.menuObject = new AlitaMenu(n.contentElement))
            : (n.menuObject = null),
          m(),
          o(),
          AlitaUtil.data(n.element).set("search", n);
      },
      o = function () {
        n.inputElement.addEventListener("focus", a),
          n.inputElement.addEventListener("blur", l),
          !0 === g("keypress") && n.inputElement.addEventListener("input", u),
          n.submitElement && n.submitElement.addEventListener("click", d),
          !0 === g("enter") && n.inputElement.addEventListener("keypress", s),
          n.clearElement && n.clearElement.addEventListener("click", c),
          n.menuObject &&
            (n.toggleElement &&
              (n.toggleElement.addEventListener("click", f),
              n.menuObject.on("alita.menu.dropdown.show", function (e) {
                AlitaUtil.visible(n.toggleElement) &&
                  (n.toggleElement.classList.add("active"),
                  n.toggleElement.classList.add("show"));
              }),
              n.menuObject.on("alita.menu.dropdown.hide", function (e) {
                AlitaUtil.visible(n.toggleElement) &&
                  (n.toggleElement.classList.remove("active"),
                  n.toggleElement.classList.remove("show"));
              })),
            n.menuObject.on("alita.menu.dropdown.shown", function () {
              n.inputElement.focus();
            })),
          window.addEventListener("resize", function () {
            AlitaUtil.throttle(
              undefined,
              function () {
                m();
              },
              200
            );
          });
      },
      a = function () {
        n.element.classList.add("focus"),
          (!0 === g("show-on-focus") ||
            n.inputElement.value.length >= n.minLength) &&
            f();
      },
      l = function () {
        n.element.classList.remove("focus");
      },
      s = function (e) {
        13 == (e.charCode || e.keyCode || 0) && (e.preventDefault(), d());
      },
      u = function () {
        g("min-length") &&
          (n.inputElement.value.length >= n.minLength
            ? d()
            : 0 === n.inputElement.value.length && c());
      },
      d = function () {
        !1 === n.processing &&
          (n.spinnerElement && n.spinnerElement.classList.remove("d-none"),
          n.clearElement && n.clearElement.classList.add("d-none"),
          n.toolbarElement &&
            n.formElement.contains(n.toolbarElement) &&
            n.toolbarElement.classList.add("d-none"),
          n.inputElement.focus(),
          (n.processing = !0),
          AlitaEventHandler.trigger(n.element, "alita.search.process", n));
      },
      c = function () {
        !1 !== AlitaEventHandler.trigger(n.element, "alita.search.clear", n) &&
          ((n.inputElement.value = ""),
          n.inputElement.focus(),
          n.clearElement && n.clearElement.classList.add("d-none"),
          n.toolbarElement &&
            n.formElement.contains(n.toolbarElement) &&
            n.toolbarElement.classList.remove("d-none"),
          !1 === g("show-on-focus") && p(),
          AlitaEventHandler.trigger(n.element, "alita.search.cleared", n));
      },
      m = function () {
        if ("menu" === n.layout) {
          var e = T();
          "on" === e && !1 === n.contentElement.contains(n.formElement)
            ? (n.contentElement.prepend(n.formElement),
              n.formElement.classList.remove("d-none"))
            : "off" === e &&
              !0 === n.contentElement.contains(n.formElement) &&
              (n.element.prepend(n.formElement),
              n.formElement.classList.add("d-none"));
        }
      },
      f = function () {
        n.menuObject && (m(), n.menuObject.show(n.element));
      },
      p = function () {
        n.menuObject && (m(), n.menuObject.hide(n.element));
      },
      g = function (e) {
        if (!0 === n.element.hasAttribute("data-alita-search-" + e)) {
          var t = n.element.getAttribute("data-alita-search-" + e),
            i = AlitaUtil.getResponsiveValue(t);
          return (
            null !== i && "true" === String(i)
              ? (i = !0)
              : null !== i && "false" === String(i) && (i = !1),
            i
          );
        }
        var r = AlitaUtil.snakeToCamel(e);
        return n.options[r] ? AlitaUtil.getResponsiveValue(n.options[r]) : null;
      },
      v = function (e) {
        return n.element.querySelector('[data-alita-search-element="' + e + '"]');
      },
      T = function () {
        var e = g("responsive"),
          t = AlitaUtil.getViewPort().width;
        if (!e) return null;
        var n = AlitaUtil.getBreakpoint(e);
        return n || (n = parseInt(e)), t < n ? "on" : "off";
      };
    !0 === AlitaUtil.data(e).has("search")
      ? (n = AlitaUtil.data(e).get("search"))
      : r(),
      (n.show = function () {
        return f();
      }),
      (n.hide = function () {
        return p();
      }),
      (n.update = function () {
        return m();
      }),
      (n.search = function () {
        return d();
      }),
      (n.complete = function () {
        return (
          n.spinnerElement && n.spinnerElement.classList.add("d-none"),
          n.clearElement && n.clearElement.classList.remove("d-none"),
          0 === n.inputElement.value.length && c(),
          n.inputElement.focus(),
          f(),
          void (n.processing = !1)
        );
      }),
      (n.clear = function () {
        return c();
      }),
      (n.isProcessing = function () {
        return n.processing;
      }),
      (n.getQuery = function () {
        return n.inputElement.value;
      }),
      (n.getMenu = function () {
        return n.menuObject;
      }),
      (n.getFormElement = function () {
        return n.formElement;
      }),
      (n.getInputElement = function () {
        return n.inputElement;
      }),
      (n.getContentElement = function () {
        return n.contentElement;
      }),
      (n.getElement = function () {
        return n.element;
      }),
      (n.destroy = function () {
        AlitaUtil.data(n.element).remove("search");
      }),
      (n.on = function (e, t) {
        return AlitaEventHandler.on(n.element, e, t);
      }),
      (n.one = function (e, t) {
        return AlitaEventHandler.one(n.element, e, t);
      }),
      (n.off = function (e, t) {
        return AlitaEventHandler.off(n.element, e, t);
      });
  }
};
(AlitaSearch.getInstance = function (e) {
  return null !== e && AlitaUtil.data(e).has("search")
    ? AlitaUtil.data(e).get("search")
    : null;
}),
  "undefined" != typeof module &&
    void 0 !== module.exports &&
    (module.exports = AlitaSearch);
var AlitaStepper = function (e, t) {
  var n = this;
  if (null != e) {
    var i = {
        startIndex: 1,
        animation: !1,
        animationSpeed: "0.3s",
        animationNextClass:
          "animate__animated animate__slideInRight animate__fast",
        animationPreviousClass:
          "animate__animated animate__slideInLeft animate__fast",
      },
      r = function () {
        (n.options = AlitaUtil.deepExtend({}, i, t)),
          (n.uid = AlitaUtil.getUniqueId("stepper")),
          (n.element = e),
          n.element.setAttribute("data-alita-stepper", "true"),
          (n.steps = AlitaUtil.findAll(
            n.element,
            '[data-alita-stepper-element="nav"]'
          )),
          (n.btnNext = AlitaUtil.find(
            n.element,
            '[data-alita-stepper-action="next"]'
          )),
          (n.btnPrevious = AlitaUtil.find(
            n.element,
            '[data-alita-stepper-action="previous"]'
          )),
          (n.btnSubmit = AlitaUtil.find(
            n.element,
            '[data-alita-stepper-action="submit"]'
          )),
          (n.totalStepsNumber = n.steps.length),
          (n.passedStepIndex = 0),
          (n.currentStepIndex = 1),
          (n.clickedStepIndex = 0),
          n.options.startIndex > 1 && o(n.options.startIndex),
          (n.nextListener = function (e) {
            e.preventDefault(),
              AlitaEventHandler.trigger(n.element, "alita.stepper.next", n);
          }),
          (n.previousListener = function (e) {
            e.preventDefault(),
              AlitaEventHandler.trigger(n.element, "alita.stepper.previous", n);
          }),
          (n.stepListener = function (e) {
            if ((e.preventDefault(), n.steps && n.steps.length > 0))
              for (var t = 0, i = n.steps.length; t < i; t++)
                if (n.steps[t] === this)
                  return (
                    (n.clickedStepIndex = t + 1),
                    void AlitaEventHandler.trigger(
                      n.element,
                      "alita.stepper.click",
                      n
                    )
                  );
          }),
          AlitaUtil.addEvent(n.btnNext, "click", n.nextListener),
          AlitaUtil.addEvent(n.btnPrevious, "click", n.previousListener),
          (n.stepListenerId = AlitaUtil.on(
            n.element,
            '[data-alita-stepper-action="step"]',
            "click",
            n.stepListener
          )),
          AlitaUtil.data(n.element).set("stepper", n);
      },
      o = function (e) {
        if (
          (AlitaEventHandler.trigger(n.element, "alita.stepper.change", n),
          !(e === n.currentStepIndex || e > n.totalStepsNumber || e < 0))
        )
          return (
            (e = parseInt(e)),
            (n.passedStepIndex = n.currentStepIndex),
            (n.currentStepIndex = e),
            a(),
            AlitaEventHandler.trigger(n.element, "alita.stepper.changed", n),
            n
          );
      },
      a = function () {
        var e = "";
        (e = l() ? "last" : s() ? "first" : "between"),
          AlitaUtil.removeClass(n.element, "last"),
          AlitaUtil.removeClass(n.element, "first"),
          AlitaUtil.removeClass(n.element, "between"),
          AlitaUtil.addClass(n.element, e);
        var t = AlitaUtil.findAll(
          n.element,
          '[data-alita-stepper-element="nav"], [data-alita-stepper-element="content"], [data-alita-stepper-element="info"]'
        );
        if (t && t.length > 0)
          for (var i = 0, r = t.length; i < r; i++) {
            var o = t[i],
              a = AlitaUtil.index(o) + 1;
            if (
              (AlitaUtil.removeClass(o, "current"),
              AlitaUtil.removeClass(o, "completed"),
              AlitaUtil.removeClass(o, "pending"),
              a == n.currentStepIndex)
            ) {
              if (
                (AlitaUtil.addClass(o, "current"),
                !1 !== n.options.animation &&
                  "content" == o.getAttribute("data-alita-stepper-element"))
              ) {
                AlitaUtil.css(o, "animationDuration", n.options.animationSpeed);
                var u =
                  "previous" === f(n.passedStepIndex)
                    ? n.options.animationPreviousClass
                    : n.options.animationNextClass;
                AlitaUtil.animateClass(o, u);
              }
            } else
              a < n.currentStepIndex
                ? AlitaUtil.addClass(o, "completed")
                : AlitaUtil.addClass(o, "pending");
          }
      },
      l = function () {
        return n.currentStepIndex === n.totalStepsNumber;
      },
      s = function () {
        return 1 === n.currentStepIndex;
      },
      u = function () {
        return n.totalStepsNumber >= n.currentStepIndex + 1
          ? n.currentStepIndex + 1
          : n.totalStepsNumber;
      },
      d = function () {
        return n.currentStepIndex - 1 > 1 ? n.currentStepIndex - 1 : 1;
      },
      c = function () {
        return 1;
      },
      m = function () {
        return n.totalStepsNumber;
      },
      f = function (e) {
        return e > n.currentStepIndex ? "next" : "previous";
      };
    !0 === AlitaUtil.data(e).has("stepper")
      ? (n = AlitaUtil.data(e).get("stepper"))
      : r(),
      (n.getElement = function (e) {
        return n.element;
      }),
      (n.goTo = function (e) {
        return o(e);
      }),
      (n.goPrevious = function () {
        return o(d());
      }),
      (n.goNext = function () {
        return o(u());
      }),
      (n.goFirst = function () {
        return o(c());
      }),
      (n.goLast = function () {
        return o(m());
      }),
      (n.getCurrentStepIndex = function () {
        return n.currentStepIndex;
      }),
      (n.getNextStepIndex = function () {
        return u();
      }),
      (n.getPassedStepIndex = function () {
        return n.passedStepIndex;
      }),
      (n.getClickedStepIndex = function () {
        return n.clickedStepIndex;
      }),
      (n.getPreviousStepIndex = function () {
        return d();
      }),
      (n.destroy = function () {
        return (
          AlitaUtil.removeEvent(n.btnNext, "click", n.nextListener),
          AlitaUtil.removeEvent(n.btnPrevious, "click", n.previousListener),
          AlitaUtil.off(n.element, "click", n.stepListenerId),
          void AlitaUtil.data(n.element).remove("stepper")
        );
      }),
      (n.on = function (e, t) {
        return AlitaEventHandler.on(n.element, e, t);
      }),
      (n.one = function (e, t) {
        return AlitaEventHandler.one(n.element, e, t);
      }),
      (n.off = function (e, t) {
        return AlitaEventHandler.off(n.element, e, t);
      }),
      (n.trigger = function (e, t) {
        return AlitaEventHandler.trigger(n.element, e, t, n, t);
      });
  }
};
(AlitaStepper.getInstance = function (e) {
  return null !== e && AlitaUtil.data(e).has("stepper")
    ? AlitaUtil.data(e).get("stepper")
    : null;
}),
  "undefined" != typeof module &&
    void 0 !== module.exports &&
    (module.exports = AlitaStepper);
var AlitaStickyHandlersInitialized = !1,
  AlitaSticky = function (e, t) {
    var n = this;
    if (null != e) {
      var i = {
          offset: 200,
          reverse: !1,
          release: null,
          animation: !0,
          animationSpeed: "0.3s",
          animationClass: "animation-slide-in-down",
        },
        r = function () {
          (n.element = e),
            (n.options = AlitaUtil.deepExtend({}, i, t)),
            (n.uid = AlitaUtil.getUniqueId("sticky")),
            (n.name = n.element.getAttribute("data-alita-sticky-name")),
            (n.attributeName = "data-alita-sticky-" + n.name),
            (n.attributeName2 = "data-alita-" + n.name),
            (n.eventTriggerState = !0),
            (n.lastScrollTop = 0),
            n.scrollHandler,
            n.element.setAttribute("data-alita-sticky", "true"),
            window.addEventListener("scroll", o),
            o(),
            AlitaUtil.data(n.element).set("sticky", n);
        },
        o = function (e) {
          var t,
            i = u("offset"),
            r = u("release"),
            o = u("reverse");
          if (!1 !== i) {
            (i = parseInt(i)),
              (r = r ? document.querySelector(r) : null),
              (t = AlitaUtil.getScrollTop()),
              document.documentElement.scrollHeight -
                window.innerHeight -
                AlitaUtil.getScrollTop();
            var s = !r || r.offsetTop - r.clientHeight > t;
            if (!0 === o) {
              if (t > i && s) {
                if (!1 === document.body.hasAttribute(n.attributeName)) {
                  if (!1 === a()) return;
                  document.body.setAttribute(n.attributeName, "on"),
                    document.body.setAttribute(n.attributeName2, "on"),
                    n.element.setAttribute("data-alita-sticky-enabled", "true");
                }
                !0 === n.eventTriggerState &&
                  (AlitaEventHandler.trigger(n.element, "alita.sticky.on", n),
                  AlitaEventHandler.trigger(n.element, "alita.sticky.change", n),
                  (n.eventTriggerState = !1));
              } else
                !0 === document.body.hasAttribute(n.attributeName) &&
                  (l(),
                  document.body.removeAttribute(n.attributeName),
                  document.body.removeAttribute(n.attributeName2),
                  n.element.removeAttribute("data-alita-sticky-enabled")),
                  !1 === n.eventTriggerState &&
                    (AlitaEventHandler.trigger(n.element, "alita.sticky.off", n),
                    AlitaEventHandler.trigger(n.element, "alita.sticky.change", n),
                    (n.eventTriggerState = !0));
              n.lastScrollTop = t;
            } else if (t > i && s) {
              if (!1 === document.body.hasAttribute(n.attributeName)) {
                if (!1 === a()) return;
                document.body.setAttribute(n.attributeName, "on"),
                  document.body.setAttribute(n.attributeName2, "on"),
                  n.element.setAttribute("data-alita-sticky-enabled", "true");
              }
              !0 === n.eventTriggerState &&
                (AlitaEventHandler.trigger(n.element, "alita.sticky.on", n),
                AlitaEventHandler.trigger(n.element, "alita.sticky.change", n),
                (n.eventTriggerState = !1));
            } else
              !0 === document.body.hasAttribute(n.attributeName) &&
                (l(),
                document.body.removeAttribute(n.attributeName),
                document.body.removeAttribute(n.attributeName2),
                n.element.removeAttribute("data-alita-sticky-enabled")),
                !1 === n.eventTriggerState &&
                  (AlitaEventHandler.trigger(n.element, "alita.sticky.off", n),
                  AlitaEventHandler.trigger(n.element, "alita.sticky.change", n),
                  (n.eventTriggerState = !0));
            r &&
              (r.offsetTop - r.clientHeight > t
                ? n.element.setAttribute("data-alita-sticky-released", "true")
                : n.element.removeAttribute("data-alita-sticky-released"));
          } else l();
        },
        a = function (e) {
          var t = u("top");
          t = t ? parseInt(t) : 0;
          var i = u("left"),
            r = u("right"),
            o = u("width"),
            a = u("zindex"),
            l = u("dependencies"),
            d = u("class"),
            c = s(),
            m = u("height-offset");
          if (c + (m = m ? parseInt(m) : 0) + t > AlitaUtil.getViewPort().height)
            return !1;
          if (
            (!0 !== e &&
              !0 === u("animation") &&
              (AlitaUtil.css(n.element, "animationDuration", u("animationSpeed")),
              AlitaUtil.animateClass(
                n.element,
                "animation " + u("animationClass")
              )),
            null !== d && AlitaUtil.addClass(n.element, d),
            null !== a &&
              (AlitaUtil.css(n.element, "z-index", a),
              AlitaUtil.css(n.element, "position", "fixed")),
            t >= 0 && AlitaUtil.css(n.element, "top", String(t) + "px"),
            null !== o)
          ) {
            if (o.target) {
              var f = document.querySelector(o.target);
              f && (o = AlitaUtil.css(f, "width"));
            }
            AlitaUtil.css(n.element, "width", o);
          }
          if (null !== i)
            if ("auto" === String(i).toLowerCase()) {
              var p = AlitaUtil.offset(n.element).left;
              p >= 0 && AlitaUtil.css(n.element, "left", String(p) + "px");
            } else AlitaUtil.css(n.element, "left", i);
          if ((null !== r && AlitaUtil.css(n.element, "right", r), null !== l)) {
            var g = document.querySelectorAll(l);
            if (g && g.length > 0)
              for (var v = 0, T = g.length; v < T; v++)
                AlitaUtil.css(g[v], "padding-top", String(c) + "px");
          }
        },
        l = function () {
          AlitaUtil.css(n.element, "top", ""),
            AlitaUtil.css(n.element, "width", ""),
            AlitaUtil.css(n.element, "left", ""),
            AlitaUtil.css(n.element, "right", ""),
            AlitaUtil.css(n.element, "z-index", ""),
            AlitaUtil.css(n.element, "position", "");
          var e = u("dependencies"),
            t = u("class");
          if ((null !== t && AlitaUtil.removeClass(n.element, t), null !== e)) {
            var i = document.querySelectorAll(e);
            if (i && i.length > 0)
              for (var r = 0, o = i.length; r < o; r++)
                AlitaUtil.css(i[r], "padding-top", "");
          }
        },
        s = function () {
          var t = parseFloat(AlitaUtil.css(n.element, "height"));
          return (
            (t += parseFloat(AlitaUtil.css(n.element, "margin-top"))),
            (t += parseFloat(AlitaUtil.css(n.element, "margin-bottom"))),
            AlitaUtil.css(e, "border-top") &&
              (t += parseFloat(AlitaUtil.css(n.element, "border-top"))),
            AlitaUtil.css(e, "border-bottom") &&
              (t += parseFloat(AlitaUtil.css(n.element, "border-bottom"))),
            t
          );
        },
        u = function (e) {
          if (!0 === n.element.hasAttribute("data-alita-sticky-" + e)) {
            var t = n.element.getAttribute("data-alita-sticky-" + e),
              i = AlitaUtil.getResponsiveValue(t);
            return (
              null !== i && "true" === String(i)
                ? (i = !0)
                : null !== i && "false" === String(i) && (i = !1),
              i
            );
          }
          var r = AlitaUtil.snakeToCamel(e);
          return n.options[r] ? AlitaUtil.getResponsiveValue(n.options[r]) : null;
        };
      !0 === AlitaUtil.data(e).has("sticky")
        ? (n = AlitaUtil.data(e).get("sticky"))
        : r(),
        (n.update = function () {
          !0 === document.body.hasAttribute(n.attributeName) &&
            (l(),
            document.body.removeAttribute(n.attributeName),
            document.body.removeAttribute(n.attributeName2),
            a(!0),
            document.body.setAttribute(n.attributeName, "on"),
            document.body.setAttribute(n.attributeName2, "on"));
        }),
        (n.destroy = function () {
          return (
            window.removeEventListener("scroll", o),
            void AlitaUtil.data(n.element).remove("sticky")
          );
        }),
        (n.on = function (e, t) {
          return AlitaEventHandler.on(n.element, e, t);
        }),
        (n.one = function (e, t) {
          return AlitaEventHandler.one(n.element, e, t);
        }),
        (n.off = function (e, t) {
          return AlitaEventHandler.off(n.element, e, t);
        }),
        (n.trigger = function (e, t) {
          return AlitaEventHandler.trigger(n.element, e, t, n, t);
        });
    }
  };
(AlitaSticky.getInstance = function (e) {
  return null !== e && AlitaUtil.data(e).has("sticky")
    ? AlitaUtil.data(e).get("sticky")
    : null;
}),
  (AlitaSticky.createInstances = function (e = '[data-alita-sticky="true"]') {
    var t = document.body.querySelectorAll(e);
    if (t && t.length > 0)
      for (var n = 0, i = t.length; n < i; n++) new AlitaSticky(t[n]);
  }),
  (AlitaSticky.handleResize = function () {
    window.addEventListener("resize", function () {
      AlitaUtil.throttle(
        undefined,
        function () {
          var e = document.body.querySelectorAll('[data-alita-sticky="true"]');
          if (e && e.length > 0)
            for (var t = 0, n = e.length; t < n; t++) {
              var i = AlitaSticky.getInstance(e[t]);
              i && i.update();
            }
        },
        200
      );
    });
  }),
  (AlitaSticky.init = function () {
    AlitaSticky.createInstances(),
      !1 === AlitaStickyHandlersInitialized &&
        (AlitaSticky.handleResize(), (AlitaStickyHandlersInitialized = !0));
  }),
  "undefined" != typeof module &&
    void 0 !== module.exports &&
    (module.exports = AlitaSticky);
var AlitaSwapperHandlersInitialized = !1,
  AlitaSwapper = function (e, t) {
    var n = this;
    if (null != e) {
      var i = { mode: "append" },
        r = function () {
          (n.element = e),
            (n.options = AlitaUtil.deepExtend({}, i, t)),
            n.element.setAttribute("data-alita-swapper", "true"),
            o(),
            AlitaUtil.data(n.element).set("swapper", n);
        },
        o = function (t) {
          var n = a("parent"),
            i = a("mode"),
            r = n ? document.querySelector(n) : null;
          r &&
            e.parentNode !== r &&
            ("prepend" === i ? r.prepend(e) : "append" === i && r.append(e));
        },
        a = function (e) {
          if (!0 === n.element.hasAttribute("data-alita-swapper-" + e)) {
            var t = n.element.getAttribute("data-alita-swapper-" + e),
              i = AlitaUtil.getResponsiveValue(t);
            return (
              null !== i && "true" === String(i)
                ? (i = !0)
                : null !== i && "false" === String(i) && (i = !1),
              i
            );
          }
          var r = AlitaUtil.snakeToCamel(e);
          return n.options[r] ? AlitaUtil.getResponsiveValue(n.options[r]) : null;
        };
      !0 === AlitaUtil.data(e).has("swapper")
        ? (n = AlitaUtil.data(e).get("swapper"))
        : r(),
        (n.update = function () {
          o();
        }),
        (n.destroy = function () {
          AlitaUtil.data(n.element).remove("swapper");
        }),
        (n.on = function (e, t) {
          return AlitaEventHandler.on(n.element, e, t);
        }),
        (n.one = function (e, t) {
          return AlitaEventHandler.one(n.element, e, t);
        }),
        (n.off = function (e, t) {
          return AlitaEventHandler.off(n.element, e, t);
        }),
        (n.trigger = function (e, t) {
          return AlitaEventHandler.trigger(n.element, e, t, n, t);
        });
    }
  };
(AlitaSwapper.getInstance = function (e) {
  return null !== e && AlitaUtil.data(e).has("swapper")
    ? AlitaUtil.data(e).get("swapper")
    : null;
}),
  (AlitaSwapper.createInstances = function (e = '[data-alita-swapper="true"]') {
    var t = document.querySelectorAll(e);
    if (t && t.length > 0)
      for (var n = 0, i = t.length; n < i; n++) new AlitaSwapper(t[n]);
  }),
  (AlitaSwapper.handleResize = function () {
    window.addEventListener("resize", function () {
      AlitaUtil.throttle(
        undefined,
        function () {
          var e = document.querySelectorAll('[data-alita-swapper="true"]');
          if (e && e.length > 0)
            for (var t = 0, n = e.length; t < n; t++) {
              var i = AlitaSwapper.getInstance(e[t]);
              i && i.update();
            }
        },
        200
      );
    });
  }),
  (AlitaSwapper.init = function () {
    AlitaSwapper.createInstances(),
      !1 === AlitaSwapperHandlersInitialized &&
        (AlitaSwapper.handleResize(), (AlitaSwapperHandlersInitialized = !0));
  }),
  "undefined" != typeof module &&
    void 0 !== module.exports &&
    (module.exports = AlitaSwapper);
var AlitaToggle = function (e, t) {
  var n = this;
  if (e) {
    var i = { saveState: !0 },
      r = function () {
        (n.options = AlitaUtil.deepExtend({}, i, t)),
          (n.uid = AlitaUtil.getUniqueId("toggle")),
          (n.element = e),
          (n.target = document.querySelector(
            n.element.getAttribute("data-alita-toggle-target")
          )
            ? document.querySelector(
                n.element.getAttribute("data-alita-toggle-target")
              )
            : n.element),
          (n.state = n.element.hasAttribute("data-alita-toggle-state")
            ? n.element.getAttribute("data-alita-toggle-state")
            : ""),
          (n.mode = n.element.hasAttribute("data-alita-toggle-mode")
            ? n.element.getAttribute("data-alita-toggle-mode")
            : ""),
          (n.attribute =
            "data-alita-" + n.element.getAttribute("data-alita-toggle-name")),
          o(),
          AlitaUtil.data(n.element).set("toggle", n);
      },
      o = function () {
        AlitaUtil.addEvent(n.element, "click", function (e) {
          e.preventDefault(),
            "" !== n.mode
              ? (("off" === n.mode && !1 === u()) ||
                  ("on" === n.mode && !0 === u())) &&
                a()
              : a();
        });
      },
      a = function () {
        return (
          AlitaEventHandler.trigger(n.element, "alita.toggle.change", n),
          u() ? s() : l(),
          AlitaEventHandler.trigger(n.element, "alita.toggle.changed", n),
          n
        );
      },
      l = function () {
        if (!0 !== u())
          return (
            AlitaEventHandler.trigger(n.element, "alita.toggle.enable", n),
            n.target.setAttribute(n.attribute, "on"),
            n.state.length > 0 && n.element.classList.add(n.state),
            void 0 !== AlitaCookie &&
              !0 === n.options.saveState &&
              AlitaCookie.set(n.attribute, "on"),
            AlitaEventHandler.trigger(n.element, "alita.toggle.enabled", n),
            n
          );
      },
      s = function () {
        if (!1 !== u())
          return (
            AlitaEventHandler.trigger(n.element, "alita.toggle.disable", n),
            n.target.removeAttribute(n.attribute),
            n.state.length > 0 && n.element.classList.remove(n.state),
            void 0 !== AlitaCookie &&
              !0 === n.options.saveState &&
              AlitaCookie.remove(n.attribute),
            AlitaEventHandler.trigger(n.element, "alita.toggle.disabled", n),
            n
          );
      },
      u = function () {
        return (
          "on" === String(n.target.getAttribute(n.attribute)).toLowerCase()
        );
      };
    !0 === AlitaUtil.data(e).has("toggle")
      ? (n = AlitaUtil.data(e).get("toggle"))
      : r(),
      (n.toggle = function () {
        return a();
      }),
      (n.enable = function () {
        return l();
      }),
      (n.disable = function () {
        return s();
      }),
      (n.isEnabled = function () {
        return u();
      }),
      (n.goElement = function () {
        return n.element;
      }),
      (n.destroy = function () {
        AlitaUtil.data(n.element).remove("toggle");
      }),
      (n.on = function (e, t) {
        return AlitaEventHandler.on(n.element, e, t);
      }),
      (n.one = function (e, t) {
        return AlitaEventHandler.one(n.element, e, t);
      }),
      (n.off = function (e, t) {
        return AlitaEventHandler.off(n.element, e, t);
      }),
      (n.trigger = function (e, t) {
        return AlitaEventHandler.trigger(n.element, e, t, n, t);
      });
  }
};
(AlitaToggle.getInstance = function (e) {
  return null !== e && AlitaUtil.data(e).has("toggle")
    ? AlitaUtil.data(e).get("toggle")
    : null;
}),
  (AlitaToggle.createInstances = function (e = "[data-alita-toggle]") {
    var t = document.body.querySelectorAll(e);
    if (t && t.length > 0)
      for (var n = 0, i = t.length; n < i; n++) new AlitaToggle(t[n]);
  }),
  (AlitaToggle.init = function () {
    AlitaToggle.createInstances();
  }),
  "undefined" != typeof module &&
    void 0 !== module.exports &&
    (module.exports = AlitaToggle),
  Element.prototype.matches ||
    (Element.prototype.matches = function (e) {
      for (
        var t = (this.document || this.ownerDocument).querySelectorAll(e),
          n = t.length;
        --n >= 0 && t.item(n) !== this;

      );
      return n > -1;
    }),
  Element.prototype.closest ||
    (Element.prototype.closest = function (e) {
      var t = this;
      if (!document.documentElement.contains(this)) return null;
      do {
        if (t.matches(e)) return t;
        t = t.parentElement;
      } while (null !== t);
      return null;
    }),
  /**
   * ChildNode.remove() polyfill
   * https://gomakethings.com/removing-an-element-from-the-dom-the-es6-way/
   * @author Chris Ferdinandi
   * @license MIT
   */ (function (e) {
    for (var t = 0; t < e.length; t++)
      window[e[t]] &&
        !("remove" in window[e[t]].prototype) &&
        (window[e[t]].prototype.remove = function () {
          this.parentNode.removeChild(this);
        });
  })(["Element", "CharacterData", "DocumentType"]),
  (function () {
    for (
      var e = 0, t = ["webkit", "moz"], n = 0;
      n < t.length && !window.requestAnimationFrame;
      ++n
    )
      (window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"]),
        (window.cancelAnimationFrame =
          window[t[n] + "CancelAnimationFrame"] ||
          window[t[n] + "CancelRequestAnimationFrame"]);
    window.requestAnimationFrame ||
      (window.requestAnimationFrame = function (t) {
        var n = new Date().getTime(),
          i = Math.max(0, 16 - (n - e)),
          r = window.setTimeout(function () {
            t(n + i);
          }, i);
        return (e = n + i), r;
      }),
      window.cancelAnimationFrame ||
        (window.cancelAnimationFrame = function (e) {
          clearTimeout(e);
        });
  })(),
  [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(
    function (e) {
      e.hasOwnProperty("prepend") ||
        Object.defineProperty(e, "prepend", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function () {
            var e = Array.prototype.slice.call(arguments),
              t = document.createDocumentFragment();
            e.forEach(function (e) {
              var n = e instanceof Node;
              t.appendChild(n ? e : document.createTextNode(String(e)));
            }),
              this.insertBefore(t, this.firstChild);
          },
        });
    }
  ),
  null == Element.prototype.getAttributeNames &&
    (Element.prototype.getAttributeNames = function () {
      for (
        var e = this.attributes, t = e.length, n = new Array(t), i = 0;
        i < t;
        i++
      )
        n[i] = e[i].name;
      return n;
    }),
  (window.AlitaUtilElementDataStore = {}),
  (window.AlitaUtilElementDataStoreID = 0),
  (window.AlitaUtilDelegatedEventHandlers = {});
var AlitaUtil = (function () {
  var e = [],
    t = function () {
      window.addEventListener("resize", function () {
        AlitaUtil.throttle(
          undefined,
          function () {
            !(function () {
              for (var t = 0; t < e.length; t++) e[t].call();
            })();
          },
          200
        );
      });
    };
  return {
    init: function (e) {
      t();
    },
    addResizeHandler: function (t) {
      e.push(t);
    },
    removeResizeHandler: function (t) {
      for (var n = 0; n < e.length; n++) t === e[n] && delete e[n];
    },
    runResizeHandlers: function () {
      _runResizeHandlers();
    },
    resize: function () {
      if ("function" == typeof Event) window.dispatchEvent(new Event("resize"));
      else {
        var e = window.document.createEvent("UIEvents");
        e.initUIEvent("resize", !0, !1, window, 0), window.dispatchEvent(e);
      }
    },
    getURLParam: function (e) {
      var t,
        n,
        i = window.location.search.substring(1).split("&");
      for (t = 0; t < i.length; t++)
        if ((n = i[t].split("="))[0] == e) return unescape(n[1]);
      return null;
    },
    isMobileDevice: function () {
      var e = this.getViewPort().width < this.getBreakpoint("lg");
      return !1 === e && (e = null != navigator.userAgent.match(/iPad/i)), e;
    },
    isDesktopDevice: function () {
      return !AlitaUtil.isMobileDevice();
    },
    getViewPort: function () {
      var e = window,
        t = "inner";
      return (
        "innerWidth" in window ||
          ((t = "client"), (e = document.documentElement || document.body)),
        { width: e[t + "Width"], height: e[t + "Height"] }
      );
    },
    isBreakpointUp: function (e) {
      return this.getViewPort().width >= this.getBreakpoint(e);
    },
    isBreakpointDown: function (e) {
      return this.getViewPort().width < this.getBreakpoint(e);
    },
    getViewportWidth: function () {
      return this.getViewPort().width;
    },
    getUniqueId: function (e) {
      return e + Math.floor(Math.random() * new Date().getTime());
    },
    getBreakpoint: function (e) {
      var t = this.getCssVariableValue("--bs-" + e);
      return t && (t = parseInt(t.trim())), t;
    },
    isset: function (e, t) {
      var n;
      if (-1 !== (t = t || "").indexOf("["))
        throw new Error("Unsupported object path notation.");
      t = t.split(".");
      do {
        if (void 0 === e) return !1;
        if (((n = t.shift()), !e.hasOwnProperty(n))) return !1;
        e = e[n];
      } while (t.length);
      return !0;
    },
    getHighestZindex: function (e) {
      for (var t, n; e && e !== document; ) {
        if (
          ("absolute" === (t = AlitaUtil.css(e, "position")) ||
            "relative" === t ||
            "fixed" === t) &&
          ((n = parseInt(AlitaUtil.css(e, "z-index"))), !isNaN(n) && 0 !== n)
        )
          return n;
        e = e.parentNode;
      }
      return 1;
    },
    hasFixedPositionedParent: function (e) {
      for (; e && e !== document; ) {
        if ("fixed" === AlitaUtil.css(e, "position")) return !0;
        e = e.parentNode;
      }
      return !1;
    },
    sleep: function (e) {
      for (
        var t = new Date().getTime(), n = 0;
        n < 1e7 && !(new Date().getTime() - t > e);
        n++
      );
    },
    getRandomInt: function (e, t) {
      return Math.floor(Math.random() * (t - e + 1)) + e;
    },
    isAngularVersion: function () {
      return void 0 !== window.Zone;
    },
    deepExtend: function (e) {
      e = e || {};
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        if (n)
          for (var i in n)
            n.hasOwnProperty(i) &&
              ("[object Object]" !== Object.prototype.toString.call(n[i])
                ? (e[i] = n[i])
                : (e[i] = AlitaUtil.deepExtend(e[i], n[i])));
      }
      return e;
    },
    extend: function (e) {
      e = e || {};
      for (var t = 1; t < arguments.length; t++)
        if (arguments[t])
          for (var n in arguments[t])
            arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
      return e;
    },
    getBody: function () {
      return document.getElementsByTagName("body")[0];
    },
    hasClasses: function (e, t) {
      if (e) {
        for (var n = t.split(" "), i = 0; i < n.length; i++)
          if (0 == AlitaUtil.hasClass(e, AlitaUtil.trim(n[i]))) return !1;
        return !0;
      }
    },
    hasClass: function (e, t) {
      if (e)
        return e.classList
          ? e.classList.contains(t)
          : new RegExp("\\b" + t + "\\b").test(e.className);
    },
    addClass: function (e, t) {
      if (e && void 0 !== t) {
        var n = t.split(" ");
        if (e.classList)
          for (var i = 0; i < n.length; i++)
            n[i] && n[i].length > 0 && e.classList.add(AlitaUtil.trim(n[i]));
        else if (!AlitaUtil.hasClass(e, t))
          for (var r = 0; r < n.length; r++)
            e.className += " " + AlitaUtil.trim(n[r]);
      }
    },
    removeClass: function (e, t) {
      if (e && void 0 !== t) {
        var n = t.split(" ");
        if (e.classList)
          for (var i = 0; i < n.length; i++)
            e.classList.remove(AlitaUtil.trim(n[i]));
        else if (AlitaUtil.hasClass(e, t))
          for (var r = 0; r < n.length; r++)
            e.className = e.className.replace(
              new RegExp("\\b" + AlitaUtil.trim(n[r]) + "\\b", "g"),
              ""
            );
      }
    },
    triggerCustomEvent: function (e, t, n) {
      var i;
      window.CustomEvent
        ? (i = new CustomEvent(t, { detail: n }))
        : (i = document.createEvent("CustomEvent")).initCustomEvent(
            t,
            !0,
            !0,
            n
          ),
        e.dispatchEvent(i);
    },
    triggerEvent: function (e, t) {
      var n;
      if (e.ownerDocument) n = e.ownerDocument;
      else {
        if (9 != e.nodeType)
          throw new Error("Invalid node passed to fireEvent: " + e.id);
        n = e;
      }
      if (e.dispatchEvent) {
        var i = "";
        switch (t) {
          case "click":
          case "mouseenter":
          case "mouseleave":
          case "mousedown":
          case "mouseup":
            i = "MouseEvents";
            break;
          case "focus":
          case "change":
          case "blur":
          case "select":
            i = "HTMLEvents";
            break;
          default:
            throw (
              "fireEvent: Couldn't find an event class for event '" + t + "'."
            );
        }
        var r = "change" != t;
        (o = n.createEvent(i)).initEvent(t, r, !0),
          (o.synthetic = !0),
          e.dispatchEvent(o, !0);
      } else if (e.fireEvent) {
        var o;
        ((o = n.createEventObject()).synthetic = !0), e.fireEvent("on" + t, o);
      }
    },
    index: function (e) {
      for (var t = e.parentNode.children, n = 0; n < t.length; n++)
        if (t[n] == e) return n;
    },
    trim: function (e) {
      return e.trim();
    },
    eventTriggered: function (e) {
      return (
        !!e.currentTarget.dataset.triggered ||
        ((e.currentTarget.dataset.triggered = !0), !1)
      );
    },
    remove: function (e) {
      e && e.parentNode && e.parentNode.removeChild(e);
    },
    find: function (e, t) {
      return null !== e ? e.querySelector(t) : null;
    },
    findAll: function (e, t) {
      return null !== e ? e.querySelectorAll(t) : null;
    },
    insertAfter: function (e, t) {
      return t.parentNode.insertBefore(e, t.nextSibling);
    },
    parents: function (e, t) {
      for (var n = []; e && e !== document; e = e.parentNode)
        t ? e.matches(t) && n.push(e) : n.push(e);
      return n;
    },
    children: function (e, t, n) {
      if (!e || !e.childNodes) return null;
      for (var i = [], r = 0, o = e.childNodes.length; r < o; ++r)
        1 == e.childNodes[r].nodeType &&
          AlitaUtil.matches(e.childNodes[r], t, n) &&
          i.push(e.childNodes[r]);
      return i;
    },
    child: function (e, t, n) {
      var i = AlitaUtil.children(e, t, n);
      return i ? i[0] : null;
    },
    matches: function (e, t, n) {
      var i = Element.prototype,
        r =
          i.matches ||
          i.webkitMatchesSelector ||
          i.mozMatchesSelector ||
          i.msMatchesSelector ||
          function (e) {
            return -1 !== [].indexOf.call(document.querySelectorAll(e), this);
          };
      return !(!e || !e.tagName) && r.call(e, t);
    },
    data: function (e) {
      return {
        set: function (t, n) {
          e &&
            (void 0 === e.customDataTag &&
              (window.AlitaUtilElementDataStoreID++,
              (e.customDataTag = window.AlitaUtilElementDataStoreID)),
            void 0 === window.AlitaUtilElementDataStore[e.customDataTag] &&
              (window.AlitaUtilElementDataStore[e.customDataTag] = {}),
            (window.AlitaUtilElementDataStore[e.customDataTag][t] = n));
        },
        get: function (t) {
          if (e)
            return void 0 === e.customDataTag
              ? null
              : this.has(t)
              ? window.AlitaUtilElementDataStore[e.customDataTag][t]
              : null;
        },
        has: function (t) {
          return (
            !!e &&
            void 0 !== e.customDataTag &&
            !(
              !window.AlitaUtilElementDataStore[e.customDataTag] ||
              !window.AlitaUtilElementDataStore[e.customDataTag][t]
            )
          );
        },
        remove: function (t) {
          e &&
            this.has(t) &&
            delete window.AlitaUtilElementDataStore[e.customDataTag][t];
        },
      };
    },
    outerWidth: function (e, t) {
      var n;
      return !0 === t
        ? ((n = parseFloat(e.offsetWidth)),
          (n +=
            parseFloat(AlitaUtil.css(e, "margin-left")) +
            parseFloat(AlitaUtil.css(e, "margin-right"))),
          parseFloat(n))
        : (n = parseFloat(e.offsetWidth));
    },
    offset: function (e) {
      var t, n;
      if (e)
        return e.getClientRects().length
          ? ((t = e.getBoundingClientRect()),
            (n = e.ownerDocument.defaultView),
            {
              top: t.top + n.pageYOffset,
              left: t.left + n.pageXOffset,
              right: window.innerWidth - (e.offsetLeft + e.offsetWidth),
            })
          : { top: 0, left: 0 };
    },
    height: function (e) {
      return AlitaUtil.css(e, "height");
    },
    outerHeight: function (e, t) {
      var n,
        i = e.offsetHeight;
      return void 0 !== t && !0 === t
        ? ((n = getComputedStyle(e)),
          (i += parseInt(n.marginTop) + parseInt(n.marginBottom)))
        : i;
    },
    visible: function (e) {
      return !(0 === e.offsetWidth && 0 === e.offsetHeight);
    },
    isVisibleInContainer: function (e, t, n = 0) {
      const i = e.offsetTop,
        r = i + e.clientHeight + n,
        o = t.scrollTop,
        a = o + t.clientHeight;
      return i >= o && r <= a;
    },
    getRelativeTopPosition: function (e, t) {
      return e.offsetTop - t.offsetTop;
    },
    attr: function (e, t, n) {
      if (null != e)
        return void 0 === n ? e.getAttribute(t) : void e.setAttribute(t, n);
    },
    hasAttr: function (e, t) {
      if (null != e) return !!e.getAttribute(t);
    },
    removeAttr: function (e, t) {
      null != e && e.removeAttribute(t);
    },
    animate: function (e, t, n, i, r, o) {
      var a = {};
      if (
        ((a.linear = function (e, t, n, i) {
          return (n * e) / i + t;
        }),
        (r = a.linear),
        "number" == typeof e &&
          "number" == typeof t &&
          "number" == typeof n &&
          "function" == typeof i)
      ) {
        "function" != typeof o && (o = function () {});
        var l =
            window.requestAnimationFrame ||
            function (e) {
              window.setTimeout(e, 20);
            },
          s = t - e;
        i(e);
        var u =
          window.performance && window.performance.now
            ? window.performance.now()
            : +new Date();
        l(function a(d) {
          var c = (d || +new Date()) - u;
          c >= 0 && i(r(c, e, s, n)), c >= 0 && c >= n ? (i(t), o()) : l(a);
        });
      }
    },
    actualCss: function (e, t, n) {
      var i,
        r = "";
      if (e instanceof HTMLElement != !1)
        return e.getAttribute("alita-hidden-" + t) && !1 !== n
          ? parseFloat(e.getAttribute("alita-hidden-" + t))
          : ((r = e.style.cssText),
            (e.style.cssText =
              "position: absolute; visibility: hidden; display: block;"),
            "width" == t
              ? (i = e.offsetWidth)
              : "height" == t && (i = e.offsetHeight),
            (e.style.cssText = r),
            e.setAttribute("alita-hidden-" + t, i),
            parseFloat(i));
    },
    actualHeight: function (e, t) {
      return AlitaUtil.actualCss(e, "height", t);
    },
    actualWidth: function (e, t) {
      return AlitaUtil.actualCss(e, "width", t);
    },
    getScroll: function (e, t) {
      return (
        (t = "scroll" + t),
        e == window || e == document
          ? self["scrollTop" == t ? "pageYOffset" : "pageXOffset"] ||
            (browserSupportsBoxModel && document.documentElement[t]) ||
            document.body[t]
          : e[t]
      );
    },
    css: function (e, t, n, i) {
      if (e)
        if (void 0 !== n)
          !0 === i ? e.style.setProperty(t, n, "important") : (e.style[t] = n);
        else {
          var r = (e.ownerDocument || document).defaultView;
          if (r && r.getComputedStyle)
            return (
              (t = t.replace(/([A-Z])/g, "-$1").toLowerCase()),
              r.getComputedStyle(e, null).getPropertyValue(t)
            );
          if (e.currentStyle)
            return (
              (t = t.replace(/\-(\w)/g, function (e, t) {
                return t.toUpperCase();
              })),
              (n = e.currentStyle[t]),
              /^\d+(em|pt|%|ex)?$/i.test(n)
                ? (function (t) {
                    var n = e.style.left,
                      i = e.runtimeStyle.left;
                    return (
                      (e.runtimeStyle.left = e.currentStyle.left),
                      (e.style.left = t || 0),
                      (t = e.style.pixelLeft + "px"),
                      (e.style.left = n),
                      (e.runtimeStyle.left = i),
                      t
                    );
                  })(n)
                : n
            );
        }
    },
    slide: function (e, t, n, i, r) {
      if (
        !(
          !e ||
          ("up" == t && !1 === AlitaUtil.visible(e)) ||
          ("down" == t && !0 === AlitaUtil.visible(e))
        )
      ) {
        n = n || 600;
        var o = AlitaUtil.actualHeight(e),
          a = !1,
          l = !1;
        AlitaUtil.css(e, "padding-top") &&
          !0 !== AlitaUtil.data(e).has("slide-padding-top") &&
          AlitaUtil.data(e).set("slide-padding-top", AlitaUtil.css(e, "padding-top")),
          AlitaUtil.css(e, "padding-bottom") &&
            !0 !== AlitaUtil.data(e).has("slide-padding-bottom") &&
            AlitaUtil.data(e).set(
              "slide-padding-bottom",
              AlitaUtil.css(e, "padding-bottom")
            ),
          AlitaUtil.data(e).has("slide-padding-top") &&
            (a = parseInt(AlitaUtil.data(e).get("slide-padding-top"))),
          AlitaUtil.data(e).has("slide-padding-bottom") &&
            (l = parseInt(AlitaUtil.data(e).get("slide-padding-bottom"))),
          "up" == t
            ? ((e.style.cssText = "display: block; overflow: hidden;"),
              a &&
                AlitaUtil.animate(
                  0,
                  a,
                  n,
                  function (t) {
                    e.style.paddingTop = a - t + "px";
                  },
                  "linear"
                ),
              l &&
                AlitaUtil.animate(
                  0,
                  l,
                  n,
                  function (t) {
                    e.style.paddingBottom = l - t + "px";
                  },
                  "linear"
                ),
              AlitaUtil.animate(
                0,
                o,
                n,
                function (t) {
                  e.style.height = o - t + "px";
                },
                "linear",
                function () {
                  (e.style.height = ""),
                    (e.style.display = "none"),
                    "function" == typeof i && i();
                }
              ))
            : "down" == t &&
              ((e.style.cssText = "display: block; overflow: hidden;"),
              a &&
                AlitaUtil.animate(
                  0,
                  a,
                  n,
                  function (t) {
                    e.style.paddingTop = t + "px";
                  },
                  "linear",
                  function () {
                    e.style.paddingTop = "";
                  }
                ),
              l &&
                AlitaUtil.animate(
                  0,
                  l,
                  n,
                  function (t) {
                    e.style.paddingBottom = t + "px";
                  },
                  "linear",
                  function () {
                    e.style.paddingBottom = "";
                  }
                ),
              AlitaUtil.animate(
                0,
                o,
                n,
                function (t) {
                  e.style.height = t + "px";
                },
                "linear",
                function () {
                  (e.style.height = ""),
                    (e.style.display = ""),
                    (e.style.overflow = ""),
                    "function" == typeof i && i();
                }
              ));
      }
    },
    slideUp: function (e, t, n) {
      AlitaUtil.slide(e, "up", t, n);
    },
    slideDown: function (e, t, n) {
      AlitaUtil.slide(e, "down", t, n);
    },
    show: function (e, t) {
      void 0 !== e && (e.style.display = t || "block");
    },
    hide: function (e) {
      void 0 !== e && (e.style.display = "none");
    },
    addEvent: function (e, t, n, i) {
      null != e && e.addEventListener(t, n);
    },
    removeEvent: function (e, t, n) {
      null !== e && e.removeEventListener(t, n);
    },
    on: function (e, t, n, i) {
      if (null !== e) {
        var r = AlitaUtil.getUniqueId("event");
        return (
          (window.AlitaUtilDelegatedEventHandlers[r] = function (n) {
            for (var r = e.querySelectorAll(t), o = n.target; o && o !== e; ) {
              for (var a = 0, l = r.length; a < l; a++)
                o === r[a] && i.call(o, n);
              o = o.parentNode;
            }
          }),
          AlitaUtil.addEvent(e, n, window.AlitaUtilDelegatedEventHandlers[r]),
          r
        );
      }
    },
    off: function (e, t, n) {
      e &&
        window.AlitaUtilDelegatedEventHandlers[n] &&
        (AlitaUtil.removeEvent(e, t, window.AlitaUtilDelegatedEventHandlers[n]),
        delete window.AlitaUtilDelegatedEventHandlers[n]);
    },
    one: function (e, t, n) {
      e.addEventListener(t, function t(i) {
        return (
          i.target &&
            i.target.removeEventListener &&
            i.target.removeEventListener(i.type, t),
          e &&
            e.removeEventListener &&
            i.currentTarget.removeEventListener(i.type, t),
          n(i)
        );
      });
    },
    hash: function (e) {
      var t,
        n = 0;
      if (0 === e.length) return n;
      for (t = 0; t < e.length; t++)
        (n = (n << 5) - n + e.charCodeAt(t)), (n |= 0);
      return n;
    },
    animateClass: function (e, t, n) {
      var i,
        r = {
          animation: "animationend",
          OAnimation: "oAnimationEnd",
          MozAnimation: "mozAnimationEnd",
          WebkitAnimation: "webkitAnimationEnd",
          msAnimation: "msAnimationEnd",
        };
      for (var o in r) void 0 !== e.style[o] && (i = r[o]);
      AlitaUtil.addClass(e, t),
        AlitaUtil.one(e, i, function () {
          AlitaUtil.removeClass(e, t);
        }),
        n && AlitaUtil.one(e, i, n);
    },
    transitionEnd: function (e, t) {
      var n,
        i = {
          transition: "transitionend",
          OTransition: "oTransitionEnd",
          MozTransition: "mozTransitionEnd",
          WebkitTransition: "webkitTransitionEnd",
          msTransition: "msTransitionEnd",
        };
      for (var r in i) void 0 !== e.style[r] && (n = i[r]);
      AlitaUtil.one(e, n, t);
    },
    animationEnd: function (e, t) {
      var n,
        i = {
          animation: "animationend",
          OAnimation: "oAnimationEnd",
          MozAnimation: "mozAnimationEnd",
          WebkitAnimation: "webkitAnimationEnd",
          msAnimation: "msAnimationEnd",
        };
      for (var r in i) void 0 !== e.style[r] && (n = i[r]);
      AlitaUtil.one(e, n, t);
    },
    animateDelay: function (e, t) {
      for (
        var n = ["webkit-", "moz-", "ms-", "o-", ""], i = 0;
        i < n.length;
        i++
      )
        AlitaUtil.css(e, n[i] + "animation-delay", t);
    },
    animateDuration: function (e, t) {
      for (
        var n = ["webkit-", "moz-", "ms-", "o-", ""], i = 0;
        i < n.length;
        i++
      )
        AlitaUtil.css(e, n[i] + "animation-duration", t);
    },
    scrollTo: function (e, t, n) {
      n = n || 500;
      var i,
        r,
        o = e ? AlitaUtil.offset(e).top : 0;
      t && (o -= t),
        (i =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0),
        (r = o),
        AlitaUtil.animate(i, r, n, function (e) {
          (document.documentElement.scrollTop = e),
            (document.body.parentNode.scrollTop = e),
            (document.body.scrollTop = e);
        });
    },
    scrollTop: function (e, t) {
      AlitaUtil.scrollTo(null, e, t);
    },
    isArray: function (e) {
      return e && Array.isArray(e);
    },
    isEmpty: function (e) {
      for (var t in e) if (e.hasOwnProperty(t)) return !1;
      return !0;
    },
    numberString: function (e) {
      for (
        var t = (e += "").split("."),
          n = t[0],
          i = t.length > 1 ? "." + t[1] : "",
          r = /(\d+)(\d{3})/;
        r.test(n);

      )
        n = n.replace(r, "$1,$2");
      return n + i;
    },
    isRTL: function () {
      return "rtl" === document.querySelector("html").getAttribute("direction");
    },
    snakeToCamel: function (e) {
      return e.replace(/(\-\w)/g, function (e) {
        return e[1].toUpperCase();
      });
    },
    filterBoolean: function (e) {
      return !0 === e || "true" === e || (!1 !== e && "false" !== e && e);
    },
    setHTML: function (e, t) {
      e.innerHTML = t;
    },
    getHTML: function (e) {
      if (e) return e.innerHTML;
    },
    getDocumentHeight: function () {
      var e = document.body,
        t = document.documentElement;
      return Math.max(
        e.scrollHeight,
        e.offsetHeight,
        t.clientHeight,
        t.scrollHeight,
        t.offsetHeight
      );
    },
    getScrollTop: function () {
      return (document.scrollingElement || document.documentElement).scrollTop;
    },
    colorLighten: function (e, t) {
      const n = function (e, t) {
        let n = parseInt(e, 16) + t,
          i = n > 255 ? 255 : n;
        return (
          (i =
            i.toString(16).length > 1 ? i.toString(16) : `0${i.toString(16)}`),
          i
        );
      };
      return (
        (e = e.indexOf("#") >= 0 ? e.substring(1, e.length) : e),
        (t = parseInt((255 * t) / 100)),
        `#${n(e.substring(0, 2), t)}${n(e.substring(2, 4), t)}${n(
          e.substring(4, 6),
          t
        )}`
      );
    },
    colorDarken: function (e, t) {
      const n = function (e, t) {
        let n = parseInt(e, 16) - t,
          i = n < 0 ? 0 : n;
        return (
          (i =
            i.toString(16).length > 1 ? i.toString(16) : `0${i.toString(16)}`),
          i
        );
      };
      return (
        (e = e.indexOf("#") >= 0 ? e.substring(1, e.length) : e),
        (t = parseInt((255 * t) / 100)),
        `#${n(e.substring(0, 2), t)}${n(e.substring(2, 4), t)}${n(
          e.substring(4, 6),
          t
        )}`
      );
    },
    throttle: function (e, t, n) {
      e ||
        (e = setTimeout(function () {
          t(), (e = void 0);
        }, n));
    },
    debounce: function (e, t, n) {
      clearTimeout(e), (e = setTimeout(t, n));
    },
    parseJson: function (e) {
      if ("string" == typeof e) {
        var t = (e = e.replace(/'/g, '"')).replace(
          /(\w+:)|(\w+ :)/g,
          function (e) {
            return '"' + e.substring(0, e.length - 1) + '":';
          }
        );
        try {
          e = JSON.parse(t);
        } catch (e) {}
      }
      return e;
    },
    getResponsiveValue: function (e, t) {
      var n = this.getViewPort().width,
        i = null;
      if ("object" == typeof (e = AlitaUtil.parseJson(e))) {
        var r,
          o,
          a = -1;
        for (var l in e)
          (o =
            "default" === l
              ? 0
              : this.getBreakpoint(l)
              ? this.getBreakpoint(l)
              : parseInt(l)) <= n &&
            o > a &&
            ((r = l), (a = o));
        i = r ? e[r] : e;
      } else i = e;
      return i;
    },
    each: function (e, t) {
      return [].slice.call(e).map(t);
    },
    getSelectorMatchValue: function (e) {
      var t = null;
      if ("object" == typeof (e = AlitaUtil.parseJson(e))) {
        if (void 0 !== e.match) {
          var n = Object.keys(e.match)[0];
          (e = Object.values(e.match)[0]),
            null !== document.querySelector(n) && (t = e);
        }
      } else t = e;
      return t;
    },
    getConditionalValue: function (e) {
      e = AlitaUtil.parseJson(e);
      var t = AlitaUtil.getResponsiveValue(e);
      return (
        null !== t &&
          void 0 !== t.match &&
          (t = AlitaUtil.getSelectorMatchValue(t)),
        null === t && null !== e && void 0 !== e.default && (t = e.default),
        t
      );
    },
    getCssVariableValue: function (e) {
      var t = getComputedStyle(document.documentElement).getPropertyValue(e);
      return t && t.length > 0 && (t = t.trim()), t;
    },
    isInViewport: function (e) {
      var t = e.getBoundingClientRect();
      return (
        t.top >= 0 &&
        t.left >= 0 &&
        t.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        t.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    isPartiallyInViewport: function (e) {
      let t = e.getBoundingClientRect().left,
        n = e.getBoundingClientRect().top,
        i = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        ),
        r = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        ),
        o = e.clientWidth,
        a = e.clientHeight;
      return n < r && n + a > 0 && t < i && t + o > 0;
    },
    onDOMContentLoaded: function (e) {
      "loading" === document.readyState
        ? document.addEventListener("DOMContentLoaded", e)
        : e();
    },
    inIframe: function () {
      try {
        return window.self !== window.top;
      } catch (e) {
        return !0;
      }
    },
    isHexColor: (e) => /^#[0-9A-F]{6}$/i.test(e),
  };
})();
"undefined" != typeof module &&
  void 0 !== module.exports &&
  (module.exports = AlitaUtil);
var AlitaAppLayoutBuilder = (function () {
  var e, t, n, i, r, o, a, l, s, u;
  return {
    init: function () {
      var d, c, m;
      ((a = document.querySelector("#alita_app_engage")),
      (s = document.querySelector("#alita_app_engage_toggle_on")),
      (l = document.querySelector("#alita_app_engage_toggle_off")),
      (u = document.querySelector("#alita_app_engage_prebuilts_modal")),
      a &&
        u &&
        (null !== u &&
          "1" !== AlitaCookie.get("app_engage_prebuilts_modal_displayed") &&
          setTimeout(function () {
            new bootstrap.Modal(u).show();
            const e = new Date(Date.now() + 2592e6);
            AlitaCookie.set("app_engage_prebuilts_modal_displayed", "1", {
              expires: e,
            });
          }, 3e3),
        (function () {
          u.querySelector('[data-alita-element="selected"]');
          const e = u.querySelector('[data-alita-element="title"]'),
            t = u.querySelector('[data-alita-menu="true"]');
          AlitaUtil.on(u, "[data-alita-mode]", "click", function (n) {
            const i = this.innerText,
              r = this.getAttribute("data-alita-mode"),
              o = t.querySelector(".menu-link.active"),
              a = document.querySelector("#alita_app_engage_prebuilts_view_image"),
              l = document.querySelector("#alita_app_engage_prebuilts_view_text");
            (e.innerText = i),
              o && o.classList.remove("active"),
              this.classList.add("active"),
              "image" === r
                ? (a.classList.remove("d-none"),
                  a.classList.add("d-block"),
                  l.classList.remove("d-block"),
                  l.classList.add("d-none"))
                : (l.classList.remove("d-none"),
                  l.classList.add("d-block"),
                  a.classList.remove("d-block"),
                  a.classList.add("d-none"));
          });
        })()),
      a &&
        s &&
        l &&
        (l.addEventListener("click", function (e) {
          e.preventDefault();
          const t = new Date(Date.now() + 864e5);
          AlitaCookie.set("app_engage_hide", "1", { expires: t }),
            a.classList.add("app-engage-hide");
        }),
        s.addEventListener("click", function (e) {
          e.preventDefault(),
            AlitaCookie.remove("app_engage_hide"),
            a.classList.remove("app-engage-hide");
        })),
      (e = document.querySelector("#alita_app_layout_builder_form"))) &&
        ((n = e.getAttribute("action")),
        (t = document.querySelector("#alita_app_layout_builder_action")),
        (i = document.querySelector("#alita_app_layout_builder_preview")),
        (r = document.querySelector("#alita_app_layout_builder_export")),
        (o = document.querySelector("#alita_app_layout_builder_reset")),
        i &&
          i.addEventListener("click", function (r) {
            r.preventDefault(),
              (t.value = "preview"),
              i.setAttribute("data-alita-indicator", "on");
            var o = $(e).serialize();
            $.ajax({
              type: "POST",
              dataType: "html",
              url: n,
              data: o,
              success: function (e, t, n) {
                history.scrollRestoration &&
                  (history.scrollRestoration = "manual"),
                  location.reload();
              },
              error: function (e) {
                toastr.error(
                  "Please try it again later.",
                  "Something went wrong!",
                  {
                    timeOut: 0,
                    extendedTimeOut: 0,
                    closeButton: !0,
                    closeDuration: 0,
                  }
                );
              },
              complete: function () {
                i.removeAttribute("data-alita-indicator");
              },
            });
          }),
        r &&
          r.addEventListener("click", function (i) {
            i.preventDefault(),
              toastr.success(
                "Process has been started and it may take a while.",
                "Generating HTML!",
                {
                  timeOut: 0,
                  extendedTimeOut: 0,
                  closeButton: !0,
                  closeDuration: 0,
                }
              ),
              r.setAttribute("data-alita-indicator", "on"),
              (t.value = "export");
            var o = $(e).serialize();
            $.ajax({
              type: "POST",
              dataType: "html",
              url: n,
              data: o,
              success: function (e, t, i) {
                var o = setInterval(function () {
                  $("<iframe/>")
                    .attr({
                      src:
                        n +
                        "?layout-builder[action]=export&download=1&output=" +
                        e,
                      style: "visibility:hidden;display:none",
                    })
                    .ready(function () {
                      clearInterval(o), r.removeAttribute("data-alita-indicator");
                    })
                    .appendTo("body");
                }, 3e3);
              },
              error: function (e) {
                toastr.error(
                  "Please try it again later.",
                  "Something went wrong!",
                  {
                    timeOut: 0,
                    extendedTimeOut: 0,
                    closeButton: !0,
                    closeDuration: 0,
                  }
                ),
                  r.removeAttribute("data-alita-indicator");
              },
            });
          }),
        o &&
          o.addEventListener("click", function (i) {
            i.preventDefault(),
              o.setAttribute("data-alita-indicator", "on"),
              (t.value = "reset");
            var r = $(e).serialize();
            $.ajax({
              type: "POST",
              dataType: "html",
              url: n,
              data: r,
              success: function (e, t, n) {
                history.scrollRestoration &&
                  (history.scrollRestoration = "manual"),
                  location.reload();
              },
              error: function (e) {
                toastr.error(
                  "Please try it again later.",
                  "Something went wrong!",
                  {
                    timeOut: 0,
                    extendedTimeOut: 0,
                    closeButton: !0,
                    closeDuration: 0,
                  }
                );
              },
              complete: function () {
                o.removeAttribute("data-alita-indicator");
              },
            });
          }),
        (d = document.querySelector("#alita_layout_builder_theme_mode_light")),
        (c = document.querySelector("#alita_layout_builder_theme_mode_dark")),
        (m = document.querySelector(
          "#alita_layout_builder_theme_mode_" + AlitaThemeMode.getMode()
        )),
        d &&
          d.addEventListener("click", function () {
            (this.checked = !0),
              this.closest('[data-alita-buttons="true"]')
                .querySelector(".form-check-image.active")
                .classList.remove("active"),
              this.closest(".form-check-image").classList.add("active"),
              AlitaThemeMode.setMode("light");
          }),
        c &&
          c.addEventListener("click", function () {
            (this.checked = !0),
              this.closest('[data-alita-buttons="true"]')
                .querySelector(".form-check-image.active")
                .classList.remove("active"),
              this.closest(".form-check-image").classList.add("active"),
              AlitaThemeMode.setMode("dark");
          }),
        m &&
          (m.closest(".form-check-image").classList.add("active"),
          (m.checked = !0)));
    },
  };
})();
AlitaUtil.onDOMContentLoaded(function () {
  AlitaAppLayoutBuilder.init();
});
var AlitaLayoutSearch = (function () {
  var e,
    t,
    n,
    i,
    r,
    o,
    a,
    l,
    s,
    u,
    d,
    c,
    m = function (e) {
      setTimeout(function () {
        var i = AlitaUtil.getRandomInt(1, 3);
        t.classList.add("d-none"),
          3 === i
            ? (n.classList.add("d-none"), r.classList.remove("d-none"))
            : (n.classList.remove("d-none"), r.classList.add("d-none")),
          e.complete();
      }, 1500);
    },
    f = function (e) {
      t.classList.remove("d-none"),
        n.classList.add("d-none"),
        r.classList.add("d-none");
    };
  return {
    init: function () {
      (e = document.querySelector("#alita_header_search")) &&
        ((i = e.querySelector('[data-alita-search-element="wrapper"]')),
        e.querySelector('[data-alita-search-element="form"]'),
        (t = e.querySelector('[data-alita-search-element="main"]')),
        (n = e.querySelector('[data-alita-search-element="results"]')),
        (r = e.querySelector('[data-alita-search-element="empty"]')),
        (o = e.querySelector('[data-alita-search-element="preferences"]')),
        (a = e.querySelector('[data-alita-search-element="preferences-show"]')),
        (l = e.querySelector('[data-alita-search-element="preferences-dismiss"]')),
        (s = e.querySelector(
          '[data-alita-search-element="advanced-options-form"]'
        )),
        (u = e.querySelector(
          '[data-alita-search-element="advanced-options-form-show"]'
        )),
        (d = e.querySelector(
          '[data-alita-search-element="advanced-options-form-cancel"]'
        )),
        e.querySelector(
          '[data-alita-search-element="advanced-options-form-search"]'
        ),
        (c = new AlitaSearch(e)).on("alita.search.process", m),
        c.on("alita.search.clear", f),
        o &&
          (a &&
            a.addEventListener("click", function () {
              i.classList.add("d-none"), o.classList.remove("d-none");
            }),
          l &&
            l.addEventListener("click", function () {
              i.classList.remove("d-none"), o.classList.add("d-none");
            })),
        s &&
          (u &&
            u.addEventListener("click", function () {
              i.classList.add("d-none"), s.classList.remove("d-none");
            }),
          d &&
            d.addEventListener("click", function () {
              i.classList.remove("d-none"), s.classList.add("d-none");
            })));
    },
  };
})();
AlitaUtil.onDOMContentLoaded(function () {
  AlitaLayoutSearch.init();
});
var AlitaThemeModeUser = {
  init: function () {
    AlitaThemeMode.on("alita.thememode.change", function () {
      var e = AlitaThemeMode.getMenuMode(),
        t = AlitaThemeMode.getMode();
      console.log("user selected theme mode:" + e),
        console.log("theme mode:" + t);
    });
  },
};
AlitaUtil.onDOMContentLoaded(function () {
  AlitaThemeModeUser.init();
}),
  "undefined" != typeof module &&
    void 0 !== module.exports &&
    (module.exports = AlitaThemeModeUser);
var AlitaThemeMode = (function () {
  var e,
    t = this,
    n = function () {
      return document.documentElement.hasAttribute("data-bs-theme")
        ? document.documentElement.getAttribute("data-bs-theme")
        : null !== localStorage.getItem("data-bs-theme")
        ? localStorage.getItem("data-bs-theme")
        : "system" === r()
        ? o()
        : "light";
    },
    i = function (i, r) {
      var l = n();
      "system" === r ? o() !== i && (i = o()) : i !== r && (r = i);
      var s = e
        ? e.querySelector('[data-alita-element="mode"][data-alita-value="' + r + '"]')
        : null;
      document.documentElement.setAttribute(
        "data-alita-theme-mode-switching",
        "true"
      ),
        document.documentElement.setAttribute("data-bs-theme", i),
        setTimeout(function () {
          document.documentElement.removeAttribute(
            "data-alita-theme-mode-switching"
          );
        }, 300),
        localStorage.setItem("data-bs-theme", i),
        s && (localStorage.setItem("data-bs-theme-mode", r), a(s)),
        i !== l &&
          AlitaEventHandler.trigger(
            document.documentElement,
            "alita.thememode.change",
            t
          );
    },
    r = function () {
      if (!e) return null;
      var t = e ? e.querySelector('.active[data-alita-element="mode"]') : null;
      return t && t.getAttribute("data-alita-value")
        ? t.getAttribute("data-alita-value")
        : document.documentElement.hasAttribute("data-bs-theme-mode")
        ? document.documentElement.getAttribute("data-bs-theme-mode")
        : null !== localStorage.getItem("data-bs-theme-mode")
        ? localStorage.getItem("data-bs-theme-mode")
        : "undefined" != typeof defaultThemeMode
        ? defaultThemeMode
        : "light";
    },
    o = function () {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    },
    a = function (t) {
      var n = t.getAttribute("data-alita-value"),
        i = e.querySelector('.active[data-alita-element="mode"]');
      i && i.classList.remove("active"),
        t.classList.add("active"),
        localStorage.setItem("data-bs-theme-mode", n);
    };
  return {
    init: function () {
      (e = document.querySelector('[data-alita-element="theme-mode-menu"]')),
        i(n(), r()),
        AlitaEventHandler.trigger(
          document.documentElement,
          "alita.thememode.init",
          t
        ),
        e &&
          [].slice
            .call(e.querySelectorAll('[data-alita-element="mode"]'))
            .map(function (e) {
              e.addEventListener("click", function (t) {
                t.preventDefault();
                var n = e.getAttribute("data-alita-value"),
                  r = n;
                "system" === n && (r = o()), i(r, n);
              });
            });
    },
    getMode: function () {
      return n();
    },
    getMenuMode: function () {
      return r();
    },
    getSystemMode: function () {
      return o();
    },
    setMode: function (e) {
      return i(e);
    },
    on: function (e, t) {
      return AlitaEventHandler.on(document.documentElement, e, t);
    },
    off: function (e, t) {
      return AlitaEventHandler.off(document.documentElement, e, t);
    },
  };
})();
AlitaUtil.onDOMContentLoaded(function () {
  AlitaThemeMode.init();
}),
  "undefined" != typeof module &&
    void 0 !== module.exports &&
    (module.exports = AlitaThemeMode);
var AlitaAppSidebar = (function () {
  var e, t, n, i, r;
  return {
    init: function () {
      var o, a, l;
      ((e = document.querySelector("#alita_app_sidebar")),
      (r = document.querySelector("#alita_app_sidebar_toggle")),
      (t = document.querySelector("#alita_app_header_menu")),
      (n = document.querySelector("#alita_app_sidebar_menu_dashboards_collapse")),
      (i = document.querySelector("#alita_app_sidebar_menu_scroll")),
      null !== e) &&
        (r &&
          ((o = AlitaToggle.getInstance(r)),
          (a = AlitaMenu.getInstance(t)),
          null !== o &&
            (o.on("alita.toggle.change", function () {
              e.classList.add("animating"),
                setTimeout(function () {
                  e.classList.remove("animating");
                }, 300),
                a &&
                  (a.disable(),
                  setTimeout(function () {
                    a.enable();
                  }, 1e3));
            }),
            o.on("alita.toggle.changed", function () {
              var e = new Date(Date.now() + 2592e6);
              AlitaCookie.set(
                "sidebar_minimize_state",
                o.isEnabled() ? "on" : "off",
                { expires: e }
              );
            }))),
        i &&
          (l = i.querySelector(".menu-link.active")) &&
          !0 !== AlitaUtil.isVisibleInContainer(l, i) &&
          i.scroll({
            top: AlitaUtil.getRelativeTopPosition(l, i),
            behavior: "smooth",
          }),
        n &&
          n.addEventListener("hide.bs.collapse", (e) => {
            i.scrollTo({ top: 0, behavior: "instant" });
          }));
    },
  };
})();
AlitaUtil.onDOMContentLoaded(function () {
  AlitaAppSidebar.init();
});
var AlitaLayoutToolbar = {
  init: function () {
    document.querySelector("#alita_app_toolbar") &&
      (function () {
        var e = document.querySelector("#alita_app_toolbar_slider"),
          t = document.querySelector("#alita_app_toolbar_slider_value");
        if (e) {
          noUiSlider.create(e, {
            start: [5],
            connect: [!0, !1],
            step: 1,
            format: wNumb({ decimals: 1 }),
            range: { min: [1], max: [10] },
          }),
            e.noUiSlider.on("update", function (e, n) {
              t.innerHTML = e[n];
            });
          var n = e.querySelector(".noUi-handle");
          n.setAttribute("tabindex", 0),
            n.addEventListener("click", function () {
              this.focus();
            }),
            n.addEventListener("keydown", function (t) {
              var n = Number(e.noUiSlider.get());
              switch (t.which) {
                case 37:
                  e.noUiSlider.set(n - 1);
                  break;
                case 39:
                  e.noUiSlider.set(n + 1);
              }
            });
        }
      })();
  },
};
AlitaUtil.onDOMContentLoaded(function () {
  AlitaLayoutToolbar.init();
});
