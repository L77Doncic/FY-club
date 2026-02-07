(self.webpackChunk = self.webpackChunk || []).push([
  ["992"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new U.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function i(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function a() {}
        function r(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var i = n;
          return (
            $.test(e) || !q.test(e)
              ? (i = parseInt(e, 10))
              : q.test(e) && (i = 1e3 * parseFloat(e)),
            0 > i && (i = 0),
            i == i ? i : n
          );
        }
        function o(e) {
          z.debug && window && window.console.warn(e);
        }
        var c,
          l,
          s,
          u = (function (e, t, n) {
            function i(e) {
              return "object" == typeof e;
            }
            function a(e) {
              return "function" == typeof e;
            }
            function r() {}
            return function o(c, l) {
              function s() {
                var e = new u();
                return (a(e.init) && e.init.apply(e, arguments), e);
              }
              function u() {}
              (l === n && ((l = c), (c = Object)), (s.Bare = u));
              var d,
                f = (r[e] = c[e]),
                p = (u[e] = s[e] = new r());
              return (
                (p.constructor = s),
                (s.mixin = function (t) {
                  return ((u[e] = s[e] = o(s, t)[e]), s);
                }),
                (s.open = function (e) {
                  if (
                    ((d = {}),
                    a(e) ? (d = e.call(s, p, f, s, c)) : i(e) && (d = e),
                    i(d))
                  )
                    for (var n in d) t.call(d, n) && (p[n] = d[n]);
                  return (a(p.init) || (p.init = c), s);
                }),
                s.open(l)
              );
            };
          })("prototype", {}.hasOwnProperty),
          d = {
            ease: [
              "ease",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return (
                  t +
                  n *
                    (-2.75 * r * a + 11 * a * a + -15.5 * r + 8 * a + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return t + n * (-1 * r * a + 3 * a * a + -3 * r + 2 * a);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return (
                  t +
                  n *
                    (0.3 * r * a + -1.6 * a * a + 2.2 * r + -1.8 * a + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return t + n * (2 * r * a + -5 * a * a + 2 * r + 2 * a);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, i) {
                return (n * e) / i + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, i) {
                return n * (e /= i) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, i) {
                return -n * (e /= i) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, i) {
                return -n * ((e = e / i - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, i) {
                return -n * Math.cos((e / i) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, i) {
                return n * Math.sin((e / i) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, i) {
                return (-n / 2) * (Math.cos((Math.PI * e) / i) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, i) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / i - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, i) {
                return e === i
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / i) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, i) {
                return 0 === e
                  ? t
                  : e === i
                    ? t + n
                    : (e /= i / 2) < 1
                      ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                      : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, i) {
                return -n * (Math.sqrt(1 - (e /= i) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, i) {
                return n * Math.sqrt(1 - (e = e / i - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  n * (e /= i) * e * ((a + 1) * e - a) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  n * ((e = e / i - 1) * e * ((a + 1) * e + a) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  (e /= i / 2) < 1
                    ? (n / 2) * e * e * (((a *= 1.525) + 1) * e - a) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          g = "bkwld-tram",
          E = /[\-\.0-9]/g,
          y = /[A-Z]/,
          I = "number",
          m = /^(rgb|#)/,
          T = /(em|cm|mm|in|pt|pc|px)$/,
          b = /(em|cm|mm|in|pt|pc|px|%)$/,
          O = /(deg|rad|turn)$/,
          h = "unitless",
          _ = /(all|none) 0s ease 0s/,
          v = /^(width|height)$/,
          R = document.createElement("a"),
          A = ["Webkit", "Moz", "O", "ms"],
          S = ["-webkit-", "-moz-", "-o-", "-ms-"],
          N = function (e) {
            if (e in R.style) return { dom: e, css: e };
            var t,
              n,
              i = "",
              a = e.split("-");
            for (t = 0; t < a.length; t++)
              i += a[t].charAt(0).toUpperCase() + a[t].slice(1);
            for (t = 0; t < A.length; t++)
              if ((n = A[t] + i) in R.style) return { dom: n, css: S[t] + e };
          },
          L = (t.support = {
            bind: Function.prototype.bind,
            transform: N("transform"),
            transition: N("transition"),
            backface: N("backface-visibility"),
            timing: N("transition-timing-function"),
          });
        if (L.transition) {
          var C = L.timing.dom;
          if (((R.style[C] = d["ease-in-back"][0]), !R.style[C]))
            for (var w in f) d[w][0] = f[w];
        }
        var P = (t.frame =
            (c =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && L.bind
              ? c.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          M = (t.now =
            (s =
              (l = p.performance) &&
              (l.now || l.webkitNow || l.msNow || l.mozNow)) && L.bind
              ? s.bind(l)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          F = u(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, i = []; ++t < n; ) {
                    var a = e[t];
                    a && i.push(a);
                  }
                  return i;
                })(("" + e).split(" ")),
                i = n[0];
              t = t || {};
              var a = Q[i];
              if (!a) return o("Unsupported property: " + i);
              if (!t.weak || !this.props[i]) {
                var r = a[0],
                  c = this.props[i];
                return (
                  c || (c = this.props[i] = new r.Bare()),
                  c.init(this.$el, n, a, t),
                  c
                );
              }
            }
            function i(e, t, i) {
              if (e) {
                var o = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == o && t)
                )
                  return (
                    (this.timer = new X({
                      duration: e,
                      context: this,
                      complete: a,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == o && t) {
                  switch (e) {
                    case "hide":
                      l.call(this);
                      break;
                    case "stop":
                      c.call(this);
                      break;
                    case "redraw":
                      s.call(this);
                      break;
                    default:
                      n.call(this, e, i && i[1]);
                  }
                  return a.call(this);
                }
                if ("function" == o) return void e.call(this, this);
                if ("object" == o) {
                  var f = 0;
                  (d.call(
                    this,
                    e,
                    function (e, t) {
                      (e.span > f && (f = e.span), e.stop(), e.animate(t));
                    },
                    function (e) {
                      "wait" in e && (f = r(e.wait, 0));
                    },
                  ),
                    u.call(this),
                    f > 0 &&
                      ((this.timer = new X({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = a)));
                  var p = this,
                    g = !1,
                    E = {};
                  P(function () {
                    (d.call(p, e, function (e) {
                      e.active && ((g = !0), (E[e.name] = e.nextStyle));
                    }),
                      g && p.$el.css(E));
                  });
                }
              }
            }
            function a() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                i.call(this, e.options, !0, e.args);
              }
            }
            function c(e) {
              var t;
              (this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                d.call(this, t, f),
                u.call(this));
            }
            function l() {
              (c.call(this), (this.el.style.display = "none"));
            }
            function s() {
              this.el.offsetHeight;
            }
            function u() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              ((n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[L.transition.dom] = n)));
            }
            function d(e, t, i) {
              var a,
                r,
                o,
                c,
                l = t !== f,
                s = {};
              for (a in e)
                ((o = e[a]),
                  a in Y
                    ? (s.transform || (s.transform = {}), (s.transform[a] = o))
                    : (y.test(a) &&
                        (a = a.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      a in Q ? (s[a] = o) : (c || (c = {}), (c[a] = o))));
              for (a in s) {
                if (((o = s[a]), !(r = this.props[a]))) {
                  if (!l) continue;
                  r = n.call(this, a);
                }
                t.call(this, r, o);
              }
              i && c && i.call(this, c);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function E(e) {
              this.$el.css(e);
            }
            function I(e, n) {
              t[e] = function () {
                return this.children
                  ? m.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function m(e, t) {
              var n,
                i = this.children.length;
              for (n = 0; i > n; n++) e.apply(this.children[n], t);
              return this;
            }
            ((t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                z.keepInherited && !z.fallback)
              ) {
                var n = W(this.el, "transition");
                n && !_.test(n) && (this.upstream = n);
              }
              L.backface &&
                z.hideBackface &&
                j(this.el, L.backface.css, "hidden");
            }),
              I("add", n),
              I("start", i),
              I("wait", function (e) {
                ((e = r(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new X({
                        duration: e,
                        context: this,
                        complete: a,
                      })),
                      (this.active = !0)));
              }),
              I("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = a))
                  : o(
                      "No active transition timer. Use start() or wait() before then().",
                    );
              }),
              I("next", a),
              I("stop", c),
              I("set", function (e) {
                (c.call(this, e), d.call(this, e, p, E));
              }),
              I("show", function (e) {
                ("string" != typeof e && (e = "block"),
                  (this.el.style.display = e));
              }),
              I("hide", l),
              I("redraw", s),
              I("destroy", function () {
                (c.call(this),
                  e.removeData(this.el, g),
                  (this.$el = this.el = null));
              }));
          }),
          U = u(F, function (t) {
            function n(t, n) {
              var i = e.data(t, g) || e.data(t, g, new F.Bare());
              return (i.el || i.init(t), n ? i.start(n) : i);
            }
            t.init = function (t, i) {
              var a = e(t);
              if (!a.length) return this;
              if (1 === a.length) return n(a[0], i);
              var r = [];
              return (
                a.each(function (e, t) {
                  r.push(n(t, i));
                }),
                (this.children = r),
                this
              );
            };
          }),
          G = u(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return (this.update(e), t);
            }
            ((e.init = function (e, t, n, i) {
              ((this.$el = e), (this.el = e[0]));
              var a,
                o,
                c,
                l = t[0];
              (n[2] && (l = n[2]),
                H[l] && (l = H[l]),
                (this.name = l),
                (this.type = n[1]),
                (this.duration = r(t[1], this.duration, 500)),
                (this.ease =
                  ((a = t[2]),
                  (o = this.ease),
                  (c = "ease"),
                  void 0 !== o && (c = o),
                  a in d ? a : c)),
                (this.delay = r(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = v.test(this.name)),
                (this.unit = i.unit || this.unit || z.defaultUnit),
                (this.angle = i.angle || this.angle || z.defaultAngle),
                z.fallback || i.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + d[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : ""))));
            }),
              (e.set = function (e) {
                ((e = this.convert(e, this.type)),
                  this.update(e),
                  this.redraw());
              }),
              (e.transition = function (e) {
                ((this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e));
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                ((e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new k({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  })));
              }),
              (e.get = function () {
                return W(this.el, this.name);
              }),
              (e.update = function (e) {
                j(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  j(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  a,
                  r = "number" == typeof e,
                  c = "string" == typeof e;
                switch (t) {
                  case I:
                    if (r) return e;
                    if (c && "" === e.replace(E, "")) return +e;
                    a = "number(unitless)";
                    break;
                  case m:
                    if (c) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? i(n[1], n[2], n[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    a = "hex or rgb string";
                    break;
                  case T:
                    if (r) return e + this.unit;
                    if (c && t.test(e)) return e;
                    a = "number(px) or string(unit)";
                    break;
                  case b:
                    if (r) return e + this.unit;
                    if (c && t.test(e)) return e;
                    a = "number(px) or string(unit or %)";
                    break;
                  case O:
                    if (r) return e + this.angle;
                    if (c && t.test(e)) return e;
                    a = "number(deg) or string(angle)";
                    break;
                  case h:
                    if (r || (c && b.test(e))) return e;
                    a = "number(unitless) or string(unit or %)";
                }
                return (
                  o(
                    "Type warning: Expected: [" +
                      a +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e,
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              }));
          }),
          x = u(G, function (e, t) {
            e.init = function () {
              (t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), m)));
            };
          }),
          V = u(G, function (e, t) {
            ((e.init = function () {
              (t.init.apply(this, arguments), (this.animate = this.fallback));
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              }));
          }),
          D = u(G, function (e, t) {
            function n(e, t) {
              var n, i, a, r, o;
              for (n in e)
                ((a = (r = Y[n])[0]),
                  (i = r[1] || n),
                  (o = this.convert(e[n], a)),
                  t.call(this, i, o, a));
            }
            ((e.init = function () {
              (t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  Y.perspective &&
                    z.perspective &&
                    ((this.current.perspective = z.perspective),
                    j(this.el, this.name, this.style(this.current)),
                    this.redraw())));
            }),
              (e.set = function (e) {
                (n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  j(this.el, this.name, this.style(this.current)),
                  this.redraw());
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new B({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  i = {};
                for (n in this.current) i[n] = n in t ? t[n] : this.current[n];
                ((this.active = !0), (this.nextStyle = this.style(i)));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new B({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                j(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  i = {};
                return (
                  n.call(this, e, function (e, n, a) {
                    ((i[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, a))));
                  }),
                  i
                );
              }));
          }),
          k = u(function (t) {
            function r() {
              var e,
                t,
                n,
                i = l.length;
              if (i)
                for (P(r), t = M(), e = i; e--; ) (n = l[e]) && n.render(t);
            }
            var c = { ease: d.ease[1], from: 0, to: 1 };
            ((t.init = function (e) {
              ((this.duration = e.duration || 0), (this.delay = e.delay || 0));
              var t = e.ease || c.ease;
              (d[t] && (t = d[t][1]),
                "function" != typeof t && (t = c.ease),
                (this.ease = t),
                (this.update = e.update || a),
                (this.complete = e.complete || a),
                (this.context = e.context || this),
                (this.name = e.name));
              var n = e.from,
                i = e.to;
              (void 0 === n && (n = c.from),
                void 0 === i && (i = c.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof i
                  ? ((this.begin = n), (this.change = i - n))
                  : this.format(i, n),
                (this.value = this.begin + this.unit),
                (this.start = M()),
                !1 !== e.autoplay && this.play());
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = M()),
                  (this.active = !0),
                  1 === l.push(this) && P(r));
              }),
              (t.stop = function () {
                var t, n;
                this.active &&
                  ((this.active = !1),
                  (n = e.inArray(this, l)) >= 0 &&
                    ((t = l.slice(n + 1)),
                    (l.length = n),
                    t.length && (l = l.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var a,
                    r,
                    o = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((a = this.startRGB),
                        (r = this.endRGB),
                        i(
                          a[0] + o * (r[0] - a[0]),
                          a[1] + o * (r[1] - a[1]),
                          a[2] + o * (r[2] - a[2]),
                        ))
                      : Math.round((this.begin + o * this.change) * s) / s),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                ((t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy());
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var i = t.replace(E, "");
                  (i !== e.replace(E, "") &&
                    o("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = i));
                }
                ((t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t));
              }),
              (t.destroy = function () {
                (this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = a));
              }));
            var l = [],
              s = 1e3;
          }),
          X = u(k, function (e) {
            ((e.init = function (e) {
              ((this.duration = e.duration || 0),
                (this.complete = e.complete || a),
                (this.context = e.context),
                this.play());
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              }));
          }),
          B = u(k, function (e, t) {
            ((e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                ((n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new k({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      }),
                    ));
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  i = this.tweens.length,
                  a = !1;
                for (t = i; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (a = !0));
                return a
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  ((this.tweens = null), (this.current = null));
                }
              }));
          }),
          z = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !L.transition,
            agentTests: [],
          });
        ((t.fallback = function (e) {
          if (!L.transition) return (z.fallback = !0);
          z.agentTests.push("(" + e + ")");
          var t = RegExp(z.agentTests.join("|"), "i");
          z.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new k(e);
          }),
          (t.delay = function (e, t, n) {
            return new X({ complete: t, duration: e, context: n });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          }));
        var j = e.style,
          W = e.css,
          H = { transform: L.transform && L.transform.css },
          Q = {
            color: [x, m],
            background: [x, m, "background-color"],
            "outline-color": [x, m],
            "border-color": [x, m],
            "border-top-color": [x, m],
            "border-right-color": [x, m],
            "border-bottom-color": [x, m],
            "border-left-color": [x, m],
            "border-width": [G, T],
            "border-top-width": [G, T],
            "border-right-width": [G, T],
            "border-bottom-width": [G, T],
            "border-left-width": [G, T],
            "border-spacing": [G, T],
            "letter-spacing": [G, T],
            margin: [G, T],
            "margin-top": [G, T],
            "margin-right": [G, T],
            "margin-bottom": [G, T],
            "margin-left": [G, T],
            padding: [G, T],
            "padding-top": [G, T],
            "padding-right": [G, T],
            "padding-bottom": [G, T],
            "padding-left": [G, T],
            "outline-width": [G, T],
            opacity: [G, I],
            top: [G, b],
            right: [G, b],
            bottom: [G, b],
            left: [G, b],
            "font-size": [G, b],
            "text-indent": [G, b],
            "word-spacing": [G, b],
            width: [G, b],
            "min-width": [G, b],
            "max-width": [G, b],
            height: [G, b],
            "min-height": [G, b],
            "max-height": [G, b],
            "line-height": [G, h],
            "scroll-top": [V, I, "scrollTop"],
            "scroll-left": [V, I, "scrollLeft"],
          },
          Y = {};
        (L.transform &&
          ((Q.transform = [D]),
          (Y = {
            x: [b, "translateX"],
            y: [b, "translateY"],
            rotate: [O],
            rotateX: [O],
            rotateY: [O],
            scale: [I],
            scaleX: [I],
            scaleY: [I],
            skew: [O],
            skewX: [O],
            skewY: [O],
          })),
          L.transform &&
            L.backface &&
            ((Y.z = [b, "translateZ"]),
            (Y.rotateZ = [O]),
            (Y.scaleZ = [I]),
            (Y.perspective = [T])));
        var $ = /ms/,
          q = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var i,
        a,
        r,
        o,
        c,
        l,
        s,
        u,
        d,
        f,
        p,
        g,
        E,
        y,
        I,
        m,
        T,
        b,
        O,
        h,
        _ = window.$,
        v = n(5487) && _.tram;
      (((i = {}).VERSION = "1.6.0-Webflow"),
        (a = {}),
        (r = Array.prototype),
        (o = Object.prototype),
        (c = Function.prototype),
        r.push,
        (l = r.slice),
        r.concat,
        o.toString,
        (s = o.hasOwnProperty),
        (u = r.forEach),
        (d = r.map),
        r.reduce,
        r.reduceRight,
        (f = r.filter),
        r.every,
        (p = r.some),
        (g = r.indexOf),
        r.lastIndexOf,
        (E = Object.keys),
        c.bind,
        (y =
          i.each =
          i.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (u && e.forEach === u) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var r = 0, o = e.length; r < o; r++)
                  if (t.call(n, e[r], r, e) === a) return;
              } else
                for (var c = i.keys(e), r = 0, o = c.length; r < o; r++)
                  if (t.call(n, e[c[r]], c[r], e) === a) return;
              return e;
            }),
        (i.map = i.collect =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : d && e.map === d
                ? e.map(t, n)
                : (y(e, function (e, a, r) {
                    i.push(t.call(n, e, a, r));
                  }),
                  i);
          }),
        (i.find = i.detect =
          function (e, t, n) {
            var i;
            return (
              I(e, function (e, a, r) {
                if (t.call(n, e, a, r)) return ((i = e), !0);
              }),
              i
            );
          }),
        (i.filter = i.select =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : f && e.filter === f
                ? e.filter(t, n)
                : (y(e, function (e, a, r) {
                    t.call(n, e, a, r) && i.push(e);
                  }),
                  i);
          }),
        (I =
          i.some =
          i.any =
            function (e, t, n) {
              t || (t = i.identity);
              var r = !1;
              return null == e
                ? r
                : p && e.some === p
                  ? e.some(t, n)
                  : (y(e, function (e, i, o) {
                      if (r || (r = t.call(n, e, i, o))) return a;
                    }),
                    !!r);
            }),
        (i.contains = i.include =
          function (e, t) {
            return (
              null != e &&
              (g && e.indexOf === g
                ? -1 != e.indexOf(t)
                : I(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (i.delay = function (e, t) {
          var n = l.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (i.defer = function (e) {
          return i.delay.apply(i, [e, 1].concat(l.call(arguments, 1)));
        }),
        (i.throttle = function (e) {
          var t, n, i;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (i = this),
              v.frame(function () {
                ((t = !1), e.apply(i, n));
              }));
          };
        }),
        (i.debounce = function (e, t, n) {
          var a,
            r,
            o,
            c,
            l,
            s = function () {
              var u = i.now() - c;
              u < t
                ? (a = setTimeout(s, t - u))
                : ((a = null), n || ((l = e.apply(o, r)), (o = r = null)));
            };
          return function () {
            ((o = this), (r = arguments), (c = i.now()));
            var u = n && !a;
            return (
              a || (a = setTimeout(s, t)),
              u && ((l = e.apply(o, r)), (o = r = null)),
              l
            );
          };
        }),
        (i.defaults = function (e) {
          if (!i.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var a = arguments[t];
            for (var r in a) void 0 === e[r] && (e[r] = a[r]);
          }
          return e;
        }),
        (i.keys = function (e) {
          if (!i.isObject(e)) return [];
          if (E) return E(e);
          var t = [];
          for (var n in e) i.has(e, n) && t.push(n);
          return t;
        }),
        (i.has = function (e, t) {
          return s.call(e, t);
        }),
        (i.isObject = function (e) {
          return e === Object(e);
        }),
        (i.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (i.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (m = /(.)^/),
        (T = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (b = /\\|'|\r|\n|\u2028|\u2029/g),
        (O = function (e) {
          return "\\" + T[e];
        }),
        (h = /^\s*(\w|\$)+\s*$/),
        (i.template = function (e, t, n) {
          !t && n && (t = n);
          var a,
            r = RegExp(
              [
                ((t = i.defaults({}, t, i.templateSettings)).escape || m)
                  .source,
                (t.interpolate || m).source,
                (t.evaluate || m).source,
              ].join("|") + "|$",
              "g",
            ),
            o = 0,
            c = "__p+='";
          (e.replace(r, function (t, n, i, a, r) {
            return (
              (c += e.slice(o, r).replace(b, O)),
              (o = r + t.length),
              n
                ? (c += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : i
                  ? (c += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                  : a && (c += "';\n" + a + "\n__p+='"),
              t
            );
          }),
            (c += "';\n"));
          var l = t.variable;
          if (l) {
            if (!h.test(l))
              throw Error("variable is not a bare identifier: " + l);
          } else ((c = "with(obj||{}){\n" + c + "}\n"), (l = "obj"));
          c =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            c +
            "return __p;\n";
          try {
            a = Function(t.variable || "obj", "_", c);
          } catch (e) {
            throw ((e.source = c), e);
          }
          var s = function (e) {
            return a.call(this, e, i);
          };
          return ((s.source = "function(" + l + "){\n" + c + "}"), s);
        }),
        (e.exports = i));
    },
    9461: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "brand",
        (e.exports = function (e) {
          var t,
            n = {},
            a = document,
            r = e("html"),
            o = e("body"),
            c = window.location,
            l = /PhantomJS/i.test(navigator.userAgent),
            s =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function u() {
            var n =
              a.fullScreen ||
              a.mozFullScreen ||
              a.webkitIsFullScreen ||
              a.msFullscreenElement ||
              !!a.webkitFullscreenElement;
            e(t).attr("style", n ? "display: none !important;" : "");
          }
          function d() {
            var e = o.children(".w-webflow-badge"),
              n = e.length && e.get(0) === t,
              a = i.env("editor");
            if (n) {
              a && e.remove();
              return;
            }
            (e.length && e.remove(), a || o.append(t));
          }
          return (
            (n.ready = function () {
              var n,
                i,
                o,
                f = r.attr("data-wf-status"),
                p = r.attr("data-wf-domain") || "";
              (/\.webflow\.io$/i.test(p) && c.hostname !== p && (f = !0),
                f &&
                  !l &&
                  ((t =
                    t ||
                    ((n = e('<a class="w-webflow-badge"></a>').attr(
                      "href",
                      "https://webflow.com?utm_campaign=brandjs",
                    )),
                    (i = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg",
                      )
                      .attr("alt", "")
                      .css({ marginRight: "4px", width: "26px" })),
                    (o = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg",
                      )
                      .attr("alt", "Made in Webflow")),
                    n.append(i, o),
                    n[0])),
                  d(),
                  setTimeout(d, 500),
                  e(a).off(s, u).on(s, u)));
            }),
            n
          );
        }),
      );
    },
    322: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (i.env("test") || i.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var a,
            r = e(window),
            o = e(document.documentElement),
            c = document.location,
            l = "hashchange",
            s =
              n.load ||
              function () {
                var t, n, i;
                ((a = !0),
                  (window.WebflowEditor = !0),
                  r.off(l, d),
                  (t = function (t) {
                    var n;
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: o.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((n = t),
                        function (t) {
                          var i, a, r;
                          if (!t)
                            return void console.error(
                              "Could not load editor data",
                            );
                          ((t.thirdPartyCookiesSupported = n),
                            (a =
                              (i = t.scriptPath).indexOf("//") >= 0
                                ? i
                                : p("https://editor-api.webflow.com" + i)),
                            (r = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: a,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(r, f));
                        }),
                    });
                  }),
                  ((n = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (n.style.display = "none"),
                  (n.sandbox = "allow-scripts allow-same-origin"),
                  (i = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (g(n, i), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (g(n, i), t(!0));
                  }),
                  (n.onerror = function () {
                    (g(n, i), t(!1));
                  }),
                  window.addEventListener("message", i, !1),
                  window.document.body.appendChild(n));
              },
            u = !1;
          try {
            u =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function d() {
            !a && /\?edit/.test(c.hash) && s();
          }
          function f(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function g(e, t) {
            (window.removeEventListener("message", t, !1), e.remove());
          }
          return (
            u
              ? s()
              : c.search
                ? (/[?&](edit)(?:[=&?]|$)/.test(c.search) ||
                    /\?edit$/.test(c.href)) &&
                  s()
                : r.on(l, d).triggerHandler(l),
            {}
          );
        }),
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      i = null,
                      a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function r(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function o(e) {
                      e.getAttribute("data-wf-focus-visible") ||
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function c() {
                      t = !1;
                    }
                    function l() {
                      (document.addEventListener("mousemove", s),
                        document.addEventListener("mousedown", s),
                        document.addEventListener("mouseup", s),
                        document.addEventListener("pointermove", s),
                        document.addEventListener("pointerdown", s),
                        document.addEventListener("pointerup", s),
                        document.addEventListener("touchmove", s),
                        document.addEventListener("touchstart", s),
                        document.addEventListener("touchend", s));
                    }
                    function s(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", s),
                        document.removeEventListener("mousedown", s),
                        document.removeEventListener("mouseup", s),
                        document.removeEventListener("pointermove", s),
                        document.removeEventListener("pointerdown", s),
                        document.removeEventListener("pointerup", s),
                        document.removeEventListener("touchmove", s),
                        document.removeEventListener("touchstart", s),
                        document.removeEventListener("touchend", s));
                    }
                    (document.addEventListener(
                      "keydown",
                      function (n) {
                        n.metaKey ||
                          n.altKey ||
                          n.ctrlKey ||
                          (r(e.activeElement) && o(e.activeElement), (t = !0));
                      },
                      !0,
                    ),
                      document.addEventListener("mousedown", c, !0),
                      document.addEventListener("pointerdown", c, !0),
                      document.addEventListener("touchstart", c, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), l());
                        },
                        !0,
                      ),
                      l(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (r(e.target)) {
                            var n, i, c;
                            (t ||
                              ((i = (n = e.target).type),
                              ("INPUT" === (c = n.tagName) &&
                                a[i] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === c && !n.readOnly) ||
                                n.isContentEditable ||
                                0)) &&
                              o(e.target);
                          }
                        },
                        !0,
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            r(e.target) &&
                            e.target.hasAttribute("data-wf-focus-visible")
                          ) {
                            var t;
                            ((n = !0),
                              window.clearTimeout(i),
                              (i = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "data-wf-focus-visible",
                              ) && t.removeAttribute("data-wf-focus-visible"));
                          }
                        },
                        !0,
                      ));
                  })(document);
                }
            },
          };
        }),
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function a(n) {
            var i, a;
            ((a = (i = n.target).tagName),
              ((/^a$/i.test(a) && null != i.href) ||
                (/^(button|textarea)$/i.test(a) && !0 !== i.disabled) ||
                (/^input$/i.test(a) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(i.type) &&
                  !i.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(a) &&
                  !Number.isNaN(Number.parseFloat(i.tabIndex))) ||
                /^audio$/i.test(a) ||
                (/^video$/i.test(a) && !0 === i.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var i = e.pop();
                    i.target.dispatchEvent(new MouseEvent(i.type, i));
                  }
                }, 0)));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                i.env.safari &&
                (document.addEventListener("mousedown", a, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        }),
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        i = [],
        a = ".w-ix",
        r = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, i) {
            i.__wf_intro ||
              ((i.__wf_intro = !0), t(i).triggerHandler(n.types.INTRO));
          },
          outro: function (e, i) {
            i.__wf_intro &&
              ((i.__wf_intro = null), t(i).triggerHandler(n.types.OUTRO));
          },
        };
      ((n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + a, OUTRO: "w-ix-outro" + a }),
        (n.init = function () {
          for (var e = i.length, a = 0; a < e; a++) {
            var o = i[a];
            o[0](0, o[1]);
          }
          ((i = []), t.extend(n.triggers, r));
        }),
        (n.async = function () {
          for (var e in r) {
            var t = r[e];
            r.hasOwnProperty(e) &&
              (n.triggers[e] = function (e, n) {
                i.push([t, n]);
              });
          }
        }),
        n.async(),
        (e.exports = n));
    },
    5134: function (e, t, n) {
      "use strict";
      var i = n(7199);
      function a(e, t) {
        var n = document.createEvent("CustomEvent");
        (n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n));
      }
      var r = window.jQuery,
        o = {},
        c = ".w-ix";
      ((o.triggers = {}),
        (o.types = { INTRO: "w-ix-intro" + c, OUTRO: "w-ix-outro" + c }),
        r.extend(o.triggers, {
          reset: function (e, t) {
            i.triggers.reset(e, t);
          },
          intro: function (e, t) {
            (i.triggers.intro(e, t), a(t, "COMPONENT_ACTIVE"));
          },
          outro: function (e, t) {
            (i.triggers.outro(e, t), a(t, "COMPONENT_INACTIVE"));
          },
        }),
        (e.exports = o));
    },
    941: function (e, t, n) {
      "use strict";
      var i = n(3949),
        a = n(6011);
      (a.setEnv(i.env),
        i.define(
          "ix2",
          (e.exports = function () {
            return a;
          }),
        ));
    },
    3949: function (e, t, n) {
      "use strict";
      var i,
        a,
        r = {},
        o = {},
        c = [],
        l = window.Webflow || [],
        s = window.jQuery,
        u = s(window),
        d = s(document),
        f = s.isFunction,
        p = (r._ = n(5756)),
        g = (r.tram = n(5487) && s.tram),
        E = !1,
        y = !1;
      function I(e) {
        (r.env() &&
          (f(e.design) && u.on("__wf_design", e.design),
          f(e.preview) && u.on("__wf_preview", e.preview)),
          f(e.destroy) && u.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (E) return e.ready();
              p.contains(c, e.ready) || c.push(e.ready);
            })(e));
      }
      function m(e) {
        var t;
        (f(e.design) && u.off("__wf_design", e.design),
          f(e.preview) && u.off("__wf_preview", e.preview),
          f(e.destroy) && u.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            ((t = e),
            (c = p.filter(c, function (e) {
              return e !== t.ready;
            }))));
      }
      ((g.config.hideBackface = !1),
        (g.config.keepInherited = !0),
        (r.define = function (e, t, n) {
          o[e] && m(o[e]);
          var i = (o[e] = t(s, p, n) || {});
          return (I(i), i);
        }),
        (r.require = function (e) {
          return o[e];
        }),
        (r.push = function (e) {
          if (E) {
            f(e) && e();
            return;
          }
          l.push(e);
        }),
        (r.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
                ? n && !t
                : "slug" === e
                  ? n && window.__wf_slug
                  : "editor" === e
                    ? window.WebflowEditor
                    : "test" === e
                      ? window.__wf_test
                      : "frame" === e
                        ? window !== window.top
                        : void 0
            : n;
        }));
      var T = navigator.userAgent.toLowerCase(),
        b = (r.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        O = (r.env.chrome =
          /chrome/.test(T) &&
          /Google/.test(navigator.vendor) &&
          parseInt(T.match(/chrome\/(\d+)\./)[1], 10)),
        h = (r.env.ios = /(ipod|iphone|ipad)/.test(T));
      ((r.env.safari = /safari/.test(T) && !O && !h),
        b &&
          d.on("touchstart mousedown", function (e) {
            i = e.target;
          }),
        (r.validClick = b
          ? function (e) {
              return e === i || s.contains(e, i);
            }
          : function () {
              return !0;
            }));
      var _ = "resize.webflow orientationchange.webflow load.webflow",
        v = "scroll.webflow " + _;
      function R(e, t) {
        var n = [],
          i = {};
        return (
          (i.up = p.throttle(function (e) {
            p.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, i.up),
          (i.on = function (e) {
            "function" == typeof e && (p.contains(n, e) || n.push(e));
          }),
          (i.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = p.filter(n, function (t) {
              return t !== e;
            });
          }),
          i
        );
      }
      function A(e) {
        f(e) && e();
      }
      function S() {
        (a && (a.reject(), u.off("load", a.resolve)),
          (a = new s.Deferred()),
          u.on("load", a.resolve));
      }
      ((r.resize = R(u, _)),
        (r.scroll = R(u, v)),
        (r.redraw = R()),
        (r.location = function (e) {
          window.location = e;
        }),
        r.env() && (r.location = function () {}),
        (r.ready = function () {
          ((E = !0),
            y ? ((y = !1), p.each(o, I)) : p.each(c, A),
            p.each(l, A),
            r.resize.up());
        }),
        (r.load = function (e) {
          a.then(e);
        }),
        (r.destroy = function (e) {
          ((e = e || {}),
            (y = !0),
            u.triggerHandler("__wf_destroy"),
            null != e.domready && (E = e.domready),
            p.each(o, m),
            r.resize.off(),
            r.scroll.off(),
            r.redraw.off(),
            (c = []),
            (l = []),
            "pending" === a.state() && S());
        }),
        s(r.ready),
        S(),
        (e.exports = window.Webflow = r));
    },
    7624: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            a,
            r,
            o = {},
            c = e(window),
            l = i.env(),
            s = window.location,
            u = document.createElement("a"),
            d = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          function g() {
            var e = c.scrollTop(),
              n = c.height();
            t.each(a, function (t) {
              if (!t.link.attr("hreflang")) {
                var i = t.link,
                  a = t.sec,
                  r = a.offset().top,
                  o = a.outerHeight(),
                  c = 0.5 * n,
                  l = a.is(":visible") && r + o - c >= e && r + c <= e + n;
                t.active !== l && ((t.active = l), E(i, d, l));
              }
            });
          }
          function E(e, t, n) {
            var i = e.hasClass(t);
            (!n || !i) && (n || i) && (n ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (o.ready =
              o.design =
              o.preview =
                function () {
                  ((n = l && i.env("design")),
                    (r = i.env("slug") || s.pathname || ""),
                    i.scroll.off(g),
                    (a = []));
                  for (var t = document.links, o = 0; o < t.length; ++o)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var i =
                          (n && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((u.href = i), !(i.indexOf(":") >= 0))) {
                          var o = e(t);
                          if (
                            u.hash.length > 1 &&
                            u.host + u.pathname === s.host + s.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
                            var c = e(u.hash);
                            c.length && a.push({ link: o, sec: c, active: !1 });
                            return;
                          }
                          "#" !== i &&
                            "" !== i &&
                            E(
                              o,
                              d,
                              (!l && u.href === s.href) ||
                                i === r ||
                                (f.test(i) && p.test(r)),
                            );
                        }
                      }
                    })(t[o]);
                  a.length && (i.scroll.on(g), g());
                }),
            o
          );
        }),
      );
    },
    286: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            a = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            r = e(window),
            o = e(document),
            c = e(document.body),
            l =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            s = i.env("editor") ? ".w-editor-body" : "body",
            u =
              "header, " +
              s +
              " > .header, " +
              s +
              " > .w-nav:not([data-no-scroll])",
            d = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + d + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
            ),
          );
          var g = /^#[a-zA-Z0-9][\w:.-]*$/;
          let E =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function y(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function I(t) {
            var o = t.currentTarget;
            if (
              !(
                i.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(o.className))
              )
            ) {
              var s =
                g.test(o.hash) && o.host + o.pathname === n.host + n.pathname
                  ? o.hash
                  : "";
              if ("" !== s) {
                var d,
                  f = e(s);
                f.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (d = s),
                  n.hash !== d &&
                    a &&
                    a.pushState &&
                    !(i.env.chrome && "file:" === n.protocol) &&
                    (a.state && a.state.hash) !== d &&
                    a.pushState({ hash: d }, "", d),
                  window.setTimeout(function () {
                    !(function (t, n) {
                      var i = r.scrollTop(),
                        a = (function (t) {
                          var n = e(u),
                            i =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            a = t.offset().top - i;
                          if ("mid" === t.data("scroll")) {
                            var o = r.height() - i,
                              c = t.outerHeight();
                            c < o && (a -= Math.round((o - c) / 2));
                          }
                          return a;
                        })(t);
                      if (i !== a) {
                        var o = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion",
                                ) ||
                              E.matches
                            )
                              return 0;
                            var i = 1;
                            return (
                              c.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time"),
                                );
                                !isNaN(n) && n >= 0 && (i = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                i
                            );
                          })(t, i, a),
                          s = Date.now(),
                          d = function () {
                            var e,
                              t,
                              r,
                              c,
                              u,
                              f = Date.now() - s;
                            (window.scroll(
                              0,
                              ((e = i),
                              (t = a),
                              (r = f) > (c = o)
                                ? t
                                : e +
                                  (t - e) *
                                    ((u = r / c) < 0.5
                                      ? 4 * u * u * u
                                      : (u - 1) * (2 * u - 2) * (2 * u - 2) +
                                        1)),
                            ),
                              f <= o ? l(d) : "function" == typeof n && n());
                          };
                        l(d);
                      }
                    })(f, function () {
                      (y(f, "add"),
                        f.get(0).focus({ preventScroll: !0 }),
                        y(f, "remove"));
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              (o.on(n, f, I),
                o.on(e, d, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild));
            },
          };
        }),
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function i(t) {
            var i,
              a,
              r = !1,
              o = !1,
              c = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function l(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((r = !0),
                t ? ((o = !0), (i = t[0].clientX)) : (i = e.clientX),
                (a = i));
            }
            function s(t) {
              if (r) {
                if (o && "mousemove" === t.type) {
                  (t.preventDefault(), t.stopPropagation());
                  return;
                }
                var i,
                  l,
                  s,
                  u,
                  f = t.touches,
                  p = f ? f[0].clientX : t.clientX,
                  g = p - a;
                ((a = p),
                  Math.abs(g) > c &&
                    n &&
                    "" === String(n()) &&
                    ((i = "swipe"),
                    (l = t),
                    (s = { direction: g > 0 ? "right" : "left" }),
                    (u = e.Event(i, { originalEvent: l })),
                    e(l.target).trigger(u, s),
                    d()));
              }
            }
            function u(e) {
              if (r && ((r = !1), o && "mouseup" === e.type)) {
                (e.preventDefault(), e.stopPropagation(), (o = !1));
                return;
              }
            }
            function d() {
              r = !1;
            }
            (t.addEventListener("touchstart", l, !1),
              t.addEventListener("touchmove", s, !1),
              t.addEventListener("touchend", u, !1),
              t.addEventListener("touchcancel", d, !1),
              t.addEventListener("mousedown", l, !1),
              t.addEventListener("mousemove", s, !1),
              t.addEventListener("mouseup", u, !1),
              t.addEventListener("mouseout", d, !1),
              (this.destroy = function () {
                (t.removeEventListener("touchstart", l, !1),
                  t.removeEventListener("touchmove", s, !1),
                  t.removeEventListener("touchend", u, !1),
                  t.removeEventListener("touchcancel", d, !1),
                  t.removeEventListener("mousedown", l, !1),
                  t.removeEventListener("mousemove", s, !1),
                  t.removeEventListener("mouseup", u, !1),
                  t.removeEventListener("mouseout", d, !1),
                  (t = null));
              }));
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new i(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        }),
      );
    },
    9858: function (e, t, n) {
      "use strict";
      var i = n(3949),
        a = n(5134);
      let r = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          ESCAPE: 27,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35,
        },
        o = /^#[a-zA-Z0-9\-_]+$/;
      i.define(
        "dropdown",
        (e.exports = function (e, t) {
          var n,
            c,
            l = t.debounce,
            s = {},
            u = i.env(),
            d = !1,
            f = i.env.touch,
            p = ".w-dropdown",
            g = "w--open",
            E = a.triggers,
            y = "focusout" + p,
            I = "keydown" + p,
            m = "mouseenter" + p,
            T = "mousemove" + p,
            b = "mouseleave" + p,
            O = (f ? "click" : "mouseup") + p,
            h = "w-close" + p,
            _ = "setting" + p,
            v = e(document);
          function R() {
            ((n = u && i.env("design")), (c = v.find(p)).each(A));
          }
          function A(t, a) {
            var c,
              s,
              d,
              f,
              E,
              T,
              b,
              R,
              A,
              P,
              M = e(a),
              F = e.data(a, p);
            (F ||
              (F = e.data(a, p, {
                open: !1,
                el: M,
                config: {},
                selectedIdx: -1,
              })),
              (F.toggle = F.el.children(".w-dropdown-toggle")),
              (F.list = F.el.children(".w-dropdown-list")),
              (F.links = F.list.find("a:not(.w-dropdown .w-dropdown a)")),
              (F.complete =
                ((c = F),
                function () {
                  (c.list.removeClass(g),
                    c.toggle.removeClass(g),
                    c.manageZ && c.el.css("z-index", ""));
                })),
              (F.mouseLeave =
                ((s = F),
                function () {
                  ((s.hovering = !1), s.links.is(":focus") || C(s));
                })),
              (F.mouseUpOutside =
                ((d = F).mouseUpOutside && v.off(O, d.mouseUpOutside),
                l(function (t) {
                  if (d.open) {
                    var n = e(t.target);
                    if (!n.closest(".w-dropdown-toggle").length) {
                      var a = -1 === e.inArray(d.el[0], n.parents(p)),
                        r = i.env("editor");
                      if (a) {
                        if (r) {
                          var o =
                              1 === n.parents().length &&
                              1 === n.parents("svg").length,
                            c = n.parents(
                              ".w-editor-bem-EditorHoverControls",
                            ).length;
                          if (o || c) return;
                        }
                        C(d);
                      }
                    }
                  }
                }))),
              (F.mouseMoveOutside =
                ((f = F),
                l(function (t) {
                  if (f.open) {
                    var n = e(t.target);
                    if (-1 === e.inArray(f.el[0], n.parents(p))) {
                      var i = n.parents(
                          ".w-editor-bem-EditorHoverControls",
                        ).length,
                        a = n.parents(".w-editor-bem-RTToolbar").length,
                        r = e(".w-editor-bem-EditorOverlay"),
                        o =
                          r.find(".w-editor-edit-outline").length ||
                          r.find(".w-editor-bem-RTToolbar").length;
                      if (i || a || o) return;
                      ((f.hovering = !1), C(f));
                    }
                  }
                }))),
              S(F));
            var U = F.toggle.attr("id"),
              G = F.list.attr("id");
            (U || (U = "w-dropdown-toggle-" + t),
              G || (G = "w-dropdown-list-" + t),
              F.toggle.attr("id", U),
              F.toggle.attr("aria-controls", G),
              F.toggle.attr("aria-haspopup", "menu"),
              F.toggle.attr("aria-expanded", "false"),
              F.toggle
                .find(".w-icon-dropdown-toggle")
                .attr("aria-hidden", "true"),
              "BUTTON" !== F.toggle.prop("tagName") &&
                (F.toggle.attr("role", "button"),
                F.toggle.attr("tabindex") || F.toggle.attr("tabindex", "0")),
              F.list.attr("id", G),
              F.list.attr("aria-labelledby", U),
              F.links.each(function (e, t) {
                (t.hasAttribute("tabindex") || t.setAttribute("tabindex", "0"),
                  o.test(t.hash) &&
                    t.addEventListener("click", C.bind(null, F)));
              }),
              F.el.off(p),
              F.toggle.off(p),
              F.nav && F.nav.off(p));
            var x = N(F, !0);
            (n &&
              F.el.on(
                _,
                ((E = F),
                function (e, t) {
                  ((t = t || {}),
                    S(E),
                    !0 === t.open && L(E),
                    !1 === t.open && C(E, { immediate: !0 }));
                }),
              ),
              n ||
                (u && ((F.hovering = !1), C(F)),
                F.config.hover &&
                  F.toggle.on(
                    m,
                    ((T = F),
                    function () {
                      ((T.hovering = !0), L(T));
                    }),
                  ),
                F.el.on(h, x),
                F.el.on(
                  I,
                  ((b = F),
                  function (e) {
                    if (!n && b.open)
                      switch (
                        ((b.selectedIdx = b.links.index(
                          document.activeElement,
                        )),
                        e.keyCode)
                      ) {
                        case r.HOME:
                          if (!b.open) return;
                          return (
                            (b.selectedIdx = 0),
                            w(b),
                            e.preventDefault()
                          );
                        case r.END:
                          if (!b.open) return;
                          return (
                            (b.selectedIdx = b.links.length - 1),
                            w(b),
                            e.preventDefault()
                          );
                        case r.ESCAPE:
                          return (C(b), b.toggle.focus(), e.stopPropagation());
                        case r.ARROW_RIGHT:
                        case r.ARROW_DOWN:
                          return (
                            (b.selectedIdx = Math.min(
                              b.links.length - 1,
                              b.selectedIdx + 1,
                            )),
                            w(b),
                            e.preventDefault()
                          );
                        case r.ARROW_LEFT:
                        case r.ARROW_UP:
                          return (
                            (b.selectedIdx = Math.max(-1, b.selectedIdx - 1)),
                            w(b),
                            e.preventDefault()
                          );
                      }
                  }),
                ),
                F.el.on(
                  y,
                  ((R = F),
                  l(function (e) {
                    var { relatedTarget: t, target: n } = e,
                      i = R.el[0];
                    return (
                      i.contains(t) || i.contains(n) || C(R),
                      e.stopPropagation()
                    );
                  })),
                ),
                F.toggle.on(O, x),
                F.toggle.on(
                  I,
                  ((P = N((A = F), !0)),
                  function (e) {
                    if (!n) {
                      if (!A.open)
                        switch (e.keyCode) {
                          case r.ARROW_UP:
                          case r.ARROW_DOWN:
                            return e.stopPropagation();
                        }
                      switch (e.keyCode) {
                        case r.SPACE:
                        case r.ENTER:
                          return (P(), e.stopPropagation(), e.preventDefault());
                      }
                    }
                  }),
                ),
                (F.nav = F.el.closest(".w-nav")),
                F.nav.on(h, x)));
          }
          function S(e) {
            var t = Number(e.el.css("z-index"));
            ((e.manageZ = 900 === t || 901 === t),
              (e.config = {
                hover: "true" === e.el.attr("data-hover") && !f,
                delay: e.el.attr("data-delay"),
              }));
          }
          function N(e, t) {
            return l(function (n) {
              if (e.open || (n && "w-close" === n.type))
                return C(e, { forceClose: t });
              L(e);
            });
          }
          function L(t) {
            if (!t.open) {
              ((a = t.el[0]),
                c.each(function (t, n) {
                  var i = e(n);
                  i.is(a) || i.has(a).length || i.triggerHandler(h);
                }),
                (t.open = !0),
                t.list.addClass(g),
                t.toggle.addClass(g),
                t.toggle.attr("aria-expanded", "true"),
                E.intro(0, t.el[0]),
                i.redraw.up(),
                t.manageZ && t.el.css("z-index", 901));
              var a,
                r = i.env("editor");
              (n || v.on(O, t.mouseUpOutside),
                t.hovering && !r && t.el.on(b, t.mouseLeave),
                t.hovering && r && v.on(T, t.mouseMoveOutside),
                window.clearTimeout(t.delayId));
            }
          }
          function C(e, { immediate: t, forceClose: n } = {}) {
            if (e.open && (!e.config.hover || !e.hovering || n)) {
              (e.toggle.attr("aria-expanded", "false"), (e.open = !1));
              var i = e.config;
              if (
                (E.outro(0, e.el[0]),
                v.off(O, e.mouseUpOutside),
                v.off(T, e.mouseMoveOutside),
                e.el.off(b, e.mouseLeave),
                window.clearTimeout(e.delayId),
                !i.delay || t)
              )
                return e.complete();
              e.delayId = window.setTimeout(e.complete, i.delay);
            }
          }
          function w(e) {
            e.links[e.selectedIdx] && e.links[e.selectedIdx].focus();
          }
          return (
            (s.ready = R),
            (s.design = function () {
              (d &&
                v.find(p).each(function (t, n) {
                  e(n).triggerHandler(h);
                }),
                (d = !1),
                R());
            }),
            (s.preview = function () {
              ((d = !0), R());
            }),
            s
          );
        }),
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        actionListPlaybackChanged: function () {
          return W;
        },
        animationFrameChanged: function () {
          return D;
        },
        clearRequested: function () {
          return U;
        },
        elementStateChanged: function () {
          return j;
        },
        eventListenerAdded: function () {
          return G;
        },
        eventStateChanged: function () {
          return V;
        },
        instanceAdded: function () {
          return X;
        },
        instanceRemoved: function () {
          return z;
        },
        instanceStarted: function () {
          return B;
        },
        mediaQueriesDefined: function () {
          return Q;
        },
        parameterChanged: function () {
          return k;
        },
        playbackRequested: function () {
          return M;
        },
        previewRequested: function () {
          return P;
        },
        rawDataImported: function () {
          return N;
        },
        sessionInitialized: function () {
          return L;
        },
        sessionStarted: function () {
          return C;
        },
        sessionStopped: function () {
          return w;
        },
        stopRequested: function () {
          return F;
        },
        testFrameRendered: function () {
          return x;
        },
        viewportWidthChanged: function () {
          return H;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(7087),
        o = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: c,
          IX2_SESSION_INITIALIZED: l,
          IX2_SESSION_STARTED: s,
          IX2_SESSION_STOPPED: u,
          IX2_PREVIEW_REQUESTED: d,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: g,
          IX2_EVENT_LISTENER_ADDED: E,
          IX2_TEST_FRAME_RENDERED: y,
          IX2_EVENT_STATE_CHANGED: I,
          IX2_ANIMATION_FRAME_CHANGED: m,
          IX2_PARAMETER_CHANGED: T,
          IX2_INSTANCE_ADDED: b,
          IX2_INSTANCE_STARTED: O,
          IX2_INSTANCE_REMOVED: h,
          IX2_ELEMENT_STATE_CHANGED: _,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: v,
          IX2_VIEWPORT_WIDTH_CHANGED: R,
          IX2_MEDIA_QUERIES_DEFINED: A,
        } = r.IX2EngineActionTypes,
        { reifyState: S } = o.IX2VanillaUtils,
        N = (e) => ({ type: c, payload: { ...S(e) } }),
        L = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: l,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        C = () => ({ type: s }),
        w = () => ({ type: u }),
        P = ({ rawData: e, defer: t }) => ({
          type: d,
          payload: { defer: t, rawData: e },
        }),
        M = ({
          actionTypeId: e = r.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: i,
          allowEvents: a,
          immediate: o,
          testManual: c,
          verbose: l,
          rawData: s,
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: c,
            eventId: i,
            allowEvents: a,
            immediate: o,
            verbose: l,
            rawData: s,
          },
        }),
        F = (e) => ({ type: p, payload: { actionListId: e } }),
        U = () => ({ type: g }),
        G = (e, t) => ({ type: E, payload: { target: e, listenerParams: t } }),
        x = (e = 1) => ({ type: y, payload: { step: e } }),
        V = (e, t) => ({ type: I, payload: { stateKey: e, newState: t } }),
        D = (e, t) => ({ type: m, payload: { now: e, parameters: t } }),
        k = (e, t) => ({ type: T, payload: { key: e, value: t } }),
        X = (e) => ({ type: b, payload: { ...e } }),
        B = (e, t) => ({ type: O, payload: { instanceId: e, time: t } }),
        z = (e) => ({ type: h, payload: { instanceId: e } }),
        j = (e, t, n, i) => ({
          type: _,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: i },
        }),
        W = ({ actionListId: e, isPlaying: t }) => ({
          type: v,
          payload: { actionListId: e, isPlaying: t },
        }),
        H = ({ width: e, mediaQueries: t }) => ({
          type: R,
          payload: { width: e, mediaQueries: t },
        }),
        Q = () => ({ type: A });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          actions: function () {
            return s;
          },
          destroy: function () {
            return g;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return f;
          },
          store: function () {
            return d;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = n(9516),
        c = (i = n(7243)) && i.__esModule ? i : { default: i },
        l = n(1970),
        s = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = u(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return ((i.default = e), n && n.set(e, i), i);
        })(n(3946));
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      let d = (0, o.createStore)(c.default);
      function f(e) {
        e() && (0, l.observeRequests)(d);
      }
      function p(e) {
        (g(), (0, l.startEngine)({ store: d, rawData: e, allowEvents: !0 }));
      }
      function g() {
        (0, l.stopEngine)(d);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        elementContains: function () {
          return T;
        },
        getChildElements: function () {
          return O;
        },
        getClosestElement: function () {
          return _;
        },
        getProperty: function () {
          return g;
        },
        getQuerySelector: function () {
          return y;
        },
        getRefType: function () {
          return v;
        },
        getSiblingElements: function () {
          return h;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return I;
        },
        isSiblingNode: function () {
          return b;
        },
        matchSelector: function () {
          return E;
        },
        queryDocument: function () {
          return m;
        },
        setStyle: function () {
          return f;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(9468),
        o = n(7087),
        { ELEMENT_MATCHES: c } = r.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: l,
          HTML_ELEMENT: s,
          PLAIN_OBJECT: u,
          WF_PAGE: d,
        } = o.IX2EngineConstants;
      function f(e, t, n) {
        e.style[t] = n;
      }
      function p(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
            ? e.style[t]
            : void 0;
      }
      function g(e, t) {
        return e[t];
      }
      function E(e) {
        return (t) => t[c](e);
      }
      function y({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(l)) {
            let n = e.split(l),
              i = n[0];
            if (((t = n[1]), i !== document.documentElement.getAttribute(d)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function I(e) {
        return null == e || e === document.documentElement.getAttribute(d)
          ? document
          : null;
      }
      function m(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e),
        );
      }
      function T(e, t) {
        return e.contains(t);
      }
      function b(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function O(e) {
        let t = [];
        for (let n = 0, { length: i } = e || []; n < i; n++) {
          let { children: i } = e[n],
            { length: a } = i;
          if (a) for (let e = 0; e < a; e++) t.push(i[e]);
        }
        return t;
      }
      function h(e = []) {
        let t = [],
          n = [];
        for (let i = 0, { length: a } = e; i < a; i++) {
          let { parentNode: a } = e[i];
          if (!a || !a.children || !a.children.length || -1 !== n.indexOf(a))
            continue;
          n.push(a);
          let r = a.firstElementChild;
          for (; null != r; )
            (-1 === e.indexOf(r) && t.push(r), (r = r.nextElementSibling));
        }
        return t;
      }
      let _ = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[c] && n[c](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function v(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? s
            : u
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        observeRequests: function () {
          return K;
        },
        startActionGroup: function () {
          return eg;
        },
        startEngine: function () {
          return ei;
        },
        stopActionGroup: function () {
          return ep;
        },
        stopAllActionGroups: function () {
          return ef;
        },
        stopEngine: function () {
          return ea;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = m(n(9777)),
        o = m(n(4738)),
        c = m(n(4659)),
        l = m(n(3452)),
        s = m(n(6633)),
        u = m(n(3729)),
        d = m(n(2397)),
        f = m(n(5082)),
        p = n(7087),
        g = n(9468),
        E = n(3946),
        y = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = T(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return ((i.default = e), n && n.set(e, i), i);
        })(n(5012)),
        I = m(n(8955));
      function m(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function T(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (T = function (e) {
          return e ? n : t;
        })(e);
      }
      let b = Object.keys(p.QuickEffectIds),
        O = (e) => b.includes(e),
        {
          COLON_DELIMITER: h,
          BOUNDARY_SELECTOR: _,
          HTML_ELEMENT: v,
          RENDER_GENERAL: R,
          W_MOD_IX: A,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: S,
          getElementId: N,
          getDestinationValues: L,
          observeStore: C,
          getInstanceId: w,
          renderHTMLElement: P,
          clearAllStyles: M,
          getMaxDurationItemIndex: F,
          getComputedStyle: U,
          getInstanceOrigin: G,
          reduceListToGroup: x,
          shouldNamespaceEventParameter: V,
          getNamespacedParameterId: D,
          shouldAllowMediaQuery: k,
          cleanupHTMLElement: X,
          clearObjectCache: B,
          stringifyTarget: z,
          mediaQueriesEqual: j,
          shallowEqual: W,
        } = g.IX2VanillaUtils,
        {
          isPluginType: H,
          createPluginInstance: Q,
          getPluginDuration: Y,
        } = g.IX2VanillaPlugins,
        $ = navigator.userAgent,
        q = $.match(/iPad/i) || $.match(/iPhone/);
      function K(e) {
        (C({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          C({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          C({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          C({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: en }));
      }
      function Z({ rawData: e, defer: t }, n) {
        let i = () => {
          (ei({ store: n, rawData: e, allowEvents: !0 }), J());
        };
        t ? setTimeout(i, 0) : i();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: n,
            actionListId: i,
            actionItemId: a,
            eventId: r,
            allowEvents: o,
            immediate: c,
            testManual: l,
            verbose: s = !0,
          } = e,
          { rawData: u } = e;
        if (i && a && u && c) {
          let e = u.actionLists[i];
          e && (u = x({ actionList: e, actionItemId: a, rawData: u }));
        }
        if (
          (ei({ store: t, rawData: u, allowEvents: o, testManual: l }),
          (i && n === p.ActionTypeConsts.GENERAL_START_ACTION) || O(n))
        ) {
          (ep({ store: t, actionListId: i }),
            ed({ store: t, actionListId: i, eventId: r }));
          let e = eg({
            store: t,
            eventId: r,
            actionListId: i,
            immediate: c,
            verbose: s,
          });
          s &&
            e &&
            t.dispatch(
              (0, E.actionListPlaybackChanged)({
                actionListId: i,
                isPlaying: !c,
              }),
            );
        }
      }
      function et({ actionListId: e }, t) {
        (e ? ep({ store: t, actionListId: e }) : ef({ store: t }), ea(t));
      }
      function en(e, t) {
        (ea(t), M({ store: t, elementApi: y }));
      }
      function ei({ store: e, rawData: t, allowEvents: n, testManual: i }) {
        let { ixSession: a } = e.getState();
        if ((t && e.dispatch((0, E.rawDataImported)(t)), !a.active)) {
          (e.dispatch(
            (0, E.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(_),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            }),
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              (ec(e),
                (0, d.default)(n, (t, n) => {
                  let i = I.default[n];
                  if (!i)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`,
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!q) return;
                      let t = {},
                        n = "";
                      for (let i in e) {
                        let { eventTypeId: a, target: r } = e[i],
                          o = y.getQuerySelector(r);
                        t[o] ||
                          ((a === p.EventTypeConsts.MOUSE_CLICK ||
                            a === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[o] = !0),
                            (n +=
                              o +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        ((e.textContent = n), document.body.appendChild(e));
                      }
                    })(n);
                    let { types: i, handler: a } = e,
                      { ixData: l } = t.getState(),
                      { actionLists: s } = l,
                      u = el(n, eu);
                    if (!(0, c.default)(u)) return;
                    (0, d.default)(u, (e, i) => {
                      let a = n[i],
                        {
                          action: c,
                          id: u,
                          mediaQueries: d = l.mediaQueryKeys,
                        } = a,
                        { actionListId: f } = c.config;
                      (j(d, l.mediaQueryKeys) ||
                        t.dispatch((0, E.mediaQueriesDefined)()),
                        c.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(a.config)
                            ? a.config
                            : [a.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: i } = n,
                              a = (0, o.default)(
                                s,
                                `${f}.continuousParameterGroups`,
                                [],
                              ),
                              c = (0, r.default)(a, ({ id: e }) => e === i),
                              l = (n.smoothing || 0) / 100,
                              d = (n.restingState || 0) / 100;
                            c &&
                              e.forEach((e, i) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: i,
                                  eventConfig: a,
                                  actionListId: r,
                                  parameterGroup: c,
                                  smoothing: l,
                                  restingValue: s,
                                }) {
                                  let { ixData: u, ixSession: d } =
                                      e.getState(),
                                    { events: f } = u,
                                    g = f[i],
                                    { eventTypeId: E } = g,
                                    I = {},
                                    m = {},
                                    T = [],
                                    { continuousActionGroups: b } = c,
                                    { id: O } = c;
                                  V(E, a) && (O = D(t, O));
                                  let v =
                                    d.hasBoundaryNodes && n
                                      ? y.getClosestElement(n, _)
                                      : null;
                                  (b.forEach((e) => {
                                    let { keyframe: t, actionItems: i } = e;
                                    i.forEach((e) => {
                                      let { actionTypeId: i } = e,
                                        { target: a } = e.config;
                                      if (!a) return;
                                      let r = a.boundaryMode ? v : null,
                                        o = z(a) + h + i;
                                      if (
                                        ((m[o] = (function (e = [], t, n) {
                                          let i,
                                            a = [...e];
                                          return (
                                            a.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((i = n), !0),
                                            ),
                                            null == i &&
                                              ((i = a.length),
                                              a.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            a[i].actionItems.push(n),
                                            a
                                          );
                                        })(m[o], t, e)),
                                        !I[o])
                                      ) {
                                        I[o] = !0;
                                        let { config: t } = e;
                                        S({
                                          config: t,
                                          event: g,
                                          eventTarget: n,
                                          elementRoot: r,
                                          elementApi: y,
                                        }).forEach((e) => {
                                          T.push({ element: e, key: o });
                                        });
                                      }
                                    });
                                  }),
                                    T.forEach(({ element: t, key: n }) => {
                                      let a = m[n],
                                        c = (0, o.default)(
                                          a,
                                          "[0].actionItems[0]",
                                          {},
                                        ),
                                        { actionTypeId: u } = c,
                                        d = (
                                          u === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                c.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : H(u)
                                        )
                                          ? Q(u)?.(t, c)
                                          : null,
                                        f = L(
                                          {
                                            element: t,
                                            actionItem: c,
                                            elementApi: y,
                                          },
                                          d,
                                        );
                                      eE({
                                        store: e,
                                        element: t,
                                        eventId: i,
                                        actionListId: r,
                                        actionItem: c,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: O,
                                        actionGroups: a,
                                        smoothing: l,
                                        restingValue: s,
                                        pluginInstance: d,
                                      });
                                    }));
                                })({
                                  store: t,
                                  eventStateKey: u + h + i,
                                  eventTarget: e,
                                  eventId: u,
                                  eventConfig: n,
                                  actionListId: f,
                                  parameterGroup: c,
                                  smoothing: l,
                                  restingValue: d,
                                });
                              });
                          }),
                        (c.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          O(c.actionTypeId)) &&
                          ed({ store: t, actionListId: f, eventId: u }));
                    });
                    let g = (e) => {
                        let { ixSession: i } = t.getState();
                        es(u, (r, o, c) => {
                          let s = n[o],
                            u = i.eventState[c],
                            { action: d, mediaQueries: f = l.mediaQueryKeys } =
                              s;
                          if (!k(f, i.mediaQueryKey)) return;
                          let g = (n = {}) => {
                            let i = a(
                              {
                                store: t,
                                element: r,
                                event: s,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: c,
                              },
                              u,
                            );
                            W(i, u) ||
                              t.dispatch((0, E.eventStateChanged)(c, i));
                          };
                          d.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(s.config)
                                ? s.config
                                : [s.config]
                              ).forEach(g)
                            : g();
                        });
                      },
                      I = (0, f.default)(g, 12),
                      m = ({ target: e = document, types: n, throttle: i }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let a = i ? I : g;
                            (e.addEventListener(n, a),
                              t.dispatch((0, E.eventListenerAdded)(e, [n, a])));
                          });
                      };
                    Array.isArray(i)
                      ? i.forEach(m)
                      : "string" == typeof i && m(e);
                  })({ logic: i, store: e, events: t });
                }));
              let { ixSession: i } = e.getState();
              i.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    ec(e);
                  };
                  (eo.forEach((n) => {
                    (window.addEventListener(n, t),
                      e.dispatch((0, E.eventListenerAdded)(window, [n, t])));
                  }),
                    t());
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(A) && (e.className += ` ${A}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              C({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  (ea(e),
                    M({ store: e, elementApi: y }),
                    ei({ store: e, allowEvents: !0 }),
                    J());
                },
              }));
          (e.dispatch((0, E.sessionStarted)()),
            (function (e, t) {
              let n = (i) => {
                let { ixSession: a, ixParameters: r } = e.getState();
                if (a.active)
                  if ((e.dispatch((0, E.animationFrameChanged)(i, r)), t)) {
                    let t = C({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        (n(e), t());
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, i));
        }
      }
      function ea(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          (n.forEach(er), B(), e.dispatch((0, E.sessionStopped)()));
        }
      }
      function er({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let eo = ["resize", "orientationchange"];
      function ec(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          i = window.innerWidth;
        if (i !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, E.viewportWidthChanged)({ width: i, mediaQueries: t }),
          );
        }
      }
      let el = (e, t) => (0, l.default)((0, u.default)(e, t), s.default),
        es = (e, t) => {
          (0, d.default)(e, (e, n) => {
            e.forEach((e, i) => {
              t(e, n, n + h + i);
            });
          });
        },
        eu = (e) =>
          S({
            config: { target: e.target, targets: e.targets },
            elementApi: y,
          });
      function ed({ store: e, actionListId: t, eventId: n }) {
        let { ixData: i, ixSession: a } = e.getState(),
          { actionLists: r, events: c } = i,
          l = c[n],
          s = r[t];
        if (s && s.useFirstGroupAsInitialState) {
          let r = (0, o.default)(s, "actionItemGroups[0].actionItems", []);
          if (
            !k(
              (0, o.default)(l, "mediaQueries", i.mediaQueryKeys),
              a.mediaQueryKey,
            )
          )
            return;
          r.forEach((i) => {
            let { config: a, actionTypeId: r } = i,
              o = S({
                config:
                  a?.target?.useEventTarget === !0 &&
                  a?.target?.objectId == null
                    ? { target: l.target, targets: l.targets }
                    : a,
                event: l,
                elementApi: y,
              }),
              c = H(r);
            o.forEach((a) => {
              let o = c ? Q(r)?.(a, i) : null;
              eE({
                destination: L({ element: a, actionItem: i, elementApi: y }, o),
                immediate: !0,
                store: e,
                element: a,
                eventId: n,
                actionItem: i,
                actionListId: t,
                pluginInstance: o,
              });
            });
          });
        }
      }
      function ef({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, d.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: i } = t;
            (ey(t, e),
              i &&
                e.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  }),
                ));
          }
        });
      }
      function ep({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: a,
      }) {
        let { ixInstances: r, ixSession: c } = e.getState(),
          l = c.hasBoundaryNodes && n ? y.getClosestElement(n, _) : null;
        (0, d.default)(r, (n) => {
          let r = (0, o.default)(n, "actionItem.config.target.boundaryMode"),
            c = !i || n.eventStateKey === i;
          if (n.actionListId === a && n.eventId === t && c) {
            if (l && r && !y.elementContains(l, n.element)) return;
            (ey(n, e),
              n.verbose &&
                e.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: a,
                    isPlaying: !1,
                  }),
                ));
          }
        });
      }
      function eg({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: a,
        groupIndex: r = 0,
        immediate: c,
        verbose: l,
      }) {
        let { ixData: s, ixSession: u } = e.getState(),
          { events: d } = s,
          f = d[t] || {},
          { mediaQueries: p = s.mediaQueryKeys } = f,
          { actionItemGroups: g, useFirstGroupAsInitialState: E } = (0,
          o.default)(s, `actionLists.${a}`, {});
        if (!g || !g.length) return !1;
        (r >= g.length && (0, o.default)(f, "config.loop") && (r = 0),
          0 === r && E && r++);
        let I =
            (0 === r || (1 === r && E)) && O(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          m = (0, o.default)(g, [r, "actionItems"], []);
        if (!m.length || !k(p, u.mediaQueryKey)) return !1;
        let T = u.hasBoundaryNodes && n ? y.getClosestElement(n, _) : null,
          b = F(m),
          h = !1;
        return (
          m.forEach((o, s) => {
            let { config: u, actionTypeId: d } = o,
              p = H(d),
              { target: g } = u;
            g &&
              S({
                config: u,
                event: f,
                eventTarget: n,
                elementRoot: g.boundaryMode ? T : null,
                elementApi: y,
              }).forEach((u, f) => {
                let g = p ? Q(d)?.(u, o) : null,
                  E = p ? Y(d)(u, o) : null;
                h = !0;
                let m = U({ element: u, actionItem: o }),
                  T = L({ element: u, actionItem: o, elementApi: y }, g);
                eE({
                  store: e,
                  element: u,
                  actionItem: o,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: i,
                  actionListId: a,
                  groupIndex: r,
                  isCarrier: b === s && 0 === f,
                  computedStyle: m,
                  destination: T,
                  immediate: c,
                  verbose: l,
                  pluginInstance: g,
                  pluginDuration: E,
                  instanceDelay: I,
                });
              });
          }),
          h
        );
      }
      function eE(e) {
        let t,
          { store: n, computedStyle: i, ...a } = e,
          {
            element: r,
            actionItem: o,
            immediate: c,
            pluginInstance: l,
            continuous: s,
            restingValue: u,
            eventId: d,
          } = a,
          f = w(),
          { ixElements: g, ixSession: I, ixData: m } = n.getState(),
          T = N(g, r),
          { refState: b } = g[T] || {},
          O = y.getRefType(r),
          h = I.reducedMotion && p.ReducedMotionTypes[o.actionTypeId];
        if (h && s)
          switch (m.events[d]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = u;
              break;
            default:
              t = 0.5;
          }
        let _ = G(r, b, i, o, y, l);
        if (
          (n.dispatch(
            (0, E.instanceAdded)({
              instanceId: f,
              elementId: T,
              origin: _,
              refType: O,
              skipMotion: h,
              skipToValue: t,
              ...a,
            }),
          ),
          eI(document.body, "ix2-animation-started", f),
          c)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            (e.dispatch((0, E.instanceStarted)(t, 0)),
              e.dispatch((0, E.animationFrameChanged)(performance.now(), n)));
            let { ixInstances: i } = e.getState();
            em(i[t], e);
          })(n, f);
        (C({ store: n, select: ({ ixInstances: e }) => e[f], onChange: em }),
          s || n.dispatch((0, E.instanceStarted)(f, I.tick)));
      }
      function ey(e, t) {
        eI(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: i } = e,
          { ixElements: a } = t.getState(),
          { ref: r, refType: o } = a[n] || {};
        (o === v && X(r, i, y), t.dispatch((0, E.instanceRemoved)(e.id)));
      }
      function eI(e, t, n) {
        let i = document.createEvent("CustomEvent");
        (i.initCustomEvent(t, !0, !0, n), e.dispatchEvent(i));
      }
      function em(e, t) {
        let {
            active: n,
            continuous: i,
            complete: a,
            elementId: r,
            actionItem: o,
            actionTypeId: c,
            renderType: l,
            current: s,
            groupIndex: u,
            eventId: d,
            eventTarget: f,
            eventStateKey: p,
            actionListId: g,
            isCarrier: I,
            styleProp: m,
            verbose: T,
            pluginInstance: b,
          } = e,
          { ixData: O, ixSession: h } = t.getState(),
          { events: _ } = O,
          { mediaQueries: A = O.mediaQueryKeys } = _ && _[d] ? _[d] : {};
        if (k(A, h.mediaQueryKey) && (i || n || a)) {
          if (s || (l === R && a)) {
            t.dispatch((0, E.elementStateChanged)(r, c, s, o));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: i, refState: a } = e[r] || {},
              u = a && a[c];
            (i === v || H(c)) && P(n, a, u, d, o, m, y, l, b);
          }
          if (a) {
            if (I) {
              let e = eg({
                store: t,
                eventId: d,
                eventTarget: f,
                eventStateKey: p,
                actionListId: g,
                groupIndex: u + 1,
                verbose: T,
              });
              T &&
                !e &&
                t.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: g,
                    isPlaying: !1,
                  }),
                );
            }
            ey(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let i;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return ep;
          },
        }));
      let a = d(n(5801)),
        r = d(n(4738)),
        o = d(n(3789)),
        c = n(7087),
        l = n(1970),
        s = n(3946),
        u = n(9468);
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: g,
          MOUSE_UP: E,
          MOUSE_OVER: y,
          MOUSE_OUT: I,
          DROPDOWN_CLOSE: m,
          DROPDOWN_OPEN: T,
          SLIDER_ACTIVE: b,
          SLIDER_INACTIVE: O,
          TAB_ACTIVE: h,
          TAB_INACTIVE: _,
          NAVBAR_CLOSE: v,
          NAVBAR_OPEN: R,
          MOUSE_MOVE: A,
          PAGE_SCROLL_DOWN: S,
          SCROLL_INTO_VIEW: N,
          SCROLL_OUT_OF_VIEW: L,
          PAGE_SCROLL_UP: C,
          SCROLLING_IN_VIEW: w,
          PAGE_FINISH: P,
          ECOMMERCE_CART_CLOSE: M,
          ECOMMERCE_CART_OPEN: F,
          PAGE_START: U,
          PAGE_SCROLL: G,
        } = c.EventTypeConsts,
        x = "COMPONENT_ACTIVE",
        V = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: D } = c.IX2EngineConstants,
        { getNamespacedParameterId: k } = u.IX2VanillaUtils,
        X = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        B = X(({ element: e, nativeEvent: t }) => e === t.target),
        z = X(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        j = (0, a.default)([B, z]),
        W = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: i } = n,
              a = i[t];
            if (a && !ee[a.eventTypeId]) return a;
          }
          return null;
        },
        H = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: i } = n.config;
          return !!W(e, i);
        },
        Q = ({ store: e, event: t, element: n, eventStateKey: i }, a) => {
          let { action: o, id: c } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            d = W(e, u);
          return (
            d &&
              (0, l.stopActionGroup)({
                store: e,
                eventId: u,
                eventTarget: n,
                eventStateKey: u + D + i.split(D)[1],
                actionListId: (0, r.default)(d, "action.config.actionListId"),
              }),
            (0, l.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: n,
              eventStateKey: i,
              actionListId: s,
            }),
            (0, l.startActionGroup)({
              store: e,
              eventId: c,
              eventTarget: n,
              eventStateKey: i,
              actionListId: s,
            }),
            a
          );
        },
        Y = (e, t) => (n, i) => (!0 === e(n, i) ? t(n, i) : i),
        $ = { handler: Y(j, Q) },
        q = { ...$, types: [x, V].join(" ") },
        K = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        Z = "mouseover mouseout",
        J = { types: K },
        ee = { PAGE_START: U, PAGE_FINISH: P },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, o.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight,
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        en = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        ei = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: i, relatedTarget: a } = t,
            r = e.contains(i);
          if ("mouseover" === n && r) return !0;
          let o = e.contains(a);
          return "mouseout" === n && !!r && !!o;
        },
        ea = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: i, clientHeight: a } = et(),
            r = n.scrollOffsetValue,
            o = "PX" === n.scrollOffsetUnit ? r : (a * (r || 0)) / 100;
          return en(t.getBoundingClientRect(), {
            left: 0,
            top: o,
            right: i,
            bottom: a - o,
          });
        },
        er = (e) => (t, n) => {
          let { type: i } = t.nativeEvent,
            a = -1 !== [x, V].indexOf(i) ? i === x : n.isActive,
            r = { ...n, isActive: a };
          return ((!n || r.isActive !== n.isActive) && e(t, r)) || r;
        },
        eo = (e) => (t, n) => {
          let i = { elementHovered: ei(t) };
          return (
            ((n ? i.elementHovered !== n.elementHovered : i.elementHovered) &&
              e(t, i)) ||
            i
          );
        },
        ec =
          (e) =>
          (t, n = {}) => {
            let i,
              a,
              { stiffScrollTop: r, scrollHeight: o, innerHeight: c } = et(),
              {
                event: { config: l, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: d } = l,
              f = o - c,
              p = Number((r / f).toFixed(2));
            if (n && n.percentTop === p) return n;
            let g = ("PX" === d ? u : (c * (u || 0)) / 100) / f,
              E = 0;
            n &&
              ((i = p > n.percentTop),
              (E = (a = n.scrollingDown !== i) ? p : n.anchorTop));
            let y = s === S ? p >= E + g : p <= E - g,
              I = {
                ...n,
                percentTop: p,
                inBounds: y,
                anchorTop: E,
                scrollingDown: i,
              };
            return (n && y && (a || I.inBounds !== n.inBounds) && e(t, I)) || I;
          },
        el = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        es =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let i = { clickCount: (n.clickCount % 2) + 1 };
            return (i.clickCount !== n.clickCount && e(t, i)) || i;
          },
        eu = (e = !0) => ({
          ...q,
          handler: Y(
            e ? j : B,
            er((e, t) => (t.isActive ? $.handler(e, t) : t)),
          ),
        }),
        ed = (e = !0) => ({
          ...q,
          handler: Y(
            e ? j : B,
            er((e, t) => (t.isActive ? t : $.handler(e, t))),
          ),
        }),
        ef = {
          ...J,
          handler:
            ((i = (e, t) => {
              let { elementVisible: n } = t,
                { event: i, store: a } = e,
                { ixData: r } = a.getState(),
                { events: o } = r;
              return !o[i.action.config.autoStopEventId] && t.triggered
                ? t
                : (i.eventTypeId === N) === n
                  ? (Q(e), { ...t, triggered: !0 })
                  : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: ea(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  i(e, n)) ||
                n
              );
            }),
        },
        ep = {
          [b]: eu(),
          [O]: ed(),
          [T]: eu(),
          [m]: ed(),
          [R]: eu(!1),
          [v]: ed(!1),
          [h]: eu(),
          [_]: ed(),
          [F]: { types: "ecommerce-cart-open", handler: Y(j, Q) },
          [M]: { types: "ecommerce-cart-close", handler: Y(j, Q) },
          [f]: {
            types: "click",
            handler: Y(
              j,
              es((e, { clickCount: t }) => {
                H(e) ? 1 === t && Q(e) : Q(e);
              }),
            ),
          },
          [p]: {
            types: "click",
            handler: Y(
              j,
              es((e, { clickCount: t }) => {
                2 === t && Q(e);
              }),
            ),
          },
          [g]: { ...$, types: "mousedown" },
          [E]: { ...$, types: "mouseup" },
          [y]: {
            types: Z,
            handler: Y(
              j,
              eo((e, t) => {
                t.elementHovered && Q(e);
              }),
            ),
          },
          [I]: {
            types: Z,
            handler: Y(
              j,
              eo((e, t) => {
                t.elementHovered || Q(e);
              }),
            ),
          },
          [A]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: i,
                eventStateKey: a,
              },
              r = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
            ) => {
              let {
                  basedOn: o,
                  selectedAxis: l,
                  continuousParameterGroupId: u,
                  reverse: d,
                  restingState: f = 0,
                } = n,
                {
                  clientX: p = r.clientX,
                  clientY: g = r.clientY,
                  pageX: E = r.pageX,
                  pageY: y = r.pageY,
                } = i,
                I = "X_AXIS" === l,
                m = "mouseout" === i.type,
                T = f / 100,
                b = u,
                O = !1;
              switch (o) {
                case c.EventBasedOn.VIEWPORT:
                  T = I
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(g, window.innerHeight) / window.innerHeight;
                  break;
                case c.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: i,
                  } = et();
                  T = I ? Math.min(e + E, n) / n : Math.min(t + y, i) / i;
                  break;
                }
                case c.EventBasedOn.ELEMENT:
                default: {
                  b = k(a, u);
                  let e = 0 === i.type.indexOf("mouse");
                  if (e && !0 !== j({ element: t, nativeEvent: i })) break;
                  let n = t.getBoundingClientRect(),
                    { left: r, top: o, width: c, height: l } = n;
                  if (!e && !el({ left: p, top: g }, n)) break;
                  ((O = !0), (T = I ? (p - r) / c : (g - o) / l));
                }
              }
              return (
                m && (T > 0.95 || T < 0.05) && (T = Math.round(T)),
                (o !== c.EventBasedOn.ELEMENT || O || O !== r.elementHovered) &&
                  ((T = d ? 1 - T : T),
                  e.dispatch((0, s.parameterChanged)(b, T))),
                {
                  elementHovered: O,
                  clientX: p,
                  clientY: g,
                  pageX: E,
                  pageY: y,
                }
              );
            },
          },
          [G]: {
            types: K,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: i } = t,
                { scrollTop: a, scrollHeight: r, clientHeight: o } = et(),
                c = a / (r - o);
              ((c = i ? 1 - c : c), e.dispatch((0, s.parameterChanged)(n, c)));
            },
          },
          [w]: {
            types: K,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: i },
              a = { scrollPercent: 0 },
            ) => {
              let {
                  scrollLeft: r,
                  scrollTop: o,
                  scrollWidth: l,
                  scrollHeight: u,
                  clientHeight: d,
                } = et(),
                {
                  basedOn: f,
                  selectedAxis: p,
                  continuousParameterGroupId: g,
                  startsEntering: E,
                  startsExiting: y,
                  addEndOffset: I,
                  addStartOffset: m,
                  addOffsetValue: T = 0,
                  endOffsetValue: b = 0,
                } = n;
              if (f === c.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? r / l : o / u;
                return (
                  e !== a.scrollPercent &&
                    t.dispatch((0, s.parameterChanged)(g, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = k(i, g),
                  r = e.getBoundingClientRect(),
                  o = (m ? T : 0) / 100,
                  c = (I ? b : 0) / 100;
                ((o = E ? o : 1 - o), (c = y ? c : 1 - c));
                let l = r.top + Math.min(r.height * o, d),
                  f = Math.min(d + (r.top + r.height * c - l), u),
                  p = Math.min(Math.max(0, d - l), f) / f;
                return (
                  p !== a.scrollPercent &&
                    t.dispatch((0, s.parameterChanged)(n, p)),
                  { scrollPercent: p }
                );
              }
            },
          },
          [N]: ef,
          [L]: ef,
          [S]: {
            ...J,
            handler: ec((e, t) => {
              t.scrollingDown && Q(e);
            }),
          },
          [C]: {
            ...J,
            handler: ec((e, t) => {
              t.scrollingDown || Q(e);
            }),
          },
          [P]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Y(B, (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return (n.finished && !(t && t.finshed) && Q(e), n);
            }),
          },
          [U]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Y(B, (e, t) => (t || Q(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let { IX2_RAW_DATA_IMPORTED: i } = n(7087).IX2EngineActionTypes,
        a = (e = Object.freeze({}), t) =>
          t.type === i ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return O;
          },
        }));
      let i = n(7087),
        a = n(9468),
        r = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_STOPPED: c,
          IX2_INSTANCE_ADDED: l,
          IX2_INSTANCE_STARTED: s,
          IX2_INSTANCE_REMOVED: u,
          IX2_ANIMATION_FRAME_CHANGED: d,
        } = i.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: g,
        } = a.IX2EasingUtils,
        { RENDER_GENERAL: E } = i.IX2EngineConstants,
        {
          getItemConfigByKey: y,
          getRenderType: I,
          getStyleProp: m,
        } = a.IX2VanillaUtils,
        T = (e, t) => {
          let n,
            i,
            a,
            o,
            {
              position: c,
              parameterId: l,
              actionGroups: s,
              destinationKeys: u,
              smoothing: d,
              restingValue: g,
              actionTypeId: E,
              customEasingFn: I,
              skipMotion: m,
              skipToValue: T,
            } = e,
            { parameters: b } = t.payload,
            O = Math.max(1 - d, 0.01),
            h = b[l];
          null == h && ((O = 1), (h = g));
          let _ = f((Math.max(h, 0) || 0) - c),
            v = m ? T : f(c + _ * O),
            R = 100 * v;
          if (v === c && e.current) return e;
          for (let e = 0, { length: t } = s; e < t; e++) {
            let { keyframe: t, actionItems: r } = s[e];
            if ((0 === e && (n = r[0]), R >= t)) {
              n = r[0];
              let c = s[e + 1],
                l = c && R !== t;
              ((i = l ? c.actionItems[0] : null),
                l && ((a = t / 100), (o = (c.keyframe - t) / 100)));
            }
          }
          let A = {};
          if (n && !i)
            for (let e = 0, { length: t } = u; e < t; e++) {
              let t = u[e];
              A[t] = y(E, t, n.config);
            }
          else if (n && i && void 0 !== a && void 0 !== o) {
            let e = (v - a) / o,
              t = p(n.config.easing, e, I);
            for (let e = 0, { length: a } = u; e < a; e++) {
              let a = u[e],
                r = y(E, a, n.config),
                o = (y(E, a, i.config) - r) * t + r;
              A[a] = o;
            }
          }
          return (0, r.merge)(e, { position: v, current: A });
        },
        b = (e, t) => {
          let {
              active: n,
              origin: i,
              start: a,
              immediate: o,
              renderType: c,
              verbose: l,
              actionItem: s,
              destination: u,
              destinationKeys: d,
              pluginDuration: g,
              instanceDelay: y,
              customEasingFn: I,
              skipMotion: m,
            } = e,
            T = s.config.easing,
            { duration: b, delay: O } = s.config;
          (null != g && (b = g),
            (O = null != y ? y : O),
            c === E ? (b = 0) : (o || m) && (b = O = 0));
          let { now: h } = t.payload;
          if (n && i) {
            let t = h - (a + O);
            if (l) {
              let t = b + O,
                n = f(Math.min(Math.max(0, (h - a) / t), 1));
              e = (0, r.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / b), 1)),
              o = p(T, n, I),
              c = {},
              s = null;
            return (
              d.length &&
                (s = d.reduce((e, t) => {
                  let n = u[t],
                    a = parseFloat(i[t]) || 0,
                    r = parseFloat(n) - a;
                  return ((e[t] = r * o + a), e);
                }, {})),
              (c.current = s),
              (c.position = n),
              1 === n && ((c.active = !1), (c.complete = !0)),
              (0, r.merge)(e, c)
            );
          }
          return e;
        },
        O = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case o:
              return t.payload.ixInstances || Object.freeze({});
            case c:
              return Object.freeze({});
            case l: {
              let {
                  instanceId: n,
                  elementId: i,
                  actionItem: a,
                  eventId: o,
                  eventTarget: c,
                  eventStateKey: l,
                  actionListId: s,
                  groupIndex: u,
                  isCarrier: d,
                  origin: f,
                  destination: p,
                  immediate: E,
                  verbose: y,
                  continuous: T,
                  parameterId: b,
                  actionGroups: O,
                  smoothing: h,
                  restingValue: _,
                  pluginInstance: v,
                  pluginDuration: R,
                  instanceDelay: A,
                  skipMotion: S,
                  skipToValue: N,
                } = t.payload,
                { actionTypeId: L } = a,
                C = I(L),
                w = m(C, L),
                P = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e],
                ),
                { easing: M } = a.config;
              return (0, r.set)(e, n, {
                id: n,
                elementId: i,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: P,
                immediate: E,
                verbose: y,
                current: null,
                actionItem: a,
                actionTypeId: L,
                eventId: o,
                eventTarget: c,
                eventStateKey: l,
                actionListId: s,
                groupIndex: u,
                renderType: C,
                isCarrier: d,
                styleProp: w,
                continuous: T,
                parameterId: b,
                actionGroups: O,
                smoothing: h,
                restingValue: _,
                pluginInstance: v,
                pluginDuration: R,
                instanceDelay: A,
                skipMotion: S,
                skipToValue: N,
                customEasingFn:
                  Array.isArray(M) && 4 === M.length ? g(M) : void 0,
              });
            }
            case s: {
              let { instanceId: n, time: i } = t.payload;
              return (0, r.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: i,
              });
            }
            case u: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let i = {},
                a = Object.keys(e),
                { length: r } = a;
              for (let t = 0; t < r; t++) {
                let r = a[t];
                r !== n && (i[r] = e[r]);
              }
              return i;
            }
            case d: {
              let n = e,
                i = Object.keys(e),
                { length: a } = i;
              for (let o = 0; o < a; o++) {
                let a = i[o],
                  c = e[a],
                  l = c.continuous ? T : b;
                n = (0, r.set)(n, a, l(c, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }));
      let {
          IX2_RAW_DATA_IMPORTED: i,
          IX2_SESSION_STOPPED: a,
          IX2_PARAMETER_CHANGED: r,
        } = n(7087).IX2EngineActionTypes,
        o = (e = {}, t) => {
          switch (t.type) {
            case i:
              return t.payload.ixParameters || {};
            case a:
              return {};
            case r: {
              let { key: n, value: i } = t.payload;
              return ((e[n] = i), e);
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return d;
          },
        }));
      let i = n(9516),
        a = n(4609),
        r = n(628),
        o = n(5862),
        c = n(9468),
        l = n(7718),
        s = n(1540),
        { ixElements: u } = c.IX2ElementsReducer,
        d = (0, i.combineReducers)({
          ixData: a.ixData,
          ixRequest: r.ixRequest,
          ixSession: o.ixSession,
          ixElements: u,
          ixInstances: l.ixInstances,
          ixParameters: s.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return d;
          },
        }));
      let i = n(7087),
        a = n(1185),
        {
          IX2_PREVIEW_REQUESTED: r,
          IX2_PLAYBACK_REQUESTED: o,
          IX2_STOP_REQUESTED: c,
          IX2_CLEAR_REQUESTED: l,
        } = i.IX2EngineActionTypes,
        s = { preview: {}, playback: {}, stop: {}, clear: {} },
        u = Object.create(null, {
          [r]: { value: "preview" },
          [o]: { value: "playback" },
          [c]: { value: "stop" },
          [l]: { value: "clear" },
        }),
        d = (e = s, t) => {
          if (t.type in u) {
            let n = [u[t.type]];
            return (0, a.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return y;
          },
        }));
      let i = n(7087),
        a = n(1185),
        {
          IX2_SESSION_INITIALIZED: r,
          IX2_SESSION_STARTED: o,
          IX2_TEST_FRAME_RENDERED: c,
          IX2_SESSION_STOPPED: l,
          IX2_EVENT_LISTENER_ADDED: s,
          IX2_EVENT_STATE_CHANGED: u,
          IX2_ANIMATION_FRAME_CHANGED: d,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: g,
        } = i.IX2EngineActionTypes,
        E = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        y = (e = E, t) => {
          switch (t.type) {
            case r: {
              let { hasBoundaryNodes: n, reducedMotion: i } = t.payload;
              return (0, a.merge)(e, { hasBoundaryNodes: n, reducedMotion: i });
            }
            case o:
              return (0, a.set)(e, "active", !0);
            case c: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, a.set)(e, "tick", e.tick + n);
            }
            case l:
              return E;
            case d: {
              let {
                payload: { now: n },
              } = t;
              return (0, a.set)(e, "tick", n);
            }
            case s: {
              let n = (0, a.addLast)(e.eventListeners, t.payload);
              return (0, a.set)(e, "eventListeners", n);
            }
            case u: {
              let { stateKey: n, newState: i } = t.payload;
              return (0, a.setIn)(e, ["eventState", n], i);
            }
            case f: {
              let { actionListId: n, isPlaying: i } = t.payload;
              return (0, a.setIn)(e, ["playbackState", n], i);
            }
            case p: {
              let { width: n, mediaQueries: i } = t.payload,
                r = i.length,
                o = null;
              for (let e = 0; e < r; e++) {
                let { key: t, min: a, max: r } = i[e];
                if (n >= a && n <= r) {
                  o = t;
                  break;
                }
              }
              return (0, a.merge)(e, { viewportWidth: n, mediaQueryKey: o });
            }
            case g:
              return (0, a.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return u;
        },
        createPluginInstance: function () {
          return l;
        },
        getPluginConfig: function () {
          return a;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return r;
        },
        getPluginOrigin: function () {
          return o;
        },
        renderPlugin: function () {
          return s;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = (e) => e.value,
        r = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        o = (e) => e || { value: 0 },
        c = (e) => ({ value: e.value }),
        l = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return (n.stop(), n.setSubframe(!0), n);
        },
        s = (e, t, n) => {
          if (!e) return;
          let i = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * i);
        },
        u = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return s;
        },
        getPluginOrigin: function () {
          return u;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "--wf-rive-fit",
        r = "--wf-rive-alignment",
        o = (e) => document.querySelector(`[data-w-id="${e}"]`),
        c = () => window.Webflow.require("rive"),
        l = (e, t) => e.value.inputs[t],
        s = () => null,
        u = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: i = {} } = t.config.value;
          for (let e in i) null == i[e] && (n[e] = 0);
          return n;
        },
        d = (e) => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? o(n) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, n) => {
          let i = c();
          if (!i) return;
          let o = i.getInstance(e),
            l = i.rive.StateMachineInputType,
            { name: s, inputs: u = {} } = n.config.value || {};
          function d(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                (n(), e?.off("load", t));
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(s);
              if (null != n) {
                if ((e.isPlaying || e.play(s, !1), a in u || r in u)) {
                  let t = e.layout,
                    n = u[a] ?? t.fit,
                    i = u[r] ?? t.alignment;
                  (n !== t.fit || i !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: n, alignment: i }));
                }
                for (let e in u) {
                  if (e === a || e === r) continue;
                  let i = n.find((t) => t.name === e);
                  if (null != i)
                    switch (i.type) {
                      case l.Boolean:
                        null != u[e] && (i.value = !!u[e]);
                        break;
                      case l.Number: {
                        let n = t[e];
                        null != n && (i.value = n);
                        break;
                      }
                      case l.Trigger:
                        u[e] && i.fire();
                    }
                }
              }
            }
          }
          o?.rive ? d(o.rive) : i.setLoadHandler(e, d);
        },
        g = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return u;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = (e) => document.querySelector(`[data-w-id="${e}"]`),
        r = () => window.Webflow.require("spline"),
        o = (e, t) => e.filter((e) => !t.includes(e)),
        c = (e, t) => e.value[t],
        l = () => null,
        s = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        u = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = o(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = s[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = s[t]), e), {});
        },
        d = (e) => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? a(n) : null;
        },
        p = (e, t, n) => {
          let i = r();
          if (!i) return;
          let a = i.getInstance(e),
            o = n.config.target.objectId,
            c = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = o && e.findObjectById(o);
              if (!n) return;
              let { PLUGIN_SPLINE: i } = t;
              (null != i.positionX && (n.position.x = i.positionX),
                null != i.positionY && (n.position.y = i.positionY),
                null != i.positionZ && (n.position.z = i.positionZ),
                null != i.rotationX && (n.rotation.x = i.rotationX),
                null != i.rotationY && (n.rotation.y = i.rotationY),
                null != i.rotationZ && (n.rotation.z = i.rotationZ),
                null != i.scaleX && (n.scale.x = i.scaleX),
                null != i.scaleY && (n.scale.y = i.scaleY),
                null != i.scaleZ && (n.scale.z = i.scaleZ));
            };
          a ? c(a.spline) : i.setLoadHandler(e, c);
        },
        g = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return u;
        },
        getPluginConfig: function () {
          return o;
        },
        getPluginDestination: function () {
          return s;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return l;
        },
        renderPlugin: function () {
          return f;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(380),
        o = (e, t) => e.value[t],
        c = () => null,
        l = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            i = t.config.target.objectId,
            a = getComputedStyle(document.documentElement).getPropertyValue(i);
          return null != n.size
            ? { size: parseInt(a, 10) }
            : "%" === n.unit || "-" === n.unit
              ? { size: parseFloat(a) }
              : null != n.red && null != n.green && null != n.blue
                ? (0, r.normalizeColor)(a)
                : void 0;
        },
        s = (e) => e.value,
        u = () => null,
        d = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: i }) =>
              [e, t, n, i].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: i }) =>
              `rgba(${e}, ${t}, ${n}, ${i})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        f = (e, t, n) => {
          let {
              target: { objectId: i },
              value: { unit: a },
            } = n.config,
            r = t.PLUGIN_VARIABLE,
            o = Object.values(d).find((e) => e.match(r, a));
          o && document.documentElement.style.setProperty(i, o.getValue(r, a));
        },
        p = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }));
      let i = n(7087),
        a = s(n(7377)),
        r = s(n(2866)),
        o = s(n(2570)),
        c = s(n(1407));
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (l = function (e) {
          return e ? n : t;
        })(e);
      }
      function s(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = l(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return ((i.default = e), n && n.set(e, i), i);
      }
      let u = new Map([
        [i.ActionTypeConsts.PLUGIN_LOTTIE, { ...a }],
        [i.ActionTypeConsts.PLUGIN_SPLINE, { ...r }],
        [i.ActionTypeConsts.PLUGIN_RIVE, { ...o }],
        [i.ActionTypeConsts.PLUGIN_VARIABLE, { ...c }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return b;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return g;
        },
        IX2_CLEAR_REQUESTED: function () {
          return d;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return T;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return y;
        },
        IX2_INSTANCE_REMOVED: function () {
          return m;
        },
        IX2_INSTANCE_STARTED: function () {
          return I;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return h;
        },
        IX2_PARAMETER_CHANGED: function () {
          return E;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return s;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return l;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return a;
        },
        IX2_SESSION_INITIALIZED: function () {
          return r;
        },
        IX2_SESSION_STARTED: function () {
          return o;
        },
        IX2_SESSION_STOPPED: function () {
          return c;
        },
        IX2_STOP_REQUESTED: function () {
          return u;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return _;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return O;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "IX2_RAW_DATA_IMPORTED",
        r = "IX2_SESSION_INITIALIZED",
        o = "IX2_SESSION_STARTED",
        c = "IX2_SESSION_STOPPED",
        l = "IX2_PREVIEW_REQUESTED",
        s = "IX2_PLAYBACK_REQUESTED",
        u = "IX2_STOP_REQUESTED",
        d = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        g = "IX2_ANIMATION_FRAME_CHANGED",
        E = "IX2_PARAMETER_CHANGED",
        y = "IX2_INSTANCE_ADDED",
        I = "IX2_INSTANCE_STARTED",
        m = "IX2_INSTANCE_REMOVED",
        T = "IX2_ELEMENT_STATE_CHANGED",
        b = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        O = "IX2_VIEWPORT_WIDTH_CHANGED",
        h = "IX2_MEDIA_QUERIES_DEFINED",
        _ = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return j;
        },
        BACKGROUND: function () {
          return V;
        },
        BACKGROUND_COLOR: function () {
          return x;
        },
        BAR_DELIMITER: function () {
          return Q;
        },
        BORDER_COLOR: function () {
          return D;
        },
        BOUNDARY_SELECTOR: function () {
          return l;
        },
        CHILDREN: function () {
          return Y;
        },
        COLON_DELIMITER: function () {
          return H;
        },
        COLOR: function () {
          return k;
        },
        COMMA_DELIMITER: function () {
          return W;
        },
        CONFIG_UNIT: function () {
          return y;
        },
        CONFIG_VALUE: function () {
          return f;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return s;
        },
        CONFIG_Y_UNIT: function () {
          return g;
        },
        CONFIG_Y_VALUE: function () {
          return u;
        },
        CONFIG_Z_UNIT: function () {
          return E;
        },
        CONFIG_Z_VALUE: function () {
          return d;
        },
        DISPLAY: function () {
          return X;
        },
        FILTER: function () {
          return M;
        },
        FLEX: function () {
          return B;
        },
        FONT_VARIATION_SETTINGS: function () {
          return F;
        },
        HEIGHT: function () {
          return G;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return $;
        },
        IX2_ID_DELIMITER: function () {
          return a;
        },
        OPACITY: function () {
          return P;
        },
        PARENT: function () {
          return K;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return ei;
        },
        RENDER_PLUGIN: function () {
          return er;
        },
        RENDER_STYLE: function () {
          return ea;
        },
        RENDER_TRANSFORM: function () {
          return en;
        },
        ROTATE_X: function () {
          return A;
        },
        ROTATE_Y: function () {
          return S;
        },
        ROTATE_Z: function () {
          return N;
        },
        SCALE_3D: function () {
          return R;
        },
        SCALE_X: function () {
          return h;
        },
        SCALE_Y: function () {
          return _;
        },
        SCALE_Z: function () {
          return v;
        },
        SIBLINGS: function () {
          return q;
        },
        SKEW: function () {
          return L;
        },
        SKEW_X: function () {
          return C;
        },
        SKEW_Y: function () {
          return w;
        },
        TRANSFORM: function () {
          return I;
        },
        TRANSLATE_3D: function () {
          return O;
        },
        TRANSLATE_X: function () {
          return m;
        },
        TRANSLATE_Y: function () {
          return T;
        },
        TRANSLATE_Z: function () {
          return b;
        },
        WF_PAGE: function () {
          return r;
        },
        WIDTH: function () {
          return U;
        },
        WILL_CHANGE: function () {
          return z;
        },
        W_MOD_IX: function () {
          return c;
        },
        W_MOD_JS: function () {
          return o;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "|",
        r = "data-wf-page",
        o = "w-mod-js",
        c = "w-mod-ix",
        l = ".w-dyn-item",
        s = "xValue",
        u = "yValue",
        d = "zValue",
        f = "value",
        p = "xUnit",
        g = "yUnit",
        E = "zUnit",
        y = "unit",
        I = "transform",
        m = "translateX",
        T = "translateY",
        b = "translateZ",
        O = "translate3d",
        h = "scaleX",
        _ = "scaleY",
        v = "scaleZ",
        R = "scale3d",
        A = "rotateX",
        S = "rotateY",
        N = "rotateZ",
        L = "skew",
        C = "skewX",
        w = "skewY",
        P = "opacity",
        M = "filter",
        F = "font-variation-settings",
        U = "width",
        G = "height",
        x = "backgroundColor",
        V = "background",
        D = "borderColor",
        k = "color",
        X = "display",
        B = "flex",
        z = "willChange",
        j = "AUTO",
        W = ",",
        H = ":",
        Q = "|",
        Y = "CHILDREN",
        $ = "IMMEDIATE_CHILDREN",
        q = "SIBLINGS",
        K = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        en = "RENDER_TRANSFORM",
        ei = "RENDER_GENERAL",
        ea = "RENDER_STYLE",
        er = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionAppliesTo: function () {
          return r;
        },
        ActionTypeConsts: function () {
          return a;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        r = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        ActionTypeConsts: function () {
          return o.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return c;
        },
        IX2EngineConstants: function () {
          return l;
        },
        QuickEffectIds: function () {
          return r.QuickEffectIds;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = s(n(1833), t),
        o = s(n(262), t);
      (s(n(8704), t), s(n(3213), t));
      let c = d(n(8023)),
        l = d(n(2686));
      function s(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function d(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return ((i.default = e), n && n.set(e, i), i);
      }
    },
    3213: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }));
      let {
          TRANSFORM_MOVE: i,
          TRANSFORM_SCALE: a,
          TRANSFORM_ROTATE: r,
          TRANSFORM_SKEW: o,
          STYLE_SIZE: c,
          STYLE_FILTER: l,
          STYLE_FONT_VARIATION: s,
        } = n(262).ActionTypeConsts,
        u = { [i]: !0, [a]: !0, [r]: !0, [o]: !0, [c]: !0, [l]: !0, [s]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EventAppliesTo: function () {
          return r;
        },
        EventBasedOn: function () {
          return o;
        },
        EventContinuousMouseAxes: function () {
          return c;
        },
        EventLimitAffectedElements: function () {
          return l;
        },
        EventTypeConsts: function () {
          return a;
        },
        QuickEffectDirectionConsts: function () {
          return u;
        },
        QuickEffectIds: function () {
          return s;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        r = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        o = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        c = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        l = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        s = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        u = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function i(e) {
        let t,
          i,
          a,
          r = 1,
          o = e.replace(/\s/g, "").toLowerCase(),
          c = ("string" == typeof n[o] ? n[o].toLowerCase() : null) || o;
        if (c.startsWith("#")) {
          let e = c.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (i = parseInt(e[1] + e[1], 16)),
              (a = parseInt(e[2] + e[2], 16)),
              4 === e.length && (r = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (i = parseInt(e.substring(2, 4), 16)),
              (a = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (r = parseInt(e.substring(6, 8), 16) / 255));
        } else if (c.startsWith("rgba")) {
          let e = c.match(/rgba\(([^)]+)\)/)[1].split(",");
          ((t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (a = parseInt(e[2], 10)),
            (r = parseFloat(e[3])));
        } else if (c.startsWith("rgb")) {
          let e = c.match(/rgb\(([^)]+)\)/)[1].split(",");
          ((t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (a = parseInt(e[2], 10)));
        } else if (c.startsWith("hsla")) {
          let e,
            n,
            o,
            l = c.match(/hsla\(([^)]+)\)/)[1].split(","),
            s = parseFloat(l[0]),
            u = parseFloat(l[1].replace("%", "")) / 100,
            d = parseFloat(l[2].replace("%", "")) / 100;
          r = parseFloat(l[3]);
          let f = (1 - Math.abs(2 * d - 1)) * u,
            p = f * (1 - Math.abs(((s / 60) % 2) - 1)),
            g = d - f / 2;
          (s >= 0 && s < 60
            ? ((e = f), (n = p), (o = 0))
            : s >= 60 && s < 120
              ? ((e = p), (n = f), (o = 0))
              : s >= 120 && s < 180
                ? ((e = 0), (n = f), (o = p))
                : s >= 180 && s < 240
                  ? ((e = 0), (n = p), (o = f))
                  : s >= 240 && s < 300
                    ? ((e = p), (n = 0), (o = f))
                    : ((e = f), (n = 0), (o = p)),
            (t = Math.round((e + g) * 255)),
            (i = Math.round((n + g) * 255)),
            (a = Math.round((o + g) * 255)));
        } else if (c.startsWith("hsl")) {
          let e,
            n,
            r,
            o = c.match(/hsl\(([^)]+)\)/)[1].split(","),
            l = parseFloat(o[0]),
            s = parseFloat(o[1].replace("%", "")) / 100,
            u = parseFloat(o[2].replace("%", "")) / 100,
            d = (1 - Math.abs(2 * u - 1)) * s,
            f = d * (1 - Math.abs(((l / 60) % 2) - 1)),
            p = u - d / 2;
          (l >= 0 && l < 60
            ? ((e = d), (n = f), (r = 0))
            : l >= 60 && l < 120
              ? ((e = f), (n = d), (r = 0))
              : l >= 120 && l < 180
                ? ((e = 0), (n = d), (r = f))
                : l >= 180 && l < 240
                  ? ((e = 0), (n = f), (r = d))
                  : l >= 240 && l < 300
                    ? ((e = f), (n = 0), (r = d))
                    : ((e = d), (n = 0), (r = f)),
            (t = Math.round((e + p) * 255)),
            (i = Math.round((n + p) * 255)),
            (a = Math.round((r + p) * 255)));
        }
        if (Number.isNaN(t) || Number.isNaN(i) || Number.isNaN(a))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`,
          );
        return { red: t, green: i, blue: a, alpha: r };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        IX2BrowserSupport: function () {
          return r;
        },
        IX2EasingUtils: function () {
          return c;
        },
        IX2Easings: function () {
          return o;
        },
        IX2ElementsReducer: function () {
          return l;
        },
        IX2VanillaPlugins: function () {
          return s;
        },
        IX2VanillaUtils: function () {
          return u;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = f(n(2662)),
        o = f(n(8686)),
        c = f(n(3767)),
        l = f(n(5861)),
        s = f(n(1799)),
        u = f(n(4124));
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = d(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return ((i.default = e), n && n.set(e, i), i);
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          ELEMENT_MATCHES: function () {
            return s;
          },
          FLEX_PREFIXED: function () {
            return u;
          },
          IS_BROWSER_ENV: function () {
            return c;
          },
          TRANSFORM_PREFIXED: function () {
            return d;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return l;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (i = n(9777)) && i.__esModule ? i : { default: i },
        c = "undefined" != typeof window,
        l = (e, t) => (c ? e() : t),
        s = l(() =>
          (0, o.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype,
          ),
        ),
        u = l(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        d = l(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        f = d.split("transform")[0],
        p = f ? f + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          applyEasing: function () {
            return d;
          },
          createBezierEasing: function () {
            return u;
          },
          optimizeFloat: function () {
            return s;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = l(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return ((i.default = e), n && n.set(e, i), i);
        })(n(8686)),
        c = (i = n(1361)) && i.__esModule ? i : { default: i };
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (l = function (e) {
          return e ? n : t;
        })(e);
      }
      function s(e, t = 5, n = 10) {
        let i = Math.pow(n, t),
          a = Number(Math.round(e * i) / i);
        return Math.abs(a) > 1e-4 ? a : 0;
      }
      function u(e) {
        return (0, c.default)(...e);
      }
      function d(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
            ? 1
            : n
              ? s(t > 0 ? n(t) : t)
              : s(t > 0 && e && o[e] ? o[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          bounce: function () {
            return B;
          },
          bouncePast: function () {
            return z;
          },
          ease: function () {
            return c;
          },
          easeIn: function () {
            return l;
          },
          easeInOut: function () {
            return u;
          },
          easeOut: function () {
            return s;
          },
          inBack: function () {
            return M;
          },
          inCirc: function () {
            return L;
          },
          inCubic: function () {
            return g;
          },
          inElastic: function () {
            return G;
          },
          inExpo: function () {
            return A;
          },
          inOutBack: function () {
            return U;
          },
          inOutCirc: function () {
            return w;
          },
          inOutCubic: function () {
            return y;
          },
          inOutElastic: function () {
            return V;
          },
          inOutExpo: function () {
            return N;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return T;
          },
          inOutQuint: function () {
            return h;
          },
          inOutSine: function () {
            return R;
          },
          inQuad: function () {
            return d;
          },
          inQuart: function () {
            return I;
          },
          inQuint: function () {
            return b;
          },
          inSine: function () {
            return _;
          },
          outBack: function () {
            return F;
          },
          outBounce: function () {
            return P;
          },
          outCirc: function () {
            return C;
          },
          outCubic: function () {
            return E;
          },
          outElastic: function () {
            return x;
          },
          outExpo: function () {
            return S;
          },
          outQuad: function () {
            return f;
          },
          outQuart: function () {
            return m;
          },
          outQuint: function () {
            return O;
          },
          outSine: function () {
            return v;
          },
          swingFrom: function () {
            return k;
          },
          swingFromTo: function () {
            return D;
          },
          swingTo: function () {
            return X;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (i = n(1361)) && i.__esModule ? i : { default: i },
        c = (0, o.default)(0.25, 0.1, 0.25, 1),
        l = (0, o.default)(0.42, 0, 1, 1),
        s = (0, o.default)(0, 0, 0.58, 1),
        u = (0, o.default)(0.42, 0, 0.58, 1);
      function d(e) {
        return Math.pow(e, 2);
      }
      function f(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function g(e) {
        return Math.pow(e, 3);
      }
      function E(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function y(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function I(e) {
        return Math.pow(e, 4);
      }
      function m(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function T(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function b(e) {
        return Math.pow(e, 5);
      }
      function O(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function h(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function _(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function v(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function R(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function A(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function S(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function N(e) {
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (e /= 0.5) < 1
              ? 0.5 * Math.pow(2, 10 * (e - 1))
              : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function L(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function C(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function w(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function P(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function M(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function F(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function U(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function G(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (n || (n = 0.3),
              i < 1
                ? ((i = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
              -(
                i *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n)
              ));
      }
      function x(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (n || (n = 0.3),
              i < 1
                ? ((i = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
              i * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
                1);
      }
      function V(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
            ? 1
            : (n || (n = 0.3 * 1.5),
                i < 1
                  ? ((i = 1), (t = n / 4))
                  : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                e < 1)
              ? -0.5 *
                (i *
                  Math.pow(2, 10 * (e -= 1)) *
                  Math.sin((2 * Math.PI * (e - t)) / n))
              : i *
                  Math.pow(2, -10 * (e -= 1)) *
                  Math.sin((2 * Math.PI * (e - t)) / n) *
                  0.5 +
                1;
      }
      function D(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function k(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function X(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function B(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function z(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
            : e < 2.5 / 2.75
              ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
              : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return s;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return u;
        },
        isPluginType: function () {
          return c;
        },
        renderPlugin: function () {
          return g;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(2662),
        o = n(3690);
      function c(e) {
        return o.pluginMethodMap.has(e);
      }
      let l = (e) => (t) => {
          if (!r.IS_BROWSER_ENV) return () => null;
          let n = o.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let i = n[e];
          if (!i) throw Error(`IX2 invalid plugin method: ${e}`);
          return i;
        },
        s = l("getPluginConfig"),
        u = l("getPluginOrigin"),
        d = l("getPluginDuration"),
        f = l("getPluginDestination"),
        p = l("createPluginInstance"),
        g = l("renderPlugin"),
        E = l("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        cleanupHTMLElement: function () {
          return eW;
        },
        clearAllStyles: function () {
          return eB;
        },
        clearObjectCache: function () {
          return ed;
        },
        getActionListProgress: function () {
          return e$;
        },
        getAffectedElements: function () {
          return eb;
        },
        getComputedStyle: function () {
          return eO;
        },
        getDestinationValues: function () {
          return eL;
        },
        getElementId: function () {
          return eE;
        },
        getInstanceId: function () {
          return ep;
        },
        getInstanceOrigin: function () {
          return eR;
        },
        getItemConfigByKey: function () {
          return eN;
        },
        getMaxDurationItemIndex: function () {
          return eY;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eC;
        },
        getStyleProp: function () {
          return ew;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return em;
        },
        reduceListToGroup: function () {
          return eq;
        },
        reifyState: function () {
          return ey;
        },
        renderHTMLElement: function () {
          return eP;
        },
        shallowEqual: function () {
          return u.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eK;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = E(n(4075)),
        o = E(n(1455)),
        c = E(n(5720)),
        l = n(1185),
        s = n(7087),
        u = E(n(7164)),
        d = n(3767),
        f = n(380),
        p = n(1799),
        g = n(2662);
      function E(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: y,
          TRANSFORM: I,
          TRANSLATE_3D: m,
          SCALE_3D: T,
          ROTATE_X: b,
          ROTATE_Y: O,
          ROTATE_Z: h,
          SKEW: _,
          PRESERVE_3D: v,
          FLEX: R,
          OPACITY: A,
          FILTER: S,
          FONT_VARIATION_SETTINGS: N,
          WIDTH: L,
          HEIGHT: C,
          BACKGROUND_COLOR: w,
          BORDER_COLOR: P,
          COLOR: M,
          CHILDREN: F,
          IMMEDIATE_CHILDREN: U,
          SIBLINGS: G,
          PARENT: x,
          DISPLAY: V,
          WILL_CHANGE: D,
          AUTO: k,
          COMMA_DELIMITER: X,
          COLON_DELIMITER: B,
          BAR_DELIMITER: z,
          RENDER_TRANSFORM: j,
          RENDER_GENERAL: W,
          RENDER_STYLE: H,
          RENDER_PLUGIN: Q,
        } = s.IX2EngineConstants,
        {
          TRANSFORM_MOVE: Y,
          TRANSFORM_SCALE: $,
          TRANSFORM_ROTATE: q,
          TRANSFORM_SKEW: K,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: en,
          STYLE_BORDER: ei,
          STYLE_TEXT_COLOR: ea,
          GENERAL_DISPLAY: er,
          OBJECT_VALUE: eo,
        } = s.ActionTypeConsts,
        ec = (e) => e.trim(),
        el = Object.freeze({ [en]: w, [ei]: P, [ea]: M }),
        es = Object.freeze({
          [g.TRANSFORM_PREFIXED]: I,
          [w]: y,
          [A]: A,
          [S]: S,
          [L]: L,
          [C]: C,
          [N]: N,
        }),
        eu = new Map();
      function ed() {
        eu.clear();
      }
      let ef = 1;
      function ep() {
        return "i" + ef++;
      }
      let eg = 1;
      function eE(e, t) {
        for (let n in e) {
          let i = e[n];
          if (i && i.ref === t) return i.id;
        }
        return "e" + eg++;
      }
      function ey({ events: e, actionLists: t, site: n } = {}) {
        let i = (0, o.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return (e[n] || (e[n] = {}), (e[n][t.id] = t), e);
            },
            {},
          ),
          a = n && n.mediaQueries,
          r = [];
        return (
          a
            ? (r = a.map((e) => e.key))
            : ((a = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: i,
              mediaQueries: a,
              mediaQueryKeys: r,
            },
          }
        );
      }
      let eI = (e, t) => e === t;
      function em({ store: e, select: t, onChange: n, comparator: i = eI }) {
        let { getState: a, subscribe: r } = e,
          o = r(function () {
            let r = t(a());
            if (null == r) return void o();
            i(r, c) || n((c = r), e);
          }),
          c = t(a());
        return o;
      }
      function eT(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o,
          };
        }
        return {};
      }
      function eb({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: i,
        elementApi: a,
      }) {
        let r, o, c;
        if (!a) throw Error("IX2 missing elementApi");
        let { targets: l } = e;
        if (Array.isArray(l) && l.length > 0)
          return l.reduce(
            (e, r) =>
              e.concat(
                eb({
                  config: { target: r },
                  event: t,
                  eventTarget: n,
                  elementRoot: i,
                  elementApi: a,
                }),
              ),
            [],
          );
        let {
            getValidDocument: u,
            getQuerySelector: d,
            queryDocument: f,
            getChildElements: p,
            getSiblingElements: E,
            matchSelector: y,
            elementContains: I,
            isSiblingNode: m,
          } = a,
          { target: T } = e;
        if (!T) return [];
        let {
          id: b,
          objectId: O,
          selector: h,
          selectorGuids: _,
          appliesTo: v,
          useEventTarget: R,
        } = eT(T);
        if (O) return [eu.has(O) ? eu.get(O) : eu.set(O, {}).get(O)];
        if (v === s.EventAppliesTo.PAGE) {
          let e = u(b);
          return e ? [e] : [];
        }
        let A = (t?.action?.config?.affectedElements ?? {})[b || h] || {},
          S = !!(A.id || A.selector),
          N = t && d(eT(t.target));
        if (
          (S
            ? ((r = A.limitAffectedElements), (o = N), (c = d(A)))
            : (o = c = d({ id: b, selector: h, selectorGuids: _ })),
          t && R)
        ) {
          let e = n && (c || !0 === R) ? [n] : f(N);
          if (c) {
            if (R === x) return f(c).filter((t) => e.some((e) => I(t, e)));
            if (R === F) return f(c).filter((t) => e.some((e) => I(e, t)));
            if (R === G) return f(c).filter((t) => e.some((e) => m(e, t)));
          }
          return e;
        }
        return null == o || null == c
          ? []
          : g.IS_BROWSER_ENV && i
            ? f(c).filter((e) => i.contains(e))
            : r === F
              ? f(o, c)
              : r === U
                ? p(f(o)).filter(y(c))
                : r === G
                  ? E(f(o)).filter(y(c))
                  : f(c);
      }
      function eO({ element: e, actionItem: t }) {
        if (!g.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case et:
          case en:
          case ei:
          case ea:
          case er:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let eh = /px/,
        e_ = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eF[t.type]), e),
            e || {},
          ),
        ev = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eU[t.type] || t.defaultValue || 0),
              e
            ),
            e || {},
          );
      function eR(e, t = {}, n = {}, i, a) {
        let { getStyle: o } = a,
          { actionTypeId: c } = i;
        if ((0, p.isPluginType)(c)) return (0, p.getPluginOrigin)(c)(t[c], i);
        switch (i.actionTypeId) {
          case Y:
          case $:
          case q:
          case K:
            return t[i.actionTypeId] || eM[i.actionTypeId];
          case J:
            return e_(t[i.actionTypeId], i.config.filters);
          case ee:
            return ev(t[i.actionTypeId], i.config.fontVariations);
          case Z:
            return { value: (0, r.default)(parseFloat(o(e, A)), 1) };
          case et: {
            let t,
              a = o(e, L),
              c = o(e, C);
            return {
              widthValue:
                i.config.widthUnit === k
                  ? eh.test(a)
                    ? parseFloat(a)
                    : parseFloat(n.width)
                  : (0, r.default)(parseFloat(a), parseFloat(n.width)),
              heightValue:
                i.config.heightUnit === k
                  ? eh.test(c)
                    ? parseFloat(c)
                    : parseFloat(n.height)
                  : (0, r.default)(parseFloat(c), parseFloat(n.height)),
            };
          }
          case en:
          case ei:
          case ea:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: i,
            }) {
              let a = el[t],
                o = i(e, a),
                c = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(eD, eV.test(o) ? o : n[a]).split(X);
              return {
                rValue: (0, r.default)(parseInt(c[0], 10), 255),
                gValue: (0, r.default)(parseInt(c[1], 10), 255),
                bValue: (0, r.default)(parseInt(c[2], 10), 255),
                aValue: (0, r.default)(parseFloat(c[3]), 1),
              };
            })({
              element: e,
              actionTypeId: i.actionTypeId,
              computedStyle: n,
              getStyle: o,
            });
          case er:
            return { value: (0, r.default)(o(e, V), n.display) };
          case eo:
            return t[i.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eA = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eN = (e, t, n) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, c.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, c.default)(
                n.fontVariations,
                ({ type: e }) => e === t,
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eL({ element: e, actionItem: t, elementApi: n }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case Y:
          case $:
          case q:
          case K: {
            let { xValue: e, yValue: n, zValue: i } = t.config;
            return { xValue: e, yValue: n, zValue: i };
          }
          case et: {
            let { getStyle: i, setStyle: a, getProperty: r } = n,
              { widthUnit: o, heightUnit: c } = t.config,
              { widthValue: l, heightValue: s } = t.config;
            if (!g.IS_BROWSER_ENV) return { widthValue: l, heightValue: s };
            if (o === k) {
              let t = i(e, L);
              (a(e, L, ""), (l = r(e, "offsetWidth")), a(e, L, t));
            }
            if (c === k) {
              let t = i(e, C);
              (a(e, C, ""), (s = r(e, "offsetHeight")), a(e, C, t));
            }
            return { widthValue: l, heightValue: s };
          }
          case en:
          case ei:
          case ea: {
            let {
              rValue: i,
              gValue: a,
              bValue: r,
              aValue: o,
              globalSwatchId: c,
            } = t.config;
            if (c && c.startsWith("--")) {
              let { getStyle: t } = n,
                i = t(e, c),
                a = (0, f.normalizeColor)(i);
              return {
                rValue: a.red,
                gValue: a.green,
                bValue: a.blue,
                aValue: a.alpha,
              };
            }
            return { rValue: i, gValue: a, bValue: r, aValue: o };
          }
          case J:
            return t.config.filters.reduce(eA, {});
          case ee:
            return t.config.fontVariations.reduce(eS, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eC(e) {
        return /^TRANSFORM_/.test(e)
          ? j
          : /^STYLE_/.test(e)
            ? H
            : /^GENERAL_/.test(e)
              ? W
              : /^PLUGIN_/.test(e)
                ? Q
                : void 0;
      }
      function ew(e, t) {
        return e === H ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eP(e, t, n, i, a, r, c, l, s) {
        switch (l) {
          case j:
            var u = e,
              d = t,
              f = n,
              E = a,
              y = c;
            let I = ex
                .map((e) => {
                  let t = eM[e],
                    {
                      xValue: n = t.xValue,
                      yValue: i = t.yValue,
                      zValue: a = t.zValue,
                      xUnit: r = "",
                      yUnit: o = "",
                      zUnit: c = "",
                    } = d[e] || {};
                  switch (e) {
                    case Y:
                      return `${m}(${n}${r}, ${i}${o}, ${a}${c})`;
                    case $:
                      return `${T}(${n}${r}, ${i}${o}, ${a}${c})`;
                    case q:
                      return `${b}(${n}${r}) ${O}(${i}${o}) ${h}(${a}${c})`;
                    case K:
                      return `${_}(${n}${r}, ${i}${o})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: A } = y;
            (ek(u, g.TRANSFORM_PREFIXED, y),
              A(u, g.TRANSFORM_PREFIXED, I),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: i },
              ) {
                return (
                  (e === Y && void 0 !== i) ||
                  (e === $ && void 0 !== i) ||
                  (e === q && (void 0 !== t || void 0 !== n))
                );
              })(E, f) && A(u, g.TRANSFORM_STYLE_PREFIXED, v));
            return;
          case H:
            return (function (e, t, n, i, a, r) {
              let { setStyle: c } = r;
              switch (i.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: a = "" } = i.config,
                    { widthValue: o, heightValue: l } = n;
                  (void 0 !== o &&
                    (t === k && (t = "px"), ek(e, L, r), c(e, L, o + t)),
                    void 0 !== l &&
                      (a === k && (a = "px"), ek(e, C, r), c(e, C, l + a)));
                  break;
                }
                case J:
                  var l = i.config;
                  let s = (0, o.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${eG(n, l)})`,
                      "",
                    ),
                    { setStyle: u } = r;
                  (ek(e, S, r), u(e, S, s));
                  break;
                case ee:
                  i.config;
                  let d = (0, o.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      [],
                    ).join(", "),
                    { setStyle: f } = r;
                  (ek(e, N, r), f(e, N, d));
                  break;
                case en:
                case ei:
                case ea: {
                  let t = el[i.actionTypeId],
                    a = Math.round(n.rValue),
                    o = Math.round(n.gValue),
                    l = Math.round(n.bValue),
                    s = n.aValue;
                  (ek(e, t, r),
                    c(
                      e,
                      t,
                      s >= 1
                        ? `rgb(${a},${o},${l})`
                        : `rgba(${a},${o},${l},${s})`,
                    ));
                  break;
                }
                default: {
                  let { unit: t = "" } = i.config;
                  (ek(e, a, r), c(e, a, n.value + t));
                }
              }
            })(e, 0, n, a, r, c);
          case W:
            var w = e,
              P = a,
              M = c;
            let { setStyle: F } = M;
            if (P.actionTypeId === er) {
              let { value: e } = P.config;
              F(w, V, e === R && g.IS_BROWSER_ENV ? g.FLEX_PREFIXED : e);
            }
            return;
          case Q: {
            let { actionTypeId: e } = a;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(s, t, a);
          }
        }
      }
      let eM = {
          [Y]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [$]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eF = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eU = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        eG = (e, t) => {
          let n = (0, c.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        ex = Object.keys(eM),
        eV = /^rgb/,
        eD = RegExp("rgba?\\(([^)]+)\\)");
      function ek(e, t, n) {
        if (!g.IS_BROWSER_ENV) return;
        let i = es[t];
        if (!i) return;
        let { getStyle: a, setStyle: r } = n,
          o = a(e, D);
        if (!o) return void r(e, D, i);
        let c = o.split(X).map(ec);
        -1 === c.indexOf(i) && r(e, D, c.concat(i).join(X));
      }
      function eX(e, t, n) {
        if (!g.IS_BROWSER_ENV) return;
        let i = es[t];
        if (!i) return;
        let { getStyle: a, setStyle: r } = n,
          o = a(e, D);
        o &&
          -1 !== o.indexOf(i) &&
          r(
            e,
            D,
            o
              .split(X)
              .map(ec)
              .filter((e) => e !== i)
              .join(X),
          );
      }
      function eB({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: i = {}, actionLists: a = {} } = n;
        (Object.keys(i).forEach((e) => {
          let n = i[e],
            { config: r } = n.action,
            { actionListId: o } = r,
            c = a[o];
          c && ez({ actionList: c, event: n, elementApi: t });
        }),
          Object.keys(a).forEach((e) => {
            ez({ actionList: a[e], elementApi: t });
          }));
      }
      function ez({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: i, continuousParameterGroups: a } = e;
        (i &&
          i.forEach((e) => {
            ej({ actionGroup: e, event: t, elementApi: n });
          }),
          a &&
            a.forEach((e) => {
              let { continuousActionGroups: i } = e;
              i.forEach((e) => {
                ej({ actionGroup: e, event: t, elementApi: n });
              });
            }));
      }
      function ej({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: i } = e;
        i.forEach((e) => {
          let i,
            { actionTypeId: a, config: r } = e;
          ((i = (0, p.isPluginType)(a)
            ? (t) => (0, p.clearPlugin)(a)(t, e)
            : eH({ effect: eQ, actionTypeId: a, elementApi: n })),
            eb({ config: r, event: t, elementApi: n }).forEach(i));
        });
      }
      function eW(e, t, n) {
        let { setStyle: i, getStyle: a } = n,
          { actionTypeId: r } = t;
        if (r === et) {
          let { config: n } = t;
          (n.widthUnit === k && i(e, L, ""), n.heightUnit === k && i(e, C, ""));
        }
        a(e, D) && eH({ effect: eX, actionTypeId: r, elementApi: n })(e);
      }
      let eH =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (i) => {
          switch (t) {
            case Y:
            case $:
            case q:
            case K:
              e(i, g.TRANSFORM_PREFIXED, n);
              break;
            case J:
              e(i, S, n);
              break;
            case ee:
              e(i, N, n);
              break;
            case Z:
              e(i, A, n);
              break;
            case et:
              (e(i, L, n), e(i, C, n));
              break;
            case en:
            case ei:
            case ea:
              e(i, el[t], n);
              break;
            case er:
              e(i, V, n);
          }
        };
      function eQ(e, t, n) {
        let { setStyle: i } = n;
        (eX(e, t, n),
          i(e, t, ""),
          t === g.TRANSFORM_PREFIXED && i(e, g.TRANSFORM_STYLE_PREFIXED, ""));
      }
      function eY(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, i) => {
            let { config: a } = e,
              r = a.delay + a.duration;
            r >= t && ((t = r), (n = i));
          }),
          n
        );
      }
      function e$(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: i } = e,
          { actionItem: a, verboseTimeElapsed: r = 0 } = t,
          o = 0,
          c = 0;
        return (
          n.forEach((e, t) => {
            if (i && 0 === t) return;
            let { actionItems: n } = e,
              l = n[eY(n)],
              { config: s, actionTypeId: u } = l;
            a.id === l.id && (c = o + r);
            let d = eC(u) === W ? 0 : s.duration;
            o += s.delay + d;
          }),
          o > 0 ? (0, d.optimizeFloat)(c / o) : 0
        );
      }
      function eq({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: i, continuousParameterGroups: a } = e,
          r = [],
          o = (e) => (
            r.push((0, l.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          i && i.some(({ actionItems: e }) => e.some(o)),
          a &&
            a.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(o));
            }),
          (0, l.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: r }] },
          })
        );
      }
      function eK(e, { basedOn: t }) {
        return (
          (e === s.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === s.EventBasedOn.ELEMENT || null == t)) ||
          (e === s.EventTypeConsts.MOUSE_MOVE && t === s.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + B + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, u.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + z + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: i = "" } = e;
        return t + z + n + z + i;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let i = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let i = Object.keys(e),
          a = Object.keys(t);
        if (i.length !== a.length) return !1;
        for (let a = 0; a < i.length; a++)
          if (!Object.hasOwn(t, i[a]) || !n(e[i[a]], t[i[a]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        createElementState: function () {
          return _;
        },
        ixElements: function () {
          return h;
        },
        mergeActionState: function () {
          return v;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(1185),
        o = n(7087),
        {
          HTML_ELEMENT: c,
          PLAIN_OBJECT: l,
          ABSTRACT_NODE: s,
          CONFIG_X_VALUE: u,
          CONFIG_Y_VALUE: d,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: g,
          CONFIG_Y_UNIT: E,
          CONFIG_Z_UNIT: y,
          CONFIG_UNIT: I,
        } = o.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: m,
          IX2_INSTANCE_ADDED: T,
          IX2_ELEMENT_STATE_CHANGED: b,
        } = o.IX2EngineActionTypes,
        O = {},
        h = (e = O, t = {}) => {
          switch (t.type) {
            case m:
              return O;
            case T: {
              let {
                  elementId: n,
                  element: i,
                  origin: a,
                  actionItem: o,
                  refType: c,
                } = t.payload,
                { actionTypeId: l } = o,
                s = e;
              return (
                (0, r.getIn)(s, [n, i]) !== i && (s = _(s, i, c, n, o)),
                v(s, n, l, a, o)
              );
            }
            case b: {
              let {
                elementId: n,
                actionTypeId: i,
                current: a,
                actionItem: r,
              } = t.payload;
              return v(e, n, i, a, r);
            }
            default:
              return e;
          }
        };
      function _(e, t, n, i, a) {
        let o =
          n === l ? (0, r.getIn)(a, ["config", "target", "objectId"]) : null;
        return (0, r.mergeIn)(e, [i], { id: i, ref: t, refId: o, refType: n });
      }
      function v(e, t, n, i, a) {
        let o = (function (e) {
          let { config: t } = e;
          return R.reduce((e, n) => {
            let i = n[0],
              a = n[1],
              r = t[i],
              o = t[a];
            return (null != r && null != o && (e[a] = o), e);
          }, {});
        })(a);
        return (0, r.mergeIn)(e, [t, "refState", n], i, o);
      }
      let R = [
        [u, g],
        [d, E],
        [f, y],
        [p, I],
      ];
    },
    6930: function () {
      Webflow.require("ix2").init({
        events: {
          e: {
            id: "e",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: { actionListId: "a", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".image-parallax_trigger.is-default",
              originalId: "e580b6b4-e276-5deb-4821-3f5a183a8994",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".image-parallax_trigger.is-default",
                originalId: "e580b6b4-e276-5deb-4821-3f5a183a8994",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-p",
                smoothing: 67.5,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18cd8d02700,
          },
          "e-2": {
            id: "e-2",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-2",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".image-parallax_trigger.is-hero",
              originalId: "cccb7742-c5e2-627e-f14c-47246e28eb62",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".image-parallax_trigger.is-hero",
                originalId: "cccb7742-c5e2-627e-f14c-47246e28eb62",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-2-p",
                smoothing: 0,
                startsEntering: !1,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18cd8d9a81f,
          },
          "e-3": {
            id: "e-3",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-3",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".image-parallax_trigger.is-section",
              originalId: "3e2a1771-9ef1-8503-4756-95a3584c538f",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".image-parallax_trigger.is-section",
                originalId: "3e2a1771-9ef1-8503-4756-95a3584c538f",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-3-p",
                smoothing: 0,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !0,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18cd8df310b,
          },
          "e-4": {
            id: "e-4",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-4",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".image-parallax_trigger.is-section-100vh",
              originalId: "99db4675-ef81-b00b-1563-4d0ae0b8a85b",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".image-parallax_trigger.is-section-100vh",
                originalId: "99db4675-ef81-b00b-1563-4d0ae0b8a85b",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-4-p",
                smoothing: 0,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18cd8f27b20,
          },
          "e-7": {
            id: "e-7",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "PLUGIN_LOTTIE_EFFECT",
              instant: !1,
              config: {
                actionListId: "pluginLottieLoop",
                autoStopEventId: "e-8",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".lottie",
              originalId:
                "67dbb666b3ce8ebf5ffd59f0|5bd0b5c8-ee1e-3cf7-db4f-5f79418e2a15",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".lottie",
                originalId:
                  "67dbb666b3ce8ebf5ffd59f0|5bd0b5c8-ee1e-3cf7-db4f-5f79418e2a15",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ebedf2f75,
          },
          "e-9": {
            id: "e-9",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-10",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".search-cms_empty",
              originalId:
                "67dbb666b3ce8ebf5ffd5a31|ffc90aee-2266-0ede-970e-bcac8817d2d3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".search-cms_empty",
                originalId:
                  "67dbb666b3ce8ebf5ffd5a31|ffc90aee-2266-0ede-970e-bcac8817d2d3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18c8896f4fc,
          },
          "e-10": {
            id: "e-10",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-9",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".search-cms_empty",
              originalId:
                "67dbb666b3ce8ebf5ffd5a31|ffc90aee-2266-0ede-970e-bcac8817d2d3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".search-cms_empty",
                originalId:
                  "67dbb666b3ce8ebf5ffd5a31|ffc90aee-2266-0ede-970e-bcac8817d2d3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18c8896f4fd,
          },
          "e-11": {
            id: "e-11",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-12",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".filter-reset",
              originalId:
                "67dbb666b3ce8ebf5ffd5a31|9cd5c4a3-c880-82a6-4258-d9a3c3ef82a1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".filter-reset",
                originalId:
                  "67dbb666b3ce8ebf5ffd5a31|9cd5c4a3-c880-82a6-4258-d9a3c3ef82a1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ecd305ae1,
          },
          "e-12": {
            id: "e-12",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-11",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".filter-reset",
              originalId:
                "67dbb666b3ce8ebf5ffd5a31|9cd5c4a3-c880-82a6-4258-d9a3c3ef82a1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".filter-reset",
                originalId:
                  "67dbb666b3ce8ebf5ffd5a31|9cd5c4a3-c880-82a6-4258-d9a3c3ef82a1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ecd305ae1,
          },
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-14",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".select.is-dropdown",
              originalId:
                "67dbb666b3ce8ebf5ffd5a31|ffc90aee-2266-0ede-970e-bcac8817d2d3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".select.is-dropdown",
                originalId:
                  "67dbb666b3ce8ebf5ffd5a31|ffc90aee-2266-0ede-970e-bcac8817d2d3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ee5cf1fbb,
          },
          "e-14": {
            id: "e-14",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-13",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".select.is-dropdown",
              originalId:
                "67dbb666b3ce8ebf5ffd5a31|ffc90aee-2266-0ede-970e-bcac8817d2d3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".select.is-dropdown",
                originalId:
                  "67dbb666b3ce8ebf5ffd5a31|ffc90aee-2266-0ede-970e-bcac8817d2d3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ee5cf1fbb,
          },
          "e-17": {
            id: "e-17",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-18",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".localization",
              originalId:
                "67dbb666b3ce8ebf5ffd5a68|b465f120-d499-c9e5-a9f4-f0e7daa50740",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".localization",
                originalId:
                  "67dbb666b3ce8ebf5ffd5a68|b465f120-d499-c9e5-a9f4-f0e7daa50740",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18fce6e90a8,
          },
          "e-18": {
            id: "e-18",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-17",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".localization",
              originalId:
                "67dbb666b3ce8ebf5ffd5a68|b465f120-d499-c9e5-a9f4-f0e7daa50740",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".localization",
                originalId:
                  "67dbb666b3ce8ebf5ffd5a68|b465f120-d499-c9e5-a9f4-f0e7daa50740",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18fce6e90a9,
          },
          "e-19": {
            id: "e-19",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-20",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".populair-item_img-wrap",
              originalId:
                "67a31c685e3ae6181c848628|eaa27803-4ea6-8be0-25b0-ddcb8393d952",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".populair-item_img-wrap",
                originalId:
                  "67a31c685e3ae6181c848628|eaa27803-4ea6-8be0-25b0-ddcb8393d952",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194fac91ea9,
          },
          "e-20": {
            id: "e-20",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-19",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".populair-item_img-wrap",
              originalId:
                "67a31c685e3ae6181c848628|eaa27803-4ea6-8be0-25b0-ddcb8393d952",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".populair-item_img-wrap",
                originalId:
                  "67a31c685e3ae6181c848628|eaa27803-4ea6-8be0-25b0-ddcb8393d952",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194fac91eaa,
          },
          "e-21": {
            id: "e-21",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-22",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67dbb666b3ce8ebf5ffd59cd",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67dbb666b3ce8ebf5ffd59cd",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195ab553221,
          },
          "e-22": {
            id: "e-22",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-21",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67dbb666b3ce8ebf5ffd59cd",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67dbb666b3ce8ebf5ffd59cd",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195ab553222,
          },
          "e-23": {
            id: "e-23",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-24",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67dc47511d621a5add531a56",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67dc47511d621a5add531a56",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195b47696ef,
          },
          "e-24": {
            id: "e-24",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-23",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67dc47511d621a5add531a56",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67dc47511d621a5add531a56",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195b47696ef,
          },
          "e-25": {
            id: "e-25",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-15",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".hero-contact",
              originalId:
                "67dbb666b3ce8ebf5ffd59cd|f09d5489-74cc-34d7-ffa5-ab47aeebf8af",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".hero-contact",
                originalId:
                  "67dbb666b3ce8ebf5ffd59cd|f09d5489-74cc-34d7-ffa5-ab47aeebf8af",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-15-p",
                selectedAxis: "X_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-15-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 50,
                restingState: 50,
              },
            ],
            createdOn: 0x195b47fc2da,
          },
          "e-28": {
            id: "e-28",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-29",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".line-mask",
              originalId:
                "67dbb666b3ce8ebf5ffd59cd|a451b888-be21-de4a-781e-b7723a7e601e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".line-mask",
                originalId:
                  "67dbb666b3ce8ebf5ffd59cd|a451b888-be21-de4a-781e-b7723a7e601e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195ba4a5a85,
          },
          "e-30": {
            id: "e-30",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-31",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "443c4d0a-cd32-53b0-21bc-7d503ab5dbd6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "443c4d0a-cd32-53b0-21bc-7d503ab5dbd6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195ba5c7fda,
          },
          "e-31": {
            id: "e-31",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-30",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "443c4d0a-cd32-53b0-21bc-7d503ab5dbd6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "443c4d0a-cd32-53b0-21bc-7d503ab5dbd6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195ba5c7fda,
          },
          "e-32": {
            id: "e-32",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-33",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67dc47511d621a5add531a56|136fe474-dcdb-1eb5-e0bf-f8ab7b7e03e9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67dc47511d621a5add531a56|136fe474-dcdb-1eb5-e0bf-f8ab7b7e03e9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 40,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195ba603451,
          },
          "e-42": {
            id: "e-42",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-25",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-43",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "65f87ffd-663c-b7c9-7fac-aab7b8c967dd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "65f87ffd-663c-b7c9-7fac-aab7b8c967dd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195bdf56c27,
          },
          "e-44": {
            id: "e-44",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-45",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67dc47511d621a5add531a56|d2096f7d-71d8-45eb-6298-41d866a9eac1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67dc47511d621a5add531a56|d2096f7d-71d8-45eb-6298-41d866a9eac1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195bdf64e78,
          },
          "e-46": {
            id: "e-46",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-47",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67dc47511d621a5add531a56|a9235c2b-da90-5719-f02e-6558a03b417d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67dc47511d621a5add531a56|a9235c2b-da90-5719-f02e-6558a03b417d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195bdf6f2c4,
          },
          "e-48": {
            id: "e-48",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-49",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67deeaae7152b7b46a9fb9e7",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67deeaae7152b7b46a9fb9e7",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195bec4bc1b,
          },
          "e-49": {
            id: "e-49",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-48",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67deeaae7152b7b46a9fb9e7",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67deeaae7152b7b46a9fb9e7",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195bec4bc1b,
          },
          "e-50": {
            id: "e-50",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-51",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".plus",
              originalId: "7ec87088-59ca-0ba1-ae59-3bec6ca6216c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".plus",
                originalId: "7ec87088-59ca-0ba1-ae59-3bec6ca6216c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195bf41d59f,
          },
          "e-51": {
            id: "e-51",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-50",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".plus",
              originalId: "7ec87088-59ca-0ba1-ae59-3bec6ca6216c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".plus",
                originalId: "7ec87088-59ca-0ba1-ae59-3bec6ca6216c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195bf41d5a0,
          },
          "e-54": {
            id: "e-54",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-55",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67e1ce8f29aaf8a82e8412a0",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67e1ce8f29aaf8a82e8412a0",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195ca0ee2c5,
          },
          "e-55": {
            id: "e-55",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-54",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67e1ce8f29aaf8a82e8412a0",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67e1ce8f29aaf8a82e8412a0",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195ca0ee2c5,
          },
          "e-56": {
            id: "e-56",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-15",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "bb69b7e1-5e5e-fd56-22ea-cd1ed65d04d6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "bb69b7e1-5e5e-fd56-22ea-cd1ed65d04d6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-15-p",
                selectedAxis: "X_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-15-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 50,
                restingState: 50,
              },
            ],
            createdOn: 0x195ca0ee2c5,
          },
          "e-59": {
            id: "e-59",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-60",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "bb69b7e1-5e5e-fd56-22ea-cd1ed65d04d5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "bb69b7e1-5e5e-fd56-22ea-cd1ed65d04d5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195ca0ee2c5,
          },
          "e-73": {
            id: "e-73",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-74",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "bb69b7e1-5e5e-fd56-22ea-cd1ed65d04ea",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "bb69b7e1-5e5e-fd56-22ea-cd1ed65d04ea",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195ca0ee2c5,
          },
          "e-74": {
            id: "e-74",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-73",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "bb69b7e1-5e5e-fd56-22ea-cd1ed65d04ea",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "bb69b7e1-5e5e-fd56-22ea-cd1ed65d04ea",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195ca0ee2c5,
          },
          "e-75": {
            id: "e-75",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-76",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "c447351a-86f3-41ae-3a4f-35057ed560a5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "c447351a-86f3-41ae-3a4f-35057ed560a5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195ca1a54b9,
          },
          "e-79": {
            id: "e-79",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-16",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "ca544f37-9cd8-c370-2296-781e1c719052",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "ca544f37-9cd8-c370-2296-781e1c719052",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-16-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x195cdfa9d43,
          },
          "e-80": {
            id: "e-80",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-81",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67dc47511d621a5add531a56|5499070e-ef8f-9327-b7f6-eca338c7543e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67dc47511d621a5add531a56|5499070e-ef8f-9327-b7f6-eca338c7543e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195d4410ea4,
          },
          "e-82": {
            id: "e-82",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-83",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67def5cfc01feb0fa8e2e2f6|b4fae445-facd-d890-e9fe-cf9ffd24b1bc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67def5cfc01feb0fa8e2e2f6|b4fae445-facd-d890-e9fe-cf9ffd24b1bc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195d63e01c6,
          },
          "e-92": {
            id: "e-92",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-93",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67def5cfc01feb0fa8e2e2f6",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67def5cfc01feb0fa8e2e2f6",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195d67df77b,
          },
          "e-93": {
            id: "e-93",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-92",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67def5cfc01feb0fa8e2e2f6",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67def5cfc01feb0fa8e2e2f6",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195d67df77b,
          },
          "e-94": {
            id: "e-94",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-95",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "67dc47511d621a5add531a56",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67dc47511d621a5add531a56",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195d714ccdb,
          },
          "e-96": {
            id: "e-96",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-33",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-97",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67dc47511d621a5add531a56|5499070e-ef8f-9327-b7f6-eca338c7543e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67dc47511d621a5add531a56|5499070e-ef8f-9327-b7f6-eca338c7543e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195d760a3c4,
          },
          "e-98": {
            id: "e-98",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-34",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-99",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "67dc47511d621a5add531a56",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67dc47511d621a5add531a56",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195d762012b,
          },
          "e-100": {
            id: "e-100",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-101",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "ca544f37-9cd8-c370-2296-781e1c71904b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "ca544f37-9cd8-c370-2296-781e1c71904b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195d8c2edd1,
          },
          "e-101": {
            id: "e-101",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-36",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-100",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "ca544f37-9cd8-c370-2296-781e1c71904b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "ca544f37-9cd8-c370-2296-781e1c71904b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195d8c2edd2,
          },
          "e-106": {
            id: "e-106",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-107",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68da358bf8a4ebe5563f7e4f|dfa07e43-aef4-c307-950d-81d7486c2976",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68da358bf8a4ebe5563f7e4f|dfa07e43-aef4-c307-950d-81d7486c2976",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 40,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199c7bc32f0,
          },
        },
        actionLists: {
          a: {
            id: "a",
            title: "img-parallax",
            continuousParameterGroups: [
              {
                id: "a-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "SIBLINGS",
                            selector: ".image-parallax_image",
                            selectorGuids: [
                              "f6687943-0289-9045-0ea6-c36690c4d2c1",
                            ],
                          },
                          yValue: -25,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "SIBLINGS",
                            selector: ".image-parallax_image",
                            selectorGuids: [
                              "f6687943-0289-9045-0ea6-c36690c4d2c1",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x187a4f610dc,
          },
          "a-2": {
            id: "a-2",
            title: "img-parallax_header",
            continuousParameterGroups: [
              {
                id: "a-2-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-2-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "SIBLINGS",
                            selector: ".image-parallax_image",
                            selectorGuids: [
                              "f6687943-0289-9045-0ea6-c36690c4d2c1",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-2-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "SIBLINGS",
                            selector: ".image-parallax_image",
                            selectorGuids: [
                              "f6687943-0289-9045-0ea6-c36690c4d2c1",
                            ],
                          },
                          yValue: 50,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x187a4f610dc,
          },
          "a-3": {
            id: "a-3",
            title: "img-parallax_section",
            continuousParameterGroups: [
              {
                id: "a-3-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-3-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "SIBLINGS",
                            selector: ".image-parallax_image",
                            selectorGuids: [
                              "f6687943-0289-9045-0ea6-c36690c4d2c1",
                            ],
                          },
                          yValue: -50,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-3-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "SIBLINGS",
                            selector: ".image-parallax_image",
                            selectorGuids: [
                              "f6687943-0289-9045-0ea6-c36690c4d2c1",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x187a4f610dc,
          },
          "a-4": {
            id: "a-4",
            title: "img-parallax_section-100vh",
            continuousParameterGroups: [
              {
                id: "a-4-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-4-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "SIBLINGS",
                            selector: ".image-parallax_image",
                            selectorGuids: [
                              "f6687943-0289-9045-0ea6-c36690c4d2c1",
                            ],
                          },
                          yValue: -50,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-4-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "SIBLINGS",
                            selector: ".image-parallax_image",
                            selectorGuids: [
                              "f6687943-0289-9045-0ea6-c36690c4d2c1",
                            ],
                          },
                          yValue: 50,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x187a4f610dc,
          },
          "a-5": {
            id: "a-5",
            title: "filter-dropdown [OPEN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-5-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".select-content",
                        selectorGuids: ["f4d44695-79c3-ef0e-c9a7-c311cac5f4d4"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-5-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".select-icon",
                        selectorGuids: ["b6b00df9-93ca-3095-db3a-9b14ef82027a"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: [0.509, 0.188, 0.041, 0.989],
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".select-content",
                        selectorGuids: ["f4d44695-79c3-ef0e-c9a7-c311cac5f4d4"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-5-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.509, 0.188, 0.041, 0.989],
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".select-icon",
                        selectorGuids: ["b6b00df9-93ca-3095-db3a-9b14ef82027a"],
                      },
                      zValue: -180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1886c38fcae,
          },
          "a-6": {
            id: "a-6",
            title: "filter-dropdown [CLOSE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: [0.509, 0.188, 0.041, 0.989],
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".select-content",
                        selectorGuids: ["f4d44695-79c3-ef0e-c9a7-c311cac5f4d4"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-6-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.509, 0.188, 0.041, 0.989],
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".select-icon",
                        selectorGuids: ["b6b00df9-93ca-3095-db3a-9b14ef82027a"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1886c38fcae,
          },
          "a-7": {
            id: "a-7",
            title: "filter-reset [IN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-7-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: 101,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-7-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.509, 0.188, 0.041, 0.989],
                      duration: 300,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18ecd307548,
          },
          "a-8": {
            id: "a-8",
            title: "filter-reset [OUT]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-8-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.509, 0.188, 0.041, 0.989],
                      duration: 300,
                      target: {},
                      yValue: 101,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18ecd307548,
          },
          "a-9": {
            id: "a-9",
            title: "localization [OPEN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-9-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-9-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: -50,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-9-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.509, 0.188, 0.041, 0.989],
                      duration: 300,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-9-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.509, 0.188, 0.041, 0.989],
                      duration: 300,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18fce70794c,
          },
          "a-10": {
            id: "a-10",
            title: "localization [CLOSE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-10-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.509, 0.188, 0.041, 0.989],
                      duration: 300,
                      target: {},
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-10-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.509, 0.188, 0.041, 0.989],
                      duration: 300,
                      target: {},
                      yValue: -50,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18fce70794c,
          },
          "a-11": {
            id: "a-11",
            title: "image-hover [IN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-11-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".image-current",
                        selectorGuids: ["199eadeb-3210-0a6b-39f4-4dde32169a2b"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-11-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".image-current",
                        selectorGuids: ["199eadeb-3210-0a6b-39f4-4dde32169a2b"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x194da76ca62,
          },
          "a-12": {
            id: "a-12",
            title: "image-hover [OUT]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-12-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".image-current",
                        selectorGuids: ["199eadeb-3210-0a6b-39f4-4dde32169a2b"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x194da76ca62,
          },
          "a-13": {
            id: "a-13",
            title: "nav-scroll [UP]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-13-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        selector: ".nav",
                        selectorGuids: ["8911136e-5ff1-4108-adc3-1e257dc216fd"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x195ab5557e7,
          },
          "a-14": {
            id: "a-14",
            title: "nav-scroll [DOWN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-14-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav",
                        selectorGuids: ["8911136e-5ff1-4108-adc3-1e257dc216fd"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-14-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        selector: ".nav",
                        selectorGuids: ["8911136e-5ff1-4108-adc3-1e257dc216fd"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x195ab5557e7,
          },
          "a-15": {
            id: "a-15",
            title: "footer-btn",
            continuousParameterGroups: [
              {
                id: "a-15-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-15-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".footer-btn_inner",
                            selectorGuids: [
                              "f68c1767-1f4b-62d4-f23d-cbeb29388599",
                            ],
                          },
                          xValue: -2,
                          xUnit: "em",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".footer-btn_label",
                            selectorGuids: [
                              "8e1d5231-367d-c8d3-4f83-32224fa39caf",
                            ],
                          },
                          xValue: -1,
                          xUnit: "em",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-9",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".plus_top-l",
                            selectorGuids: [
                              "cdb6a75e-9e1a-b7a9-dcf6-f4c2d8da06d5",
                            ],
                          },
                          xValue: -1,
                          xUnit: "em",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-13",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".plus_top-r",
                            selectorGuids: [
                              "a9822e7a-fd98-c9bb-d571-16242ab79066",
                            ],
                          },
                          xValue: -1,
                          xUnit: "em",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-17",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".plus_bottom-r",
                            selectorGuids: [
                              "68a77b3d-1922-78d3-5527-0889da74b538",
                            ],
                          },
                          xValue: -1,
                          xUnit: "em",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-21",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".plus_bottom-l",
                            selectorGuids: [
                              "d49ff3bc-5810-1548-dd75-1ef012bf6db8",
                            ],
                          },
                          xValue: -1,
                          xUnit: "em",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-15-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".footer-btn_inner",
                            selectorGuids: [
                              "f68c1767-1f4b-62d4-f23d-cbeb29388599",
                            ],
                          },
                          xValue: 2,
                          xUnit: "em",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".footer-btn_label",
                            selectorGuids: [
                              "8e1d5231-367d-c8d3-4f83-32224fa39caf",
                            ],
                          },
                          xValue: 1,
                          xUnit: "em",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-10",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".plus_top-l",
                            selectorGuids: [
                              "cdb6a75e-9e1a-b7a9-dcf6-f4c2d8da06d5",
                            ],
                          },
                          xValue: 1,
                          xUnit: "em",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-14",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".plus_top-r",
                            selectorGuids: [
                              "a9822e7a-fd98-c9bb-d571-16242ab79066",
                            ],
                          },
                          xValue: 1,
                          xUnit: "em",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-18",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".plus_bottom-r",
                            selectorGuids: [
                              "68a77b3d-1922-78d3-5527-0889da74b538",
                            ],
                          },
                          xValue: 1,
                          xUnit: "em",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-22",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".plus_bottom-l",
                            selectorGuids: [
                              "d49ff3bc-5810-1548-dd75-1ef012bf6db8",
                            ],
                          },
                          xValue: 1,
                          xUnit: "em",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-15-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-15-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".footer-btn_inner",
                            selectorGuids: [
                              "f68c1767-1f4b-62d4-f23d-cbeb29388599",
                            ],
                          },
                          yValue: -2,
                          xUnit: "PX",
                          yUnit: "em",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".footer-btn_label",
                            selectorGuids: [
                              "8e1d5231-367d-c8d3-4f83-32224fa39caf",
                            ],
                          },
                          yValue: -1,
                          xUnit: "PX",
                          yUnit: "em",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-11",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".plus_top-l",
                            selectorGuids: [
                              "cdb6a75e-9e1a-b7a9-dcf6-f4c2d8da06d5",
                            ],
                          },
                          yValue: -1,
                          xUnit: "PX",
                          yUnit: "em",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-15",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".plus_top-r",
                            selectorGuids: [
                              "a9822e7a-fd98-c9bb-d571-16242ab79066",
                            ],
                          },
                          yValue: -1,
                          xUnit: "PX",
                          yUnit: "em",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-19",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".plus_bottom-r",
                            selectorGuids: [
                              "68a77b3d-1922-78d3-5527-0889da74b538",
                            ],
                          },
                          yValue: -1,
                          xUnit: "PX",
                          yUnit: "em",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-23",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".plus_bottom-l",
                            selectorGuids: [
                              "d49ff3bc-5810-1548-dd75-1ef012bf6db8",
                            ],
                          },
                          yValue: -1,
                          xUnit: "PX",
                          yUnit: "em",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-15-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".footer-btn_inner",
                            selectorGuids: [
                              "f68c1767-1f4b-62d4-f23d-cbeb29388599",
                            ],
                          },
                          yValue: 2,
                          xUnit: "PX",
                          yUnit: "em",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-8",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".footer-btn_label",
                            selectorGuids: [
                              "8e1d5231-367d-c8d3-4f83-32224fa39caf",
                            ],
                          },
                          yValue: 1,
                          xUnit: "PX",
                          yUnit: "em",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-12",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".plus_top-l",
                            selectorGuids: [
                              "cdb6a75e-9e1a-b7a9-dcf6-f4c2d8da06d5",
                            ],
                          },
                          yValue: 1,
                          xUnit: "PX",
                          yUnit: "em",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-16",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".plus_top-r",
                            selectorGuids: [
                              "a9822e7a-fd98-c9bb-d571-16242ab79066",
                            ],
                          },
                          yValue: 1,
                          xUnit: "PX",
                          yUnit: "em",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-20",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".plus_bottom-r",
                            selectorGuids: [
                              "68a77b3d-1922-78d3-5527-0889da74b538",
                            ],
                          },
                          yValue: 1,
                          xUnit: "PX",
                          yUnit: "em",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-15-n-24",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".plus_bottom-l",
                            selectorGuids: [
                              "d49ff3bc-5810-1548-dd75-1ef012bf6db8",
                            ],
                          },
                          yValue: 1,
                          xUnit: "PX",
                          yUnit: "em",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x195b47fe9ad,
          },
          "a-17": {
            id: "a-17",
            title: "line [IN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-17-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".line",
                        selectorGuids: ["1ddf904d-50c3-7f4a-443f-9b8b006209d5"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-17-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 1200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".line",
                        selectorGuids: ["1ddf904d-50c3-7f4a-443f-9b8b006209d5"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x195ba4a72bc,
          },
          "a-18": {
            id: "a-18",
            title: "button [IN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-18-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "443c4d0a-cd32-53b0-21bc-7d503ab5dbd6",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-18-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-16px",
                        selectorGuids: ["75b88e1d-4781-dae7-7695-f8dc322732e4"],
                      },
                      xValue: 0,
                      xUnit: "em",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-18-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outBack",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "443c4d0a-cd32-53b0-21bc-7d503ab5dbd6",
                      },
                      xValue: 0.96,
                      yValue: 0.96,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-18-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 80,
                      easing: "outBack",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-16px",
                        selectorGuids: ["75b88e1d-4781-dae7-7695-f8dc322732e4"],
                      },
                      xValue: 0.125,
                      xUnit: "em",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x195ba5c8b89,
          },
          "a-19": {
            id: "a-19",
            title: "button [OUT]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-19-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outBack",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "443c4d0a-cd32-53b0-21bc-7d503ab5dbd6",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-19-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outBack",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-16px",
                        selectorGuids: ["75b88e1d-4781-dae7-7695-f8dc322732e4"],
                      },
                      xValue: 0,
                      xUnit: "em",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x195ba5c8b89,
          },
          "a-20": {
            id: "a-20",
            title: "about-founder [IN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-20-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_founder-img",
                        selectorGuids: ["e7680ff6-9e4f-3da5-5cec-4b233b8bf8db"],
                      },
                      zValue: -60,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-20-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_founder-img",
                        selectorGuids: ["e7680ff6-9e4f-3da5-5cec-4b233b8bf8db"],
                      },
                      xValue: -120,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-20-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_founder-img",
                        selectorGuids: ["e7680ff6-9e4f-3da5-5cec-4b233b8bf8db"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-20-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_founder-img",
                        selectorGuids: ["e7680ff6-9e4f-3da5-5cec-4b233b8bf8db"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x195ba604383,
          },
          "a-25": {
            id: "a-25",
            title: "awards-modal [IN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-25-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".awards-modal-bg",
                        selectorGuids: ["dc199634-f124-b31e-76b7-67f915869cc5"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-25-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".awards-modal_container",
                        selectorGuids: ["1adaa6f3-a7a1-bd09-591b-2bccaafa1935"],
                      },
                      xValue: 100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-25-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".awards-modal-bg",
                        selectorGuids: ["dc199634-f124-b31e-76b7-67f915869cc5"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-25-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 800,
                      target: {
                        selector: ".awards-modal-bg",
                        selectorGuids: ["dc199634-f124-b31e-76b7-67f915869cc5"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-25-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 1e3,
                      target: {
                        selector: ".awards-modal_container",
                        selectorGuids: ["1adaa6f3-a7a1-bd09-591b-2bccaafa1935"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-25-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".awards-modal-bg",
                        selectorGuids: ["dc199634-f124-b31e-76b7-67f915869cc5"],
                      },
                      value: "block",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x195bdf57952,
          },
          "a-26": {
            id: "a-26",
            title: "awards-modal [CLOSE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-26-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 700,
                      target: {
                        selector: ".awards-modal-bg",
                        selectorGuids: ["dc199634-f124-b31e-76b7-67f915869cc5"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-26-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 800,
                      target: {
                        selector: ".awards-modal_container",
                        selectorGuids: ["1adaa6f3-a7a1-bd09-591b-2bccaafa1935"],
                      },
                      xValue: 100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-26-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".awards-modal-bg",
                        selectorGuids: ["dc199634-f124-b31e-76b7-67f915869cc5"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x195bdf57952,
          },
          "a-27": {
            id: "a-27",
            title: "plus [IN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-27-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "7ec87088-59ca-0ba1-ae59-3bec6ca6216c",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-27-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outBack",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "7ec87088-59ca-0ba1-ae59-3bec6ca6216c",
                      },
                      zValue: 180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x195bf41e970,
          },
          "a-28": {
            id: "a-28",
            title: "plus [OUT]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-28-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 100,
                      easing: "outBack",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "7ec87088-59ca-0ba1-ae59-3bec6ca6216c",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x195bf41e970,
          },
          "a-21": {
            id: "a-21",
            title: "footer-flower [IN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-21-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".footer-img",
                        selectorGuids: ["9d9d6ffa-638e-d3fe-26b2-7ba61f12e27f"],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-21-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 2e3,
                      target: {
                        selector: ".footer-img",
                        selectorGuids: ["9d9d6ffa-638e-d3fe-26b2-7ba61f12e27f"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x195ba631571,
          },
          "a-29": {
            id: "a-29",
            title: "scroll-top [IN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-29-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-18px",
                        selectorGuids: ["d165747a-1bcb-84cc-0756-f3742c2333e9"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-29-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outBack",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-18px",
                        selectorGuids: ["d165747a-1bcb-84cc-0756-f3742c2333e9"],
                      },
                      yValue: -0.25,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x195c6f5b015,
          },
          "a-30": {
            id: "a-30",
            title: "scroll-top [OUT]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-30-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outBack",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-18px",
                        selectorGuids: ["d165747a-1bcb-84cc-0756-f3742c2333e9"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x195c6f5b015,
          },
          "a-16": {
            id: "a-16",
            title: "hero-scroll",
            continuousParameterGroups: [
              {
                id: "a-16-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-16-n",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".hero-flower-video",
                            selectorGuids: [
                              "9fc616dd-476b-749b-bd1a-a624cc51d332",
                            ],
                          },
                          zValue: 0,
                          xUnit: "DEG",
                          yUnit: "DEG",
                          zUnit: "deg",
                        },
                      },
                      {
                        id: "a-16-n-5",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".hero-flower",
                            selectorGuids: [
                              "a37ccf91-5fe1-5824-cc9e-3e12c769c020",
                            ],
                          },
                          heightValue: 120,
                          widthUnit: "vw",
                          heightUnit: "vh",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-16-n-9",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".hero-flower-video",
                            selectorGuids: [
                              "9fc616dd-476b-749b-bd1a-a624cc51d332",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "em",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-16-n-7",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".hero-flower-placeholder",
                            selectorGuids: [
                              "eac56d42-c7ea-2ce3-0864-567700075212",
                            ],
                          },
                          zValue: 0,
                          xUnit: "DEG",
                          yUnit: "DEG",
                          zUnit: "deg",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-16-n-2",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".hero-flower-video",
                            selectorGuids: [
                              "9fc616dd-476b-749b-bd1a-a624cc51d332",
                            ],
                          },
                          zValue: -25,
                          xUnit: "DEG",
                          yUnit: "DEG",
                          zUnit: "deg",
                        },
                      },
                      {
                        id: "a-16-n-6",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".hero-flower",
                            selectorGuids: [
                              "a37ccf91-5fe1-5824-cc9e-3e12c769c020",
                            ],
                          },
                          heightValue: 170,
                          widthUnit: "vh",
                          heightUnit: "vh",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-16-n-8",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".hero-flower-placeholder",
                            selectorGuids: [
                              "eac56d42-c7ea-2ce3-0864-567700075212",
                            ],
                          },
                          zValue: -25,
                          xUnit: "DEG",
                          yUnit: "DEG",
                          zUnit: "deg",
                        },
                      },
                      {
                        id: "a-16-n-10",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".hero-flower-video",
                            selectorGuids: [
                              "9fc616dd-476b-749b-bd1a-a624cc51d332",
                            ],
                          },
                          yValue: -10,
                          xUnit: "PX",
                          yUnit: "em",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x195ba11511c,
          },
          "a-31": {
            id: "a-31",
            title: "featured-video [IN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-31-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work_collection",
                        selectorGuids: ["0268a3c8-da26-18a2-888e-d117fad627c6"],
                      },
                      xValue: 0.2,
                      yValue: 0.2,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-31-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 1500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".work_collection",
                        selectorGuids: ["0268a3c8-da26-18a2-888e-d117fad627c6"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x195d4413f08,
          },
          "a-32": {
            id: "a-32",
            title: "pageload [DESKTOP]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-32-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_links",
                        selectorGuids: ["2972068a-c1e2-2036-35ba-445e28a0821a"],
                      },
                      yValue: -150,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: { id: "ca544f37-9cd8-c370-2296-781e1c71904b" },
                      yValue: 3,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: { id: "ca544f37-9cd8-c370-2296-781e1c71904b" },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: { id: "a3f8b649-51b2-9564-79e0-804c98ecec0b" },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".pageload-counter",
                        selectorGuids: ["63eeafa7-6bb2-fe15-7c48-f23af86b0561"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".hero-text",
                        selectorGuids: ["916b5c52-dd96-ba40-d233-159affc76c8f"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-32-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 4500,
                      target: { id: "a3f8b649-51b2-9564-79e0-804c98ecec0b" },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        selector: ".hero-text",
                        selectorGuids: ["916b5c52-dd96-ba40-d233-159affc76c8f"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-12",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 4500,
                      easing: "outQuart",
                      duration: 600,
                      target: {
                        selector: ".pageload-counter",
                        selectorGuids: ["63eeafa7-6bb2-fe15-7c48-f23af86b0561"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 4600,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        selector: ".nav_links",
                        selectorGuids: ["2972068a-c1e2-2036-35ba-445e28a0821a"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 5e3,
                      easing: "outQuart",
                      duration: 800,
                      target: { id: "ca544f37-9cd8-c370-2296-781e1c71904b" },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 5040,
                      easing: "outQuart",
                      duration: 800,
                      target: { id: "ca544f37-9cd8-c370-2296-781e1c71904b" },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x195d714e5f4,
          },
          "a-33": {
            id: "a-33",
            title: "scroll-down [OUT]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-33-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 600,
                      target: {
                        selector: ".hero-scroll-down-line",
                        selectorGuids: ["400ca782-82d5-99e2-a500-b10205d24bb3"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-33-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 600,
                      target: {
                        selector: ".hero-scroll-down-line",
                        selectorGuids: ["400ca782-82d5-99e2-a500-b10205d24bb3"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-33-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outQuart",
                      duration: 600,
                      target: {
                        selector: ".hero-scroll-down",
                        selectorGuids: ["3f9d4678-6510-7155-533c-49aa8a9e0222"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x195d4413f08,
          },
          "a-34": {
            id: "a-34",
            title: "pageload [TABLET - MOBILE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-34-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: { id: "ca544f37-9cd8-c370-2296-781e1c71904b" },
                      yValue: 3,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-34-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: { id: "ca544f37-9cd8-c370-2296-781e1c71904b" },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-34-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: { id: "a3f8b649-51b2-9564-79e0-804c98ecec0b" },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-34-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".hero-text",
                        selectorGuids: ["916b5c52-dd96-ba40-d233-159affc76c8f"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-34-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 1e3,
                      target: { id: "a3f8b649-51b2-9564-79e0-804c98ecec0b" },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-34-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        selector: ".hero-text",
                        selectorGuids: ["916b5c52-dd96-ba40-d233-159affc76c8f"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-34-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 3600,
                      easing: "outQuart",
                      duration: 800,
                      target: { id: "ca544f37-9cd8-c370-2296-781e1c71904b" },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-34-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 3640,
                      easing: "outQuart",
                      duration: 800,
                      target: { id: "ca544f37-9cd8-c370-2296-781e1c71904b" },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x195d714e5f4,
          },
          "a-35": {
            id: "a-35",
            title: "button-down [IN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-35-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "443c4d0a-cd32-53b0-21bc-7d503ab5dbd6",
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-35-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-16px",
                        selectorGuids: ["75b88e1d-4781-dae7-7695-f8dc322732e4"],
                      },
                      xValue: 0,
                      xUnit: "em",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-35-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outBack",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "443c4d0a-cd32-53b0-21bc-7d503ab5dbd6",
                      },
                      xValue: 0.85,
                      yValue: 0.85,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-35-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 80,
                      easing: "outBack",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-16px",
                        selectorGuids: ["75b88e1d-4781-dae7-7695-f8dc322732e4"],
                      },
                      xValue: 0.125,
                      xUnit: "em",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x195ba5c8b89,
          },
          "a-36": {
            id: "a-36",
            title: "button-down [OUT]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-36-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outBack",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "443c4d0a-cd32-53b0-21bc-7d503ab5dbd6",
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-36-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outBack",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-16px",
                        selectorGuids: ["75b88e1d-4781-dae7-7695-f8dc322732e4"],
                      },
                      xValue: 0,
                      xUnit: "em",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x195ba5c8b89,
          },
          pluginLottieLoop: {
            id: "pluginLottieLoop",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: "auto",
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 100,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
            ],
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
