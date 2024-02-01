(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [929],
  {
    2898: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = r(2265),
        o = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        };
      /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let l = (e) =>
          e
            .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
            .toLowerCase()
            .trim(),
        i = (e, t) => {
          let r = (0, n.forwardRef)(
            (
              {
                color: r = "currentColor",
                size: i = 24,
                strokeWidth: a = 2,
                absoluteStrokeWidth: s,
                className: c = "",
                children: u,
                ...d
              },
              f,
            ) =>
              (0, n.createElement)(
                "svg",
                {
                  ref: f,
                  ...o,
                  width: i,
                  height: i,
                  stroke: r,
                  strokeWidth: s ? (24 * Number(a)) / Number(i) : a,
                  className: ["lucide", `lucide-${l(e)}`, c].join(" "),
                  ...d,
                },
                [
                  ...t.map(([e, t]) => (0, n.createElement)(e, t)),
                  ...(Array.isArray(u) ? u : [u]),
                ],
              ),
          );
          return (r.displayName = `${e}`), r;
        };
    },
    3088: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(2898).Z)("Moon", [
        ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
      ]);
    },
    4135: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(2898).Z)("Sun", [
        ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
        ["path", { d: "M12 2v2", key: "tus03m" }],
        ["path", { d: "M12 20v2", key: "1lh1kg" }],
        ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
        ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
        ["path", { d: "M2 12h2", key: "1t8f8n" }],
        ["path", { d: "M20 12h2", key: "1q8mjw" }],
        ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
        ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
      ]);
    },
    6435: function (e, t, r) {
      "use strict";
      r.d(t, {
        F: function () {
          return c;
        },
        f: function () {
          return u;
        },
      });
      var n = r(2265);
      let o = ["light", "dark"],
        l = "(prefers-color-scheme: dark)",
        i = "undefined" == typeof window,
        a = (0, n.createContext)(void 0),
        s = { setTheme: (e) => {}, themes: [] },
        c = () => {
          var e;
          return null !== (e = (0, n.useContext)(a)) && void 0 !== e ? e : s;
        },
        u = (e) =>
          (0, n.useContext)(a)
            ? n.createElement(n.Fragment, null, e.children)
            : n.createElement(f, e),
        d = ["light", "dark"],
        f = ({
          forcedTheme: e,
          disableTransitionOnChange: t = !1,
          enableSystem: r = !0,
          enableColorScheme: i = !0,
          storageKey: s = "theme",
          themes: c = d,
          defaultTheme: u = r ? "system" : "light",
          attribute: f = "data-theme",
          value: g,
          children: y,
          nonce: v,
        }) => {
          let [w, x] = (0, n.useState)(() => m(s, u)),
            [k, _] = (0, n.useState)(() => m(s)),
            j = g ? Object.values(g) : c,
            E = (0, n.useCallback)((e) => {
              let n = e;
              if (!n) return;
              "system" === e && r && (n = b());
              let l = g ? g[n] : n,
                a = t ? h() : null,
                s = document.documentElement;
              if (
                ("class" === f
                  ? (s.classList.remove(...j), l && s.classList.add(l))
                  : l
                    ? s.setAttribute(f, l)
                    : s.removeAttribute(f),
                i)
              ) {
                let e = o.includes(u) ? u : null,
                  t = o.includes(n) ? n : e;
                s.style.colorScheme = t;
              }
              null == a || a();
            }, []),
            O = (0, n.useCallback)(
              (e) => {
                x(e);
                try {
                  localStorage.setItem(s, e);
                } catch (e) {}
              },
              [e],
            ),
            P = (0, n.useCallback)(
              (t) => {
                _(b(t)), "system" === w && r && !e && E("system");
              },
              [w, e],
            );
          (0, n.useEffect)(() => {
            let e = window.matchMedia(l);
            return e.addListener(P), P(e), () => e.removeListener(P);
          }, [P]),
            (0, n.useEffect)(() => {
              let e = (e) => {
                e.key === s && O(e.newValue || u);
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [O]),
            (0, n.useEffect)(() => {
              E(null != e ? e : w);
            }, [e, w]);
          let S = (0, n.useMemo)(
            () => ({
              theme: w,
              setTheme: O,
              forcedTheme: e,
              resolvedTheme: "system" === w ? k : w,
              themes: r ? [...c, "system"] : c,
              systemTheme: r ? k : void 0,
            }),
            [w, O, e, k, r, c],
          );
          return n.createElement(
            a.Provider,
            { value: S },
            n.createElement(p, {
              forcedTheme: e,
              disableTransitionOnChange: t,
              enableSystem: r,
              enableColorScheme: i,
              storageKey: s,
              themes: c,
              defaultTheme: u,
              attribute: f,
              value: g,
              children: y,
              attrs: j,
              nonce: v,
            }),
            y,
          );
        },
        p = (0, n.memo)(
          ({
            forcedTheme: e,
            storageKey: t,
            attribute: r,
            enableSystem: i,
            enableColorScheme: a,
            defaultTheme: s,
            value: c,
            attrs: u,
            nonce: d,
          }) => {
            let f = "system" === s,
              p =
                "class" === r
                  ? `var d=document.documentElement,c=d.classList;c.remove(${u.map((e) => `'${e}'`).join(",")});`
                  : `var d=document.documentElement,n='${r}',s='setAttribute';`,
              m = a
                ? o.includes(s) && s
                  ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`
                  : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : "",
              h = (e, t = !1, n = !0) => {
                let l = c ? c[e] : e,
                  i = t ? e + "|| ''" : `'${l}'`,
                  s = "";
                return (
                  a &&
                    n &&
                    !t &&
                    o.includes(e) &&
                    (s += `d.style.colorScheme = '${e}';`),
                  "class" === r
                    ? (s += t || l ? `c.add(${i})` : "null")
                    : l && (s += `d[s](n,${i})`),
                  s
                );
              },
              b = e
                ? `!function(){${p}${h(e)}}()`
                : i
                  ? `!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${c ? `var x=${JSON.stringify(c)};` : ""}${h(c ? "x[e]" : "e", !0)}}${f ? "" : "else{" + h(s, !1, !1) + "}"}${m}}catch(e){}}()`
                  : `!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${c ? `var x=${JSON.stringify(c)};` : ""}${h(c ? "x[e]" : "e", !0)}}else{${h(s, !1, !1)};}${m}}catch(t){}}();`;
            return n.createElement("script", {
              nonce: d,
              dangerouslySetInnerHTML: { __html: b },
            });
          },
          () => !0,
        ),
        m = (e, t) => {
          let r;
          if (!i) {
            try {
              r = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return r || t;
          }
        },
        h = () => {
          let e = document.createElement("style");
          return (
            e.appendChild(
              document.createTextNode(
                "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
              ),
            ),
            document.head.appendChild(e),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(e);
                }, 1);
            }
          );
        },
        b = (e) => (
          e || (e = window.matchMedia(l)), e.matches ? "dark" : "light"
        );
    },
    2956: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(2139);
      let n = function (e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6406: function (e, t, r) {
      "use strict";
      function n(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(2139),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    5250: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let n = r(1024)._(r(2265)),
        o = r(4542),
        l = r(7434),
        i = r(1030),
        a = r(6874),
        s = r(2956),
        c = r(6993),
        u = r(8599),
        d = r(5291),
        f = r(6406),
        p = r(5786),
        m = r(1414),
        h = new Set();
      function b(e, t, r, n, o, i) {
        if (i || (0, l.isLocalURL)(t)) {
          if (!n.bypassPrefetchedCheck) {
            let o =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in e
                  ? e.locale
                  : void 0);
            if (h.has(o)) return;
            h.add(o);
          }
          Promise.resolve(i ? e.prefetch(t, o) : e.prefetch(t, r, n)).catch(
            (e) => {},
          );
        }
      }
      function g(e) {
        return "string" == typeof e ? e : (0, i.formatUrl)(e);
      }
      let y = n.default.forwardRef(function (e, t) {
        let r, i;
        let {
          href: h,
          as: y,
          children: v,
          prefetch: w = null,
          passHref: x,
          replace: k,
          shallow: _,
          scroll: j,
          locale: E,
          onClick: O,
          onMouseEnter: P,
          onTouchStart: S,
          legacyBehavior: R = !1,
          ...C
        } = e;
        (r = v),
          R &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = n.default.createElement("a", null, r));
        let N = n.default.useContext(c.RouterContext),
          M = n.default.useContext(u.AppRouterContext),
          z = null != N ? N : M,
          T = !N,
          I = !1 !== w,
          $ = null === w ? m.PrefetchKind.AUTO : m.PrefetchKind.FULL,
          { href: L, as: A } = n.default.useMemo(() => {
            if (!N) {
              let e = g(h);
              return { href: e, as: y ? g(y) : e };
            }
            let [e, t] = (0, o.resolveHref)(N, h, !0);
            return { href: e, as: y ? (0, o.resolveHref)(N, y) : t || e };
          }, [N, h, y]),
          U = n.default.useRef(L),
          W = n.default.useRef(A);
        R && (i = n.default.Children.only(r));
        let D = R ? i && "object" == typeof i && i.ref : t,
          [F, K, q] = (0, d.useIntersection)({ rootMargin: "200px" }),
          G = n.default.useCallback(
            (e) => {
              (W.current !== A || U.current !== L) &&
                (q(), (W.current = A), (U.current = L)),
                F(e),
                D &&
                  ("function" == typeof D
                    ? D(e)
                    : "object" == typeof D && (D.current = e));
            },
            [A, D, L, q, F],
          );
        n.default.useEffect(() => {
          z && K && I && b(z, L, A, { locale: E }, { kind: $ }, T);
        }, [A, L, K, E, I, null == N ? void 0 : N.locale, z, T, $]);
        let Z = {
          ref: G,
          onClick(e) {
            R || "function" != typeof O || O(e),
              R &&
                i.props &&
                "function" == typeof i.props.onClick &&
                i.props.onClick(e),
              z &&
                !e.defaultPrevented &&
                (function (e, t, r, o, i, a, s, c, u) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!u && !(0, l.isLocalURL)(r)))
                  )
                    return;
                  e.preventDefault();
                  let f = () => {
                    let e = null == s || s;
                    "beforePopState" in t
                      ? t[i ? "replace" : "push"](r, o, {
                          shallow: a,
                          locale: c,
                          scroll: e,
                        })
                      : t[i ? "replace" : "push"](o || r, { scroll: e });
                  };
                  u ? n.default.startTransition(f) : f();
                })(e, z, L, A, k, _, j, E, T);
          },
          onMouseEnter(e) {
            R || "function" != typeof P || P(e),
              R &&
                i.props &&
                "function" == typeof i.props.onMouseEnter &&
                i.props.onMouseEnter(e),
              z &&
                (I || !T) &&
                b(
                  z,
                  L,
                  A,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: $ },
                  T,
                );
          },
          onTouchStart(e) {
            R || "function" != typeof S || S(e),
              R &&
                i.props &&
                "function" == typeof i.props.onTouchStart &&
                i.props.onTouchStart(e),
              z &&
                (I || !T) &&
                b(
                  z,
                  L,
                  A,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: $ },
                  T,
                );
          },
        };
        if ((0, a.isAbsoluteUrl)(A)) Z.href = A;
        else if (!R || x || ("a" === i.type && !("href" in i.props))) {
          let e = void 0 !== E ? E : null == N ? void 0 : N.locale,
            t =
              (null == N ? void 0 : N.isLocaleDomain) &&
              (0, f.getDomainLocale)(
                A,
                e,
                null == N ? void 0 : N.locales,
                null == N ? void 0 : N.domainLocales,
              );
          Z.href =
            t ||
            (0, p.addBasePath)(
              (0, s.addLocale)(A, e, null == N ? void 0 : N.defaultLocale),
            );
        }
        return R
          ? n.default.cloneElement(i, Z)
          : n.default.createElement("a", { ...C, ...Z }, r);
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2185: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          requestIdleCallback: function () {
            return r;
          },
          cancelIdleCallback: function () {
            return n;
          },
        });
      let r =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4542: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let n = r(5770),
        o = r(1030),
        l = r(4544),
        i = r(6874),
        a = r(2139),
        s = r(7434),
        c = r(2360),
        u = r(6735);
      function d(e, t, r) {
        let d;
        let f = "string" == typeof t ? t : (0, o.formatWithValidation)(t),
          p = f.match(/^[a-zA-Z]{1,}:\/\//),
          m = p ? f.slice(p[0].length) : f;
        if ((m.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              f +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.",
          );
          let t = (0, i.normalizeRepeatedSlashes)(m);
          f = (p ? p[0] : "") + t;
        }
        if (!(0, s.isLocalURL)(f)) return r ? [f] : f;
        try {
          d = new URL(f.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          d = new URL("/", "http://n");
        }
        try {
          let e = new URL(f, d);
          e.pathname = (0, a.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, c.isDynamicRoute)(e.pathname) && e.searchParams && r) {
            let r = (0, n.searchParamsToUrlQuery)(e.searchParams),
              { result: i, params: a } = (0, u.interpolateAs)(
                e.pathname,
                e.pathname,
                r,
              );
            i &&
              (t = (0, o.formatWithValidation)({
                pathname: i,
                hash: e.hash,
                query: (0, l.omit)(r, a),
              }));
          }
          let i =
            e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
          return r ? [i, t || i] : i;
        } catch (e) {
          return r ? [f] : f;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5291: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = r(2265),
        o = r(2185),
        l = "function" == typeof IntersectionObserver,
        i = new Map(),
        a = [];
      function s(e) {
        let { rootRef: t, rootMargin: r, disabled: s } = e,
          c = s || !l,
          [u, d] = (0, n.useState)(!1),
          f = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (l) {
              if (c || u) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: l,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = a.find(
                        (e) => e.root === r.root && e.margin === r.margin,
                      );
                    if (n && (t = i.get(n))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: o,
                      }),
                      a.push(r),
                      i.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    l.set(e, t),
                    o.observe(e),
                    function () {
                      if ((l.delete(e), o.unobserve(e), 0 === l.size)) {
                        o.disconnect(), i.delete(n);
                        let e = a.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin,
                        );
                        e > -1 && a.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!u) {
              let e = (0, o.requestIdleCallback)(() => d(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [c, r, t, u, f.current]),
          [
            p,
            u,
            (0, n.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2202: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;
      function o(e) {
        return r.test(e) ? e.replace(n, "\\$&") : e;
      }
    },
    6993: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(1024)._(r(2265)).default.createContext(null);
    },
    1030: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          formatUrl: function () {
            return l;
          },
          urlObjectKeys: function () {
            return i;
          },
          formatWithValidation: function () {
            return a;
          },
        });
      let n = r(8533)._(r(5770)),
        o = /https?|ftp|gopher|file/;
      function l(e) {
        let { auth: t, hostname: r } = e,
          l = e.protocol || "",
          i = e.pathname || "",
          a = e.hash || "",
          s = e.query || "",
          c = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (c = t + e.host)
            : r &&
              ((c = t + (~r.indexOf(":") ? "[" + r + "]" : r)),
              e.port && (c += ":" + e.port)),
          s &&
            "object" == typeof s &&
            (s = String(n.urlQueryToSearchParams(s)));
        let u = e.search || (s && "?" + s) || "";
        return (
          l && !l.endsWith(":") && (l += ":"),
          e.slashes || ((!l || o.test(l)) && !1 !== c)
            ? ((c = "//" + (c || "")), i && "/" !== i[0] && (i = "/" + i))
            : c || (c = ""),
          a && "#" !== a[0] && (a = "#" + a),
          u && "?" !== u[0] && (u = "?" + u),
          "" +
            l +
            c +
            (i = i.replace(/[?#]/g, encodeURIComponent)) +
            (u = u.replace("#", "%23")) +
            a
        );
      }
      let i = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function a(e) {
        return l(e);
      }
    },
    2360: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getSortedRoutes: function () {
            return n.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return o.isDynamicRoute;
          },
        });
      let n = r(7409),
        o = r(1305);
    },
    6735: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(2395),
        o = r(9935);
      function l(e, t, r) {
        let l = "",
          i = (0, o.getRouteRegex)(e),
          a = i.groups,
          s = (t !== e ? (0, n.getRouteMatcher)(i)(t) : "") || r;
        l = e;
        let c = Object.keys(a);
        return (
          c.every((e) => {
            let t = s[e] || "",
              { repeat: r, optional: n } = a[e],
              o = "[" + (r ? "..." : "") + e + "]";
            return (
              n && (o = (t ? "" : "/") + "[" + o + "]"),
              r && !Array.isArray(t) && (t = [t]),
              (n || e in s) &&
                (l =
                  l.replace(
                    o,
                    r
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t),
                  ) || "/")
            );
          }) || (l = ""),
          { params: c, result: l }
        );
      }
    },
    1305: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(4507),
        o = /\/\[[^/]+?\](?=\/|$)/;
      function l(e) {
        return (
          (0, n.isInterceptionRouteAppPath)(e) &&
            (e = (0, n.extractInterceptionRouteInformation)(
              e,
            ).interceptedRoute),
          o.test(e)
        );
      }
    },
    7434: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(6874),
        o = r(7379);
      function l(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, n.getLocationOrigin)(),
            r = new URL(e, t);
          return r.origin === t && (0, o.hasBasePath)(r.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    4544: function (e, t) {
      "use strict";
      function r(e, t) {
        let r = {};
        return (
          Object.keys(e).forEach((n) => {
            t.includes(n) || (r[n] = e[n]);
          }),
          r
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    5770: function (e, t) {
      "use strict";
      function r(e) {
        let t = {};
        return (
          e.forEach((e, r) => {
            void 0 === t[r]
              ? (t[r] = e)
              : Array.isArray(t[r])
                ? t[r].push(e)
                : (t[r] = [t[r], e]);
          }),
          t
        );
      }
      function n(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function o(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [r, o] = e;
            Array.isArray(o)
              ? o.forEach((e) => t.append(r, n(e)))
              : t.set(r, n(o));
          }),
          t
        );
      }
      function l(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return (
          r.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, r) => e.append(r, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          searchParamsToUrlQuery: function () {
            return r;
          },
          urlQueryToSearchParams: function () {
            return o;
          },
          assign: function () {
            return l;
          },
        });
    },
    2395: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(6874);
      function o(e) {
        let { re: t, groups: r } = e;
        return (e) => {
          let o = t.exec(e);
          if (!o) return !1;
          let l = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new n.DecodeError("failed to decode param");
              }
            },
            i = {};
          return (
            Object.keys(r).forEach((e) => {
              let t = r[e],
                n = o[t.pos];
              void 0 !== n &&
                (i[e] = ~n.indexOf("/")
                  ? n.split("/").map((e) => l(e))
                  : t.repeat
                    ? [l(n)]
                    : l(n));
            }),
            i
          );
        };
      }
    },
    9935: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getRouteRegex: function () {
            return s;
          },
          getNamedRouteRegex: function () {
            return d;
          },
          getNamedMiddlewareRegex: function () {
            return f;
          },
        });
      let n = r(4507),
        o = r(2202),
        l = r(5868);
      function i(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let r = e.startsWith("...");
        return r && (e = e.slice(3)), { key: e, repeat: r, optional: t };
      }
      function a(e) {
        let t = (0, l.removeTrailingSlash)(e).slice(1).split("/"),
          r = {},
          a = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = n.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                l = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && l) {
                let { key: e, optional: n, repeat: s } = i(l[1]);
                return (
                  (r[e] = { pos: a++, repeat: s, optional: n }),
                  "/" + (0, o.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!l) return "/" + (0, o.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: n } = i(l[1]);
                return (
                  (r[e] = { pos: a++, repeat: t, optional: n }),
                  t ? (n ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: r,
        };
      }
      function s(e) {
        let { parameterizedRoute: t, groups: r } = a(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: r };
      }
      function c(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: r,
            segment: n,
            routeKeys: l,
            keyPrefix: a,
          } = e,
          { key: s, optional: c, repeat: u } = i(n),
          d = s.replace(/\W/g, "");
        a && (d = "" + a + d);
        let f = !1;
        (0 === d.length || d.length > 30) && (f = !0),
          isNaN(parseInt(d.slice(0, 1))) || (f = !0),
          f && (d = r()),
          a ? (l[d] = "" + a + s) : (l[d] = s);
        let p = t ? (0, o.escapeStringRegexp)(t) : "";
        return u
          ? c
            ? "(?:/" + p + "(?<" + d + ">.+?))?"
            : "/" + p + "(?<" + d + ">.+?)"
          : "/" + p + "(?<" + d + ">[^/]+?)";
      }
      function u(e, t) {
        let r;
        let i = (0, l.removeTrailingSlash)(e).slice(1).split("/"),
          a =
            ((r = 0),
            () => {
              let e = "",
                t = ++r;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          s = {};
        return {
          namedParameterizedRoute: i
            .map((e) => {
              let r = n.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                l = e.match(/\[((?:\[.*\])|.+)\]/);
              if (r && l) {
                let [r] = e.split(l[0]);
                return c({
                  getSafeRouteKey: a,
                  interceptionMarker: r,
                  segment: l[1],
                  routeKeys: s,
                  keyPrefix: t ? "nxtI" : void 0,
                });
              }
              return l
                ? c({
                    getSafeRouteKey: a,
                    segment: l[1],
                    routeKeys: s,
                    keyPrefix: t ? "nxtP" : void 0,
                  })
                : "/" + (0, o.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: s,
        };
      }
      function d(e, t) {
        let r = u(e, t);
        return {
          ...s(e),
          namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
          routeKeys: r.routeKeys,
        };
      }
      function f(e, t) {
        let { parameterizedRoute: r } = a(e),
          { catchAll: n = !0 } = t;
        if ("/" === r) return { namedRegex: "^/" + (n ? ".*" : "") + "$" };
        let { namedParameterizedRoute: o } = u(e, !1);
        return { namedRegex: "^" + o + (n ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    7409: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      class r {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1);
          let r = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              r.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/"),
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").',
              );
            r.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              r.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/"),
              ),
            null !== this.optionalRestSlugName &&
              r.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/"),
              ),
            r
          );
        }
        _insert(e, t, n) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (n) throw Error("Catch-all must be the last part of the URL.");
          let o = e[0];
          if (o.startsWith("[") && o.endsWith("]")) {
            let r = o.slice(1, -1),
              i = !1;
            if (
              (r.startsWith("[") &&
                r.endsWith("]") &&
                ((r = r.slice(1, -1)), (i = !0)),
              r.startsWith("...") && ((r = r.substring(3)), (n = !0)),
              r.startsWith("[") || r.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  r +
                  "').",
              );
            if (r.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  r +
                  "').",
              );
            function l(e, r) {
              if (null !== e && e !== r)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    r +
                    "').",
                );
              t.forEach((e) => {
                if (e === r)
                  throw Error(
                    'You cannot have the same slug name "' +
                      r +
                      '" repeat within a single dynamic path',
                  );
                if (e.replace(/\W/g, "") === o.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      r +
                      '" differ only by non-word symbols within a single dynamic path',
                  );
              }),
                t.push(r);
            }
            if (n) {
              if (i) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).',
                  );
                l(this.optionalRestSlugName, r),
                  (this.optionalRestSlugName = r),
                  (o = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").',
                  );
                l(this.restSlugName, r), (this.restSlugName = r), (o = "[...]");
              }
            } else {
              if (i)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").',
                );
              l(this.slugName, r), (this.slugName = r), (o = "[]");
            }
          }
          this.children.has(o) || this.children.set(o, new r()),
            this.children.get(o)._insert(e.slice(1), t, n);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function n(e) {
        let t = new r();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
    },
    6874: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return n;
          },
          isAbsoluteUrl: function () {
            return l;
          },
          getLocationOrigin: function () {
            return i;
          },
          getURL: function () {
            return a;
          },
          getDisplayName: function () {
            return s;
          },
          isResSent: function () {
            return c;
          },
          normalizeRepeatedSlashes: function () {
            return u;
          },
          loadGetInitialProps: function () {
            return d;
          },
          SP: function () {
            return f;
          },
          ST: function () {
            return p;
          },
          DecodeError: function () {
            return m;
          },
          NormalizeError: function () {
            return h;
          },
          PageNotFoundError: function () {
            return b;
          },
          MissingStaticPage: function () {
            return g;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          stringifyError: function () {
            return v;
          },
        });
      let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function n(e) {
        let t,
          r = !1;
        return function () {
          for (var n = arguments.length, o = Array(n), l = 0; l < n; l++)
            o[l] = arguments[l];
          return r || ((r = !0), (t = e(...o))), t;
        };
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        l = (e) => o.test(e);
      function i() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return e + "//" + t + (r ? ":" + r : "");
      }
      function a() {
        let { href: e } = window.location,
          t = i();
        return e.substring(t.length);
      }
      function s(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function c(e) {
        return e.finished || e.headersSent;
      }
      function u(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function d(e, t) {
        let r = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await d(t.Component, t.ctx) }
            : {};
        let n = await e.getInitialProps(t);
        if (r && c(r)) return n;
        if (!n)
          throw Error(
            '"' +
              s(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              n +
              '" instead.',
          );
        return n;
      }
      let f = "undefined" != typeof performance,
        p =
          f &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e],
          );
      class m extends Error {}
      class h extends Error {}
      class b extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class g extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class y extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function v(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    3445: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",
          fontStyle: "normal",
        },
        className: "__className_e66fe9",
      };
    },
    622: function (e, t, r) {
      "use strict";
      var n = r(2265),
        o = Symbol.for("react.element"),
        l = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        i =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = { key: !0, ref: !0, __self: !0, __source: !0 };
      function s(e, t, r) {
        var n,
          s = {},
          c = null,
          u = null;
        for (n in (void 0 !== r && (c = "" + r),
        void 0 !== t.key && (c = "" + t.key),
        void 0 !== t.ref && (u = t.ref),
        t))
          l.call(t, n) && !a.hasOwnProperty(n) && (s[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === s[n] && (s[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: c,
          ref: u,
          props: s,
          _owner: i.current,
        };
      }
      (t.jsx = s), (t.jsxs = s);
    },
    7437: function (e, t, r) {
      "use strict";
      e.exports = r(622);
    },
    1396: function (e, t, r) {
      e.exports = r(5250);
    },
    4972: function (e, t, r) {
      "use strict";
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      r.d(t, {
        g7: function () {
          return l;
        },
      });
      var o = r(2265);
      let l = (0, o.forwardRef)((e, t) => {
        let { children: r, ...l } = e,
          a = o.Children.toArray(r),
          c = a.find(s);
        if (c) {
          let e = c.props.children,
            r = a.map((t) =>
              t !== c
                ? t
                : o.Children.count(e) > 1
                  ? o.Children.only(null)
                  : (0, o.isValidElement)(e)
                    ? e.props.children
                    : null,
            );
          return (0, o.createElement)(
            i,
            n({}, l, { ref: t }),
            (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, r) : null,
          );
        }
        return (0, o.createElement)(i, n({}, l, { ref: t }), r);
      });
      l.displayName = "Slot";
      let i = (0, o.forwardRef)((e, t) => {
        let { children: r, ...n } = e;
        return (0, o.isValidElement)(r)
          ? (0, o.cloneElement)(r, {
              ...(function (e, t) {
                let r = { ...t };
                for (let n in t) {
                  let o = e[n],
                    l = t[n];
                  /^on[A-Z]/.test(n)
                    ? o && l
                      ? (r[n] = (...e) => {
                          l(...e), o(...e);
                        })
                      : o && (r[n] = o)
                    : "style" === n
                      ? (r[n] = { ...o, ...l })
                      : "className" === n &&
                        (r[n] = [o, l].filter(Boolean).join(" "));
                }
                return { ...e, ...r };
              })(n, r.props),
              ref: t
                ? (function (...e) {
                    return (t) =>
                      e.forEach((e) => {
                        "function" == typeof e
                          ? e(t)
                          : null != e && (e.current = t);
                      });
                  })(t, r.ref)
                : r.ref,
            })
          : o.Children.count(r) > 1
            ? o.Children.only(null)
            : null;
      });
      i.displayName = "SlotClone";
      let a = ({ children: e }) => (0, o.createElement)(o.Fragment, null, e);
      function s(e) {
        return (0, o.isValidElement)(e) && e.type === a;
      }
    },
    6061: function (e, t, r) {
      "use strict";
      r.d(t, {
        j: function () {
          return i;
        },
      });
      var n = r(7042);
      let o = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        l = n.W,
        i = (e, t) => (r) => {
          var n;
          if ((null == t ? void 0 : t.variants) == null)
            return l(
              e,
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className,
            );
          let { variants: i, defaultVariants: a } = t,
            s = Object.keys(i).map((e) => {
              let t = null == r ? void 0 : r[e],
                n = null == a ? void 0 : a[e];
              if (null === t) return null;
              let l = o(t) || o(n);
              return i[e][l];
            }),
            c =
              r &&
              Object.entries(r).reduce((e, t) => {
                let [r, n] = t;
                return void 0 === n || (e[r] = n), e;
              }, {});
          return l(
            e,
            s,
            null == t
              ? void 0
              : null === (n = t.compoundVariants) || void 0 === n
                ? void 0
                : n.reduce((e, t) => {
                    let { class: r, className: n, ...o } = t;
                    return Object.entries(o).every((e) => {
                      let [t, r] = e;
                      return Array.isArray(r)
                        ? r.includes({ ...a, ...c }[t])
                        : { ...a, ...c }[t] === r;
                    })
                      ? [...e, r, n]
                      : e;
                  }, []),
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className,
          );
        };
    },
    7042: function (e, t, r) {
      "use strict";
      function n() {
        for (var e, t, r = 0, n = ""; r < arguments.length; )
          (e = arguments[r++]) &&
            (t = (function e(t) {
              var r,
                n,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (r = 0; r < t.length; r++)
                    t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                else for (r in t) t[r] && (o && (o += " "), (o += r));
              }
              return o;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
      r.d(t, {
        W: function () {
          return n;
        },
      });
    },
    4769: function (e, t, r) {
      "use strict";
      r.d(t, {
        m6: function () {
          return I;
        },
      });
      let n = /^\[(.+)\]$/;
      function o(e, t) {
        let r = e;
        return (
          t.split("-").forEach((e) => {
            r.nextPart.has(e) ||
              r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (r = r.nextPart.get(e));
          }),
          r
        );
      }
      let l = /\s+/;
      function i() {
        let e,
          t,
          r = 0,
          n = "";
        for (; r < arguments.length; )
          (e = arguments[r++]) &&
            (t = (function e(t) {
              let r;
              if ("string" == typeof t) return t;
              let n = "";
              for (let o = 0; o < t.length; o++)
                t[o] && (r = e(t[o])) && (n && (n += " "), (n += r));
              return n;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
      function a(e) {
        let t = (t) => t[e] || [];
        return (t.isThemeGetter = !0), t;
      }
      let s = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        c = /^\d+\/\d+$/,
        u = new Set(["px", "full", "screen"]),
        d = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        f =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        p = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        m =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      function h(e) {
        return g(e) || u.has(e) || c.test(e);
      }
      function b(e) {
        return C(e, "length", N);
      }
      function g(e) {
        return !!e && !Number.isNaN(Number(e));
      }
      function y(e) {
        return C(e, "number", g);
      }
      function v(e) {
        return !!e && Number.isInteger(Number(e));
      }
      function w(e) {
        return e.endsWith("%") && g(e.slice(0, -1));
      }
      function x(e) {
        return s.test(e);
      }
      function k(e) {
        return d.test(e);
      }
      let _ = new Set(["length", "size", "percentage"]);
      function j(e) {
        return C(e, _, M);
      }
      function E(e) {
        return C(e, "position", M);
      }
      let O = new Set(["image", "url"]);
      function P(e) {
        return C(e, O, T);
      }
      function S(e) {
        return C(e, "", z);
      }
      function R() {
        return !0;
      }
      function C(e, t, r) {
        let n = s.exec(e);
        return (
          !!n &&
          (n[1] ? ("string" == typeof t ? n[1] === t : t.has(n[1])) : r(n[2]))
        );
      }
      function N(e) {
        return f.test(e);
      }
      function M() {
        return !1;
      }
      function z(e) {
        return p.test(e);
      }
      function T(e) {
        return m.test(e);
      }
      let I = (function (e) {
        let t, r, a;
        let s = function (l) {
          var i;
          return (
            (r = (t = {
              cache: (function (e) {
                if (e < 1) return { get: () => void 0, set: () => {} };
                let t = 0,
                  r = new Map(),
                  n = new Map();
                function o(o, l) {
                  r.set(o, l), ++t > e && ((t = 0), (n = r), (r = new Map()));
                }
                return {
                  get(e) {
                    let t = r.get(e);
                    return void 0 !== t
                      ? t
                      : void 0 !== (t = n.get(e))
                        ? (o(e, t), t)
                        : void 0;
                  },
                  set(e, t) {
                    r.has(e) ? r.set(e, t) : o(e, t);
                  },
                };
              })((i = [].reduce((e, t) => t(e), e())).cacheSize),
              splitModifiers: (function (e) {
                let t = e.separator,
                  r = 1 === t.length,
                  n = t[0],
                  o = t.length;
                return function (e) {
                  let l;
                  let i = [],
                    a = 0,
                    s = 0;
                  for (let c = 0; c < e.length; c++) {
                    let u = e[c];
                    if (0 === a) {
                      if (u === n && (r || e.slice(c, c + o) === t)) {
                        i.push(e.slice(s, c)), (s = c + o);
                        continue;
                      }
                      if ("/" === u) {
                        l = c;
                        continue;
                      }
                    }
                    "[" === u ? a++ : "]" === u && a--;
                  }
                  let c = 0 === i.length ? e : e.substring(s),
                    u = c.startsWith("!"),
                    d = u ? c.substring(1) : c;
                  return {
                    modifiers: i,
                    hasImportantModifier: u,
                    baseClassName: d,
                    maybePostfixModifierPosition: l && l > s ? l - s : void 0,
                  };
                };
              })(i),
              ...(function (e) {
                let t = (function (e) {
                    var t;
                    let { theme: r, prefix: n } = e,
                      l = { nextPart: new Map(), validators: [] };
                    return (
                      ((t = Object.entries(e.classGroups)),
                      n
                        ? t.map(([e, t]) => [
                            e,
                            t.map((e) =>
                              "string" == typeof e
                                ? n + e
                                : "object" == typeof e
                                  ? Object.fromEntries(
                                      Object.entries(e).map(([e, t]) => [
                                        n + e,
                                        t,
                                      ]),
                                    )
                                  : e,
                            ),
                          ])
                        : t).forEach(([e, t]) => {
                        (function e(t, r, n, l) {
                          t.forEach((t) => {
                            if ("string" == typeof t) {
                              ("" === t ? r : o(r, t)).classGroupId = n;
                              return;
                            }
                            if ("function" == typeof t) {
                              if (t.isThemeGetter) {
                                e(t(l), r, n, l);
                                return;
                              }
                              r.validators.push({
                                validator: t,
                                classGroupId: n,
                              });
                              return;
                            }
                            Object.entries(t).forEach(([t, i]) => {
                              e(i, o(r, t), n, l);
                            });
                          });
                        })(t, l, e, r);
                      }),
                      l
                    );
                  })(e),
                  {
                    conflictingClassGroups: r,
                    conflictingClassGroupModifiers: l,
                  } = e;
                return {
                  getClassGroupId: function (e) {
                    let r = e.split("-");
                    return (
                      "" === r[0] && 1 !== r.length && r.shift(),
                      (function e(t, r) {
                        if (0 === t.length) return r.classGroupId;
                        let n = t[0],
                          o = r.nextPart.get(n),
                          l = o ? e(t.slice(1), o) : void 0;
                        if (l) return l;
                        if (0 === r.validators.length) return;
                        let i = t.join("-");
                        return r.validators.find(({ validator: e }) => e(i))
                          ?.classGroupId;
                      })(r, t) ||
                        (function (e) {
                          if (n.test(e)) {
                            let t = n.exec(e)[1],
                              r = t?.substring(0, t.indexOf(":"));
                            if (r) return "arbitrary.." + r;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, t) {
                    let n = r[e] || [];
                    return t && l[e] ? [...n, ...l[e]] : n;
                  },
                };
              })(i),
            }).cache.get),
            (a = t.cache.set),
            (s = c),
            c(l)
          );
        };
        function c(e) {
          let n = r(e);
          if (n) return n;
          let o = (function (e, t) {
            let {
                splitModifiers: r,
                getClassGroupId: n,
                getConflictingClassGroupIds: o,
              } = t,
              i = new Set();
            return e
              .trim()
              .split(l)
              .map((e) => {
                let {
                    modifiers: t,
                    hasImportantModifier: o,
                    baseClassName: l,
                    maybePostfixModifierPosition: i,
                  } = r(e),
                  a = n(i ? l.substring(0, i) : l),
                  s = !!i;
                if (!a) {
                  if (!i || !(a = n(l)))
                    return { isTailwindClass: !1, originalClassName: e };
                  s = !1;
                }
                let c = (function (e) {
                  if (e.length <= 1) return e;
                  let t = [],
                    r = [];
                  return (
                    e.forEach((e) => {
                      "[" === e[0]
                        ? (t.push(...r.sort(), e), (r = []))
                        : r.push(e);
                    }),
                    t.push(...r.sort()),
                    t
                  );
                })(t).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: o ? c + "!" : c,
                  classGroupId: a,
                  originalClassName: e,
                  hasPostfixModifier: s,
                };
              })
              .reverse()
              .filter((e) => {
                if (!e.isTailwindClass) return !0;
                let {
                    modifierId: t,
                    classGroupId: r,
                    hasPostfixModifier: n,
                  } = e,
                  l = t + r;
                return (
                  !i.has(l) &&
                  (i.add(l), o(r, n).forEach((e) => i.add(t + e)), !0)
                );
              })
              .reverse()
              .map((e) => e.originalClassName)
              .join(" ");
          })(e, t);
          return a(e, o), o;
        }
        return function () {
          return s(i.apply(null, arguments));
        };
      })(function () {
        let e = a("colors"),
          t = a("spacing"),
          r = a("blur"),
          n = a("brightness"),
          o = a("borderColor"),
          l = a("borderRadius"),
          i = a("borderSpacing"),
          s = a("borderWidth"),
          c = a("contrast"),
          u = a("grayscale"),
          d = a("hueRotate"),
          f = a("invert"),
          p = a("gap"),
          m = a("gradientColorStops"),
          _ = a("gradientColorStopPositions"),
          O = a("inset"),
          C = a("margin"),
          N = a("opacity"),
          M = a("padding"),
          z = a("saturate"),
          T = a("scale"),
          I = a("sepia"),
          $ = a("skew"),
          L = a("space"),
          A = a("translate"),
          U = () => ["auto", "contain", "none"],
          W = () => ["auto", "hidden", "clip", "visible", "scroll"],
          D = () => ["auto", x, t],
          F = () => [x, t],
          K = () => ["", h, b],
          q = () => ["auto", g, x],
          G = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          Z = () => ["solid", "dashed", "dotted", "double", "none"],
          B = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
            "plus-lighter",
          ],
          V = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          Y = () => ["", "0", x],
          H = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          Q = () => [g, y],
          J = () => [g, x];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [R],
            spacing: [h, b],
            blur: ["none", "", k, x],
            brightness: Q(),
            borderColor: [e],
            borderRadius: ["none", "", "full", k, x],
            borderSpacing: F(),
            borderWidth: K(),
            contrast: Q(),
            grayscale: Y(),
            hueRotate: J(),
            invert: Y(),
            gap: F(),
            gradientColorStops: [e],
            gradientColorStopPositions: [w, b],
            inset: D(),
            margin: D(),
            opacity: Q(),
            padding: F(),
            saturate: Q(),
            scale: Q(),
            sepia: Y(),
            skew: J(),
            space: F(),
            translate: F(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", x] }],
            container: ["container"],
            columns: [{ columns: [k] }],
            "break-after": [{ "break-after": H() }],
            "break-before": [{ "break-before": H() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...G(), x] }],
            overflow: [{ overflow: W() }],
            "overflow-x": [{ "overflow-x": W() }],
            "overflow-y": [{ "overflow-y": W() }],
            overscroll: [{ overscroll: U() }],
            "overscroll-x": [{ "overscroll-x": U() }],
            "overscroll-y": [{ "overscroll-y": U() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [O] }],
            "inset-x": [{ "inset-x": [O] }],
            "inset-y": [{ "inset-y": [O] }],
            start: [{ start: [O] }],
            end: [{ end: [O] }],
            top: [{ top: [O] }],
            right: [{ right: [O] }],
            bottom: [{ bottom: [O] }],
            left: [{ left: [O] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", v, x] }],
            basis: [{ basis: D() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", x] }],
            grow: [{ grow: Y() }],
            shrink: [{ shrink: Y() }],
            order: [{ order: ["first", "last", "none", v, x] }],
            "grid-cols": [{ "grid-cols": [R] }],
            "col-start-end": [{ col: ["auto", { span: ["full", v, x] }, x] }],
            "col-start": [{ "col-start": q() }],
            "col-end": [{ "col-end": q() }],
            "grid-rows": [{ "grid-rows": [R] }],
            "row-start-end": [{ row: ["auto", { span: [v, x] }, x] }],
            "row-start": [{ "row-start": q() }],
            "row-end": [{ "row-end": q() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", x] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", x] }],
            gap: [{ gap: [p] }],
            "gap-x": [{ "gap-x": [p] }],
            "gap-y": [{ "gap-y": [p] }],
            "justify-content": [{ justify: ["normal", ...V()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...V(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...V(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [M] }],
            px: [{ px: [M] }],
            py: [{ py: [M] }],
            ps: [{ ps: [M] }],
            pe: [{ pe: [M] }],
            pt: [{ pt: [M] }],
            pr: [{ pr: [M] }],
            pb: [{ pb: [M] }],
            pl: [{ pl: [M] }],
            m: [{ m: [C] }],
            mx: [{ mx: [C] }],
            my: [{ my: [C] }],
            ms: [{ ms: [C] }],
            me: [{ me: [C] }],
            mt: [{ mt: [C] }],
            mr: [{ mr: [C] }],
            mb: [{ mb: [C] }],
            ml: [{ ml: [C] }],
            "space-x": [{ "space-x": [L] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [L] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", x, t] },
            ],
            "min-w": [{ "min-w": [x, t, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  x,
                  t,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [k] },
                  k,
                ],
              },
            ],
            h: [
              { h: [x, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [x, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [x, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [x, t, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", k, b] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  y,
                ],
              },
            ],
            "font-family": [{ font: [R] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  x,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", g, y] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  h,
                  x,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", x] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", x] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [N] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [N] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...Z(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", h, b] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", h, x] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: F() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  x,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", x] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [N] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...G(), E] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", j] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  P,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [_] }],
            "gradient-via-pos": [{ via: [_] }],
            "gradient-to-pos": [{ to: [_] }],
            "gradient-from": [{ from: [m] }],
            "gradient-via": [{ via: [m] }],
            "gradient-to": [{ to: [m] }],
            rounded: [{ rounded: [l] }],
            "rounded-s": [{ "rounded-s": [l] }],
            "rounded-e": [{ "rounded-e": [l] }],
            "rounded-t": [{ "rounded-t": [l] }],
            "rounded-r": [{ "rounded-r": [l] }],
            "rounded-b": [{ "rounded-b": [l] }],
            "rounded-l": [{ "rounded-l": [l] }],
            "rounded-ss": [{ "rounded-ss": [l] }],
            "rounded-se": [{ "rounded-se": [l] }],
            "rounded-ee": [{ "rounded-ee": [l] }],
            "rounded-es": [{ "rounded-es": [l] }],
            "rounded-tl": [{ "rounded-tl": [l] }],
            "rounded-tr": [{ "rounded-tr": [l] }],
            "rounded-br": [{ "rounded-br": [l] }],
            "rounded-bl": [{ "rounded-bl": [l] }],
            "border-w": [{ border: [s] }],
            "border-w-x": [{ "border-x": [s] }],
            "border-w-y": [{ "border-y": [s] }],
            "border-w-s": [{ "border-s": [s] }],
            "border-w-e": [{ "border-e": [s] }],
            "border-w-t": [{ "border-t": [s] }],
            "border-w-r": [{ "border-r": [s] }],
            "border-w-b": [{ "border-b": [s] }],
            "border-w-l": [{ "border-l": [s] }],
            "border-opacity": [{ "border-opacity": [N] }],
            "border-style": [{ border: [...Z(), "hidden"] }],
            "divide-x": [{ "divide-x": [s] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [s] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [N] }],
            "divide-style": [{ divide: Z() }],
            "border-color": [{ border: [o] }],
            "border-color-x": [{ "border-x": [o] }],
            "border-color-y": [{ "border-y": [o] }],
            "border-color-t": [{ "border-t": [o] }],
            "border-color-r": [{ "border-r": [o] }],
            "border-color-b": [{ "border-b": [o] }],
            "border-color-l": [{ "border-l": [o] }],
            "divide-color": [{ divide: [o] }],
            "outline-style": [{ outline: ["", ...Z()] }],
            "outline-offset": [{ "outline-offset": [h, x] }],
            "outline-w": [{ outline: [h, b] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: K() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [N] }],
            "ring-offset-w": [{ "ring-offset": [h, b] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", k, S] }],
            "shadow-color": [{ shadow: [R] }],
            opacity: [{ opacity: [N] }],
            "mix-blend": [{ "mix-blend": B() }],
            "bg-blend": [{ "bg-blend": B() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [r] }],
            brightness: [{ brightness: [n] }],
            contrast: [{ contrast: [c] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", k, x] }],
            grayscale: [{ grayscale: [u] }],
            "hue-rotate": [{ "hue-rotate": [d] }],
            invert: [{ invert: [f] }],
            saturate: [{ saturate: [z] }],
            sepia: [{ sepia: [I] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [r] }],
            "backdrop-brightness": [{ "backdrop-brightness": [n] }],
            "backdrop-contrast": [{ "backdrop-contrast": [c] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
            "backdrop-invert": [{ "backdrop-invert": [f] }],
            "backdrop-opacity": [{ "backdrop-opacity": [N] }],
            "backdrop-saturate": [{ "backdrop-saturate": [z] }],
            "backdrop-sepia": [{ "backdrop-sepia": [I] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [i] }],
            "border-spacing-x": [{ "border-spacing-x": [i] }],
            "border-spacing-y": [{ "border-spacing-y": [i] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  x,
                ],
              },
            ],
            duration: [{ duration: J() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", x] }],
            delay: [{ delay: J() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", x] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [T] }],
            "scale-x": [{ "scale-x": [T] }],
            "scale-y": [{ "scale-y": [T] }],
            rotate: [{ rotate: [v, x] }],
            "translate-x": [{ "translate-x": [A] }],
            "translate-y": [{ "translate-y": [A] }],
            "skew-x": [{ "skew-x": [$] }],
            "skew-y": [{ "skew-y": [$] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  x,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  x,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": F() }],
            "scroll-mx": [{ "scroll-mx": F() }],
            "scroll-my": [{ "scroll-my": F() }],
            "scroll-ms": [{ "scroll-ms": F() }],
            "scroll-me": [{ "scroll-me": F() }],
            "scroll-mt": [{ "scroll-mt": F() }],
            "scroll-mr": [{ "scroll-mr": F() }],
            "scroll-mb": [{ "scroll-mb": F() }],
            "scroll-ml": [{ "scroll-ml": F() }],
            "scroll-p": [{ "scroll-p": F() }],
            "scroll-px": [{ "scroll-px": F() }],
            "scroll-py": [{ "scroll-py": F() }],
            "scroll-ps": [{ "scroll-ps": F() }],
            "scroll-pe": [{ "scroll-pe": F() }],
            "scroll-pt": [{ "scroll-pt": F() }],
            "scroll-pr": [{ "scroll-pr": F() }],
            "scroll-pb": [{ "scroll-pb": F() }],
            "scroll-pl": [{ "scroll-pl": F() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", x] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [h, b, y] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
  },
]);
