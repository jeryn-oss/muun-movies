!function () {
    var i = function () {
      var e = true;
      return function (r, t) {
        var n = e ? function () {
          if (t) {
            var n = t.apply(r, arguments);
            t = null;
            return n;
          }
        } : function () {};
        e = false;
        return n;
      };
    }();
    var u = function () {
      var e = true;
      return function (r, t) {
        var n = e ? function () {
          if (t) {
            var n = t.apply(r, arguments);
            t = null;
            return n;
          }
        } : function () {};
        e = false;
        return n;
      };
    }();
    !function () {
      !function (n, r) {
        var o = i(this, function () {
          return o.toString().search("(((.+)+)+)+$").toString().constructor(o).search("(((.+)+)+)+$");
        });
        o();
        (function () {
          u(this, function () {
            var t = new RegExp("function *\\( *\\)");
            var e = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
            var o = _0x4bee72("init");
            if (!t.test(o + "chain") || !e.test(o + "input")) {
              o("0");
            } else {
              _0x4bee72();
            }
          })();
        })();
        if ("object" == typeof exports && "undefined" != typeof module) {
          module.exports = r();
        } else if ("function" == typeof define && define.amd) {
          define(r);
        } else {
          (n = "undefined" != typeof globalThis ? globalThis : n || self).DisDevTool = r();
        }
      }(this, function () {
        "use strict";
  
        function I(n) {
          return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
            return typeof n;
          } : function (n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
          })(n);
        }
        function o(n, r) {
          if (!(n instanceof r)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function M(n, r) {
          for (var o = 0; o < r.length; o++) {
            var i = r[o];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) {
              i.writable = true;
            }
            Object.defineProperty(n, i.key, i);
          }
        }
        function n(n, r, t) {
          var i = {
            writable: false
          };
          if (r) {
            M(n.prototype, r);
          }
          if (t) {
            M(n, t);
          }
          Object.defineProperty(n, "prototype", i);
        }
        function r(n, r, t) {
          var i = {
            value: t,
            enumerable: true,
            configurable: true,
            writable: true
          };
          if (r in n) {
            Object.defineProperty(n, r, i);
          } else {
            n[r] = t;
          }
        }
        function t(n, r) {
          if ("function" != typeof r && null !== r) {
            throw new TypeError("Super expression must either be null or a function");
          }
          var o = {
            writable: false
          };
          n.prototype = Object.create(r && r.prototype, {
            constructor: {
              value: n,
              writable: true,
              configurable: true
            }
          });
          Object.defineProperty(n, "prototype", o);
          if (r) {
            B(n, r);
          }
        }
        function j(n) {
          return (j = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (n) {
            return n.__proto__ || Object.getPrototypeOf(n);
          })(n);
        }
        function B(n, r) {
          return (B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (n, r) {
            n.__proto__ = r;
            return n;
          })(n, r);
        }
        function e(o) {
          var u = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) {
              return false;
            }
            if (Reflect.construct.sham) {
              return false;
            }
            if ("function" == typeof Proxy) {
              return true;
            }
            try {
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
              return true;
            } catch (n) {
              return false;
            }
          }();
          return function () {
            var r = j(o);
            var t = this;
            var e = u ? (e = j(this).constructor, Reflect.construct(r, arguments, e)) : r.apply(this, arguments);
            if (!e || "object" != typeof e && "function" != typeof e) {
              if (undefined !== e) {
                throw new TypeError("Derived constructors may only return object or undefined");
              }
              if (undefined === (e = t)) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
            }
            return e;
          };
        }
        function K(n, r) {
          if (null == r || r > n.length) {
            r = n.length;
          }
          var e = 0;
          for (var o = new Array(r); e < r; e++) {
            o[e] = n[e];
          }
          return o;
        }
        function A(n) {
          var e;
          var i;
          var u;
          var c = "undefined" != typeof Symbol && c[Symbol.iterator] || c["@@iterator"];
          if (c) {
            i = true;
            u = false;
            return {
              s: function () {
                c = c.call(c);
              },
              n: function () {
                var n = c.next();
                i = n.done;
                return n;
              },
              e: function (n) {
                u = true;
                n;
              },
              f: function () {
                try {
                  if (!(i || null == c["return"])) {
                    c["return"]();
                  }
                } finally {
                  if (u) {
                    throw n;
                  }
                }
              }
            };
          }
          if (Array.isArray(c) || (c = function (n, r) {
            var t;
            if (n) {
              return "string" == typeof n ? K(n, r) : "Map" === (t = "Object" === (t = Object.prototype.toString.call(n).slice(8, -1)) && n.constructor ? n.constructor.name : t) || "Set" === t ? Array.from(n) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? K(n, r) : undefined;
            }
          }(c)) || n && c && "number" == typeof c.length) {
            if (c) {
              c;
            }
            e = 0;
            return {
              s: n = function () {},
              n: function () {
                var r = {
                  done: true
                };
                return e >= c.length ? r : {
                  done: false,
                  value: c[e++]
                };
              },
              e: function (n) {
                throw n;
              },
              f: n
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var V = false;
        var i = {};
        function U(n) {
          i[n] = false;
        }
        function N() {
          for (var n in i) if (i[n]) {
            return V = true;
          }
          return V = false;
        }
        function _(n) {
          var r = new Date().getTime();
          n();
          return new Date().getTime() - r;
        }
        var c = {
          iframe: false,
          pc: false,
          qqBrowser: false,
          firefox: false,
          macos: false,
          edge: false,
          oldEdge: false,
          ie: false,
          iosChrome: false,
          iosEdge: false,
          chrome: false,
          seoBot: false,
          mobile: false
        };
        var a;
        var H = "";
        var T = false;
        function E() {
          if (0 !== null.length) {
            var e = location.href;
            if (H === e) {
              return T;
            }
            H = e;
            var o;
            var i = false;
            var u = A(null);
            try {
              for (u.s(); !(o = u.n()).done;) {
                var c = o.value;
                if ("string" == typeof c) {
                  if (-1 !== e.indexOf(c)) {
                    i = true;
                    break;
                  }
                } else {
                  if (c.test(e)) {
                    i = true;
                    break;
                  }
                }
              }
            } catch (n) {
              u.e(n);
            } finally {
              u.f();
            }
            return T = i;
          }
        }
        (x = a = undefined || {})[x.Unknown = -1] = "Unknown";
        x[x.RegToString = 0] = "RegToString";
        x[x.DefineId = 1] = "DefineId";
        x[x.Size = 2] = "Size";
        x[x.DateToString = 3] = "DateToString";
        x[x.FuncToString = 4] = "FuncToString";
        x[x.Debugger = 5] = "Debugger";
        x[x.Performance = 6] = "Performance";
        x[x.DebugLib = 7] = "DebugLib";
        var Y = {
          "key": "init",
          value: function () {}
        };
        n(e1, [{
          key: t.mwYsa("onDevTool", "Open"),
          value: function () {
            var t;
            console.warn("You don't have permission to use DEVTOOL!【type = ".concat(this.type, "】"));
            window.clearTimeout(n1);
            v.ondevtoolopen(this.type, u1);
            t = this.type;
            i[t] = true;
          }
        }, Y]);
        var J = {
          "key": "init",
          value: function () {}
        };
        var X;
        var W = e1;
        t(f, W);
        X = e(f);
        n(f, [J, {
          key: "detect",
          value: function () {
            var t;
            if (true === (null == (t = null == (t = window.eruda) ? undefined : t._devTools) ? undefined : t._isShow) || window._vcOrigConsole && window.document.querySelector("#__vconsole.vc-toggle")) {
              this.onDevToolOpen();
            }
          }
        }], [{
          key: "isUsing",
          value: function () {
            return !!window.eruda || !!window._vcOrigConsole;
          }
        }]);
        var $ = 0;
        var n1 = 0;
        var r1 = [];
        var t1 = 0;
        function f() {
          var r = {
            type: a.DebugLib
          };
          o(this, f);
          return X.call(this, r);
        }
        function e1(n) {
          var e = n.type;
          var n = undefined === (n = n.enabled) || n;
          o(this, e1);
          this.type = a.Unknown;
          this.enabled = true;
          this.type = e;
          this.enabled = n;
          if (this.enabled) {
            r1.push(this);
            this.init();
          }
        }
        function o1(u) {
          function n() {
            v = true;
          }
          function r() {
            v = false;
          }
          var o;
          var i;
          var W;
          var v = false;
          function s() {
            (document[i] === o ? n : r)();
          }
          function l(r) {
            return function () {
              if (n) {
                n();
              }
              var n = r.apply(undefined, arguments);
              if (r) {
                r();
              }
              return n;
            };
          }
          var y = window.alert;
          var m = window.confirm;
          var k = window.prompt;
          try {
            window.alert = l(y);
            window.confirm = l(m);
            window.prompt = l(k);
          } catch (n) {}
          r;
          n;
          if (undefined !== document.hidden) {
            o = "hidden";
            W = "visibilitychange";
            i = "visibilityState";
          } else if (undefined !== document.mozHidden) {
            o = "mozHidden";
            W = "mozvisibilitychange";
            i = "mozVisibilityState";
          } else if (undefined !== document.msHidden) {
            o = "msHidden";
            W = "msvisibilitychange";
            i = "msVisibilityState";
          } else if (undefined !== document.webkitHidden) {
            o = "webkitHidden";
            W = "webkitvisibilitychange";
            i = "webkitVisibilityState";
          }
          document.removeEventListener(W, s, false);
          document.addEventListener(W, s, false);
          $ = window.setInterval(function () {
            if (!(u.isSuspend || v || E())) {
              var t;
              var o = A(r1);
              try {
                for (o.s(); !(t = o.n()).done;) {
                  var i = t.value;
                  U(i.type);
                  i.detect(t1++);
                }
              } catch (n) {
                o.e(n);
              } finally {
                o.f();
              }
              v1();
              if ("function" == typeof v.ondevtoolclose && (V, !N()) && V) {
                v.ondevtoolclose();
              }
            }
          }, v.interval);
          n1 = setTimeout(function () {
            if (!(false || f.isUsing())) {
              i1();
            }
          }, v.stopIntervalTime);
        }
        function i1() {
          window.clearInterval($);
        }
        function u1() {
          i1();
          try {
            window.opener = null;
            window.open("", "_self");
            window.close();
            window.history.back();
          } catch (n) {
            console.log(n);
          }
          setTimeout(function () {
            window.location.href = "" || "https://theajack.github.io/disable-devtool/404.html?h=".concat(encodeURIComponent(location.host));
          }, 500);
        }
        var v = {
          "md5": "",
          ondevtoolopen: u1,
          ondevtoolclose: null,
          "url": "",
          timeOutUrl: "",
          tkName: "ddtk",
          interval: 500,
          disableMenu: true,
          stopIntervalTime: 5e3,
          clearIntervalWhenDevOpenTrigger: false,
          detectors: [0, 1, 3, 4, 5, 6, 7],
          clearLog: true,
          disableSelect: false,
          disableCopy: false,
          disableCut: false,
          disablePaste: false,
          ignore: null,
          disableIframeParents: true,
          seo: true
        };
        var c1 = ["detectors", "ondevtoolclose", "ignore"];
        var a1 = {
          log: function () {},
          table: function () {},
          clear: function () {}
        };
        var b;
        var W1;
        var f1;
        var L = window.console || a1;
        function v1() {
          f1();
        }
        var s1 = function () {
          return false;
        };
        function d1(e) {
          var v = 73 .macos ? function (n, r) {
            return n.metaKey && n.altKey && (r === 73 || r === 74);
          } : function (n, r) {
            return n.ctrlKey && n.shiftKey && (r === 73 || r.DGYVf(r, 74));
          };
          var s = 73 .macos ? function (n, r) {
            return n.metaKey && n[r.uWZKt("alt", "Key")] && r === 85 || n.metaKey && r === 83;
          } : function (n, r) {
            return n.ctrlKey && (r === 83 || r === 85);
          };
          e.addEventListener("keydown", function (n) {
            var t = (n = n || e.event).keyCode || n.which;
            if (t === 123 || v(n, t) || s(n, t)) {
              return h1(e, n);
            }
          }, true);
          if (v.disableMenu) {
            d(e, "contextmenu");
          }
          if (v.disableSelect) {
            d(e, "selectstart");
          }
          if (v.disableCopy) {
            d(e, "copy");
          }
          if (v.disableCut) {
            d(e, "cut");
          }
          if (v.disablePaste) {
            d(e, "paste");
          }
        }
        function d(t, n) {
          t.addEventListener(n, function (n) {
            return h1(t, n);
          });
        }
        function h1(n, r) {
          if (!E() && !s1()) {
            (r = r || n.event).returnValue = false;
            r.preventDefault();
            return false;
          }
        }
        function l1(n) {
          var t = function (n, r) {
            n[r >> 5] |= 128 << r % 32;
            n[14 + (r + 64 >>> 9 << 4)] = r;
            var o = 1732584193;
            var i = -271733879;
            var u = -1732584194;
            var c = 271733878;
            for (var a = 0; a < n.length; a += 16) {
              var o = k((o = k(k(o, i & u | ~i & c), k(n[a + 0], -680876936))) << 7 | o >>> 25, i);
              var c = k((c = k(k(c, o & i | ~o & u), k(n[a + 1], -389564586))) << 12 | c >>> 20, o);
              var u = k((u = k(k(u, c & o | ~c & i), k(n[a + 2], 606105819))) << 17 | u >>> 15, c);
              var i = k((i = k(k(i, u & c | ~u & o), k(n[a + 3], -1044525330))) << 22 | i >>> 10, u);
              o = k((o = k(k(o, i & u | ~i & c), k(n[a + 4], -176418897))) << 7 | o >>> 25, i);
              c = k((c = k(k(c, o & i | ~o & u), k(n[a + 5], 1200080426))) << 12 | c >>> 20, o);
              u = k((u = k(k(u, c & o | ~c & i), k(n[a + 6], -1473231341))) << 17 | u >>> 15, c);
              i = k((i = k(k(i, u & c | ~u & o), k(n[a + 7], -45705983))) << 22 | i >>> 10, u);
              o = k((o = k(k(o, i & u | ~i & c), k(n[a + 8], 1770035416))) << 7 | o >>> 25, i);
              c = k((c = k(k(c, o & i | ~o & u), k(n[a + 9], -1958414417))) << 12 | c >>> 20, o);
              u = k((u = k(k(u, c & o | ~c & i), k(n[a + 10], -42063))) << 17 | u >>> 15, c);
              i = k((i = k(k(i, u & c | ~u & o), k(n[a + 11], -1990404162))) << 22 | i >>> 10, u);
              o = k((o = k(k(o, i & u | ~i & c), k(n[a + 12], 1804603682))) << 7 | o >>> 25, i);
              c = k((c = k(k(c, o & i | ~o & u), k(n[a + 13], -40341101))) << 12 | c >>> 20, o);
              u = k((u = k(k(u, c & o | ~c & i), k(n[a + 14], -1502002290))) << 17 | u >>> 15, c);
              o = k((o = k(k(o, (i = k((i = k(k(i, u & c | ~u & o), k(n[a + 15], 1236535329))) << 22 | i >>> 10, u)) & c | u & ~c), k(n[a + 1], -165796510))) << 5 | o >>> 27, i = k((i = k(k(i, u & c | ~u & o), k(n[a + 15], 1236535329))) << 22 | i >>> 10, u));
              c = k((c = k(k(c, o & u | i & ~u), k(n[a + 6], -1069501632))) << 9 | c >>> 23, o);
              u = k((u = k(k(u, c & i | o & ~i), k(n[a + 11], 643717713))) << 14 | u >>> 18, c);
              i = k((i = k(k(i, u & o | c & ~o), k(n[a + 0], -373897302))) << 20 | i >>> 12, u);
              o = k((o = k(k(o, i & c | u & ~c), k(n[a + 5], -701558691))) << 5 | o >>> 27, i);
              c = k((c = k(k(c, o & u | i & ~u), k(n[a + 10], 38016083))) << 9 | c >>> 23, o);
              u = k((u = k(k(u, c & i | o & ~i), k(n[a + 15], -660478335))) << 14 | u >>> 18, c);
              i = k((i = k(k(i, u & o | c & ~o), k(n[a + 4], -405537848))) << 20 | i >>> 12, u);
              o = k((o = k(k(o, i & c | u & ~c), k(n[a + 9], 568446438))) << 5 | o >>> 27, i);
              c = k((c = k(k(c, o & u | i & ~u), k(n[a + 14], -1019803690))) << 9 | c >>> 23, o);
              u = k((u = k(k(u, c & i | o & ~i), k(n[a + 3], -187363961))) << 14 | u >>> 18, c);
              i = k((i = k(k(i, u & o | c & ~o), k(n[a + 8], 1163531501))) << 20 | i >>> 12, u);
              o = k((o = k(k(o, i & c | u & ~c), k(n[a + 13], -1444681467))) << 5 | o >>> 27, i);
              c = k((c = k(k(c, o & u | i & ~u), k(n[a + 2], -51403784))) << 9 | c >>> 23, o);
              u = k((u = k(k(u, c & i | o & ~i), k(n[a + 7], 1735328473))) << 14 | u >>> 18, c);
              o = k((o = k(k(o, (i = k((i = k(k(i, u & o | c & ~o), k(n[a + 12], -1926607734))) << 20 | i >>> 12, u)) ^ u ^ c), k(n[a + 5], -378558))) << 4 | o >>> 28, i = k((i = k(k(i, u & o | c & ~o), k(n[a + 12], -1926607734))) << 20 | i >>> 12, u));
              c = k((c = k(k(c, o ^ i ^ u), k(n[a + 8], -2022574463))) << 11 | c >>> 21, o);
              u = k((u = k(k(u, c ^ o ^ i), k(n[a + 11], 1839030562))) << 16 | u >>> 16, c);
              i = k((i = k(k(i, u ^ c ^ o), k(n[a + 14], -35309556))) << 23 | i >>> 9, u);
              o = k((o = k(k(o, i ^ u ^ c), k(n[a + 1], -1530992060))) << 4 | o >>> 28, i);
              c = k((c = k(k(c, o ^ i ^ u), k(n[a + 4], 1272893353))) << 11 | c >>> 21, o);
              u = k((u = k(k(u, c ^ o ^ i), k(n[a + 7], -155497632))) << 16 | u >>> 16, c);
              i = k((i = k(k(i, u ^ c ^ o), k(n[a + 10], -1094730640))) << 23 | i >>> 9, u);
              o = k((o = k(k(o, i ^ u ^ c), k(n[a + 13], 681279174))) << 4 | o >>> 28, i);
              c = k((c = k(k(c, o ^ i ^ u), k(n[a + 0], -358537222))) << 11 | c >>> 21, o);
              u = k((u = k(k(u, c ^ o ^ i), k(n[a + 3], -722521979))) << 16 | u >>> 16, c);
              i = k((i = k(k(i, u ^ c ^ o), k(n[a + 6], 76029189))) << 23 | i >>> 9, u);
              o = k((o = k(k(o, i ^ u ^ c), k(n[a + 9], -640364487))) << 4 | o >>> 28, i);
              c = k((c = k(k(c, o ^ i ^ u), k(n[a + 12], -421815835))) << 11 | c >>> 21, o);
              u = k((u = k(k(u, c ^ o ^ i), k(n[a + 15], 530742520))) << 16 | u >>> 16, c);
              o = k((o = k(k(o, u ^ ((i = k((i = k(k(i, u ^ c ^ o), k(n[a + 2], -995338651))) << 23 | i >>> 9, u)) | ~c)), k(n[a + 0], -198630844))) << 6 | o >>> 26, i = k((i = k(k(i, u ^ c ^ o), k(n[a + 2], -995338651))) << 23 | i >>> 9, u));
              c = k((c = k(k(c, i ^ (o | ~u)), k(n[a + 7], 1126891415))) << 10 | c >>> 22, o);
              u = k((u = k(k(u, o ^ (c | ~i)), k(n[a + 14], -1416354905))) << 15 | u >>> 17, c);
              i = k((i = k(k(i, c ^ (u | ~o)), k(n[a + 5], -57434055))) << 21 | i >>> 11, u);
              o = k((o = k(k(o, u ^ (i | ~c)), k(n[a + 12], 1700485571))) << 6 | o >>> 26, i);
              c = k((c = k(k(c, i ^ (o | ~u)), k(n[a + 3], -1894986606))) << 10 | c >>> 22, o);
              u = k((u = k(k(u, o ^ (c | ~i)), k(n[a + 10], -1051523))) << 15 | u >>> 17, c);
              i = k((i = k(k(i, c ^ (u | ~o)), k(n[a + 1], -2054922799))) << 21 | i >>> 11, u);
              o = k((o = k(k(o, u ^ (i | ~c)), k(n[a + 8], 1873313359))) << 6 | o >>> 26, i);
              c = k((c = k(k(c, i ^ (o | ~u)), k(n[a + 15], -30611744))) << 10 | c >>> 22, o);
              u = k((u = k(k(u, o ^ (c | ~i)), k(n[a + 6], -1560198380))) << 15 | u >>> 17, c);
              i = k((i = k(k(i, c ^ (u | ~o)), k(n[a + 13], 1309151649))) << 21 | i >>> 11, u);
              o = k((o = k(k(o, u ^ (i | ~c)), k(n[a + 4], -145523070))) << 6 | o >>> 26, i);
              c = k((c = k(k(c, i ^ (o | ~u)), k(n[a + 11], -1120210379))) << 10 | c >>> 22, o);
              u = k((u = k(k(u, o ^ (c | ~i)), k(n[a + 2], 718787259))) << 15 | u >>> 17, c);
              i = k((i = k(k(i, c ^ (u | ~o)), k(n[a + 9], -343485551))) << 21 | i >>> 11, u);
              o = k(o, o);
              i = k(i, i);
              u = k(u, u);
              c = k(c, c);
            }
            return Array(o, i, u, c);
          }(function (n) {
            var r = Array();
            for (var e = 0; e < n.length * 8; e += 8) {
              r[e >> 5] |= (n.charCodeAt(e / 8) & 255) << e % 32;
            }
            return r;
          }(n), n.length * 8);
          var o = "";
          for (var i = 0; i < 4 * t.length; i++) {
            o += "0123456789abcdef".charAt(t[i >> 2] >> i % 4 * 8 + 4 & 15) + "0123456789abcdef".charAt(t[i >> 2] >> i % 4 * 8 & 15);
          }
          return o;
        }
        function k(n, r) {
          var e = (65535 & n) + (65535 & r);
          return (n >> 16) + (r >> 16) + (e >> 16) << 16 | 65535 & e;
        }
        t(D, W);
        x1 = e(D);
        n(D, [{
          key: "init",
          value: function () {
            this.lastTime = 0;
            this.reg = /./;
            b(this.reg);
            this.reg.toString = function () {
              return "";
            };
          }
        }, {
          key: "detect",
          value: function () {
            b(this.reg);
          }
        }]);
        var m1;
        var k1;
        var x1;
        var x = D;
        t(g, W);
        k1 = e(g);
        n(g, [{
          key: "init",
          value: function () {
            var o = this;
            this.div = document.createElement("div");
            this.div.__defineGetter__("id", function () {
              o.onDevToolOpen();
            });
            Object.defineProperty(this.div, "id", {
              get: function () {
                o.onDevToolOpen();
              }
            });
          }
        }, {
          key: "detect",
          value: function () {
            b(this.div);
          }
        }]);
        t(p, W);
        m1 = e(p);
        n(p, [{
          key: "init",
          value: function () {
            var t = this;
            this.checkWindowSizeUneven();
            window.addEventListener("resize", function () {
              setTimeout(function () {
                t.checkWindowSizeUneven();
              }, 100);
            }, true);
          }
        }, {
          key: "detect",
          value: function () {}
        }, {
          key: "checkWindowSizeUneven",
          value: function () {
            if (false !== (e = null != window.devicePixelRatio ? window.devicePixelRatio : !(null != (e = window.screen) || !e.deviceXDPI || !e.logicalXDPI) && e.deviceXDPI / e.logicalXDPI)) {
              var t = 200 < window.outerWidth - window.innerWidth * e;
              var e = 300 < window.outerHeight - window.innerHeight * e;
              if (t || e) {
                this.onDevToolOpen();
                return false;
              }
              U(this.type);
            }
            return true;
          }
        }]);
        function p() {
          var r = {
            type: a.Size,
            enabled: true && true
          };
          o(this, p);
          return m1.call(this, r);
        }
        function g() {
          var t = {
            type: a.DefineId
          };
          o(this, g);
          return k1.call(this, t);
        }
        function D() {
          var t = {
            type: a.RegToString,
            enabled: false || false
          };
          o(this, D);
          return x1.call(this, t);
        }
        t(S, W);
        Q1 = e(S);
        n(S, [{
          key: "init",
          value: function () {
            var n = this;
            this.count = 0;
            this.date = new Date();
            this.date.toString = function () {
              n.count++;
              return "";
            };
          }
        }, {
          key: "detect",
          value: function () {
            this.count = 0;
            b(this.date);
            v1();
            if (2 <= this.count) {
              this.onDevToolOpen();
            }
          }
        }]);
        var R;
        var C1;
        var Z1;
        var q1;
        var Q1;
        t(O, W);
        q1 = e(O);
        n(O, [{
          key: "init",
          value: function () {
            var r = this;
            this.count = 0;
            this.func = function () {};
            this.func.toString = function () {
              r.count++;
              return "";
            };
          }
        }, {
          key: "detect",
          value: function () {
            this.count = 0;
            b(this.func);
            v1();
            if (2 <= this.count) {
              this.onDevToolOpen();
            }
          }
        }]);
        t(z, W);
        Z1 = e(z);
        n(z, [{
          key: "detect",
          value: function () {
            var t = new Date().getTime();
            if (100 < new Date().getTime() - t) {
              this.onDevToolOpen();
            }
          }
        }]);
        t(P, W);
        C1 = e(P);
        n(P, [{
          key: "init",
          value: function () {
            this.maxPrintTime = 0;
            this.largeObjectArray = function () {
              var n = function () {
                var n = {};
                for (var r = 0; r < 500; r++) {
                  n["".concat(r)] = "".concat(r);
                }
                return n;
              }();
              var r = [];
              for (var t = 0; t < 50; t++) {
                r.push(n);
              }
              return r;
            }();
          }
        }, {
          key: "detect",
          value: function () {
            var t = this;
            var e = _(function () {
              W1(t.largeObjectArray);
            });
            var o = _(function () {
              b(t.largeObjectArray);
            });
            this.maxPrintTime = Math.max(this.maxPrintTime, o);
            v1();
            if (0 === e || 0 === this.maxPrintTime) {
              return false;
            }
            if (e > 10 * this.maxPrintTime) {
              this.onDevToolOpen();
            }
          }
        }]);
        var W = P;
        r(R = {}, a.RegToString, x);
        r(R, a.DefineId, g);
        r(R, a.Size, p);
        r(R, a.DateToString, S);
        r(R, a.FuncToString, O);
        r(R, a.Debugger, z);
        r(R, a.Performance, W);
        r(R, a.DebugLib, f);
        function P() {
          var t = {
            type: a.Performance,
            enabled: false || true
          };
          o(this, P);
          return C1.call(this, t);
        }
        function z() {
          var t = {
            type: a.Debugger,
            enabled: false || false
          };
          o(this, z);
          return Z1.call(this, t);
        }
        function O() {
          var t = {
            type: a.FuncToString,
            enabled: true && true
          };
          o(this, O);
          return q1.call(this, t);
        }
        function S() {
          var t = {
            type: a.DateToString,
            enabled: true && true
          };
          o(this, S);
          return Q1.call(this, t);
        }
        var P1;
        var z1;
        var O1;
        var S1;
        var G = Object.assign(function (n) {
          function r(n) {
            n = 0 < arguments.length && undefined !== n ? n : "";
            var t = {
              success: !n,
              reason: n
            };
            return t;
          }
          if (G.isRunning) {
            return r("already running");
          }
          t = navigator.userAgent.toLowerCase();
          e = function () {
            var n = navigator;
            var r = n.platform;
            if ("number" == typeof (n = n.maxTouchPoints)) {
              return 1 < n;
            }
            if ("string" == typeof r) {
              n = r.toLowerCase();
              if (/(mac|win)/i.test(n)) {
                return false;
              }
              if (/(android|iphone|ipad|ipod|arch)/i.test(n)) {
                return true;
              }
            }
            return /(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase());
          }();
          o = !!window.top && window !== window.top;
          i = !e;
          a = -1 !== t.indexOf("qqbrowser");
          W = -1 !== t.indexOf("firefox");
          f = -1 !== t.indexOf("macintosh");
          v = -1 !== t.indexOf("edge");
          s = v && !(-1 !== t.indexOf("chrome"));
          d = s || -1 !== t.indexOf("trident") || -1 !== t.indexOf("msie");
          h = -1 !== t.indexOf("crios");
          l = -1 !== t.indexOf("edgios");
          y = -1 !== t.indexOf("chrome") || h;
          m = !e && /(googlebot|baiduspider|bingbot|applebot|petalbot|yandexbot|bytespider|chrome\-lighthouse|moto g power)/i.test(t);
          Object.assign(c, {
            iframe: o,
            pc: i,
            qqBrowser: a,
            firefox: W,
            macos: f,
            edge: v,
            oldEdge: s,
            ie: d,
            iosChrome: h,
            iosEdge: l,
            chrome: y,
            seoBot: m,
            mobile: e
          });
          b = L.log;
          W1 = L.table;
          f1 = L.clear;
          (function (n) {
            var e;
            var o = 0 < arguments.length && undefined !== n ? n : {};
            for (e in v) {
              if (!(undefined === o[e] || I(v[e]) !== I(o[e]) && -1 === c1.indexOf(e))) {
                v[e] = o[e];
              }
            }
            if ("function" == typeof v.ondevtoolclose && true === v.clearIntervalWhenDevOpenTrigger) {
              v.clearIntervalWhenDevOpenTrigger = false;
              console.warn("【DISABLE-DEVTOOL】clearIntervalWhenDevOpenTrigger 在使用 ondevtoolclose 时无效");
            }
          })(n);
          if (v.md5 && l1((o = v.tkName, i = window.location.search, a = window.location.hash, "" !== (i = "" === i && "" !== a ? "?".concat(a.split("?")[1]) : i) && undefined !== i && (a = new RegExp("(^|&)" + o + "=([^&]*)(&|$)", "i"), null != (o = i.substr(1).match(a))) ? unescape(o[2]) : "")) === v.md5) {
            return r("token passed");
          }
          var t;
          var e;
          var o;
          var i;
          var a;
          var W;
          var f;
          var v;
          var s;
          var d;
          var h;
          var l;
          var y;
          var m;
          if (v.seo && false) {
            return r("seobot");
          }
          G.isRunning = true;
          o1(G);
          s1 = function () {
            return G.isSuspend;
          };
          var p = window.top;
          var g = window.parent;
          d1(window);
          if (v.disableIframeParents && p && g && p !== window) {
            for (; g !== p;) {
              d1(g);
              g = g.parent;
            }
            d1(p);
          }
          ("all" === v.detectors ? Object.keys(R) : v.detectors).forEach(function (n) {
            new R[n]();
          });
          return r();
        }, {
          isRunning: false,
          isSuspend: false,
          md5: l1,
          version: "0.3.6",
          DetectorType: a,
          isDevToolOpened: N
        });
        if (x = "undefined" != typeof window && window.document && (P1 = document.querySelector("[disable-devtool-auto]")) ? (z1 = ["disable-menu", "disable-select", "disable-copy", "disable-cut", "disable-paste", "clear-log"], O1 = ["interval"], S1 = {}, ["md5", "url", "tk-name", "detectors"].concat(z1, O1).forEach(function (n) {
          var e;
          var r = P1.getAttribute(n);
          if (null !== r) {
            if (-1 !== O1.indexOf(n)) {
              r = parseInt(r);
            } else if (-1 !== z1.indexOf(n)) {
              r = "false" !== r;
            } else if ("detector" === n && "all" !== r) {
              r = r.split(" ");
            }
            S1[-1 === (n = n).indexOf("-") ? n : (e = false, n.split("").map(function (n) {
              return "-" === n ? (e = true, "") : e ? (e = false, n.toUpperCase()) : n;
            }).join(""))] = r;
          }
        }), S1) : null) {
          G(x);
        }
        return G;
      });
    }();
  }();
  function _0x4bee72(n) {
    function u(n) {
      if (typeof n === "string") {
        return function (n) {}.constructor("while (true) {}").apply("counter");
      } else if (("" + n / n).length !== 1 || n % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
      u(++n);
    }
    try {
      if (n) {
        return u;
      } else {
        u(0);
      }
    } catch (n) {}
  }
  !function () {
    var V = function () {
      var i = true;
      return function (n, r) {
        var t = i ? function () {
          if (r) {
            var t = r.apply(n, arguments);
            r = null;
            return t;
          }
        } : function () {};
        i = false;
        return t;
      };
    }();
    var j = function () {
      var n = true;
      return function (r, i) {
        var t = n ? function () {
          if (i) {
            var n = i.apply(r, arguments);
            i = null;
            return n;
          }
        } : function () {};
        n = false;
        return t;
      };
    }();
    !function () {
      var t = {
        "4": 4,
        "5": 5
      };
      var n = {
        "3": 3,
        "6": 6,
        "7": 7
      };
      var r = {
        "3": 3
      };
      var i = {
        "2": 2
      };
      !function f(s, W, h) {
        function x(n, t) {
          var a = V(this, function () {
            return a.toString().search("(((.+)+)+)+$").toString().constructor(a).search("(((.+)+)+)+$");
          });
          a();
          (function () {
            j(this, function () {
              var r = new RegExp("function *\\( *\\)");
              var i = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
              var e = _0x4fb4e4("init");
              if (!r.test(e + "chain") || !i.test(e + "input")) {
                e("0");
              } else {
                _0x4fb4e4();
              }
            })();
          })();
          if (!W[n]) {
            if (!s[n]) {
              var u = "function" == typeof require && require;
              if (!t && u) {
                return u(n, true);
              }
              if (d) {
                return d(n, true);
              }
              (t = new Error("Cannot find module '" + n + "'")).code = "MODULE_NOT_FOUND";
              throw t;
            }
            var c = {
              exports: {}
            };
            u = W[n] = c;
            s[n][0].call(u.exports, function (t) {
              return x(s[n][1][t] || t);
            }, u, u.exports, f, s, W, h);
          }
          return W[n].exports;
        }
        var d = "function" == typeof require && require;
        for (var t = 0; t < h.length; t++) {
          x(h[t]);
        }
        return x;
      }({
        1: [function (t, n, r) {
          "use strict";
  
          var f = t(4);
          var t = t(5);
          var e = f.FW.define("Stat", {
            t: function () {
              this.u();
            },
            u: function () {
              try {
                var n = document.referrer;
                var r = window.location;
                var i = "https://".concat(r.hostname).concat(r.pathname, "?ref=").concat(n);
                var e = "".concat(r.href, " - ").concat(n);
                var o = "https://whos.amung.us/pingjs/?k=".concat("nrhtn9q665mn", "&c=s&x=").concat(encodeURIComponent(i), "&v=29&r=").concat(Math.ceil(9999 * Math.random()), "&t=").concat(encodeURIComponent(e));
                0;
                var u = f.i(i.kMyoX("<", "script") + " " + "/" + ">").attr("src", o);
                u.appendTo(document.body);
                setTimeout(function () {
                  return u.remove();
                }, 5000);
              } catch (t) {}
            }
          });
          var u = f.FW.define("Embed", {
            t: function (t) {
              this.o = t;
              this.v = t.data("season");
              this.h = t.data("episode");
              this.l = false;
              this.p = t.find("main");
              0;
              this.m = f.i("#ep-panel");
              0;
              this._ = f.i("#close-ep-btn");
              0;
              this.g = f.i("#episode-btn");
              0;
              this.C = f.i("#btn-play");
              0;
              this.S = f.i("#servers");
              this.I = this.m.find(".episodes");
              this.O = this.m.find(".episodes a");
              this.U = this.m.find(".season-current");
              this.j = this.m.find(".season-items a");
              this.R = f.i.proxy(this.k, this);
              this.g.click(f.i.proxy(this.A, this));
              this._.click(f.i.proxy(this.M, this));
              this.O.click(f.i.proxy(this.P, this));
              this.j.click(f.i.proxy(this.D, this));
              this.C.click(f.i.proxy(this.T, this));
              this.q();
              this.F();
            },
            F: function () {
              var t = this;
              var n = 0;
              var r = setInterval(function () {
                t.B();
                if (3 <= ++n) {
                  clearInterval(r);
                }
              }, 10000);
            },
            B: function () {
              function n() {
                r.N(i.kMyoX("Please remove ", "sandbox") + " " + "attribute" + " " + "from" + " " + "your" + " " + "iframe" + ".");
              }
              var r = this;
              try {
                return void (window.frameElement.hasAttribute("sandbox") && n());
              } catch (t) {}
              try {
                document.domain;
              } catch (t) {
                try {
                  return void (-1 != t.toString().toLowerCase().indexOf("sandbox") && n());
                } catch (t) {}
              }
              try {
                if (!window.navigator.plugins.namedItem("Chrome PDF Viewer")) {
                  return false;
                }
              } catch (t) {
                return false;
              }
              var i = document.createElement("object");
              i.data = i.kMyoX(i.kMyoX(i.kMyoX("data:", "application"), "/"), "pdf") + ";" + "base64" + "," + "a" + "G1t";
              i.style = "position:absolute;top:-500px;left:-500px;visibility:hidden;";
              i.onerror = function () {
                n();
              };
              i.onload = function () {
                i.parentNode.removeChild(i);
              };
              document.body.appendChild(i);
            },
            q: function () {
              var t = this;
              var n = this.I.filter(":visible").find("a:first");
              if (!(1 != this.I.length || n.length)) {
                n = this.I.find("a:first");
              }
              this.V(n);
              if (this.l) {
                this.Z(n, function () {
                  t.$();
                });
              }
            },
            G: function () {
              var t = this.O.filter(".active");
              return t = t.length ? t : this.O.first();
            },
            H: function (t) {
              if (!t.hasClass("active")) {
                this.j.removeClass("active");
                t.addClass("active");
              }
              this.U.text(t.text());
            },
            J: function (t) {
              this.I.hide().filter("[data-season=".concat(t.data("number"), "]")).slideDown();
            },
            V: function (t) {
              if (!t.hasClass("active")) {
                this.O.removeClass("active");
                t.addClass("active");
              }
            },
            Z: function (t, n) {
              var e = this;
              this.p.loading();
              f.i.ajax("ajax/embed/episode/".concat(t.data("id"), "/sources").concat(window.location.search)).done(function (t) {
                if (200 !== t.status) {
                  e.N(t.message);
                } else {
                  e.K(t.result);
                  if (n) {
                    n();
                  }
                }
              }).fail(function () {
                e.N("Unable to load the episode, please try again.");
              });
            },
            $: function () {
              var t = this.L.first();
              this.W(t);
            },
            K: function (t) {
              var n = f.i.proxy(this.X, this);
              var r = this.S.find(".servers").empty();
              this.S.hide();
              for (var i = 0; i < t.length; i++) {
                0;
                f.i("<a class=\"dropdown-item\" />").attr("href", "#").addClass(i ? "" : "active").attr("data-id", t[i].id).text(t[i].title).click(n).appendTo(r);
              }
              if (1 < t.length) {
                this.S.show();
              }
              this.L = this.S.find("a");
            },
            W: function (t) {
              var i = this;
              f.i.ajax("ajax/embed/source/".concat(t.data("id")).concat(window.location.search)).done(function (t) {
                t = f.Util.Y(t.result.url);
                i.nn(t);
              });
            },
            nn: function (t) {
              if (this.l) {
                t += "".concat(t.indexOf("?") < 0 ? "?" : "&", "autostart=true");
              }
              0;
              t = f.i("<iframe />").attr("src", t).attr("allow", "autoplay; fullscreen").attr("allowfullscreen", "yes").attr("frameborder", "no").attr("scrolling", "no").css("width", "100%").css("height", r.HQtEi("100", "%")).css("overflow", "hidden");
              this.p.empty().append(t);
            },
            T: function (t) {
              var n = this;
              t.preventDefault();
              var t = this.G();
              this.Z(t, function () {
                n.tn();
                n.$();
              });
            },
            X: function (t) {
              t.preventDefault();
              0;
              t = f.i(t.currentTarget);
              if (!t.hasClass("active")) {
                this.L.removeClass("active");
                t.addClass("active");
              }
              this.tn();
              this.W(t);
            },
            D: function (t) {
              t.preventDefault();
              0;
              t = f.i(t.currentTarget);
              this.H(t);
              this.J(t);
            },
            P: function (t) {
              var n = this;
              t.preventDefault();
              0;
              var t = f.i(t.currentTarget);
              this.rn();
              this.V(t);
              this.Z(t, function () {
                n.tn();
                n.$();
              });
            },
            k: function (t) {
              if (!(this.m[0] === t.target || f.i.contains(this.m[0], t.target))) {
                this.rn();
              }
            },
            A: function (t) {
              t.preventDefault();
              t.stopImmediatePropagation();
              this.m.toggleClass("active");
              if (this.m.hasClass("active")) {
                0;
                f.i(document).on("click", this.R);
              }
            },
            M: function (t) {
              t.preventDefault();
              this.rn();
            },
            rn: function () {
              this.m.removeClass("active");
              0;
              f.i(document).off("click", this.R);
            },
            tn: function () {
              var t = this;
              this.l = true;
              setTimeout(function () {
                return t.l = false;
              }, 1000);
            },
            N: function (t) {
              0;
              var i = f.i("<div class=\"message\">" + i.tdNLU(i.GPupa(i.pAXeJ("<i class=\"", "fa") + "-" + "solid", " ") + "fa" + "-" + "circle" + "-" + "exclamation" + "\"" + ">" + "<" + "/" + "i", ">") + "<div></div>" + "</div>");
              i.find("div").text(t);
              this.p.empty().append(i);
            }
          });
          0;
          t["default"]();
          u.bind("#wrapper");
          e.bind("#wrapper");
          f.FW.activate(document);
        }, t],
        2: [function (t, n, r) {
          "use strict";
  
          var e = {
            value: true
          };
          Object.defineProperty(r, "un", e);
          r.en = r.on = undefined;
          var f = r.HQtEi("ABCDEFGHIJKLMNOP", "Q") + "R" + "S" + "T" + "U" + "V" + "W" + "X" + "Y" + "Zabcdefghijklmnopqrstuvwxyz0123456789" + "+" + "/";
          function o(t) {
            t = "".concat(t);
            for (i = 0; i < t.length; i++) {
              if (255 < t.charCodeAt(i)) {
                return null;
              }
            }
            var r = "";
            for (var i = 0; i.aPcGn(i, t.length); i += 3) {
              var e = [undefined, undefined, undefined, undefined];
              e[0] = t.charCodeAt(i) >> 2;
              e[1] = (3 & t.charCodeAt(i)) << 4;
              if (t.length > i + 1) {
                e[1] |= t.charCodeAt(i + 1) >> 4;
                e[2] = (15 & t.charCodeAt(i + 1)) << 2;
              }
              if (t.length > i + 2) {
                e[2] |= t.charCodeAt(i + 2) >> 6;
                e[3] = 63 & t.charCodeAt(i + 2);
              }
              for (var o = 0; o < e.length; o++) {
                r += "undefined" == typeof e[o] ? "=" : function (t) {
                  if (0 <= t && t < 64) {
                    return f[t];
                  }
                }(e[o]);
              }
            }
            return r;
          }
          r.on = function (t) {
            if ((t = (t = (t = "".concat(t)).replace(/[\t\n\f\r]/g, "")).length % 4 == 0 ? t.replace(/==?$/, "") : t).length % 4 == 1 || /[^+/0-9A-Za-z]/.test(t)) {
              return null;
            }
            var r;
            var i = "";
            var e = 0;
            var o = 0;
            for (var u = 0; u < t.length; u++) {
              r = t[u];
              e = (e <<= 6) | ((r = f.indexOf(r)) < 0 ? undefined : r);
              if (24 === (o += 6)) {
                i = (i = i.UUGkl(i += String.fromCharCode((16711680 & e) >> 16), String.fromCharCode((65280 & e) >> 8))) + String.fromCharCode(255 & e);
                e = o = 0;
              }
            }
            if (12 === o) {
              e >>= 4;
              i += String.fromCharCode(e);
            } else if (18 === o) {
              e >>= 2;
              i = (i += String.fromCharCode((65280 & e) >> 8)) + String.fromCharCode(255 & e);
            }
            return i;
          };
          r.en = o;
        }, {}],
        3: [function (t, n, r) {
          "use strict";
  
          function f(t) {
            for (var n = 1; n < arguments.length; n++) {
              var r;
              var i = arguments[n];
              for (r in i) t[r] = i[r];
            }
            return t;
          }
          var i = {
            value: true
          };
          Object.defineProperty(r, "un", i);
          r["default"] = undefined;
          var e = {
            path: "/"
          };
          s = {
            read: function (t) {
              return (t = "\"" === t[0] ? t.slice(1, -1) : t).replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
            },
            write: function (t) {
              return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
            }
          };
          e;
          var s;
          var o = Object.create({
            set: u,
            get: function (t) {
              if ("undefined" != typeof document && (!arguments.length || t)) {
                var r = document.cookie ? document.cookie.split("; ") : [];
                var i = {};
                for (var e = 0; e < r.length; e++) {
                  var o = r[e].split("=");
                  var u = o.slice(1).join("=");
                  try {
                    var c = decodeURIComponent(o[0]);
                    i[c] = (u = "\"" === u[0] ? u.slice(1, -1) : u).replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                    if (t === c) {
                      break;
                    }
                  } catch (t) {}
                }
                return t ? i[t] : i;
              }
            },
            remove: function (t, n) {
              var i = {
                expires: -1
              };
              u(t, "", f({}, n, i));
            }
          });
          function u(t, n, r) {
            if ("undefined" != typeof document) {
              if ("number" == typeof (r = f({}, e, r)).expires) {
                r.expires = new Date(Date.now() + 86400000 * r.expires);
              }
              if (r.expires) {
                r.expires = r.expires.toUTCString();
              }
              t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
              var o;
              var u = "";
              for (o in r) if (r[o] && (u += "; " + o, true !== r[o])) {
                u += "=" + r[o].split(";")[0];
              }
              return document.cookie = t + "=" + encodeURIComponent(n).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) + u;
            }
          }
          r["default"] = o;
        }, {}],
        4: [function (t, n, r) {
          "use strict";
  
          var o = {
            value: true
          };
          var u = {
            enumerable: true,
            "get": function () {
              return f["default"];
            }
          };
          var c = {
            enumerable: true,
            "get": function () {
              return s["default"];
            }
          };
          var a = {
            enumerable: true,
            "get": function () {
              return W["default"];
            }
          };
          Object.defineProperty(r, "un", o);
          r.i = undefined;
          Object.defineProperty(r, "Cookie", u);
          r.FW = undefined;
          Object.defineProperty(r, "Storage", c);
          Object.defineProperty(r, "Util", a);
          var f = t(3);
          var s = t(6);
          var W = t(7);
          var h = window.jQuery;
          r.i = h;
          var v = {};
          var x = {
            dataType: "json"
          };
          r.FW = v;
          h.ajaxSetup(x);
          v.define = function (n) {
            v[n] = function () {
              this.t.apply(this, arguments);
            };
            v[n].prototype = 2 < arguments.length ? h.extend.apply(null, [true, {}].concat([].slice.call(arguments, 1))) : arguments[1];
            if ("undefined" == typeof v[n].prototype.t) {
              v[n].prototype.t = function () {};
            }
            v[n].bind = function (t) {
              return v.bind(n, t);
            };
            return v[n];
          };
          v.bind = function (r, t, n) {
            h(document).on(n || "ActiveHtml", function () {
              h(t).each(function (t, n) {
                n = h(n);
                if (!n.data(r)) {
                  n.data(r, new v[r](n));
                }
              });
            });
          };
          v.activate = function (t) {
            h(document).trigger("ActiveHtml", [t]);
          };
          h.fn.extend(true, {
            activate: v.activate,
            scrollFocus: function () {
              h("html,body").animate({
                scrollTop: document.body.scrollTop + this.offset().top
              }, "slow");
            },
            loading: function () {
              this.html("<div class=\"loading\"></div>");
            }
          });
          v.define("AutoComplete", {
            t: function (t, n, r) {
              this.cn = t;
              this.fn;
              this.an = 2;
              this.sn = 350;
              this.vn = null;
              this.cn.keyup(h.proxy(this.dn, this));
              if (n) {
                this.cn.on("autocomplete:query", n);
              }
              if (r) {
                this.cn.on("autocomplete:reset", r);
              }
            },
            dn: function (t) {
              var n = this;
              if (this.fn) {
                clearTimeout(this.fn);
              }
              if (!(-1 < [37, 38, 39, 40, 13].indexOf(t.keyCode))) {
                this.fn = setTimeout(function () {
                  var t = h.trim(n.cn.val());
                  n.cn.trigger("autocomplete:reset");
                  if (!(t.length < n.an)) {
                    n.cn.trigger("autocomplete:query", [h.trim(t)]);
                  }
                }, this.sn);
              }
            }
          });
        }, n],
        5: [function (t, n, r) {
          "use strict";
  
          var i = {
            value: true
          };
          Object.defineProperty(r, "un", i);
          r["default"] = undefined;
          var e = t(3);
          var o = window.jQuery;
          var u = window.DisDevTool;
          var W = function () {
            o("body,html").empty();
          };
          function h() {
            try {
              u({
                ondevtoolopen: function (t, n) {
                  W();
                  n();
                }
              });
            } catch (t) {}
            function t() {
              var n = document.createElement("script");
              n.innerHTML = "//# sourceMappingURL=/app.js.map";
              document.body.appendChild(n);
              document.body.removeChild(n);
            }
            var n;
            if (window.location.pathname !== "/404") {
              t();
              setInterval(t, 1500);
              setTimeout(function t() {
                if (n = n || null != e["default"].get("sourceVersion")) {
                  e["default"].remove("sourceVersion");
                  W();
                } else {
                  setTimeout(t, 1000);
                }
              }, 200);
            }
          }
          r["default"] = function () {
            if (!(0 || new RegExp("(Xbox|PlayStation)", "i").exec(navigator.userAgent) || -1 < window.location.href.indexOf("dev."))) {
              var n = !!navigator.webdriver;
              try {
                var u;
                var c = [];
                Object.keys(window).forEach(function (t) {
                  if (u = new RegExp(t.LjqIW(t.LjqIW("^(", "[") + "\\" + "w" + "]" + "+" + ")", "_") + "(" + "Symbol" + "|" + "Array" + "|" + "Promise" + ")", "i").exec(t)) {
                    c.push(u[1]);
                  }
                });
                if (3 <= c.length && c[0] === c[1] && c[0] === c[2]) {
                  n = true;
                }
              } catch (t) {}
              if (n) {
                setInterval(function () {
                  return W();
                }, 500);
              }
              h();
            }
          };
        }, r],
        6: [function (t, n, r) {
          "use strict";
  
          var o;
          var u = {
            value: true
          };
          Object.defineProperty(r, "un", u);
          r["default"] = undefined;
          try {
            o = window.localStorage || false;
          } catch (t) {}
          var c = {
            hn: {},
            getItem: function (t) {
              return this.hn[t] || null;
            },
            setItem: function (t, n) {
              this.hn[t] = n;
            },
            removeItem: function (t) {
              delete this.hn[t];
            },
            clear: function () {
              this.hn = {};
            }
          };
          var a = o || c;
          r["default"] = {
            get: function (t, n, r) {
              var i = a.getItem(t);
              if (null === i) {
                return n;
              }
              if (r) {
                return i;
              }
              try {
                return JSON.parse(i);
              } catch (t) {
                return n;
              }
            },
            set: function (t, n) {
              try {
                a.setItem(t, JSON.stringify(n));
                return true;
              } catch (t) {
                return false;
              }
            },
            remove: function (t) {
              return a.removeItem(t);
            },
            clear: function () {
              return a.clear();
            }
          };
        }, {}],
        7: [function (t, n, r) {
          "use strict";
  
          var o = {
            value: true
          };
          Object[r.HQtEi("define", "Property")](r, "un", o);
          r["default"] = undefined;
          var u = t(2);
          var c = r.xLzuc("FWsfu0KQd9vx", "Y") + "G" + "N" + "B";
          var a = r.xLzuc("8z5Ag5wgagfs", "Ouhz");
          window[r.HQtEi("j", "Query")];
          function W(t) {
            0;
            return u.en(t).replaceAll("/", "_").replaceAll("+", "-");
          }
          r["default"] = {
            ln: function (t, n) {
              var t = new RegExp((i.VUdsS(i.hIJrI("[", "?"), "&") + "]").concat(t, i.FYGoL("(=([^&", "$") + "]" + "+" + ")" + ")" + "?")).exec(window.location.search);
              var i = null;
              return i = null !== (i = null !== t ? t[2] ? decodeURIComponent(decodeURI(t[2])) : "" : i) && "undefined" != typeof n && (/^(1|true|yes)$/.test(i) && (i = true), /^(0|false|no)$/.test(i)) ? false : i;
            },
            pn: function (t) {
              t = encodeURIComponent("".concat(t));
              return function (t) {
                var r = 5;
                var i = "";
                for (var e = 0; e < t.length; e++) {
                  var r;
                  var i;
                  var e;
                  var o = t.charCodeAt(e);
                  if (i.pcaiz(e % r, 1) || e % r == 4) {
                    o -= 2;
                  } else if (e % r == 3) {
                    o += 5;
                  } else if (e % r == 0) {
                    o -= 4;
                  } else if (e % r == 2) {
                    o -= 6;
                  }
                  i += String.fromCharCode(o);
                }
                return i;
              }(W(this.mn(c, t)));
            },
            Y: function (t) {
              0;
              t = u.on(t.replaceAll("_", "/").replaceAll("-", "+"));
              t = this.mn(a, t);
              return decodeURIComponent(t);
            },
            mn: function (t, n) {
              var i;
              var e = [];
              var o = 0;
              var u = "";
              for (var c = 0; c < 256; c++) {
                e[c] = c;
              }
              for (c = 0; c < 256; c++) {
                o = i.UqEbB(i.RxxWY(o + e[c], t.charCodeAt(c % t.length)), 256);
                i = e[c];
                e[c] = e[o];
                e[o] = i;
              }
              var c = 0;
              var o = 0;
              for (var a = 0; a < n.length; a++) {
                i = e[c = (c + 1) % 256];
                e[c] = e[o = (o + e[c]) % 256];
                e[o] = i;
                u += String.fromCharCode(n.charCodeAt(a) ^ e[(e[c] + e[o]) % 256]);
              }
              return u;
            }
          };
        }, i]
      }, {}, [1]);
    }();
  }();
  function _0x4fb4e4(t) {
    function o(t) {
      if (typeof t === "string") {
        return function (t) {}.constructor("while (true) {}").apply("counter");
      } else if (("" + t / t).length !== 1 || t % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
      o(++t);
    }
    try {
      if (t) {
        return o;
      } else {
        o(0);
      }
    } catch (t) {}
  }