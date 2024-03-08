/*!
 * Bootstrap v5.2.2 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
        e());
})(this, function () {
  "use strict";
  const t = "transitionend",
    e = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let i = t.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (e = i && "#" !== i ? i.trim() : null);
      }
      return e;
    },
    i = (t) => {
      const i = e(t);
      return i && document.querySelector(i) ? i : null;
    },
    n = (t) => {
      const i = e(t);
      return i ? document.querySelector(i) : null;
    },
    s = (e) => {
      e.dispatchEvent(new Event(t));
    },
    o = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    r = (t) =>
      o(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && t.length > 0
        ? document.querySelector(t)
        : null,
    a = (t) => {
      if (!o(t) || 0 === t.getClientRects().length) return !1;
      const e =
          "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        i = t.closest("details:not([open])");
      if (!i) return e;
      if (i !== t) {
        const e = t.closest("summary");
        if (e && e.parentNode !== i) return !1;
        if (null === e) return !1;
      }
      return e;
    },
    l = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    c = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? c(t.parentNode)
        : null;
    },
    h = () => {},
    d = (t) => {
      t.offsetHeight;
    },
    u = () =>
      window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
        ? window.jQuery
        : null,
    f = [],
    p = () => "rtl" === document.documentElement.dir,
    g = (t) => {
      var e;
      (e = () => {
        const e = u();
        if (e) {
          const i = t.NAME,
            n = e.fn[i];
          (e.fn[i] = t.jQueryInterface),
            (e.fn[i].Constructor = t),
            (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
        }
      }),
        "loading" === document.readyState
          ? (f.length ||
              document.addEventListener("DOMContentLoaded", () => {
                for (const t of f) t();
              }),
            f.push(e))
          : e();
    },
    m = (t) => {
      "function" == typeof t && t();
    },
    _ = (e, i, n = !0) => {
      if (!n) return void m(e);
      const o =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: i } =
            window.getComputedStyle(t);
          const n = Number.parseFloat(e),
            s = Number.parseFloat(i);
          return n || s
            ? ((e = e.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
            : 0;
        })(i) + 5;
      let r = !1;
      const a = ({ target: n }) => {
        n === i && ((r = !0), i.removeEventListener(t, a), m(e));
      };
      i.addEventListener(t, a),
        setTimeout(() => {
          r || s(i);
        }, o);
    },
    b = (t, e, i, n) => {
      const s = t.length;
      let o = t.indexOf(e);
      return -1 === o
        ? !i && n
          ? t[s - 1]
          : t[0]
        : ((o += i ? 1 : -1),
          n && (o = (o + s) % s),
          t[Math.max(0, Math.min(o, s - 1))]);
    },
    v = /[^.]*(?=\..*)\.|.*/,
    y = /\..*/,
    w = /::\d+$/,
    A = {};
  let E = 1;
  const T = { mouseenter: "mouseover", mouseleave: "mouseout" },
    C = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function O(t, e) {
    return (e && `${e}::${E++}`) || t.uidEvent || E++;
  }
  function x(t) {
    const e = O(t);
    return (t.uidEvent = e), (A[e] = A[e] || {}), A[e];
  }
  function k(t, e, i = null) {
    return Object.values(t).find(
      (t) => t.callable === e && t.delegationSelector === i
    );
  }
  function L(t, e, i) {
    const n = "string" == typeof e,
      s = n ? i : e || i;
    let o = N(t);
    return C.has(o) || (o = t), [n, s, o];
  }
  function D(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    let [o, r, a] = L(e, i, n);
    if (e in T) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      r = t(r);
    }
    const l = x(t),
      c = l[a] || (l[a] = {}),
      h = k(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    const d = O(r, e.replace(v, "")),
      u = o
        ? (function (t, e, i) {
            return function n(s) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = s; r && r !== this; r = r.parentNode)
                for (const a of o)
                  if (a === r)
                    return (
                      j(s, { delegateTarget: r }),
                      n.oneOff && P.off(t, s.type, e, i),
                      i.apply(r, [s])
                    );
            };
          })(t, i, r)
        : (function (t, e) {
            return function i(n) {
              return (
                j(n, { delegateTarget: t }),
                i.oneOff && P.off(t, n.type, e),
                e.apply(t, [n])
              );
            };
          })(t, r);
    (u.delegationSelector = o ? i : null),
      (u.callable = r),
      (u.oneOff = s),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function S(t, e, i, n, s) {
    const o = k(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function I(t, e, i, n) {
    const s = e[i] || {};
    for (const o of Object.keys(s))
      if (o.includes(n)) {
        const n = s[o];
        S(t, e, i, n.callable, n.delegationSelector);
      }
  }
  function N(t) {
    return (t = t.replace(y, "")), T[t] || t;
  }
  const P = {
    on(t, e, i, n) {
      D(t, e, i, n, !1);
    },
    one(t, e, i, n) {
      D(t, e, i, n, !0);
    },
    off(t, e, i, n) {
      if ("string" != typeof e || !t) return;
      const [s, o, r] = L(e, i, n),
        a = r !== e,
        l = x(t),
        c = l[r] || {},
        h = e.startsWith(".");
      if (void 0 === o) {
        if (h) for (const i of Object.keys(l)) I(t, l, i, e.slice(1));
        for (const i of Object.keys(c)) {
          const n = i.replace(w, "");
          if (!a || e.includes(n)) {
            const e = c[i];
            S(t, l, r, e.callable, e.delegationSelector);
          }
        }
      } else {
        if (!Object.keys(c).length) return;
        S(t, l, r, o, s ? i : null);
      }
    },
    trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      const n = u();
      let s = null,
        o = !0,
        r = !0,
        a = !1;
      e !== N(e) &&
        n &&
        ((s = n.Event(e, i)),
        n(t).trigger(s),
        (o = !s.isPropagationStopped()),
        (r = !s.isImmediatePropagationStopped()),
        (a = s.isDefaultPrevented()));
      let l = new Event(e, { bubbles: o, cancelable: !0 });
      return (
        (l = j(l, i)),
        a && l.preventDefault(),
        r && t.dispatchEvent(l),
        l.defaultPrevented && s && s.preventDefault(),
        l
      );
    },
  };
  function j(t, e) {
    for (const [i, n] of Object.entries(e || {}))
      try {
        t[i] = n;
      } catch (e) {
        Object.defineProperty(t, i, { configurable: !0, get: () => n });
      }
    return t;
  }
  const M = new Map(),
    H = {
      set(t, e, i) {
        M.has(t) || M.set(t, new Map());
        const n = M.get(t);
        n.has(e) || 0 === n.size
          ? n.set(e, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(n.keys())[0]
              }.`
            );
      },
      get: (t, e) => (M.has(t) && M.get(t).get(e)) || null,
      remove(t, e) {
        if (!M.has(t)) return;
        const i = M.get(t);
        i.delete(e), 0 === i.size && M.delete(t);
      },
    };
  function $(t) {
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ("" === t || "null" === t) return null;
    if ("string" != typeof t) return t;
    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }
  function W(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  const B = {
    setDataAttribute(t, e, i) {
      t.setAttribute(`data-bs-${W(e)}`, i);
    },
    removeDataAttribute(t, e) {
      t.removeAttribute(`data-bs-${W(e)}`);
    },
    getDataAttributes(t) {
      if (!t) return {};
      const e = {},
        i = Object.keys(t.dataset).filter(
          (t) => t.startsWith("bs") && !t.startsWith("bsConfig")
        );
      for (const n of i) {
        let i = n.replace(/^bs/, "");
        (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
          (e[i] = $(t.dataset[n]));
      }
      return e;
    },
    getDataAttribute: (t, e) => $(t.getAttribute(`data-bs-${W(e)}`)),
  };
  class F {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return t;
    }
    _mergeConfigObj(t, e) {
      const i = o(e) ? B.getDataAttribute(e, "config") : {};
      return {
        ...this.constructor.Default,
        ...("object" == typeof i ? i : {}),
        ...(o(e) ? B.getDataAttributes(e) : {}),
        ...("object" == typeof t ? t : {}),
      };
    }
    _typeCheckConfig(t, e = this.constructor.DefaultType) {
      for (const n of Object.keys(e)) {
        const s = e[n],
          r = t[n],
          a = o(r)
            ? "element"
            : null == (i = r)
            ? `${i}`
            : Object.prototype.toString
                .call(i)
                .match(/\s([a-z]+)/i)[1]
                .toLowerCase();
        if (!new RegExp(s).test(a))
          throw new TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`
          );
      }
      var i;
    }
  }
  class z extends F {
    constructor(t, e) {
      super(),
        (t = r(t)) &&
          ((this._element = t),
          (this._config = this._getConfig(e)),
          H.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      H.remove(this._element, this.constructor.DATA_KEY),
        P.off(this._element, this.constructor.EVENT_KEY);
      for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
    }
    _queueCallback(t, e, i = !0) {
      _(t, e, i);
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t, this._element)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    static getInstance(t) {
      return H.get(r(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return "5.2.2";
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(t) {
      return `${t}${this.EVENT_KEY}`;
    }
  }
  const q = (t, e = "hide") => {
    const i = `click.dismiss${t.EVENT_KEY}`,
      s = t.NAME;
    P.on(document, i, `[data-bs-dismiss="${s}"]`, function (i) {
      if ((["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)))
        return;
      const o = n(this) || this.closest(`.${s}`);
      t.getOrCreateInstance(o)[e]();
    });
  };
  class R extends z {
    static get NAME() {
      return "alert";
    }
    close() {
      if (P.trigger(this._element, "close.bs.alert").defaultPrevented) return;
      this._element.classList.remove("show");
      const t = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(),
        P.trigger(this._element, "closed.bs.alert"),
        this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = R.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  q(R, "close"), g(R);
  const V = '[data-bs-toggle="button"]';
  class K extends z {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = K.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  P.on(document, "click.bs.button.data-api", V, (t) => {
    t.preventDefault();
    const e = t.target.closest(V);
    K.getOrCreateInstance(e).toggle();
  }),
    g(K);
  const Q = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = [];
        let n = t.parentNode.closest(e);
        for (; n; ) i.push(n), (n = n.parentNode.closest(e));
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        const e = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((t) => `${t}:not([tabindex^="-"])`)
          .join(",");
        return this.find(e, t).filter((t) => !l(t) && a(t));
      },
    },
    X = { endCallback: null, leftCallback: null, rightCallback: null },
    Y = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)",
    };
  class U extends F {
    constructor(t, e) {
      super(),
        (this._element = t),
        t &&
          U.isSupported() &&
          ((this._config = this._getConfig(e)),
          (this._deltaX = 0),
          (this._supportPointerEvents = Boolean(window.PointerEvent)),
          this._initEvents());
    }
    static get Default() {
      return X;
    }
    static get DefaultType() {
      return Y;
    }
    static get NAME() {
      return "swipe";
    }
    dispose() {
      P.off(this._element, ".bs.swipe");
    }
    _start(t) {
      this._supportPointerEvents
        ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
        : (this._deltaX = t.touches[0].clientX);
    }
    _end(t) {
      this._eventIsPointerPenTouch(t) &&
        (this._deltaX = t.clientX - this._deltaX),
        this._handleSwipe(),
        m(this._config.endCallback);
    }
    _move(t) {
      this._deltaX =
        t.touches && t.touches.length > 1
          ? 0
          : t.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const t = Math.abs(this._deltaX);
      if (t <= 40) return;
      const e = t / this._deltaX;
      (this._deltaX = 0),
        e && m(e > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents
        ? (P.on(this._element, "pointerdown.bs.swipe", (t) => this._start(t)),
          P.on(this._element, "pointerup.bs.swipe", (t) => this._end(t)),
          this._element.classList.add("pointer-event"))
        : (P.on(this._element, "touchstart.bs.swipe", (t) => this._start(t)),
          P.on(this._element, "touchmove.bs.swipe", (t) => this._move(t)),
          P.on(this._element, "touchend.bs.swipe", (t) => this._end(t)));
    }
    _eventIsPointerPenTouch(t) {
      return (
        this._supportPointerEvents &&
        ("pen" === t.pointerType || "touch" === t.pointerType)
      );
    }
    static isSupported() {
      return (
        "ontouchstart" in document.documentElement ||
        navigator.maxTouchPoints > 0
      );
    }
  }
  const G = "next",
    J = "prev",
    Z = "left",
    tt = "right",
    et = "slid.bs.carousel",
    it = "carousel",
    nt = "active",
    st = { ArrowLeft: tt, ArrowRight: Z },
    ot = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0,
    },
    rt = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean",
    };
  class at extends z {
    constructor(t, e) {
      super(t, e),
        (this._interval = null),
        (this._activeElement = null),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this._swipeHelper = null),
        (this._indicatorsElement = Q.findOne(
          ".carousel-indicators",
          this._element
        )),
        this._addEventListeners(),
        this._config.ride === it && this.cycle();
    }
    static get Default() {
      return ot;
    }
    static get DefaultType() {
      return rt;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(G);
    }
    nextWhenVisible() {
      !document.hidden && a(this._element) && this.next();
    }
    prev() {
      this._slide(J);
    }
    pause() {
      this._isSliding && s(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(),
        this._updateInterval(),
        (this._interval = setInterval(
          () => this.nextWhenVisible(),
          this._config.interval
        ));
    }
    _maybeEnableCycle() {
      this._config.ride &&
        (this._isSliding
          ? P.one(this._element, et, () => this.cycle())
          : this.cycle());
    }
    to(t) {
      const e = this._getItems();
      if (t > e.length - 1 || t < 0) return;
      if (this._isSliding)
        return void P.one(this._element, et, () => this.to(t));
      const i = this._getItemIndex(this._getActive());
      if (i === t) return;
      const n = t > i ? G : J;
      this._slide(n, e[t]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(t) {
      return (t.defaultInterval = t.interval), t;
    }
    _addEventListeners() {
      this._config.keyboard &&
        P.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (P.on(this._element, "mouseenter.bs.carousel", () => this.pause()),
          P.on(this._element, "mouseleave.bs.carousel", () =>
            this._maybeEnableCycle()
          )),
        this._config.touch && U.isSupported() && this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const t of Q.find(".carousel-item img", this._element))
        P.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
      const t = {
        leftCallback: () => this._slide(this._directionToOrder(Z)),
        rightCallback: () => this._slide(this._directionToOrder(tt)),
        endCallback: () => {
          "hover" === this._config.pause &&
            (this.pause(),
            this.touchTimeout && clearTimeout(this.touchTimeout),
            (this.touchTimeout = setTimeout(
              () => this._maybeEnableCycle(),
              500 + this._config.interval
            )));
        },
      };
      this._swipeHelper = new U(this._element, t);
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = st[t.key];
      e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
    }
    _getItemIndex(t) {
      return this._getItems().indexOf(t);
    }
    _setActiveIndicatorElement(t) {
      if (!this._indicatorsElement) return;
      const e = Q.findOne(".active", this._indicatorsElement);
      e.classList.remove(nt), e.removeAttribute("aria-current");
      const i = Q.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
      i && (i.classList.add(nt), i.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      const t = this._activeElement || this._getActive();
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      this._config.interval = e || this._config.defaultInterval;
    }
    _slide(t, e = null) {
      if (this._isSliding) return;
      const i = this._getActive(),
        n = t === G,
        s = e || b(this._getItems(), i, n, this._config.wrap);
      if (s === i) return;
      const o = this._getItemIndex(s),
        r = (e) =>
          P.trigger(this._element, e, {
            relatedTarget: s,
            direction: this._orderToDirection(t),
            from: this._getItemIndex(i),
            to: o,
          });
      if (r("slide.bs.carousel").defaultPrevented) return;
      if (!i || !s) return;
      const a = Boolean(this._interval);
      this.pause(),
        (this._isSliding = !0),
        this._setActiveIndicatorElement(o),
        (this._activeElement = s);
      const l = n ? "carousel-item-start" : "carousel-item-end",
        c = n ? "carousel-item-next" : "carousel-item-prev";
      s.classList.add(c),
        d(s),
        i.classList.add(l),
        s.classList.add(l),
        this._queueCallback(
          () => {
            s.classList.remove(l, c),
              s.classList.add(nt),
              i.classList.remove(nt, c, l),
              (this._isSliding = !1),
              r(et);
          },
          i,
          this._isAnimated()
        ),
        a && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains("slide");
    }
    _getActive() {
      return Q.findOne(".active.carousel-item", this._element);
    }
    _getItems() {
      return Q.find(".carousel-item", this._element);
    }
    _clearInterval() {
      this._interval &&
        (clearInterval(this._interval), (this._interval = null));
    }
    _directionToOrder(t) {
      return p() ? (t === Z ? J : G) : t === Z ? G : J;
    }
    _orderToDirection(t) {
      return p() ? (t === J ? Z : tt) : t === J ? tt : Z;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = at.getOrCreateInstance(this, t);
        if ("number" != typeof t) {
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
              throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        } else e.to(t);
      });
    }
  }
  P.on(
    document,
    "click.bs.carousel.data-api",
    "[data-bs-slide], [data-bs-slide-to]",
    function (t) {
      const e = n(this);
      if (!e || !e.classList.contains(it)) return;
      t.preventDefault();
      const i = at.getOrCreateInstance(e),
        s = this.getAttribute("data-bs-slide-to");
      return s
        ? (i.to(s), void i._maybeEnableCycle())
        : "next" === B.getDataAttribute(this, "slide")
        ? (i.next(), void i._maybeEnableCycle())
        : (i.prev(), void i._maybeEnableCycle());
    }
  ),
    P.on(window, "load.bs.carousel.data-api", () => {
      const t = Q.find('[data-bs-ride="carousel"]');
      for (const e of t) at.getOrCreateInstance(e);
    }),
    g(at);
  const lt = "show",
    ct = "collapse",
    ht = "collapsing",
    dt = '[data-bs-toggle="collapse"]',
    ut = { parent: null, toggle: !0 },
    ft = { parent: "(null|element)", toggle: "boolean" };
  class pt extends z {
    constructor(t, e) {
      super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
      const n = Q.find(dt);
      for (const t of n) {
        const e = i(t),
          n = Q.find(e).filter((t) => t === this._element);
        null !== e && n.length && this._triggerArray.push(t);
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return ut;
    }
    static get DefaultType() {
      return ft;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t = [];
      if (
        (this._config.parent &&
          (t = this._getFirstLevelChildren(
            ".collapse.show, .collapse.collapsing"
          )
            .filter((t) => t !== this._element)
            .map((t) => pt.getOrCreateInstance(t, { toggle: !1 }))),
        t.length && t[0]._isTransitioning)
      )
        return;
      if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      for (const e of t) e.hide();
      const e = this._getDimension();
      this._element.classList.remove(ct),
        this._element.classList.add(ht),
        (this._element.style[e] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(ht),
            this._element.classList.add(ct, lt),
            (this._element.style[e] = ""),
            P.trigger(this._element, "shown.bs.collapse");
        },
        this._element,
        !0
      ),
        (this._element.style[e] = `${this._element[i]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] = `${
        this._element.getBoundingClientRect()[t]
      }px`),
        d(this._element),
        this._element.classList.add(ht),
        this._element.classList.remove(ct, lt);
      for (const t of this._triggerArray) {
        const e = n(t);
        e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
      }
      (this._isTransitioning = !0),
        (this._element.style[t] = ""),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(ht),
              this._element.classList.add(ct),
              P.trigger(this._element, "hidden.bs.collapse");
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains(lt);
    }
    _configAfterMerge(t) {
      return (t.toggle = Boolean(t.toggle)), (t.parent = r(t.parent)), t;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = this._getFirstLevelChildren(dt);
      for (const e of t) {
        const t = n(e);
        t && this._addAriaAndCollapsedClass([e], this._isShown(t));
      }
    }
    _getFirstLevelChildren(t) {
      const e = Q.find(":scope .collapse .collapse", this._config.parent);
      return Q.find(t, this._config.parent).filter((t) => !e.includes(t));
    }
    _addAriaAndCollapsedClass(t, e) {
      if (t.length)
        for (const i of t)
          i.classList.toggle("collapsed", !e),
            i.setAttribute("aria-expanded", e);
    }
    static jQueryInterface(t) {
      const e = {};
      return (
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
        this.each(function () {
          const i = pt.getOrCreateInstance(this, e);
          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
            i[t]();
          }
        })
      );
    }
  }
  P.on(document, "click.bs.collapse.data-api", dt, function (t) {
    ("A" === t.target.tagName ||
      (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
      t.preventDefault();
    const e = i(this),
      n = Q.find(e);
    for (const t of n) pt.getOrCreateInstance(t, { toggle: !1 }).toggle();
  }),
    g(pt);
  var gt = "top",
    mt = "bottom",
    _t = "right",
    bt = "left",
    vt = "auto",
    yt = [gt, mt, _t, bt],
    wt = "start",
    At = "end",
    Et = "clippingParents",
    Tt = "viewport",
    Ct = "popper",
    Ot = "reference",
    xt = yt.reduce(function (t, e) {
      return t.concat([e + "-" + wt, e + "-" + At]);
    }, []),
    kt = [].concat(yt, [vt]).reduce(function (t, e) {
      return t.concat([e, e + "-" + wt, e + "-" + At]);
    }, []),
    Lt = "beforeRead",
    Dt = "read",
    St = "afterRead",
    It = "beforeMain",
    Nt = "main",
    Pt = "afterMain",
    jt = "beforeWrite",
    Mt = "write",
    Ht = "afterWrite",
    $t = [Lt, Dt, St, It, Nt, Pt, jt, Mt, Ht];
  function Wt(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function Bt(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function Ft(t) {
    return t instanceof Bt(t).Element || t instanceof Element;
  }
  function zt(t) {
    return t instanceof Bt(t).HTMLElement || t instanceof HTMLElement;
  }
  function qt(t) {
    return (
      "undefined" != typeof ShadowRoot &&
      (t instanceof Bt(t).ShadowRoot || t instanceof ShadowRoot)
    );
  }
  const Rt = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        zt(s) &&
          Wt(s) &&
          (Object.assign(s.style, i),
          Object.keys(n).forEach(function (t) {
            var e = n[t];
            !1 === e
              ? s.removeAttribute(t)
              : s.setAttribute(t, !0 === e ? "" : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(e.elements.popper.style, i.popper),
        (e.styles = i),
        e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t;
              }, {});
            zt(n) &&
              Wt(n) &&
              (Object.assign(n.style, o),
              Object.keys(s).forEach(function (t) {
                n.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function Vt(t) {
    return t.split("-")[0];
  }
  var Kt = Math.max,
    Qt = Math.min,
    Xt = Math.round;
  function Yt() {
    var t = navigator.userAgentData;
    return null != t && t.brands
      ? t.brands
          .map(function (t) {
            return t.brand + "/" + t.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function Ut() {
    return !/^((?!chrome|android).)*safari/i.test(Yt());
  }
  function Gt(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1);
    var n = t.getBoundingClientRect(),
      s = 1,
      o = 1;
    e &&
      zt(t) &&
      ((s = (t.offsetWidth > 0 && Xt(n.width) / t.offsetWidth) || 1),
      (o = (t.offsetHeight > 0 && Xt(n.height) / t.offsetHeight) || 1));
    var r = (Ft(t) ? Bt(t) : window).visualViewport,
      a = !Ut() && i,
      l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
      c = (n.top + (a && r ? r.offsetTop : 0)) / o,
      h = n.width / s,
      d = n.height / o;
    return {
      width: h,
      height: d,
      top: c,
      right: l + h,
      bottom: c + d,
      left: l,
      x: l,
      y: c,
    };
  }
  function Jt(t) {
    var e = Gt(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return (
      Math.abs(e.width - i) <= 1 && (i = e.width),
      Math.abs(e.height - n) <= 1 && (n = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
    );
  }
  function Zt(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && qt(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function te(t) {
    return Bt(t).getComputedStyle(t);
  }
  function ee(t) {
    return ["table", "td", "th"].indexOf(Wt(t)) >= 0;
  }
  function ie(t) {
    return (
      (Ft(t) ? t.ownerDocument : t.document) || window.document
    ).documentElement;
  }
  function ne(t) {
    return "html" === Wt(t)
      ? t
      : t.assignedSlot || t.parentNode || (qt(t) ? t.host : null) || ie(t);
  }
  function se(t) {
    return zt(t) && "fixed" !== te(t).position ? t.offsetParent : null;
  }
  function oe(t) {
    for (var e = Bt(t), i = se(t); i && ee(i) && "static" === te(i).position; )
      i = se(i);
    return i &&
      ("html" === Wt(i) || ("body" === Wt(i) && "static" === te(i).position))
      ? e
      : i ||
          (function (t) {
            var e = /firefox/i.test(Yt());
            if (/Trident/i.test(Yt()) && zt(t) && "fixed" === te(t).position)
              return null;
            var i = ne(t);
            for (
              qt(i) && (i = i.host);
              zt(i) && ["html", "body"].indexOf(Wt(i)) < 0;

            ) {
              var n = te(i);
              if (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                "paint" === n.contain ||
                -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                (e && "filter" === n.willChange) ||
                (e && n.filter && "none" !== n.filter)
              )
                return i;
              i = i.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function re(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  function ae(t, e, i) {
    return Kt(t, Qt(e, i));
  }
  function le(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function ce(t, e) {
    return e.reduce(function (e, i) {
      return (e[i] = t), e;
    }, {});
  }
  const he = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e,
        i = t.state,
        n = t.name,
        s = t.options,
        o = i.elements.arrow,
        r = i.modifiersData.popperOffsets,
        a = Vt(i.placement),
        l = re(a),
        c = [bt, _t].indexOf(a) >= 0 ? "height" : "width";
      if (o && r) {
        var h = (function (t, e) {
            return le(
              "number" !=
                typeof (t =
                  "function" == typeof t
                    ? t(Object.assign({}, e.rects, { placement: e.placement }))
                    : t)
                ? t
                : ce(t, yt)
            );
          })(s.padding, i),
          d = Jt(o),
          u = "y" === l ? gt : bt,
          f = "y" === l ? mt : _t,
          p =
            i.rects.reference[c] +
            i.rects.reference[l] -
            r[l] -
            i.rects.popper[c],
          g = r[l] - i.rects.reference[l],
          m = oe(o),
          _ = m ? ("y" === l ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
          b = p / 2 - g / 2,
          v = h[u],
          y = _ - d[c] - h[f],
          w = _ / 2 - d[c] / 2 + b,
          A = ae(v, w, y),
          E = l;
        i.modifiersData[n] = (((e = {})[E] = A), (e.centerOffset = A - w), e);
      }
    },
    effect: function (t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n &&
        ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
        Zt(e.elements.popper, n) &&
        (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function de(t) {
    return t.split("-")[1];
  }
  var ue = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function fe(t) {
    var e,
      i = t.popper,
      n = t.popperRect,
      s = t.placement,
      o = t.variation,
      r = t.offsets,
      a = t.position,
      l = t.gpuAcceleration,
      c = t.adaptive,
      h = t.roundOffsets,
      d = t.isFixed,
      u = r.x,
      f = void 0 === u ? 0 : u,
      p = r.y,
      g = void 0 === p ? 0 : p,
      m = "function" == typeof h ? h({ x: f, y: g }) : { x: f, y: g };
    (f = m.x), (g = m.y);
    var _ = r.hasOwnProperty("x"),
      b = r.hasOwnProperty("y"),
      v = bt,
      y = gt,
      w = window;
    if (c) {
      var A = oe(i),
        E = "clientHeight",
        T = "clientWidth";
      A === Bt(i) &&
        "static" !== te((A = ie(i))).position &&
        "absolute" === a &&
        ((E = "scrollHeight"), (T = "scrollWidth")),
        (s === gt || ((s === bt || s === _t) && o === At)) &&
          ((y = mt),
          (g -=
            (d && A === w && w.visualViewport
              ? w.visualViewport.height
              : A[E]) - n.height),
          (g *= l ? 1 : -1)),
        (s !== bt && ((s !== gt && s !== mt) || o !== At)) ||
          ((v = _t),
          (f -=
            (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) -
            n.width),
          (f *= l ? 1 : -1));
    }
    var C,
      O = Object.assign({ position: a }, c && ue),
      x =
        !0 === h
          ? (function (t) {
              var e = t.x,
                i = t.y,
                n = window.devicePixelRatio || 1;
              return { x: Xt(e * n) / n || 0, y: Xt(i * n) / n || 0 };
            })({ x: f, y: g })
          : { x: f, y: g };
    return (
      (f = x.x),
      (g = x.y),
      l
        ? Object.assign(
            {},
            O,
            (((C = {})[y] = b ? "0" : ""),
            (C[v] = _ ? "0" : ""),
            (C.transform =
              (w.devicePixelRatio || 1) <= 1
                ? "translate(" + f + "px, " + g + "px)"
                : "translate3d(" + f + "px, " + g + "px, 0)"),
            C)
          )
        : Object.assign(
            {},
            O,
            (((e = {})[y] = b ? g + "px" : ""),
            (e[v] = _ ? f + "px" : ""),
            (e.transform = ""),
            e)
          )
    );
  }
  const pe = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = i.gpuAcceleration,
        s = void 0 === n || n,
        o = i.adaptive,
        r = void 0 === o || o,
        a = i.roundOffsets,
        l = void 0 === a || a,
        c = {
          placement: Vt(e.placement),
          variation: de(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
          isFixed: "fixed" === e.options.strategy,
        };
      null != e.modifiersData.popperOffsets &&
        (e.styles.popper = Object.assign(
          {},
          e.styles.popper,
          fe(
            Object.assign({}, c, {
              offsets: e.modifiersData.popperOffsets,
              position: e.options.strategy,
              adaptive: r,
              roundOffsets: l,
            })
          )
        )),
        null != e.modifiersData.arrow &&
          (e.styles.arrow = Object.assign(
            {},
            e.styles.arrow,
            fe(
              Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l,
              })
            )
          )),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-placement": e.placement,
        }));
    },
    data: {},
  };
  var ge = { passive: !0 };
  const me = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (t) {
      var e = t.state,
        i = t.instance,
        n = t.options,
        s = n.scroll,
        o = void 0 === s || s,
        r = n.resize,
        a = void 0 === r || r,
        l = Bt(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return (
        o &&
          c.forEach(function (t) {
            t.addEventListener("scroll", i.update, ge);
          }),
        a && l.addEventListener("resize", i.update, ge),
        function () {
          o &&
            c.forEach(function (t) {
              t.removeEventListener("scroll", i.update, ge);
            }),
            a && l.removeEventListener("resize", i.update, ge);
        }
      );
    },
    data: {},
  };
  var _e = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function be(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return _e[t];
    });
  }
  var ve = { start: "end", end: "start" };
  function ye(t) {
    return t.replace(/start|end/g, function (t) {
      return ve[t];
    });
  }
  function we(t) {
    var e = Bt(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function Ae(t) {
    return Gt(ie(t)).left + we(t).scrollLeft;
  }
  function Ee(t) {
    var e = te(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function Te(t) {
    return ["html", "body", "#document"].indexOf(Wt(t)) >= 0
      ? t.ownerDocument.body
      : zt(t) && Ee(t)
      ? t
      : Te(ne(t));
  }
  function Ce(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = Te(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = Bt(n),
      r = s ? [o].concat(o.visualViewport || [], Ee(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(Ce(ne(r)));
  }
  function Oe(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function xe(t, e, i) {
    return e === Tt
      ? Oe(
          (function (t, e) {
            var i = Bt(t),
              n = ie(t),
              s = i.visualViewport,
              o = n.clientWidth,
              r = n.clientHeight,
              a = 0,
              l = 0;
            if (s) {
              (o = s.width), (r = s.height);
              var c = Ut();
              (c || (!c && "fixed" === e)) &&
                ((a = s.offsetLeft), (l = s.offsetTop));
            }
            return { width: o, height: r, x: a + Ae(t), y: l };
          })(t, i)
        )
      : Ft(e)
      ? (function (t, e) {
          var i = Gt(t, !1, "fixed" === e);
          return (
            (i.top = i.top + t.clientTop),
            (i.left = i.left + t.clientLeft),
            (i.bottom = i.top + t.clientHeight),
            (i.right = i.left + t.clientWidth),
            (i.width = t.clientWidth),
            (i.height = t.clientHeight),
            (i.x = i.left),
            (i.y = i.top),
            i
          );
        })(e, i)
      : Oe(
          (function (t) {
            var e,
              i = ie(t),
              n = we(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = Kt(
                i.scrollWidth,
                i.clientWidth,
                s ? s.scrollWidth : 0,
                s ? s.clientWidth : 0
              ),
              r = Kt(
                i.scrollHeight,
                i.clientHeight,
                s ? s.scrollHeight : 0,
                s ? s.clientHeight : 0
              ),
              a = -n.scrollLeft + Ae(t),
              l = -n.scrollTop;
            return (
              "rtl" === te(s || i).direction &&
                (a += Kt(i.clientWidth, s ? s.clientWidth : 0) - o),
              { width: o, height: r, x: a, y: l }
            );
          })(ie(t))
        );
  }
  function ke(t) {
    var e,
      i = t.reference,
      n = t.element,
      s = t.placement,
      o = s ? Vt(s) : null,
      r = s ? de(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (o) {
      case gt:
        e = { x: a, y: i.y - n.height };
        break;
      case mt:
        e = { x: a, y: i.y + i.height };
        break;
      case _t:
        e = { x: i.x + i.width, y: l };
        break;
      case bt:
        e = { x: i.x - n.width, y: l };
        break;
      default:
        e = { x: i.x, y: i.y };
    }
    var c = o ? re(o) : null;
    if (null != c) {
      var h = "y" === c ? "height" : "width";
      switch (r) {
        case wt:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;
        case At:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }
    return e;
  }
  function Le(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = void 0 === n ? t.placement : n,
      o = i.strategy,
      r = void 0 === o ? t.strategy : o,
      a = i.boundary,
      l = void 0 === a ? Et : a,
      c = i.rootBoundary,
      h = void 0 === c ? Tt : c,
      d = i.elementContext,
      u = void 0 === d ? Ct : d,
      f = i.altBoundary,
      p = void 0 !== f && f,
      g = i.padding,
      m = void 0 === g ? 0 : g,
      _ = le("number" != typeof m ? m : ce(m, yt)),
      b = u === Ct ? Ot : Ct,
      v = t.rects.popper,
      y = t.elements[p ? b : u],
      w = (function (t, e, i, n) {
        var s =
            "clippingParents" === e
              ? (function (t) {
                  var e = Ce(ne(t)),
                    i =
                      ["absolute", "fixed"].indexOf(te(t).position) >= 0 &&
                      zt(t)
                        ? oe(t)
                        : t;
                  return Ft(i)
                    ? e.filter(function (t) {
                        return Ft(t) && Zt(t, i) && "body" !== Wt(t);
                      })
                    : [];
                })(t)
              : [].concat(e),
          o = [].concat(s, [i]),
          r = o[0],
          a = o.reduce(function (e, i) {
            var s = xe(t, i, n);
            return (
              (e.top = Kt(s.top, e.top)),
              (e.right = Qt(s.right, e.right)),
              (e.bottom = Qt(s.bottom, e.bottom)),
              (e.left = Kt(s.left, e.left)),
              e
            );
          }, xe(t, r, n));
        return (
          (a.width = a.right - a.left),
          (a.height = a.bottom - a.top),
          (a.x = a.left),
          (a.y = a.top),
          a
        );
      })(Ft(y) ? y : y.contextElement || ie(t.elements.popper), l, h, r),
      A = Gt(t.elements.reference),
      E = ke({ reference: A, element: v, strategy: "absolute", placement: s }),
      T = Oe(Object.assign({}, v, E)),
      C = u === Ct ? T : A,
      O = {
        top: w.top - C.top + _.top,
        bottom: C.bottom - w.bottom + _.bottom,
        left: w.left - C.left + _.left,
        right: C.right - w.right + _.right,
      },
      x = t.modifiersData.offset;
    if (u === Ct && x) {
      var k = x[s];
      Object.keys(O).forEach(function (t) {
        var e = [_t, mt].indexOf(t) >= 0 ? 1 : -1,
          i = [gt, mt].indexOf(t) >= 0 ? "y" : "x";
        O[t] += k[i] * e;
      });
    }
    return O;
  }
  function De(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = i.boundary,
      o = i.rootBoundary,
      r = i.padding,
      a = i.flipVariations,
      l = i.allowedAutoPlacements,
      c = void 0 === l ? kt : l,
      h = de(n),
      d = h
        ? a
          ? xt
          : xt.filter(function (t) {
              return de(t) === h;
            })
        : yt,
      u = d.filter(function (t) {
        return c.indexOf(t) >= 0;
      });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return (
        (e[i] = Le(t, {
          placement: i,
          boundary: s,
          rootBoundary: o,
          padding: r,
        })[Vt(i)]),
        e
      );
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }
  const Se = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (
          var s = i.mainAxis,
            o = void 0 === s || s,
            r = i.altAxis,
            a = void 0 === r || r,
            l = i.fallbackPlacements,
            c = i.padding,
            h = i.boundary,
            d = i.rootBoundary,
            u = i.altBoundary,
            f = i.flipVariations,
            p = void 0 === f || f,
            g = i.allowedAutoPlacements,
            m = e.options.placement,
            _ = Vt(m),
            b =
              l ||
              (_ !== m && p
                ? (function (t) {
                    if (Vt(t) === vt) return [];
                    var e = be(t);
                    return [ye(t), e, ye(e)];
                  })(m)
                : [be(m)]),
            v = [m].concat(b).reduce(function (t, i) {
              return t.concat(
                Vt(i) === vt
                  ? De(e, {
                      placement: i,
                      boundary: h,
                      rootBoundary: d,
                      padding: c,
                      flipVariations: p,
                      allowedAutoPlacements: g,
                    })
                  : i
              );
            }, []),
            y = e.rects.reference,
            w = e.rects.popper,
            A = new Map(),
            E = !0,
            T = v[0],
            C = 0;
          C < v.length;
          C++
        ) {
          var O = v[C],
            x = Vt(O),
            k = de(O) === wt,
            L = [gt, mt].indexOf(x) >= 0,
            D = L ? "width" : "height",
            S = Le(e, {
              placement: O,
              boundary: h,
              rootBoundary: d,
              altBoundary: u,
              padding: c,
            }),
            I = L ? (k ? _t : bt) : k ? mt : gt;
          y[D] > w[D] && (I = be(I));
          var N = be(I),
            P = [];
          if (
            (o && P.push(S[x] <= 0),
            a && P.push(S[I] <= 0, S[N] <= 0),
            P.every(function (t) {
              return t;
            }))
          ) {
            (T = O), (E = !1);
            break;
          }
          A.set(O, P);
        }
        if (E)
          for (
            var j = function (t) {
                var e = v.find(function (e) {
                  var i = A.get(e);
                  if (i)
                    return i.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (T = e), "break";
              },
              M = p ? 3 : 1;
            M > 0 && "break" !== j(M);
            M--
          );
        e.placement !== T &&
          ((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function Ie(t, e, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x,
      }
    );
  }
  function Ne(t) {
    return [gt, _t, mt, bt].some(function (e) {
      return t[e] >= 0;
    });
  }
  const Pe = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (t) {
        var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = Le(e, { elementContext: "reference" }),
          a = Le(e, { altBoundary: !0 }),
          l = Ie(r, n),
          c = Ie(a, s, o),
          h = Ne(l),
          d = Ne(c);
        (e.modifiersData[i] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: h,
          hasPopperEscaped: d,
        }),
          (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-reference-hidden": h,
            "data-popper-escaped": d,
          }));
      },
    },
    je = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = kt.reduce(function (t, i) {
            return (
              (t[i] = (function (t, e, i) {
                var n = Vt(t),
                  s = [bt, gt].indexOf(n) >= 0 ? -1 : 1,
                  o =
                    "function" == typeof i
                      ? i(Object.assign({}, e, { placement: t }))
                      : i,
                  r = o[0],
                  a = o[1];
                return (
                  (r = r || 0),
                  (a = (a || 0) * s),
                  [bt, _t].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a }
                );
              })(i, e.rects, o)),
              t
            );
          }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
        null != e.modifiersData.popperOffsets &&
          ((e.modifiersData.popperOffsets.x += l),
          (e.modifiersData.popperOffsets.y += c)),
          (e.modifiersData[n] = r);
      },
    },
    Me = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (t) {
        var e = t.state,
          i = t.name;
        e.modifiersData[i] = ke({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: "absolute",
          placement: e.placement,
        });
      },
      data: {},
    },
    He = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          g = void 0 === p ? 0 : p,
          m = Le(e, {
            boundary: l,
            rootBoundary: c,
            padding: d,
            altBoundary: h,
          }),
          _ = Vt(e.placement),
          b = de(e.placement),
          v = !b,
          y = re(_),
          w = "x" === y ? "y" : "x",
          A = e.modifiersData.popperOffsets,
          E = e.rects.reference,
          T = e.rects.popper,
          C =
            "function" == typeof g
              ? g(Object.assign({}, e.rects, { placement: e.placement }))
              : g,
          O =
            "number" == typeof C
              ? { mainAxis: C, altAxis: C }
              : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
          x = e.modifiersData.offset
            ? e.modifiersData.offset[e.placement]
            : null,
          k = { x: 0, y: 0 };
        if (A) {
          if (o) {
            var L,
              D = "y" === y ? gt : bt,
              S = "y" === y ? mt : _t,
              I = "y" === y ? "height" : "width",
              N = A[y],
              P = N + m[D],
              j = N - m[S],
              M = f ? -T[I] / 2 : 0,
              H = b === wt ? E[I] : T[I],
              $ = b === wt ? -T[I] : -E[I],
              W = e.elements.arrow,
              B = f && W ? Jt(W) : { width: 0, height: 0 },
              F = e.modifiersData["arrow#persistent"]
                ? e.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 },
              z = F[D],
              q = F[S],
              R = ae(0, E[I], B[I]),
              V = v
                ? E[I] / 2 - M - R - z - O.mainAxis
                : H - R - z - O.mainAxis,
              K = v
                ? -E[I] / 2 + M + R + q + O.mainAxis
                : $ + R + q + O.mainAxis,
              Q = e.elements.arrow && oe(e.elements.arrow),
              X = Q ? ("y" === y ? Q.clientTop || 0 : Q.clientLeft || 0) : 0,
              Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
              U = N + K - Y,
              G = ae(f ? Qt(P, N + V - Y - X) : P, N, f ? Kt(j, U) : j);
            (A[y] = G), (k[y] = G - N);
          }
          if (a) {
            var J,
              Z = "x" === y ? gt : bt,
              tt = "x" === y ? mt : _t,
              et = A[w],
              it = "y" === w ? "height" : "width",
              nt = et + m[Z],
              st = et - m[tt],
              ot = -1 !== [gt, bt].indexOf(_),
              rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
              at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
              lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
              ct =
                f && ot
                  ? (function (t, e, i) {
                      var n = ae(t, e, i);
                      return n > i ? i : n;
                    })(at, et, lt)
                  : ae(f ? at : nt, et, f ? lt : st);
            (A[w] = ct), (k[w] = ct - et);
          }
          e.modifiersData[n] = k;
        }
      },
      requiresIfExists: ["offset"],
    };
  function $e(t, e, i) {
    void 0 === i && (i = !1);
    var n,
      s,
      o = zt(e),
      r =
        zt(e) &&
        (function (t) {
          var e = t.getBoundingClientRect(),
            i = Xt(e.width) / t.offsetWidth || 1,
            n = Xt(e.height) / t.offsetHeight || 1;
          return 1 !== i || 1 !== n;
        })(e),
      a = ie(e),
      l = Gt(t, r, i),
      c = { scrollLeft: 0, scrollTop: 0 },
      h = { x: 0, y: 0 };
    return (
      (o || (!o && !i)) &&
        (("body" !== Wt(e) || Ee(a)) &&
          (c =
            (n = e) !== Bt(n) && zt(n)
              ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
              : we(n)),
        zt(e)
          ? (((h = Gt(e, !0)).x += e.clientLeft), (h.y += e.clientTop))
          : a && (h.x = Ae(a))),
      {
        x: l.left + c.scrollLeft - h.x,
        y: l.top + c.scrollTop - h.y,
        width: l.width,
        height: l.height,
      }
    );
  }
  function We(t) {
    var e = new Map(),
      i = new Set(),
      n = [];
    function s(t) {
      i.add(t.name),
        []
          .concat(t.requires || [], t.requiresIfExists || [])
          .forEach(function (t) {
            if (!i.has(t)) {
              var n = e.get(t);
              n && s(n);
            }
          }),
        n.push(t);
    }
    return (
      t.forEach(function (t) {
        e.set(t.name, t);
      }),
      t.forEach(function (t) {
        i.has(t.name) || s(t);
      }),
      n
    );
  }
  var Be = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function Fe() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function ze(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? Be : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Be, o),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function (i) {
            var s = "function" == typeof i ? i(a.options) : i;
            d(),
              (a.options = Object.assign({}, o, a.options, s)),
              (a.scrollParents = {
                reference: Ft(t)
                  ? Ce(t)
                  : t.contextElement
                  ? Ce(t.contextElement)
                  : [],
                popper: Ce(e),
              });
            var r,
              c,
              u = (function (t) {
                var e = We(t);
                return $t.reduce(function (t, i) {
                  return t.concat(
                    e.filter(function (t) {
                      return t.phase === i;
                    })
                  );
                }, []);
              })(
                ((r = [].concat(n, a.options.modifiers)),
                (c = r.reduce(function (t, e) {
                  var i = t[e.name];
                  return (
                    (t[e.name] = i
                      ? Object.assign({}, i, e, {
                          options: Object.assign({}, i.options, e.options),
                          data: Object.assign({}, i.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {})),
                Object.keys(c).map(function (t) {
                  return c[t];
                }))
              );
            return (
              (a.orderedModifiers = u.filter(function (t) {
                return t.enabled;
              })),
              a.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  s = t.effect;
                if ("function" == typeof s) {
                  var o = s({ state: a, name: e, instance: h, options: n });
                  l.push(o || function () {});
                }
              }),
              h.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (Fe(e, i)) {
                (a.rects = {
                  reference: $e(e, oe(i), "fixed" === a.options.strategy),
                  popper: Jt(i),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (t) {
                    return (a.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var n = 0; n < a.orderedModifiers.length; n++)
                  if (!0 !== a.reset) {
                    var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                    "function" == typeof o &&
                      (a =
                        o({ state: a, options: l, name: d, instance: h }) || a);
                  } else (a.reset = !1), (n = -1);
              }
            }
          },
          update:
            ((s = function () {
              return new Promise(function (t) {
                h.forceUpdate(), t(a);
              });
            }),
            function () {
              return (
                r ||
                  (r = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (r = void 0), t(s());
                    });
                  })),
                r
              );
            }),
          destroy: function () {
            d(), (c = !0);
          },
        };
      if (!Fe(t, e)) return h;
      function d() {
        l.forEach(function (t) {
          return t();
        }),
          (l = []);
      }
      return (
        h.setOptions(i).then(function (t) {
          !c && i.onFirstUpdate && i.onFirstUpdate(t);
        }),
        h
      );
    };
  }
  var qe = ze(),
    Re = ze({ defaultModifiers: [me, Me, pe, Rt] }),
    Ve = ze({ defaultModifiers: [me, Me, pe, Rt, je, Se, He, he, Pe] });
  const Ke = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          popperGenerator: ze,
          detectOverflow: Le,
          createPopperBase: qe,
          createPopper: Ve,
          createPopperLite: Re,
          top: gt,
          bottom: mt,
          right: _t,
          left: bt,
          auto: vt,
          basePlacements: yt,
          start: wt,
          end: At,
          clippingParents: Et,
          viewport: Tt,
          popper: Ct,
          reference: Ot,
          variationPlacements: xt,
          placements: kt,
          beforeRead: Lt,
          read: Dt,
          afterRead: St,
          beforeMain: It,
          main: Nt,
          afterMain: Pt,
          beforeWrite: jt,
          write: Mt,
          afterWrite: Ht,
          modifierPhases: $t,
          applyStyles: Rt,
          arrow: he,
          computeStyles: pe,
          eventListeners: me,
          flip: Se,
          hide: Pe,
          offset: je,
          popperOffsets: Me,
          preventOverflow: He,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    Qe = "dropdown",
    Xe = "ArrowUp",
    Ye = "ArrowDown",
    Ue = "click.bs.dropdown.data-api",
    Ge = "keydown.bs.dropdown.data-api",
    Je = "show",
    Ze = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    ti = `${Ze}.show`,
    ei = ".dropdown-menu",
    ii = p() ? "top-end" : "top-start",
    ni = p() ? "top-start" : "top-end",
    si = p() ? "bottom-end" : "bottom-start",
    oi = p() ? "bottom-start" : "bottom-end",
    ri = p() ? "left-start" : "right-start",
    ai = p() ? "right-start" : "left-start",
    li = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle",
    },
    ci = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)",
    };
  class hi extends z {
    constructor(t, e) {
      super(t, e),
        (this._popper = null),
        (this._parent = this._element.parentNode),
        (this._menu =
          Q.next(this._element, ei)[0] ||
          Q.prev(this._element, ei)[0] ||
          Q.findOne(ei, this._parent)),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return li;
    }
    static get DefaultType() {
      return ci;
    }
    static get NAME() {
      return Qe;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (l(this._element) || this._isShown()) return;
      const t = { relatedTarget: this._element };
      if (!P.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
        if (
          (this._createPopper(),
          "ontouchstart" in document.documentElement &&
            !this._parent.closest(".navbar-nav"))
        )
          for (const t of [].concat(...document.body.children))
            P.on(t, "mouseover", h);
        this._element.focus(),
          this._element.setAttribute("aria-expanded", !0),
          this._menu.classList.add(Je),
          this._element.classList.add(Je),
          P.trigger(this._element, "shown.bs.dropdown", t);
      }
    }
    hide() {
      if (l(this._element) || !this._isShown()) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(t) {
      if (!P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
        if ("ontouchstart" in document.documentElement)
          for (const t of [].concat(...document.body.children))
            P.off(t, "mouseover", h);
        this._popper && this._popper.destroy(),
          this._menu.classList.remove(Je),
          this._element.classList.remove(Je),
          this._element.setAttribute("aria-expanded", "false"),
          B.removeDataAttribute(this._menu, "popper"),
          P.trigger(this._element, "hidden.bs.dropdown", t);
      }
    }
    _getConfig(t) {
      if (
        "object" == typeof (t = super._getConfig(t)).reference &&
        !o(t.reference) &&
        "function" != typeof t.reference.getBoundingClientRect
      )
        throw new TypeError(
          `${Qe.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper() {
      if (void 0 === Ke)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let t = this._element;
      "parent" === this._config.reference
        ? (t = this._parent)
        : o(this._config.reference)
        ? (t = r(this._config.reference))
        : "object" == typeof this._config.reference &&
          (t = this._config.reference);
      const e = this._getPopperConfig();
      this._popper = Ve(t, this._menu, e);
    }
    _isShown() {
      return this._menu.classList.contains(Je);
    }
    _getPlacement() {
      const t = this._parent;
      if (t.classList.contains("dropend")) return ri;
      if (t.classList.contains("dropstart")) return ai;
      if (t.classList.contains("dropup-center")) return "top";
      if (t.classList.contains("dropdown-center")) return "bottom";
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? ni : ii) : e ? oi : si;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        (this._inNavbar || "static" === this._config.display) &&
          (B.setDataAttribute(this._menu, "popper", "static"),
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
        {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = Q.find(
        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        this._menu
      ).filter((t) => a(t));
      i.length && b(i, e, t === Ye, !i.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = hi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return;
      const e = Q.find(ti);
      for (const i of e) {
        const e = hi.getInstance(i);
        if (!e || !1 === e._config.autoClose) continue;
        const n = t.composedPath(),
          s = n.includes(e._menu);
        if (
          n.includes(e._element) ||
          ("inside" === e._config.autoClose && !s) ||
          ("outside" === e._config.autoClose && s)
        )
          continue;
        if (
          e._menu.contains(t.target) &&
          (("keyup" === t.type && "Tab" === t.key) ||
            /input|select|option|textarea|form/i.test(t.target.tagName))
        )
          continue;
        const o = { relatedTarget: e._element };
        "click" === t.type && (o.clickEvent = t), e._completeHide(o);
      }
    }
    static dataApiKeydownHandler(t) {
      const e = /input|textarea/i.test(t.target.tagName),
        i = "Escape" === t.key,
        n = [Xe, Ye].includes(t.key);
      if (!n && !i) return;
      if (e && !i) return;
      t.preventDefault();
      const s = this.matches(Ze)
          ? this
          : Q.prev(this, Ze)[0] ||
            Q.next(this, Ze)[0] ||
            Q.findOne(Ze, t.delegateTarget.parentNode),
        o = hi.getOrCreateInstance(s);
      if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
      o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
    }
  }
  P.on(document, Ge, Ze, hi.dataApiKeydownHandler),
    P.on(document, Ge, ei, hi.dataApiKeydownHandler),
    P.on(document, Ue, hi.clearMenus),
    P.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus),
    P.on(document, Ue, Ze, function (t) {
      t.preventDefault(), hi.getOrCreateInstance(this).toggle();
    }),
    g(hi);
  const di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    ui = ".sticky-top",
    fi = "padding-right",
    pi = "margin-right";
  class gi {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, fi, (e) => e + t),
        this._setElementAttributes(di, fi, (e) => e + t),
        this._setElementAttributes(ui, pi, (e) => e - t);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, fi),
        this._resetElementAttributes(di, fi),
        this._resetElementAttributes(ui, pi);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + n)
          return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t).getPropertyValue(e);
        t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
      });
    }
    _saveInitialAttribute(t, e) {
      const i = t.style.getPropertyValue(e);
      i && B.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const i = B.getDataAttribute(t, e);
        null !== i
          ? (B.removeDataAttribute(t, e), t.style.setProperty(e, i))
          : t.style.removeProperty(e);
      });
    }
    _applyManipulationCallback(t, e) {
      if (o(t)) e(t);
      else for (const i of Q.find(t, this._element)) e(i);
    }
  }
  const mi = "show",
    _i = "mousedown.bs.backdrop",
    bi = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      rootElement: "body",
    },
    vi = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)",
    };
  class yi extends F {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    static get Default() {
      return bi;
    }
    static get DefaultType() {
      return vi;
    }
    static get NAME() {
      return "backdrop";
    }
    show(t) {
      if (!this._config.isVisible) return void m(t);
      this._append();
      const e = this._getElement();
      this._config.isAnimated && d(e),
        e.classList.add(mi),
        this._emulateAnimation(() => {
          m(t);
        });
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove(mi),
          this._emulateAnimation(() => {
            this.dispose(), m(t);
          }))
        : m(t);
    }
    dispose() {
      this._isAppended &&
        (P.off(this._element, _i),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = this._config.className),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t);
      }
      return this._element;
    }
    _configAfterMerge(t) {
      return (t.rootElement = r(t.rootElement)), t;
    }
    _append() {
      if (this._isAppended) return;
      const t = this._getElement();
      this._config.rootElement.append(t),
        P.on(t, _i, () => {
          m(this._config.clickCallback);
        }),
        (this._isAppended = !0);
    }
    _emulateAnimation(t) {
      _(t, this._getElement(), this._config.isAnimated);
    }
  }
  const wi = ".bs.focustrap",
    Ai = "backward",
    Ei = { autofocus: !0, trapElement: null },
    Ti = { autofocus: "boolean", trapElement: "element" };
  class Ci extends F {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    static get Default() {
      return Ei;
    }
    static get DefaultType() {
      return Ti;
    }
    static get NAME() {
      return "focustrap";
    }
    activate() {
      this._isActive ||
        (this._config.autofocus && this._config.trapElement.focus(),
        P.off(document, wi),
        P.on(document, "focusin.bs.focustrap", (t) => this._handleFocusin(t)),
        P.on(document, "keydown.tab.bs.focustrap", (t) =>
          this._handleKeydown(t)
        ),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), P.off(document, wi));
    }
    _handleFocusin(t) {
      const { trapElement: e } = this._config;
      if (t.target === document || t.target === e || e.contains(t.target))
        return;
      const i = Q.focusableChildren(e);
      0 === i.length
        ? e.focus()
        : this._lastTabNavDirection === Ai
        ? i[i.length - 1].focus()
        : i[0].focus();
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? Ai : "forward");
    }
  }
  const Oi = "hidden.bs.modal",
    xi = "show.bs.modal",
    ki = "modal-open",
    Li = "show",
    Di = "modal-static",
    Si = { backdrop: !0, focus: !0, keyboard: !0 },
    Ii = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean",
    };
  class Ni extends z {
    constructor(t, e) {
      super(t, e),
        (this._dialog = Q.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new gi()),
        this._addEventListeners();
    }
    static get Default() {
      return Si;
    }
    static get DefaultType() {
      return Ii;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        this._isTransitioning ||
        P.trigger(this._element, xi, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(ki),
        this._adjustDialog(),
        this._backdrop.show(() => this._showElement(t)));
    }
    hide() {
      this._isShown &&
        !this._isTransitioning &&
        (P.trigger(this._element, "hide.bs.modal").defaultPrevented ||
          ((this._isShown = !1),
          (this._isTransitioning = !0),
          this._focustrap.deactivate(),
          this._element.classList.remove(Li),
          this._queueCallback(
            () => this._hideModal(),
            this._element,
            this._isAnimated()
          )));
    }
    dispose() {
      for (const t of [window, this._dialog]) P.off(t, ".bs.modal");
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new yi({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new Ci({ trapElement: this._element });
    }
    _showElement(t) {
      document.body.contains(this._element) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0);
      const e = Q.findOne(".modal-body", this._dialog);
      e && (e.scrollTop = 0),
        d(this._element),
        this._element.classList.add(Li),
        this._queueCallback(
          () => {
            this._config.focus && this._focustrap.activate(),
              (this._isTransitioning = !1),
              P.trigger(this._element, "shown.bs.modal", { relatedTarget: t });
          },
          this._dialog,
          this._isAnimated()
        );
    }
    _addEventListeners() {
      P.on(this._element, "keydown.dismiss.bs.modal", (t) => {
        if ("Escape" === t.key)
          return this._config.keyboard
            ? (t.preventDefault(), void this.hide())
            : void this._triggerBackdropTransition();
      }),
        P.on(window, "resize.bs.modal", () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }),
        P.on(this._element, "mousedown.dismiss.bs.modal", (t) => {
          P.one(this._element, "click.dismiss.bs.modal", (e) => {
            this._element === t.target &&
              this._element === e.target &&
              ("static" !== this._config.backdrop
                ? this._config.backdrop && this.hide()
                : this._triggerBackdropTransition());
          });
        });
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(ki),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            P.trigger(this._element, Oi);
        });
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
        return;
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._element.style.overflowY;
      "hidden" === e ||
        this._element.classList.contains(Di) ||
        (t || (this._element.style.overflowY = "hidden"),
        this._element.classList.add(Di),
        this._queueCallback(() => {
          this._element.classList.remove(Di),
            this._queueCallback(() => {
              this._element.style.overflowY = e;
            }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      if (i && !t) {
        const t = p() ? "paddingLeft" : "paddingRight";
        this._element.style[t] = `${e}px`;
      }
      if (!i && t) {
        const t = p() ? "paddingRight" : "paddingLeft";
        this._element.style[t] = `${e}px`;
      }
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = Ni.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.modal.data-api",
    '[data-bs-toggle="modal"]',
    function (t) {
      const e = n(this);
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        P.one(e, xi, (t) => {
          t.defaultPrevented ||
            P.one(e, Oi, () => {
              a(this) && this.focus();
            });
        });
      const i = Q.findOne(".modal.show");
      i && Ni.getInstance(i).hide(), Ni.getOrCreateInstance(e).toggle(this);
    }
  ),
    q(Ni),
    g(Ni);
  const Pi = "show",
    ji = "showing",
    Mi = "hiding",
    Hi = ".offcanvas.show",
    $i = "hidePrevented.bs.offcanvas",
    Wi = "hidden.bs.offcanvas",
    Bi = { backdrop: !0, keyboard: !0, scroll: !1 },
    Fi = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean",
    };
  class zi extends z {
    constructor(t, e) {
      super(t, e),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get Default() {
      return Bi;
    }
    static get DefaultType() {
      return Fi;
    }
    static get NAME() {
      return "offcanvas";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        P.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
          .defaultPrevented ||
        ((this._isShown = !0),
        this._backdrop.show(),
        this._config.scroll || new gi().hide(),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(ji),
        this._queueCallback(
          () => {
            (this._config.scroll && !this._config.backdrop) ||
              this._focustrap.activate(),
              this._element.classList.add(Pi),
              this._element.classList.remove(ji),
              P.trigger(this._element, "shown.bs.offcanvas", {
                relatedTarget: t,
              });
          },
          this._element,
          !0
        ));
    }
    hide() {
      this._isShown &&
        (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
          (this._focustrap.deactivate(),
          this._element.blur(),
          (this._isShown = !1),
          this._element.classList.add(Mi),
          this._backdrop.hide(),
          this._queueCallback(
            () => {
              this._element.classList.remove(Pi, Mi),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || new gi().reset(),
                P.trigger(this._element, Wi);
            },
            this._element,
            !0
          )));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const t = Boolean(this._config.backdrop);
      return new yi({
        className: "offcanvas-backdrop",
        isVisible: t,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: t
          ? () => {
              "static" !== this._config.backdrop
                ? this.hide()
                : P.trigger(this._element, $i);
            }
          : null,
      });
    }
    _initializeFocusTrap() {
      return new Ci({ trapElement: this._element });
    }
    _addEventListeners() {
      P.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
        "Escape" === t.key &&
          (this._config.keyboard ? this.hide() : P.trigger(this._element, $i));
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = zi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.offcanvas.data-api",
    '[data-bs-toggle="offcanvas"]',
    function (t) {
      const e = n(this);
      if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)))
        return;
      P.one(e, Wi, () => {
        a(this) && this.focus();
      });
      const i = Q.findOne(Hi);
      i && i !== e && zi.getInstance(i).hide(),
        zi.getOrCreateInstance(e).toggle(this);
    }
  ),
    P.on(window, "load.bs.offcanvas.data-api", () => {
      for (const t of Q.find(Hi)) zi.getOrCreateInstance(t).show();
    }),
    P.on(window, "resize.bs.offcanvas", () => {
      for (const t of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))
        "fixed" !== getComputedStyle(t).position &&
          zi.getOrCreateInstance(t).hide();
    }),
    q(zi),
    g(zi);
  const qi = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    Ri = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    Vi =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Ki = (t, e) => {
      const i = t.nodeName.toLowerCase();
      return e.includes(i)
        ? !qi.has(i) || Boolean(Ri.test(t.nodeValue) || Vi.test(t.nodeValue))
        : e.filter((t) => t instanceof RegExp).some((t) => t.test(i));
    },
    Qi = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    Xi = {
      allowList: Qi,
      content: {},
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>",
    },
    Yi = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string",
    },
    Ui = {
      entry: "(string|element|function|null)",
      selector: "(string|element)",
    };
  class Gi extends F {
    constructor(t) {
      super(), (this._config = this._getConfig(t));
    }
    static get Default() {
      return Xi;
    }
    static get DefaultType() {
      return Yi;
    }
    static get NAME() {
      return "TemplateFactory";
    }
    getContent() {
      return Object.values(this._config.content)
        .map((t) => this._resolvePossibleFunction(t))
        .filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(t) {
      return (
        this._checkContent(t),
        (this._config.content = { ...this._config.content, ...t }),
        this
      );
    }
    toHtml() {
      const t = document.createElement("div");
      t.innerHTML = this._maybeSanitize(this._config.template);
      for (const [e, i] of Object.entries(this._config.content))
        this._setContent(t, i, e);
      const e = t.children[0],
        i = this._resolvePossibleFunction(this._config.extraClass);
      return i && e.classList.add(...i.split(" ")), e;
    }
    _typeCheckConfig(t) {
      super._typeCheckConfig(t), this._checkContent(t.content);
    }
    _checkContent(t) {
      for (const [e, i] of Object.entries(t))
        super._typeCheckConfig({ selector: e, entry: i }, Ui);
    }
    _setContent(t, e, i) {
      const n = Q.findOne(i, t);
      n &&
        ((e = this._resolvePossibleFunction(e))
          ? o(e)
            ? this._putElementInTemplate(r(e), n)
            : this._config.html
            ? (n.innerHTML = this._maybeSanitize(e))
            : (n.textContent = e)
          : n.remove());
    }
    _maybeSanitize(t) {
      return this._config.sanitize
        ? (function (t, e, i) {
            if (!t.length) return t;
            if (i && "function" == typeof i) return i(t);
            const n = new window.DOMParser().parseFromString(t, "text/html"),
              s = [].concat(...n.body.querySelectorAll("*"));
            for (const t of s) {
              const i = t.nodeName.toLowerCase();
              if (!Object.keys(e).includes(i)) {
                t.remove();
                continue;
              }
              const n = [].concat(...t.attributes),
                s = [].concat(e["*"] || [], e[i] || []);
              for (const e of n) Ki(e, s) || t.removeAttribute(e.nodeName);
            }
            return n.body.innerHTML;
          })(t, this._config.allowList, this._config.sanitizeFn)
        : t;
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t(this) : t;
    }
    _putElementInTemplate(t, e) {
      if (this._config.html) return (e.innerHTML = ""), void e.append(t);
      e.textContent = t.textContent;
    }
  }
  const Ji = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Zi = "fade",
    tn = "show",
    en = ".modal",
    nn = "hide.bs.modal",
    sn = "hover",
    on = "focus",
    rn = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: p() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: p() ? "right" : "left",
    },
    an = {
      allowList: Qi,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 0],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus",
    },
    ln = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
    };
  class cn extends z {
    constructor(t, e) {
      if (void 0 === Ke)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t, e),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._isHovered = null),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._templateFactory = null),
        (this._newContent = null),
        (this.tip = null),
        this._setListeners(),
        this._config.selector || this._fixTitle();
    }
    static get Default() {
      return an;
    }
    static get DefaultType() {
      return ln;
    }
    static get NAME() {
      return "tooltip";
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      this._isEnabled &&
        ((this._activeTrigger.click = !this._activeTrigger.click),
        this._isShown() ? this._leave() : this._enter());
    }
    dispose() {
      clearTimeout(this._timeout),
        P.off(this._element.closest(en), nn, this._hideModalHandler),
        this.tip && this.tip.remove(),
        this._element.getAttribute("data-bs-original-title") &&
          this._element.setAttribute(
            "title",
            this._element.getAttribute("data-bs-original-title")
          ),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this._isWithContent() || !this._isEnabled) return;
      const t = P.trigger(this._element, this.constructor.eventName("show")),
        e = (
          c(this._element) || this._element.ownerDocument.documentElement
        ).contains(this._element);
      if (t.defaultPrevented || !e) return;
      this.tip && (this.tip.remove(), (this.tip = null));
      const i = this._getTipElement();
      this._element.setAttribute("aria-describedby", i.getAttribute("id"));
      const { container: n } = this._config;
      if (
        (this._element.ownerDocument.documentElement.contains(this.tip) ||
          (n.append(i),
          P.trigger(this._element, this.constructor.eventName("inserted"))),
        this._popper
          ? this._popper.update()
          : (this._popper = this._createPopper(i)),
        i.classList.add(tn),
        "ontouchstart" in document.documentElement)
      )
        for (const t of [].concat(...document.body.children))
          P.on(t, "mouseover", h);
      this._queueCallback(
        () => {
          P.trigger(this._element, this.constructor.eventName("shown")),
            !1 === this._isHovered && this._leave(),
            (this._isHovered = !1);
        },
        this.tip,
        this._isAnimated()
      );
    }
    hide() {
      if (!this._isShown()) return;
      if (
        P.trigger(this._element, this.constructor.eventName("hide"))
          .defaultPrevented
      )
        return;
      const t = this._getTipElement();
      if ((t.classList.remove(tn), "ontouchstart" in document.documentElement))
        for (const t of [].concat(...document.body.children))
          P.off(t, "mouseover", h);
      (this._activeTrigger.click = !1),
        (this._activeTrigger.focus = !1),
        (this._activeTrigger.hover = !1),
        (this._isHovered = null),
        this._queueCallback(
          () => {
            this._isWithActiveTrigger() ||
              (this._isHovered || t.remove(),
              this._element.removeAttribute("aria-describedby"),
              P.trigger(this._element, this.constructor.eventName("hidden")),
              this._disposePopper());
          },
          this.tip,
          this._isAnimated()
        );
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      return (
        this.tip ||
          (this.tip = this._createTipElement(
            this._newContent || this._getContentForTemplate()
          )),
        this.tip
      );
    }
    _createTipElement(t) {
      const e = this._getTemplateFactory(t).toHtml();
      if (!e) return null;
      e.classList.remove(Zi, tn),
        e.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i = ((t) => {
        do {
          t += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
      })(this.constructor.NAME).toString();
      return (
        e.setAttribute("id", i), this._isAnimated() && e.classList.add(Zi), e
      );
    }
    setContent(t) {
      (this._newContent = t),
        this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(t) {
      return (
        this._templateFactory
          ? this._templateFactory.changeContent(t)
          : (this._templateFactory = new Gi({
              ...this._config,
              content: t,
              extraClass: this._resolvePossibleFunction(
                this._config.customClass
              ),
            })),
        this._templateFactory
      );
    }
    _getContentForTemplate() {
      return { ".tooltip-inner": this._getTitle() };
    }
    _getTitle() {
      return (
        this._resolvePossibleFunction(this._config.title) ||
        this._element.getAttribute("data-bs-original-title")
      );
    }
    _initializeOnDelegatedTarget(t) {
      return this.constructor.getOrCreateInstance(
        t.delegateTarget,
        this._getDelegateConfig()
      );
    }
    _isAnimated() {
      return (
        this._config.animation || (this.tip && this.tip.classList.contains(Zi))
      );
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(tn);
    }
    _createPopper(t) {
      const e =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, t, this._element)
            : this._config.placement,
        i = rn[e.toUpperCase()];
      return Ve(this._element, t, this._getPopperConfig(i));
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t.call(this._element) : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: (t) => {
              this._getTipElement().setAttribute(
                "data-popper-placement",
                t.state.placement
              );
            },
          },
        ],
      };
      return {
        ...e,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig),
      };
    }
    _setListeners() {
      const t = this._config.trigger.split(" ");
      for (const e of t)
        if ("click" === e)
          P.on(
            this._element,
            this.constructor.eventName("click"),
            this._config.selector,
            (t) => {
              this._initializeOnDelegatedTarget(t).toggle();
            }
          );
        else if ("manual" !== e) {
          const t =
              e === sn
                ? this.constructor.eventName("mouseenter")
                : this.constructor.eventName("focusin"),
            i =
              e === sn
                ? this.constructor.eventName("mouseleave")
                : this.constructor.eventName("focusout");
          P.on(this._element, t, this._config.selector, (t) => {
            const e = this._initializeOnDelegatedTarget(t);
            (e._activeTrigger["focusin" === t.type ? on : sn] = !0), e._enter();
          }),
            P.on(this._element, i, this._config.selector, (t) => {
              const e = this._initializeOnDelegatedTarget(t);
              (e._activeTrigger["focusout" === t.type ? on : sn] =
                e._element.contains(t.relatedTarget)),
                e._leave();
            });
        }
      (this._hideModalHandler = () => {
        this._element && this.hide();
      }),
        P.on(this._element.closest(en), nn, this._hideModalHandler);
    }
    _fixTitle() {
      const t = this._element.getAttribute("title");
      t &&
        (this._element.getAttribute("aria-label") ||
          this._element.textContent.trim() ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("data-bs-original-title", t),
        this._element.removeAttribute("title"));
    }
    _enter() {
      this._isShown() || this._isHovered
        ? (this._isHovered = !0)
        : ((this._isHovered = !0),
          this._setTimeout(() => {
            this._isHovered && this.show();
          }, this._config.delay.show));
    }
    _leave() {
      this._isWithActiveTrigger() ||
        ((this._isHovered = !1),
        this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
    }
    _setTimeout(t, e) {
      clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0);
    }
    _getConfig(t) {
      const e = B.getDataAttributes(this._element);
      for (const t of Object.keys(e)) Ji.has(t) && delete e[t];
      return (
        (t = { ...e, ...("object" == typeof t && t ? t : {}) }),
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return (
        (t.container = !1 === t.container ? document.body : r(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      for (const e in this._config)
        this.constructor.Default[e] !== this._config[e] &&
          (t[e] = this._config[e]);
      return (t.selector = !1), (t.trigger = "manual"), t;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = cn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  g(cn);
  const hn = {
      ...cn.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click",
    },
    dn = { ...cn.DefaultType, content: "(null|string|element|function)" };
  class un extends cn {
    static get Default() {
      return hn;
    }
    static get DefaultType() {
      return dn;
    }
    static get NAME() {
      return "popover";
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return {
        ".popover-header": this._getTitle(),
        ".popover-body": this._getContent(),
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = un.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  g(un);
  const fn = "click.bs.scrollspy",
    pn = "active",
    gn = "[href]",
    mn = {
      offset: null,
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [0.1, 0.5, 1],
    },
    _n = {
      offset: "(number|null)",
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array",
    };
  class bn extends z {
    constructor(t, e) {
      super(t, e),
        (this._targetLinks = new Map()),
        (this._observableSections = new Map()),
        (this._rootElement =
          "visible" === getComputedStyle(this._element).overflowY
            ? null
            : this._element),
        (this._activeTarget = null),
        (this._observer = null),
        (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
        this.refresh();
    }
    static get Default() {
      return mn;
    }
    static get DefaultType() {
      return _n;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      this._initializeTargetsAndObservables(),
        this._maybeEnableSmoothScroll(),
        this._observer
          ? this._observer.disconnect()
          : (this._observer = this._getNewObserver());
      for (const t of this._observableSections.values())
        this._observer.observe(t);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(t) {
      return (
        (t.target = r(t.target) || document.body),
        (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
        "string" == typeof t.threshold &&
          (t.threshold = t.threshold
            .split(",")
            .map((t) => Number.parseFloat(t))),
        t
      );
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll &&
        (P.off(this._config.target, fn),
        P.on(this._config.target, fn, gn, (t) => {
          const e = this._observableSections.get(t.target.hash);
          if (e) {
            t.preventDefault();
            const i = this._rootElement || window,
              n = e.offsetTop - this._element.offsetTop;
            if (i.scrollTo)
              return void i.scrollTo({ top: n, behavior: "smooth" });
            i.scrollTop = n;
          }
        }));
    }
    _getNewObserver() {
      const t = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin,
      };
      return new IntersectionObserver((t) => this._observerCallback(t), t);
    }
    _observerCallback(t) {
      const e = (t) => this._targetLinks.get(`#${t.target.id}`),
        i = (t) => {
          (this._previousScrollData.visibleEntryTop = t.target.offsetTop),
            this._process(e(t));
        },
        n = (this._rootElement || document.documentElement).scrollTop,
        s = n >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = n;
      for (const o of t) {
        if (!o.isIntersecting) {
          (this._activeTarget = null), this._clearActiveClass(e(o));
          continue;
        }
        const t =
          o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (s && t) {
          if ((i(o), !n)) return;
        } else s || t || i(o);
      }
    }
    _initializeTargetsAndObservables() {
      (this._targetLinks = new Map()), (this._observableSections = new Map());
      const t = Q.find(gn, this._config.target);
      for (const e of t) {
        if (!e.hash || l(e)) continue;
        const t = Q.findOne(e.hash, this._element);
        a(t) &&
          (this._targetLinks.set(e.hash, e),
          this._observableSections.set(e.hash, t));
      }
    }
    _process(t) {
      this._activeTarget !== t &&
        (this._clearActiveClass(this._config.target),
        (this._activeTarget = t),
        t.classList.add(pn),
        this._activateParents(t),
        P.trigger(this._element, "activate.bs.scrollspy", {
          relatedTarget: t,
        }));
    }
    _activateParents(t) {
      if (t.classList.contains("dropdown-item"))
        Q.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(pn);
      else
        for (const e of Q.parents(t, ".nav, .list-group"))
          for (const t of Q.prev(
            e,
            ".nav-link, .nav-item > .nav-link, .list-group-item"
          ))
            t.classList.add(pn);
    }
    _clearActiveClass(t) {
      t.classList.remove(pn);
      const e = Q.find("[href].active", t);
      for (const t of e) t.classList.remove(pn);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = bn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(window, "load.bs.scrollspy.data-api", () => {
    for (const t of Q.find('[data-bs-spy="scroll"]')) bn.getOrCreateInstance(t);
  }),
    g(bn);
  const vn = "ArrowLeft",
    yn = "ArrowRight",
    wn = "ArrowUp",
    An = "ArrowDown",
    En = "active",
    Tn = "fade",
    Cn = "show",
    On =
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    xn = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${On}`;
  class kn extends z {
    constructor(t) {
      super(t),
        (this._parent = this._element.closest(
          '.list-group, .nav, [role="tablist"]'
        )),
        this._parent &&
          (this._setInitialAttributes(this._parent, this._getChildren()),
          P.on(this._element, "keydown.bs.tab", (t) => this._keydown(t)));
    }
    static get NAME() {
      return "tab";
    }
    show() {
      const t = this._element;
      if (this._elemIsActive(t)) return;
      const e = this._getActiveElem(),
        i = e ? P.trigger(e, "hide.bs.tab", { relatedTarget: t }) : null;
      P.trigger(t, "show.bs.tab", { relatedTarget: e }).defaultPrevented ||
        (i && i.defaultPrevented) ||
        (this._deactivate(e, t), this._activate(t, e));
    }
    _activate(t, e) {
      t &&
        (t.classList.add(En),
        this._activate(n(t)),
        this._queueCallback(
          () => {
            "tab" === t.getAttribute("role")
              ? (t.removeAttribute("tabindex"),
                t.setAttribute("aria-selected", !0),
                this._toggleDropDown(t, !0),
                P.trigger(t, "shown.bs.tab", { relatedTarget: e }))
              : t.classList.add(Cn);
          },
          t,
          t.classList.contains(Tn)
        ));
    }
    _deactivate(t, e) {
      t &&
        (t.classList.remove(En),
        t.blur(),
        this._deactivate(n(t)),
        this._queueCallback(
          () => {
            "tab" === t.getAttribute("role")
              ? (t.setAttribute("aria-selected", !1),
                t.setAttribute("tabindex", "-1"),
                this._toggleDropDown(t, !1),
                P.trigger(t, "hidden.bs.tab", { relatedTarget: e }))
              : t.classList.remove(Cn);
          },
          t,
          t.classList.contains(Tn)
        ));
    }
    _keydown(t) {
      if (![vn, yn, wn, An].includes(t.key)) return;
      t.stopPropagation(), t.preventDefault();
      const e = [yn, An].includes(t.key),
        i = b(
          this._getChildren().filter((t) => !l(t)),
          t.target,
          e,
          !0
        );
      i && (i.focus({ preventScroll: !0 }), kn.getOrCreateInstance(i).show());
    }
    _getChildren() {
      return Q.find(xn, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((t) => this._elemIsActive(t)) || null;
    }
    _setInitialAttributes(t, e) {
      this._setAttributeIfNotExists(t, "role", "tablist");
      for (const t of e) this._setInitialAttributesOnChild(t);
    }
    _setInitialAttributesOnChild(t) {
      t = this._getInnerElement(t);
      const e = this._elemIsActive(t),
        i = this._getOuterElement(t);
      t.setAttribute("aria-selected", e),
        i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
        e || t.setAttribute("tabindex", "-1"),
        this._setAttributeIfNotExists(t, "role", "tab"),
        this._setInitialAttributesOnTargetPanel(t);
    }
    _setInitialAttributesOnTargetPanel(t) {
      const e = n(t);
      e &&
        (this._setAttributeIfNotExists(e, "role", "tabpanel"),
        t.id &&
          this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`));
    }
    _toggleDropDown(t, e) {
      const i = this._getOuterElement(t);
      if (!i.classList.contains("dropdown")) return;
      const n = (t, n) => {
        const s = Q.findOne(t, i);
        s && s.classList.toggle(n, e);
      };
      n(".dropdown-toggle", En),
        n(".dropdown-menu", Cn),
        i.setAttribute("aria-expanded", e);
    }
    _setAttributeIfNotExists(t, e, i) {
      t.hasAttribute(e) || t.setAttribute(e, i);
    }
    _elemIsActive(t) {
      return t.classList.contains(En);
    }
    _getInnerElement(t) {
      return t.matches(xn) ? t : Q.findOne(xn, t);
    }
    _getOuterElement(t) {
      return t.closest(".nav-item, .list-group-item") || t;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = kn.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(document, "click.bs.tab", On, function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
      l(this) || kn.getOrCreateInstance(this).show();
  }),
    P.on(window, "load.bs.tab", () => {
      for (const t of Q.find(
        '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'
      ))
        kn.getOrCreateInstance(t);
    }),
    g(kn);
  const Ln = "hide",
    Dn = "show",
    Sn = "showing",
    In = { animation: "boolean", autohide: "boolean", delay: "number" },
    Nn = { animation: !0, autohide: !0, delay: 5e3 };
  class Pn extends z {
    constructor(t, e) {
      super(t, e),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get Default() {
      return Nn;
    }
    static get DefaultType() {
      return In;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      P.trigger(this._element, "show.bs.toast").defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade"),
        this._element.classList.remove(Ln),
        d(this._element),
        this._element.classList.add(Dn, Sn),
        this._queueCallback(
          () => {
            this._element.classList.remove(Sn),
              P.trigger(this._element, "shown.bs.toast"),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        ));
    }
    hide() {
      this.isShown() &&
        (P.trigger(this._element, "hide.bs.toast").defaultPrevented ||
          (this._element.classList.add(Sn),
          this._queueCallback(
            () => {
              this._element.classList.add(Ln),
                this._element.classList.remove(Sn, Dn),
                P.trigger(this._element, "hidden.bs.toast");
            },
            this._element,
            this._config.animation
          )));
    }
    dispose() {
      this._clearTimeout(),
        this.isShown() && this._element.classList.remove(Dn),
        super.dispose();
    }
    isShown() {
      return this._element.classList.contains(Dn);
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      P.on(this._element, "mouseover.bs.toast", (t) =>
        this._onInteraction(t, !0)
      ),
        P.on(this._element, "mouseout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        ),
        P.on(this._element, "focusin.bs.toast", (t) =>
          this._onInteraction(t, !0)
        ),
        P.on(this._element, "focusout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        );
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Pn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return (
    q(Pn),
    g(Pn),
    {
      Alert: R,
      Button: K,
      Carousel: at,
      Collapse: pt,
      Dropdown: hi,
      Modal: Ni,
      Offcanvas: zi,
      Popover: un,
      ScrollSpy: bn,
      Tab: kn,
      Toast: Pn,
      Tooltip: cn,
    }
  );
});

/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/ (function () {
  var a,
    b,
    c,
    d,
    e,
    f = function (a, b) {
      return function () {
        return a.apply(b, arguments);
      };
    },
    g =
      [].indexOf ||
      function (a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (b in this && this[b] === a) return b;
        return -1;
      };
  (b = (function () {
    function a() {}
    return (
      (a.prototype.extend = function (a, b) {
        var c, d;
        for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
        return a;
      }),
      (a.prototype.isMobile = function (a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          a
        );
      }),
      (a.prototype.createEvent = function (a, b, c, d) {
        var e;
        return (
          null == b && (b = !1),
          null == c && (c = !1),
          null == d && (d = null),
          null != document.createEvent
            ? ((e = document.createEvent("CustomEvent")),
              e.initCustomEvent(a, b, c, d))
            : null != document.createEventObject
            ? ((e = document.createEventObject()), (e.eventType = a))
            : (e.eventName = a),
          e
        );
      }),
      (a.prototype.emitEvent = function (a, b) {
        return null != a.dispatchEvent
          ? a.dispatchEvent(b)
          : b in (null != a)
          ? a[b]()
          : "on" + b in (null != a)
          ? a["on" + b]()
          : void 0;
      }),
      (a.prototype.addEvent = function (a, b, c) {
        return null != a.addEventListener
          ? a.addEventListener(b, c, !1)
          : null != a.attachEvent
          ? a.attachEvent("on" + b, c)
          : (a[b] = c);
      }),
      (a.prototype.removeEvent = function (a, b, c) {
        return null != a.removeEventListener
          ? a.removeEventListener(b, c, !1)
          : null != a.detachEvent
          ? a.detachEvent("on" + b, c)
          : delete a[b];
      }),
      (a.prototype.innerHeight = function () {
        return "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.clientHeight;
      }),
      a
    );
  })()),
    (c =
      this.WeakMap ||
      this.MozWeakMap ||
      (c = (function () {
        function a() {
          (this.keys = []), (this.values = []);
        }
        return (
          (a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
              if (((c = f[b]), c === a)) return this.values[b];
          }),
          (a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
              if (((d = g[c]), d === a)) return void (this.values[c] = b);
            return this.keys.push(a), this.values.push(b);
          }),
          a
        );
      })())),
    (a =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      (a = (function () {
        function a() {
          "undefined" != typeof console &&
            null !== console &&
            console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console &&
              null !== console &&
              console.warn(
                "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
              );
        }
        return (a.notSupported = !0), (a.prototype.observe = function () {}), a;
      })())),
    (d =
      this.getComputedStyle ||
      function (a, b) {
        return (
          (this.getPropertyValue = function (b) {
            var c;
            return (
              "float" === b && (b = "styleFloat"),
              e.test(b) &&
                b.replace(e, function (a, b) {
                  return b.toUpperCase();
                }),
              (null != (c = a.currentStyle) ? c[b] : void 0) || null
            );
          }),
          this
        );
      }),
    (e = /(\-([a-z]){1})/g),
    (this.WOW = (function () {
      function e(a) {
        null == a && (a = {}),
          (this.scrollCallback = f(this.scrollCallback, this)),
          (this.scrollHandler = f(this.scrollHandler, this)),
          (this.resetAnimation = f(this.resetAnimation, this)),
          (this.start = f(this.start, this)),
          (this.scrolled = !0),
          (this.config = this.util().extend(a, this.defaults)),
          null != a.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              a.scrollContainer
            )),
          (this.animationNameCache = new c()),
          (this.wowEvent = this.util().createEvent(this.config.boxClass));
      }
      return (
        (e.prototype.defaults = {
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null,
          scrollContainer: null,
        }),
        (e.prototype.init = function () {
          var a;
          return (
            (this.element = window.document.documentElement),
            "interactive" === (a = document.readyState) || "complete" === a
              ? this.start()
              : this.util().addEvent(document, "DOMContentLoaded", this.start),
            (this.finished = [])
          );
        }),
        (e.prototype.start = function () {
          var b, c, d, e;
          if (
            ((this.stopped = !1),
            (this.boxes = function () {
              var a, c, d, e;
              for (
                d = this.element.querySelectorAll("." + this.config.boxClass),
                  e = [],
                  a = 0,
                  c = d.length;
                c > a;
                a++
              )
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            (this.all = function () {
              var a, c, d, e;
              for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            this.boxes.length)
          )
            if (this.disabled()) this.resetStyle();
            else
              for (e = this.boxes, c = 0, d = e.length; d > c; c++)
                (b = e[c]), this.applyStyle(b, !0);
          return (
            this.disabled() ||
              (this.util().addEvent(
                this.config.scrollContainer || window,
                "scroll",
                this.scrollHandler
              ),
              this.util().addEvent(window, "resize", this.scrollHandler),
              (this.interval = setInterval(this.scrollCallback, 50))),
            this.config.live
              ? new a(
                  (function (a) {
                    return function (b) {
                      var c, d, e, f, g;
                      for (g = [], c = 0, d = b.length; d > c; c++)
                        (f = b[c]),
                          g.push(
                            function () {
                              var a, b, c, d;
                              for (
                                c = f.addedNodes || [],
                                  d = [],
                                  a = 0,
                                  b = c.length;
                                b > a;
                                a++
                              )
                                (e = c[a]), d.push(this.doSync(e));
                              return d;
                            }.call(a)
                          );
                      return g;
                    };
                  })(this)
                ).observe(document.body, { childList: !0, subtree: !0 })
              : void 0
          );
        }),
        (e.prototype.stop = function () {
          return (
            (this.stopped = !0),
            this.util().removeEvent(
              this.config.scrollContainer || window,
              "scroll",
              this.scrollHandler
            ),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
          );
        }),
        (e.prototype.sync = function (b) {
          return a.notSupported ? this.doSync(this.element) : void 0;
        }),
        (e.prototype.doSync = function (a) {
          var b, c, d, e, f;
          if ((null == a && (a = this.element), 1 === a.nodeType)) {
            for (
              a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length;
              d > c;
              c++
            )
              (b = e[c]),
                g.call(this.all, b) < 0
                  ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(b, !0),
                    f.push((this.scrolled = !0)))
                  : f.push(void 0);
            return f;
          }
        }),
        (e.prototype.show = function (a) {
          return (
            this.applyStyle(a),
            (a.className = a.className + " " + this.config.animateClass),
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
          );
        }),
        (e.prototype.applyStyle = function (a, b) {
          var c, d, e;
          return (
            (d = a.getAttribute("data-wow-duration")),
            (c = a.getAttribute("data-wow-delay")),
            (e = a.getAttribute("data-wow-iteration")),
            this.animate(
              (function (f) {
                return function () {
                  return f.customStyle(a, b, d, c, e);
                };
              })(this)
            )
          );
        }),
        (e.prototype.animate = (function () {
          return "requestAnimationFrame" in window
            ? function (a) {
                return window.requestAnimationFrame(a);
              }
            : function (a) {
                return a();
              };
        })()),
        (e.prototype.resetStyle = function () {
          var a, b, c, d, e;
          for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
            (a = d[b]), e.push((a.style.visibility = "visible"));
          return e;
        }),
        (e.prototype.resetAnimation = function (a) {
          var b;
          return a.type.toLowerCase().indexOf("animationend") >= 0
            ? ((b = a.target || a.srcElement),
              (b.className = b.className
                .replace(this.config.animateClass, "")
                .trim()))
            : void 0;
        }),
        (e.prototype.customStyle = function (a, b, c, d, e) {
          return (
            b && this.cacheAnimationName(a),
            (a.style.visibility = b ? "hidden" : "visible"),
            c && this.vendorSet(a.style, { animationDuration: c }),
            d && this.vendorSet(a.style, { animationDelay: d }),
            e && this.vendorSet(a.style, { animationIterationCount: e }),
            this.vendorSet(a.style, {
              animationName: b ? "none" : this.cachedAnimationName(a),
            }),
            a
          );
        }),
        (e.prototype.vendors = ["moz", "webkit"]),
        (e.prototype.vendorSet = function (a, b) {
          var c, d, e, f;
          d = [];
          for (c in b)
            (e = b[c]),
              (a["" + c] = e),
              d.push(
                function () {
                  var b, d, g, h;
                  for (
                    g = this.vendors, h = [], b = 0, d = g.length;
                    d > b;
                    b++
                  )
                    (f = g[b]),
                      h.push(
                        (a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] =
                          e)
                      );
                  return h;
                }.call(this)
              );
          return d;
        }),
        (e.prototype.vendorCSS = function (a, b) {
          var c, e, f, g, h, i;
          for (
            h = d(a),
              g = h.getPropertyCSSValue(b),
              f = this.vendors,
              c = 0,
              e = f.length;
            e > c;
            c++
          )
            (i = f[c]), (g = g || h.getPropertyCSSValue("-" + i + "-" + b));
          return g;
        }),
        (e.prototype.animationName = function (a) {
          var b;
          try {
            b = this.vendorCSS(a, "animation-name").cssText;
          } catch (c) {
            b = d(a).getPropertyValue("animation-name");
          }
          return "none" === b ? "" : b;
        }),
        (e.prototype.cacheAnimationName = function (a) {
          return this.animationNameCache.set(a, this.animationName(a));
        }),
        (e.prototype.cachedAnimationName = function (a) {
          return this.animationNameCache.get(a);
        }),
        (e.prototype.scrollHandler = function () {
          return (this.scrolled = !0);
        }),
        (e.prototype.scrollCallback = function () {
          var a;
          return !this.scrolled ||
            ((this.scrolled = !1),
            (this.boxes = function () {
              var b, c, d, e;
              for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
              return e;
            }.call(this)),
            this.boxes.length || this.config.live)
            ? void 0
            : this.stop();
        }),
        (e.prototype.offsetTop = function (a) {
          for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
          for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
          return b;
        }),
        (e.prototype.isVisible = function (a) {
          var b, c, d, e, f;
          return (
            (c = a.getAttribute("data-wow-offset") || this.config.offset),
            (f =
              (this.config.scrollContainer &&
                this.config.scrollContainer.scrollTop) ||
              window.pageYOffset),
            (e =
              f +
              Math.min(this.element.clientHeight, this.util().innerHeight()) -
              c),
            (d = this.offsetTop(a)),
            (b = d + a.clientHeight),
            e >= d && b >= f
          );
        }),
        (e.prototype.util = function () {
          return null != this._util ? this._util : (this._util = new b());
        }),
        (e.prototype.disabled = function () {
          return (
            !this.config.mobile && this.util().isMobile(navigator.userAgent)
          );
        }),
        e
      );
    })());
}).call(this);

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!(function (a, b, c, d) {
  function e(b, c) {
    (this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"],
        },
      }),
      a.each(
        ["onResize", "onThrottledResize"],
        a.proxy(function (b, c) {
          this._handlers[c] = a.proxy(this[c], this);
        }, this)
      ),
      a.each(
        e.Plugins,
        a.proxy(function (a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this)
      ),
      a.each(
        e.Workers,
        a.proxy(function (b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  (e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    slideTransition: "",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
  }),
    (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
    (e.Type = { Event: "event", State: "state" }),
    (e.Plugins = {}),
    (e.Workers = [
      {
        filter: ["width", "settings"],
        run: function () {
          this._width = this.$element.width();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          a.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          this.$stage.children(".cloned").remove();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this.settings.margin || "",
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = {
              width: "auto",
              "margin-left": d ? b : "",
              "margin-right": d ? "" : b,
            };
          !c && this.$stage.children().css(e), (a.css = e);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = [];
          for (a.items = { merge: !1, width: b }; d--; )
            (c = this._mergers[d]),
              (c =
                (this.settings.mergeFit && Math.min(c, this.settings.items)) ||
                c),
              (a.items.merge = c > 1 || a.items.merge),
              (f[d] = e ? b * c : this._items[d].width());
          this._widths = f;
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
            h = "",
            i = "";
          for (g /= 2; g > 0; )
            b.push(this.normalize(b.length / 2, !0)),
              (h += c[b[b.length - 1]][0].outerHTML),
              b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
              (i = c[b[b.length - 1]][0].outerHTML + i),
              (g -= 1);
          (this._clones = b),
            a(h).addClass("cloned").appendTo(this.$stage),
            a(i).addClass("cloned").prependTo(this.$stage);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          for (
            var a = this.settings.rtl ? 1 : -1,
              b = this._clones.length + this._items.length,
              c = -1,
              d = 0,
              e = 0,
              f = [];
            ++c < b;

          )
            (d = f[c - 1] || 0),
              (e = this._widths[this.relative(c)] + this.settings.margin),
              f.push(d + e * a);
          this._coordinates = f;
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
              width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
              "padding-left": a || "",
              "padding-right": a || "",
            };
          this.$stage.css(c);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children();
          if (c && a.items.merge)
            for (; b--; )
              (a.css.width = this._widths[this.relative(b)]),
                d.eq(b).css(a.css);
          else c && ((a.css.width = a.items.width), d.css(a.css));
        },
      },
      {
        filter: ["items"],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr("style");
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          (a.current = a.current ? this.$stage.children().index(a.current) : 0),
            (a.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), a.current)
            )),
            this.reset(a.current);
        },
      },
      {
        filter: ["position"],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: function () {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];
          for (c = 0, d = this._coordinates.length; c < d; c++)
            (a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, "<=", g) && this.op(a, ">", h)) ||
                (this.op(b, "<", g) && this.op(b, ">", h))) &&
                i.push(c);
          this.$stage.children(".active").removeClass("active"),
            this.$stage
              .children(":eq(" + i.join("), :eq(") + ")")
              .addClass("active"),
            this.$stage.children(".center").removeClass("center"),
            this.settings.center &&
              this.$stage.children().eq(this.current()).addClass("center");
        },
      },
    ]),
    (e.prototype.initializeStage = function () {
      (this.$stage = this.$element.find("." + this.settings.stageClass)),
        this.$stage.length ||
          (this.$element.addClass(this.options.loadingClass),
          (this.$stage = a("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass,
          }).wrap(a("<div/>", { class: this.settings.stageOuterClass }))),
          this.$element.append(this.$stage.parent()));
    }),
    (e.prototype.initializeItems = function () {
      var b = this.$element.find(".owl-item");
      if (b.length)
        return (
          (this._items = b.get().map(function (b) {
            return a(b);
          })),
          (this._mergers = this._items.map(function () {
            return 1;
          })),
          void this.refresh()
        );
      this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate("width"),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass);
    }),
    (e.prototype.initialize = function () {
      if (
        (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading"))
      ) {
        var a, b, c;
        (a = this.$element.find("img")),
          (b = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : d),
          (c = this.$element.children(b).width()),
          a.length && c <= 0 && this.preloadAutoWidthImages(a);
      }
      this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized");
    }),
    (e.prototype.isVisible = function () {
      return !this.settings.checkVisibility || this.$element.is(":visible");
    }),
    (e.prototype.setup = function () {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
      c
        ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a));
          }),
          (e = a.extend({}, this.options, c[d])),
          "function" == typeof e.stagePadding &&
            (e.stagePadding = e.stagePadding()),
          delete e.responsive,
          e.responsiveClass &&
            this.$element.attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(
                    "(" + this.options.responsiveClass + "-)\\S+\\s",
                    "g"
                  ),
                  "$1" + d
                )
            ))
        : (e = a.extend({}, this.options)),
        this.trigger("change", { property: { name: "settings", value: e } }),
        (this._breakpoint = d),
        (this.settings = e),
        this.invalidate("settings"),
        this.trigger("changed", {
          property: { name: "settings", value: this.settings },
        });
    }),
    (e.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (e.prototype.prepare = function (b) {
      var c = this.trigger("prepare", { content: b });
      return (
        c.data ||
          (c.data = a("<" + this.settings.itemElement + "/>")
            .addClass(this.options.itemClass)
            .append(b)),
        this.trigger("prepared", { content: c.data }),
        c.data
      );
    }),
    (e.prototype.update = function () {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function (a) {
            return this[a];
          }, this._invalidated),
          e = {};
        b < c;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
          this._pipe[b].run(e),
          b++;
      (this._invalidated = {}), !this.is("valid") && this.enter("valid");
    }),
    (e.prototype.width = function (a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (e.prototype.refresh = function () {
      this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed");
    }),
    (e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ));
    }),
    (e.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.isVisible() &&
        (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented()
          ? (this.leave("resizing"), !1)
          : (this.invalidate("width"),
            this.refresh(),
            this.leave("resizing"),
            void this.trigger("resized")))
      );
    }),
    (e.prototype.registerEventHandlers = function () {
      a.support.transition &&
        this.$stage.on(
          a.support.transition.end + ".owl.core",
          a.proxy(this.onTransitionEnd, this)
        ),
        !1 !== this.settings.responsive &&
          this.on(b, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
          this.$stage.on(
            "dragstart.owl.core selectstart.owl.core",
            function () {
              return !1;
            }
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            "touchstart.owl.core",
            a.proxy(this.onDragStart, this)
          ),
          this.$stage.on(
            "touchcancel.owl.core",
            a.proxy(this.onDragEnd, this)
          ));
    }),
    (e.prototype.onDragStart = function (b) {
      var d = null;
      3 !== b.which &&
        (a.support.transform
          ? ((d = this.$stage
              .css("transform")
              .replace(/.*\(|\)| /g, "")
              .split(",")),
            (d = {
              x: d[16 === d.length ? 12 : 4],
              y: d[16 === d.length ? 13 : 5],
            }))
          : ((d = this.$stage.position()),
            (d = {
              x: this.settings.rtl
                ? d.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : d.left,
              y: d.top,
            })),
        this.is("animating") &&
          (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
          this.invalidate("position")),
        this.$element.toggleClass(
          this.options.grabClass,
          "mousedown" === b.type
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = a(b.target)),
        (this._drag.stage.start = d),
        (this._drag.stage.current = d),
        (this._drag.pointer = this.pointer(b)),
        a(c).on(
          "mouseup.owl.core touchend.owl.core",
          a.proxy(this.onDragEnd, this)
        ),
        a(c).one(
          "mousemove.owl.core touchmove.owl.core",
          a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on(
              "mousemove.owl.core touchmove.owl.core",
              a.proxy(this.onDragMove, this)
            ),
              (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) ||
                (b.preventDefault(),
                this.enter("dragging"),
                this.trigger("drag"));
          }, this)
        ));
    }),
    (e.prototype.onDragMove = function (a) {
      var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
      this.is("dragging") &&
        (a.preventDefault(),
        this.settings.loop
          ? ((b = this.coordinates(this.minimum())),
            (c = this.coordinates(this.maximum() + 1) - b),
            (f.x = ((((f.x - b) % c) + c) % c) + b))
          : ((b = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (c = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
        (this._drag.stage.current = f),
        this.animate(f.x));
    }),
    (e.prototype.onDragEnd = function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
      a(c).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
          this.invalidate("position"),
          this.update(),
          (this._drag.direction = f),
          (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one("click.owl.core", function () {
              return !1;
            })),
        this.is("dragging") &&
          (this.leave("dragging"), this.trigger("dragged"));
    }),
    (e.prototype.closest = function (b, c) {
      var e = -1,
        f = 30,
        g = this.width(),
        h = this.coordinates();
      return (
        this.settings.freeDrag ||
          a.each(
            h,
            a.proxy(function (a, i) {
              return (
                "left" === c && b > i - f && b < i + f
                  ? (e = a)
                  : "right" === c && b > i - g - f && b < i - g + f
                  ? (e = a + 1)
                  : this.op(b, "<", i) &&
                    this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) &&
                    (e = "left" === c ? a + 1 : a),
                -1 === e
              );
            }, this)
          ),
        this.settings.loop ||
          (this.op(b, ">", h[this.minimum()])
            ? (e = b = this.minimum())
            : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
        e
      );
    }),
    (e.prototype.animate = function (b) {
      var c = this.speed() > 0;
      this.is("animating") && this.onTransitionEnd(),
        c && (this.enter("animating"), this.trigger("translate")),
        a.support.transform3d && a.support.transition
          ? this.$stage.css({
              transform: "translate3d(" + b + "px,0px,0px)",
              transition:
                this.speed() / 1e3 +
                "s" +
                (this.settings.slideTransition
                  ? " " + this.settings.slideTransition
                  : ""),
            })
          : c
          ? this.$stage.animate(
              { left: b + "px" },
              this.speed(),
              this.settings.fallbackEasing,
              a.proxy(this.onTransitionEnd, this)
            )
          : this.$stage.css({ left: b + "px" });
    }),
    (e.prototype.is = function (a) {
      return this._states.current[a] && this._states.current[a] > 0;
    }),
    (e.prototype.current = function (a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger("change", {
          property: { name: "position", value: a },
        });
        b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate("position"),
          this.trigger("changed", {
            property: { name: "position", value: this._current },
          });
      }
      return this._current;
    }),
    (e.prototype.invalidate = function (b) {
      return (
        "string" === a.type(b) &&
          ((this._invalidated[b] = !0),
          this.is("valid") && this.leave("valid")),
        a.map(this._invalidated, function (a, b) {
          return b;
        })
      );
    }),
    (e.prototype.reset = function (a) {
      (a = this.normalize(a)) !== d &&
        ((this._speed = 0),
        (this._current = a),
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(a)),
        this.release(["translate", "translated"]));
    }),
    (e.prototype.normalize = function (a, b) {
      var c = this._items.length,
        e = b ? 0 : this._clones.length;
      return (
        !this.isNumeric(a) || c < 1
          ? (a = d)
          : (a < 0 || a >= c + e) &&
            (a = ((((a - e / 2) % c) + c) % c) + e / 2),
        a
      );
    }),
    (e.prototype.relative = function (a) {
      return (a -= this._clones.length / 2), this.normalize(a, !0);
    }),
    (e.prototype.maximum = function (a) {
      var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
      else if (e.autoWidth || e.merge) {
        if ((b = this._items.length))
          for (
            c = this._items[--b].width(), d = this.$element.width();
            b-- && !((c += this._items[b].width() + this.settings.margin) > d);

          );
        f = b + 1;
      } else
        f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }),
    (e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2;
    }),
    (e.prototype.items = function (a) {
      return a === d
        ? this._items.slice()
        : ((a = this.normalize(a, !0)), this._items[a]);
    }),
    (e.prototype.mergers = function (a) {
      return a === d
        ? this._mergers.slice()
        : ((a = this.normalize(a, !0)), this._mergers[a]);
    }),
    (e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
          return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
        };
      return b === d
        ? a.map(this._clones, function (a, b) {
            return f(b);
          })
        : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
          });
    }),
    (e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed;
    }),
    (e.prototype.coordinates = function (b) {
      var c,
        e = 1,
        f = b - 1;
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function (a, b) {
              return this.coordinates(b);
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((e = -1), (f = b + 1)),
              (c = this._coordinates[b]),
              (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
            : (c = this._coordinates[f] || 0),
          (c = Math.ceil(c)));
    }),
    (e.prototype.duration = function (a, b, c) {
      return 0 === c
        ? 0
        : Math.min(Math.max(Math.abs(b - a), 1), 6) *
            Math.abs(c || this.settings.smartSpeed);
    }),
    (e.prototype.to = function (a, b) {
      var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
          (a = c + e),
          (d = ((((a - h) % g) + g) % g) + h) !== a &&
            d - e <= i &&
            d - e > 0 &&
            ((c = d - e), (a = d), this.reset(c)))
        : this.settings.rewind
        ? ((i += 1), (a = ((a % i) + i) % i))
        : (a = Math.max(h, Math.min(i, a))),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.isVisible() && this.update();
    }),
    (e.prototype.next = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) + 1, a);
    }),
    (e.prototype.prev = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) - 1, a);
    }),
    (e.prototype.onTransitionEnd = function (a) {
      if (
        a !== d &&
        (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
      )
        return !1;
      this.leave("animating"), this.trigger("translated");
    }),
    (e.prototype.viewport = function () {
      var d;
      return (
        this.options.responsiveBaseElement !== b
          ? (d = a(this.options.responsiveBaseElement).width())
          : b.innerWidth
          ? (d = b.innerWidth)
          : c.documentElement && c.documentElement.clientWidth
          ? (d = c.documentElement.clientWidth)
          : console.warn("Can not detect viewport width."),
        d
      );
    }),
    (e.prototype.replace = function (b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector &&
          (b = b.find("." + this.settings.nestedItemSelector)),
        b
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            a.proxy(function (a, b) {
              (b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(
                  1 *
                    b
                      .find("[data-merge]")
                      .addBack("[data-merge]")
                      .attr("data-merge") || 1
                );
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate("items");
    }),
    (e.prototype.add = function (b, c) {
      var e = this.relative(this._current);
      (c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger("add", { content: b, position: c }),
        (b = this.prepare(b)),
        0 === this._items.length || c === this._items.length
          ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            ))
          : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(
              c,
              0,
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            )),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate("items"),
        this.trigger("added", { content: b, position: c });
    }),
    (e.prototype.remove = function (a) {
      (a = this.normalize(a, !0)) !== d &&
        (this.trigger("remove", { content: this._items[a], position: a }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate("items"),
        this.trigger("removed", { content: null, position: a }));
    }),
    (e.prototype.preloadAutoWidthImages = function (b) {
      b.each(
        a.proxy(function (b, c) {
          this.enter("pre-loading"),
            (c = a(c)),
            a(new Image())
              .one(
                "load",
                a.proxy(function (a) {
                  c.attr("src", a.target.src),
                    c.css("opacity", 1),
                    this.leave("pre-loading"),
                    !this.is("pre-loading") &&
                      !this.is("initializing") &&
                      this.refresh();
                }, this)
              )
              .attr(
                "src",
                c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")
              );
        }, this)
      );
    }),
    (e.prototype.destroy = function () {
      this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        a(c).off(".owl.core"),
        !1 !== this.settings.responsive &&
          (b.clearTimeout(this.resizeTimer),
          this.off(b, "resize", this._handlers.onThrottledResize));
      for (var d in this._plugins) this._plugins[d].destroy();
      this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            "class",
            this.$element
              .attr("class")
              .replace(
                new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                ""
              )
          )
          .removeData("owl.carousel");
    }),
    (e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
        case "<":
          return d ? a > c : a < c;
        case ">":
          return d ? a < c : a > c;
        case ">=":
          return d ? a <= c : a >= c;
        case "<=":
          return d ? a >= c : a <= c;
      }
    }),
    (e.prototype.on = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    }),
    (e.prototype.off = function (a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, d)
        : a.detachEvent && a.detachEvent("on" + b, c);
    }),
    (e.prototype.trigger = function (b, c, d, f, g) {
      var h = { item: { count: this._items.length, index: this.current() } },
        i = a.camelCase(
          a
            .grep(["on", b, d], function (a) {
              return a;
            })
            .join("-")
            .toLowerCase()
        ),
        j = a.Event(
          [b, "owl", d || "carousel"].join(".").toLowerCase(),
          a.extend({ relatedTarget: this }, h, c)
        );
      return (
        this._supress[b] ||
          (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j);
          }),
          this.register({ type: e.Type.Event, name: b }),
          this.$element.trigger(j),
          this.settings &&
            "function" == typeof this.settings[i] &&
            this.settings[i].call(this, j)),
        j
      );
    }),
    (e.prototype.enter = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++;
        }, this)
      );
    }),
    (e.prototype.leave = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b]--;
        }, this)
      );
    }),
    (e.prototype.register = function (b) {
      if (b.type === e.Type.Event) {
        if (
          (a.event.special[b.name] || (a.event.special[b.name] = {}),
          !a.event.special[b.name].owl)
        ) {
          var c = a.event.special[b.name]._default;
          (a.event.special[b.name]._default = function (a) {
            return !c ||
              !c.apply ||
              (a.namespace && -1 !== a.namespace.indexOf("owl"))
              ? a.namespace && a.namespace.indexOf("owl") > -1
              : c.apply(this, arguments);
          }),
            (a.event.special[b.name].owl = !0);
        }
      } else
        b.type === e.Type.State &&
          (this._states.tags[b.name]
            ? (this._states.tags[b.name] = this._states.tags[b.name].concat(
                b.tags
              ))
            : (this._states.tags[b.name] = b.tags),
          (this._states.tags[b.name] = a.grep(
            this._states.tags[b.name],
            a.proxy(function (c, d) {
              return a.inArray(c, this._states.tags[b.name]) === d;
            }, this)
          )));
    }),
    (e.prototype.suppress = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          this._supress[b] = !0;
        }, this)
      );
    }),
    (e.prototype.release = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          delete this._supress[b];
        }, this)
      );
    }),
    (e.prototype.pointer = function (a) {
      var c = { x: null, y: null };
      return (
        (a = a.originalEvent || a || b.event),
        (a =
          a.touches && a.touches.length
            ? a.touches[0]
            : a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : a),
        a.pageX
          ? ((c.x = a.pageX), (c.y = a.pageY))
          : ((c.x = a.clientX), (c.y = a.clientY)),
        c
      );
    }),
    (e.prototype.isNumeric = function (a) {
      return !isNaN(parseFloat(a));
    }),
    (e.prototype.difference = function (a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }),
    (a.fn.owlCarousel = function (b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var d = a(this),
          f = d.data("owl.carousel");
        f ||
          ((f = new e(this, "object" == typeof b && b)),
          d.data("owl.carousel", f),
          a.each(
            [
              "next",
              "prev",
              "to",
              "destroy",
              "refresh",
              "replace",
              "add",
              "remove",
            ],
            function (b, c) {
              f.register({ type: e.Type.Event, name: c }),
                f.$element.on(
                  c + ".owl.carousel.core",
                  a.proxy(function (a) {
                    a.namespace &&
                      a.relatedTarget !== this &&
                      (this.suppress([c]),
                      f[c].apply(this, [].slice.call(arguments, 1)),
                      this.release([c]));
                  }, f)
                );
            }
          )),
          "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
      });
    }),
    (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = b.setInterval(
            a.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (e.prototype.refresh = function () {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            a.proxy(function (b) {
              if (
                b.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((b.property && "position" == b.property.name) ||
                  "initialized" == b.type)
              ) {
                var c = this._core.settings,
                  e = (c.center && Math.ceil(c.items / 2)) || c.items,
                  f = (c.center && -1 * e) || 0,
                  g =
                    (b.property && b.property.value !== d
                      ? b.property.value
                      : this._core.current()) + f,
                  h = this._core.clones().length,
                  i = a.proxy(function (a, b) {
                    this.load(b);
                  }, this);
                for (
                  c.lazyLoadEager > 0 &&
                  ((e += c.lazyLoadEager),
                  c.loop && ((g -= c.lazyLoadEager), e++));
                  f++ < e;

                )
                  this.load(h / 2 + this._core.relative(g)),
                    h && a.each(this._core.clones(this._core.relative(g)), i),
                    g++;
              }
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr("data-src-retina")) ||
                  f.attr("data-src") ||
                  f.attr("data-srcset");
              this._core.trigger("load", { element: f, url: g }, "lazy"),
                f.is("img")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          f.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: f, url: g },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", g)
                  : f.is("source")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          this._core.trigger(
                            "loaded",
                            { element: f, url: g },
                            "lazy"
                          );
                        }, this)
                      )
                      .attr("srcset", g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function () {
                      f.css({
                        "background-image": 'url("' + g + '")',
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: f, url: g },
                          "lazy"
                        );
                    }, this)),
                    (e.src = g));
            }, this)
          ),
          this._loaded.push(d.get(0)));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (c) {
      (this._core = c),
        (this._previousHeight = null),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (
            a
          ) {
            a.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              "position" === a.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              a.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null);
      var d = this;
      a(b).on("load", function () {
        d._core.settings.autoHeight && d.update();
      }),
        a(b).resize(function () {
          d._core.settings.autoHeight &&
            (null != d._intervalId && clearTimeout(d._intervalId),
            (d._intervalId = setTimeout(function () {
              d.update();
            }, 250)));
        });
    };
    (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (e.prototype.update = function () {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.settings.lazyLoad,
          e = this._core.$stage.children().toArray().slice(b, c),
          f = [],
          g = 0;
        a.each(e, function (b, c) {
          f.push(a(c).height());
        }),
          (g = Math.max.apply(null, f)),
          g <= 1 && d && this._previousHeight && (g = this._previousHeight),
          (this._previousHeight = g),
          this._core.$stage
            .parent()
            .height(g)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              a.preventDefault();
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" === a.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find(".owl-video");
              c.length &&
                (c.css("display", "none"), this.fetch(c, a(b.content)));
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          a.proxy(function (a) {
            this.play(a);
          }, this)
        );
    };
    (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function (a, b) {
        var c = (function () {
            return a.attr("data-vimeo-id")
              ? "vimeo"
              : a.attr("data-vzaar-id")
              ? "vzaar"
              : "youtube";
          })(),
          d =
            a.attr("data-vimeo-id") ||
            a.attr("data-youtube-id") ||
            a.attr("data-vzaar-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          d[3].indexOf("youtu") > -1)
        )
          c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
          if (!(d[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          c = "vzaar";
        }
        (d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr("data-video", g),
          this.thumbnail(a, this._videos[g]);
      }),
      (e.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g =
            c.width && c.height
              ? "width:" + c.width + "px;height:" + c.height + "px;"
              : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function (c) {
            (e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? a("<div/>", { class: "owl-video-tn " + j, srcType: c })
                : a("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + c + ")",
                  })),
              b.after(d),
              b.after(e);
          };
        if (
          (b.wrap(a("<div/>", { class: "owl-video-wrapper", style: g })),
          this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")),
          h.length)
        )
          return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type
          ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
          : "vimeo" === c.type
          ? a.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + c.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (a) {
                (f = a[0].thumbnail_large), l(f);
              },
            })
          : "vzaar" === c.type &&
            a.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + c.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (a) {
                (f = a.framegrab_url), l(f);
              },
            });
      }),
      (e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (e.prototype.play = function (b) {
        var c,
          d = a(b.target),
          e = d.closest("." + this._core.settings.itemClass),
          f = this._videos[e.attr("data-video")],
          g = f.width || "100%",
          h = f.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          (c = a(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
          )),
          c.attr("height", h),
          c.attr("width", g),
          "youtube" === f.type
            ? c.attr(
                "src",
                "//www.youtube.com/embed/" +
                  f.id +
                  "?autoplay=1&rel=0&v=" +
                  f.id
              )
            : "vimeo" === f.type
            ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1")
            : "vzaar" === f.type &&
              c.attr(
                "src",
                "//view.vzaar.com/" + f.id + "/player?autoplay=true"
              ),
          a(c)
            .wrap('<div class="owl-video-frame" />')
            .insertAfter(e.find(".owl-video")),
          (this._playing = e.addClass("owl-video-playing")));
      }),
      (e.prototype.isInFullScreen = function () {
        var b =
          c.fullscreenElement ||
          c.mozFullScreenElement ||
          c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame");
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          "change.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" == a.property.name &&
              ((this.previous = this.core.current()),
              (this.next = a.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            a.proxy(function (a) {
              a.namespace && (this.swapping = "translated" == a.type);
            }, this),
          "translate.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          a.support.animation &&
          a.support.transition
        ) {
          this.core.speed(0);
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (g &&
              ((b =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + "px" })
                .addClass("animated owl-animated-out")
                .addClass(g)),
            f &&
              e
                .one(a.support.animation.end, c)
                .addClass("animated owl-animated-in")
                .addClass(f));
        }
      }),
      (e.prototype.clear = function (b) {
        a(b.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "settings" === a.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : a.namespace &&
                "position" === a.property.name &&
                this._paused &&
                (this._time = 0);
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": a.proxy(function (a, b, c) {
            a.namespace && this.play(b, c);
          }, this),
          "stop.owl.autoplay": a.proxy(function (a) {
            a.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options));
    };
    (e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (e.prototype._next = function (d) {
        (this._call = b.setTimeout(
          a.proxy(this._next, this, d),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) -
            this.read()
        )),
          this._core.is("interacting") ||
            c.hidden ||
            this._core.next(d || this._core.settings.autoplaySpeed);
      }),
      (e.prototype.read = function () {
        return new Date().getTime() - this._time;
      }),
      (e.prototype.play = function (c, d) {
        var e;
        this._core.is("rotating") || this._core.enter("rotating"),
          (c = c || this._core.settings.autoplayTimeout),
          (e = Math.min(this._time % (this._timeout || c), c)),
          this._paused
            ? ((this._time = this.read()), (this._paused = !1))
            : b.clearTimeout(this._call),
          (this._time += (this.read() % c) - e),
          (this._timeout = c),
          (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e));
      }),
      (e.prototype.stop = function () {
        this._core.is("rotating") &&
          ((this._time = 0),
          (this._paused = !0),
          b.clearTimeout(this._call),
          this._core.leave("rotating"));
      }),
      (e.prototype.pause = function () {
        this._core.is("rotating") &&
          !this._paused &&
          ((this._time = this.read()),
          (this._paused = !0),
          b.clearTimeout(this._call));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (b) {
      (this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": a.proxy(function (b) {
            b.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  a(b.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 1);
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "position" == a.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: [
        '<span aria-label="Previous">&#x2039;</span>',
        '<span aria-label="Next">&#x203a;</span>',
      ],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var b,
          c = this._core.settings;
        (this._controls.$relative = (
          c.navContainer
            ? a(c.navContainer)
            : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
          (this._controls.$previous = a("<" + c.navElement + ">")
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.prev(c.navSpeed);
              }, this)
            )),
          (this._controls.$next = a("<" + c.navElement + ">")
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.next(c.navSpeed);
              }, this)
            )),
          c.dotsData ||
            (this._templates = [
              a('<button role="button">')
                .addClass(c.dotClass)
                .append(a("<span>"))
                .prop("outerHTML"),
            ]),
          (this._controls.$absolute = (
            c.dotsContainer
              ? a(c.dotsContainer)
              : a("<div>").addClass(c.dotsClass).appendTo(this.$element)
          ).addClass("disabled")),
          this._controls.$absolute.on(
            "click",
            "button",
            a.proxy(function (b) {
              var d = a(b.target).parent().is(this._controls.$absolute)
                ? a(b.target).index()
                : a(b.target).parent().index();
              b.preventDefault(), this.to(d, c.dotsSpeed);
            }, this)
          );
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
      }),
      (e.prototype.destroy = function () {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
          "$relative" === b && e.navContainer
            ? this._controls[b].html("")
            : this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (e.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if (
          ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
          g.dots || "page" == g.slideBy)
        )
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
              if (
                (this._pages.push({
                  start: Math.min(f, a - d),
                  end: a - d + h - 1,
                }),
                Math.min(f, a - d) === f)
              )
                break;
              (b = 0), ++c;
            }
            b += this._core.mergers(this._core.relative(a));
          }
      }),
      (e.prototype.draw = function () {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d),
          c.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !f && e <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !f && e >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !c.dots || d),
          c.dots &&
            ((b =
              this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(""))
              : b > 0
              ? this._controls.$absolute.append(
                  new Array(b + 1).join(this._templates[0])
                )
              : b < 0 && this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            c &&
            (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items),
        };
      }),
      (e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a
          .grep(
            this._pages,
            a.proxy(function (a, c) {
              return a.start <= b && a.end >= b;
            }, this)
          )
          .pop();
      }),
      (e.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings;
        return (
          "page" == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        );
      }),
      (e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
      }),
      (e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
      }),
      (e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length
          ? ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(
              this._pages[((b % e) + e) % e].start,
              c
            ))
          : a.proxy(this._overrides.to, this._core)(b, c);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (c) {
      (this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (c) {
            c.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              a(b).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!c) return;
              this._hashes[c] = b.content;
            }
          }, this),
          "changed.owl.carousel": a.proxy(function (c) {
            if (c.namespace && "position" === c.property.name) {
              var d = this._core.items(
                  this._core.relative(this._core.current())
                ),
                e = a
                  .map(this._hashes, function (a, b) {
                    return a === d ? b : null;
                  })
                  .join();
              if (!e || b.location.hash.slice(1) === e) return;
              b.location.hash = e;
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          "hashchange.owl.navigation",
          a.proxy(function (a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d &&
              f !== this._core.current() &&
              this._core.to(this._core.relative(f), !1, !0);
          }, this)
        );
    };
    (e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
          "function" != typeof this[d] && (this[d] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    function e(b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
      return (
        a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
          if (g[b] !== d) return (e = !c || b), !1;
        }),
        e
      );
    }
    function f(a) {
      return e(a, !0);
    }
    var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      j = {
        csstransforms: function () {
          return !!e("transform");
        },
        csstransforms3d: function () {
          return !!e("perspective");
        },
        csstransitions: function () {
          return !!e("transition");
        },
        cssanimations: function () {
          return !!e("animation");
        },
      };
    j.csstransitions() &&
      ((a.support.transition = new String(f("transition"))),
      (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() &&
        ((a.support.animation = new String(f("animation"))),
        (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() &&
        ((a.support.transform = new String(f("transform"))),
        (a.support.transform3d = j.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document);

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */
!(function (s) {
  "use strict";
  function e(s) {
    return new RegExp("(^|\\s+)" + s + "(\\s+|$)");
  }
  function n(s, e) {
    (a(s, e) ? c : t)(s, e);
  }
  var a, t, c;
  "classList" in document.documentElement
    ? ((a = function (s, e) {
        return s.classList.contains(e);
      }),
      (t = function (s, e) {
        s.classList.add(e);
      }),
      (c = function (s, e) {
        s.classList.remove(e);
      }))
    : ((a = function (s, n) {
        return e(n).test(s.className);
      }),
      (t = function (s, e) {
        a(s, e) || (s.className = s.className + " " + e);
      }),
      (c = function (s, n) {
        s.className = s.className.replace(e(n), " ");
      }));
  var i = {
    hasClass: a,
    addClass: t,
    removeClass: c,
    toggleClass: n,
    has: a,
    add: t,
    remove: c,
    toggle: n,
  };
  "function" == typeof define && define.amd ? define(i) : (s.classie = i);
})(window);

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose)
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ""),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          "auto" === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close();
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader &&
          (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
      }
      y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: "hidden",
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
        (b.st.fixedBgPos === !1 ||
          ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on("resize" + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on("focusin" + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" };
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      );
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr("data-mfp-src")),
          e.src || (e.src = e.el.attr("href"));
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c),
          d || "loading" !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split("_")), e.length > 1)) {
            var f = b.find(p + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              "replaceWith" === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
            }
          } else b.find(p + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
          b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + "." + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + "." + I, K),
          w("BeforeChange." + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  "error",
                  b.st.ajax.tError.replace("%url%", c.src)
                );
            },
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), "";
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off("resize" + p);
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (b.content && b.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          (j.className = "mfp-img"),
            c.el &&
              c.el.find("img").length &&
              (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"),
                  b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                f = "transition";
              return (
                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css("visibility", "hidden"),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y("ZoomAnimationEnded");
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h["-moz-transform"] = h.transform =
                "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + "." + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus("ready"),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off("click" + e),
                  (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  d.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                })
                .attr("src", d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});

/**
RESIZESENSOR.JS
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
!(function () {
  var e = function (t, i) {
    function s() {
      (this.q = []),
        (this.add = function (e) {
          this.q.push(e);
        });
      var e, t;
      this.call = function () {
        for (e = 0, t = this.q.length; e < t; e++) this.q[e].call();
      };
    }
    function o(e, t) {
      return e.currentStyle
        ? e.currentStyle[t]
        : window.getComputedStyle
        ? window.getComputedStyle(e, null).getPropertyValue(t)
        : e.style[t];
    }
    function n(e, t) {
      if (e.resizedAttached) {
        if (e.resizedAttached) return void e.resizedAttached.add(t);
      } else (e.resizedAttached = new s()), e.resizedAttached.add(t);
      (e.resizeSensor = document.createElement("div")),
        (e.resizeSensor.className = "resize-sensor");
      var i =
          "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
        n = "position: absolute; left: 0; top: 0; transition: 0s;";
      (e.resizeSensor.style.cssText = i),
        (e.resizeSensor.innerHTML =
          '<div class="resize-sensor-expand" style="' +
          i +
          '"><div style="' +
          n +
          '"></div></div><div class="resize-sensor-shrink" style="' +
          i +
          '"><div style="' +
          n +
          ' width: 200%; height: 200%"></div></div>'),
        e.appendChild(e.resizeSensor),
        { fixed: 1, absolute: 1 }[o(e, "position")] ||
          (e.style.position = "relative");
      var d,
        r,
        l = e.resizeSensor.childNodes[0],
        c = l.childNodes[0],
        h = e.resizeSensor.childNodes[1],
        a =
          (h.childNodes[0],
          function () {
            (c.style.width = l.offsetWidth + 10 + "px"),
              (c.style.height = l.offsetHeight + 10 + "px"),
              (l.scrollLeft = l.scrollWidth),
              (l.scrollTop = l.scrollHeight),
              (h.scrollLeft = h.scrollWidth),
              (h.scrollTop = h.scrollHeight),
              (d = e.offsetWidth),
              (r = e.offsetHeight);
          });
      a();
      var f = function () {
          e.resizedAttached && e.resizedAttached.call();
        },
        u = function (e, t, i) {
          e.attachEvent ? e.attachEvent("on" + t, i) : e.addEventListener(t, i);
        },
        p = function () {
          (e.offsetWidth == d && e.offsetHeight == r) || f(), a();
        };
      u(l, "scroll", p), u(h, "scroll", p);
    }
    var d = Object.prototype.toString.call(t),
      r =
        "[object Array]" === d ||
        "[object NodeList]" === d ||
        "[object HTMLCollection]" === d ||
        ("undefined" != typeof jQuery && t instanceof jQuery) ||
        ("undefined" != typeof Elements && t instanceof Elements);
    if (r) for (var l = 0, c = t.length; l < c; l++) n(t[l], i);
    else n(t, i);
    this.detach = function () {
      if (r) for (var i = 0, s = t.length; i < s; i++) e.detach(t[i]);
      else e.detach(t);
    };
  };
  (e.detach = function (e) {
    e.resizeSensor &&
      (e.removeChild(e.resizeSensor),
      delete e.resizeSensor,
      delete e.resizedAttached);
  }),
    "undefined" != typeof module && "undefined" != typeof module.exports
      ? (module.exports = e)
      : (window.ResizeSensor = e);
})();
//# sourceMappingURL=maps/ResizeSensor.min.js.map

/*!
 * Theia Sticky Sidebar v1.7.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2016 WeCodePixels and other contributors
 * Released under the MIT license
 */
/*!
 * Theia Sticky Sidebar v1.7.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2016 WeCodePixels and other contributors
 * Released under the MIT license
 */

!(function (i) {
  i.fn.theiaStickySidebar = function (t) {
    function e(t, e) {
      return (
        !0 === t.initialized ||
        (!(i("body").width() < t.minWidth) && (o(t, e), !0))
      );
    }
    function o(t, e) {
      (t.initialized = !0),
        0 === i("#theia-sticky-sidebar-stylesheet-" + t.namespace).length &&
          i("head").append(
            i(
              '<style id="theia-sticky-sidebar-stylesheet-' +
                t.namespace +
                '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'
            )
          ),
        e.each(function () {
          function e() {
            (n.fixedScrollTop = 0),
              n.sidebar.css({ "min-height": "1px" }),
              n.stickySidebar.css({
                position: "static",
                width: "",
                transform: "none",
              });
          }
          function o(t) {
            var e = t.height();
            return (
              t.children().each(function () {
                e = Math.max(e, i(this).height());
              }),
              e
            );
          }
          var n = {};
          if (
            ((n.sidebar = i(this)),
            (n.options = t || {}),
            (n.container = i(n.options.containerSelector)),
            0 == n.container.length && (n.container = n.sidebar.parent()),
            n.sidebar
              .parents(":not(.theia-exception)")
              .css("-webkit-transform", "none"),
            n.sidebar.css({
              position: n.options.defaultPosition,
              overflow: "visible",
              "-webkit-box-sizing": "border-box",
              "-moz-box-sizing": "border-box",
              "box-sizing": "border-box",
            }),
            (n.stickySidebar = n.sidebar.find(".theiaStickySidebar")),
            0 == n.stickySidebar.length)
          ) {
            var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
            n.sidebar
              .find("script")
              .filter(function (i, t) {
                return 0 === t.type.length || t.type.match(s);
              })
              .remove(),
              (n.stickySidebar = i("<div>")
                .addClass("theiaStickySidebar")
                .append(n.sidebar.children())),
              n.sidebar.append(n.stickySidebar);
          }
          (n.marginBottom = parseInt(n.sidebar.css("margin-bottom"))),
            (n.paddingTop = parseInt(n.sidebar.css("padding-top"))),
            (n.paddingBottom = parseInt(n.sidebar.css("padding-bottom")));
          var d = n.stickySidebar.offset().top,
            r = n.stickySidebar.outerHeight();
          n.stickySidebar.css("padding-top", 1),
            n.stickySidebar.css("padding-bottom", 1),
            (d -= n.stickySidebar.offset().top),
            (r = n.stickySidebar.outerHeight() - r - d),
            0 == d
              ? (n.stickySidebar.css("padding-top", 0),
                (n.stickySidebarPaddingTop = 0))
              : (n.stickySidebarPaddingTop = 1),
            0 == r
              ? (n.stickySidebar.css("padding-bottom", 0),
                (n.stickySidebarPaddingBottom = 0))
              : (n.stickySidebarPaddingBottom = 1),
            (n.previousScrollTop = null),
            (n.fixedScrollTop = 0),
            e(),
            (n.onScroll = function (n) {
              if (n.stickySidebar.is(":visible"))
                if (i("body").width() < n.options.minWidth) e();
                else if (
                  n.options.disableOnResponsiveLayouts &&
                  n.sidebar.outerWidth("none" == n.sidebar.css("float")) + 50 >
                    n.container.width()
                )
                  e();
                else {
                  var s = i(document).scrollTop(),
                    d = "static";
                  if (
                    s >=
                    n.sidebar.offset().top +
                      (n.paddingTop - n.options.additionalMarginTop)
                  ) {
                    var r,
                      c = n.paddingTop + t.additionalMarginTop,
                      p =
                        n.paddingBottom +
                        n.marginBottom +
                        t.additionalMarginBottom,
                      b = n.sidebar.offset().top,
                      l = n.sidebar.offset().top + o(n.container),
                      f = 0 + t.additionalMarginTop;
                    r =
                      n.stickySidebar.outerHeight() + c + p < i(window).height()
                        ? f + n.stickySidebar.outerHeight()
                        : i(window).height() -
                          n.marginBottom -
                          n.paddingBottom -
                          t.additionalMarginBottom;
                    var h = b - s + n.paddingTop,
                      g = l - s - n.paddingBottom - n.marginBottom,
                      u = n.stickySidebar.offset().top - s,
                      S = n.previousScrollTop - s;
                    "fixed" == n.stickySidebar.css("position") &&
                      "modern" == n.options.sidebarBehavior &&
                      (u += S),
                      "stick-to-top" == n.options.sidebarBehavior &&
                        (u = t.additionalMarginTop),
                      "stick-to-bottom" == n.options.sidebarBehavior &&
                        (u = r - n.stickySidebar.outerHeight()),
                      (u =
                        S > 0
                          ? Math.min(u, f)
                          : Math.max(u, r - n.stickySidebar.outerHeight())),
                      (u = Math.max(u, h)),
                      (u = Math.min(u, g - n.stickySidebar.outerHeight()));
                    var m =
                      n.container.height() == n.stickySidebar.outerHeight();
                    d =
                      (m || u != f) &&
                      (m || u != r - n.stickySidebar.outerHeight())
                        ? s + u - n.sidebar.offset().top - n.paddingTop <=
                          t.additionalMarginTop
                          ? "static"
                          : "absolute"
                        : "fixed";
                  }
                  if ("fixed" == d) {
                    var y = i(document).scrollLeft();
                    n.stickySidebar.css({
                      position: "fixed",
                      width: a(n.stickySidebar) + "px",
                      transform: "translateY(" + u + "px)",
                      left:
                        n.sidebar.offset().left +
                        parseInt(n.sidebar.css("padding-left")) -
                        y +
                        "px",
                      top: "0px",
                    });
                  } else if ("absolute" == d) {
                    var k = {};
                    "absolute" != n.stickySidebar.css("position") &&
                      ((k.position = "absolute"),
                      (k.transform =
                        "translateY(" +
                        (s +
                          u -
                          n.sidebar.offset().top -
                          n.stickySidebarPaddingTop -
                          n.stickySidebarPaddingBottom) +
                        "px)"),
                      (k.top = "0px")),
                      (k.width = a(n.stickySidebar) + "px"),
                      (k.left = ""),
                      n.stickySidebar.css(k);
                  } else "static" == d && e();
                  "static" != d &&
                    1 == n.options.updateSidebarHeight &&
                    n.sidebar.css({
                      "min-height":
                        n.stickySidebar.outerHeight() +
                        n.stickySidebar.offset().top -
                        n.sidebar.offset().top +
                        n.paddingBottom,
                    }),
                    (n.previousScrollTop = s);
                }
            }),
            n.onScroll(n),
            i(document).on(
              "scroll." + n.options.namespace,
              (function (i) {
                return function () {
                  i.onScroll(i);
                };
              })(n)
            ),
            i(window).on(
              "resize." + n.options.namespace,
              (function (i) {
                return function () {
                  i.stickySidebar.css({ position: "static" }), i.onScroll(i);
                };
              })(n)
            ),
            "undefined" != typeof ResizeSensor &&
              new ResizeSensor(
                n.stickySidebar[0],
                (function (i) {
                  return function () {
                    i.onScroll(i);
                  };
                })(n)
              );
        });
    }
    function a(i) {
      var t;
      try {
        t = i[0].getBoundingClientRect().width;
      } catch (i) {}
      return void 0 === t && (t = i.width()), t;
    }
    var n = {
      containerSelector: "",
      additionalMarginTop: 0,
      additionalMarginBottom: 0,
      updateSidebarHeight: !0,
      minWidth: 0,
      disableOnResponsiveLayouts: !0,
      sidebarBehavior: "modern",
      defaultPosition: "relative",
      namespace: "TSS",
    };
    return (
      (t = i.extend(n, t)),
      (t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0),
      (t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0),
      (function (t, o) {
        e(t, o) ||
          (console.log(
            "TSS: Body width smaller than options.minWidth. Init is delayed."
          ),
          i(document).on(
            "scroll." + t.namespace,
            (function (t, o) {
              return function (a) {
                e(t, o) && i(this).unbind(a);
              };
            })(t, o)
          ),
          i(window).on(
            "resize." + t.namespace,
            (function (t, o) {
              return function (a) {
                e(t, o) && i(this).unbind(a);
              };
            })(t, o)
          ));
      })(t, this),
      this
    );
  };
})(jQuery);
//# sourceMappingURL=maps/theia-sticky-sidebar.min.js.map

/*!
 * jQuery Selectbox plugin 0.2
 *
 * Copyright 2011-2012, Dimitar Ivanov (http://www.bulgaria-web-developers.com/projects/javascript/selectbox/)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 * Date: Tue Jul 17 19:58:36 2012 +0300
 */
!(function (e, s) {
  function t() {
    (this._state = []),
      (this._defaults = {
        classHolder: "sbHolder",
        classHolderDisabled: "sbHolderDisabled",
        classSelector: "sbSelector",
        classOptions: "sbOptions",
        classGroup: "sbGroup",
        classSub: "sbSub",
        classDisabled: "sbDisabled",
        classToggleOpen: "sbToggleOpen",
        classToggle: "sbToggle",
        classFocus: "sbFocus",
        speed: 200,
        effect: "slide",
        onChange: null,
        onOpen: null,
        onClose: null,
      });
  }
  var i = !0;
  e.extend(t.prototype, {
    _isOpenSelectbox: function (e) {
      return !!e && this._getInst(e).isOpen;
    },
    _isDisabledSelectbox: function (e) {
      return !!e && this._getInst(e).isDisabled;
    },
    _attachSelectbox: function (s, t) {
      function a() {
        var s,
          t,
          i = this.attr("id").split("_")[1];
        for (s in u._state)
          s !== i &&
            u._state.hasOwnProperty(s) &&
            (t = e("select[sb='" + s + "']")[0]) &&
            u._closeSelectbox(t);
      }
      function n() {
        var t = !(!arguments[1] || !arguments[1].sub),
          a = !(!arguments[1] || !arguments[1].disabled);
        arguments[0].each(function (n) {
          var l,
            r = e(this),
            g = e("<li>");
          r.is(":selected") && (o.text(r.text()), (p = i)),
            n === f - 1 && g.addClass("last"),
            r.is(":disabled") || a
              ? ((l = e("<span>", { text: r.text() }).addClass(
                  b.settings.classDisabled
                )),
                t && l.addClass(b.settings.classSub),
                l.appendTo(g))
              : ((l = e("<a>", { href: "#" + r.val(), rel: r.val() })
                  .text(r.text())
                  .bind("click.sb", function (t) {
                    t && t.preventDefault && t.preventDefault();
                    var i = c,
                      a = e(this);
                    i.attr("id").split("_")[1];
                    u._changeSelectbox(s, a.attr("rel"), a.text()),
                      u._closeSelectbox(s);
                  })
                  .bind("mouseover.sb", function () {
                    var s = e(this);
                    s
                      .parent()
                      .siblings()
                      .find("a")
                      .removeClass(b.settings.classFocus),
                      s.addClass(b.settings.classFocus);
                  })
                  .bind("mouseout.sb", function () {
                    e(this).removeClass(b.settings.classFocus);
                  })),
                t && l.addClass(b.settings.classSub),
                r.is(":selected") && l.addClass(b.settings.classFocus),
                l.appendTo(g)),
            g.appendTo(d);
        });
      }
      if (this._getInst(s)) return !1;
      var l,
        o,
        c,
        d,
        r = e(s),
        u = this,
        b = u._newInst(r),
        p = !1,
        g = (r.find("optgroup"), r.find("option")),
        f = g.length;
      r.attr("sb", b.uid),
        e.extend(b.settings, u._defaults, t),
        (u._state[b.uid] = !1),
        r.hide(),
        (l = e("<div>", {
          id: "sbHolder_" + b.uid,
          class: b.settings.classHolder,
          tabindex: r.attr("tabindex"),
        })),
        (o = e("<a>", {
          id: "sbSelector_" + b.uid,
          href: "#",
          class: b.settings.classSelector,
          click: function (t) {
            t.preventDefault(), a.apply(e(this), []);
            var i = e(this).attr("id").split("_")[1];
            u._state[i] ? u._closeSelectbox(s) : u._openSelectbox(s);
          },
        })),
        (c = e("<a>", {
          id: "sbToggle_" + b.uid,
          href: "#",
          class: b.settings.classToggle,
          click: function (t) {
            t.preventDefault(), a.apply(e(this), []);
            var i = e(this).attr("id").split("_")[1];
            u._state[i] ? u._closeSelectbox(s) : u._openSelectbox(s);
          },
        })).appendTo(l),
        (d = e("<ul>", {
          id: "sbOptions_" + b.uid,
          class: b.settings.classOptions,
          css: { display: "none" },
        })),
        r.children().each(function (s) {
          var t,
            i = e(this),
            a = {};
          i.is("option")
            ? n(i)
            : i.is("optgroup") &&
              ((t = e("<li>")),
              e("<span>", { text: i.attr("label") })
                .addClass(b.settings.classGroup)
                .appendTo(t),
              t.appendTo(d),
              i.is(":disabled") && (a.disabled = !0),
              (a.sub = !0),
              n(i.find("option"), a));
        }),
        p || o.text(g.first().text()),
        e.data(s, "selectbox", b),
        l
          .data("uid", b.uid)
          .bind("keydown.sb", function (s) {
            var t = s.charCode ? s.charCode : s.keyCode ? s.keyCode : 0,
              i = e(this),
              a = i.data("uid"),
              n = i.siblings("select[sb='" + a + "']").data("selectbox"),
              l = i.siblings(["select[sb='", a, "']"].join("")).get(0),
              o = i.find("ul").find("a." + n.settings.classFocus);
            switch (t) {
              case 37:
              case 38:
                if (o.length > 0) {
                  e("a", i).removeClass(n.settings.classFocus),
                    (c = o.parent().prevAll("li:has(a)").eq(0).find("a"))
                      .length > 0 &&
                      (c.addClass(n.settings.classFocus).focus(),
                      e("#sbSelector_" + a).text(c.text()));
                }
                break;
              case 39:
              case 40:
                var c;
                e("a", i).removeClass(n.settings.classFocus),
                  (c =
                    o.length > 0
                      ? o.parent().nextAll("li:has(a)").eq(0).find("a")
                      : i.find("ul").find("a").eq(0)).length > 0 &&
                    (c.addClass(n.settings.classFocus).focus(),
                    e("#sbSelector_" + a).text(c.text()));
                break;
              case 13:
                o.length > 0 && u._changeSelectbox(l, o.attr("rel"), o.text()),
                  u._closeSelectbox(l);
                break;
              case 9:
                l &&
                  (n = u._getInst(l)) &&
                  (o.length > 0 &&
                    u._changeSelectbox(l, o.attr("rel"), o.text()),
                  u._closeSelectbox(l));
                var d = parseInt(i.attr("tabindex"), 10);
                s.shiftKey ? d-- : d++, e("*[tabindex='" + d + "']").focus();
                break;
              case 27:
                u._closeSelectbox(l);
            }
            return s.stopPropagation(), !1;
          })
          .delegate("a", "mouseover", function (s) {
            e(this).addClass(b.settings.classFocus);
          })
          .delegate("a", "mouseout", function (s) {
            e(this).removeClass(b.settings.classFocus);
          }),
        o.appendTo(l),
        d.appendTo(l),
        l.insertAfter(r),
        e(
          [".", b.settings.classHolder, ", .", b.settings.classSelector].join(
            ""
          )
        ).mousedown(function (e) {
          e.stopPropagation();
        });
    },
    _detachSelectbox: function (s) {
      var t = this._getInst(s);
      if (!t) return !1;
      e("#sbHolder_" + t.uid).remove(),
        e.data(s, "selectbox", null),
        e(s).show();
    },
    _changeSelectbox: function (s, t, a) {
      var n,
        l = this._getInst(s);
      l && ((n = this._get(l, "onChange")), e("#sbSelector_" + l.uid).text(a)),
        (t = t.replace(/\'/g, "\\'")),
        e(s)
          .find("option[value='" + t + "']")
          .attr("selected", i),
        l && n
          ? n.apply(l.input ? l.input[0] : null, [t, l])
          : l && l.input && l.input.trigger("change");
    },
    _enableSelectbox: function (s) {
      var t = this._getInst(s);
      if (!t || !t.isDisabled) return !1;
      e("#sbHolder_" + t.uid).removeClass(t.settings.classHolderDisabled),
        (t.isDisabled = !1),
        e.data(s, "selectbox", t);
    },
    _disableSelectbox: function (s) {
      var t = this._getInst(s);
      if (!t || t.isDisabled) return !1;
      e("#sbHolder_" + t.uid).addClass(t.settings.classHolderDisabled),
        (t.isDisabled = i),
        e.data(s, "selectbox", t);
    },
    _optionSelectbox: function (s, t, i) {
      var a = this._getInst(s);
      if (!a) return !1;
      (a[t] = i), e.data(s, "selectbox", a);
    },
    _openSelectbox: function (s) {
      var t = this._getInst(s);
      if (t && !t.isOpen && !t.isDisabled) {
        var a = e("#sbOptions_" + t.uid),
          n = parseInt(e(window).height(), 10),
          l = e("#sbHolder_" + t.uid).offset(),
          o = e(window).scrollTop(),
          c = a.prev().height(),
          d = n - (l.top - o) - c / 2,
          r = this._get(t, "onOpen");
        a.css({ top: c + "px", maxHeight: d - c + "px" }),
          "fade" === t.settings.effect
            ? a.fadeIn(t.settings.speed)
            : a.slideDown(t.settings.speed),
          e("#sbToggle_" + t.uid).addClass(t.settings.classToggleOpen),
          (this._state[t.uid] = i),
          (t.isOpen = i),
          r && r.apply(t.input ? t.input[0] : null, [t]),
          e.data(s, "selectbox", t);
      }
    },
    _closeSelectbox: function (s) {
      var t = this._getInst(s);
      if (t && t.isOpen) {
        var i = this._get(t, "onClose");
        "fade" === t.settings.effect
          ? e("#sbOptions_" + t.uid).fadeOut(t.settings.speed)
          : e("#sbOptions_" + t.uid).slideUp(t.settings.speed),
          e("#sbToggle_" + t.uid).removeClass(t.settings.classToggleOpen),
          (this._state[t.uid] = !1),
          (t.isOpen = !1),
          i && i.apply(t.input ? t.input[0] : null, [t]),
          e.data(s, "selectbox", t);
      }
    },
    _newInst: function (e) {
      return {
        id: e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
        input: e,
        uid: Math.floor(99999999 * Math.random()),
        isOpen: !1,
        isDisabled: !1,
        settings: {},
      };
    },
    _getInst: function (s) {
      try {
        return e.data(s, "selectbox");
      } catch (e) {
        throw "Missing instance data for this selectbox";
      }
    },
    _get: function (e, s) {
      return void 0 !== e.settings[s] ? e.settings[s] : this._defaults[s];
    },
  }),
    (e.fn.selectbox = function (s) {
      var t = Array.prototype.slice.call(arguments, 1);
      return "string" == typeof s && "isDisabled" == s
        ? e.selectbox["_" + s + "Selectbox"].apply(
            e.selectbox,
            [this[0]].concat(t)
          )
        : "option" == s &&
          2 == arguments.length &&
          "string" == typeof arguments[1]
        ? e.selectbox["_" + s + "Selectbox"].apply(
            e.selectbox,
            [this[0]].concat(t)
          )
        : this.each(function () {
            "string" == typeof s
              ? e.selectbox["_" + s + "Selectbox"].apply(
                  e.selectbox,
                  [this].concat(t)
                )
              : e.selectbox._attachSelectbox(this, s);
          });
    }),
    (e.selectbox = new t()),
    (e.selectbox.version = "0.2");
})(jQuery);

// Generated by CoffeeScript 1.12.3

/**
@license Sticky-kit v1.1.4 | MIT | Leaf Corcoran 2015 | http://leafo.net
 */
(function () {
  var S, T, W;
  (S = window.jQuery),
    (W = S(window)),
    (T = S(document)),
    (S.fn.stick_in_parent = function (t) {
      var _, i, x, o, e, P, s, V, F, C, z, I, A, M;
      for (
        null == t && (t = {}),
          A = t.sticky_class,
          P = t.inner_scrolling,
          I = t.recalc_every,
          z = t.parent,
          F = t.offset_top,
          V = t.spacer,
          x = t.bottoming,
          M = W.height(),
          _ = T.height(),
          null == F && (F = 0),
          null == z && (z = void 0),
          null == P && (P = !0),
          null == A && (A = "is_stuck"),
          null == x && (x = !0),
          C = function (t) {
            var i, o;
            return window.getComputedStyle
              ? (t[0],
                (i = window.getComputedStyle(t[0])),
                (o =
                  parseFloat(i.getPropertyValue("width")) +
                  parseFloat(i.getPropertyValue("margin-left")) +
                  parseFloat(i.getPropertyValue("margin-right"))),
                "border-box" !== i.getPropertyValue("box-sizing") &&
                  (o +=
                    parseFloat(i.getPropertyValue("border-left-width")) +
                    parseFloat(i.getPropertyValue("border-right-width")) +
                    parseFloat(i.getPropertyValue("padding-left")) +
                    parseFloat(i.getPropertyValue("padding-right"))),
                o)
              : t.outerWidth(!0);
          },
          o = function (r, n, l, a, c, p, d, u) {
            var f, t, g, h, k, y, m, v, i, b, w, e;
            if (!r.data("sticky_kit")) {
              if (
                (r.data("sticky_kit", !0),
                (k = _),
                (m = r.parent()),
                null != z && (m = m.closest(z)),
                !m.length)
              )
                throw "failed to find stick parent";
              if (
                ((f = g = !1),
                (w = null != V ? V && r.closest(V) : S("<div />")) &&
                  w.css("position", r.css("position")),
                (v = function () {
                  var t, i, o;
                  if (!u)
                    return (
                      (M = W.height()),
                      (_ = T.height()),
                      (k = _),
                      (t = parseInt(m.css("border-top-width"), 10)),
                      (i = parseInt(m.css("padding-top"), 10)),
                      (n = parseInt(m.css("padding-bottom"), 10)),
                      (l = m.offset().top + t + i),
                      (a = m.height()),
                      g &&
                        ((f = g = !1),
                        null == V && (r.insertAfter(w), w.detach()),
                        r
                          .css({ position: "", top: "", width: "", bottom: "" })
                          .removeClass(A),
                        (o = !0)),
                      (c =
                        r.offset().top -
                        (parseInt(r.css("margin-top"), 10) || 0) -
                        F),
                      (p = r.outerHeight(!0)),
                      (d = r.css("float")),
                      w &&
                        w.css({
                          width: C(r),
                          height: p,
                          display: r.css("display"),
                          "vertical-align": r.css("vertical-align"),
                          float: d,
                        }),
                      o ? e() : void 0
                    );
                })(),
                p !== a)
              )
                return (
                  (h = void 0),
                  (y = F),
                  (b = I),
                  (e = function () {
                    var t, i, o, e, s;
                    if (!u)
                      return (
                        (o = !1),
                        null != b && (b -= 1) <= 0 && ((b = I), v(), (o = !0)),
                        o || _ === k || (v(), (o = !0)),
                        (e = W.scrollTop()),
                        null != h && (i = e - h),
                        (h = e),
                        g
                          ? (x &&
                              ((s = a + l < e + p + y),
                              f &&
                                !s &&
                                ((f = !1),
                                r
                                  .css({
                                    position: "fixed",
                                    bottom: "",
                                    top: y,
                                  })
                                  .trigger("sticky_kit:unbottom"))),
                            e < c &&
                              ((g = !1),
                              (y = F),
                              null == V &&
                                (("left" !== d && "right" !== d) ||
                                  r.insertAfter(w),
                                w.detach()),
                              (t = { position: "", width: "", top: "" }),
                              r
                                .css(t)
                                .removeClass(A)
                                .trigger("sticky_kit:unstick")),
                            P &&
                              M < p + F &&
                              (f ||
                                ((y -= i),
                                (y = Math.max(M - p, y)),
                                (y = Math.min(F, y)),
                                g && r.css({ top: y + "px" }))))
                          : c < e &&
                            ((g = !0),
                            ((t = { position: "fixed", top: y }).width =
                              "border-box" === r.css("box-sizing")
                                ? r.outerWidth() + "px"
                                : r.width() + "px"),
                            r.css(t).addClass(A),
                            null == V &&
                              (r.after(w),
                              ("left" !== d && "right" !== d) || w.append(r)),
                            r.trigger("sticky_kit:stick")),
                        g &&
                        x &&
                        (null == s && (s = a + l < e + p + y), !f && s)
                          ? ((f = !0),
                            "static" === m.css("position") &&
                              m.css({ position: "relative" }),
                            r
                              .css({
                                position: "absolute",
                                bottom: n,
                                top: "auto",
                              })
                              .trigger("sticky_kit:bottom"))
                          : void 0
                      );
                  }),
                  (i = function () {
                    return v(), e();
                  }),
                  (t = function () {
                    if (
                      ((u = !0),
                      W.off("touchmove", e),
                      W.off("scroll", e),
                      W.off("resize", i),
                      S(document.body).off("sticky_kit:recalc", i),
                      r.off("sticky_kit:detach", t),
                      r.removeData("sticky_kit"),
                      r.css({ position: "", bottom: "", top: "", width: "" }),
                      m.position("position", ""),
                      g)
                    )
                      return (
                        null == V &&
                          (("left" !== d && "right" !== d) || r.insertAfter(w),
                          w.remove()),
                        r.removeClass(A)
                      );
                  }),
                  W.on("touchmove", e),
                  W.on("scroll", e),
                  W.on("resize", i),
                  S(document.body).on("sticky_kit:recalc", i),
                  r.on("sticky_kit:detach", t),
                  setTimeout(e, 0)
                );
            }
          },
          e = 0,
          s = this.length;
        e < s;
        e++
      )
        (i = this[e]), o(S(i));
      return this;
    });
}).call(this);

/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function (f) {
  function A(a, b, d) {
    var c = a[0],
      g = /er/.test(d) ? _indeterminate : /bl/.test(d) ? n : k,
      e =
        d == _update
          ? {
              checked: c[k],
              disabled: c[n],
              indeterminate:
                "true" == a.attr(_indeterminate) ||
                "false" == a.attr(_determinate),
            }
          : c[g];
    if (/^(ch|di|in)/.test(d) && !e) x(a, g);
    else if (/^(un|en|de)/.test(d) && e) q(a, g);
    else if (d == _update) for (var f in e) e[f] ? x(a, f, !0) : q(a, f, !0);
    else if (!b || "toggle" == d) {
      if (!b) a[_callback]("ifClicked");
      e ? c[_type] !== r && q(a, g) : x(a, g);
    }
  }
  function x(a, b, d) {
    var c = a[0],
      g = a.parent(),
      e = b == k,
      u = b == _indeterminate,
      v = b == n,
      s = u ? _determinate : e ? y : "enabled",
      F = l(a, s + t(c[_type])),
      B = l(a, b + t(c[_type]));
    if (!0 !== c[b]) {
      if (!d && b == k && c[_type] == r && c.name) {
        var w = a.closest("form"),
          p = 'input[name="' + c.name + '"]',
          p = w.length ? w.find(p) : f(p);
        p.each(function () {
          this !== c && f(this).data(m) && q(f(this), b);
        });
      }
      u
        ? ((c[b] = !0), c[k] && q(a, k, "force"))
        : (d || (c[b] = !0),
          e && c[_indeterminate] && q(a, _indeterminate, !1));
      D(a, e, b, d);
    }
    c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "default");
    g[_add](B || l(a, b) || "");
    g.attr("role") && !u && g.attr("aria-" + (v ? n : k), "true");
    g[_remove](F || l(a, s) || "");
  }
  function q(a, b, d) {
    var c = a[0],
      g = a.parent(),
      e = b == k,
      f = b == _indeterminate,
      m = b == n,
      s = f ? _determinate : e ? y : "enabled",
      q = l(a, s + t(c[_type])),
      r = l(a, b + t(c[_type]));
    if (!1 !== c[b]) {
      if (f || !d || "force" == d) c[b] = !1;
      D(a, e, s, d);
    }
    !c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "pointer");
    g[_remove](r || l(a, b) || "");
    g.attr("role") && !f && g.attr("aria-" + (m ? n : k), "false");
    g[_add](q || l(a, s) || "");
  }
  function E(a, b) {
    if (a.data(m)) {
      a.parent().html(a.attr("style", a.data(m).s || ""));
      if (b) a[_callback](b);
      a.off(".i").unwrap();
      f(_label + '[for="' + a[0].id + '"]')
        .add(a.closest(_label))
        .off(".i");
    }
  }
  function l(a, b, f) {
    if (a.data(m)) return a.data(m).o[b + (f ? "" : "Class")];
  }
  function t(a) {
    return a.charAt(0).toUpperCase() + a.slice(1);
  }
  function D(a, b, f, c) {
    if (!c) {
      if (b) a[_callback]("ifToggled");
      a[_callback]("ifChanged")[_callback]("if" + t(f));
    }
  }
  var m = "iCheck",
    C = m + "-helper",
    r = "radio",
    k = "checked",
    y = "un" + k,
    n = "disabled";
  _determinate = "determinate";
  _indeterminate = "in" + _determinate;
  _update = "update";
  _type = "type";
  _click = "click";
  _touch = "touchbegin.i touchend.i";
  _add = "addClass";
  _remove = "removeClass";
  _callback = "trigger";
  _label = "label";
  _cursor = "cursor";
  _mobile =
    /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(
      navigator.userAgent
    );
  f.fn[m] = function (a, b) {
    var d = 'input[type="checkbox"], input[type="' + r + '"]',
      c = f(),
      g = function (a) {
        a.each(function () {
          var a = f(this);
          c = a.is(d) ? c.add(a) : c.add(a.find(d));
        });
      };
    if (
      /^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(
        a
      )
    )
      return (
        (a = a.toLowerCase()),
        g(this),
        c.each(function () {
          var c = f(this);
          "destroy" == a ? E(c, "ifDestroyed") : A(c, !0, a);
          f.isFunction(b) && b();
        })
      );
    if ("object" != typeof a && a) return this;
    var e = f.extend(
        {
          checkedClass: k,
          disabledClass: n,
          indeterminateClass: _indeterminate,
          labelHover: !0,
        },
        a
      ),
      l = e.handle,
      v = e.hoverClass || "hover",
      s = e.focusClass || "focus",
      t = e.activeClass || "active",
      B = !!e.labelHover,
      w = e.labelHoverClass || "hover",
      p = ("" + e.increaseArea).replace("%", "") | 0;
    if ("checkbox" == l || l == r) d = 'input[type="' + l + '"]';
    -50 > p && (p = -50);
    g(this);
    return c.each(function () {
      var a = f(this);
      E(a);
      var c = this,
        b = c.id,
        g = -p + "%",
        d = 100 + 2 * p + "%",
        d = {
          position: "absolute",
          top: g,
          left: g,
          display: "block",
          width: d,
          height: d,
          margin: 0,
          padding: 0,
          background: "#fff",
          border: 0,
          opacity: 0,
        },
        g = _mobile
          ? { position: "absolute", visibility: "hidden" }
          : p
          ? d
          : { position: "absolute", opacity: 0 },
        l =
          "checkbox" == c[_type]
            ? e.checkboxClass || "icheckbox"
            : e.radioClass || "i" + r,
        z = f(_label + '[for="' + b + '"]').add(a.closest(_label)),
        u = !!e.aria,
        y = m + "-" + Math.random().toString(36).substr(2, 6),
        h = '<div class="' + l + '" ' + (u ? 'role="' + c[_type] + '" ' : "");
      u &&
        z.each(function () {
          h += 'aria-labelledby="';
          this.id ? (h += this.id) : ((this.id = y), (h += y));
          h += '"';
        });
      h = a
        .wrap(h + "/>")
        [_callback]("ifCreated")
        .parent()
        .append(e.insert);
      d = f('<ins class="' + C + '"/>')
        .css(d)
        .appendTo(h);
      a.data(m, { o: e, s: a.attr("style") }).css(g);
      e.inheritClass && h[_add](c.className || "");
      e.inheritID && b && h.attr("id", m + "-" + b);
      "static" == h.css("position") && h.css("position", "relative");
      A(a, !0, _update);
      if (z.length)
        z.on(_click + ".i mouseover.i mouseout.i " + _touch, function (b) {
          var d = b[_type],
            e = f(this);
          if (!c[n]) {
            if (d == _click) {
              if (f(b.target).is("a")) return;
              A(a, !1, !0);
            } else
              B &&
                (/ut|nd/.test(d)
                  ? (h[_remove](v), e[_remove](w))
                  : (h[_add](v), e[_add](w)));
            b.stopPropagation();
          }
        });
      a.on(
        _click + ".i focus.i blur.i keyup.i keydown.i keypress.i",
        function (b) {
          var d = b[_type];
          b = b.keyCode;
          if (d == _click) return !1;
          if ("keydown" == d && 32 == b)
            return (c[_type] == r && c[k]) || (c[k] ? q(a, k) : x(a, k)), !1;
          if ("keyup" == d && c[_type] == r) !c[k] && x(a, k);
          else if (/us|ur/.test(d)) h["blur" == d ? _remove : _add](s);
        }
      );
      d.on(
        _click + " mousedown mouseup mouseover mouseout " + _touch,
        function (b) {
          var d = b[_type],
            e = /wn|up/.test(d) ? t : v;
          if (!c[n]) {
            if (d == _click) A(a, !1, !0);
            else {
              if (/wn|er|in/.test(d)) h[_add](e);
              else h[_remove](e + " " + t);
              if (z.length && B && e == v)
                z[/ut|nd/.test(d) ? _remove : _add](w);
            }
            b.stopPropagation();
          }
        }
      );
    });
  };
})(window.jQuery || window.Zepto);

