//Copyright (©) 2022. Coursaholic, Dylan Nguyen, thedigitalchief, and subsidaries. All rights reserved.

var app = (function () {
    "use strict";
    function t() {}
    const e = (t) => t;
    function n(t, e) {
        for (const n in e) t[n] = e[n];
        return t;
    }
    function s(t) {
        return t();
    }
    function i() {
        return Object.create(null);
    }
    function a(t) {
        t.forEach(s);
    }
    function r(t) {
        return "function" == typeof t;
    }
    function o(t, e) {
        return t != t ? e == e : t !== e || (t && "object" == typeof t) || "function" == typeof t;
    }
    function l(e, n, s) {
        e.$$.on_destroy.push(
            (function (e, ...n) {
                if (null == e) return t;
                const s = e.subscribe(...n);
                return s.unsubscribe ? () => s.unsubscribe() : s;
            })(n, s)
        );
    }
    function c(t, e, n, s) {
        if (t) {
            const i = d(t, e, n, s);
            return t[0](i);
        }
    }
    function d(t, e, s, i) {
        return t[1] && i ? n(s.ctx.slice(), t[1](i(e))) : s.ctx;
    }
    function h(t, e, n, s, i, a, r) {
        const o = (function (t, e, n, s) {
            if (t[2] && s) {
                const i = t[2](s(n));
                if (void 0 === e.dirty) return i;
                if ("object" == typeof i) {
                    const t = [],
                        n = Math.max(e.dirty.length, i.length);
                    for (let s = 0; s < n; s += 1) t[s] = e.dirty[s] | i[s];
                    return t;
                }
                return e.dirty | i;
            }
            return e.dirty;
        })(e, s, i, a);
        if (o) {
            const i = d(e, n, s, r);
            t.p(i, o);
        }
    }
    function u(t) {
        return null == t ? "" : t;
    }
    function f(t, e, n = e) {
        return t.set(n), e;
    }
    const _ = "undefined" != typeof window;
    let g = _ ? () => window.performance.now() : () => Date.now(),
        m = _ ? (t) => requestAnimationFrame(t) : t;
    const p = new Set();
    function v(t) {
        p.forEach((e) => {
            e.c(t) || (p.delete(e), e.f());
        }),
            0 !== p.size && m(v);
    }
    function b(t) {
        let e;
        return (
            0 === p.size && m(v),
            {
                promise: new Promise((n) => {
                    p.add((e = { c: t, f: n }));
                }),
                abort() {
                    p.delete(e);
                },
            }
        );
    }
    function w(t, e) {
        t.appendChild(e);
    }
    function y(t, e, n) {
        t.insertBefore(e, n || null);
    }
    function k(t) {
        t.parentNode.removeChild(t);
    }
    function x(t) {
        return document.createElement(t);
    }
    function $(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t);
    }
    function S(t) {
        return document.createTextNode(t);
    }
    function z() {
        return S(" ");
    }
    function E() {
        return S("");
    }
    function A(t, e, n, s) {
        return t.addEventListener(e, n, s), () => t.removeEventListener(e, n, s);
    }
    function C(t, e, n) {
        null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
    }
    function R(t, e, n) {
        e in t ? (t[e] = n) : C(t, e, n);
    }
    function O(t) {
        return "" === t ? null : +t;
    }
    function L(t, e) {
        (e = "" + e), t.wholeText !== e && (t.data = e);
    }
    function j(t, e) {
        t.value = null == e ? "" : e;
    }
    function N(t, e, n, s) {
        t.style.setProperty(e, n, s ? "important" : "");
    }
    function I(t, e) {
        for (let n = 0; n < t.options.length; n += 1) {
            const s = t.options[n];
            if (s.__value === e) return void (s.selected = !0);
        }
    }
    let Z;
    function T() {
        if (void 0 === Z) {
            Z = !1;
            try {
                "undefined" != typeof window && window.parent && window.parent.document;
            } catch (t) {
                Z = !0;
            }
        }
        return Z;
    }
    function U(t, e, n) {
        t.classList[n ? "add" : "remove"](e);
    }
    const D = new Set();
    let M,
        B = 0;
    function F(t, e, n, s, i, a, r, o = 0) {
        const l = 16.666 / s;
        let c = "{\n";
        for (let t = 0; t <= 1; t += l) {
            const s = e + (n - e) * a(t);
            c += 100 * t + `%{${r(s, 1 - s)}}\n`;
        }
        const d = c + `100% {${r(n, 1 - n)}}\n}`,
            h = `__svelte_${(function (t) {
                let e = 5381,
                    n = t.length;
                for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
                return e >>> 0;
            })(d)}_${o}`,
            u = t.ownerDocument;
        D.add(u);
        const f = u.__svelte_stylesheet || (u.__svelte_stylesheet = u.head.appendChild(x("style")).sheet),
            _ = u.__svelte_rules || (u.__svelte_rules = {});
        _[h] || ((_[h] = !0), f.insertRule(`@keyframes ${h} ${d}`, f.cssRules.length));
        const g = t.style.animation || "";
        return (t.style.animation = `${g ? `${g}, ` : ""}${h} ${s}ms linear ${i}ms 1 both`), (B += 1), h;
    }
    function H(t, e) {
        const n = (t.style.animation || "").split(", "),
            s = n.filter(e ? (t) => t.indexOf(e) < 0 : (t) => -1 === t.indexOf("__svelte")),
            i = n.length - s.length;
        i &&
            ((t.style.animation = s.join(", ")),
            (B -= i),
            B ||
                m(() => {
                    B ||
                        (D.forEach((t) => {
                            const e = t.__svelte_stylesheet;
                            let n = e.cssRules.length;
                            for (; n--; ) e.deleteRule(n);
                            t.__svelte_rules = {};
                        }),
                        D.clear());
                }));
    }
    function q(t) {
        M = t;
    }
    function P() {
        if (!M) throw new Error("Function called outside component initialization");
        return M;
    }
    function J(t) {
        P().$$.on_mount.push(t);
    }
    const K = [],
        W = [],
        Y = [],
        G = [],
        X = Promise.resolve();
    let V = !1;
    function Q() {
        V || ((V = !0), X.then(at));
    }
    function tt() {
        return Q(), X;
    }
    function et(t) {
        Y.push(t);
    }
    function nt(t) {
        G.push(t);
    }
    let st = !1;
    const it = new Set();
    function at() {
        if (!st) {
            st = !0;
            do {
                for (let t = 0; t < K.length; t += 1) {
                    const e = K[t];
                    q(e), rt(e.$$);
                }
                for (q(null), K.length = 0; W.length; ) W.pop()();
                for (let t = 0; t < Y.length; t += 1) {
                    const e = Y[t];
                    it.has(e) || (it.add(e), e());
                }
                Y.length = 0;
            } while (K.length);
            for (; G.length; ) G.pop()();
            (V = !1), (st = !1), it.clear();
        }
    }
    function rt(t) {
        if (null !== t.fragment) {
            t.update(), a(t.before_update);
            const e = t.dirty;
            (t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(et);
        }
    }
    let ot;
    function lt() {
        return (
            ot ||
                ((ot = Promise.resolve()),
                ot.then(() => {
                    ot = null;
                })),
            ot
        );
    }
    function ct(t, e, n) {
        t.dispatchEvent(
            (function (t, e) {
                const n = document.createEvent("CustomEvent");
                return n.initCustomEvent(t, !1, !1, e), n;
            })(`${e ? "intro" : "outro"}${n}`)
        );
    }
    const dt = new Set();
    let ht;
    function ut() {
        ht = { r: 0, c: [], p: ht };
    }
    function ft() {
        ht.r || a(ht.c), (ht = ht.p);
    }
    function _t(t, e) {
        t && t.i && (dt.delete(t), t.i(e));
    }
    function gt(t, e, n, s) {
        if (t && t.o) {
            if (dt.has(t)) return;
            dt.add(t),
                ht.c.push(() => {
                    dt.delete(t), s && (n && t.d(1), s());
                }),
                t.o(e);
        }
    }
    const mt = { duration: 0 };
    function pt(n, s, i, o) {
        let l = s(n, i),
            c = o ? 0 : 1,
            d = null,
            h = null,
            u = null;
        function f() {
            u && H(n, u);
        }
        function _(t, e) {
            const n = t.b - c;
            return (e *= Math.abs(n)), { a: c, b: t.b, d: n, duration: e, start: t.start, end: t.start + e, group: t.group };
        }
        function m(s) {
            const { delay: i = 0, duration: r = 300, easing: o = e, tick: m = t, css: p } = l || mt,
                v = { start: g() + i, b: s };
            s || ((v.group = ht), (ht.r += 1)),
                d || h
                    ? (h = v)
                    : (p && (f(), (u = F(n, c, s, r, i, o, p))),
                      s && m(0, 1),
                      (d = _(v, r)),
                      et(() => ct(n, s, "start")),
                      b((t) => {
                          if ((h && t > h.start && ((d = _(h, r)), (h = null), ct(n, d.b, "start"), p && (f(), (u = F(n, c, d.b, d.duration, 0, o, l.css)))), d))
                              if (t >= d.end) m((c = d.b), 1 - c), ct(n, d.b, "end"), h || (d.b ? f() : --d.group.r || a(d.group.c)), (d = null);
                              else if (t >= d.start) {
                                  const e = t - d.start;
                                  (c = d.a + d.d * o(e / d.duration)), m(c, 1 - c);
                              }
                          return !(!d && !h);
                      }));
        }
        return {
            run(t) {
                r(l)
                    ? lt().then(() => {
                          (l = l()), m(t);
                      })
                    : m(t);
            },
            end() {
                f(), (d = h = null);
            },
        };
    }
    const vt = "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global;
    function bt(t, e) {
        t.d(1), e.delete(t.key);
    }
    function wt(t, e) {
        gt(t, 1, 1, () => {
            e.delete(t.key);
        });
    }
    function yt(t, e, n, s, i, a, r, o, l, c, d, h) {
        let u = t.length,
            f = a.length,
            _ = u;
        const g = {};
        for (; _--; ) g[t[_].key] = _;
        const m = [],
            p = new Map(),
            v = new Map();
        for (_ = f; _--; ) {
            const t = h(i, a, _),
                o = n(t);
            let l = r.get(o);
            l ? s && l.p(t, e) : ((l = c(o, t)), l.c()), p.set(o, (m[_] = l)), o in g && v.set(o, Math.abs(_ - g[o]));
        }
        const b = new Set(),
            w = new Set();
        function y(t) {
            _t(t, 1), t.m(o, d), r.set(t.key, t), (d = t.first), f--;
        }
        for (; u && f; ) {
            const e = m[f - 1],
                n = t[u - 1],
                s = e.key,
                i = n.key;
            e === n ? ((d = e.first), u--, f--) : p.has(i) ? (!r.has(s) || b.has(s) ? y(e) : w.has(i) ? u-- : v.get(s) > v.get(i) ? (w.add(s), y(e)) : (b.add(i), u--)) : (l(n, r), u--);
        }
        for (; u--; ) {
            const e = t[u];
            p.has(e.key) || l(e, r);
        }
        for (; f; ) y(m[f - 1]);
        return m;
    }
    function kt(t, e, n) {
        const s = t.$$.props[e];
        void 0 !== s && ((t.$$.bound[s] = n), n(t.$$.ctx[s]));
    }
    function xt(t) {
        t && t.c();
    }
    function $t(t, e, n) {
        const { fragment: i, on_mount: o, on_destroy: l, after_update: c } = t.$$;
        i && i.m(e, n),
            et(() => {
                const e = o.map(s).filter(r);
                l ? l.push(...e) : a(e), (t.$$.on_mount = []);
            }),
            c.forEach(et);
    }
    function St(t, e) {
        const n = t.$$;
        null !== n.fragment && (a(n.on_destroy), n.fragment && n.fragment.d(e), (n.on_destroy = n.fragment = null), (n.ctx = []));
    }
    function zt(e, n, s, r, o, l, c = [-1]) {
        const d = M;
        q(e);
        const h = n.props || {},
            u = (e.$$ = {
                fragment: null,
                ctx: null,
                props: l,
                update: t,
                not_equal: o,
                bound: i(),
                on_mount: [],
                on_destroy: [],
                before_update: [],
                after_update: [],
                context: new Map(d ? d.$$.context : []),
                callbacks: i(),
                dirty: c,
                skip_bound: !1,
            });
        let f = !1;
        if (
            ((u.ctx = s
                ? s(e, h, (t, n, ...s) => {
                      const i = s.length ? s[0] : n;
                      return (
                          u.ctx &&
                              o(u.ctx[t], (u.ctx[t] = i)) &&
                              (!u.skip_bound && u.bound[t] && u.bound[t](i),
                              f &&
                                  (function (t, e) {
                                      -1 === t.$$.dirty[0] && (K.push(t), Q(), t.$$.dirty.fill(0)), (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
                                  })(e, t)),
                          n
                      );
                  })
                : []),
            u.update(),
            (f = !0),
            a(u.before_update),
            (u.fragment = !!r && r(u.ctx)),
            n.target)
        ) {
            if (n.hydrate) {
                const t = (function (t) {
                    return Array.from(t.childNodes);
                })(n.target);
                u.fragment && u.fragment.l(t), t.forEach(k);
            } else u.fragment && u.fragment.c();
            n.intro && _t(e.$$.fragment), $t(e, n.target, n.anchor), at();
        }
        q(d);
    }
    class Et {
        $destroy() {
            St(this, 1), (this.$destroy = t);
        }
        $on(t, e) {
            const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return (
                n.push(e),
                () => {
                    const t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1);
                }
            );
        }
        $set(t) {
            var e;
            this.$$set && ((e = t), 0 !== Object.keys(e).length) && ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
        }
    }
    const At = [];
    function Ct(e, n = t) {
        let s;
        const i = [];
        function a(t) {
            if (o(e, t) && ((e = t), s)) {
                const t = !At.length;
                for (let t = 0; t < i.length; t += 1) {
                    const n = i[t];
                    n[1](), At.push(n, e);
                }
                if (t) {
                    for (let t = 0; t < At.length; t += 2) At[t][0](At[t + 1]);
                    At.length = 0;
                }
            }
        }
        return {
            set: a,
            update: function (t) {
                a(t(e));
            },
            subscribe: function (r, o = t) {
                const l = [r, o];
                return (
                    i.push(l),
                    1 === i.length && (s = n(a) || t),
                    r(e),
                    () => {
                        const t = i.indexOf(l);
                        -1 !== t && i.splice(t, 1), 0 === i.length && (s(), (s = null));
                    }
                );
            },
        };
    }
    const Rt = localStorage.getItem("version") ? Ct(localStorage.getItem("version")) : Ct(0);
    Rt.subscribe((t) => {
        localStorage.setItem("version", t);
    });
    const Ot = localStorage.getItem("theme") ? Ct(localStorage.getItem("theme")) : Ct("dark");
    Ot.subscribe((t) => {
        localStorage.setItem("theme", t);
    });
    const Lt = localStorage.getItem("active") ? Ct(localStorage.getItem("active")) : Ct("Home");
    Lt.subscribe((t) => {
        localStorage.setItem("active", t);
    });
    const jt = localStorage.getItem("term") ? Ct(JSON.parse(localStorage.getItem("term"))) : Ct({});
    jt.subscribe((t) => {
        localStorage.setItem("term", JSON.stringify(t));
    });
    const Nt = localStorage.getItem("courses") ? Ct(JSON.parse(localStorage.getItem("courses"))) : Ct([]);
    Nt.subscribe((t) => {
        localStorage.setItem("courses", JSON.stringify(t));
    });
    const It = localStorage.getItem("options")
        ? Ct(JSON.parse(localStorage.getItem("options")))
        : Ct({
              randomize: !1,
              allow_empty: !1,
              max_schedules: 500,
              min_seats: 1,
              day_restrictions: { monday: !0, tuesday: !0, wednesday: !0, thursday: !0, friday: !0, saturday: !0, sunday: !0 },
              early_time: "07:00",
              late_time: "20:00",
              time_restrictions: {},
          });
    It.subscribe((t) => {
        localStorage.setItem("options", JSON.stringify(t));
    });
    const Zt = localStorage.getItem("tutorial") ? Ct(JSON.parse(localStorage.getItem("tutorial"))) : Ct({ courses: !1, schedules: !1 });
    Zt.subscribe((t) => {
        localStorage.setItem("tutorial", JSON.stringify(t));
    });
    const Tt = sessionStorage.getItem("crns") ? Ct(JSON.parse(sessionStorage.getItem("crns"))) : Ct([]);
    Tt.subscribe((t) => {
        sessionStorage.setItem("crns", JSON.stringify(t));
    });
    const Ut = sessionStorage.getItem("schedules") ? Ct(JSON.parse(sessionStorage.getItem("schedules"))) : Ct([]);
    Ut.subscribe((t) => {
        sessionStorage.setItem("schedules", JSON.stringify(t));
    });
    const Dt = sessionStorage.getItem("pinned") ? Ct(JSON.parse(sessionStorage.getItem("pinned"))) : Ct([]);
    Dt.subscribe((t) => {
        sessionStorage.setItem("pinned", JSON.stringify(t));
    });
    const Mt = (t) => ({ matches: 1 & t }),
        Bt = (t) => ({ matches: t[0] });
    function Ft(t) {
        let e;
        const n = t[4].default,
            s = c(n, t, t[3], Bt);
        return {
            c() {
                s && s.c();
            },
            m(t, n) {
                s && s.m(t, n), (e = !0);
            },
            p(t, [e]) {
                s && s.p && 9 & e && h(s, n, t, t[3], e, Mt, Bt);
            },
            i(t) {
                e || (_t(s, t), (e = !0));
            },
            o(t) {
                gt(s, t), (e = !1);
            },
            d(t) {
                s && s.d(t);
            },
        };
    }
    function Ht(t, e, n) {
        let s,
            i,
            { $$slots: a = {}, $$scope: r } = e,
            { query: o } = e,
            l = !1,
            c = !1;
        function d() {
            s && i && s.removeListener(i);
        }
        return (
            J(
                () => (
                    n(2, (l = !0)),
                    () => {
                        d();
                    }
                )
            ),
            (t.$$set = (t) => {
                "query" in t && n(1, (o = t.query)), "$$scope" in t && n(3, (r = t.$$scope));
            }),
            (t.$$.update = () => {
                6 & t.$$.dirty &&
                    l &&
                    (d(),
                    (function (t) {
                        (s = window.matchMedia(t)), (i = (t) => n(0, (c = t.matches))), s.addListener(i), n(0, (c = s.matches));
                    })(o));
            }),
            [c, o, l, r, a]
        );
    }
    class qt extends Et {
        constructor(t) {
            super(), zt(this, t, Ht, Ft, o, { query: 1 });
        }
    }
    function Pt(t, { delay: n = 0, duration: s = 400, easing: i = e }) {
        const a = +getComputedStyle(t).opacity;
        return { delay: n, duration: s, easing: i, css: (t) => "opacity: " + t * a };
    }
    function Jt(e) {
        let n;
        return {
            c() {
                (n = x("div")), N(n, "height", "5%"), C(n, "class", "svelte-ittju3");
            },
            m(t, e) {
                y(t, n, e);
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                t && k(n);
            },
        };
    }
    function Kt(t) {
        let e, n, s, i;
        return (
            (n = new qt({ props: { query: "(min-width: 750px)", $$slots: { default: [Yt, ({ matches: t }) => ({ 7: t }), ({ matches: t }) => (t ? 128 : 0)] }, $$scope: { ctx: t } } })),
            {
                c() {
                    (e = x("header")), xt(n.$$.fragment), C(e, "class", (s = u(t[1]) + " svelte-ittju3")), C(e, "id", "header");
                },
                m(t, s) {
                    y(t, e, s), $t(n, e, null), (i = !0);
                },
                p(t, a) {
                    const r = {};
                    385 & a && (r.$$scope = { dirty: a, ctx: t }), n.$set(r), (!i || (2 & a && s !== (s = u(t[1]) + " svelte-ittju3"))) && C(e, "class", s);
                },
                i(t) {
                    i || (_t(n.$$.fragment, t), (i = !0));
                },
                o(t) {
                    gt(n.$$.fragment, t), (i = !1);
                },
                d(t) {
                    t && k(e), St(n);
                },
            }
        );
    }
    function Wt(t) {
        let e;
        return {
            c() {
                (e = x("h1")), (e.textContent = "Coursaholic"), C(e, "class", "svelte-ittju3");
            },
            m(t, n) {
                y(t, e, n);
            },
            d(t) {
                t && k(e);
            },
        };
    }
    function Yt(t) {
        let e,
            n,
            s,
            i,
            r,
            o,
            l,
            c,
            d,
            h,
            u,
            f,
            _,
            g,
            m,
            p,
            v = t[7] && Wt();
        return {
            c() {
                v && v.c(),
                    (e = z()),
                    (n = x("nav")),
                    (s = x("ul")),
                    (i = x("li")),
                    (r = x("span")),
                    (o = S("HOME")),
                    (l = z()),
                    (c = x("li")),
                    (d = x("span")),
                    (h = S("COURSES")),
                    (u = z()),
                    (f = x("li")),
                    (_ = x("span")),
                    (g = S("SCHEDULE")),
                    N(r, "color", t[0] === t[2][0] ? "#00316E" : ""),
                    C(r, "class", "svelte-ittju3"),
                    C(i, "class", "svelte-ittju3"),
                    N(d, "color", t[0] === t[2][1] ? "#00316E" : ""),
                    C(d, "class", "svelte-ittju3"),
                    C(c, "class", "svelte-ittju3"),
                    N(_, "color", t[0] === t[2][2] ? "#00316E" : ""),
                    C(_, "class", "svelte-ittju3"),
                    C(f, "class", "svelte-ittju3"),
                    C(s, "class", "svelte-ittju3"),
                    C(n, "id", "nav"),
                    N(n, "right", t[7] ? "1.5em" : ""),
                    C(n, "class", "svelte-ittju3");
            },
            m(a, b) {
                v && v.m(a, b),
                    y(a, e, b),
                    y(a, n, b),
                    w(n, s),
                    w(s, i),
                    w(i, r),
                    w(r, o),
                    w(s, l),
                    w(s, c),
                    w(c, d),
                    w(d, h),
                    w(s, u),
                    w(s, f),
                    w(f, _),
                    w(_, g),
                    m || ((p = [A(r, "click", t[3]), A(d, "click", t[4]), A(_, "click", t[5])]), (m = !0));
            },
            p(t, s) {
                t[7] ? v || ((v = Wt()), v.c(), v.m(e.parentNode, e)) : v && (v.d(1), (v = null)),
                    1 & s && N(r, "color", t[0] === t[2][0] ? "#00316E" : ""),
                    1 & s && N(d, "color", t[0] === t[2][1] ? "#00316E" : ""),
                    1 & s && N(_, "color", t[0] === t[2][2] ? "#00316E" : ""),
                    128 & s && N(n, "right", t[7] ? "1.5em" : "");
            },
            d(t) {
                v && v.d(t), t && k(e), t && k(n), (m = !1), a(p);
            },
        };
    }
    function Gt(t) {
        let e, n, s, i;
        const a = [Kt, Jt],
            r = [];
        return (
            (e = 0),
            (n = r[0] = a[0](t)),
            {
                c() {
                    n.c(), (s = E());
                },
                m(t, e) {
                    r[0].m(t, e), y(t, s, e), (i = !0);
                },
                p(t, [e]) {
                    n.p(t, e);
                },
                i(t) {
                    i || (_t(n), (i = !0));
                },
                o(t) {
                    gt(n), (i = !1);
                },
                d(t) {
                    r[0].d(t), t && k(s);
                },
            }
        );
    }
    function Xt(t, e, n) {
        let s, i;
        l(t, Lt, (t) => n(0, (s = t))), l(t, Ot, (t) => n(1, (i = t)));
        let a = ["Home", "Select Courses", "Choose Schedule"];
        return [s, i, a, () => Lt.set(a[0]), () => Lt.set(a[1]), () => Lt.set(a[2])];
    }
    class Vt extends Et {
        constructor(t) {
            super(), zt(this, t, Xt, Gt, o, {});
        }
    }
    function Qt(t, e, n) {
        const s = t.slice();
        return (s[14] = e[n]), s;
    }
    function te(t) {
        let e,
            n,
            s,
            i,
            a = t[1],
            r = [];
        for (let e = 0; e < a.length; e += 1) r[e] = ee(Qt(t, a, e));
        return {
            c() {
                e = x("select");
                for (let t = 0; t < r.length; t += 1) r[t].c();
                C(e, "class", (n = u(t[5]) + " svelte-1iveuxb")), void 0 === t[0] && et(() => t[6].call(e));
            },
            m(n, a) {
                y(n, e, a);
                for (let t = 0; t < r.length; t += 1) r[t].m(e, null);
                I(e, t[0]), s || ((i = A(e, "change", t[6])), (s = !0));
            },
            p(t, s) {
                if (3 & s) {
                    let n;
                    for (a = t[1], n = 0; n < a.length; n += 1) {
                        const i = Qt(t, a, n);
                        r[n] ? r[n].p(i, s) : ((r[n] = ee(i)), r[n].c(), r[n].m(e, null));
                    }
                    for (; n < r.length; n += 1) r[n].d(1);
                    r.length = a.length;
                }
                32 & s && n !== (n = u(t[5]) + " svelte-1iveuxb") && C(e, "class", n), 3 & s && I(e, t[0]);
            },
            d(t) {
                t && k(e),
                    (function (t, e) {
                        for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
                    })(r, t),
                    (s = !1),
                    i();
            },
        };
    }
    function ee(t) {
        let e,
            n,
            s,
            i,
            a,
            r = t[14].description + "";
        return {
            c() {
                (e = x("option")), (n = S(r)), (s = z()), (e.__value = i = t[14]), (e.value = e.__value), (e.selected = a = JSON.stringify(t[0]) === JSON.stringify(t[14]) ? "selected" : "");
            },
            m(t, i) {
                y(t, e, i), w(e, n), w(e, s);
            },
            p(t, s) {
                2 & s && r !== (r = t[14].description + "") && L(n, r),
                    2 & s && i !== (i = t[14]) && ((e.__value = i), (e.value = e.__value)),
                    3 & s && a !== (a = JSON.stringify(t[0]) === JSON.stringify(t[14]) ? "selected" : "") && (e.selected = a);
            },
            d(t) {
                t && k(e);
            },
        };
    }
    function ne(e) {
        let n,
            s,
            i,
            a,
            r,
            o,
            l,
            c,
            d,
            h,
            f,
            _,
            g,
            m,
            p,
            v,
            b,
            $,
            E,
            R,
            O,
            j,
            I,
            Z,
            T,
            U,
            D,
            M,
            B,
            F,
            H,
            q = e[1].length && te(e);
        return {
            c() {
                (n = x("div")),
                    (s = x("span")),
                    (s.textContent = "UC Riverside current term:"),
                    (i = z()),
                    q && q.c(),
                    (a = z()),
                    (r = x("div")),
                    (o = x("span")),
                    (o.textContent = "Undergraduate 17 unit maximum lifted in: "),
                    (l = x("span")),
                    (c = S(e[2])),
                    (h = z()),
                    (f = x("div")),
                    (_ = x("span")),
                    (_.textContent = "Next term ("),
                    (g = x("span")),
                    (m = S(e[4])),
                    (v = x("span")),
                    (v.textContent = ") info will be available in: "),
                    (b = x("span")),
                    

                    ($ = S(e[4])),
                    (R = z()),
                    (O = x("hr")),
                    (j = z()),
                    (I = x("h1")),
                    (I.textContent = "Automated college scheduler & course reviews"),
                    (Z = z()),
                    (T = x("footer")),
                    (U = x("span")),

                    (D = S("")),
                    (M = S(e[5])),
                    (B = S(" mode")),
                    C(s, "class", "svelte-1iveuxb"),
                    C(n, "class", "svelte-1iveuxb"),
                    C(o, "class", "svelte-1iveuxb"),
                    C(l, "class", (d = u(e[5]) + " svelte-1iveuxb")),
                    C(r, "class", "svelte-1iveuxb"),
                    C(_, "class", "svelte-1iveuxb"),
                    C(g, "class", (p = u(e[5]) + " svelte-1iveuxb")),
                    C(v, "class", "svelte-1iveuxb"),
                    C(b, "class", (E = u(e[5]) + " svelte-1iveuxb")),
                    C(f, "class", "svelte-1iveuxb"),
                    N(O, "border-top", "1px solid #bbb"),
                    N(O, "width", "50%"),
                    N(O, "margin-top", "1em"),
                    C(I, "class", "svelte-1iveuxb"),
                    C(U, "class", "toggle svelte-1iveuxb"),
                    N(T, "position", "absolute"),
                    N(T, "width", "100%"),
                    N(T, "bottom", "1em");
            },
            m(t, d) {
                y(t, n, d),
                    w(n, s),
                    w(n, i),
                    q && q.m(n, null),
                    y(t, a, d),
                    y(t, r, d),
                    w(r, o),
                    w(r, l),
                    w(l, c),
                    y(t, h, d),
                    y(t, f, d),
                    w(f, _),
                    w(f, g),
                    w(g, m),
                    w(f, v),
                    w(f, b),
                    w(b, $),
                    y(t, R, d),
                    y(t, O, d),
                    y(t, j, d),
                    y(t, I, d),
                    y(t, Z, d),
                    y(t, T, d),
                    w(T, U),
                    w(U, D),
                    w(U, M),
                    w(U, B),
                    F || ((H = A(U, "click", e[7])), (F = !0));
            },
            p(t, [e]) {
                t[1].length ? (q ? q.p(t, e) : ((q = te(t)), q.c(), q.m(n, null))) : q && (q.d(1), (q = null)),
                    4 & e && L(c, t[2]),
                    32 & e && d !== (d = u(t[5]) + " svelte-1iveuxb") && C(l, "class", d),
                    16 & e && L(m, t[4]),
                    32 & e && p !== (p = u(t[5]) + " svelte-1iveuxb") && C(g, "class", p),
                    8 & e && L($, t[3]),
                    32 & e && E !== (E = u(t[5]) + " svelte-1iveuxb") && C(b, "class", E),
                    32 & e && L(M, t[5]);
            },
            i: t,
            o: t,
            d(t) {
                t && k(n), q && q.d(), t && k(a), t && k(r), t && k(h), t && k(f), t && k(R), t && k(O), t && k(j), t && k(I), t && k(Z), t && k(T), (F = !1), H();
            },
        };
    }
    function se(t, e, n) {
        let s, i;
        l(t, jt, (t) => n(11, (s = t))), l(t, Ot, (t) => n(5, (i = t)));
        let a,
            r,
            o = {},
            c = [],
            d = "0:00:00:00",
            h = "0:00:00:00",
            u = "";
        function f() {
            !s || (!Object.keys(s).length && c.length) ? (Nt.set([]), jt.set(c[0])) : Object.keys(o).length && JSON.stringify(o) !== JSON.stringify(s) && (Nt.set([]), jt.set(o)),
                n(0, (o = s)),
                (r = new Date(s.next_term_data_date).getTime()),
                (a = new Date(s.undergrad_limit_date).getTime()),
                n(4, (u = s.next_term)),
                _();
        }
        function _() {
            let t = a - new Date().getTime(),
                e = Math.floor(t / 864e5).toString(),
                s = Math.floor((t % 864e5) / 36e5).toString(),
                i = Math.floor((t % 36e5) / 6e4).toString(),
                o = Math.floor((t % 6e4) / 1e3).toString();
            n(2, (d = e < 0 ? "0 days, 00:00:00" : `${e} days, ${s.padStart(2, "0")}:${i.padStart(2, "0")}:${o.padStart(2, "0")}`)),
                (t = r - new Date().getTime()),
                (e = Math.floor(t / 864e5).toString()),
                (s = Math.floor((t % 864e5) / 36e5).toString()),
                (i = Math.floor((t % 36e5) / 6e4).toString()),
                (o = Math.floor((t % 6e4) / 1e3).toString()),
                n(3, (h = e < 0 ? "0 days, 00:00:00" : `${e} days, ${s.padStart(2, "0")}:${i.padStart(2, "0")}:${o.padStart(2, "0")}`));
        }
        fetch("json/terms.json")
            .then((t) => t.json())
            .then((t) => {
                n(1, (c = t)),
                    f(),
                    setInterval(function () {
                        _();
                    }, 1e3);
            });
        return (
            (t.$$.update = () => {
                1 & t.$$.dirty && f();
            }),
            [
                o,
                c,
                d,
                h,
                u,
                i,
                function () {
                    (o = (function (t) {
                        const e = t.querySelector(":checked") || t.options[0];
                        return e && e.__value;
                    })(this)),
                        n(0, o),
                        n(1, c);
                },
                () => {
                    Ot.set("dark" == i ? "light" : "dark");
                },
            ]
        );
    }
    class ie extends Et {
        constructor(t) {
            super(), zt(this, t, se, ne, o, {});
        }
    }
    function ae(t, e, n) {
        const s = t.slice();
        return (s[27] = e[n]), s;
    }
    const re = (t) => ({ item: 16 & t }),
        oe = (t) => ({ item: t[27].data });
    function le(t, e) {
        let n, s, i;
        const a = e[15].default,
            r = c(a, e, e[14], oe),
            o =
                r ||
                (function (t) {
                    let e;
                    return {
                        c() {
                            e = S("Missing template");
                        },
                        m(t, n) {
                            y(t, e, n);
                        },
                        d(t) {
                            t && k(e);
                        },
                    };
                })();
        return {
            key: t,
            first: null,
            c() {
                (n = x("svelte-virtual-list-row")), o && o.c(), (s = z()), R(n, "class", "svelte-1jpk03l"), (this.first = n);
            },
            m(t, e) {
                y(t, n, e), o && o.m(n, null), w(n, s), (i = !0);
            },
            p(t, n) {
                (e = t), r && r.p && 16400 & n && h(r, a, e, e[14], n, re, oe);
            },
            i(t) {
                i || (_t(o, t), (i = !0));
            },
            o(t) {
                gt(o, t), (i = !1);
            },
            d(t) {
                t && k(n), o && o.d(t);
            },
        };
    }
    function ce(t) {
        let e,
            n,
            s,
            i,
            r,
            o,
            l,
            c,
            d = [],
            h = new Map(),
            u = t[4];
        const f = (t) => t[27].index;
        for (let e = 0; e < u.length; e += 1) {
            let n = ae(t, u, e),
                s = f(n);
            h.set(s, (d[e] = le(s, n)));
        }
        return {
            c() {
                (e = x("svelte-virtual-list-viewport")), (n = x("svelte-virtual-list-contents"));
                for (let t = 0; t < d.length; t += 1) d[t].c();
                (i = z()),
                    (r = x("div")),
                    N(n, "padding-top", t[5] + "px"),
                    N(n, "padding-bottom", t[6] + "px"),
                    R(n, "class", "svelte-1jpk03l"),
                    N(e, "height", t[0]),
                    R(e, "class", "svelte-1jpk03l"),
                    et(() => t[18].call(e)),
                    C(r, "class", "back-to-top svelte-1jpk03l");
            },
            m(a, h) {
                y(a, e, h), w(e, n);
                for (let t = 0; t < d.length; t += 1) d[t].m(n, null);
                t[16](n),
                    t[17](e),
                    (s = (function (t, e) {
                        "static" === getComputedStyle(t).position && (t.style.position = "relative");
                        const n = x("iframe");
                        n.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),
                            n.setAttribute("aria-hidden", "true"),
                            (n.tabIndex = -1);
                        const s = T();
                        let i;
                        return (
                            s
                                ? ((n.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
                                  (i = A(window, "message", (t) => {
                                      t.source === n.contentWindow && e();
                                  })))
                                : ((n.src = "about:blank"),
                                  (n.onload = () => {
                                      i = A(n.contentWindow, "resize", e);
                                  })),
                            w(t, n),
                            () => {
                                (s || (i && n.contentWindow)) && i(), k(n);
                            }
                        );
                    })(e, t[18].bind(e))),
                    y(a, i, h),
                    y(a, r, h),
                    (o = !0),
                    l || ((c = [A(e, "scroll", t[7]), A(r, "click", t[8])]), (l = !0));
            },
            p(t, [s]) {
                16400 & s && ((u = t[4]), ut(), (d = yt(d, s, f, 1, t, u, h, n, wt, le, null, ae)), ft()),
                    (!o || 32 & s) && N(n, "padding-top", t[5] + "px"),
                    (!o || 64 & s) && N(n, "padding-bottom", t[6] + "px"),
                    (!o || 1 & s) && N(e, "height", t[0]);
            },
            i(t) {
                if (!o) {
                    for (let t = 0; t < u.length; t += 1) _t(d[t]);
                    o = !0;
                }
            },
            o(t) {
                for (let t = 0; t < d.length; t += 1) gt(d[t]);
                o = !1;
            },
            d(n) {
                n && k(e);
                for (let t = 0; t < d.length; t += 1) d[t].d();
                t[16](null), t[17](null), s(), n && k(i), n && k(r), (l = !1), a(c);
            },
        };
    }
    function de(t, e, n) {
        let s,
            i,
            a,
            r,
            o,
            l,
            { $$slots: c = {}, $$scope: d } = e,
            { items: h } = e,
            { height: u = "100%" } = e,
            { itemHeight: f } = e,
            { start: _ = 0 } = e,
            { end: g = 0 } = e,
            m = [],
            p = 0,
            v = 0,
            b = 0;
        async function w() {
            const { scrollTop: t } = i;
            await tt();
            let e = v - t,
                a = _;
            for (; e < p && a < h.length; ) {
                let t = s[a - _];
                t || (n(10, (g = a + 1)), await tt(), (t = s[a - _]));
                (e += m[a] = f || t.offsetHeight), (a += 1);
            }
            n(10, (g = a));
            const r = h.length - g;
            (l = (v + e) / g), n(6, (b = r * l)), (m.length = h.length);
        }
        async function y() {
            const { scrollTop: t } = i,
                e = _;
            for (let t = 0; t < s.length; t += 1) m[_ + t] = f || s[t].offsetHeight;
            let a = 0,
                r = 0;
            for (; a < h.length; ) {
                const e = m[a] || l;
                if (r + e > t) {
                    n(9, (_ = a)), n(5, (v = r));
                    break;
                }
                (r += e), (a += 1);
            }
            for (; a < h.length && ((r += m[a] || l), (a += 1), !(r > t + p)); );
            n(10, (g = a));
            const o = h.length - g;
            for (l = r / g; a < h.length; ) m[a++] = l;
            if ((n(6, (b = o * l)), _ < e)) {
                await tt();
                let n = 0,
                    a = 0;
                for (let t = _; t < e; t += 1) s[t - _] && ((n += m[t]), (a += f || s[t - _].offsetHeight));
                const r = a - n;
                i.scrollTo(0, t + r);
            }
        }
        return (
            h.length,
            J(() => {
                (s = a.getElementsByTagName("svelte-virtual-list-row")), n(13, (o = !0));
            }),
            (t.$$set = (t) => {
                "items" in t && n(11, (h = t.items)),
                    "height" in t && n(0, (u = t.height)),
                    "itemHeight" in t && n(12, (f = t.itemHeight)),
                    "start" in t && n(9, (_ = t.start)),
                    "end" in t && n(10, (g = t.end)),
                    "$$scope" in t && n(14, (d = t.$$scope));
            }),
            (t.$$.update = () => {
                3584 & t.$$.dirty && n(4, (r = h.slice(_, g).map((t, e) => ({ index: e + _, data: t })))),
                    12290 & t.$$.dirty && o && w(),
                    10240 & t.$$.dirty &&
                        o &&
                        h &&
                        (async function () {
                            let t = h.length;
                            if (((s = a.getElementsByTagName("svelte-virtual-list-row")), n(5, (v = 0)), n(6, (b = 0)), (m = []), 0 == t)) return n(9, (_ = 0)), void n(10, (g = 0));
                            _ > h.length - 1 && (n(9, (_ = h.length - 1)), n(10, (g = h.length - 1))), w(), y();
                        })(),
                    2048 & t.$$.dirty && h.length;
            }),
            [
                u,
                p,
                i,
                a,
                r,
                v,
                b,
                y,
                async function () {
                    await tt(), i.scrollTo(0, 0);
                },
                _,
                g,
                h,
                f,
                o,
                d,
                c,
                function (t) {
                    W[t ? "unshift" : "push"](() => {
                        (a = t), n(3, a);
                    });
                },
                function (t) {
                    W[t ? "unshift" : "push"](() => {
                        (i = t), n(2, i);
                    });
                },
                function () {
                    (p = this.offsetHeight), n(1, p);
                },
            ]
        );
    }
    class he extends Et {
        constructor(t) {
            super(), zt(this, t, de, ce, o, { items: 11, height: 0, itemHeight: 12, start: 9, end: 10 });
        }
    }
    function ue(t) {
        let e, n;
        return (
            (e = new qt({ props: { query: "(max-width: 500px)", $$slots: { default: [fe, ({ matches: t }) => ({ 9: t }), ({ matches: t }) => (t ? 512 : 0)] }, $$scope: { ctx: t } } })),
            {
                c() {
                    xt(e.$$.fragment);
                },
                m(t, s) {
                    $t(e, t, s), (n = !0);
                },
                p(t, n) {
                    const s = {};
                    799 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
                },
                i(t) {
                    n || (_t(e.$$.fragment, t), (n = !0));
                },
                o(t) {
                    gt(e.$$.fragment, t), (n = !1);
                },
                d(t) {
                    St(e, t);
                },
            }
        );
    }
    function fe(t) {
        let e, n, s, i, r, o, l, d, u, f, _, g, m, p;
        const v = t[5].default,
            b = c(v, t, t[8], null);
        return {
            c() {
                (e = x("div")),
                    (n = x("div")),
                    (s = x("div")),
                    (s.innerHTML = '<svg width="36" height="36" viewBox="0 0 24 24"><path d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg>'),
                    (i = z()),
                    (r = x("div")),
                    (o = x("div")),
                    (l = z()),
                    b && b.c(),
                    (d = z()),
                    (u = x("div")),
                    C(s, "class", "close svelte-1sqbfhv"),
                    C(o, "class", "spacer svelte-1sqbfhv"),
                    C(u, "class", "spacer svelte-1sqbfhv"),
                    C(r, "class", "container svelte-1sqbfhv"),
                    C(n, "class", (f = "modal " + t[4] + " svelte-1sqbfhv")),
                    N(n, "max-width", t[9] ? "100%" : t[1]),
                    N(n, "height", t[2]),
                    N(n, "max-height", t[9] ? "90%" : "70%"),
                    N(n, "margin", t[9] && parseInt(t[2]) < 50 ? parseInt(t[2]) / 2 + "% 0" : "5% auto"),
                    C(e, "class", "backdrop svelte-1sqbfhv"),
                    N(e, "visibility", t[3] ? "visible" : "hidden");
            },
            m(a, c) {
                var h;
                y(a, e, c),
                    w(e, n),
                    w(n, s),
                    w(n, i),
                    w(n, r),
                    w(r, o),
                    w(r, l),
                    b && b.m(r, null),
                    w(r, d),
                    w(r, u),
                    (g = !0),
                    m ||
                        ((p = [
                            A(s, "click", t[6]),
                            A(
                                e,
                                "click",
                                ((h = t[7]),
                                function (t) {
                                    t.target === this && h.call(this, t);
                                })
                            ),
                        ]),
                        (m = !0));
            },
            p(t, s) {
                b && b.p && 256 & s && h(b, v, t, t[8], s, null, null),
                    (!g || (16 & s && f !== (f = "modal " + t[4] + " svelte-1sqbfhv"))) && C(n, "class", f),
                    (!g || 514 & s) && N(n, "max-width", t[9] ? "100%" : t[1]),
                    (!g || 4 & s) && N(n, "height", t[2]),
                    (!g || 512 & s) && N(n, "max-height", t[9] ? "90%" : "70%"),
                    (!g || 516 & s) && N(n, "margin", t[9] && parseInt(t[2]) < 50 ? parseInt(t[2]) / 2 + "% 0" : "5% auto"),
                    (!g || 8 & s) && N(e, "visibility", t[3] ? "visible" : "hidden");
            },
            i(t) {
                g ||
                    (_t(b, t),
                    et(() => {
                        _ || (_ = pt(e, Pt, { duration: 100 }, !0)), _.run(1);
                    }),
                    (g = !0));
            },
            o(t) {
                gt(b, t), _ || (_ = pt(e, Pt, { duration: 100 }, !1)), _.run(0), (g = !1);
            },
            d(t) {
                t && k(e), b && b.d(t), t && _ && _.end(), (m = !1), a(p);
            },
        };
    }
    function _e(t) {
        let e,
            n,
            s = t[0] && ue(t);
        return {
            c() {
                s && s.c(), (e = E());
            },
            m(t, i) {
                s && s.m(t, i), y(t, e, i), (n = !0);
            },
            p(t, [n]) {
                t[0]
                    ? s
                        ? (s.p(t, n), 1 & n && _t(s, 1))
                        : ((s = ue(t)), s.c(), _t(s, 1), s.m(e.parentNode, e))
                    : s &&
                      (ut(),
                      gt(s, 1, 1, () => {
                          s = null;
                      }),
                      ft());
            },
            i(t) {
                n || (_t(s), (n = !0));
            },
            o(t) {
                gt(s), (n = !1);
            },
            d(t) {
                s && s.d(t), t && k(e);
            },
        };
    }
    function ge(t, e, n) {
        let s;
        l(t, Ot, (t) => n(4, (s = t)));
        let { $$slots: i = {}, $$scope: a } = e,
            { showModal: r } = e,
            { width: o = "80%" } = e,
            { height: c = "40%" } = e,
            { backdrop: d = !0 } = e;
        return (
            (t.$$set = (t) => {
                "showModal" in t && n(0, (r = t.showModal)), "width" in t && n(1, (o = t.width)), "height" in t && n(2, (c = t.height)), "backdrop" in t && n(3, (d = t.backdrop)), "$$scope" in t && n(8, (a = t.$$scope));
            }),
            [r, o, c, d, s, i, () => n(0, (r = !r)), () => n(0, (r = !r)), a]
        );
    }
    class me extends Et {
        constructor(t) {
            super(), zt(this, t, ge, _e, o, { showModal: 0, width: 1, height: 2, backdrop: 3 });
        }
    }
    function pe(t, e, n) {
        const s = t.slice();
        return (s[14] = e[n]), (s[16] = n), s;
    }
    function ve(e) {
        let n, s, i;
        return {
            c() {
                (n = x("button")), (n.textContent = "Add course"), C(n, "class", "add svelte-jytgrh");
            },
            m(t, a) {
                y(t, n, a), s || ((i = A(n, "click", e[10])), (s = !0));
            },
            p: t,
            d(t) {
                t && k(n), (s = !1), i();
            },
        };
    }
    function be(t, e) {
        let n,
            s,
            i,
            a,
            r,
            o,
            l,
            c,
            d = e[14].date + "",
            h = e[14].rating + "",
            u = e[14].comment + "";
        return {
            key: t,
            first: null,
            c() {
                (n = x("div")), (s = x("span")), (i = S(d)), (a = S(" - Difficulty Rating: ")), (r = S(h)), (o = S("/10")), (l = x("br")), (c = S(u)), N(s, "font-weight", "bold"), C(n, "class", "comment svelte-jytgrh"), (this.first = n);
            },
            m(t, e) {
                y(t, n, e), w(n, s), w(s, i), w(s, a), w(s, r), w(s, o), w(n, l), w(n, c);
            },
            p(t, n) {
                (e = t), 8 & n && d !== (d = e[14].date + "") && L(i, d), 8 & n && h !== (h = e[14].rating + "") && L(r, h), 8 & n && u !== (u = e[14].comment + "") && L(c, u);
            },
            d(t) {
                t && k(n);
            },
        };
    }
    function we(t) {
        let e,
            n,
            s,
            i,
            a,
            r,
            o,
            l,
            c,
            d,
            h,
            u,
            f,
            _,
            g = t[3].length + "",
            m = [],
            p = new Map(),
            v = t[13] && ve(t),
            b = t[3];
        const $ = (t) => t[14];
        for (let e = 0; e < b.length; e += 1) {
            let n = pe(t, b, e),
                s = $(n);
            p.set(s, (m[e] = be(s, n)));
        }
        return {
            c() {
                (e = x("h2")), (n = S(t[0])), (s = z()), v && v.c(), (i = z()), (a = x("h3")), (r = S("Difficulty: ")), (o = S(t[2])), (l = z()), (c = x("h3")), (d = S("Difficulty Reviews (")), (h = S(g)), (u = S("):")), (f = z());
                for (let t = 0; t < m.length; t += 1) m[t].c();
                (_ = E()), C(e, "class", "svelte-jytgrh"), C(a, "class", "svelte-jytgrh"), C(c, "class", "svelte-jytgrh");
            },
            m(t, g) {
                y(t, e, g), w(e, n), y(t, s, g), v && v.m(t, g), y(t, i, g), y(t, a, g), w(a, r), w(a, o), y(t, l, g), y(t, c, g), w(c, d), w(c, h), w(c, u), y(t, f, g);
                for (let e = 0; e < m.length; e += 1) m[e].m(t, g);
                y(t, _, g);
            },
            p(t, e) {
                1 & e && L(n, t[0]),
                    t[13] ? (v ? v.p(t, e) : ((v = ve(t)), v.c(), v.m(i.parentNode, i))) : v && (v.d(1), (v = null)),
                    4 & e && L(o, t[2]),
                    8 & e && g !== (g = t[3].length + "") && L(h, g),
                    8 & e && ((b = t[3]), (m = yt(m, e, $, 1, t, b, p, _.parentNode, bt, be, _, pe)));
            },
            d(t) {
                t && k(e), t && k(s), v && v.d(t), t && k(i), t && k(a), t && k(l), t && k(c), t && k(f);
                for (let e = 0; e < m.length; e += 1) m[e].d(t);
                t && k(_);
            },
        };
    }
    function ye(t) {
        let e, n, s, i, r, o, l, c, d, h, u, f, _, g, m, p, v, b;
        function $(e) {
            t[11].call(null, e);
        }
        let E = { width: "60%", height: 40 * Math.max(t[3].length, 1) + "%", $$slots: { default: [we] }, $$scope: { ctx: t } };
        function R(...e) {
            return t[12](t[13], ...e);
        }
        return (
            void 0 !== t[4] && (E.showModal = t[4]),
            (e = new me({ props: E })),
            W.push(() => kt(e, "showModal", $)),
            {
                c() {
                    xt(e.$$.fragment),
                        (s = z()),
                        (i = x("div")),
                        (r = x("h2")),
                        (o = S(t[0])),
                        (l = z()),
                        (c = x("span")),
                        (d = S("(")),
                        (h = S(t[2])),
                        (u = S(")")),
                        (f = z()),
                        (_ = x("p")),
                        (g = S(t[1])),
                        C(r, "class", "font svelte-jytgrh"),
                        N(r, "display", "inline-block"),
                        C(c, "class", "font svelte-jytgrh"),
                        C(_, "class", "font svelte-jytgrh"),
                        C(i, "class", (m = "card " + t[6] + " svelte-jytgrh")),
                        U(i, "active", t[5]);
                },
                m(n, a) {
                    var m;
                    $t(e, n, a),
                        y(n, s, a),
                        y(n, i, a),
                        w(i, r),
                        w(r, o),
                        w(i, l),
                        w(i, c),
                        w(c, d),
                        w(c, h),
                        w(c, u),
                        w(i, f),
                        w(i, _),
                        w(_, g),
                        (p = !0),
                        v ||
                            ((b = [
                                A(
                                    c,
                                    "click",
                                    ((m = t[8]),
                                    function (t) {
                                        return t.stopPropagation(), m.call(this, t);
                                    })
                                ),
                                A(i, "click", R),
                            ]),
                            (v = !0));
                },
                p(s, a) {
                    t = s;
                    const r = {};
                    8 & a && (r.height = 40 * Math.max(t[3].length, 1) + "%"),
                        139277 & a && (r.$$scope = { dirty: a, ctx: t }),
                        !n && 16 & a && ((n = !0), (r.showModal = t[4]), nt(() => (n = !1))),
                        e.$set(r),
                        (!p || 1 & a) && L(o, t[0]),
                        (!p || 4 & a) && L(h, t[2]),
                        (!p || 2 & a) && L(g, t[1]),
                        (!p || (64 & a && m !== (m = "card " + t[6] + " svelte-jytgrh"))) && C(i, "class", m),
                        96 & a && U(i, "active", t[5]);
                },
                i(t) {
                    p || (_t(e.$$.fragment, t), (p = !0));
                },
                o(t) {
                    gt(e.$$.fragment, t), (p = !1);
                },
                d(t) {
                    St(e, t), t && k(s), t && k(i), (v = !1), a(b);
                },
            }
        );
    }
    function ke(t) {
        let e, n;
        return (
            (e = new qt({ props: { query: "(max-width: 500px)", $$slots: { default: [ye, ({ matches: t }) => ({ 13: t }), ({ matches: t }) => (t ? 8192 : 0)] }, $$scope: { ctx: t } } })),
            {
                c() {
                    xt(e.$$.fragment);
                },
                m(t, s) {
                    $t(e, t, s), (n = !0);
                },
                p(t, [n]) {
                    const s = {};
                    139391 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
                },
                i(t) {
                    n || (_t(e.$$.fragment, t), (n = !0));
                },
                o(t) {
                    gt(e.$$.fragment, t), (n = !1);
                },
                d(t) {
                    St(e, t);
                },
            }
        );
    }
    function xe(t, e, n) {
        let s, i, a;
        l(t, Nt, (t) => n(9, (i = t))), l(t, Ot, (t) => n(6, (a = t)));
        let { name: r } = e,
            { content: o } = e,
            { difficulty: c } = e,
            { comments: d } = e;
        function h(t) {
            n(4, (u = !1)), Ut.set([]), Dt.set([]);
            let e = i;
            -1 == e.indexOf(r) && (e = [...e, r]), Nt.set(e);
        }
        let u = !1;
        function f() {
            n(4, (u = !u));
        }
        return (
            (t.$$set = (t) => {
                "name" in t && n(0, (r = t.name)), "content" in t && n(1, (o = t.content)), "difficulty" in t && n(2, (c = t.difficulty)), "comments" in t && n(3, (d = t.comments));
            }),
            (t.$$.update = () => {
                513 & t.$$.dirty && n(5, (s = -1 != i.indexOf(r)));
            }),
            [
                r,
                o,
                c,
                d,
                u,
                s,
                a,
                h,
                f,
                i,
                (t) => h(),
                function (t) {
                    (u = t), n(4, u);
                },
                (t, e) => {
                    t ? f() : h();
                },
            ]
        );
    }
    class $e extends Et {
        constructor(t) {
            super(), zt(this, t, xe, ke, o, { name: 0, content: 1, difficulty: 2, comments: 3 });
        }
    }
    function Se(t, e, n) {
        const s = t.slice();
        return (s[38] = e[n]), (s[40] = n), s;
    }
    function ze(t) {
        let e, n, s, i, a, r, o, l, c;
        return {
            c() {
                (e = x("h1")),
                    (e.textContent = "Select Courses"),
                    (n = z()),
                    (s = x("ul")),
                    (s.innerHTML =
                        '<li style="text-align:left" class="svelte-nac83n">The number to the right of each course&#39;s title is its average difficulty based on student reviews (if available)</li> \n\t\t\t<li style="text-align:left" class="svelte-nac83n">Click on the course card to add it to the selected courses list</li> \n\t\t\t<li style="text-align:left" class="svelte-nac83n">Click on the average difficulty rating to show the student reviews</li> \n\t\t\t<li style="text-align:left" class="svelte-nac83n">Click on a course in the selected courses list to remove it</li> \n\t\t\t<li style="text-align:left" class="svelte-nac83n">Data taken from the UCR course database on Reddit</li>'),
                    (i = z()),
                    (a = x("div")),
                    (r = x("input")),
                    (o = x("label")),
                    (o.textContent = "Never show again"),
                    N(e, "margin", "0"),
                    C(e, "class", "svelte-nac83n"),
                    N(s, "max-width", "80%"),
                    C(s, "class", "svelte-nac83n"),
                    C(r, "id", "show_again"),
                    C(r, "type", "checkbox"),
                    C(r, "class", "svelte-nac83n"),
                    C(o, "for", "show_again"),
                    N(o, "display", "inline"),
                    C(o, "class", "svelte-nac83n"),
                    C(a, "class", "svelte-nac83n");
            },
            m(d, h) {
                y(d, e, h), y(d, n, h), y(d, s, h), y(d, i, h), y(d, a, h), w(a, r), (r.checked = t[6].courses), w(a, o), l || ((c = A(r, "change", t[15])), (l = !0));
            },
            p(t, e) {
                64 & e[0] && (r.checked = t[6].courses);
            },
            d(t) {
                t && k(e), t && k(n), t && k(s), t && k(i), t && k(a), (l = !1), c();
            },
        };
    }
    function Ee(t) {
        let e, s;
        const i = [t[41]];
        let a = {};
        for (let t = 0; t < i.length; t += 1) a = n(a, i[t]);
        return (
            (e = new $e({ props: a })),
            {
                c() {
                    xt(e.$$.fragment);
                },
                m(t, n) {
                    $t(e, t, n), (s = !0);
                },
                p(t, n) {
                    const s =
                        1024 & n[1]
                            ? (function (t, e) {
                                  const n = {},
                                      s = {},
                                      i = { $$scope: 1 };
                                  let a = t.length;
                                  for (; a--; ) {
                                      const r = t[a],
                                          o = e[a];
                                      if (o) {
                                          for (const t in r) t in o || (s[t] = 1);
                                          for (const t in o) i[t] || ((n[t] = o[t]), (i[t] = 1));
                                          t[a] = o;
                                      } else for (const t in r) i[t] = 1;
                                  }
                                  for (const t in s) t in n || (n[t] = void 0);
                                  return n;
                              })(i, [((a = t[41]), "object" == typeof a && null !== a ? a : {})])
                            : {};
                    var a;
                    e.$set(s);
                },
                i(t) {
                    s || (_t(e.$$.fragment, t), (s = !0));
                },
                o(t) {
                    gt(e.$$.fragment, t), (s = !1);
                },
                d(t) {
                    St(e, t);
                },
            }
        );
    }
    function Ae(e) {
        let n;
        return {
            c() {
                (n = x("h2")), (n.textContent = "No courses"), C(n, "class", "svelte-nac83n");
            },
            m(t, e) {
                y(t, n, e);
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                t && k(n);
            },
        };
    }
    function Ce(e) {
        let n,
            s = [],
            i = new Map(),
            a = e[8];
        const r = (t) => t[38];
        for (let t = 0; t < a.length; t += 1) {
            let n = Se(e, a, t),
                o = r(n);
            i.set(o, (s[t] = Re(o, n)));
        }
        return {
            c() {
                for (let t = 0; t < s.length; t += 1) s[t].c();
                n = E();
            },
            m(t, e) {
                for (let n = 0; n < s.length; n += 1) s[n].m(t, e);
                y(t, n, e);
            },
            p(t, e) {
                2816 & e[0] && ((a = t[8]), (s = yt(s, e, r, 1, t, a, i, n.parentNode, bt, Re, n, Se)));
            },
            i(t) {
                for (let t = 0; t < a.length; t += 1) _t(s[t]);
            },
            o: t,
            d(t) {
                for (let e = 0; e < s.length; e += 1) s[e].d(t);
                t && k(n);
            },
        };
    }
    function Re(n, s) {
        let i,
            a,
            o,
            l,
            c,
            d,
            h,
            u,
            f = s[38] + "";
        return {
            key: n,
            first: null,
            c() {
                (i = x("div")), (a = x("h2")), (o = S(f)), (l = z()), C(a, "class", "svelte-nac83n"), C(i, "class", (c = "card " + s[9] + " svelte-nac83n")), (this.first = i);
            },
            m(t, e) {
                y(t, i, e),
                    w(i, a),
                    w(a, o),
                    w(i, l),
                    h ||
                        ((u = A(i, "click", function () {
                            r(s[11](s[38])) && s[11](s[38]).apply(this, arguments);
                        })),
                        (h = !0));
            },
            p(t, e) {
                (s = t), 256 & e[0] && f !== (f = s[38] + "") && L(o, f), 512 & e[0] && c !== (c = "card " + s[9] + " svelte-nac83n") && C(i, "class", c);
            },
            i(n) {
                d ||
                    et(() => {
                        (d = (function (n, s, i) {
                            let a,
                                o,
                                l = s(n, i),
                                c = !1,
                                d = 0;
                            function h() {
                                a && H(n, a);
                            }
                            function u() {
                                const { delay: s = 0, duration: i = 300, easing: r = e, tick: u = t, css: f } = l || mt;
                                f && (a = F(n, 0, 1, i, s, r, f, d++)), u(0, 1);
                                const _ = g() + s,
                                    m = _ + i;
                                o && o.abort(),
                                    (c = !0),
                                    et(() => ct(n, !0, "start")),
                                    (o = b((t) => {
                                        if (c) {
                                            if (t >= m) return u(1, 0), ct(n, !0, "end"), h(), (c = !1);
                                            if (t >= _) {
                                                const e = r((t - _) / i);
                                                u(e, 1 - e);
                                            }
                                        }
                                        return c;
                                    }));
                            }
                            let f = !1;
                            return {
                                start() {
                                    f || (H(n), r(l) ? ((l = l()), lt().then(u)) : u());
                                },
                                invalidate() {
                                    f = !1;
                                },
                                end() {
                                    c && (h(), (c = !1));
                                },
                            };
                        })(i, Pt, { delay: 10 })),
                            d.start();
                    });
            },
            o: t,
            d(t) {
                t && k(i), (h = !1), u();
            },
        };
    }
    function Oe(t) {
        let e,
            n,
            s,
            i,
            r,
            o,
            l,
            c,
            d,
            h,
            u,
            f,
            _,
            g,
            m,
            p,
            v,
            b,
            $,
            E,
            R,
            I,
            Z,
            T,
            U,
            D,
            M,
            B,
            F,
            H,
            q,
            P,
            J,
            K,
            Y,
            G,
            X,
            V,
            Q,
            tt,
            st,
            it,
            at,
            rt,
            ot,
            lt,
            ct,
            dt,
            ht,
            ut,
            ft,
            mt,
            pt,
            vt,
            bt,
            wt,
            yt,
            zt,
            Et,
            At,
            Ct,
            Rt,
            Ot,
            Lt,
            jt,
            Nt,
            It,
            Zt,
            Tt,
            Ut,
            Dt,
            Mt,
            Bt,
            Ft,
            Ht,
            qt,
            Pt,
            Jt,
            Kt,
            Wt,
            Yt,
            Gt,
            Xt,
            Vt,
            Qt,
            te,
            ee,
            ne,
            se,
            ie,
            ae,
            re,
            oe,
            le,
            ce,
            de = t[8].length + "";
        et(t[14]);
        let ue =
            t[10] &&
            (function (t) {
                let e, n;
                return (
                    (e = new me({ props: { showModal: "true", width: (t[4] > 1024 ? 35 : 60) + "%", height: "60%", $$slots: { default: [ze] }, $$scope: { ctx: t } } })),
                    {
                        c() {
                            xt(e.$$.fragment);
                        },
                        m(t, s) {
                            $t(e, t, s), (n = !0);
                        },
                        p(t, n) {
                            const s = {};
                            16 & n[0] && (s.width = (t[4] > 1024 ? 35 : 60) + "%"), (64 & n[0]) | (2048 & n[1]) && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
                        },
                        i(t) {
                            n || (_t(e.$$.fragment, t), (n = !0));
                        },
                        o(t) {
                            gt(e.$$.fragment, t), (n = !1);
                        },
                        d(t) {
                            St(e, t);
                        },
                    }
                );
            })(t);
        function fe(e) {
            t[18].call(null, e);
        }
        function _e(e) {
            t[19].call(null, e);
        }
        let ge = { items: t[7], height: "100%", $$slots: { default: [Ee, ({ item: t }) => ({ 41: t }), ({ item: t }) => [0, t ? 1024 : 0]] }, $$scope: { ctx: t } };
        function pe(t, e) {
            return t[8].length ? Ce : Ae;
        }
        void 0 !== t[2] && (ge.start = t[2]), void 0 !== t[3] && (ge.end = t[3]), (R = new he({ props: ge })), W.push(() => kt(R, "start", fe)), W.push(() => kt(R, "end", _e));
        let ve = pe(t),
            be = ve(t);
        return {
            c() {
                ue && ue.c(),
                    (e = z()),
                    (n = x("div")),
                    (s = x("div")),
                    (i = x("h1")),
                    (i.textContent = "Filter: "),
                    (r = z()),
                    (o = x("input")),
                    (l = z()),
                    (c = x("div")),
                    (d = x("h1")),
                    (h = S("Selected (")),
                    (u = S(de)),
                    (f = S("):")),
                    (_ = z()),
                    (g = x("div")),
                    (g.innerHTML = '<h1 style="display:inline;" class="svelte-nac83n">Scheduler Options:</h1>'),
                    (m = z()),
                    (p = x("hr")),
                    (v = z()),
                    (b = x("div")),
                    ($ = x("div")),
                    (E = x("div")),
                    xt(R.$$.fragment),
                    (T = z()),
                    (U = x("div")),
                    (D = x("div")),
                    be.c(),
                    (M = z()),
                    (B = x("h2")),
                    (B.textContent = "Clear All"),
                    (F = z()),
                    (H = x("div")),
                    (q = x("div")),
                    (P = x("input")),
                    (J = x("label")),
                    (J.textContent = "Randomize generated schedule order"),
                    (K = z()),
                    (Y = x("div")),
                    (G = x("input")),
                    (X = x("label")),
                    (X.textContent = "Allow sections without meeting times"),
                    (V = z()),
                    (Q = x("div")),
                    (tt = x("label")),
                    (st = S("Generate a maximum of ")),
                    (it = x("input")),
                    (at = S(" schedule(s)")),
                    (rt = z()),
                    (ot = x("div")),
                    (lt = x("label")),
                    (ct = S("Only find sections with a minimum of ")),
                    (dt = x("input")),
                    (ht = S(" seat(s)")),
                    (ut = z()),
                    (ft = x("div")),
                    (mt = x("label")),
                    (pt = S("Only find sections that start after\r\n\t\t\t")),
                    (vt = x("input")),
                    (wt = z()),
                    (yt = x("input")),
                    (Et = z()),
                    (At = x("div")),
                    (Ct = x("label")),
                    (Rt = S("Only find sections that end before\r\n\t\t\t")),
                    (Ot = x("input")),
                    (jt = z()),
                    (Nt = x("input")),
                    (Zt = z()),
                    (Tt = x("div")),
                    (Ut = x("span")),
                    (Ut.textContent = "Only find sections that meet on the following days:"),
                    (Dt = z()),
                    (Mt = x("div")),
                    (Bt = x("input")),
                    (Ft = x("label")),
                    (Ft.textContent = "Mon"),
                    (Ht = z()),
                    (qt = x("input")),
                    (Pt = x("label")),
                    (Pt.textContent = "Tue"),
                    (Jt = z()),
                    (Kt = x("input")),
                    (Wt = x("label")),
                    (Wt.textContent = "Wed"),
                    (Yt = z()),
                    (Gt = x("input")),
                    (Xt = x("label")),
                    (Xt.textContent = "Thu"),
                    (Vt = z()),
                    (Qt = x("input")),
                    (te = x("label")),
                    (te.textContent = "Fri"),
                    (ee = z()),
                    (ne = x("input")),
                    (se = x("label")),
                    (se.textContent = "Sat"),
                    (ie = z()),
                    (ae = x("input")),
                    (re = x("label")),
                    (re.textContent = "Sun"),
                    C(i, "for", "search"),
                    N(i, "display", "inline"),
                    C(i, "class", "svelte-nac83n"),
                    C(o, "type", "text"),
                    C(o, "id", "search"),
                    N(o, "display", "inline"),
                    N(o, "width", "50%"),
                    N(o, "padding", "0.5%"),
                    C(o, "class", "svelte-nac83n"),
                    C(s, "class", "header list svelte-nac83n"),
                    N(d, "display", "inline"),
                    C(d, "class", "svelte-nac83n"),
                    C(c, "class", "header selected svelte-nac83n"),
                    C(g, "class", "header options svelte-nac83n"),
                    C(n, "class", "svelte-nac83n"),
                    N(p, "border-top", "1px solid #bbb"),
                    N(p, "width", "100%"),
                    C(p, "class", "svelte-nac83n"),
                    N(E, "height", "100%"),
                    C(E, "class", "svelte-nac83n"),
                    C($, "class", "container list svelte-nac83n"),
                    C(B, "class", "container clear svelte-nac83n"),
                    N(D, "height", "90%"),
                    N(D, "overflow", "auto"),
                    C(D, "class", "svelte-nac83n"),
                    C(U, "class", "container selected svelte-nac83n"),
                    C(P, "id", "randomize"),
                    C(P, "type", "checkbox"),
                    C(P, "class", "svelte-nac83n"),
                    C(J, "class", "randomize svelte-nac83n"),
                    C(J, "for", "randomize"),
                    N(q, "display", "flex"),
                    N(q, "align-items", "center"),
                    N(q, "justify-content", "center"),
                    C(q, "class", "svelte-nac83n"),
                    C(G, "id", "allow_empty"),
                    C(G, "type", "checkbox"),
                    C(G, "class", "svelte-nac83n"),
                    C(X, "class", "allow_empty svelte-nac83n"),
                    C(X, "for", "allow_empty"),
                    N(Y, "display", "flex"),
                    N(Y, "align-items", "center"),
                    N(Y, "justify-content", "center"),
                    C(Y, "class", "svelte-nac83n"),
                    C(it, "id", "max_schedule"),
                    C(it, "type", "number"),
                    C(it, "min", "0"),
                    C(it, "max", "9999"),
                    C(it, "class", "svelte-nac83n"),
                    C(tt, "class", "max_schedule svelte-nac83n"),
                    C(tt, "for", "max_schedule"),
                    C(Q, "class", "svelte-nac83n"),
                    C(dt, "id", "min_seats"),
                    C(dt, "type", "number"),
                    C(dt, "min", "0"),
                    C(dt, "class", "svelte-nac83n"),
                    C(lt, "class", "min_seats svelte-nac83n"),
                    C(lt, "for", "min_seats"),
                    C(ot, "class", "svelte-nac83n"),
                    C(vt, "id", "start_after"),
                    C(vt, "type", "checkbox"),
                    (vt.checked = bt = t[1].time_restrictions.hasOwnProperty("early")),
                    C(vt, "class", "svelte-nac83n"),
                    N(yt, "height", "1.5em"),
                    C(yt, "type", "time"),
                    (yt.disabled = zt = !t[1].time_restrictions.hasOwnProperty("early")),
                    C(yt, "class", "svelte-nac83n"),
                    C(mt, "class", "start_after svelte-nac83n"),
                    C(mt, "for", "start_after"),
                    C(ft, "class", "svelte-nac83n"),
                    C(Ot, "id", "end_before"),
                    C(Ot, "type", "checkbox"),
                    (Ot.checked = Lt = t[1].time_restrictions.hasOwnProperty("late")),
                    C(Ot, "class", "svelte-nac83n"),
                    N(Nt, "height", "1.5em"),
                    C(Nt, "type", "time"),
                    (Nt.disabled = It = !t[1].time_restrictions.hasOwnProperty("late")),
                    C(Nt, "class", "svelte-nac83n"),
                    C(Ct, "class", "end_before svelte-nac83n"),
                    C(Ct, "for", "end_before"),
                    C(At, "class", "svelte-nac83n"),
                    N(Ut, "margin-bottom", "0em"),
                    C(Ut, "class", "svelte-nac83n"),
                    C(Bt, "id", "monday"),
                    C(Bt, "type", "checkbox"),
                    C(Bt, "class", "svelte-nac83n"),
                    C(Ft, "for", "monday"),
                    C(Ft, "class", "svelte-nac83n"),
                    C(qt, "id", "tuesday"),
                    C(qt, "type", "checkbox"),
                    C(qt, "class", "svelte-nac83n"),
                    C(Pt, "for", "tuesday"),
                    C(Pt, "class", "svelte-nac83n"),
                    C(Kt, "id", "wednesday"),
                    C(Kt, "type", "checkbox"),
                    C(Kt, "class", "svelte-nac83n"),
                    C(Wt, "for", "wednesday"),
                    C(Wt, "class", "svelte-nac83n"),
                    C(Gt, "id", "thursday"),
                    C(Gt, "type", "checkbox"),
                    C(Gt, "class", "svelte-nac83n"),
                    C(Xt, "for", "thursday"),
                    C(Xt, "class", "svelte-nac83n"),
                    C(Qt, "id", "friday"),
                    C(Qt, "type", "checkbox"),
                    C(Qt, "class", "svelte-nac83n"),
                    C(te, "for", "friday"),
                    C(te, "class", "svelte-nac83n"),
                    C(ne, "id", "saturday"),
                    C(ne, "type", "checkbox"),
                    C(ne, "class", "svelte-nac83n"),
                    C(se, "for", "saturday"),
                    C(se, "class", "svelte-nac83n"),
                    C(ae, "id", "sunday"),
                    C(ae, "type", "checkbox"),
                    C(ae, "class", "svelte-nac83n"),
                    C(re, "for", "sunday"),
                    C(re, "class", "svelte-nac83n"),
                    C(Mt, "class", "svelte-nac83n"),
                    C(Tt, "class", "days svelte-nac83n"),
                    C(H, "class", "container options svelte-nac83n"),
                    C(b, "class", "container list wrap svelte-nac83n"),
                    N(b, "height", t[5] - 130 + "px");
            },
            m(a, k) {
                ue && ue.m(a, k),
                    y(a, e, k),
                    y(a, n, k),
                    w(n, s),
                    w(s, i),
                    w(s, r),
                    w(s, o),
                    j(o, t[0]),
                    w(n, l),
                    w(n, c),
                    w(c, d),
                    w(d, h),
                    w(d, u),
                    w(d, f),
                    w(n, _),
                    w(n, g),
                    y(a, m, k),
                    y(a, p, k),
                    y(a, v, k),
                    y(a, b, k),
                    w(b, $),
                    w($, E),
                    $t(R, E, null),
                    w(b, T),
                    w(b, U),
                    w(U, D),
                    be.m(D, null),
                    w(D, M),
                    w(D, B),
                    w(b, F),
                    w(b, H),
                    w(H, q),
                    w(q, P),
                    (P.checked = t[1].randomize),
                    w(q, J),
                    w(H, K),
                    w(H, Y),
                    w(Y, G),
                    (G.checked = t[1].allow_empty),
                    w(Y, X),
                    w(H, V),
                    w(H, Q),
                    w(Q, tt),
                    w(tt, st),
                    w(tt, it),
                    j(it, t[1].max_schedules),
                    w(tt, at),
                    w(H, rt),
                    w(H, ot),
                    w(ot, lt),
                    w(lt, ct),
                    w(lt, dt),
                    j(dt, t[1].min_seats),
                    w(lt, ht),
                    w(H, ut),
                    w(H, ft),
                    w(ft, mt),
                    w(mt, pt),
                    w(mt, vt),
                    w(mt, wt),
                    w(mt, yt),
                    j(yt, t[1].early_time),
                    w(H, Et),
                    w(H, At),
                    w(At, Ct),
                    w(Ct, Rt),
                    w(Ct, Ot),
                    w(Ct, jt),
                    w(Ct, Nt),
                    j(Nt, t[1].late_time),
                    w(H, Zt),
                    w(H, Tt),
                    w(Tt, Ut),
                    w(Tt, Dt),
                    w(Tt, Mt),
                    w(Mt, Bt),
                    (Bt.checked = t[1].day_restrictions.monday),
                    w(Mt, Ft),
                    w(Mt, Ht),
                    w(Mt, qt),
                    (qt.checked = t[1].day_restrictions.tuesday),
                    w(Mt, Pt),
                    w(Mt, Jt),
                    w(Mt, Kt),
                    (Kt.checked = t[1].day_restrictions.wednesday),
                    w(Mt, Wt),
                    w(Mt, Yt),
                    w(Mt, Gt),
                    (Gt.checked = t[1].day_restrictions.thursday),
                    w(Mt, Xt),
                    w(Mt, Vt),
                    w(Mt, Qt),
                    (Qt.checked = t[1].day_restrictions.friday),
                    w(Mt, te),
                    w(Mt, ee),
                    w(Mt, ne),
                    (ne.checked = t[1].day_restrictions.saturday),
                    w(Mt, se),
                    w(Mt, ie),
                    w(Mt, ae),
                    (ae.checked = t[1].day_restrictions.sunday),
                    w(Mt, re),
                    (oe = !0),
                    le ||
                        ((ce = [
                            A(window, "resize", t[14]),
                            A(o, "input", t[16]),
                            A(o, "click", t[17]),
                            A(B, "click", t[12]),
                            A(P, "change", t[20]),
                            A(G, "change", t[21]),
                            A(it, "input", t[22]),
                            A(dt, "input", t[23]),
                            A(vt, "change", t[24]),
                            A(yt, "input", t[25]),
                            A(yt, "change", t[26]),
                            A(Ot, "change", t[27]),
                            A(Nt, "input", t[28]),
                            A(Nt, "change", t[29]),
                            A(Bt, "change", t[30]),
                            A(qt, "change", t[31]),
                            A(Kt, "change", t[32]),
                            A(Gt, "change", t[33]),
                            A(Qt, "change", t[34]),
                            A(ne, "change", t[35]),
                            A(ae, "change", t[36]),
                        ]),
                        (le = !0));
            },
            p(t, e) {
                t[10] && ue.p(t, e), 1 & e[0] && o.value !== t[0] && j(o, t[0]), (!oe || 256 & e[0]) && de !== (de = t[8].length + "") && L(u, de);
                const n = {};
                128 & e[0] && (n.items = t[7]),
                    3072 & e[1] && (n.$$scope = { dirty: e, ctx: t }),
                    !I && 4 & e[0] && ((I = !0), (n.start = t[2]), nt(() => (I = !1))),
                    !Z && 8 & e[0] && ((Z = !0), (n.end = t[3]), nt(() => (Z = !1))),
                    R.$set(n),
                    ve === (ve = pe(t)) && be ? be.p(t, e) : (be.d(1), (be = ve(t)), be && (be.c(), _t(be, 1), be.m(D, M))),
                    2 & e[0] && (P.checked = t[1].randomize),
                    2 & e[0] && (G.checked = t[1].allow_empty),
                    2 & e[0] && O(it.value) !== t[1].max_schedules && j(it, t[1].max_schedules),
                    2 & e[0] && O(dt.value) !== t[1].min_seats && j(dt, t[1].min_seats),
                    (!oe || (2 & e[0] && bt !== (bt = t[1].time_restrictions.hasOwnProperty("early")))) && (vt.checked = bt),
                    (!oe || (2 & e[0] && zt !== (zt = !t[1].time_restrictions.hasOwnProperty("early")))) && (yt.disabled = zt),
                    2 & e[0] && j(yt, t[1].early_time),
                    (!oe || (2 & e[0] && Lt !== (Lt = t[1].time_restrictions.hasOwnProperty("late")))) && (Ot.checked = Lt),
                    (!oe || (2 & e[0] && It !== (It = !t[1].time_restrictions.hasOwnProperty("late")))) && (Nt.disabled = It),
                    2 & e[0] && j(Nt, t[1].late_time),
                    2 & e[0] && (Bt.checked = t[1].day_restrictions.monday),
                    2 & e[0] && (qt.checked = t[1].day_restrictions.tuesday),
                    2 & e[0] && (Kt.checked = t[1].day_restrictions.wednesday),
                    2 & e[0] && (Gt.checked = t[1].day_restrictions.thursday),
                    2 & e[0] && (Qt.checked = t[1].day_restrictions.friday),
                    2 & e[0] && (ne.checked = t[1].day_restrictions.saturday),
                    2 & e[0] && (ae.checked = t[1].day_restrictions.sunday),
                    (!oe || 32 & e[0]) && N(b, "height", t[5] - 130 + "px");
            },
            i(t) {
                oe || (_t(ue), _t(R.$$.fragment, t), _t(be), (oe = !0));
            },
            o(t) {
                gt(ue), gt(R.$$.fragment, t), (oe = !1);
            },
            d(t) {
                ue && ue.d(t), t && k(e), t && k(n), t && k(m), t && k(p), t && k(v), t && k(b), St(R), be.d(), (le = !1), a(ce);
            },
        };
    }
    function Le(t, e, n) {
        let s, i, a, r, o, c;
        l(t, It, (t) => n(1, (i = t))), l(t, Zt, (t) => n(6, (a = t))), l(t, jt, (t) => n(37, (r = t))), l(t, Nt, (t) => n(8, (o = t))), l(t, Ot, (t) => n(9, (c = t)));
        const d = !a.courses;
        let { items: h = [] } = e;
        fetch("https://jcurda-api.herokuapp.com/"),
            fetch("json/ratings.json")
                .then((t) => t.json())
                .then((t) => {
                    fetch(`json/${r.code}.json`)
                        .then((t) => t.json())
                        .then((e) => {
                            e.forEach((e) => {
                                let s = {};
                                (s.name = e.code),
                                    (s.content = e.description),
                                    t.hasOwnProperty(e.code) ? ((s.difficulty = t[e.code].average), (s.comments = t[e.code].comments.reverse())) : ((s.difficulty = "---"), (s.comments = [])),
                                    n(13, (h = [...h, s]));
                            });
                        });
                });
        let u,
            _,
            g = "";
        let m = 0,
            p = 0;
        return (
            (t.$$set = (t) => {
                "items" in t && n(13, (h = t.items));
            }),
            (t.$$.update = () => {
                2 & t.$$.dirty[0] && (Ut.set([]), Dt.set([])), 8193 & t.$$.dirty[0] && n(7, (s = h.filter((t) => -1 !== t.name.toLowerCase().indexOf(g.toLowerCase()))));
            }),
            [
                g,
                i,
                u,
                _,
                m,
                p,
                a,
                s,
                o,
                c,
                d,
                function (t) {
                    Ut.set([]), Dt.set([]);
                    let e = o;
                    e.splice(e.indexOf(t), 1), Nt.set(e);
                },
                function () {
                    Ut.set([]), Dt.set([]), Nt.set([]);
                },
                h,
                function () {
                    n(4, (m = window.innerWidth)), n(5, (p = window.innerHeight));
                },
                function () {
                    (a.courses = this.checked), Zt.set(a);
                },
                function () {
                    (g = this.value), n(0, g);
                },
                (t) => {
                    (t.target.value = ""), n(0, (g = ""));
                },
                function (t) {
                    (u = t), n(2, u);
                },
                function (t) {
                    (_ = t), n(3, _);
                },
                function () {
                    (i.randomize = this.checked), It.set(i);
                },
                function () {
                    (i.allow_empty = this.checked), It.set(i);
                },
                function () {
                    (i.max_schedules = O(this.value)), It.set(i);
                },
                function () {
                    (i.min_seats = O(this.value)), It.set(i);
                },
                (t) => {
                    t.target.checked ? f(It, (i.time_restrictions.early = { start: "0:00", end: i.early_time }), i) : delete i.time_restrictions.early, It.set(i);
                },
                function () {
                    (i.early_time = this.value), It.set(i);
                },
                () => {
                    f(It, (i.time_restrictions.early = { start: "0:00", end: i.early_time }), i), It.set(i);
                },
                (t) => {
                    t.target.checked ? f(It, (i.time_restrictions.late = { start: i.late_time, end: "24:00" }), i) : delete i.time_restrictions.late, It.set(i);
                },
                function () {
                    (i.late_time = this.value), It.set(i);
                },
                () => {
                    f(It, (i.time_restrictions.late = { start: i.late_time, end: "24:00" }), i), It.set(i);
                },
                function () {
                    (i.day_restrictions.monday = this.checked), It.set(i);
                },
                function () {
                    (i.day_restrictions.tuesday = this.checked), It.set(i);
                },
                function () {
                    (i.day_restrictions.wednesday = this.checked), It.set(i);
                },
                function () {
                    (i.day_restrictions.thursday = this.checked), It.set(i);
                },
                function () {
                    (i.day_restrictions.friday = this.checked), It.set(i);
                },
                function () {
                    (i.day_restrictions.saturday = this.checked), It.set(i);
                },
                function () {
                    (i.day_restrictions.sunday = this.checked), It.set(i);
                },
            ]
        );
    }
    class je extends Et {
        constructor(t) {
            super(), zt(this, t, Le, Oe, o, { items: 13 }, [-1, -1]);
        }
    }
    /*! pako 2.0.4 https://github.com/nodeca/pako @license (MIT AND Zlib) */ function Ne(t) {
        let e = t.length;
        for (; --e >= 0; ) t[e] = 0;
    }
    const Ie = 256,
        Ze = 286,
        Te = 30,
        Ue = 15,
        De = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
        Me = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
        Be = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
        Fe = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        He = new Array(576);
    Ne(He);
    const qe = new Array(60);
    Ne(qe);
    const Pe = new Array(512);
    Ne(Pe);
    const Je = new Array(256);
    Ne(Je);
    const Ke = new Array(29);
    Ne(Ke);
    const We = new Array(Te);
    function Ye(t, e, n, s, i) {
        (this.static_tree = t), (this.extra_bits = e), (this.extra_base = n), (this.elems = s), (this.max_length = i), (this.has_stree = t && t.length);
    }
    let Ge, Xe, Ve;
    function Qe(t, e) {
        (this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e);
    }
    Ne(We);
    const tn = (t) => (t < 256 ? Pe[t] : Pe[256 + (t >>> 7)]),
        en = (t, e) => {
            (t.pending_buf[t.pending++] = 255 & e), (t.pending_buf[t.pending++] = (e >>> 8) & 255);
        },
        nn = (t, e, n) => {
            t.bi_valid > 16 - n ? ((t.bi_buf |= (e << t.bi_valid) & 65535), en(t, t.bi_buf), (t.bi_buf = e >> (16 - t.bi_valid)), (t.bi_valid += n - 16)) : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += n));
        },
        sn = (t, e, n) => {
            nn(t, n[2 * e], n[2 * e + 1]);
        },
        an = (t, e) => {
            let n = 0;
            do {
                (n |= 1 & t), (t >>>= 1), (n <<= 1);
            } while (--e > 0);
            return n >>> 1;
        },
        rn = (t, e, n) => {
            const s = new Array(16);
            let i,
                a,
                r = 0;
            for (i = 1; i <= Ue; i++) s[i] = r = (r + n[i - 1]) << 1;
            for (a = 0; a <= e; a++) {
                let e = t[2 * a + 1];
                0 !== e && (t[2 * a] = an(s[e]++, e));
            }
        },
        on = (t) => {
            let e;
            for (e = 0; e < Ze; e++) t.dyn_ltree[2 * e] = 0;
            for (e = 0; e < Te; e++) t.dyn_dtree[2 * e] = 0;
            for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
            (t.dyn_ltree[512] = 1), (t.opt_len = t.static_len = 0), (t.last_lit = t.matches = 0);
        },
        ln = (t) => {
            t.bi_valid > 8 ? en(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0);
        },
        cn = (t, e, n, s) => {
            const i = 2 * e,
                a = 2 * n;
            return t[i] < t[a] || (t[i] === t[a] && s[e] <= s[n]);
        },
        dn = (t, e, n) => {
            const s = t.heap[n];
            let i = n << 1;
            for (; i <= t.heap_len && (i < t.heap_len && cn(e, t.heap[i + 1], t.heap[i], t.depth) && i++, !cn(e, s, t.heap[i], t.depth)); ) (t.heap[n] = t.heap[i]), (n = i), (i <<= 1);
            t.heap[n] = s;
        },
        hn = (t, e, n) => {
            let s,
                i,
                a,
                r,
                o = 0;
            if (0 !== t.last_lit)
                do {
                    (s = (t.pending_buf[t.d_buf + 2 * o] << 8) | t.pending_buf[t.d_buf + 2 * o + 1]),
                        (i = t.pending_buf[t.l_buf + o]),
                        o++,
                        0 === s ? sn(t, i, e) : ((a = Je[i]), sn(t, a + Ie + 1, e), (r = De[a]), 0 !== r && ((i -= Ke[a]), nn(t, i, r)), s--, (a = tn(s)), sn(t, a, n), (r = Me[a]), 0 !== r && ((s -= We[a]), nn(t, s, r)));
                } while (o < t.last_lit);
            sn(t, 256, e);
        },
        un = (t, e) => {
            const n = e.dyn_tree,
                s = e.stat_desc.static_tree,
                i = e.stat_desc.has_stree,
                a = e.stat_desc.elems;
            let r,
                o,
                l,
                c = -1;
            for (t.heap_len = 0, t.heap_max = 573, r = 0; r < a; r++) 0 !== n[2 * r] ? ((t.heap[++t.heap_len] = c = r), (t.depth[r] = 0)) : (n[2 * r + 1] = 0);
            for (; t.heap_len < 2; ) (l = t.heap[++t.heap_len] = c < 2 ? ++c : 0), (n[2 * l] = 1), (t.depth[l] = 0), t.opt_len--, i && (t.static_len -= s[2 * l + 1]);
            for (e.max_code = c, r = t.heap_len >> 1; r >= 1; r--) dn(t, n, r);
            l = a;
            do {
                (r = t.heap[1]),
                    (t.heap[1] = t.heap[t.heap_len--]),
                    dn(t, n, 1),
                    (o = t.heap[1]),
                    (t.heap[--t.heap_max] = r),
                    (t.heap[--t.heap_max] = o),
                    (n[2 * l] = n[2 * r] + n[2 * o]),
                    (t.depth[l] = (t.depth[r] >= t.depth[o] ? t.depth[r] : t.depth[o]) + 1),
                    (n[2 * r + 1] = n[2 * o + 1] = l),
                    (t.heap[1] = l++),
                    dn(t, n, 1);
            } while (t.heap_len >= 2);
            (t.heap[--t.heap_max] = t.heap[1]),
                ((t, e) => {
                    const n = e.dyn_tree,
                        s = e.max_code,
                        i = e.stat_desc.static_tree,
                        a = e.stat_desc.has_stree,
                        r = e.stat_desc.extra_bits,
                        o = e.stat_desc.extra_base,
                        l = e.stat_desc.max_length;
                    let c,
                        d,
                        h,
                        u,
                        f,
                        _,
                        g = 0;
                    for (u = 0; u <= Ue; u++) t.bl_count[u] = 0;
                    for (n[2 * t.heap[t.heap_max] + 1] = 0, c = t.heap_max + 1; c < 573; c++)
                        (d = t.heap[c]),
                            (u = n[2 * n[2 * d + 1] + 1] + 1),
                            u > l && ((u = l), g++),
                            (n[2 * d + 1] = u),
                            d > s || (t.bl_count[u]++, (f = 0), d >= o && (f = r[d - o]), (_ = n[2 * d]), (t.opt_len += _ * (u + f)), a && (t.static_len += _ * (i[2 * d + 1] + f)));
                    if (0 !== g) {
                        do {
                            for (u = l - 1; 0 === t.bl_count[u]; ) u--;
                            t.bl_count[u]--, (t.bl_count[u + 1] += 2), t.bl_count[l]--, (g -= 2);
                        } while (g > 0);
                        for (u = l; 0 !== u; u--) for (d = t.bl_count[u]; 0 !== d; ) (h = t.heap[--c]), h > s || (n[2 * h + 1] !== u && ((t.opt_len += (u - n[2 * h + 1]) * n[2 * h]), (n[2 * h + 1] = u)), d--);
                    }
                })(t, e),
                rn(n, c, t.bl_count);
        },
        fn = (t, e, n) => {
            let s,
                i,
                a = -1,
                r = e[1],
                o = 0,
                l = 7,
                c = 4;
            for (0 === r && ((l = 138), (c = 3)), e[2 * (n + 1) + 1] = 65535, s = 0; s <= n; s++)
                (i = r),
                    (r = e[2 * (s + 1) + 1]),
                    (++o < l && i === r) ||
                        (o < c ? (t.bl_tree[2 * i] += o) : 0 !== i ? (i !== a && t.bl_tree[2 * i]++, t.bl_tree[32]++) : o <= 10 ? t.bl_tree[34]++ : t.bl_tree[36]++,
                        (o = 0),
                        (a = i),
                        0 === r ? ((l = 138), (c = 3)) : i === r ? ((l = 6), (c = 3)) : ((l = 7), (c = 4)));
        },
        _n = (t, e, n) => {
            let s,
                i,
                a = -1,
                r = e[1],
                o = 0,
                l = 7,
                c = 4;
            for (0 === r && ((l = 138), (c = 3)), s = 0; s <= n; s++)
                if (((i = r), (r = e[2 * (s + 1) + 1]), !(++o < l && i === r))) {
                    if (o < c)
                        do {
                            sn(t, i, t.bl_tree);
                        } while (0 != --o);
                    else 0 !== i ? (i !== a && (sn(t, i, t.bl_tree), o--), sn(t, 16, t.bl_tree), nn(t, o - 3, 2)) : o <= 10 ? (sn(t, 17, t.bl_tree), nn(t, o - 3, 3)) : (sn(t, 18, t.bl_tree), nn(t, o - 11, 7));
                    (o = 0), (a = i), 0 === r ? ((l = 138), (c = 3)) : i === r ? ((l = 6), (c = 3)) : ((l = 7), (c = 4));
                }
        };
    let gn = !1;
    const mn = (t, e, n, s) => {
        nn(t, 0 + (s ? 1 : 0), 3),
            ((t, e, n, s) => {
                ln(t), s && (en(t, n), en(t, ~n)), t.pending_buf.set(t.window.subarray(e, e + n), t.pending), (t.pending += n);
            })(t, e, n, !0);
    };
    var pn = {
        _tr_init: (t) => {
            gn ||
                ((() => {
                    let t, e, n, s, i;
                    const a = new Array(16);
                    for (n = 0, s = 0; s < 28; s++) for (Ke[s] = n, t = 0; t < 1 << De[s]; t++) Je[n++] = s;
                    for (Je[n - 1] = s, i = 0, s = 0; s < 16; s++) for (We[s] = i, t = 0; t < 1 << Me[s]; t++) Pe[i++] = s;
                    for (i >>= 7; s < Te; s++) for (We[s] = i << 7, t = 0; t < 1 << (Me[s] - 7); t++) Pe[256 + i++] = s;
                    for (e = 0; e <= Ue; e++) a[e] = 0;
                    for (t = 0; t <= 143; ) (He[2 * t + 1] = 8), t++, a[8]++;
                    for (; t <= 255; ) (He[2 * t + 1] = 9), t++, a[9]++;
                    for (; t <= 279; ) (He[2 * t + 1] = 7), t++, a[7]++;
                    for (; t <= 287; ) (He[2 * t + 1] = 8), t++, a[8]++;
                    for (rn(He, 287, a), t = 0; t < Te; t++) (qe[2 * t + 1] = 5), (qe[2 * t] = an(t, 5));
                    (Ge = new Ye(He, De, 257, Ze, Ue)), (Xe = new Ye(qe, Me, 0, Te, Ue)), (Ve = new Ye(new Array(0), Be, 0, 19, 7));
                })(),
                (gn = !0)),
                (t.l_desc = new Qe(t.dyn_ltree, Ge)),
                (t.d_desc = new Qe(t.dyn_dtree, Xe)),
                (t.bl_desc = new Qe(t.bl_tree, Ve)),
                (t.bi_buf = 0),
                (t.bi_valid = 0),
                on(t);
        },
        _tr_stored_block: mn,
        _tr_flush_block: (t, e, n, s) => {
            let i,
                a,
                r = 0;
            t.level > 0
                ? (2 === t.strm.data_type &&
                      (t.strm.data_type = ((t) => {
                          let e,
                              n = 4093624447;
                          for (e = 0; e <= 31; e++, n >>>= 1) if (1 & n && 0 !== t.dyn_ltree[2 * e]) return 0;
                          if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return 1;
                          for (e = 32; e < Ie; e++) if (0 !== t.dyn_ltree[2 * e]) return 1;
                          return 0;
                      })(t)),
                  un(t, t.l_desc),
                  un(t, t.d_desc),
                  (r = ((t) => {
                      let e;
                      for (fn(t, t.dyn_ltree, t.l_desc.max_code), fn(t, t.dyn_dtree, t.d_desc.max_code), un(t, t.bl_desc), e = 18; e >= 3 && 0 === t.bl_tree[2 * Fe[e] + 1]; e--);
                      return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
                  })(t)),
                  (i = (t.opt_len + 3 + 7) >>> 3),
                  (a = (t.static_len + 3 + 7) >>> 3),
                  a <= i && (i = a))
                : (i = a = n + 5),
                n + 4 <= i && -1 !== e
                    ? mn(t, e, n, s)
                    : 4 === t.strategy || a === i
                    ? (nn(t, 2 + (s ? 1 : 0), 3), hn(t, He, qe))
                    : (nn(t, 4 + (s ? 1 : 0), 3),
                      ((t, e, n, s) => {
                          let i;
                          for (nn(t, e - 257, 5), nn(t, n - 1, 5), nn(t, s - 4, 4), i = 0; i < s; i++) nn(t, t.bl_tree[2 * Fe[i] + 1], 3);
                          _n(t, t.dyn_ltree, e - 1), _n(t, t.dyn_dtree, n - 1);
                      })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, r + 1),
                      hn(t, t.dyn_ltree, t.dyn_dtree)),
                on(t),
                s && ln(t);
        },
        _tr_tally: (t, e, n) => (
            (t.pending_buf[t.d_buf + 2 * t.last_lit] = (e >>> 8) & 255),
            (t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e),
            (t.pending_buf[t.l_buf + t.last_lit] = 255 & n),
            t.last_lit++,
            0 === e ? t.dyn_ltree[2 * n]++ : (t.matches++, e--, t.dyn_ltree[2 * (Je[n] + Ie + 1)]++, t.dyn_dtree[2 * tn(e)]++),
            t.last_lit === t.lit_bufsize - 1
        ),
        _tr_align: (t) => {
            nn(t, 2, 3),
                sn(t, 256, He),
                ((t) => {
                    16 === t.bi_valid ? (en(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0)) : t.bi_valid >= 8 && ((t.pending_buf[t.pending++] = 255 & t.bi_buf), (t.bi_buf >>= 8), (t.bi_valid -= 8));
                })(t);
        },
    };
    var vn = (t, e, n, s) => {
        let i = (65535 & t) | 0,
            a = ((t >>> 16) & 65535) | 0,
            r = 0;
        for (; 0 !== n; ) {
            (r = n > 2e3 ? 2e3 : n), (n -= r);
            do {
                (i = (i + e[s++]) | 0), (a = (a + i) | 0);
            } while (--r);
            (i %= 65521), (a %= 65521);
        }
        return i | (a << 16) | 0;
    };
    const bn = new Uint32Array(
        (() => {
            let t,
                e = [];
            for (var n = 0; n < 256; n++) {
                t = n;
                for (var s = 0; s < 8; s++) t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
                e[n] = t;
            }
            return e;
        })()
    );
    var wn = (t, e, n, s) => {
            const i = bn,
                a = s + n;
            t ^= -1;
            for (let n = s; n < a; n++) t = (t >>> 8) ^ i[255 & (t ^ e[n])];
            return -1 ^ t;
        },
        yn = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" },
        kn = {
            Z_NO_FLUSH: 0,
            Z_PARTIAL_FLUSH: 1,
            Z_SYNC_FLUSH: 2,
            Z_FULL_FLUSH: 3,
            Z_FINISH: 4,
            Z_BLOCK: 5,
            Z_TREES: 6,
            Z_OK: 0,
            Z_STREAM_END: 1,
            Z_NEED_DICT: 2,
            Z_ERRNO: -1,
            Z_STREAM_ERROR: -2,
            Z_DATA_ERROR: -3,
            Z_MEM_ERROR: -4,
            Z_BUF_ERROR: -5,
            Z_NO_COMPRESSION: 0,
            Z_BEST_SPEED: 1,
            Z_BEST_COMPRESSION: 9,
            Z_DEFAULT_COMPRESSION: -1,
            Z_FILTERED: 1,
            Z_HUFFMAN_ONLY: 2,
            Z_RLE: 3,
            Z_FIXED: 4,
            Z_DEFAULT_STRATEGY: 0,
            Z_BINARY: 0,
            Z_TEXT: 1,
            Z_UNKNOWN: 2,
            Z_DEFLATED: 8,
        };
    const { _tr_init: xn, _tr_stored_block: $n, _tr_flush_block: Sn, _tr_tally: zn, _tr_align: En } = pn,
        {
            Z_NO_FLUSH: An,
            Z_PARTIAL_FLUSH: Cn,
            Z_FULL_FLUSH: Rn,
            Z_FINISH: On,
            Z_BLOCK: Ln,
            Z_OK: jn,
            Z_STREAM_END: Nn,
            Z_STREAM_ERROR: In,
            Z_DATA_ERROR: Zn,
            Z_BUF_ERROR: Tn,
            Z_DEFAULT_COMPRESSION: Un,
            Z_FILTERED: Dn,
            Z_HUFFMAN_ONLY: Mn,
            Z_RLE: Bn,
            Z_FIXED: Fn,
            Z_DEFAULT_STRATEGY: Hn,
            Z_UNKNOWN: qn,
            Z_DEFLATED: Pn,
        } = kn,
        Jn = 258,
        Kn = 262,
        Wn = 103,
        Yn = 113,
        Gn = 666,
        Xn = (t, e) => ((t.msg = yn[e]), e),
        Vn = (t) => (t << 1) - (t > 4 ? 9 : 0),
        Qn = (t) => {
            let e = t.length;
            for (; --e >= 0; ) t[e] = 0;
        };
    let ts = (t, e, n) => ((e << t.hash_shift) ^ n) & t.hash_mask;
    const es = (t) => {
            const e = t.state;
            let n = e.pending;
            n > t.avail_out && (n = t.avail_out),
                0 !== n &&
                    (t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + n), t.next_out),
                    (t.next_out += n),
                    (e.pending_out += n),
                    (t.total_out += n),
                    (t.avail_out -= n),
                    (e.pending -= n),
                    0 === e.pending && (e.pending_out = 0));
        },
        ns = (t, e) => {
            Sn(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), (t.block_start = t.strstart), es(t.strm);
        },
        ss = (t, e) => {
            t.pending_buf[t.pending++] = e;
        },
        is = (t, e) => {
            (t.pending_buf[t.pending++] = (e >>> 8) & 255), (t.pending_buf[t.pending++] = 255 & e);
        },
        as = (t, e, n, s) => {
            let i = t.avail_in;
            return (
                i > s && (i = s),
                0 === i
                    ? 0
                    : ((t.avail_in -= i),
                      e.set(t.input.subarray(t.next_in, t.next_in + i), n),
                      1 === t.state.wrap ? (t.adler = vn(t.adler, e, i, n)) : 2 === t.state.wrap && (t.adler = wn(t.adler, e, i, n)),
                      (t.next_in += i),
                      (t.total_in += i),
                      i)
            );
        },
        rs = (t, e) => {
            let n,
                s,
                i = t.max_chain_length,
                a = t.strstart,
                r = t.prev_length,
                o = t.nice_match;
            const l = t.strstart > t.w_size - Kn ? t.strstart - (t.w_size - Kn) : 0,
                c = t.window,
                d = t.w_mask,
                h = t.prev,
                u = t.strstart + Jn;
            let f = c[a + r - 1],
                _ = c[a + r];
            t.prev_length >= t.good_match && (i >>= 2), o > t.lookahead && (o = t.lookahead);
            do {
                if (((n = e), c[n + r] === _ && c[n + r - 1] === f && c[n] === c[a] && c[++n] === c[a + 1])) {
                    (a += 2), n++;
                    do {} while (c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && a < u);
                    if (((s = Jn - (u - a)), (a = u - Jn), s > r)) {
                        if (((t.match_start = e), (r = s), s >= o)) break;
                        (f = c[a + r - 1]), (_ = c[a + r]);
                    }
                }
            } while ((e = h[e & d]) > l && 0 != --i);
            return r <= t.lookahead ? r : t.lookahead;
        },
        os = (t) => {
            const e = t.w_size;
            let n, s, i, a, r;
            do {
                if (((a = t.window_size - t.lookahead - t.strstart), t.strstart >= e + (e - Kn))) {
                    t.window.set(t.window.subarray(e, e + e), 0), (t.match_start -= e), (t.strstart -= e), (t.block_start -= e), (s = t.hash_size), (n = s);
                    do {
                        (i = t.head[--n]), (t.head[n] = i >= e ? i - e : 0);
                    } while (--s);
                    (s = e), (n = s);
                    do {
                        (i = t.prev[--n]), (t.prev[n] = i >= e ? i - e : 0);
                    } while (--s);
                    a += e;
                }
                if (0 === t.strm.avail_in) break;
                if (((s = as(t.strm, t.window, t.strstart + t.lookahead, a)), (t.lookahead += s), t.lookahead + t.insert >= 3))
                    for (
                        r = t.strstart - t.insert, t.ins_h = t.window[r], t.ins_h = ts(t, t.ins_h, t.window[r + 1]);
                        t.insert && ((t.ins_h = ts(t, t.ins_h, t.window[r + 3 - 1])), (t.prev[r & t.w_mask] = t.head[t.ins_h]), (t.head[t.ins_h] = r), r++, t.insert--, !(t.lookahead + t.insert < 3));

                    );
            } while (t.lookahead < Kn && 0 !== t.strm.avail_in);
        },
        ls = (t, e) => {
            let n, s;
            for (;;) {
                if (t.lookahead < Kn) {
                    if ((os(t), t.lookahead < Kn && e === An)) return 1;
                    if (0 === t.lookahead) break;
                }
                if (
                    ((n = 0),
                    t.lookahead >= 3 && ((t.ins_h = ts(t, t.ins_h, t.window[t.strstart + 3 - 1])), (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]), (t.head[t.ins_h] = t.strstart)),
                    0 !== n && t.strstart - n <= t.w_size - Kn && (t.match_length = rs(t, n)),
                    t.match_length >= 3)
                )
                    if (((s = zn(t, t.strstart - t.match_start, t.match_length - 3)), (t.lookahead -= t.match_length), t.match_length <= t.max_lazy_match && t.lookahead >= 3)) {
                        t.match_length--;
                        do {
                            t.strstart++, (t.ins_h = ts(t, t.ins_h, t.window[t.strstart + 3 - 1])), (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]), (t.head[t.ins_h] = t.strstart);
                        } while (0 != --t.match_length);
                        t.strstart++;
                    } else (t.strstart += t.match_length), (t.match_length = 0), (t.ins_h = t.window[t.strstart]), (t.ins_h = ts(t, t.ins_h, t.window[t.strstart + 1]));
                else (s = zn(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++;
                if (s && (ns(t, !1), 0 === t.strm.avail_out)) return 1;
            }
            return (t.insert = t.strstart < 2 ? t.strstart : 2), e === On ? (ns(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (ns(t, !1), 0 === t.strm.avail_out) ? 1 : 2;
        },
        cs = (t, e) => {
            let n, s, i;
            for (;;) {
                if (t.lookahead < Kn) {
                    if ((os(t), t.lookahead < Kn && e === An)) return 1;
                    if (0 === t.lookahead) break;
                }
                if (
                    ((n = 0),
                    t.lookahead >= 3 && ((t.ins_h = ts(t, t.ins_h, t.window[t.strstart + 3 - 1])), (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]), (t.head[t.ins_h] = t.strstart)),
                    (t.prev_length = t.match_length),
                    (t.prev_match = t.match_start),
                    (t.match_length = 2),
                    0 !== n &&
                        t.prev_length < t.max_lazy_match &&
                        t.strstart - n <= t.w_size - Kn &&
                        ((t.match_length = rs(t, n)), t.match_length <= 5 && (t.strategy === Dn || (3 === t.match_length && t.strstart - t.match_start > 4096)) && (t.match_length = 2)),
                    t.prev_length >= 3 && t.match_length <= t.prev_length)
                ) {
                    (i = t.strstart + t.lookahead - 3), (s = zn(t, t.strstart - 1 - t.prev_match, t.prev_length - 3)), (t.lookahead -= t.prev_length - 1), (t.prev_length -= 2);
                    do {
                        ++t.strstart <= i && ((t.ins_h = ts(t, t.ins_h, t.window[t.strstart + 3 - 1])), (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]), (t.head[t.ins_h] = t.strstart));
                    } while (0 != --t.prev_length);
                    if (((t.match_available = 0), (t.match_length = 2), t.strstart++, s && (ns(t, !1), 0 === t.strm.avail_out))) return 1;
                } else if (t.match_available) {
                    if (((s = zn(t, 0, t.window[t.strstart - 1])), s && ns(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out)) return 1;
                } else (t.match_available = 1), t.strstart++, t.lookahead--;
            }
            return (
                t.match_available && ((s = zn(t, 0, t.window[t.strstart - 1])), (t.match_available = 0)),
                (t.insert = t.strstart < 2 ? t.strstart : 2),
                e === On ? (ns(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (ns(t, !1), 0 === t.strm.avail_out) ? 1 : 2
            );
        };
    function ds(t, e, n, s, i) {
        (this.good_length = t), (this.max_lazy = e), (this.nice_length = n), (this.max_chain = s), (this.func = i);
    }
    const hs = [
        new ds(0, 0, 0, 0, (t, e) => {
            let n = 65535;
            for (n > t.pending_buf_size - 5 && (n = t.pending_buf_size - 5); ; ) {
                if (t.lookahead <= 1) {
                    if ((os(t), 0 === t.lookahead && e === An)) return 1;
                    if (0 === t.lookahead) break;
                }
                (t.strstart += t.lookahead), (t.lookahead = 0);
                const s = t.block_start + n;
                if ((0 === t.strstart || t.strstart >= s) && ((t.lookahead = t.strstart - s), (t.strstart = s), ns(t, !1), 0 === t.strm.avail_out)) return 1;
                if (t.strstart - t.block_start >= t.w_size - Kn && (ns(t, !1), 0 === t.strm.avail_out)) return 1;
            }
            return (t.insert = 0), e === On ? (ns(t, !0), 0 === t.strm.avail_out ? 3 : 4) : (t.strstart > t.block_start && (ns(t, !1), t.strm.avail_out), 1);
        }),
        new ds(4, 4, 8, 4, ls),
        new ds(4, 5, 16, 8, ls),
        new ds(4, 6, 32, 32, ls),
        new ds(4, 4, 16, 16, cs),
        new ds(8, 16, 32, 32, cs),
        new ds(8, 16, 128, 128, cs),
        new ds(8, 32, 128, 256, cs),
        new ds(32, 128, 258, 1024, cs),
        new ds(32, 258, 258, 4096, cs),
    ];
    function us() {
        (this.strm = null),
            (this.status = 0),
            (this.pending_buf = null),
            (this.pending_buf_size = 0),
            (this.pending_out = 0),
            (this.pending = 0),
            (this.wrap = 0),
            (this.gzhead = null),
            (this.gzindex = 0),
            (this.method = Pn),
            (this.last_flush = -1),
            (this.w_size = 0),
            (this.w_bits = 0),
            (this.w_mask = 0),
            (this.window = null),
            (this.window_size = 0),
            (this.prev = null),
            (this.head = null),
            (this.ins_h = 0),
            (this.hash_size = 0),
            (this.hash_bits = 0),
            (this.hash_mask = 0),
            (this.hash_shift = 0),
            (this.block_start = 0),
            (this.match_length = 0),
            (this.prev_match = 0),
            (this.match_available = 0),
            (this.strstart = 0),
            (this.match_start = 0),
            (this.lookahead = 0),
            (this.prev_length = 0),
            (this.max_chain_length = 0),
            (this.max_lazy_match = 0),
            (this.level = 0),
            (this.strategy = 0),
            (this.good_match = 0),
            (this.nice_match = 0),
            (this.dyn_ltree = new Uint16Array(1146)),
            (this.dyn_dtree = new Uint16Array(122)),
            (this.bl_tree = new Uint16Array(78)),
            Qn(this.dyn_ltree),
            Qn(this.dyn_dtree),
            Qn(this.bl_tree),
            (this.l_desc = null),
            (this.d_desc = null),
            (this.bl_desc = null),
            (this.bl_count = new Uint16Array(16)),
            (this.heap = new Uint16Array(573)),
            Qn(this.heap),
            (this.heap_len = 0),
            (this.heap_max = 0),
            (this.depth = new Uint16Array(573)),
            Qn(this.depth),
            (this.l_buf = 0),
            (this.lit_bufsize = 0),
            (this.last_lit = 0),
            (this.d_buf = 0),
            (this.opt_len = 0),
            (this.static_len = 0),
            (this.matches = 0),
            (this.insert = 0),
            (this.bi_buf = 0),
            (this.bi_valid = 0);
    }
    const fs = (t) => {
            if (!t || !t.state) return Xn(t, In);
            (t.total_in = t.total_out = 0), (t.data_type = qn);
            const e = t.state;
            return (e.pending = 0), (e.pending_out = 0), e.wrap < 0 && (e.wrap = -e.wrap), (e.status = e.wrap ? 42 : Yn), (t.adler = 2 === e.wrap ? 0 : 1), (e.last_flush = An), xn(e), jn;
        },
        _s = (t) => {
            const e = fs(t);
            var n;
            return (
                e === jn &&
                    (((n = t.state).window_size = 2 * n.w_size),
                    Qn(n.head),
                    (n.max_lazy_match = hs[n.level].max_lazy),
                    (n.good_match = hs[n.level].good_length),
                    (n.nice_match = hs[n.level].nice_length),
                    (n.max_chain_length = hs[n.level].max_chain),
                    (n.strstart = 0),
                    (n.block_start = 0),
                    (n.lookahead = 0),
                    (n.insert = 0),
                    (n.match_length = n.prev_length = 2),
                    (n.match_available = 0),
                    (n.ins_h = 0)),
                e
            );
        },
        gs = (t, e, n, s, i, a) => {
            if (!t) return In;
            let r = 1;
            if ((e === Un && (e = 6), s < 0 ? ((r = 0), (s = -s)) : s > 15 && ((r = 2), (s -= 16)), i < 1 || i > 9 || n !== Pn || s < 8 || s > 15 || e < 0 || e > 9 || a < 0 || a > Fn)) return Xn(t, In);
            8 === s && (s = 9);
            const o = new us();
            return (
                (t.state = o),
                (o.strm = t),
                (o.wrap = r),
                (o.gzhead = null),
                (o.w_bits = s),
                (o.w_size = 1 << o.w_bits),
                (o.w_mask = o.w_size - 1),
                (o.hash_bits = i + 7),
                (o.hash_size = 1 << o.hash_bits),
                (o.hash_mask = o.hash_size - 1),
                (o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3)),
                (o.window = new Uint8Array(2 * o.w_size)),
                (o.head = new Uint16Array(o.hash_size)),
                (o.prev = new Uint16Array(o.w_size)),
                (o.lit_bufsize = 1 << (i + 6)),
                (o.pending_buf_size = 4 * o.lit_bufsize),
                (o.pending_buf = new Uint8Array(o.pending_buf_size)),
                (o.d_buf = 1 * o.lit_bufsize),
                (o.l_buf = 3 * o.lit_bufsize),
                (o.level = e),
                (o.strategy = a),
                (o.method = n),
                _s(t)
            );
        };
    var ms = {
        deflateInit: (t, e) => gs(t, e, Pn, 15, 8, Hn),
        deflateInit2: gs,
        deflateReset: _s,
        deflateResetKeep: fs,
        deflateSetHeader: (t, e) => (t && t.state ? (2 !== t.state.wrap ? In : ((t.state.gzhead = e), jn)) : In),
        deflate: (t, e) => {
            let n, s;
            if (!t || !t.state || e > Ln || e < 0) return t ? Xn(t, In) : In;
            const i = t.state;
            if (!t.output || (!t.input && 0 !== t.avail_in) || (i.status === Gn && e !== On)) return Xn(t, 0 === t.avail_out ? Tn : In);
            i.strm = t;
            const a = i.last_flush;
            if (((i.last_flush = e), 42 === i.status))
                if (2 === i.wrap)
                    (t.adler = 0),
                        ss(i, 31),
                        ss(i, 139),
                        ss(i, 8),
                        i.gzhead
                            ? (ss(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)),
                              ss(i, 255 & i.gzhead.time),
                              ss(i, (i.gzhead.time >> 8) & 255),
                              ss(i, (i.gzhead.time >> 16) & 255),
                              ss(i, (i.gzhead.time >> 24) & 255),
                              ss(i, 9 === i.level ? 2 : i.strategy >= Mn || i.level < 2 ? 4 : 0),
                              ss(i, 255 & i.gzhead.os),
                              i.gzhead.extra && i.gzhead.extra.length && (ss(i, 255 & i.gzhead.extra.length), ss(i, (i.gzhead.extra.length >> 8) & 255)),
                              i.gzhead.hcrc && (t.adler = wn(t.adler, i.pending_buf, i.pending, 0)),
                              (i.gzindex = 0),
                              (i.status = 69))
                            : (ss(i, 0), ss(i, 0), ss(i, 0), ss(i, 0), ss(i, 0), ss(i, 9 === i.level ? 2 : i.strategy >= Mn || i.level < 2 ? 4 : 0), ss(i, 3), (i.status = Yn));
                else {
                    let e = (Pn + ((i.w_bits - 8) << 4)) << 8,
                        n = -1;
                    (n = i.strategy >= Mn || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3),
                        (e |= n << 6),
                        0 !== i.strstart && (e |= 32),
                        (e += 31 - (e % 31)),
                        (i.status = Yn),
                        is(i, e),
                        0 !== i.strstart && (is(i, t.adler >>> 16), is(i, 65535 & t.adler)),
                        (t.adler = 1);
                }
            if (69 === i.status)
                if (i.gzhead.extra) {
                    for (
                        n = i.pending;
                        i.gzindex < (65535 & i.gzhead.extra.length) &&
                        (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > n && (t.adler = wn(t.adler, i.pending_buf, i.pending - n, n)), es(t), (n = i.pending), i.pending !== i.pending_buf_size));

                    )
                        ss(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
                    i.gzhead.hcrc && i.pending > n && (t.adler = wn(t.adler, i.pending_buf, i.pending - n, n)), i.gzindex === i.gzhead.extra.length && ((i.gzindex = 0), (i.status = 73));
                } else i.status = 73;
            if (73 === i.status)
                if (i.gzhead.name) {
                    n = i.pending;
                    do {
                        if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > n && (t.adler = wn(t.adler, i.pending_buf, i.pending - n, n)), es(t), (n = i.pending), i.pending === i.pending_buf_size)) {
                            s = 1;
                            break;
                        }
                        (s = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0), ss(i, s);
                    } while (0 !== s);
                    i.gzhead.hcrc && i.pending > n && (t.adler = wn(t.adler, i.pending_buf, i.pending - n, n)), 0 === s && ((i.gzindex = 0), (i.status = 91));
                } else i.status = 91;
            if (91 === i.status)
                if (i.gzhead.comment) {
                    n = i.pending;
                    do {
                        if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > n && (t.adler = wn(t.adler, i.pending_buf, i.pending - n, n)), es(t), (n = i.pending), i.pending === i.pending_buf_size)) {
                            s = 1;
                            break;
                        }
                        (s = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0), ss(i, s);
                    } while (0 !== s);
                    i.gzhead.hcrc && i.pending > n && (t.adler = wn(t.adler, i.pending_buf, i.pending - n, n)), 0 === s && (i.status = Wn);
                } else i.status = Wn;
            if (
                (i.status === Wn &&
                    (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && es(t), i.pending + 2 <= i.pending_buf_size && (ss(i, 255 & t.adler), ss(i, (t.adler >> 8) & 255), (t.adler = 0), (i.status = Yn))) : (i.status = Yn)),
                0 !== i.pending)
            ) {
                if ((es(t), 0 === t.avail_out)) return (i.last_flush = -1), jn;
            } else if (0 === t.avail_in && Vn(e) <= Vn(a) && e !== On) return Xn(t, Tn);
            if (i.status === Gn && 0 !== t.avail_in) return Xn(t, Tn);
            if (0 !== t.avail_in || 0 !== i.lookahead || (e !== An && i.status !== Gn)) {
                let n =
                    i.strategy === Mn
                        ? ((t, e) => {
                              let n;
                              for (;;) {
                                  if (0 === t.lookahead && (os(t), 0 === t.lookahead)) {
                                      if (e === An) return 1;
                                      break;
                                  }
                                  if (((t.match_length = 0), (n = zn(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++, n && (ns(t, !1), 0 === t.strm.avail_out))) return 1;
                              }
                              return (t.insert = 0), e === On ? (ns(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (ns(t, !1), 0 === t.strm.avail_out) ? 1 : 2;
                          })(i, e)
                        : i.strategy === Bn
                        ? ((t, e) => {
                              let n, s, i, a;
                              const r = t.window;
                              for (;;) {
                                  if (t.lookahead <= Jn) {
                                      if ((os(t), t.lookahead <= Jn && e === An)) return 1;
                                      if (0 === t.lookahead) break;
                                  }
                                  if (((t.match_length = 0), t.lookahead >= 3 && t.strstart > 0 && ((i = t.strstart - 1), (s = r[i]), s === r[++i] && s === r[++i] && s === r[++i]))) {
                                      a = t.strstart + Jn;
                                      do {} while (s === r[++i] && s === r[++i] && s === r[++i] && s === r[++i] && s === r[++i] && s === r[++i] && s === r[++i] && s === r[++i] && i < a);
                                      (t.match_length = Jn - (a - i)), t.match_length > t.lookahead && (t.match_length = t.lookahead);
                                  }
                                  if (
                                      (t.match_length >= 3
                                          ? ((n = zn(t, 1, t.match_length - 3)), (t.lookahead -= t.match_length), (t.strstart += t.match_length), (t.match_length = 0))
                                          : ((n = zn(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++),
                                      n && (ns(t, !1), 0 === t.strm.avail_out))
                                  )
                                      return 1;
                              }
                              return (t.insert = 0), e === On ? (ns(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (ns(t, !1), 0 === t.strm.avail_out) ? 1 : 2;
                          })(i, e)
                        : hs[i.level].func(i, e);
                if (((3 !== n && 4 !== n) || (i.status = Gn), 1 === n || 3 === n)) return 0 === t.avail_out && (i.last_flush = -1), jn;
                if (2 === n && (e === Cn ? En(i) : e !== Ln && ($n(i, 0, 0, !1), e === Rn && (Qn(i.head), 0 === i.lookahead && ((i.strstart = 0), (i.block_start = 0), (i.insert = 0)))), es(t), 0 === t.avail_out))
                    return (i.last_flush = -1), jn;
            }
            return e !== On
                ? jn
                : i.wrap <= 0
                ? Nn
                : (2 === i.wrap
                      ? (ss(i, 255 & t.adler),
                        ss(i, (t.adler >> 8) & 255),
                        ss(i, (t.adler >> 16) & 255),
                        ss(i, (t.adler >> 24) & 255),
                        ss(i, 255 & t.total_in),
                        ss(i, (t.total_in >> 8) & 255),
                        ss(i, (t.total_in >> 16) & 255),
                        ss(i, (t.total_in >> 24) & 255))
                      : (is(i, t.adler >>> 16), is(i, 65535 & t.adler)),
                  es(t),
                  i.wrap > 0 && (i.wrap = -i.wrap),
                  0 !== i.pending ? jn : Nn);
        },
        deflateEnd: (t) => {
            if (!t || !t.state) return In;
            const e = t.state.status;
            return 42 !== e && 69 !== e && 73 !== e && 91 !== e && e !== Wn && e !== Yn && e !== Gn ? Xn(t, In) : ((t.state = null), e === Yn ? Xn(t, Zn) : jn);
        },
        deflateSetDictionary: (t, e) => {
            let n = e.length;
            if (!t || !t.state) return In;
            const s = t.state,
                i = s.wrap;
            if (2 === i || (1 === i && 42 !== s.status) || s.lookahead) return In;
            if ((1 === i && (t.adler = vn(t.adler, e, n, 0)), (s.wrap = 0), n >= s.w_size)) {
                0 === i && (Qn(s.head), (s.strstart = 0), (s.block_start = 0), (s.insert = 0));
                let t = new Uint8Array(s.w_size);
                t.set(e.subarray(n - s.w_size, n), 0), (e = t), (n = s.w_size);
            }
            const a = t.avail_in,
                r = t.next_in,
                o = t.input;
            for (t.avail_in = n, t.next_in = 0, t.input = e, os(s); s.lookahead >= 3; ) {
                let t = s.strstart,
                    e = s.lookahead - 2;
                do {
                    (s.ins_h = ts(s, s.ins_h, s.window[t + 3 - 1])), (s.prev[t & s.w_mask] = s.head[s.ins_h]), (s.head[s.ins_h] = t), t++;
                } while (--e);
                (s.strstart = t), (s.lookahead = 2), os(s);
            }
            return (
                (s.strstart += s.lookahead),
                (s.block_start = s.strstart),
                (s.insert = s.lookahead),
                (s.lookahead = 0),
                (s.match_length = s.prev_length = 2),
                (s.match_available = 0),
                (t.next_in = r),
                (t.input = o),
                (t.avail_in = a),
                (s.wrap = i),
                jn
            );
        },
        deflateInfo: "pako deflate (from Nodeca project)",
    };
    const ps = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    var vs = function (t) {
            const e = Array.prototype.slice.call(arguments, 1);
            for (; e.length; ) {
                const n = e.shift();
                if (n) {
                    if ("object" != typeof n) throw new TypeError(n + "must be non-object");
                    for (const e in n) ps(n, e) && (t[e] = n[e]);
                }
            }
            return t;
        },
        bs = (t) => {
            let e = 0;
            for (let n = 0, s = t.length; n < s; n++) e += t[n].length;
            const n = new Uint8Array(e);
            for (let e = 0, s = 0, i = t.length; e < i; e++) {
                let i = t[e];
                n.set(i, s), (s += i.length);
            }
            return n;
        };
    let ws = !0;
    try {
        String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (t) {
        ws = !1;
    }
    const ys = new Uint8Array(256);
    for (let t = 0; t < 256; t++) ys[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
    ys[254] = ys[254] = 1;
    var ks = (t) => {
            if ("function" == typeof TextEncoder && TextEncoder.prototype.encode) return new TextEncoder().encode(t);
            let e,
                n,
                s,
                i,
                a,
                r = t.length,
                o = 0;
            for (i = 0; i < r; i++)
                (n = t.charCodeAt(i)), 55296 == (64512 & n) && i + 1 < r && ((s = t.charCodeAt(i + 1)), 56320 == (64512 & s) && ((n = 65536 + ((n - 55296) << 10) + (s - 56320)), i++)), (o += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
            for (e = new Uint8Array(o), a = 0, i = 0; a < o; i++)
                (n = t.charCodeAt(i)),
                    55296 == (64512 & n) && i + 1 < r && ((s = t.charCodeAt(i + 1)), 56320 == (64512 & s) && ((n = 65536 + ((n - 55296) << 10) + (s - 56320)), i++)),
                    n < 128
                        ? (e[a++] = n)
                        : n < 2048
                        ? ((e[a++] = 192 | (n >>> 6)), (e[a++] = 128 | (63 & n)))
                        : n < 65536
                        ? ((e[a++] = 224 | (n >>> 12)), (e[a++] = 128 | ((n >>> 6) & 63)), (e[a++] = 128 | (63 & n)))
                        : ((e[a++] = 240 | (n >>> 18)), (e[a++] = 128 | ((n >>> 12) & 63)), (e[a++] = 128 | ((n >>> 6) & 63)), (e[a++] = 128 | (63 & n)));
            return e;
        },
        xs = (t, e) => {
            const n = e || t.length;
            if ("function" == typeof TextDecoder && TextDecoder.prototype.decode) return new TextDecoder().decode(t.subarray(0, e));
            let s, i;
            const a = new Array(2 * n);
            for (i = 0, s = 0; s < n; ) {
                let e = t[s++];
                if (e < 128) {
                    a[i++] = e;
                    continue;
                }
                let r = ys[e];
                if (r > 4) (a[i++] = 65533), (s += r - 1);
                else {
                    for (e &= 2 === r ? 31 : 3 === r ? 15 : 7; r > 1 && s < n; ) (e = (e << 6) | (63 & t[s++])), r--;
                    r > 1 ? (a[i++] = 65533) : e < 65536 ? (a[i++] = e) : ((e -= 65536), (a[i++] = 55296 | ((e >> 10) & 1023)), (a[i++] = 56320 | (1023 & e)));
                }
            }
            return ((t, e) => {
                if (e < 65534 && t.subarray && ws) return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
                let n = "";
                for (let s = 0; s < e; s++) n += String.fromCharCode(t[s]);
                return n;
            })(a, i);
        },
        $s = (t, e) => {
            (e = e || t.length) > t.length && (e = t.length);
            let n = e - 1;
            for (; n >= 0 && 128 == (192 & t[n]); ) n--;
            return n < 0 || 0 === n ? e : n + ys[t[n]] > e ? n : e;
        };
    var Ss = function () {
        (this.input = null),
            (this.next_in = 0),
            (this.avail_in = 0),
            (this.total_in = 0),
            (this.output = null),
            (this.next_out = 0),
            (this.avail_out = 0),
            (this.total_out = 0),
            (this.msg = ""),
            (this.state = null),
            (this.data_type = 2),
            (this.adler = 0);
    };
    const zs = Object.prototype.toString,
        { Z_NO_FLUSH: Es, Z_SYNC_FLUSH: As, Z_FULL_FLUSH: Cs, Z_FINISH: Rs, Z_OK: Os, Z_STREAM_END: Ls, Z_DEFAULT_COMPRESSION: js, Z_DEFAULT_STRATEGY: Ns, Z_DEFLATED: Is } = kn;
    function Zs(t) {
        this.options = vs({ level: js, method: Is, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: Ns }, t || {});
        let e = this.options;
        e.raw && e.windowBits > 0 ? (e.windowBits = -e.windowBits) : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16),
            (this.err = 0),
            (this.msg = ""),
            (this.ended = !1),
            (this.chunks = []),
            (this.strm = new Ss()),
            (this.strm.avail_out = 0);
        let n = ms.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
        if (n !== Os) throw new Error(yn[n]);
        if ((e.header && ms.deflateSetHeader(this.strm, e.header), e.dictionary)) {
            let t;
            if (((t = "string" == typeof e.dictionary ? ks(e.dictionary) : "[object ArrayBuffer]" === zs.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary), (n = ms.deflateSetDictionary(this.strm, t)), n !== Os))
                throw new Error(yn[n]);
            this._dict_set = !0;
        }
    }
    function Ts(t, e) {
        const n = new Zs(e);
        if ((n.push(t, !0), n.err)) throw n.msg || yn[n.err];
        return n.result;
    }
    (Zs.prototype.push = function (t, e) {
        const n = this.strm,
            s = this.options.chunkSize;
        let i, a;
        if (this.ended) return !1;
        for (a = e === ~~e ? e : !0 === e ? Rs : Es, "string" == typeof t ? (n.input = ks(t)) : "[object ArrayBuffer]" === zs.call(t) ? (n.input = new Uint8Array(t)) : (n.input = t), n.next_in = 0, n.avail_in = n.input.length; ; )
            if ((0 === n.avail_out && ((n.output = new Uint8Array(s)), (n.next_out = 0), (n.avail_out = s)), (a === As || a === Cs) && n.avail_out <= 6)) this.onData(n.output.subarray(0, n.next_out)), (n.avail_out = 0);
            else {
                if (((i = ms.deflate(n, a)), i === Ls)) return n.next_out > 0 && this.onData(n.output.subarray(0, n.next_out)), (i = ms.deflateEnd(this.strm)), this.onEnd(i), (this.ended = !0), i === Os;
                if (0 !== n.avail_out) {
                    if (a > 0 && n.next_out > 0) this.onData(n.output.subarray(0, n.next_out)), (n.avail_out = 0);
                    else if (0 === n.avail_in) break;
                } else this.onData(n.output);
            }
        return !0;
    }),
        (Zs.prototype.onData = function (t) {
            this.chunks.push(t);
        }),
        (Zs.prototype.onEnd = function (t) {
            t === Os && (this.result = bs(this.chunks)), (this.chunks = []), (this.err = t), (this.msg = this.strm.msg);
        });
    var Us = {
        Deflate: Zs,
        deflate: Ts,
        deflateRaw: function (t, e) {
            return ((e = e || {}).raw = !0), Ts(t, e);
        },
        gzip: function (t, e) {
            return ((e = e || {}).gzip = !0), Ts(t, e);
        },
        constants: kn,
    };
    var Ds = function (t, e) {
        let n, s, i, a, r, o, l, c, d, h, u, f, _, g, m, p, v, b, w, y, k, x, $, S;
        const z = t.state;
        (n = t.next_in),
            ($ = t.input),
            (s = n + (t.avail_in - 5)),
            (i = t.next_out),
            (S = t.output),
            (a = i - (e - t.avail_out)),
            (r = i + (t.avail_out - 257)),
            (o = z.dmax),
            (l = z.wsize),
            (c = z.whave),
            (d = z.wnext),
            (h = z.window),
            (u = z.hold),
            (f = z.bits),
            (_ = z.lencode),
            (g = z.distcode),
            (m = (1 << z.lenbits) - 1),
            (p = (1 << z.distbits) - 1);
        t: do {
            f < 15 && ((u += $[n++] << f), (f += 8), (u += $[n++] << f), (f += 8)), (v = _[u & m]);
            e: for (;;) {
                if (((b = v >>> 24), (u >>>= b), (f -= b), (b = (v >>> 16) & 255), 0 === b)) S[i++] = 65535 & v;
                else {
                    if (!(16 & b)) {
                        if (0 == (64 & b)) {
                            v = _[(65535 & v) + (u & ((1 << b) - 1))];
                            continue e;
                        }
                        if (32 & b) {
                            z.mode = 12;
                            break t;
                        }
                        (t.msg = "invalid literal/length code"), (z.mode = 30);
                        break t;
                    }
                    (w = 65535 & v), (b &= 15), b && (f < b && ((u += $[n++] << f), (f += 8)), (w += u & ((1 << b) - 1)), (u >>>= b), (f -= b)), f < 15 && ((u += $[n++] << f), (f += 8), (u += $[n++] << f), (f += 8)), (v = g[u & p]);
                    n: for (;;) {
                        if (((b = v >>> 24), (u >>>= b), (f -= b), (b = (v >>> 16) & 255), !(16 & b))) {
                            if (0 == (64 & b)) {
                                v = g[(65535 & v) + (u & ((1 << b) - 1))];
                                continue n;
                            }
                            (t.msg = "invalid distance code"), (z.mode = 30);
                            break t;
                        }
                        if (((y = 65535 & v), (b &= 15), f < b && ((u += $[n++] << f), (f += 8), f < b && ((u += $[n++] << f), (f += 8))), (y += u & ((1 << b) - 1)), y > o)) {
                            (t.msg = "invalid distance too far back"), (z.mode = 30);
                            break t;
                        }
                        if (((u >>>= b), (f -= b), (b = i - a), y > b)) {
                            if (((b = y - b), b > c && z.sane)) {
                                (t.msg = "invalid distance too far back"), (z.mode = 30);
                                break t;
                            }
                            if (((k = 0), (x = h), 0 === d)) {
                                if (((k += l - b), b < w)) {
                                    w -= b;
                                    do {
                                        S[i++] = h[k++];
                                    } while (--b);
                                    (k = i - y), (x = S);
                                }
                            } else if (d < b) {
                                if (((k += l + d - b), (b -= d), b < w)) {
                                    w -= b;
                                    do {
                                        S[i++] = h[k++];
                                    } while (--b);
                                    if (((k = 0), d < w)) {
                                        (b = d), (w -= b);
                                        do {
                                            S[i++] = h[k++];
                                        } while (--b);
                                        (k = i - y), (x = S);
                                    }
                                }
                            } else if (((k += d - b), b < w)) {
                                w -= b;
                                do {
                                    S[i++] = h[k++];
                                } while (--b);
                                (k = i - y), (x = S);
                            }
                            for (; w > 2; ) (S[i++] = x[k++]), (S[i++] = x[k++]), (S[i++] = x[k++]), (w -= 3);
                            w && ((S[i++] = x[k++]), w > 1 && (S[i++] = x[k++]));
                        } else {
                            k = i - y;
                            do {
                                (S[i++] = S[k++]), (S[i++] = S[k++]), (S[i++] = S[k++]), (w -= 3);
                            } while (w > 2);
                            w && ((S[i++] = S[k++]), w > 1 && (S[i++] = S[k++]));
                        }
                        break;
                    }
                }
                break;
            }
        } while (n < s && i < r);
        (w = f >> 3), (n -= w), (f -= w << 3), (u &= (1 << f) - 1), (t.next_in = n), (t.next_out = i), (t.avail_in = n < s ? s - n + 5 : 5 - (n - s)), (t.avail_out = i < r ? r - i + 257 : 257 - (i - r)), (z.hold = u), (z.bits = f);
    };
    const Ms = 15,
        Bs = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
        Fs = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
        Hs = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
        qs = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    var Ps = (t, e, n, s, i, a, r, o) => {
        const l = o.bits;
        let c,
            d,
            h,
            u,
            f,
            _,
            g = 0,
            m = 0,
            p = 0,
            v = 0,
            b = 0,
            w = 0,
            y = 0,
            k = 0,
            x = 0,
            $ = 0,
            S = null,
            z = 0;
        const E = new Uint16Array(16),
            A = new Uint16Array(16);
        let C,
            R,
            O,
            L = null,
            j = 0;
        for (g = 0; g <= Ms; g++) E[g] = 0;
        for (m = 0; m < s; m++) E[e[n + m]]++;
        for (b = l, v = Ms; v >= 1 && 0 === E[v]; v--);
        if ((b > v && (b = v), 0 === v)) return (i[a++] = 20971520), (i[a++] = 20971520), (o.bits = 1), 0;
        for (p = 1; p < v && 0 === E[p]; p++);
        for (b < p && (b = p), k = 1, g = 1; g <= Ms; g++) if (((k <<= 1), (k -= E[g]), k < 0)) return -1;
        if (k > 0 && (0 === t || 1 !== v)) return -1;
        for (A[1] = 0, g = 1; g < Ms; g++) A[g + 1] = A[g] + E[g];
        for (m = 0; m < s; m++) 0 !== e[n + m] && (r[A[e[n + m]]++] = m);
        if (
            (0 === t ? ((S = L = r), (_ = 19)) : 1 === t ? ((S = Bs), (z -= 257), (L = Fs), (j -= 257), (_ = 256)) : ((S = Hs), (L = qs), (_ = -1)),
            ($ = 0),
            (m = 0),
            (g = p),
            (f = a),
            (w = b),
            (y = 0),
            (h = -1),
            (x = 1 << b),
            (u = x - 1),
            (1 === t && x > 852) || (2 === t && x > 592))
        )
            return 1;
        for (;;) {
            (C = g - y), r[m] < _ ? ((R = 0), (O = r[m])) : r[m] > _ ? ((R = L[j + r[m]]), (O = S[z + r[m]])) : ((R = 96), (O = 0)), (c = 1 << (g - y)), (d = 1 << w), (p = d);
            do {
                (d -= c), (i[f + ($ >> y) + d] = (C << 24) | (R << 16) | O | 0);
            } while (0 !== d);
            for (c = 1 << (g - 1); $ & c; ) c >>= 1;
            if ((0 !== c ? (($ &= c - 1), ($ += c)) : ($ = 0), m++, 0 == --E[g])) {
                if (g === v) break;
                g = e[n + r[m]];
            }
            if (g > b && ($ & u) !== h) {
                for (0 === y && (y = b), f += p, w = g - y, k = 1 << w; w + y < v && ((k -= E[w + y]), !(k <= 0)); ) w++, (k <<= 1);
                if (((x += 1 << w), (1 === t && x > 852) || (2 === t && x > 592))) return 1;
                (h = $ & u), (i[h] = (b << 24) | (w << 16) | (f - a) | 0);
            }
        }
        return 0 !== $ && (i[f + $] = ((g - y) << 24) | (64 << 16) | 0), (o.bits = b), 0;
    };
    const { Z_FINISH: Js, Z_BLOCK: Ks, Z_TREES: Ws, Z_OK: Ys, Z_STREAM_END: Gs, Z_NEED_DICT: Xs, Z_STREAM_ERROR: Vs, Z_DATA_ERROR: Qs, Z_MEM_ERROR: ti, Z_BUF_ERROR: ei, Z_DEFLATED: ni } = kn,
        si = 12,
        ii = 30,
        ai = (t) => ((t >>> 24) & 255) + ((t >>> 8) & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
    function ri() {
        (this.mode = 0),
            (this.last = !1),
            (this.wrap = 0),
            (this.havedict = !1),
            (this.flags = 0),
            (this.dmax = 0),
            (this.check = 0),
            (this.total = 0),
            (this.head = null),
            (this.wbits = 0),
            (this.wsize = 0),
            (this.whave = 0),
            (this.wnext = 0),
            (this.window = null),
            (this.hold = 0),
            (this.bits = 0),
            (this.length = 0),
            (this.offset = 0),
            (this.extra = 0),
            (this.lencode = null),
            (this.distcode = null),
            (this.lenbits = 0),
            (this.distbits = 0),
            (this.ncode = 0),
            (this.nlen = 0),
            (this.ndist = 0),
            (this.have = 0),
            (this.next = null),
            (this.lens = new Uint16Array(320)),
            (this.work = new Uint16Array(288)),
            (this.lendyn = null),
            (this.distdyn = null),
            (this.sane = 0),
            (this.back = 0),
            (this.was = 0);
    }
    const oi = (t) => {
            if (!t || !t.state) return Vs;
            const e = t.state;
            return (
                (t.total_in = t.total_out = e.total = 0),
                (t.msg = ""),
                e.wrap && (t.adler = 1 & e.wrap),
                (e.mode = 1),
                (e.last = 0),
                (e.havedict = 0),
                (e.dmax = 32768),
                (e.head = null),
                (e.hold = 0),
                (e.bits = 0),
                (e.lencode = e.lendyn = new Int32Array(852)),
                (e.distcode = e.distdyn = new Int32Array(592)),
                (e.sane = 1),
                (e.back = -1),
                Ys
            );
        },
        li = (t) => {
            if (!t || !t.state) return Vs;
            const e = t.state;
            return (e.wsize = 0), (e.whave = 0), (e.wnext = 0), oi(t);
        },
        ci = (t, e) => {
            let n;
            if (!t || !t.state) return Vs;
            const s = t.state;
            return e < 0 ? ((n = 0), (e = -e)) : ((n = 1 + (e >> 4)), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? Vs : (null !== s.window && s.wbits !== e && (s.window = null), (s.wrap = n), (s.wbits = e), li(t));
        },
        di = (t, e) => {
            if (!t) return Vs;
            const n = new ri();
            (t.state = n), (n.window = null);
            const s = ci(t, e);
            return s !== Ys && (t.state = null), s;
        };
    let hi,
        ui,
        fi = !0;
    const _i = (t) => {
            if (fi) {
                (hi = new Int32Array(512)), (ui = new Int32Array(32));
                let e = 0;
                for (; e < 144; ) t.lens[e++] = 8;
                for (; e < 256; ) t.lens[e++] = 9;
                for (; e < 280; ) t.lens[e++] = 7;
                for (; e < 288; ) t.lens[e++] = 8;
                for (Ps(1, t.lens, 0, 288, hi, 0, t.work, { bits: 9 }), e = 0; e < 32; ) t.lens[e++] = 5;
                Ps(2, t.lens, 0, 32, ui, 0, t.work, { bits: 5 }), (fi = !1);
            }
            (t.lencode = hi), (t.lenbits = 9), (t.distcode = ui), (t.distbits = 5);
        },
        gi = (t, e, n, s) => {
            let i;
            const a = t.state;
            return (
                null === a.window && ((a.wsize = 1 << a.wbits), (a.wnext = 0), (a.whave = 0), (a.window = new Uint8Array(a.wsize))),
                s >= a.wsize
                    ? (a.window.set(e.subarray(n - a.wsize, n), 0), (a.wnext = 0), (a.whave = a.wsize))
                    : ((i = a.wsize - a.wnext),
                      i > s && (i = s),
                      a.window.set(e.subarray(n - s, n - s + i), a.wnext),
                      (s -= i) ? (a.window.set(e.subarray(n - s, n), 0), (a.wnext = s), (a.whave = a.wsize)) : ((a.wnext += i), a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += i))),
                0
            );
        };
    var mi = {
        inflateReset: li,
        inflateReset2: ci,
        inflateResetKeep: oi,
        inflateInit: (t) => di(t, 15),
        inflateInit2: di,
        inflate: (t, e) => {
            let n,
                s,
                i,
                a,
                r,
                o,
                l,
                c,
                d,
                h,
                u,
                f,
                _,
                g,
                m,
                p,
                v,
                b,
                w,
                y,
                k,
                x,
                $ = 0;
            const S = new Uint8Array(4);
            let z, E;
            const A = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
            if (!t || !t.state || !t.output || (!t.input && 0 !== t.avail_in)) return Vs;
            (n = t.state), n.mode === si && (n.mode = 13), (r = t.next_out), (i = t.output), (l = t.avail_out), (a = t.next_in), (s = t.input), (o = t.avail_in), (c = n.hold), (d = n.bits), (h = o), (u = l), (x = Ys);
            t: for (;;)
                switch (n.mode) {
                    case 1:
                        if (0 === n.wrap) {
                            n.mode = 13;
                            break;
                        }
                        for (; d < 16; ) {
                            if (0 === o) break t;
                            o--, (c += s[a++] << d), (d += 8);
                        }
                        if (2 & n.wrap && 35615 === c) {
                            (n.check = 0), (S[0] = 255 & c), (S[1] = (c >>> 8) & 255), (n.check = wn(n.check, S, 2, 0)), (c = 0), (d = 0), (n.mode = 2);
                            break;
                        }
                        if (((n.flags = 0), n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & c) << 8) + (c >> 8)) % 31)) {
                            (t.msg = "incorrect header check"), (n.mode = ii);
                            break;
                        }
                        if ((15 & c) !== ni) {
                            (t.msg = "unknown compression method"), (n.mode = ii);
                            break;
                        }
                        if (((c >>>= 4), (d -= 4), (k = 8 + (15 & c)), 0 === n.wbits)) n.wbits = k;
                        else if (k > n.wbits) {
                            (t.msg = "invalid window size"), (n.mode = ii);
                            break;
                        }
                        (n.dmax = 1 << n.wbits), (t.adler = n.check = 1), (n.mode = 512 & c ? 10 : si), (c = 0), (d = 0);
                        break;
                    case 2:
                        for (; d < 16; ) {
                            if (0 === o) break t;
                            o--, (c += s[a++] << d), (d += 8);
                        }
                        if (((n.flags = c), (255 & n.flags) !== ni)) {
                            (t.msg = "unknown compression method"), (n.mode = ii);
                            break;
                        }
                        if (57344 & n.flags) {
                            (t.msg = "unknown header flags set"), (n.mode = ii);
                            break;
                        }
                        n.head && (n.head.text = (c >> 8) & 1), 512 & n.flags && ((S[0] = 255 & c), (S[1] = (c >>> 8) & 255), (n.check = wn(n.check, S, 2, 0))), (c = 0), (d = 0), (n.mode = 3);
                    case 3:
                        for (; d < 32; ) {
                            if (0 === o) break t;
                            o--, (c += s[a++] << d), (d += 8);
                        }
                        n.head && (n.head.time = c), 512 & n.flags && ((S[0] = 255 & c), (S[1] = (c >>> 8) & 255), (S[2] = (c >>> 16) & 255), (S[3] = (c >>> 24) & 255), (n.check = wn(n.check, S, 4, 0))), (c = 0), (d = 0), (n.mode = 4);
                    case 4:
                        for (; d < 16; ) {
                            if (0 === o) break t;
                            o--, (c += s[a++] << d), (d += 8);
                        }
                        n.head && ((n.head.xflags = 255 & c), (n.head.os = c >> 8)), 512 & n.flags && ((S[0] = 255 & c), (S[1] = (c >>> 8) & 255), (n.check = wn(n.check, S, 2, 0))), (c = 0), (d = 0), (n.mode = 5);
                    case 5:
                        if (1024 & n.flags) {
                            for (; d < 16; ) {
                                if (0 === o) break t;
                                o--, (c += s[a++] << d), (d += 8);
                            }
                            (n.length = c), n.head && (n.head.extra_len = c), 512 & n.flags && ((S[0] = 255 & c), (S[1] = (c >>> 8) & 255), (n.check = wn(n.check, S, 2, 0))), (c = 0), (d = 0);
                        } else n.head && (n.head.extra = null);
                        n.mode = 6;
                    case 6:
                        if (
                            1024 & n.flags &&
                            ((f = n.length),
                            f > o && (f = o),
                            f &&
                                (n.head && ((k = n.head.extra_len - n.length), n.head.extra || (n.head.extra = new Uint8Array(n.head.extra_len)), n.head.extra.set(s.subarray(a, a + f), k)),
                                512 & n.flags && (n.check = wn(n.check, s, f, a)),
                                (o -= f),
                                (a += f),
                                (n.length -= f)),
                            n.length)
                        )
                            break t;
                        (n.length = 0), (n.mode = 7);
                    case 7:
                        if (2048 & n.flags) {
                            if (0 === o) break t;
                            f = 0;
                            do {
                                (k = s[a + f++]), n.head && k && n.length < 65536 && (n.head.name += String.fromCharCode(k));
                            } while (k && f < o);
                            if ((512 & n.flags && (n.check = wn(n.check, s, f, a)), (o -= f), (a += f), k)) break t;
                        } else n.head && (n.head.name = null);
                        (n.length = 0), (n.mode = 8);
                    case 8:
                        if (4096 & n.flags) {
                            if (0 === o) break t;
                            f = 0;
                            do {
                                (k = s[a + f++]), n.head && k && n.length < 65536 && (n.head.comment += String.fromCharCode(k));
                            } while (k && f < o);
                            if ((512 & n.flags && (n.check = wn(n.check, s, f, a)), (o -= f), (a += f), k)) break t;
                        } else n.head && (n.head.comment = null);
                        n.mode = 9;
                    case 9:
                        if (512 & n.flags) {
                            for (; d < 16; ) {
                                if (0 === o) break t;
                                o--, (c += s[a++] << d), (d += 8);
                            }
                            if (c !== (65535 & n.check)) {
                                (t.msg = "header crc mismatch"), (n.mode = ii);
                                break;
                            }
                            (c = 0), (d = 0);
                        }
                        n.head && ((n.head.hcrc = (n.flags >> 9) & 1), (n.head.done = !0)), (t.adler = n.check = 0), (n.mode = si);
                        break;
                    case 10:
                        for (; d < 32; ) {
                            if (0 === o) break t;
                            o--, (c += s[a++] << d), (d += 8);
                        }
                        (t.adler = n.check = ai(c)), (c = 0), (d = 0), (n.mode = 11);
                    case 11:
                        if (0 === n.havedict) return (t.next_out = r), (t.avail_out = l), (t.next_in = a), (t.avail_in = o), (n.hold = c), (n.bits = d), Xs;
                        (t.adler = n.check = 1), (n.mode = si);
                    case si:
                        if (e === Ks || e === Ws) break t;
                    case 13:
                        if (n.last) {
                            (c >>>= 7 & d), (d -= 7 & d), (n.mode = 27);
                            break;
                        }
                        for (; d < 3; ) {
                            if (0 === o) break t;
                            o--, (c += s[a++] << d), (d += 8);
                        }
                        switch (((n.last = 1 & c), (c >>>= 1), (d -= 1), 3 & c)) {
                            case 0:
                                n.mode = 14;
                                break;
                            case 1:
                                if ((_i(n), (n.mode = 20), e === Ws)) {
                                    (c >>>= 2), (d -= 2);
                                    break t;
                                }
                                break;
                            case 2:
                                n.mode = 17;
                                break;
                            case 3:
                                (t.msg = "invalid block type"), (n.mode = ii);
                        }
                        (c >>>= 2), (d -= 2);
                        break;
                    case 14:
                        for (c >>>= 7 & d, d -= 7 & d; d < 32; ) {
                            if (0 === o) break t;
                            o--, (c += s[a++] << d), (d += 8);
                        }
                        if ((65535 & c) != ((c >>> 16) ^ 65535)) {
                            (t.msg = "invalid stored block lengths"), (n.mode = ii);
                            break;
                        }
                        if (((n.length = 65535 & c), (c = 0), (d = 0), (n.mode = 15), e === Ws)) break t;
                    case 15:
                        n.mode = 16;
                    case 16:
                        if (((f = n.length), f)) {
                            if ((f > o && (f = o), f > l && (f = l), 0 === f)) break t;
                            i.set(s.subarray(a, a + f), r), (o -= f), (a += f), (l -= f), (r += f), (n.length -= f);
                            break;
                        }
                        n.mode = si;
                        break;
                    case 17:
                        for (; d < 14; ) {
                            if (0 === o) break t;
                            o--, (c += s[a++] << d), (d += 8);
                        }
                        if (((n.nlen = 257 + (31 & c)), (c >>>= 5), (d -= 5), (n.ndist = 1 + (31 & c)), (c >>>= 5), (d -= 5), (n.ncode = 4 + (15 & c)), (c >>>= 4), (d -= 4), n.nlen > 286 || n.ndist > 30)) {
                            (t.msg = "too many length or distance symbols"), (n.mode = ii);
                            break;
                        }
                        (n.have = 0), (n.mode = 18);
                    case 18:
                        for (; n.have < n.ncode; ) {
                            for (; d < 3; ) {
                                if (0 === o) break t;
                                o--, (c += s[a++] << d), (d += 8);
                            }
                            (n.lens[A[n.have++]] = 7 & c), (c >>>= 3), (d -= 3);
                        }
                        for (; n.have < 19; ) n.lens[A[n.have++]] = 0;
                        if (((n.lencode = n.lendyn), (n.lenbits = 7), (z = { bits: n.lenbits }), (x = Ps(0, n.lens, 0, 19, n.lencode, 0, n.work, z)), (n.lenbits = z.bits), x)) {
                            (t.msg = "invalid code lengths set"), (n.mode = ii);
                            break;
                        }
                        (n.have = 0), (n.mode = 19);
                    case 19:
                        for (; n.have < n.nlen + n.ndist; ) {
                            for (; ($ = n.lencode[c & ((1 << n.lenbits) - 1)]), (m = $ >>> 24), (p = ($ >>> 16) & 255), (v = 65535 & $), !(m <= d); ) {
                                if (0 === o) break t;
                                o--, (c += s[a++] << d), (d += 8);
                            }
                            if (v < 16) (c >>>= m), (d -= m), (n.lens[n.have++] = v);
                            else {
                                if (16 === v) {
                                    for (E = m + 2; d < E; ) {
                                        if (0 === o) break t;
                                        o--, (c += s[a++] << d), (d += 8);
                                    }
                                    if (((c >>>= m), (d -= m), 0 === n.have)) {
                                        (t.msg = "invalid bit length repeat"), (n.mode = ii);
                                        break;
                                    }
                                    (k = n.lens[n.have - 1]), (f = 3 + (3 & c)), (c >>>= 2), (d -= 2);
                                } else if (17 === v) {
                                    for (E = m + 3; d < E; ) {
                                        if (0 === o) break t;
                                        o--, (c += s[a++] << d), (d += 8);
                                    }
                                    (c >>>= m), (d -= m), (k = 0), (f = 3 + (7 & c)), (c >>>= 3), (d -= 3);
                                } else {
                                    for (E = m + 7; d < E; ) {
                                        if (0 === o) break t;
                                        o--, (c += s[a++] << d), (d += 8);
                                    }
                                    (c >>>= m), (d -= m), (k = 0), (f = 11 + (127 & c)), (c >>>= 7), (d -= 7);
                                }
                                if (n.have + f > n.nlen + n.ndist) {
                                    (t.msg = "invalid bit length repeat"), (n.mode = ii);
                                    break;
                                }
                                for (; f--; ) n.lens[n.have++] = k;
                            }
                        }
                        if (n.mode === ii) break;
                        if (0 === n.lens[256]) {
                            (t.msg = "invalid code -- missing end-of-block"), (n.mode = ii);
                            break;
                        }
                        if (((n.lenbits = 9), (z = { bits: n.lenbits }), (x = Ps(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, z)), (n.lenbits = z.bits), x)) {
                            (t.msg = "invalid literal/lengths set"), (n.mode = ii);
                            break;
                        }
                        if (((n.distbits = 6), (n.distcode = n.distdyn), (z = { bits: n.distbits }), (x = Ps(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, z)), (n.distbits = z.bits), x)) {
                            (t.msg = "invalid distances set"), (n.mode = ii);
                            break;
                        }
                        if (((n.mode = 20), e === Ws)) break t;
                    case 20:
                        n.mode = 21;
                    case 21:
                        if (o >= 6 && l >= 258) {
                            (t.next_out = r),
                                (t.avail_out = l),
                                (t.next_in = a),
                                (t.avail_in = o),
                                (n.hold = c),
                                (n.bits = d),
                                Ds(t, u),
                                (r = t.next_out),
                                (i = t.output),
                                (l = t.avail_out),
                                (a = t.next_in),
                                (s = t.input),
                                (o = t.avail_in),
                                (c = n.hold),
                                (d = n.bits),
                                n.mode === si && (n.back = -1);
                            break;
                        }
                        for (n.back = 0; ($ = n.lencode[c & ((1 << n.lenbits) - 1)]), (m = $ >>> 24), (p = ($ >>> 16) & 255), (v = 65535 & $), !(m <= d); ) {
                            if (0 === o) break t;
                            o--, (c += s[a++] << d), (d += 8);
                        }
                        if (p && 0 == (240 & p)) {
                            for (b = m, w = p, y = v; ($ = n.lencode[y + ((c & ((1 << (b + w)) - 1)) >> b)]), (m = $ >>> 24), (p = ($ >>> 16) & 255), (v = 65535 & $), !(b + m <= d); ) {
                                if (0 === o) break t;
                                o--, (c += s[a++] << d), (d += 8);
                            }
                            (c >>>= b), (d -= b), (n.back += b);
                        }
                        if (((c >>>= m), (d -= m), (n.back += m), (n.length = v), 0 === p)) {
                            n.mode = 26;
                            break;
                        }
                        if (32 & p) {
                            (n.back = -1), (n.mode = si);
                            break;
                        }
                        if (64 & p) {
                            (t.msg = "invalid literal/length code"), (n.mode = ii);
                            break;
                        }
                        (n.extra = 15 & p), (n.mode = 22);
                    case 22:
                        if (n.extra) {
                            for (E = n.extra; d < E; ) {
                                if (0 === o) break t;
                                o--, (c += s[a++] << d), (d += 8);
                            }
                            (n.length += c & ((1 << n.extra) - 1)), (c >>>= n.extra), (d -= n.extra), (n.back += n.extra);
                        }
                        (n.was = n.length), (n.mode = 23);
                    case 23:
                        for (; ($ = n.distcode[c & ((1 << n.distbits) - 1)]), (m = $ >>> 24), (p = ($ >>> 16) & 255), (v = 65535 & $), !(m <= d); ) {
                            if (0 === o) break t;
                            o--, (c += s[a++] << d), (d += 8);
                        }
                        if (0 == (240 & p)) {
                            for (b = m, w = p, y = v; ($ = n.distcode[y + ((c & ((1 << (b + w)) - 1)) >> b)]), (m = $ >>> 24), (p = ($ >>> 16) & 255), (v = 65535 & $), !(b + m <= d); ) {
                                if (0 === o) break t;
                                o--, (c += s[a++] << d), (d += 8);
                            }
                            (c >>>= b), (d -= b), (n.back += b);
                        }
                        if (((c >>>= m), (d -= m), (n.back += m), 64 & p)) {
                            (t.msg = "invalid distance code"), (n.mode = ii);
                            break;
                        }
                        (n.offset = v), (n.extra = 15 & p), (n.mode = 24);
                    case 24:
                        if (n.extra) {
                            for (E = n.extra; d < E; ) {
                                if (0 === o) break t;
                                o--, (c += s[a++] << d), (d += 8);
                            }
                            (n.offset += c & ((1 << n.extra) - 1)), (c >>>= n.extra), (d -= n.extra), (n.back += n.extra);
                        }
                        if (n.offset > n.dmax) {
                            (t.msg = "invalid distance too far back"), (n.mode = ii);
                            break;
                        }
                        n.mode = 25;
                    case 25:
                        if (0 === l) break t;
                        if (((f = u - l), n.offset > f)) {
                            if (((f = n.offset - f), f > n.whave && n.sane)) {
                                (t.msg = "invalid distance too far back"), (n.mode = ii);
                                break;
                            }
                            f > n.wnext ? ((f -= n.wnext), (_ = n.wsize - f)) : (_ = n.wnext - f), f > n.length && (f = n.length), (g = n.window);
                        } else (g = i), (_ = r - n.offset), (f = n.length);
                        f > l && (f = l), (l -= f), (n.length -= f);
                        do {
                            i[r++] = g[_++];
                        } while (--f);
                        0 === n.length && (n.mode = 21);
                        break;
                    case 26:
                        if (0 === l) break t;
                        (i[r++] = n.length), l--, (n.mode = 21);
                        break;
                    case 27:
                        if (n.wrap) {
                            for (; d < 32; ) {
                                if (0 === o) break t;
                                o--, (c |= s[a++] << d), (d += 8);
                            }
                            if (((u -= l), (t.total_out += u), (n.total += u), u && (t.adler = n.check = n.flags ? wn(n.check, i, u, r - u) : vn(n.check, i, u, r - u)), (u = l), (n.flags ? c : ai(c)) !== n.check)) {
                                (t.msg = "incorrect data check"), (n.mode = ii);
                                break;
                            }
                            (c = 0), (d = 0);
                        }
                        n.mode = 28;
                    case 28:
                        if (n.wrap && n.flags) {
                            for (; d < 32; ) {
                                if (0 === o) break t;
                                o--, (c += s[a++] << d), (d += 8);
                            }
                            if (c !== (4294967295 & n.total)) {
                                (t.msg = "incorrect length check"), (n.mode = ii);
                                break;
                            }
                            (c = 0), (d = 0);
                        }
                        n.mode = 29;
                    case 29:
                        x = Gs;
                        break t;
                    case ii:
                        x = Qs;
                        break t;
                    case 31:
                        return ti;
                    case 32:
                    default:
                        return Vs;
                }
            return (
                (t.next_out = r),
                (t.avail_out = l),
                (t.next_in = a),
                (t.avail_in = o),
                (n.hold = c),
                (n.bits = d),
                (n.wsize || (u !== t.avail_out && n.mode < ii && (n.mode < 27 || e !== Js))) && gi(t, t.output, t.next_out, u - t.avail_out),
                (h -= t.avail_in),
                (u -= t.avail_out),
                (t.total_in += h),
                (t.total_out += u),
                (n.total += u),
                n.wrap && u && (t.adler = n.check = n.flags ? wn(n.check, i, u, t.next_out - u) : vn(n.check, i, u, t.next_out - u)),
                (t.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === si ? 128 : 0) + (20 === n.mode || 15 === n.mode ? 256 : 0)),
                ((0 === h && 0 === u) || e === Js) && x === Ys && (x = ei),
                x
            );
        },
        inflateEnd: (t) => {
            if (!t || !t.state) return Vs;
            let e = t.state;
            return e.window && (e.window = null), (t.state = null), Ys;
        },
        inflateGetHeader: (t, e) => {
            if (!t || !t.state) return Vs;
            const n = t.state;
            return 0 == (2 & n.wrap) ? Vs : ((n.head = e), (e.done = !1), Ys);
        },
        inflateSetDictionary: (t, e) => {
            const n = e.length;
            let s, i, a;
            return t && t.state ? ((s = t.state), 0 !== s.wrap && 11 !== s.mode ? Vs : 11 === s.mode && ((i = 1), (i = vn(i, e, n, 0)), i !== s.check) ? Qs : ((a = gi(t, e, n, n)), a ? ((s.mode = 31), ti) : ((s.havedict = 1), Ys))) : Vs;
        },
        inflateInfo: "pako inflate (from Nodeca project)",
    };
    var pi = function () {
        (this.text = 0), (this.time = 0), (this.xflags = 0), (this.os = 0), (this.extra = null), (this.extra_len = 0), (this.name = ""), (this.comment = ""), (this.hcrc = 0), (this.done = !1);
    };
    const vi = Object.prototype.toString,
        { Z_NO_FLUSH: bi, Z_FINISH: wi, Z_OK: yi, Z_STREAM_END: ki, Z_NEED_DICT: xi, Z_STREAM_ERROR: $i, Z_DATA_ERROR: Si, Z_MEM_ERROR: zi } = kn;
    function Ei(t) {
        this.options = vs({ chunkSize: 65536, windowBits: 15, to: "" }, t || {});
        const e = this.options;
        e.raw && e.windowBits >= 0 && e.windowBits < 16 && ((e.windowBits = -e.windowBits), 0 === e.windowBits && (e.windowBits = -15)),
            !(e.windowBits >= 0 && e.windowBits < 16) || (t && t.windowBits) || (e.windowBits += 32),
            e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15),
            (this.err = 0),
            (this.msg = ""),
            (this.ended = !1),
            (this.chunks = []),
            (this.strm = new Ss()),
            (this.strm.avail_out = 0);
        let n = mi.inflateInit2(this.strm, e.windowBits);
        if (n !== yi) throw new Error(yn[n]);
        if (
            ((this.header = new pi()),
            mi.inflateGetHeader(this.strm, this.header),
            e.dictionary &&
                ("string" == typeof e.dictionary ? (e.dictionary = ks(e.dictionary)) : "[object ArrayBuffer]" === vi.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)),
                e.raw && ((n = mi.inflateSetDictionary(this.strm, e.dictionary)), n !== yi)))
        )
            throw new Error(yn[n]);
    }
    function Ai(t, e) {
        const n = new Ei(e);
        if ((n.push(t), n.err)) throw n.msg || yn[n.err];
        return n.result;
    }
    (Ei.prototype.push = function (t, e) {
        const n = this.strm,
            s = this.options.chunkSize,
            i = this.options.dictionary;
        let a, r, o;
        if (this.ended) return !1;
        for (r = e === ~~e ? e : !0 === e ? wi : bi, "[object ArrayBuffer]" === vi.call(t) ? (n.input = new Uint8Array(t)) : (n.input = t), n.next_in = 0, n.avail_in = n.input.length; ; ) {
            for (
                0 === n.avail_out && ((n.output = new Uint8Array(s)), (n.next_out = 0), (n.avail_out = s)),
                    a = mi.inflate(n, r),
                    a === xi && i && ((a = mi.inflateSetDictionary(n, i)), a === yi ? (a = mi.inflate(n, r)) : a === Si && (a = xi));
                n.avail_in > 0 && a === ki && n.state.wrap > 0 && 0 !== t[n.next_in];

            )
                mi.inflateReset(n), (a = mi.inflate(n, r));
            switch (a) {
                case $i:
                case Si:
                case xi:
                case zi:
                    return this.onEnd(a), (this.ended = !0), !1;
            }
            if (((o = n.avail_out), n.next_out && (0 === n.avail_out || a === ki)))
                if ("string" === this.options.to) {
                    let t = $s(n.output, n.next_out),
                        e = n.next_out - t,
                        i = xs(n.output, t);
                    (n.next_out = e), (n.avail_out = s - e), e && n.output.set(n.output.subarray(t, t + e), 0), this.onData(i);
                } else this.onData(n.output.length === n.next_out ? n.output : n.output.subarray(0, n.next_out));
            if (a !== yi || 0 !== o) {
                if (a === ki) return (a = mi.inflateEnd(this.strm)), this.onEnd(a), (this.ended = !0), !0;
                if (0 === n.avail_in) break;
            }
        }
        return !0;
    }),
        (Ei.prototype.onData = function (t) {
            this.chunks.push(t);
        }),
        (Ei.prototype.onEnd = function (t) {
            t === yi && ("string" === this.options.to ? (this.result = this.chunks.join("")) : (this.result = bs(this.chunks))), (this.chunks = []), (this.err = t), (this.msg = this.strm.msg);
        });
    var Ci = {
        Inflate: Ei,
        inflate: Ai,
        inflateRaw: function (t, e) {
            return ((e = e || {}).raw = !0), Ai(t, e);
        },
        ungzip: Ai,
        constants: kn,
    };
    const { Deflate: Ri, deflate: Oi, deflateRaw: Li, gzip: ji } = Us,
        { Inflate: Ni, inflate: Ii, inflateRaw: Zi, ungzip: Ti } = Ci;
    var Ui = { Deflate: Ri, deflate: Oi, deflateRaw: Li, gzip: ji, Inflate: Ni, inflate: Ii, inflateRaw: Zi, ungzip: Ti, constants: kn };
    function Di(e) {
        let n, s, i, a, r, o, l, c, d, h, u, f, _, g, m, p, v, b;
        return {
            c() {
                (n = x("div")),
                    (s = x("div")),
                    (i = z()),
                    (a = x("div")),
                    (r = z()),
                    (o = x("div")),
                    (l = z()),
                    (c = x("div")),
                    (d = z()),
                    (h = x("div")),
                    (u = z()),
                    (f = x("div")),
                    (_ = z()),
                    (g = x("div")),
                    (m = z()),
                    (p = x("div")),
                    (v = z()),
                    (b = x("div")),
                    C(s, "class", "sk-cube sk-cube1 svelte-vw5bzd"),
                    N(s, "background-color", e[0]),
                    C(a, "class", "sk-cube sk-cube2 svelte-vw5bzd"),
                    N(a, "background-color", e[0]),
                    C(o, "class", "sk-cube sk-cube3 svelte-vw5bzd"),
                    N(o, "background-color", e[0]),
                    C(c, "class", "sk-cube sk-cube4 svelte-vw5bzd"),
                    N(c, "background-color", e[0]),
                    C(h, "class", "sk-cube sk-cube5 svelte-vw5bzd"),
                    N(h, "background-color", e[0]),
                    C(f, "class", "sk-cube sk-cube6 svelte-vw5bzd"),
                    N(f, "background-color", e[0]),
                    C(g, "class", "sk-cube sk-cube7 svelte-vw5bzd"),
                    N(g, "background-color", e[0]),
                    C(p, "class", "sk-cube sk-cube8 svelte-vw5bzd"),
                    N(p, "background-color", e[0]),
                    C(b, "class", "sk-cube sk-cube9 svelte-vw5bzd"),
                    N(b, "background-color", e[0]),
                    C(n, "class", "sk-cube-grid svelte-vw5bzd");
            },
            m(t, e) {
                y(t, n, e), w(n, s), w(n, i), w(n, a), w(n, r), w(n, o), w(n, l), w(n, c), w(n, d), w(n, h), w(n, u), w(n, f), w(n, _), w(n, g), w(n, m), w(n, p), w(n, v), w(n, b);
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                t && k(n);
            },
        };
    }
    function Mi(t) {
        return ["#" + (((1 << 24) * Math.random()) | 0).toString(16)];
    }
    class Bi extends Et {
        constructor(t) {
            super(), zt(this, t, Mi, Di, o, {});
        }
    }
    function Fi(e) {
        let n, s, i, r, o, l, c, d, h, u, f, _, g, m, p;
        return {
            c() {
                (n = x("div")),
                    (s = x("h1")),
                    (s.textContent = "Export to Calendar"),
                    (i = z()),
                    (r = x("button")),
                    (r.textContent = "Google Calendar"),
                    (o = z()),
                    (l = x("button")),
                    (l.textContent = "Download ICS File"),
                    (c = z()),
                    (d = x("hr")),
                    (h = z()),
                    (u = x("h1")),
                    (u.textContent = "Section Crns"),
                    (f = z()),
                    (_ = x("textarea")),
                    C(s, "class", "svelte-1c50q0u"),
                    C(r, "class", "svelte-1c50q0u"),
                    C(l, "class", "svelte-1c50q0u"),
                    N(d, "width", "75%"),
                    C(u, "class", "svelte-1c50q0u"),
                    N(_, "height", 2 * e[0].length + "em"),
                    N(_, "overflow", "hidden"),
                    (_.value = g = [...new Set(e[0])].join("\n")),
                    C(_, "class", "svelte-1c50q0u"),
                    N(n, "position", "relative"),
                    N(n, "max-height", "calc(100vh - 5%)"),
                    N(n, "overflow", "auto");
            },
            m(t, a) {
                y(t, n, a), w(n, s), w(n, i), w(n, r), w(n, o), w(n, l), w(n, c), w(n, d), w(n, h), w(n, u), w(n, f), w(n, _), m || ((p = [A(r, "click", e[3]), A(l, "click", e[4])]), (m = !0));
            },
            p(t, [e]) {
                1 & e && N(_, "height", 2 * t[0].length + "em"), 1 & e && g !== (g = [...new Set(t[0])].join("\n")) && (_.value = g);
            },
            i: t,
            o: t,
            d(t) {
                t && k(n), (m = !1), a(p);
            },
        };
    }
    function Hi(t, e, n) {
        let s, i, a;
        l(t, jt, (t) => n(5, (s = t))), l(t, Tt, (t) => n(0, (i = t))), l(t, Nt, (t) => n(6, (a = t)));
        const r = `https://jcurda-api.herokuapp.com/ical?term=${s.code}&crns=${i}&courses=${a}`;
        function o() {
            fetch(r)
                .then((t) => t.text())
                .then((t) => {
                    fetch(`https://jcurda-api.herokuapp.com/cal/${t}`)
                        .then((t) => t.blob())
                        .then((t) => URL.createObjectURL(t))
                        .then((t) => {
                            var e = document.createElement("a");
                            (e.href = t), (e.download = "schedule.ics"), document.body.appendChild(e), e.click(), document.body.removeChild(e);
                        });
                });
        }
        function c() {
            fetch(r)
                .then((t) => t.text())
                .then((t) => {
                    window.open(`https://calendar.google.com/calendar/u/0/r?cid=http://jcurda-api.herokuapp.com/cal/${t}`, "_blank");
                });
        }
        return [i, o, c, () => c(), () => o()];
    }
    class qi extends Et {
        constructor(t) {
            super(), zt(this, t, Hi, Fi, o, {});
        }
    }
    function Pi(e) {
        let n, s, i, a, r, o;
        return {
            c() {
                (n = x("div")),
                    (s = $("svg")),
                    (i = $("path")),
                    C(i, "fill", "currentColor"),
                    N(i, "stroke", "black"),
                    N(i, "stroke-width", ".5px"),
                    N(i, "stroke-linejoin", "round"),
                    C(
                        i,
                        "d",
                        "M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z"
                    ),
                    C(i, "class", "svelte-7q33q5"),
                    C(s, "class", "icon svelte-7q33q5"),
                    C(s, "width", "16"),
                    C(s, "height", "16"),
                    C(s, "viewBox", "0 0 24 24"),
                    C(n, "class", (a = "pin showPulse " + (e[0] ? "selected" : "") + " svelte-7q33q5")),
                    C(n, "tabindex", "-1");
            },
            m(t, a) {
                y(t, n, a), w(n, s), w(s, i), r || ((o = A(n, "click", e[1])), (r = !0));
            },
            p(t, [e]) {
                1 & e && a !== (a = "pin showPulse " + (t[0] ? "selected" : "") + " svelte-7q33q5") && C(n, "class", a);
            },
            i: t,
            o: t,
            d(t) {
                t && k(n), (r = !1), o();
            },
        };
    }
    function Ji(t, e, n) {
        let s, i;
        l(t, Dt, (t) => n(3, (i = t)));
        let { id: a } = e;
        return (
            (t.$$set = (t) => {
                "id" in t && n(2, (a = t.id));
            }),
            (t.$$.update = () => {
                12 & t.$$.dirty && n(0, (s = i.includes(a)));
            }),
            [
                s,
                function () {
                    if ((n(0, (s = !s)), s)) Dt.set([...i, a]);
                    else {
                        let t = i;
                        t.splice(t.indexOf(a), 1), Dt.set(t);
                    }
                },
                a,
                i,
            ]
        );
    }
    class Ki extends Et {
        constructor(t) {
            super(), zt(this, t, Ji, Pi, o, { id: 2 });
        }
    }
    const { window: Wi } = vt;
    function Yi(t) {
        let e, n, s, i, a, r, o, l, c;
        return {
            c() {
                (e = x("h1")),
                    (e.textContent = "Select Courses"),
                    (n = z()),
                    (s = x("ul")),
                    (s.innerHTML =
                        '<li style="text-align:left">Browse through the generated schedules until you find one that is right for you</li> \n\t\t\t<li style="text-align:left">Pin a section to only show schedules containing that section</li> \n\t\t\t\n\t\t\t<li style="text-align:left">Save your schedule by downloading the iCal file to import into Google Calendar, then use the list of CRNs to create a term plan on RWEB</li>'),
                    (i = z()),
                    (a = x("div")),
                    (r = x("input")),
                    (o = x("label")),
                    (o.textContent = "Never show again"),
                    N(e, "margin", "0"),
                    C(e, "class", "svelte-ocnj07"),
                    N(s, "max-width", "80%"),
                    C(r, "id", "show_again"),
                    C(r, "type", "checkbox"),
                    C(o, "for", "show_again"),
                    N(o, "display", "inline");
            },
            m(d, h) {
                y(d, e, h), y(d, n, h), y(d, s, h), y(d, i, h), y(d, a, h), w(a, r), (r.checked = t[4].schedules), w(a, o), l || ((c = A(r, "change", t[14])), (l = !0));
            },
            p(t, e) {
                16 & e && (r.checked = t[4].schedules);
            },
            d(t) {
                t && k(e), t && k(n), t && k(s), t && k(i), t && k(a), (l = !1), c();
            },
        };
    }
    function Gi(t) {
        let e, n, s, i;
        return (
            (e = new Bi({})),
            {
                c() {
                    xt(e.$$.fragment), (n = z()), (s = x("h1")), (s.textContent = "Loading Schedules..."), C(s, "class", "svelte-ocnj07");
                },
                m(t, a) {
                    $t(e, t, a), y(t, n, a), y(t, s, a), (i = !0);
                },
                i(t) {
                    i || (_t(e.$$.fragment, t), (i = !0));
                },
                o(t) {
                    gt(e.$$.fragment, t), (i = !1);
                },
                d(t) {
                    St(e, t), t && k(n), t && k(s);
                },
            }
        );
    }
    function Xi(t) {
        let e, n;
        return (
            (e = new qi({})),
            {
                c() {
                    xt(e.$$.fragment);
                },
                m(t, s) {
                    $t(e, t, s), (n = !0);
                },
                i(t) {
                    n || (_t(e.$$.fragment, t), (n = !0));
                },
                o(t) {
                    gt(e.$$.fragment, t), (n = !1);
                },
                d(t) {
                    St(e, t);
                },
            }
        );
    }
    function Vi(t) {
        let e,
            n,
            s,
            i,
            r,
            o,
            l,
            c,
            d,
            h,
            u,
            f,
            _,
            g,
            m,
            p,
            v,
            b,
            $,
            E,
            R,
            O,
            j,
            I,
            Z,
            T,
            U,
            D,
            M,
            B,
            F,
            H,
            q,
            P = t[1].length + "";
        et(t[13]);
        let J =
                t[7] &&
                (function (t) {
                    let e, n;
                    return (
                        (e = new me({ props: { showModal: "true", width: (t[3] > 1024 ? 35 : 60) + "%", height: "60%", $$slots: { default: [Yi] }, $$scope: { ctx: t } } })),
                        {
                            c() {
                                xt(e.$$.fragment);
                            },
                            m(t, s) {
                                $t(e, t, s), (n = !0);
                            },
                            p(t, n) {
                                const s = {};
                                8 & n && (s.width = (t[3] > 1024 ? 35 : 60) + "%"), 67108880 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
                            },
                            i(t) {
                                n || (_t(e.$$.fragment, t), (n = !0));
                            },
                            o(t) {
                                gt(e.$$.fragment, t), (n = !1);
                            },
                            d(t) {
                                St(e, t);
                            },
                        }
                    );
                })(t),
            K = 0 === t[0].length && Gi();
        function Y(e) {
            t[15].call(null, e);
        }
        let G = { width: (t[3] > 1024 ? 35 : 60) + "%", height: "55%", $$slots: { default: [Xi] }, $$scope: { ctx: t } };
        return (
            void 0 !== t[2] && (G.showModal = t[2]),
            (i = new me({ props: G })),
            W.push(() => kt(i, "showModal", Y)),
            {
                c() {
                    J && J.c(),
                        (e = z()),
                        K && K.c(),
                        (n = z()),
                        (s = x("div")),
                        xt(i.$$.fragment),
                        (o = z()),
                        (l = x("div")),
                        (c = x("span")),
                        (d = S("Showing schedule ")),
                        (h = x("input")),
                        (_ = S(" of ")),
                        (g = S(P)),
                        (p = z()),
                        (v = x("span")),
                        (b = S("Save Schedule")),
                        (E = z()),
                        (R = x("span")),
                        (O = S("Previous Schedule")),
                        (I = z()),
                        (Z = x("span")),
                        (T = S("Next Schedule")),
                        (D = z()),
                        (M = x("div")),
                        (M.innerHTML = '<div class="dhx_cal_navline svelte-ocnj07"></div> \n    <div class="dhx_cal_header svelte-ocnj07"></div> \n    <div class="dhx_cal_data svelte-ocnj07"></div>'),
                        C(h, "class", "inpnum svelte-ocnj07"),
                        C(h, "type", "number"),
                        (h.value = u = t[5] + 1),
                        C(h, "min", "1"),
                        C(h, "max", (f = t[1].length)),
                        C(c, "class", (m = "schedule_num " + t[6] + " svelte-ocnj07")),
                        C(v, "class", ($ = "save button " + t[6] + " svelte-ocnj07")),
                        C(R, "class", (j = "prev button " + t[6] + " svelte-ocnj07")),
                        C(Z, "class", (U = "next button " + t[6] + " svelte-ocnj07")),
                        C(l, "class", "overlay svelte-ocnj07"),
                        C(M, "class", "font svelte-ocnj07"),
                        C(s, "id", "scheduler_here"),
                        C(s, "class", (B = "dhx_cal_container " + t[6] + " svelte-ocnj07")),
                        N(s, "width", "100%"),
                        N(s, "height", "90%"),
                        N(s, "visibility", t[0].length > 0 ? "visible" : "hidden");
                },
                m(a, r) {
                    J && J.m(a, r),
                        y(a, e, r),
                        K && K.m(a, r),
                        y(a, n, r),
                        y(a, s, r),
                        $t(i, s, null),
                        w(s, o),
                        w(s, l),
                        w(l, c),
                        w(c, d),
                        w(c, h),
                        w(c, _),
                        w(c, g),
                        w(l, p),
                        w(l, v),
                        w(v, b),
                        w(l, E),
                        w(l, R),
                        w(R, O),
                        w(l, I),
                        w(l, Z),
                        w(Z, T),
                        w(s, D),
                        w(s, M),
                        (F = !0),
                        H || ((q = [A(Wi, "resize", t[13]), A(h, "input", t[16]), A(v, "click", t[17]), A(R, "click", t[10]), A(Z, "click", t[9])]), (H = !0));
                },
                p(t, [e]) {
                    t[7] && J.p(t, e),
                        0 === t[0].length
                            ? K
                                ? 1 & e && _t(K, 1)
                                : ((K = Gi()), K.c(), _t(K, 1), K.m(n.parentNode, n))
                            : K &&
                              (ut(),
                              gt(K, 1, 1, () => {
                                  K = null;
                              }),
                              ft());
                    const a = {};
                    8 & e && (a.width = (t[3] > 1024 ? 35 : 60) + "%"),
                        67108864 & e && (a.$$scope = { dirty: e, ctx: t }),
                        !r && 4 & e && ((r = !0), (a.showModal = t[2]), nt(() => (r = !1))),
                        i.$set(a),
                        (!F || (32 & e && u !== (u = t[5] + 1))) && (h.value = u),
                        (!F || (2 & e && f !== (f = t[1].length))) && C(h, "max", f),
                        (!F || 2 & e) && P !== (P = t[1].length + "") && L(g, P),
                        (!F || (64 & e && m !== (m = "schedule_num " + t[6] + " svelte-ocnj07"))) && C(c, "class", m),
                        (!F || (64 & e && $ !== ($ = "save button " + t[6] + " svelte-ocnj07"))) && C(v, "class", $),
                        (!F || (64 & e && j !== (j = "prev button " + t[6] + " svelte-ocnj07"))) && C(R, "class", j),
                        (!F || (64 & e && U !== (U = "next button " + t[6] + " svelte-ocnj07"))) && C(Z, "class", U),
                        (!F || (64 & e && B !== (B = "dhx_cal_container " + t[6] + " svelte-ocnj07"))) && C(s, "class", B),
                        (!F || 1 & e) && N(s, "visibility", t[0].length > 0 ? "visible" : "hidden");
                },
                i(t) {
                    F || (_t(J), _t(K), _t(i.$$.fragment, t), (F = !0));
                },
                o(t) {
                    gt(J), gt(K), gt(i.$$.fragment, t), (F = !1);
                },
                d(t) {
                    J && J.d(t), t && k(e), K && K.d(t), t && k(n), t && k(s), St(i), (H = !1), a(q);
                },
            }
        );
    }
    function Qi(t, e, n) {
        let s, i, a, r, o, c, d, h, u, f;
        l(t, Zt, (t) => n(4, (a = t))),
            l(t, Tt, (t) => n(11, (r = t))),
            l(t, Dt, (t) => n(12, (o = t))),
            l(t, Ut, (t) => n(19, (c = t))),
            l(t, Nt, (t) => n(20, (d = t))),
            l(t, jt, (t) => n(21, (h = t))),
            l(t, It, (t) => n(22, (u = t))),
            l(t, Ot, (t) => n(6, (f = t)));
        const _ = !a.schedules;
        let g = [],
            m = !1,
            p = [];
        var v;
        J(async () => {
            if (
                ((scheduler.config.multi_day = !0),
                (scheduler.config.readonly = !0),
                (scheduler.config.start_on_monday = !1),
                (scheduler.config.first_hour = 7),
                (scheduler.config.last_hour = 24),
                (scheduler.config.hour_date = "%h %A"),
                (scheduler.config.day_date = "%l"),
                (scheduler.config.hour_size_px = 42),
                scheduler.init("scheduler_here", new Date(2020, 0, 0), "week"),
                scheduler.attachEvent("onClick", function (t, e) {
                    return !0;
                }),
                (scheduler.templates.event_date = function (t) {
                    return scheduler.date.date_to_str("%h:%i")(t);
                }),
                scheduler.attachEvent("onDataRender", function () {
                    var t = document.getElementsByClassName("dhx_cal_event");
                    for (let t = 0; t < b.length; t++) b[t].$destroy();
                    b = [];
                    for (var e = 0; e < t.length; e++) {
                        let n = t[e];
                        for (const t of n.getElementsByClassName("dhx_event_resize")) t.remove();
                        const s = new Ki({ target: n, props: { id: parseInt(n.getAttribute("event_id")).toString() } });
                        b.push(s);
                    }
                }),
                c.length)
            )
                n(0, (p = c)), y();
            else if (d.length) {
                const t = new EventSource(`https://jcurda-api.herokuapp.com/schedules?term=${h.code}&courses=${d.join(",")}&options=${JSON.stringify(u)}`);
                t.addEventListener("error", (e) => {
                    const n = e.data;
                    console.log(n), window.alert(n), Lt.set("Select Courses"), t.close();
                }),
                    t.addEventListener("message", (t) => {
                        const e = atob(t.data.substring(2, t.data.length - 1))
                                .split("")
                                .map(function (t) {
                                    return t.charCodeAt(0);
                                }),
                            s = new Uint8Array(e),
                            i = JSON.parse(Ui.inflate(s, { to: "string" }));
                        n(0, (p = [...p, i]));
                    }),
                    t.addEventListener("stream-end", (e) => {
                        Ut.set(p.slice(0, 2500)), y(), t.close();
                    });
            } else window.alert("You have no couses selected!"), Lt.set("Select Courses");
        }),
            (v = () => {
                g.readyState && 1 === g.readyState && g.close();
            }),
            P().$$.on_destroy.push(v);
        let b = [];
        const w = (t) => {
            let e = t.target.value - 1;
            e >= 0 && e <= i.length && (n(5, (s = e)), y());
        };
        function y() {
            if (0 === p.length) return;
            let t = 0 == i.length ? p : i;
            scheduler.clearAll();
            try {
                scheduler.parse(t[s][0]), Tt.set(t[s][1]);
            } catch (t) {
                console.log(t);
            }
        }
        let k = 0;
        return (
            (t.$$.update = () => {
                var e;
                4097 & t.$$.dirty &&
                    n(
                        1,
                        (i = p.filter(function (t, e) {
                            for (const e of o) if (!t[1].includes(e)) return !1;
                            return !0;
                        }))
                    ),
                    2050 & t.$$.dirty && n(5, (s = i ? ((e = i.findIndex((t) => t[1].every((t, e) => t === r[e]))) >= 0 ? e : 0) : 0));
            }),
            [
                p,
                i,
                m,
                k,
                a,
                s,
                f,
                _,
                w,
                () => {
                    s + 1 >= i.length || (n(5, s++, s), y());
                },
                () => {
                    s <= 0 || (n(5, s--, s), y());
                },
                r,
                o,
                function () {
                    n(3, (k = Wi.innerWidth));
                },
                function () {
                    (a.schedules = this.checked), Zt.set(a);
                },
                function (t) {
                    (m = t), n(2, m);
                },
                (t) => w(t),
                () => n(2, (m = !m)),
            ]
        );
    }
    class ta extends Et {
        constructor(t) {
            super(), zt(this, t, Qi, Vi, o, {});
        }
    }
    function ea(t, e, n) {
        let s;
        l(t, Rt, (t) => n(1, (s = t)));
        let { current: i } = e;
        return (
            i != s && (Lt.set("Home"), jt.set({}), Nt.set([]), Rt.set(i), localStorage.removeItem("options"), location.reload()),
            (t.$$set = (t) => {
                "current" in t && n(0, (i = t.current));
            }),
            [i]
        );
    }
    class na extends Et {
        constructor(t) {
            super(), zt(this, t, ea, null, o, { current: 0 });
        }
    }
    function sa(t) {
        let e, n;
        return (
            (e = new ta({})),
            {
                c() {
                    xt(e.$$.fragment);
                },
                m(t, s) {
                    $t(e, t, s), (n = !0);
                },
                i(t) {
                    n || (_t(e.$$.fragment, t), (n = !0));
                },
                o(t) {
                    gt(e.$$.fragment, t), (n = !1);
                },
                d(t) {
                    St(e, t);
                },
            }
        );
    }
    function ia(t) {
        let e, n;
        return (
            (e = new je({})),
            {
                c() {
                    xt(e.$$.fragment);
                },
                m(t, s) {
                    $t(e, t, s), (n = !0);
                },
                i(t) {
                    n || (_t(e.$$.fragment, t), (n = !0));
                },
                o(t) {
                    gt(e.$$.fragment, t), (n = !1);
                },
                d(t) {
                    St(e, t);
                },
            }
        );
    }
    function aa(t) {
        let e, n;
        return (
            (e = new ie({})),
            {
                c() {
                    xt(e.$$.fragment);
                },
                m(t, s) {
                    $t(e, t, s), (n = !0);
                },
                i(t) {
                    n || (_t(e.$$.fragment, t), (n = !0));
                },
                o(t) {
                    gt(e.$$.fragment, t), (n = !1);
                },
                d(t) {
                    St(e, t);
                },
            }
        );
    }
    function ra(t) {
        let e, n, s, i, a, r, o, l, c, d;
        (e = new na({ props: { current: oa } })), (a = new Vt({}));
        const h = [aa, ia, sa],
            f = [];
        function _(t, e) {
            return "Home" == t[1] ? 0 : "Select Courses" == t[1] ? 1 : "Choose Schedule" == t[1] ? 2 : -1;
        }
        return (
            ~(o = _(t)) && (l = f[o] = h[o](t)),
            {
                c() {
                    xt(e.$$.fragment),
                        (n = z()),
                        (s = x("body")),
                        (i = x("div")),
                        xt(a.$$.fragment),
                        (r = z()),
                        l && l.c(),
                        N(i, "height", "100%"),
                        N(i, "overflow", "hidden"),
                        C(i, "class", "svelte-wqrz4a"),
                        C(s, "class", (c = u(t[0]) + " svelte-wqrz4a"));
                },
                m(t, l) {
                    $t(e, t, l), y(t, n, l), y(t, s, l), w(s, i), $t(a, i, null), w(i, r), ~o && f[o].m(i, null), (d = !0);
                },
                p(t, [e]) {
                    let n = o;
                    (o = _(t)),
                        o !== n &&
                            (l &&
                                (ut(),
                                gt(f[n], 1, 1, () => {
                                    f[n] = null;
                                }),
                                ft()),
                            ~o ? ((l = f[o]), l || ((l = f[o] = h[o](t)), l.c()), _t(l, 1), l.m(i, null)) : (l = null)),
                        (!d || (1 & e && c !== (c = u(t[0]) + " svelte-wqrz4a"))) && C(s, "class", c);
                },
                i(t) {
                    d || (_t(e.$$.fragment, t), _t(a.$$.fragment, t), _t(l), (d = !0));
                },
                o(t) {
                    gt(e.$$.fragment, t), gt(a.$$.fragment, t), gt(l), (d = !1);
                },
                d(t) {
                    St(e, t), t && k(n), t && k(s), St(a), ~o && f[o].d();
                },
            }
        );
    }
    const oa = 1.4;
    function la(t, e, n) {
        let s, i;
        return l(t, Ot, (t) => n(0, (s = t))), l(t, Lt, (t) => n(1, (i = t))), [s, i];
    }
    return new (class extends Et {
        constructor(t) {
            super(), zt(this, t, la, ra, o, {});
        }
    })({ target: document.body });
})();
//# sourceMappingURL=bundle.js.map
