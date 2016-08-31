/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */ ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.4",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a) return k.call(a, b);
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h) return h.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = la(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                if (f = d.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return A.find(a);
                    this.length = 1, this[0] = f
                }
                return this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = !0, c || j.disable(), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
            else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
        else {
            d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && d.documentElement
            } catch (e) {}
            c && c.doScroll && ! function f() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (b) {
                        return a.setTimeout(f, 50)
                    }
                    J(), n.ready()
                }
            }()
        }
        return I.promise(b)
    }, n.ready.promise();
    var L;
    for (L in n(l)) break;
    l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
            var a, b, c, e;
            c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
        }),
        function() {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
            a = null
        }();
    var M = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        },
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else c = void 0;
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }

    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
            },
            data: function(a, b, c) {
                return R(a, b, c)
            },
            removeData: function(a, b) {
                return S(a, b)
            },
            _data: function(a, b, c) {
                return R(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return S(a, b, !0)
            }
        }), n.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    n.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    n.data(this, a, b)
                }) : f ? P(f, a, n.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    n.removeData(this, a)
                })
            }
        }), n.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function() {
                        n.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return n._data(a, c) || n._data(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        n._removeData(a, b + "queue"), n._removeData(a, c)
                    })
                })
            }
        }), n.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        }),
        function() {
            var a;
            l.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, e;
                return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
            }
        }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"],
        W = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function X(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var Y = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) Y(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Z = /^(?:checkbox|radio)$/i,
        $ = /<([\w:-]+)/,
        _ = /^$|\/(?:java|ecma)script/i,
        aa = /^\s+/,
        ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ca(a) {
        var b = ba.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }! function() {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

    function ea(a, b) {
        var c, d, e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var ga = /<|&#?\w+;/,
        ha = /<tbody/i;

    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }

    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r], g || 0 === g)
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
            i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
            while (f--) i = i.lastChild;
            if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
            }
            n.merge(q, i.childNodes), i.textContent = "";
            while (i.firstChild) i.removeChild(i.firstChild);
            i = p.lastChild
        } else q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
            f = 0;
            while (g = i[f++]) _.test(g.type || "") && c.push(g)
        }
        return i = null, p
    }! function() {
        var b, c, e = d.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i,
        la = /^key/,
        ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/,
        oa = /^([^.]*)(?:\.(.+)|)/;

    function pa() {
        return !0
    }

    function qa() {
        return !1
    }

    function ra() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button,
                    h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ra() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ra() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                    a._submitBubble = !0
                }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.change || (n.event.special.change = {
        setup: function() {
            return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
            })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !ka.test(this.nodeName)
        }
    }), l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
        ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /^true\/(.*)/,
        za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d),
        Ba = Aa.appendChild(d.createElement("div"));

    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }

    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
        });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }

    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
                else Fa(a, f);
            return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
        }
    }), n.fn.extend({
        domManip: Ha,
        detach: function(a) {
            return Ia(this, a, !0)
        },
        remove: function(a) {
            return Ia(this, a)
        },
        text: function(a) {
            return Y(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return Y(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };

    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function Ma(a) {
        var b = d,
            c = Ka[a];
        return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
    }
    var Na = /^margin/,
        Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Pa = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Qa = d.documentElement;
    ! function() {
        var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                reliableHiddenOffsets: function() {
                    return null == b && k(), f
                },
                boxSizingReliable: function() {
                    return null == b && k(), e
                },
                pixelMarginRight: function() {
                    return null == b && k(), c
                },
                pixelPosition: function() {
                    return null == b && k(), b
                },
                reliableMarginRight: function() {
                    return null == b && k(), g
                },
                reliableMarginLeft: function() {
                    return null == b && k(), h
                }
            });

            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                    width: "4px"
                }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
    }) : Qa.currentStyle && (Ra = function(a) {
        return a.currentStyle
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Ua(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i,
        Wa = /opacity\s*=\s*([^)]*)/i,
        Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"),
        Za = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $a = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;

    function bb(a) {
        if (a in ab) return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = _a.length;
        while (c--)
            if (a = _a[c] + b, a in ab) return a
    }

    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }

    function fb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        }, Sa, [a, "marginRight"]) : void 0
    }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Na.test(a) || (n.cssHooks[a + b].set = db)
    }), n.fn.extend({
        css: function(a, b) {
            return Y(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return cb(this, !0)
        },
        hide: function() {
            return cb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e)
    }
    n.Tween = gb, gb.prototype = {
        constructor: gb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
        }
    }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = gb.prototype.init, n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/,
        kb = /queueHooks$/;

    function lb() {
        return a.setTimeout(function() {
            hb = void 0
        }), hb = n.now()
    }

    function mb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], jb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function qb(a, b, c) {
        var d, e, f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: hb || lb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return X(c.elem, a, U.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
            },
            prefilters: [ob],
            prefilter: function(a, b) {
                b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(W).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = qb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: mb("show"),
            slideUp: mb("hide"),
            slideToggle: mb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = n.timers,
                c = 0;
            for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), hb = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(ib), ib = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
        }();
    var rb = /\r/g,
        sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var tb, ub, vb = n.expr.attrHandle,
        wb = /^(?:checked|selected)$/i,
        xb = l.getSetAttribute,
        yb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
        }
    }), ub = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
            var e, f;
            return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
        } : vb[b] = function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), yb && xb || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
        }
    }), xb || (tb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, vb.id = vb.name = vb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: tb.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            tb.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var zb = /^(?:input|select|textarea|button|object)$/i,
        Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;

    function Cb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, Cb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, Cb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Cb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Db = a.location,
        Eb = n.now(),
        Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var Hb = /#.*$/,
        Ib = /([?&])_=[^&]*/,
        Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Lb = /^(?:GET|HEAD)$/,
        Mb = /^\/\//,
        Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ob = {},
        Pb = {},
        Qb = "*/".concat("*"),
        Rb = Db.href,
        Sb = Nb.exec(Rb.toLowerCase()) || [];

    function Tb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Ub(a, b, c, d) {
        var e = {},
            f = a === Pb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!k) {
                                k = {};
                                while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2]
                            }
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return j && j.abort(b), y(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
            i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[e](l[e]);
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1, j.send(s, y)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    y(-1, x)
                }
            } else y(-1, "No Transport");

            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });

    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }

    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a)) return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var $b = /%20/g,
        _b = /\[\]$/,
        ac = /\r?\n/g,
        bc = /^(?:submit|button|image|reset|file)$/i,
        cc = /^(?:input|select|textarea|keygen)/i;

    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) dc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) dc(c, a[c], b, e);
        return d.join("&").replace($b, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ac, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
    } : hc;
    var ec = 0,
        fc = {},
        gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in fc) fc[a](void 0, !0)
    }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(),
                        h = ++ec;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });

    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = [],
        kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var lc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc) return lc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Qa
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this, function(a, d, e) {
                var f = mc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
            return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var nc = a.jQuery,
        oc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
    }, b || (a.jQuery = a.$ = n), n
});

/*! jQuery Mobile 1.4.5 | Git HEADhash: 68e55e7 <> 2014-10-31T17:33:30Z | (c) 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

! function(a, b, c) {
    "function" == typeof define && define.amd ? define(["jquery"], function(d) {
        return c(d, a, b), d.mobile
    }) : c(a.jQuery, a, b)
}(this, document, function(a, b, c) {
    ! function(a) {
        a.mobile = {}
    }(a),
    function(a, b) {
        function d(b, c) {
            var d, f, g, h = b.nodeName.toLowerCase();
            return "area" === h ? (d = b.parentNode, f = d.name, b.href && f && "map" === d.nodeName.toLowerCase() ? (g = a("img[usemap=#" + f + "]")[0], !!g && e(g)) : !1) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || c : c) && e(b)
        }

        function e(b) {
            return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
                return "hidden" === a.css(this, "visibility")
            }).length
        }
        var f = 0,
            g = /^ui-id-\d+$/;
        a.ui = a.ui || {}, a.extend(a.ui, {
            version: "c0ab71056b936627e8a7821f03c044aec6280a40",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), a.fn.extend({
            focus: function(b) {
                return function(c, d) {
                    return "number" == typeof c ? this.each(function() {
                        var b = this;
                        setTimeout(function() {
                            a(b).focus(), d && d.call(b)
                        }, c)
                    }) : b.apply(this, arguments)
                }
            }(a.fn.focus),
            scrollParent: function() {
                var b;
                return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(this[0].ownerDocument || c) : b
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++f)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    g.test(this.id) && a(this).removeAttr("id")
                })
            }
        }), a.extend(a.expr[":"], {
            data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
                return function(c) {
                    return !!a.data(c, b)
                }
            }) : function(b, c, d) {
                return !!a.data(b, d[3])
            },
            focusable: function(b) {
                return d(b, !isNaN(a.attr(b, "tabindex")))
            },
            tabbable: function(b) {
                var c = a.attr(b, "tabindex"),
                    e = isNaN(c);
                return (e || c >= 0) && d(b, !e)
            }
        }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(c, d) {
            function e(b, c, d, e) {
                return a.each(f, function() {
                    c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), e && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
                }), c
            }
            var f = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"],
                g = d.toLowerCase(),
                h = {
                    innerWidth: a.fn.innerWidth,
                    innerHeight: a.fn.innerHeight,
                    outerWidth: a.fn.outerWidth,
                    outerHeight: a.fn.outerHeight
                };
            a.fn["inner" + d] = function(c) {
                return c === b ? h["inner" + d].call(this) : this.each(function() {
                    a(this).css(g, e(this, c) + "px")
                })
            }, a.fn["outer" + d] = function(b, c) {
                return "number" != typeof b ? h["outer" + d].call(this, b) : this.each(function() {
                    a(this).css(g, e(this, b, !0, c) + "px")
                })
            }
        }), a.fn.addBack || (a.fn.addBack = function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
            return function(c) {
                return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
            }
        }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.support.selectstart = "onselectstart" in c.createElement("div"), a.fn.extend({
            disableSelection: function() {
                return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(d) {
                if (d !== b) return this.css("zIndex", d);
                if (this.length)
                    for (var e, f, g = a(this[0]); g.length && g[0] !== c;) {
                        if (e = g.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (f = parseInt(g.css("zIndex"), 10), !isNaN(f) && 0 !== f)) return f;
                        g = g.parent()
                    }
                return 0
            }
        }), a.ui.plugin = {
            add: function(b, c, d) {
                var e, f = a.ui[b].prototype;
                for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
            },
            call: function(a, b, c, d) {
                var e, f = a.plugins[b];
                if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                    for (e = 0; e < f.length; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
            }
        }
    }(a),
    function(a, b) {
        var d = function(b, c) {
            var d = b.parent(),
                e = [],
                f = function() {
                    var b = a(this),
                        c = a.mobile.toolbar && b.data("mobile-toolbar") ? b.toolbar("option") : {
                            position: b.attr("data-" + a.mobile.ns + "position"),
                            updatePagePadding: b.attr("data-" + a.mobile.ns + "update-page-padding") !== !1
                        };
                    return !("fixed" === c.position && c.updatePagePadding === !0)
                },
                g = d.children(":jqmData(role='header')").filter(f),
                h = b.children(":jqmData(role='header')"),
                i = d.children(":jqmData(role='footer')").filter(f),
                j = b.children(":jqmData(role='footer')");
            return 0 === h.length && g.length > 0 && (e = e.concat(g.toArray())), 0 === j.length && i.length > 0 && (e = e.concat(i.toArray())), a.each(e, function(b, d) {
                c -= a(d).outerHeight()
            }), Math.max(0, c)
        };
        a.extend(a.mobile, {
            window: a(b),
            document: a(c),
            keyCode: a.ui.keyCode,
            behaviors: {},
            silentScroll: function(c) {
                "number" !== a.type(c) && (c = a.mobile.defaultHomeScroll), a.event.special.scrollstart.enabled = !1, setTimeout(function() {
                    b.scrollTo(0, c), a.mobile.document.trigger("silentscroll", {
                        x: 0,
                        y: c
                    })
                }, 20), setTimeout(function() {
                    a.event.special.scrollstart.enabled = !0
                }, 150)
            },
            getClosestBaseUrl: function(b) {
                var c = a(b).closest(".ui-page").jqmData("url"),
                    d = a.mobile.path.documentBase.hrefNoHash;
                return a.mobile.dynamicBaseEnabled && c && a.mobile.path.isPath(c) || (c = d), a.mobile.path.makeUrlAbsolute(c, d)
            },
            removeActiveLinkClass: function(b) {
                !a.mobile.activeClickedLink || a.mobile.activeClickedLink.closest("." + a.mobile.activePageClass).length && !b || a.mobile.activeClickedLink.removeClass(a.mobile.activeBtnClass), a.mobile.activeClickedLink = null
            },
            getInheritedTheme: function(a, b) {
                for (var c, d, e = a[0], f = "", g = /ui-(bar|body|overlay)-([a-z])\b/; e && (c = e.className || "", !(c && (d = g.exec(c)) && (f = d[2])));) e = e.parentNode;
                return f || b || "a"
            },
            enhanceable: function(a) {
                return this.haveParents(a, "enhance")
            },
            hijackable: function(a) {
                return this.haveParents(a, "ajax")
            },
            haveParents: function(b, c) {
                if (!a.mobile.ignoreContentEnabled) return b;
                var d, e, f, g, h, i = b.length,
                    j = a();
                for (g = 0; i > g; g++) {
                    for (e = b.eq(g), f = !1, d = b[g]; d;) {
                        if (h = d.getAttribute ? d.getAttribute("data-" + a.mobile.ns + c) : "", "false" === h) {
                            f = !0;
                            break
                        }
                        d = d.parentNode
                    }
                    f || (j = j.add(e))
                }
                return j
            },
            getScreenHeight: function() {
                return b.innerHeight || a.mobile.window.height()
            },
            resetActivePageHeight: function(b) {
                var c = a("." + a.mobile.activePageClass),
                    e = c.height(),
                    f = c.outerHeight(!0);
                b = d(c, "number" == typeof b ? b : a.mobile.getScreenHeight()), c.css("min-height", ""), c.height() < b && c.css("min-height", b - (f - e))
            },
            loading: function() {
                var b = this.loading._widget || a(a.mobile.loader.prototype.defaultHtml).loader(),
                    c = b.loader.apply(b, arguments);
                return this.loading._widget = b, c
            }
        }), a.addDependents = function(b, c) {
            var d = a(b),
                e = d.jqmData("dependents") || a();
            d.jqmData("dependents", a(e).add(c))
        }, a.fn.extend({
            removeWithDependents: function() {
                a.removeWithDependents(this)
            },
            enhanceWithin: function() {
                var b, c = {},
                    d = a.mobile.page.prototype.keepNativeSelector(),
                    e = this;
                a.mobile.nojs && a.mobile.nojs(this), a.mobile.links && a.mobile.links(this), a.mobile.degradeInputsWithin && a.mobile.degradeInputsWithin(this), a.fn.buttonMarkup && this.find(a.fn.buttonMarkup.initSelector).not(d).jqmEnhanceable().buttonMarkup(), a.fn.fieldcontain && this.find(":jqmData(role='fieldcontain')").not(d).jqmEnhanceable().fieldcontain(), a.each(a.mobile.widgets, function(b, f) {
                    if (f.initSelector) {
                        var g = a.mobile.enhanceable(e.find(f.initSelector));
                        g.length > 0 && (g = g.not(d)), g.length > 0 && (c[f.prototype.widgetName] = g)
                    }
                });
                for (b in c) c[b][b]();
                return this
            },
            addDependents: function(b) {
                a.addDependents(this, b)
            },
            getEncodedText: function() {
                return a("<a>").text(this.text()).html()
            },
            jqmEnhanceable: function() {
                return a.mobile.enhanceable(this)
            },
            jqmHijackable: function() {
                return a.mobile.hijackable(this)
            }
        }), a.removeWithDependents = function(b) {
            var c = a(b);
            (c.jqmData("dependents") || a()).remove(), c.remove()
        }, a.addDependents = function(b, c) {
            var d = a(b),
                e = d.jqmData("dependents") || a();
            d.jqmData("dependents", a(e).add(c))
        }, a.find.matches = function(b, c) {
            return a.find(b, null, null, c)
        }, a.find.matchesSelector = function(b, c) {
            return a.find(c, null, null, [b]).length > 0
        }
    }(a, this),
    function(a) {
        a.extend(a.mobile, {
            version: "1.4.5",
            subPageUrlKey: "ui-page",
            hideUrlBar: !0,
            keepNative: ":jqmData(role='none'), :jqmData(role='nojs')",
            activePageClass: "ui-page-active",
            activeBtnClass: "ui-btn-active",
            focusClass: "ui-focus",
            ajaxEnabled: !0,
            hashListeningEnabled: !0,
            linkBindingEnabled: !0,
            defaultPageTransition: "fade",
            maxTransitionWidth: !1,
            minScrollBack: 0,
            defaultDialogTransition: "pop",
            pageLoadErrorMessage: "Error Loading Page",
            pageLoadErrorMessageTheme: "a",
            phonegapNavigationEnabled: !1,
            autoInitializePage: !0,
            pushStateEnabled: !0,
            ignoreContentEnabled: !1,
            buttonMarkup: {
                hoverDelay: 200
            },
            dynamicBaseEnabled: !0,
            pageContainer: a(),
            allowCrossDomainPages: !1,
            dialogHashKey: "&ui-state=dialog"
        })
    }(a, this),
    function(a, b) {
        var c = 0,
            d = Array.prototype.slice,
            e = a.cleanData;
        a.cleanData = function(b) {
            for (var c, d = 0; null != (c = b[d]); d++) try {
                a(c).triggerHandler("remove")
            } catch (f) {}
            e(b)
        }, a.widget = function(b, c, d) {
            var e, f, g, h, i = {},
                j = b.split(".")[0];
            return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
                return !!a.data(b, e)
            }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
                return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new g(a, b)
            }, a.extend(g, f, {
                version: d.version,
                _proto: a.extend({}, d),
                _childConstructors: []
            }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
                return a.isFunction(d) ? void(i[b] = function() {
                    var a = function() {
                            return c.prototype[b].apply(this, arguments)
                        },
                        e = function(a) {
                            return c.prototype[b].apply(this, a)
                        };
                    return function() {
                        var b, c = this._super,
                            f = this._superApply;
                        return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
                    }
                }()) : void(i[b] = d)
            }), g.prototype = a.widget.extend(h, {
                widgetEventPrefix: f ? h.widgetEventPrefix || b : b
            }, i, {
                constructor: g,
                namespace: j,
                widgetName: b,
                widgetFullName: e
            }), f ? (a.each(f._childConstructors, function(b, c) {
                var d = c.prototype;
                a.widget(d.namespace + "." + d.widgetName, g, c._proto)
            }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g
        }, a.widget.extend = function(c) {
            for (var e, f, g = d.call(arguments, 1), h = 0, i = g.length; i > h; h++)
                for (e in g[h]) f = g[h][e], g[h].hasOwnProperty(e) && f !== b && (c[e] = a.isPlainObject(f) ? a.isPlainObject(c[e]) ? a.widget.extend({}, c[e], f) : a.widget.extend({}, f) : f);
            return c
        }, a.widget.bridge = function(c, e) {
            var f = e.prototype.widgetFullName || c;
            a.fn[c] = function(g) {
                var h = "string" == typeof g,
                    i = d.call(arguments, 1),
                    j = this;
                return g = !h && i.length ? a.widget.extend.apply(null, [g].concat(i)) : g, this.each(h ? function() {
                    var d, e = a.data(this, f);
                    return "instance" === g ? (j = e, !1) : e ? a.isFunction(e[g]) && "_" !== g.charAt(0) ? (d = e[g].apply(e, i), d !== e && d !== b ? (j = d && d.jquery ? j.pushStack(d.get()) : d, !1) : void 0) : a.error("no such method '" + g + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + g + "'")
                } : function() {
                    var b = a.data(this, f);
                    b ? b.option(g || {})._init() : a.data(this, f, new e(g, this))
                }), j
            }
        }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(b, d) {
                d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(a) {
                        a.target === d && this.destroy()
                    }
                }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: a.noop,
            _getCreateEventData: a.noop,
            _create: a.noop,
            _init: a.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: a.noop,
            widget: function() {
                return this.element
            },
            option: function(c, d) {
                var e, f, g, h = c;
                if (0 === arguments.length) return a.widget.extend({}, this.options);
                if ("string" == typeof c)
                    if (h = {}, e = c.split("."), c = e.shift(), e.length) {
                        for (f = h[c] = a.widget.extend({}, this.options[c]), g = 0; g < e.length - 1; g++) f[e[g]] = f[e[g]] || {}, f = f[e[g]];
                        if (c = e.pop(), d === b) return f[c] === b ? null : f[c];
                        f[c] = d
                    } else {
                        if (d === b) return this.options[c] === b ? null : this.options[c];
                        h[c] = d
                    }
                return this._setOptions(h), this
            },
            _setOptions: function(a) {
                var b;
                for (b in a) this._setOption(b, a[b]);
                return this
            },
            _setOption: function(a, b) {
                return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _on: function(b, c, d) {
                var e, f = this;
                "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
                    function h() {
                        return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
                    }
                    "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                    var i = d.match(/^(\w+)\s*(.*)$/),
                        j = i[1] + f.eventNamespace,
                        k = i[2];
                    k ? e.delegate(k, j, h) : c.bind(j, h)
                })
            },
            _off: function(a, b) {
                b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, a.unbind(b).undelegate(b)
            },
            _delay: function(a, b) {
                function c() {
                    return ("string" == typeof a ? d[a] : a).apply(d, arguments)
                }
                var d = this;
                return setTimeout(c, b || 0)
            },
            _hoverable: function(b) {
                this.hoverable = this.hoverable.add(b), this._on(b, {
                    mouseenter: function(b) {
                        a(b.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(b) {
                        a(b.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(b) {
                this.focusable = this.focusable.add(b), this._on(b, {
                    focusin: function(b) {
                        a(b.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(b) {
                        a(b.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(b, c, d) {
                var e, f, g = this.options[b];
                if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
                    for (e in f) e in c || (c[e] = f[e]);
                return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
            }
        }, a.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(b, c) {
            a.Widget.prototype["_" + b] = function(d, e, f) {
                "string" == typeof e && (e = {
                    effect: e
                });
                var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
                e = e || {}, "number" == typeof e && (e = {
                    duration: e
                }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                    a(this)[b](), f && f.call(d[0]), c()
                })
            }
        })
    }(a),
    function(a, b, c) {
        var d = {},
            e = a.find,
            f = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            g = /:jqmData\(([^)]*)\)/g;
        a.extend(a.mobile, {
            ns: "",
            getAttribute: function(b, c) {
                var d;
                b = b.jquery ? b[0] : b, b && b.getAttribute && (d = b.getAttribute("data-" + a.mobile.ns + c));
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : f.test(d) ? JSON.parse(d) : d
                } catch (e) {}
                return d
            },
            nsNormalizeDict: d,
            nsNormalize: function(b) {
                return d[b] || (d[b] = a.camelCase(a.mobile.ns + b))
            },
            closestPageData: function(a) {
                return a.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page")
            }
        }), a.fn.jqmData = function(b, d) {
            var e;
            return "undefined" != typeof b && (b && (b = a.mobile.nsNormalize(b)), e = arguments.length < 2 || d === c ? this.data(b) : this.data(b, d)), e
        }, a.jqmData = function(b, c, d) {
            var e;
            return "undefined" != typeof c && (e = a.data(b, c ? a.mobile.nsNormalize(c) : c, d)), e
        }, a.fn.jqmRemoveData = function(b) {
            return this.removeData(a.mobile.nsNormalize(b))
        }, a.jqmRemoveData = function(b, c) {
            return a.removeData(b, a.mobile.nsNormalize(c))
        }, a.find = function(b, c, d, f) {
            return b.indexOf(":jqmData") > -1 && (b = b.replace(g, "[data-" + (a.mobile.ns || "") + "$1]")), e.call(this, b, c, d, f)
        }, a.extend(a.find, e)
    }(a, this),
    function(a) {
        var b = /[A-Z]/g,
            c = function(a) {
                return "-" + a.toLowerCase()
            };
        a.extend(a.Widget.prototype, {
            _getCreateOptions: function() {
                var d, e, f = this.element[0],
                    g = {};
                if (!a.mobile.getAttribute(f, "defaults"))
                    for (d in this.options) e = a.mobile.getAttribute(f, d.replace(b, c)), null != e && (g[d] = e);
                return g
            }
        }), a.mobile.widget = a.Widget
    }(a),
    function(a) {
        var b = "ui-loader",
            c = a("html");
        a.widget("mobile.loader", {
            options: {
                theme: "a",
                textVisible: !1,
                html: "",
                text: "loading"
            },
            defaultHtml: "<div class='" + b + "'><span class='ui-icon-loading'></span><h1></h1></div>",
            fakeFixLoader: function() {
                var b = a("." + a.mobile.activeBtnClass).first();
                this.element.css({
                    top: a.support.scrollTop && this.window.scrollTop() + this.window.height() / 2 || b.length && b.offset().top || 100
                })
            },
            checkLoaderPosition: function() {
                var b = this.element.offset(),
                    c = this.window.scrollTop(),
                    d = a.mobile.getScreenHeight();
                (b.top < c || b.top - c > d) && (this.element.addClass("ui-loader-fakefix"), this.fakeFixLoader(), this.window.unbind("scroll", this.checkLoaderPosition).bind("scroll", a.proxy(this.fakeFixLoader, this)))
            },
            resetHtml: function() {
                this.element.html(a(this.defaultHtml).html())
            },
            show: function(d, e, f) {
                var g, h, i;
                this.resetHtml(), "object" === a.type(d) ? (i = a.extend({}, this.options, d), d = i.theme) : (i = this.options, d = d || i.theme), h = e || (i.text === !1 ? "" : i.text), c.addClass("ui-loading"), g = i.textVisible, this.element.attr("class", b + " ui-corner-all ui-body-" + d + " ui-loader-" + (g || e || d.text ? "verbose" : "default") + (i.textonly || f ? " ui-loader-textonly" : "")), i.html ? this.element.html(i.html) : this.element.find("h1").text(h), this.element.appendTo(a(a.mobile.pagecontainer ? ":mobile-pagecontainer" : "body")), this.checkLoaderPosition(), this.window.bind("scroll", a.proxy(this.checkLoaderPosition, this))
            },
            hide: function() {
                c.removeClass("ui-loading"), this.options.text && this.element.removeClass("ui-loader-fakefix"), this.window.unbind("scroll", this.fakeFixLoader), this.window.unbind("scroll", this.checkLoaderPosition)
            }
        })
    }(a, this),
    function(a, b, d) {
        "$:nomunge";

        function e(a) {
            return a = a || location.href, "#" + a.replace(/^[^#]*#?(.*)$/, "$1")
        }
        var f, g = "hashchange",
            h = c,
            i = a.event.special,
            j = h.documentMode,
            k = "on" + g in b && (j === d || j > 7);
        a.fn[g] = function(a) {
            return a ? this.bind(g, a) : this.trigger(g)
        }, a.fn[g].delay = 50, i[g] = a.extend(i[g], {
            setup: function() {
                return k ? !1 : void a(f.start)
            },
            teardown: function() {
                return k ? !1 : void a(f.stop)
            }
        }), f = function() {
            function c() {
                var d = e(),
                    h = n(j);
                d !== j ? (m(j = d, h), a(b).trigger(g)) : h !== j && (location.href = location.href.replace(/#.*/, "") + h), f = setTimeout(c, a.fn[g].delay)
            }
            var f, i = {},
                j = e(),
                l = function(a) {
                    return a
                },
                m = l,
                n = l;
            return i.start = function() {
                f || c()
            }, i.stop = function() {
                f && clearTimeout(f), f = d
            }, b.attachEvent && !b.addEventListener && !k && function() {
                var b, d;
                i.start = function() {
                    b || (d = a.fn[g].src, d = d && d + e(), b = a('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                        d || m(e()), c()
                    }).attr("src", d || "javascript:0").insertAfter("body")[0].contentWindow, h.onpropertychange = function() {
                        try {
                            "title" === event.propertyName && (b.document.title = h.title)
                        } catch (a) {}
                    })
                }, i.stop = l, n = function() {
                    return e(b.location.href)
                }, m = function(c, d) {
                    var e = b.document,
                        f = a.fn[g].domain;
                    c !== d && (e.title = h.title, e.open(), f && e.write('<script>document.domain="' + f + '"</script>'), e.close(), b.location.hash = c)
                }
            }(), i
        }()
    }(a, this),
    function(a) {
        b.matchMedia = b.matchMedia || function(a) {
            var b, c = a.documentElement,
                d = c.firstElementChild || c.firstChild,
                e = a.createElement("body"),
                f = a.createElement("div");
            return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", e.appendChild(f),
                function(a) {
                    return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
                        matches: b,
                        media: a
                    }
                }
        }(c), a.mobile.media = function(a) {
            return b.matchMedia(a).matches
        }
    }(a),
    function(a) {
        var b = {
            touch: "ontouchend" in c
        };
        a.mobile.support = a.mobile.support || {}, a.extend(a.support, b), a.extend(a.mobile.support, b)
    }(a),
    function(a) {
        a.extend(a.support, {
            orientation: "orientation" in b && "onorientationchange" in b
        })
    }(a),
    function(a, d) {
        function e(a) {
            var b, c = a.charAt(0).toUpperCase() + a.substr(1),
                e = (a + " " + o.join(c + " ") + c).split(" ");
            for (b in e)
                if (n[e[b]] !== d) return !0
        }

        function f() {
            var c = b,
                d = !(!c.document.createElementNS || !c.document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect || c.opera && -1 === navigator.userAgent.indexOf("Chrome")),
                e = function(b) {
                    b && d || a("html").addClass("ui-nosvg")
                },
                f = new c.Image;
            f.onerror = function() {
                e(!1)
            }, f.onload = function() {
                e(1 === f.width && 1 === f.height)
            }, f.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
        }

        function g() {
            var e, f, g, h = "transform-3d",
                i = a.mobile.media("(-" + o.join("-" + h + "),(-") + "-" + h + "),(" + h + ")");
            if (i) return !!i;
            e = c.createElement("div"), f = {
                MozTransform: "-moz-transform",
                transform: "transform"
            }, m.append(e);
            for (g in f) e.style[g] !== d && (e.style[g] = "translate3d( 100px, 1px, 1px )", i = b.getComputedStyle(e).getPropertyValue(f[g]));
            return !!i && "none" !== i
        }

        function h() {
            var b, c, d = location.protocol + "//" + location.host + location.pathname + "ui-dir/",
                e = a("head base"),
                f = null,
                g = "";
            return e.length ? g = e.attr("href") : e = f = a("<base>", {
                href: d
            }).appendTo("head"), b = a("<a href='testurl' />").prependTo(m), c = b[0].href, e[0].href = g || location.pathname, f && f.remove(), 0 === c.indexOf(d)
        }

        function i() {
            var a, d = c.createElement("x"),
                e = c.documentElement,
                f = b.getComputedStyle;
            return "pointerEvents" in d.style ? (d.style.pointerEvents = "auto", d.style.pointerEvents = "x", e.appendChild(d), a = f && "auto" === f(d, "").pointerEvents, e.removeChild(d), !!a) : !1
        }

        function j() {
            var a = c.createElement("div");
            return "undefined" != typeof a.getBoundingClientRect
        }

        function k() {
            var a = b,
                c = navigator.userAgent,
                d = navigator.platform,
                e = c.match(/AppleWebKit\/([0-9]+)/),
                f = !!e && e[1],
                g = c.match(/Fennec\/([0-9]+)/),
                h = !!g && g[1],
                i = c.match(/Opera Mobi\/([0-9]+)/),
                j = !!i && i[1];
            return (d.indexOf("iPhone") > -1 || d.indexOf("iPad") > -1 || d.indexOf("iPod") > -1) && f && 534 > f || a.operamini && "[object OperaMini]" === {}.toString.call(a.operamini) || i && 7458 > j || c.indexOf("Android") > -1 && f && 533 > f || h && 6 > h || "palmGetResource" in b && f && 534 > f || c.indexOf("MeeGo") > -1 && c.indexOf("NokiaBrowser/8.5.0") > -1 ? !1 : !0
        }
        var l, m = a("<body>").prependTo("html"),
            n = m[0].style,
            o = ["Webkit", "Moz", "O"],
            p = "palmGetResource" in b,
            q = b.operamini && "[object OperaMini]" === {}.toString.call(b.operamini),
            r = b.blackberry && !e("-webkit-transform");
        a.extend(a.mobile, {
            browser: {}
        }), a.mobile.browser.oldIE = function() {
            var a = 3,
                b = c.createElement("div"),
                d = b.all || [];
            do b.innerHTML = "<!--[if gt IE " + ++a + "]><br><![endif]-->"; while (d[0]);
            return a > 4 ? a : !a
        }(), a.extend(a.support, {
            pushState: "pushState" in history && "replaceState" in history && !(b.navigator.userAgent.indexOf("Firefox") >= 0 && b.top !== b) && -1 === b.navigator.userAgent.search(/CriOS/),
            mediaquery: a.mobile.media("only all"),
            cssPseudoElement: !!e("content"),
            touchOverflow: !!e("overflowScrolling"),
            cssTransform3d: g(),
            boxShadow: !!e("boxShadow") && !r,
            fixedPosition: k(),
            scrollTop: ("pageXOffset" in b || "scrollTop" in c.documentElement || "scrollTop" in m[0]) && !p && !q,
            dynamicBaseTag: h(),
            cssPointerEvents: i(),
            boundingRect: j(),
            inlineSVG: f
        }), m.remove(), l = function() {
            var a = b.navigator.userAgent;
            return a.indexOf("Nokia") > -1 && (a.indexOf("Symbian/3") > -1 || a.indexOf("Series60/5") > -1) && a.indexOf("AppleWebKit") > -1 && a.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)
        }(), a.mobile.gradeA = function() {
            return (a.support.mediaquery && a.support.cssPseudoElement || a.mobile.browser.oldIE && a.mobile.browser.oldIE >= 8) && (a.support.boundingRect || null !== a.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/))
        }, a.mobile.ajaxBlacklist = b.blackberry && !b.WebKitPoint || q || l, l && a(function() {
            a("head link[rel='stylesheet']").attr("rel", "alternate stylesheet").attr("rel", "stylesheet")
        }), a.support.boxShadow || a("html").addClass("ui-noboxshadow")
    }(a),
    function(a, b) {
        var c, d = a.mobile.window,
            e = function() {};
        a.event.special.beforenavigate = {
            setup: function() {
                d.on("navigate", e)
            },
            teardown: function() {
                d.off("navigate", e)
            }
        }, a.event.special.navigate = c = {
            bound: !1,
            pushStateEnabled: !0,
            originalEventName: b,
            isPushStateEnabled: function() {
                return a.support.pushState && a.mobile.pushStateEnabled === !0 && this.isHashChangeEnabled()
            },
            isHashChangeEnabled: function() {
                return a.mobile.hashListeningEnabled === !0
            },
            popstate: function(b) {
                var c = new a.Event("navigate"),
                    e = new a.Event("beforenavigate"),
                    f = b.originalEvent.state || {};
                e.originalEvent = b, d.trigger(e), e.isDefaultPrevented() || (b.historyState && a.extend(f, b.historyState), c.originalEvent = b, setTimeout(function() {
                    d.trigger(c, {
                        state: f
                    })
                }, 0))
            },
            hashchange: function(b) {
                var c = new a.Event("navigate"),
                    e = new a.Event("beforenavigate");
                e.originalEvent = b, d.trigger(e), e.isDefaultPrevented() || (c.originalEvent = b, d.trigger(c, {
                    state: b.hashchangeState || {}
                }))
            },
            setup: function() {
                c.bound || (c.bound = !0, c.isPushStateEnabled() ? (c.originalEventName = "popstate", d.bind("popstate.navigate", c.popstate)) : c.isHashChangeEnabled() && (c.originalEventName = "hashchange", d.bind("hashchange.navigate", c.hashchange)))
            }
        }
    }(a),
    function(a, c) {
        var d, e, f = "&ui-state=dialog";
        a.mobile.path = d = {
            uiStateKey: "&ui-state",
            urlParseRE: /^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,
            getLocation: function(a) {
                var b = this.parseUrl(a || location.href),
                    c = a ? b : location,
                    d = b.hash;
                return d = "#" === d ? "" : d, c.protocol + b.doubleSlash + c.host + ("" !== c.protocol && "/" !== c.pathname.substring(0, 1) ? "/" : "") + c.pathname + c.search + d
            },
            getDocumentUrl: function(b) {
                return b ? a.extend({}, d.documentUrl) : d.documentUrl.href
            },
            parseLocation: function() {
                return this.parseUrl(this.getLocation())
            },
            parseUrl: function(b) {
                if ("object" === a.type(b)) return b;
                var c = d.urlParseRE.exec(b || "") || [];
                return {
                    href: c[0] || "",
                    hrefNoHash: c[1] || "",
                    hrefNoSearch: c[2] || "",
                    domain: c[3] || "",
                    protocol: c[4] || "",
                    doubleSlash: c[5] || "",
                    authority: c[6] || "",
                    username: c[8] || "",
                    password: c[9] || "",
                    host: c[10] || "",
                    hostname: c[11] || "",
                    port: c[12] || "",
                    pathname: c[13] || "",
                    directory: c[14] || "",
                    filename: c[15] || "",
                    search: c[16] || "",
                    hash: c[17] || ""
                }
            },
            makePathAbsolute: function(a, b) {
                var c, d, e, f;
                if (a && "/" === a.charAt(0)) return a;
                for (a = a || "", b = b ? b.replace(/^\/|(\/[^\/]*|[^\/]+)$/g, "") : "", c = b ? b.split("/") : [], d = a.split("/"), e = 0; e < d.length; e++) switch (f = d[e]) {
                    case ".":
                        break;
                    case "..":
                        c.length && c.pop();
                        break;
                    default:
                        c.push(f)
                }
                return "/" + c.join("/")
            },
            isSameDomain: function(a, b) {
                return d.parseUrl(a).domain.toLowerCase() === d.parseUrl(b).domain.toLowerCase()
            },
            isRelativeUrl: function(a) {
                return "" === d.parseUrl(a).protocol
            },
            isAbsoluteUrl: function(a) {
                return "" !== d.parseUrl(a).protocol
            },
            makeUrlAbsolute: function(a, b) {
                if (!d.isRelativeUrl(a)) return a;
                b === c && (b = this.documentBase);
                var e = d.parseUrl(a),
                    f = d.parseUrl(b),
                    g = e.protocol || f.protocol,
                    h = e.protocol ? e.doubleSlash : e.doubleSlash || f.doubleSlash,
                    i = e.authority || f.authority,
                    j = "" !== e.pathname,
                    k = d.makePathAbsolute(e.pathname || f.filename, f.pathname),
                    l = e.search || !j && f.search || "",
                    m = e.hash;
                return g + h + i + k + l + m
            },
            addSearchParams: function(b, c) {
                var e = d.parseUrl(b),
                    f = "object" == typeof c ? a.param(c) : c,
                    g = e.search || "?";
                return e.hrefNoSearch + g + ("?" !== g.charAt(g.length - 1) ? "&" : "") + f + (e.hash || "")
            },
            convertUrlToDataUrl: function(a) {
                var c = a,
                    e = d.parseUrl(a);
                return d.isEmbeddedPage(e) ? c = e.hash.split(f)[0].replace(/^#/, "").replace(/\?.*$/, "") : d.isSameDomain(e, this.documentBase) && (c = e.hrefNoHash.replace(this.documentBase.domain, "").split(f)[0]), b.decodeURIComponent(c)
            },
            get: function(a) {
                return a === c && (a = d.parseLocation().hash), d.stripHash(a).replace(/[^\/]*\.[^\/*]+$/, "")
            },
            set: function(a) {
                location.hash = a
            },
            isPath: function(a) {
                return /\//.test(a)
            },
            clean: function(a) {
                return a.replace(this.documentBase.domain, "")
            },
            stripHash: function(a) {
                return a.replace(/^#/, "")
            },
            stripQueryParams: function(a) {
                return a.replace(/\?.*$/, "")
            },
            cleanHash: function(a) {
                return d.stripHash(a.replace(/\?.*$/, "").replace(f, ""))
            },
            isHashValid: function(a) {
                return /^#[^#]+$/.test(a)
            },
            isExternal: function(a) {
                var b = d.parseUrl(a);
                return !(!b.protocol || b.domain.toLowerCase() === this.documentUrl.domain.toLowerCase())
            },
            hasProtocol: function(a) {
                return /^(:?\w+:)/.test(a)
            },
            isEmbeddedPage: function(a) {
                var b = d.parseUrl(a);
                return "" !== b.protocol ? !this.isPath(b.hash) && b.hash && (b.hrefNoHash === this.documentUrl.hrefNoHash || this.documentBaseDiffers && b.hrefNoHash === this.documentBase.hrefNoHash) : /^#/.test(b.href)
            },
            squash: function(a, b) {
                var c, e, f, g, h, i = this.isPath(a),
                    j = this.parseUrl(a),
                    k = j.hash,
                    l = "";
                return b || (i ? b = d.getLocation() : (h = d.getDocumentUrl(!0), b = d.isPath(h.hash) ? d.squash(h.href) : h.href)), e = i ? d.stripHash(a) : a, e = d.isPath(j.hash) ? d.stripHash(j.hash) : e, g = e.indexOf(this.uiStateKey), g > -1 && (l = e.slice(g), e = e.slice(0, g)), c = d.makeUrlAbsolute(e, b), f = this.parseUrl(c).search, i ? ((d.isPath(k) || 0 === k.replace("#", "").indexOf(this.uiStateKey)) && (k = ""), l && -1 === k.indexOf(this.uiStateKey) && (k += l), -1 === k.indexOf("#") && "" !== k && (k = "#" + k), c = d.parseUrl(c), c = c.protocol + c.doubleSlash + c.host + c.pathname + f + k) : c += c.indexOf("#") > -1 ? l : "#" + l, c
            },
            isPreservableHash: function(a) {
                return 0 === a.replace("#", "").indexOf(this.uiStateKey)
            },
            hashToSelector: function(a) {
                var b = "#" === a.substring(0, 1);
                return b && (a = a.substring(1)), (b ? "#" : "") + a.replace(/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, "\\$1")
            },
            getFilePath: function(a) {
                return a && a.split(f)[0]
            },
            isFirstPageUrl: function(b) {
                var e = d.parseUrl(d.makeUrlAbsolute(b, this.documentBase)),
                    f = e.hrefNoHash === this.documentUrl.hrefNoHash || this.documentBaseDiffers && e.hrefNoHash === this.documentBase.hrefNoHash,
                    g = a.mobile.firstPage,
                    h = g && g[0] ? g[0].id : c;
                return f && (!e.hash || "#" === e.hash || h && e.hash.replace(/^#/, "") === h)
            },
            isPermittedCrossDomainRequest: function(b, c) {
                return a.mobile.allowCrossDomainPages && ("file:" === b.protocol || "content:" === b.protocol) && -1 !== c.search(/^https?:/)
            }
        }, d.documentUrl = d.parseLocation(), e = a("head").find("base"), d.documentBase = e.length ? d.parseUrl(d.makeUrlAbsolute(e.attr("href"), d.documentUrl.href)) : d.documentUrl, d.documentBaseDiffers = d.documentUrl.hrefNoHash !== d.documentBase.hrefNoHash, d.getDocumentBase = function(b) {
            return b ? a.extend({}, d.documentBase) : d.documentBase.href
        }, a.extend(a.mobile, {
            getDocumentUrl: d.getDocumentUrl,
            getDocumentBase: d.getDocumentBase
        })
    }(a),
    function(a, b) {
        a.mobile.History = function(a, b) {
            this.stack = a || [], this.activeIndex = b || 0
        }, a.extend(a.mobile.History.prototype, {
            getActive: function() {
                return this.stack[this.activeIndex]
            },
            getLast: function() {
                return this.stack[this.previousIndex]
            },
            getNext: function() {
                return this.stack[this.activeIndex + 1]
            },
            getPrev: function() {
                return this.stack[this.activeIndex - 1]
            },
            add: function(a, b) {
                b = b || {}, this.getNext() && this.clearForward(), b.hash && -1 === b.hash.indexOf("#") && (b.hash = "#" + b.hash), b.url = a, this.stack.push(b), this.activeIndex = this.stack.length - 1
            },
            clearForward: function() {
                this.stack = this.stack.slice(0, this.activeIndex + 1)
            },
            find: function(a, b, c) {
                b = b || this.stack;
                var d, e, f, g = b.length;
                for (e = 0; g > e; e++)
                    if (d = b[e], (decodeURIComponent(a) === decodeURIComponent(d.url) || decodeURIComponent(a) === decodeURIComponent(d.hash)) && (f = e, c)) return f;
                return f
            },
            closest: function(a) {
                var c, d = this.activeIndex;
                return c = this.find(a, this.stack.slice(0, d)), c === b && (c = this.find(a, this.stack.slice(d), !0), c = c === b ? c : c + d), c
            },
            direct: function(c) {
                var d = this.closest(c.url),
                    e = this.activeIndex;
                d !== b && (this.activeIndex = d, this.previousIndex = e), e > d ? (c.present || c.back || a.noop)(this.getActive(), "back") : d > e ? (c.present || c.forward || a.noop)(this.getActive(), "forward") : d === b && c.missing && c.missing(this.getActive())
            }
        })
    }(a),
    function(a) {
        var d = a.mobile.path,
            e = location.href;
        a.mobile.Navigator = function(b) {
            this.history = b, this.ignoreInitialHashChange = !0, a.mobile.window.bind({
                "popstate.history": a.proxy(this.popstate, this),
                "hashchange.history": a.proxy(this.hashchange, this)
            })
        }, a.extend(a.mobile.Navigator.prototype, {
            squash: function(e, f) {
                var g, h, i = d.isPath(e) ? d.stripHash(e) : e;
                return h = d.squash(e), g = a.extend({
                    hash: i,
                    url: h
                }, f), b.history.replaceState(g, g.title || c.title, h), g
            },
            hash: function(a, b) {
                var c, e, f, g;
                return c = d.parseUrl(a), e = d.parseLocation(), e.pathname + e.search === c.pathname + c.search ? f = c.hash ? c.hash : c.pathname + c.search : d.isPath(a) ? (g = d.parseUrl(b), f = g.pathname + g.search + (d.isPreservableHash(g.hash) ? g.hash.replace("#", "") : "")) : f = a, f
            },
            go: function(e, f, g) {
                var h, i, j, k, l = a.event.special.navigate.isPushStateEnabled();
                i = d.squash(e), j = this.hash(e, i), g && j !== d.stripHash(d.parseLocation().hash) && (this.preventNextHashChange = g), this.preventHashAssignPopState = !0, b.location.hash = j, this.preventHashAssignPopState = !1, h = a.extend({
                    url: i,
                    hash: j,
                    title: c.title
                }, f), l && (k = new a.Event("popstate"), k.originalEvent = {
                    type: "popstate",
                    state: null
                }, this.squash(e, h), g || (this.ignorePopState = !0, a.mobile.window.trigger(k))), this.history.add(h.url, h)
            },
            popstate: function(b) {
                var c, f;
                if (a.event.special.navigate.isPushStateEnabled()) return this.preventHashAssignPopState ? (this.preventHashAssignPopState = !1, void b.stopImmediatePropagation()) : this.ignorePopState ? void(this.ignorePopState = !1) : !b.originalEvent.state && 1 === this.history.stack.length && this.ignoreInitialHashChange && (this.ignoreInitialHashChange = !1, location.href === e) ? void b.preventDefault() : (c = d.parseLocation().hash, !b.originalEvent.state && c ? (f = this.squash(c), this.history.add(f.url, f), void(b.historyState = f)) : void this.history.direct({
                    url: (b.originalEvent.state || {}).url || c,
                    present: function(c, d) {
                        b.historyState = a.extend({}, c), b.historyState.direction = d
                    }
                }))
            },
            hashchange: function(b) {
                var e, f;
                if (a.event.special.navigate.isHashChangeEnabled() && !a.event.special.navigate.isPushStateEnabled()) {
                    if (this.preventNextHashChange) return this.preventNextHashChange = !1, void b.stopImmediatePropagation();
                    e = this.history, f = d.parseLocation().hash, this.history.direct({
                        url: f,
                        present: function(c, d) {
                            b.hashchangeState = a.extend({}, c), b.hashchangeState.direction = d
                        },
                        missing: function() {
                            e.add(f, {
                                hash: f,
                                title: c.title
                            })
                        }
                    })
                }
            }
        })
    }(a),
    function(a) {
        a.mobile.navigate = function(b, c, d) {
            a.mobile.navigate.navigator.go(b, c, d)
        }, a.mobile.navigate.history = new a.mobile.History, a.mobile.navigate.navigator = new a.mobile.Navigator(a.mobile.navigate.history);
        var b = a.mobile.path.parseLocation();
        a.mobile.navigate.history.add(b.href, {
            hash: b.hash
        })
    }(a),
    function(a, b) {
        var d = {
                animation: {},
                transition: {}
            },
            e = c.createElement("a"),
            f = ["", "webkit-", "moz-", "o-"];
        a.each(["animation", "transition"], function(c, g) {
            var h = 0 === c ? g + "-name" : g;
            a.each(f, function(c, f) {
                return e.style[a.camelCase(f + h)] !== b ? (d[g].prefix = f, !1) : void 0
            }), d[g].duration = a.camelCase(d[g].prefix + g + "-duration"), d[g].event = a.camelCase(d[g].prefix + g + "-end"), "" === d[g].prefix && (d[g].event = d[g].event.toLowerCase())
        }), a.support.cssTransitions = d.transition.prefix !== b, a.support.cssAnimations = d.animation.prefix !== b, a(e).remove(), a.fn.animationComplete = function(e, f, g) {
            var h, i, j = this,
                k = function() {
                    clearTimeout(h), e.apply(this, arguments)
                },
                l = f && "animation" !== f ? "transition" : "animation";
            return a.support.cssTransitions && "transition" === l || a.support.cssAnimations && "animation" === l ? (g === b && (a(this).context !== c && (i = 3e3 * parseFloat(a(this).css(d[l].duration))), (0 === i || i === b || isNaN(i)) && (i = a.fn.animationComplete.defaultDuration)), h = setTimeout(function() {
                a(j).off(d[l].event, k), e.apply(j)
            }, i), a(this).one(d[l].event, k)) : (setTimeout(a.proxy(e, this), 0), a(this))
        }, a.fn.animationComplete.defaultDuration = 1e3
    }(a),
    function(a, b, c, d) {
        function e(a) {
            for (; a && "undefined" != typeof a.originalEvent;) a = a.originalEvent;
            return a
        }

        function f(b, c) {
            var f, g, h, i, j, k, l, m, n, o = b.type;
            if (b = a.Event(b), b.type = c, f = b.originalEvent, g = a.event.props, o.search(/^(mouse|click)/) > -1 && (g = E), f)
                for (l = g.length, i; l;) i = g[--l], b[i] = f[i];
            if (o.search(/mouse(down|up)|click/) > -1 && !b.which && (b.which = 1), -1 !== o.search(/^touch/) && (h = e(f), o = h.touches, j = h.changedTouches, k = o && o.length ? o[0] : j && j.length ? j[0] : d))
                for (m = 0, n = C.length; n > m; m++) i = C[m], b[i] = k[i];
            return b
        }

        function g(b) {
            for (var c, d, e = {}; b;) {
                c = a.data(b, z);
                for (d in c) c[d] && (e[d] = e.hasVirtualBinding = !0);
                b = b.parentNode
            }
            return e
        }

        function h(b, c) {
            for (var d; b;) {
                if (d = a.data(b, z), d && (!c || d[c])) return b;
                b = b.parentNode
            }
            return null
        }

        function i() {
            M = !1
        }

        function j() {
            M = !0
        }

        function k() {
            Q = 0, K.length = 0, L = !1, j()
        }

        function l() {
            i()
        }

        function m() {
            n(), G = setTimeout(function() {
                G = 0, k()
            }, a.vmouse.resetTimerDuration)
        }

        function n() {
            G && (clearTimeout(G), G = 0)
        }

        function o(b, c, d) {
            var e;
            return (d && d[b] || !d && h(c.target, b)) && (e = f(c, b), a(c.target).trigger(e)), e
        }

        function p(b) {
            var c, d = a.data(b.target, A);
            L || Q && Q === d || (c = o("v" + b.type, b), c && (c.isDefaultPrevented() && b.preventDefault(), c.isPropagationStopped() && b.stopPropagation(), c.isImmediatePropagationStopped() && b.stopImmediatePropagation()))
        }

        function q(b) {
            var c, d, f, h = e(b).touches;
            h && 1 === h.length && (c = b.target, d = g(c), d.hasVirtualBinding && (Q = P++, a.data(c, A, Q), n(), l(), J = !1, f = e(b).touches[0], H = f.pageX, I = f.pageY, o("vmouseover", b, d), o("vmousedown", b, d)))
        }

        function r(a) {
            M || (J || o("vmousecancel", a, g(a.target)), J = !0, m())
        }

        function s(b) {
            if (!M) {
                var c = e(b).touches[0],
                    d = J,
                    f = a.vmouse.moveDistanceThreshold,
                    h = g(b.target);
                J = J || Math.abs(c.pageX - H) > f || Math.abs(c.pageY - I) > f, J && !d && o("vmousecancel", b, h), o("vmousemove", b, h), m()
            }
        }

        function t(a) {
            if (!M) {
                j();
                var b, c, d = g(a.target);
                o("vmouseup", a, d), J || (b = o("vclick", a, d), b && b.isDefaultPrevented() && (c = e(a).changedTouches[0], K.push({
                    touchID: Q,
                    x: c.clientX,
                    y: c.clientY
                }), L = !0)), o("vmouseout", a, d), J = !1, m()
            }
        }

        function u(b) {
            var c, d = a.data(b, z);
            if (d)
                for (c in d)
                    if (d[c]) return !0;
            return !1
        }

        function v() {}

        function w(b) {
            var c = b.substr(1);
            return {
                setup: function() {
                    u(this) || a.data(this, z, {});
                    var d = a.data(this, z);
                    d[b] = !0, F[b] = (F[b] || 0) + 1, 1 === F[b] && O.bind(c, p), a(this).bind(c, v), N && (F.touchstart = (F.touchstart || 0) + 1, 1 === F.touchstart && O.bind("touchstart", q).bind("touchend", t).bind("touchmove", s).bind("scroll", r))
                },
                teardown: function() {
                    --F[b], F[b] || O.unbind(c, p), N && (--F.touchstart, F.touchstart || O.unbind("touchstart", q).unbind("touchmove", s).unbind("touchend", t).unbind("scroll", r));
                    var d = a(this),
                        e = a.data(this, z);
                    e && (e[b] = !1), d.unbind(c, v), u(this) || d.removeData(z)
                }
            }
        }
        var x, y, z = "virtualMouseBindings",
            A = "virtualTouchID",
            B = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
            C = "clientX clientY pageX pageY screenX screenY".split(" "),
            D = a.event.mouseHooks ? a.event.mouseHooks.props : [],
            E = a.event.props.concat(D),
            F = {},
            G = 0,
            H = 0,
            I = 0,
            J = !1,
            K = [],
            L = !1,
            M = !1,
            N = "addEventListener" in c,
            O = a(c),
            P = 1,
            Q = 0;
        for (a.vmouse = {
                moveDistanceThreshold: 10,
                clickDistanceThreshold: 10,
                resetTimerDuration: 1500
            }, y = 0; y < B.length; y++) a.event.special[B[y]] = w(B[y]);
        N && c.addEventListener("click", function(b) {
            var c, d, e, f, g, h, i = K.length,
                j = b.target;
            if (i)
                for (c = b.clientX, d = b.clientY, x = a.vmouse.clickDistanceThreshold, e = j; e;) {
                    for (f = 0; i > f; f++)
                        if (g = K[f], h = 0, e === j && Math.abs(g.x - c) < x && Math.abs(g.y - d) < x || a.data(e, A) === g.touchID) return b.preventDefault(), void b.stopPropagation();
                    e = e.parentNode
                }
        }, !0)
    }(a, b, c),
    function(a, b, d) {
        function e(b, c, e, f) {
            var g = e.type;
            e.type = c, f ? a.event.trigger(e, d, b) : a.event.dispatch.call(b, e), e.type = g
        }
        var f = a(c),
            g = a.mobile.support.touch,
            h = "touchmove scroll",
            i = g ? "touchstart" : "mousedown",
            j = g ? "touchend" : "mouseup",
            k = g ? "touchmove" : "mousemove";
        a.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(b, c) {
            a.fn[c] = function(a) {
                return a ? this.bind(c, a) : this.trigger(c)
            }, a.attrFn && (a.attrFn[c] = !0)
        }), a.event.special.scrollstart = {
            enabled: !0,
            setup: function() {
                function b(a, b) {
                    c = b, e(f, c ? "scrollstart" : "scrollstop", a)
                }
                var c, d, f = this,
                    g = a(f);
                g.bind(h, function(e) {
                    a.event.special.scrollstart.enabled && (c || b(e, !0), clearTimeout(d), d = setTimeout(function() {
                        b(e, !1)
                    }, 50))
                })
            },
            teardown: function() {
                a(this).unbind(h)
            }
        }, a.event.special.tap = {
            tapholdThreshold: 750,
            emitTapOnTaphold: !0,
            setup: function() {
                var b = this,
                    c = a(b),
                    d = !1;
                c.bind("vmousedown", function(g) {
                    function h() {
                        clearTimeout(k)
                    }

                    function i() {
                        h(), c.unbind("vclick", j).unbind("vmouseup", h), f.unbind("vmousecancel", i)
                    }

                    function j(a) {
                        i(), d || l !== a.target ? d && a.preventDefault() : e(b, "tap", a)
                    }
                    if (d = !1, g.which && 1 !== g.which) return !1;
                    var k, l = g.target;
                    c.bind("vmouseup", h).bind("vclick", j), f.bind("vmousecancel", i), k = setTimeout(function() {
                        a.event.special.tap.emitTapOnTaphold || (d = !0), e(b, "taphold", a.Event("taphold", {
                            target: l
                        }))
                    }, a.event.special.tap.tapholdThreshold)
                })
            },
            teardown: function() {
                a(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"), f.unbind("vmousecancel")
            }
        }, a.event.special.swipe = {
            scrollSupressionThreshold: 30,
            durationThreshold: 1e3,
            horizontalDistanceThreshold: 30,
            verticalDistanceThreshold: 30,
            getLocation: function(a) {
                var c = b.pageXOffset,
                    d = b.pageYOffset,
                    e = a.clientX,
                    f = a.clientY;
                return 0 === a.pageY && Math.floor(f) > Math.floor(a.pageY) || 0 === a.pageX && Math.floor(e) > Math.floor(a.pageX) ? (e -= c, f -= d) : (f < a.pageY - d || e < a.pageX - c) && (e = a.pageX - c, f = a.pageY - d), {
                    x: e,
                    y: f
                }
            },
            start: function(b) {
                var c = b.originalEvent.touches ? b.originalEvent.touches[0] : b,
                    d = a.event.special.swipe.getLocation(c);
                return {
                    time: (new Date).getTime(),
                    coords: [d.x, d.y],
                    origin: a(b.target)
                }
            },
            stop: function(b) {
                var c = b.originalEvent.touches ? b.originalEvent.touches[0] : b,
                    d = a.event.special.swipe.getLocation(c);
                return {
                    time: (new Date).getTime(),
                    coords: [d.x, d.y]
                }
            },
            handleSwipe: function(b, c, d, f) {
                if (c.time - b.time < a.event.special.swipe.durationThreshold && Math.abs(b.coords[0] - c.coords[0]) > a.event.special.swipe.horizontalDistanceThreshold && Math.abs(b.coords[1] - c.coords[1]) < a.event.special.swipe.verticalDistanceThreshold) {
                    var g = b.coords[0] > c.coords[0] ? "swipeleft" : "swiperight";
                    return e(d, "swipe", a.Event("swipe", {
                        target: f,
                        swipestart: b,
                        swipestop: c
                    }), !0), e(d, g, a.Event(g, {
                        target: f,
                        swipestart: b,
                        swipestop: c
                    }), !0), !0
                }
                return !1
            },
            eventInProgress: !1,
            setup: function() {
                var b, c = this,
                    d = a(c),
                    e = {};
                b = a.data(this, "mobile-events"), b || (b = {
                    length: 0
                }, a.data(this, "mobile-events", b)), b.length++, b.swipe = e, e.start = function(b) {
                    if (!a.event.special.swipe.eventInProgress) {
                        a.event.special.swipe.eventInProgress = !0;
                        var d, g = a.event.special.swipe.start(b),
                            h = b.target,
                            i = !1;
                        e.move = function(b) {
                            g && !b.isDefaultPrevented() && (d = a.event.special.swipe.stop(b), i || (i = a.event.special.swipe.handleSwipe(g, d, c, h), i && (a.event.special.swipe.eventInProgress = !1)), Math.abs(g.coords[0] - d.coords[0]) > a.event.special.swipe.scrollSupressionThreshold && b.preventDefault())
                        }, e.stop = function() {
                            i = !0, a.event.special.swipe.eventInProgress = !1, f.off(k, e.move), e.move = null
                        }, f.on(k, e.move).one(j, e.stop)
                    }
                }, d.on(i, e.start)
            },
            teardown: function() {
                var b, c;
                b = a.data(this, "mobile-events"), b && (c = b.swipe, delete b.swipe, b.length--, 0 === b.length && a.removeData(this, "mobile-events")), c && (c.start && a(this).off(i, c.start), c.move && f.off(k, c.move), c.stop && f.off(j, c.stop))
            }
        }, a.each({
            scrollstop: "scrollstart",
            taphold: "tap",
            swipeleft: "swipe.left",
            swiperight: "swipe.right"
        }, function(b, c) {
            a.event.special[b] = {
                setup: function() {
                    a(this).bind(c, a.noop)
                },
                teardown: function() {
                    a(this).unbind(c)
                }
            }
        })
    }(a, this),
    function(a) {
        a.event.special.throttledresize = {
            setup: function() {
                a(this).bind("resize", f)
            },
            teardown: function() {
                a(this).unbind("resize", f)
            }
        };
        var b, c, d, e = 250,
            f = function() {
                c = (new Date).getTime(), d = c - g, d >= e ? (g = c, a(this).trigger("throttledresize")) : (b && clearTimeout(b), b = setTimeout(f, e - d))
            },
            g = 0
    }(a),
    function(a, b) {
        function d() {
            var a = e();
            a !== f && (f = a, l.trigger(m))
        }
        var e, f, g, h, i, j, k, l = a(b),
            m = "orientationchange",
            n = {
                0: !0,
                180: !0
            };
        a.support.orientation && (i = b.innerWidth || l.width(), j = b.innerHeight || l.height(), k = 50, g = i > j && i - j > k, h = n[b.orientation], (g && h || !g && !h) && (n = {
            "-90": !0,
            90: !0
        })), a.event.special.orientationchange = a.extend({}, a.event.special.orientationchange, {
            setup: function() {
                return a.support.orientation && !a.event.special.orientationchange.disabled ? !1 : (f = e(), void l.bind("throttledresize", d))
            },
            teardown: function() {
                return a.support.orientation && !a.event.special.orientationchange.disabled ? !1 : void l.unbind("throttledresize", d)
            },
            add: function(a) {
                var b = a.handler;
                a.handler = function(a) {
                    return a.orientation = e(), b.apply(this, arguments)
                }
            }
        }), a.event.special.orientationchange.orientation = e = function() {
            var d = !0,
                e = c.documentElement;
            return d = a.support.orientation ? n[b.orientation] : e && e.clientWidth / e.clientHeight < 1.1, d ? "portrait" : "landscape"
        }, a.fn[m] = function(a) {
            return a ? this.bind(m, a) : this.trigger(m)
        }, a.attrFn && (a.attrFn[m] = !0)
    }(a, this),
    function(a) {
        var b = a("head").children("base"),
            c = {
                element: b.length ? b : a("<base>", {
                    href: a.mobile.path.documentBase.hrefNoHash
                }).prependTo(a("head")),
                linkSelector: "[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]",
                set: function(b) {
                    a.mobile.dynamicBaseEnabled && a.support.dynamicBaseTag && c.element.attr("href", a.mobile.path.makeUrlAbsolute(b, a.mobile.path.documentBase))
                },
                rewrite: function(b, d) {
                    var e = a.mobile.path.get(b);
                    d.find(c.linkSelector).each(function(b, c) {
                        var d = a(c).is("[href]") ? "href" : a(c).is("[src]") ? "src" : "action",
                            f = a.mobile.path.parseLocation(),
                            g = a(c).attr(d);
                        g = g.replace(f.protocol + f.doubleSlash + f.host + f.pathname, ""), /^(\w+:|#|\/)/.test(g) || a(c).attr(d, e + g)
                    })
                },
                reset: function() {
                    c.element.attr("href", a.mobile.path.documentBase.hrefNoSearch)
                }
            };
        a.mobile.base = c
    }(a),
    function(a, b) {
        a.mobile.widgets = {};
        var c = a.widget,
            d = a.mobile.keepNative;
        a.widget = function(c) {
            return function() {
                var d = c.apply(this, arguments),
                    e = d.prototype.widgetName;
                return d.initSelector = d.prototype.initSelector !== b ? d.prototype.initSelector : ":jqmData(role='" + e + "')", a.mobile.widgets[e] = d, d
            }
        }(a.widget), a.extend(a.widget, c), a.mobile.document.on("create", function(b) {
            a(b.target).enhanceWithin()
        }), a.widget("mobile.page", {
            options: {
                theme: "a",
                domCache: !1,
                keepNativeDefault: a.mobile.keepNative,
                contentTheme: null,
                enhanced: !1
            },
            _createWidget: function() {
                a.Widget.prototype._createWidget.apply(this, arguments), this._trigger("init")
            },
            _create: function() {
                return this._trigger("beforecreate") === !1 ? !1 : (this.options.enhanced || this._enhance(), this._on(this.element, {
                    pagebeforehide: "removeContainerBackground",
                    pagebeforeshow: "_handlePageBeforeShow"
                }), this.element.enhanceWithin(), void("dialog" === a.mobile.getAttribute(this.element[0], "role") && a.mobile.dialog && this.element.dialog()))
            },
            _enhance: function() {
                var c = "data-" + a.mobile.ns,
                    d = this;
                this.options.role && this.element.attr("data-" + a.mobile.ns + "role", this.options.role), this.element.attr("tabindex", "0").addClass("ui-page ui-page-theme-" + this.options.theme), this.element.find("[" + c + "role='content']").each(function() {
                    var e = a(this),
                        f = this.getAttribute(c + "theme") || b;
                    d.options.contentTheme = f || d.options.contentTheme || d.options.dialog && d.options.theme || "dialog" === d.element.jqmData("role") && d.options.theme, e.addClass("ui-content"), d.options.contentTheme && e.addClass("ui-body-" + d.options.contentTheme), e.attr("role", "main").addClass("ui-content")
                })
            },
            bindRemove: function(b) {
                var c = this.element;
                !c.data("mobile-page").options.domCache && c.is(":jqmData(external-page='true')") && c.bind("pagehide.remove", b || function(b, c) {
                    if (!c.samePage) {
                        var d = a(this),
                            e = new a.Event("pageremove");
                        d.trigger(e), e.isDefaultPrevented() || d.removeWithDependents()
                    }
                })
            },
            _setOptions: function(c) {
                c.theme !== b && this.element.removeClass("ui-page-theme-" + this.options.theme).addClass("ui-page-theme-" + c.theme), c.contentTheme !== b && this.element.find("[data-" + a.mobile.ns + "='content']").removeClass("ui-body-" + this.options.contentTheme).addClass("ui-body-" + c.contentTheme)
            },
            _handlePageBeforeShow: function() {
                this.setContainerBackground()
            },
            removeContainerBackground: function() {
                this.element.closest(":mobile-pagecontainer").pagecontainer({
                    theme: "none"
                })
            },
            setContainerBackground: function(a) {
                this.element.parent().pagecontainer({
                    theme: a || this.options.theme
                })
            },
            keepNativeSelector: function() {
                var b = this.options,
                    c = a.trim(b.keepNative || ""),
                    e = a.trim(a.mobile.keepNative),
                    f = a.trim(b.keepNativeDefault),
                    g = d === e ? "" : e,
                    h = "" === g ? f : "";
                return (c ? [c] : []).concat(g ? [g] : []).concat(h ? [h] : []).join(", ")
            }
        })
    }(a),
    function(a, d) {
        a.widget("mobile.pagecontainer", {
            options: {
                theme: "a"
            },
            initSelector: !1,
            _create: function() {
                this._trigger("beforecreate"), this.setLastScrollEnabled = !0, this._on(this.window, {
                    navigate: "_disableRecordScroll",
                    scrollstop: "_delayedRecordScroll"
                }), this._on(this.window, {
                    navigate: "_filterNavigateEvents"
                }), this._on({
                    pagechange: "_afterContentChange"
                }), this.window.one("navigate", a.proxy(function() {
                    this.setLastScrollEnabled = !0
                }, this))
            },
            _setOptions: function(a) {
                a.theme !== d && "none" !== a.theme ? this.element.removeClass("ui-overlay-" + this.options.theme).addClass("ui-overlay-" + a.theme) : a.theme !== d && this.element.removeClass("ui-overlay-" + this.options.theme), this._super(a)
            },
            _disableRecordScroll: function() {
                this.setLastScrollEnabled = !1
            },
            _enableRecordScroll: function() {
                this.setLastScrollEnabled = !0
            },
            _afterContentChange: function() {
                this.setLastScrollEnabled = !0, this._off(this.window, "scrollstop"), this._on(this.window, {
                    scrollstop: "_delayedRecordScroll"
                })
            },
            _recordScroll: function() {
                if (this.setLastScrollEnabled) {
                    var a, b, c, d = this._getActiveHistory();
                    d && (a = this._getScroll(), b = this._getMinScroll(), c = this._getDefaultScroll(), d.lastScroll = b > a ? c : a)
                }
            },
            _delayedRecordScroll: function() {
                setTimeout(a.proxy(this, "_recordScroll"), 100)
            },
            _getScroll: function() {
                return this.window.scrollTop()
            },
            _getMinScroll: function() {
                return a.mobile.minScrollBack
            },
            _getDefaultScroll: function() {
                return a.mobile.defaultHomeScroll
            },
            _filterNavigateEvents: function(b, c) {
                var d;
                b.originalEvent && b.originalEvent.isDefaultPrevented() || (d = b.originalEvent.type.indexOf("hashchange") > -1 ? c.state.hash : c.state.url, d || (d = this._getHash()), d && "#" !== d && 0 !== d.indexOf("#" + a.mobile.path.uiStateKey) || (d = location.href), this._handleNavigate(d, c.state))
            },
            _getHash: function() {
                return a.mobile.path.parseLocation().hash
            },
            getActivePage: function() {
                return this.activePage
            },
            _getInitialContent: function() {
                return a.mobile.firstPage
            },
            _getHistory: function() {
                return a.mobile.navigate.history
            },
            _getActiveHistory: function() {
                return this._getHistory().getActive()
            },
            _getDocumentBase: function() {
                return a.mobile.path.documentBase
            },
            back: function() {
                this.go(-1)
            },
            forward: function() {
                this.go(1)
            },
            go: function(c) {
                if (a.mobile.hashListeningEnabled) b.history.go(c);
                else {
                    var d = a.mobile.navigate.history.activeIndex,
                        e = d + parseInt(c, 10),
                        f = a.mobile.navigate.history.stack[e].url,
                        g = c >= 1 ? "forward" : "back";
                    a.mobile.navigate.history.activeIndex = e, a.mobile.navigate.history.previousIndex = d, this.change(f, {
                        direction: g,
                        changeHash: !1,
                        fromHashChange: !0
                    })
                }
            },
            _handleDestination: function(b) {
                var c;
                return "string" === a.type(b) && (b = a.mobile.path.stripHash(b)), b && (c = this._getHistory(), b = a.mobile.path.isPath(b) ? b : a.mobile.path.makeUrlAbsolute("#" + b, this._getDocumentBase())), b || this._getInitialContent()
            },
            _transitionFromHistory: function(a, b) {
                var c = this._getHistory(),
                    d = "back" === a ? c.getLast() : c.getActive();
                return d && d.transition || b
            },
            _handleDialog: function(b, c) {
                var d, e, f = this.getActivePage();
                return f && !f.data("mobile-dialog") ? ("back" === c.direction ? this.back() : this.forward(), !1) : (d = c.pageUrl, e = this._getActiveHistory(), a.extend(b, {
                    role: e.role,
                    transition: this._transitionFromHistory(c.direction, b.transition),
                    reverse: "back" === c.direction
                }), d)
            },
            _handleNavigate: function(b, c) {
                var d = a.mobile.path.stripHash(b),
                    e = this._getHistory(),
                    f = 0 === e.stack.length ? "none" : this._transitionFromHistory(c.direction),
                    g = {
                        changeHash: !1,
                        fromHashChange: !0,
                        reverse: "back" === c.direction
                    };
                a.extend(g, c, {
                    transition: f
                }), e.activeIndex > 0 && d.indexOf(a.mobile.dialogHashKey) > -1 && (d = this._handleDialog(g, c), d === !1) || this._changeContent(this._handleDestination(d), g)
            },
            _changeContent: function(b, c) {
                a.mobile.changePage(b, c)
            },
            _getBase: function() {
                return a.mobile.base
            },
            _getNs: function() {
                return a.mobile.ns
            },
            _enhance: function(a, b) {
                return a.page({
                    role: b
                })
            },
            _include: function(a, b) {
                a.appendTo(this.element), this._enhance(a, b.role), a.page("bindRemove")
            },
            _find: function(b) {
                var c, d = this._createFileUrl(b),
                    e = this._createDataUrl(b),
                    f = this._getInitialContent();
                return c = this.element.children("[data-" + this._getNs() + "url='" + a.mobile.path.hashToSelector(e) + "']"), 0 === c.length && e && !a.mobile.path.isPath(e) && (c = this.element.children(a.mobile.path.hashToSelector("#" + e)).attr("data-" + this._getNs() + "url", e).jqmData("url", e)), 0 === c.length && a.mobile.path.isFirstPageUrl(d) && f && f.parent().length && (c = a(f)), c
            },
            _getLoader: function() {
                return a.mobile.loading()
            },
            _showLoading: function(b, c, d, e) {
                this._loadMsg || (this._loadMsg = setTimeout(a.proxy(function() {
                    this._getLoader().loader("show", c, d, e), this._loadMsg = 0
                }, this), b))
            },
            _hideLoading: function() {
                clearTimeout(this._loadMsg), this._loadMsg = 0, this._getLoader().loader("hide")
            },
            _showError: function() {
                this._hideLoading(), this._showLoading(0, a.mobile.pageLoadErrorMessageTheme, a.mobile.pageLoadErrorMessage, !0), setTimeout(a.proxy(this, "_hideLoading"), 1500)
            },
            _parse: function(b, c) {
                var d, e = a("<div></div>");
                return e.get(0).innerHTML = b, d = e.find(":jqmData(role='page'), :jqmData(role='dialog')").first(), d.length || (d = a("<div data-" + this._getNs() + "role='page'>" + (b.split(/<\/?body[^>]*>/gim)[1] || "") + "</div>")), d.attr("data-" + this._getNs() + "url", this._createDataUrl(c)).attr("data-" + this._getNs() + "external-page", !0), d
            },
            _setLoadedTitle: function(b, c) {
                var d = c.match(/<title[^>]*>([^<]*)/) && RegExp.$1;
                d && !b.jqmData("title") && (d = a("<div>" + d + "</div>").text(), b.jqmData("title", d))
            },
            _isRewritableBaseTag: function() {
                return a.mobile.dynamicBaseEnabled && !a.support.dynamicBaseTag
            },
            _createDataUrl: function(b) {
                return a.mobile.path.convertUrlToDataUrl(b)
            },
            _createFileUrl: function(b) {
                return a.mobile.path.getFilePath(b)
            },
            _triggerWithDeprecated: function(b, c, d) {
                var e = a.Event("page" + b),
                    f = a.Event(this.widgetName + b);
                return (d || this.element).trigger(e, c), this._trigger(b, f, c), {
                    deprecatedEvent: e,
                    event: f
                }
            },
            _loadSuccess: function(b, c, e, f) {
                var g = this._createFileUrl(b);
                return a.proxy(function(h, i, j) {
                    var k, l = new RegExp("(<[^>]+\\bdata-" + this._getNs() + "role=[\"']?page[\"']?[^>]*>)"),
                        m = new RegExp("\\bdata-" + this._getNs() + "url=[\"']?([^\"'>]*)[\"']?");
                    l.test(h) && RegExp.$1 && m.test(RegExp.$1) && RegExp.$1 && (g = a.mobile.path.getFilePath(a("<div>" + RegExp.$1 + "</div>").text()), g = this.window[0].encodeURIComponent(g)), e.prefetch === d && this._getBase().set(g), k = this._parse(h, g), this._setLoadedTitle(k, h), c.xhr = j, c.textStatus = i, c.page = k, c.content = k, c.toPage = k, this._triggerWithDeprecated("load", c).event.isDefaultPrevented() || (this._isRewritableBaseTag() && k && this._getBase().rewrite(g, k), this._include(k, e), e.showLoadMsg && this._hideLoading(), f.resolve(b, e, k))
                }, this)
            },
            _loadDefaults: {
                type: "get",
                data: d,
                reloadPage: !1,
                reload: !1,
                role: d,
                showLoadMsg: !1,
                loadMsgDelay: 50
            },
            load: function(b, c) {
                var e, f, g, h, i = c && c.deferred || a.Deferred(),
                    j = c && c.reload === d && c.reloadPage !== d ? {
                        reload: c.reloadPage
                    } : {},
                    k = a.extend({}, this._loadDefaults, c, j),
                    l = null,
                    m = a.mobile.path.makeUrlAbsolute(b, this._findBaseWithDefault());
                return k.data && "get" === k.type && (m = a.mobile.path.addSearchParams(m, k.data), k.data = d), k.data && "post" === k.type && (k.reload = !0), e = this._createFileUrl(m), f = this._createDataUrl(m), l = this._find(m), 0 === l.length && a.mobile.path.isEmbeddedPage(e) && !a.mobile.path.isFirstPageUrl(e) ? (i.reject(m, k), i.promise()) : (this._getBase().reset(), l.length && !k.reload ? (this._enhance(l, k.role), i.resolve(m, k, l), k.prefetch || this._getBase().set(b), i.promise()) : (h = {
                    url: b,
                    absUrl: m,
                    toPage: b,
                    prevPage: c ? c.fromPage : d,
                    dataUrl: f,
                    deferred: i,
                    options: k
                }, g = this._triggerWithDeprecated("beforeload", h), g.deprecatedEvent.isDefaultPrevented() || g.event.isDefaultPrevented() ? i.promise() : (k.showLoadMsg && this._showLoading(k.loadMsgDelay), k.prefetch === d && this._getBase().reset(), a.mobile.allowCrossDomainPages || a.mobile.path.isSameDomain(a.mobile.path.documentUrl, m) ? (a.ajax({
                    url: e,
                    type: k.type,
                    data: k.data,
                    contentType: k.contentType,
                    dataType: "html",
                    success: this._loadSuccess(m, h, k, i),
                    error: this._loadError(m, h, k, i)
                }), i.promise()) : (i.reject(m, k), i.promise()))))
            },
            _loadError: function(b, c, d, e) {
                return a.proxy(function(f, g, h) {
                    this._getBase().set(a.mobile.path.get()), c.xhr = f, c.textStatus = g, c.errorThrown = h;
                    var i = this._triggerWithDeprecated("loadfailed", c);
                    i.deprecatedEvent.isDefaultPrevented() || i.event.isDefaultPrevented() || (d.showLoadMsg && this._showError(), e.reject(b, d))
                }, this)
            },
            _getTransitionHandler: function(b) {
                return b = a.mobile._maybeDegradeTransition(b), a.mobile.transitionHandlers[b] || a.mobile.defaultTransitionHandler
            },
            _triggerCssTransitionEvents: function(b, c, d) {
                var e = !1;
                d = d || "", c && (b[0] === c[0] && (e = !0), this._triggerWithDeprecated(d + "hide", {
                    nextPage: b,
                    toPage: b,
                    prevPage: c,
                    samePage: e
                }, c)), this._triggerWithDeprecated(d + "show", {
                    prevPage: c || a(""),
                    toPage: b
                }, b)
            },
            _cssTransition: function(b, c, d) {
                var e, f, g = d.transition,
                    h = d.reverse,
                    i = d.deferred;
                this._triggerCssTransitionEvents(b, c, "before"), this._hideLoading(), e = this._getTransitionHandler(g), f = new e(g, h, b, c).transition(), f.done(a.proxy(function() {
                    this._triggerCssTransitionEvents(b, c)
                }, this)), f.done(function() {
                    i.resolve.apply(i, arguments)
                })
            },
            _releaseTransitionLock: function() {
                f = !1, e.length > 0 && a.mobile.changePage.apply(null, e.pop())
            },
            _removeActiveLinkClass: function(b) {
                a.mobile.removeActiveLinkClass(b)
            },
            _loadUrl: function(b, c, d) {
                d.target = b, d.deferred = a.Deferred(), this.load(b, d), d.deferred.done(a.proxy(function(a, b, d) {
                    f = !1, b.absUrl = c.absUrl, this.transition(d, c, b)
                }, this)), d.deferred.fail(a.proxy(function() {
                    this._removeActiveLinkClass(!0), this._releaseTransitionLock(), this._triggerWithDeprecated("changefailed", c)
                }, this))
            },
            _triggerPageBeforeChange: function(b, c, d) {
                var e;
                return c.prevPage = this.activePage, a.extend(c, {
                    toPage: b,
                    options: d
                }), c.absUrl = "string" === a.type(b) ? a.mobile.path.makeUrlAbsolute(b, this._findBaseWithDefault()) : d.absUrl, e = this._triggerWithDeprecated("beforechange", c), e.event.isDefaultPrevented() || e.deprecatedEvent.isDefaultPrevented() ? !1 : !0
            },
            change: function(b, c) {
                if (f) return void e.unshift(arguments);
                var d = a.extend({}, a.mobile.changePage.defaults, c),
                    g = {};
                d.fromPage = d.fromPage || this.activePage, this._triggerPageBeforeChange(b, g, d) && (b = g.toPage, "string" === a.type(b) ? (f = !0, this._loadUrl(b, g, d)) : this.transition(b, g, d))
            },
            transition: function(b, g, h) {
                var i, j, k, l, m, n, o, p, q, r, s, t, u, v;
                if (f) return void e.unshift([b, h]);
                if (this._triggerPageBeforeChange(b, g, h) && (g.prevPage = h.fromPage, v = this._triggerWithDeprecated("beforetransition", g), !v.deprecatedEvent.isDefaultPrevented() && !v.event.isDefaultPrevented())) {
                    if (f = !0, b[0] !== a.mobile.firstPage[0] || h.dataUrl || (h.dataUrl = a.mobile.path.documentUrl.hrefNoHash), i = h.fromPage, j = h.dataUrl && a.mobile.path.convertUrlToDataUrl(h.dataUrl) || b.jqmData("url"), k = j, l = a.mobile.path.getFilePath(j), m = a.mobile.navigate.history.getActive(), n = 0 === a.mobile.navigate.history.activeIndex, o = 0, p = c.title, q = ("dialog" === h.role || "dialog" === b.jqmData("role")) && b.jqmData("dialog") !== !0, i && i[0] === b[0] && !h.allowSamePageTransition) return f = !1, this._triggerWithDeprecated("transition", g), this._triggerWithDeprecated("change", g), void(h.fromHashChange && a.mobile.navigate.history.direct({
                        url: j
                    }));
                    b.page({
                        role: h.role
                    }), h.fromHashChange && (o = "back" === h.direction ? -1 : 1);
                    try {
                        c.activeElement && "body" !== c.activeElement.nodeName.toLowerCase() ? a(c.activeElement).blur() : a("input:focus, textarea:focus, select:focus").blur()
                    } catch (w) {}
                    r = !1, q && m && (m.url && m.url.indexOf(a.mobile.dialogHashKey) > -1 && this.activePage && !this.activePage.hasClass("ui-dialog") && a.mobile.navigate.history.activeIndex > 0 && (h.changeHash = !1, r = !0), j = m.url || "", j += !r && j.indexOf("#") > -1 ? a.mobile.dialogHashKey : "#" + a.mobile.dialogHashKey), s = m ? b.jqmData("title") || b.children(":jqmData(role='header')").find(".ui-title").text() : p, s && p === c.title && (p = s), b.jqmData("title") || b.jqmData("title", p), h.transition = h.transition || (o && !n ? m.transition : d) || (q ? a.mobile.defaultDialogTransition : a.mobile.defaultPageTransition), !o && r && (a.mobile.navigate.history.getActive().pageUrl = k), j && !h.fromHashChange && (!a.mobile.path.isPath(j) && j.indexOf("#") < 0 && (j = "#" + j), t = {
                        transition: h.transition,
                        title: p,
                        pageUrl: k,
                        role: h.role
                    }, h.changeHash !== !1 && a.mobile.hashListeningEnabled ? a.mobile.navigate(this.window[0].encodeURI(j), t, !0) : b[0] !== a.mobile.firstPage[0] && a.mobile.navigate.history.add(j, t)), c.title = p, a.mobile.activePage = b, this.activePage = b, h.reverse = h.reverse || 0 > o, u = a.Deferred(), this._cssTransition(b, i, {
                        transition: h.transition,
                        reverse: h.reverse,
                        deferred: u
                    }), u.done(a.proxy(function(c, d, e, f, i) {
                        a.mobile.removeActiveLinkClass(), h.duplicateCachedPage && h.duplicateCachedPage.remove(), i || a.mobile.focusPage(b), this._releaseTransitionLock(), this._triggerWithDeprecated("transition", g), this._triggerWithDeprecated("change", g)
                    }, this))
                }
            },
            _findBaseWithDefault: function() {
                var b = this.activePage && a.mobile.getClosestBaseUrl(this.activePage);
                return b || a.mobile.path.documentBase.hrefNoHash
            }
        }), a.mobile.navreadyDeferred = a.Deferred();
        var e = [],
            f = !1
    }(a),
    function(a, d) {
        function e(a) {
            for (; a && ("string" != typeof a.nodeName || "a" !== a.nodeName.toLowerCase());) a = a.parentNode;
            return a
        }
        var f = a.Deferred(),
            g = a.Deferred(),
            h = function() {
                g.resolve(), g = null
            },
            i = a.mobile.path.documentUrl,
            j = null;
        a.mobile.loadPage = function(b, c) {
            var d;
            return c = c || {}, d = c.pageContainer || a.mobile.pageContainer, c.deferred = a.Deferred(), d.pagecontainer("load", b, c), c.deferred.promise()
        }, a.mobile.back = function() {
            var c = b.navigator;
            this.phonegapNavigationEnabled && c && c.app && c.app.backHistory ? c.app.backHistory() : a.mobile.pageContainer.pagecontainer("back")
        }, a.mobile.focusPage = function(a) {
            var b = a.find("[autofocus]"),
                c = a.find(".ui-title:eq(0)");
            return b.length ? void b.focus() : void(c.length ? c.focus() : a.focus())
        }, a.mobile._maybeDegradeTransition = a.mobile._maybeDegradeTransition || function(a) {
            return a
        }, a.mobile.changePage = function(b, c) {
            a.mobile.pageContainer.pagecontainer("change", b, c)
        }, a.mobile.changePage.defaults = {
            transition: d,
            reverse: !1,
            changeHash: !0,
            fromHashChange: !1,
            role: d,
            duplicateCachedPage: d,
            pageContainer: d,
            showLoadMsg: !0,
            dataUrl: d,
            fromPage: d,
            allowSamePageTransition: !1
        }, a.mobile._registerInternalEvents = function() {
            var c = function(b, c) {
                var d, e, f, g, h = !0;
                return !a.mobile.ajaxEnabled || b.is(":jqmData(ajax='false')") || !b.jqmHijackable().length || b.attr("target") ? !1 : (d = j && j.attr("formaction") || b.attr("action"), g = (b.attr("method") || "get").toLowerCase(), d || (d = a.mobile.getClosestBaseUrl(b), "get" === g && (d = a.mobile.path.parseUrl(d).hrefNoSearch), d === a.mobile.path.documentBase.hrefNoHash && (d = i.hrefNoSearch)), d = a.mobile.path.makeUrlAbsolute(d, a.mobile.getClosestBaseUrl(b)), a.mobile.path.isExternal(d) && !a.mobile.path.isPermittedCrossDomainRequest(i, d) ? !1 : (c || (e = b.serializeArray(), j && j[0].form === b[0] && (f = j.attr("name"), f && (a.each(e, function(a, b) {
                    return b.name === f ? (f = "", !1) : void 0
                }), f && e.push({
                    name: f,
                    value: j.attr("value")
                }))), h = {
                    url: d,
                    options: {
                        type: g,
                        data: a.param(e),
                        transition: b.jqmData("transition"),
                        reverse: "reverse" === b.jqmData("direction"),
                        reloadPage: !0
                    }
                }), h))
            };
            a.mobile.document.delegate("form", "submit", function(b) {
                var d;
                b.isDefaultPrevented() || (d = c(a(this)), d && (a.mobile.changePage(d.url, d.options), b.preventDefault()))
            }), a.mobile.document.bind("vclick", function(b) {
                var d, f, g = b.target,
                    h = !1;
                if (!(b.which > 1) && a.mobile.linkBindingEnabled) {
                    if (j = a(g), a.data(g, "mobile-button")) {
                        if (!c(a(g).closest("form"), !0)) return;
                        g.parentNode && (g = g.parentNode)
                    } else {
                        if (g = e(g), !g || "#" === a.mobile.path.parseUrl(g.getAttribute("href") || "#").hash) return;
                        if (!a(g).jqmHijackable().length) return
                    }~g.className.indexOf("ui-link-inherit") ? g.parentNode && (f = a.data(g.parentNode, "buttonElements")) : f = a.data(g, "buttonElements"), f ? g = f.outer : h = !0, d = a(g), h && (d = d.closest(".ui-btn")), d.length > 0 && !d.hasClass("ui-state-disabled") && (a.mobile.removeActiveLinkClass(!0), a.mobile.activeClickedLink = d, a.mobile.activeClickedLink.addClass(a.mobile.activeBtnClass))
                }
            }), a.mobile.document.bind("click", function(c) {
                if (a.mobile.linkBindingEnabled && !c.isDefaultPrevented()) {
                    var f, g, h, j, k, l, m, n = e(c.target),
                        o = a(n),
                        p = function() {
                            b.setTimeout(function() {
                                a.mobile.removeActiveLinkClass(!0)
                            }, 200)
                        };
                    if (a.mobile.activeClickedLink && a.mobile.activeClickedLink[0] === c.target.parentNode && p(), n && !(c.which > 1) && o.jqmHijackable().length) {
                        if (o.is(":jqmData(rel='back')")) return a.mobile.back(), !1;
                        if (f = a.mobile.getClosestBaseUrl(o), g = a.mobile.path.makeUrlAbsolute(o.attr("href") || "#", f), !a.mobile.ajaxEnabled && !a.mobile.path.isEmbeddedPage(g)) return void p();
                        if (!(-1 === g.search("#") || a.mobile.path.isExternal(g) && a.mobile.path.isAbsoluteUrl(g))) {
                            if (g = g.replace(/[^#]*#/, ""), !g) return void c.preventDefault();
                            g = a.mobile.path.isPath(g) ? a.mobile.path.makeUrlAbsolute(g, f) : a.mobile.path.makeUrlAbsolute("#" + g, i.hrefNoHash)
                        }
                        if (h = o.is("[rel='external']") || o.is(":jqmData(ajax='false')") || o.is("[target]"), j = h || a.mobile.path.isExternal(g) && !a.mobile.path.isPermittedCrossDomainRequest(i, g)) return void p();
                        k = o.jqmData("transition"), l = "reverse" === o.jqmData("direction") || o.jqmData("back"), m = o.attr("data-" + a.mobile.ns + "rel") || d, a.mobile.changePage(g, {
                            transition: k,
                            reverse: l,
                            role: m,
                            link: o
                        }), c.preventDefault()
                    }
                }
            }), a.mobile.document.delegate(".ui-page", "pageshow.prefetch", function() {
                var b = [];
                a(this).find("a:jqmData(prefetch)").each(function() {
                    var c = a(this),
                        d = c.attr("href");
                    d && -1 === a.inArray(d, b) && (b.push(d), a.mobile.loadPage(d, {
                        role: c.attr("data-" + a.mobile.ns + "rel"),
                        prefetch: !0
                    }))
                })
            }), a.mobile.pageContainer.pagecontainer(), a.mobile.document.bind("pageshow", function() {
                g ? g.done(a.mobile.resetActivePageHeight) : a.mobile.resetActivePageHeight()
            }), a.mobile.window.bind("throttledresize", a.mobile.resetActivePageHeight)
        }, a(function() {
            f.resolve()
        }), "complete" === c.readyState ? h() : a.mobile.window.load(h), a.when(f, a.mobile.navreadyDeferred).done(function() {
            a.mobile._registerInternalEvents()
        })
    }(a),
    function(a, b) {
        a.mobile.Transition = function() {
            this.init.apply(this, arguments)
        }, a.extend(a.mobile.Transition.prototype, {
            toPreClass: " ui-page-pre-in",
            init: function(b, c, d, e) {
                a.extend(this, {
                    name: b,
                    reverse: c,
                    $to: d,
                    $from: e,
                    deferred: new a.Deferred
                })
            },
            cleanFrom: function() {
                this.$from.removeClass(a.mobile.activePageClass + " out in reverse " + this.name).height("")
            },
            beforeDoneIn: function() {},
            beforeDoneOut: function() {},
            beforeStartOut: function() {},
            doneIn: function() {
                this.beforeDoneIn(), this.$to.removeClass("out in reverse " + this.name).height(""), this.toggleViewportClass(), a.mobile.window.scrollTop() !== this.toScroll && this.scrollPage(), this.sequential || this.$to.addClass(a.mobile.activePageClass), this.deferred.resolve(this.name, this.reverse, this.$to, this.$from, !0)
            },
            doneOut: function(a, b, c, d) {
                this.beforeDoneOut(), this.startIn(a, b, c, d)
            },
            hideIn: function(a) {
                this.$to.css("z-index", -10), a.call(this), this.$to.css("z-index", "")
            },
            scrollPage: function() {
                a.event.special.scrollstart.enabled = !1, (a.mobile.hideUrlBar || this.toScroll !== a.mobile.defaultHomeScroll) && b.scrollTo(0, this.toScroll), setTimeout(function() {
                    a.event.special.scrollstart.enabled = !0
                }, 150)
            },
            startIn: function(b, c, d, e) {
                this.hideIn(function() {
                    this.$to.addClass(a.mobile.activePageClass + this.toPreClass), e || a.mobile.focusPage(this.$to), this.$to.height(b + this.toScroll), d || this.scrollPage()
                }), this.$to.removeClass(this.toPreClass).addClass(this.name + " in " + c), d ? this.doneIn() : this.$to.animationComplete(a.proxy(function() {
                    this.doneIn()
                }, this))
            },
            startOut: function(b, c, d) {
                this.beforeStartOut(b, c, d), this.$from.height(b + a.mobile.window.scrollTop()).addClass(this.name + " out" + c)
            },
            toggleViewportClass: function() {
                a.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-" + this.name)
            },
            transition: function() {
                var b, c = this.reverse ? " reverse" : "",
                    d = a.mobile.getScreenHeight(),
                    e = a.mobile.maxTransitionWidth !== !1 && a.mobile.window.width() > a.mobile.maxTransitionWidth;
                return this.toScroll = a.mobile.navigate.history.getActive().lastScroll || a.mobile.defaultHomeScroll, b = !a.support.cssTransitions || !a.support.cssAnimations || e || !this.name || "none" === this.name || Math.max(a.mobile.window.scrollTop(), this.toScroll) > a.mobile.getMaxScrollForTransition(), this.toggleViewportClass(), this.$from && !b ? this.startOut(d, c, b) : this.doneOut(d, c, b, !0), this.deferred.promise()
            }
        })
    }(a, this),
    function(a) {
        a.mobile.SerialTransition = function() {
            this.init.apply(this, arguments)
        }, a.extend(a.mobile.SerialTransition.prototype, a.mobile.Transition.prototype, {
            sequential: !0,
            beforeDoneOut: function() {
                this.$from && this.cleanFrom()
            },
            beforeStartOut: function(b, c, d) {
                this.$from.animationComplete(a.proxy(function() {
                    this.doneOut(b, c, d)
                }, this))
            }
        })
    }(a),
    function(a) {
        a.mobile.ConcurrentTransition = function() {
            this.init.apply(this, arguments)
        }, a.extend(a.mobile.ConcurrentTransition.prototype, a.mobile.Transition.prototype, {
            sequential: !1,
            beforeDoneIn: function() {
                this.$from && this.cleanFrom()
            },
            beforeStartOut: function(a, b, c) {
                this.doneOut(a, b, c)
            }
        })
    }(a),
    function(a) {
        var b = function() {
            return 3 * a.mobile.getScreenHeight()
        };
        a.mobile.transitionHandlers = {
            sequential: a.mobile.SerialTransition,
            simultaneous: a.mobile.ConcurrentTransition
        }, a.mobile.defaultTransitionHandler = a.mobile.transitionHandlers.sequential, a.mobile.transitionFallbacks = {}, a.mobile._maybeDegradeTransition = function(b) {
            return b && !a.support.cssTransform3d && a.mobile.transitionFallbacks[b] && (b = a.mobile.transitionFallbacks[b]), b
        }, a.mobile.getMaxScrollForTransition = a.mobile.getMaxScrollForTransition || b
    }(a),
    function(a) {
        a.mobile.transitionFallbacks.flip = "fade"
    }(a, this),
    function(a) {
        a.mobile.transitionFallbacks.flow = "fade"
    }(a, this),
    function(a) {
        a.mobile.transitionFallbacks.pop = "fade"
    }(a, this),
    function(a) {
        a.mobile.transitionHandlers.slide = a.mobile.transitionHandlers.simultaneous, a.mobile.transitionFallbacks.slide = "fade"
    }(a, this),
    function(a) {
        a.mobile.transitionFallbacks.slidedown = "fade"
    }(a, this),
    function(a) {
        a.mobile.transitionFallbacks.slidefade = "fade"
    }(a, this),
    function(a) {
        a.mobile.transitionFallbacks.slideup = "fade"
    }(a, this),
    function(a) {
        a.mobile.transitionFallbacks.turn = "fade"
    }(a, this),
    function(a) {
        a.mobile.degradeInputs = {
            color: !1,
            date: !1,
            datetime: !1,
            "datetime-local": !1,
            email: !1,
            month: !1,
            number: !1,
            range: "number",
            search: "text",
            tel: !1,
            time: !1,
            url: !1,
            week: !1
        }, a.mobile.page.prototype.options.degradeInputs = a.mobile.degradeInputs, a.mobile.degradeInputsWithin = function(b) {
            b = a(b), b.find("input").not(a.mobile.page.prototype.keepNativeSelector()).each(function() {
                var b, c, d, e, f = a(this),
                    g = this.getAttribute("type"),
                    h = a.mobile.degradeInputs[g] || "text";
                a.mobile.degradeInputs[g] && (b = a("<div>").html(f.clone()).html(), c = b.indexOf(" type=") > -1, d = c ? /\s+type=["']?\w+['"]?/ : /\/?>/, e = ' type="' + h + '" data-' + a.mobile.ns + 'type="' + g + '"' + (c ? "" : ">"), f.replaceWith(b.replace(d, e)))
            })
        }
    }(a),
    function(a, b, c) {
        a.widget("mobile.page", a.mobile.page, {
            options: {
                closeBtn: "left",
                closeBtnText: "Close",
                overlayTheme: "a",
                corners: !0,
                dialog: !1
            },
            _create: function() {
                this._super(), this.options.dialog && (a.extend(this, {
                    _inner: this.element.children(),
                    _headerCloseButton: null
                }), this.options.enhanced || this._setCloseBtn(this.options.closeBtn))
            },
            _enhance: function() {
                this._super(), this.options.dialog && this.element.addClass("ui-dialog").wrapInner(a("<div/>", {
                    role: "dialog",
                    "class": "ui-dialog-contain ui-overlay-shadow" + (this.options.corners ? " ui-corner-all" : "")
                }))
            },
            _setOptions: function(b) {
                var d, e, f = this.options;
                b.corners !== c && this._inner.toggleClass("ui-corner-all", !!b.corners), b.overlayTheme !== c && a.mobile.activePage[0] === this.element[0] && (f.overlayTheme = b.overlayTheme, this._handlePageBeforeShow()), b.closeBtnText !== c && (d = f.closeBtn, e = b.closeBtnText), b.closeBtn !== c && (d = b.closeBtn), d && this._setCloseBtn(d, e), this._super(b)
            },
            _handlePageBeforeShow: function() {
                this.options.overlayTheme && this.options.dialog ? (this.removeContainerBackground(), this.setContainerBackground(this.options.overlayTheme)) : this._super()
            },
            _setCloseBtn: function(b, c) {
                var d, e = this._headerCloseButton;
                b = "left" === b ? "left" : "right" === b ? "right" : "none", "none" === b ? e && (e.remove(), e = null) : e ? (e.removeClass("ui-btn-left ui-btn-right").addClass("ui-btn-" + b), c && e.text(c)) : (d = this._inner.find(":jqmData(role='header')").first(), e = a("<a></a>", {
                    href: "#",
                    "class": "ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-" + b
                }).attr("data-" + a.mobile.ns + "rel", "back").text(c || this.options.closeBtnText || "").prependTo(d)), this._headerCloseButton = e
            }
        })
    }(a, this),
    function(a, b, c) {
        a.widget("mobile.dialog", {
            options: {
                closeBtn: "left",
                closeBtnText: "Close",
                overlayTheme: "a",
                corners: !0
            },
            _handlePageBeforeShow: function() {
                this._isCloseable = !0, this.options.overlayTheme && this.element.page("removeContainerBackground").page("setContainerBackground", this.options.overlayTheme)
            },
            _handlePageBeforeHide: function() {
                this._isCloseable = !1
            },
            _handleVClickSubmit: function(b) {
                var c, d = a(b.target).closest("vclick" === b.type ? "a" : "form");
                d.length && !d.jqmData("transition") && (c = {}, c["data-" + a.mobile.ns + "transition"] = (a.mobile.navigate.history.getActive() || {}).transition || a.mobile.defaultDialogTransition, c["data-" + a.mobile.ns + "direction"] = "reverse", d.attr(c))
            },
            _create: function() {
                var b = this.element,
                    c = this.options;
                b.addClass("ui-dialog").wrapInner(a("<div/>", {
                    role: "dialog",
                    "class": "ui-dialog-contain ui-overlay-shadow" + (c.corners ? " ui-corner-all" : "")
                })), a.extend(this, {
                    _isCloseable: !1,
                    _inner: b.children(),
                    _headerCloseButton: null
                }), this._on(b, {
                    vclick: "_handleVClickSubmit",
                    submit: "_handleVClickSubmit",
                    pagebeforeshow: "_handlePageBeforeShow",
                    pagebeforehide: "_handlePageBeforeHide"
                }), this._setCloseBtn(c.closeBtn)
            },
            _setOptions: function(b) {
                var d, e, f = this.options;
                b.corners !== c && this._inner.toggleClass("ui-corner-all", !!b.corners), b.overlayTheme !== c && a.mobile.activePage[0] === this.element[0] && (f.overlayTheme = b.overlayTheme, this._handlePageBeforeShow()), b.closeBtnText !== c && (d = f.closeBtn, e = b.closeBtnText), b.closeBtn !== c && (d = b.closeBtn), d && this._setCloseBtn(d, e), this._super(b)
            },
            _setCloseBtn: function(b, c) {
                var d, e = this._headerCloseButton;
                b = "left" === b ? "left" : "right" === b ? "right" : "none", "none" === b ? e && (e.remove(), e = null) : e ? (e.removeClass("ui-btn-left ui-btn-right").addClass("ui-btn-" + b), c && e.text(c)) : (d = this._inner.find(":jqmData(role='header')").first(), e = a("<a></a>", {
                    role: "button",
                    href: "#",
                    "class": "ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-" + b
                }).text(c || this.options.closeBtnText || "").prependTo(d), this._on(e, {
                    click: "close"
                })), this._headerCloseButton = e
            },
            close: function() {
                var b = a.mobile.navigate.history;
                this._isCloseable && (this._isCloseable = !1, a.mobile.hashListeningEnabled && b.activeIndex > 0 ? a.mobile.back() : a.mobile.pageContainer.pagecontainer("back"))
            }
        })
    }(a, this),
    function(a, b) {
        var c = /([A-Z])/g,
            d = function(a) {
                return "ui-btn-icon-" + (null === a ? "left" : a)
            };
        a.widget("mobile.collapsible", {
            options: {
                enhanced: !1,
                expandCueText: null,
                collapseCueText: null,
                collapsed: !0,
                heading: "h1,h2,h3,h4,h5,h6,legend",
                collapsedIcon: null,
                expandedIcon: null,
                iconpos: null,
                theme: null,
                contentTheme: null,
                inset: null,
                corners: null,
                mini: null
            },
            _create: function() {
                var b = this.element,
                    c = {
                        accordion: b.closest(":jqmData(role='collapsible-set'),:jqmData(role='collapsibleset')" + (a.mobile.collapsibleset ? ", :mobile-collapsibleset" : "")).addClass("ui-collapsible-set")
                    };
                this._ui = c, this._renderedOptions = this._getOptions(this.options), this.options.enhanced ? (c.heading = this.element.children(".ui-collapsible-heading"), c.content = c.heading.next(), c.anchor = c.heading.children(), c.status = c.anchor.children(".ui-collapsible-heading-status")) : this._enhance(b, c), this._on(c.heading, {
                    tap: function() {
                        c.heading.find("a").first().addClass(a.mobile.activeBtnClass)
                    },
                    click: function(a) {
                        this._handleExpandCollapse(!c.heading.hasClass("ui-collapsible-heading-collapsed")), a.preventDefault(), a.stopPropagation()
                    }
                })
            },
            _getOptions: function(b) {
                var d, e = this._ui.accordion,
                    f = this._ui.accordionWidget;
                b = a.extend({}, b), e.length && !f && (this._ui.accordionWidget = f = e.data("mobile-collapsibleset"));
                for (d in b) b[d] = null != b[d] ? b[d] : f ? f.options[d] : e.length ? a.mobile.getAttribute(e[0], d.replace(c, "-$1").toLowerCase()) : null, null == b[d] && (b[d] = a.mobile.collapsible.defaults[d]);
                return b
            },
            _themeClassFromOption: function(a, b) {
                return b ? "none" === b ? "" : a + b : ""
            },
            _enhance: function(b, c) {
                var e, f = this._renderedOptions,
                    g = this._themeClassFromOption("ui-body-", f.contentTheme);
                return b.addClass("ui-collapsible " + (f.inset ? "ui-collapsible-inset " : "") + (f.inset && f.corners ? "ui-corner-all " : "") + (g ? "ui-collapsible-themed-content " : "")), c.originalHeading = b.children(this.options.heading).first(), c.content = b.wrapInner("<div class='ui-collapsible-content " + g + "'></div>").children(".ui-collapsible-content"), c.heading = c.originalHeading, c.heading.is("legend") && (c.heading = a("<div role='heading'>" + c.heading.html() + "</div>"), c.placeholder = a("<div><!-- placeholder for legend --></div>").insertBefore(c.originalHeading), c.originalHeading.remove()), e = f.collapsed ? f.collapsedIcon ? "ui-icon-" + f.collapsedIcon : "" : f.expandedIcon ? "ui-icon-" + f.expandedIcon : "", c.status = a("<span class='ui-collapsible-heading-status'></span>"), c.anchor = c.heading.detach().addClass("ui-collapsible-heading").append(c.status).wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().addClass("ui-btn " + (e ? e + " " : "") + (e ? d(f.iconpos) + " " : "") + this._themeClassFromOption("ui-btn-", f.theme) + " " + (f.mini ? "ui-mini " : "")), c.heading.insertBefore(c.content), this._handleExpandCollapse(this.options.collapsed), c
            },
            refresh: function() {
                this._applyOptions(this.options), this._renderedOptions = this._getOptions(this.options)
            },
            _applyOptions: function(a) {
                var c, e, f, g, h, i = this.element,
                    j = this._renderedOptions,
                    k = this._ui,
                    l = k.anchor,
                    m = k.status,
                    n = this._getOptions(a);
                a.collapsed !== b && this._handleExpandCollapse(a.collapsed), c = i.hasClass("ui-collapsible-collapsed"), c ? n.expandCueText !== b && m.text(n.expandCueText) : n.collapseCueText !== b && m.text(n.collapseCueText), h = n.collapsedIcon !== b ? n.collapsedIcon !== !1 : j.collapsedIcon !== !1, (n.iconpos !== b || n.collapsedIcon !== b || n.expandedIcon !== b) && (l.removeClass([d(j.iconpos)].concat(j.expandedIcon ? ["ui-icon-" + j.expandedIcon] : []).concat(j.collapsedIcon ? ["ui-icon-" + j.collapsedIcon] : []).join(" ")), h && l.addClass([d(n.iconpos !== b ? n.iconpos : j.iconpos)].concat(c ? ["ui-icon-" + (n.collapsedIcon !== b ? n.collapsedIcon : j.collapsedIcon)] : ["ui-icon-" + (n.expandedIcon !== b ? n.expandedIcon : j.expandedIcon)]).join(" "))), n.theme !== b && (f = this._themeClassFromOption("ui-btn-", j.theme), e = this._themeClassFromOption("ui-btn-", n.theme), l.removeClass(f).addClass(e)), n.contentTheme !== b && (f = this._themeClassFromOption("ui-body-", j.contentTheme), e = this._themeClassFromOption("ui-body-", n.contentTheme), k.content.removeClass(f).addClass(e)), n.inset !== b && (i.toggleClass("ui-collapsible-inset", n.inset), g = !(!n.inset || !n.corners && !j.corners)), n.corners !== b && (g = !(!n.corners || !n.inset && !j.inset)), g !== b && i.toggleClass("ui-corner-all", g), n.mini !== b && l.toggleClass("ui-mini", n.mini)
            },
            _setOptions: function(a) {
                this._applyOptions(a), this._super(a), this._renderedOptions = this._getOptions(this.options)
            },
            _handleExpandCollapse: function(b) {
                var c = this._renderedOptions,
                    d = this._ui;
                d.status.text(b ? c.expandCueText : c.collapseCueText), d.heading.toggleClass("ui-collapsible-heading-collapsed", b).find("a").first().toggleClass("ui-icon-" + c.expandedIcon, !b).toggleClass("ui-icon-" + c.collapsedIcon, b || c.expandedIcon === c.collapsedIcon).removeClass(a.mobile.activeBtnClass), this.element.toggleClass("ui-collapsible-collapsed", b), d.content.toggleClass("ui-collapsible-content-collapsed", b).attr("aria-hidden", b).trigger("updatelayout"), this.options.collapsed = b, this._trigger(b ? "collapse" : "expand")
            },
            expand: function() {
                this._handleExpandCollapse(!1)
            },
            collapse: function() {
                this._handleExpandCollapse(!0)
            },
            _destroy: function() {
                var a = this._ui,
                    b = this.options;
                b.enhanced || (a.placeholder ? (a.originalHeading.insertBefore(a.placeholder), a.placeholder.remove(), a.heading.remove()) : (a.status.remove(), a.heading.removeClass("ui-collapsible-heading ui-collapsible-heading-collapsed").children().contents().unwrap()), a.anchor.contents().unwrap(), a.content.contents().unwrap(), this.element.removeClass("ui-collapsible ui-collapsible-collapsed ui-collapsible-themed-content ui-collapsible-inset ui-corner-all"))
            }
        }), a.mobile.collapsible.defaults = {
            expandCueText: " click to expand contents",
            collapseCueText: " click to collapse contents",
            collapsedIcon: "plus",
            contentTheme: "inherit",
            expandedIcon: "minus",
            iconpos: "left",
            inset: !0,
            corners: !0,
            theme: "inherit",
            mini: !1
        }
    }(a),
    function(a) {
        function b(b) {
            var d, e = b.length,
                f = [];
            for (d = 0; e > d; d++) b[d].className.match(c) || f.push(b[d]);
            return a(f)
        }
        var c = /\bui-screen-hidden\b/;
        a.mobile.behaviors.addFirstLastClasses = {
            _getVisibles: function(a, c) {
                var d;
                return c ? d = b(a) : (d = a.filter(":visible"), 0 === d.length && (d = b(a))), d
            },
            _addFirstLastClasses: function(a, b, c) {
                a.removeClass("ui-first-child ui-last-child"), b.eq(0).addClass("ui-first-child").end().last().addClass("ui-last-child"), c || this.element.trigger("updatelayout")
            },
            _removeFirstLastClasses: function(a) {
                a.removeClass("ui-first-child ui-last-child")
            }
        }
    }(a),
    function(a, b) {
        var c = ":mobile-collapsible, " + a.mobile.collapsible.initSelector;
        a.widget("mobile.collapsibleset", a.extend({
            initSelector: ":jqmData(role='collapsible-set'),:jqmData(role='collapsibleset')",
            options: a.extend({
                enhanced: !1
            }, a.mobile.collapsible.defaults),
            _handleCollapsibleExpand: function(b) {
                var c = a(b.target).closest(".ui-collapsible");
                c.parent().is(":mobile-collapsibleset, :jqmData(role='collapsible-set')") && c.siblings(".ui-collapsible:not(.ui-collapsible-collapsed)").collapsible("collapse")
            },
            _create: function() {
                var b = this.element,
                    c = this.options;
                a.extend(this, {
                    _classes: ""
                }), c.enhanced || (b.addClass("ui-collapsible-set " + this._themeClassFromOption("ui-group-theme-", c.theme) + " " + (c.corners && c.inset ? "ui-corner-all " : "")), this.element.find(a.mobile.collapsible.initSelector).collapsible()), this._on(b, {
                    collapsibleexpand: "_handleCollapsibleExpand"
                })
            },
            _themeClassFromOption: function(a, b) {
                return b ? "none" === b ? "" : a + b : ""
            },
            _init: function() {
                this._refresh(!0), this.element.children(c).filter(":jqmData(collapsed='false')").collapsible("expand")
            },
            _setOptions: function(a) {
                var c, d, e = this.element,
                    f = this._themeClassFromOption("ui-group-theme-", a.theme);
                return f && e.removeClass(this._themeClassFromOption("ui-group-theme-", this.options.theme)).addClass(f), a.inset !== b && (d = !(!a.inset || !a.corners && !this.options.corners)), a.corners !== b && (d = !(!a.corners || !a.inset && !this.options.inset)), d !== b && e.toggleClass("ui-corner-all", d), c = this._super(a), this.element.children(":mobile-collapsible").collapsible("refresh"), c
            },
            _destroy: function() {
                var a = this.element;
                this._removeFirstLastClasses(a.children(c)), a.removeClass("ui-collapsible-set ui-corner-all " + this._themeClassFromOption("ui-group-theme-", this.options.theme)).children(":mobile-collapsible").collapsible("destroy")
            },
            _refresh: function(b) {
                var d = this.element.children(c);
                this.element.find(a.mobile.collapsible.initSelector).not(".ui-collapsible").collapsible(), this._addFirstLastClasses(d, this._getVisibles(d, b), b)
            },
            refresh: function() {
                this._refresh(!1)
            }
        }, a.mobile.behaviors.addFirstLastClasses))
    }(a),
    function(a) {
        a.fn.fieldcontain = function() {
            return this.addClass("ui-field-contain")
        }
    }(a),
    function(a) {
        a.fn.grid = function(b) {
            return this.each(function() {
                var c, d, e = a(this),
                    f = a.extend({
                        grid: null
                    }, b),
                    g = e.children(),
                    h = {
                        solo: 1,
                        a: 2,
                        b: 3,
                        c: 4,
                        d: 5
                    },
                    i = f.grid;
                if (!i)
                    if (g.length <= 5)
                        for (d in h) h[d] === g.length && (i = d);
                    else i = "a", e.addClass("ui-grid-duo");
                c = h[i], e.addClass("ui-grid-" + i), g.filter(":nth-child(" + c + "n+1)").addClass("ui-block-a"), c > 1 && g.filter(":nth-child(" + c + "n+2)").addClass("ui-block-b"), c > 2 && g.filter(":nth-child(" + c + "n+3)").addClass("ui-block-c"), c > 3 && g.filter(":nth-child(" + c + "n+4)").addClass("ui-block-d"), c > 4 && g.filter(":nth-child(" + c + "n+5)").addClass("ui-block-e")
            })
        }
    }(a),
    function(a, b) {
        a.widget("mobile.navbar", {
            options: {
                iconpos: "top",
                grid: null
            },
            _create: function() {
                var d = this.element,
                    e = d.find("a, button"),
                    f = e.filter(":jqmData(icon)").length ? this.options.iconpos : b;
                d.addClass("ui-navbar").attr("role", "navigation").find("ul").jqmEnhanceable().grid({
                    grid: this.options.grid
                }), e.each(function() {
                    var b = a.mobile.getAttribute(this, "icon"),
                        c = a.mobile.getAttribute(this, "theme"),
                        d = "ui-btn";
                    c && (d += " ui-btn-" + c), b && (d += " ui-icon-" + b + " ui-btn-icon-" + f), a(this).addClass(d)
                }), d.delegate("a", "vclick", function() {
                    var b = a(this);
                    b.hasClass("ui-state-disabled") || b.hasClass("ui-disabled") || b.hasClass(a.mobile.activeBtnClass) || (e.removeClass(a.mobile.activeBtnClass), b.addClass(a.mobile.activeBtnClass), a(c).one("pagehide", function() {
                        b.removeClass(a.mobile.activeBtnClass)
                    }))
                }), d.closest(".ui-page").bind("pagebeforeshow", function() {
                    e.filter(".ui-state-persist").addClass(a.mobile.activeBtnClass)
                })
            }
        })
    }(a),
    function(a) {
        var b = a.mobile.getAttribute;
        a.widget("mobile.listview", a.extend({
            options: {
                theme: null,
                countTheme: null,
                dividerTheme: null,
                icon: "carat-r",
                splitIcon: "carat-r",
                splitTheme: null,
                corners: !0,
                shadow: !0,
                inset: !1
            },
            _create: function() {
                var a = this,
                    b = "";
                b += a.options.inset ? " ui-listview-inset" : "", a.options.inset && (b += a.options.corners ? " ui-corner-all" : "", b += a.options.shadow ? " ui-shadow" : ""), a.element.addClass(" ui-listview" + b), a.refresh(!0)
            },
            _findFirstElementByTagName: function(a, b, c, d) {
                var e = {};
                for (e[c] = e[d] = !0; a;) {
                    if (e[a.nodeName]) return a;
                    a = a[b]
                }
                return null
            },
            _addThumbClasses: function(b) {
                var c, d, e = b.length;
                for (c = 0; e > c; c++) d = a(this._findFirstElementByTagName(b[c].firstChild, "nextSibling", "img", "IMG")), d.length && a(this._findFirstElementByTagName(d[0].parentNode, "parentNode", "li", "LI")).addClass(d.hasClass("ui-li-icon") ? "ui-li-has-icon" : "ui-li-has-thumb")
            },
            _getChildrenByTagName: function(b, c, d) {
                var e = [],
                    f = {};
                for (f[c] = f[d] = !0, b = b.firstChild; b;) f[b.nodeName] && e.push(b), b = b.nextSibling;
                return a(e)
            },
            _beforeListviewRefresh: a.noop,
            _afterListviewRefresh: a.noop,
            refresh: function(c) {
                var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x = this.options,
                    y = this.element,
                    z = !!a.nodeName(y[0], "ol"),
                    A = y.attr("start"),
                    B = {},
                    C = y.find(".ui-li-count"),
                    D = b(y[0], "counttheme") || this.options.countTheme,
                    E = D ? "ui-body-" + D : "ui-body-inherit";
                for (x.theme && y.addClass("ui-group-theme-" + x.theme), z && (A || 0 === A) && (n = parseInt(A, 10) - 1, y.css("counter-reset", "listnumbering " + n)), this._beforeListviewRefresh(), w = this._getChildrenByTagName(y[0], "li", "LI"), e = 0, f = w.length; f > e; e++) g = w.eq(e), h = "", (c || g[0].className.search(/\bui-li-static\b|\bui-li-divider\b/) < 0) && (l = this._getChildrenByTagName(g[0], "a", "A"), m = "list-divider" === b(g[0], "role"), p = g.attr("value"), i = b(g[0], "theme"), l.length && l[0].className.search(/\bui-btn\b/) < 0 && !m ? (j = b(g[0], "icon"), k = j === !1 ? !1 : j || x.icon, l.removeClass("ui-link"), d = "ui-btn", i && (d += " ui-btn-" + i), l.length > 1 ? (h = "ui-li-has-alt", q = l.last(), r = b(q[0], "theme") || x.splitTheme || b(g[0], "theme", !0), s = r ? " ui-btn-" + r : "", t = b(q[0], "icon") || b(g[0], "icon") || x.splitIcon, u = "ui-btn ui-btn-icon-notext ui-icon-" + t + s, q.attr("title", a.trim(q.getEncodedText())).addClass(u).empty(), l = l.first()) : k && (d += " ui-btn-icon-right ui-icon-" + k), l.addClass(d)) : m ? (v = b(g[0], "theme") || x.dividerTheme || x.theme, h = "ui-li-divider ui-bar-" + (v ? v : "inherit"), g.attr("role", "heading")) : l.length <= 0 && (h = "ui-li-static ui-body-" + (i ? i : "inherit")), z && p && (o = parseInt(p, 10) - 1, g.css("counter-reset", "listnumbering " + o))), B[h] || (B[h] = []), B[h].push(g[0]);
                for (h in B) a(B[h]).addClass(h);
                C.each(function() {
                    a(this).closest("li").addClass("ui-li-has-count")
                }), E && C.not("[class*='ui-body-']").addClass(E), this._addThumbClasses(w), this._addThumbClasses(w.find(".ui-btn")), this._afterListviewRefresh(), this._addFirstLastClasses(w, this._getVisibles(w, c), c)
            }
        }, a.mobile.behaviors.addFirstLastClasses))
    }(a),
    function(a) {
        function b(b) {
            var c = a.trim(b.text()) || null;
            return c ? c = c.slice(0, 1).toUpperCase() : null
        }
        a.widget("mobile.listview", a.mobile.listview, {
            options: {
                autodividers: !1,
                autodividersSelector: b
            },
            _beforeListviewRefresh: function() {
                this.options.autodividers && (this._replaceDividers(), this._superApply(arguments))
            },
            _replaceDividers: function() {
                var b, d, e, f, g, h = null,
                    i = this.element;
                for (i.children("li:jqmData(role='list-divider')").remove(), d = i.children("li"), b = 0; b < d.length; b++) e = d[b], f = this.options.autodividersSelector(a(e)), f && h !== f && (g = c.createElement("li"), g.appendChild(c.createTextNode(f)), g.setAttribute("data-" + a.mobile.ns + "role", "list-divider"), e.parentNode.insertBefore(g, e)), h = f
            }
        })
    }(a),
    function(a) {
        var b = /(^|\s)ui-li-divider($|\s)/,
            c = /(^|\s)ui-screen-hidden($|\s)/;
        a.widget("mobile.listview", a.mobile.listview, {
            options: {
                hideDividers: !1
            },
            _afterListviewRefresh: function() {
                var a, d, e, f = !0;
                if (this._superApply(arguments), this.options.hideDividers)
                    for (a = this._getChildrenByTagName(this.element[0], "li", "LI"), d = a.length - 1; d > -1; d--) e = a[d], e.className.match(b) ? (f && (e.className = e.className + " ui-screen-hidden"), f = !0) : e.className.match(c) || (f = !1)
            }
        })
    }(a),
    function(a) {
        a.mobile.nojs = function(b) {
            a(":jqmData(role='nojs')", b).addClass("ui-nojs")
        }
    }(a),
    function(a) {
        a.mobile.behaviors.formReset = {
            _handleFormReset: function() {
                this._on(this.element.closest("form"), {
                    reset: function() {
                        this._delay("_reset")
                    }
                })
            }
        }
    }(a),
    function(a, b) {
        var c = a.mobile.path.hashToSelector;
        a.widget("mobile.checkboxradio", a.extend({
            initSelector: "input:not( :jqmData(role='flipswitch' ) )[type='checkbox'],input[type='radio']:not( :jqmData(role='flipswitch' ))",
            options: {
                theme: "inherit",
                mini: !1,
                wrapperClass: null,
                enhanced: !1,
                iconpos: "left"
            },
            _create: function() {
                var b = this.element,
                    c = this.options,
                    d = function(a, b) {
                        return a.jqmData(b) || a.closest("form, fieldset").jqmData(b)
                    },
                    e = this.options.enhanced ? {
                        element: this.element.siblings("label"),
                        isParent: !1
                    } : this._findLabel(),
                    f = b[0].type,
                    g = "ui-" + f + "-on",
                    h = "ui-" + f + "-off";
                ("checkbox" === f || "radio" === f) && (this.element[0].disabled && (this.options.disabled = !0), c.iconpos = d(b, "iconpos") || e.element.attr("data-" + a.mobile.ns + "iconpos") || c.iconpos, c.mini = d(b, "mini") || c.mini, a.extend(this, {
                    input: b,
                    label: e.element,
                    labelIsParent: e.isParent,
                    inputtype: f,
                    checkedClass: g,
                    uncheckedClass: h
                }), this.options.enhanced || this._enhance(), this._on(e.element, {
                    vmouseover: "_handleLabelVMouseOver",
                    vclick: "_handleLabelVClick"
                }), this._on(b, {
                    vmousedown: "_cacheVals",
                    vclick: "_handleInputVClick",
                    focus: "_handleInputFocus",
                    blur: "_handleInputBlur"
                }), this._handleFormReset(), this.refresh())
            },
            _findLabel: function() {
                var b, d, e, f = this.element,
                    g = f[0].labels;
                return g && g.length > 0 ? (d = a(g[0]), e = a.contains(d[0], f[0])) : (b = f.closest("label"), e = b.length > 0, d = e ? b : a(this.document[0].getElementsByTagName("label")).filter("[for='" + c(f[0].id) + "']").first()), {
                    element: d,
                    isParent: e
                }
            },
            _enhance: function() {
                this.label.addClass("ui-btn ui-corner-all"), this.labelIsParent ? this.input.add(this.label).wrapAll(this._wrapper()) : (this.element.wrap(this._wrapper()), this.element.parent().prepend(this.label)), this._setOptions({
                    theme: this.options.theme,
                    iconpos: this.options.iconpos,
                    mini: this.options.mini
                })
            },
            _wrapper: function() {
                return a("<div class='" + (this.options.wrapperClass ? this.options.wrapperClass : "") + " ui-" + this.inputtype + (this.options.disabled ? " ui-state-disabled" : "") + "' ></div>")
            },
            _handleInputFocus: function() {
                this.label.addClass(a.mobile.focusClass)
            },
            _handleInputBlur: function() {
                this.label.removeClass(a.mobile.focusClass)
            },
            _handleInputVClick: function() {
                this.element.prop("checked", this.element.is(":checked")), this._getInputSet().not(this.element).prop("checked", !1), this._updateAll(!0)
            },
            _handleLabelVMouseOver: function(a) {
                this.label.parent().hasClass("ui-state-disabled") && a.stopPropagation()
            },
            _handleLabelVClick: function(a) {
                var b = this.element;
                return b.is(":disabled") ? void a.preventDefault() : (this._cacheVals(), b.prop("checked", "radio" === this.inputtype && !0 || !b.prop("checked")), b.triggerHandler("click"), this._getInputSet().not(b).prop("checked", !1), this._updateAll(), !1)
            },
            _cacheVals: function() {
                this._getInputSet().each(function() {
                    a(this).attr("data-" + a.mobile.ns + "cacheVal", this.checked)
                })
            },
            _getInputSet: function() {
                var b, d, e = this.element[0],
                    f = e.name,
                    g = e.form,
                    h = this.element.parents().last().get(0),
                    i = this.element;
                return f && "radio" === this.inputtype && h && (b = "input[type='radio'][name='" + c(f) + "']", g ? (d = g.getAttribute("id"), d && (i = a(b + "[form='" + c(d) + "']", h)), i = a(g).find(b).filter(function() {
                    return this.form === g
                }).add(i)) : i = a(b, h).filter(function() {
                    return !this.form
                })), i
            },
            _updateAll: function(b) {
                var c = this;
                this._getInputSet().each(function() {
                    var d = a(this);
                    !this.checked && "checkbox" !== c.inputtype || b || d.trigger("change")
                }).checkboxradio("refresh")
            },
            _reset: function() {
                this.refresh()
            },
            _hasIcon: function() {
                var b, c, d = a.mobile.controlgroup;
                return d && (b = this.element.closest(":mobile-controlgroup," + d.prototype.initSelector), b.length > 0) ? (c = a.data(b[0], "mobile-controlgroup"), "horizontal" !== (c ? c.options.type : b.attr("data-" + a.mobile.ns + "type"))) : !0
            },
            refresh: function() {
                var b = this.element[0].checked,
                    c = a.mobile.activeBtnClass,
                    d = "ui-btn-icon-" + this.options.iconpos,
                    e = [],
                    f = [];
                this._hasIcon() ? (f.push(c), e.push(d)) : (f.push(d), (b ? e : f).push(c)), b ? (e.push(this.checkedClass), f.push(this.uncheckedClass)) : (e.push(this.uncheckedClass), f.push(this.checkedClass)), this.widget().toggleClass("ui-state-disabled", this.element.prop("disabled")), this.label.addClass(e.join(" ")).removeClass(f.join(" "))
            },
            widget: function() {
                return this.label.parent()
            },
            _setOptions: function(a) {
                var c = this.label,
                    d = this.options,
                    e = this.widget(),
                    f = this._hasIcon();
                a.disabled !== b && (this.input.prop("disabled", !!a.disabled), e.toggleClass("ui-state-disabled", !!a.disabled)), a.mini !== b && e.toggleClass("ui-mini", !!a.mini), a.theme !== b && c.removeClass("ui-btn-" + d.theme).addClass("ui-btn-" + a.theme), a.wrapperClass !== b && e.removeClass(d.wrapperClass).addClass(a.wrapperClass), a.iconpos !== b && f ? c.removeClass("ui-btn-icon-" + d.iconpos).addClass("ui-btn-icon-" + a.iconpos) : f || c.removeClass("ui-btn-icon-" + d.iconpos), this._super(a)
            }
        }, a.mobile.behaviors.formReset))
    }(a),
    function(a, b) {
        a.widget("mobile.button", {
            initSelector: "input[type='button'], input[type='submit'], input[type='reset']",
            options: {
                theme: null,
                icon: null,
                iconpos: "left",
                iconshadow: !1,
                corners: !0,
                shadow: !0,
                inline: null,
                mini: null,
                wrapperClass: null,
                enhanced: !1
            },
            _create: function() {
                this.element.is(":disabled") && (this.options.disabled = !0), this.options.enhanced || this._enhance(), a.extend(this, {
                    wrapper: this.element.parent()
                }), this._on({
                    focus: function() {
                        this.widget().addClass(a.mobile.focusClass)
                    },
                    blur: function() {
                        this.widget().removeClass(a.mobile.focusClass)
                    }
                }), this.refresh(!0)
            },
            _enhance: function() {
                this.element.wrap(this._button())
            },
            _button: function() {
                var b = this.options,
                    c = this._getIconClasses(this.options);
                return a("<div class='ui-btn ui-input-btn" + (b.wrapperClass ? " " + b.wrapperClass : "") + (b.theme ? " ui-btn-" + b.theme : "") + (b.corners ? " ui-corner-all" : "") + (b.shadow ? " ui-shadow" : "") + (b.inline ? " ui-btn-inline" : "") + (b.mini ? " ui-mini" : "") + (b.disabled ? " ui-state-disabled" : "") + (c ? " " + c : "") + "' >" + this.element.val() + "</div>")
            },
            widget: function() {
                return this.wrapper
            },
            _destroy: function() {
                this.element.insertBefore(this.wrapper), this.wrapper.remove()
            },
            _getIconClasses: function(a) {
                return a.icon ? "ui-icon-" + a.icon + (a.iconshadow ? " ui-shadow-icon" : "") + " ui-btn-icon-" + a.iconpos : ""
            },
            _setOptions: function(c) {
                var d = this.widget();
                c.theme !== b && d.removeClass(this.options.theme).addClass("ui-btn-" + c.theme), c.corners !== b && d.toggleClass("ui-corner-all", c.corners), c.shadow !== b && d.toggleClass("ui-shadow", c.shadow), c.inline !== b && d.toggleClass("ui-btn-inline", c.inline), c.mini !== b && d.toggleClass("ui-mini", c.mini), c.disabled !== b && (this.element.prop("disabled", c.disabled), d.toggleClass("ui-state-disabled", c.disabled)), (c.icon !== b || c.iconshadow !== b || c.iconpos !== b) && d.removeClass(this._getIconClasses(this.options)).addClass(this._getIconClasses(a.extend({}, this.options, c))), this._super(c)
            },
            refresh: function(b) {
                var c, d = this.element.prop("disabled");
                this.options.icon && "notext" === this.options.iconpos && this.element.attr("title") && this.element.attr("title", this.element.val()), b || (c = this.element.detach(), a(this.wrapper).text(this.element.val()).append(c)), this.options.disabled !== d && this._setOptions({
                    disabled: d
                })
            }
        })
    }(a),
    function(a) {
        var b = a("meta[name=viewport]"),
            c = b.attr("content"),
            d = c + ",maximum-scale=1, user-scalable=no",
            e = c + ",maximum-scale=10, user-scalable=yes",
            f = /(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(c);
        a.mobile.zoom = a.extend({}, {
            enabled: !f,
            locked: !1,
            disable: function(c) {
                f || a.mobile.zoom.locked || (b.attr("content", d), a.mobile.zoom.enabled = !1, a.mobile.zoom.locked = c || !1)
            },
            enable: function(c) {
                f || a.mobile.zoom.locked && c !== !0 || (b.attr("content", e), a.mobile.zoom.enabled = !0, a.mobile.zoom.locked = !1)
            },
            restore: function() {
                f || (b.attr("content", c), a.mobile.zoom.enabled = !0)
            }
        })
    }(a),
    function(a, b) {
        a.widget("mobile.textinput", {
            initSelector: "input[type='text'],input[type='search'],:jqmData(type='search'),input[type='number'],:jqmData(type='number'),input[type='password'],input[type='email'],input[type='url'],input[type='tel'],textarea,input[type='time'],input[type='date'],input[type='month'],input[type='week'],input[type='datetime'],input[type='datetime-local'],input[type='color'],input:not([type]),input[type='file']",
            options: {
                theme: null,
                corners: !0,
                mini: !1,
                preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1,
                wrapperClass: "",
                enhanced: !1
            },
            _create: function() {
                var b = this.options,
                    c = this.element.is("[type='search'], :jqmData(type='search')"),
                    d = "TEXTAREA" === this.element[0].tagName,
                    e = this.element.is("[data-" + (a.mobile.ns || "") + "type='range']"),
                    f = (this.element.is("input") || this.element.is("[data-" + (a.mobile.ns || "") + "type='search']")) && !e;
                this.element.prop("disabled") && (b.disabled = !0), a.extend(this, {
                    classes: this._classesFromOptions(),
                    isSearch: c,
                    isTextarea: d,
                    isRange: e,
                    inputNeedsWrap: f
                }), this._autoCorrect(), b.enhanced || this._enhance(), this._on({
                    focus: "_handleFocus",
                    blur: "_handleBlur"
                })
            },
            refresh: function() {
                this.setOptions({
                    disabled: this.element.is(":disabled")
                })
            },
            _enhance: function() {
                var a = [];
                this.isTextarea && a.push("ui-input-text"), (this.isTextarea || this.isRange) && a.push("ui-shadow-inset"), this.inputNeedsWrap ? this.element.wrap(this._wrap()) : a = a.concat(this.classes), this.element.addClass(a.join(" "))
            },
            widget: function() {
                return this.inputNeedsWrap ? this.element.parent() : this.element
            },
            _classesFromOptions: function() {
                var a = this.options,
                    b = [];
                return b.push("ui-body-" + (null === a.theme ? "inherit" : a.theme)), a.corners && b.push("ui-corner-all"), a.mini && b.push("ui-mini"), a.disabled && b.push("ui-state-disabled"), a.wrapperClass && b.push(a.wrapperClass), b
            },
            _wrap: function() {
                return a("<div class='" + (this.isSearch ? "ui-input-search " : "ui-input-text ") + this.classes.join(" ") + " ui-shadow-inset'></div>")
            },
            _autoCorrect: function() {
                "undefined" == typeof this.element[0].autocorrect || a.support.touchOverflow || (this.element[0].setAttribute("autocorrect", "off"), this.element[0].setAttribute("autocomplete", "off"))
            },
            _handleBlur: function() {
                this.widget().removeClass(a.mobile.focusClass), this.options.preventFocusZoom && a.mobile.zoom.enable(!0)
            },
            _handleFocus: function() {
                this.options.preventFocusZoom && a.mobile.zoom.disable(!0), this.widget().addClass(a.mobile.focusClass)
            },
            _setOptions: function(a) {
                var c = this.widget();
                this._super(a), (a.disabled !== b || a.mini !== b || a.corners !== b || a.theme !== b || a.wrapperClass !== b) && (c.removeClass(this.classes.join(" ")), this.classes = this._classesFromOptions(), c.addClass(this.classes.join(" "))), a.disabled !== b && this.element.prop("disabled", !!a.disabled)
            },
            _destroy: function() {
                this.options.enhanced || (this.inputNeedsWrap && this.element.unwrap(), this.element.removeClass("ui-input-text " + this.classes.join(" ")))
            }
        })
    }(a),
    function(a, d) {
        a.widget("mobile.slider", a.extend({
            initSelector: "input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",
            widgetEventPrefix: "slide",
            options: {
                theme: null,
                trackTheme: null,
                corners: !0,
                mini: !1,
                highlight: !1
            },
            _create: function() {
                var e, f, g, h, i, j, k, l, m, n, o = this,
                    p = this.element,
                    q = this.options.trackTheme || a.mobile.getAttribute(p[0], "theme"),
                    r = q ? " ui-bar-" + q : " ui-bar-inherit",
                    s = this.options.corners || p.jqmData("corners") ? " ui-corner-all" : "",
                    t = this.options.mini || p.jqmData("mini") ? " ui-mini" : "",
                    u = p[0].nodeName.toLowerCase(),
                    v = "select" === u,
                    w = p.parent().is(":jqmData(role='rangeslider')"),
                    x = v ? "ui-slider-switch" : "",
                    y = p.attr("id"),
                    z = a("[for='" + y + "']"),
                    A = z.attr("id") || y + "-label",
                    B = v ? 0 : parseFloat(p.attr("min")),
                    C = v ? p.find("option").length - 1 : parseFloat(p.attr("max")),
                    D = b.parseFloat(p.attr("step") || 1),
                    E = c.createElement("a"),
                    F = a(E),
                    G = c.createElement("div"),
                    H = a(G),
                    I = this.options.highlight && !v ? function() {
                        var b = c.createElement("div");
                        return b.className = "ui-slider-bg " + a.mobile.activeBtnClass, a(b).prependTo(H)
                    }() : !1;
                if (z.attr("id", A), this.isToggleSwitch = v, E.setAttribute("href", "#"), G.setAttribute("role", "application"), G.className = [this.isToggleSwitch ? "ui-slider ui-slider-track ui-shadow-inset " : "ui-slider-track ui-shadow-inset ", x, r, s, t].join(""), E.className = "ui-slider-handle", G.appendChild(E), F.attr({
                        role: "slider",
                        "aria-valuemin": B,
                        "aria-valuemax": C,
                        "aria-valuenow": this._value(),
                        "aria-valuetext": this._value(),
                        title: this._value(),
                        "aria-labelledby": A
                    }), a.extend(this, {
                        slider: H,
                        handle: F,
                        control: p,
                        type: u,
                        step: D,
                        max: C,
                        min: B,
                        valuebg: I,
                        isRangeslider: w,
                        dragging: !1,
                        beforeStart: null,
                        userModified: !1,
                        mouseMoved: !1
                    }), v) {
                    for (k = p.attr("tabindex"), k && F.attr("tabindex", k), p.attr("tabindex", "-1").focus(function() {
                            a(this).blur(), F.focus()
                        }), f = c.createElement("div"), f.className = "ui-slider-inneroffset", g = 0, h = G.childNodes.length; h > g; g++) f.appendChild(G.childNodes[g]);
                    for (G.appendChild(f), F.addClass("ui-slider-handle-snapping"), e = p.find("option"), i = 0, j = e.length; j > i; i++) l = i ? "a" : "b", m = i ? " " + a.mobile.activeBtnClass : "", n = c.createElement("span"), n.className = ["ui-slider-label ui-slider-label-", l, m].join(""), n.setAttribute("role", "img"), n.appendChild(c.createTextNode(e[i].innerHTML)), a(n).prependTo(H);
                    o._labels = a(".ui-slider-label", H)
                }
                p.addClass(v ? "ui-slider-switch" : "ui-slider-input"), this._on(p, {
                    change: "_controlChange",
                    keyup: "_controlKeyup",
                    blur: "_controlBlur",
                    vmouseup: "_controlVMouseUp"
                }), H.bind("vmousedown", a.proxy(this._sliderVMouseDown, this)).bind("vclick", !1), this._on(c, {
                    vmousemove: "_preventDocumentDrag"
                }), this._on(H.add(c), {
                    vmouseup: "_sliderVMouseUp"
                }), H.insertAfter(p), v || w || (f = this.options.mini ? "<div class='ui-slider ui-mini'>" : "<div class='ui-slider'>", p.add(H).wrapAll(f)), this._on(this.handle, {
                    vmousedown: "_handleVMouseDown",
                    keydown: "_handleKeydown",
                    keyup: "_handleKeyup"
                }), this.handle.bind("vclick", !1), this._handleFormReset(), this.refresh(d, d, !0)
            },
            _setOptions: function(a) {
                a.theme !== d && this._setTheme(a.theme), a.trackTheme !== d && this._setTrackTheme(a.trackTheme), a.corners !== d && this._setCorners(a.corners), a.mini !== d && this._setMini(a.mini), a.highlight !== d && this._setHighlight(a.highlight), a.disabled !== d && this._setDisabled(a.disabled), this._super(a)
            },
            _controlChange: function(a) {
                return this._trigger("controlchange", a) === !1 ? !1 : void(this.mouseMoved || this.refresh(this._value(), !0))
            },
            _controlKeyup: function() {
                this.refresh(this._value(), !0, !0)
            },
            _controlBlur: function() {
                this.refresh(this._value(), !0)
            },
            _controlVMouseUp: function() {
                this._checkedRefresh()
            },
            _handleVMouseDown: function() {
                this.handle.focus()
            },
            _handleKeydown: function(b) {
                var c = this._value();
                if (!this.options.disabled) {
                    switch (b.keyCode) {
                        case a.mobile.keyCode.HOME:
                        case a.mobile.keyCode.END:
                        case a.mobile.keyCode.PAGE_UP:
                        case a.mobile.keyCode.PAGE_DOWN:
                        case a.mobile.keyCode.UP:
                        case a.mobile.keyCode.RIGHT:
                        case a.mobile.keyCode.DOWN:
                        case a.mobile.keyCode.LEFT:
                            b.preventDefault(), this._keySliding || (this._keySliding = !0, this.handle.addClass("ui-state-active"))
                    }
                    switch (b.keyCode) {
                        case a.mobile.keyCode.HOME:
                            this.refresh(this.min);
                            break;
                        case a.mobile.keyCode.END:
                            this.refresh(this.max);
                            break;
                        case a.mobile.keyCode.PAGE_UP:
                        case a.mobile.keyCode.UP:
                        case a.mobile.keyCode.RIGHT:
                            this.refresh(c + this.step);
                            break;
                        case a.mobile.keyCode.PAGE_DOWN:
                        case a.mobile.keyCode.DOWN:
                        case a.mobile.keyCode.LEFT:
                            this.refresh(c - this.step)
                    }
                }
            },
            _handleKeyup: function() {
                this._keySliding && (this._keySliding = !1, this.handle.removeClass("ui-state-active"))
            },
            _sliderVMouseDown: function(a) {
                return this.options.disabled || 1 !== a.which && 0 !== a.which && a.which !== d ? !1 : this._trigger("beforestart", a) === !1 ? !1 : (this.dragging = !0, this.userModified = !1, this.mouseMoved = !1, this.isToggleSwitch && (this.beforeStart = this.element[0].selectedIndex), this.refresh(a), this._trigger("start"), !1)
            },
            _sliderVMouseUp: function() {
                return this.dragging ? (this.dragging = !1, this.isToggleSwitch && (this.handle.addClass("ui-slider-handle-snapping"), this.refresh(this.mouseMoved ? this.userModified ? 0 === this.beforeStart ? 1 : 0 : this.beforeStart : 0 === this.beforeStart ? 1 : 0)), this.mouseMoved = !1, this._trigger("stop"), !1) : void 0
            },
            _preventDocumentDrag: function(a) {
                return this._trigger("drag", a) === !1 ? !1 : this.dragging && !this.options.disabled ? (this.mouseMoved = !0, this.isToggleSwitch && this.handle.removeClass("ui-slider-handle-snapping"), this.refresh(a), this.userModified = this.beforeStart !== this.element[0].selectedIndex, !1) : void 0
            },
            _checkedRefresh: function() {
                this.value !== this._value() && this.refresh(this._value())
            },
            _value: function() {
                return this.isToggleSwitch ? this.element[0].selectedIndex : parseFloat(this.element.val())
            },
            _reset: function() {
                this.refresh(d, !1, !0)
            },
            refresh: function(b, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z = this,
                    A = a.mobile.getAttribute(this.element[0], "theme"),
                    B = this.options.theme || A,
                    C = B ? " ui-btn-" + B : "",
                    D = this.options.trackTheme || A,
                    E = D ? " ui-bar-" + D : " ui-bar-inherit",
                    F = this.options.corners ? " ui-corner-all" : "",
                    G = this.options.mini ? " ui-mini" : "";
                if (z.slider[0].className = [this.isToggleSwitch ? "ui-slider ui-slider-switch ui-slider-track ui-shadow-inset" : "ui-slider-track ui-shadow-inset", E, F, G].join(""), (this.options.disabled || this.element.prop("disabled")) && this.disable(), this.value = this._value(), this.options.highlight && !this.isToggleSwitch && 0 === this.slider.find(".ui-slider-bg").length && (this.valuebg = function() {
                        var b = c.createElement("div");
                        return b.className = "ui-slider-bg " + a.mobile.activeBtnClass, a(b).prependTo(z.slider)
                    }()), this.handle.addClass("ui-btn" + C + " ui-shadow"), l = this.element, m = !this.isToggleSwitch, n = m ? [] : l.find("option"), o = m ? parseFloat(l.attr("min")) : 0, p = m ? parseFloat(l.attr("max")) : n.length - 1, q = m && parseFloat(l.attr("step")) > 0 ? parseFloat(l.attr("step")) : 1, "object" == typeof b) {
                    if (h = b, i = 8, f = this.slider.offset().left, g = this.slider.width(), j = g / ((p - o) / q), !this.dragging || h.pageX < f - i || h.pageX > f + g + i) return;
                    k = j > 1 ? (h.pageX - f) / g * 100 : Math.round((h.pageX - f) / g * 100)
                } else null == b && (b = m ? parseFloat(l.val() || 0) : l[0].selectedIndex), k = (parseFloat(b) - o) / (p - o) * 100;
                if (!isNaN(k) && (r = k / 100 * (p - o) + o, s = (r - o) % q, t = r - s, 2 * Math.abs(s) >= q && (t += s > 0 ? q : -q), u = 100 / ((p - o) / q), r = parseFloat(t.toFixed(5)), "undefined" == typeof j && (j = g / ((p - o) / q)), j > 1 && m && (k = (r - o) * u * (1 / q)), 0 > k && (k = 0), k > 100 && (k = 100), o > r && (r = o), r > p && (r = p), this.handle.css("left", k + "%"), this.handle[0].setAttribute("aria-valuenow", m ? r : n.eq(r).attr("value")), this.handle[0].setAttribute("aria-valuetext", m ? r : n.eq(r).getEncodedText()), this.handle[0].setAttribute("title", m ? r : n.eq(r).getEncodedText()), this.valuebg && this.valuebg.css("width", k + "%"), this._labels && (v = this.handle.width() / this.slider.width() * 100, w = k && v + (100 - v) * k / 100, x = 100 === k ? 0 : Math.min(v + 100 - w, 100), this._labels.each(function() {
                        var b = a(this).hasClass("ui-slider-label-a");
                        a(this).width((b ? w : x) + "%")
                    })), !e)) {
                    if (y = !1, m ? (y = parseFloat(l.val()) !== r, l.val(r)) : (y = l[0].selectedIndex !== r, l[0].selectedIndex = r), this._trigger("beforechange", b) === !1) return !1;
                    !d && y && l.trigger("change")
                }
            },
            _setHighlight: function(a) {
                a = !!a, a ? (this.options.highlight = !!a, this.refresh()) : this.valuebg && (this.valuebg.remove(), this.valuebg = !1)
            },
            _setTheme: function(a) {
                this.handle.removeClass("ui-btn-" + this.options.theme).addClass("ui-btn-" + a);
                var b = this.options.theme ? this.options.theme : "inherit",
                    c = a ? a : "inherit";
                this.control.removeClass("ui-body-" + b).addClass("ui-body-" + c)
            },
            _setTrackTheme: function(a) {
                var b = this.options.trackTheme ? this.options.trackTheme : "inherit",
                    c = a ? a : "inherit";
                this.slider.removeClass("ui-body-" + b).addClass("ui-body-" + c)
            },
            _setMini: function(a) {
                a = !!a, this.isToggleSwitch || this.isRangeslider || (this.slider.parent().toggleClass("ui-mini", a), this.element.toggleClass("ui-mini", a)), this.slider.toggleClass("ui-mini", a)
            },
            _setCorners: function(a) {
                this.slider.toggleClass("ui-corner-all", a), this.isToggleSwitch || this.control.toggleClass("ui-corner-all", a)
            },
            _setDisabled: function(a) {
                a = !!a, this.element.prop("disabled", a), this.slider.toggleClass("ui-state-disabled", a).attr("aria-disabled", a), this.element.toggleClass("ui-state-disabled", a)
            }
        }, a.mobile.behaviors.formReset))
    }(a),
    function(a) {
        function b() {
            return c || (c = a("<div></div>", {
                "class": "ui-slider-popup ui-shadow ui-corner-all"
            })), c.clone()
        }
        var c;
        a.widget("mobile.slider", a.mobile.slider, {
            options: {
                popupEnabled: !1,
                showValue: !1
            },
            _create: function() {
                this._super(), a.extend(this, {
                    _currentValue: null,
                    _popup: null,
                    _popupVisible: !1
                }), this._setOption("popupEnabled", this.options.popupEnabled), this._on(this.handle, {
                    vmousedown: "_showPopup"
                }), this._on(this.slider.add(this.document), {
                    vmouseup: "_hidePopup"
                }), this._refresh()
            },
            _positionPopup: function() {
                var a = this.handle.offset();
                this._popup.offset({
                    left: a.left + (this.handle.width() - this._popup.width()) / 2,
                    top: a.top - this._popup.outerHeight() - 5
                })
            },
            _setOption: function(a, c) {
                this._super(a, c), "showValue" === a ? this.handle.html(c && !this.options.mini ? this._value() : "") : "popupEnabled" === a && c && !this._popup && (this._popup = b().addClass("ui-body-" + (this.options.theme || "a")).hide().insertBefore(this.element))
            },
            refresh: function() {
                this._super.apply(this, arguments), this._refresh()
            },
            _refresh: function() {
                var a, b = this.options;
                b.popupEnabled && this.handle.removeAttr("title"), a = this._value(), a !== this._currentValue && (this._currentValue = a, b.popupEnabled && this._popup && (this._positionPopup(), this._popup.html(a)), b.showValue && !this.options.mini && this.handle.html(a))
            },
            _showPopup: function() {
                this.options.popupEnabled && !this._popupVisible && (this.handle.html(""), this._popup.show(), this._positionPopup(), this._popupVisible = !0)
            },
            _hidePopup: function() {
                var a = this.options;
                a.popupEnabled && this._popupVisible && (a.showValue && !a.mini && this.handle.html(this._value()), this._popup.hide(), this._popupVisible = !1)
            }
        })
    }(a),
    function(a, b) {
        a.widget("mobile.flipswitch", a.extend({
            options: {
                onText: "On",
                offText: "Off",
                theme: null,
                enhanced: !1,
                wrapperClass: null,
                corners: !0,
                mini: !1
            },
            _create: function() {
                this.options.enhanced ? a.extend(this, {
                    flipswitch: this.element.parent(),
                    on: this.element.find(".ui-flipswitch-on").eq(0),
                    off: this.element.find(".ui-flipswitch-off").eq(0),
                    type: this.element.get(0).tagName
                }) : this._enhance(), this._handleFormReset(), this._originalTabIndex = this.element.attr("tabindex"), null != this._originalTabIndex && this.on.attr("tabindex", this._originalTabIndex), this.element.attr("tabindex", "-1"), this._on({
                    focus: "_handleInputFocus"
                }), this.element.is(":disabled") && this._setOptions({
                    disabled: !0
                }), this._on(this.flipswitch, {
                    click: "_toggle",
                    swipeleft: "_left",
                    swiperight: "_right"
                }), this._on(this.on, {
                    keydown: "_keydown"
                }), this._on({
                    change: "refresh"
                })
            },
            _handleInputFocus: function() {
                this.on.focus()
            },
            widget: function() {
                return this.flipswitch
            },
            _left: function() {
                this.flipswitch.removeClass("ui-flipswitch-active"), "SELECT" === this.type ? this.element.get(0).selectedIndex = 0 : this.element.prop("checked", !1), this.element.trigger("change")
            },
            _right: function() {
                this.flipswitch.addClass("ui-flipswitch-active"), "SELECT" === this.type ? this.element.get(0).selectedIndex = 1 : this.element.prop("checked", !0), this.element.trigger("change")
            },
            _enhance: function() {
                var b = a("<div>"),
                    c = this.options,
                    d = this.element,
                    e = c.theme ? c.theme : "inherit",
                    f = a("<a></a>", {
                        href: "#"
                    }),
                    g = a("<span></span>"),
                    h = d.get(0).tagName,
                    i = "INPUT" === h ? c.onText : d.find("option").eq(1).text(),
                    j = "INPUT" === h ? c.offText : d.find("option").eq(0).text();
                f.addClass("ui-flipswitch-on ui-btn ui-shadow ui-btn-inherit").text(i), g.addClass("ui-flipswitch-off").text(j), b.addClass("ui-flipswitch ui-shadow-inset ui-bar-" + e + " " + (c.wrapperClass ? c.wrapperClass : "") + " " + (d.is(":checked") || d.find("option").eq(1).is(":selected") ? "ui-flipswitch-active" : "") + (d.is(":disabled") ? " ui-state-disabled" : "") + (c.corners ? " ui-corner-all" : "") + (c.mini ? " ui-mini" : "")).append(f, g), d.addClass("ui-flipswitch-input").after(b).appendTo(b), a.extend(this, {
                    flipswitch: b,
                    on: f,
                    off: g,
                    type: h
                })
            },
            _reset: function() {
                this.refresh()
            },
            refresh: function() {
                var a, b = this.flipswitch.hasClass("ui-flipswitch-active") ? "_right" : "_left";
                a = "SELECT" === this.type ? this.element.get(0).selectedIndex > 0 ? "_right" : "_left" : this.element.prop("checked") ? "_right" : "_left", a !== b && this[a]()
            },
            _toggle: function() {
                var a = this.flipswitch.hasClass("ui-flipswitch-active") ? "_left" : "_right";
                this[a]()
            },
            _keydown: function(b) {
                b.which === a.mobile.keyCode.LEFT ? this._left() : b.which === a.mobile.keyCode.RIGHT ? this._right() : b.which === a.mobile.keyCode.SPACE && (this._toggle(), b.preventDefault())
            },
            _setOptions: function(a) {
                if (a.theme !== b) {
                    var c = a.theme ? a.theme : "inherit",
                        d = a.theme ? a.theme : "inherit";
                    this.widget().removeClass("ui-bar-" + c).addClass("ui-bar-" + d)
                }
                a.onText !== b && this.on.text(a.onText), a.offText !== b && this.off.text(a.offText), a.disabled !== b && this.widget().toggleClass("ui-state-disabled", a.disabled), a.mini !== b && this.widget().toggleClass("ui-mini", a.mini), a.corners !== b && this.widget().toggleClass("ui-corner-all", a.corners), this._super(a)
            },
            _destroy: function() {
                this.options.enhanced || (null != this._originalTabIndex ? this.element.attr("tabindex", this._originalTabIndex) : this.element.removeAttr("tabindex"), this.on.remove(), this.off.remove(), this.element.unwrap(), this.flipswitch.remove(), this.removeClass("ui-flipswitch-input"))
            }
        }, a.mobile.behaviors.formReset))
    }(a),
    function(a, b) {
        a.widget("mobile.rangeslider", a.extend({
            options: {
                theme: null,
                trackTheme: null,
                corners: !0,
                mini: !1,
                highlight: !0
            },
            _create: function() {
                var b = this.element,
                    c = this.options.mini ? "ui-rangeslider ui-mini" : "ui-rangeslider",
                    d = b.find("input").first(),
                    e = b.find("input").last(),
                    f = b.find("label").first(),
                    g = a.data(d.get(0), "mobile-slider") || a.data(d.slider().get(0), "mobile-slider"),
                    h = a.data(e.get(0), "mobile-slider") || a.data(e.slider().get(0), "mobile-slider"),
                    i = g.slider,
                    j = h.slider,
                    k = g.handle,
                    l = a("<div class='ui-rangeslider-sliders' />").appendTo(b);
                d.addClass("ui-rangeslider-first"), e.addClass("ui-rangeslider-last"), b.addClass(c), i.appendTo(l), j.appendTo(l), f.insertBefore(b), k.prependTo(j), a.extend(this, {
                    _inputFirst: d,
                    _inputLast: e,
                    _sliderFirst: i,
                    _sliderLast: j,
                    _label: f,
                    _targetVal: null,
                    _sliderTarget: !1,
                    _sliders: l,
                    _proxy: !1
                }), this.refresh(), this._on(this.element.find("input.ui-slider-input"), {
                    slidebeforestart: "_slidebeforestart",
                    slidestop: "_slidestop",
                    slidedrag: "_slidedrag",
                    slidebeforechange: "_change",
                    blur: "_change",
                    keyup: "_change"
                }), this._on({
                    mousedown: "_change"
                }), this._on(this.element.closest("form"), {
                    reset: "_handleReset"
                }), this._on(k, {
                    vmousedown: "_dragFirstHandle"
                })
            },
            _handleReset: function() {
                var a = this;
                setTimeout(function() {
                    a._updateHighlight()
                }, 0)
            },
            _dragFirstHandle: function(b) {
                return a.data(this._inputFirst.get(0), "mobile-slider").dragging = !0, a.data(this._inputFirst.get(0), "mobile-slider").refresh(b), a.data(this._inputFirst.get(0), "mobile-slider")._trigger("start"), !1
            },
            _slidedrag: function(b) {
                var c = a(b.target).is(this._inputFirst),
                    d = c ? this._inputLast : this._inputFirst;
                return this._sliderTarget = !1, "first" === this._proxy && c || "last" === this._proxy && !c ? (a.data(d.get(0), "mobile-slider").dragging = !0, a.data(d.get(0), "mobile-slider").refresh(b), !1) : void 0
            },
            _slidestop: function(b) {
                var c = a(b.target).is(this._inputFirst);
                this._proxy = !1, this.element.find("input").trigger("vmouseup"), this._sliderFirst.css("z-index", c ? 1 : "")
            },
            _slidebeforestart: function(b) {
                this._sliderTarget = !1, a(b.originalEvent.target).hasClass("ui-slider-track") && (this._sliderTarget = !0, this._targetVal = a(b.target).val())
            },
            _setOptions: function(a) {
                a.theme !== b && this._setTheme(a.theme), a.trackTheme !== b && this._setTrackTheme(a.trackTheme), a.mini !== b && this._setMini(a.mini), a.highlight !== b && this._setHighlight(a.highlight), a.disabled !== b && this._setDisabled(a.disabled), this._super(a), this.refresh()
            },
            refresh: function() {
                var a = this.element,
                    b = this.options;
                (this._inputFirst.is(":disabled") || this._inputLast.is(":disabled")) && (this.options.disabled = !0), a.find("input").slider({
                    theme: b.theme,
                    trackTheme: b.trackTheme,
                    disabled: b.disabled,
                    corners: b.corners,
                    mini: b.mini,
                    highlight: b.highlight
                }).slider("refresh"), this._updateHighlight()
            },
            _change: function(b) {
                if ("keyup" === b.type) return this._updateHighlight(), !1;
                var c = this,
                    d = parseFloat(this._inputFirst.val(), 10),
                    e = parseFloat(this._inputLast.val(), 10),
                    f = a(b.target).hasClass("ui-rangeslider-first"),
                    g = f ? this._inputFirst : this._inputLast,
                    h = f ? this._inputLast : this._inputFirst;
                if (this._inputFirst.val() > this._inputLast.val() && "mousedown" === b.type && !a(b.target).hasClass("ui-slider-handle")) g.blur();
                else if ("mousedown" === b.type) return;
                return d > e && !this._sliderTarget ? (g.val(f ? e : d).slider("refresh"), this._trigger("normalize")) : d > e && (g.val(this._targetVal).slider("refresh"), setTimeout(function() {
                    h.val(f ? d : e).slider("refresh"), a.data(h.get(0), "mobile-slider").handle.focus(), c._sliderFirst.css("z-index", f ? "" : 1), c._trigger("normalize")
                }, 0), this._proxy = f ? "first" : "last"), d === e ? (a.data(g.get(0), "mobile-slider").handle.css("z-index", 1), a.data(h.get(0), "mobile-slider").handle.css("z-index", 0)) : (a.data(h.get(0), "mobile-slider").handle.css("z-index", ""), a.data(g.get(0), "mobile-slider").handle.css("z-index", "")), this._updateHighlight(), d >= e ? !1 : void 0
            },
            _updateHighlight: function() {
                var b = parseInt(a.data(this._inputFirst.get(0), "mobile-slider").handle.get(0).style.left, 10),
                    c = parseInt(a.data(this._inputLast.get(0), "mobile-slider").handle.get(0).style.left, 10),
                    d = c - b;
                this.element.find(".ui-slider-bg").css({
                    "margin-left": b + "%",
                    width: d + "%"
                })
            },
            _setTheme: function(a) {
                this._inputFirst.slider("option", "theme", a), this._inputLast.slider("option", "theme", a)
            },
            _setTrackTheme: function(a) {
                this._inputFirst.slider("option", "trackTheme", a), this._inputLast.slider("option", "trackTheme", a)
            },
            _setMini: function(a) {
                this._inputFirst.slider("option", "mini", a), this._inputLast.slider("option", "mini", a), this.element.toggleClass("ui-mini", !!a)
            },
            _setHighlight: function(a) {
                this._inputFirst.slider("option", "highlight", a), this._inputLast.slider("option", "highlight", a)
            },
            _setDisabled: function(a) {
                this._inputFirst.prop("disabled", a), this._inputLast.prop("disabled", a)
            },
            _destroy: function() {
                this._label.prependTo(this.element), this.element.removeClass("ui-rangeslider ui-mini"), this._inputFirst.after(this._sliderFirst), this._inputLast.after(this._sliderLast), this._sliders.remove(), this.element.find("input").removeClass("ui-rangeslider-first ui-rangeslider-last").slider("destroy")
            }
        }, a.mobile.behaviors.formReset))
    }(a),
    function(a, b) {
        a.widget("mobile.textinput", a.mobile.textinput, {
            options: {
                clearBtn: !1,
                clearBtnText: "Clear text"
            },
            _create: function() {
                this._super(), this.isSearch && (this.options.clearBtn = !0), this.options.clearBtn && this.inputNeedsWrap && this._addClearBtn()
            },
            clearButton: function() {
                return a("<a href='#' tabindex='-1' aria-hidden='true' class='ui-input-clear ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all'></a>").attr("title", this.options.clearBtnText).text(this.options.clearBtnText)
            },
            _clearBtnClick: function(a) {
                this.element.val("").focus().trigger("change"), this._clearBtn.addClass("ui-input-clear-hidden"), a.preventDefault()
            },
            _addClearBtn: function() {
                this.options.enhanced || this._enhanceClear(), a.extend(this, {
                    _clearBtn: this.widget().find("a.ui-input-clear")
                }), this._bindClearEvents(), this._toggleClear()
            },
            _enhanceClear: function() {
                this.clearButton().appendTo(this.widget()), this.widget().addClass("ui-input-has-clear")
            },
            _bindClearEvents: function() {
                this._on(this._clearBtn, {
                    click: "_clearBtnClick"
                }), this._on({
                    keyup: "_toggleClear",
                    change: "_toggleClear",
                    input: "_toggleClear",
                    focus: "_toggleClear",
                    blur: "_toggleClear",
                    cut: "_toggleClear",
                    paste: "_toggleClear"
                })
            },
            _unbindClear: function() {
                this._off(this._clearBtn, "click"), this._off(this.element, "keyup change input focus blur cut paste")
            },
            _setOptions: function(a) {
                this._super(a), a.clearBtn === b || this.element.is("textarea, :jqmData(type='range')") || (a.clearBtn ? this._addClearBtn() : this._destroyClear()), a.clearBtnText !== b && this._clearBtn !== b && this._clearBtn.text(a.clearBtnText).attr("title", a.clearBtnText)
            },
            _toggleClear: function() {
                this._delay("_toggleClearClass", 0)
            },
            _toggleClearClass: function() {
                this._clearBtn.toggleClass("ui-input-clear-hidden", !this.element.val())
            },
            _destroyClear: function() {
                this.widget().removeClass("ui-input-has-clear"), this._unbindClear(), this._clearBtn.remove()
            },
            _destroy: function() {
                this._super(), this.options.clearBtn && this._destroyClear()
            }
        })
    }(a),
    function(a, b) {
        a.widget("mobile.textinput", a.mobile.textinput, {
            options: {
                autogrow: !0,
                keyupTimeoutBuffer: 100
            },
            _create: function() {
                this._super(), this.options.autogrow && this.isTextarea && this._autogrow()
            },
            _autogrow: function() {
                this.element.addClass("ui-textinput-autogrow"), this._on({
                    keyup: "_timeout",
                    change: "_timeout",
                    input: "_timeout",
                    paste: "_timeout"
                }), this._on(!0, this.document, {
                    pageshow: "_handleShow",
                    popupbeforeposition: "_handleShow",
                    updatelayout: "_handleShow",
                    panelopen: "_handleShow"
                })
            },
            _handleShow: function(b) {
                a.contains(b.target, this.element[0]) && this.element.is(":visible") && ("popupbeforeposition" !== b.type && this.element.addClass("ui-textinput-autogrow-resize").animationComplete(a.proxy(function() {
                    this.element.removeClass("ui-textinput-autogrow-resize")
                }, this), "transition"), this._prepareHeightUpdate())
            },
            _unbindAutogrow: function() {
                this.element.removeClass("ui-textinput-autogrow"), this._off(this.element, "keyup change input paste"), this._off(this.document, "pageshow popupbeforeposition updatelayout panelopen")
            },
            keyupTimeout: null,
            _prepareHeightUpdate: function(a) {
                this.keyupTimeout && clearTimeout(this.keyupTimeout), a === b ? this._updateHeight() : this.keyupTimeout = this._delay("_updateHeight", a)
            },
            _timeout: function() {
                this._prepareHeightUpdate(this.options.keyupTimeoutBuffer)
            },
            _updateHeight: function() {
                var a, b, c, d, e, f, g, h, i, j = this.window.scrollTop();
                this.keyupTimeout = 0, "onpage" in this.element[0] || this.element.css({
                    height: 0,
                    "min-height": 0,
                    "max-height": 0
                }), d = this.element[0].scrollHeight, e = this.element[0].clientHeight, f = parseFloat(this.element.css("border-top-width")), g = parseFloat(this.element.css("border-bottom-width")), h = f + g, i = d + h + 15, 0 === e && (a = parseFloat(this.element.css("padding-top")), b = parseFloat(this.element.css("padding-bottom")), c = a + b, i += c), this.element.css({
                    height: i,
                    "min-height": "",
                    "max-height": ""
                }), this.window.scrollTop(j)
            },
            refresh: function() {
                this.options.autogrow && this.isTextarea && this._updateHeight()
            },
            _setOptions: function(a) {
                this._super(a), a.autogrow !== b && this.isTextarea && (a.autogrow ? this._autogrow() : this._unbindAutogrow())
            }
        })
    }(a),
    function(a) {
        a.widget("mobile.selectmenu", a.extend({
            initSelector: "select:not( :jqmData(role='slider')):not( :jqmData(role='flipswitch') )",
            options: {
                theme: null,
                icon: "carat-d",
                iconpos: "right",
                inline: !1,
                corners: !0,
                shadow: !0,
                iconshadow: !1,
                overlayTheme: null,
                dividerTheme: null,
                hidePlaceholderMenuItems: !0,
                closeText: "Close",
                nativeMenu: !0,
                preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1,
                mini: !1
            },
            _button: function() {
                return a("<div/>")
            },
            _setDisabled: function(a) {
                return this.element.attr("disabled", a), this.button.attr("aria-disabled", a), this._setOption("disabled", a)
            },
            _focusButton: function() {
                var a = this;
                setTimeout(function() {
                    a.button.focus()
                }, 40)
            },
            _selectOptions: function() {
                return this.select.find("option")
            },
            _preExtension: function() {
                var b = this.options.inline || this.element.jqmData("inline"),
                    c = this.options.mini || this.element.jqmData("mini"),
                    d = "";
                ~this.element[0].className.indexOf("ui-btn-left") && (d = " ui-btn-left"), ~this.element[0].className.indexOf("ui-btn-right") && (d = " ui-btn-right"), b && (d += " ui-btn-inline"), c && (d += " ui-mini"), this.select = this.element.removeClass("ui-btn-left ui-btn-right").wrap("<div class='ui-select" + d + "'>"), this.selectId = this.select.attr("id") || "select-" + this.uuid, this.buttonId = this.selectId + "-button", this.label = a("label[for='" + this.selectId + "']"), this.isMultiple = this.select[0].multiple
            },
            _destroy: function() {
                var a = this.element.parents(".ui-select");
                a.length > 0 && (a.is(".ui-btn-left, .ui-btn-right") && this.element.addClass(a.hasClass("ui-btn-left") ? "ui-btn-left" : "ui-btn-right"), this.element.insertAfter(a), a.remove())
            },
            _create: function() {
                this._preExtension(), this.button = this._button();
                var c = this,
                    d = this.options,
                    e = d.icon ? d.iconpos || this.select.jqmData("iconpos") : !1,
                    f = this.button.insertBefore(this.select).attr("id", this.buttonId).addClass("ui-btn" + (d.icon ? " ui-icon-" + d.icon + " ui-btn-icon-" + e + (d.iconshadow ? " ui-shadow-icon" : "") : "") + (d.theme ? " ui-btn-" + d.theme : "") + (d.corners ? " ui-corner-all" : "") + (d.shadow ? " ui-shadow" : ""));
                this.setButtonText(), d.nativeMenu && b.opera && b.opera.version && f.addClass("ui-select-nativeonly"), this.isMultiple && (this.buttonCount = a("<span>").addClass("ui-li-count ui-body-inherit").hide().appendTo(f.addClass("ui-li-has-count"))), (d.disabled || this.element.attr("disabled")) && this.disable(), this.select.change(function() {
                    c.refresh(), d.nativeMenu && c._delay(function() {
                        c.select.blur()
                    })
                }), this._handleFormReset(), this._on(this.button, {
                    keydown: "_handleKeydown"
                }), this.build()
            },
            build: function() {
                var b = this;
                this.select.appendTo(b.button).bind("vmousedown", function() {
                    b.button.addClass(a.mobile.activeBtnClass)
                }).bind("focus", function() {
                    b.button.addClass(a.mobile.focusClass)
                }).bind("blur", function() {
                    b.button.removeClass(a.mobile.focusClass)
                }).bind("focus vmouseover", function() {
                    b.button.trigger("vmouseover")
                }).bind("vmousemove", function() {
                    b.button.removeClass(a.mobile.activeBtnClass)
                }).bind("change blur vmouseout", function() {
                    b.button.trigger("vmouseout").removeClass(a.mobile.activeBtnClass)
                }), b.button.bind("vmousedown", function() {
                    b.options.preventFocusZoom && a.mobile.zoom.disable(!0)
                }), b.label.bind("click focus", function() {
                    b.options.preventFocusZoom && a.mobile.zoom.disable(!0)
                }), b.select.bind("focus", function() {
                    b.options.preventFocusZoom && a.mobile.zoom.disable(!0)
                }), b.button.bind("mouseup", function() {
                    b.options.preventFocusZoom && setTimeout(function() {
                        a.mobile.zoom.enable(!0)
                    }, 0)
                }), b.select.bind("blur", function() {
                    b.options.preventFocusZoom && a.mobile.zoom.enable(!0)
                })
            },
            selected: function() {
                return this._selectOptions().filter(":selected")
            },
            selectedIndices: function() {
                var a = this;
                return this.selected().map(function() {
                    return a._selectOptions().index(this)
                }).get()
            },
            setButtonText: function() {
                var b = this,
                    d = this.selected(),
                    e = this.placeholder,
                    f = a(c.createElement("span"));
                this.button.children("span").not(".ui-li-count").remove().end().end().prepend(function() {
                    return e = d.length ? d.map(function() {
                        return a(this).text()
                    }).get().join(", ") : b.placeholder, e ? f.text(e) : f.html("&#160;"), f.addClass(b.select.attr("class")).addClass(d.attr("class")).removeClass("ui-screen-hidden")
                }())
            },
            setButtonCount: function() {
                var a = this.selected();
                this.isMultiple && this.buttonCount[a.length > 1 ? "show" : "hide"]().text(a.length)
            },
            _handleKeydown: function() {
                this._delay("_refreshButton")
            },
            _reset: function() {
                this.refresh()
            },
            _refreshButton: function() {
                this.setButtonText(), this.setButtonCount()
            },
            refresh: function() {
                this._refreshButton()
            },
            open: a.noop,
            close: a.noop,
            disable: function() {
                this._setDisabled(!0), this.button.addClass("ui-state-disabled")
            },
            enable: function() {
                this._setDisabled(!1), this.button.removeClass("ui-state-disabled")
            }
        }, a.mobile.behaviors.formReset))
    }(a),
    function(a) {
        a.mobile.links = function(b) {
            a(b).find("a").jqmEnhanceable().filter(":jqmData(rel='popup')[href][href!='']").each(function() {
                var a = this,
                    b = a.getAttribute("href").substring(1);
                b && (a.setAttribute("aria-haspopup", !0), a.setAttribute("aria-owns", b), a.setAttribute("aria-expanded", !1))
            }).end().not(".ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link")
        }
    }(a),
    function(a, c) {
        function d(a, b, c, d) {
            var e = d;
            return e = b > a ? c + (a - b) / 2 : Math.min(Math.max(c, d - b / 2), c + a - b)
        }

        function e(a) {
            return {
                x: a.scrollLeft(),
                y: a.scrollTop(),
                cx: a[0].innerWidth || a.width(),
                cy: a[0].innerHeight || a.height()
            }
        }
        a.widget("mobile.popup", {
            options: {
                wrapperClass: null,
                theme: null,
                overlayTheme: null,
                shadow: !0,
                corners: !0,
                transition: "none",
                positionTo: "origin",
                tolerance: null,
                closeLinkSelector: "a:jqmData(rel='back')",
                closeLinkEvents: "click.popup",
                navigateEvents: "navigate.popup",
                closeEvents: "navigate.popup pagebeforechange.popup",
                dismissible: !0,
                enhanced: !1,
                history: !a.mobile.browser.oldIE
            },
            _handleDocumentVmousedown: function(b) {
                this._isOpen && a.contains(this._ui.container[0], b.target) && this._ignoreResizeEvents()
            },
            _create: function() {
                var b = this.element,
                    c = b.attr("id"),
                    d = this.options;
                d.history = d.history && a.mobile.ajaxEnabled && a.mobile.hashListeningEnabled, this._on(this.document, {
                    vmousedown: "_handleDocumentVmousedown"
                }), a.extend(this, {
                    _scrollTop: 0,
                    _page: b.closest(".ui-page"),
                    _ui: null,
                    _fallbackTransition: "",
                    _currentTransition: !1,
                    _prerequisites: null,
                    _isOpen: !1,
                    _tolerance: null,
                    _resizeData: null,
                    _ignoreResizeTo: 0,
                    _orientationchangeInProgress: !1
                }), 0 === this._page.length && (this._page = a("body")), d.enhanced ? this._ui = {
                    container: b.parent(),
                    screen: b.parent().prev(),
                    placeholder: a(this.document[0].getElementById(c + "-placeholder"))
                } : (this._ui = this._enhance(b, c), this._applyTransition(d.transition)), this._setTolerance(d.tolerance)._ui.focusElement = this._ui.container, this._on(this._ui.screen, {
                    vclick: "_eatEventAndClose"
                }), this._on(this.window, {
                    orientationchange: a.proxy(this, "_handleWindowOrientationchange"),
                    resize: a.proxy(this, "_handleWindowResize"),
                    keyup: a.proxy(this, "_handleWindowKeyUp")
                }), this._on(this.document, {
                    focusin: "_handleDocumentFocusIn"
                })
            },
            _enhance: function(b, c) {
                var d = this.options,
                    e = d.wrapperClass,
                    f = {
                        screen: a("<div class='ui-screen-hidden ui-popup-screen " + this._themeClassFromOption("ui-overlay-", d.overlayTheme) + "'></div>"),
                        placeholder: a("<div style='display: none;'><!-- placeholder --></div>"),
                        container: a("<div class='ui-popup-container ui-popup-hidden ui-popup-truncate" + (e ? " " + e : "") + "'></div>")
                    },
                    g = this.document[0].createDocumentFragment();
                return g.appendChild(f.screen[0]), g.appendChild(f.container[0]), c && (f.screen.attr("id", c + "-screen"), f.container.attr("id", c + "-popup"), f.placeholder.attr("id", c + "-placeholder").html("<!-- placeholder for " + c + " -->")), this._page[0].appendChild(g), f.placeholder.insertAfter(b), b.detach().addClass("ui-popup " + this._themeClassFromOption("ui-body-", d.theme) + " " + (d.shadow ? "ui-overlay-shadow " : "") + (d.corners ? "ui-corner-all " : "")).appendTo(f.container), f
            },
            _eatEventAndClose: function(a) {
                return a.preventDefault(), a.stopImmediatePropagation(), this.options.dismissible && this.close(), !1
            },
            _resizeScreen: function() {
                var a = this._ui.screen,
                    b = this._ui.container.outerHeight(!0),
                    c = a.removeAttr("style").height(),
                    d = this.document.height() - 1;
                d > c ? a.height(d) : b > c && a.height(b)
            },
            _handleWindowKeyUp: function(b) {
                return this._isOpen && b.keyCode === a.mobile.keyCode.ESCAPE ? this._eatEventAndClose(b) : void 0
            },
            _expectResizeEvent: function() {
                var a = e(this.window);
                if (this._resizeData) {
                    if (a.x === this._resizeData.windowCoordinates.x && a.y === this._resizeData.windowCoordinates.y && a.cx === this._resizeData.windowCoordinates.cx && a.cy === this._resizeData.windowCoordinates.cy) return !1;
                    clearTimeout(this._resizeData.timeoutId)
                }
                return this._resizeData = {
                    timeoutId: this._delay("_resizeTimeout", 200),
                    windowCoordinates: a
                }, !0
            },
            _resizeTimeout: function() {
                this._isOpen ? this._expectResizeEvent() || (this._ui.container.hasClass("ui-popup-hidden") && (this._ui.container.removeClass("ui-popup-hidden ui-popup-truncate"), this.reposition({
                    positionTo: "window"
                }), this._ignoreResizeEvents()), this._resizeScreen(), this._resizeData = null, this._orientationchangeInProgress = !1) : (this._resizeData = null, this._orientationchangeInProgress = !1)
            },
            _stopIgnoringResizeEvents: function() {
                this._ignoreResizeTo = 0
            },
            _ignoreResizeEvents: function() {
                this._ignoreResizeTo && clearTimeout(this._ignoreResizeTo), this._ignoreResizeTo = this._delay("_stopIgnoringResizeEvents", 1e3)
            },
            _handleWindowResize: function() {
                this._isOpen && 0 === this._ignoreResizeTo && (!this._expectResizeEvent() && !this._orientationchangeInProgress || this._ui.container.hasClass("ui-popup-hidden") || this._ui.container.addClass("ui-popup-hidden ui-popup-truncate").removeAttr("style"))
            },
            _handleWindowOrientationchange: function() {
                !this._orientationchangeInProgress && this._isOpen && 0 === this._ignoreResizeTo && (this._expectResizeEvent(), this._orientationchangeInProgress = !0)
            },
            _handleDocumentFocusIn: function(b) {
                var c, d = b.target,
                    e = this._ui;
                if (this._isOpen) {
                    if (d !== e.container[0]) {
                        if (c = a(d), !a.contains(e.container[0], d)) return a(this.document[0].activeElement).one("focus", a.proxy(function() {
                            this._safelyBlur(d)
                        }, this)), e.focusElement.focus(), b.preventDefault(), b.stopImmediatePropagation(), !1;
                        e.focusElement[0] === e.container[0] && (e.focusElement = c)
                    }
                    this._ignoreResizeEvents()
                }
            },
            _themeClassFromOption: function(a, b) {
                return b ? "none" === b ? "" : a + b : a + "inherit"
            },
            _applyTransition: function(b) {
                return b && (this._ui.container.removeClass(this._fallbackTransition), "none" !== b && (this._fallbackTransition = a.mobile._maybeDegradeTransition(b), "none" === this._fallbackTransition && (this._fallbackTransition = ""), this._ui.container.addClass(this._fallbackTransition))), this
            },
            _setOptions: function(a) {
                var b = this.options,
                    d = this.element,
                    e = this._ui.screen;
                return a.wrapperClass !== c && this._ui.container.removeClass(b.wrapperClass).addClass(a.wrapperClass), a.theme !== c && d.removeClass(this._themeClassFromOption("ui-body-", b.theme)).addClass(this._themeClassFromOption("ui-body-", a.theme)), a.overlayTheme !== c && (e.removeClass(this._themeClassFromOption("ui-overlay-", b.overlayTheme)).addClass(this._themeClassFromOption("ui-overlay-", a.overlayTheme)), this._isOpen && e.addClass("in")), a.shadow !== c && d.toggleClass("ui-overlay-shadow", a.shadow), a.corners !== c && d.toggleClass("ui-corner-all", a.corners), a.transition !== c && (this._currentTransition || this._applyTransition(a.transition)), a.tolerance !== c && this._setTolerance(a.tolerance), a.disabled !== c && a.disabled && this.close(), this._super(a)
            },
            _setTolerance: function(b) {
                var d, e = {
                    t: 30,
                    r: 15,
                    b: 30,
                    l: 15
                };
                if (b !== c) switch (d = String(b).split(","), a.each(d, function(a, b) {
                    d[a] = parseInt(b, 10)
                }), d.length) {
                    case 1:
                        isNaN(d[0]) || (e.t = e.r = e.b = e.l = d[0]);
                        break;
                    case 2:
                        isNaN(d[0]) || (e.t = e.b = d[0]), isNaN(d[1]) || (e.l = e.r = d[1]);
                        break;
                    case 4:
                        isNaN(d[0]) || (e.t = d[0]), isNaN(d[1]) || (e.r = d[1]), isNaN(d[2]) || (e.b = d[2]), isNaN(d[3]) || (e.l = d[3])
                }
                return this._tolerance = e, this
            },
            _clampPopupWidth: function(a) {
                var b, c = e(this.window),
                    d = {
                        x: this._tolerance.l,
                        y: c.y + this._tolerance.t,
                        cx: c.cx - this._tolerance.l - this._tolerance.r,
                        cy: c.cy - this._tolerance.t - this._tolerance.b
                    };
                return a || this._ui.container.css("max-width", d.cx), b = {
                    cx: this._ui.container.outerWidth(!0),
                    cy: this._ui.container.outerHeight(!0)
                }, {
                    rc: d,
                    menuSize: b
                }
            },
            _calculateFinalLocation: function(a, b) {
                var c, e = b.rc,
                    f = b.menuSize;
                return c = {
                    left: d(e.cx, f.cx, e.x, a.x),
                    top: d(e.cy, f.cy, e.y, a.y)
                }, c.top = Math.max(0, c.top), c.top -= Math.min(c.top, Math.max(0, c.top + f.cy - this.document.height())), c
            },
            _placementCoords: function(a) {
                return this._calculateFinalLocation(a, this._clampPopupWidth())
            },
            _createPrerequisites: function(b, c, d) {
                var e, f = this;
                e = {
                    screen: a.Deferred(),
                    container: a.Deferred()
                }, e.screen.then(function() {
                    e === f._prerequisites && b()
                }), e.container.then(function() {
                    e === f._prerequisites && c()
                }), a.when(e.screen, e.container).done(function() {
                    e === f._prerequisites && (f._prerequisites = null, d())
                }), f._prerequisites = e
            },
            _animate: function(b) {
                return this._ui.screen.removeClass(b.classToRemove).addClass(b.screenClassToAdd), b.prerequisites.screen.resolve(), b.transition && "none" !== b.transition && (b.applyTransition && this._applyTransition(b.transition), this._fallbackTransition) ? void this._ui.container.addClass(b.containerClassToAdd).removeClass(b.classToRemove).animationComplete(a.proxy(b.prerequisites.container, "resolve")) : (this._ui.container.removeClass(b.classToRemove), void b.prerequisites.container.resolve())
            },
            _desiredCoords: function(b) {
                var c, d = null,
                    f = e(this.window),
                    g = b.x,
                    h = b.y,
                    i = b.positionTo;
                if (i && "origin" !== i)
                    if ("window" === i) g = f.cx / 2 + f.x, h = f.cy / 2 + f.y;
                    else {
                        try {
                            d = a(i)
                        } catch (j) {
                            d = null
                        }
                        d && (d.filter(":visible"), 0 === d.length && (d = null))
                    }
                return d && (c = d.offset(), g = c.left + d.outerWidth() / 2, h = c.top + d.outerHeight() / 2), ("number" !== a.type(g) || isNaN(g)) && (g = f.cx / 2 + f.x), ("number" !== a.type(h) || isNaN(h)) && (h = f.cy / 2 + f.y), {
                    x: g,
                    y: h
                }
            },
            _reposition: function(a) {
                a = {
                    x: a.x,
                    y: a.y,
                    positionTo: a.positionTo
                }, this._trigger("beforeposition", c, a), this._ui.container.offset(this._placementCoords(this._desiredCoords(a)))
            },
            reposition: function(a) {
                this._isOpen && this._reposition(a)
            },
            _safelyBlur: function(b) {
                b !== this.window[0] && "body" !== b.nodeName.toLowerCase() && a(b).blur()
            },
            _openPrerequisitesComplete: function() {
                var b = this.element.attr("id"),
                    c = this._ui.container.find(":focusable").first();
                this._ui.container.addClass("ui-popup-active"), this._isOpen = !0, this._resizeScreen(), a.contains(this._ui.container[0], this.document[0].activeElement) || this._safelyBlur(this.document[0].activeElement), c.length > 0 && (this._ui.focusElement = c), this._ignoreResizeEvents(), b && this.document.find("[aria-haspopup='true'][aria-owns='" + b + "']").attr("aria-expanded", !0), this._trigger("afteropen")
            },
            _open: function(b) {
                var c = a.extend({}, this.options, b),
                    d = function() {
                        var a = navigator.userAgent,
                            b = a.match(/AppleWebKit\/([0-9\.]+)/),
                            c = !!b && b[1],
                            d = a.match(/Android (\d+(?:\.\d+))/),
                            e = !!d && d[1],
                            f = a.indexOf("Chrome") > -1;
                        return null !== d && "4.0" === e && c && c > 534.13 && !f ? !0 : !1
                    }();
                this._createPrerequisites(a.noop, a.noop, a.proxy(this, "_openPrerequisitesComplete")), this._currentTransition = c.transition, this._applyTransition(c.transition), this._ui.screen.removeClass("ui-screen-hidden"), this._ui.container.removeClass("ui-popup-truncate"), this._reposition(c), this._ui.container.removeClass("ui-popup-hidden"), this.options.overlayTheme && d && this.element.closest(".ui-page").addClass("ui-popup-open"), this._animate({
                    additionalCondition: !0,
                    transition: c.transition,
                    classToRemove: "",
                    screenClassToAdd: "in",
                    containerClassToAdd: "in",
                    applyTransition: !1,
                    prerequisites: this._prerequisites
                })
            },
            _closePrerequisiteScreen: function() {
                this._ui.screen.removeClass("out").addClass("ui-screen-hidden")
            },
            _closePrerequisiteContainer: function() {
                this._ui.container.removeClass("reverse out").addClass("ui-popup-hidden ui-popup-truncate").removeAttr("style")
            },
            _closePrerequisitesDone: function() {
                var b = this._ui.container,
                    d = this.element.attr("id");
                a.mobile.popup.active = c, a(":focus", b[0]).add(b[0]).blur(), d && this.document.find("[aria-haspopup='true'][aria-owns='" + d + "']").attr("aria-expanded", !1), this._trigger("afterclose")
            },
            _close: function(b) {
                this._ui.container.removeClass("ui-popup-active"), this._page.removeClass("ui-popup-open"), this._isOpen = !1, this._createPrerequisites(a.proxy(this, "_closePrerequisiteScreen"), a.proxy(this, "_closePrerequisiteContainer"), a.proxy(this, "_closePrerequisitesDone")), this._animate({
                    additionalCondition: this._ui.screen.hasClass("in"),
                    transition: b ? "none" : this._currentTransition,
                    classToRemove: "in",
                    screenClassToAdd: "out",
                    containerClassToAdd: "reverse out",
                    applyTransition: !0,
                    prerequisites: this._prerequisites
                })
            },
            _unenhance: function() {
                this.options.enhanced || (this._setOptions({
                    theme: a.mobile.popup.prototype.options.theme
                }), this.element.detach().insertAfter(this._ui.placeholder).removeClass("ui-popup ui-overlay-shadow ui-corner-all ui-body-inherit"), this._ui.screen.remove(), this._ui.container.remove(), this._ui.placeholder.remove())
            },
            _destroy: function() {
                return a.mobile.popup.active === this ? (this.element.one("popupafterclose", a.proxy(this, "_unenhance")), this.close()) : this._unenhance(), this
            },
            _closePopup: function(c, d) {
                var e, f, g = this.options,
                    h = !1;
                c && c.isDefaultPrevented() || a.mobile.popup.active !== this || (b.scrollTo(0, this._scrollTop), c && "pagebeforechange" === c.type && d && (e = "string" == typeof d.toPage ? d.toPage : d.toPage.jqmData("url"), e = a.mobile.path.parseUrl(e), f = e.pathname + e.search + e.hash, this._myUrl !== a.mobile.path.makeUrlAbsolute(f) ? h = !0 : c.preventDefault()), this.window.off(g.closeEvents), this.element.undelegate(g.closeLinkSelector, g.closeLinkEvents), this._close(h))
            },
            _bindContainerClose: function() {
                this.window.on(this.options.closeEvents, a.proxy(this, "_closePopup"))
            },
            widget: function() {
                return this._ui.container
            },
            open: function(b) {
                var c, d, e, f, g, h, i = this,
                    j = this.options;
                return a.mobile.popup.active || j.disabled ? this : (a.mobile.popup.active = this, this._scrollTop = this.window.scrollTop(), j.history ? (h = a.mobile.navigate.history, d = a.mobile.dialogHashKey, e = a.mobile.activePage, f = e ? e.hasClass("ui-dialog") : !1, this._myUrl = c = h.getActive().url, (g = c.indexOf(d) > -1 && !f && h.activeIndex > 0) ? (i._open(b), i._bindContainerClose(), this) : (-1 !== c.indexOf(d) || f ? c = a.mobile.path.parseLocation().hash + d : c += c.indexOf("#") > -1 ? d : "#" + d, this.window.one("beforenavigate", function(a) {
                    a.preventDefault(), i._open(b), i._bindContainerClose()
                }), this.urlAltered = !0, a.mobile.navigate(c, {
                    role: "dialog"
                }), this)) : (i._open(b), i._bindContainerClose(), i.element.delegate(j.closeLinkSelector, j.closeLinkEvents, function(a) {
                    i.close(), a.preventDefault()
                }), this))
            },
            close: function() {
                return a.mobile.popup.active !== this ? this : (this._scrollTop = this.window.scrollTop(), this.options.history && this.urlAltered ? (a.mobile.back(), this.urlAltered = !1) : this._closePopup(), this)
            }
        }), a.mobile.popup.handleLink = function(b) {
            var c, d = a.mobile.path,
                e = a(d.hashToSelector(d.parseUrl(b.attr("href")).hash)).first();
            e.length > 0 && e.data("mobile-popup") && (c = b.offset(), e.popup("open", {
                x: c.left + b.outerWidth() / 2,
                y: c.top + b.outerHeight() / 2,
                transition: b.jqmData("transition"),
                positionTo: b.jqmData("position-to")
            })), setTimeout(function() {
                b.removeClass(a.mobile.activeBtnClass)
            }, 300)
        }, a.mobile.document.on("pagebeforechange", function(b, c) {
            "popup" === c.options.role && (a.mobile.popup.handleLink(c.options.link), b.preventDefault())
        })
    }(a),
    function(a, b) {
        var d = ".ui-disabled,.ui-state-disabled,.ui-li-divider,.ui-screen-hidden,:jqmData(role='placeholder')",
            e = function(a, b, c) {
                var e = a[c + "All"]().not(d).first();
                e.length && (b.blur().attr("tabindex", "-1"), e.find("a").first().focus())
            };
        a.widget("mobile.selectmenu", a.mobile.selectmenu, {
            _create: function() {
                var a = this.options;
                return a.nativeMenu = a.nativeMenu || this.element.parents(":jqmData(role='popup'),:mobile-popup").length > 0, this._super()
            },
            _handleSelectFocus: function() {
                this.element.blur(), this.button.focus()
            },
            _handleKeydown: function(a) {
                this._super(a), this._handleButtonVclickKeydown(a)
            },
            _handleButtonVclickKeydown: function(b) {
                this.options.disabled || this.isOpen || this.options.nativeMenu || ("vclick" === b.type || b.keyCode && (b.keyCode === a.mobile.keyCode.ENTER || b.keyCode === a.mobile.keyCode.SPACE)) && (this._decideFormat(), "overlay" === this.menuType ? this.button.attr("href", "#" + this.popupId).attr("data-" + (a.mobile.ns || "") + "rel", "popup") : this.button.attr("href", "#" + this.dialogId).attr("data-" + (a.mobile.ns || "") + "rel", "dialog"), this.isOpen = !0)
            },
            _handleListFocus: function(b) {
                var c = "focusin" === b.type ? {
                    tabindex: "0",
                    event: "vmouseover"
                } : {
                    tabindex: "-1",
                    event: "vmouseout"
                };
                a(b.target).attr("tabindex", c.tabindex).trigger(c.event)
            },
            _handleListKeydown: function(b) {
                var c = a(b.target),
                    d = c.closest("li");
                switch (b.keyCode) {
                    case 38:
                        return e(d, c, "prev"), !1;
                    case 40:
                        return e(d, c, "next"), !1;
                    case 13:
                    case 32:
                        return c.trigger("click"), !1
                }
            },
            _handleMenuPageHide: function() {
                this._delayedTrigger(), this.thisPage.page("bindRemove")
            },
            _handleHeaderCloseClick: function() {
                return "overlay" === this.menuType ? (this.close(), !1) : void 0
            },
            _handleListItemClick: function(b) {
                var c = a(b.target).closest("li"),
                    d = this.select[0].selectedIndex,
                    e = a.mobile.getAttribute(c, "option-index"),
                    f = this._selectOptions().eq(e)[0];
                f.selected = this.isMultiple ? !f.selected : !0, this.isMultiple && c.find("a").toggleClass("ui-checkbox-on", f.selected).toggleClass("ui-checkbox-off", !f.selected), this.isMultiple || d === e || (this._triggerChange = !0), this.isMultiple ? (this.select.trigger("change"), this.list.find("li:not(.ui-li-divider)").eq(e).find("a").first().focus()) : this.close(), b.preventDefault()
            },
            build: function() {
                var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = this.options;
                return v.nativeMenu ? this._super() : (c = this.selectId, d = c + "-listbox", e = c + "-dialog", f = this.label, g = this.element.closest(".ui-page"), h = this.element[0].multiple, i = c + "-menu", j = v.theme ? " data-" + a.mobile.ns + "theme='" + v.theme + "'" : "", k = v.overlayTheme || v.theme || null, l = k ? " data-" + a.mobile.ns + "overlay-theme='" + k + "'" : "", m = v.dividerTheme && h ? " data-" + a.mobile.ns + "divider-theme='" + v.dividerTheme + "'" : "", n = a("<div data-" + a.mobile.ns + "role='dialog' class='ui-selectmenu' id='" + e + "'" + j + l + "><div data-" + a.mobile.ns + "role='header'><div class='ui-title'></div></div><div data-" + a.mobile.ns + "role='content'></div></div>"), o = a("<div" + j + l + " id='" + d + "' class='ui-selectmenu'></div>").insertAfter(this.select).popup(), p = a("<ul class='ui-selectmenu-list' id='" + i + "' role='listbox' aria-labelledby='" + this.buttonId + "'" + j + m + "></ul>").appendTo(o), q = a("<div class='ui-header ui-bar-" + (v.theme ? v.theme : "inherit") + "'></div>").prependTo(o), r = a("<h1 class='ui-title'></h1>").appendTo(q), this.isMultiple && (u = a("<a>", {
                    role: "button",
                    text: v.closeText,
                    href: "#",
                    "class": "ui-btn ui-corner-all ui-btn-left ui-btn-icon-notext ui-icon-delete"
                }).appendTo(q)), a.extend(this, {
                    selectId: c,
                    menuId: i,
                    popupId: d,
                    dialogId: e,
                    thisPage: g,
                    menuPage: n,
                    label: f,
                    isMultiple: h,
                    theme: v.theme,
                    listbox: o,
                    list: p,
                    header: q,
                    headerTitle: r,
                    headerClose: u,
                    menuPageContent: s,
                    menuPageClose: t,
                    placeholder: ""
                }), this.refresh(), this._origTabIndex === b && (this._origTabIndex = null === this.select[0].getAttribute("tabindex") ? !1 : this.select.attr("tabindex")), this.select.attr("tabindex", "-1"), this._on(this.select, {
                    focus: "_handleSelectFocus"
                }), this._on(this.button, {
                    vclick: "_handleButtonVclickKeydown"
                }), this.list.attr("role", "listbox"), this._on(this.list, {
                    focusin: "_handleListFocus",
                    focusout: "_handleListFocus",
                    keydown: "_handleListKeydown",
                    "click li:not(.ui-disabled,.ui-state-disabled,.ui-li-divider)": "_handleListItemClick"
                }), this._on(this.menuPage, {
                    pagehide: "_handleMenuPageHide"
                }), this._on(this.listbox, {
                    popupafterclose: "_popupClosed"
                }), this.isMultiple && this._on(this.headerClose, {
                    click: "_handleHeaderCloseClick"
                }), this)
            },
            _popupClosed: function() {
                this.close(), this._delayedTrigger()
            },
            _delayedTrigger: function() {
                this._triggerChange && this.element.trigger("change"), this._triggerChange = !1
            },
            _isRebuildRequired: function() {
                var a = this.list.find("li"),
                    b = this._selectOptions().not(".ui-screen-hidden");
                return b.text() !== a.text()
            },
            selected: function() {
                return this._selectOptions().filter(":selected:not( :jqmData(placeholder='true') )")
            },
            refresh: function(b) {
                var c, d;
                return this.options.nativeMenu ? this._super(b) : (c = this, (b || this._isRebuildRequired()) && c._buildList(), d = this.selectedIndices(), c.setButtonText(), c.setButtonCount(), void c.list.find("li:not(.ui-li-divider)").find("a").removeClass(a.mobile.activeBtnClass).end().attr("aria-selected", !1).each(function(b) {
                    var e = a(this);
                    a.inArray(b, d) > -1 ? (e.attr("aria-selected", !0), c.isMultiple ? e.find("a").removeClass("ui-checkbox-off").addClass("ui-checkbox-on") : e.hasClass("ui-screen-hidden") ? e.next().find("a").addClass(a.mobile.activeBtnClass) : e.find("a").addClass(a.mobile.activeBtnClass)) : c.isMultiple && e.find("a").removeClass("ui-checkbox-on").addClass("ui-checkbox-off")
                }))
            },
            close: function() {
                if (!this.options.disabled && this.isOpen) {
                    var a = this;
                    "page" === a.menuType ? (a.menuPage.dialog("close"), a.list.appendTo(a.listbox)) : a.listbox.popup("close"), a._focusButton(), a.isOpen = !1
                }
            },
            open: function() {
                this.button.click()
            },
            _focusMenuItem: function() {
                var b = this.list.find("a." + a.mobile.activeBtnClass);
                0 === b.length && (b = this.list.find("li:not(" + d + ") a.ui-btn")), b.first().focus()
            },
            _decideFormat: function() {
                var b = this,
                    c = this.window,
                    d = b.list.parent(),
                    e = d.outerHeight(),
                    f = c.scrollTop(),
                    g = b.button.offset().top,
                    h = c.height();
                e > h - 80 || !a.support.scrollTop ? (b.menuPage.appendTo(a.mobile.pageContainer).page(), b.menuPageContent = b.menuPage.find(".ui-content"), b.menuPageClose = b.menuPage.find(".ui-header a"), b.thisPage.unbind("pagehide.remove"), 0 === f && g > h && b.thisPage.one("pagehide", function() {
                    a(this).jqmData("lastScroll", g)
                }), b.menuPage.one({
                    pageshow: a.proxy(this, "_focusMenuItem"),
                    pagehide: a.proxy(this, "close")
                }), b.menuType = "page", b.menuPageContent.append(b.list), b.menuPage.find("div .ui-title").text(b.label.getEncodedText() || b.placeholder)) : (b.menuType = "overlay", b.listbox.one({
                    popupafteropen: a.proxy(this, "_focusMenuItem")
                }))
            },
            _buildList: function() {
                var b, d, e, f, g, h, i, j, k, l, m, n, o, p, q = this,
                    r = this.options,
                    s = this.placeholder,
                    t = !0,
                    u = "false",
                    v = "data-" + a.mobile.ns,
                    w = v + "option-index",
                    x = v + "icon",
                    y = v + "role",
                    z = v + "placeholder",
                    A = c.createDocumentFragment(),
                    B = !1;
                for (q.list.empty().filter(".ui-listview").listview("destroy"), b = this._selectOptions(), d = b.length, e = this.select[0], g = 0; d > g; g++, B = !1) h = b[g], i = a(h), i.hasClass("ui-screen-hidden") || (j = h.parentNode, m = [], k = i.text(), l = c.createElement("a"), l.setAttribute("href", "#"), l.appendChild(c.createTextNode(k)), j !== e && "optgroup" === j.nodeName.toLowerCase() && (n = j.getAttribute("label"), n !== f && (o = c.createElement("li"), o.setAttribute(y, "list-divider"), o.setAttribute("role", "option"), o.setAttribute("tabindex", "-1"), o.appendChild(c.createTextNode(n)), A.appendChild(o), f = n)), !t || h.getAttribute("value") && 0 !== k.length && !i.jqmData("placeholder") || (t = !1, B = !0, null === h.getAttribute(z) && (this._removePlaceholderAttr = !0), h.setAttribute(z, !0), r.hidePlaceholderMenuItems && m.push("ui-screen-hidden"), s !== k && (s = q.placeholder = k)), p = c.createElement("li"), h.disabled && (m.push("ui-state-disabled"), p.setAttribute("aria-disabled", !0)), p.setAttribute(w, g), p.setAttribute(x, u), B && p.setAttribute(z, !0), p.className = m.join(" "), p.setAttribute("role", "option"), l.setAttribute("tabindex", "-1"), this.isMultiple && a(l).addClass("ui-btn ui-checkbox-off ui-btn-icon-right"), p.appendChild(l), A.appendChild(p));
                q.list[0].appendChild(A), this.isMultiple || s.length ? this.headerTitle.text(this.placeholder) : this.header.addClass("ui-screen-hidden"), q.list.listview()
            },
            _button: function() {
                return this.options.nativeMenu ? this._super() : a("<a>", {
                    href: "#",
                    role: "button",
                    id: this.buttonId,
                    "aria-haspopup": "true",
                    "aria-owns": this.menuId
                })
            },
            _destroy: function() {
                this.options.nativeMenu || (this.close(), this._origTabIndex !== b && (this._origTabIndex !== !1 ? this.select.attr("tabindex", this._origTabIndex) : this.select.removeAttr("tabindex")), this._removePlaceholderAttr && this._selectOptions().removeAttr("data-" + a.mobile.ns + "placeholder"), this.listbox.remove(), this.menuPage.remove()), this._super()
            }
        })
    }(a),
    function(a, b) {
        function c(a, b) {
            var c = b ? b : [];
            return c.push("ui-btn"), a.theme && c.push("ui-btn-" + a.theme), a.icon && (c = c.concat(["ui-icon-" + a.icon, "ui-btn-icon-" + a.iconpos]), a.iconshadow && c.push("ui-shadow-icon")), a.inline && c.push("ui-btn-inline"), a.shadow && c.push("ui-shadow"), a.corners && c.push("ui-corner-all"), a.mini && c.push("ui-mini"), c
        }

        function d(a) {
            var c, d, e, g = !1,
                h = !0,
                i = {
                    icon: "",
                    inline: !1,
                    shadow: !1,
                    corners: !1,
                    iconshadow: !1,
                    mini: !1
                },
                j = [];
            for (a = a.split(" "), c = 0; c < a.length; c++) e = !0, d = f[a[c]], d !== b ? (e = !1, i[d] = !0) : 0 === a[c].indexOf("ui-btn-icon-") ? (e = !1, h = !1, i.iconpos = a[c].substring(12)) : 0 === a[c].indexOf("ui-icon-") ? (e = !1, i.icon = a[c].substring(8)) : 0 === a[c].indexOf("ui-btn-") && 8 === a[c].length ? (e = !1, i.theme = a[c].substring(7)) : "ui-btn" === a[c] && (e = !1, g = !0), e && j.push(a[c]);
            return h && (i.icon = ""), {
                options: i,
                unknownClasses: j,
                alreadyEnhanced: g
            }
        }

        function e(a) {
            return "-" + a.toLowerCase()
        }
        var f = {
                "ui-shadow": "shadow",
                "ui-corner-all": "corners",
                "ui-btn-inline": "inline",
                "ui-shadow-icon": "iconshadow",
                "ui-mini": "mini"
            },
            g = function() {
                var c = a.mobile.getAttribute.apply(this, arguments);
                return null == c ? b : c
            },
            h = /[A-Z]/g;
        a.fn.buttonMarkup = function(f, i) {
            var j, k, l, m, n, o = a.fn.buttonMarkup.defaults;
            for (j = 0; j < this.length; j++) {
                if (l = this[j], k = i ? {
                        alreadyEnhanced: !1,
                        unknownClasses: []
                    } : d(l.className), m = a.extend({}, k.alreadyEnhanced ? k.options : {}, f), !k.alreadyEnhanced)
                    for (n in o) m[n] === b && (m[n] = g(l, n.replace(h, e)));
                l.className = c(a.extend({}, o, m), k.unknownClasses).join(" "), "button" !== l.tagName.toLowerCase() && l.setAttribute("role", "button")
            }
            return this
        }, a.fn.buttonMarkup.defaults = {
            icon: "",
            iconpos: "left",
            theme: null,
            inline: !1,
            shadow: !0,
            corners: !0,
            iconshadow: !1,
            mini: !1
        }, a.extend(a.fn.buttonMarkup, {
            initSelector: "a:jqmData(role='button'), .ui-bar > a, .ui-bar > :jqmData(role='controlgroup') > a, button:not(:jqmData(role='navbar') button)"
        })
    }(a),
    function(a, b) {
        a.widget("mobile.controlgroup", a.extend({
            options: {
                enhanced: !1,
                theme: null,
                shadow: !1,
                corners: !0,
                excludeInvisible: !0,
                type: "vertical",
                mini: !1
            },
            _create: function() {
                var b = this.element,
                    c = this.options,
                    d = a.mobile.page.prototype.keepNativeSelector();
                a.fn.buttonMarkup && this.element.find(a.fn.buttonMarkup.initSelector).not(d).buttonMarkup(), a.each(this._childWidgets, a.proxy(function(b, c) {
                    a.mobile[c] && this.element.find(a.mobile[c].initSelector).not(d)[c]()
                }, this)), a.extend(this, {
                    _ui: null,
                    _initialRefresh: !0
                }), this._ui = c.enhanced ? {
                    groupLegend: b.children(".ui-controlgroup-label").children(),
                    childWrapper: b.children(".ui-controlgroup-controls")
                } : this._enhance()
            },
            _childWidgets: ["checkboxradio", "selectmenu", "button"],
            _themeClassFromOption: function(a) {
                return a ? "none" === a ? "" : "ui-group-theme-" + a : ""
            },
            _enhance: function() {
                var b = this.element,
                    c = this.options,
                    d = {
                        groupLegend: b.children("legend"),
                        childWrapper: b.addClass("ui-controlgroup ui-controlgroup-" + ("horizontal" === c.type ? "horizontal" : "vertical") + " " + this._themeClassFromOption(c.theme) + " " + (c.corners ? "ui-corner-all " : "") + (c.mini ? "ui-mini " : "")).wrapInner("<div class='ui-controlgroup-controls " + (c.shadow === !0 ? "ui-shadow" : "") + "'></div>").children()
                    };
                return d.groupLegend.length > 0 && a("<div role='heading' class='ui-controlgroup-label'></div>").append(d.groupLegend).prependTo(b), d
            },
            _init: function() {
                this.refresh()
            },
            _setOptions: function(a) {
                var c, d, e = this.element;
                return a.type !== b && (e.removeClass("ui-controlgroup-horizontal ui-controlgroup-vertical").addClass("ui-controlgroup-" + ("horizontal" === a.type ? "horizontal" : "vertical")), c = !0), a.theme !== b && e.removeClass(this._themeClassFromOption(this.options.theme)).addClass(this._themeClassFromOption(a.theme)), a.corners !== b && e.toggleClass("ui-corner-all", a.corners), a.mini !== b && e.toggleClass("ui-mini", a.mini), a.shadow !== b && this._ui.childWrapper.toggleClass("ui-shadow", a.shadow), a.excludeInvisible !== b && (this.options.excludeInvisible = a.excludeInvisible, c = !0), d = this._super(a), c && this.refresh(), d
            },
            container: function() {
                return this._ui.childWrapper
            },
            refresh: function() {
                var b = this.container(),
                    c = b.find(".ui-btn").not(".ui-slider-handle"),
                    d = this._initialRefresh;
                a.mobile.checkboxradio && b.find(":mobile-checkboxradio").checkboxradio("refresh"), this._addFirstLastClasses(c, this.options.excludeInvisible ? this._getVisibles(c, d) : c, d), this._initialRefresh = !1
            },
            _destroy: function() {
                var a, b, c = this.options;
                return c.enhanced ? this : (a = this._ui, b = this.element.removeClass("ui-controlgroup ui-controlgroup-horizontal ui-controlgroup-vertical ui-corner-all ui-mini " + this._themeClassFromOption(c.theme)).find(".ui-btn").not(".ui-slider-handle"), this._removeFirstLastClasses(b), a.groupLegend.unwrap(), void a.childWrapper.children().unwrap())
            }
        }, a.mobile.behaviors.addFirstLastClasses))
    }(a),
    function(a, b) {
        a.widget("mobile.toolbar", {
            initSelector: ":jqmData(role='footer'), :jqmData(role='header')",
            options: {
                theme: null,
                addBackBtn: !1,
                backBtnTheme: null,
                backBtnText: "Back"
            },
            _create: function() {
                var b, c, d = this.element.is(":jqmData(role='header')") ? "header" : "footer",
                    e = this.element.closest(".ui-page");
                0 === e.length && (e = !1, this._on(this.document, {
                    pageshow: "refresh"
                })), a.extend(this, {
                    role: d,
                    page: e,
                    leftbtn: b,
                    rightbtn: c
                }), this.element.attr("role", "header" === d ? "banner" : "contentinfo").addClass("ui-" + d), this.refresh(), this._setOptions(this.options)
            },
            _setOptions: function(a) {
                if (a.addBackBtn !== b && this._updateBackButton(), null != a.backBtnTheme && this.element.find(".ui-toolbar-back-btn").addClass("ui-btn ui-btn-" + a.backBtnTheme), a.backBtnText !== b && this.element.find(".ui-toolbar-back-btn .ui-btn-text").text(a.backBtnText), a.theme !== b) {
                    var c = this.options.theme ? this.options.theme : "inherit",
                        d = a.theme ? a.theme : "inherit";
                    this.element.removeClass("ui-bar-" + c).addClass("ui-bar-" + d)
                }
                this._super(a)
            },
            refresh: function() {
                "header" === this.role && this._addHeaderButtonClasses(), this.page || (this._setRelative(), "footer" === this.role ? this.element.appendTo("body") : "header" === this.role && this._updateBackButton()), this._addHeadingClasses(), this._btnMarkup()
            },
            _setRelative: function() {
                a("[data-" + a.mobile.ns + "role='page']").css({
                    position: "relative"
                })
            },
            _btnMarkup: function() {
                this.element.children("a").filter(":not([data-" + a.mobile.ns + "role='none'])").attr("data-" + a.mobile.ns + "role", "button"), this.element.trigger("create")
            },
            _addHeaderButtonClasses: function() {
                var a = this.element.children("a, button");
                this.leftbtn = a.hasClass("ui-btn-left") && !a.hasClass("ui-toolbar-back-btn"), this.rightbtn = a.hasClass("ui-btn-right"), this.leftbtn = this.leftbtn || a.eq(0).not(".ui-btn-right,.ui-toolbar-back-btn").addClass("ui-btn-left").length, this.rightbtn = this.rightbtn || a.eq(1).addClass("ui-btn-right").length
            },
            _updateBackButton: function() {
                var b, c = this.options,
                    d = c.backBtnTheme || c.theme;
                b = this._backButton = this._backButton || {}, this.options.addBackBtn && "header" === this.role && a(".ui-page").length > 1 && (this.page ? this.page[0].getAttribute("data-" + a.mobile.ns + "url") !== a.mobile.path.stripHash(location.hash) : a.mobile.navigate && a.mobile.navigate.history && a.mobile.navigate.history.activeIndex > 0) && !this.leftbtn ? b.attached || (this.backButton = b.element = (b.element || a("<a role='button' href='javascript:void(0);' class='ui-btn ui-corner-all ui-shadow ui-btn-left " + (d ? "ui-btn-" + d + " " : "") + "ui-toolbar-back-btn ui-icon-carat-l ui-btn-icon-left' data-" + a.mobile.ns + "rel='back'>" + c.backBtnText + "</a>")).prependTo(this.element), b.attached = !0) : b.element && (b.element.detach(), b.attached = !1)
            },
            _addHeadingClasses: function() {
                this.element.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({
                    role: "heading",
                    "aria-level": "1"
                })
            },
            _destroy: function() {
                var a;
                this.element.children("h1, h2, h3, h4, h5, h6").removeClass("ui-title").removeAttr("role").removeAttr("aria-level"), "header" === this.role && (this.element.children("a, button").removeClass("ui-btn-left ui-btn-right ui-btn ui-shadow ui-corner-all"), this.backButton && this.backButton.remove()), a = this.options.theme ? this.options.theme : "inherit", this.element.removeClass("ui-bar-" + a), this.element.removeClass("ui-" + this.role).removeAttr("role")
            }
        })
    }(a),
    function(a, b) {
        a.widget("mobile.toolbar", a.mobile.toolbar, {
            options: {
                position: null,
                visibleOnPageShow: !0,
                disablePageZoom: !0,
                transition: "slide",
                fullscreen: !1,
                tapToggle: !0,
                tapToggleBlacklist: "a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed, .ui-flipswitch, .ui-popup, .ui-panel, .ui-panel-dismiss-open",
                hideDuringFocus: "input, textarea, select",
                updatePagePadding: !0,
                trackPersistentToolbars: !0,
                supportBlacklist: function() {
                    return !a.support.fixedPosition
                }
            },
            _create: function() {
                this._super(), this.pagecontainer = a(":mobile-pagecontainer"), "fixed" !== this.options.position || this.options.supportBlacklist() || this._makeFixed()
            },
            _makeFixed: function() {
                this.element.addClass("ui-" + this.role + "-fixed"), this.updatePagePadding(), this._addTransitionClass(), this._bindPageEvents(), this._bindToggleHandlers()
            },
            _setOptions: function(c) {
                if ("fixed" === c.position && "fixed" !== this.options.position && this._makeFixed(), "fixed" === this.options.position && !this.options.supportBlacklist()) {
                    var d = this.page ? this.page : a(".ui-page-active").length > 0 ? a(".ui-page-active") : a(".ui-page").eq(0);
                    c.fullscreen !== b && (c.fullscreen ? (this.element.addClass("ui-" + this.role + "-fullscreen"), d.addClass("ui-page-" + this.role + "-fullscreen")) : (this.element.removeClass("ui-" + this.role + "-fullscreen"), d.removeClass("ui-page-" + this.role + "-fullscreen").addClass("ui-page-" + this.role + "-fixed")))
                }
                this._super(c)
            },
            _addTransitionClass: function() {
                var a = this.options.transition;
                a && "none" !== a && ("slide" === a && (a = this.element.hasClass("ui-header") ? "slidedown" : "slideup"), this.element.addClass(a))
            },
            _bindPageEvents: function() {
                var a = this.page ? this.element.closest(".ui-page") : this.document;
                this._on(a, {
                    pagebeforeshow: "_handlePageBeforeShow",
                    webkitAnimationStart: "_handleAnimationStart",
                    animationstart: "_handleAnimationStart",
                    updatelayout: "_handleAnimationStart",
                    pageshow: "_handlePageShow",
                    pagebeforehide: "_handlePageBeforeHide"
                })
            },
            _handlePageBeforeShow: function() {
                var b = this.options;
                b.disablePageZoom && a.mobile.zoom.disable(!0), b.visibleOnPageShow || this.hide(!0)
            },
            _handleAnimationStart: function() {
                this.options.updatePagePadding && this.updatePagePadding(this.page ? this.page : ".ui-page-active")
            },
            _handlePageShow: function() {
                this.updatePagePadding(this.page ? this.page : ".ui-page-active"), this.options.updatePagePadding && this._on(this.window, {
                    throttledresize: "updatePagePadding"
                })
            },
            _handlePageBeforeHide: function(b, c) {
                var d, e, f, g, h = this.options;
                h.disablePageZoom && a.mobile.zoom.enable(!0), h.updatePagePadding && this._off(this.window, "throttledresize"), h.trackPersistentToolbars && (d = a(".ui-footer-fixed:jqmData(id)", this.page), e = a(".ui-header-fixed:jqmData(id)", this.page), f = d.length && c.nextPage && a(".ui-footer-fixed:jqmData(id='" + d.jqmData("id") + "')", c.nextPage) || a(), g = e.length && c.nextPage && a(".ui-header-fixed:jqmData(id='" + e.jqmData("id") + "')", c.nextPage) || a(), (f.length || g.length) && (f.add(g).appendTo(a.mobile.pageContainer), c.nextPage.one("pageshow", function() {
                    g.prependTo(this), f.appendTo(this)
                })))
            },
            _visible: !0,
            updatePagePadding: function(c) {
                var d = this.element,
                    e = "header" === this.role,
                    f = parseFloat(d.css(e ? "top" : "bottom"));
                this.options.fullscreen || (c = c && c.type === b && c || this.page || d.closest(".ui-page"), c = this.page ? this.page : ".ui-page-active", a(c).css("padding-" + (e ? "top" : "bottom"), d.outerHeight() + f))
            },
            _useTransition: function(b) {
                var c = this.window,
                    d = this.element,
                    e = c.scrollTop(),
                    f = d.height(),
                    g = this.page ? d.closest(".ui-page").height() : a(".ui-page-active").height(),
                    h = a.mobile.getScreenHeight();
                return !b && (this.options.transition && "none" !== this.options.transition && ("header" === this.role && !this.options.fullscreen && e > f || "footer" === this.role && !this.options.fullscreen && g - f > e + h) || this.options.fullscreen)
            },
            show: function(a) {
                var b = "ui-fixed-hidden",
                    c = this.element;
                this._useTransition(a) ? c.removeClass("out " + b).addClass("in").animationComplete(function() {
                    c.removeClass("in")
                }) : c.removeClass(b), this._visible = !0
            },
            hide: function(a) {
                var b = "ui-fixed-hidden",
                    c = this.element,
                    d = "out" + ("slide" === this.options.transition ? " reverse" : "");
                this._useTransition(a) ? c.addClass(d).removeClass("in").animationComplete(function() {
                    c.addClass(b).removeClass(d)
                }) : c.addClass(b).removeClass(d), this._visible = !1
            },
            toggle: function() {
                this[this._visible ? "hide" : "show"]()
            },
            _bindToggleHandlers: function() {
                var b, c, d = this,
                    e = d.options,
                    f = !0,
                    g = this.page ? this.page : a(".ui-page");
                g.bind("vclick", function(b) {
                    e.tapToggle && !a(b.target).closest(e.tapToggleBlacklist).length && d.toggle()
                }).bind("focusin focusout", function(g) {
                    screen.width < 1025 && a(g.target).is(e.hideDuringFocus) && !a(g.target).closest(".ui-header-fixed, .ui-footer-fixed").length && ("focusout" !== g.type || f ? "focusin" === g.type && f && (clearTimeout(b), f = !1, c = setTimeout(function() {
                        d.hide()
                    }, 0)) : (f = !0, clearTimeout(c), b = setTimeout(function() {
                        d.show()
                    }, 0)))
                })
            },
            _setRelative: function() {
                "fixed" !== this.options.position && a("[data-" + a.mobile.ns + "role='page']").css({
                    position: "relative"
                })
            },
            _destroy: function() {
                var b, c, d, e, f, g = this.pagecontainer.pagecontainer("getActivePage");
                this._super(), "fixed" === this.options.position && (d = a("body>.ui-" + this.role + "-fixed").add(g.find(".ui-" + this.options.role + "-fixed")).not(this.element).length > 0, f = a("body>.ui-" + this.role + "-fixed").add(g.find(".ui-" + this.options.role + "-fullscreen")).not(this.element).length > 0, c = "ui-header-fixed ui-footer-fixed ui-header-fullscreen in out ui-footer-fullscreen fade slidedown slideup ui-fixed-hidden", this.element.removeClass(c), f || (b = "ui-page-" + this.role + "-fullscreen"), d || (e = "header" === this.role, b += " ui-page-" + this.role + "-fixed", g.css("padding-" + (e ? "top" : "bottom"), "")), g.removeClass(b))
            }
        })
    }(a),
    function(a) {
        a.widget("mobile.toolbar", a.mobile.toolbar, {
            _makeFixed: function() {
                this._super(), this._workarounds()
            },
            _workarounds: function() {
                var a = navigator.userAgent,
                    b = navigator.platform,
                    c = a.match(/AppleWebKit\/([0-9]+)/),
                    d = !!c && c[1],
                    e = null,
                    f = this;
                if (b.indexOf("iPhone") > -1 || b.indexOf("iPad") > -1 || b.indexOf("iPod") > -1) e = "ios";
                else {
                    if (!(a.indexOf("Android") > -1)) return;
                    e = "android"
                }
                if ("ios" === e) f._bindScrollWorkaround();
                else {
                    if (!("android" === e && d && 534 > d)) return;
                    f._bindScrollWorkaround(), f._bindListThumbWorkaround()
                }
            },
            _viewportOffset: function() {
                var a = this.element,
                    b = a.hasClass("ui-header"),
                    c = Math.abs(a.offset().top - this.window.scrollTop());
                return b || (c = Math.round(c - this.window.height() + a.outerHeight()) - 60), c
            },
            _bindScrollWorkaround: function() {
                var a = this;
                this._on(this.window, {
                    scrollstop: function() {
                        var b = a._viewportOffset();
                        b > 2 && a._visible && a._triggerRedraw()
                    }
                })
            },
            _bindListThumbWorkaround: function() {
                this.element.closest(".ui-page").addClass("ui-android-2x-fixed")
            },
            _triggerRedraw: function() {
                var b = parseFloat(a(".ui-page-active").css("padding-bottom"));
                a(".ui-page-active").css("padding-bottom", b + 1 + "px"), setTimeout(function() {
                    a(".ui-page-active").css("padding-bottom", b + "px")
                }, 0)
            },
            destroy: function() {
                this._super(), this.element.closest(".ui-page-active").removeClass("ui-android-2x-fix")
            }
        })
    }(a),
    function(a, b) {
        function c() {
            var a = e.clone(),
                b = a.eq(0),
                c = a.eq(1),
                d = c.children();
            return {
                arEls: c.add(b),
                gd: b,
                ct: c,
                ar: d
            }
        }
        var d = a.mobile.browser.oldIE && a.mobile.browser.oldIE <= 8,
            e = a("<div class='ui-popup-arrow-guide'></div><div class='ui-popup-arrow-container" + (d ? " ie" : "") + "'><div class='ui-popup-arrow'></div></div>");
        a.widget("mobile.popup", a.mobile.popup, {
            options: {
                arrow: ""
            },
            _create: function() {
                var a, b = this._super();
                return this.options.arrow && (this._ui.arrow = a = this._addArrow()), b
            },
            _addArrow: function() {
                var a, b = this.options,
                    d = c();
                return a = this._themeClassFromOption("ui-body-", b.theme), d.ar.addClass(a + (b.shadow ? " ui-overlay-shadow" : "")), d.arEls.hide().appendTo(this.element), d
            },
            _unenhance: function() {
                var a = this._ui.arrow;
                return a && a.arEls.remove(), this._super()
            },
            _tryAnArrow: function(a, b, c, d, e) {
                var f, g, h, i = {},
                    j = {};
                return d.arFull[a.dimKey] > d.guideDims[a.dimKey] ? e : (i[a.fst] = c[a.fst] + (d.arHalf[a.oDimKey] + d.menuHalf[a.oDimKey]) * a.offsetFactor - d.contentBox[a.fst] + (d.clampInfo.menuSize[a.oDimKey] - d.contentBox[a.oDimKey]) * a.arrowOffsetFactor, i[a.snd] = c[a.snd], f = d.result || this._calculateFinalLocation(i, d.clampInfo), g = {
                    x: f.left,
                    y: f.top
                }, j[a.fst] = g[a.fst] + d.contentBox[a.fst] + a.tipOffset, j[a.snd] = Math.max(f[a.prop] + d.guideOffset[a.prop] + d.arHalf[a.dimKey], Math.min(f[a.prop] + d.guideOffset[a.prop] + d.guideDims[a.dimKey] - d.arHalf[a.dimKey], c[a.snd])), h = Math.abs(c.x - j.x) + Math.abs(c.y - j.y), (!e || h < e.diff) && (j[a.snd] -= d.arHalf[a.dimKey] + f[a.prop] + d.contentBox[a.snd], e = {
                    dir: b,
                    diff: h,
                    result: f,
                    posProp: a.prop,
                    posVal: j[a.snd]
                }), e)
            },
            _getPlacementState: function(a) {
                var b, c, d = this._ui.arrow,
                    e = {
                        clampInfo: this._clampPopupWidth(!a),
                        arFull: {
                            cx: d.ct.width(),
                            cy: d.ct.height()
                        },
                        guideDims: {
                            cx: d.gd.width(),
                            cy: d.gd.height()
                        },
                        guideOffset: d.gd.offset()
                    };
                return b = this.element.offset(), d.gd.css({
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }), c = d.gd.offset(), e.contentBox = {
                    x: c.left - b.left,
                    y: c.top - b.top,
                    cx: d.gd.width(),
                    cy: d.gd.height()
                }, d.gd.removeAttr("style"), e.guideOffset = {
                    left: e.guideOffset.left - b.left,
                    top: e.guideOffset.top - b.top
                }, e.arHalf = {
                    cx: e.arFull.cx / 2,
                    cy: e.arFull.cy / 2
                }, e.menuHalf = {
                    cx: e.clampInfo.menuSize.cx / 2,
                    cy: e.clampInfo.menuSize.cy / 2
                }, e
            },
            _placementCoords: function(b) {
                var c, e, f, g, h, i = this.options.arrow,
                    j = this._ui.arrow;
                return j ? (j.arEls.show(), h = {}, c = this._getPlacementState(!0), f = {
                    l: {
                        fst: "x",
                        snd: "y",
                        prop: "top",
                        dimKey: "cy",
                        oDimKey: "cx",
                        offsetFactor: 1,
                        tipOffset: -c.arHalf.cx,
                        arrowOffsetFactor: 0
                    },
                    r: {
                        fst: "x",
                        snd: "y",
                        prop: "top",
                        dimKey: "cy",
                        oDimKey: "cx",
                        offsetFactor: -1,
                        tipOffset: c.arHalf.cx + c.contentBox.cx,
                        arrowOffsetFactor: 1
                    },
                    b: {
                        fst: "y",
                        snd: "x",
                        prop: "left",
                        dimKey: "cx",
                        oDimKey: "cy",
                        offsetFactor: -1,
                        tipOffset: c.arHalf.cy + c.contentBox.cy,
                        arrowOffsetFactor: 1
                    },
                    t: {
                        fst: "y",
                        snd: "x",
                        prop: "left",
                        dimKey: "cx",
                        oDimKey: "cy",
                        offsetFactor: 1,
                        tipOffset: -c.arHalf.cy,
                        arrowOffsetFactor: 0
                    }
                }, a.each((i === !0 ? "l,t,r,b" : i).split(","), a.proxy(function(a, d) {
                    e = this._tryAnArrow(f[d], d, b, c, e)
                }, this)), e ? (j.ct.removeClass("ui-popup-arrow-l ui-popup-arrow-t ui-popup-arrow-r ui-popup-arrow-b").addClass("ui-popup-arrow-" + e.dir).removeAttr("style").css(e.posProp, e.posVal).show(), d || (g = this.element.offset(), h[f[e.dir].fst] = j.ct.offset(), h[f[e.dir].snd] = {
                    left: g.left + c.contentBox.x,
                    top: g.top + c.contentBox.y
                }), e.result) : (j.arEls.hide(), this._super(b))) : this._super(b)
            },
            _setOptions: function(a) {
                var c, d = this.options.theme,
                    e = this._ui.arrow,
                    f = this._super(a);
                if (a.arrow !== b) {
                    if (!e && a.arrow) return void(this._ui.arrow = this._addArrow());
                    e && !a.arrow && (e.arEls.remove(), this._ui.arrow = null)
                }
                return e = this._ui.arrow, e && (a.theme !== b && (d = this._themeClassFromOption("ui-body-", d), c = this._themeClassFromOption("ui-body-", a.theme), e.ar.removeClass(d).addClass(c)), a.shadow !== b && e.ar.toggleClass("ui-overlay-shadow", a.shadow)), f
            },
            _destroy: function() {
                var a = this._ui.arrow;
                return a && a.arEls.remove(), this._super()
            }
        })
    }(a),
    function(a, c) {
        a.widget("mobile.panel", {
            options: {
                classes: {
                    panel: "ui-panel",
                    panelOpen: "ui-panel-open",
                    panelClosed: "ui-panel-closed",
                    panelFixed: "ui-panel-fixed",
                    panelInner: "ui-panel-inner",
                    modal: "ui-panel-dismiss",
                    modalOpen: "ui-panel-dismiss-open",
                    pageContainer: "ui-panel-page-container",
                    pageWrapper: "ui-panel-wrapper",
                    pageFixedToolbar: "ui-panel-fixed-toolbar",
                    pageContentPrefix: "ui-panel-page-content",
                    animate: "ui-panel-animate"
                },
                animate: !0,
                theme: null,
                position: "left",
                dismissible: !0,
                display: "reveal",
                swipeClose: !0,
                positionFixed: !1
            },
            _closeLink: null,
            _parentPage: null,
            _page: null,
            _modal: null,
            _panelInner: null,
            _wrapper: null,
            _fixedToolbars: null,
            _create: function() {
                var b = this.element,
                    c = b.closest(".ui-page, :jqmData(role='page')");
                a.extend(this, {
                    _closeLink: b.find(":jqmData(rel='close')"),
                    _parentPage: c.length > 0 ? c : !1,
                    _openedPage: null,
                    _page: this._getPage,
                    _panelInner: this._getPanelInner(),
                    _fixedToolbars: this._getFixedToolbars
                }), "overlay" !== this.options.display && this._getWrapper(), this._addPanelClasses(), a.support.cssTransform3d && this.options.animate && this.element.addClass(this.options.classes.animate), this._bindUpdateLayout(), this._bindCloseEvents(), this._bindLinkListeners(), this._bindPageEvents(), this.options.dismissible && this._createModal(), this._bindSwipeEvents()
            },
            _getPanelInner: function() {
                var a = this.element.find("." + this.options.classes.panelInner);
                return 0 === a.length && (a = this.element.children().wrapAll("<div class='" + this.options.classes.panelInner + "' />").parent()), a
            },
            _createModal: function() {
                var b = this,
                    c = b._parentPage ? b._parentPage.parent() : b.element.parent();
                b._modal = a("<div class='" + b.options.classes.modal + "'></div>").on("mousedown", function() {
                    b.close()
                }).appendTo(c)
            },
            _getPage: function() {
                var b = this._openedPage || this._parentPage || a("." + a.mobile.activePageClass);
                return b
            },
            _getWrapper: function() {
                var a = this._page().find("." + this.options.classes.pageWrapper);
                0 === a.length && (a = this._page().children(".ui-header:not(.ui-header-fixed), .ui-content:not(.ui-popup), .ui-footer:not(.ui-footer-fixed)").wrapAll("<div class='" + this.options.classes.pageWrapper + "'></div>").parent()), this._wrapper = a
            },
            _getFixedToolbars: function() {
                var b = a("body").children(".ui-header-fixed, .ui-footer-fixed"),
                    c = this._page().find(".ui-header-fixed, .ui-footer-fixed"),
                    d = b.add(c).addClass(this.options.classes.pageFixedToolbar);
                return d
            },
            _getPosDisplayClasses: function(a) {
                return a + "-position-" + this.options.position + " " + a + "-display-" + this.options.display
            },
            _getPanelClasses: function() {
                var a = this.options.classes.panel + " " + this._getPosDisplayClasses(this.options.classes.panel) + " " + this.options.classes.panelClosed + " ui-body-" + (this.options.theme ? this.options.theme : "inherit");
                return this.options.positionFixed && (a += " " + this.options.classes.panelFixed), a
            },
            _addPanelClasses: function() {
                this.element.addClass(this._getPanelClasses())
            },
            _handleCloseClick: function(a) {
                a.isDefaultPrevented() || this.close()
            },
            _bindCloseEvents: function() {
                this._on(this._closeLink, {
                    click: "_handleCloseClick"
                }), this._on({
                    "click a:jqmData(ajax='false')": "_handleCloseClick"
                })
            },
            _positionPanel: function(b) {
                var c = this,
                    d = c._panelInner.outerHeight(),
                    e = d > a.mobile.getScreenHeight();
                e || !c.options.positionFixed ? (e && (c._unfixPanel(), a.mobile.resetActivePageHeight(d)), b && this.window[0].scrollTo(0, a.mobile.defaultHomeScroll)) : c._fixPanel()
            },
            _bindFixListener: function() {
                this._on(a(b), {
                    throttledresize: "_positionPanel"
                })
            },
            _unbindFixListener: function() {
                this._off(a(b), "throttledresize")
            },
            _unfixPanel: function() {
                this.options.positionFixed && a.support.fixedPosition && this.element.removeClass(this.options.classes.panelFixed)
            },
            _fixPanel: function() {
                this.options.positionFixed && a.support.fixedPosition && this.element.addClass(this.options.classes.panelFixed)
            },
            _bindUpdateLayout: function() {
                var a = this;
                a.element.on("updatelayout", function() {
                    a._open && a._positionPanel()
                })
            },
            _bindLinkListeners: function() {
                this._on("body", {
                    "click a": "_handleClick"
                })
            },
            _handleClick: function(b) {
                var d, e = this.element.attr("id");
                b.currentTarget.href.split("#")[1] === e && e !== c && (b.preventDefault(), d = a(b.target), d.hasClass("ui-btn") && (d.addClass(a.mobile.activeBtnClass), this.element.one("panelopen panelclose", function() {
                    d.removeClass(a.mobile.activeBtnClass)
                })), this.toggle())
            },
            _bindSwipeEvents: function() {
                var a = this,
                    b = a._modal ? a.element.add(a._modal) : a.element;
                a.options.swipeClose && ("left" === a.options.position ? b.on("swipeleft.panel", function() {
                    a.close()
                }) : b.on("swiperight.panel", function() {
                    a.close()
                }))
            },
            _bindPageEvents: function() {
                var a = this;
                this.document.on("panelbeforeopen", function(b) {
                    a._open && b.target !== a.element[0] && a.close()
                }).on("keyup.panel", function(b) {
                    27 === b.keyCode && a._open && a.close()
                }), this._parentPage || "overlay" === this.options.display || this._on(this.document, {
                    pageshow: function() {
                        this._openedPage = null, this._getWrapper()
                    }
                }), a._parentPage ? this.document.on("pagehide", ":jqmData(role='page')", function() {
                    a._open && a.close(!0)
                }) : this.document.on("pagebeforehide", function() {
                    a._open && a.close(!0)
                })
            },
            _open: !1,
            _pageContentOpenClasses: null,
            _modalOpenClasses: null,
            open: function(b) {
                if (!this._open) {
                    var c = this,
                        d = c.options,
                        e = function() {
                            c._off(c.document, "panelclose"), c._page().jqmData("panel", "open"), a.support.cssTransform3d && d.animate && "overlay" !== d.display && (c._wrapper.addClass(d.classes.animate), c._fixedToolbars().addClass(d.classes.animate)), !b && a.support.cssTransform3d && d.animate ? (c._wrapper || c.element).animationComplete(f, "transition") : setTimeout(f, 0), d.theme && "overlay" !== d.display && c._page().parent().addClass(d.classes.pageContainer + "-themed " + d.classes.pageContainer + "-" + d.theme), c.element.removeClass(d.classes.panelClosed).addClass(d.classes.panelOpen), c._positionPanel(!0), c._pageContentOpenClasses = c._getPosDisplayClasses(d.classes.pageContentPrefix), "overlay" !== d.display && (c._page().parent().addClass(d.classes.pageContainer), c._wrapper.addClass(c._pageContentOpenClasses), c._fixedToolbars().addClass(c._pageContentOpenClasses)), c._modalOpenClasses = c._getPosDisplayClasses(d.classes.modal) + " " + d.classes.modalOpen, c._modal && c._modal.addClass(c._modalOpenClasses).height(Math.max(c._modal.height(), c.document.height()))
                        },
                        f = function() {
                            c._open && ("overlay" !== d.display && (c._wrapper.addClass(d.classes.pageContentPrefix + "-open"), c._fixedToolbars().addClass(d.classes.pageContentPrefix + "-open")), c._bindFixListener(), c._trigger("open"), c._openedPage = c._page())
                        };
                    c._trigger("beforeopen"), "open" === c._page().jqmData("panel") ? c._on(c.document, {
                        panelclose: e
                    }) : e(), c._open = !0
                }
            },
            close: function(b) {
                if (this._open) {
                    var c = this,
                        d = this.options,
                        e = function() {
                            c.element.removeClass(d.classes.panelOpen), "overlay" !== d.display && (c._wrapper.removeClass(c._pageContentOpenClasses), c._fixedToolbars().removeClass(c._pageContentOpenClasses)), !b && a.support.cssTransform3d && d.animate ? (c._wrapper || c.element).animationComplete(f, "transition") : setTimeout(f, 0), c._modal && c._modal.removeClass(c._modalOpenClasses).height("")
                        },
                        f = function() {
                            d.theme && "overlay" !== d.display && c._page().parent().removeClass(d.classes.pageContainer + "-themed " + d.classes.pageContainer + "-" + d.theme), c.element.addClass(d.classes.panelClosed), "overlay" !== d.display && (c._page().parent().removeClass(d.classes.pageContainer), c._wrapper.removeClass(d.classes.pageContentPrefix + "-open"), c._fixedToolbars().removeClass(d.classes.pageContentPrefix + "-open")), a.support.cssTransform3d && d.animate && "overlay" !== d.display && (c._wrapper.removeClass(d.classes.animate), c._fixedToolbars().removeClass(d.classes.animate)), c._fixPanel(), c._unbindFixListener(), a.mobile.resetActivePageHeight(), c._page().jqmRemoveData("panel"), c._trigger("close"), c._openedPage = null
                        };
                    c._trigger("beforeclose"), e(), c._open = !1
                }
            },
            toggle: function() {
                this[this._open ? "close" : "open"]()
            },
            _destroy: function() {
                var b, c = this.options,
                    d = a("body > :mobile-panel").length + a.mobile.activePage.find(":mobile-panel").length > 1;
                "overlay" !== c.display && (b = a("body > :mobile-panel").add(a.mobile.activePage.find(":mobile-panel")), 0 === b.not(".ui-panel-display-overlay").not(this.element).length && this._wrapper.children().unwrap(), this._open && (this._fixedToolbars().removeClass(c.classes.pageContentPrefix + "-open"), a.support.cssTransform3d && c.animate && this._fixedToolbars().removeClass(c.classes.animate), this._page().parent().removeClass(c.classes.pageContainer), c.theme && this._page().parent().removeClass(c.classes.pageContainer + "-themed " + c.classes.pageContainer + "-" + c.theme))), d || this.document.off("panelopen panelclose"), this._open && this._page().jqmRemoveData("panel"), this._panelInner.children().unwrap(), this.element.removeClass([this._getPanelClasses(), c.classes.panelOpen, c.classes.animate].join(" ")).off("swipeleft.panel swiperight.panel").off("panelbeforeopen").off("panelhide").off("keyup.panel").off("updatelayout"), this._modal && this._modal.remove()
            }
        })
    }(a),
    function(a, b) {
        a.widget("mobile.table", {
            options: {
                classes: {
                    table: "ui-table"
                },
                enhanced: !1
            },
            _create: function() {
                this.options.enhanced || this.element.addClass(this.options.classes.table), a.extend(this, {
                    headers: b,
                    allHeaders: b
                }), this._refresh(!0)
            },
            _setHeaders: function() {
                var a = this.element.find("thead tr");
                this.headers = this.element.find("tr:eq(0)").children(), this.allHeaders = this.headers.add(a.children())
            },
            refresh: function() {
                this._refresh()
            },
            rebuild: a.noop,
            _refresh: function() {
                var b = this.element,
                    c = b.find("thead tr");
                this._setHeaders(), c.each(function() {
                    var d = 0;
                    a(this).children().each(function() {
                        var e, f = parseInt(this.getAttribute("colspan"), 10),
                            g = ":nth-child(" + (d + 1) + ")";
                        if (this.setAttribute("data-" + a.mobile.ns + "colstart", d + 1), f)
                            for (e = 0; f - 1 > e; e++) d++, g += ", :nth-child(" + (d + 1) + ")";
                        a(this).jqmData("cells", b.find("tr").not(c.eq(0)).not(this).children(g)), d++
                    })
                })
            }
        })
    }(a),
    function(a) {
        a.widget("mobile.table", a.mobile.table, {
            options: {
                mode: "columntoggle",
                columnBtnTheme: null,
                columnPopupTheme: null,
                columnBtnText: "Columns...",
                classes: a.extend(a.mobile.table.prototype.options.classes, {
                    popup: "ui-table-columntoggle-popup",
                    columnBtn: "ui-table-columntoggle-btn",
                    priorityPrefix: "ui-table-priority-",
                    columnToggleTable: "ui-table-columntoggle"
                })
            },
            _create: function() {
                this._super(), "columntoggle" === this.options.mode && (a.extend(this, {
                    _menu: null
                }), this.options.enhanced ? (this._menu = a(this.document[0].getElementById(this._id() + "-popup")).children().first(), this._addToggles(this._menu, !0)) : (this._menu = this._enhanceColToggle(), this.element.addClass(this.options.classes.columnToggleTable)), this._setupEvents(), this._setToggleState())
            },
            _id: function() {
                return this.element.attr("id") || this.widgetName + this.uuid
            },
            _setupEvents: function() {
                this._on(this.window, {
                    throttledresize: "_setToggleState"
                }), this._on(this._menu, {
                    "change input": "_menuInputChange"
                })
            },
            _addToggles: function(b, c) {
                var d, e = 0,
                    f = this.options,
                    g = b.controlgroup("container");
                c ? d = b.find("input") : g.empty(), this.headers.not("td").each(function() {
                    var b, h, i = a(this),
                        j = a.mobile.getAttribute(this, "priority");
                    j && (h = i.add(i.jqmData("cells")), h.addClass(f.classes.priorityPrefix + j), b = (c ? d.eq(e++) : a("<label><input type='checkbox' checked />" + (i.children("abbr").first().attr("title") || i.text()) + "</label>").appendTo(g).children(0).checkboxradio({
                        theme: f.columnPopupTheme
                    })).jqmData("header", i).jqmData("cells", h), i.jqmData("input", b))
                }), c || b.controlgroup("refresh")
            },
            _menuInputChange: function(b) {
                var c = a(b.target),
                    d = c[0].checked;
                c.jqmData("cells").toggleClass("ui-table-cell-hidden", !d).toggleClass("ui-table-cell-visible", d)
            },
            _unlockCells: function(a) {
                a.removeClass("ui-table-cell-hidden ui-table-cell-visible")
            },
            _enhanceColToggle: function() {
                var b, c, d, e, f = this.element,
                    g = this.options,
                    h = a.mobile.ns,
                    i = this.document[0].createDocumentFragment();
                return b = this._id() + "-popup", c = a("<a href='#" + b + "' class='" + g.classes.columnBtn + " ui-btn ui-btn-" + (g.columnBtnTheme || "a") + " ui-corner-all ui-shadow ui-mini' data-" + h + "rel='popup'>" + g.columnBtnText + "</a>"), d = a("<div class='" + g.classes.popup + "' id='" + b + "'></div>"), e = a("<fieldset></fieldset>").controlgroup(), this._addToggles(e, !1), e.appendTo(d), i.appendChild(d[0]), i.appendChild(c[0]), f.before(i), d.popup(), e
            },
            rebuild: function() {
                this._super(), "columntoggle" === this.options.mode && this._refresh(!1)
            },
            _refresh: function(b) {
                var c, d, e;
                if (this._super(b), !b && "columntoggle" === this.options.mode)
                    for (c = this.headers, d = [], this._menu.find("input").each(function() {
                            var b = a(this),
                                e = b.jqmData("header"),
                                f = c.index(e[0]);
                            f > -1 && !b.prop("checked") && d.push(f)
                        }), this._unlockCells(this.element.find(".ui-table-cell-hidden, .ui-table-cell-visible")), this._addToggles(this._menu, b), e = d.length - 1; e > -1; e--) c.eq(d[e]).jqmData("input").prop("checked", !1).checkboxradio("refresh").trigger("change")
            },
            _setToggleState: function() {
                this._menu.find("input").each(function() {
                    var b = a(this);
                    this.checked = "table-cell" === b.jqmData("cells").eq(0).css("display"), b.checkboxradio("refresh")
                })
            },
            _destroy: function() {
                this._super()
            }
        })
    }(a),
    function(a) {
        a.widget("mobile.table", a.mobile.table, {
            options: {
                mode: "reflow",
                classes: a.extend(a.mobile.table.prototype.options.classes, {
                    reflowTable: "ui-table-reflow",
                    cellLabels: "ui-table-cell-label"
                })
            },
            _create: function() {
                this._super(), "reflow" === this.options.mode && (this.options.enhanced || (this.element.addClass(this.options.classes.reflowTable), this._updateReflow()))
            },
            rebuild: function() {
                this._super(), "reflow" === this.options.mode && this._refresh(!1)
            },
            _refresh: function(a) {
                this._super(a), a || "reflow" !== this.options.mode || this._updateReflow()
            },
            _updateReflow: function() {
                var b = this,
                    c = this.options;
                a(b.allHeaders.get().reverse()).each(function() {
                    var d, e, f = a(this).jqmData("cells"),
                        g = a.mobile.getAttribute(this, "colstart"),
                        h = f.not(this).filter("thead th").length && " ui-table-cell-label-top",
                        i = a(this).clone().contents();
                    i.length > 0 && (h ? (d = parseInt(this.getAttribute("colspan"), 10), e = "", d && (e = "td:nth-child(" + d + "n + " + g + ")"), b._addLabels(f.filter(e), c.classes.cellLabels + h, i)) : b._addLabels(f, c.classes.cellLabels, i))
                })
            },
            _addLabels: function(b, c, d) {
                1 === d.length && "abbr" === d[0].nodeName.toLowerCase() && (d = d.eq(0).attr("title")), b.not(":has(b." + c + ")").prepend(a("<b class='" + c + "'></b>").append(d))
            }
        })
    }(a),
    function(a, c) {
        var d = function(b, c) {
            return -1 === ("" + (a.mobile.getAttribute(this, "filtertext") || a(this).text())).toLowerCase().indexOf(c)
        };
        a.widget("mobile.filterable", {
            initSelector: ":jqmData(filter='true')",
            options: {
                filterReveal: !1,
                filterCallback: d,
                enhanced: !1,
                input: null,
                children: "> li, > option, > optgroup option, > tbody tr, > .ui-controlgroup-controls > .ui-btn, > .ui-controlgroup-controls > .ui-checkbox, > .ui-controlgroup-controls > .ui-radio"
            },
            _create: function() {
                var b = this.options;
                a.extend(this, {
                    _search: null,
                    _timer: 0
                }), this._setInput(b.input), b.enhanced || this._filterItems((this._search && this._search.val() || "").toLowerCase())
            },
            _onKeyUp: function() {
                var c, d, e = this._search;
                if (e) {
                    if (c = e.val().toLowerCase(), d = a.mobile.getAttribute(e[0], "lastval") + "", d && d === c) return;
                    this._timer && (b.clearTimeout(this._timer), this._timer = 0), this._timer = this._delay(function() {
                        return this._trigger("beforefilter", null, {
                            input: e
                        }) === !1 ? !1 : (e[0].setAttribute("data-" + a.mobile.ns + "lastval", c), this._filterItems(c), void(this._timer = 0))
                    }, 250)
                }
            },
            _getFilterableItems: function() {
                var b = this.element,
                    c = this.options.children,
                    d = c ? a.isFunction(c) ? c() : c.nodeName ? a(c) : c.jquery ? c : this.element.find(c) : {
                        length: 0
                    };
                return 0 === d.length && (d = b.children()), d
            },
            _filterItems: function(b) {
                var c, e, f, g, h = [],
                    i = [],
                    j = this.options,
                    k = this._getFilterableItems();
                if (null != b)
                    for (e = j.filterCallback || d, f = k.length, c = 0; f > c; c++) g = e.call(k[c], c, b) ? i : h, g.push(k[c]);
                0 === i.length ? k[j.filterReveal && 0 === b.length ? "addClass" : "removeClass"]("ui-screen-hidden") : (a(i).addClass("ui-screen-hidden"), a(h).removeClass("ui-screen-hidden")), this._refreshChildWidget(), this._trigger("filter", null, {
                    items: k
                })
            },
            _refreshChildWidget: function() {
                var b, c, d = ["collapsibleset", "selectmenu", "controlgroup", "listview"];
                for (c = d.length - 1; c > -1; c--) b = d[c], a.mobile[b] && (b = this.element.data("mobile-" + b), b && a.isFunction(b.refresh) && b.refresh())
            },
            _setInput: function(c) {
                var d = this._search;
                this._timer && (b.clearTimeout(this._timer), this._timer = 0), d && (this._off(d, "keyup change input"), d = null), c && (d = c.jquery ? c : c.nodeName ? a(c) : this.document.find(c), this._on(d, {
                    keydown: "_onKeyDown",
                    keypress: "_onKeyPress",
                    keyup: "_onKeyUp",
                    change: "_onKeyUp",
                    input: "_onKeyUp"
                })), this._search = d
            },
            _onKeyDown: function(b) {
                b.keyCode === a.ui.keyCode.ENTER && (b.preventDefault(), this._preventKeyPress = !0)
            },
            _onKeyPress: function(a) {
                this._preventKeyPress && (a.preventDefault(), this._preventKeyPress = !1)
            },
            _setOptions: function(a) {
                var b = !(a.filterReveal === c && a.filterCallback === c && a.children === c);
                this._super(a), a.input !== c && (this._setInput(a.input), b = !0), b && this.refresh()
            },
            _destroy: function() {
                var a = this.options,
                    b = this._getFilterableItems();
                a.enhanced ? b.toggleClass("ui-screen-hidden", a.filterReveal) : b.removeClass("ui-screen-hidden")
            },
            refresh: function() {
                this._timer && (b.clearTimeout(this._timer), this._timer = 0), this._filterItems((this._search && this._search.val() || "").toLowerCase())
            }
        })
    }(a),
    function(a, b) {
        var c = function(a, b) {
                return function(c) {
                    b.call(this, c), a._syncTextInputOptions(c)
                }
            },
            d = /(^|\s)ui-li-divider(\s|$)/,
            e = a.mobile.filterable.prototype.options.filterCallback;
        a.mobile.filterable.prototype.options.filterCallback = function(a, b) {
            return !this.className.match(d) && e.call(this, a, b)
        }, a.widget("mobile.filterable", a.mobile.filterable, {
            options: {
                filterPlaceholder: "Filter items...",
                filterTheme: null
            },
            _create: function() {
                var b, c, d = this.element,
                    e = ["collapsibleset", "selectmenu", "controlgroup", "listview"],
                    f = {};
                for (this._super(), a.extend(this, {
                        _widget: null
                    }), b = e.length - 1; b > -1; b--)
                    if (c = e[b], a.mobile[c]) {
                        if (this._setWidget(d.data("mobile-" + c))) break;
                        f[c + "create"] = "_handleCreate"
                    }
                this._widget || this._on(d, f)
            },
            _handleCreate: function(a) {
                this._setWidget(this.element.data("mobile-" + a.type.substring(0, a.type.length - 6)))
            },
            _trigger: function(a, b, c) {
                return this._widget && "mobile-listview" === this._widget.widgetFullName && "beforefilter" === a && this._widget._trigger("beforefilter", b, c), this._super(a, b, c)
            },
            _setWidget: function(a) {
                return !this._widget && a && (this._widget = a, this._widget._setOptions = c(this, this._widget._setOptions)), this._widget && (this._syncTextInputOptions(this._widget.options), "listview" === this._widget.widgetName && (this._widget.options.hideDividers = !0, this._widget.element.listview("refresh"))), !!this._widget
            },
            _isSearchInternal: function() {
                return this._search && this._search.jqmData("ui-filterable-" + this.uuid + "-internal")
            },
            _setInput: function(b) {
                var c = this.options,
                    d = !0,
                    e = {};
                if (!b) {
                    if (this._isSearchInternal()) return;
                    d = !1, b = a("<input data-" + a.mobile.ns + "type='search' placeholder='" + c.filterPlaceholder + "'></input>").jqmData("ui-filterable-" + this.uuid + "-internal", !0), a("<form class='ui-filterable'></form>").append(b).submit(function(a) {
                        a.preventDefault(), b.blur()
                    }).insertBefore(this.element), a.mobile.textinput && (null != this.options.filterTheme && (e.theme = c.filterTheme), b.textinput(e))
                }
                this._super(b), this._isSearchInternal() && d && this._search.attr("placeholder", this.options.filterPlaceholder)
            },
            _setOptions: function(c) {
                var d = this._super(c);
                return c.filterPlaceholder !== b && this._isSearchInternal() && this._search.attr("placeholder", c.filterPlaceholder), c.filterTheme !== b && this._search && a.mobile.textinput && this._search.textinput("option", "theme", c.filterTheme), d
            },
            _refreshChildWidget: function() {
                this._refreshingChildWidget = !0, this._superApply(arguments), this._refreshingChildWidget = !1
            },
            refresh: function() {
                this._refreshingChildWidget || this._superApply(arguments)
            },
            _destroy: function() {
                this._isSearchInternal() && this._search.remove(), this._super()
            },
            _syncTextInputOptions: function(c) {
                var d, e = {};
                if (this._isSearchInternal() && a.mobile.textinput) {
                    for (d in a.mobile.textinput.prototype.options) c[d] !== b && (e[d] = "theme" === d && null != this.options.filterTheme ? this.options.filterTheme : c[d]);
                    this._search.textinput("option", e)
                }
            }
        }), a.widget("mobile.listview", a.mobile.listview, {
            options: {
                filter: !1
            },
            _create: function() {
                return this.options.filter !== !0 || this.element.data("mobile-filterable") || this.element.filterable(), this._super()
            },
            refresh: function() {
                var a;
                this._superApply(arguments), this.options.filter === !0 && (a = this.element.data("mobile-filterable"), a && a.refresh())
            }
        })
    }(a),
    function(a, b) {
        function c() {
            return ++e
        }

        function d(a) {
            return a.hash.length > 1 && decodeURIComponent(a.href.replace(f, "")) === decodeURIComponent(location.href.replace(f, ""))
        }
        var e = 0,
            f = /#.*$/;
        a.widget("ui.tabs", {
            version: "fadf2b312a05040436451c64bbfaf4814bc62c56",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _create: function() {
                var b = this,
                    c = this.options;
                this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", c.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(b) {
                    a(this).is(".ui-state-disabled") && b.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                    a(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this._processTabs(), c.active = this._initialActive(), a.isArray(c.disabled) && (c.disabled = a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function(a) {
                    return b.tabs.index(a)
                }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(c.active) : a(), this._refresh(), this.active.length && this.load(c.active)
            },
            _initialActive: function() {
                var b = this.options.active,
                    c = this.options.collapsible,
                    d = location.hash.substring(1);
                return null === b && (d && this.tabs.each(function(c, e) {
                    return a(e).attr("aria-controls") === d ? (b = c, !1) : void 0
                }), null === b && (b = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === b || -1 === b) && (b = this.tabs.length ? 0 : !1)), b !== !1 && (b = this.tabs.index(this.tabs.eq(b)), -1 === b && (b = c ? !1 : 0)), !c && b === !1 && this.anchors.length && (b = 0), b
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : a()
                }
            },
            _tabKeydown: function(b) {
                var c = a(this.document[0].activeElement).closest("li"),
                    d = this.tabs.index(c),
                    e = !0;
                if (!this._handlePageNav(b)) {
                    switch (b.keyCode) {
                        case a.ui.keyCode.RIGHT:
                        case a.ui.keyCode.DOWN:
                            d++;
                            break;
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.LEFT:
                            e = !1, d--;
                            break;
                        case a.ui.keyCode.END:
                            d = this.anchors.length - 1;
                            break;
                        case a.ui.keyCode.HOME:
                            d = 0;
                            break;
                        case a.ui.keyCode.SPACE:
                            return b.preventDefault(), clearTimeout(this.activating), void this._activate(d);
                        case a.ui.keyCode.ENTER:
                            return b.preventDefault(), clearTimeout(this.activating), void this._activate(d === this.options.active ? !1 : d);
                        default:
                            return
                    }
                    b.preventDefault(), clearTimeout(this.activating), d = this._focusNextTab(d, e), b.ctrlKey || (c.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), this.activating = this._delay(function() {
                        this.option("active", d)
                    }, this.delay))
                }
            },
            _panelKeydown: function(b) {
                this._handlePageNav(b) || b.ctrlKey && b.keyCode === a.ui.keyCode.UP && (b.preventDefault(), this.active.focus())
            },
            _handlePageNav: function(b) {
                return b.altKey && b.keyCode === a.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : b.altKey && b.keyCode === a.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function(b, c) {
                function d() {
                    return b > e && (b = 0), 0 > b && (b = e), b
                }
                for (var e = this.tabs.length - 1; - 1 !== a.inArray(d(), this.options.disabled);) b = c ? b + 1 : b - 1;
                return b
            },
            _focusNextTab: function(a, b) {
                return a = this._findNextTab(a, b), this.tabs.eq(a).focus(), a
            },
            _setOption: function(a, b) {
                return "active" === a ? void this._activate(b) : "disabled" === a ? void this._setupDisabled(b) : (this._super(a, b), "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", b), b || this.options.active !== !1 || this._activate(0)), "event" === a && this._setupEvents(b), void("heightStyle" === a && this._setupHeightStyle(b)))
            },
            _tabId: function(a) {
                return a.attr("aria-controls") || "ui-tabs-" + c()
            },
            _sanitizeSelector: function(a) {
                return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function() {
                var b = this.options,
                    c = this.tablist.children(":has(a[href])");
                b.disabled = a.map(c.filter(".ui-state-disabled"), function(a) {
                    return c.index(a)
                }), this._processTabs(), b.active !== !1 && this.anchors.length ? this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1, this.active = a()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active = this.tabs.index(this.active) : (b.active = !1, this.active = a()), this._refresh()
            },
            _refresh: function() {
                this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var b = this;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                }), this.anchors = this.tabs.map(function() {
                    return a("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                }), this.panels = a(), this.anchors.each(function(c, e) {
                    var f, g, h, i = a(e).uniqueId().attr("id"),
                        j = a(e).closest("li"),
                        k = j.attr("aria-controls");
                    d(e) ? (f = e.hash, g = b.element.find(b._sanitizeSelector(f))) : (h = b._tabId(j), f = "#" + h, g = b.element.find(f), g.length || (g = b._createPanel(h), g.insertAfter(b.panels[c - 1] || b.tablist)), g.attr("aria-live", "polite")), g.length && (b.panels = b.panels.add(g)), k && j.data("ui-tabs-aria-controls", k), j.attr({
                        "aria-controls": f.substring(1),
                        "aria-labelledby": i
                    }), g.attr("aria-labelledby", i)
                }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
            },
            _getList: function() {
                return this.element.find("ol,ul").eq(0)
            },
            _createPanel: function(b) {
                return a("<div>").attr("id", b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function(b) {
                a.isArray(b) && (b.length ? b.length === this.anchors.length && (b = !0) : b = !1);
                for (var c, d = 0; c = this.tabs[d]; d++) b === !0 || -1 !== a.inArray(d, b) ? a(c).addClass("ui-state-disabled").attr("aria-disabled", "true") : a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = b
            },
            _setupEvents: function(b) {
                var c = {
                    click: function(a) {
                        a.preventDefault()
                    }
                };
                b && a.each(b.split(" "), function(a, b) {
                    c[b] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, c), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(b) {
                var c, d = this.element.parent();
                "fill" === b ? (c = d.height(), c -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                    var b = a(this),
                        d = b.css("position");
                    "absolute" !== d && "fixed" !== d && (c -= b.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function() {
                    c -= a(this).outerHeight(!0)
                }), this.panels.each(function() {
                    a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()))
                }).css("overflow", "auto")) : "auto" === b && (c = 0, this.panels.each(function() {
                    c = Math.max(c, a(this).height("").height())
                }).height(c))
            },
            _eventHandler: function(b) {
                var c = this.options,
                    d = this.active,
                    e = a(b.currentTarget),
                    f = e.closest("li"),
                    g = f[0] === d[0],
                    h = g && c.collapsible,
                    i = h ? a() : this._getPanelForTab(f),
                    j = d.length ? this._getPanelForTab(d) : a(),
                    k = {
                        oldTab: d,
                        oldPanel: j,
                        newTab: h ? a() : f,
                        newPanel: i
                    };
                b.preventDefault(), f.hasClass("ui-state-disabled") || f.hasClass("ui-tabs-loading") || this.running || g && !c.collapsible || this._trigger("beforeActivate", b, k) === !1 || (c.active = h ? !1 : this.tabs.index(f), this.active = g ? a() : f, this.xhr && this.xhr.abort(), j.length || i.length || a.error("jQuery UI Tabs: Mismatching fragment identifier."), i.length && this.load(this.tabs.index(f), b), this._toggle(b, k))
            },
            _toggle: function(b, c) {
                function d() {
                    f.running = !1, f._trigger("activate", b, c)
                }

                function e() {
                    c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), g.length && f.options.show ? f._show(g, f.options.show, d) : (g.show(), d())
                }
                var f = this,
                    g = c.newPanel,
                    h = c.oldPanel;
                this.running = !0, h.length && this.options.hide ? this._hide(h, this.options.hide, function() {
                    c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), e()
                }) : (c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), h.hide(), e()), h.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), c.oldTab.attr("aria-selected", "false"), g.length && h.length ? c.oldTab.attr("tabIndex", -1) : g.length && this.tabs.filter(function() {
                    return 0 === a(this).attr("tabIndex")
                }).attr("tabIndex", -1), g.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }), c.newTab.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                })
            },
            _activate: function(b) {
                var c, d = this._findActive(b);
                d[0] !== this.active[0] && (d.length || (d = this.active), c = d.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: c,
                    currentTarget: c,
                    preventDefault: a.noop
                }))
            },
            _findActive: function(b) {
                return b === !1 ? a() : this.tabs.eq(b)
            },
            _getIndex: function(a) {
                return "string" == typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))), a
            },
            _destroy: function() {
                this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                    a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }), this.tabs.each(function() {
                    var b = a(this),
                        c = b.data("ui-tabs-aria-controls");
                    c ? b.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : b.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function(c) {
                var d = this.options.disabled;
                d !== !1 && (c === b ? d = !1 : (c = this._getIndex(c), d = a.isArray(d) ? a.map(d, function(a) {
                    return a !== c ? a : null
                }) : a.map(this.tabs, function(a, b) {
                    return b !== c ? b : null
                })), this._setupDisabled(d))
            },
            disable: function(c) {
                var d = this.options.disabled;
                if (d !== !0) {
                    if (c === b) d = !0;
                    else {
                        if (c = this._getIndex(c), -1 !== a.inArray(c, d)) return;
                        d = a.isArray(d) ? a.merge([c], d).sort() : [c]
                    }
                    this._setupDisabled(d)
                }
            },
            load: function(b, c) {
                b = this._getIndex(b);
                var e = this,
                    f = this.tabs.eq(b),
                    g = f.find(".ui-tabs-anchor"),
                    h = this._getPanelForTab(f),
                    i = {
                        tab: f,
                        panel: h
                    };
                d(g[0]) || (this.xhr = a.ajax(this._ajaxSettings(g, c, i)), this.xhr && "canceled" !== this.xhr.statusText && (f.addClass("ui-tabs-loading"), h.attr("aria-busy", "true"), this.xhr.success(function(a) {
                    setTimeout(function() {
                        h.html(a), e._trigger("load", c, i)
                    }, 1)
                }).complete(function(a, b) {
                    setTimeout(function() {
                        "abort" === b && e.panels.stop(!1, !0), f.removeClass("ui-tabs-loading"), h.removeAttr("aria-busy"), a === e.xhr && delete e.xhr
                    }, 1)
                })))
            },
            _ajaxSettings: function(b, c, d) {
                var e = this;
                return {
                    url: b.attr("href"),
                    beforeSend: function(b, f) {
                        return e._trigger("beforeLoad", c, a.extend({
                            jqXHR: b,
                            ajaxSettings: f
                        }, d))
                    }
                }
            },
            _getPanelForTab: function(b) {
                var c = a(b).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + c))
            }
        })
    }(a),
    function() {}(a),
    function(a, b) {
        function c(a) {
            e = a.originalEvent, i = e.accelerationIncludingGravity, f = Math.abs(i.x), g = Math.abs(i.y), h = Math.abs(i.z), !b.orientation && (f > 7 || (h > 6 && 8 > g || 8 > h && g > 6) && f > 5) ? d.enabled && d.disable() : d.enabled || d.enable()
        }
        a.mobile.iosorientationfixEnabled = !0;
        var d, e, f, g, h, i, j = navigator.userAgent;
        return /iPhone|iPad|iPod/.test(navigator.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(j) && j.indexOf("AppleWebKit") > -1 ? (d = a.mobile.zoom, void a.mobile.document.on("mobileinit", function() {
            a.mobile.iosorientationfixEnabled && a.mobile.window.bind("orientationchange.iosorientationfix", d.enable).bind("devicemotion.iosorientationfix", c)
        })) : void(a.mobile.iosorientationfixEnabled = !1)
    }(a, this),
    function(a, b, d) {
        function e() {
            f.removeClass("ui-mobile-rendering")
        }
        var f = a("html"),
            g = a.mobile.window;
        a(b.document).trigger("mobileinit"), a.mobile.gradeA() && (a.mobile.ajaxBlacklist && (a.mobile.ajaxEnabled = !1), f.addClass("ui-mobile ui-mobile-rendering"), setTimeout(e, 5e3), a.extend(a.mobile, {
            initializePage: function() {
                var b = a.mobile.path,
                    f = a(":jqmData(role='page'), :jqmData(role='dialog')"),
                    h = b.stripHash(b.stripQueryParams(b.parseLocation().hash)),
                    i = a.mobile.path.parseLocation(),
                    j = h ? c.getElementById(h) : d;
                f.length || (f = a("body").wrapInner("<div data-" + a.mobile.ns + "role='page'></div>").children(0)), f.each(function() {
                    var c = a(this);
                    c[0].getAttribute("data-" + a.mobile.ns + "url") || c.attr("data-" + a.mobile.ns + "url", c.attr("id") || b.convertUrlToDataUrl(i.pathname + i.search))
                }), a.mobile.firstPage = f.first(), a.mobile.pageContainer = a.mobile.firstPage.parent().addClass("ui-mobile-viewport").pagecontainer(), a.mobile.navreadyDeferred.resolve(), g.trigger("pagecontainercreate"), a.mobile.loading("show"), e(), a.mobile.hashListeningEnabled && a.mobile.path.isHashValid(location.hash) && (a(j).is(":jqmData(role='page')") || a.mobile.path.isPath(h) || h === a.mobile.dialogHashKey) ? a.event.special.navigate.isPushStateEnabled() ? (a.mobile.navigate.history.stack = [], a.mobile.navigate(a.mobile.path.isPath(location.hash) ? location.hash : location.href)) : g.trigger("hashchange", [!0]) : (a.event.special.navigate.isPushStateEnabled() && a.mobile.navigate.navigator.squash(b.parseLocation().href), a.mobile.changePage(a.mobile.firstPage, {
                    transition: "none",
                    reverse: !0,
                    changeHash: !1,
                    fromHashChange: !0
                }))
            }
        }), a(function() {
            a.support.inlineSVG(), a.mobile.hideUrlBar && b.scrollTo(0, 1), a.mobile.defaultHomeScroll = a.support.scrollTop && 1 !== a.mobile.window.scrollTop() ? 1 : 0, a.mobile.autoInitializePage && a.mobile.initializePage(), a.mobile.hideUrlBar && g.load(a.mobile.silentScroll), a.support.cssPointerEvents || a.mobile.document.delegate(".ui-state-disabled,.ui-disabled", "vclick", function(a) {
                a.preventDefault(), a.stopImmediatePropagation()
            })
        }))
    }(a, this)
});

/**@license
 *       __ _____                     ________                              __
 *      / // _  /__ __ _____ ___ __ _/__  ___/__ ___ ______ __ __  __ ___  / /
 *  __ / // // // // // _  // _// // / / // _  // _//     // //  \/ // _ \/ /
 * /  / // // // // // ___// / / // / / // ___// / / / / // // /\  // // / /__
 * \___//____ \\___//____//_/ _\_  / /_//____//_/ /_/ /_//_//_/ /_/ \__\_\___/
 *           \/              /____/                              version 0.10.12
 *
 * This file is part of jQuery Terminal. http://terminal.jcubic.pl
 *
 * Copyright (c) 2010-2016 Jakub Jankiewicz <http://jcubic.pl>
 * Released under the MIT license
 *
 * Contains:
 *
 * Storage plugin Distributed under the MIT License
 * Copyright (c) 2010 Dave Schindler
 *
 * jQuery Timers licenced with the WTFPL
 * <http://jquery.offput.ca/timers/>
 *
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 *
 * jQuery Caret
 * Copyright (c) 2009, Gideon Sireling
 * 3 clause BSD License
 *
 * sprintf.js
 * Copyright (c) 2007-2013 Alexandru Marasteanu <hello at alexei dot ro>
 * licensed under 3 clause BSD license
 *
 * Date: Thu, 16 Jun 2016 09:23:57 +0000
 */
(function(e) {
    var r = function() {
        if (!r.cache.hasOwnProperty(arguments[0])) {
            r.cache[arguments[0]] = r.parse(arguments[0])
        }
        return r.format.call(null, r.cache[arguments[0]], arguments)
    };
    r.format = function(e, n) {
        var o = 1,
            a = e.length,
            s = "",
            l, f = [],
            c, u, h, p, m, g;
        for (c = 0; c < a; c++) {
            s = t(e[c]);
            if (s === "string") {
                f.push(e[c])
            } else if (s === "array") {
                h = e[c];
                if (h[2]) {
                    l = n[o];
                    for (u = 0; u < h[2].length; u++) {
                        if (!l.hasOwnProperty(h[2][u])) {
                            throw r('[sprintf] property "%s" does not exist', h[2][u])
                        }
                        l = l[h[2][u]]
                    }
                } else if (h[1]) {
                    l = n[h[1]]
                } else {
                    l = n[o++]
                }
                if (/[^s]/.test(h[8]) && t(l) != "number") {
                    throw r("[sprintf] expecting number but found %s", t(l))
                }
                switch (h[8]) {
                    case "b":
                        l = l.toString(2);
                        break;
                    case "c":
                        l = String.fromCharCode(l);
                        break;
                    case "d":
                        l = parseInt(l, 10);
                        break;
                    case "e":
                        l = h[7] ? l.toExponential(h[7]) : l.toExponential();
                        break;
                    case "f":
                        l = h[7] ? parseFloat(l).toFixed(h[7]) : parseFloat(l);
                        break;
                    case "o":
                        l = l.toString(8);
                        break;
                    case "s":
                        l = (l = String(l)) && h[7] ? l.substring(0, h[7]) : l;
                        break;
                    case "u":
                        l = l >>> 0;
                        break;
                    case "x":
                        l = l.toString(16);
                        break;
                    case "X":
                        l = l.toString(16).toUpperCase();
                        break
                }
                l = /[def]/.test(h[8]) && h[3] && l >= 0 ? "+" + l : l;
                m = h[4] ? h[4] == "0" ? "0" : h[4].charAt(1) : " ";
                g = h[6] - String(l).length;
                p = h[6] ? i(m, g) : "";
                f.push(h[5] ? l + p : p + l)
            }
        }
        return f.join("")
    };
    r.cache = {};
    r.parse = function(e) {
        var r = e,
            n = [],
            t = [],
            i = 0;
        while (r) {
            if ((n = /^[^\x25]+/.exec(r)) !== null) {
                t.push(n[0])
            } else if ((n = /^\x25{2}/.exec(r)) !== null) {
                t.push("%")
            } else if ((n = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(r)) !== null) {
                if (n[2]) {
                    i |= 1;
                    var o = [],
                        a = n[2],
                        s = [];
                    if ((s = /^([a-z_][a-z_\d]*)/i.exec(a)) !== null) {
                        o.push(s[1]);
                        while ((a = a.substring(s[0].length)) !== "") {
                            if ((s = /^\.([a-z_][a-z_\d]*)/i.exec(a)) !== null) {
                                o.push(s[1])
                            } else if ((s = /^\[(\d+)\]/.exec(a)) !== null) {
                                o.push(s[1])
                            } else {
                                throw "[sprintf] huh?"
                            }
                        }
                    } else {
                        throw "[sprintf] huh?"
                    }
                    n[2] = o
                } else {
                    i |= 2
                }
                if (i === 3) {
                    throw "[sprintf] mixing positional and named placeholders is not (yet) supported"
                }
                t.push(n)
            } else {
                throw "[sprintf] huh?"
            }
            r = r.substring(n[0].length)
        }
        return t
    };
    var n = function(e, n, t) {
        t = n.slice(0);
        t.splice(0, 0, e);
        return r.apply(null, t)
    };

    function t(e) {
        return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
    }

    function i(e, r) {
        for (var n = []; r > 0; n[--r] = e) {}
        return n.join("")
    }
    e.sprintf = r;
    e.vsprintf = n
})(typeof global != "undefined" ? global : window);
(function(e, r) {
    "use strict";
    e.omap = function(r, n) {
        var t = {};
        e.each(r, function(e, i) {
            t[e] = n.call(r, e, i)
        });
        return t
    };
    var n = {
        clone_object: function(r) {
            var n = {};
            if (typeof r == "object") {
                if (e.isArray(r)) {
                    return this.clone_array(r)
                } else if (r === null) {
                    return r
                } else {
                    for (var t in r) {
                        if (e.isArray(r[t])) {
                            n[t] = this.clone_array(r[t])
                        } else if (typeof r[t] == "object") {
                            n[t] = this.clone_object(r[t])
                        } else {
                            n[t] = r[t]
                        }
                    }
                }
            }
            return n
        },
        clone_array: function(r) {
            if (!e.isFunction(Array.prototype.map)) {
                throw new Error("You'r browser don't support ES5 array map " + "use es5-shim")
            }
            return r.slice(0).map(function(e) {
                if (typeof e == "object") {
                    return this.clone_object(e)
                } else {
                    return e
                }
            }.bind(this))
        }
    };
    var t = function(e) {
        return n.clone_object(e)
    };
    var i = function() {
        var e = "test",
            r = window.localStorage;
        try {
            r.setItem(e, "1");
            r.removeItem(e);
            return true
        } catch (n) {
            return false
        }
    };
    var o = i();

    function a(e, r) {
        var n;
        if (typeof e === "string" && typeof r === "string") {
            localStorage[e] = r;
            return true
        } else if (typeof e === "object" && typeof r === "undefined") {
            for (n in e) {
                if (e.hasOwnProperty(n)) {
                    localStorage[n] = e[n]
                }
            }
            return true
        }
        return false
    }

    function s(e, r) {
        var n, t, i;
        n = new Date;
        n.setTime(n.getTime() + 31536e6);
        t = "; expires=" + n.toGMTString();
        if (typeof e === "string" && typeof r === "string") {
            document.cookie = e + "=" + r + t + "; path=/";
            return true
        } else if (typeof e === "object" && typeof r === "undefined") {
            for (i in e) {
                if (e.hasOwnProperty(i)) {
                    document.cookie = i + "=" + e[i] + t + "; path=/"
                }
            }
            return true
        }
        return false
    }

    function l(e) {
        return localStorage[e]
    }

    function f(e) {
        var r, n, t, i;
        r = e + "=";
        n = document.cookie.split(";");
        for (t = 0; t < n.length; t++) {
            i = n[t];
            while (i.charAt(0) === " ") {
                i = i.substring(1, i.length)
            }
            if (i.indexOf(r) === 0) {
                return i.substring(r.length, i.length)
            }
        }
        return null
    }

    function c(e) {
        return delete localStorage[e]
    }

    function u(e) {
        return s(e, "", -1)
    }
    e.extend({
        Storage: {
            set: o ? a : s,
            get: o ? l : f,
            remove: o ? c : u
        }
    });
    var h = e;
    h.fn.extend({
        everyTime: function(e, r, n, t, i) {
            return this.each(function() {
                h.timer.add(this, e, r, n, t, i)
            })
        },
        oneTime: function(e, r, n) {
            return this.each(function() {
                h.timer.add(this, e, r, n, 1)
            })
        },
        stopTime: function(e, r) {
            return this.each(function() {
                h.timer.remove(this, e, r)
            })
        }
    });
    h.extend({
        timer: {
            guid: 1,
            global: {},
            regex: /^([0-9]+)\s*(.*s)?$/,
            powers: {
                ms: 1,
                cs: 10,
                ds: 100,
                s: 1e3,
                das: 1e4,
                hs: 1e5,
                ks: 1e6
            },
            timeParse: function(e) {
                if (e === r || e === null) {
                    return null
                }
                var n = this.regex.exec(h.trim(e.toString()));
                if (n[2]) {
                    var t = parseInt(n[1], 10);
                    var i = this.powers[n[2]] || 1;
                    return t * i
                } else {
                    return e
                }
            },
            add: function(e, r, n, t, i, o) {
                var a = 0;
                if (h.isFunction(n)) {
                    if (!i) {
                        i = t
                    }
                    t = n;
                    n = r
                }
                r = h.timer.timeParse(r);
                if (typeof r !== "number" || isNaN(r) || r <= 0) {
                    return
                }
                if (i && i.constructor !== Number) {
                    o = !!i;
                    i = 0
                }
                i = i || 0;
                o = o || false;
                if (!e.$timers) {
                    e.$timers = {}
                }
                if (!e.$timers[n]) {
                    e.$timers[n] = {}
                }
                t.$timerID = t.$timerID || this.guid++;
                var s = function() {
                    if (o && s.inProgress) {
                        return
                    }
                    s.inProgress = true;
                    if (++a > i && i !== 0 || t.call(e, a) === false) {
                        h.timer.remove(e, n, t)
                    }
                    s.inProgress = false
                };
                s.$timerID = t.$timerID;
                if (!e.$timers[n][t.$timerID]) {
                    e.$timers[n][t.$timerID] = window.setInterval(s, r)
                }
                if (!this.global[n]) {
                    this.global[n] = []
                }
                this.global[n].push(e)
            },
            remove: function(e, r, n) {
                var t = e.$timers,
                    i;
                if (t) {
                    if (!r) {
                        for (var o in t) {
                            if (t.hasOwnProperty(o)) {
                                this.remove(e, o, n)
                            }
                        }
                    } else if (t[r]) {
                        if (n) {
                            if (n.$timerID) {
                                window.clearInterval(t[r][n.$timerID]);
                                delete t[r][n.$timerID]
                            }
                        } else {
                            for (var a in t[r]) {
                                if (t[r].hasOwnProperty(a)) {
                                    window.clearInterval(t[r][a]);
                                    delete t[r][a]
                                }
                            }
                        }
                        for (i in t[r]) {
                            if (t[r].hasOwnProperty(i)) {
                                break
                            }
                        }
                        if (!i) {
                            i = null;
                            delete t[r]
                        }
                    }
                    for (i in t) {
                        if (t.hasOwnProperty(i)) {
                            break
                        }
                    }
                    if (!i) {
                        e.$timers = null
                    }
                }
            }
        }
    });
    if (/(msie) ([\w.]+)/.exec(navigator.userAgent.toLowerCase())) {
        h(window).one("unload", function() {
            var e = h.timer.global;
            for (var r in e) {
                if (e.hasOwnProperty(r)) {
                    var n = e[r],
                        t = n.length;
                    while (--t) {
                        h.timer.remove(n[t], r)
                    }
                }
            }
        })
    }(function(e) {
        if (!String.prototype.split.toString().match(/\[native/)) {
            return
        }
        var r = String.prototype.split,
            n = /()??/.exec("")[1] === e,
            t;
        t = function(t, i, o) {
            if (Object.prototype.toString.call(i) !== "[object RegExp]") {
                return r.call(t, i, o)
            }
            var a = [],
                s = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.extended ? "x" : "") + (i.sticky ? "y" : ""),
                l = 0,
                f, c, u, h;
            i = new RegExp(i.source, s + "g");
            t += "";
            if (!n) {
                f = new RegExp("^" + i.source + "$(?!\\s)", s)
            }
            o = o === e ? -1 >>> 0 : o >>> 0;
            while (c = i.exec(t)) {
                u = c.index + c[0].length;
                if (u > l) {
                    a.push(t.slice(l, c.index));
                    if (!n && c.length > 1) {
                        c[0].replace(f, function() {
                            for (var r = 1; r < arguments.length - 2; r++) {
                                if (arguments[r] === e) {
                                    c[r] = e
                                }
                            }
                        })
                    }
                    if (c.length > 1 && c.index < t.length) {
                        Array.prototype.push.apply(a, c.slice(1))
                    }
                    h = c[0].length;
                    l = u;
                    if (a.length >= o) {
                        break
                    }
                }
                if (i.lastIndex === c.index) {
                    i.lastIndex++
                }
            }
            if (l === t.length) {
                if (h || !i.test("")) {
                    a.push("")
                }
            } else {
                a.push(t.slice(l))
            }
            return a.length > o ? a.slice(0, o) : a
        };
        String.prototype.split = function(e, r) {
            return t(this, e, r)
        };
        return t
    })();
    e.fn.caret = function(e) {
        var r = this[0];
        var n = r.contentEditable === "true";
        if (arguments.length == 0) {
            if (window.getSelection) {
                if (n) {
                    r.focus();
                    var t = window.getSelection().getRangeAt(0),
                        i = t.cloneRange();
                    i.selectNodeContents(r);
                    i.setEnd(t.endContainer, t.endOffset);
                    return i.toString().length
                }
                return r.selectionStart
            }
            if (document.selection) {
                r.focus();
                if (n) {
                    var t = document.selection.createRange(),
                        i = document.body.createTextRange();
                    i.moveToElementText(r);
                    i.setEndPoint("EndToEnd", t);
                    return i.text.length
                }
                var e = 0,
                    o = r.createTextRange(),
                    i = document.selection.createRange().duplicate(),
                    a = i.getBookmark();
                o.moveToBookmark(a);
                while (o.moveStart("character", -1) !== 0) e++;
                return e
            }
            return 0
        }
        if (e == -1) e = this[n ? "text" : "val"]().length;
        if (window.getSelection) {
            if (n) {
                r.focus();
                window.getSelection().collapse(r.firstChild, e)
            } else r.setSelectionRange(e, e)
        } else if (document.body.createTextRange) {
            var o = document.body.createTextRange();
            o.moveToElementText(r);
            o.moveStart("character", e);
            o.collapse(true);
            o.select()
        }
        if (!n) r.focus();
        return e
    };

    function p(e, r) {
        var n = [];
        var t = e.length;
        if (t < r) {
            return [e]
        } else if (r < 0) {
            throw new Error("str_parts: length can't be negative")
        }
        for (var i = 0; i < t; i += r) {
            n.push(e.substring(i, i + r))
        }
        return n
    }

    function m(r) {
        var n = r ? [r] : [];
        var t = 0;
        e.extend(this, {
            get: function() {
                return n
            },
            rotate: function() {
                if (n.length === 1) {
                    return n[0]
                } else {
                    if (t === n.length - 1) {
                        t = 0
                    } else {
                        ++t
                    }
                    if (n[t]) {
                        return n[t]
                    } else {
                        this.rotate()
                    }
                }
            },
            length: function() {
                return n.length
            },
            remove: function(e) {
                delete n[e]
            },
            set: function(e) {
                for (var r = n.length; r--;) {
                    if (n[r] === e) {
                        t = r;
                        return
                    }
                }
                this.append(e)
            },
            front: function() {
                if (n.length) {
                    var e = t;
                    while (!n[e]) {
                        e++
                    }
                    return n[e]
                }
            },
            append: function(e) {
                n.push(e)
            }
        })
    }

    function g(r) {
        var n = r instanceof Array ? r : r ? [r] : [];
        e.extend(this, {
            map: function(r) {
                return e.map(n, r)
            },
            size: function() {
                return n.length
            },
            pop: function() {
                if (n.length === 0) {
                    return null
                } else {
                    var e = n[n.length - 1];
                    n = n.slice(0, n.length - 1);
                    return e
                }
            },
            push: function(e) {
                n = n.concat([e]);
                return e
            },
            top: function() {
                return n.length > 0 ? n[n.length - 1] : null
            },
            clone: function() {
                return new g(n.slice(0))
            }
        })
    }
    e.json_stringify = function(n, t) {
        var i = "",
            o;
        t = t === r ? 1 : t;
        var a = typeof n;
        switch (a) {
            case "function":
                i += n;
                break;
            case "boolean":
                i += n ? "true" : "false";
                break;
            case "object":
                if (n === null) {
                    i += "null"
                } else if (n instanceof Array) {
                    i += "[";
                    var s = n.length;
                    for (o = 0; o < s - 1; ++o) {
                        i += e.json_stringify(n[o], t + 1)
                    }
                    i += e.json_stringify(n[s - 1], t + 1) + "]"
                } else {
                    i += "{";
                    for (var l in n) {
                        if (n.hasOwnProperty(l)) {
                            i += '"' + l + '":' + e.json_stringify(n[l], t + 1)
                        }
                    }
                    i += "}"
                }
                break;
            case "string":
                var f = n;
                var c = {
                    "\\\\": "\\\\",
                    '"': '\\"',
                    "/": "\\/",
                    "\\n": "\\n",
                    "\\r": "\\r",
                    "\\t": "\\t"
                };
                for (o in c) {
                    if (c.hasOwnProperty(o)) {
                        f = f.replace(new RegExp(o, "g"), c[o])
                    }
                }
                i += '"' + f + '"';
                break;
            case "number":
                i += String(n);
                break
        }
        i += t > 1 ? "," : "";
        if (t === 1) {
            i = i.replace(/,([\]}])/g, "$1")
        }
        return i.replace(/([\[{]),/g, "$1")
    };

    function d(r, n) {
        var t = true;
        var i = "";
        if (typeof r === "string" && r !== "") {
            i = r + "_"
        }
        i += "commands";
        var o = e.Storage.get(i);
        o = o ? e.parseJSON(o) : [];
        var a = o.length - 1;
        e.extend(this, {
            append: function(r) {
                if (t) {
                    if (o[o.length - 1] !== r) {
                        o.push(r);
                        if (n && o.length > n) {
                            o = o.slice(-n)
                        }
                        a = o.length - 1;
                        e.Storage.set(i, e.json_stringify(o))
                    }
                }
            },
            data: function() {
                return o
            },
            reset: function() {
                a = o.length - 1
            },
            last: function() {
                return o[length - 1]
            },
            end: function() {
                return a === o.length - 1
            },
            position: function() {
                return a
            },
            current: function() {
                return o[a]
            },
            next: function() {
                if (a < o.length - 1) {
                    ++a
                }
                if (a !== -1) {
                    return o[a]
                }
            },
            previous: function() {
                var e = a;
                if (a > 0) {
                    --a
                }
                if (e !== -1) {
                    return o[a]
                }
            },
            clear: function() {
                o = [];
                this.purge()
            },
            enabled: function() {
                return t
            },
            enable: function() {
                t = true
            },
            purge: function() {
                e.Storage.remove(i)
            },
            disable: function() {
                t = false
            }
        })
    }
    var v = function() {
        var e = document.createElement("div");
        e.setAttribute("onpaste", "return;");
        return typeof e.onpaste == "function"
    }();
    var w = true;
    e.fn.cmd = function(n) {
        var t = this;
        var i = t.data("cmd");
        if (i) {
            return i
        }
        t.addClass("cmd");
        t.append('<span class="prompt"></span><span></span>' + '<span class="cursor">&nbsp;</span><span></span>');
        var o = e("<textarea />").addClass("clipboard").appendTo(t);
        if (n.width) {
            t.width(n.width)
        }
        var a;
        var s;
        var l = t.find(".prompt");
        var f = false;
        var c = "";
        var u = null;
        var h;
        var m = n.mask || false;
        var g = "";
        var w;
        var y = "";
        var _ = "";
        var C = 0;
        var S;
        var T;
        var F = n.historySize || 60;
        var j, A;
        var E = t.find(".cursor");
        var R;

        function $() {
            if (x) {
                var e = o.is(":focus");
                if (T) {
                    if (!e) {
                        o.focus();
                        t.oneTime(10, function() {
                            o.focus()
                        })
                    }
                } else {
                    if (e) {
                        o.blur()
                    }
                }
            }
        }

        function z() {
            if (x) {
                t.oneTime(10, function() {
                    o.val(g);
                    t.oneTime(10, function() {
                        o.caret(C)
                    })
                })
            }
        }
        if (b && !k) {
            R = function(e) {
                if (e) {
                    E.addClass("blink")
                } else {
                    E.removeClass("blink")
                }
            }
        } else {
            var I = false;
            R = function(e) {
                if (e && !I) {
                    I = true;
                    E.addClass("inverted");
                    t.everyTime(500, "blink", O)
                } else if (I && !e) {
                    I = false;
                    t.stopTime("blink", O);
                    E.removeClass("inverted")
                }
            }
        }

        function O(e) {
            E.toggleClass("inverted")
        }

        function N() {
            S = "(reverse-i-search)`" + c + "': ";
            W()
        }

        function K() {
            S = h;
            f = false;
            u = null;
            c = ""
        }

        function D(r) {
            var n = A.data();
            var i, o;
            var a = n.length;
            if (r && u > 0) {
                a -= u
            }
            if (c.length > 0) {
                for (var s = c.length; s > 0; s--) {
                    o = e.terminal.escape_regex(c.substring(0, s));
                    i = new RegExp(o);
                    for (var l = a; l--;) {
                        if (i.test(n[l])) {
                            u = n.length - l;
                            t.position(n[l].indexOf(o));
                            t.set(n[l], true);
                            H();
                            if (c.length !== s) {
                                c = c.substring(0, s);
                                N()
                            }
                            return
                        }
                    }
                }
            }
            c = ""
        }

        function P() {
            var e = t.width();
            var r = E.width();
            a = Math.floor(e / r)
        }

        function L(e) {
            var r = e.substring(0, a - s);
            var n = e.substring(a - s);
            return [r].concat(p(n, a))
        }
        var H = function(r) {
            var n = E.prev();
            var t = E.next();

            function i(r, i) {
                var o = r.length;
                if (i === o) {
                    n.html(e.terminal.encode(r));
                    E.html("&nbsp;");
                    t.html("")
                } else if (i === 0) {
                    n.html("");
                    E.html(e.terminal.encode(r.slice(0, 1)));
                    t.html(e.terminal.encode(r.slice(1)))
                } else {
                    var a = r.slice(0, i);
                    n.html(e.terminal.encode(a));
                    var s = r.slice(i, i + 1);
                    E.html(e.terminal.encode(s));
                    if (i === r.length - 1) {
                        t.html("")
                    } else {
                        t.html(e.terminal.encode(r.slice(i + 1)))
                    }
                }
            }

            function o(r) {
                return "<div>" + e.terminal.encode(r) + "</div>"
            }

            function l(r) {
                var n = t;
                e.each(r, function(r, t) {
                    n = e(o(t)).insertAfter(n).addClass("clear")
                })
            }

            function f(r) {
                e.each(r, function(e, r) {
                    n.before(o(r))
                })
            }
            var c = 0;
            return function() {
                var c;
                var u;
                switch (typeof m) {
                    case "boolean":
                        c = m ? g.replace(/./g, "*") : g;
                        break;
                    case "string":
                        c = g.replace(/./g, m);
                        break
                }
                var h, d;
                r.find("div").remove();
                n.html("");
                if (c.length > a - s - 1 || c.match(/\n/)) {
                    var v;
                    var w = c.match(/\t/g);
                    var y = w ? w.length * 3 : 0;
                    if (w) {
                        c = c.replace(/\t/g, "\x00\x00\x00\x00")
                    }
                    if (c.match(/\n/)) {
                        var _ = c.split("\n");
                        d = a - s - 1;
                        for (h = 0; h < _.length - 1; ++h) {
                            _[h] += " "
                        }
                        if (_[0].length > d) {
                            v = [_[0].substring(0, d)];
                            u = _[0].substring(d);
                            v = v.concat(p(u, a))
                        } else {
                            v = [_[0]]
                        }
                        for (h = 1; h < _.length; ++h) {
                            if (_[h].length > a) {
                                v = v.concat(p(_[h], a))
                            } else {
                                v.push(_[h])
                            }
                        }
                    } else {
                        v = L(c)
                    }
                    if (w) {
                        v = e.map(v, function(e) {
                            return e.replace(/\x00\x00\x00\x00/g, "	")
                        })
                    }
                    d = v[0].length;
                    if (d === 0 && v.length === 1) {} else if (C < d) {
                        i(v[0], C);
                        l(v.slice(1))
                    } else if (C === d) {
                        n.before(o(v[0]));
                        i(v[1], 0);
                        l(v.slice(2))
                    } else {
                        var b = v.length;
                        var k = 0;
                        if (C < d) {
                            i(v[0], C);
                            l(v.slice(1))
                        } else if (C === d) {
                            n.before(o(v[0]));
                            i(v[1], 0);
                            l(v.slice(2))
                        } else {
                            var x = v.slice(-1)[0];
                            var S = c.length - C - y;
                            var T = x.length;
                            var F = 0;
                            if (S <= T) {
                                f(v.slice(0, -1));
                                if (T === S) {
                                    F = 0
                                } else {
                                    F = T - S
                                }
                                i(x, F)
                            } else {
                                if (b === 3) {
                                    u = e.terminal.encode(v[0]);
                                    n.before("<div>" + u + "</div>");
                                    i(v[1], C - d - 1);
                                    u = e.terminal.encode(v[2]);
                                    t.after('<div class="clear">' + u + "</div>")
                                } else {
                                    var j;
                                    var A;
                                    F = C;
                                    for (h = 0; h < v.length; ++h) {
                                        var R = v[h].length;
                                        if (F > R) {
                                            F -= R
                                        } else {
                                            break
                                        }
                                    }
                                    A = v[h];
                                    j = h;
                                    if (F === A.length) {
                                        F = 0;
                                        A = v[++j]
                                    }
                                    i(A, F);
                                    f(v.slice(0, j));
                                    l(v.slice(j + 1))
                                }
                            }
                        }
                    }
                } else {
                    if (c === "") {
                        n.html("");
                        E.html("&nbsp;");
                        t.html("")
                    } else {
                        i(c, C)
                    }
                }
            }
        }(t);
        var W = function() {
            function r(r) {
                l.html(e.terminal.format(e.terminal.encode(r)));
                s = l.text().length
            }
            return function() {
                switch (typeof S) {
                    case "string":
                        r(S);
                        break;
                    case "function":
                        S(r);
                        break
                }
            }
        }();

        function B(e) {
            e = e.originalEvent;
            if (t.isenabled()) {
                var r = t.find("textarea");
                if (!r.is(":focus")) {
                    r.focus()
                }
                var n;
                if (window.clipboardData && window.clipboardData.getData) {
                    n = window.clipboardData.getData("Text")
                } else if (e.clipboardData && e.clipboardData.getData) {
                    n = e.clipboardData.getData("text/plain")
                } else {
                    cmd.oneTime(100, function() {
                        t.insert(r.val());
                        r.val("");
                        z()
                    })
                }
                if (n) {
                    t.insert(n);
                    r.val("");
                    z()
                }
            }
        }
        var J = true;
        var M = false;
        var U;

        function Y(i) {
            var a, s, l;
            if (T) {
                if (e.isFunction(n.keydown)) {
                    a = n.keydown(i);
                    if (a !== r) {
                        return a
                    }
                }
                if (i.which !== 38 && !(i.which === 80 && i.ctrlKey)) {
                    J = true
                }
                if (f && (i.which === 35 || i.which === 36 || i.which === 37 || i.which === 38 || i.which === 39 || i.which === 40 || i.which === 13 || i.which === 27)) {
                    K();
                    W();
                    if (i.which === 27) {
                        t.set("")
                    }
                    H();
                    Y.call(this, i)
                } else if (i.altKey) {
                    if (i.which === 68) {
                        t.set(g.slice(0, C) + g.slice(C).replace(/ *[^ ]+ *(?= )|[^ ]+$/, ""), true);
                        return false
                    }
                    return true
                } else if (i.keyCode === 13) {
                    if (i.shiftKey) {
                        t.insert("\n")
                    } else {
                        if (A && g && !m && (e.isFunction(n.historyFilter) && n.historyFilter(g)) || n.historyFilter instanceof RegExp && g.match(n.historyFilter) || !n.historyFilter) {
                            A.append(g)
                        }
                        var u = g;
                        A.reset();
                        t.set("");
                        if (n.commands) {
                            n.commands(u)
                        }
                        if (e.isFunction(S)) {
                            W()
                        }
                    }
                } else if (i.which === 8) {
                    if (f) {
                        c = c.slice(0, -1);
                        N()
                    } else {
                        if (g !== "" && C > 0) {
                            t["delete"](-1)
                        }
                    }
                    if (x) {
                        return true
                    }
                } else if (i.which === 67 && i.ctrlKey && i.shiftKey) {
                    y = q()
                } else if (i.which === 86 && i.ctrlKey && i.shiftKey) {
                    if (y !== "") {
                        t.insert(y)
                    }
                } else if (i.which === 9 && !(i.ctrlKey || i.altKey)) {
                    t.insert("	")
                } else if (i.which === 46) {
                    t["delete"](1);
                    return
                } else if (A && (i.which === 38 && !i.ctrlKey) || i.which === 80 && i.ctrlKey) {
                    if (J) {
                        w = g;
                        t.set(A.current())
                    } else {
                        t.set(A.previous())
                    }
                    J = false
                } else if (A && (i.which === 40 && !i.ctrlKey) || i.which === 78 && i.ctrlKey) {
                    t.set(A.end() ? w : A.next())
                } else if (i.which === 37 || i.which === 66 && i.ctrlKey) {
                    if (i.ctrlKey && i.which !== 66) {
                        l = C - 1;
                        s = 0;
                        if (g[l] === " ") {
                            --l
                        }
                        for (var p = l; p > 0; --p) {
                            if (g[p] === " " && g[p + 1] !== " ") {
                                s = p + 1;
                                break
                            } else if (g[p] === "\n" && g[p + 1] !== "\n") {
                                s = p;
                                break
                            }
                        }
                        t.position(s)
                    } else {
                        if (C > 0) {
                            t.position(-1, true);
                            H()
                        }
                    }
                } else if (i.which === 82 && i.ctrlKey) {
                    if (f) {
                        D(true)
                    } else {
                        h = S;
                        N();
                        w = g;
                        t.set("");
                        H();
                        f = true
                    }
                } else if (i.which == 71 && i.ctrlKey) {
                    if (f) {
                        S = h;
                        W();
                        t.set(w);
                        H();
                        f = false;
                        c = ""
                    }
                } else if (i.which === 39 || i.which === 70 && i.ctrlKey) {
                    if (i.ctrlKey && i.which !== 70) {
                        if (g[C] === " ") {
                            ++C
                        }
                        var d = /\S[\n\s]{2,}|[\n\s]+\S?/;
                        var b = g.slice(C).match(d);
                        if (!b || b[0].match(/^\s+$/)) {
                            t.position(g.length)
                        } else {
                            if (b[0][0] !== " ") {
                                C += b.index + 1
                            } else {
                                C += b.index + b[0].length - 1;
                                if (b[0][b[0].length - 1] !== " ") {
                                    --C
                                }
                            }
                        }
                        H()
                    } else {
                        if (C < g.length) {
                            t.position(1, true)
                        }
                    }
                } else if (i.which === 123) {
                    return
                } else if (i.which === 36) {
                    t.position(0)
                } else if (i.which === 35) {
                    t.position(g.length)
                } else if (i.shiftKey && i.which == 45) {
                    o.val("");
                    if (!v) {
                        B()
                    } else {
                        o.focus()
                    }
                    return
                } else if (i.ctrlKey || i.metaKey) {
                    if (i.which === 192) {
                        return
                    }
                    if (i.metaKey) {
                        if (i.which === 82) {
                            return
                        } else if (i.which === 76) {
                            return
                        }
                    }
                    if (i.shiftKey) {
                        if (i.which === 84) {
                            return
                        }
                    } else {
                        if (i.which === 81) {
                            if (g !== "" && C !== 0) {
                                var k = g.slice(0, C).match(/([^ ]+ *$)/);
                                _ = t["delete"](-k[0].length)
                            }
                            return false
                        } else if (i.which === 72) {
                            if (g !== "" && C > 0) {
                                t["delete"](-1)
                            }
                            return false
                        } else if (i.which === 65) {
                            t.position(0)
                        } else if (i.which === 69) {
                            t.position(g.length)
                        } else if (i.which === 88 || i.which === 67 || i.which === 84) {
                            return
                        } else if (i.which === 89) {
                            if (_ !== "") {
                                t.insert(_)
                            }
                        } else if (i.which === 86) {
                            o.val("");
                            if (!v) {
                                B()
                            } else {
                                o.focus()
                            }
                            return
                        } else if (i.which === 75) {
                            _ = t["delete"](g.length - C)
                        } else if (i.which === 85) {
                            if (g !== "" && C !== 0) {
                                _ = t["delete"](-C)
                            }
                        } else if (i.which === 17) {
                            return false
                        }
                    }
                } else {
                    M = false;
                    U = true;
                    return
                }
                i.preventDefault()
            }
        }

        function G() {
            if (e.isFunction(n.onCommandChange)) {
                n.onCommandChange(g)
            }
        }
        e.extend(t, {
            name: function(e) {
                if (e !== r) {
                    j = e;
                    var n = A && A.enabled() || !A;
                    A = new d(e, F);
                    if (!n) {
                        A.disable()
                    }
                    return t
                } else {
                    return j
                }
            },
            purge: function() {
                A.clear();
                return t
            },
            history: function() {
                return A
            },
            "delete": function(e, r) {
                var n;
                if (e === 0) {
                    return t
                } else if (e < 0) {
                    if (C > 0) {
                        n = g.slice(0, C).slice(e);
                        g = g.slice(0, C + e) + g.slice(C, g.length);
                        if (!r) {
                            t.position(C + e)
                        } else {
                            G()
                        }
                    }
                } else {
                    if (g !== "" && C < g.length) {
                        n = g.slice(C).slice(0, e);
                        g = g.slice(0, C) + g.slice(C + e, g.length);
                        G()
                    }
                }
                H();
                z();
                return n
            },
            set: function(e, n) {
                if (e !== r) {
                    g = e;
                    if (!n) {
                        t.position(g.length)
                    }
                    H();
                    z();
                    G()
                }
                return t
            },
            insert: function(e, r) {
                if (C === g.length) {
                    g += e
                } else if (C === 0) {
                    g = e + g
                } else {
                    g = g.slice(0, C) + e + g.slice(C)
                }
                if (!r) {
                    t.position(e.length, true)
                } else {
                    z()
                }
                H();
                G();
                return t
            },
            get: function() {
                return g
            },
            commands: function(e) {
                if (e) {
                    n.commands = e;
                    return t
                } else {
                    return e
                }
            },
            destroy: function() {
                X.unbind("keypress.cmd", Z);
                X.unbind("keydown.cmd", Y);
                X.unbind("paste.cmd", B);
                X.unbind("input.cmd", V);
                t.stopTime("blink", O);
                t.find(".cursor").next().remove().end().prev().remove().end().remove();
                t.find(".prompt, .clipboard").remove();
                t.removeClass("cmd").removeData("cmd");
                return t
            },
            prompt: function(e) {
                if (e === r) {
                    return S
                } else {
                    if (typeof e === "string" || typeof e === "function") {
                        S = e
                    } else {
                        throw new Error("prompt must be a function or string")
                    }
                    W();
                    H();
                    return t
                }
            },
            kill_text: function() {
                return _
            },
            position: function(r, i) {
                if (typeof r === "number") {
                    if (i) {
                        C += r
                    } else {
                        if (r < 0) {
                            C = 0
                        } else if (r > g.length) {
                            C = g.length
                        } else {
                            C = r
                        }
                    }
                    if (e.isFunction(n.onPositionChange)) {
                        n.onPositionChange(C)
                    }
                    H();
                    z();
                    return t
                } else {
                    return C
                }
            },
            visible: function() {
                var e = t.visible;
                return function() {
                    e.apply(t, []);
                    H();
                    W()
                }
            }(),
            show: function() {
                var e = t.show;
                return function() {
                    e.apply(t, []);
                    H();
                    W()
                }
            }(),
            resize: function(e) {
                if (e) {
                    a = e
                } else {
                    P()
                }
                H();
                return t
            },
            enable: function() {
                T = true;
                t.addClass("enabled");
                R(true);
                $();
                return t
            },
            isenabled: function() {
                return T
            },
            disable: function() {
                T = false;
                t.removeClass("enabled");
                R(false);
                $();
                return t
            },
            mask: function(e) {
                if (typeof e === "undefined") {
                    return m
                } else {
                    m = e;
                    H();
                    return t
                }
            }
        });
        t.name(n.name || n.prompt || "");
        if (typeof n.prompt == "string") {
            S = n.prompt
        } else {
            S = "> "
        }
        W();
        if (n.enabled === r || n.enabled === true) {
            t.enable()
        }
        var Q;
        var X = e(document.documentElement || window);

        function Z(i) {
            var o;
            U = false;
            if (i.ctrlKey && i.which === 99) {
                return
            }
            if (M) {
                return
            }
            if (!f && e.isFunction(n.keypress)) {
                o = n.keypress(i)
            }
            if (o === r || o) {
                if (T) {
                    if (e.inArray(i.which, [38, 13, 0, 8]) > -1 && !(i.which === 38 && i.shiftKey)) {
                        if (i.keyCode == 123) {
                            return
                        }
                        return false
                    } else if (!i.ctrlKey && !(i.altKey && i.which === 100) || i.altKey) {
                        if (f) {
                            c += String.fromCharCode(i.which);
                            D();
                            N()
                        } else {
                            t.insert(String.fromCharCode(i.which))
                        }
                        return false
                    }
                }
            } else {
                return o
            }
        }

        function V(e) {
            if (U) {
                var r = o.val();
                if (r || e.which == 8) {
                    t.set(r)
                }
            }
        }
        X.bind("keypress.cmd", Z).bind("keydown.cmd", Y).bind("input.cmd", V);
        if (v) {
            X.bind("paste.cmd", B)
        }
        t.data("cmd", t);
        return t
    };

    function y(r) {
        return e("<div>" + e.terminal.strip(r) + "</div>").text().length
    }

    function _(e) {
        return e.length - y(e)
    }
    var b = function() {
        var e = false,
            n = "animation",
            t = "",
            i = "Webkit Moz O ms Khtml".split(" "),
            o = "",
            a = document.createElement("div");
        if (a.style.animationName) {
            e = true
        }
        if (e === false) {
            for (var s = 0; s < i.length; s++) {
                var l = i[s] + "AnimationName";
                if (a.style[l] !== r) {
                    o = i[s];
                    n = o + "Animation";
                    t = "-" + o.toLowerCase() + "-";
                    e = true;
                    break
                }
            }
        }
        return e
    }();
    var k = navigator.userAgent.toLowerCase().indexOf("android") != -1;
    var x = function() {
        return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch
    }();

    function C(r, n) {
        var t = n(r);
        if (t.length) {
            var i = t.shift();
            var o = new RegExp("^" + e.terminal.escape_regex(i));
            var a = r.replace(o, "").trim();
            return {
                command: r,
                name: i,
                args: t,
                rest: a
            }
        } else {
            return {
                command: r,
                name: "",
                args: [],
                rest: ""
            }
        }
    }
    var S = /(\[\[[!gbiuso]*;[^;]*;[^\]]*\](?:[^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]?)/i;
    var T = /\[\[([!gbiuso]*);([^;]*);([^;\]]*);?([^;\]]*);?([^\]]*)\]([^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]?/gi;
    var F = /\[\[([!gbiuso]*;[^;\]]*;[^;\]]*(?:;|[^\]()]*);?[^\]]*)\]([^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]?/gi;
    var j = /\[\[([!gbiuso]*;[^;\]]*;[^;\]]*(?:;|[^\]()]*);?[^\]]*)\]([^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]/gi;
    var A = /^\[\[([!gbiuso]*;[^;\]]*;[^;\]]*(?:;|[^\]()]*);?[^\]]*)\]([^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]$/gi;
    var E = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
    var R = /(\bhttps?:\/\/(?:(?:(?!&[^;]+;)|(?=&amp;))[^\s"'<>\]\[)])+\b)/gi;
    var $ = /\b(https?:\/\/(?:(?:(?!&[^;]+;)|(?=&amp;))[^\s"'<>\][)])+)\b(?![^[\]]*])/gi;
    var z = /((([^<>('")[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))/g;
    var I = /('[^']*'|"(\\"|[^"])*"|(?:\/(\\\/|[^\/])+\/[gimy]*)(?=:? |$)|(\\ |[^ ])+|[\w-]+)/gi;
    var O = /(\[\[[!gbiuso]*;[^;]*;[^\]]*\])/i;
    var N = /^(\[\[[!gbiuso]*;[^;]*;[^\]]*\])/i;
    var K = /\[\[[!gbiuso]*;[^;]*;[^\]]*\]?$/i;
    var D = /(\[\[(?:[^\]]|\\\])*\]\])/;
    e.terminal = {
        version: "0.10.12",
        color_names: ["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
        valid_color: function(r) {
            if (r.match(E)) {
                return true
            } else {
                return e.inArray(r.toLowerCase(), e.terminal.color_names) !== -1
            }
        },
        escape_regex: function(e) {
            if (typeof e == "string") {
                var r = /([-\\\^$\[\]()+{}?*.|])/g;
                return e.replace(r, "\\$1")
            }
        },
        have_formatting: function(e) {
            return typeof e == "string" && !!e.match(j)
        },
        is_formatting: function(e) {
            return typeof e == "string" && !!e.match(A)
        },
        format_split: function(e) {
            return e.split(S)
        },
        split_equal: function(r, n, t) {
            var i = false;
            var o = false;
            var a = "";
            var s = [];
            var l = r.replace(F, function(e, r, n) {
                var t = r.match(/;/g).length;
                if (t >= 4) {
                    return e
                } else if (t == 2) {
                    t = ";;"
                } else if (t == 3) {
                    t = ";"
                } else {
                    t = ""
                }
                var i = n.replace(/\\\]/g, "&#93;").replace(/\n/g, "\\n").replace(/&nbsp;/g, " ");
                return "[[" + r + t + i + "]" + n + "]"
            }).split(/\n/g);

            function f() {
                return h.substring(d - 6, d) == "&nbsp;" || h.substring(d - 1, d) == " "
            }
            for (var c = 0, u = l.length; c < u; ++c) {
                if (l[c] === "") {
                    s.push("");
                    continue
                }
                var h = l[c];
                var p = 0;
                var m = 0;
                var g = -1;
                for (var d = 0, v = h.length; d < v; ++d) {
                    if (h.substring(d).match(N)) {
                        i = true;
                        o = false
                    } else if (i && h[d] === "]") {
                        if (o) {
                            i = false;
                            o = false
                        } else {
                            o = true
                        }
                    } else if (i && o || !i) {
                        if (h[d] === "&") {
                            var w = h.substring(d).match(/^(&[^;]+;)/);
                            if (!w) {
                                throw new Error("Unclosed html entity in line " + (c + 1) + " at char " + (d + 1))
                            }
                            d += w[1].length - 2;
                            if (d === v - 1) {
                                s.push(y + w[1])
                            }
                            continue
                        } else if (h[d] === "]" && h[d - 1] === "\\") {
                            --m
                        } else {
                            ++m
                        }
                    }
                    if (f() && (i && o || !i || h[d] === "[" && h[d + 1] === "[")) {
                        g = d
                    }
                    if ((m === n || d === v - 1) && (i && o || !i)) {
                        var y;
                        var _ = e.terminal.strip(h.substring(g));
                        _ = e("<span>" + _ + "</span>").text();
                        var b = _.length;
                        _ = _.substring(0, d + n + 1);
                        var k = !!_.match(/\s/) || d + n + 1 > b;
                        if (t && g != -1 && d !== v - 1 && k) {
                            y = h.substring(p, g);
                            d = g - 1
                        } else {
                            y = h.substring(p, d + 1)
                        }
                        if (t) {
                            y = y.replace(/(&nbsp;|\s)+$/g, "")
                        }
                        g = -1;
                        p = d + 1;
                        m = 0;
                        if (a) {
                            y = a + y;
                            if (y.match("]")) {
                                a = ""
                            }
                        }
                        var x = y.match(F);
                        if (x) {
                            var C = x[x.length - 1];
                            if (C[C.length - 1] !== "]") {
                                a = C.match(O)[1];
                                y += "]"
                            } else if (y.match(K)) {
                                var S = y.length;
                                y = y.replace(K, "");
                                a = C.match(O)[1]
                            }
                        }
                        s.push(y)
                    }
                }
            }
            return s
        },
        encode: function(e) {
            e = e.replace(/&(?!#[0-9]+;|[a-zA-Z]+;)/g, "&amp;");
            return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
        },
        escape_formatting: function(r) {
            return e.terminal.escape_brackets(e.terminal.encode(r))
        },
        format: function(r, n) {
            var t = e.extend({}, {
                linksNoReferrer: false
            }, n || {});
            if (typeof r === "string") {
                var i = e.terminal.format_split(r);
                r = e.map(i, function(r) {
                    if (r === "") {
                        return r
                    } else if (e.terminal.is_formatting(r)) {
                        return r.replace(T, function(r, n, i, o, a, s, l) {
                            if (l === "") {
                                return ""
                            }
                            l = l.replace(/\\]/g, "]");
                            var f = "";
                            if (n.indexOf("b") !== -1) {
                                f += "font-weight:bold;"
                            }
                            var c = [];
                            if (n.indexOf("u") !== -1) {
                                c.push("underline")
                            }
                            if (n.indexOf("s") !== -1) {
                                c.push("line-through")
                            }
                            if (n.indexOf("o") !== -1) {
                                c.push("overline")
                            }
                            if (c.length) {
                                f += "text-decoration:" + c.join(" ") + ";"
                            }
                            if (n.indexOf("i") !== -1) {
                                f += "font-style:italic;"
                            }
                            if (e.terminal.valid_color(i)) {
                                f += "color:" + i + ";";
                                if (n.indexOf("g") !== -1) {
                                    f += "text-shadow:0 0 5px " + i + ";"
                                }
                            }
                            if (e.terminal.valid_color(o)) {
                                f += "background-color:" + o
                            }
                            var u;
                            if (s === "") {
                                u = l
                            } else {
                                u = s.replace(/&#93;/g, "]")
                            }
                            var h;
                            if (n.indexOf("!") !== -1) {
                                if (u.match(z)) {
                                    h = '<a href="mailto:' + u + '" '
                                } else {
                                    h = '<a target="_blank" href="' + u + '" ';
                                    if (t.linksNoReferrer) {
                                        h += 'rel="noreferrer" '
                                    }
                                }
                            } else {
                                h = "<span "
                            }
                            if (f !== "") {
                                h += 'style="' + f + '"'
                            }
                            if (a !== "") {
                                h += ' class="' + a + '"'
                            }
                            if (n.indexOf("!") !== -1) {
                                h += ">" + l + "</a>"
                            } else {
                                h += ' data-text="' + u.replace('"', "&quote;") + '">' + l + "</span>"
                            }
                            return h
                        })
                    } else {
                        return "<span>" + r.replace(/\\\]/g, "]") + "</span>"
                    }
                }).join("");
                return r.replace(/<span><br\s*\/?><\/span>/gi, "<br/>")
            } else {
                return ""
            }
        },
        escape_brackets: function(e) {
            return e.replace(/\[/g, "&#91;").replace(/\]/g, "&#93;")
        },
        strip: function(e) {
            return e.replace(T, "$6")
        },
        active: function() {
            return V.front()
        },
        parseArguments: function(r) {
            return e.terminal.parse_arguments(r)
        },
        splitArguments: function(r) {
            return e.terminal.split_arguments(r)
        },
        parseCommand: function(r) {
            return e.terminal.parse_command(r)
        },
        splitCommand: function(r) {
            return e.terminal.split_command(r)
        },
        parse_arguments: function(r) {
            var n = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
            return e.map(r.match(I) || [], function(e) {
                if (e[0] === "'" && e[e.length - 1] === "'") {
                    return e.replace(/^'|'$/g, "")
                } else if (e[0] === '"' && e[e.length - 1] === '"') {
                    e = e.replace(/^"|"$/g, "").replace(/\\([" ])/g, "$1");
                    return e.replace(/\\\\|\\t|\\n/g, function(e) {
                        if (e[1] === "t") {
                            return "	"
                        } else if (e[1] === "n") {
                            return "\n"
                        } else {
                            return "\\"
                        }
                    }).replace(/\\x([0-9a-f]+)/gi, function(e, r) {
                        return String.fromCharCode(parseInt(r, 16))
                    }).replace(/\\0([0-7]+)/g, function(e, r) {
                        return String.fromCharCode(parseInt(r, 8))
                    })
                } else if (e.match(/^\/(\\\/|[^\/])+\/[gimy]*$/)) {
                    var r = e.match(/^\/([^\/]+)\/([^\/]*)$/);
                    return new RegExp(r[1], r[2])
                } else if (e.match(/^-?[0-9]+$/)) {
                    return parseInt(e, 10)
                } else if (e.match(n)) {
                    return parseFloat(e)
                } else {
                    return e.replace(/\\ /g, " ")
                }
            })
        },
        split_arguments: function(r) {
            return e.map(r.match(I) || [], function(e) {
                if (e[0] === "'" && e[e.length - 1] === "'") {
                    return e.replace(/^'|'$/g, "")
                } else if (e[0] === '"' && e[e.length - 1] === '"') {
                    return e.replace(/^"|"$/g, "").replace(/\\([" ])/g, "$1")
                } else if (e.match(/\/.*\/[gimy]*$/)) {
                    return e
                } else {
                    return e.replace(/\\ /g, " ")
                }
            })
        },
        parse_command: function(r) {
            return C(r, e.terminal.parse_arguments)
        },
        split_command: function(r) {
            return C(r, e.terminal.split_arguments)
        },
        extended_command: function(e, r) {
            try {
                nr = false;
                e.exec(r, true).then(function() {
                    nr = true
                })
            } catch (n) {}
        }
    };
    e.fn.visible = function() {
        return this.css("visibility", "visible")
    };
    e.fn.hidden = function() {
        return this.css("visibility", "hidden")
    };
    var P = {};
    e.jrpc = function(r, n, t, i, o) {
        P[r] = P[r] || 0;
        var a = e.json_stringify({
            jsonrpc: "2.0",
            method: n,
            params: t,
            id: ++P[r]
        });
        return e.ajax({
            url: r,
            data: a,
            success: function(r, n, t) {
                var a = t.getResponseHeader("Content-Type");
                if (!a.match(/application\/json/)) {
                    var s = "Response Content-Type is not application/json";
                    if (console && console.warn) {
                        console.warn(s)
                    } else {
                        throw new Error("WARN: " + s)
                    }
                }
                var l;
                try {
                    l = e.parseJSON(r)
                } catch (f) {
                    if (o) {
                        o(t, "Invalid JSON", f)
                    } else {
                        throw new Error("Invalid JSON")
                    }
                    return
                }
                i(l, n, t)
            },
            error: o,
            contentType: "application/json",
            dataType: "text",
            async: true,
            cache: false,
            type: "POST"
        })
    };

    function L(r) {
        var n = e(window).scrollTop();
        var t = n + e(window).height();
        var i = e(r).offset().top;
        var o = i + e(r).height();
        return o >= n && i <= t
    }

    function H() {
        var r = e('<div class="terminal temp"><div class="cmd"><span cla' + 'ss="cursor">&nbsp;</span></div></div>').appendTo("body");
        var n = r.find("span");
        var t = {
            width: n.width(),
            height: n.outerHeight()
        };
        r.remove();
        return t
    }

    function W(r) {
        var n = e('<div class="terminal"><span class="cursor">' + "</span></div>").appendTo("body").css("padding", 0);
        var t = n.find("span");
        var i = 60;
        var o = "";
        for (var a = 0; a <= i; ++a) {
            o += "&nbsp;"
        }
        t.html(o);
        var s = t.width() / i;
        var l = Math.floor(r.width() / s);
        n.remove();
        if (J(r)) {
            var f = 20;
            var c = r.innerWidth() - r.width();
            l -= Math.ceil((f - c / 2) / (s - 1))
        }
        return l
    }

    function B(e) {
        return Math.floor(e.height() / H().height)
    }

    function q() {
        if (window.getSelection || document.getSelection) {
            var e = (window.getSelection || document.getSelection)();
            if (e.text) {
                return e.text
            } else {
                return e.toString()
            }
        } else if (document.selection) {
            return document.selection.createRange().text
        }
    }

    function J(r) {
        if (r.css("overflow") == "scroll" || r.css("overflow-y") == "scroll") {
            return true
        } else if (r.is("body")) {
            return e("body").height() > e(window).height()
        } else {
            return r.get(0).scrollHeight > r.innerHeight()
        }
    }
    var M = !e.terminal.version.match(/^\{\{/);
    var U = "Copyright (c) 2011-2016 Jakub Jankiewicz <http://jcubic" + ".pl>";
    var Y = M ? " v. " + e.terminal.version : " ";
    var G = new RegExp(" {" + Y.length + "}$");
    var Q = "jQuery Terminal Emulator" + (M ? Y : "");
    var X = [
        ["jQuery Terminal", "(c) 2011-2016 jcubic"],
        [Q, U.replace(/^Copyright | *<.*>/g, "")],
        [Q, U.replace(/^Copyright /, "")],
        ["      _______                 ________                        __", "     / / _  /_ ____________ _/__  ___/______________  _____  / /", " __ / / // / // / _  / _/ // / / / _  / _/     / /  \\/ / _ \\/ /", "/  / / // / // / ___/ // // / / / ___/ // / / / / /\\  / // / /__", "\\___/____ \\\\__/____/_/ \\__ / /_/____/_//_/ /_/ /_/  \\/\\__\\_\\___/", "         \\/          /____/                                   ".replace(G, " ") + Y, U],
        ["      __ _____                     ________                              __", "     / // _  /__ __ _____ ___ __ _/__  ___/__ ___ ______ __ __  __ ___  / /", " __ / // // // // // _  // _// // / / // _  // _//     // //  \\/ // _ \\/ /", "/  / // // // // // ___// / / // / / // ___// / / / / // // /\\  // // / /__", "\\___//____ \\\\___//____//_/ _\\_  / /_//____//_/ /_/ /_//_//_/ /_/ \\__\\_\\___/", "          \\/              /____/                                          ".replace(G, "") + Y, U]
    ];
    e.terminal.defaults = {
        prompt: "> ",
        history: true,
        exit: true,
        clear: true,
        enabled: true,
        historySize: 60,
        maskChar: "*",
        checkArity: true,
        raw: false,
        exceptionHandler: null,
        cancelableAjax: true,
        processArguments: true,
        linksNoReferrer: false,
        processRPCResponse: null,
        Token: true,
        convertLinks: true,
        historyState: false,
        login: null,
        outputLimit: -1,
        formatters: [],
        onAjaxError: null,
        onRPCError: null,
        completion: false,
        historyFilter: null,
        onInit: e.noop,
        onClear: e.noop,
        onBlur: e.noop,
        onFocus: e.noop,
        onTerminalChange: e.noop,
        onExit: e.noop,
        keypress: e.noop,
        keydown: e.noop,
        strings: {
            wrongPasswordTryAgain: "Wrong password try again!",
            wrongPassword: "Wrong password!",
            ajaxAbortError: "Error while aborting ajax call!",
            wrongArity: "Wrong number of arguments. Function '%s' expects %s got" + " %s!",
            commandNotFound: "Command '%s' Not Found!",
            oneRPCWithIgnore: "You can use only one rpc with ignoreSystemDescr" + "ibe",
            oneInterpreterFunction: "You can't use more than one function (rpc" + "with ignoreSystemDescribe counts as one)",
            loginFunctionMissing: "You didn't specify a login function",
            noTokenError: "Access denied (no token)",
            serverResponse: "Server responded",
            wrongGreetings: "Wrong value of greetings parameter",
            notWhileLogin: "You can't call `%s' function while in login",
            loginIsNotAFunction: "Authenticate must be a function",
            canExitError: "You can't exit from main interpreter",
            invalidCompletion: "Invalid completion",
            invalidSelector: 'Sorry, but terminal said that "%s" is not valid ' + "selector!",
            invalidTerminalId: "Invalid Terminal ID",
            login: "login",
            password: "password",
            recursiveCall: "Recursive call detected, skip"
        }
    };
    var Z = [];
    var V = window.terminals = new m;
    var er = [];
    var rr;
    var nr = false;
    var tr = true;
    var ir = true;
    e.fn.terminal = function(n, i) {
        function o(r) {
            if (e.isFunction(Tr.processArguments)) {
                return C(r, Tr.processArguments)
            } else if (Tr.processArguments) {
                return e.terminal.parse_command(r)
            } else {
                return e.terminal.split_command(r)
            }
        }

        function a(r) {
            if (typeof r === "string") {
                lr.echo(r)
            } else if (r instanceof Array) {
                lr.echo(e.map(r, function(r) {
                    return e.json_stringify(r)
                }).join(" "))
            } else if (typeof r === "object") {
                lr.echo(e.json_stringify(r))
            } else {
                lr.echo(r)
            }
        }

        function s(r) {
            var n = /(.*):([0-9]+):([0-9]+)$/;
            var t = r.match(n);
            if (t) {
                lr.pause();
                e.get(t[1], function(r) {
                    var n = location.href.replace(/[^\/]+$/, "");
                    var i = t[1].replace(n, "");
                    lr.echo("[[b;white;]" + i + "]");
                    var o = r.split("\n");
                    var a = +t[2] - 1;
                    lr.echo(o.slice(a - 2, a + 3).map(function(r, n) {
                        if (n == 2) {
                            r = "[[;#f00;]" + e.terminal.escape_brackets(r) + "]"
                        }
                        return "[" + (a + n) + "]: " + r
                    }).join("\n")).resume()
                }, "text")
            }
        }

        function l(r) {
            if (e.isFunction(Tr.onRPCError)) {
                Tr.onRPCError.call(lr, r)
            } else {
                lr.error("&#91;RPC&#93; " + r.message)
            }
        }

        function f(r, n) {
            var t = function(n, t) {
                lr.pause();
                e.jrpc(r, n, t, function(r) {
                    if (r.error) {
                        l(r.error)
                    } else {
                        if (e.isFunction(Tr.processRPCResponse)) {
                            Tr.processRPCResponse.call(lr, r.result, lr)
                        } else {
                            a(r.result)
                        }
                    }
                    lr.resume()
                }, u)
            };
            return function(e, r) {
                if (e === "") {
                    return
                }
                try {
                    e = o(e)
                } catch (i) {
                    r.error(i.toString());
                    return
                }
                if (!n || e.name === "help") {
                    t(e.name, e.args)
                } else {
                    var a = r.token();
                    if (a) {
                        t(e.name, [a].concat(e.args))
                    } else {
                        r.error("&#91;AUTH&#93; " + Fr.noTokenError)
                    }
                }
            }
        }

        function c(n, t, i, a) {
            return function(s, l) {
                if (s === "") {
                    return
                }
                var f;
                try {
                    f = o(s)
                } catch (u) {
                    lr.error(u.toString());
                    return
                }
                var h = n[f.name];
                var p = e.type(h);
                if (p === "function") {
                    if (t && h.length !== f.args.length) {
                        lr.error("&#91;Arity&#93; " + sprintf(Fr.wrongArity, f.name, h.length, f.args.length))
                    } else {
                        return h.apply(lr, f.args)
                    }
                } else if (p === "object" || p === "string") {
                    var m = [];
                    if (p === "object") {
                        m = Object.keys(h);
                        h = c(h, t, i)
                    }
                    l.push(h, {
                        prompt: f.name + "> ",
                        name: f.name,
                        completion: p === "object" ? m : r
                    })
                } else {
                    if (e.isFunction(a)) {
                        a(s, lr)
                    } else if (e.isFunction(Tr.onCommandNotFound)) {
                        Tr.onCommandNotFound(s, lr)
                    } else {
                        l.error(sprintf(Fr.commandNotFound, f.name))
                    }
                }
            }
        }

        function u(r, n, t) {
            lr.resume();
            if (e.isFunction(Tr.onAjaxError)) {
                Tr.onAjaxError.call(lr, r, n, t)
            } else if (n !== "abort") {
                lr.error("&#91;AJAX&#93; " + n + " - " + Fr.serverResponse + ": \n" + e.terminal.escape_brackets(r.responseText))
            }
        }

        function h(r, n, t) {
            e.jrpc(r, "system.describe", [], function(i) {
                var o = [];
                if (i.procs) {
                    var s = {};
                    e.each(i.procs, function(t, i) {
                        s[i.name] = function() {
                            var t = n && i.name != "help";
                            var o = Array.prototype.slice.call(arguments);
                            var s = o.length + (t ? 1 : 0);
                            if (Tr.checkArity && i.params && i.params.length !== s) {
                                lr.error("&#91;Arity&#93; " + sprintf(Fr.wrongArity, i.name, i.params.length, s))
                            } else {
                                lr.pause();
                                if (t) {
                                    var f = lr.token(true);
                                    if (f) {
                                        o = [f].concat(o)
                                    } else {
                                        lr.error("&#91;AUTH&#93; " + Fr.noTokenError)
                                    }
                                }
                                e.jrpc(r, i.name, o, function(e) {
                                    if (e.error) {
                                        l(e.error)
                                    } else {
                                        a(e.result)
                                    }
                                    lr.resume()
                                }, u)
                            }
                        }
                    });
                    t(s)
                } else {
                    t(null)
                }
            }, function() {
                t(null)
            })
        }

        function p(r, n, t) {
            t = t || e.noop;
            var i = e.type(r);
            var o = {};
            var a = 0;
            var s;
            if (i === "array") {
                var l = {};
                (function u(r, t) {
                    if (r.length) {
                        var i = r[0];
                        var o = r.slice(1);
                        var c = e.type(i);
                        if (c === "string") {
                            a++;
                            lr.pause();
                            if (Tr.ignoreSystemDescribe) {
                                if (a === 1) {
                                    s = f(i, n)
                                } else {
                                    lr.error(Fr.oneRPCWithIgnore)
                                }
                                u(o, t)
                            } else {
                                h(i, n, function(r) {
                                    if (r) {
                                        e.extend(l, r)
                                    }
                                    lr.resume();
                                    u(o, t)
                                })
                            }
                        } else if (c === "function") {
                            if (s) {
                                lr.error(Fr.oneInterpreterFunction)
                            } else {
                                s = i
                            }
                            u(o, t)
                        } else if (c === "object") {
                            e.extend(l, i);
                            u(o, t)
                        }
                    } else {
                        t()
                    }
                })(r, function() {
                    t({
                        interpreter: c(l, false, n, s),
                        completion: Object.keys(l)
                    })
                })
            } else if (i === "string") {
                if (Tr.ignoreSystemDescribe) {
                    t({
                        interpreter: f(r, n),
                        completion: Tr.completion
                    })
                } else {
                    lr.pause();
                    h(r, n, function(e) {
                        if (e) {
                            o.interpreter = c(e, false, n);
                            o.completion = Object.keys(e)
                        } else {
                            o.interpreter = f(r, n);
                            o.completion = Tr.completion
                        }
                        t(o);
                        lr.resume()
                    })
                }
            } else if (i === "object") {
                t({
                    interpreter: c(r, Tr.checkArity),
                    completion: Object.keys(r)
                })
            } else {
                if (i === "undefined") {
                    r = e.noop
                } else if (i !== "function") {
                    throw i + " is invalid interpreter value"
                }
                t({
                    interpreter: r,
                    completion: Tr.completion
                })
            }
        }

        function m(r, n) {
            var t = e.type(n) === "boolean" ? "login" : n;
            return function(n, i, o, a) {
                lr.pause();
                e.jrpc(r, t, [n, i], function(e) {
                    if (!e.error && e.result) {
                        o(e.result)
                    } else {
                        o(null)
                    }
                    lr.resume()
                }, u)
            }
        }

        function d(e) {
            if (typeof e === "string") {
                return e
            } else if (typeof e.fileName === "string") {
                return e.fileName + ": " + e.message
            } else {
                return e.message
            }
        }

        function v(r, n) {
            if (e.isFunction(Tr.exceptionHandler)) {
                Tr.exceptionHandler.call(lr, r)
            } else {
                lr.exception(r, n)
            }
        }

        function w() {
            var e;
            if (fr.prop) {
                e = fr.prop("scrollHeight")
            } else {
                e = fr.attr("scrollHeight")
            }
            fr.scrollTop(e)
        }

        function y(r, n) {
            try {
                if (e.isFunction(n)) {
                    n(function() {})
                } else if (typeof n !== "string") {
                    var t = r + " must be string or function";
                    throw t
                }
            } catch (i) {
                v(i, r.toUpperCase());
                return false
            }
            return true
        }
        var _ = [];
        var b = 1;

        function k(r, n) {
            if (Tr.convertLinks) {
                r = r.replace(z, "[[!;;]$1]").replace($, "[[!;;]$1]")
            }
            var t = e.terminal.defaults.formatters;
            var i, o;
            if (!n.raw) {
                for (i = 0; i < t.length; ++i) {
                    try {
                        if (typeof t[i] == "function") {
                            var a = t[i](r);
                            if (typeof a == "string") {
                                r = a
                            }
                        }
                    } catch (s) {
                        alert("formatting error at formatters[" + i + "]\n" + (s.stack ? s.stack : s))
                    }
                }
                r = e.terminal.encode(r)
            }
            _.push(b);
            if (!n.raw && (r.length > dr || r.match(/\n/))) {
                var l = n.keepWords;
                var f = e.terminal.split_equal(r, dr, l);
                for (i = 0, o = f.length; i < o; ++i) {
                    if (f[i] === "" || f[i] === "\r") {
                        _.push("<span></span>")
                    } else {
                        if (n.raw) {
                            _.push(f[i])
                        } else {
                            _.push(e.terminal.format(f[i], {
                                linksNoReferrer: Tr.linksNoReferrer
                            }))
                        }
                    }
                }
            } else {
                if (!n.raw) {
                    r = e.terminal.format(r, {
                        linksNoReferrer: Tr.linksNoReferrer
                    })
                }
                _.push(r)
            }
            _.push(n.finalize)
        }

        function S(r, n) {
            try {
                var t = e.extend({
                    exec: true,
                    raw: false,
                    finalize: e.noop
                }, n || {});
                var i = e.type(r) === "function" ? r() : r;
                i = e.type(i) === "string" ? i : String(i);
                if (i !== "") {
                    if (t.exec) {
                        i = e.map(i.split(D), function(r) {
                            if (r.match(D) && !e.terminal.is_formatting(r)) {
                                r = r.replace(/^\[\[|\]\]$/g, "");
                                if (cr && cr.command == r) {
                                    lr.error(Fr.recursiveCall)
                                } else {
                                    e.terminal.extended_command(lr, r)
                                }
                                return ""
                            } else {
                                return r
                            }
                        }).join("");
                        if (i !== "") {
                            k(i, t)
                        }
                    } else {
                        k(i, t)
                    }
                }
            } catch (o) {
                _ = [];
                alert("[Internal Exception(process_line)]:" + d(o) + "\n" + o.stack)
            }
        }

        function T() {
            Kr.resize(dr);
            var r = mr.empty().detach();
            var n;
            if (Tr.outputLimit >= 0) {
                var t = Tr.outputLimit === 0 ? lr.rows() : Tr.outputLimit;
                n = pr.slice(pr.length - t - 1)
            } else {
                n = pr
            }
            try {
                _ = [];
                e.each(n, function(e, r) {
                    S.apply(null, r)
                });
                Kr.before(r);
                lr.flush()
            } catch (i) {
                alert("Exception in redraw\n" + i.stack)
            }
        }

        function F() {
            if (Tr.greetings === r) {
                lr.echo(lr.signature)
            } else if (Tr.greetings) {
                var e = typeof Tr.greetings;
                if (e === "string") {
                    lr.echo(Tr.greetings)
                } else if (e === "function") {
                    Tr.greetings.call(lr, lr.echo)
                } else {
                    lr.error(Fr.wrongGreetings)
                }
            }
        }

        function j(r) {
            var n = Kr.prompt();
            var t = Kr.mask();
            switch (typeof t) {
                case "string":
                    r = r.replace(/./g, t);
                    break;
                case "boolean":
                    if (t) {
                        r = r.replace(/./g, Tr.maskChar)
                    } else {
                        r = e.terminal.escape_formatting(r)
                    }
                    break
            }
            var i = {
                finalize: function(e) {
                    e.addClass("command")
                }
            };
            if (e.isFunction(n)) {
                n(function(e) {
                    lr.echo(e + r, i)
                })
            } else {
                lr.echo(n + r, i)
            }
        }

        function A(e) {
            var r = V.get()[e[0]];
            if (!r) {
                throw new Error(Fr.invalidTerminalId)
            }
            var n = e[1];
            if (er[n]) {
                r.import_view(er[n])
            } else {
                nr = false;
                var t = e[2];
                if (t) {
                    r.exec(t).then(function() {
                        nr = true;
                        er[n] = r.export_view()
                    })
                }
            }
        }

        function E() {
            if (nr) {
                tr = false;
                location.hash = e.json_stringify(rr);
                setTimeout(function() {
                    tr = true
                }, 100)
            }
        }
        var I = true;
        var O;
        var N = [];
        var K = false;

        function P(n, t, i) {
            O = n;
            if (I) {
                I = false;
                if (Tr.historyState || Tr.execHash && i) {
                    if (!er.length) {
                        lr.save_state()
                    } else {
                        lr.save_state(null)
                    }
                }
            }

            function o() {
                if (!i) {
                    nr = true;
                    if (Tr.historyState) {
                        lr.save_state(n, false)
                    }
                    nr = f
                }
                l.resolve();
                if (e.isFunction(Tr.onAfterCommand)) {
                    Tr.onAfterCommand(lr, n)
                }
            }
            try {
                if (e.isFunction(Tr.onBeforeCommand)) {
                    if (Tr.onBeforeCommand(lr, n) === false) {
                        return
                    }
                }
                if (!i) {
                    cr = e.terminal.split_command(n)
                }
                if (!ar()) {
                    if (i && e.isFunction(Tr.historyFilter) && Tr.historyFilter(n) || n.match(Tr.historyFilter)) {
                        Kr.history().append(n)
                    }
                }
                var s = Nr.top();
                if (!t) {
                    j(n)
                }
                var l = new e.Deferred;
                var f = nr;
                if (n.match(/^\s*login\s*$/) && lr.token(true)) {
                    if (lr.level() > 1) {
                        lr.logout(true)
                    } else {
                        lr.logout()
                    }
                    o()
                } else if (Tr.exit && n.match(/^\s*exit\s*$/) && !br) {
                    var c = lr.level();
                    if (c == 1 && lr.get_token() || c > 1) {
                        if (lr.get_token(true)) {
                            lr.set_token(r, true)
                        }
                        lr.pop()
                    }
                    o()
                } else if (Tr.clear && n.match(/^\s*clear\s*$/) && !br) {
                    lr.clear();
                    o()
                } else {
                    var u = pr.length - 1;
                    var h = s.interpreter.call(lr, n, lr);
                    if (h !== r) {
                        lr.pause();
                        return e.when(h).then(function(e) {
                            if (e && u === pr.length - 1) {
                                a(e)
                            }
                            o();
                            lr.resume()
                        })
                    } else if (Er) {
                        var p = n;
                        N.push(function() {
                            o()
                        })
                    } else {
                        o()
                    }
                }
                return l.promise()
            } catch (m) {
                v(m, "USER");
                lr.resume();
                throw m
            }
        }

        function H() {
            if (e.isFunction(Tr.onBeforeLogout)) {
                try {
                    if (Tr.onBeforeLogout(lr) === false) {
                        return
                    }
                } catch (r) {
                    v(r, "onBeforeLogout");
                    throw r
                }
            }
            M();
            if (e.isFunction(Tr.onAfterLogout)) {
                try {
                    Tr.onAfterLogout(lr)
                } catch (r) {
                    v(r, "onAfterlogout");
                    throw r
                }
            }
            lr.login(Tr.login, true, Q)
        }

        function M() {
            var r = lr.prefix_name(true) + "_";
            e.Storage.remove(r + "token");
            e.Storage.remove(r + "login")
        }

        function U(r) {
            var n = lr.prefix_name() + "_interpreters";
            var t = e.Storage.get(n);
            if (t) {
                t = e.parseJSON(t)
            } else {
                t = []
            }
            if (e.inArray(r, t) == -1) {
                t.push(r);
                e.Storage.set(n, e.json_stringify(t))
            }
        }

        function Y(r) {
            var n = Nr.top();
            var t = lr.prefix_name(true);
            if (!ar()) {
                U(t)
            }
            Kr.name(t);
            if (e.isFunction(n.prompt)) {
                Kr.prompt(function(e) {
                    n.prompt(e, lr)
                })
            } else {
                Kr.prompt(n.prompt)
            }
            Kr.set("");
            if (!r && e.isFunction(n.onStart)) {
                n.onStart(lr)
            }
        }
        var G;

        function Q() {
            Y();
            F();
            var r = false;
            if (e.isFunction(Tr.onInit)) {
                kr = function() {
                    r = true
                };
                try {
                    Tr.onInit(lr)
                } catch (n) {
                    v(n, "OnInit")
                } finally {
                    kr = e.noop;
                    if (!r) {
                        lr.resume()
                    }
                }
            }

            function t() {
                if (tr && Tr.execHash) {
                    try {
                        if (location.hash) {
                            var r = location.hash.replace(/^#/, "");
                            rr = e.parseJSON(decodeURIComponent(r))
                        } else {
                            rr = []
                        }
                        if (rr.length) {
                            A(rr[rr.length - 1])
                        } else if (er[0]) {
                            lr.import_view(er[0])
                        }
                    } catch (n) {
                        v(n, "TERMINAL")
                    }
                }
            }
            if (ir) {
                ir = false;
                if (e.fn.hashchange) {
                    e(window).hashchange(t)
                } else {
                    e(window).bind("hashchange", t)
                }
            }
        }

        function or(r, n, t) {
            if (Tr.clear && e.inArray("clear", t) == -1) {
                t.push("clear")
            }
            if (Tr.exit && e.inArray("exit", t) == -1) {
                t.push("exit")
            }
            var i = Kr.get().substring(0, Kr.position());
            if (i !== r) {
                return
            }
            var o = new RegExp("^" + e.terminal.escape_regex(n));
            var a = [];
            for (var s = t.length; s--;) {
                if (o.test(t[s])) {
                    a.push(t[s])
                }
            }
            if (a.length === 1) {
                lr.insert(a[0].replace(o, ""))
            } else if (a.length > 1) {
                if (hr >= 2) {
                    j(r);
                    var l = a.reverse().join("	");
                    lr.echo(e.terminal.escape_brackets(l), {
                        keepWords: true
                    });
                    hr = 0
                } else {
                    var f = false;
                    var c;
                    var u;
                    e: for (u = n.length; u < a[0].length; ++u) {
                        for (s = 1; s < a.length; ++s) {
                            if (a[0].charAt(u) !== a[s].charAt(u)) {
                                break e
                            }
                        }
                        f = true
                    }
                    if (f) {
                        lr.insert(a[0].slice(0, u).replace(o, ""))
                    }
                }
            }
        }

        function ar() {
            return br || Kr.mask() !== false
        }

        function sr(n) {
            var t, i, o = Nr.top();
            if (!lr.paused() && lr.enabled()) {
                if (e.isFunction(o.keydown)) {
                    t = o.keydown(n, lr);
                    if (t !== r) {
                        return t
                    }
                } else if (e.isFunction(Tr.keydown)) {
                    t = Tr.keydown(n, lr);
                    if (t !== r) {
                        return t
                    }
                }
                var a;
                if (Tr.completion && e.type(Tr.completion) != "boolean" && o.completion === r) {
                    a = Tr.completion
                } else {
                    a = o.completion
                }
                lr.oneTime(10, function() {
                    Rr()
                });
                if (n.which !== 9) {
                    hr = 0
                }
                if (n.which === 68 && n.ctrlKey) {
                    if (!br) {
                        if (Kr.get() === "") {
                            if (Nr.size() > 1 || Tr.login !== r) {
                                lr.pop("")
                            } else {
                                lr.resume();
                                lr.echo("")
                            }
                        } else {
                            lr.set_command("")
                        }
                    }
                    return false
                } else if (n.which === 76 && n.ctrlKey) {
                    lr.clear()
                } else if (a && n.which === 9) {
                    ++hr;
                    var s = Kr.position();
                    var l = Kr.get().substring(0, s);
                    var f = l.split(" ");
                    var c;
                    if (f.length == 1) {
                        c = f[0]
                    } else {
                        c = f[f.length - 1];
                        for (i = f.length - 1; i > 0; i--) {
                            if (f[i - 1][f[i - 1].length - 1] == "\\") {
                                c = f[i - 1] + " " + c
                            } else {
                                break
                            }
                        }
                    }
                    switch (e.type(a)) {
                        case "function":
                            a(lr, c, function(e) {
                                or(l, c, e)
                            });
                            break;
                        case "array":
                            or(l, c, a);
                            break;
                        default:
                            throw new Error(f.invalidCompletion)
                    }
                    return false
                } else if (n.which === 86 && n.ctrlKey) {
                    lr.oneTime(1, function() {
                        w()
                    });
                    return
                } else if (n.which === 9 && n.ctrlKey) {
                    if (V.length() > 1) {
                        lr.focus(false);
                        return false
                    }
                } else if (n.which === 34) {
                    lr.scroll(lr.height())
                } else if (n.which === 33) {
                    lr.scroll(-lr.height())
                } else {
                    lr.attr({
                        scrollTop: lr.attr("scrollHeight")
                    })
                }
            } else if (n.which === 68 && n.ctrlKey) {
                if (Z.length) {
                    for (i = Z.length; i--;) {
                        var u = Z[i];
                        if (4 !== u.readyState) {
                            try {
                                u.abort()
                            } catch (h) {
                                lr.error(f.ajaxAbortError)
                            }
                        }
                    }
                    Z = [];
                    lr.resume()
                }
                return false
            }
        }
        var lr = this;
        if (this.length > 1) {
            return this.each(function() {
                e.fn.terminal.call(e(this), n, e.extend({
                    name: lr.selector
                }, i))
            })
        }
        if (lr.data("terminal")) {
            return lr.data("terminal")
        }
        if (lr.length === 0) {
            throw sprintf(e.terminal.defaults.strings.invalidSelector, lr.selector)
        }
        var fr;
        var cr;
        var ur = false;
        var hr = 0;
        var pr = [];
        var mr;
        var gr = V.length();
        var dr;
        var vr;
        var wr = [];
        var yr;
        var _r = new g;
        var br = false;
        var kr = e.noop;
        var xr, Cr;
        var Sr = [];
        var Tr = e.extend({}, e.terminal.defaults, {
            name: lr.selector
        }, i || {});
        var Fr = e.terminal.defaults.strings;
        var jr = Tr.enabled,
            Ar;
        var Er = false;
        e.extend(lr, e.omap({
            id: function() {
                return gr
            },
            clear: function() {
                mr.html("");
                pr = [];
                try {
                    Tr.onClear(lr)
                } catch (e) {
                    v(e, "onClear");
                    throw e
                }
                lr.attr({
                    scrollTop: 0
                });
                return lr
            },
            export_view: function() {
                return e.extend({}, {
                    focus: jr,
                    mask: Kr.mask(),
                    prompt: lr.get_prompt(),
                    command: lr.get_command(),
                    position: Kr.position(),
                    lines: t(pr),
                    interpreters: Nr.clone()
                }, e.isFunction(Tr.onExport) ? Tr.onExport() : {})
            },
            import_view: function(r) {
                if (br) {
                    throw new Error(sprintf(Fr.notWhileLogin, "import_view"))
                }
                if (e.isFunction(Tr.onImport)) {
                    Tr.onImport(r)
                }
                lr.set_prompt(r.prompt);
                lr.set_command(r.command);
                Kr.position(r.position);
                Kr.mask(r.mask);
                if (r.focus) {
                    lr.focus()
                }
                pr = t(r.lines);
                Nr = r.interpreters;
                T();
                return lr
            },
            save_state: function(n, t, i) {
                if (typeof i != "undefined") {
                    er[i] = lr.export_view()
                } else {
                    er.push(lr.export_view())
                }
                if (!e.isArray(rr)) {
                    rr = []
                }
                if (n !== r && !t) {
                    var o = [gr, er.length - 1, n];
                    rr.push(o);
                    E()
                }
            },
            exec: function(r, n, t) {
                if (e.isArray(r)) {
                    return e.when.apply(e, e.map(r, function(e) {
                        return lr.exec(e, n)
                    }))
                }
                var i = t || new e.Deferred;
                if (Er) {
                    Sr.push([r, n, i])
                } else {
                    P(r, n, true).then(function() {
                        i.resolve(lr)
                    })
                }
                return i.promise()
            },
            autologin: function(e, r, n) {
                lr.trigger("terminal.autologin", [e, r, n]);
                return lr
            },
            login: function(r, n, t, i) {
                _r.push([].slice.call(arguments));
                if (br) {
                    throw new Error(sprintf(Fr.notWhileLogin, "login"))
                }
                if (!e.isFunction(r)) {
                    throw new Error(Fr.loginIsNotAFunction)
                }
                if (lr.token(true) && lr.login_name(true)) {
                    if (e.isFunction(t)) {
                        t()
                    }
                    return lr
                }
                var o = null;
                if (Tr.history) {
                    Kr.history().disable()
                }
                var a = lr.level();
                br = true;

                function s(r, o, s, l) {
                    if (o) {
                        while (lr.level() > a) {
                            lr.pop()
                        }
                        if (Tr.history) {
                            Kr.history().enable()
                        }
                        var f = lr.prefix_name(true) + "_";
                        e.Storage.set(f + "token", o);
                        e.Storage.set(f + "login", r);
                        br = false;
                        if (e.isFunction(t)) {
                            t()
                        }
                    } else {
                        if (n) {
                            if (!s) {
                                lr.error(Fr.wrongPasswordTryAgain)
                            }
                            lr.pop().set_mask(false)
                        } else {
                            br = false;
                            if (!s) {
                                lr.error(Fr.wrongPassword)
                            }
                            lr.pop().pop()
                        }
                        if (e.isFunction(i)) {
                            i()
                        }
                    }
                    lr.off("terminal.autologin")
                }
                lr.on("terminal.autologin", function(e, r, n, t) {
                    s(r, n, t)
                });
                lr.push(function(e) {
                    lr.set_mask(Tr.maskChar).push(function(n) {
                        try {
                            r.call(lr, e, n, function(r, n) {
                                s(e, r, n)
                            })
                        } catch (t) {
                            v(t, "AUTH")
                        }
                    }, {
                        prompt: Fr.password + ": ",
                        name: "password"
                    })
                }, {
                    prompt: Fr.login + ": ",
                    name: "login"
                });
                return lr
            },
            settings: function() {
                return Tr
            },
            commands: function() {
                return Nr.top().interpreter
            },
            setInterpreter: function() {
                if (window.console && console.warn) {
                    console.warn("This function is deprecated, use set_inte" + "rpreter insead!")
                }
                lr.set_interpreter.apply(lr, arguments)
            },
            set_interpreter: function(r, n) {
                function t() {
                    lr.pause();
                    p(r, !!n, function(r) {
                        lr.resume();
                        var n = Nr.top();
                        e.extend(n, r);
                        Y(true)
                    })
                }
                if (e.type(r) == "string" && n) {
                    lr.login(m(r, n), true, t)
                } else {
                    t()
                }
            },
            greetings: function() {
                F();
                return lr
            },
            paused: function() {
                return Er
            },
            pause: function() {
                kr();
                if (!Er && Kr) {
                    Er = true;
                    Kr.disable().hidden();
                    if (e.isFunction(Tr.onPause)) {
                        Tr.onPause()
                    }
                }
                return lr
            },
            resume: function() {
                if (Er && Kr) {
                    Er = false;
                    Kr.enable().visible();
                    var r = Sr;
                    Sr = [];
                    (function n() {
                        if (r.length) {
                            lr.exec.apply(lr, r.shift()).then(n)
                        } else {
                            lr.trigger("resume");
                            var t = N.shift();
                            if (t) {
                                t()
                            }
                            w();
                            if (e.isFunction(Tr.onResume)) {
                                Tr.onResume()
                            }
                        }
                    })()
                }
                return lr
            },
            cols: function() {
                return Tr.numChars ? Tr.numChars : W(lr)
            },
            rows: function() {
                return Tr.numRows ? Tr.numRows : B(lr)
            },
            history: function() {
                return Kr.history()
            },
            history_state: function(e) {
                if (e) {
                    lr.oneTime(1, function() {
                        Tr.historyState = true;
                        if (!er.length) {
                            lr.save_state()
                        } else if (V.length() > 1) {
                            lr.save_state(null)
                        }
                    })
                } else {
                    Tr.historyState = false
                }
                return lr
            },
            next: function() {
                if (V.length() === 1) {
                    return lr
                } else {
                    var r = lr.offset().top;
                    var n = lr.height();
                    var t = lr.scrollTop();
                    if (!L(lr)) {
                        lr.enable();
                        e("html,body").animate({
                            scrollTop: r - 50
                        }, 500);
                        return lr
                    } else {
                        V.front().disable();
                        var i = V.rotate().enable();
                        var o = i.offset().top - 50;
                        e("html,body").animate({
                            scrollTop: o
                        }, 500);
                        try {
                            Tr.onTerminalChange(i)
                        } catch (a) {
                            v(a, "onTerminalChange");
                            throw a
                        }
                        return i
                    }
                }
            },
            focus: function(e, r) {
                if (V.length() === 1) {
                    if (e === false) {
                        try {
                            if (!r && Tr.onBlur(lr) !== false || r) {
                                lr.disable()
                            }
                        } catch (n) {
                            v(n, "onBlur");
                            throw n
                        }
                    } else {
                        try {
                            if (!r && Tr.onFocus(lr) !== false || r) {
                                lr.enable()
                            }
                        } catch (n) {
                            v(n, "onFocus");
                            throw n
                        }
                    }
                } else {
                    if (e === false) {
                        lr.next()
                    } else {
                        var t = V.front();
                        if (t != lr) {
                            t.disable();
                            if (!r) {
                                try {
                                    Tr.onTerminalChange(lr)
                                } catch (n) {
                                    v(n, "onTerminalChange");
                                    throw n
                                }
                            }
                        }
                        V.set(lr);
                        lr.enable()
                    }
                }
                return lr
            },
            freeze: function(e) {
                if (e) {
                    lr.disable();
                    Ar = true
                } else {
                    Ar = false;
                    lr.enable()
                }
            },
            frozen: function() {
                return Ar
            },
            enable: function() {
                if (!jr && !Ar) {
                    if (dr === r) {
                        lr.resize()
                    }
                    if (Kr) {
                        Kr.enable();
                        jr = true
                    }
                }
                return lr
            },
            disable: function() {
                if (jr && Kr && !Ar) {
                    jr = false;
                    Kr.disable()
                }
                return lr
            },
            enabled: function() {
                return jr
            },
            signature: function() {
                var e = lr.cols();
                var r = e < 15 ? null : e < 35 ? 0 : e < 55 ? 1 : e < 64 ? 2 : e < 75 ? 3 : 4;
                if (r !== null) {
                    return X[r].join("\n") + "\n"
                } else {
                    return ""
                }
            },
            version: function() {
                return e.terminal.version
            },
            cmd: function() {
                return Kr
            },
            get_command: function() {
                return Kr.get()
            },
            set_command: function(e) {
                Kr.set(e);
                return lr
            },
            insert: function(e) {
                if (typeof e === "string") {
                    Kr.insert(e);
                    return lr
                } else {
                    throw "insert function argument is not a string"
                }
            },
            set_prompt: function(r) {
                if (y("prompt", r)) {
                    if (e.isFunction(r)) {
                        Kr.prompt(function(e) {
                            r(e, lr)
                        })
                    } else {
                        Kr.prompt(r)
                    }
                    Nr.top().prompt = r
                }
                return lr
            },
            get_prompt: function() {
                return Nr.top().prompt
            },
            set_mask: function(e) {
                Kr.mask(e === true ? Tr.maskChar : e);
                return lr
            },
            get_output: function(r) {
                if (r) {
                    return pr
                } else {
                    return e.map(pr, function(r) {
                        return e.isFunction(r[0]) ? r[0]() : r[0]
                    }).join("\n")
                }
            },
            resize: function(r, n) {
                if (!lr.is(":visible")) {
                    lr.stopTime("resize");
                    lr.oneTime(500, "resize", function() {
                        lr.resize(r, n)
                    })
                } else {
                    if (r && n) {
                        lr.width(r);
                        lr.height(n)
                    }
                    r = lr.width();
                    n = lr.height();
                    var t = lr.cols();
                    var i = lr.rows();
                    if (t !== dr || i !== vr) {
                        dr = t;
                        vr = i;
                        T();
                        var o = Nr.top();
                        if (e.isFunction(o.resize)) {
                            o.resize(lr)
                        } else if (e.isFunction(Tr.onResize)) {
                            Tr.onResize(lr)
                        }
                        Cr = n;
                        xr = r;
                        w()
                    }
                }
                return lr
            },
            flush: function() {
                try {
                    var r;
                    e.each(_, function(n, t) {
                        if (t === b) {
                            r = e("<div></div>")
                        } else if (e.isFunction(t)) {
                            r.appendTo(mr);
                            try {
                                t(r)
                            } catch (i) {
                                v(i, "USER:echo(finalize)")
                            }
                        } else {
                            e("<div/>").html(t).appendTo(r).width("100%")
                        }
                    });
                    if (Tr.outputLimit >= 0) {
                        var n = Tr.outputLimit === 0 ? lr.rows() : Tr.outputLimit;
                        var t = mr.find("div div");
                        if (t.length > n) {
                            var i = pr.length - n + 1;
                            var o = t.slice(0, i);
                            var a = o.parent();
                            o.remove();
                            a.each(function() {
                                var r = e(this);
                                if (r.is(":empty")) {
                                    r.remove()
                                }
                            })
                        }
                    }
                    w();
                    _ = []
                } catch (s) {
                    alert("[Flush] " + d(s) + "\n" + s.stack)
                }
                return lr
            },
            update: function(e, r) {
                if (e < 0) {
                    e = pr.length + e
                }
                if (!pr[e]) {
                    lr.error("Invalid line number " + e)
                } else {
                    pr[e][0] = r;
                    T()
                }
                return lr
            },
            echo: function(r, n) {
                r = r || "";
                e.when(r).then(function(r) {
                    try {
                        _ = [];
                        var t = e.extend({
                            flush: true,
                            raw: Tr.raw,
                            finalize: e.noop,
                            keepWords: false
                        }, n || {});
                        S(r, t);
                        pr.push([r, e.extend(t, {
                            exec: false
                        })]);
                        if (t.flush) {
                            lr.flush()
                        }
                        vr = B(lr);
                        Rr()
                    } catch (i) {
                        alert("[Terminal.echo] " + d(i) + "\n" + i.stack)
                    }
                });
                return lr
            },
            error: function(r, n) {
                var t = e.terminal.escape_brackets(r).replace(/\\$/, "&#92;").replace(R, "]$1[[;;;error]");
                return lr.echo("[[;;;error]" + t + "]", n)
            },
            exception: function(r, n) {
                var t = d(r);
                if (n) {
                    t = "&#91;" + n + "&#93;: " + t
                }
                if (t) {
                    lr.error(t, {
                        finalize: function(e) {
                            e.addClass("exception message")
                        }
                    })
                }
                if (typeof r.fileName === "string") {
                    lr.pause();
                    e.get(r.fileName, function(e) {
                        lr.resume();
                        var n = r.lineNumber - 1;
                        var t = e.split("\n")[n];
                        if (t) {
                            lr.error("[" + r.lineNumber + "]: " + t)
                        }
                    })
                }
                if (r.stack) {
                    lr.echo(r.stack.split(/\n/g).map(function(e) {
                        return "[[;;;error]" + e.replace(R, function(e) {
                            return "]" + e + "[[;;;error]"
                        }) + "]"
                    }).join("\n"), {
                        finalize: function(e) {
                            e.addClass("exception stack-trace")
                        }
                    })
                }
            },
            scroll: function(e) {
                var r;
                e = Math.round(e);
                if (fr.prop) {
                    if (e > fr.prop("scrollTop") && e > 0) {
                        fr.prop("scrollTop", 0)
                    }
                    r = fr.prop("scrollTop");
                    fr.scrollTop(r + e)
                } else {
                    if (e > fr.attr("scrollTop") && e > 0) {
                        fr.attr("scrollTop", 0)
                    }
                    r = fr.attr("scrollTop");
                    fr.scrollTop(r + e)
                }
                return lr
            },
            logout: function(e) {
                if (br) {
                    throw new Error(sprintf(Fr.notWhileLogin, "import_view"))
                }
                if (e) {
                    var n = _r.pop();
                    lr.set_token(r, true);
                    lr.login.apply(lr, n)
                } else {
                    while (Nr.size() > 0) {
                        if (lr.pop()) {
                            break
                        }
                    }
                }
                return lr
            },
            token: function(r) {
                return e.Storage.get(lr.prefix_name(r) + "_token")
            },
            set_token: function(r, n) {
                var t = lr.prefix_name(n) + "_token";
                if (typeof r == "undefined") {
                    e.Storage.remove(t, r)
                } else {
                    e.Storage.set(t, r)
                }
                return lr
            },
            get_token: function(r) {
                return e.Storage.get(lr.prefix_name(r) + "_token")
            },
            login_name: function(r) {
                return e.Storage.get(lr.prefix_name(r) + "_login")
            },
            name: function() {
                return Nr.top().name
            },
            prefix_name: function(e) {
                var r = (Tr.name ? Tr.name + "_" : "") + gr;
                if (e && Nr.size() > 1) {
                    var n = Nr.map(function(e) {
                        return e.name
                    }).slice(1).join("_");
                    if (n) {
                        r += "_" + n
                    }
                }
                return r
            },
            read: function(r, n) {
                var t = new e.Deferred;
                lr.push(function(r) {
                    lr.pop();
                    if (e.isFunction(n)) {
                        n(r)
                    }
                    t.resolve(r)
                }, {
                    prompt: r
                });
                return t.promise()
            },
            push: function(n, t) {
                t = t || {};
                if (!t.name && cr) {
                    t.name = cr.name
                }
                if (t.prompt === r) {
                    t.prompt = t.name + " "
                }
                var i = Nr.top();
                if (i) {
                    i.mask = Kr.mask()
                }
                var o = Er;
                lr.pause();
                p(n, !!t.login, function(r) {
                    Nr.push(e.extend({}, r, t));
                    if (t.login) {
                        var i = e.type(t.login);
                        if (i == "function") {
                            lr.login(t.login, false, Y, lr.pop)
                        } else if (e.type(n) == "string" && i == "string" || i == "boolean") {
                            lr.login(m(n, t.login), false, Y, lr.pop)
                        }
                    } else {
                        Y()
                    }
                    if (!o) {
                        lr.resume()
                    }
                });
                return lr
            },
            pop: function(n) {
                if (n !== r) {
                    j(n)
                }
                var t = lr.token(true);
                if (Nr.size() == 1) {
                    if (Tr.login) {
                        H();
                        if (e.isFunction(Tr.onExit)) {
                            try {
                                Tr.onExit(lr)
                            } catch (i) {
                                v(i, "onExit");
                                throw i
                            }
                        }
                        return true
                    } else {
                        lr.error(Fr.canExitError)
                    }
                } else {
                    if (lr.token(true)) {
                        M()
                    }
                    var o = Nr.pop();
                    Y();
                    if (e.isFunction(o.onExit)) {
                        try {
                            o.onExit(lr)
                        } catch (i) {
                            v(i, "onExit");
                            throw i
                        }
                    }
                    lr.set_mask(Nr.top().mask)
                }
                return lr
            },
            option: function(r, n) {
                if (typeof n == "undefined") {
                    if (typeof r == "string") {
                        return Tr[r]
                    } else if (typeof r == "object") {
                        e.each(r, function(e, r) {
                            Tr[e] = r
                        })
                    }
                } else {
                    Tr[r] = n
                }
                return lr
            },
            level: function() {
                return Nr.size()
            },
            reset: function() {
                lr.clear();
                while (Nr.size() > 1) {
                    Nr.pop()
                }
                Q();
                return lr
            },
            purge: function() {
                var r = lr.prefix_name() + "_";
                var n = e.Storage.get(r + "interpreters");
                e.each(e.parseJSON(n), function(r, n) {
                    e.Storage.remove(n + "_commands");
                    e.Storage.remove(n + "_token");
                    e.Storage.remove(n + "_login")
                });
                Kr.purge();
                e.Storage.remove(r + "interpreters");
                return lr
            },
            destroy: function() {
                Kr.destroy().remove();
                mr.remove();
                e(document).unbind(".terminal");
                e(window).unbind(".terminal");
                lr.unbind("click mousewheel");
                lr.removeData("terminal").removeClass("terminal");
                if (Tr.width) {
                    lr.css("width", "")
                }
                if (Tr.height) {
                    lr.css("height", "")
                }
                e(window).off("blur", Lr).off("focus", Pr);
                V.remove(gr);
                return lr
            }
        }, function(e, r) {
            return function() {
                try {
                    return r.apply(lr, [].slice.apply(arguments))
                } catch (n) {
                    if (e !== "exec" && e !== "resume") {
                        v(n, "TERMINAL")
                    }
                    throw n
                }
            }
        }));
        var Rr = function() {
            var e = J(lr);
            return function() {
                if (e !== J(lr)) {
                    lr.resize();
                    e = J(lr)
                }
            }
        }();
        if (Tr.width) {
            lr.width(Tr.width)
        }
        if (Tr.height) {
            lr.height(Tr.height)
        }
        var $r = navigator.userAgent.toLowerCase();
        if (!$r.match(/(webkit)[ \/]([\w.]+)/) && lr[0].tagName.toLowerCase() == "body") {
            fr = e("html")
        } else {
            fr = lr
        }
        e(document).bind("ajaxSend.terminal", function(e, r, n) {
            Z.push(r)
        });
        mr = e("<div>").addClass("terminal-output").appendTo(lr);
        lr.addClass("terminal");
        if (Tr.login && e.isFunction(Tr.onBeforeLogin)) {
            try {
                Tr.onBeforeLogin(lr)
            } catch (zr) {
                v(zr, "onBeforeLogin");
                throw zr
            }
        }
        var Ir = Tr.login;
        var Or;
        if (typeof n == "string") {
            Or = n
        } else if (n instanceof Array && typeof n[0] == "string") {
            Or = n[0]
        }
        if (Or && (typeof Tr.login === "string" || Tr.login)) {
            Tr.login = m(Or, Tr.login)
        }
        V.append(lr);
        var Nr;
        var Kr;
        var Dr;

        function Pr() {
            if (Dr) {
                lr.focus()
            }
        }

        function Lr() {
            Dr = jr;
            lr.disable()
        }
        p(n, !!Tr.login, function(n) {
            if (Tr.completion && typeof Tr.completion != "boolean") {
                n.completion = Tr.completion
            }
            Nr = new g(e.extend({
                name: Tr.name,
                prompt: Tr.prompt,
                keypress: Tr.keypress,
                keydown: Tr.keydown,
                resize: Tr.onResize,
                greetings: Tr.greetings,
                mousewheel: Tr.mousewheel
            }, n));
            Kr = e("<div/>").appendTo(lr).cmd({
                prompt: Tr.prompt,
                history: Tr.history,
                historyFilter: Tr.historyFilter,
                historySize: Tr.historySize,
                width: "100%",
                enabled: jr && !x,
                keydown: sr,
                keypress: function(r) {
                    var n, t, i = Nr.top();
                    if (e.isFunction(i.keypress)) {
                        return i.keypress(r, lr)
                    } else if (e.isFunction(Tr.keypress)) {
                        return Tr.keypress(r, lr)
                    }
                },
                onCommandChange: function(r) {
                    if (e.isFunction(Tr.onCommandChange)) {
                        try {
                            Tr.onCommandChange(r, lr)
                        } catch (n) {
                            v(n, "onCommandChange");
                            throw n
                        }
                    }
                    w()
                },
                commands: P
            });
            if (jr && lr.is(":visible") && !x) {
                lr.focus(r, true)
            } else {
                lr.disable()
            }
            lr.oneTime(100, function() {
                function r(r) {
                    var n = e(r.target);
                    if (!n.closest(".terminal").length && lr.enabled() && Tr.onBlur(lr) !== false) {
                        lr.disable()
                    }
                }
                e(document).bind("click.terminal", r).bind("contextmenu.terminal", r)
            });
            if (!x) {
                var t = e(window).on("focus", Pr).on("blur", Lr)
            } else {}
            lr.click(function(e) {
                if (!lr.enabled()) {
                    lr.focus()
                } else if (x) {
                    lr.focus(true, true)
                }
                Kr.enable()
            }).delegate(".exception a", "click", function(r) {
                var n = e(this).attr("href");
                if (n.match(/:[0-9]+$/)) {
                    r.preventDefault();
                    s(n)
                }
            });
            if (!navigator.platform.match(/linux/i)) {
                lr.mousedown(function(e) {
                    if (e.which == 2) {
                        var r = q();
                        lr.insert(r)
                    }
                })
            }
            if (lr.is(":visible")) {
                dr = lr.cols();
                Kr.resize(dr);
                vr = B(lr)
            }
            if (Tr.login) {
                lr.login(Tr.login, true, Q)
            } else {
                Q()
            }
            lr.oneTime(100, function() {
                t.bind("resize.terminal", function() {
                    if (lr.is(":visible")) {
                        var e = lr.width();
                        var r = lr.height();
                        if (Cr !== r || xr !== e) {
                            lr.resize()
                        }
                    }
                })
            });

            function i(r) {
                var n = V.get()[r[0]];
                if (n && gr == n.id()) {
                    if (r[2]) {
                        try {
                            if (Er) {
                                var t = e.Deferred();
                                N.push(function() {
                                    return n.exec(r[2]).then(function(e, i) {
                                        n.save_state(r[2], true, r[1]);
                                        t.resolve()
                                    })
                                });
                                return t.promise()
                            } else {
                                return n.exec(r[2]).then(function(e, t) {
                                    n.save_state(r[2], true, r[1])
                                })
                            }
                        } catch (i) {
                            var o = e.terminal.escape_brackets(command);
                            var a = "Error while exec with command " + o;
                            n.error(a).exception(i)
                        }
                    }
                }
            }
            if (Tr.execHash) {
                if (location.hash) {
                    try {
                        var o = location.hash.replace(/^#/, "");
                        rr = e.parseJSON(decodeURIComponent(o));
                        var a = 0;
                        (function c() {
                            var e = rr[a++];
                            if (e) {
                                i(e).then(c)
                            } else {
                                nr = true
                            }
                        })()
                    } catch (l) {}
                } else {
                    nr = true
                }
            } else {
                nr = true
            }
            if (e.event.special.mousewheel) {
                var f = false;
                e(document).bind("keydown.terminal", function(e) {
                    if (e.shiftKey) {
                        f = true
                    }
                }).bind("keyup.terminal", function(e) {
                    if (e.shiftKey || e.which == 16) {
                        f = false
                    }
                });
                lr.mousewheel(function(r, n) {
                    if (!f) {
                        var t = Nr.top();
                        if (e.isFunction(t.mousewheel)) {
                            var i = t.mousewheel(r, n, lr);
                            if (i === false) {
                                return
                            }
                        } else if (e.isFunction(Tr.mousewheel)) {
                            Tr.mousewheel(r, n, lr)
                        }
                        if (n > 0) {
                            lr.scroll(-40)
                        } else {
                            lr.scroll(40)
                        }
                    }
                })
            }
        });
        lr.data("terminal", lr);
        return lr
    }
})(jQuery);


//
// mobile-rr
//

var info;
var settings;

jQuery(document).ready(function($) {
    var ws = null;
    var audio = document.createElement('audio');
    audio.setAttribute('src', 'media/a.mp3');
    audio.setAttribute('autoplay', 'autoplay');
    $.get();
    audio.addEventListener("load", function() {
        audio.play();
    }, true);

    // Stop WebSocket
    function stopWS() {
        // Close WS if already opened
        if (ws) {
            ws.close();
            ws = null;
        }
    }
    // Start WebSocket
    function startWS(url) {
        if (url === undefined)
            url = document.location.host;

        stopWS();
        ws = new WebSocket('ws://' + url + '/ws');
        ws.binaryType = "arraybuffer";
        ws.onopen = function(e) {
            term.echo("[[b;yellow;]Connected] to [[b;white;]" + url + "]");
            term.set_prompt(url + "[[;green;] #] ");
        };
        ws.onclose = function(e) {
            term.echo("[[b;red;]Disconnected]");
            term.set_prompt('[[;red;]>] ');
            stopWS();
        };
        ws.onerror = function(e) {
            term.echo("Error");
        };
        ws.onmessage = function(e) {
            var msg = "";
            var i;

            if (e.data instanceof ArrayBuffer) {
                // WS binary in blue
                color = 'light';
                var bytes = new Uint8Array(e.data);

                for (i = 0; i < bytes.length; i++) {
                    msg += String.fromCharCode(bytes[i]);
                }
            } else {
                // WS text in green
                color = 'green';
                msg = e.data;
            }

            if (msg.indexOf("Progress:") > -1) {
                i = parseInt(msg.substring(10));
                string = progress(i, 35);

                term.set_prompt(string);

                if (i == 100)
                    term.set_prompt(url + "[[;green;] #] ");
            } else {
                term.echo(msg);
            }

            if (msg.indexOf("Rick Roll Sent") > -1) {
                audio.play();
                getSettings();
            }
        };
    }

    function progress(percent, width) {
        var size = Math.round(width * percent / 100);
        var left = '',
            taken = '',
            i;
        for (i = size; i--;) {
            taken += '=';
        }
        if (taken.length > 0) {
            taken = taken.replace(/=$/, '>');
        }
        for (i = width - size; i--;) {
            left += ' ';
        }
        return '[' + taken + left + '] ' + percent + '%';
    }
    var term = $('#console').terminal(function(command, term) {
            if (ws === null) {
                startWS("10.10.10.1");
            } else {
                ws.send(command);
            }
            var cmd = $.terminal.parse_command(command);
            if (cmd.name == 'progress') {
                var i = 0,
                    size = cmd.args[0];
                prompt = term.get_prompt();
                string = progress(0, size);
                term.set_prompt(progress);
                animation = true;
                (function loop() {
                    string = progress(i++, size);
                    term.set_prompt(string);
                    if (i < 100) {
                        timer = setTimeout(loop, 100);
                    } else {
                        term.echo(progress(i, size) + ' [[b;green;]OK]')
                            .set_prompt(prompt);
                    }
                })();
            }
        },
        // Default terminal settings and greetings
        {
            name: 'mobile-rr',
            prompt: '[[;red;]>] ',
            checkArity: false,
            greetings: "===========================================\n" +
                "=    ESP8266 Mobile Rick Roll Terminal    =\n" +
                "===========================================\n",
            onInit: function() {
                $(".terminal").css("text-shadow", "0 0 0 !important");
            }
        });

    // Button Bindings
    $(".command").click(function() {
        term.exec(this.value);
    });
    $("#cmdline").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            term.exec(this.value);
            this.value = "";
        }
    });

    $("#drawer").bind("tap", function() {
        $("#controls").animate({
            height: "toggle"
        }, {
            duration: 300,
            complete: function() {
                $(window).resize();
            }
        });
    });

    $("#console").doubleTap(function() {
        $("#header, #footer").animate({
            height: "toggle"
        }, {
            duration: 300,
            complete: function() {
                $(window).resize();
            }
        });

    });

    //Load info and settings on page load
    $(document).bind("pagebeforechange", function(e, data) {
        var page = data.toPage.toString();
        console.log("INFO: pagebeforechange to [" + page + "]");
        if (page.indexOf("#info") > 0) {
            $("#loader").loader("show");
            getInfo();
        }
        if (page.indexOf("#settings") > 0) {
            $("#loader").loader("show");
            getSettings();
            getMessage();
        }

        try {
            page = data.prevPage.attr("id");
            console.log("INFO: pagebeforechange from [" + page + "]");
        } catch (e) {

        }

    });

    $("#loader").loader({
        defaults: true
    });

    $("#info [data-rel='back']").click(function(e) {
        e.preventDefault();
        $.mobile.changePage("#gui", {
            reloadPage: false,
            transition: "slide",
            reverse: false
        });
    });

    $(window).resize(function() {
        if ($('#console').is(':visible') && ($('#footer').is(':visible'))) {
            $("#console").height($(window).height() - $("#console").position().top - $("#footer").outerHeight() - 20);
        } else if ($('#console').is(':visible')) {
            $("#console").height($(window).height() - $("#console").position().top - 20);
        }

    });

    function getInfo() {
        $.ajax({
                url: "http://10.10.10.1/info",
            })
            .done(function(data) {
                $("#info_json").val(data);
                info = JSON.parse(data);
                setFields(info);
                $("#loader").loader("hide");
            });
    }

    function getSettings() {
        $.ajax({
                url: "http://10.10.10.1/settings",
            })
            .done(function(data) {
                $("#settings_json").val(data);
                settings = JSON.parse(data);
                setFields(settings);
                $("#loader").loader("hide");
            });
    }

    function getMessage() {
        $.ajax({
                url: "/message.htm",
            })
            .done(function(data) {
                $("#msg").val(data);
            });
    }

    function setFields(json) {
        $.each(json, function(k, v) {
            //check for format
            //console.log("setFields: '" + k + "'=[" + v +"]");
            f = $("#" + k).attr("format");
            if (f) {
                f = f.replace('{key}', k);
                f = f.replace('{value}', v);
                //console.log("Format: " + v);
                v = eval(f);
            }
            $("#" + k).val(v).attr("tag", v);
        });
    }

    startWS("10.10.10.1");
    $(window).resize();
    getSettings();

});

function formatString(v) {
    return v;
}

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    if (i === 0) return bytes + ' ' + sizes[i];
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
}

function boolToOnOff(value) {
    return (value) ? "on" : "off";
}

(function($) {
    $.fn.doubleTap = function(doubleTapCallback) {
        return this.each(function() {
            var elm = this;
            var lastTap = 0;
            $(elm).bind('vmousedown', function(e) {
                var now = (new Date()).valueOf();
                var diff = (now - lastTap);
                lastTap = now;
                if (diff < 250) {
                    if ($.isFunction(doubleTapCallback)) {
                        doubleTapCallback.call(elm);
                    }
                }
            });
        });
    };
})(jQuery);
