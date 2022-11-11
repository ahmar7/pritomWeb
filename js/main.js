let hidden = document.getElementById("extras");
let svgrotate = document.getElementById("svgrotate");

let showMore = () => {
  hidden.classList.toggle("hide-it");
  svgrotate.classList.toggle("rotate-it");
};
// $(".slick-slide").slick();

// let slickSlide = document.getElementsByClassName("slick-slide");
// for (let i = 0; i < slickSlide.length; i++) {
//   const element = slickSlide[i];
//   console.log(element, "new");
// }
var Ce = Lr(Be.exports),
  Sm = Lr(vd),
  km = Lr(d0),
  xm = Lr(zr.exports),
  ie = b,
  Em = po,
  Om = ho,
  Hs = Ln,
  Cm = Lr(wm);
function Lr(e) {
  return e && e.__esModule ? e : { default: e };
} 
var Jl = function (t) {
  var n = t.centerMode ? t.slideWidth * Math.floor(t.slidesToShow / 2) : 0;
  if (t.swipeToSlide) {
    var r,
      i = t.listRef,
      o = (i.querySelectorAll && i.querySelectorAll(".slick-slide")) || [];
    if (
      (Array.from(o).every(function (u) {
        if (t.vertical) {
          if (u.offsetTop + uu(u) / 2 > t.swipeLeft * -1) return (r = u), !1;
        } else if (u.offsetLeft - n + bi(u) / 2 > t.swipeLeft * -1) return (r = u), !1;
        return !0;
      }),
      !r)
    )
      return 0;
    var a = t.rtl === !0 ? t.slideCount - t.currentSlide : t.currentSlide,
      l = Math.abs(r.dataset.index - a) || 1;
    return l;
  } else return t.slidesToScroll;
};
var Yo = function (t) {
  var n, r, i, o, a;
  t.rtl ? (a = t.slideCount - 1 - t.index) : (a = t.index),
    (i = a < 0 || a >= t.slideCount),
    t.centerMode
      ? ((o = Math.floor(t.slidesToShow / 2)),
        (r = (a - t.currentSlide) % t.slideCount === 0),
        a > t.currentSlide - o - 1 && a <= t.currentSlide + o && (n = !0))
      : (n = t.currentSlide <= a && a < t.currentSlide + t.slidesToShow);
  var l;
  t.targetSlide < 0
    ? (l = t.targetSlide + t.slideCount)
    : t.targetSlide >= t.slideCount
    ? (l = t.targetSlide - t.slideCount)
    : (l = t.targetSlide);
  var u = a === l;
  return {
    "slick-slide": !0,
    "slick-active": n,
    "slick-center": r,
    "slick-cloned": i,
    "slick-current": u,
  };
};
var Rm = (function (e) {
  Am(n, e);
  var t = zm(n);
  function n(r) {
    var i;
    Tm(this, n),
      (i = t.call(this, r)),
      X(Q(i), "listRefHandler", function (a) {
        return (i.list = a);
      }),
      X(Q(i), "trackRefHandler", function (a) {
        return (i.track = a);
      }),
      X(Q(i), "adaptHeight", function () {
        if (i.props.adaptiveHeight && i.list) {
          var a = i.list.querySelector(
            '[data-index="'.concat(i.state.currentSlide, '"]')
          );
          i.list.style.height = (0, ie.getHeight)(a) + "px";
        }
      }),
      X(Q(i), "componentDidMount", function () {
        if ((i.props.onInit && i.props.onInit(), i.props.lazyLoad)) {
          var a = (0, ie.getOnDemandLazySlides)(U(U({}, i.props), i.state));
          a.length > 0 &&
            (i.setState(function (u) {
              return { lazyLoadedList: u.lazyLoadedList.concat(a) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(a));
        }
        var l = U({ listRef: i.list, trackRef: i.track }, i.props);
        i.updateState(l, !0, function () {
          i.adaptHeight(), i.props.autoplay && i.autoPlay("update");
        }),
          i.props.lazyLoad === "progressive" &&
            (i.lazyLoadTimer = setInterval(i.progressiveLazyLoad, 1e3)),
          (i.ro = new Cm.default(function () {
            i.state.animating
              ? (i.onWindowResized(!1),
                i.callbackTimers.push(
                  setTimeout(function () {
                    return i.onWindowResized();
                  }, i.props.speed)
                ))
              : i.onWindowResized();
          })),
          i.ro.observe(i.list),
          document.querySelectorAll &&
            Array.prototype.forEach.call(
              document.querySelectorAll(".slick-slide"),
              function (u) {
                (u.onfocus = i.props.pauseOnFocus ? i.onSlideFocus : null),
                  (u.onblur = i.props.pauseOnFocus ? i.onSlideBlur : null);
              }
            ),
          window.addEventListener
            ? window.addEventListener("resize", i.onWindowResized)
            : window.attachEvent("onresize", i.onWindowResized);
      }),
      X(Q(i), "componentWillUnmount", function () {
        i.animationEndCallback && clearTimeout(i.animationEndCallback),
          i.lazyLoadTimer && clearInterval(i.lazyLoadTimer),
          i.callbackTimers.length &&
            (i.callbackTimers.forEach(function (a) {
              return clearTimeout(a);
            }),
            (i.callbackTimers = [])),
          window.addEventListener
            ? window.removeEventListener("resize", i.onWindowResized)
            : window.detachEvent("onresize", i.onWindowResized),
          i.autoplayTimer && clearInterval(i.autoplayTimer),
          i.ro.disconnect();
      }),
      X(Q(i), "componentDidUpdate", function (a) {
        if (
          (i.checkImagesLoad(),
          i.props.onReInit && i.props.onReInit(),
          i.props.lazyLoad)
        ) {
          var l = (0, ie.getOnDemandLazySlides)(U(U({}, i.props), i.state));
          l.length > 0 &&
            (i.setState(function (c) {
              return { lazyLoadedList: c.lazyLoadedList.concat(l) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(l));
        }
        i.adaptHeight();
        var u = U(U({ listRef: i.list, trackRef: i.track }, i.props), i.state),
          s = i.didPropsChange(a);
        s &&
          i.updateState(u, s, function () {
            i.state.currentSlide >=
              Ce.default.Children.count(i.props.children) &&
              i.changeSlide({
                message: "index",
                index:
                  Ce.default.Children.count(i.props.children) -
                  i.props.slidesToShow,
                currentSlide: i.state.currentSlide,
              }),
              i.props.autoplay ? i.autoPlay("update") : i.pause("paused");
          });
      }),
      X(Q(i), "onWindowResized", function (a) {
        i.debouncedResize && i.debouncedResize.cancel(),
          (i.debouncedResize = (0, km.default)(function () {
            return i.resizeWindow(a);
          }, 50)),
          i.debouncedResize();
      }),
      X(Q(i), "resizeWindow", function () {
        var a =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
          l = Boolean(i.track && i.track.node);
        if (!!l) {
          var u = U(
            U({ listRef: i.list, trackRef: i.track }, i.props),
            i.state
          );
          i.updateState(u, a, function () {
            i.props.autoplay ? i.autoPlay("update") : i.pause("paused");
          }),
            i.setState({ animating: !1 }),
            clearTimeout(i.animationEndCallback),
            delete i.animationEndCallback;
        }
      }),
      X(Q(i), "updateState", function (a, l, u) {
        var s = (0, ie.initializedState)(a);
        a = U(U(U({}, a), s), {}, { slideIndex: s.currentSlide });
        var c = (0, ie.getTrackLeft)(a);
        a = U(U({}, a), {}, { left: c });
        var d = (0, ie.getTrackCSS)(a);
        (l ||
          Ce.default.Children.count(i.props.children) !==
            Ce.default.Children.count(a.children)) &&
          (s.trackStyle = d),
          i.setState(s, u);
      }),
      X(Q(i), "ssrInit", function () {
        if (i.props.variableWidth) {
          var a = 0,
            l = 0,
            u = [],
            s = (0, ie.getPreClones)(
              U(
                U(U({}, i.props), i.state),
                {},
                { slideCount: i.props.children.length }
              )
            ),
            c = (0, ie.getPostClones)(
              U(
                U(U({}, i.props), i.state),
                {},
                { slideCount: i.props.children.length }
              )
            );
          i.props.children.forEach(function (E) {
            u.push(E.props.style.width), (a += E.props.style.width);
          });
          for (var d = 0; d < s; d++)
            (l += u[u.length - 1 - d]), (a += u[u.length - 1 - d]);
          for (var p = 0; p < c; p++) a += u[p];
          for (var h = 0; h < i.state.currentSlide; h++) l += u[h];
          var g = { width: a + "px", left: -l + "px" };
          if (i.props.centerMode) {
            var y = "".concat(u[i.state.currentSlide], "px");
            g.left = "calc("
              .concat(g.left, " + (100% - ")
              .concat(y, ") / 2 ) ");
          }
          return { trackStyle: g };
        }
        var x = Ce.default.Children.count(i.props.children),
          v = U(U(U({}, i.props), i.state), {}, { slideCount: x }),
          f = (0, ie.getPreClones)(v) + (0, ie.getPostClones)(v) + x,
          m = (100 / i.props.slidesToShow) * f,
          w = 100 / f,
          O = (-w * ((0, ie.getPreClones)(v) + i.state.currentSlide) * m) / 100;
        i.props.centerMode && (O += (100 - (w * m) / 100) / 2);
        var k = { width: m + "%", left: O + "%" };
        return { slideWidth: w + "%", trackStyle: k };
      }),
      X(Q(i), "checkImagesLoad", function () {
        var a =
            (i.list &&
              i.list.querySelectorAll &&
              i.list.querySelectorAll(".slick-slide img")) ||
            [],
          l = a.length,
          u = 0;
        Array.prototype.forEach.call(a, function (s) {
          var c = function () {
            return ++u && u >= l && i.onWindowResized();
          };
          if (!s.onclick)
            s.onclick = function () {
              return s.parentNode.focus();
            };
          else {
            var d = s.onclick;
            s.onclick = function () {
              d(), s.parentNode.focus();
            };
          }
          s.onload ||
            (i.props.lazyLoad
              ? (s.onload = function () {
                  i.adaptHeight(),
                    i.callbackTimers.push(
                      setTimeout(i.onWindowResized, i.props.speed)
                    );
                })
              : ((s.onload = c),
                (s.onerror = function () {
                  c(), i.props.onLazyLoadError && i.props.onLazyLoadError();
                })));
        });
      }),
      X(Q(i), "progressiveLazyLoad", function () {
        for (
          var a = [], l = U(U({}, i.props), i.state), u = i.state.currentSlide;
          u < i.state.slideCount + (0, ie.getPostClones)(l);
          u++
        )
          if (i.state.lazyLoadedList.indexOf(u) < 0) {
            a.push(u);
            break;
          }
        for (
          var s = i.state.currentSlide - 1;
          s >= -(0, ie.getPreClones)(l);
          s--
        )
          if (i.state.lazyLoadedList.indexOf(s) < 0) {
            a.push(s);
            break;
          }
        a.length > 0
          ? (i.setState(function (c) {
              return { lazyLoadedList: c.lazyLoadedList.concat(a) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(a))
          : i.lazyLoadTimer &&
            (clearInterval(i.lazyLoadTimer), delete i.lazyLoadTimer);
      }),
      X(Q(i), "slideHandler", function (a) {
        var l =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          u = i.props,
          s = u.asNavFor,
          c = u.beforeChange,
          d = u.onLazyLoad,
          p = u.speed,
          h = u.afterChange,
          g = i.state.currentSlide,
          y = (0, ie.slideHandler)(
            U(
              U(U({ index: a }, i.props), i.state),
              {},
              { trackRef: i.track, useCSS: i.props.useCSS && !l }
            )
          ),
          x = y.state,
          v = y.nextState;
        if (!!x) {
          c && c(g, x.currentSlide);
          var f = x.lazyLoadedList.filter(function (m) {
            return i.state.lazyLoadedList.indexOf(m) < 0;
          });
          d && f.length > 0 && d(f),
            !i.props.waitForAnimate &&
              i.animationEndCallback &&
              (clearTimeout(i.animationEndCallback),
              h && h(g),
              delete i.animationEndCallback),
            i.setState(x, function () {
              s &&
                i.asNavForIndex !== a &&
                ((i.asNavForIndex = a), s.innerSlider.slideHandler(a)),
                v &&
                  (i.animationEndCallback = setTimeout(function () {
                    var m = v.animating,
                      w = _m(v, ["animating"]);
                    i.setState(w, function () {
                      i.callbackTimers.push(
                        setTimeout(function () {
                          return i.setState({ animating: m });
                        }, 10)
                      ),
                        h && h(x.currentSlide),
                        delete i.animationEndCallback;
                    });
                  }, p));
            });
        }
      }),
      X(Q(i), "changeSlide", function (a) {
        var l =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          u = U(U({}, i.props), i.state),
          s = (0, ie.changeSlide)(u, a);
        if (
          !(s !== 0 && !s) &&
          (l === !0 ? i.slideHandler(s, l) : i.slideHandler(s),
          i.props.autoplay && i.autoPlay("update"),
          i.props.focusOnSelect)
        ) {
          var c = i.list.querySelectorAll(".slick-current");
          c[0] && c[0].focus();
        }
      }),
      X(Q(i), "clickHandler", function (a) {
        i.clickable === !1 && (a.stopPropagation(), a.preventDefault()),
          (i.clickable = !0);
      }),
      X(Q(i), "keyHandler", function (a) {
        var l = (0, ie.keyHandler)(a, i.props.accessibility, i.props.rtl);
        l !== "" && i.changeSlide({ message: l });
      }),
      X(Q(i), "selectHandler", function (a) {
        i.changeSlide(a);
      }),
      X(Q(i), "disableBodyScroll", function () {
        var a = function (u) {
          (u = u || window.event),
            u.preventDefault && u.preventDefault(),
            (u.returnValue = !1);
        };
        window.ontouchmove = a;
      }),
      X(Q(i), "enableBodyScroll", function () {
        window.ontouchmove = null;
      }),
      X(Q(i), "swipeStart", function (a) {
        i.props.verticalSwiping && i.disableBodyScroll();
        var l = (0, ie.swipeStart)(a, i.props.swipe, i.props.draggable);
        l !== "" && i.setState(l);
      }),
      X(Q(i), "swipeMove", function (a) {
        var l = (0, ie.swipeMove)(
          a,
          U(
            U(U({}, i.props), i.state),
            {},
            {
              trackRef: i.track,
              listRef: i.list,
              slideIndex: i.state.currentSlide,
            }
          )
        );
        !l || (l.swiping && (i.clickable = !1), i.setState(l));
      }),
      X(Q(i), "swipeEnd", function (a) {
        var l = (0, ie.swipeEnd)(
          a,
          U(
            U(U({}, i.props), i.state),
            {},
            {
              trackRef: i.track,
              listRef: i.list,
              slideIndex: i.state.currentSlide,
            }
          )
        );
        if (!!l) {
          var u = l.triggerSlideHandler;
          delete l.triggerSlideHandler,
            i.setState(l),
            u !== void 0 &&
              (i.slideHandler(u),
              i.props.verticalSwiping && i.enableBodyScroll());
        }
      }),
      X(Q(i), "touchEnd", function (a) {
        i.swipeEnd(a), (i.clickable = !0);
      }),
      X(Q(i), "slickPrev", function () {
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide({ message: "previous" });
          }, 0)
        );
      }),
      X(Q(i), "slickNext", function () {
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide({ message: "next" });
          }, 0)
        );
      }),
      X(Q(i), "slickGoTo", function (a) {
        var l =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (((a = Number(a)), isNaN(a))) return "";
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide(
              {
                message: "index",
                index: a,
                currentSlide: i.state.currentSlide,
              },
              l
            );
          }, 0)
        );
      }),
      X(Q(i), "play", function () {
        var a;
        if (i.props.rtl) a = i.state.currentSlide - i.props.slidesToScroll;
        else if ((0, ie.canGoNext)(U(U({}, i.props), i.state)))
          a = i.state.currentSlide + i.props.slidesToScroll;
        else return !1;
        i.slideHandler(a);
      }),
      X(Q(i), "autoPlay", function (a) {
        i.autoplayTimer && clearInterval(i.autoplayTimer);
        var l = i.state.autoplaying;
        if (a === "update") {
          if (l === "hovered" || l === "focused" || l === "paused") return;
        } else if (a === "leave") {
          if (l === "paused" || l === "focused") return;
        } else if (a === "blur" && (l === "paused" || l === "hovered")) return;
        (i.autoplayTimer = setInterval(i.play, i.props.autoplaySpeed + 50)),
          i.setState({ autoplaying: "playing" });
      }),
      X(Q(i), "pause", function (a) {
        i.autoplayTimer &&
          (clearInterval(i.autoplayTimer), (i.autoplayTimer = null));
        var l = i.state.autoplaying;
        a === "paused"
          ? i.setState({ autoplaying: "paused" })
          : a === "focused"
          ? (l === "hovered" || l === "playing") &&
            i.setState({ autoplaying: "focused" })
          : l === "playing" && i.setState({ autoplaying: "hovered" });
      }),
      X(Q(i), "onDotsOver", function () {
        return i.props.autoplay && i.pause("hovered");
      }),
      X(Q(i), "onDotsLeave", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "hovered" &&
          i.autoPlay("leave")
        );
      }),
      X(Q(i), "onTrackOver", function () {
        return i.props.autoplay && i.pause("hovered");
      }),
      X(Q(i), "onTrackLeave", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "hovered" &&
          i.autoPlay("leave")
        );
      }),
      X(Q(i), "onSlideFocus", function () {
        return i.props.autoplay && i.pause("focused");
      }),
      X(Q(i), "onSlideBlur", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "focused" &&
          i.autoPlay("blur")
        );
      }),
      X(Q(i), "render", function () {
        var a = (0, xm.default)("slick-slider", i.props.className, {
            "slick-vertical": i.props.vertical,
            "slick-initialized": !0,
          }),
          l = U(U({}, i.props), i.state),
          u = (0, ie.extractObject)(l, [
            "fade",
            "cssEase",
            "speed",
            "infinite",
            "centerMode",
            "focusOnSelect",
            "currentSlide",
            "lazyLoad",
            "lazyLoadedList",
            "rtl",
            "slideWidth",
            "slideHeight",
            "listHeight",
            "vertical",
            "slidesToShow",
            "slidesToScroll",
            "slideCount",
            "trackStyle",
            "variableWidth",
            "unslick",
            "centerPadding",
            "targetSlide",
            "useCSS",
          ]),
          s = i.props.pauseOnHover;
        u = U(
          U({}, u),
          {},
          {
            onMouseEnter: s ? i.onTrackOver : null,
            onMouseLeave: s ? i.onTrackLeave : null,
            onMouseOver: s ? i.onTrackOver : null,
            focusOnSelect:
              i.props.focusOnSelect && i.clickable ? i.selectHandler : null,
          }
        );
        var c;
        if (i.props.dots === !0 && i.state.slideCount >= i.props.slidesToShow) {
          var d = (0, ie.extractObject)(l, [
              "dotsClass",
              "slideCount",
              "slidesToShow",
              "currentSlide",
              "slidesToScroll",
              "clickHandler",
              "children",
              "customPaging",
              "infinite",
              "appendDots",
            ]),
            p = i.props.pauseOnDotsHover;
          (d = U(
            U({}, d),
            {},
            {
              clickHandler: i.changeSlide,
              onMouseEnter: p ? i.onDotsLeave : null,
              onMouseOver: p ? i.onDotsOver : null,
              onMouseLeave: p ? i.onDotsLeave : null,
            }
          )),
            (c = Ce.default.createElement(Om.Dots, d));
        }
        var h,
          g,
          y = (0, ie.extractObject)(l, [
            "infinite",
            "centerMode",
            "currentSlide",
            "slideCount",
            "slidesToShow",
            "prevArrow",
            "nextArrow",
          ]);
        (y.clickHandler = i.changeSlide),
          i.props.arrows &&
            ((h = Ce.default.createElement(Hs.PrevArrow, y)),
            (g = Ce.default.createElement(Hs.NextArrow, y)));
        var x = null;
        i.props.vertical && (x = { height: i.state.listHeight });
        var v = null;
        i.props.vertical === !1
          ? i.props.centerMode === !0 &&
            (v = { padding: "0px " + i.props.centerPadding })
          : i.props.centerMode === !0 &&
            (v = { padding: i.props.centerPadding + " 0px" });
        var f = U(U({}, x), v),
          m = i.props.touchMove,
          w = {
            className: "slick-list",
            style: f,
            onClick: i.clickHandler,
            onMouseDown: m ? i.swipeStart : null,
            onMouseMove: i.state.dragging && m ? i.swipeMove : null,
            onMouseUp: m ? i.swipeEnd : null,
            onMouseLeave: i.state.dragging && m ? i.swipeEnd : null,
            onTouchStart: m ? i.swipeStart : null,
            onTouchMove: i.state.dragging && m ? i.swipeMove : null,
            onTouchEnd: m ? i.touchEnd : null,
            onTouchCancel: i.state.dragging && m ? i.swipeEnd : null,
            onKeyDown: i.props.accessibility ? i.keyHandler : null,
          },
          O = { className: a, dir: "ltr", style: i.props.style };
        return (
          i.props.unslick &&
            ((w = { className: "slick-list" }), (O = { className: a })),
          Ce.default.createElement(
            "div",
            O,
            i.props.unslick ? "" : h,
            Ce.default.createElement(
              "div",
              Qi({ ref: i.listRefHandler }, w),
              Ce.default.createElement(
                Em.Track,
                Qi({ ref: i.trackRefHandler }, u),
                i.props.children
              )
            ),
            i.props.unslick ? "" : g,
            i.props.unslick ? "" : c
          )
        );
      }),
      (i.list = null),
      (i.track = null),
      (i.state = U(
        U({}, Sm.default),
        {},
        {
          currentSlide: i.props.initialSlide,
          slideCount: Ce.default.Children.count(i.props.children),
        }
      )),
      (i.callbackTimers = []),
      (i.clickable = !0),
      (i.debouncedResize = null);
    var o = i.ssrInit();
    return (i.state = U(U({}, i.state), o)), i;
  }
  return (
    Nm(n, [
      {
        key: "didPropsChange",
        value: function (i) {
          for (
            var o = !1, a = 0, l = Object.keys(this.props);
            a < l.length;
            a++
          ) {
            var u = l[a];
            if (!i.hasOwnProperty(u)) {
              o = !0;
              break;
            }
            if (
              !(Wi(i[u]) === "object" || typeof i[u] == "function") &&
              i[u] !== this.props[u]
            ) {
              o = !0;
              break;
            }
          }
          return (
            o ||
            Ce.default.Children.count(this.props.children) !==
              Ce.default.Children.count(i.children)
          );
        },
      },
    ]),
    n
  );
})(Ce.default.Component);
co.InnerSlider = Rm;
