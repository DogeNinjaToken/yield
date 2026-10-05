(this.webpackJsonpyieldforge = this.webpackJsonpyieldforge || []).push([
    [5], {
        808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return Xe
            }));
            var c, a, i = n(26),
                r = n(0),
                s = n(8),
                o = n(6),
                b = n(153),
                j = n(2),
                l = n.n(j),
                u = n(14),
                d = n(25),
                O = n(35),
                x = n(27),
                p = n(244),
                f = n(16),
                h = n(13),
                m = n.n(h),
                v = n(57),
                g = n(22),
                w = n(91),
                S = n(248),
                k = n(191),
                y = function() {
                    var e = Object(r.useState)([]),
                        t = Object(d.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        a = Object(O.c)().account,
                        i = Object(k.a)().fastRefresh;
                    return Object(r.useEffect)((function() {
                        var e = function() {
                            var e = Object(u.a)(l.a.mark((function e() {
                                var t, n, i;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = S.a.map((function(e) {
                                                return {
                                                    address: Object(g.e)(),
                                                    name: "pendingForge",
                                                    params: [e.pid, a]
                                                }
                                            })), e.next = 3, Object(v.a)(w, t);
                                        case 3:
                                            n = e.sent, i = S.a.map((function(e, t) {
                                                return Object(f.a)(Object(f.a)({}, e), {}, {
                                                    balance: new m.a(n[t])
                                                })
                                            })), c(i);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        a && e()
                    }), [a, i]), n
                },
                M = n(243),
                z = function() {
                    var e = Object(r.useState)([]),
                        t = Object(d.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        a = Object(O.c)().account,
                        i = Object(k.a)().fastRefresh;
                    return Object(r.useEffect)((function() {
                        var e = function() {
                            var e = Object(u.a)(l.a.mark((function e() {
                                var t, n;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = S.a.map((function(e) {
                                                return {
                                                    address: Object(g.e)(),
                                                    name: "pendingForge",
                                                    params: [e.pid, a]
                                                }
                                            })), e.next = 3, Object(v.a)(w, t);
                                        case 3:
                                            n = e.sent, c(n);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        a && e()
                    }), [a, i]), n
                },
                D = n(44),
                E = n(245),
                C = n(4),
                H = function(e) {
                    var t = e.value,
                        n = e.decimals,
                        c = e.fontSize,
                        a = void 0 === c ? "40px" : c,
                        i = e.lineHeight,
                        s = void 0 === i ? "1" : i,
                        b = e.prefix,
                        j = void 0 === b ? "" : b,
                        l = e.bold,
                        u = void 0 === l || l,
                        d = e.color,
                        O = void 0 === d ? "text" : d,
                        x = Object(E.useCountUp)({
                            start: 0,
                            end: t,
                            duration: 1,
                            separator: ",",
                            decimals: void 0 !== n ? n : t < 0 ? 4 : t > 1e5 ? 0 : 3
                        }),
                        p = x.countUp,
                        f = x.update,
                        h = Object(r.useRef)(f);
                    return Object(r.useEffect)((function() {
                        h.current(t)
                    }), [t, h]), Object(C.jsxs)(o.Q, {
                        bold: u,
                        fontSize: a,
                        style: {
                            lineHeight: s
                        },
                        color: O,
                        children: [j, p]
                    })
                },
                Q = function(e) {
                    return Object(C.jsx)(H, Object(f.a)({
                        fontSize: "14px",
                        lineHeight: "1.1",
                        color: "textSubtle",
                        prefix: "~$",
                        bold: !1,
                        decimals: 2
                    }, e))
                },
                F = s.e.div(c || (c = Object(i.a)(["\n  margin-bottom: 24px;\n"]))),
                N = function() {
                    var e, t = Object(x.b)().t,
                        n = Object(O.c)().account,
                        c = z().reduce((function(e, t) {
                            return e + new m.a(t).div(new m.a(10).pow(18)).toNumber()
                        }), 0),
                        a = Object(D.h)();
                    return e = c > 0 ? new m.a(c).multipliedBy(a).toNumber() : 0, n ? Object(C.jsxs)(F, {
                        children: [Object(C.jsx)(H, {
                            value: c,
                            lineHeight: "1.5"
                        }), Object(C.jsx)(Q, {
                            value: e
                        }, e)]
                    }) : Object(C.jsx)(o.Q, {
                        color: "textDisabled",
                        style: {
                            lineHeight: "76px"
                        },
                        children: t("Locked")
                    })
                },
                R = n(43),
                T = n(61),
                A = n(77);
            ! function(e) {
                e.NOT_FETCHED = "not-fetched", e.SUCCESS = "success", e.FAILED = "failed"
            }(a || (a = {}));
            var P, B, L, _, W, q, U, $, I, J, V, G = function() {
                    var e = Object(k.a)().slowRefresh,
                        t = Object(r.useState)(),
                        n = Object(d.a)(t, 2),
                        c = n[0],
                        a = n[1];
                    return Object(r.useEffect)((function() {
                        function e() {
                            return (e = Object(u.a)(l.a.mark((function e() {
                                var t, n;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = Object(T.f)(), e.next = 3, t.methods.totalSupply().call();
                                        case 3:
                                            n = e.sent, a(new m.a(n));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }! function() {
                            e.apply(this, arguments)
                        }()
                    }), [e]), c
                },
                K = function(e) {
                    var t = Object(r.useState)(new m.a(0)),
                        n = Object(d.a)(t, 2),
                        c = n[0],
                        a = n[1],
                        i = Object(k.a)().slowRefresh,
                        s = Object(A.a)();
                    return Object(r.useEffect)((function() {
                        var t = function() {
                            var t = Object(u.a)(l.a.mark((function t() {
                                var n, c;
                                return l.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return n = Object(T.a)(e, s), t.next = 3, n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();
                                        case 3:
                                            c = t.sent, a(new m.a(c));
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                        t()
                    }), [s, e, i]), c
                },
                X = function(e) {
                    var t = a.NOT_FETCHED,
                        n = a.SUCCESS,
                        c = a.FAILED,
                        i = Object(r.useState)({
                            balance: R.b,
                            fetchStatus: t
                        }),
                        s = Object(d.a)(i, 2),
                        o = s[0],
                        b = s[1],
                        j = Object(O.c)().account,
                        x = Object(k.a)().fastRefresh;
                    return Object(r.useEffect)((function() {
                        var t = function() {
                            var t = Object(u.a)(l.a.mark((function t() {
                                var a, i;
                                return l.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return a = Object(T.a)(e), t.prev = 1, t.next = 4, a.methods.balanceOf(j).call();
                                        case 4:
                                            i = t.sent, b({
                                                balance: new m.a(i),
                                                fetchStatus: n
                                            }), t.next = 12;
                                            break;
                                        case 8:
                                            t.prev = 8, t.t0 = t.catch(1), console.error(t.t0), b((function(e) {
                                                return Object(f.a)(Object(f.a)({}, e), {}, {
                                                    fetchStatus: c
                                                })
                                            }));
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [1, 8]
                                ])
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                        j && t()
                    }), [j, e, x, n, c]), o
                },
                Y = n(36),
                Z = function() {
                    var e = Object(r.useState)(0),
                        t = Object(d.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        a = Object(x.b)().t,
                        i = Object(D.h)(),
                        s = X(Object(g.b)()).balance,
                        b = Object(Y.c)(s),
                        j = Object(O.c)().account;
                    return Object(r.useEffect)((function() {
                        var e = new h.BigNumber(b).multipliedBy(i).toNumber();
                        c(e)
                    }), [s, c, i]), j ? Object(C.jsxs)(C.Fragment, {
                        children: [Object(C.jsx)(H, {
                            value: b,
                            decimals: 4,
                            fontSize: "24px",
                            lineHeight: "36px"
                        }), Object(C.jsx)(Q, {
                            value: n
                        }, n)]
                    }) : Object(C.jsx)(o.Q, {
                        color: "textDisabled",
                        style: {
                            lineHeight: "54px"
                        },
                        children: a("Locked")
                    })
                },
                ee = Object(s.e)(o.k)(P || (P = Object(i.a)(["\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),
                te = s.e.div(B || (B = Object(i.a)(["\n  margin-bottom: 16px;\n"]))),
                ne = s.e.img(L || (L = Object(i.a)(["\n  margin-bottom: 16px;\n"]))),
                ce = s.e.div(_ || (_ = Object(i.a)(["\n  color: ", ";\n  font-size: 14px;\n"])), (function(e) {
                    return e.theme.colors.textSubtle
                })),
                ae = s.e.div(W || (W = Object(i.a)(["\n  margin-top: 24px;\n"]))),
                ie = function() {
                    var e = Object(r.useState)(!1),
                        t = Object(d.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        a = Object(O.c)().account,
                        i = Object(x.b)().t,
                        s = y().filter((function(e) {
                            return e.balance.toNumber() > 0
                        })),
                        b = Object(p.a)(s.map((function(e) {
                            return e.pid
                        }))).onReward,
                        j = Object(r.useCallback)(Object(u.a)(l.a.mark((function e() {
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return c(!0), e.prev = 1, e.next = 4, b();
                                    case 4:
                                        e.next = 8;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1);
                                    case 8:
                                        return e.prev = 8, c(!1), e.finish(8);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 6, 8, 11]
                            ])
                        }))), [b]);
                    return Object(C.jsx)(ee, {
                        children: Object(C.jsxs)(o.l, {
                            children: [Object(C.jsx)(o.w, {
                                scale: "xl",
                                mb: "24px",
                                children: i("Token & Stock Staking")
                            }), Object(C.jsx)(ne, {
                                src: "/images/lyd.png",
                                alt: "lyd logo",
                                width: 64,
                                height: 64
                            }), Object(C.jsxs)(te, {
                                children: [Object(C.jsxs)(ce, {
                                    children: [i("FORGE to Harvest"), ":"]
                                }), Object(C.jsx)(N, {})]
                            }), Object(C.jsxs)(te, {
                                children: [Object(C.jsxs)(ce, {
                                    children: [i("FORGE in Wallet"), ":"]
                                }), Object(C.jsx)(Z, {})]
                            }), Object(C.jsx)(ae, {
                                children: a ? Object(C.jsx)(o.g, {
                                    id: "harvest-all",
                                    disabled: s.length <= 0 || n,
                                    onClick: j,
                                    width: "100%",
                                    children: n ? i("Collecting FORGE") : i("Harvest all (".concat(s.length, ")"), {
                                        count: s.length
                                    })
                                }) : Object(C.jsx)(M.a, {
                                    width: "100%"
                                })
                            })]
                        })
                    })
                },
                re = n(175),
                se = n(801),
                oe = n(98),
                be = s.e.div(q || (q = Object(i.a)(["\n  background-color: ", ";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])), (function(e) {
                    return e.theme.colors.textSubtle
                })),
                je = Object(s.e)(o.k)(U || (U = Object(i.a)(["\n  justify-content:space-around;\n  display: inline-block;\n  flex: 1;\n  width:", ";\n  box-shadow: none;\n\n"])), (function(e) {
                    return e.isMobile ? "100%" : "200%"
                })),
                le = Object(s.e)(o.l)($ || ($ = Object(i.a)(["\n  box-shadow: none;\n  text-align:center\n"]))),
                ue = function() {
                    var e = Object(x.b)().t,
                        t = Object(D.m)(),
                        n = Object(se.useMediaQuery)({
                            query: "(max-width: 900px)"
                        });
                    return Object(C.jsx)(je, {
                        isMobile: n,
                        children: Object(C.jsxs)(le, {
                            children: [Object(C.jsx)(o.w, {
                                scale: "lg",
                                mb: "24px",
                                children: e("Total Value Locked (TVL)")
                            }), Object(C.jsxs)(C.Fragment, {
                                children: [Object(C.jsx)(H, {
                                    value: t.toNumber(),
                                    prefix: "$",
                                    decimals: 2
                                }), Object(C.jsx)(o.Q, {
                                    color: "textSubtle",
                                    children: e("Across all token staking pools")
                                })]
                            })]
                        })
                    })
                },
                de = n(802),
                Oe = Object(s.e)("div")(I || (I = Object(i.a)(["\n  width: 100%;\n  display: ", ";\n  padding: 2%;\n  padding-bottom: 5%;\n"])), (function(e) {
                    return e.isMobile ? "inline-block" : "flex-grid"
                })),
                xe = s.e.div(J || (J = Object(i.a)(["\n  height: 300px;\n  min-width: 50%;\n  justify-content: space-between;\n  padding: 10px;\n"]))),
                pe = Object(s.e)(o.w)(V || (V = Object(i.a)(["\n  padding: 10px;\n"])));

            function fe(e) {
                var t = Object(r.useState)(void 0),
                    n = Object(d.a)(t, 2),
                    c = n[0],
                    a = n[1],
                    i = e.data,
                    s = Object(oe.a)().theme,
                    o = i.map((function(e, t) {
                        return c === t ? Object(f.a)(Object(f.a)({}, e), {}, {
                            color: "grey"
                        }) : e
                    }));
                if (!o.some(function(x){return Number.isFinite(Number(x.value)) && Number(x.value)>0;})) return null;
                return Object(C.jsx)(de.PieChart, {
                    style: {
                        fontSize: "8px"
                    },
                    data: o.map(function(x){return Object.assign({},x,{value:Number.isFinite(Number(x.value))?Math.max(0,Number(x.value)):0});}),
                    radius: 44,
                    lineWidth: 100,
                    segmentsStyle: {
                        transition: "stroke .3s",
                        cursor: "pointer"
                    },
                    segmentsShift: function(e) {
                        return e === c && 0 === e ? 6 : 1
                    },
                    animate: !0,
                    label: function(e) {
                        var t = e.dataEntry;
                        return "".concat(t.title, " - ").concat(t.percentage.toLocaleString(void 0, {
                            maximumFractionDigits: 2
                        }), "%")
                    },
                    labelPosition: 79.4,
                    labelStyle: {
                        fill: s.colors.text,
                        opacity: .75,
                        pointerEvents: "none"
                    },
                    onClick: function(e, t) {
                        0 === t ? window.open(window.ROBINHOOD_FARM.explorerUrl+'/address/'+window.ROBINHOOD_FARM.tokenAddress, "_blank") : 1 === t && window.open(window.ROBINHOOD_FARM.explorerUrl+'/address/'+window.ROBINHOOD_FARM.tokenAddress, "_blank")
                    },
                    onMouseOver: function(e, t) {
                        a(t)
                    },
                    onMouseOut: function() {
                        a(void 0)
                    }
                })
            }
            function fe2(e) {
                var t = Object(r.useState)(void 0),
                    n = Object(d.a)(t, 2),
                    c = n[0],
                    a = n[1],
                    i = e.data,
                    s = Object(oe.a)().theme,
                    o = i.map((function(e, t) {
                        return c === t ? Object(f.a)(Object(f.a)({}, e), {}, {
                            color: "grey"
                        }) : e
                    }));
                if (!o.some(function(x){return Number.isFinite(Number(x.value)) && Number(x.value)>0;})) return null;
                return Object(C.jsx)(de.PieChart, {
                    style: {
                        fontSize: "8px"
                    },
                    data: o.map(function(x){return Object.assign({},x,{value:Number.isFinite(Number(x.value))?Math.max(0,Number(x.value)):0});}),
                    radius: 44,
                    lineWidth: 100,
                    segmentsStyle: {
                        transition: "stroke .3s",
                        cursor: "pointer"
                    },
                    segmentsShift: function(e) {
                        return e === c && 0 === e ? 6 : 1
                    },
                    animate: !0,
                    label: function(e) {
                        var t = e.dataEntry;
                        return "".concat(t.title, " - ").concat(t.value.toLocaleString(void 0, {
                            maximumFractionDigits: 0
                        }))
                    },
                    labelPosition: 79.4,
                    labelStyle: {
                        fill: s.colors.text,
                        opacity: .75,
                        pointerEvents: "none"
                    },
                    onClick: function(e, t) {
                        0 === t ? window.open(window.ROBINHOOD_FARM.explorerUrl+'/address/'+window.ROBINHOOD_FARM.tokenAddress, "_blank") : 1 === t && window.open(window.ROBINHOOD_FARM.explorerUrl+'/address/'+window.ROBINHOOD_FARM.tokenAddress, "_blank")
                    },
                    onMouseOver: function(e, t) {
                        a(t)
                    },
                    onMouseOut: function() {
                        a(void 0)
                    }
                })
            }
            var he, me, ve, ge, we, Se, ke, ye, Me, ze, De = function() {
                    var e = G(),
                        t = K(Object(g.b)()),
                        n = e ? e.minus(t) : new re.a(0),
                        z = Object(Y.c)(e),
                        y = new re.a(window.RH.stats?.maxSupply||0).minus(z),
                        c = Object(se.useMediaQuery)({
                            query: "(max-width: 900px)"
                        }); 
                    return Object(C.jsxs)(Oe, {
                        isMobile: c,
                        children: [Object(C.jsxs)(xe, {
                            children: [Object(C.jsx)(pe, {
                                children: "FORGE supply"
                            }), Object(C.jsx)(fe, {
                                data: [{
                                    title: "Burned",
                                    value: t.div(e).toNumber(),
                                    color: "#92E7C9"
                                }, {
                                    title: "Circulating",
                                    value: n.div(e).toNumber(),
                                    color: "#6BA95C"
                                }]
                            })]
                        }),
                        Object(C.jsxs)(xe, {
                            children: [Object(C.jsx)(pe, {
                                children: "FORGE emission"
                            }), Object(C.jsx)(fe2, {
                                data: [{
                                    title: "Supply",
                                    value: z,
                                    color: "#92E7C9"
                                }, {
                                    title: "Remaining",
                                    value: y.toNumber(),
                                    color: "#6BA95C"
                                }]
                            })]
                        })]
                    })
                },
                Ee = Object(s.e)(o.k)(he || (he = Object(i.a)(["\n  margin-top: auto;\n  margin-left: auto;\n  margin-right: auto;\n  width:100%;\n  ", "\n  border-radius:8px;\n  \n"])), (function(e) {
                    return e.isMobile ? "" : "grid-column: span 12 !important;"
                })),
                Ce = Object(s.e)(o.l)(me || (me = Object(i.a)(["\n  column-count:", "\n"])), (function(e) {
                    return e.isMobile ? "1" : "3"
                })),
                He = s.e.div(ve || (ve = Object(i.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),
                Qe = s.e.div(ge || (ge = Object(i.a)(["\n  align-items: left;\n  display: block;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  \n"]))),
                Fe = s.e.a(we || (we = Object(i.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  :hover{\n    text-decoration: underline;\n  }\n"]))),
                Ne = Object(s.e)(o.Q)(Se || (Se = Object(i.a)(["\n  display: flexbox;\n  white-space:pre;\n"]))),
                Re = Object(s.e)(o.z)(ke || (ke = Object(i.a)(["\n    filter:invert(100%);\n  "]))),
                Te = Object(s.e)(o.w)(ye || (ye = Object(i.a)(["\n  column-span: all;\n  "]))),
                Ae = Object(s.e)(be)(Me || (Me = Object(i.a)(["\n    width:80%;\n  "]))),
                Pe = function() {
                    var e = Object(x.b)().t,
                        t = G(),
                        n = Object(g.b)(),
                        c = K(n),
                        a = Object(D.h)(),
                        i = t ? t.minus(c) : new re.a(0),
                        r = Object(Y.c)(i),
                        s = a.times(i),
                        z = a.times(c),
                        b = Object(oe.a)().isDark,
                        j = Object(se.useMediaQuery)({
                            query: "(max-width: 900px)"
                        });
                    return Object(C.jsxs)(Ee, {
                        isMobile: j,
                        children: [Object(C.jsxs)(Ce, {
                            isMobile: j,
                            children: [Object(C.jsx)(Te, {
                                scale: "xl",
                                mb: "24px",
                                children: e("FORGE Stats")
                            }), Object(C.jsxs)(Qe, {
                                children: [Object(C.jsxs)(He, {
                                    children: [Object(C.jsx)(o.Q, {
                                        fontSize: "14px",
                                        children: e("Market Cap")
                                    }), Object(C.jsx)(H, {
                                        fontSize: "14px",
                                        value: Object(Y.c)(s),
                                        decimals: 0,
                                        prefix: "$"
                                    })]
                                }), Object(C.jsxs)(He, {
                                    children: [Object(C.jsx)(o.Q, {
                                        fontSize: "14px",
                                        children: e("Total Minted")
                                    }), t && Object(C.jsx)(H, {
                                        fontSize: "14px",
                                        value: Object(Y.c)(t),
                                        decimals: 0
                                    })]
                                }), Object(C.jsxs)(Fe, {
                                    target: "_blank",
                                    href: window.ROBINHOOD_FARM.explorerUrl+'/address/'+window.ROBINHOOD_FARM.tokenAddress,
                                    children: [Object(C.jsxs)(Ne, {
                                        fontSize: "14px",
                                        children: [e("Total Burned"), "   ", 
                                        b ? Object(C.jsx)(Re, {
                                            width: 20,
                                            height: 20,
                                            alt: "external link",
                                            src: "https://img.icons8.com/windows/32/000000/share-arrow-squared.png"
                                        }) : Object(C.jsx)(o.z, {
                                            width: 20,
                                            height: 20,
                                            alt: "external link",
                                            src: "https://img.icons8.com/windows/32/000000/share-arrow-squared.png"
                                        })]
                                    }), Object(C.jsx)(H, {
                                        fontSize: "14px",
                                        value: Object(Y.c)(c),
                                        decimals: 0
                                    })]
                                }), 
                                Object(C.jsxs)(He, {
                                    children: [Object(C.jsx)(o.Q, {
                                        fontSize: "14px",
                                        children: e("Circulating Supply")
                                    }), r && Object(C.jsx)(H, {
                                        fontSize: "14px",
                                        value: r,
                                        decimals: 0
                                    })]
                                }), Object(C.jsxs)(He, {
                                    children: [Object(C.jsx)(o.Q, {
                                        fontSize: "14px",
                                        children: e("New FORGE/Second")
                                    }), Object(C.jsx)(o.Q, {
                                        bold: !0,
                                        fontSize: "14px",
                                        children: window.RH.stats?.rate||0
                                    })]
                                }), 
                                Object(C.jsxs)(He, {
                                    children: [Object(C.jsx)(o.Q, {
                                        fontSize: "14px",
                                        children: e("Max Supply")
                                    }), Object(C.jsx)(o.Q, {
                                        bold: !0,
                                        fontSize: "14px",
                                        children: (window.RH.stats?.maxSupply||0)+' '+window.ROBINHOOD_FARM.tokenSymbol
                                    })]
                                })
                            ]
                            }), Object(C.jsx)(Qe, {
                                children: Object(C.jsx)(ue, {})
                            })]
                        }), Object(C.jsx)(Ae, {}), Object(C.jsx)(De, {})]
                    })
                },
                Be = n(805),
                Le = Object(s.e)(o.k)(ze || (ze = Object(i.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n  "]))),
                _e = function(){return null;},
                We = 576,
                qe = 768;
            window.innerWidth;
            var Ue, Ax, $e, Ie, Je = function() {
                    var e = Object(r.useState)({
                            isMobile: !1,
                            isTablet: !1,
                            isDesktop: !1
                        }),
                        t = Object(d.a)(e, 2),
                        n = t[0],
                        c = t[1];
                    return Object(r.useEffect)((function() {
                        function e() {
                            var e = We >= window.innerWidth,
                                t = !e && qe >= window.innerWidth,
                                a = !e && !t;
                            (n.isMobile !== e || n.isTablet !== t || n.isDesktop !== a) && c({
                                isMobile: e,
                                isTablet: t,
                                isDesktop: a
                            })
                        }
                        return window.addEventListener("resize", e), e(),
                            function() {
                                return window.removeEventListener("resize", e)
                            }
                    }), [n]), n
                },
                Ve = Object(s.e)(o.e)(Ue || (Ue = Object(i.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 20px;\n  flex-direction: ", ";\n  display: flex;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])), (function(e) {
                    var t = e.column;
                    return "".concat(t ? "column" : "row")
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.theme.mediaQueries.lg
                })),
                Ge = Object(s.e)(o.e)($e || ($e = Object(i.a)(["\n  display: ", ";\n"])), (function(e) {
                    var t = e.isMobile;
                    return "".concat(t ? "block" : "none")
                })),
                Ke = Object(s.e)(o.e)(Ie || (Ie = Object(i.a)(["\n  display: flex;\n  display: ", ";\n"])), (function(e) {
                    var t = e.isMobile;
                    return "".concat(t ? "none !important" : "block")
                })),
                Ze = s.e.div(Ax || (Ax = Object(i.a)(["\n\n.parent {\n\n  display: flex;\n\n  flex-wrap: wrap;\n\n}\n\n@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n\n  .child {\n\n    flex: 1 0 32%; /* explanation below */\n\n    margin: 5px;\n\n    height: 100px;\n\n  }\n\n  }\n\n \n\n\n\n.childaa{\n\n  height:  88px;\n\n  margin-top:-7px;\n\n}\n\n.childabc{\n\n  height:  70px;\n\n  margin-top:-7px;\n\n}\n\n.childab{\n\n  height:  120px;\n\n  margin-top:-25px;\n\n}\n\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                Xe = function() {
                    var e = Je().isMobile;
                    return Object(C.jsx)(C.Fragment, {
                        children: Object(C.jsxs)(b.a, {
                            children: [Object(C.jsx)("img", {
                                src: "/images/WebBanner.gif",
                                alt: "titlebar",
                                className: "banner"
                            }), 
                            Object(C.jsxs)(Ke, {
                                isMobile: e,
                                children: [Object(C.jsxs)(Ve, {
                                    column: e,
                                    children: [Object(C.jsx)(Ve, {
                                        column: !0,
                                        children: Object(C.jsx)(ie, {})
                                    }), Object(C.jsx)(Ve, {
                                        column: !0,
                                        children: Object(C.jsx)(_e, {})
                                    })]
                                }), Object(C.jsx)(Ve, {
                                    column: e,
                                    children: Object(C.jsx)(Pe, {})
                                })]
                            }), Object(C.jsxs)(Ge, {
                                isMobile: e,
                                children: [Object(C.jsxs)(Ve, {
                                    column: e,
                                    children: [Object(C.jsx)(Ve, {
                                        column: !0,
                                        children: Object(C.jsx)(Pe, {})
                                    }), Object(C.jsx)(Ve, {
                                        column: !0,
                                        children: Object(C.jsx)(_e, {})
                                    })]
                                }), Object(C.jsx)(Ve, {
                                    column: e,
                                    children: Object(C.jsx)(ie, {})
                                })]
                            })]
                        })
                    })
                }
        }
    }
]);
