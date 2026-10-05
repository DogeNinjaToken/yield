(this.webpackJsonpyieldforge = this.webpackJsonpyieldforge || []).push([
    [4], {
        807: function (e, n, t) {
            "use strict";
            t.r(n), t.d(n, "default", (function () {
                return jc
            }));
            var i, c, r, a, o, s, l, d = t(16),
                j = t(25),
                b = t(26),
                u = t(0),
                x = t.n(u),
                p = t(45),
                O = t(127),
                h = t(13),
                m = t.n(h),
                f = t(35),
                g = t(6),
                v = t(96),
                y = t(8),
                k = t(372),
                w = t(153),
                S = t(44),
                T = t(191),
                C = t(39),
                Q = t(371),
                D = t(30),
                P = t(27),
                F = t(36),
                L = t(75),
                q = t(258),
                A = {
                    latin_map: {
                        "\u03c4": "t",
                        "\u03a4": "T"
                    }
                },
                I = function (e) {
                    return e.replace(/[^A-Za-z0-9[\] ]/g, (function (e) {
                        return A.latin_map[e] || e
                    }))
                },
                E = t(376),
                B = t(146),
                R = t(4),
                z = y.e.div(i || (i = Object(b.a)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 16px;\n  box-shadow: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  background: ", ";\n  transition: border-radius 0.15s;\n"])), (function (e) {
                    return e.theme.shadows.inset
                }), (function (e) {
                    return e.theme.colors.inputSecondary
                }), (function (e) {
                    return e.theme.colors.input
                })),
                M = y.e.div(c || (c = Object(b.a)(["\n  min-width: 136px;\n  height: 0;\n  position: absolute;\n  overflow: hidden;\n  background: ", ";\n  z-index: ", ";\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  opacity: 0;\n\n  ", " {\n    min-width: 168px;\n  }\n"])), (function (e) {
                    return e.theme.colors.input
                }), (function (e) {
                    return e.theme.zIndices.dropdown
                }), (function (e) {
                    return e.theme.mediaQueries.sm
                })),
                N = y.e.div(r || (r = Object(b.a)(["\n  cursor: pointer;\n  width: ", "px;\n  position: relative;\n  background: ", ";\n  border-radius: 16px;\n  height: 40px;\n  min-width: 136px;\n\n  ", " {\n    min-width: 168px;\n  }\n\n  ", "\n\n  svg {\n    position: absolute;\n    right: 16px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n"])), (function (e) {
                    return e.width
                }), (function (e) {
                    return e.theme.colors.input
                }), (function (e) {
                    return e.theme.mediaQueries.sm
                }), (function (e) {
                    return e.isOpen && Object(y.d)(a || (a = Object(b.a)(["\n      ", " {\n        border-bottom: 1px solid ", ";\n        box-shadow: ", ";\n        border-radius: 16px 16px 0 0;\n      }\n\n      ", " {\n        height: auto;\n        transform: scaleY(1);\n        opacity: 1;\n        border: 1px solid ", ";\n        border-top-width: 0;\n        border-radius: 0 0 16px 16px;\n        box-shadow: ", ";\n      }\n    "])), z, (function (e) {
                        return e.theme.colors.inputSecondary
                    }), (function (e) {
                        return e.theme.tooltip.boxShadow
                    }), M, (function (e) {
                        return e.theme.colors.inputSecondary
                    }), (function (e) {
                        return e.theme.tooltip.boxShadow
                    }))
                })),
                U = y.e.ul(o || (o = Object(b.a)(["\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  z-index: ", ";\n"])), (function (e) {
                    return e.theme.zIndices.dropdown
                })),
                H = y.e.li(s || (s = Object(b.a)(["\n  list-style: none;\n  padding: 8px 16px;\n  &:hover {\n    background: ", ";\n  }\n"])), (function (e) {
                    return e.theme.colors.inputSecondary
                })),
                G = function (e) {
                    var n = e.options,
                        t = e.onChange,
                        i = Object(u.useRef)(null),
                        c = Object(u.useRef)(null),
                        r = Object(u.useState)(!1),
                        a = Object(j.a)(r, 2),
                        o = a[0],
                        s = a[1],
                        l = Object(u.useState)(n[0]),
                        b = Object(j.a)(l, 2),
                        x = b[0],
                        p = b[1],
                        O = Object(u.useState)({
                            width: 0,
                            height: 0
                        }),
                        h = Object(j.a)(O, 2),
                        m = h[0],
                        f = h[1],
                        v = function () {
                            return s(!o)
                        },
                        y = function (e) {
                            return function () {
                                p(e), s(!1), t && t(e)
                            }
                        };
                    return Object(u.useEffect)((function () {
                        f({
                            width: c.current.offsetWidth,
                            height: c.current.offsetHeight
                        })
                    }), []), Object(R.jsxs)(N, Object(d.a)(Object(d.a)({
                        isOpen: o,
                        ref: i
                    }, m), {}, {
                        children: [0 !== m.width && Object(R.jsx)(z, {
                            onClick: v,
                            children: Object(R.jsx)(g.Q, {
                                children: x.label
                            })
                        }), Object(R.jsx)(g.b, {
                            color: "text",
                            onClick: v
                        }), Object(R.jsx)(M, {
                            children: Object(R.jsx)(U, {
                                ref: c,
                                children: n.map((function (e) {
                                    return e.label !== x.label ? Object(R.jsx)(H, {
                                        onClick: y(e),
                                        children: Object(R.jsx)(g.Q, {
                                            children: e.label
                                        })
                                    }, e.label) : null
                                }))
                            })
                        })]
                    }))
                },
                V = y.e.div(l || (l = Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ", ";\n  }\n"])), (function (e) {
                    return e.theme.colors.secondary
                })),
                K = function (e) {
                    var n = e.onClick,
                        t = e.expanded,
                        i = Object(P.b)().t;
                    return Object(R.jsxs)(V, {
                        "aria-label": "Hide or show expandable content",
                        role: "button",
                        onClick: function () {
                            return n()
                        },
                        children: [Object(R.jsx)(g.Q, {
                            color: "text",
                            bold: !0,
                            children: i(t ? "Hide" : "Details")
                        }), t ? Object(R.jsx)(g.r, {
                            color: "secondary"
                        }) : Object(R.jsx)(g.q, {
                            color: "secondary"
                        })]
                    })
                };
            K.defaultProps = {
                expanded: !1
            };
            var W, X, $, _, Y, J, Z, ee, ne, te, ie, ce, re, ae, oe, se, le, de, je, be, ue, xe, pe, Oe, he, me, fe, ge, ve, ye, ke, we, Se, Te, Ce, Qe, De, Pe, Fe, Le, qe, Ae, Ie, Ee, Be, Re, ze, Me, Ne, Ue, He, Ge, Ve, Ke, We, Xe, $e, _e, Ye, Je, Ze, en, nn, tn, cn, rn, an, on, sn, ln, dn, jn, bn, un = K,
                xn = t(22),
                pn = function (e) {
                    var n = e.quoteTokenAddress,
                        t = e.tokenAddress,
                        i = Object(xn.g)(),
                        c = n ? n[window.ROBINHOOD_FARM.chainId] : null,
                        r = t ? t[window.ROBINHOOD_FARM.chainId] : null,
                        a = r && r !== i ? r : "ADA";
                    return "".concat(c && c !== i ? c : "ADA", "/").concat(a)
                },
                On = y.e.div(W || (W = Object(b.a)(["\n  margin-top: 24px;\n"]))),
                hn = Object(y.e)(g.C)(X || (X = Object(b.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ", ";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ", ";\n  }\n"])), (function (e) {
                    return e.theme.colors.text
                }), (function (e) {
                    return e.theme.colors.secondary
                })),
                mn = function (e) {
                    var n = e.cChainExplorer,
                        t = e.removed,
                        i = e.totalValueFormatted,
                        c = e.lpLabel,
                        r = e.addLiquidityUrl,
                        a = Object(P.b)().t;
                    return Object(R.jsxs)(On, {
                        children: [Object(R.jsxs)(g.v, {
                            justifyContent: "space-between",
                            children: [Object(R.jsxs)(g.Q, {
                                children: [a("Total Liquidity"), ":"]
                            }), Object(R.jsx)(g.Q, {
                                children: i
                            })]
                        }), !t && Object(R.jsx)(hn, {
                            color: "secondary",
                            href: r,
                            children: a("Get ".concat(c), {
                                name: c
                            })
                        }), Object(R.jsx)(hn, {
                            color: "secondary",
                            href: n,
                            children: a("View Contract")
                        })]
                    })
                },
                fn = function () {
                    return Object(R.jsx)(g.P, {
                        variant: "success",
                        outline: !0,
                        startIcon: Object(R.jsx)(g.V, {}),
                        children: "No Fees"
                    })
                },
                gn = function (e) {
                    // return Object(R.jsx)(g.P, Object(d.a)(Object(d.a)({
                    //     variant: "secondary",
                    //     outline: !0,
                    //     startIcon: Object(R.jsx)(g.V, {
                    //         color: "secondary"
                    //     })
                    // }, e), {}, {
                    //     children: "Spooky"
                    // }))
                    return null
                },
                vn = function (e) {
                    return Object(R.jsx)(g.P, Object(d.a)(Object(d.a)({
                        variant: "textSubtle",
                        outline: !0,
                        startIcon: Object(R.jsx)(g.s, {
                            color: "secondary"
                        })
                    }, e), {}, {
                        children: "Partner"
                    }))
                },
                yn = function (e) {
                    // return Object(R.jsx)(g.P, Object(d.a)(Object(d.a)({
                    //     variant: "textSubtle",
                    //     outline: !0,
                    //     startIcon: Object(R.jsx)(g.V, {
                    //         color: "secondary"
                    //     })
                    // }, e), {}, {
                    //     children: "Spirit"
                    // }))
                    return null
                },
                kn = function (e) {
                    return Object(R.jsx)(g.P, Object(d.a)(Object(d.a)({
                        variant: "textSubtle",
                        outline: !0
                    }, e), {}, {
                        children: "Dual"
                    }))
                },
                wn = Object(y.e)(g.v)($ || ($ = Object(b.a)(["\n  svg {\n    margin-right: 4px;\n  }\n"]))),
                Sn = Object(y.e)(g.P)(_ || (_ = Object(b.a)(["\n  margin-left: 4px;\n"]))),
                Tn = y.e.div(Y || (Y = Object(b.a)(["\n  width: 100%;\n  * {\n    border-radius: 30px;\n  }\n  .target-token-symbol {\n    top: -12px;\n    left: 16px;\n  }\n  .token-symbol {\n  }\n"]))),
                Cn = function (e) {
                    var n, t, i, c, r = e.lpLabel,
                        a = e.multiplier,
                        o = e.isCommunityFarm,
                        s = e.isSpirit,
                        l = e.farmImage,
                        d = (e.tokenSymbol, e.targetTokenSymbol),
                        j = (e.isTokenOnly, e.depositFee),
                        b = null === l || void 0 === l ? void 0 : l.split("-");
                    return c = 1 === b.length, Object(R.jsxs)(wn, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: "12px",
                        children: [c ? Object(R.jsx)(R.Fragment, {
                            children: Object(R.jsx)(g.z, {
                                src: "/images/tokens/".concat(null === (n = b[0]) || void 0 === n ? void 0 : n.toLowerCase(), ".png"),
                                alt: l,
                                width: 58,
                                height: 58
                            })
                        }) : Object(R.jsxs)(Tn, {
                            children: [Object(R.jsx)(g.z, {
                                className: "token-symbol",
                                src: "/images/tokens/".concat(null === (t = b[0]) || void 0 === t ? void 0 : t.toLowerCase(), ".png"),
                                alt: l,
                                width: 34,
                                height: 34
                            }, b[0]), Object(R.jsx)(g.z, {
                                className: "target-token-symbol",
                                src: "/images/tokens/".concat(null === (i = b[1]) || void 0 === i ? void 0 : i.toLowerCase(), ".png"),
                                alt: d,
                                width: 42,
                                height: 42
                            }, b[1])]
                        }), Object(R.jsxs)(g.v, {
                            flexDirection: "column",
                            alignItems: "flex-end",
                            children: [Object(R.jsx)(g.w, {
                                mb: "4px",
                                children: r.split(" ")[0]
                            }), Object(R.jsxs)(g.v, {
                                justifyContent: "center",
                                children: [0 === j ? Object(R.jsx)(fn, {}) : null, s ? Object(R.jsx)(yn, {}) : Object(R.jsx)(gn, {}), o ? Object(R.jsx)(vn, {}) : null, Object(R.jsx)(Sn, {
                                    variant: "secondary",
                                    children: a
                                })]
                            })]
                        })]
                    })
                },
                Qn = t(2),
                Dn = t.n(Qn),
                Pn = t(14),
                Fn = t(61),
                Ln = t(77),
                qn = t(246),
                An = t(243),
                In = t(152),
                En = t(247),
                Bn = y.e.div(J || (J = Object(b.a)(["\n  height: ", "px;\n  width: ", "px;\n"])), (function (e) {
                    return e.size
                }), (function (e) {
                    return e.size
                })),
                Rn = function (e) {
                    var n, t = e.size,
                        i = void 0 === t ? "md" : t,
                        c = Object(u.useContext)(y.a).spacing;
                    switch (i) {
                        case "lg":
                            n = c[6];
                            break;
                        case "sm":
                            n = c[2];
                            break;
                        default:
                            n = c[4]
                    }
                    return Object(R.jsx)(Bn, {
                        size: n
                    })
                },
                zn = y.e.div(Z || (Z = Object(b.a)(["\n  align-items: center;\n  background-color: ", "00;\n  display: flex;\n  margin: 0;\n  padding: ", "px 0;\n"])), (function (e) {
                    return e.theme.colors.primaryDark
                }), (function (e) {
                    return e.theme.spacing[4]
                })),
                Mn = y.e.div(ee || (ee = Object(b.a)(["\n  flex: 1;\n"]))),
                Nn = function (e) {
                    var n = e.children,
                        t = x.a.Children.toArray(n).length;
                    return Object(R.jsx)(zn, {
                        children: x.a.Children.map(n, (function (e, n) {
                            return Object(R.jsxs)(R.Fragment, {
                                children: [Object(R.jsx)(Mn, {
                                    children: e
                                }), n < t - 1 && Object(R.jsx)(Rn, {})]
                            })
                        }))
                    })
                },
                Un = t(175),
                Hn = y.e.div(ne || (ne = Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  padding: 8px 16px 8px 0;\n  width: 100%;\n"])), (function (e) {
                    return e.theme.colors.input
                }), (function (e) {
                    var n = e.isWarning,
                        t = void 0 !== n && n,
                        i = e.theme;
                    return t ? i.shadows.warning : i.shadows.inset
                }), (function (e) {
                    return e.theme.colors.text
                })),
                Gn = Object(y.e)(g.A)(te || (te = Object(b.a)(["\n  box-shadow: none;\n  width: 60px;\n  margin: 0 8px;\n  padding: 0 8px;\n\n  ", " {\n    width: 80px;\n  }\n\n  ", " {\n    width: auto;\n  }\n"])), (function (e) {
                    return e.theme.mediaQueries.xs
                }), (function (e) {
                    return e.theme.mediaQueries.sm
                })),
                Vn = Object(y.e)(g.Q)(ie || (ie = Object(b.a)(["\n  position: absolute;\n  bottom: -22px;\n  a {\n    display: inline;\n  }\n"]))),
                Kn = y.e.div(ce || (ce = Object(b.a)(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])), (function (e) {
                    return e.theme.colors.secondary
                })),
                Wn = function (e) {
                    var n = e.max,
                        t = e.symbol,
                        i = e.onChange,
                        c = e.onSelectMax,
                        r = e.value,
                        a = e.inputTitle,
                        o = e.depositFeeBP,
                        s = void 0 === o ? 0 : o,
                        l = Object(P.b)().t,
                        d = "0" === n || !n,
                        j = d ? "0" : n;
                    return Object(R.jsxs)("div", {
                        style: {
                            position: "relative"
                        },
                        children: [Object(R.jsxs)(Hn, {
                            isWarning: d,
                            children: [Object(R.jsxs)(g.v, {
                                justifyContent: "space-between",
                                pl: "16px",
                                children: [Object(R.jsx)(g.Q, {
                                    fontSize: "14px",
                                    children: a
                                }), Object(R.jsxs)(g.Q, {
                                    fontSize: "14px",
                                    children: [l("Balance"), ": ", j.toLocaleString()]
                                })]
                            }), Object(R.jsxs)(g.v, {
                                alignItems: "flex-end",
                                justifyContent: "space-around",
                                children: [Object(R.jsx)(Gn, {
                                    onChange: i,
                                    placeholder: "0",
                                    value: r
                                }), Object(R.jsx)(g.g, {
                                    scale: "sm",
                                    onClick: c,
                                    mr: "8px",
                                    children: l("Max")
                                }), Object(R.jsx)(g.Q, {
                                    fontSize: "16px",
                                    children: t
                                })]
                            })]
                        }), s > 0 ? Object(R.jsxs)(Kn, {
                            children: [l("Deposit Fee"), ": ", new Un.a(r || 0).times(s / 1e4).toString(), " ", t]
                        }) : null, d && Object(R.jsx)(Vn, {
                            fontSize: "14px",
                            color: "failure",
                            children: "No tokens to stake!"
                        })]
                    })
                },
                Xn = function (e) {
                    var n = e.isTokenOnly,
                        t = e.max,
                        i = e.onConfirm,
                        c = e.onDismiss,
                        r = e.tokenName,
                        a = void 0 === r ? "" : r,
                        o = e.addLiquidityUrl,
                        s = e.tokenDecimals,
                        l = void 0 === s ? 18 : s,
                        d = e.depositFeeBP,
                        b = void 0 === d ? 0 : d,
                        x = Object(u.useState)(""),
                        p = Object(j.a)(x, 2),
                        O = p[0],
                        h = p[1],
                        f = Object(u.useState)(!1),
                        v = Object(j.a)(f, 2),
                        y = v[0],
                        k = v[1],
                        w = Object(P.b)().t,
                        S = Object(u.useMemo)((function () {
                            return Object(F.f)(t, n ? l : void 0)
                        }), [t, n, l]),
                        T = Object(u.useCallback)((function (e) {
                            h(e.currentTarget.value)
                        }), [h]),
                        C = Object(u.useCallback)((function () {
                            h(S)
                        }), [S, h]);
                    return Object(R.jsxs)(g.H, {
                        title: w("Stake tokens"),
                        onDismiss: c,
                        children: [Object(R.jsx)(Wn, {
                            value: O,
                            onSelectMax: C,
                            onChange: T,
                            max: S,
                            symbol: a,
                            addLiquidityUrl: o,
                            inputTitle: w("Stake"),
                            depositFeeBP: b
                        }), Object(R.jsxs)(Nn, {
                            children: [Object(R.jsx)(g.g, {
                                variant: "primary",
                                onClick: c,
                                width: "100%",
                                children: w("Cancel")
                            }), Object(R.jsx)(g.g, {
                                width: "100%",
                                disabled: y || new m.a(O).isNaN() || new m.a(O).isLessThanOrEqualTo(0),
                                onClick: Object(Pn.a)(Dn.a.mark((function e() {
                                    return Dn.a.wrap((function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return k(!0), e.next = 3, i(O, n ? l : void 0);
                                            case 3:
                                                k(!1), c();
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                children: w(y ? "Pending Confirmation" : "Confirm")
                            })]
                        }), Object(R.jsxs)(g.C, {
                            color: "secondary",
                            href: o,
                            style: {
                                alignSelf: "center"
                            },
                            children: [w("Get"), " ", a]
                        })]
                    })
                },
                $n = function (e) {
                    var n = e.isTokenOnly,
                        t = e.onConfirm,
                        i = e.onDismiss,
                        c = e.max,
                        r = e.tokenName,
                        a = void 0 === r ? "" : r,
                        o = e.tokenDecimals,
                        s = void 0 === o ? 18 : o,
                        l = Object(u.useState)(""),
                        d = Object(j.a)(l, 2),
                        b = d[0],
                        x = d[1],
                        p = Object(u.useState)(!1),
                        O = Object(j.a)(p, 2),
                        h = O[0],
                        f = O[1],
                        v = Object(P.b)().t,
                        y = Object(u.useMemo)((function () {
                            return Object(F.f)(c, n ? s : void 0)
                        }), [c, n, s]),
                        k = Object(u.useCallback)((function (e) {
                            x(e.currentTarget.value)
                        }), [x]),
                        w = Object(u.useCallback)((function () {
                            x(y)
                        }), [y, x]);
                    return Object(R.jsxs)(g.H, {
                        title: v("Unstake tokens"),
                        onDismiss: i,
                        children: [Object(R.jsx)(Wn, {
                            onSelectMax: w,
                            onChange: k,
                            value: b,
                            max: y,
                            symbol: a,
                            inputTitle: v("Unstake")
                        }), Object(R.jsxs)(Nn, {
                            children: [Object(R.jsx)(g.g, {
                                variant: "primary",
                                onClick: i,
                                width: "100%",
                                children: v("Cancel")
                            }), Object(R.jsx)(g.g, {
                                disabled: h || new m.a(b).isNaN() || new m.a(b).isLessThanOrEqualTo(0),
                                onClick: Object(Pn.a)(Dn.a.mark((function e() {
                                    return Dn.a.wrap((function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return f(!0), e.next = 3, t(b, n ? s : void 0);
                                            case 3:
                                                f(!1), i();
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                width: "100%",
                                children: v(h ? "Pending Confirmation" : "Confirm")
                            })]
                        })]
                    })
                },
                _n = y.e.div(re || (re = Object(b.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),
                Yn = y.e.div(ae || (ae = Object(b.a)(["\n  color: ", ";\n  font-size: 12px;\n  align: left;\n  display: inline;\n"])), (function (e) {
                    return e.theme.colors.textSubtle
                })),
                Jn = y.e.div(oe || (oe = Object(b.a)(["\n  display: flex;\n  white-space: nowrap;\n  overflow: hidden;\n  justify-content:center;\n  align-items:baseline;\n  white-space: pre;\n"]))),
                Zn = y.e.div(se || (se = Object(b.a)(["\n  text-align: left;\n"]))),
                et = function (e) {
                    var n = e.isTokenOnly,
                        t = e.tokenDecimals,
                        i = e.stakedBalance,
                        c = e.tokenBalance,
                        r = e.tokenName,
                        a = e.pid,
                        o = e.depositFeeBP,
                        s = e.addLiquidityUrl,
                        l = e.stakedUsd,
                        d = e.quoteTokenDecimals,
                        b = Object(P.b)().t,
                        u = Object(In.a)(a).onStake,
                        x = Object(En.a)(a).onUnstake,
                        p = Object(F.c)(i, t),
                        O = p.toLocaleString(void 0, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 8
                        }),
                        h = Object(F.c)(l, t),
                        m = Object(F.d)(h),
                        f = Object(g.bb)(Object(R.jsx)(Xn, {
                            isTokenOnly: n,
                            max: c,
                            onConfirm: u,
                            tokenName: r,
                            addLiquidityUrl: s,
                            depositFeeBP: o,
                            tokenDecimals: t
                        })),
                        v = Object(j.a)(f, 1)[0],
                        y = Object(g.bb)(Object(R.jsx)($n, {
                            isTokenOnly: n,
                            max: i,
                            onConfirm: x,
                            tokenName: r,
                            tokenDecimals: t
                        })),
                        k = Object(j.a)(y, 1)[0];
                    return Object(R.jsxs)(g.v, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        children: [Object(R.jsxs)(Zn, {
                            children: [Object(R.jsx)(g.w, {
                                color: 0 === p ? "textDisabled" : "text",
                                children: O
                            }), Object(R.jsx)(Jn, {
                                children: l.gt(0) ? Object(R.jsxs)(Yn, {
                                    children: ["~$", m, h < 1e-5 && h > 0 ? Object(R.jsxs)(Yn, {
                                        children: ["  ", "e", h.toExponential(2).split("e")[1].toLocaleString()]
                                    }) : null, " ", " USD"]
                                }) : null
                            })]
                        }), 0 === p ? Object(R.jsx)(g.g, {
                            onClick: v,
                            children: b("Stake")
                        }) : Object(R.jsxs)(_n, {
                            children: [Object(R.jsx)(g.y, {
                                variant: "tertiary",
                                onClick: k,
                                "aria-label": "Withdraw stake",
                                mr: "6px",
                                children: Object(R.jsx)(g.G, {
                                    color: "secondary",
                                    width: "14px"
                                })
                            }), Object(R.jsx)(g.y, {
                                variant: "tertiary",
                                onClick: v,
                                children: Object(R.jsx)(g.a, {
                                    color: "secondary",
                                    width: "14px"
                                })
                            })]
                        })]
                    })
                },
                nt = t(244),
                tt = y.e.div(le || (le = Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),
                it = y.e.div(de || (de = Object(b.a)(["\n  color: ", ";\n  font-size: 12px;\n"])), (function (e) {
                    return e.theme.colors.textSubtle
                })),
                ct = function (e) {
                    var n = e.earnings,
                        t = e.pid,
                        i = e.usdEarnings,
                        c = Object(f.c)().account,
                        r = Object(P.b)().t,
                        a = Object(u.useState)(!1),
                        o = Object(j.a)(a, 2),
                        s = o[0],
                        l = o[1],
                        d = Object(nt.b)(t).onReward,
                        b = Object(In.a)(t).onStake,
                        x = c ? Object(F.c)(n) : 0,
                        p = x.toLocaleString();
                    return Object(R.jsxs)(g.v, {
                        mb: "8px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        children: [Object(R.jsxs)(g.w, {
                            color: 0 === x ? "textDisabled" : "text",
                            children: [p, Object(R.jsxs)(it, {
                                children: ["~$", i.toFixed(2), " USD"]
                            })]
                        }), Object(R.jsxs)(tt, {
                            children: [5 === t ? Object(R.jsx)(g.g, {
                                disabled: 0 === x || s,
                                scale: "sm",
                                variant: "tertiary",
                                marginBottom: "15px",
                                onClick: Object(Pn.a)(Dn.a.mark((function e() {
                                    return Dn.a.wrap((function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return l(!0), e.next = 3, b(x.toString(), 18);
                                            case 3:
                                                l(!1);
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                children: r("Compound")
                            }) : null, Object(R.jsx)(g.g, {
                                disabled: 0 === x || s,
                                onClick: Object(Pn.a)(Dn.a.mark((function e() {
                                    return Dn.a.wrap((function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return l(!0), e.next = 3, d();
                                            case 3:
                                                l(!1);
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                children: r("Harvest")
                            })]
                        })]
                    })
                },
                rt = y.e.div(je || (je = Object(b.a)(["\n  padding-top: 16px;\n"]))),
                at = function (e) {
                    var n = e.farm,
                        t = e.account,
                        i = e.addLiquidityUrl,
                        c = e.totalValue,
                        r = Object(P.b)().t,
                        a = Object(u.useState)(!1),
                        o = Object(j.a)(a, 2),
                        s = o[0],
                        l = o[1],
                        d = Object(S.b)(n.pid),
                        b = d.pid,
                        x = d.lpAddresses,
                        p = d.token,
                        O = d.depositFeeBP,
                        h = d.isTokenOnly,
                        f = Object(S.c)(b),
                        v = f.allowance,
                        y = f.tokenBalance,
                        k = f.stakedBalance,
                        w = f.earnings,
                        T = Object(xn.a)(x),
                        C = Object(xn.a)(p.address),
                        Q = n.lpSymbol.toUpperCase(),
                        D = t && v && v.isGreaterThan(0),
                        F = Object(Ln.a)(),
                        L = Object(S.h)(),
                        q = Object(u.useMemo)((function () {
                            return h ? Object(Fn.a)(C, F) : Object(Fn.a)(T, F)
                        }), [F, T, C, h]),
                        A = Object(qn.a)(q).onApprove,
                        I = Object(u.useCallback)(Object(Pn.a)(Dn.a.mark((function e() {
                            return Dn.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, l(!0), e.next = 4, A();
                                    case 4:
                                        l(!1), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error(e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        }))), [A]),
                        E = k;
                    c && (E = E.times(new m.a(c).div(n.lpStakedTotal)));
                    return Object(R.jsxs)(rt, {
                        children: [Object(R.jsxs)(g.v, {
                            children: [Object(R.jsx)(g.Q, {
                                bold: !0,
                                textTransform: "uppercase",
                                color: "secondary",
                                fontSize: "12px",
                                pr: "3px",
                                children: "FORGE"
                            }), Object(R.jsx)(g.Q, {
                                bold: !0,
                                textTransform: "uppercase",
                                color: "textSubtle",
                                fontSize: "12px",
                                children: r("Earned")
                            })]
                        }), Object(R.jsx)(ct, {
                            earnings: w,
                            pid: b,
                            usdEarnings: L.multipliedBy(w.dividedBy(Math.pow(10, 18)))
                        }), Object(R.jsxs)(g.v, {
                            children: [Object(R.jsx)(g.Q, {
                                bold: !0,
                                textTransform: "uppercase",
                                color: "secondary",
                                fontSize: "12px",
                                pr: "3px",
                                children: Q
                            }), Object(R.jsx)(g.Q, {
                                bold: !0,
                                textTransform: "uppercase",
                                color: "textSubtle",
                                fontSize: "12px",
                                children: r("Staked")
                            })]
                        }), t ? D ? Object(R.jsx)(et, {
                            isTokenOnly: h,
                            stakedBalance: k,
                            tokenBalance: y,
                            tokenDecimals: h ? p.decimals : 18,
                            tokenName: Q,
                            pid: b,
                            addLiquidityUrl: i,
                            depositFeeBP: O,
                            stakedUsd: E,
                            quoteTokenDecimals: n.quoteToken.decimals,
                            isSpirit: n.isSpirit
                        }) : Object(R.jsx)(g.g, {
                            mt: "8px",
                            width: "100%",
                            disabled: s,
                            onClick: I,
                            children: r("Approve Contract")
                        }) : Object(R.jsx)(An.a, {
                            mt: "8px",
                            width: "100%"
                        })]
                    })
                },
                ot = t(237),
                st = y.e.div(be || (be = Object(b.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),
                lt = y.e.div(ue || (ue = Object(b.a)(["\n  margin-bottom: '10px';\n"]))),
                dt = Object(y.e)(g.C)(xe || (xe = Object(b.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ", ";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ", ";\n  }\n"])), (function (e) {
                    return e.theme.colors.text
                }), (function (e) {
                    return e.theme.colors.secondary
                })),
                jt = function (e) {
                    var n = e.onDismiss,
                        t = e.tokenPrice,
                        i = e.apr,
                        c = e.linkLabel,
                        r = e.linkHref,
                        a = e.earningTokenSymbol,
                        o = void 0 === a ? "FORGE" : a,
                        s = e.compoundFrequency,
                        l = void 0 === s ? 1 : s,
                        d = e.performanceFee,
                        j = void 0 === d ? 0 : d,
                        b = Object(P.b)().t,
                        u = 1e3 / t,
                        x = new m.a(i).times(new m.a(100)).toNumber(),
                        p = Object(ot.b)({
                            numberOfDays: 1,
                            farmApy: x,
                            tokenPrice: t
                        }),
                        O = Object(ot.b)({
                            numberOfDays: 7,
                            farmApy: x,
                            tokenPrice: t
                        }),
                        h = Object(ot.b)({
                            numberOfDays: 30,
                            farmApy: x,
                            tokenPrice: t
                        }),
                        f = Object(ot.b)({
                            numberOfDays: 365,
                            farmApy: x,
                            tokenPrice: t
                        });
                    return Object(R.jsxs)(g.H, {
                        title: "ROI",
                        onDismiss: n,
                        children: [Object(R.jsxs)(st, {
                            children: [Object(R.jsx)(lt, {
                                children: Object(R.jsx)(g.Q, {
                                    fontSize: "12px",
                                    bold: !0,
                                    color: "textSubtle",
                                    textTransform: "uppercase",
                                    mb: "20px",
                                    children: b("Timeframe")
                                })
                            }), Object(R.jsx)(lt, {
                                children: Object(R.jsx)(g.Q, {
                                    fontSize: "12px",
                                    bold: !0,
                                    color: "textSubtle",
                                    textTransform: "uppercase",
                                    mb: "20px",
                                    children: b("ROI")
                                })
                            }), Object(R.jsx)(lt, {
                                children: Object(R.jsxs)(g.Q, {
                                    fontSize: "12px",
                                    bold: !0,
                                    color: "textSubtle",
                                    textTransform: "uppercase",
                                    mb: "20px",
                                    children: [o, " ", b("per"), " $1000"]
                                })
                            }), Object(R.jsx)(lt, {
                                children: Object(R.jsx)(g.Q, {
                                    children: "1d"
                                })
                            }), Object(R.jsx)(lt, {
                                children: Object(R.jsxs)(g.Q, {
                                    children: [Object(ot.a)({
                                        amountEarned: p,
                                        amountInvested: u
                                    }), "%"]
                                })
                            }), Object(R.jsx)(lt, {
                                children: Object(R.jsx)(g.Q, {
                                    children: p
                                })
                            }), Object(R.jsx)(lt, {
                                children: Object(R.jsx)(g.Q, {
                                    children: "7d"
                                })
                            }), Object(R.jsx)(lt, {
                                children: Object(R.jsxs)(g.Q, {
                                    children: [Object(ot.a)({
                                        amountEarned: O,
                                        amountInvested: u
                                    }), "%"]
                                })
                            }), Object(R.jsx)(lt, {
                                children: Object(R.jsx)(g.Q, {
                                    children: O
                                })
                            }), Object(R.jsx)(lt, {
                                children: Object(R.jsx)(g.Q, {
                                    children: "30d"
                                })
                            }), Object(R.jsx)(lt, {
                                children: Object(R.jsxs)(g.Q, {
                                    children: [Object(ot.a)({
                                        amountEarned: h,
                                        amountInvested: u
                                    }), "%"]
                                })
                            }), Object(R.jsx)(lt, {
                                children: Object(R.jsx)(g.Q, {
                                    children: h
                                })
                            }), Object(R.jsx)(lt, {
                                children: Object(R.jsx)(g.Q, {
                                    children: "365d(APY)"
                                })
                            }), Object(R.jsx)(lt, {
                                children: Object(R.jsxs)(g.Q, {
                                    children: [Object(ot.a)({
                                        amountEarned: f,
                                        amountInvested: u
                                    }), "%"]
                                })
                            }), Object(R.jsx)(lt, {
                                children: Object(R.jsx)(g.Q, {
                                    children: f
                                })
                            })]
                        }), Object(R.jsxs)(g.f, {
                            mb: "28px",
                            maxWidth: "280px",
                            children: [Object(R.jsx)(g.Q, {
                                fontSize: "12px",
                                color: "textSubtle",
                                children: b("Calculated based on current rates. Compounding %freq%x daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.", {
                                    freq: l.toLocaleString()
                                })
                            }), j > 0 && Object(R.jsx)(g.Q, {
                                mt: "14px",
                                fontSize: "12px",
                                color: "textSubtle",
                                children: b("All estimated rates take into account this pool's %fee%% performance fee", {
                                    fee: j
                                })
                            })]
                        }), Object(R.jsx)(g.v, {
                            justifyContent: "center",
                            children: Object(R.jsx)(dt, {
                                href: r,
                                children: c
                            })
                        })]
                    })
                },
                bt = function (e) {
                    var n = e.lpLabel,
                        t = e.lydPrice,
                        i = e.apr,
                        c = e.addLiquidityUrl,
                        r = Object(P.b)().t,
                        a = Object(g.bb)(Object(R.jsx)(jt, {
                            linkLabel: "".concat(r("Get"), " ").concat(n),
                            tokenPrice: t.toNumber(),
                            apr: i.toNumber(),
                            linkHref: c
                        })),
                        o = Object(j.a)(a, 1)[0];
                    return Object(R.jsx)(g.y, {
                        onClick: function (e) {
                            e.stopPropagation(), o()
                        },
                        variant: "text",
                        scale: "sm",
                        ml: "4px",
                        children: Object(R.jsx)(g.j, {
                            width: "18px"
                        })
                    })
                },
                ut = Object(y.f)(pe || (pe = Object(b.a)(["\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]))),
                xt = y.e.div(Oe || (Oe = Object(b.a)(["\nbackground: linear-gradient(45deg,\n  rgba(94,218,106, 1) 0%,\n  rgba(38, 98, 71, 1) 10%,\n  rgba(47, 255, 54, 1) 20%,\n  rgba(98, 181, 35, 1) 30%,\n  rgba(166, 204, 27, 1) 40%,\n  rgba(233, 245, 0, 1) 50%,\n  rgba(242, 227, 10, 1) 60%,\n  rgba(227, 242, 10, 1) 70%,\n  rgba(176, 243, 7, 1) 80%,\n  rgba(118, 248, 4, 1) 90%,\n  rgba(61, 248, 4, 1) 100%);\n  background-size: 300% 300%;\n  animation: ", " 2s linear infinite;\n  border-radius: 4px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])), ut),
                pt = y.e.div(he || (he = Object(b.a)(["\n  align-self: baseline;\n  background: linear-gradient(to top, ", ", ", ");\n  border-radius: ", ";\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])), (function (e) {
                    return e.theme.card.background.concat("C8")
                }), (function (e) {
                    return e.theme.card.background.concat("FF")
                }), (function (e) {
                    return e.theme.radii.card
                })),
                Ot = y.e.div(me || (me = Object(b.a)(["\n  background-color: ", ";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])), (function (e) {
                    return e.theme.colors.cardBorder
                })),
                ht = y.e.div(fe || (fe = Object(b.a)(["\n  height: ", ";\n  overflow: hidden;\n"])), (function (e) {
                    return e.expanded ? "100%" : "0px"
                })),
                mt = function (e) {
                    var n, t = e.farm,
                        i = e.removed,
                        c = e.lydPrice,
                        r = e.account,
                        a = e.wavaxPrice,
                        o = e.wethPrice,
                        s = Object(P.b)().t,
                        l = Object(u.useState)(!1),
                        d = Object(j.a)(l, 2),
                        b = d[0],
                        x = d[1];
                    n = t.isTokenOnly ? t.token.symbol.toLowerCase() : false ? "".concat(t.quoteToken.symbol.toLowerCase(), "-").concat(t.token.symbol.toLowerCase()) : "".concat(t.token.symbol.toLowerCase(), "-").concat(t.quoteToken.symbol.toLowerCase());
                    var p, O, h = Object(u.useMemo)((function () {
                            return t.totalValueUsd || '0'
                        }), [t.totalValueUsd]),
                        f = h ? false ? "$".concat(Number(h/2.25).toLocaleString(void 0, {
                            maximumFractionDigits: 0
                        }))
                        :
                        "$".concat(Number(h).toLocaleString(void 0, {
                            maximumFractionDigits: 0
                        })) : "-",
                        y = t.lpSymbol && t.lpSymbol.toUpperCase().replace("YIELDFORGE", ""),
                        k = t.dual ? t.dual.earnLabel : "FORGE",
                        w = t.apr && false ? t.apr.times(new m.a(225)).toNumber().toLocaleString(void 0, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })
                        :
                        t.apr.times(new m.a(100)).toNumber().toLocaleString(void 0, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        });
                    t.isTokenOnly ? (p = t.token.address[window.ROBINHOOD_FARM.chainId], O = (window.ROBINHOOD_FARM.links.swap || '#')) : (p = pn({
                        quoteTokenAddress: t.quoteToken.address,
                        tokenAddress: t.token.address
                    }), O = (window.ROBINHOOD_FARM.links.liquidity || '#')), t.isSpirit && (O = window.ROBINHOOD_FARM.explorerUrl+'/address/'.concat(p));
                    var S = t.lpAddresses[window.ROBINHOOD_FARM.chainId];
                    return Object(R.jsxs)(pt, {
                        children: [("FORGE" === t.token.symbol || "FORGE" === t.quoteToken.symbol ) && Object(R.jsx)(xt, {}), Object(R.jsx)(Cn, {
                            lpLabel: y,
                            multiplier: t.multiplier,
                            isSpirit: t.isSpirit,
                            isCommunityFarm: t.isCommunity,
                            depositFee: t.depositFeeBP,
                            farmImage: n,
                            tokenSymbol: t.token.symbol,
                            isTokenOnly: t.isTokenOnly
                        }), !i && Object(R.jsxs)(g.v, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [Object(R.jsxs)(g.Q, {
                                children: [s("APR"), ":"]
                            }), Object(R.jsx)(g.Q, {
                                bold: !0,
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: t.apr ? Object(R.jsxs)(R.Fragment, {
                                    children: [Object(R.jsx)(bt, {
                                        lpLabel: y,
                                        addLiquidityUrl: O,
                                        lydPrice: c,
                                        apr: t.apr
                                    }), w, "%"]
                                }) : Object(R.jsx)(g.N, {
                                    height: 24,
                                    width: 80
                                })
                            })]
                        }), Object(R.jsxs)(g.v, {
                            justifyContent: "space-between",
                            children: [Object(R.jsxs)(g.Q, {
                                children: [s("Earn"), ":"]
                            }), Object(R.jsx)(g.Q, {
                                bold: !0,
                                children: k
                            })]
                        }), Object(R.jsxs)(g.v, {
                            justifyContent: "space-between",
                            children: [Object(R.jsxs)(g.Q, {
                                style: {
                                    fontSize: "24px"
                                },
                                children: [s("Deposit Fee"), ":"]
                            }), Object(R.jsxs)(g.Q, {
                                bold: !0,
                                style: {
                                    fontSize: "24px"
                                },
                                children: [t.depositFeeBP / 100, "%"]
                            })]
                        }), Object(R.jsx)(at, {
                            farm: t,
                            account: r,
                            addLiquidityUrl: O,
                            totalValue: h
                        }), Object(R.jsx)(Ot, {}), Object(R.jsx)(un, {
                            onClick: function () {
                                return x(!b)
                            },
                            expanded: b
                        }), Object(R.jsx)(ht, {
                            expanded: b,
                            children: Object(R.jsx)(mn, {
                                removed: i,
                                cChainExplorer: t.isTokenOnly ? window.ROBINHOOD_FARM.explorerUrl+'/address/'.concat(t.token.address[window.ROBINHOOD_FARM.chainId]) : window.ROBINHOOD_FARM.explorerUrl+'/address/'.concat(t.lpAddresses[window.ROBINHOOD_FARM.chainId]),
                                infoAddress: window.ROBINHOOD_FARM.explorerUrl+'/address/'.concat(S),
                                totalValueFormatted: f,
                                lpLabel: y,
                                addLiquidityUrl: O
                            })
                        })]
                    })
                },
                ft = function (e, n) {
                    var t = Object(u.useState)(!1),
                        i = Object(j.a)(t, 2),
                        c = i[0],
                        r = i[1];
                    return Object(u.useEffect)((function () {
                        var t;
                        return e && !c ? r(!0) : !e && c && (t = setTimeout((function () {
                                return r(!1)
                            }), n)),
                            function () {
                                return clearTimeout(t)
                            }
                    }), [e, n, c]), c
                },
                gt = y.e.div(ge || (ge = Object(b.a)(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n\n  button {\n    width: 20px;\n    height: 20px;\n\n    svg {\n      path {\n        fill: ", ";\n      }\n    }\n  }\n"])), (function (e) {
                    return e.theme.colors.text
                }), (function (e) {
                    return e.theme.colors.textSubtle
                })),
                vt = y.e.div(ve || (ve = Object(b.a)(["\n  min-width: 60px;\n  text-align: left;\n"]))),
                yt = function (e) {
                    var n = e.value,
                        t = e.lpLabel,
                        i = e.tokenAddress,
                        c = e.quoteTokenAddress,
                        r = e.lydPrice,
                        a = e.originalValue,
                        o = e.hideButton,
                        s = void 0 !== o && o,
                        l = Object(P.b)().t,
                        d = pn({
                            quoteTokenAddress: c,
                            tokenAddress: i
                        }),
                        j = (window.ROBINHOOD_FARM.links.liquidity || '#');
                    return 0 !== a ? Object(R.jsx)(gt, {
                        children: a ? Object(R.jsxs)(R.Fragment, {
                            children: [Object(R.jsxs)(vt, {
                                children: [n, "%"]
                            }), !s && Object(R.jsx)(bt, {
                                lpLabel: t,
                                lydPrice: r,
                                apr: new m.a(a),
                                addLiquidityUrl: j
                            })]
                        }) : Object(R.jsx)(vt, {
                            children: l("Loading...")
                        })
                    }) : Object(R.jsx)(gt, {
                        children: Object(R.jsxs)(vt, {
                            children: [a, "%"]
                        })
                    })
                },
                kt = Object(y.e)(g.z)(ye || (ye = Object(b.a)(["\n  width: 18px;\n  height: 18px;\n  position: absolute;\n  left: 15px;\n  top: -5px;\n\n  * {\n    border-radius: 20px;\n  }\n\n  ", " {\n    width: 24px;\n    height: 24px;\n  }\n"])), (function (e) {
                    return e.theme.mediaQueries.sm
                })),
                wt = Object(y.e)(g.z)(ke || (ke = Object(b.a)(["\n  width: 20px;\n  height: 20px;\n\n  * {\n    border-radius: 20px;\n  }\n\n  ", " {\n    width: 35px;\n    height: 35px;\n  }\n"])), (function (e) {
                    return e.theme.mediaQueries.sm
                })),
                St = y.e.div(we || (we = Object(b.a)(["\n  padding-left: 16px;\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  ", " {\n    padding-left: 32px;\n  }\n"])), (function (e) {
                    return e.theme.mediaQueries.sm
                })),
                Tt = function (e) {
                    var n, t = e.image,
                        i = e.label,
                        c = e.pid,
                        r = Object(S.c)(c).stakedBalance,
                        a = Object(P.b)().t,
                        o = Object(F.c)(r),
                        s = null === t || void 0 === t ? void 0 : t.split("-");
                    return n = 1 === s.length, Object(R.jsxs)(St, {
                        children: [n ? Object(R.jsx)(wt, {
                            src: "/images/tokens/".concat(s[0], ".png"),
                            alt: "icon",
                            width: 40,
                            height: 40,
                            mr: "8px"
                        }, s[0]) : Object(R.jsxs)(R.Fragment, {
                            children: [Object(R.jsx)(kt, {
                                src: "/images/tokens/".concat(s[0], ".png"),
                                alt: "icon",
                                width: 40,
                                height: 40,
                                mr: "8px"
                            }, s[0]), Object(R.jsx)(wt, {
                                src: "/images/tokens/".concat(s[1], ".png"),
                                alt: "icon",
                                width: 40,
                                height: 40,
                                mr: "8px"
                            }, s[1])]
                        }), Object(R.jsxs)("div", {
                            children: [o ? Object(R.jsx)(g.Q, {
                                color: "secondary",
                                fontSize: "12px",
                                bold: !0,
                                children: a("FARMING")
                            }) : null, Object(R.jsx)(g.Q, {
                                bold: !0,
                                children: i
                            })]
                        })]
                    })
                },
                Ct = y.e.span(Se || (Se = Object(b.a)(["\n  color: ", ";\n  display: flex;\n  align-items: center;\n"])), (function (e) {
                    var n = e.earned,
                        t = e.theme;
                    return n ? t.colors.text : t.colors.textDisabled
                })),
                Qt = function (e) {
                    var n = e.earnings;
                    return e.userDataReady ? Object(R.jsx)(Ct, {
                        earned: n,
                        children: n.toLocaleString()
                    }) : Object(R.jsx)(Ct, {
                        earned: 0,
                        children: Object(R.jsx)(g.N, {
                            width: 60
                        })
                    })
                },
                Dt = y.e.div(Te || (Te = Object(b.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n  padding-right: 8px;\n  color: ", ";\n\n  ", " {\n    padding-right: 0px;\n  }\n"])), (function (e) {
                    return e.theme.colors.text
                }), (function (e) {
                    return e.theme.mediaQueries.sm
                })),
                Pt = Object(y.e)(g.q)(Ce || (Ce = Object(b.a)(["\n  transform: ", ";\n  height: 20px;\n"])), (function (e) {
                    return e.toggled ? "rotate(180deg)" : "rotate(0)"
                })),
                Ft = function (e) {
                    var n = e.actionPanelToggled,
                        t = Object(P.b)().t,
                        i = !Object(g.ab)().isXl;
                    return Object(R.jsxs)(Dt, {
                        children: [!i && t("Details"), Object(R.jsx)(Pt, {
                            color: "secondary",
                            toggled: n
                        })]
                    })
                },
                Lt = y.e.div(Qe || (Qe = Object(b.a)(["\n  background: ", ";\n  padding: 16px;\n  border-radius: 16px;\n  color: ", ";\n  width: max-content;\n  display: none;\n  padding: 16px;\n  max-height: 500px;\n  z-index: ", ";\n  position: absolute;\n  bottom: calc(100% + 16px);\n  transform: translate(34px, 0);\n  right: 0;\n  max-width: 246px;\n\n  &:after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-top: 10px solid ", ";\n    bottom: 0;\n    position: absolute;\n    transform: translate(-34px, 9px);\n    right: 0;\n  }\n"])), (function (e) {
                    return e.theme.tooltip.background
                }), (function (e) {
                    return e.theme.tooltip.text
                }), (function (e) {
                    return e.theme.zIndices.modal
                }), (function (e) {
                    return e.theme.tooltip.background
                })),
                qt = y.e.div(De || (De = Object(b.a)(["\n  position: relative;\n\n  &:hover ", ", &:focus-within ", " {\n    display: block;\n  }\n"])), Lt, Lt),
                At = function (e) {
                    var n = e.content,
                        t = e.children;
                    return Object(R.jsxs)(qt, {
                        children: [t, Object(R.jsx)(Lt, {
                            children: n
                        })]
                    })
                },
                It = y.e.div(Pe || (Pe = Object(b.a)(["\n  color: ", ";\n  width: 36px;\n  text-align: right;\n\n  ", " {\n    text-align: left;\n  }\n"])), (function (e) {
                    return e.theme.colors.text
                }), (function (e) {
                    return e.theme.mediaQueries.sm
                })),
                Et = y.e.div(Fe || (Fe = Object(b.a)(["\n  display: flex;\n  align-items: center;\n\n  svg {\n    margin-left: 14px;\n  }\n\n  ", " {\n    svg {\n      margin-left: 0;\n    }\n  }\n"])), (function (e) {
                    return e.theme.mediaQueries.sm
                })),
                Bt = function (e) {
                    var n = e.multiplier,
                        t = n ? n.toLowerCase() : "-",
                        i = Object(P.b)().t;
                    return Object(R.jsxs)(Et, {
                        children: [Object(R.jsx)(It, {
                            children: t
                        }), Object(R.jsx)(At, {
                            content: Object(R.jsxs)("div", {
                                children: [i("The multiplier represents the amount of FORGE rewards each farm gets."), Object(R.jsx)("br", {}), Object(R.jsx)("br", {}), i("For example, if a 1x farm was getting 1 FORGE per second, a 40x farm would be getting 40 FORGE per second.")]
                            }),
                            children: Object(R.jsx)(g.x, {
                                color: "textSubtle"
                            })
                        })]
                    })
                },
                Rt = y.e.div(Le || (Le = Object(b.a)(["\n  min-width: 110px;\n  font-weight: 600;\n  text-align: right;\n  margin-right: 14px;\n\n  ", " {\n    text-align: left;\n    margin-right: 0;\n  }\n"])), (function (e) {
                    return e.theme.mediaQueries.lg
                })),
                zt = y.e.div(qe || (qe = Object(b.a)(["\n  display: flex;\n  align-items: center;\n"]))),
                Mt = function (e) {
                    var n = e.liquidity,
                        t = n ? "$".concat(Number(n).toLocaleString(void 0, {
                            maximumFractionDigits: 0
                        })) : Object(R.jsx)(g.N, {
                            width: 60
                        });
                    return Object(R.jsx)(zt, {
                        children: Object(R.jsx)(Rt, {
                            children: Object(R.jsx)(g.Q, {
                                children: t
                            })
                        })
                    })
                },
                Nt = y.e.span(Ae || (Ae = Object(b.a)(["\n  color: ", ";\n  display: flex;\n  align-items: center;\n\n"])), (function (e) {
                    return e.theme.colors.text
                })),
                Ut = function (e) {
                    var n = e.depositFeeBP,
                        t = "".concat(n / 100, "%");
                    return Object(R.jsx)(Nt, {
                        children: t
                    })
                },
                Ht = t(245),
                Gt = y.e.div(Ie || (Ie = Object(b.a)(["\n  padding: 16px;\n  border: 2px solid ", ";\n  border-radius: 16px;\n  flex-grow: 1;\n  flex-basis: 0;\n  margin-bottom: 16px;\n\n  ", " {\n    margin-left: 12px;\n    margin-right: 12px;\n    margin-bottom: 0;\n    max-height: 100px;\n  }\n\n  ", " {\n    margin-left: 48px;\n    margin-right: 0;\n    margin-bottom: 0;\n    max-height: 100px;\n  }\n"])), (function (e) {
                    return e.theme.colors.input
                }), (function (e) {
                    return e.theme.mediaQueries.sm
                }), (function (e) {
                    return e.theme.mediaQueries.xl
                })),
                Vt = y.e.div(Ee || (Ee = Object(b.a)(["\n  font-weight: 600;\n  font-size: 12px;\n  margin-bottom: 8px;\n"]))),
                Kt = y.e.span(Be || (Be = Object(b.a)(["\n  color: ", ";\n"])), (function (e) {
                    return e.theme.colors.secondary
                })),
                Wt = y.e.span(Re || (Re = Object(b.a)(["\n  color: ", ";\n"])), (function (e) {
                    return e.theme.colors.textSubtle
                })),
                Xt = y.e.div(ze || (ze = Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),
                $t = y.e.div(Me || (Me = Object(b.a)(["\n  font-weight: 600;\n  font-size: 20px;\n  color: ", ";\n"])), (function (e) {
                    return e.theme.colors.text
                })),
                _t = y.e.div(Ne || (Ne = Object(b.a)(["\n  font-size: 12px;\n  color: ", ";\n"])), (function (e) {
                    return e.theme.colors.textSubtle
                })),
                Yt = y.e.div(Ue || (Ue = Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n"]))),
                Jt = function (e) {
                    var n = e.pid,
                        t = e.userData,
                        i = e.userDataReady,
                        c = new m.a(t.earnings),
                        r = Object(S.h)(),
                        a = 0,
                        o = 0,
                        s = i ? a.toLocaleString() : Object(R.jsx)(g.N, {
                            width: 60
                        });
                    c.isZero() || (a = Object(F.c)(c), o = new m.a(a).multipliedBy(r).toNumber(), s = a.toLocaleString());
                    var l = Object(u.useState)(!1),
                        d = Object(j.a)(l, 2),
                        b = d[0],
                        x = d[1],
                        p = Object(nt.b)(n).onReward,
                        O = Object(In.a)(n).onStake,
                        h = Object(P.b)().t,
                        f = Object(Ht.useCountUp)({
                            start: 0,
                            end: o,
                            duration: 1,
                            separator: ",",
                            decimals: 2
                        }),
                        v = f.countUp,
                        y = f.update,
                        k = Object(u.useRef)(y);
                    return Object(u.useEffect)((function () {
                        k.current(o)
                    }), [o, k]), Object(R.jsxs)(Gt, {
                        children: [Object(R.jsxs)(Vt, {
                            children: [Object(R.jsx)(Kt, {
                                children: "FORGE "
                            }), Object(R.jsx)(Wt, {
                                children: h("EARNED")
                            })]
                        }), Object(R.jsxs)(Xt, {
                            children: [Object(R.jsxs)("div", {
                                children: [Object(R.jsx)($t, {
                                    children: s
                                }), v > 0 && Object(R.jsxs)(_t, {
                                    children: ["~", v, "USD"]
                                })]
                            }), Object(R.jsxs)(Yt, {
                                children: [5 === n ? Object(R.jsx)(g.g, {
                                    disabled: 0 === a || b,
                                    variant: "tertiary",
                                    ml: "4px",
                                    onClick: Object(Pn.a)(Dn.a.mark((function e() {
                                        return Dn.a.wrap((function (e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return x(!0), e.next = 3, O(a.toString(), 18);
                                                case 3:
                                                    x(!1);
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))),
                                    children: h("Compound")
                                }) : null, Object(R.jsx)(g.g, {
                                    disabled: !a || b || !i,
                                    onClick: Object(Pn.a)(Dn.a.mark((function e() {
                                        return Dn.a.wrap((function (e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return x(!0), e.next = 3, p();
                                                case 3:
                                                    x(!1);
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))),
                                    ml: "4px",
                                    children: h("Harvest")
                                })]
                            })]
                        })]
                    })
                },
                Zt = y.e.div(He || (He = Object(b.a)(["\n  display: flex;\n"]))),
                ei = y.e.div(Ge || (Ge = Object(b.a)(["\n  color: ", ";\n  font-size: 12px;\n  align: left;\n  display: inline;\n"])), (function (e) {
                    return e.theme.colors.textSubtle
                })),
                ni = y.e.div(Ve || (Ve = Object(b.a)(["\n  display: flex;\n  white-space: nowrap;\n  overflow: hidden;\n  justify-content:center;\n  align-items:baseline;\n  white-space: pre;\n"]))),
                ti = function (e) {
                    var n, t, i = e.pid,
                        c = e.depositFeeBP,
                        r = e.lpSymbol,
                        a = e.lpAddresses,
                        o = e.quoteToken,
                        s = e.token,
                        l = e.userDataReady,
                        d = e.isTokenOnly,
                        b = e.stakedUsd,
                        x = e.isSpirit,
                        O = Object(P.b)().t,
                        h = Object(f.c)().account,
                        m = Object(u.useState)(!1),
                        y = Object(j.a)(m, 2),
                        k = y[0],
                        w = y[1],
                        T = Object(S.c)(i),
                        C = T.allowance,
                        Q = T.tokenBalance,
                        D = T.stakedBalance,
                        L = Object(In.a)(i).onStake,
                        q = Object(En.a)(i).onUnstake,
                        A = Object(Ln.a)(),
                        I = Object(p.f)(),
                        E = d ? s.decimals : 18,
                        B = h && C && C.isGreaterThan(0),
                        z = a[window.ROBINHOOD_FARM.chainId],
                        M = s.address[window.ROBINHOOD_FARM.chainId];
                    d ? (n = s.address[window.ROBINHOOD_FARM.chainId], t = (window.ROBINHOOD_FARM.links.swap || '#')) : (n = pn({
                        quoteTokenAddress: o.address,
                        tokenAddress: s.address
                    }), t = (window.ROBINHOOD_FARM.links.liquidity || '#')), x && (t = window.ROBINHOOD_FARM.explorerUrl+'/address/'.concat(n));
                    var N = Object(F.c)(D, E).toLocaleString(void 0, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 8
                        }),
                        U = Object(F.c)(b, E),
                        H = Object(F.d)(U),
                        G = Object(g.bb)(Object(R.jsx)(Xn, {
                            isTokenOnly: d,
                            max: Q,
                            onConfirm: L,
                            tokenName: r,
                            addLiquidityUrl: t,
                            depositFeeBP: c,
                            tokenDecimals: E
                        })),
                        V = Object(j.a)(G, 1)[0],
                        K = Object(g.bb)(Object(R.jsx)($n, {
                            isTokenOnly: d,
                            max: D,
                            onConfirm: q,
                            tokenName: r,
                            tokenDecimals: E
                        })),
                        W = Object(j.a)(K, 1)[0],
                        X = Object(u.useMemo)((function () {
                            return d ? Object(Fn.a)(M, A) : Object(Fn.a)(z, A)
                        }), [A, z, M, d]),
                        $ = Object(qn.a)(X).onApprove,
                        _ = Object(u.useCallback)(Object(Pn.a)(Dn.a.mark((function e() {
                            return Dn.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, w(!0), e.next = 4, $();
                                    case 4:
                                        w(!1), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error(e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        }))), [$]);
                    return h ? B ? D.gt(0) ? Object(R.jsxs)(Gt, {
                        children: [Object(R.jsxs)(Vt, {
                            children: [Object(R.jsxs)(Kt, {
                                children: [r, " "]
                            }), Object(R.jsx)(Wt, {
                                children: O("STAKED")
                            })]
                        }), Object(R.jsxs)(Xt, {
                            children: [Object(R.jsx)("div", {
                                children: Object(R.jsx)($t, {
                                    children: N
                                })
                            }), Object(R.jsx)(ni, {
                                children: b.gt(0) ? Object(R.jsxs)(ei, {
                                    children: ["~$", H, U < 1e-5 && U > 0 ? Object(R.jsxs)(ei, {
                                        children: ["  ", "e", U.toExponential(2).split("e")[1].toLocaleString()]
                                    }) : null, " ", " USD"]
                                }) : null
                            }), Object(R.jsxs)(Zt, {
                                children: [Object(R.jsx)(g.y, {
                                    variant: "tertiary",
                                    onClick: W,
                                    "aria-label": "Withdraw stake",
                                    mr: "6px",
                                    children: Object(R.jsx)(g.G, {
                                        color: "secondary",
                                        width: "14px"
                                    })
                                }), Object(R.jsx)(g.y, {
                                    variant: "tertiary",
                                    onClick: V,
                                    children: Object(R.jsx)(g.a, {
                                        color: "secondary",
                                        width: "14px"
                                    })
                                })]
                            })]
                        })]
                    }) : Object(R.jsxs)(Gt, {
                        children: [Object(R.jsxs)(Vt, {
                            children: [Object(R.jsxs)(Wt, {
                                children: [O("STAKE"), " "]
                            }), Object(R.jsx)(Kt, {
                                children: r
                            })]
                        }), Object(R.jsx)(Xt, {
                            children: Object(R.jsx)(g.g, {
                                width: "100%",
                                onClick: V,
                                variant: "primary",
                                disabled: ["history", "archived"].some((function (e) {
                                    return I.pathname.includes(e)
                                })),
                                children: O("Stake")
                            })
                        })]
                    }) : l ? Object(R.jsxs)(Gt, {
                        children: [Object(R.jsx)(Vt, {
                            children: Object(R.jsx)(Wt, {
                                children: O("ENABLE FARM")
                            })
                        }), Object(R.jsx)(Xt, {
                            children: Object(R.jsx)(g.g, {
                                width: "100%",
                                disabled: k || I.pathname.includes("archived"),
                                onClick: _,
                                variant: "tertiary",
                                children: O("Enable")
                            })
                        })]
                    }) : Object(R.jsxs)(Gt, {
                        children: [Object(R.jsx)(Vt, {
                            children: Object(R.jsx)(Wt, {
                                children: O("START FARMING")
                            })
                        }), Object(R.jsx)(Xt, {
                            children: Object(R.jsx)(g.N, {
                                width: 180,
                                marginBottom: 28,
                                marginTop: 14
                            })
                        })]
                    }) : Object(R.jsxs)(Gt, {
                        children: [Object(R.jsx)(Vt, {
                            children: Object(R.jsx)(Wt, {
                                children: O("START FARMING")
                            })
                        }), Object(R.jsx)(Xt, {
                            children: Object(R.jsx)(An.a, {
                                width: "100%"
                            })
                        })]
                    })
                },
                ii = Object(y.f)(Ke || (Ke = Object(b.a)(["\n  from {\n    max-height: 0px;\n  }\n  to {\n    max-height: 500px;\n  }\n"]))),
                ci = Object(y.f)(We || (We = Object(b.a)(["\n  from {\n    max-height: 500px;\n  }\n  to {\n    max-height: 0px;\n  }\n"]))),
                ri = y.e.div(Xe || (Xe = Object(b.a)(["\n  animation: ", ";\n  overflow: hidden;\n  background: ", ";\n  display: flex;\n  width: 100%;\n  flex-direction: column-reverse;\n  padding: 24px;\n\n  ", " {\n    flex-direction: row;\n    padding: 16px 32px;\n  }\n"])), (function (e) {
                    return e.expanded ? Object(y.d)($e || ($e = Object(b.a)(["\n          ", " 300ms linear forwards\n        "])), ii) : Object(y.d)(_e || (_e = Object(b.a)(["\n          ", " 300ms linear forwards\n        "])), ci)
                }), (function (e) {
                    return e.theme.colors.background
                }), (function (e) {
                    return e.theme.mediaQueries.lg
                })),
                ai = Object(y.e)(g.C)(Ye || (Ye = Object(b.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ", ";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ", ";\n  }\n"])), (function (e) {
                    return e.theme.colors.text
                }), (function (e) {
                    return e.theme.colors.secondary
                })),
                oi = y.e.div(Je || (Je = Object(b.a)(["\n  color: ", ";\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n\n  ", " {\n    justify-content: flex-start;\n  }\n"])), (function (e) {
                    return e.theme.colors.text
                }), (function (e) {
                    return e.theme.mediaQueries.sm
                })),
                si = y.e.div(Ze || (Ze = Object(b.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 25px;\n\n  ", " {\n    margin-top: 16px;\n  }\n\n  > div {\n    height: 24px;\n    padding: 0 6px;\n    font-size: 14px;\n    margin-right: 4px;\n\n    svg {\n      width: 14px;\n    }\n  }\n"])), (function (e) {
                    return e.theme.mediaQueries.sm
                })),
                li = y.e.div(en || (en = Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n\n  ", " {\n    flex-direction: row;\n    align-items: center;\n    flex-grow: 1;\n    flex-basis: 0;\n  }\n"])), (function (e) {
                    return e.theme.mediaQueries.sm
                })),
                di = y.e.div(nn || (nn = Object(b.a)(["\n  min-width: 200px;\n"]))),
                ji = y.e.div(tn || (tn = Object(b.a)(["\n  display: block;\n\n  ", " {\n    display: none;\n  }\n"])), (function (e) {
                    return e.theme.mediaQueries.lg
                })),
                bi = y.e.div(cn || (cn = Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 4px 0px;\n"]))),
                ui = function (e) {
                    var n, t, i, c = e.details,
                        r = e.apr,
                        a = e.multiplier,
                        o = e.liquidity,
                        s = e.userDataReady,
                        l = e.expanded,
                        j = e.depositFee,
                        b = e.stakedUsd,
                        u = c,
                        x = Object(P.b)().t,
                        p = "0X" !== u.multiplier,
                        O = u.quoteToken,
                        h = u.token,
                        m = u.dual,
                        f = u.lpSymbol && u.lpSymbol.toUpperCase().replace("YIELDFORGE", ""),
                        y = u.lpAddresses[window.ROBINHOOD_FARM.chainId];
                    return u.isTokenOnly ? (n = h.address[window.ROBINHOOD_FARM.chainId], t = window.ROBINHOOD_FARM.explorerUrl+'/address/'.concat(n)) : (n = pn({
                        quoteTokenAddress: O.address,
                        tokenAddress: h.address
                    }), t = (window.ROBINHOOD_FARM.links.liquidity || '#')), u.isSpirit && (t = window.ROBINHOOD_FARM.explorerUrl+'/address/'.concat(n)), i = u.isTokenOnly ? window.ROBINHOOD_FARM.explorerUrl+'/address/'.concat(u.token.address[window.ROBINHOOD_FARM.chainId]) : window.ROBINHOOD_FARM.explorerUrl+'/address/'.concat(y), Object(R.jsxs)(ri, {
                        expanded: l,
                        children: [Object(R.jsxs)(di, {
                            children: [p && Object(R.jsx)(oi, {
                                children: Object(R.jsx)(ai, {
                                    href: t,
                                    children: x("Get ".concat(f), {
                                        name: f
                                    })
                                })
                            }), Object(R.jsx)(ai, {
                                href: i,
                                children: x("View Contract")
                            }), Object(R.jsxs)(si, {
                                children: [0 === j ? Object(R.jsx)(fn, {}) : null, u.isSpirit ? Object(R.jsx)(yn, {}) : Object(R.jsx)(gn, {}), u.isCommunity ? Object(R.jsx)(vn, {}) : null, m ? Object(R.jsx)(kn, {}) : null]
                            })]
                        }), Object(R.jsxs)(ji, {
                            children: [Object(R.jsxs)(bi, {
                                children: [Object(R.jsx)(g.Q, {
                                    children: x("APR")
                                }), Object(R.jsx)(yt, Object(d.a)({}, r))]
                            }), Object(R.jsxs)(bi, {
                                children: [Object(R.jsx)(g.Q, {
                                    children: x("Reward weight")
                                }), Object(R.jsx)(Bt, Object(d.a)({}, a))]
                            }), Object(R.jsxs)(bi, {
                                children: [Object(R.jsx)(g.Q, {
                                    children: x("Staked value")
                                }), Object(R.jsx)(Mt, Object(d.a)({}, o))]
                            })]
                        }), Object(R.jsxs)(li, {
                            children: [Object(R.jsx)(Jt, Object(d.a)(Object(d.a)({}, u), {}, {
                                userDataReady: s
                            })), Object(R.jsx)(ti, Object(d.a)(Object(d.a)({}, u), {}, {
                                userDataReady: s,
                                stakedUsd: b,
                                isSpirit: u.isSpirit
                            }))]
                        })]
                    })
                },
                xi = y.e.div(rn || (rn = Object(b.a)(["\n  font-size: 12px;\n  color: ", ";\n  text-align: left;\n"])), (function (e) {
                    return e.theme.colors.textSubtle
                })),
                pi = y.e.div(an || (an = Object(b.a)(["\n  min-height: 24px;\n  display: flex;\n  align-items: center;\n"]))),
                Oi = function (e) {
                    var n = e.label,
                        t = void 0 === n ? "" : n,
                        i = e.children;
                    return Object(R.jsxs)("div", {
                        children: [t && Object(R.jsx)(xi, {
                            children: t
                        }), Object(R.jsx)(pi, {
                            children: i
                        })]
                    })
                },
                hi = [{
                    id: 1,
                    name: "farm",
                    translationId: 999,
                    sortable: !0,
                    label: ""
                }, {
                    id: 2,
                    name: "earned",
                    translationId: 1072,
                    sortable: !0,
                    label: "Earned"
                }, {
                    id: 3,
                    name: "apr",
                    translationId: 736,
                    sortable: !0,
                    label: "APR"
                }, {
                    id: 5,
                    name: "depositFee",
                    translationId: 999,
                    sortable: !0,
                    label: "Deposit Fee"
                }, {
                    id: 6,
                    name: "details",
                    translationId: 999,
                    sortable: !0,
                    label: ""
                }],
                mi = [{
                    id: 1,
                    name: "farm",
                    translationId: 999,
                    sortable: !0,
                    label: ""
                }, {
                    id: 2,
                    name: "earned",
                    translationId: 1072,
                    sortable: !0,
                    label: "Earned"
                }, {
                    id: 3,
                    name: "apr",
                    translationId: 736,
                    sortable: !0,
                    label: "APR"
                }, {
                    id: 4,
                    name: "liquidity",
                    translationId: 999,
                    sortable: !0,
                    label: "Staked value"
                }, {
                    id: 5,
                    name: "depositFee",
                    translationId: 999,
                    sortable: !0,
                    label: "Deposit Fee"
                }, {
                    id: 6,
                    name: "multiplier",
                    translationId: 999,
                    sortable: !0,
                    label: "Reward weight"
                }, {
                    id: 7,
                    name: "details",
                    translationId: 999,
                    sortable: !0,
                    label: ""
                }];
            ! function (e) {
                e.TABLE = "TABLE", e.CARD = "CARD"
            }(on || (on = {}));
            var fi, gi, vi, yi, ki, wi, Si, Ti, Ci, Qi, Di, Pi, Fi, Li, qi, Ai, Ii = {
                    apr: yt,
                    farm: Tt,
                    earned: Qt,
                    details: Ft,
                    multiplier: Bt,
                    liquidity: Mt,
                    depositFee: Ut
                },
                Ei = y.e.div(sn || (sn = Object(b.a)(["\n  padding: 24px 0px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  padding-right: 8px;\n\n  ", " {\n    padding-right: 32px;\n  }\n"])), (function (e) {
                    return e.theme.mediaQueries.xl
                })),
                Bi = y.e.tr(ln || (ln = Object(b.a)(["\n  cursor: pointer;\n  border-bottom: 2px solid ", ";\n"])), (function (e) {
                    return e.theme.colors.cardBorder
                })),
                Ri = y.e.td(dn || (dn = Object(b.a)(["\n  padding: 16px 0 24px 16px;\n"]))),
                zi = y.e.td(jn || (jn = Object(b.a)(["\n  padding-top: 16px;\n  padding-bottom: 24px;\n"]))),
                Mi = y.e.td(bn || (bn = Object(b.a)(["\n  padding-top: 24px;\n"]))),
                Ni = function (e) {
                    var n = e.details,
                        t = e.userDataReady,
                        i = Object(S.h)(),
                        c = Object(S.g)(),
                        r = Object(S.j)().times(c),
                        a = !!Object(S.c)(n.pid).stakedBalance.toNumber(),
                        o = Object(S.c)(n.pid).stakedBalance,
                        s = Object(u.useState)(a),
                        l = Object(j.a)(s, 2),
                        b = l[0],
                        p = l[1],
                        O = ft(b, 300),
                        h = Object(P.b)().t,
                        f = Object(u.useMemo)((function () {
                            return n.totalValueUsd || '0'
                        }), [n.totalValueUsd]),
                        v = o;
                        
                    v = Number(n.lpStakedTotal)>0 && Number(f)>0 ? v.times(new m.a(f).div(n.lpStakedTotal)) : new m.a(0);
                    var y = function () {
                        p(!b)
                    };
                    Object(u.useEffect)((function () {
                        p(a)
                    }), [a]);
                    var k = Object(g.ab)(),
                        w = k.isXl,
                        T = k.isXs,
                        C = !w,
                        Q = C ? hi : mi,
                        F = Q.map((function (e) {
                            return e.name
                        }));
                    return Object(R.jsxs)(R.Fragment, {
                        children: [T ? Object(R.jsxs)(Bi, {
                            onClick: y,
                            children: [Object(R.jsxs)("td", {
                                children: [Object(R.jsx)("tr", {
                                    children: Object(R.jsx)(Mi, {
                                        children: Object(R.jsx)(Oi, {
                                            children: Object(R.jsx)(Tt, Object(d.a)({}, e.farm))
                                        })
                                    })
                                }), Object(R.jsxs)("tr", {
                                    children: [Object(R.jsx)(Ri, {
                                        children: Object(R.jsx)(Oi, {
                                            label: h("Earned"),
                                            children: Object(R.jsx)(Qt, Object(d.a)(Object(d.a)({}, e.earned), {}, {
                                                userDataReady: t
                                            }))
                                        })
                                    }), Object(R.jsx)(zi, {
                                        children: Object(R.jsx)(Oi, {
                                            label: h("APR"),
                                            children: Object(R.jsx)(yt, Object(d.a)(Object(d.a)({}, e.apr), {}, {
                                                hideButton: !0
                                            }))
                                        })
                                    })]
                                })]
                            }), Object(R.jsx)("td", {
                                children: Object(R.jsx)(Ei, {
                                    children: Object(R.jsx)(Oi, {
                                        children: Object(R.jsx)(Ft, {
                                            actionPanelToggled: b
                                        })
                                    })
                                })
                            })]
                        }) : Object(R.jsx)(Bi, {
                            onClick: y,
                            children: Object.keys(e).map((function (n) {
                                var i = F.indexOf(n);
                                if (-1 === i) return null;
                                switch (n) {
                                    case "details":
                                        return Object(R.jsx)("td", {
                                            children: Object(R.jsx)(Ei, {
                                                children: Object(R.jsx)(Oi, {
                                                    children: Object(R.jsx)(Ft, {
                                                        actionPanelToggled: b
                                                    })
                                                })
                                            })
                                        }, n);
                                    case "apr":
                                        return Object(R.jsx)("td", {
                                            children: Object(R.jsx)(Ei, {
                                                children: Object(R.jsx)(Oi, {
                                                    label: h("APR"),
                                                    children: Object(R.jsx)(yt, Object(d.a)(Object(d.a)({}, e.apr), {}, {
                                                        hideButton: C
                                                    }))
                                                })
                                            })
                                        }, n);
                                    case "liquidity":
                                        return Object(R.jsx)("td", {
                                            children: Object(R.jsx)(Ei, {
                                                children: Object(R.jsx)(Oi, {
                                                    label: h("Staked value"),
                                                    children: Object(R.jsx)(Mt, {
                                                        liquidity: f
                                                    })
                                                })
                                            })
                                        }, n);
                                    case "depositFeeBP":
                                        return Object(R.jsx)("td", {
                                            children: Object(R.jsx)(Ei, {
                                                children: Object(R.jsx)(Oi, {
                                                    label: h("depositFee"),
                                                    children: Object(R.jsx)(Ut, Object(d.a)({}, e.depositFee))
                                                })
                                            })
                                        }, n);
                                    default:
                                        return Object(R.jsx)("td", {
                                            children: Object(R.jsx)(Ei, {
                                                children: Object(R.jsx)(Oi, {
                                                    label: h(Q[i].label),
                                                    children: x.a.createElement(Ii[n], Object(d.a)(Object(d.a)({}, e[n]), {}, {
                                                        userDataReady: t
                                                    }))
                                                })
                                            })
                                        }, n)
                                }
                            }))
                        }), O && Object(R.jsx)("tr", {
                            children: Object(R.jsx)("td", {
                                colSpan: 6,
                                children: Object(R.jsx)(ui, Object(d.a)(Object(d.a)({}, e), {}, {
                                    depositFee: n.depositFeeBP,
                                    expanded: b,
                                    stakedUsd: v
                                }))
                            })
                        })]
                    })
                },
                Ui = y.e.div(fi || (fi = Object(b.a)(["\n  filter: ", ";\n  width: 100%;\n  background: ", ";\n  border-radius: 16px;\n  margin: 16px 0px;\n"])), (function (e) {
                    return e.theme.card.dropShadow
                }), (function (e) {
                    return e.theme.card.background
                })),
                Hi = y.e.div(gi || (gi = Object(b.a)(["\n  overflow: visible;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]))),
                Gi = y.e.table(vi || (vi = Object(b.a)(["\n  border-collapse: collapse;\n  font-size: 14px;\n  border-radius: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n"]))),
                Vi = y.e.tbody(yi || (yi = Object(b.a)(["\n  & tr {\n    td {\n      font-size: 16px;\n      vertical-align: middle;\n    }\n  }\n"]))),
                Ki = y.e.div(ki || (ki = Object(b.a)(["\n  position: relative;\n"]))),
                Wi = y.e.div(wi || (wi = Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]))),
                Xi = function (e) {
                    var n = Object(u.useRef)(null),
                        t = Object(P.b)().t,
                        i = e.data,
                        c = e.columns,
                        r = e.userDataReady,
                        a = Object(g.cb)(c, i, {
                            sortable: !0,
                            sortColumn: "farm"
                        }).rows;
                    return Object(R.jsx)(Ui, {
                        children: Object(R.jsxs)(Ki, {
                            children: [Object(R.jsx)(Hi, {
                                ref: n,
                                children: Object(R.jsx)(Gi, {
                                    children: Object(R.jsx)(Vi, {
                                        children: a.map((function (e) {
                                            return Object(u.createElement)(Ni, Object(d.a)(Object(d.a)({}, e.original), {}, {
                                                userDataReady: r,
                                                key: "table-row-".concat(e.id)
                                            }))
                                        }))
                                    })
                                })
                            }), Object(R.jsx)(Wi, {
                                children: Object(R.jsxs)(g.g, {
                                    variant: "subtle",
                                    onClick: function () {
                                        n.current.scrollIntoView({
                                            behavior: "smooth"
                                        })
                                    },
                                    children: [t("To Top"), Object(R.jsx)(g.r, {
                                        color: "secondary"
                                    })]
                                })
                            })]
                        })
                    })
                },
                $i = t(90),
                _i = function (e) {
                    var n, t = e.hasStakeInFinishedFarms,
                        i = Object(p.g)().url,
                        c = Object(p.f)(),
                        r = Object(P.b)().t;
                    switch (c.pathname) {
                        default:
                            n = 0;
                            break;
                        case "/farms/history":
                            n = 1;
                            break;
                        case "/farms/archived":
                            n = 2
                    }
                    return Object(R.jsx)(Yi, {
                        children: Object(R.jsxs)(g.h, {
                            activeIndex: n,
                            scale: "sm",
                            variant: "subtle",
                            children: [Object(R.jsx)(g.i, {
                                as: $i.a,
                                to: "".concat(i),
                                children: r("Live")
                            }), Object(R.jsx)(g.J, {
                                show: t,
                                children: Object(R.jsx)(g.i, {
                                    as: $i.a,
                                    to: "".concat(i, "/history"),
                                    children: r("Finished")
                                })
                            })]
                        })
                    })
                },
                Yi = y.e.div(Si || (Si = Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  a {\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n\n  ", " {\n    margin-left: 16px;\n  }\n"])), (function (e) {
                    return e.theme.mediaQueries.sm
                })),
                Ji = t(198),
                Zi = t.n(Ji),
                ec = Object(y.e)(g.A)(Ti || (Ti = Object(b.a)(["\n  border-radius: 16px;\n  margin-left: auto;\n"]))),
                nc = y.e.div(Ci || (Ci = Object(b.a)(["\n  position: relative;\n  ", " {\n    width: 234px;\n    display: block;\n  }\n"])), (function (e) {
                    return e.theme.mediaQueries.sm
                })),
                tc = y.e.div(Qi || (Qi = Object(b.a)([""]))),
                ic = function (e) {
                    var n = e.onChange,
                        t = Object(u.useState)(!1),
                        i = Object(j.a)(t, 2),
                        c = i[0],
                        r = i[1],
                        a = Object(u.useState)(""),
                        o = Object(j.a)(a, 2),
                        s = o[0],
                        l = o[1],
                        d = Object(u.useMemo)((function () {
                            return Zi()((function (e) {
                                return n(e)
                            }), 500)
                        }), [n]);
                    return Object(R.jsx)(tc, {
                        toggled: c,
                        children: Object(R.jsx)(nc, {
                            children: Object(R.jsx)(ec, {
                                value: s,
                                onChange: function (e) {
                                    l(e.target.value), d(e)
                                },
                                placeholder: "Search tokens",
                                onBlur: function () {
                                    return r(!1)
                                }
                            })
                        })
                    })
                },
                cc = y.e.div(Di || (Di = Object(b.a)(["\n  margin-left: -8px;\n\n  ", " {\n    margin-left: 0;\n  }\n"])), (function (e) {
                    return e.theme.mediaQueries.sm
                })),
                rc = function (e) {
                    var n = e.viewMode,
                        t = e.onToggle,
                        i = function (e) {
                            n !== e && t(e)
                        };
                    return Object(R.jsxs)(cc, {
                        children: [Object(R.jsx)(g.y, {
                            variant: "text",
                            scale: "sm",
                            onClick: function () {
                                return i(on.CARD)
                            },
                            children: Object(R.jsx)(g.p, {
                                color: n === on.CARD ? "secondary" : "textDisabled"
                            })
                        }), Object(R.jsx)(g.y, {
                            variant: "text",
                            scale: "sm",
                            onClick: function () {
                                return i(on.TABLE)
                            },
                            children: Object(R.jsx)(g.D, {
                                color: n === on.TABLE ? "secondary" : "textDisabled"
                            })
                        })]
                    })
                },
                ac = y.e.div(Pi || (Pi = Object(b.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n\n  justify-content: space-between;\n  flex-direction: column;\n  margin-bottom: 32px;\n\n  ", " {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 16px 32px;\n    margin-bottom: 0;\n  }\n"])), (function (e) {
                    return e.theme.mediaQueries.sm
                })),
                oc = y.e.div(Fi || (Fi = Object(b.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n\n  ", " {\n    margin-left: 8px;\n  }\n"])), g.Q),
                sc = y.e.div(Li || (Li = Object(b.a)(["\n  > ", " {\n    font-size: 12px;\n  }\n"])), g.Q),
                lc = y.e.div(qi || (qi = Object(b.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 8px 0px;\n\n  ", " {\n    width: auto;\n    padding: 0;\n  }\n"])), (function (e) {
                    return e.theme.mediaQueries.sm
                })),
                dc = y.e.div(Ai || (Ai = Object(b.a)(["\n  flex-wrap: wrap;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  > div {\n    padding: 8px 0px;\n  }\n\n  ", " {\n    justify-content: flex-start;\n    width: auto;\n\n    > div {\n      padding: 0;\n    }\n  }\n"])), (function (e) {
                    return e.theme.mediaQueries.sm
                })),
                jc = function (e) {
                    var n = Object(p.g)().path,
                        t = Object(p.f)().pathname,
                        i = Object(P.b)().t,
                        c = Object(S.d)(),
                        r = c.data,
                        a = c.userDataLoaded,
                        o = r.filter((function (e) {
                            return !e.hide
                        })),
                        s = Object(S.h)(),
                        l = Object(S.g)(),
                        b = Object(S.j)().times(l),
                        x = Object(u.useState)(""),
                        h = Object(j.a)(x, 2),
                        y = h[0],
                        A = h[1],
                        z = Object(Q.a)(on.TABLE, {
                            localStorageKey: "yieldforge_farm_view"
                        }),
                        M = Object(j.a)(z, 2),
                        N = M[0],
                        U = M[1],
                        H = Object(f.c)().account,
                        V = Object(u.useState)("hot"),
                        K = Object(j.a)(V, 2),
                        W = K[0],
                        X = K[1],
                        $ = e.tokenMode,
                        _ = Object(O.b)(),
                        Y = Object(T.a)().fastRefresh;
                    Object(u.useEffect)((function () {
                        H && _(Object(C.b)(H))
                    }), [H, _, Y]);
                    var J = t.includes("archived"),
                        Z = t.includes("history"),
                        ee = !Z && !J,
                        ne = !H || !!H && a,
                        te = Object(u.useState)(!ee),
                        ie = Object(j.a)(te, 2),
                        ce = ie[0],
                        re = ie[1];
                    Object(u.useEffect)((function () {
                        re(!ee)
                    }), [ee]), Object(u.useEffect)((function () {
                        _(Object(B.d)(J)), J && (_(Object(B.c)()), H && _(Object(C.b)(H)))
                    }), [J, _, H]);
                    var ae = r.filter((function (e) {
                            return "0X" !== e.multiplier && !Object(q.a)(e.pid) && e.isTokenOnly && (e.token.assetType === 'stock') === !$
                        })),
                        oe = r.filter((function (e) {
                            return "0X" === e.multiplier && !Object(q.a)(e.pid) && e.isTokenOnly && (e.token.assetType === 'stock') === !$
                        })),
                        se = o.filter((function (e) {
                            return Object(q.a)(e.pid)
                        })),
                        le = ae.filter((function (e) {
                            return e.userData && new m.a(e.userData.stakedBalance).isGreaterThan(0)
                        })),
                        de = oe.filter((function (e) {
                            return e.userData && new m.a(e.userData.stakedBalance).isGreaterThan(0)
                        })),
                        je = se.filter((function (e) {
                            return e.userData && new m.a(e.userData.stakedBalance).isGreaterThan(0)
                        })),
                        be = Object(u.useCallback)((function (e) {
                            var n = e.map((function (e) {
                                var n = new m.a(e.totalValueUsd || 0),
                                    t = new m.a(e.forgePerSec || 0).times(new m.a(e.poolWeight)).div(new m.a(10).pow(18)).times(v.f),
                                    i = s.times(t),
                                    c = new m.a(e.totalValueUsd || 0);
                                return i = c.comparedTo(0) > 0 ? i.div(c) : new m.a(0), Object(d.a)(Object(d.a)({}, e), {}, {
                                    apr: i,
                                    liquidity: n
                                })
                            }));
                            if (y) {
                                var t = I(y.toLowerCase());
                                n = n.filter((function (e) {
                                    return I(e.lpSymbol.toLowerCase()).includes(t)
                                }))
                            }
                            return n
                        }), [s, l, b, y]),
                        ue = Object(u.useRef)(null),
                        xe = Object(u.useState)(12),
                        pe = Object(j.a)(xe, 2),
                        Oe = pe[0],
                        he = pe[1],
                        me = Object(u.useState)(!1),
                        fe = Object(j.a)(me, 2),
                        ge = fe[0],
                        ve = fe[1],
                        ye = Object(u.useMemo)((function () {
                            var e = [];
                            return ee && (e = be(ce ? le : ae)), Z && (e = be(ce ? de : oe)), J && (e = be(ce ? je : se)),
                                function (e) {
                                    switch (W) {
                                        case "apr":
                                            return Object(L.orderBy)(e, (function (e) {
                                                return e.apr
                                            }), "desc");
                                        case "multiplier":
                                            return Object(L.orderBy)(e, (function (e) {
                                                return e.multiplier ? Number(e.multiplier.slice(0, -1)) : 0
                                            }), "desc");
                                        case "earned":
                                            return Object(L.orderBy)(e, (function (e) {
                                                return e.userData ? Number(e.userData.earnings) : 0
                                            }), "desc");
                                        case "liquidity":
                                            return Object(L.orderBy)(e, (function (e) {
                                                return Number(e.liquidity)
                                            }), "desc");
                                        default:
                                            return e
                                    }
                                }(e).slice(0, Oe)
                        }), [W, ae, be, oe, se, ee, Z, J, je, de, ce, le, Oe]);
                    Object(u.useEffect)((function () {
                        ge || (new IntersectionObserver((function (e) {
                            Object(j.a)(e, 1)[0].isIntersecting && he((function (e) {
                                return e + 12
                            }))
                        }), {
                            rootMargin: "0px",
                            threshold: 1
                        }).observe(ue.current), ve(!0))
                    }), [ye, ge]);
                    var ke = ye.map((function (e) {
                        var n, t = e.token,
                            i = e.quoteToken,
                            c = t.address,
                            r = i.address,
                            a = e.lpSymbol && e.lpSymbol.split(" ")[0].toUpperCase().replace("YIELDFORGE", "");
                        return n = e.isTokenOnly ? e.token.symbol.toLowerCase() : false ? "".concat(e.quoteToken.symbol.toLowerCase(), "-").concat(e.token.symbol.toLowerCase()) : "".concat(e.token.symbol.toLowerCase(), "-").concat(e.quoteToken.symbol.toLowerCase()), {
                            apr: {
                                value: e.apr.times(new m.a(100)).toNumber().toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                                multiplier: e.multiplier,
                                lpLabel: a,
                                tokenAddress: c,
                                quoteTokenAddress: r,
                                lydPrice: s,
                                originalValue: e.apr.toNumber()
                            },
                            farm: {
                                image: n,
                                label: a,
                                pid: e.pid
                            },
                            earned: {
                                earnings: Object(F.c)(new m.a(e.userData.earnings)),
                                pid: e.pid
                            },
                            liquidity: {
                                liquidity: e.liquidity
                            },
                            multiplier: {
                                multiplier: e.multiplier
                            },
                            details: e,
                            lydPrice: s,
                            depositFee: {
                                depositFeeBP: e.depositFeeBP
                            }
                        }
                    }));
                    return Object(R.jsxs)(R.Fragment, {
                        children: [Object(R.jsxs)(E.a, {
                            children: [Object(R.jsx)(g.w, {
                                as: "h1",
                                scale: "xxl",
                                color: "text",
                                mb: "24px",
                                children: i($ ? "Token Staking" : "Stock Staking")
                            }), Object(R.jsx)(g.w, {
                                scale: "lg",
                                color: "text",
                                children: i($ ? "Stake tokens to earn FORGE." : "Stake AMD, AMZN, NFLX, PLTR and TSLA tokens to earn FORGE. Amounts are token units, not underlying shares.")
                            })]
                        }), Object(R.jsxs)(w.a, {
                            children: [Object(R.jsxs)(ac, {
                                children: [Object(R.jsxs)(dc, {
                                    children: [Object(R.jsx)(rc, {
                                        viewMode: N,
                                        onToggle: function (e) {
                                            return U(e)
                                        }
                                    }), Object(R.jsxs)(oc, {
                                        children: [Object(R.jsx)(g.T, {
                                            checked: ce,
                                            onChange: function () {
                                                return re(!ce)
                                            },
                                            scale: "sm"
                                        }), Object(R.jsxs)(g.Q, {
                                            children: [" ", i("Staked only")]
                                        })]
                                    }), Object(R.jsx)(_i, {
                                        hasStakeInFinishedFarms: de.length > 0
                                    })]
                                }), Object(R.jsxs)(lc, {
                                    children: [Object(R.jsxs)(sc, {
                                        children: [Object(R.jsx)(g.Q, {
                                            children: "SORT BY"
                                        }), Object(R.jsx)(G, {
                                            options: [{
                                                label: "Hot",
                                                value: "hot"
                                            }, {
                                                label: "Reward weight",
                                                value: "multiplier"
                                            }, {
                                                label: "Earned",
                                                value: "earned"
                                            }],
                                            onChange: function (e) {
                                                X(e.value)
                                            }
                                        })]
                                    }), Object(R.jsxs)(sc, {
                                        style: {
                                            marginLeft: 16
                                        },
                                        children: [Object(R.jsx)(g.Q, {
                                            children: "SEARCH"
                                        }), Object(R.jsx)(ic, {
                                            onChange: function (e) {
                                                A(e.target.value)
                                            }
                                        })]
                                    })]
                                })]
                            }), function () {
                                if (N === on.TABLE && ke.length) {
                                    var e = mi.map((function (e) {
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            label: e.label,
                                            sort: function (n, t) {
                                                switch (e.name) {
                                                    case "farm":
                                                        return t.id - n.id;
                                                    case "apr":
                                                        return n.original.apr.value && t.original.apr.value ? Number(n.original.apr.value) - Number(t.original.apr.value) : 0;
                                                    case "earned":
                                                        return n.original.earned.earnings - t.original.earned.earnings;
                                                    default:
                                                        return 1
                                                }
                                            },
                                            sortable: e.sortable
                                        }
                                    }));
                                    return Object(R.jsx)(Xi, {
                                        data: ke,
                                        columns: e,
                                        userDataReady: ne
                                    })
                                }
                                return Object(R.jsx)("div", {
                                    children: Object(R.jsxs)(k.a, {
                                        children: [Object(R.jsx)(p.a, {
                                            exact: !0,
                                            path: "".concat(n),
                                            children: ye.map((function (e) {
                                                return Object(R.jsx)(mt, {
                                                    farm: e,
                                                    lydPrice: s,
                                                    wavaxPrice: l,
                                                    wethPrice: b,
                                                    account: H,
                                                    removed: !1
                                                }, e.pid)
                                            }))
                                        }), Object(R.jsx)(p.a, {
                                            exact: !0,
                                            path: "".concat(n, "/history"),
                                            children: ye.map((function (e) {
                                                return Object(R.jsx)(mt, {
                                                    farm: e,
                                                    lydPrice: s,
                                                    wavaxPrice: l,
                                                    wethPrice: b,
                                                    account: H,
                                                    removed: !0
                                                }, e.pid)
                                            }))
                                        }), Object(R.jsx)(p.a, {
                                            exact: !0,
                                            path: "".concat(n, "/archived"),
                                            children: ye.map((function (e) {
                                                return Object(R.jsx)(mt, {
                                                    farm: e,
                                                    lydPrice: s,
                                                    wavaxPrice: l,
                                                    wethPrice: b,
                                                    account: H,
                                                    removed: !0
                                                }, e.pid)
                                            }))
                                        })]
                                    })
                                })
                            }(), Object(R.jsx)("div", {
                                ref: ue
                            })]
                        })]
                    })
                }
        }
    }
]);
