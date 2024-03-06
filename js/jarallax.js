/*!
 * Jarallax v2.0.3 (https://github.com/nk-o/jarallax)
 * Copyright 2022 nK <https://nkdev.info>
 * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).jarallax =
        t());
})(this, function () {
  "use strict";
  function e(e) {
    "complete" === document.readyState || "interactive" === document.readyState
      ? e()
      : document.addEventListener("DOMContentLoaded", e, {
          capture: !0,
          once: !0,
          passive: !0,
        });
  }
  let t;
  t =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
  var i = t;
  const { navigator: o } = i,
    n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      o.userAgent
    );
  let a, s;
  function l() {
    n
      ? (!a &&
          document.body &&
          ((a = document.createElement("div")),
          (a.style.cssText =
            "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;"),
          document.body.appendChild(a)),
        (s =
          (a ? a.clientHeight : 0) ||
          i.innerHeight ||
          document.documentElement.clientHeight))
      : (s = i.innerHeight || document.documentElement.clientHeight);
  }
  l(),
    i.addEventListener("resize", l),
    i.addEventListener("orientationchange", l),
    i.addEventListener("load", l),
    e(() => {
      l();
    });
  const r = [];
  function m() {
    r.length &&
      (r.forEach((e, t) => {
        const { instance: o, oldData: n } = e,
          a = o.$item.getBoundingClientRect(),
          l = {
            width: a.width,
            height: a.height,
            top: a.top,
            bottom: a.bottom,
            wndW: i.innerWidth,
            wndH: s,
          },
          m =
            !n ||
            n.wndW !== l.wndW ||
            n.wndH !== l.wndH ||
            n.width !== l.width ||
            n.height !== l.height,
          c = m || !n || n.top !== l.top || n.bottom !== l.bottom;
        (r[t].oldData = l), m && o.onResize(), c && o.onScroll();
      }),
      i.requestAnimationFrame(m));
  }
  let c = 0;
  class p {
    constructor(e, t) {
      const i = this;
      (i.instanceID = c),
        (c += 1),
        (i.$item = e),
        (i.defaults = {
          type: "scroll",
          speed: 0.5,
          imgSrc: null,
          imgElement: ".jarallax-img",
          imgSize: "cover",
          imgPosition: "50% 50%",
          imgRepeat: "no-repeat",
          keepImg: !1,
          elementInViewport: null,
          zIndex: -100,
          disableParallax: !1,
          disableVideo: !1,
          videoSrc: null,
          videoStartTime: 0,
          videoEndTime: 0,
          videoVolume: 0,
          videoLoop: !0,
          videoPlayOnlyVisible: !0,
          videoLazyLoading: !0,
          onScroll: null,
          onInit: null,
          onDestroy: null,
          onCoverImage: null,
        });
      const n = i.$item.dataset || {},
        a = {};
      if (
        (Object.keys(n).forEach((e) => {
          const t = e.substr(0, 1).toLowerCase() + e.substr(1);
          t && void 0 !== i.defaults[t] && (a[t] = n[e]);
        }),
        (i.options = i.extend({}, i.defaults, a, t)),
        (i.pureOptions = i.extend({}, i.options)),
        Object.keys(i.options).forEach((e) => {
          "true" === i.options[e]
            ? (i.options[e] = !0)
            : "false" === i.options[e] && (i.options[e] = !1);
        }),
        (i.options.speed = Math.min(
          2,
          Math.max(-1, parseFloat(i.options.speed))
        )),
        "string" == typeof i.options.disableParallax &&
          (i.options.disableParallax = new RegExp(i.options.disableParallax)),
        i.options.disableParallax instanceof RegExp)
      ) {
        const e = i.options.disableParallax;
        i.options.disableParallax = () => e.test(o.userAgent);
      }
      if (
        ("function" != typeof i.options.disableParallax &&
          (i.options.disableParallax = () => !1),
        "string" == typeof i.options.disableVideo &&
          (i.options.disableVideo = new RegExp(i.options.disableVideo)),
        i.options.disableVideo instanceof RegExp)
      ) {
        const e = i.options.disableVideo;
        i.options.disableVideo = () => e.test(o.userAgent);
      }
      "function" != typeof i.options.disableVideo &&
        (i.options.disableVideo = () => !1);
      let s = i.options.elementInViewport;
      s && "object" == typeof s && void 0 !== s.length && ([s] = s),
        s instanceof Element || (s = null),
        (i.options.elementInViewport = s),
        (i.image = {
          src: i.options.imgSrc || null,
          $container: null,
          useImgTag: !1,
          position: "fixed",
        }),
        i.initImg() && i.canInitParallax() && i.init();
    }
    css(e, t) {
      return "string" == typeof t
        ? i.getComputedStyle(e).getPropertyValue(t)
        : (Object.keys(t).forEach((i) => {
            e.style[i] = t[i];
          }),
          e);
    }
    extend(e, ...t) {
      return (
        (e = e || {}),
        Object.keys(t).forEach((i) => {
          t[i] &&
            Object.keys(t[i]).forEach((o) => {
              e[o] = t[i][o];
            });
        }),
        e
      );
    }
    getWindowData() {
      return {
        width: i.innerWidth || document.documentElement.clientWidth,
        height: s,
        y: document.documentElement.scrollTop,
      };
    }
    initImg() {
      const e = this;
      let t = e.options.imgElement;
      return (
        t && "string" == typeof t && (t = e.$item.querySelector(t)),
        t instanceof Element ||
          (e.options.imgSrc
            ? ((t = new Image()), (t.src = e.options.imgSrc))
            : (t = null)),
        t &&
          (e.options.keepImg
            ? (e.image.$item = t.cloneNode(!0))
            : ((e.image.$item = t), (e.image.$itemParent = t.parentNode)),
          (e.image.useImgTag = !0)),
        !!e.image.$item ||
          (null === e.image.src &&
            ((e.image.src =
              "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
            (e.image.bgImage = e.css(e.$item, "background-image"))),
          !(!e.image.bgImage || "none" === e.image.bgImage))
      );
    }
    canInitParallax() {
      return !this.options.disableParallax();
    }
    init() {
      const e = this,
        t = {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        };
      let o = {
        pointerEvents: "none",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        willChange: "transform,opacity",
      };
      if (!e.options.keepImg) {
        const t = e.$item.getAttribute("style");
        if (
          (t && e.$item.setAttribute("data-jarallax-original-styles", t),
          e.image.useImgTag)
        ) {
          const t = e.image.$item.getAttribute("style");
          t && e.image.$item.setAttribute("data-jarallax-original-styles", t);
        }
      }
      if (
        ("static" === e.css(e.$item, "position") &&
          e.css(e.$item, { position: "relative" }),
        "auto" === e.css(e.$item, "z-index") && e.css(e.$item, { zIndex: 0 }),
        (e.image.$container = document.createElement("div")),
        e.css(e.image.$container, t),
        e.css(e.image.$container, { "z-index": e.options.zIndex }),
        "fixed" === this.image.position &&
          e.css(e.image.$container, {
            "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }),
        e.image.$container.setAttribute(
          "id",
          `jarallax-container-${e.instanceID}`
        ),
        e.$item.appendChild(e.image.$container),
        e.image.useImgTag
          ? (o = e.extend(
              {
                "object-fit": e.options.imgSize,
                "object-position": e.options.imgPosition,
                "max-width": "none",
              },
              t,
              o
            ))
          : ((e.image.$item = document.createElement("div")),
            e.image.src &&
              (o = e.extend(
                {
                  "background-position": e.options.imgPosition,
                  "background-size": e.options.imgSize,
                  "background-repeat": e.options.imgRepeat,
                  "background-image":
                    e.image.bgImage || `url("${e.image.src}")`,
                },
                t,
                o
              ))),
        ("opacity" !== e.options.type &&
          "scale" !== e.options.type &&
          "scale-opacity" !== e.options.type &&
          1 !== e.options.speed) ||
          (e.image.position = "absolute"),
        "fixed" === e.image.position)
      ) {
        const t = (function (e) {
          const t = [];
          for (; null !== e.parentElement; )
            1 === (e = e.parentElement).nodeType && t.push(e);
          return t;
        })(e.$item).filter((e) => {
          const t = i.getComputedStyle(e),
            o = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
          return (
            (o && "none" !== o) ||
            /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
          );
        });
        e.image.position = t.length ? "absolute" : "fixed";
      }
      (o.position = e.image.position),
        e.css(e.image.$item, o),
        e.image.$container.appendChild(e.image.$item),
        e.onResize(),
        e.onScroll(!0),
        e.options.onInit && e.options.onInit.call(e),
        "none" !== e.css(e.$item, "background-image") &&
          e.css(e.$item, { "background-image": "none" }),
        e.addToParallaxList();
    }
    addToParallaxList() {
      r.push({ instance: this }), 1 === r.length && i.requestAnimationFrame(m);
    }
    removeFromParallaxList() {
      const e = this;
      r.forEach((t, i) => {
        t.instance.instanceID === e.instanceID && r.splice(i, 1);
      });
    }
    destroy() {
      const e = this;
      e.removeFromParallaxList();
      const t = e.$item.getAttribute("data-jarallax-original-styles");
      if (
        (e.$item.removeAttribute("data-jarallax-original-styles"),
        t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"),
        e.image.useImgTag)
      ) {
        const i = e.image.$item.getAttribute("data-jarallax-original-styles");
        e.image.$item.removeAttribute("data-jarallax-original-styles"),
          i
            ? e.image.$item.setAttribute("style", t)
            : e.image.$item.removeAttribute("style"),
          e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item);
      }
      e.image.$container &&
        e.image.$container.parentNode.removeChild(e.image.$container),
        e.options.onDestroy && e.options.onDestroy.call(e),
        delete e.$item.jarallax;
    }
    clipContainer() {}
    coverImage() {
      const e = this,
        t = e.image.$container.getBoundingClientRect(),
        i = t.height,
        { speed: o } = e.options,
        n = "scroll" === e.options.type || "scroll-opacity" === e.options.type;
      let a = 0,
        l = i,
        r = 0;
      return (
        n &&
          (0 > o
            ? ((a = o * Math.max(i, s)), s < i && (a -= o * (i - s)))
            : (a = o * (i + s)),
          1 < o
            ? (l = Math.abs(a - s))
            : 0 > o
            ? (l = a / o + Math.abs(a))
            : (l += (s - i) * (1 - o)),
          (a /= 2)),
        (e.parallaxScrollDistance = a),
        (r = n ? (s - l) / 2 : (i - l) / 2),
        e.css(e.image.$item, {
          height: `${l}px`,
          marginTop: `${r}px`,
          left: "fixed" === e.image.position ? `${t.left}px` : "0",
          width: `${t.width}px`,
        }),
        e.options.onCoverImage && e.options.onCoverImage.call(e),
        { image: { height: l, marginTop: r }, container: t }
      );
    }
    isVisible() {
      return this.isElementInViewport || !1;
    }
    onScroll(e) {
      const t = this,
        o = t.$item.getBoundingClientRect(),
        n = o.top,
        a = o.height,
        l = {};
      let r = o;
      if (
        (t.options.elementInViewport &&
          (r = t.options.elementInViewport.getBoundingClientRect()),
        (t.isElementInViewport =
          0 <= r.bottom &&
          0 <= r.right &&
          r.top <= s &&
          r.left <= i.innerWidth),
        !e && !t.isElementInViewport)
      )
        return;
      const m = Math.max(0, n),
        c = Math.max(0, a + n),
        p = Math.max(0, -n),
        d = Math.max(0, n + a - s),
        g = Math.max(0, a - (n + a - s)),
        u = Math.max(0, -n + s - a),
        f = 1 - ((s - n) / (s + a)) * 2;
      let h = 1;
      if (
        (a < s
          ? (h = 1 - (p || d) / a)
          : c <= s
          ? (h = c / s)
          : g <= s && (h = g / s),
        ("opacity" !== t.options.type &&
          "scale-opacity" !== t.options.type &&
          "scroll-opacity" !== t.options.type) ||
          ((l.transform = "translate3d(0,0,0)"), (l.opacity = h)),
        "scale" === t.options.type || "scale-opacity" === t.options.type)
      ) {
        let e = 1;
        0 > t.options.speed
          ? (e -= t.options.speed * h)
          : (e += t.options.speed * (1 - h)),
          (l.transform = `scale(${e}) translate3d(0,0,0)`);
      }
      if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
        let e = t.parallaxScrollDistance * f;
        "absolute" === t.image.position && (e -= n),
          (l.transform = `translate3d(0,${e}px,0)`);
      }
      t.css(t.image.$item, l),
        t.options.onScroll &&
          t.options.onScroll.call(t, {
            section: o,
            beforeTop: m,
            beforeTopEnd: c,
            afterTop: p,
            beforeBottom: d,
            beforeBottomEnd: g,
            afterBottom: u,
            visiblePercent: h,
            fromViewportCenter: f,
          });
    }
    onResize() {
      this.coverImage();
    }
  }
  const d = function (e, t, ...i) {
    ("object" == typeof HTMLElement
      ? e instanceof HTMLElement
      : e &&
        "object" == typeof e &&
        null !== e &&
        1 === e.nodeType &&
        "string" == typeof e.nodeName) && (e = [e]);
    const o = e.length;
    let n,
      a = 0;
    for (; a < o; a += 1)
      if (
        ("object" == typeof t || void 0 === t
          ? e[a].jarallax || (e[a].jarallax = new p(e[a], t))
          : e[a].jarallax && (n = e[a].jarallax[t].apply(e[a].jarallax, i)),
        void 0 !== n)
      )
        return n;
    return e;
  };
  d.constructor = p;
  const g = i.jQuery;
  if (void 0 !== g) {
    const e = function (...e) {
      Array.prototype.unshift.call(e, this);
      const t = d.apply(i, e);
      return "object" != typeof t ? t : this;
    };
    e.constructor = d.constructor;
    const t = g.fn.jarallax;
    (g.fn.jarallax = e),
      (g.fn.jarallax.noConflict = function () {
        return (g.fn.jarallax = t), this;
      });
  }
  return (
    e(() => {
      d(document.querySelectorAll("[data-jarallax]"));
    }),
    d
  );
});

/*!
 * Video Extension for Jarallax v2.0.3 (https://github.com/nk-o/jarallax)
 * Copyright 2022 nK <https://nkdev.info>
 * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).jarallaxVideo = t());
})(this, function () {
  "use strict";
  /*!
   * Name    : Video Worker
   * Version : 2.0.0
   * Author  : nK <https://nkdev.info>
   * GitHub  : https://github.com/nk-o/video-worker
   */ let e;
  e =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
  var t = e;
  function o() {
    (this.doneCallbacks = []), (this.failCallbacks = []);
  }
  o.prototype = {
    execute(e, t) {
      let o = e.length;
      for (t = Array.prototype.slice.call(t); o; )
        (o -= 1), e[o].apply(null, t);
    },
    resolve(...e) {
      this.execute(this.doneCallbacks, e);
    },
    reject(...e) {
      this.execute(this.failCallbacks, e);
    },
    done(e) {
      this.doneCallbacks.push(e);
    },
    fail(e) {
      this.failCallbacks.push(e);
    },
  };
  let i = 0,
    a = 0,
    n = 0,
    s = 0,
    l = 0;
  const r = new o(),
    p = new o();
  class d {
    constructor(e, t) {
      const o = this;
      (o.url = e),
        (o.options_default = {
          autoplay: !1,
          loop: !1,
          mute: !1,
          volume: 100,
          showControls: !0,
          accessibilityHidden: !1,
          startTime: 0,
          endTime: 0,
        }),
        (o.options = o.extend({}, o.options_default, t)),
        void 0 !== o.options.showContols &&
          ((o.options.showControls = o.options.showContols),
          delete o.options.showContols),
        (o.videoID = o.parseURL(e)),
        o.videoID && ((o.ID = i), (i += 1), o.loadAPI(), o.init());
    }
    extend(...e) {
      const t = e[0] || {};
      return (
        Object.keys(e).forEach((o) => {
          e[o] &&
            Object.keys(e[o]).forEach((i) => {
              t[i] = e[o][i];
            });
        }),
        t
      );
    }
    parseURL(e) {
      const t = (function (e) {
          const t = e.match(
            /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/
          );
          return !(!t || 11 !== t[1].length) && t[1];
        })(e),
        o = (function (e) {
          const t = e.match(
            /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/
          );
          return !(!t || !t[3]) && t[3];
        })(e),
        i = (function (e) {
          const t = e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),
            o = {};
          let i = 0;
          return (
            t.forEach((e) => {
              const t = e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
              t &&
                t[1] &&
                t[2] &&
                ((o["ogv" === t[1] ? "ogg" : t[1]] = t[2]), (i = 1));
            }),
            !!i && o
          );
        })(e);
      return t
        ? ((this.type = "youtube"), t)
        : o
        ? ((this.type = "vimeo"), o)
        : !!i && ((this.type = "local"), i);
    }
    isValid() {
      return !!this.videoID;
    }
    on(e, t) {
      (this.userEventsList = this.userEventsList || []),
        (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t);
    }
    off(e, t) {
      this.userEventsList &&
        this.userEventsList[e] &&
        (t
          ? this.userEventsList[e].forEach((o, i) => {
              o === t && (this.userEventsList[e][i] = !1);
            })
          : delete this.userEventsList[e]);
    }
    fire(e, ...t) {
      this.userEventsList &&
        void 0 !== this.userEventsList[e] &&
        this.userEventsList[e].forEach((e) => {
          e && e.apply(this, t);
        });
    }
    play(e) {
      const o = this;
      o.player &&
        ("youtube" === o.type &&
          o.player.playVideo &&
          (void 0 !== e && o.player.seekTo(e || 0),
          t.YT.PlayerState.PLAYING !== o.player.getPlayerState() &&
            o.player.playVideo()),
        "vimeo" === o.type &&
          (void 0 !== e && o.player.setCurrentTime(e),
          o.player.getPaused().then((e) => {
            e && o.player.play();
          })),
        "local" === o.type &&
          (void 0 !== e && (o.player.currentTime = e),
          o.player.paused && o.player.play()));
    }
    pause() {
      const e = this;
      e.player &&
        ("youtube" === e.type &&
          e.player.pauseVideo &&
          t.YT.PlayerState.PLAYING === e.player.getPlayerState() &&
          e.player.pauseVideo(),
        "vimeo" === e.type &&
          e.player.getPaused().then((t) => {
            t || e.player.pause();
          }),
        "local" === e.type && (e.player.paused || e.player.pause()));
    }
    mute() {
      const e = this;
      e.player &&
        ("youtube" === e.type && e.player.mute && e.player.mute(),
        "vimeo" === e.type && e.player.setVolume && e.player.setVolume(0),
        "local" === e.type && (e.$video.muted = !0));
    }
    unmute() {
      const e = this;
      e.player &&
        ("youtube" === e.type && e.player.mute && e.player.unMute(),
        "vimeo" === e.type &&
          e.player.setVolume &&
          e.player.setVolume(e.options.volume),
        "local" === e.type && (e.$video.muted = !1));
    }
    setVolume(e = !1) {
      const t = this;
      t.player &&
        e &&
        ("youtube" === t.type && t.player.setVolume && t.player.setVolume(e),
        "vimeo" === t.type && t.player.setVolume && t.player.setVolume(e),
        "local" === t.type && (t.$video.volume = e / 100));
    }
    getVolume(e) {
      const t = this;
      t.player
        ? ("youtube" === t.type &&
            t.player.getVolume &&
            e(t.player.getVolume()),
          "vimeo" === t.type &&
            t.player.getVolume &&
            t.player.getVolume().then((t) => {
              e(t);
            }),
          "local" === t.type && e(100 * t.$video.volume))
        : e(!1);
    }
    getMuted(e) {
      const t = this;
      t.player
        ? ("youtube" === t.type && t.player.isMuted && e(t.player.isMuted()),
          "vimeo" === t.type &&
            t.player.getVolume &&
            t.player.getVolume().then((t) => {
              e(!!t);
            }),
          "local" === t.type && e(t.$video.muted))
        : e(null);
    }
    getImageURL(e) {
      const t = this;
      if (t.videoImage) e(t.videoImage);
      else {
        if ("youtube" === t.type) {
          const o = ["maxresdefault", "sddefault", "hqdefault", "0"];
          let i = 0;
          const a = new Image();
          (a.onload = function () {
            120 !== (this.naturalWidth || this.width) || i === o.length - 1
              ? ((t.videoImage = `https://img.youtube.com/vi/${t.videoID}/${o[i]}.jpg`),
                e(t.videoImage))
              : ((i += 1),
                (this.src = `https://img.youtube.com/vi/${t.videoID}/${o[i]}.jpg`));
          }),
            (a.src = `https://img.youtube.com/vi/${t.videoID}/${o[i]}.jpg`);
        }
        if ("vimeo" === t.type) {
          let o = new XMLHttpRequest();
          o.open("GET", `https://vimeo.com/api/oembed.json?url=${t.url}`, !0),
            (o.onreadystatechange = function () {
              if (
                4 === this.readyState &&
                this.status >= 200 &&
                this.status < 400
              ) {
                const o = JSON.parse(this.responseText);
                o.thumbnail_url &&
                  ((t.videoImage = o.thumbnail_url), e(t.videoImage));
              }
            }),
            o.send(),
            (o = null);
        }
      }
    }
    getIframe(e) {
      this.getVideo(e);
    }
    getVideo(e) {
      const o = this;
      o.$video
        ? e(o.$video)
        : o.onAPIready(() => {
            let i;
            if (
              (o.$video ||
                ((i = document.createElement("div")),
                (i.style.display = "none")),
              "youtube" === o.type)
            ) {
              let e, a;
              (o.playerOptions = {
                host: "https://www.youtube-nocookie.com",
                videoId: o.videoID,
                playerVars: {
                  autohide: 1,
                  rel: 0,
                  autoplay: 0,
                  playsinline: 1,
                },
              }),
                o.options.showControls ||
                  ((o.playerOptions.playerVars.iv_load_policy = 3),
                  (o.playerOptions.playerVars.modestbranding = 1),
                  (o.playerOptions.playerVars.controls = 0),
                  (o.playerOptions.playerVars.showinfo = 0),
                  (o.playerOptions.playerVars.disablekb = 1)),
                (o.playerOptions.events = {
                  onReady(e) {
                    if (
                      (o.options.mute
                        ? e.target.mute()
                        : o.options.volume &&
                          e.target.setVolume(o.options.volume),
                      o.options.autoplay && o.play(o.options.startTime),
                      o.fire("ready", e),
                      o.options.loop && !o.options.endTime)
                    ) {
                      const e = 0.1;
                      o.options.endTime = o.player.getDuration() - e;
                    }
                    setInterval(() => {
                      o.getVolume((t) => {
                        o.options.volume !== t &&
                          ((o.options.volume = t), o.fire("volumechange", e));
                      });
                    }, 150);
                  },
                  onStateChange(i) {
                    o.options.loop &&
                      i.data === t.YT.PlayerState.ENDED &&
                      o.play(o.options.startTime),
                      e ||
                        i.data !== t.YT.PlayerState.PLAYING ||
                        ((e = 1), o.fire("started", i)),
                      i.data === t.YT.PlayerState.PLAYING && o.fire("play", i),
                      i.data === t.YT.PlayerState.PAUSED && o.fire("pause", i),
                      i.data === t.YT.PlayerState.ENDED && o.fire("ended", i),
                      i.data === t.YT.PlayerState.PLAYING
                        ? (a = setInterval(() => {
                            o.fire("timeupdate", i),
                              o.options.endTime &&
                                o.player.getCurrentTime() >=
                                  o.options.endTime &&
                                (o.options.loop
                                  ? o.play(o.options.startTime)
                                  : o.pause());
                          }, 150))
                        : clearInterval(a);
                  },
                  onError(e) {
                    o.fire("error", e);
                  },
                });
              const n = !o.$video;
              if (n) {
                const e = document.createElement("div");
                e.setAttribute("id", o.playerID),
                  i.appendChild(e),
                  document.body.appendChild(i);
              }
              (o.player =
                o.player || new t.YT.Player(o.playerID, o.playerOptions)),
                n &&
                  ((o.$video = document.getElementById(o.playerID)),
                  o.options.accessibilityHidden &&
                    (o.$video.setAttribute("tabindex", "-1"),
                    o.$video.setAttribute("aria-hidden", "true")),
                  (o.videoWidth =
                    parseInt(o.$video.getAttribute("width"), 10) || 1280),
                  (o.videoHeight =
                    parseInt(o.$video.getAttribute("height"), 10) || 720));
            }
            if ("vimeo" === o.type) {
              if (
                ((o.playerOptions = {
                  dnt: 1,
                  id: o.videoID,
                  autopause: 0,
                  transparent: 0,
                  autoplay: o.options.autoplay ? 1 : 0,
                  loop: o.options.loop ? 1 : 0,
                  muted: o.options.mute ? 1 : 0,
                }),
                o.options.volume && (o.playerOptions.volume = o.options.volume),
                o.options.showControls ||
                  ((o.playerOptions.badge = 0),
                  (o.playerOptions.byline = 0),
                  (o.playerOptions.portrait = 0),
                  (o.playerOptions.title = 0),
                  (o.playerOptions.background = 1)),
                !o.$video)
              ) {
                let e = "";
                Object.keys(o.playerOptions).forEach((t) => {
                  "" !== e && (e += "&"),
                    (e += `${t}=${encodeURIComponent(o.playerOptions[t])}`);
                }),
                  (o.$video = document.createElement("iframe")),
                  o.$video.setAttribute("id", o.playerID),
                  o.$video.setAttribute(
                    "src",
                    `https://player.vimeo.com/video/${o.videoID}?${e}`
                  ),
                  o.$video.setAttribute("frameborder", "0"),
                  o.$video.setAttribute("mozallowfullscreen", ""),
                  o.$video.setAttribute("allowfullscreen", ""),
                  o.$video.setAttribute("title", "Vimeo video player"),
                  o.options.accessibilityHidden &&
                    (o.$video.setAttribute("tabindex", "-1"),
                    o.$video.setAttribute("aria-hidden", "true")),
                  i.appendChild(o.$video),
                  document.body.appendChild(i);
              }
              let e;
              (o.player =
                o.player || new t.Vimeo.Player(o.$video, o.playerOptions)),
                o.options.startTime &&
                  o.options.autoplay &&
                  o.player.setCurrentTime(o.options.startTime),
                o.player.getVideoWidth().then((e) => {
                  o.videoWidth = e || 1280;
                }),
                o.player.getVideoHeight().then((e) => {
                  o.videoHeight = e || 720;
                }),
                o.player.on("timeupdate", (t) => {
                  e || (o.fire("started", t), (e = 1)),
                    o.fire("timeupdate", t),
                    o.options.endTime &&
                      o.options.endTime &&
                      t.seconds >= o.options.endTime &&
                      (o.options.loop
                        ? o.play(o.options.startTime)
                        : o.pause());
                }),
                o.player.on("play", (e) => {
                  o.fire("play", e),
                    o.options.startTime &&
                      0 === e.seconds &&
                      o.play(o.options.startTime);
                }),
                o.player.on("pause", (e) => {
                  o.fire("pause", e);
                }),
                o.player.on("ended", (e) => {
                  o.fire("ended", e);
                }),
                o.player.on("loaded", (e) => {
                  o.fire("ready", e);
                }),
                o.player.on("volumechange", (e) => {
                  o.fire("volumechange", e);
                }),
                o.player.on("error", (e) => {
                  o.fire("error", e);
                });
            }
            if ("local" === o.type) {
              let e;
              o.$video ||
                ((o.$video = document.createElement("video")),
                o.options.showControls && (o.$video.controls = !0),
                o.options.mute
                  ? (o.$video.muted = !0)
                  : o.$video.volume &&
                    (o.$video.volume = o.options.volume / 100),
                o.options.loop && (o.$video.loop = !0),
                o.$video.setAttribute("playsinline", ""),
                o.$video.setAttribute("webkit-playsinline", ""),
                o.options.accessibilityHidden &&
                  (o.$video.setAttribute("tabindex", "-1"),
                  o.$video.setAttribute("aria-hidden", "true")),
                o.$video.setAttribute("id", o.playerID),
                i.appendChild(o.$video),
                document.body.appendChild(i),
                Object.keys(o.videoID).forEach((e) => {
                  !(function (e, t, o) {
                    const i = document.createElement("source");
                    (i.src = t), (i.type = o), e.appendChild(i);
                  })(o.$video, o.videoID[e], `video/${e}`);
                })),
                (o.player = o.player || o.$video),
                o.player.addEventListener("playing", (t) => {
                  e || o.fire("started", t), (e = 1);
                }),
                o.player.addEventListener("timeupdate", function (e) {
                  o.fire("timeupdate", e),
                    o.options.endTime &&
                      o.options.endTime &&
                      this.currentTime >= o.options.endTime &&
                      (o.options.loop
                        ? o.play(o.options.startTime)
                        : o.pause());
                }),
                o.player.addEventListener("play", (e) => {
                  o.fire("play", e);
                }),
                o.player.addEventListener("pause", (e) => {
                  o.fire("pause", e);
                }),
                o.player.addEventListener("ended", (e) => {
                  o.fire("ended", e);
                }),
                o.player.addEventListener("loadedmetadata", function () {
                  (o.videoWidth = this.videoWidth || 1280),
                    (o.videoHeight = this.videoHeight || 720),
                    o.fire("ready"),
                    o.options.autoplay && o.play(o.options.startTime);
                }),
                o.player.addEventListener("volumechange", (e) => {
                  o.getVolume((e) => {
                    o.options.volume = e;
                  }),
                    o.fire("volumechange", e);
                }),
                o.player.addEventListener("error", (e) => {
                  o.fire("error", e);
                });
            }
            e(o.$video);
          });
    }
    init() {
      this.playerID = `VideoWorker-${this.ID}`;
    }
    loadAPI() {
      if (a && n) return;
      let e = "";
      if (
        ("youtube" !== this.type ||
          a ||
          ((a = 1), (e = "https://www.youtube.com/iframe_api")),
        "vimeo" === this.type && !n)
      ) {
        if (((n = 1), void 0 !== t.Vimeo)) return;
        e = "https://player.vimeo.com/api/player.js";
      }
      if (!e) return;
      let o = document.createElement("script"),
        i = document.getElementsByTagName("head")[0];
      (o.src = e), i.appendChild(o), (i = null), (o = null);
    }
    onAPIready(e) {
      const o = this;
      if (
        ("youtube" === o.type &&
          ((void 0 !== t.YT && 0 !== t.YT.loaded) || s
            ? "object" == typeof t.YT && 1 === t.YT.loaded
              ? e()
              : r.done(() => {
                  e();
                })
            : ((s = 1),
              (t.onYouTubeIframeAPIReady = function () {
                (t.onYouTubeIframeAPIReady = null), r.resolve("done"), e();
              }))),
        "vimeo" === o.type)
      )
        if (void 0 !== t.Vimeo || l)
          void 0 !== t.Vimeo
            ? e()
            : p.done(() => {
                e();
              });
        else {
          l = 1;
          const o = setInterval(() => {
            void 0 !== t.Vimeo && (clearInterval(o), p.resolve("done"), e());
          }, 20);
        }
      "local" === o.type && e();
    }
  }
  let u;
  u =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
  var y,
    m = u;
  function c(e = m.jarallax) {
    if (void 0 === e) return;
    const t = e.constructor,
      o = t.prototype.onScroll;
    t.prototype.onScroll = function () {
      const e = this;
      o.apply(e);
      !e.isVideoInserted &&
        e.video &&
        (!e.options.videoLazyLoading || e.isElementInViewport) &&
        !e.options.disableVideo() &&
        ((e.isVideoInserted = !0),
        e.video.getVideo((t) => {
          const o = t.parentNode;
          e.css(t, {
            position: e.image.position,
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            width: "100%",
            height: "100%",
            maxWidth: "none",
            maxHeight: "none",
            pointerEvents: "none",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            willChange: "transform,opacity",
            margin: 0,
            zIndex: -1,
          }),
            (e.$video = t),
            "local" === e.video.type &&
              (e.image.src
                ? e.$video.setAttribute("poster", e.image.src)
                : e.image.$item &&
                  "IMG" === e.image.$item.tagName &&
                  e.image.$item.src &&
                  e.$video.setAttribute("poster", e.image.$item.src)),
            e.image.$container.appendChild(t),
            o.parentNode.removeChild(o),
            e.options.onVideoInsert && e.options.onVideoInsert.call(e);
        }));
    };
    const i = t.prototype.coverImage;
    t.prototype.coverImage = function () {
      const e = this,
        t = i.apply(e),
        o = !!e.image.$item && e.image.$item.nodeName;
      if (t && e.video && o && ("IFRAME" === o || "VIDEO" === o)) {
        let i = t.image.height,
          a = (i * e.image.width) / e.image.height,
          n = (t.container.width - a) / 2,
          s = t.image.marginTop;
        t.container.width > a &&
          ((a = t.container.width),
          (i = (a * e.image.height) / e.image.width),
          (n = 0),
          (s += (t.image.height - i) / 2)),
          "IFRAME" === o && ((i += 400), (s -= 200)),
          e.css(e.$video, {
            width: `${a}px`,
            marginLeft: `${n}px`,
            height: `${i}px`,
            marginTop: `${s}px`,
          });
      }
      return t;
    };
    const a = t.prototype.initImg;
    t.prototype.initImg = function () {
      const e = this,
        t = a.apply(e);
      return (
        e.options.videoSrc ||
          (e.options.videoSrc =
            e.$item.getAttribute("data-jarallax-video") || null),
        e.options.videoSrc ? ((e.defaultInitImgResult = t), !0) : t
      );
    };
    const n = t.prototype.canInitParallax;
    t.prototype.canInitParallax = function () {
      const e = this;
      let t = n.apply(e);
      if (!e.options.videoSrc) return t;
      const o = new d(e.options.videoSrc, {
        autoplay: !0,
        loop: e.options.videoLoop,
        showControls: !1,
        accessibilityHidden: !0,
        startTime: e.options.videoStartTime || 0,
        endTime: e.options.videoEndTime || 0,
        mute: e.options.videoVolume ? 0 : 1,
        volume: e.options.videoVolume || 0,
      });
      function i() {
        e.image.$default_item &&
          ((e.image.$item = e.image.$default_item),
          (e.image.$item.style.display = "block"),
          e.coverImage(),
          e.onScroll());
      }
      if (
        (e.options.onVideoWorkerInit && e.options.onVideoWorkerInit.call(e, o),
        o.isValid())
      )
        if (
          (this.options.disableParallax() &&
            ((t = !0),
            (e.image.position = "absolute"),
            (e.options.type = "scroll"),
            (e.options.speed = 1)),
          t)
        ) {
          if (
            (o.on("ready", () => {
              if (e.options.videoPlayOnlyVisible) {
                const t = e.onScroll;
                e.onScroll = function () {
                  t.apply(e),
                    e.videoError ||
                      (!e.options.videoLoop &&
                        (e.options.videoLoop || e.videoEnded)) ||
                      (e.isVisible() ? o.play() : o.pause());
                };
              } else o.play();
            }),
            o.on("started", () => {
              (e.image.$default_item = e.image.$item),
                (e.image.$item = e.$video),
                (e.image.width = e.video.videoWidth || 1280),
                (e.image.height = e.video.videoHeight || 720),
                e.coverImage(),
                e.onScroll(),
                e.image.$default_item &&
                  (e.image.$default_item.style.display = "none");
            }),
            o.on("ended", () => {
              (e.videoEnded = !0), e.options.videoLoop || i();
            }),
            o.on("error", () => {
              (e.videoError = !0), i();
            }),
            (e.video = o),
            !e.defaultInitImgResult &&
              ((e.image.src =
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
              "local" !== o.type))
          )
            return (
              o.getImageURL((t) => {
                (e.image.bgImage = `url("${t}")`), e.init();
              }),
              !1
            );
        } else
          e.defaultInitImgResult ||
            o.getImageURL((t) => {
              const o = e.$item.getAttribute("style");
              o && e.$item.setAttribute("data-jarallax-original-styles", o),
                e.css(e.$item, {
                  "background-image": `url("${t}")`,
                  "background-position": "center",
                  "background-size": "cover",
                });
            });
      return t;
    };
    const s = t.prototype.destroy;
    t.prototype.destroy = function () {
      const e = this;
      e.image.$default_item &&
        ((e.image.$item = e.image.$default_item), delete e.image.$default_item),
        s.apply(e);
    };
  }
  return (
    c(),
    (y = () => {
      void 0 !== m.jarallax &&
        m.jarallax(document.querySelectorAll("[data-jarallax-video]"));
    }),
    "complete" === document.readyState || "interactive" === document.readyState
      ? y()
      : document.addEventListener("DOMContentLoaded", y, {
          capture: !0,
          once: !0,
          passive: !0,
        }),
    m.VideoWorker || (m.VideoWorker = d),
    c
  );
});