/*
 Search overlay
*/
$(".search-overlay-menu-btn").on("click", function (a) {
  $(".search-overlay-menu").addClass("open"),
    $('.search-overlay-menu > form > input[type="search"]').focus();
}),
  $(".search-overlay-close").on("click", function (a) {
    $(".search-overlay-menu").removeClass("open");
  }),
  $(".search-overlay-menu, .search-overlay-menu .search-overlay-close").on(
    "click keyup",
    function (a) {
      (a.target == this ||
        "search-overlay-close" == a.target.className ||
        27 == a.keyCode) &&
        $(this).removeClass("open");
    }
  );

/*
 * jQuery mmenu v6.1.8
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"));
  } else {
    root.jquery_mmenu_all_js = factory(root.jQuery);
  }
})(this, function (jQuery) {
  !(function (e) {
    function t() {
      e[n].glbl ||
        ((r = {
          $wndw: e(window),
          $docu: e(document),
          $html: e("html"),
          $body: e("body"),
        }),
        (s = {}),
        (a = {}),
        (o = {}),
        e.each([s, a, o], function (e, t) {
          t.add = function (e) {
            e = e.split(" ");
            for (var n = 0, i = e.length; n < i; n++) t[e[n]] = t.mm(e[n]);
          };
        }),
        (s.mm = function (e) {
          return "mm-" + e;
        }),
        s.add(
          "wrapper menu panels panel nopanel highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen noanimation"
        ),
        (s.umm = function (e) {
          return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e;
        }),
        (a.mm = function (e) {
          return "mm-" + e;
        }),
        a.add("parent child"),
        (o.mm = function (e) {
          return e + ".mm";
        }),
        o.add(
          "transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"
        ),
        (e[n]._c = s),
        (e[n]._d = a),
        (e[n]._e = o),
        (e[n].glbl = r));
    }
    var n = "mmenu",
      i = "6.1.8";
    if (!(e[n] && e[n].version > i)) {
      (e[n] = function (e, t, n) {
        return (
          (this.$menu = e),
          (this._api = [
            "bind",
            "getInstance",
            "initPanels",
            "openPanel",
            "closePanel",
            "closeAllPanels",
            "setSelected",
          ]),
          (this.opts = t),
          (this.conf = n),
          (this.vars = {}),
          (this.cbck = {}),
          (this.mtch = {}),
          "function" == typeof this.___deprecated && this.___deprecated(),
          this._initAddons(),
          this._initExtensions(),
          this._initMenu(),
          this._initPanels(),
          this._initOpened(),
          this._initAnchors(),
          this._initMatchMedia(),
          "function" == typeof this.___debug && this.___debug(),
          this
        );
      }),
        (e[n].version = i),
        (e[n].addons = {}),
        (e[n].uniqueId = 0),
        (e[n].defaults = {
          extensions: [],
          initMenu: function () {},
          initPanels: function () {},
          navbar: { add: !0, title: "Menu", titleLink: "parent" },
          onClick: { setSelected: !0 },
          slidingSubmenus: !0,
        }),
        (e[n].configuration = {
          classNames: {
            divider: "Divider",
            inset: "Inset",
            nolistview: "NoListview",
            nopanel: "NoPanel",
            panel: "Panel",
            selected: "Selected",
            spacer: "Spacer",
            vertical: "Vertical",
          },
          clone: !1,
          openingInterval: 25,
          panelNodetype: "ul, ol, div",
          transitionDuration: 400,
        }),
        (e[n].prototype = {
          getInstance: function () {
            return this;
          },
          initPanels: function (e) {
            this._initPanels(e);
          },
          openPanel: function (t, i) {
            if (
              (this.trigger("openPanel:before", t),
              t &&
                t.length &&
                (t.is("." + s.panel) || (t = t.closest("." + s.panel)),
                t.is("." + s.panel)))
            ) {
              var o = this;
              if (("boolean" != typeof i && (i = !0), t.hasClass(s.vertical)))
                t
                  .add(t.parents("." + s.vertical))
                  .removeClass(s.hidden)
                  .parent("li")
                  .addClass(s.opened),
                  this.openPanel(
                    t
                      .parents("." + s.panel)
                      .not("." + s.vertical)
                      .first()
                  ),
                  this.trigger("openPanel:start", t),
                  this.trigger("openPanel:finish", t);
              else {
                if (t.hasClass(s.opened)) return;
                var r = this.$pnls.children("." + s.panel),
                  l = r.filter("." + s.opened);
                if (!e[n].support.csstransitions)
                  return (
                    l.addClass(s.hidden).removeClass(s.opened),
                    t.removeClass(s.hidden).addClass(s.opened),
                    this.trigger("openPanel:start", t),
                    void this.trigger("openPanel:finish", t)
                  );
                r.not(t).removeClass(s.subopened);
                for (var d = t.data(a.parent); d; )
                  (d = d.closest("." + s.panel)),
                    d.is("." + s.vertical) || d.addClass(s.subopened),
                    (d = d.data(a.parent));
                r.removeClass(s.highest).not(l).not(t).addClass(s.hidden),
                  t.removeClass(s.hidden),
                  (this.openPanelStart = function () {
                    l.removeClass(s.opened),
                      t.addClass(s.opened),
                      t.hasClass(s.subopened)
                        ? (l.addClass(s.highest), t.removeClass(s.subopened))
                        : (l.addClass(s.subopened), t.addClass(s.highest)),
                      this.trigger("openPanel:start", t);
                  }),
                  (this.openPanelFinish = function () {
                    l.removeClass(s.highest).addClass(s.hidden),
                      t.removeClass(s.highest),
                      this.trigger("openPanel:finish", t);
                  }),
                  i && !t.hasClass(s.noanimation)
                    ? setTimeout(function () {
                        o.__transitionend(
                          t,
                          function () {
                            o.openPanelFinish.call(o);
                          },
                          o.conf.transitionDuration
                        ),
                          o.openPanelStart.call(o);
                      }, o.conf.openingInterval)
                    : (this.openPanelStart.call(this),
                      this.openPanelFinish.call(this));
              }
              this.trigger("openPanel:after", t);
            }
          },
          closePanel: function (e) {
            this.trigger("closePanel:before", e);
            var t = e.parent();
            t.hasClass(s.vertical) &&
              (t.removeClass(s.opened), this.trigger("closePanel", e)),
              this.trigger("closePanel:after", e);
          },
          closeAllPanels: function (e) {
            this.trigger("closeAllPanels:before"),
              this.$pnls
                .find("." + s.listview)
                .children()
                .removeClass(s.selected)
                .filter("." + s.vertical)
                .removeClass(s.opened);
            var t = this.$pnls.children("." + s.panel),
              n = e && e.length ? e : t.first();
            this.$pnls
              .children("." + s.panel)
              .not(n)
              .removeClass(s.subopened)
              .removeClass(s.opened)
              .removeClass(s.highest)
              .addClass(s.hidden),
              this.openPanel(n, !1),
              this.trigger("closeAllPanels:after");
          },
          togglePanel: function (e) {
            var t = e.parent();
            t.hasClass(s.vertical) &&
              this[t.hasClass(s.opened) ? "closePanel" : "openPanel"](e);
          },
          setSelected: function (e) {
            this.trigger("setSelected:before", e),
              this.$menu
                .find("." + s.listview)
                .children("." + s.selected)
                .removeClass(s.selected),
              e.addClass(s.selected),
              this.trigger("setSelected:after", e);
          },
          bind: function (e, t) {
            (this.cbck[e] = this.cbck[e] || []), this.cbck[e].push(t);
          },
          trigger: function () {
            var e = this,
              t = Array.prototype.slice.call(arguments),
              n = t.shift();
            if (this.cbck[n])
              for (var i = 0, s = this.cbck[n].length; i < s; i++)
                this.cbck[n][i].apply(e, t);
          },
          matchMedia: function (e, t, n) {
            var i = { yes: t, no: n };
            (this.mtch[e] = this.mtch[e] || []), this.mtch[e].push(i);
          },
          _initAddons: function () {
            this.trigger("initAddons:before");
            var t;
            for (t in e[n].addons)
              e[n].addons[t].add.call(this),
                (e[n].addons[t].add = function () {});
            for (t in e[n].addons) e[n].addons[t].setup.call(this);
            this.trigger("initAddons:after");
          },
          _initExtensions: function () {
            this.trigger("initExtensions:before");
            var e = this;
            this.opts.extensions.constructor === Array &&
              (this.opts.extensions = { all: this.opts.extensions });
            for (var t in this.opts.extensions)
              (this.opts.extensions[t] = this.opts.extensions[t].length
                ? "mm-" + this.opts.extensions[t].join(" mm-")
                : ""),
                this.opts.extensions[t] &&
                  !(function (t) {
                    e.matchMedia(
                      t,
                      function () {
                        this.$menu.addClass(this.opts.extensions[t]);
                      },
                      function () {
                        this.$menu.removeClass(this.opts.extensions[t]);
                      }
                    );
                  })(t);
            this.trigger("initExtensions:after");
          },
          _initMenu: function () {
            this.trigger("initMenu:before");
            this.conf.clone &&
              ((this.$orig = this.$menu),
              (this.$menu = this.$orig.clone()),
              this.$menu
                .add(this.$menu.find("[id]"))
                .filter("[id]")
                .each(function () {
                  e(this).attr("id", s.mm(e(this).attr("id")));
                })),
              this.opts.initMenu.call(this, this.$menu, this.$orig),
              this.$menu.attr(
                "id",
                this.$menu.attr("id") || this.__getUniqueId()
              ),
              (this.$pnls = e('<div class="' + s.panels + '" />')
                .append(this.$menu.children(this.conf.panelNodetype))
                .prependTo(this.$menu));
            var t = [s.menu];
            this.opts.slidingSubmenus || t.push(s.vertical),
              this.$menu.addClass(t.join(" ")).parent().addClass(s.wrapper),
              this.trigger("initMenu:after");
          },
          _initPanels: function (t) {
            this.trigger("initPanels:before", t),
              (t = t || this.$pnls.children(this.conf.panelNodetype));
            var n = e(),
              i = this,
              a = function (t) {
                t.filter(this.conf.panelNodetype).each(function () {
                  var t = i._initPanel(e(this));
                  if (t) {
                    i._initNavbar(t), i._initListview(t), (n = n.add(t));
                    var o = t
                      .children("." + s.listview)
                      .children("li")
                      .children(i.conf.panelNodeType)
                      .add(t.children("." + i.conf.classNames.panel));
                    o.length && a.call(i, o);
                  }
                });
              };
            a.call(this, t),
              this.opts.initPanels.call(this, n),
              this.trigger("initPanels:after", n);
          },
          _initPanel: function (e) {
            this.trigger("initPanel:before", e);
            if (e.hasClass(s.panel)) return e;
            if (
              (this.__refactorClass(e, this.conf.classNames.panel, "panel"),
              this.__refactorClass(e, this.conf.classNames.nopanel, "nopanel"),
              this.__refactorClass(
                e,
                this.conf.classNames.vertical,
                "vertical"
              ),
              this.__refactorClass(e, this.conf.classNames.inset, "inset"),
              e.filter("." + s.inset).addClass(s.nopanel),
              e.hasClass(s.nopanel))
            )
              return !1;
            var t = e.hasClass(s.vertical) || !this.opts.slidingSubmenus;
            e.removeClass(s.vertical);
            var n = e.attr("id") || this.__getUniqueId();
            e.removeAttr("id"),
              e.is("ul, ol") && (e.wrap("<div />"), (e = e.parent())),
              e.addClass(s.panel + " " + s.hidden).attr("id", n);
            var i = e.parent("li");
            return (
              t ? e.add(i).addClass(s.vertical) : e.appendTo(this.$pnls),
              i.length && (i.data(a.child, e), e.data(a.parent, i)),
              this.trigger("initPanel:after", e),
              e
            );
          },
          _initNavbar: function (t) {
            if (
              (this.trigger("initNavbar:before", t),
              !t.children("." + s.navbar).length)
            ) {
              var i = t.data(a.parent),
                o = e('<div class="' + s.navbar + '" />'),
                r = e[n].i18n(this.opts.navbar.title),
                l = "";
              if (i && i.length) {
                if (i.hasClass(s.vertical)) return;
                if (i.parent().is("." + s.listview))
                  var d = i.children("a, span").not("." + s.next);
                else
                  var d = i
                    .closest("." + s.panel)
                    .find('a[href="#' + t.attr("id") + '"]');
                (d = d.first()), (i = d.closest("." + s.panel));
                var c = i.attr("id");
                switch (((r = d.text()), this.opts.navbar.titleLink)) {
                  case "anchor":
                    l = d.attr("href");
                    break;
                  case "parent":
                    l = "#" + c;
                }
                o.append(
                  '<a class="' + s.btn + " " + s.prev + '" href="#' + c + '" />'
                );
              } else if (!this.opts.navbar.title) return;
              this.opts.navbar.add && t.addClass(s.hasnavbar),
                o
                  .append(
                    '<a class="' +
                      s.title +
                      '"' +
                      (l.length ? ' href="' + l + '"' : "") +
                      ">" +
                      r +
                      "</a>"
                  )
                  .prependTo(t),
                this.trigger("initNavbar:after", t);
            }
          },
          _initListview: function (t) {
            this.trigger("initListview:before", t);
            var n = this.__childAddBack(t, "ul, ol");
            this.__refactorClass(
              n,
              this.conf.classNames.nolistview,
              "nolistview"
            ),
              n.filter("." + this.conf.classNames.inset).addClass(s.nolistview);
            var i = n
              .not("." + s.nolistview)
              .addClass(s.listview)
              .children();
            this.__refactorClass(i, this.conf.classNames.selected, "selected"),
              this.__refactorClass(i, this.conf.classNames.divider, "divider"),
              this.__refactorClass(i, this.conf.classNames.spacer, "spacer");
            var o = t.data(a.parent);
            if (
              o &&
              o.parent().is("." + s.listview) &&
              !o.children("." + s.next).length
            ) {
              var r = o.children("a, span").first(),
                l = e(
                  '<a class="' + s.next + '" href="#' + t.attr("id") + '" />'
                ).insertBefore(r);
              r.is("span") && l.addClass(s.fullsubopen);
            }
            this.trigger("initListview:after", t);
          },
          _initOpened: function () {
            this.trigger("initOpened:before");
            var e = this.$pnls
                .find("." + s.listview)
                .children("." + s.selected)
                .removeClass(s.selected)
                .last()
                .addClass(s.selected),
              t = e.length
                ? e.closest("." + s.panel)
                : this.$pnls.children("." + s.panel).first();
            this.openPanel(t, !1), this.trigger("initOpened:after");
          },
          _initAnchors: function () {
            var t = this;
            r.$body.on(o.click + "-oncanvas", "a[href]", function (i) {
              var a = e(this),
                o = !1,
                r = t.$menu.find(a).length;
              for (var l in e[n].addons)
                if (e[n].addons[l].clickAnchor.call(t, a, r)) {
                  o = !0;
                  break;
                }
              var d = a.attr("href");
              if (!o && r && d.length > 1 && "#" == d.slice(0, 1))
                try {
                  var c = e(d, t.$menu);
                  c.is("." + s.panel) &&
                    ((o = !0),
                    t[
                      a.parent().hasClass(s.vertical)
                        ? "togglePanel"
                        : "openPanel"
                    ](c));
                } catch (h) {}
              if (
                (o && i.preventDefault(),
                !o &&
                  r &&
                  a.is("." + s.listview + " > li > a") &&
                  !a.is('[rel="external"]') &&
                  !a.is('[target="_blank"]'))
              ) {
                t.__valueOrFn(t.opts.onClick.setSelected, a) &&
                  t.setSelected(e(i.target).parent());
                var f = t.__valueOrFn(
                  t.opts.onClick.preventDefault,
                  a,
                  "#" == d.slice(0, 1)
                );
                f && i.preventDefault(),
                  t.__valueOrFn(t.opts.onClick.close, a, f) &&
                    t.opts.offCanvas &&
                    "function" == typeof t.close &&
                    t.close();
              }
            });
          },
          _initMatchMedia: function () {
            var e = this;
            this._fireMatchMedia(),
              r.$wndw.on(o.resize, function (t) {
                e._fireMatchMedia();
              });
          },
          _fireMatchMedia: function () {
            for (var e in this.mtch)
              for (
                var t =
                    window.matchMedia && window.matchMedia(e).matches
                      ? "yes"
                      : "no",
                  n = 0;
                n < this.mtch[e].length;
                n++
              )
                this.mtch[e][n][t].call(this);
          },
          _getOriginalMenuId: function () {
            var e = this.$menu.attr("id");
            return this.conf.clone && e && e.length && (e = s.umm(e)), e;
          },
          __api: function () {
            var t = this,
              n = {};
            return (
              e.each(this._api, function (e) {
                var i = this;
                n[i] = function () {
                  var e = t[i].apply(t, arguments);
                  return "undefined" == typeof e ? n : e;
                };
              }),
              n
            );
          },
          __valueOrFn: function (e, t, n) {
            return "function" == typeof e
              ? e.call(t[0])
              : "undefined" == typeof e && "undefined" != typeof n
              ? n
              : e;
          },
          __refactorClass: function (e, t, n) {
            return e
              .filter("." + t)
              .removeClass(t)
              .addClass(s[n]);
          },
          __findAddBack: function (e, t) {
            return e.find(t).add(e.filter(t));
          },
          __childAddBack: function (e, t) {
            return e.children(t).add(e.filter(t));
          },
          __filterListItems: function (e) {
            return e.not("." + s.divider).not("." + s.hidden);
          },
          __filterListItemAnchors: function (e) {
            return this.__filterListItems(e)
              .children("a")
              .not("." + s.next);
          },
          __transitionend: function (e, t, n) {
            var i = !1,
              s = function (n) {
                ("undefined" != typeof n && n.target != e[0]) ||
                  (i ||
                    (e.off(o.transitionend),
                    e.off(o.webkitTransitionEnd),
                    t.call(e[0])),
                  (i = !0));
              };
            e.on(o.transitionend, s),
              e.on(o.webkitTransitionEnd, s),
              setTimeout(s, 1.1 * n);
          },
          __getUniqueId: function () {
            return s.mm(e[n].uniqueId++);
          },
        }),
        (e.fn[n] = function (i, s) {
          t(),
            (i = e.extend(!0, {}, e[n].defaults, i)),
            (s = e.extend(!0, {}, e[n].configuration, s));
          var a = e();
          return (
            this.each(function () {
              var t = e(this);
              if (!t.data(n)) {
                var o = new e[n](t, i, s);
                o.$menu.data(n, o.__api()), (a = a.add(o.$menu));
              }
            }),
            a
          );
        }),
        (e[n].i18n = (function () {
          var t = {};
          return function (n) {
            switch (typeof n) {
              case "object":
                return e.extend(t, n), t;
              case "string":
                return t[n] || n;
              case "undefined":
              default:
                return t;
            }
          };
        })()),
        (e[n].support = {
          touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1,
          csstransitions: (function () {
            return (
              "undefined" == typeof Modernizr ||
              "undefined" == typeof Modernizr.csstransitions ||
              Modernizr.csstransitions
            );
          })(),
          csstransforms: (function () {
            return (
              "undefined" == typeof Modernizr ||
              "undefined" == typeof Modernizr.csstransforms ||
              Modernizr.csstransforms
            );
          })(),
          csstransforms3d: (function () {
            return (
              "undefined" == typeof Modernizr ||
              "undefined" == typeof Modernizr.csstransforms3d ||
              Modernizr.csstransforms3d
            );
          })(),
        });
      var s, a, o, r;
    }
  })(jQuery),
    /*
     * jQuery mmenu offCanvas add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    (function (e) {
      var t = "mmenu",
        n = "offCanvas";
      (e[t].addons[n] = {
        setup: function () {
          if (this.opts[n]) {
            var s = this,
              a = this.opts[n],
              r = this.conf[n];
            (o = e[t].glbl),
              (this._api = e.merge(this._api, ["open", "close", "setPage"])),
              "object" != typeof a && (a = {}),
              ("top" != a.position && "bottom" != a.position) ||
                (a.zposition = "front"),
              (a = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], a)),
              "string" != typeof r.pageSelector &&
                (r.pageSelector = "> " + r.pageNodetype),
              (this.vars.opened = !1);
            var l = [i.offcanvas];
            "left" != a.position && l.push(i.mm(a.position)),
              "back" != a.zposition && l.push(i.mm(a.zposition)),
              e[t].support.csstransforms || l.push(i["no-csstransforms"]),
              e[t].support.csstransforms3d || l.push(i["no-csstransforms3d"]),
              this.bind("initMenu:after", function () {
                var e = this;
                this.setPage(o.$page),
                  this._initBlocker(),
                  this["_initWindow_" + n](),
                  this.$menu
                    .addClass(l.join(" "))
                    .parent("." + i.wrapper)
                    .removeClass(i.wrapper),
                  this.$menu[r.menuInsertMethod](r.menuInsertSelector);
                var t = window.location.hash;
                if (t) {
                  var s = this._getOriginalMenuId();
                  s &&
                    s == t.slice(1) &&
                    setTimeout(function () {
                      e.open();
                    }, 1e3);
                }
              }),
              this.bind("initExtensions:after", function () {
                for (
                  var e = [i.mm("widescreen"), i.mm("iconbar")], t = 0;
                  t < e.length;
                  t++
                )
                  for (var n in this.opts.extensions)
                    if (this.opts.extensions[n].indexOf(e[t]) > -1) {
                      !(function (t, n) {
                        s.matchMedia(
                          t,
                          function () {
                            o.$html.addClass(e[n]);
                          },
                          function () {
                            o.$html.removeClass(e[n]);
                          }
                        );
                      })(n, t);
                      break;
                    }
              }),
              this.bind("open:start:sr-aria", function () {
                this.__sr_aria(this.$menu, "hidden", !1);
              }),
              this.bind("close:finish:sr-aria", function () {
                this.__sr_aria(this.$menu, "hidden", !0);
              }),
              this.bind("initMenu:after:sr-aria", function () {
                this.__sr_aria(this.$menu, "hidden", !0);
              });
          }
        },
        add: function () {
          (i = e[t]._c),
            (s = e[t]._d),
            (a = e[t]._e),
            i.add(
              "offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"
            ),
            s.add("style");
        },
        clickAnchor: function (e, t) {
          var s = this;
          if (this.opts[n]) {
            var a = this._getOriginalMenuId();
            if (a && e.is('[href="#' + a + '"]')) {
              if (t) return !0;
              var r = e.closest("." + i.menu);
              if (r.length) {
                var l = r.data("mmenu");
                if (l && l.close)
                  return (
                    l.close(),
                    s.__transitionend(
                      r,
                      function () {
                        s.open();
                      },
                      s.conf.transitionDuration
                    ),
                    !0
                  );
              }
              return this.open(), !0;
            }
            if (o.$page)
              return (
                (a = o.$page.first().attr("id")),
                a && e.is('[href="#' + a + '"]') ? (this.close(), !0) : void 0
              );
          }
        },
      }),
        (e[t].defaults[n] = {
          position: "left",
          zposition: "back",
          blockUI: !0,
          moveBackground: !0,
        }),
        (e[t].configuration[n] = {
          pageNodetype: "div",
          pageSelector: null,
          noPageSelector: [],
          wrapPageIfNeeded: !0,
          menuInsertMethod: "prependTo",
          menuInsertSelector: "body",
        }),
        (e[t].prototype.open = function () {
          if ((this.trigger("open:before"), !this.vars.opened)) {
            var e = this;
            this._openSetup(),
              setTimeout(function () {
                e._openFinish();
              }, this.conf.openingInterval),
              this.trigger("open:after");
          }
        }),
        (e[t].prototype._openSetup = function () {
          var t = this,
            r = this.opts[n];
          this.closeAllOthers(),
            o.$page.each(function () {
              e(this).data(s.style, e(this).attr("style") || "");
            }),
            o.$wndw.trigger(a.resize + "-" + n, [!0]);
          var l = [i.opened];
          r.blockUI && l.push(i.blocking),
            "modal" == r.blockUI && l.push(i.modal),
            r.moveBackground && l.push(i.background),
            "left" != r.position && l.push(i.mm(this.opts[n].position)),
            "back" != r.zposition && l.push(i.mm(this.opts[n].zposition)),
            o.$html.addClass(l.join(" ")),
            setTimeout(function () {
              t.vars.opened = !0;
            }, this.conf.openingInterval),
            this.$menu.addClass(i.opened);
        }),
        (e[t].prototype._openFinish = function () {
          var e = this;
          this.__transitionend(
            o.$page.first(),
            function () {
              e.trigger("open:finish");
            },
            this.conf.transitionDuration
          ),
            this.trigger("open:start"),
            o.$html.addClass(i.opening);
        }),
        (e[t].prototype.close = function () {
          if ((this.trigger("close:before"), this.vars.opened)) {
            var t = this;
            this.__transitionend(
              o.$page.first(),
              function () {
                t.$menu.removeClass(i.opened);
                var a = [
                  i.opened,
                  i.blocking,
                  i.modal,
                  i.background,
                  i.mm(t.opts[n].position),
                  i.mm(t.opts[n].zposition),
                ];
                o.$html.removeClass(a.join(" ")),
                  o.$page.each(function () {
                    e(this).attr("style", e(this).data(s.style));
                  }),
                  (t.vars.opened = !1),
                  t.trigger("close:finish");
              },
              this.conf.transitionDuration
            ),
              this.trigger("close:start"),
              o.$html.removeClass(i.opening),
              this.trigger("close:after");
          }
        }),
        (e[t].prototype.closeAllOthers = function () {
          o.$body
            .find("." + i.menu + "." + i.offcanvas)
            .not(this.$menu)
            .each(function () {
              var n = e(this).data(t);
              n && n.close && n.close();
            });
        }),
        (e[t].prototype.setPage = function (t) {
          this.trigger("setPage:before", t);
          var s = this,
            a = this.conf[n];
          (t && t.length) ||
            ((t = o.$body.find(a.pageSelector)),
            a.noPageSelector.length && (t = t.not(a.noPageSelector.join(", "))),
            t.length > 1 &&
              a.wrapPageIfNeeded &&
              (t = t
                .wrapAll("<" + this.conf[n].pageNodetype + " />")
                .parent())),
            t.each(function () {
              e(this).attr("id", e(this).attr("id") || s.__getUniqueId());
            }),
            t.addClass(i.page + " " + i.slideout),
            (o.$page = t),
            this.trigger("setPage:after", t);
        }),
        (e[t].prototype["_initWindow_" + n] = function () {
          o.$wndw
            .off(a.keydown + "-" + n)
            .on(a.keydown + "-" + n, function (e) {
              if (o.$html.hasClass(i.opened) && 9 == e.keyCode)
                return e.preventDefault(), !1;
            });
          var e = 0;
          o.$wndw
            .off(a.resize + "-" + n)
            .on(a.resize + "-" + n, function (t, n) {
              if (1 == o.$page.length && (n || o.$html.hasClass(i.opened))) {
                var s = o.$wndw.height();
                (n || s != e) && ((e = s), o.$page.css("minHeight", s));
              }
            });
        }),
        (e[t].prototype._initBlocker = function () {
          var t = this;
          this.opts[n].blockUI &&
            (o.$blck ||
              (o.$blck = e(
                '<div id="' + i.blocker + '" class="' + i.slideout + '" />'
              )),
            o.$blck
              .appendTo(o.$body)
              .off(a.touchstart + "-" + n + " " + a.touchmove + "-" + n)
              .on(
                a.touchstart + "-" + n + " " + a.touchmove + "-" + n,
                function (e) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    o.$blck.trigger(a.mousedown + "-" + n);
                }
              )
              .off(a.mousedown + "-" + n)
              .on(a.mousedown + "-" + n, function (e) {
                e.preventDefault(),
                  o.$html.hasClass(i.modal) || (t.closeAllOthers(), t.close());
              }));
        });
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu scrollBugFix add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "scrollBugFix";
      (e[t].addons[n] = {
        setup: function () {
          var s = this.opts[n];
          this.conf[n];
          (o = e[t].glbl),
            e[t].support.touch &&
              this.opts.offCanvas &&
              this.opts.offCanvas.blockUI &&
              ("boolean" == typeof s && (s = { fix: s }),
              "object" != typeof s && (s = {}),
              (s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s)),
              s.fix &&
                (this.bind("open:start", function () {
                  this.$pnls.children("." + i.opened).scrollTop(0);
                }),
                this.bind("initMenu:after", function () {
                  this["_initWindow_" + n]();
                })));
        },
        add: function () {
          (i = e[t]._c), (s = e[t]._d), (a = e[t]._e);
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].defaults[n] = { fix: !0 }),
        (e[t].prototype["_initWindow_" + n] = function () {
          var t = this;
          o.$docu
            .off(a.touchmove + "-" + n)
            .on(a.touchmove + "-" + n, function (e) {
              o.$html.hasClass(i.opened) && e.preventDefault();
            });
          var s = !1;
          o.$body
            .off(a.touchstart + "-" + n)
            .on(
              a.touchstart + "-" + n,
              "." + i.panels + "> ." + i.panel,
              function (e) {
                o.$html.hasClass(i.opened) &&
                  (s ||
                    ((s = !0),
                    0 === e.currentTarget.scrollTop
                      ? (e.currentTarget.scrollTop = 1)
                      : e.currentTarget.scrollHeight ===
                          e.currentTarget.scrollTop +
                            e.currentTarget.offsetHeight &&
                        (e.currentTarget.scrollTop -= 1),
                    (s = !1)));
              }
            )
            .off(a.touchmove + "-" + n)
            .on(
              a.touchmove + "-" + n,
              "." + i.panels + "> ." + i.panel,
              function (t) {
                o.$html.hasClass(i.opened) &&
                  e(this)[0].scrollHeight > e(this).innerHeight() &&
                  t.stopPropagation();
              }
            ),
            o.$wndw
              .off(a.orientationchange + "-" + n)
              .on(a.orientationchange + "-" + n, function () {
                t.$pnls
                  .children("." + i.opened)
                  .scrollTop(0)
                  .css({ "-webkit-overflow-scrolling": "auto" })
                  .css({ "-webkit-overflow-scrolling": "touch" });
              });
        });
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu screenReader add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "screenReader";
      (e[t].addons[n] = {
        setup: function () {
          var a = this,
            r = this.opts[n],
            l = this.conf[n];
          (o = e[t].glbl),
            "boolean" == typeof r && (r = { aria: r, text: r }),
            "object" != typeof r && (r = {}),
            (r = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], r)),
            r.aria &&
              (this.bind("initAddons:after", function () {
                this.bind("initMenu:after", function () {
                  this.trigger("initMenu:after:sr-aria");
                }),
                  this.bind("initNavbar:after", function () {
                    this.trigger("initNavbar:after:sr-aria", arguments[0]);
                  }),
                  this.bind("openPanel:start", function () {
                    this.trigger("openPanel:start:sr-aria", arguments[0]);
                  }),
                  this.bind("close:start", function () {
                    this.trigger("close:start:sr-aria");
                  }),
                  this.bind("close:finish", function () {
                    this.trigger("close:finish:sr-aria");
                  }),
                  this.bind("open:start", function () {
                    this.trigger("open:start:sr-aria");
                  }),
                  this.bind("open:finish", function () {
                    this.trigger("open:finish:sr-aria");
                  });
              }),
              this.bind("updateListview", function () {
                this.$pnls
                  .find("." + i.listview)
                  .children()
                  .each(function () {
                    a.__sr_aria(e(this), "hidden", e(this).is("." + i.hidden));
                  });
              }),
              this.bind("openPanel:start", function (e) {
                var t = this.$menu
                    .find("." + i.panel)
                    .not(e)
                    .not(e.parents("." + i.panel)),
                  n = e.add(
                    e
                      .find("." + i.vertical + "." + i.opened)
                      .children("." + i.panel)
                  );
                this.__sr_aria(t, "hidden", !0),
                  this.__sr_aria(n, "hidden", !1);
              }),
              this.bind("closePanel", function (e) {
                this.__sr_aria(e, "hidden", !0);
              }),
              this.bind("initPanels:after", function (t) {
                var n = t.find("." + i.prev + ", ." + i.next).each(function () {
                  a.__sr_aria(
                    e(this),
                    "owns",
                    e(this).attr("href").replace("#", "")
                  );
                });
                this.__sr_aria(n, "haspopup", !0);
              }),
              this.bind("initNavbar:after", function (e) {
                var t = e.children("." + i.navbar);
                this.__sr_aria(t, "hidden", !e.hasClass(i.hasnavbar));
              }),
              r.text &&
                (this.bind("initlistview:after", function (e) {
                  var t = e
                    .find("." + i.listview)
                    .find("." + i.fullsubopen)
                    .parent()
                    .children("span");
                  this.__sr_aria(t, "hidden", !0);
                }),
                "parent" == this.opts.navbar.titleLink &&
                  this.bind("initNavbar:after", function (e) {
                    var t = e.children("." + i.navbar),
                      n = !!t.children("." + i.prev).length;
                    this.__sr_aria(t.children("." + i.title), "hidden", n);
                  }))),
            r.text &&
              (this.bind("initAddons:after", function () {
                this.bind("setPage:after", function () {
                  this.trigger("setPage:after:sr-text", arguments[0]);
                });
              }),
              this.bind("initNavbar:after", function (n) {
                var s = n.children("." + i.navbar),
                  a = s.children("." + i.title).text(),
                  o = e[t].i18n(l.text.closeSubmenu);
                a && (o += " (" + a + ")"),
                  s.children("." + i.prev).html(this.__sr_text(o));
              }),
              this.bind("initListview:after", function (n) {
                var o = n.data(s.parent);
                if (o && o.length) {
                  var r = o.children("." + i.next),
                    d = r.nextAll("span, a").first().text(),
                    c = e[t].i18n(
                      l.text[
                        r.parent().is("." + i.vertical)
                          ? "toggleSubmenu"
                          : "openSubmenu"
                      ]
                    );
                  d && (c += " (" + d + ")"), r.html(a.__sr_text(c));
                }
              }));
        },
        add: function () {
          (i = e[t]._c), (s = e[t]._d), (a = e[t]._e), i.add("sronly");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].defaults[n] = { aria: !0, text: !0 }),
        (e[t].configuration[n] = {
          text: {
            closeMenu: "Close menu",
            closeSubmenu: "Close submenu",
            openSubmenu: "Open submenu",
            toggleSubmenu: "Toggle submenu",
          },
        }),
        (e[t].prototype.__sr_aria = function (e, t, n) {
          e.prop("aria-" + t, n)[n ? "attr" : "removeAttr"]("aria-" + t, n);
        }),
        (e[t].prototype.__sr_text = function (e) {
          return '<span class="' + i.sronly + '">' + e + "</span>";
        });
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu autoHeight add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "autoHeight";
      (e[t].addons[n] = {
        setup: function () {
          var s = this.opts[n];
          this.conf[n];
          if (
            ((o = e[t].glbl),
            "boolean" == typeof s && s && (s = { height: "auto" }),
            "string" == typeof s && (s = { height: s }),
            "object" != typeof s && (s = {}),
            (s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s)),
            "auto" == s.height || "highest" == s.height)
          ) {
            this.bind("initMenu:after", function () {
              this.$menu.addClass(i.autoheight);
            });
            var a = function (t) {
              if (!this.opts.offCanvas || this.vars.opened) {
                var n = Math.max(parseInt(this.$pnls.css("top"), 10), 0) || 0,
                  a = Math.max(parseInt(this.$pnls.css("bottom"), 10), 0) || 0,
                  o = 0;
                this.$menu.addClass(i.measureheight),
                  "auto" == s.height
                    ? ((t = t || this.$pnls.children("." + i.opened)),
                      t.is("." + i.vertical) &&
                        (t = t.parents("." + i.panel).not("." + i.vertical)),
                      t.length || (t = this.$pnls.children("." + i.panel)),
                      (o = t.first().outerHeight()))
                    : "highest" == s.height &&
                      this.$pnls.children().each(function () {
                        var t = e(this);
                        t.is("." + i.vertical) &&
                          (t = t
                            .parents("." + i.panel)
                            .not("." + i.vertical)
                            .first()),
                          (o = Math.max(o, t.outerHeight()));
                      }),
                  this.$menu.height(o + n + a).removeClass(i.measureheight);
              }
            };
            this.opts.offCanvas && this.bind("open:start", a),
              "highest" == s.height && this.bind("initPanels:after", a),
              "auto" == s.height &&
                (this.bind("updateListview", a),
                this.bind("openPanel:start", a),
                this.bind("closePanel", a));
          }
        },
        add: function () {
          (i = e[t]._c),
            (s = e[t]._d),
            (a = e[t]._e),
            i.add("autoheight measureheight"),
            a.add("resize");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].defaults[n] = { height: "default" });
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu backButton add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "backButton";
      (e[t].addons[n] = {
        setup: function () {
          if (this.opts.offCanvas) {
            var s = this,
              a = this.opts[n];
            this.conf[n];
            if (
              ((o = e[t].glbl),
              "boolean" == typeof a && (a = { close: a }),
              "object" != typeof a && (a = {}),
              (a = e.extend(!0, {}, e[t].defaults[n], a)),
              a.close)
            ) {
              var r = "#" + s.$menu.attr("id");
              this.bind("open:finish", function (e) {
                location.hash != r &&
                  history.pushState(null, document.title, r);
              }),
                e(window).on("popstate", function (e) {
                  o.$html.hasClass(i.opened)
                    ? (e.stopPropagation(), s.close())
                    : location.hash == r && (e.stopPropagation(), s.open());
                });
            }
          }
        },
        add: function () {
          return window.history && window.history.pushState
            ? ((i = e[t]._c), (s = e[t]._d), void (a = e[t]._e))
            : void (e[t].addons[n].setup = function () {});
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].defaults[n] = { close: !1 });
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu counters add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "counters";
      (e[t].addons[n] = {
        setup: function () {
          var a = this,
            r = this.opts[n];
          this.conf[n];
          if (
            ((o = e[t].glbl),
            "boolean" == typeof r && (r = { add: r, update: r }),
            "object" != typeof r && (r = {}),
            (r = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], r)),
            this.bind("initListview:after", function (t) {
              this.__refactorClass(
                e("em", t),
                this.conf.classNames[n].counter,
                "counter"
              );
            }),
            r.add &&
              this.bind("initListview:after", function (t) {
                var n;
                switch (r.addTo) {
                  case "panels":
                    n = t;
                    break;
                  default:
                    n = t.filter(r.addTo);
                }
                n.each(function () {
                  var t = e(this).data(s.parent);
                  t &&
                    (t.children("em." + i.counter).length ||
                      t.prepend(e('<em class="' + i.counter + '" />')));
                });
              }),
            r.update)
          ) {
            var l = function (t) {
              (t = t || this.$pnls.children("." + i.panel)),
                t.each(function () {
                  var t = e(this),
                    n = t.data(s.parent);
                  if (n) {
                    var o = n.children("em." + i.counter);
                    o.length &&
                      ((t = t.children("." + i.listview)),
                      t.length &&
                        o.html(a.__filterListItems(t.children()).length));
                  }
                });
            };
            this.bind("initListview:after", l), this.bind("updateListview", l);
          }
        },
        add: function () {
          (i = e[t]._c),
            (s = e[t]._d),
            (a = e[t]._e),
            i.add("counter search noresultsmsg");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].defaults[n] = { add: !1, addTo: "panels", count: !1 }),
        (e[t].configuration.classNames[n] = { counter: "Counter" });
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu columns add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "columns";
      (e[t].addons[n] = {
        setup: function () {
          var s = this.opts[n];
          this.conf[n];
          if (
            ((o = e[t].glbl),
            "boolean" == typeof s && (s = { add: s }),
            "number" == typeof s && (s = { add: !0, visible: s }),
            "object" != typeof s && (s = {}),
            "number" == typeof s.visible &&
              (s.visible = { min: s.visible, max: s.visible }),
            (s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s)),
            s.add)
          ) {
            (s.visible.min = Math.max(1, Math.min(6, s.visible.min))),
              (s.visible.max = Math.max(
                s.visible.min,
                Math.min(6, s.visible.max)
              ));
            for (
              var a = this.opts.offCanvas
                  ? this.$menu.add(o.$html)
                  : this.$menu,
                r = "",
                l = 0;
              l <= s.visible.max;
              l++
            )
              r += " " + i.columns + "-" + l;
            r.length && (r = r.slice(1));
            var d = function (e) {
                var t = this.$pnls.children("." + i.subopened).length;
                e && !e.hasClass(i.subopened) && t++,
                  (t = Math.min(s.visible.max, Math.max(s.visible.min, t))),
                  a.removeClass(r).addClass(i.columns + "-" + t);
              },
              c = function (t) {
                (t = t || this.$pnls.children("." + i.opened)),
                  this.$pnls
                    .children("." + i.panel)
                    .removeClass(r)
                    .filter("." + i.subopened)
                    .add(t)
                    .slice(-s.visible.max)
                    .each(function (t) {
                      e(this).addClass(i.columns + "-" + t);
                    });
              };
            this.bind("initMenu:after", function () {
              this.$menu.addClass(i.columns);
            }),
              this.bind("openPanel:start", d),
              this.bind("openPanel:start", c);
          }
        },
        add: function () {
          (i = e[t]._c), (s = e[t]._d), (a = e[t]._e), i.add("columns");
        },
        clickAnchor: function (t, s) {
          if (!this.opts[n].add) return !1;
          if (s) {
            var a = t.attr("href");
            if (a.length > 1 && "#" == a.slice(0, 1))
              try {
                var o = e(a, this.$menu);
                if (o.is("." + i.panel))
                  for (
                    var r =
                      parseInt(
                        t
                          .closest("." + i.panel)
                          .attr("class")
                          .split(i.columns + "-")[1]
                          .split(" ")[0],
                        10
                      ) + 1;
                    r > 0;

                  ) {
                    var l = this.$pnls.children("." + i.columns + "-" + r);
                    if (!l.length) {
                      r = -1;
                      break;
                    }
                    r++,
                      l
                        .removeClass(i.subopened)
                        .removeClass(i.opened)
                        .removeClass(i.highest)
                        .addClass(i.hidden);
                  }
              } catch (d) {}
          }
        },
      }),
        (e[t].defaults[n] = { add: !1, visible: { min: 1, max: 3 } });
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu dividers add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "dividers";
      (e[t].addons[n] = {
        setup: function () {
          var s = this,
            r = this.opts[n];
          this.conf[n];
          if (
            ((o = e[t].glbl),
            "boolean" == typeof r && (r = { add: r, fixed: r }),
            "object" != typeof r && (r = {}),
            (r = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], r)),
            this.bind("initListview:after", function (e) {
              this.__refactorClass(
                e.find("li"),
                this.conf.classNames[n].collapsed,
                "collapsed"
              );
            }),
            r.add &&
              this.bind("initListview:after", function (t) {
                var n;
                switch (r.addTo) {
                  case "panels":
                    n = t;
                    break;
                  default:
                    n = t.filter(r.addTo);
                }
                n.length &&
                  n
                    .find("." + i.listview)
                    .find("." + i.divider)
                    .remove()
                    .end()
                    .each(function () {
                      var t = "";
                      s.__filterListItems(e(this).children()).each(function () {
                        var n = e
                          .trim(e(this).children("a, span").text())
                          .slice(0, 1)
                          .toLowerCase();
                        n != t &&
                          n.length &&
                          ((t = n),
                          e(
                            '<li class="' + i.divider + '">' + n + "</li>"
                          ).insertBefore(this));
                      });
                    });
              }),
            r.collapse &&
              this.bind("initListview:after", function (t) {
                t.find("." + i.divider).each(function () {
                  var t = e(this),
                    n = t.nextUntil("." + i.divider, "." + i.collapsed);
                  n.length &&
                    (t.children("." + i.next).length ||
                      (t.wrapInner("<span />"),
                      t.prepend(
                        '<a href="#" class="' +
                          i.next +
                          " " +
                          i.fullsubopen +
                          '" />'
                      )));
                });
              }),
            r.fixed)
          ) {
            this.bind("initPanels:after", function () {
              "undefined" == typeof this.$fixeddivider &&
                (this.$fixeddivider = e(
                  '<ul class="' +
                    i.listview +
                    " " +
                    i.fixeddivider +
                    '"><li class="' +
                    i.divider +
                    '"></li></ul>'
                )
                  .prependTo(this.$pnls)
                  .children());
            });
            var l = function (t) {
              if (
                ((t = t || this.$pnls.children("." + i.opened)),
                !t.is(":hidden"))
              ) {
                var n = t
                    .children("." + i.listview)
                    .children("." + i.divider)
                    .not("." + i.hidden),
                  s = t.scrollTop() || 0,
                  a = "";
                n.each(function () {
                  e(this).position().top + s < s + 1 && (a = e(this).text());
                }),
                  this.$fixeddivider.text(a),
                  this.$pnls[a.length ? "addClass" : "removeClass"](
                    i.hasdividers
                  );
              }
            };
            this.bind("open:start", l),
              this.bind("openPanel:start", l),
              this.bind("updateListview", l),
              this.bind("initPanel:after", function (e) {
                e.off(a.scroll + "-" + n + " " + a.touchmove + "-" + n).on(
                  a.scroll + "-" + n + " " + a.touchmove + "-" + n,
                  function (t) {
                    l.call(s, e);
                  }
                );
              });
          }
        },
        add: function () {
          (i = e[t]._c),
            (s = e[t]._d),
            (a = e[t]._e),
            i.add("collapsed uncollapsed fixeddivider hasdividers"),
            a.add("scroll");
        },
        clickAnchor: function (e, t) {
          if (this.opts[n].collapse && t) {
            var s = e.parent();
            if (s.is("." + i.divider)) {
              var a = s.nextUntil("." + i.divider, "." + i.collapsed);
              return (
                s.toggleClass(i.opened),
                a[s.hasClass(i.opened) ? "addClass" : "removeClass"](
                  i.uncollapsed
                ),
                !0
              );
            }
          }
          return !1;
        },
      }),
        (e[t].defaults[n] = {
          add: !1,
          addTo: "panels",
          fixed: !1,
          collapse: !1,
        }),
        (e[t].configuration.classNames[n] = { collapsed: "Collapsed" });
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu drag add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      function t(e, t, n) {
        return e < t && (e = t), e > n && (e = n), e;
      }
      function n(n, i, s) {
        var r,
          l,
          d,
          c = this,
          h = {
            events: "panleft panright",
            typeLower: "x",
            typeUpper: "X",
            open_dir: "right",
            close_dir: "left",
            negative: !1,
          },
          f = "width",
          u = h.open_dir,
          p = function (e) {
            e <= n.maxStartPos && (m = 1);
          },
          v = function () {
            return e("." + o.slideout);
          },
          m = 0,
          b = 0,
          g = 0;
        switch (this.opts.offCanvas.position) {
          case "top":
          case "bottom":
            (h.events = "panup pandown"),
              (h.typeLower = "y"),
              (h.typeUpper = "Y"),
              (f = "height");
        }
        switch (this.opts.offCanvas.position) {
          case "right":
          case "bottom":
            (h.negative = !0),
              (p = function (e) {
                e >= s.$wndw[f]() - n.maxStartPos && (m = 1);
              });
        }
        switch (this.opts.offCanvas.position) {
          case "left":
            break;
          case "right":
            (h.open_dir = "left"), (h.close_dir = "right");
            break;
          case "top":
            (h.open_dir = "down"), (h.close_dir = "up");
            break;
          case "bottom":
            (h.open_dir = "up"), (h.close_dir = "down");
        }
        switch (this.opts.offCanvas.zposition) {
          case "front":
            v = function () {
              return this.$menu;
            };
        }
        var _ = this.__valueOrFn(n.node, this.$menu, s.$page);
        "string" == typeof _ && (_ = e(_));
        var y = new Hammer(_[0], this.opts[a].vendors.hammer);
        y.on("panstart", function (e) {
          p(e.center[h.typeLower]), (s.$slideOutNodes = v()), (u = h.open_dir);
        }),
          y.on(h.events + " panend", function (e) {
            m > 0 && e.preventDefault();
          }),
          y.on(h.events, function (e) {
            if (
              ((r = e["delta" + h.typeUpper]),
              h.negative && (r = -r),
              r != b && (u = r >= b ? h.open_dir : h.close_dir),
              (b = r),
              b > n.threshold && 1 == m)
            ) {
              if (s.$html.hasClass(o.opened)) return;
              (m = 2),
                c._openSetup(),
                c.trigger("open:start"),
                s.$html.addClass(o.dragging),
                (g = t(s.$wndw[f]() * i[f].perc, i[f].min, i[f].max));
            }
            2 == m &&
              ((l =
                t(b, 10, g) - ("front" == c.opts.offCanvas.zposition ? g : 0)),
              h.negative && (l = -l),
              (d = "translate" + h.typeUpper + "(" + l + "px )"),
              s.$slideOutNodes.css({
                "-webkit-transform": "-webkit-" + d,
                transform: d,
              }));
          }),
          y.on("panend", function (e) {
            2 == m &&
              (s.$html.removeClass(o.dragging),
              s.$slideOutNodes.css("transform", ""),
              c[u == h.open_dir ? "_openFinish" : "close"]()),
              (m = 0);
          });
      }
      function i(e, t, n, i) {
        var s = this,
          l = e.data(r.parent);
        if (l) {
          l = l.closest("." + o.panel);
          var d = new Hammer(e[0], s.opts[a].vendors.hammer),
            c = null;
          d.on("panright", function (e) {
            c ||
              (s.openPanel(l),
              (c = setTimeout(function () {
                clearTimeout(c), (c = null);
              }, s.conf.openingInterval + s.conf.transitionDuration)));
          });
        }
      }
      var s = "mmenu",
        a = "drag";
      (e[s].addons[a] = {
        setup: function () {
          if (this.opts.offCanvas) {
            var t = this.opts[a],
              o = this.conf[a];
            (d = e[s].glbl),
              "boolean" == typeof t && (t = { menu: t, panels: t }),
              "object" != typeof t && (t = {}),
              "boolean" == typeof t.menu && (t.menu = { open: t.menu }),
              "object" != typeof t.menu && (t.menu = {}),
              "boolean" == typeof t.panels && (t.panels = { close: t.panels }),
              "object" != typeof t.panels && (t.panels = {}),
              (t = this.opts[a] = e.extend(!0, {}, e[s].defaults[a], t)),
              t.menu.open &&
                this.bind("setPage:after", function () {
                  n.call(this, t.menu, o.menu, d);
                }),
              t.panels.close &&
                this.bind("initPanel:after", function (e) {
                  i.call(this, e, t.panels, o.panels, d);
                });
          }
        },
        add: function () {
          return "function" != typeof Hammer || Hammer.VERSION < 2
            ? ((e[s].addons[a].add = function () {}),
              void (e[s].addons[a].setup = function () {}))
            : ((o = e[s]._c),
              (r = e[s]._d),
              (l = e[s]._e),
              void o.add("dragging"));
        },
        clickAnchor: function (e, t) {},
      }),
        (e[s].defaults[a] = {
          menu: { open: !1, maxStartPos: 100, threshold: 50 },
          panels: { close: !1 },
          vendors: { hammer: {} },
        }),
        (e[s].configuration[a] = {
          menu: {
            width: { perc: 0.8, min: 140, max: 440 },
            height: { perc: 0.8, min: 140, max: 880 },
          },
          panels: {},
        });
      var o, r, l, d;
    })(jQuery)
    /*
     * jQuery mmenu dropdown add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "dropdown";
      (e[t].addons[n] = {
        setup: function () {
          if (this.opts.offCanvas) {
            var r = this,
              l = this.opts[n],
              d = this.conf[n];
            if (
              ((o = e[t].glbl),
              "boolean" == typeof l && l && (l = { drop: l }),
              "object" != typeof l && (l = {}),
              "string" == typeof l.position &&
                (l.position = { of: l.position }),
              (l = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], l)),
              l.drop)
            ) {
              var c;
              this.bind("initMenu:after", function () {
                if (
                  (this.$menu.addClass(i.dropdown),
                  l.tip && this.$menu.addClass(i.tip),
                  "string" != typeof l.position.of)
                ) {
                  var t = this._getOriginalMenuId();
                  t && t.length && (l.position.of = '[href="#' + t + '"]');
                }
                "string" == typeof l.position.of &&
                  ((c = e(l.position.of)),
                  (l.event = l.event.split(" ")),
                  1 == l.event.length && (l.event[1] = l.event[0]),
                  "hover" == l.event[0] &&
                    c.on(a.mouseenter + "-" + n, function () {
                      r.open();
                    }),
                  "hover" == l.event[1] &&
                    this.$menu.on(a.mouseleave + "-" + n, function () {
                      r.close();
                    }));
              }),
                this.bind("open:start", function () {
                  this.$menu.data(s.style, this.$menu.attr("style") || ""),
                    o.$html.addClass(i.dropdown);
                }),
                this.bind("close:finish", function () {
                  this.$menu.attr("style", this.$menu.data(s.style)),
                    o.$html.removeClass(i.dropdown);
                });
              var h = function (e, t) {
                  var n = t[0],
                    s = t[1],
                    a = "x" == e ? "scrollLeft" : "scrollTop",
                    r = "x" == e ? "outerWidth" : "outerHeight",
                    h = "x" == e ? "left" : "top",
                    f = "x" == e ? "right" : "bottom",
                    u = "x" == e ? "width" : "height",
                    p = "x" == e ? "maxWidth" : "maxHeight",
                    v = null,
                    m = o.$wndw[a](),
                    b = (c.offset()[h] -= m),
                    g = b + c[r](),
                    _ = o.$wndw[u](),
                    y = d.offset.button[e] + d.offset.viewport[e];
                  if (l.position[e])
                    switch (l.position[e]) {
                      case "left":
                      case "bottom":
                        v = "after";
                        break;
                      case "right":
                      case "top":
                        v = "before";
                    }
                  null === v &&
                    (v = b + (g - b) / 2 < _ / 2 ? "after" : "before");
                  var C, w;
                  return (
                    "after" == v
                      ? ((C = "x" == e ? b : g),
                        (w = _ - (C + y)),
                        (n[h] = C + d.offset.button[e]),
                        (n[f] = "auto"),
                        s.push(i["x" == e ? "tipleft" : "tiptop"]))
                      : ((C = "x" == e ? g : b),
                        (w = C - y),
                        (n[f] =
                          "calc( 100% - " + (C - d.offset.button[e]) + "px )"),
                        (n[h] = "auto"),
                        s.push(i["x" == e ? "tipright" : "tipbottom"])),
                    (n[p] = Math.min(d[u].max, w)),
                    [n, s]
                  );
                },
                f = function (e) {
                  if (this.vars.opened) {
                    this.$menu.attr("style", this.$menu.data(s.style));
                    var t = [{}, []];
                    (t = h.call(this, "y", t)),
                      (t = h.call(this, "x", t)),
                      this.$menu.css(t[0]),
                      l.tip &&
                        this.$menu
                          .removeClass(
                            i.tipleft +
                              " " +
                              i.tipright +
                              " " +
                              i.tiptop +
                              " " +
                              i.tipbottom
                          )
                          .addClass(t[1].join(" "));
                  }
                };
              this.bind("open:start", f),
                o.$wndw.on(a.resize + "-" + n, function (e) {
                  f.call(r);
                }),
                this.opts.offCanvas.blockUI ||
                  o.$wndw.on(a.scroll + "-" + n, function (e) {
                    f.call(r);
                  });
            }
          }
        },
        add: function () {
          (i = e[t]._c),
            (s = e[t]._d),
            (a = e[t]._e),
            i.add("dropdown tip tipleft tipright tiptop tipbottom"),
            a.add("mouseenter mouseleave resize scroll");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].defaults[n] = {
          drop: !1,
          event: "click",
          position: {},
          tip: !0,
        }),
        (e[t].configuration[n] = {
          offset: { button: { x: -10, y: 10 }, viewport: { x: 20, y: 20 } },
          height: { max: 880 },
          width: { max: 440 },
        });
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu fixedElements add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "fixedElements";
      (e[t].addons[n] = {
        setup: function () {
          if (this.opts.offCanvas) {
            var s = (this.opts[n], this.conf[n]);
            o = e[t].glbl;
            var a = function (t) {
              var a = this.conf.classNames[n].fixed,
                r = t.find("." + a);
              this.__refactorClass(r, a, "slideout"),
                r[s.elemInsertMethod](s.elemInsertSelector);
              var l = this.conf.classNames[n].sticky,
                d = t.find("." + l);
              this.__refactorClass(d, l, "sticky"),
                (d = t.find("." + i.sticky)),
                d.length &&
                  (this.bind("open:before", function () {
                    var t = o.$wndw.scrollTop() + s.sticky.offset;
                    d.each(function () {
                      e(this).css("top", parseInt(e(this).css("top"), 10) + t);
                    });
                  }),
                  this.bind("close:finish", function () {
                    d.css("top", "");
                  }));
            };
            this.bind("setPage:after", a);
          }
        },
        add: function () {
          (i = e[t]._c), (s = e[t]._d), (a = e[t]._e), i.add("sticky");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].configuration[n] = {
          sticky: { offset: 0 },
          elemInsertMethod: "appendTo",
          elemInsertSelector: "body",
        }),
        (e[t].configuration.classNames[n] = {
          fixed: "Fixed",
          sticky: "Sticky",
        });
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu iconPanels add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "iconPanels";
      (e[t].addons[n] = {
        setup: function () {
          var s = this,
            a = this.opts[n];
          this.conf[n];
          if (
            ((o = e[t].glbl),
            "boolean" == typeof a && (a = { add: a }),
            "number" == typeof a && (a = { add: !0, visible: a }),
            "object" != typeof a && (a = {}),
            (a = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], a)),
            a.visible++,
            a.add)
          ) {
            for (var r = "", l = 0; l <= a.visible; l++)
              r += " " + i.iconpanel + "-" + l;
            r.length && (r = r.slice(1));
            var d = function (t) {
              t.hasClass(i.vertical) ||
                s.$pnls
                  .children("." + i.panel)
                  .removeClass(r)
                  .filter("." + i.subopened)
                  .removeClass(i.hidden)
                  .add(t)
                  .not("." + i.vertical)
                  .slice(-a.visible)
                  .each(function (t) {
                    e(this).addClass(i.iconpanel + "-" + t);
                  });
            };
            this.bind("initMenu:after", function () {
              this.$menu.addClass(i.iconpanel);
            }),
              this.bind("openPanel:start", d),
              this.bind("initPanels:after", function (e) {
                d.call(s, s.$pnls.children("." + i.opened));
              }),
              this.bind("initListview:after", function (e) {
                e.hasClass(i.vertical) ||
                  e.children("." + i.subblocker).length ||
                  e.prepend(
                    '<a href="#' +
                      e.closest("." + i.panel).attr("id") +
                      '" class="' +
                      i.subblocker +
                      '" />'
                  );
              });
          }
        },
        add: function () {
          (i = e[t]._c),
            (s = e[t]._d),
            (a = e[t]._e),
            i.add("iconpanel subblocker");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].defaults[n] = { add: !1, visible: 3 });
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu keyboardNavigation add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      function t(t, n) {
        t = t || this.$pnls.children("." + a.opened);
        var i = e(),
          s = this.$menu
            .children(
              "." + a.mm("navbars-top") + ", ." + a.mm("navbars-bottom")
            )
            .children("." + a.navbar);
        s.find(d).filter(":focus").length ||
          ("default" == n &&
            ((i = t
              .children("." + a.listview)
              .find("a[href]")
              .not("." + a.hidden)),
            i.length || (i = t.find(d).not("." + a.hidden)),
            i.length || (i = s.find(d).not("." + a.hidden))),
          i.length || (i = this.$menu.children("." + a.tabstart)),
          i.first().focus());
      }
      function n(e) {
        e || (e = this.$pnls.children("." + a.opened));
        var t = this.$pnls.children("." + a.panel),
          n = t.not(e);
        n.find(d).attr("tabindex", -1),
          e.find(d).attr("tabindex", 0),
          e
            .find("." + a.mm("toggle") + ", ." + a.mm("check"))
            .attr("tabindex", -1),
          e
            .children("." + a.navbar)
            .children("." + a.title)
            .attr("tabindex", -1);
      }
      var i = "mmenu",
        s = "keyboardNavigation";
      (e[i].addons[s] = {
        setup: function () {
          if (!e[i].support.touch) {
            var o = this.opts[s];
            this.conf[s];
            if (
              ((l = e[i].glbl),
              ("boolean" != typeof o && "string" != typeof o) ||
                (o = { enable: o }),
              "object" != typeof o && (o = {}),
              (o = this.opts[s] = e.extend(!0, {}, e[i].defaults[s], o)),
              o.enable)
            ) {
              var r = e(
                  '<button class="' +
                    a.tabstart +
                    '" tabindex="0" type="button" />'
                ),
                d = e(
                  '<button class="' +
                    a.tabend +
                    '" tabindex="0" type="button" />'
                );
              this.bind("initMenu:after", function () {
                o.enhance && this.$menu.addClass(a.keyboardfocus),
                  this["_initWindow_" + s](o.enhance);
              }),
                this.bind("initOpened:before", function () {
                  this.$menu
                    .prepend(r)
                    .append(d)
                    .children(
                      "." + a.mm("navbars-top") + ", ." + a.mm("navbars-bottom")
                    )
                    .children("." + a.navbar)
                    .children("a." + a.title)
                    .attr("tabindex", -1);
                }),
                this.bind("open:start", function () {
                  n.call(this);
                }),
                this.bind("open:finish", function () {
                  t.call(this, null, o.enable);
                }),
                this.bind("openPanel:start", function (e) {
                  n.call(this, e);
                }),
                this.bind("openPanel:finish", function (e) {
                  t.call(this, e, o.enable);
                }),
                this.bind("initOpened:after", function () {
                  this.__sr_aria(
                    this.$menu.children(
                      "." + a.mm("tabstart") + ", ." + a.mm("tabend")
                    ),
                    "hidden",
                    !0
                  );
                });
            }
          }
        },
        add: function () {
          (a = e[i]._c),
            (o = e[i]._d),
            (r = e[i]._e),
            a.add("tabstart tabend keyboardfocus"),
            r.add("focusin keydown");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[i].defaults[s] = { enable: !1, enhance: !1 }),
        (e[i].configuration[s] = {}),
        (e[i].prototype["_initWindow_" + s] = function (t) {
          l.$wndw.off(r.keydown + "-offCanvas"),
            l.$wndw
              .off(r.focusin + "-" + s)
              .on(r.focusin + "-" + s, function (t) {
                if (l.$html.hasClass(a.opened)) {
                  var n = e(t.target);
                  n.is("." + a.tabend) &&
                    n
                      .parent()
                      .find("." + a.tabstart)
                      .focus();
                }
              }),
            l.$wndw
              .off(r.keydown + "-" + s)
              .on(r.keydown + "-" + s, function (t) {
                var n = e(t.target),
                  i = n.closest("." + a.menu);
                if (i.length) {
                  i.data("mmenu");
                  if (n.is("input, textarea"));
                  else
                    switch (t.keyCode) {
                      case 13:
                        (n.is(".mm-toggle") || n.is(".mm-check")) &&
                          n.trigger(r.click);
                        break;
                      case 32:
                      case 37:
                      case 38:
                      case 39:
                      case 40:
                        t.preventDefault();
                    }
                }
              }),
            t &&
              l.$wndw
                .off(r.keydown + "-" + s)
                .on(r.keydown + "-" + s, function (t) {
                  var n = e(t.target),
                    i = n.closest("." + a.menu);
                  if (i.length) {
                    var s = i.data("mmenu");
                    if (n.is("input, textarea"))
                      switch (t.keyCode) {
                        case 27:
                          n.val("");
                      }
                    else
                      switch (t.keyCode) {
                        case 8:
                          var r = n.closest("." + a.panel).data(o.parent);
                          r &&
                            r.length &&
                            s.openPanel(r.closest("." + a.panel));
                          break;
                        case 27:
                          i.hasClass(a.offcanvas) && s.close();
                      }
                  }
                });
        });
      var a,
        o,
        r,
        l,
        d = "input, select, textarea, button, label, a[href]";
    })(jQuery)
    /*
     * jQuery mmenu lazySubmenus add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "lazySubmenus";
      (e[t].addons[n] = {
        setup: function () {
          var s = this.opts[n];
          this.conf[n];
          (o = e[t].glbl),
            "boolean" == typeof s && (s = { load: s }),
            "object" != typeof s && (s = {}),
            (s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s)),
            s.load &&
              (this.bind("initMenu:after", function () {
                this.$pnls
                  .find("li")
                  .children(this.conf.panelNodetype)
                  .not("." + i.inset)
                  .not("." + i.nolistview)
                  .not("." + i.nopanel)
                  .addClass(
                    i.lazysubmenu + " " + i.nolistview + " " + i.nopanel
                  );
              }),
              this.bind("initPanels:before", function (e) {
                (e = e || this.$pnls.children(this.conf.panelNodetype)),
                  this.__findAddBack(e, "." + i.lazysubmenu)
                    .not("." + i.lazysubmenu + " ." + i.lazysubmenu)
                    .removeClass(
                      i.lazysubmenu + " " + i.nolistview + " " + i.nopanel
                    );
              }),
              this.bind("initOpened:before", function () {
                var e = this.$pnls
                  .find("." + this.conf.classNames.selected)
                  .parents("." + i.lazysubmenu);
                e.length &&
                  (e.removeClass(
                    i.lazysubmenu + " " + i.nolistview + " " + i.nopanel
                  ),
                  this.initPanels(e.last()));
              }),
              this.bind("openPanel:before", function (e) {
                var t = this.__findAddBack(e, "." + i.lazysubmenu).not(
                  "." + i.lazysubmenu + " ." + i.lazysubmenu
                );
                t.length && this.initPanels(t);
              }));
        },
        add: function () {
          (i = e[t]._c),
            (s = e[t]._d),
            (a = e[t]._e),
            i.add("lazysubmenu"),
            s.add("lazysubmenu");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].defaults[n] = { load: !1 }),
        (e[t].configuration[n] = {});
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu navbar add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "navbars";
      (e[t].addons[n] = {
        setup: function () {
          var s = this,
            a = this.opts[n],
            r = this.conf[n];
          if (((o = e[t].glbl), "undefined" != typeof a)) {
            a instanceof Array || (a = [a]);
            var l = {},
              d = {};
            a.length &&
              (e.each(a, function (o) {
                var c = a[o];
                "boolean" == typeof c && c && (c = {}),
                  "object" != typeof c && (c = {}),
                  "undefined" == typeof c.content &&
                    (c.content = ["prev", "title"]),
                  c.content instanceof Array || (c.content = [c.content]),
                  (c = e.extend(!0, {}, s.opts.navbar, c));
                var h = e('<div class="' + i.navbar + '" />'),
                  f = c.height;
                "number" != typeof f && (f = 1),
                  (f = Math.min(4, Math.max(1, f))),
                  h.addClass(i.navbar + "-size-" + f);
                var u = c.position;
                "bottom" != u && (u = "top"),
                  l[u] || (l[u] = 0),
                  (l[u] += f),
                  d[u] ||
                    (d[u] = e('<div class="' + i.navbars + "-" + u + '" />')),
                  d[u].append(h);
                for (var p = 0, v = 0, m = c.content.length; v < m; v++) {
                  var b = e[t].addons[n][c.content[v]] || !1;
                  b
                    ? (p += b.call(s, h, c, r))
                    : ((b = c.content[v]),
                      b instanceof e || (b = e(c.content[v])),
                      h.append(b));
                }
                (p += Math.ceil(h.children().not("." + i.btn).length / f)),
                  p > 1 && h.addClass(i.navbar + "-content-" + p),
                  h.children("." + i.btn).length && h.addClass(i.hasbtns);
              }),
              this.bind("initMenu:after", function () {
                for (var e in l)
                  this.$menu.addClass(i.hasnavbar + "-" + e + "-" + l[e]),
                    this.$menu["bottom" == e ? "append" : "prepend"](d[e]);
              }));
          }
        },
        add: function () {
          (i = e[t]._c),
            (s = e[t]._d),
            (a = e[t]._e),
            i.add("navbars close hasbtns");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].configuration[n] = { breadcrumbSeparator: "/" }),
        (e[t].configuration.classNames[n] = {});
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu navbar add-on breadcrumbs content
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "navbars",
        i = "breadcrumbs";
      e[t].addons[n][i] = function (n, i, s) {
        var a = this,
          o = e[t]._c,
          r = e[t]._d;
        o.add("breadcrumbs separator");
        var l = e('<span class="' + o.breadcrumbs + '" />').appendTo(n);
        return (
          this.bind("initNavbar:after", function (t) {
            t.removeClass(o.hasnavbar);
            for (
              var n = [],
                i = e('<span class="' + o.breadcrumbs + '"></span>'),
                a = t,
                l = !0;
              a && a.length;

            ) {
              if (
                (a.is("." + o.panel) || (a = a.closest("." + o.panel)),
                !a.hasClass(o.vertical))
              ) {
                var d = a
                  .children("." + o.navbar)
                  .children("." + o.title)
                  .text();
                n.unshift(
                  l
                    ? "<span>" + d + "</span>"
                    : '<a href="#' + a.attr("id") + '">' + d + "</a>"
                ),
                  (l = !1);
              }
              a = a.data(r.parent);
            }
            i.append(
              n.join(
                '<span class="' +
                  o.separator +
                  '">' +
                  s.breadcrumbSeparator +
                  "</span>"
              )
            ).appendTo(t.children("." + o.navbar));
          }),
          this.bind("openPanel:start", function (e) {
            l.html(
              e
                .children("." + o.navbar)
                .children("." + o.breadcrumbs)
                .html() || ""
            );
          }),
          this.bind("initNavbar:after:sr-aria", function (t) {
            t.children("." + o.navbar)
              .children("." + o.breadcrumbs)
              .children("a")
              .each(function () {
                a.__sr_aria(e(this), "owns", e(this).attr("href").slice(1));
              });
          }),
          0
        );
      };
    })(jQuery)
    /*
     * jQuery mmenu navbar add-on close content
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "navbars",
        i = "close";
      e[t].addons[n][i] = function (n, i) {
        var s = e[t]._c,
          a =
            (e[t].glbl,
            e('<a class="' + s.close + " " + s.btn + '" href="#" />').appendTo(
              n
            ));
        return (
          this.bind("setPage:after", function (e) {
            a.attr("href", "#" + e.attr("id"));
          }),
          this.bind("setPage:after:sr-text", function (n) {
            a.html(
              this.__sr_text(e[t].i18n(this.conf.screenReader.text.closeMenu))
            ),
              this.__sr_aria(a, "owns", a.attr("href").slice(1));
          }),
          -1
        );
      };
    })(jQuery)
    /*
     * jQuery mmenu navbar add-on next content
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "navbars",
        i = "next";
      (e[t].addons[n][i] = function (i, s) {
        var a,
          o,
          r,
          l = e[t]._c,
          d = e('<a class="' + l.next + " " + l.btn + '" href="#" />').appendTo(
            i
          );
        return (
          this.bind("openPanel:start", function (e) {
            (a = e.find("." + this.conf.classNames[n].panelNext)),
              (o = a.attr("href")),
              (r = a.html()),
              o ? d.attr("href", o) : d.removeAttr("href"),
              d[o || r ? "removeClass" : "addClass"](l.hidden),
              d.html(r);
          }),
          this.bind("openPanel:start:sr-aria", function (e) {
            this.__sr_aria(d, "hidden", d.hasClass(l.hidden)),
              this.__sr_aria(d, "owns", (d.attr("href") || "").slice(1));
          }),
          -1
        );
      }),
        (e[t].configuration.classNames[n].panelNext = "Next");
    })(jQuery)
    /*
     * jQuery mmenu navbar add-on prev content
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "navbars",
        i = "prev";
      (e[t].addons[n][i] = function (i, s) {
        var a = e[t]._c,
          o = e('<a class="' + a.prev + " " + a.btn + '" href="#" />').appendTo(
            i
          );
        this.bind("initNavbar:after", function (e) {
          e.removeClass(a.hasnavbar);
        });
        var r, l, d;
        return (
          this.bind("openPanel:start", function (e) {
            e.hasClass(a.vertical) ||
              ((r = e.find("." + this.conf.classNames[n].panelPrev)),
              r.length ||
                (r = e.children("." + a.navbar).children("." + a.prev)),
              (l = r.attr("href")),
              (d = r.html()),
              l ? o.attr("href", l) : o.removeAttr("href"),
              o[l || d ? "removeClass" : "addClass"](a.hidden),
              o.html(d));
          }),
          this.bind("initNavbar:after:sr-aria", function (e) {
            var t = e.children("." + a.navbar);
            this.__sr_aria(t, "hidden", !0);
          }),
          this.bind("openPanel:start:sr-aria", function (e) {
            this.__sr_aria(o, "hidden", o.hasClass(a.hidden)),
              this.__sr_aria(o, "owns", (o.attr("href") || "").slice(1));
          }),
          -1
        );
      }),
        (e[t].configuration.classNames[n].panelPrev = "Prev");
    })(jQuery)
    /*
     * jQuery mmenu navbar add-on searchfield content
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "navbars",
        i = "searchfield";
      e[t].addons[n][i] = function (n, i) {
        var s = e[t]._c,
          a = e('<div class="' + s.search + '" />').appendTo(n);
        return (
          "object" != typeof this.opts.searchfield &&
            (this.opts.searchfield = {}),
          (this.opts.searchfield.add = !0),
          (this.opts.searchfield.addTo = a),
          0
        );
      };
    })(jQuery)
    /*
     * jQuery mmenu navbar add-on title content
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "navbars",
        i = "title";
      (e[t].addons[n][i] = function (i, s) {
        var a,
          o,
          r,
          l = e[t]._c,
          d = e('<a class="' + l.title + '" />').appendTo(i);
        this.bind("openPanel:start", function (e) {
          e.hasClass(l.vertical) ||
            ((r = e.find("." + this.conf.classNames[n].panelTitle)),
            r.length ||
              (r = e.children("." + l.navbar).children("." + l.title)),
            (a = r.attr("href")),
            (o = r.html() || s.title),
            a ? d.attr("href", a) : d.removeAttr("href"),
            d[a || o ? "removeClass" : "addClass"](l.hidden),
            d.html(o));
        });
        var c;
        return (
          this.bind("openPanel:start:sr-aria", function (e) {
            if (
              this.opts.screenReader.text &&
              (c ||
                (c = this.$menu
                  .children("." + l.navbars + "-top, ." + l.navbars + "-bottom")
                  .children("." + l.navbar)
                  .children("." + l.prev)),
              c.length)
            ) {
              var t = !0;
              "parent" == this.opts.navbar.titleLink &&
                (t = !c.hasClass(l.hidden)),
                this.__sr_aria(d, "hidden", t);
            }
          }),
          0
        );
      }),
        (e[t].configuration.classNames[n].panelTitle = "Title");
    })(jQuery)
    /*
     * jQuery mmenu pageScroll add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      function t(e) {
        d &&
          d.length &&
          d.is(":visible") &&
          l.$html.add(l.$body).animate({ scrollTop: d.offset().top + e }),
          (d = !1);
      }
      function n(e) {
        try {
          return !("#" == e || "#" != e.slice(0, 1) || !l.$page.find(e).length);
        } catch (t) {
          return !1;
        }
      }
      var i = "mmenu",
        s = "pageScroll";
      (e[i].addons[s] = {
        setup: function () {
          var o = this,
            d = this.opts[s],
            c = this.conf[s];
          if (
            ((l = e[i].glbl),
            "boolean" == typeof d && (d = { scroll: d }),
            (d = this.opts[s] = e.extend(!0, {}, e[i].defaults[s], d)),
            d.scroll &&
              this.bind("close:finish", function () {
                t(c.scrollOffset);
              }),
            d.update)
          ) {
            var o = this,
              h = [],
              f = [];
            o.bind("initListview:after", function (t) {
              o
                .__filterListItemAnchors(
                  t.find("." + a.listview).children("li")
                )
                .each(function () {
                  var t = e(this).attr("href");
                  n(t) && h.push(t);
                }),
                (f = h.reverse());
            });
            var u = -1;
            l.$wndw.on(r.scroll + "-" + s, function (t) {
              for (var n = l.$wndw.scrollTop(), i = 0; i < f.length; i++)
                if (e(f[i]).offset().top < n + c.updateOffset) {
                  u !== i &&
                    ((u = i),
                    o.setSelected(
                      o
                        .__filterListItemAnchors(
                          o.$pnls
                            .children("." + a.opened)
                            .find("." + a.listview)
                            .children("li")
                        )
                        .filter('[href="' + f[i] + '"]')
                        .parent()
                    ));
                  break;
                }
            });
          }
        },
        add: function () {
          (a = e[i]._c), (o = e[i]._d), (r = e[i]._e);
        },
        clickAnchor: function (i, o) {
          if (
            ((d = !1),
            o &&
              this.opts[s].scroll &&
              this.opts.offCanvas &&
              l.$page &&
              l.$page.length)
          ) {
            var r = i.attr("href");
            n(r) &&
              ((d = e(r)),
              l.$html.hasClass(a.mm("widescreen")) &&
                t(this.conf[s].scrollOffset));
          }
        },
      }),
        (e[i].defaults[s] = { scroll: !1, update: !1 }),
        (e[i].configuration[s] = { scrollOffset: 0, updateOffset: 50 });
      var a,
        o,
        r,
        l,
        d = !1;
    })(jQuery)
    /*
     * jQuery mmenu RTL add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "rtl";
      (e[t].addons[n] = {
        setup: function () {
          var s = this.opts[n];
          this.conf[n];
          (o = e[t].glbl),
            "object" != typeof s && (s = { use: s }),
            (s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s)),
            "boolean" != typeof s.use &&
              (s.use = "rtl" == (o.$html.attr("dir") || "").toLowerCase()),
            s.use &&
              this.bind("initMenu:after", function () {
                this.$menu.addClass(i.rtl);
              });
        },
        add: function () {
          (i = e[t]._c), (s = e[t]._d), (a = e[t]._e), i.add("rtl");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].defaults[n] = { use: "detect" });
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu searchfield add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      function t(e) {
        switch (e) {
          case 9:
          case 16:
          case 17:
          case 18:
          case 37:
          case 38:
          case 39:
          case 40:
            return !0;
        }
        return !1;
      }
      var n = "mmenu",
        i = "searchfield";
      (e[n].addons[i] = {
        setup: function () {
          var l = this,
            d = this.opts[i],
            c = this.conf[i];
          (r = e[n].glbl),
            "boolean" == typeof d && (d = { add: d }),
            "object" != typeof d && (d = {}),
            "boolean" == typeof d.resultsPanel &&
              (d.resultsPanel = { add: d.resultsPanel }),
            (d = this.opts[i] = e.extend(!0, {}, e[n].defaults[i], d)),
            (c = this.conf[i] = e.extend(!0, {}, e[n].configuration[i], c)),
            this.bind("close:start", function () {
              this.$menu
                .find("." + s.search)
                .find("input")
                .blur();
            }),
            this.bind("initPanels:after", function (r) {
              if (d.add) {
                var h;
                switch (d.addTo) {
                  case "panels":
                    h = r;
                    break;
                  default:
                    h = this.$menu.find(d.addTo);
                }
                if (
                  (h.each(function () {
                    var t = e(this);
                    if (!t.is("." + s.panel) || !t.is("." + s.vertical)) {
                      if (!t.children("." + s.search).length) {
                        var i = l.__valueOrFn(c.clear, t),
                          a = l.__valueOrFn(c.form, t),
                          r = l.__valueOrFn(c.input, t),
                          h = l.__valueOrFn(c.submit, t),
                          f = e(
                            "<" +
                              (a ? "form" : "div") +
                              ' class="' +
                              s.search +
                              '" />'
                          ),
                          u = e(
                            '<input placeholder="' +
                              e[n].i18n(d.placeholder) +
                              '" type="text" autocomplete="off" />'
                          );
                        f.append(u);
                        var p;
                        if (r) for (p in r) u.attr(p, r[p]);
                        if (
                          (i &&
                            e(
                              '<a class="' +
                                s.btn +
                                " " +
                                s.clear +
                                '" href="#" />'
                            )
                              .appendTo(f)
                              .on(o.click + "-searchfield", function (e) {
                                e.preventDefault(),
                                  u.val("").trigger(o.keyup + "-searchfield");
                              }),
                          a)
                        ) {
                          for (p in a) f.attr(p, a[p]);
                          h &&
                            !i &&
                            e(
                              '<a class="' +
                                s.btn +
                                " " +
                                s.next +
                                '" href="#" />'
                            )
                              .appendTo(f)
                              .on(o.click + "-searchfield", function (e) {
                                e.preventDefault(), f.submit();
                              });
                        }
                        t.hasClass(s.search)
                          ? t.replaceWith(f)
                          : t.prepend(f).addClass(s.hassearch);
                      }
                      if (d.noResults) {
                        var v = t.closest("." + s.panel).length;
                        if (
                          (v || (t = l.$pnls.children("." + s.panel).first()),
                          !t.children("." + s.noresultsmsg).length)
                        ) {
                          var m = t.children("." + s.listview).first(),
                            b = e(
                              '<div class="' +
                                s.noresultsmsg +
                                " " +
                                s.hidden +
                                '" />'
                            );
                          b.append(e[n].i18n(d.noResults))[
                            m.length ? "insertAfter" : "prependTo"
                          ](m.length ? m : t);
                        }
                      }
                    }
                  }),
                  d.search)
                ) {
                  if (d.resultsPanel.add) {
                    d.showSubPanels = !1;
                    var f = this.$pnls.children("." + s.resultspanel);
                    f.length ||
                      ((f = e(
                        '<div class="' +
                          s.resultspanel +
                          " " +
                          s.noanimation +
                          " " +
                          s.hidden +
                          '" />'
                      )
                        .appendTo(this.$pnls)
                        .append(
                          '<div class="' +
                            s.navbar +
                            " " +
                            s.hidden +
                            '"><a class="' +
                            s.title +
                            '">' +
                            e[n].i18n(d.resultsPanel.title) +
                            "</a></div>"
                        )
                        .append('<ul class="' + s.listview + '" />')
                        .append(
                          this.$pnls
                            .find("." + s.noresultsmsg)
                            .first()
                            .clone()
                        )),
                      this._initPanel(f));
                  }
                  this.$menu.find("." + s.search).each(function () {
                    var n,
                      r,
                      c = e(this),
                      h = c.closest("." + s.panel).length;
                    h
                      ? ((n = c.closest("." + s.panel)), (r = n))
                      : ((n = l.$pnls.find("." + s.panel)), (r = l.$menu)),
                      d.resultsPanel.add && (n = n.not(f));
                    var u = c.children("input"),
                      p = l.__findAddBack(n, "." + s.listview).children("li"),
                      v = p.filter("." + s.divider),
                      m = l.__filterListItems(p),
                      b = "a",
                      g = b + ", span",
                      _ = "",
                      y = function () {
                        var t = u.val().toLowerCase();
                        if (t != _) {
                          if (
                            ((_ = t),
                            d.resultsPanel.add &&
                              f.children("." + s.listview).empty(),
                            n.scrollTop(0),
                            m
                              .add(v)
                              .addClass(s.hidden)
                              .find("." + s.fullsubopensearch)
                              .removeClass(
                                s.fullsubopen + " " + s.fullsubopensearch
                              ),
                            m.each(function () {
                              var t = e(this),
                                n = b;
                              (d.showTextItems ||
                                (d.showSubPanels && t.find("." + s.next))) &&
                                (n = g);
                              var i =
                                t.data(a.searchtext) ||
                                t
                                  .children(n)
                                  .not("." + s.next)
                                  .text();
                              i.toLowerCase().indexOf(_) > -1 &&
                                t
                                  .add(t.prevAll("." + s.divider).first())
                                  .removeClass(s.hidden);
                            }),
                            d.showSubPanels &&
                              n.each(function (t) {
                                var n = e(this);
                                l.__filterListItems(
                                  n.find("." + s.listview).children()
                                ).each(function () {
                                  var t = e(this),
                                    n = t.data(a.child);
                                  t.removeClass(s.nosubresults),
                                    n &&
                                      n
                                        .find("." + s.listview)
                                        .children()
                                        .removeClass(s.hidden);
                                });
                              }),
                            d.resultsPanel.add)
                          )
                            if ("" === _)
                              this.closeAllPanels(
                                this.$pnls.children("." + s.subopened).last()
                              );
                            else {
                              var i = e();
                              n.each(function () {
                                var t = l
                                  .__filterListItems(
                                    e(this)
                                      .find("." + s.listview)
                                      .children()
                                  )
                                  .not("." + s.hidden)
                                  .clone(!0);
                                t.length &&
                                  (d.resultsPanel.dividers &&
                                    (i = i.add(
                                      '<li class="' +
                                        s.divider +
                                        '">' +
                                        e(this)
                                          .children("." + s.navbar)
                                          .children("." + s.title)
                                          .text() +
                                        "</li>"
                                    )),
                                  t
                                    .children(
                                      "." +
                                        s.mm("toggle") +
                                        ", ." +
                                        s.mm("check")
                                    )
                                    .remove(),
                                  (i = i.add(t)));
                              }),
                                i.find("." + s.next).remove(),
                                f.children("." + s.listview).append(i),
                                this.openPanel(f);
                            }
                          else
                            e(n.get().reverse()).each(function (t) {
                              var n = e(this),
                                i = n.data(a.parent);
                              i &&
                                (l.__filterListItems(
                                  n.find("." + s.listview).children()
                                ).length
                                  ? (i.hasClass(s.hidden) &&
                                      i
                                        .children("." + s.next)
                                        .not("." + s.fullsubopen)
                                        .addClass(s.fullsubopen)
                                        .addClass(s.fullsubopensearch),
                                    i
                                      .removeClass(s.hidden)
                                      .removeClass(s.nosubresults)
                                      .prevAll("." + s.divider)
                                      .first()
                                      .removeClass(s.hidden))
                                  : h ||
                                    ((n.hasClass(s.opened) ||
                                      n.hasClass(s.subopened)) &&
                                      setTimeout(function () {
                                        l.openPanel(i.closest("." + s.panel));
                                      }, (t + 1) *
                                        (1.5 * l.conf.openingInterval)),
                                    i.addClass(s.nosubresults)));
                            });
                          r
                            .find("." + s.noresultsmsg)
                            [
                              m.not("." + s.hidden).length
                                ? "addClass"
                                : "removeClass"
                            ](s.hidden),
                            this.trigger("updateListview");
                        }
                      };
                    u.off(o.keyup + "-" + i + " " + o.change + "-" + i)
                      .on(o.keyup + "-" + i, function (e) {
                        t(e.keyCode) || y.call(l);
                      })
                      .on(o.change + "-" + i, function (e) {
                        y.call(l);
                      });
                    var C = c.children("." + s.btn);
                    C.length &&
                      u.on(o.keyup + "-" + i, function (e) {
                        C[u.val().length ? "removeClass" : "addClass"](
                          s.hidden
                        );
                      }),
                      u.trigger(o.keyup + "-" + i);
                  });
                }
              }
            });
        },
        add: function () {
          (s = e[n]._c),
            (a = e[n]._d),
            (o = e[n]._e),
            s.add(
              "clear search hassearch resultspanel noresultsmsg noresults nosubresults fullsubopensearch"
            ),
            a.add("searchtext"),
            o.add("change keyup");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[n].defaults[i] = {
          add: !1,
          addTo: "panels",
          placeholder: "Search",
          noResults: "No results found.",
          resultsPanel: { add: !1, dividers: !0, title: "Search results" },
          search: !0,
          showTextItems: !1,
          showSubPanels: !0,
        }),
        (e[n].configuration[i] = {
          clear: !1,
          form: !1,
          input: !1,
          submit: !1,
        });
      var s, a, o, r;
    })(jQuery)
    /*
     * jQuery mmenu sectionIndexer add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "sectionIndexer";
      (e[t].addons[n] = {
        setup: function () {
          var s = this,
            r = this.opts[n];
          this.conf[n];
          (o = e[t].glbl),
            "boolean" == typeof r && (r = { add: r }),
            "object" != typeof r && (r = {}),
            (r = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], r)),
            this.bind("initPanels:after", function (t) {
              if (r.add) {
                var o;
                switch (r.addTo) {
                  case "panels":
                    o = t;
                    break;
                  default:
                    o = e(r.addTo, this.$menu).filter("." + i.panel);
                }
                o
                  .find("." + i.divider)
                  .closest("." + i.panel)
                  .addClass(i.hasindexer),
                  this.$indexer ||
                    ((this.$indexer = e('<div class="' + i.indexer + '" />')
                      .prependTo(this.$pnls)
                      .append(
                        '<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'
                      )),
                    this.$indexer
                      .children()
                      .on(
                        a.mouseover + "-" + n + " " + a.touchstart + "-" + n,
                        function (t) {
                          var n = e(this).attr("href").slice(1),
                            a = s.$pnls.children("." + i.opened),
                            o = a.find("." + i.listview),
                            r = -1,
                            l = a.scrollTop();
                          a.scrollTop(0),
                            o
                              .children("." + i.divider)
                              .not("." + i.hidden)
                              .each(function () {
                                r < 0 &&
                                  n ==
                                    e(this).text().slice(0, 1).toLowerCase() &&
                                  (r = e(this).position().top);
                              }),
                            a.scrollTop(r > -1 ? r : l);
                        }
                      ));
                var l = function (e) {
                  (e = e || this.$pnls.children("." + i.opened)),
                    this.$menu[
                      (e.hasClass(i.hasindexer) ? "add" : "remove") + "Class"
                    ](i.hasindexer);
                };
                this.bind("openPanel:start", l),
                  this.bind("initPanels:after", l);
              }
            });
        },
        add: function () {
          (i = e[t]._c),
            (s = e[t]._d),
            (a = e[t]._e),
            i.add("indexer hasindexer"),
            a.add("mouseover");
        },
        clickAnchor: function (e, t) {
          if (e.parent().is("." + i.indexer)) return !0;
        },
      }),
        (e[t].defaults[n] = { add: !1, addTo: "panels" });
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu setSelected add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "setSelected";
      (e[t].addons[n] = {
        setup: function () {
          var a = this,
            r = this.opts[n];
          this.conf[n];
          if (
            ((o = e[t].glbl),
            "boolean" == typeof r && (r = { hover: r, parent: r }),
            "object" != typeof r && (r = {}),
            (r = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], r)),
            "detect" == r.current)
          ) {
            var l = function (e) {
              e = e.split("?")[0].split("#")[0];
              var t = a.$menu.find('a[href="' + e + '"], a[href="' + e + '/"]');
              t.length
                ? a.setSelected(t.parent(), !0)
                : ((e = e.split("/").slice(0, -1)), e.length && l(e.join("/")));
            };
            this.bind("initMenu:after", function () {
              l(window.location.href);
            });
          } else
            r.current ||
              this.bind("initListview:after", function (e) {
                this.$pnls
                  .find("." + i.listview)
                  .children("." + i.selected)
                  .removeClass(i.selected);
              });
          r.hover &&
            this.bind("initMenu:after", function () {
              this.$menu.addClass(i.hoverselected);
            }),
            r.parent &&
              (this.bind("openPanel:finish", function (e) {
                this.$pnls
                  .find("." + i.listview)
                  .find("." + i.next)
                  .removeClass(i.selected);
                for (var t = e.data(s.parent); t; )
                  t
                    .not("." + i.vertical)
                    .children("." + i.next)
                    .addClass(i.selected),
                    (t = t.closest("." + i.panel).data(s.parent));
              }),
              this.bind("initMenu:after", function () {
                this.$menu.addClass(i.parentselected);
              }));
        },
        add: function () {
          (i = e[t]._c),
            (s = e[t]._d),
            (a = e[t]._e),
            i.add("hoverselected parentselected");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].defaults[n] = { current: !0, hover: !1, parent: !1 });
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu toggles add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "toggles";
      (e[t].addons[n] = {
        setup: function () {
          var s = this;
          this.opts[n], this.conf[n];
          (o = e[t].glbl),
            this.bind("initListview:after", function (t) {
              this.__refactorClass(
                t.find("input"),
                this.conf.classNames[n].toggle,
                "toggle"
              ),
                this.__refactorClass(
                  t.find("input"),
                  this.conf.classNames[n].check,
                  "check"
                ),
                t
                  .find("input." + i.toggle + ", input." + i.check)
                  .each(function () {
                    var t = e(this),
                      n = t.closest("li"),
                      a = t.hasClass(i.toggle) ? "toggle" : "check",
                      o = t.attr("id") || s.__getUniqueId();
                    n.children('label[for="' + o + '"]').length ||
                      (t.attr("id", o),
                      n.prepend(t),
                      e(
                        '<label for="' + o + '" class="' + i[a] + '"></label>'
                      ).insertBefore(n.children("a, span").last()));
                  });
            });
        },
        add: function () {
          (i = e[t]._c), (s = e[t]._d), (a = e[t]._e), i.add("toggle check");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].configuration.classNames[n] = {
          toggle: "Toggle",
          check: "Check",
        });
      var i, s, a, o;
    })(jQuery);
  return true;
});
