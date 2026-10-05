(this.webpackJsonpyieldforge = this.webpackJsonpyieldforge || []).push([
    [0], {
        10: function(e,t){var x=window.RH.tokens();x.reward=x.forge;x.native=x.weth;t.a=x;},
        100: function(e){e.exports=[{"inputs":[{"internalType":"contract IERC20","name":"_syrup","type":"address"},{"internalType":"contract IERC20","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_rewardPerSec","type":"uint256"},{"internalType":"uint256","name":"_startTimestamp","type":"uint256"},{"internalType":"uint256","name":"_bonusEndTimestamp","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"forgePerSec","type":"uint256"}],"name":"UpdateEmissionRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"bonusEndTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTimestamp","type":"uint256"},{"internalType":"uint256","name":"accForgePerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stopReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardPerSec","type":"uint256"}],"name":"updateEmissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];},
        126: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            })), n.d(t, "c", (function() {
                return o
            })), n.d(t, "b", (function() {
                return u
            }));
            var a = n(52),
                i = Object(a.c)({
                    name: "toasts",
                    initialState: {
                        data: []
                    },
                    reducers: {
                        push: function(e, t) {
                            var n = t.payload,
                                a = e.data.findIndex((function(e) {
                                    return e.id === t.payload.id
                                }));
                            a >= 0 && e.data.splice(a, 1), e.data.unshift(n)
                        },
                        remove: function(e, t) {
                            var n = e.data.findIndex((function(e) {
                                return e.id === t.payload
                            }));
                            n >= 0 && e.data.splice(n, 1)
                        },
                        clear: function(e) {
                            e.data = []
                        }
                    }
                }),
                r = i.actions,
                s = r.clear,
                o = r.remove,
                u = r.push;
            i.reducer
        },
        127: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return O
            }));
            var a = n(52),
                i = n(28),
                r = n(146),
                s = n(89),
                o = n(2),
                u = n.n(o),
                c = n(54),
                p = n(16),
                l = n(14),
                d = Object(a.b)("prices/fetch", Object(l.a)(u.a.mark((function e() {
                    var t, n;
                    return u.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("");
                            case 2:
                                return t = e.sent, e.next = 5, t.json();
                            case 5:
                                return n = e.sent, e.abrupt("return", {
                                    update_at: n.update_at,
                                    prices: Object.keys(n.prices).reduce((function(e, t) {
                                        return Object(p.a)(Object(p.a)({}, e), {}, Object(c.a)({}, t.toLowerCase(), n.prices[t]))
                                    }), {})
                                });
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))),
                y = Object(a.c)({
                    name: "prices",
                    initialState: {
                        isLoading: !1,
                        lastUpdated: null,
                        data: null
                    },
                    reducers: {},
                    extraReducers: function(e) {
                        e.addCase(d.pending, (function(e) {
                            e.isLoading = !0
                        })), e.addCase(d.fulfilled, (function(e, t) {
                            e.isLoading = !1, e.lastUpdated = t.payload.update_at, e.data = t.payload.prices
                        }))
                    }
                }),
                m = y.reducer,
                b = n(188),
                f = n(176),
                h = Object(a.a)({
                    devTools: !1,
                    reducer: {
                        achievements: b.a,
                        block: f.a,
                        farms: r.a,
                        pools: s.a,
                        prices: m
                    }
                }),
                O = function() {
                    return Object(i.b)()
                };
            t.a = h
        },
        128: function(e,t,n){
 const React=n(0),web3=n(35),ui=n(6),toast=n(44),connectors=n(183);
 t.a=function(){const context=web3.c(),notify=toast.l().toastError;
 const login=React.useCallback(async()=>{
  if(window.RH.connecting)return;window.RH.connecting=true;window.RH.walletStatus('Connecting — check your browser wallet for a request.');
  try{await window.RH.selectWallet();await window.RH.switchNetwork();await context.activate(connectors.a[ui.t.Injected],undefined,true);localStorage.setItem(ui.W,ui.t.Injected);window.RH.walletStatus('Connected to '+window.ROBINHOOD_FARM.chainName);}
  catch(error){const message=error.code===-32002?'A wallet request is already open. Open MetaMask from your browser toolbar.':error.code===4001?'Connection rejected. Click Connect to try again.':error.message||'Wallet connection failed';window.RH.walletStatus(message,true);notify('Wallet connection',message);}
  finally{window.RH.connecting=false;}
 },[context.activate,notify]);
 window.RH.login=login;
 return{login,logout:()=>{localStorage.removeItem(ui.W);context.deactivate();}};
 }
},
        146: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return C
            })), n.d(t, "c", (function() {
                return I
            })), n.d(t, "b", (function() {
                return F
            }));
            var a = n(2),
                i = n.n(a),
                r = n(14),
                s = n(16),
                o = n(52),
                u = n(84),
                c = n(258),
                p = n(25),
                l = n(13),
                d = n.n(l),
                y = n(85),
                m = n(91),
                b = n(57),
                f = n(43),
                h = n(22),
                O = async function(farms){
 const web3=n(76).a, prices=await window.RH.getPrices(web3), B=d.a;
 const common=await Object(b.a)(m.concat(y),[{address:Object(h.e)(),name:'totalAllocPoint'},{address:Object(h.e)(),name:'forgePerSec'},{address:Object(h.e)(),name:'maxSupply'},{address:window.ROBINHOOD_FARM.tokenAddress,name:'totalSupply'},...farms.map(f=>({address:Object(h.e)(),name:'poolInfo',params:[f.pid]}))]);
 return Promise.all(farms.map(async (farm,index)=>{
 const info=[common[index+4],common[0],common[1],common[2]];
 const pool=info[0],weight=new B(info[1].toString()).gt(0)?new B(pool.allocPoint.toString()).div(info[1].toString()):new B(0);
 const supplyResult=[common[3]];
 const rate=new B(supplyResult[0].toString()).gte(info[3].toString())?'0':info[2].toString(); window.RH.stats={maxSupply:new B(info[3].toString()).div('1e18').toString(),rate:new B(rate).div('1e18').toString()};
 const stake=Object(h.a)(farm.lpAddresses), stakedRaw=pool.totalStaked.toString(), tp=prices[farm.token.symbol===window.ROBINHOOD_FARM.tokenSymbol?'forge':window.ROBINHOOD_FARM.farms.find(x=>x.pid===farm.pid).token];
 const conf=window.ROBINHOOD_FARM.farms.find(x=>x.pid===farm.pid),qp=prices[conf.quoteToken];
 let staked, total='0', value=new B(0), tokenAmount=new B(0), quoteAmount=new B(0), vs=new B(0);
 staked=new B(stakedRaw).div(new B(10).pow(farm.token.decimals));tokenAmount=staked;
 if(tp!=null)value=staked.times(tp);
 if(tp!=null&&Number(qp)>0)vs=new B(tp).div(qp);

 const quoteValue=Number(qp)>0?value.div(qp):new B(0);
 return {...farm,tokenAmount:tokenAmount.toJSON(),lpTotalSupply:total,lpTotalInQuoteToken:quoteValue.toJSON(),totalValueUsd:value.toJSON(),priceAvailable:tp!=null&&qp!=null,tokenPriceVsQuote:vs.toJSON(),poolWeight:weight.toJSON(),lpTokenBalanceMC:stakedRaw,multiplier:new B(pool.allocPoint.toString()).div(100).toString()+'X',depositFeeBP:Number(pool.depositFeeBP),lpStakedTotal:staked.toJSON(),forgePerSec:rate};
 }));
 },
                k = O,
                T = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        var a, r, s, o;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Object(h.e)(), r = n.map((function(e) {
                                        return {
                                            address: e.isTokenOnly ? e.token.address[window.ROBINHOOD_FARM.chainId] : e.lpAddresses[window.ROBINHOOD_FARM.chainId],
                                            name: "allowance",
                                            params: [t, a]
                                        }
                                    })), e.next = 4, Object(b.a)(y, r);
                                case 4:
                                    return s = e.sent, o = s.map((function(e) {
                                        return new d.a(e).toJSON()
                                    })), e.abrupt("return", o);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                v = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        var a, r, s;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = n.map((function(e) {
                                        return {
                                            address: e.isTokenOnly ? e.token.address[window.ROBINHOOD_FARM.chainId] : e.lpAddresses[window.ROBINHOOD_FARM.chainId],
                                            name: "balanceOf",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(b.a)(y, a);
                                case 3:
                                    return r = e.sent, s = r.map((function(e) {
                                        return new d.a(e).toJSON()
                                    })), e.abrupt("return", s);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                w = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        var a, r, s, o;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Object(h.e)(), r = n.map((function(e) {
                                        return {
                                            address: a,
                                            name: "userInfo",
                                            params: [e.pid, t]
                                        }
                                    })), e.next = 4, Object(b.a)(m, r);
                                case 4:
                                    return s = e.sent, o = s.map((function(e) {
                                        return new d.a(e[0]._hex).toJSON()
                                    })), e.abrupt("return", o);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                j = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        var a, r, s, o;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Object(h.e)(), r = n.map((function(e) {
                                        return {
                                            address: a,
                                            name: "pendingForge",
                                            params: [e.pid, t]
                                        }
                                    })), e.next = 4, Object(b.a)(m, r);
                                case 4:
                                    return s = e.sent, o = s.map((function(e) {
                                        return new d.a(e).toJSON()
                                    })), e.abrupt("return", o);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                x = u.a.filter((function(e) {
                    var t = e.pid;
                    return !Object(c.a)(t)
                })),
                g = {
                    data: u.a.map((function(e) {
                        return Object(s.a)(Object(s.a)({}, e), {}, {
                            userData: {
                                allowance: "0",
                                tokenBalance: "0",
                                stakedBalance: "0",
                                earnings: "0"
                            }
                        })
                    })),
                    loadArchivedFarmsData: !1,
                    userDataLoaded: !1
                },
                M = Object(o.c)({
                    name: "Farms",
                    initialState: g,
                    reducers: {
                        setFarmsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.pid === e.pid
                                }));
                                return Object(s.a)(Object(s.a)({}, e), t)
                            }))
                        },
                        setFarmUserData: function(e, t) {
                            t.payload.arrayOfUserDataObjects.forEach((function(t) {
                                var n = t.pid,
                                    a = e.data.findIndex((function(e) {
                                        return e.pid === n
                                    }));
                                e.data[a] = Object(s.a)(Object(s.a)({}, e.data[a]), {}, {
                                    userData: t
                                })
                            })), e.userDataLoaded = !0
                        },
                        setLoadArchivedFarmsData: function(e, t) {
                            var n = t.payload;
                            e.loadArchivedFarmsData = n
                        }
                    }
                }),
                P = M.actions,
                A = P.setFarmsPublicData,
                S = P.setFarmUserData,
                C = P.setLoadArchivedFarmsData,
                I = function() {
                    return function() {
                        var e = Object(r.a)(i.a.mark((function e(t, n) {
                            var a, r, s;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = n().farms.loadArchivedFarmsData, r = a ? u.a : x, e.next = 4, k(r);
                                    case 4:
                                        s = e.sent, t(A(s));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                F = function(e) {
                    return function() {
                        var t = Object(r.a)(i.a.mark((function t(n, a) {
                            var r, s, o, c, p, l, d;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return r = a().farms.loadArchivedFarmsData, s = r ? u.a : x, t.next = 4, T(e, s);
                                    case 4:
                                        return o = t.sent, t.next = 7, v(e, s);
                                    case 7:
                                        return c = t.sent, t.next = 10, w(e, s);
                                    case 10:
                                        return p = t.sent, t.next = 13, j(e, s);
                                    case 13:
                                        l = t.sent, d = o.map((function(e, t) {
                                            return {
                                                pid: s[t].pid,
                                                allowance: o[t],
                                                tokenBalance: c[t],
                                                stakedBalance: p[t],
                                                earnings: l[t]
                                            }
                                        })), n(S({
                                            arrayOfUserDataObjects: d
                                        }));
                                    case 16:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                };
            t.a = M.reducer
        },
        152: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return y
            }));
            var a = n(2),
                i = n.n(a),
                r = n(14),
                s = n(0),
                o = n(35),
                u = n(28),
                c = n(39),
                p = n(58),
                l = n(49),
                d = n(55),
                y = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = Object(u.b)(),
                        a = Object(o.c)(),
                        p = a.account,
                        y = Object(d.b)(),
                        m = Object(d.c)(e),
                        b = Object(s.useCallback)(function() {
                            var a = Object(r.a)(i.a.mark((function a(r, s) {
                                return i.a.wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            if (0 !== e) {
                                                a.next = 5;
                                                break
                                            }
                                            return a.next = 3, Object(l.i)(y, 0, r, p);
                                        case 3:
                                            a.next = 12;
                                            break;
                                        case 5:
                                            if (!t) {
                                                a.next = 10;
                                                break
                                            }
                                            return a.next = 8, Object(l.e)(m, r, p);
                                        case 8:
                                            a.next = 12;
                                            break;
                                        case 10:
                                            return a.next = 12, Object(l.d)(m, r, s, p);
                                        case 12:
                                            n(Object(c.l)(e, p)), n(Object(c.j)(e, p));
                                        case 14:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })));
                            return function(e, t) {
                                return a.apply(this, arguments)
                            }
                        }(), [p, n, t, y, m, e]);
                    return {
                        onStake: b
                    }
                };
            t.a = function(e) {
                var t = Object(u.b)(),
                    n = Object(o.c)().account,
                    a = Object(d.b)(),
                    y = Object(p.a)(),
                    m = y.toastError,
                    b = y.toastSuccess,
                    f = Object(s.useCallback)(function() {
                        var s = Object(r.a)(i.a.mark((function r(s, o) {
                            var u;
                            return i.a.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return i.prev = 0, i.next = 3, Object(l.i)(a, e, s, n, o);
                                    case 3:
                                        u = i.sent, t(Object(c.b)(n)), console.info(u), b("Success", "Staking transaction confirmed"), i.next = 12;
                                        break;
                                    case 9:
                                        i.prev = 9, i.t0 = i.catch(0), m("An error occurred.", "Transaction unsuccessful, please try again");
                                    case 12:
                                    case "end":
                                        return i.stop()
                                }
                            }), r, null, [
                                [0, 9]
                            ])
                        })));
                        return function(e, t) {
                            return s.apply(this, arguments)
                        }
                    }(), [n, t, a, e, b, m]);
                return {
                    onStake: f
                }
            }
        },
        153: function(e, t, n) {
            "use strict";
            var a, i = n(26),
                r = n(8),
                s = n(186),
                o = Object(r.e)(s.a)(a || (a = Object(i.a)(["\n  min-height: calc(100vh - 64px);\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  .banner {\n    width: 100%;\n    border-radius: 13px;\n    margin: 20px 0px;\n    margin-bottom: 50px;\n  }\n\n  ", " {\n    padding-top: 24px;\n    padding-bottom: 24px;\n  }\n\n  ", " {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.theme.mediaQueries.lg
                }));
            t.a = o
        },
        176: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            }));
            var a = n(52),
                i = Object(a.c)({
                    name: "Block",
                    initialState: {
                        currentBlock: 0,
                        initialBlock: 0
                    },
                    reducers: {
                        setBlock: function(e, t) {
                            0 === e.initialBlock && (e.initialBlock = t.payload), e.currentBlock = t.payload
                        }
                    }
                }),
                r = i.actions.setBlock;
            t.a = i.reducer
        },
        179: function(e,t){t.b=[window.ROBINHOOD_FARM.rpcUrl];t.a=function(){return window.ROBINHOOD_FARM.rpcUrl;}},
        180: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        181: function(e){e.exports=[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];},
        182: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            })), n.d(t, "b", (function() {
                return l
            }));
            var a = n(2),
                i = n.n(a),
                r = n(14),
                s = n(25),
                o = n(0),
                u = n.n(o),
                c = n(4),
                p = u.a.createContext({
                    slow: 0,
                    fast: 0
                }),
                l = function(e) {
                    var t = e.children,
                        n = Object(o.useState)(0),
                        a = Object(s.a)(n, 2),
                        u = a[0],
                        l = a[1],
                        d = Object(o.useState)(0),
                        y = Object(s.a)(d, 2),
                        m = y[0],
                        b = y[1];
                    return Object(o.useEffect)((function() {
                        var e = setInterval(Object(r.a)(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        b((function(e) {
                                            return e + 1
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 1e4);
                        return function() {
                            return clearInterval(e)
                        }
                    }), []), Object(o.useEffect)((function() {
                        var e = setInterval(Object(r.a)(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        l((function(e) {
                                            return e + 1
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 6e4);
                        return function() {
                            return clearInterval(e)
                        }
                    }), []), Object(c.jsx)(p.Provider, {
                        value: {
                            slow: u,
                            fast: m
                        },
                        children: t
                    })
                }
        },
        183: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            })), n.d(t, "b", (function() {
                return c
            }));
            var a = n(54),
                i = n(151),
                r = n(6),
                s = window.ROBINHOOD_FARM.chainId,
                o = window.RH.modernConnector(new i.a({
                    supportedChainIds: [s]
                })),
                u = Object(a.a)({}, r.t.Injected, o),
                c = function(e) {
                    return e
                }
        },
        184: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return o
            })), n.d(t, "a", (function() {
                return u
            }));
            var a = n(2),
                i = n.n(a),
                r = n(14),
                s = n(179),
                o = window.RH.switchNetwork,
                u = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a, r) {
                        var s;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, window.RH.getWallet().request({
                                        method: "wallet_watchAsset",
                                        params: {
                                            type: "ERC20",
                                            options: {
                                                address: t,
                                                symbol: n,
                                                decimals: a,
                                                image: r
                                            }
                                        }
                                    });
                                case 2:
                                    return s = e.sent, e.abrupt("return", s);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a, i) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        185: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            })), n.d(t, "b", (function() {
                return l
            }));
            var a = n(25),
                i = n(0),
                r = n.n(i),
                s = n(8),
                o = n(6),
                u = n(4),
                c = "IS_DARK",
                p = r.a.createContext({
                    isDark: null,
                    toggleTheme: function() {
                        return null
                    }
                }),
                l = function(e) {
                    var t = e.children,
                        n = Object(i.useState)((function() {
                            var e = localStorage.getItem(c);
                            return !e || JSON.parse(e)
                        })),
                        r = Object(a.a)(n, 2),
                        l = r[0],
                        d = r[1];
                    return Object(u.jsx)(p.Provider, {
                        value: {
                            isDark: l,
                            toggleTheme: function() {
                                d((function(e) {
                                    return localStorage.setItem(c, JSON.stringify(!e)), !e
                                }))
                            }
                        },
                        children: Object(u.jsx)(s.b, {
                            theme: l ? o.X : o.Y,
                            children: t
                        })
                    })
                }
        },
        186: function(e, t, n) {
            "use strict";
            var a, i = n(26),
                r = n(8).e.div(a || (a = Object(i.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n  padding-left: 16px;\n  padding-right: 16px;\n\n  ", " {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                }));
            t.a = r
        },
        188: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return j
            }));
            var a = n(2),
                i = n.n(a),
                r = n(14),
                s = n(6),
                o = n(52),
                u = n(75),
                c = n(126),
                p = n(60),
                l = n(26),
                d = n(240),
                y = [{
                    id: "0",
                    type: "ifo",
                    title: "",
                    badge: "xx.svg"
                }],
                m = new Map;
            y.forEach((function(e) {
                m.set(e.id, e)
            }));
            var b, f = function(e) {
                    return e.type, e.description
                },
                h = Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_CHAIN_ID: String(window.ROBINHOOD_FARM.chainId),
                    REACT_APP_NODE_1: window.ROBINHOOD_FARM.rpcUrl,
                    REACT_APP_GRAPH_API_PROFILE: "",
                    REACT_APP_GRAPH_API_PREDICTION: "",
                    REACT_APP_SNAPSHOT_BASE_URL: "https://hub.snapshot.page",
                    REACT_APP_SNAPSHOT_VOTING_API: "",
                    REACT_APP_API_PROFILE: ""
                }).REACT_APP_SUBGRAPH_PROFILE,
                O = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Object(d.request)(h, Object(d.gql)(b || (b = Object(l.a)(['\n        {\n          user(id: "', '") {\n            points {\n              id\n              campaignId\n              points\n            }\n          }\n        }\n      '])), t.toLowerCase()));
                                case 3:
                                    return n = e.sent, e.abrupt("return", n.user.points);
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", null);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                k = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, O(t);
                                case 2:
                                    if (n = e.sent) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", []);
                                case 5:
                                    return e.abrupt("return", n.reduce((function(e, t) {
                                        var n, a = m.get(t.campaignId);
                                        return [].concat(Object(p.a)(e), [{
                                            id: t.campaignId,
                                            type: a.type,
                                            address: t.id,
                                            title: (n = a, n.type, n.title),
                                            description: f(a),
                                            badge: a.badge,
                                            points: Number(t.points)
                                        }])
                                    }), []));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                T = Object(o.c)({
                    name: "achievements",
                    initialState: {
                        data: []
                    },
                    reducers: {
                        addAchievement: function(e, t) {
                            e.data.push(t.payload)
                        },
                        addAchievements: function(e, t) {
                            e.data.concat(t.payload)
                        },
                        setAchievements: function(e, t) {
                            e.data = t.payload
                        },
                        clearAchievements: function(e) {
                            e.data = []
                        }
                    }
                }),
                v = T.actions,
                w = (v.addAchievement, v.addAchievements, v.setAchievements),
                j = (v.clearAchievements, function(e) {
                    return function() {
                        var t = Object(r.a)(i.a.mark((function t(n) {
                            var a, r;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, k(e);
                                    case 3:
                                        a = t.sent, n(w(a)), t.next = 12;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t.catch(0), console.error(t.t0), r = "Error fetching achievements", n(Object(c.b)({
                                            id: Object(u.kebabCase)(r),
                                            type: s.Z.DANGER,
                                            title: r
                                        }));
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 7]
                            ])
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                });
            t.a = T.reducer
        },
        189: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            })), n.d(t, "b", (function() {
                return p
            }));
            var a = n(60),
                i = n(25),
                r = n(0),
                s = n(75),
                o = n(6),
                u = n(4),
                c = Object(r.createContext)(void 0),
                p = function(e) {
                    var t = e.children,
                        n = Object(r.useState)([]),
                        p = Object(i.a)(n, 2),
                        l = p[0],
                        d = p[1],
                        y = Object(r.useCallback)((function(e) {
                            var t = e.title,
                                n = e.description,
                                i = e.type;
                            d((function(e) {
                                var r = Object(s.kebabCase)(t),
                                    o = e.filter((function(e) {
                                        return e.id !== r
                                    }));
                                return [{
                                    id: r,
                                    title: t,
                                    description: n,
                                    type: i
                                }].concat(Object(a.a)(o))
                            }))
                        }), [d]);
                    return Object(u.jsx)(c.Provider, {
                        value: {
                            toasts: l,
                            clear: function() {
                                return d([])
                            },
                            remove: function(e) {
                                d((function(t) {
                                    return t.filter((function(t) {
                                        return t.id !== e
                                    }))
                                }))
                            },
                            toastError: function(e, t) {
                                return y({
                                    title: e,
                                    description: t,
                                    type: o.Z.DANGER
                                })
                            },
                            toastInfo: function(e, t) {
                                return y({
                                    title: e,
                                    description: t,
                                    type: o.Z.INFO
                                })
                            },
                            toastSuccess: function(e, t) {
                                return y({
                                    title: e,
                                    description: t,
                                    type: o.Z.SUCCESS
                                })
                            },
                            toastWarning: function(e, t) {
                                return y({
                                    title: e,
                                    description: t,
                                    type: o.Z.WARNING
                                })
                            }
                        },
                        children: t
                    })
                }
        },
        191: function(e, t, n) {
            "use strict";
            var a = n(0),
                i = n(182);
            t.a = function() {
                var e = Object(a.useContext)(i.a);
                return {
                    fastRefresh: e.fast,
                    slowRefresh: e.slow
                }
            }
        },
        22: function(e,t){const c=window.ROBINHOOD_FARM;t.a=x=>x[c.chainId];t.b=()=>c.tokenAddress;t.e=()=>c.masterChefAddress;t.f=t.d=()=>c.multicallAddress;t.g=()=>c.tokens.weth?.address||'';t.c=()=>c.masterChefAddress;},
        237: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return a
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "d", (function() {
                return r
            })), n.d(t, "c", (function() {
                return s
            }));
            var a = function(e) {
                    var t, n = e.numberOfDays,
                        a = e.farmApy / 100,
                        i = n / 365,
                        r = 1e3 / e.tokenPrice,
                        s = r * Math.pow(1 + a / 365, 365 * i);
                    return t = s - r, Math.round(100 * t) / 100
                },
                i = function(e) {
                    return (e.amountEarned / e.amountInvested * 100).toFixed(2)
                },
                r = function(e) {
                    var t = e.numberOfDays,
                        n = e.farmApr,
                        a = e.tokenPrice,
                        i = e.roundingDecimals,
                        r = void 0 === i ? 2 : i,
                        s = e.compoundFrequency,
                        o = void 0 === s ? 1 : s,
                        u = e.performanceFee,
                        c = void 0 === u ? 0 : u,
                        p = 365 * o,
                        l = n / 100;
                    c && (l = (n - n / 100 * c) / 100);
                    var d = t / 365,
                        y = 1e3 / a,
                        m = y * Math.pow(1 + l / p, p * d);
                    return parseFloat((m - y).toFixed(r))
                },
                s = function(e) {
                    return e.amountEarned / e.amountInvested * 100
                }
        },
        243: function(e, t, n) {
            "use strict";
            var a = n(16),
                i = (n(0), n(6)),
                r = n(128),
                s = n(27),
                o = n(4);
            t.a = function(e) {
                var t = Object(s.b)().t,
                    n = Object(r.a)(),
                    u = n.login,
                    c = n.logout,
                    p = Object(i.eb)(u, c).onPresentConnectModal;
                return Object(o.jsx)(i.g, Object(a.a)(Object(a.a)({
                    variant: "tertiary",
                    onClick: p
                }, e), {}, {
                    children: t("Unlock Wallet")
                }))
            }
        },
        244: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return y
            })), n.d(t, "a", (function() {
                return m
            })), n.d(t, "c", (function() {
                return b
            }));
            var a = n(60),
                i = n(2),
                r = n.n(i),
                s = n(14),
                o = n(0),
                u = n(35),
                c = n(28),
                p = n(39),
                l = n(49),
                d = n(55),
                y = function(e) {
                    var t = Object(c.b)(),
                        n = Object(u.c)().account,
                        a = Object(d.b)();
                    return {
                        onReward: Object(o.useCallback)(Object(s.a)(r.a.mark((function i() {
                            var s;
                            return r.a.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return i.next = 2, Object(l.b)(a, e, n);
                                    case 2:
                                        return s = i.sent, t(Object(p.b)(n)), i.abrupt("return", s);
                                    case 5:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        }))), [n, t, e, a])
                    }
                },
                m = function(e) {
                    var t = Object(u.c)().account,
                        n = Object(d.b)();
                    return {
                        onReward: Object(o.useCallback)(Object(s.a)(r.a.mark((function i() {
                            var s;
                            return r.a.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return s = e.reduce((function(e, i) {
                                            return [].concat(Object(a.a)(e), [Object(l.b)(n, i, t)])
                                        }), []), i.abrupt("return", Promise.all(s));
                                    case 2:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        }))), [t, e, n])
                    }
                },
                b = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = Object(c.b)(),
                        a = Object(u.c)(),
                        i = a.account,
                        y = Object(d.c)(e),
                        m = Object(d.b)(),
                        b = Object(o.useCallback)(Object(s.a)(r.a.mark((function a() {
                            return r.a.wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        if (0 !== e) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.next = 3, Object(l.b)(m, 0, i);
                                    case 3:
                                        a.next = 12;
                                        break;
                                    case 5:
                                        if (!t) {
                                            a.next = 10;
                                            break
                                        }
                                        return a.next = 8, Object(l.h)(y, i);
                                    case 8:
                                        a.next = 12;
                                        break;
                                    case 10:
                                        return a.next = 12, Object(l.g)(y, i);
                                    case 12:
                                        n(Object(p.k)(e, i)), n(Object(p.j)(e, i));
                                    case 14:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        }))), [i, n, t, m, y, e]);
                    return {
                        onReward: b
                    }
                }
        },
        246: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return y
            })), n.d(t, "b", (function() {
                return m
            }));
            var a = n(2),
                i = n.n(a),
                r = n(14),
                s = n(0),
                o = n(35),
                u = (n(187), n(28)),
                c = n(58),
                p = n(39),
                l = n(49),
                d = n(55),
                y = function(e) {
                    var t = Object(u.b)(),
                        n = Object(o.c)().account,
                        a = Object(d.b)(),
                        y = Object(c.a)(),
                        m = y.toastError,
                        b = y.toastSuccess;
                    return {
                        onApprove: Object(s.useCallback)(Object(r.a)(i.a.mark((function r() {
                            var s;
                            return i.a.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return i.prev = 0, i.next = 3, Object(l.a)(e, a, n);
                                    case 3:
                                        return s = i.sent, t(Object(p.b)(n)), b("Success", "Got approval!"), i.abrupt("return", s);
                                    case 9:
                                        return i.prev = 9, i.t0 = i.catch(0), m("An error occurred.", "Did not get approval, please try again"), i.abrupt("return", !1);
                                    case 13:
                                    case "end":
                                        return i.stop()
                                }
                            }), r, null, [
                                [0, 9]
                            ])
                        }))), [n, t, e, a, m, b])
                    }
                },
                m = function(e, t) {
                    var n = Object(u.b)(),
                        a = Object(o.c)().account,
                        c = Object(d.c)(t);
                    return {
                        onApprove: Object(s.useCallback)(Object(r.a)(i.a.mark((function r() {
                            var s;
                            return i.a.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return i.prev = 0, i.next = 3, Object(l.a)(e, c, a);
                                    case 3:
                                        return s = i.sent, n(Object(p.i)(t, a)), i.abrupt("return", s);
                                    case 8:
                                        return i.prev = 8, i.t0 = i.catch(0), i.abrupt("return", !1);
                                    case 11:
                                    case "end":
                                        return i.stop()
                                }
                            }), r, null, [
                                [0, 8]
                            ])
                        }))), [a, n, e, c, t])
                    }
                }
        },
        247: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return m
            }));
            var a = n(2),
                i = n.n(a),
                r = n(14),
                s = n(0),
                o = n(35),
                u = n(28),
                c = n(58),
                p = n(39),
                l = n(49),
                d = n(55),
                y = n(127),
                m = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = Object(y.b)(),
                        a = Object(o.c)(),
                        u = a.account,
                        c = Object(d.b)(),
                        m = Object(d.c)(e),
                        b = Object(s.useCallback)(function() {
                            var a = Object(r.a)(i.a.mark((function a(r, s) {
                                var o, d, y;
                                return i.a.wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            if (0 !== e) {
                                                a.next = 7;
                                                break
                                            }
                                            return a.next = 3, Object(l.j)(c, 0, r, u);
                                        case 3:
                                            o = a.sent, console.info(o), a.next = 18;
                                            break;
                                        case 7:
                                            if (!t) {
                                                a.next = 14;
                                                break
                                            }
                                            return a.next = 10, Object(l.c)(m, u);
                                        case 10:
                                            d = a.sent, console.info(d), a.next = 18;
                                            break;
                                        case 14:
                                            return a.next = 16, Object(l.f)(m, r, s, u);
                                        case 16:
                                            y = a.sent, console.info(y);
                                        case 18:
                                            n(Object(p.l)(e, u)), n(Object(p.j)(e, u)), n(Object(p.k)(e, u));
                                        case 21:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })));
                            return function(e, t) {
                                return a.apply(this, arguments)
                            }
                        }(), [u, n, t, c, m, e]);
                    return {
                        onUnstake: b
                    }
                };
            t.a = function(e) {
                var t = Object(u.b)(),
                    n = Object(o.c)().account,
                    a = Object(d.b)(),
                    y = Object(c.a)(),
                    m = y.toastError,
                    b = y.toastSuccess,
                    f = Object(s.useCallback)(function() {
                        var s = Object(r.a)(i.a.mark((function r(s, o) {
                            var u;
                            return i.a.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return i.prev = 0, i.next = 3, Object(l.j)(a, e, s, n, o);
                                    case 3:
                                        u = i.sent, t(Object(p.b)(n)), console.info(u), b("Success", "Unstaking transaction confirmed"), i.next = 12;
                                        break;
                                    case 9:
                                        i.prev = 9, i.t0 = i.catch(0), m("An error occurred.", "Transaction unsuccessful, please try again");
                                    case 12:
                                    case "end":
                                        return i.stop()
                                }
                            }), r, null, [
                                [0, 9]
                            ])
                        })));
                        return function(e, t) {
                            return s.apply(this, arguments)
                        }
                    }(), [n, t, a, e, b, m]);
                return {
                    onUnstake: f
                }
            }
        },
        248: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a.a
            })), n.d(t, "b", (function() {
                return i.a
            }));
            var a = n(84),
                i = n(65),
                r = n(10),
                s = a.a.find((function(e) {
                    return 0 === e.pid
                }));
            s && s.lpSymbol, s && s.lpAddresses, r.a.forge, a.a.filter((function(e) {
                return e.isCommunity
            })).map((function(e) {
                return e.token.symbol
            }))
        },
        258: function(e, t, n) {
            "use strict";
            t.a = function(e) {
                return e >= 139 && e <= 250
            }
        },
        27: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return O
            })), n.d(t, "b", (function() {
                return k
            }));
            var a = n(2),
                i = n.n(a),
                r = n(14),
                s = n(16),
                o = n(25),
                u = n(0),
                c = n(67),
                p = n(393),
                l = "lydiafinance_language",
                d = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("".concat("", "/locales/").concat(t, ".json"));
                                case 2:
                                    return n = e.sent, e.next = 5, n.json();
                                case 5:
                                    return a = e.sent, e.abrupt("return", a);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                y = function() {
                    try {
                        return localStorage.getItem(l) || c.a.locale
                    } catch (e) {
                        return c.a.locale
                    }
                },
                m = n(4),
                b = {
                    isFetching: !0,
                    currentLanguage: c.a
                },
                f = new Map;
            f.set(c.a.locale, p);
            var h = Object(u.createContext)(void 0),
                O = function(e) {
                    var t = e.children,
                        n = Object(u.useState)((function() {
                            var e = y();
                            return Object(s.a)(Object(s.a)({}, b), {}, {
                                currentLanguage: c.c[e]
                            })
                        })),
                        a = Object(o.a)(n, 2),
                        p = a[0],
                        O = a[1],
                        k = p.currentLanguage;
                    Object(u.useEffect)((function() {
                        var e = function() {
                            var e = Object(r.a)(i.a.mark((function e() {
                                var t, n, a;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ((t = y()) === c.a.locale) {
                                                e.next = 7;
                                                break
                                            }
                                            return n = f.get(c.a.locale), e.next = 5, d(t);
                                        case 5:
                                            a = e.sent, f.set(t, Object(s.a)(Object(s.a)({}, n), a));
                                        case 7:
                                            O((function(e) {
                                                return Object(s.a)(Object(s.a)({}, e), {}, {
                                                    isFetching: !1
                                                })
                                            }));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [O]);
                    var T = function() {
                            var e = Object(r.a)(i.a.mark((function e(t) {
                                var n, a;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (f.has(t.locale)) {
                                                e.next = 11;
                                                break
                                            }
                                            return O((function(e) {
                                                return Object(s.a)(Object(s.a)({}, e), {}, {
                                                    isFetching: !0
                                                })
                                            })), e.next = 4, d(t.locale);
                                        case 4:
                                            n = e.sent, a = f.get(c.a.locale), f.set(t.locale, Object(s.a)(Object(s.a)({}, a), n)), localStorage.setItem(l, t.locale), O((function(e) {
                                                return Object(s.a)(Object(s.a)({}, e), {}, {
                                                    isFetching: !1,
                                                    currentLanguage: t
                                                })
                                            })), e.next = 13;
                                            break;
                                        case 11:
                                            localStorage.setItem(l, t.locale), O((function(e) {
                                                return Object(s.a)(Object(s.a)({}, e), {}, {
                                                    isFetching: !1,
                                                    currentLanguage: t
                                                })
                                            }));
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        v = Object(u.useCallback)((function(e, t) {
                            var n = (f.has(k.locale) ? f.get(k.locale) : f.get(c.a.locale))[e] || e;
                            if (n.match(/%\S+?%/gm) && t) {
                                var a = n;
                                return Object.keys(t).forEach((function(e) {
                                    var n = new RegExp("%".concat(e, "%"), "g");
                                    a = a.replace(n, t[e].toString())
                                })), a
                            }
                            return n
                        }), [k]);
                    return Object(m.jsx)(h.Provider, {
                        value: Object(s.a)(Object(s.a)({}, p), {}, {
                            setLanguage: T,
                            t: v
                        }),
                        children: t
                    })
                },
                k = function() {
                    var e = Object(u.useContext)(h);
                    if (void 0 === e) throw new Error("Language context is undefined");
                    return e
                }
        },
        30: function(e, t, n) {
            "use strict";
            var a, i, r, s;
            n.d(t, "c", (function() {
                    return i
                })), n.d(t, "b", (function() {
                    return r
                })), n.d(t, "a", (function() {
                    return s
                })),
                function(e) {
                    e.poolBasic = "poolBasic", e.poolUnlimited = "poolUnlimited"
                }(a || (a = {})),
                function(e) {
                    e.AI = "AI", e.APE = "APE", e.CASHCAT = "CASHCAT", e.CBBTC = "CBBTC", e.FORGE = "FORGE", e.LIT = "LIT", e.PENDLE = "PENDLE", e.PENGU = "PENGU", e.PONS = "PONS", e.SUSHI = "SUSHI", e.U = "U", e.USDE = "USDE", e.USDG = "USDG", e.UUSD = "UUSD", e.VIRTUAL = "VIRTUAL", e.WETH = "WETH"
                }(i || (i = {})),
                function(e) {
                    e.COMMUNITY = "Community", e.CORE = "Core", e.NETWORK = "Robinhood Chain"
                }(r || (r = {})),
                function(e) {
                    e.LYDIA = "lydia"
                }(s || (s = {}))
        },
        36: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return s
            })), n.d(t, "b", (function() {
                return o
            })), n.d(t, "c", (function() {
                return u
            })), n.d(t, "f", (function() {
                return c
            })), n.d(t, "d", (function() {
                return p
            })), n.d(t, "a", (function() {
                return l
            }));
            var a = n(13),
                i = n.n(a),
                r = n(43),
                s = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
                    return new i.a(e).times(r.a.pow(t))
                },
                o = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
                    return new i.a(e).dividedBy(r.a.pow(t))
                },
                u = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
                    return o(e, t).toNumber()
                },
                c = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return e.dividedBy(r.a.pow(t)).toFixed(n)
                },
                p = function(e) {
                    var t = e > .001 ? 4 : 9;
                    return e < 1e-5 && e > 0 ? e.toExponential(2).split("e")[0].toLocaleString() : e.toLocaleString(void 0, {
                        maximumFractionDigits: e > 1 ? 2 : t
                    })
                },
                l = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
                        a = {
                            minimumFractionDigits: t,
                            maximumFractionDigits: n
                        };
                    return e.toLocaleString(void 0, a)
                }
        },
        371: function(e, t, n) {
            "use strict";
            var a = n(25),
                i = n(16),
                r = n(147),
                s = n.n(r),
                o = n(0),
                u = {
                    hydrate: s.a,
                    dehydrate: s.a
                };
            t.a = function(e, t) {
                var n = Object(i.a)(Object(i.a)({}, u), t),
                    r = n.localStorageKey,
                    s = n.hydrate,
                    c = n.dehydrate,
                    p = Object(o.useState)((function() {
                        try {
                            var t = localStorage.getItem(r);
                            return t ? s(JSON.parse(t)) : e
                        } catch (n) {
                            return e
                        }
                    })),
                    l = Object(a.a)(p, 2),
                    d = l[0],
                    y = l[1];
                return Object(o.useEffect)((function() {
                    localStorage.setItem(r, JSON.stringify(c(d)))
                }), [d, r, c]), [d, y]
            }
        },
        372: function(e, t, n) {
            "use strict";
            var a, i = n(26),
                r = n(8).e.div(a || (a = Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"])));
            t.a = r
        },
        376: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return b
            }));
            var a, i, r = n(16),
                s = n(397),
                o = n(26),
                u = (n(0), n(8)),
                c = n(6),
                p = n(186),
                l = n(4),
                d = ["background", "children"],
                y = Object(u.e)(c.f)(a || (a = Object(o.a)(["\n  background: ", ";\n"])), (function(e) {
                    var t = e.theme;
                    return e.background || t.colors.gradients.cardHeader
                })),
                m = Object(u.e)(p.a)(i || (i = Object(o.a)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n"]))),
                b = function(e) {
                    var t = e.background,
                        n = e.children,
                        a = Object(s.a)(e, d);
                    return Object(l.jsx)(y, Object(r.a)(Object(r.a)({
                        background: t
                    }, a), {}, {
                        children: Object(l.jsx)(m, {
                            children: n
                        })
                    }))
                }
        },
        385: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"_baseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyBurnCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBunnyId","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"getBunnyName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBunnyNameOfTokenId","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"string","name":"_tokenURI","type":"string"},{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"string","name":"_name","type":"string"}],"name":"setBunnyName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        386: function(e) {
            e.exports = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
        },
        387: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"contract IERC20","name":"_offeringToken","type":"address"},{"internalType":"uint256","name":"_startTimestamp","type":"uint256"},{"internalType":"uint256","name":"_endTimestamp","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountTokens","type":"uint256"}],"name":"AdminTokenRecovery","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountLP","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountOfferingToken","type":"uint256"}],"name":"AdminWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"pid","type":"uint8"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"offeringAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"excessAmount","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"pid","type":"uint8"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"startTimestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTimestamp","type":"uint256"}],"name":"NewStartAndEndTimestamps","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"offeringAmountPool","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"raisingAmountPool","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"pid","type":"uint8"}],"name":"PoolParametersSet","type":"event"},{"inputs":[],"name":"campaignId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint8","name":"_pid","type":"uint8"}],"name":"depositPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lpAmount","type":"uint256"},{"internalType":"uint256","name":"_offerAmount","type":"uint256"}],"name":"finalWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"}],"name":"harvestPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberPools","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"recoverWrongTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_offeringAmountPool","type":"uint256"},{"internalType":"uint256","name":"_raisingAmountPool","type":"uint256"},{"internalType":"uint256","name":"_limitPerUserInLP","type":"uint256"},{"internalType":"bool","name":"_hasTax","type":"bool"},{"internalType":"uint8","name":"_pid","type":"uint8"}],"name":"setPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTimestamp","type":"uint256"},{"internalType":"uint256","name":"_endTimestamp","type":"uint256"}],"name":"updateStartAndEndTimestamps","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"viewPoolInformation","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"viewPoolTaxRateOverflow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint8[]","name":"_pids","type":"uint8[]"}],"name":"viewUserAllocationPools","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint8[]","name":"_pids","type":"uint8[]"}],"name":"viewUserInfo","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint8[]","name":"_pids","type":"uint8[]"}],"name":"viewUserOfferingAndRefundingAmountsForPools","outputs":[{"internalType":"uint256[3][]","name":"","type":"uint256[3][]"}],"stateMutability":"view","type":"function"}]')
        },
        388: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"contract IBEP20","name":"_offeringToken","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"},{"internalType":"uint256","name":"_offeringAmount","type":"uint256"},{"internalType":"uint256","name":"_raisingAmount","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"offeringAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"excessAmount","type":"uint256"}],"name":"Harvest","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"addressList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lpAmount","type":"uint256"},{"internalType":"uint256","name":"_offerAmount","type":"uint256"}],"name":"finalWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getOfferingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getRefundingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"hasHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raisingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"}]')
        },
        389: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"contract IBEP20","name":"_offeringToken","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"},{"internalType":"uint256","name":"_offeringAmount","type":"uint256"},{"internalType":"uint256","name":"_raisingAmount","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"offeringAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"excessAmount","type":"uint256"}],"name":"Harvest","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"addressList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lpAmount","type":"uint256"},{"internalType":"uint256","name":"_offerAmount","type":"uint256"}],"name":"finalWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getOfferingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getRefundingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"hasHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raisingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"}]')
        },
        39: function(e, t, n) {
            "use strict";
            var a = n(146);
            n.d(t, "c", (function() {
                return a.c
            })), n.d(t, "b", (function() {
                return a.b
            }));
            var i = n(126);
            n.d(t, "a", (function() {
                return i.a
            })), n.d(t, "g", (function() {
                return i.c
            })), n.d(t, "f", (function() {
                return i.b
            }));
            var r = n(89);
            n.d(t, "d", (function() {
                return r.b
            })), n.d(t, "e", (function() {
                return r.c
            })), n.d(t, "i", (function() {
                return r.d
            })), n.d(t, "j", (function() {
                return r.e
            })), n.d(t, "k", (function() {
                return r.f
            })), n.d(t, "l", (function() {
                return r.g
            }));
            var s = n(176);
            n.d(t, "h", (function() {
                return s.b
            }))
        },
        390: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_lp","type":"address"},{"internalType":"contract IBEP20","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"},{"internalType":"address","name":"_wavax","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"limitAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accLydPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_blacklistAddress","type":"address"}],"name":"removeBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_blacklistAddress","type":"address"}],"name":"setBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setLimitAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"bool","name":"inBlackList","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        },
        391: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"contract IERC20","name":"_receiptToken","type":"address"},{"internalType":"contract IMasterChef","name":"_masterchef","type":"address"},{"internalType":"address","name":"_admin","type":"address"},{"internalType":"address","name":"_treasury","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastDepositedTime","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"performanceFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"callFee","type":"uint256"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"MAX_CALL_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PERFORMANCE_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_WITHDRAW_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_WITHDRAW_FEE_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"available","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateHarvestLydRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calculateTotalPendingLydRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"callFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"inCaseTokensGetStuck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastHarvestedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterchef","outputs":[{"internalType":"contract IMasterChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"performanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"receiptToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_admin","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_callFee","type":"uint256"}],"name":"setCallFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_performanceFee","type":"uint256"}],"name":"setPerformanceFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasury","type":"address"}],"name":"setTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawFee","type":"uint256"}],"name":"setWithdrawFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawFeePeriod","type":"uint256"}],"name":"setWithdrawFeePeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"sharesOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"lastDepositedTime","type":"uint256"},{"internalType":"uint256","name":"lydAtLastUserAction","type":"uint256"},{"internalType":"uint256","name":"lastUserActionTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawFeePeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')
        },
        392: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"_name","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"_approved","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"implementsERC721","outputs":[{"name":"_implementsERC721","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"_totalSupply","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"_tokenId","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenMetadata","outputs":[{"name":"_infoUrl","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"_balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_approvedAddress","type":"address"},{"name":"_metadata","type":"string"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"_symbol","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numTokensTotal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"getOwnerTokens","outputs":[{"name":"_tokenIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]')
        },
        393: function(e) {
            e.exports = JSON.parse('{"Farm":"Farm","Staking":"Staking","Electrum Pool":"Electrum Pool","Exchange":"Exchange","Docs":"Docs","Voting":"Voting","Lottery":"Lottery","Unlock Wallet":"Unlock Wallet","Your %asset% Balance":"Your %asset% Balance","Total %asset% Supply":"Total %asset% Supply","LOCKED":"LOCKED","Pending harvest":"Pending harvest","New rewards per block":"New rewards per block","Total FORGE burned since launch":"Total FORGE burned since launch","See the Kitchen":"See the Kitchen","Telegram":"Telegram","Blog":"Blog","Github":"Github","Twitter":"Twitter","Deposit":"Deposit","Earn":"Earn","Stake FLIP tokens to stack FORGE":"Stake LP tokens to stack FORGE","You can swap back anytime":"You can swap back anytime","%asset% Earned":"%asset% Earned","Tokens Staked":"Tokens Staked","Every time you stake and unstake FORGE tokens, the contract will automagically harvest FORGE rewards for you!":"Every time you stake and unstake FORGE tokens, the contract will automagically harvest FORGE rewards for you!","XVS Tokens Earned":"XVS Tokens Earned","Rewards will be calculated per block and total rewards will be distributed automatically at the end of each project\u2019s farming period.":"Rewards will be calculated per block and total rewards will be distributed automatically at the end of each project\u2019s farming period.","Pool":"Pool","Coming soon":"Coming soon","APY":"APY","Total Liquidity":"Total Liquidity","FORGE price":"FORGE price","%asset% Tokens Earned":"%asset% Tokens Earned","%num% blocks until farming ends":"%num% blocks until farming ends","Coming soon...":"Coming soon...","Your Stake":"Your Stake","Farming starts in %num% Blocks":"Farming starts in %num% Blocks","Finished":"Finished","Farming ends in %num% Blocks":"Farming ends in %num% Blocks","Project Site":"Project Site","You can unstake at any time.":"You can unstake at any time.","Rewards are calculated per block.":"Rewards are calculated per block.","Total":"Total","End":"End","View project site":"View project site","Your Project? \ud83d\udc40":"Your Project? \ud83d\udc40","Create a pool for your token":"Create a pool for your token","Apply now":"Apply now","Round 1: BUYING":"Round 1: BUYING","%num% FORGE":"%num% FORGE","Spend FORGE to buy tickets, contributing to the lottery pot. Ticket purchases end approx. 30 minutes before lottery. Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their positions! Good luck!":"Spend FORGE to buy tickets, contributing to the lottery pot. Ticket purchases end approx. 30 minutes before lottery. Win prizes if 1, 2, 3, or 4 of your ticket numbers match the winning numbers and their positions! Good luck!","Your total tickets for this round":"Your total tickets for this round","Buy ticket":"Buy ticket","View your tickets":"View your tickets","Approx. time left to buy tickets":"Approx. time left to buy tickets","My Tickets (Total: %TICKETS%)":"My Tickets (Total: %TICKETS%)","Close":"Close","Latest Winning Numbers":"Latest Winning Numbers","Tickets matching 4 numbers:":"Tickets matching 4 numbers:","Tickets matching 3 numbers:":"Tickets matching 3 numbers:","Tickets matching 2 numbers:":"Tickets matching 2 numbers:","Export recent winning numbers":"Export recent winning numbers","Enter amount of tickets to buy":"Enter amount of tickets to buy","Max":"Max","%num% FORGE Available":"%num% FORGE Available","Your amount must be a multiple of 10 FORGE":"Your amount must be a multiple of 10 FORGE","1 Ticket = 10 FORGE":"1 Ticket = 10 FORGE","You will spend: %num% FORGE":"You will spend: %num% FORGE","Cancel":"Cancel","Confirm":"Confirm","Warning":"Warning","Lottery ticket purchases are final.":"Lottery ticket purchases are final.","Your FORGE will not be returned to you after you spend it to buy tickets.":"Your FORGE will not be returned to you after you spend it to buy tickets.","Tickets are only valid for one lottery draw, and will be burned after the draw.":"Tickets are only valid for one lottery draw, and will be burned after the draw.","Buying tickets does not guarantee you will win anything. Please only participate once you understand the risks.":"Buying tickets does not guarantee you will win anything. Please only participate once you understand the risks.","I understand":"I understand","Ticket purchases are final. Your FORGE cannot be returned to you after buying tickets.":"Ticket purchases are final. Your FORGE cannot be returned to you after buying tickets.","Claim prizes":"Claim prizes","FORGE prizes to be claimed":"FORGE prizes to be claimed","Round 2: CLAIMING":"Round 2: CLAIMING","Pending Confirmation":"Pending Confirmation","Approx. time before next lottery start":"Approx. time before next lottery start","Approve FORGE":"Approve FORGE","IFO: Intitial Farm Offerings":"IFO: Initial Farm Offerings","Buy new tokens with a brand new token sale model.":"Buy new tokens with a brand new token sale model.","You\u2019ll pay for the new tokens using FORGE-AVAX LP tokens, which means you need to stake equal amounts of FORGE and AVAX in a liquidity pool to take part.":"You\u2019ll pay for the new tokens using FORGE-AVAX LP tokens, which means you need to stake equal amounts of FORGE and AVAX in a liquidity pool to take part.","Get FORGE-AVAX LP >":"Get FORGE-AVAX LP >","The project gets the AVAX, LydiaFinance burns the FORGE.":"The project gets the AVAX, LydiaFinance burns the FORGE.","You get the tokens.":"You get the tokens.","Want to launch your own IFO?":"Want to launch your own IFO?","Launch your project with LydiaFinance, Avalanche most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on AVAX.":"Launch your project with LydiaFinance, Avalanche most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on AVAX.","Apply to launch":"Apply to launch","Community":"Community","Core":"Core","Available":"Available","My Wallet":"My Wallet","Sign out":"Sign out","Harvest all (%count%)":"Harvest all (%count%)","FORGE Stats":"FORGE Stats","Total FORGE Supply":"Total FORGE Supply","Total FORGE Burned":"Total FORGE Burned","New FORGE/block":"New FORGE/block","Farms & Staking":"Farms & Staking","FORGE to Harvest":"FORGE to Harvest","FORGE in Wallet":"FORGE in Wallet","Collecting FORGE":"Collecting FORGE","Your Lottery Winnings":"Your Lottery Winnings","FORGE to Collect":"FORGE to Collect","Total jackpot this round":"Total jackpot this round","Collect Winnings":"Collect Winnings","Buy Tickets":"Buy Tickets","Harvest":"Harvest","Approve":"Approve","Select":"Select","Winning Numbers This Round":"Winning Numbers This Round","Staking Pool":"Staking Pool","LydiaFinance":"LydiaFinance","The #1 AMM and yield farm on Avalanche.":"The #1 AMM and yield farm on Avalanche.","Stake FORGE to earn new tokens.":"Stake FORGE to earn new tokens.","Launch Time":"Launch Time","For Sale":"For Sale","FORGE to burn (USD)":"FORGE to burn (USD)","Unstake":"Unstake","\u2b50\ufe0f Every time you stake and unstake LP tokens, the contract will automagically harvest FORGE rewards for you!":"\u2b50\ufe0f Every time you stake and unstake LP tokens, the contract will automagically harvest FORGE rewards for you!","How to take part":"How to take part","Before Sale":"Before Sale","Buy FORGE and AVAX tokens":"Buy FORGE and AVAX tokens","Get FORGE-AVAX LP tokens by adding FORGE and AVAX liquidity":"Get FORGE-AVAX LP tokens by adding FORGE and AVAX liquidity","During Sale":"During Sale","While the sale is live, commit your FORGE-LP tokens to buy the IFO tokens":"While the sale is live, commit your FORGE-LP tokens to buy the IFO tokens","After Sale":"After Sale","Claim the tokens you bought, along with any unspent funds.":"Claim the tokens you bought, along with any unspent funds.","Done!":"Done!","Read more":"Read more","Connect":"Connect","Trade in for FORGE, or keep for your collection!":"Trade in for FORGE, or keep for your collection!","Register your interest in winning an NFT below.":"Register your interest in winning an NFT below.","Register for a chance to win":"Register for a chance to win","Learn more":"Learn more","Trade in NFT":"Trade in NFT","Trade in":"Trade in","You will receive":"You will receive","When you trade in this NFT to receive FORGE, you will lose access to it forever!":"When you trade in this NFT to receive FORGE, you will lose access to it forever!","Claim NFT":"Claim NFT","How it works":"How it works","Winners will be able to claim an NFT on this page once the claiming period starts.":"Winners will be able to claim an NFT on this page once the claiming period starts.","If you\u2019re not selected, you won\u2019t be able to claim. Better luck next time!":"If you\u2019re not selected, you won\u2019t be able to claim. Better luck next time!","Winners can trade in their NFTs for a FORGE value until the expiry date written below. If you don\'t trade in your NFT by then, don\u2019t worry: you\u2019ll still keep it in your wallet!":"Winners can trade in their NFTs for a FORGE value until the expiry date written below. If you don\'t trade in your NFT by then, don\u2019t worry: you\u2019ll still keep it in your wallet!","How are winners selected?":"How are winners selected?","Winners are selected at random! Good luck!":"Winners are selected at random! Good luck!","Value if traded in":"Value if traded in","Number minted":"Number minted","Number burned":"Number burned","Claim this NFT":"Claim this NFT","Trade in for FORGE":"Trade in for FORGE","Loading\u2026":"Loading\u2026","Details":"Details","You won!":"You won!","Claim an NFT from the options below!":"Claim an NFT from the options below!","Can be traded until":"Can be traded until","Wallet Disconnected":"Wallet Disconnected","Connect to see if you have won an NFT!":"Connect to see if you have won an NFT!","Home":"Home","Trade":"Trade","Farms":"Farms","Pools":"Pools","NFT":"NFT","Info":"Info","IFO":"IFO","More":"More","Liquidity":"Liquidity","Overview":"Overview","Token":"Token","Pairs":"Pairs","Accounts":"Accounts","Stake LP tokens to earn FORGE":"Stake LP tokens to earn FORGE","Active":"Active","Inactive":"Inactive","Dual":"Dual","Compound":"Compound","Unstake %asset%":"Unstake %asset%","The FORGE Lottery":"The FORGE Lottery","Buy tickets with FORGE":"Buy tickets with FORGE","Win if 2, 3 or 4 of your ticket numbers match!":"Win if 2, 3 or 4 of your ticket numbers match!","%time% Until lottery":"%time% Until lottery draw","Next draw":"Next draw","Past draws":"Past draws","Round %num%":"Round %num%","Total Pot":"Total Pot","Your tickets for this round":"Your tickets for this round","Sorry, no prizes to collect":"Sorry, no prizes to collect","In Wallet":"In Wallet","Loading...":"Loading...","Next IFO":"Next IFO","Past IFOs":"Past IFOs","APR":"APR","Select lottery number:":"Select lottery number:","Search":"Search","History":"History","Pool Size":"Pool Size","Burned":"Burned","Prize Pot":"Prize Pot","Winners":"Winners","No. Matched":"No. Matched","Approve Contract":"Approve Contract","%asset% staked":"%asset% staked","Total Value Locked":"Total Value Locked","Across all LPs and Electrum Pools":"Across all LPs and Electrum Pools","Your wallet":"Your wallet","Logout":"Logout","Profile Setup":"Profile Setup","Show off your stats and collectibles with your unique profile.":"Show off your stats and collectibles with your unique profile.","Total cost: 10 FORGE":"Total cost: 5 FORGE","Get Starter Collectible":"Get Starter Collectible","Set Profile Picture":"Set Profile Picture","Join Team":"Join Team","Set Name":"Set Name","Step 1":"Step 1","Every profile starts by making a \\"starter\\" collectible (NFT).":"Every profile starts by making a \\"starter\\" collectible (NFT).","This starter will aslo become your first profile picture.":"This starter will also become your first profile picture.","You can change your profile pic later if you get another approved Lydia Collectible,":"You can change your profile pic later if you get another approved Lydia Collectible,","Choose your Starter!":"Choose your Starter!","Choose wisely: you can only ever make one starter collectible!":"Choose wisely: you can only ever make one starter collectible!","Cost: 5 FORGE":"Cost: 5 FORGE","Next Step":"Next Step","Approving":"Approving","Confirming":"Confirming","Approved":"Approved","Confirmed":"Confirmed","Insufficient FORGE balance":"Insufficient FORGE balance","Step 2":"Step 2","Choose collectible":"Choose collectible","Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.":"Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.","Only approved Lydia Collectibles can be used.":"Only approved Lydia Collectibles can be used.","Allow collectible to be locked":"Allow collectible to be locked","The collectible you\'ve chosen will be locked in a smart contract while it\'s being used as your profile picture. ":"The collectible you\'ve chosen will be locked in a smart contract while it\'s being used as your profile picture. ","Don\'t worry - you\'ll be able to get it back at any time.":"Don\'t worry - you\'ll be able to get it back at any time.","Step 3":"Step 3","Join a Team":"Join a Team","It won\'t be possible to undo the choice you make for the foreseeable future!":"It won\'t be possible to undo the choice you make for the foreseeable future!","There\'s currently no big difference between teams, and no benefit of joining one team over another for now.":"There\'s currently no big difference between teams, and no benefit of joining one team over another for now.","So pick whichever you like!":"So pick whichever you like!","%count% Members":"%count% Members","Step 4":"Step 4","This name will be shown in team leaderboards and search results as long as your profile is active.":"This name will be shown in team leaderboards and search results as long as your profile is active.","Your name must be at least 3 and at most 15 standards letters and numbers long.":"Your name must be at least 3 and at most 15 standards letters and numbers long.","Complete Profile":"Complete Profile","Maximum length: 15 characters":"Maximum length: 15 characters","Minimum length: 3 characters":"Minimum length: 3 characters","No spaces or special characters":"No spaces or special characters","Submitting NFT to contract and confirming User Name and Team":"Submitting NFT to contract and confirming User Name and Team","Oops!":"Oops!","We couldn\'t find any Lydia Collectibles in your wallet.":"We couldn\'t find any Lydia Collectibles in your wallet.","You need a Lydia Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\'ll need to get it back or acquire a new one somehow. You can\'t make a new starter with this wallet address.":"You need a Lydia Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\'ll need to get it back or acquire a new one somehow. You can\'t make a new starter with this wallet address.","ROI":"ROI","Timeframe":"Timeframe","FORGE per $1000":"FORGE per $1000","Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.":"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.","You can\'t change this once you click Confirm.":"You can\'t change this once you click Confirm.","Until ticket sale":"Until ticket sale","To burn:":"To burn:","On sale soon":"On sale soon","Teams Overview":"Teams Overview","Teams":"Teams","See More":"See More","Team Achievements":"Team Achievements","Team Points":"Team Points","Active Members":"Active Members","Set up now":"Set up now","You haven\'t set up your profile yet!":"You haven\'t set up your profile yet!","You can do this at any time by clicking on your profile picture in the menu":"You can do this at any time by clicking on your profile picture in the menu","Collect":"Collect","Compounding":"Compounding","Buy FORGE":"Buy FORGE","Get LP tokens":"Get LP tokens","Show":"Show","Hide":"Hide","Stake LP tokens":"Stake LP tokens","Stake":"Stake","Earned":"Earned","Staked":"Staked","The lottery number you provided does not exist":"The lottery number you provided does not exist","Error fetching data":"Error fetching data","Unlock wallet to access lottery":"Unlock wallet to access lottery","Teams & Profiles":"Teams & Profiles","Earn more points for completing larger quests!":"Earn more points for completing larger quests!","Collecting points for these tasks makes them available again.":"Collecting points for these tasks makes them available again.","Earn points by completing regular tasks!":"Earn points by completing regular tasks!","Task Center":"Task Center","Achievements":"Achievements","Enter your name...":"Enter your name...","I understand that people can view my wallet if they know my username":"I understand that people can view my wallet if they know my username","A minimum of %num% FORGE is required":"A minimum of %num% FORGE is required","Only reuse a name from other social media if you\'re OK with people viewing your wallet. You can\'t change your name once you click Confirm.":"Only reuse a name from other social media if you\'re OK with people viewing your wallet. You can\'t change your name once you click Confirm.","Please connect your wallet to continue":"Please connect your wallet to continue","Public Profile":"Public Profile","Show off your stats and collectibles with your unique profile. Team features will be revealed soon!":"Show off your stats and collectibles with your unique profile. Team features will be revealed soon!","Points":"Points","Set Your Name":"Set Your Name","Step %num%":"Step %num%","See the list >":"See the list >","Staked only":"Staked only","getLP":"get %symbol%","Balance":"Balance","Oops, page not found.":"Oops, page not found.","Back Home":"Back Home","Unstake tokens":"Unstake tokens","Live":"Live","Start":"Start","Connect wallet to view":"Connect wallet to view","Sorry, you needed to register during the \u201centry\u201d period!":"Sorry, you needed to register during the \u201centry\u201d period!","Check your Rank":"Check your Rank","You\u2019re not participating this time.":"You\u2019re not participating this time.","Rank in team":"Rank in team","Your volume":"Your volume","Since start":"Since start","Your Score":"Your Score","Enable":"Enable","Enabling":"Enabling","%amount% FORGE":"%amount% FORGE","IFO Shopper: %title%":"IFO Shopper: %title%","%num% of total":"%num% of total","All estimated rates take into account this pool\'s %fee%% performance fee":"All estimated rates take into account this pool\'s %fee%% performance fee","Sorry, you didn\u2019t contribute enough LP tokens to meet the minimum threshold. You didn\u2019t buy anything in this sale, but you can still reclaim your LP tokens.":"Sorry, you didn\u2019t contribute enough LP tokens to meet the minimum threshold. You didn\u2019t buy anything in this sale, but you can still reclaim your LP tokens.","Only applies within 5 days of staking. Unstaking after 5 days will not include a fee. Timer resets every time you stake new FORGE in the pool.":"Only applies within 5 days of staking. Unstaking after 5 days will not include a fee. Timer resets every time you stake new FORGE in the pool.","unstaking fee until":"unstaking fee until","unstaking fee if withdrawn within 120h":"unstaking fee if withdrawn within 120h","Unstaking fee: %fee%%":"Unstaking fee: %fee%%","Performance Fee":"Performance Fee","Compound: collect and restake FORGE into pool.":"Compound: collect and restake FORGE into pool.","Harvest: collect FORGE and send to wallet":"Harvest: collect FORGE and send to wallet","%position% Entered":"%position% Entered","Sort by":"Sort by","Expired":"Expired","Calculating":"Calculating","Next":"Next","Later":"Later","Up":"Up","Down":"Down","%multiplier% Payout":"%multiplier% Payout","Enter %direction%":"Enter %direction%","Prize Pool:":"Prize Pool:","Charts":"Charts","Your History":"Your History","All":"All","Collected":"Collected","Uncollected":"Uncollected","Round":"Round","Your Result":"Your Result","Your direction":"Your direction","Your position":"Your position","Lose":"Lose","Entry starts":"Entry starts","Locked Price":"Locked Price","Last Price":"Last Price","Closed Price":"Closed Price","Win":"Win","Opening Block":"Opening Block","Closing Block":"Closing Block","Total Value Locked (TVL)":"Total Value Locked (TVL)","Automatic restaking":"Automatic restaking","Manual FORGE":"Manual FORGE","Auto FORGE":"Auto FORGE","Auto FORGE Bounty":"Auto FORGE Bounty","Claim":"Claim","Any funds you stake in this pool will be automagically harvested and restaked (compounded) for you.":"Any funds you stake in this pool will be automagically harvested and restaked (compounded) for you.","Total staked":"Total staked","Simply stake tokens to earn.":"Simply stake tokens to earn.","High APR, low risk.":"High APR, low risk.","Stake tokens to earn FORGE.":"Stake tokens to earn FORGE.","Basic Sale":"Basic Sale","Every person can only commit a limited amount, but may expect a higher return per token committed.":"Every person can only commit a limited amount, but may expect a higher return per token committed.","Unlimited Sale":"Unlimited Sale","No limits on the amount you can commit. Additional fee applies when claiming.":"No limits on the amount you can commit. Additional fee applies when claiming.","You didn\u2019t participate in this sale!":"You didn\u2019t participate in this sale!","Max. LP token entry":"Max. LP token entry","How to Take Part":"How to Take Part","Activate your Profile":"Activate your Profile","You\u2019ll need an active LydiaFinance Profile to take part in an IFO!":"You\u2019ll need an active LydiaFinance Profile to take part in an IFO!","Profile Active!":"Profile Active!","Get FORGE-AVAX LP Tokens":"Get FORGE-AVAX LP Tokens","Stake FORGE and AVAX in the liquidity pool to get LP tokens.":"Stake FORGE and AVAX in the liquidity pool to get LP tokens.","You\u2019ll spend them to buy IFO sale tokens.":"You\u2019ll spend them to buy IFO sale tokens.","Commit LP Tokens":"Commit LP Tokens","When the IFO sales are live, you can \u201ccommit\u201d your LP tokens to buy the tokens being sold.":"We recommend committing to the Basic Sale first, but you can do both if you want.","Claim your tokens and achievement":"Claim your tokens and achievement","After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent FORGE-AVAX LP tokens will be returned to your wallet.":"After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent FORGE-AVAX LP tokens will be returned to your wallet.","This round\'s closing transaction has been submitted to the blockchain, and is waiting to be confirmed.":"This round\'s closing transaction has been submitted to the blockchain, and is waiting to be confirmed.","No prediction history available":"No prediction history available","If you are sure you should see history here, make sure you\u2019re connected to the correct wallet and try again.":"If you are sure you should see history here, make sure you\u2019re connected to the correct wallet and try again.","Last price from Chainlink Oracle":"Last price from Chainlink Oracle","Charts are provided for reference only, and do not reflect rounds\u2019 final outcome.":"Charts are provided for reference only, and do not reflect rounds\u2019 final outcome.","Please refer to the prices shown on the cards for the final outcome.":"Please refer to the prices shown on the cards for the final outcome."}')
        },
        43: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "a", (function() {
                return s
            }));
            var a = n(13),
                i = n.n(a),
                r = new i.a(0),
                s = (new i.a(1), new i.a(9), new i.a(10))
        },
        44: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return F
            })), n.d(t, "d", (function() {
                return E
            })), n.d(t, "b", (function() {
                return R
            })), n.d(t, "c", (function() {
                return B
            })), n.d(t, "f", (function() {
                return L
            })), n.d(t, "l", (function() {
                return _
            })), n.d(t, "g", (function() {
                return D
            })), n.d(t, "h", (function() {
                return H
            })), n.d(t, "j", (function() {
                return N
            })), n.d(t, "m", (function() {
                return U
            })), n.d(t, "a", (function() {
                return W
            })), n.d(t, "k", (function() {
                return Y
            })), n.d(t, "i", (function() {
                return q
            }));
            var a = n(2),
                i = n.n(a),
                r = n(14),
                s = n(0),
                o = n(13),
                u = n.n(o),
                c = n(75),
                p = (n(35), n(6)),
                l = n(28),
                d = (n(127), n(76)),
                y = n(191),
                m = n(43),
                b = n(36),
                f = n(54),
                h = n(30),
                O = Object(f.a)({}, h.a.LYDIA, {
                    address: {
                        [window.ROBINHOOD_FARM.chainId]: ""
                    },
                    identifierKey: "image"
                }),
                k = [],
                T = n(60),
                v = n(16),
                w = n(25),
                j = n(52),
                x = n(22),
                g = n(61),
                M = function(e) {
                    var t = Object.values(O).find((function(t) {
                        return Object(x.a)(t.address) === e
                    }));
                    return t ? t.identifierKey : null
                },
                P = function(e) {
                    return e.startsWith("ipfs://") ? "".concat("https://gateway.pinata.cloud", "/ipfs/").concat(e.slice(6)) : e
                },
                A = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        var a, r, s, o;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, a = Object(g.b)(t), e.next = 4, a.methods.tokenURI(n).call();
                                case 4:
                                    return r = e.sent, e.next = 7, fetch(P(r));
                                case 7:
                                    if ((s = e.sent).ok) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 10:
                                    return e.next = 12, s.json();
                                case 12:
                                    return o = e.sent, e.abrupt("return", o);
                                case 16:
                                    return e.prev = 16, e.t0 = e.catch(0), console.error("getTokenUriData", e.t0), e.abrupt("return", null);
                                case 20:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 16]
                        ])
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                S = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        var a, r;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, A(t, n);
                                case 2:
                                    if (a = e.sent, r = M(t), a) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 6:
                                    if (r) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 8:
                                    if (a[r]) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 10:
                                    return e.abrupt("return", k.find((function(e) {
                                        return a[r].includes(e.identifier)
                                    })));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = Object(j.b)("collectibles/fetchWalletNfts", function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object.keys(O).map(function() {
                                        var e = Object(r.a)(i.a.mark((function e(n) {
                                            var a, s, o, u, c, p, l, d, y;
                                            return i.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return a = O[n].address, s = Object(x.a)(a), o = Object(g.b)(s), u = function() {
                                                            var e = Object(r.a)(i.a.mark((function e(n) {
                                                                var a, r;
                                                                return i.a.wrap((function(e) {
                                                                    for (;;) switch (e.prev = e.next) {
                                                                        case 0:
                                                                            return e.prev = 0, e.next = 3, o.methods.tokenOfOwnerByIndex(t, n).call();
                                                                        case 3:
                                                                            return a = e.sent, e.next = 6, S(s, a);
                                                                        case 6:
                                                                            return r = e.sent, e.abrupt("return", [Number(a), r.identifier]);
                                                                        case 10:
                                                                            return e.prev = 10, e.t0 = e.catch(0), console.error("getTokenIdAndData", e.t0), e.abrupt("return", null);
                                                                        case 14:
                                                                        case "end":
                                                                            return e.stop()
                                                                    }
                                                                }), e, null, [
                                                                    [0, 10]
                                                                ])
                                                            })));
                                                            return function(t) {
                                                                return e.apply(this, arguments)
                                                            }
                                                        }(), e.next = 6, o.methods.balanceOf(t).call();
                                                    case 6:
                                                        if (c = e.sent, 0 !== (p = Number(c))) {
                                                            e.next = 10;
                                                            break
                                                        }
                                                        return e.abrupt("return", []);
                                                    case 10:
                                                        for (l = [], d = 0; d < p; d++) l.push(u(d));
                                                        return e.next = 14, Promise.all(l);
                                                    case 14:
                                                        return y = e.sent, e.abrupt("return", y);
                                                    case 16:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()), e.next = 3, Promise.all(n);
                                case 3:
                                    return a = e.sent, e.abrupt("return", a.flat());
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                I = (Object(j.c)({
                    name: "collectibles",
                    initialState: {
                        isInitialized: !1,
                        isLoading: !0,
                        data: {}
                    },
                    reducers: {},
                    extraReducers: function(e) {
                        e.addCase(C.pending, (function(e) {
                            e.isLoading = !0
                        })), e.addCase(C.fulfilled, (function(e, t) {
                            e.isLoading = !1, e.isInitialized = !0, e.data = t.payload.reduce((function(e, t) {
                                if (!t) return e;
                                var n = t,
                                    a = Object(w.a)(n, 2),
                                    i = a[0],
                                    r = a[1];
                                return Object(v.a)(Object(v.a)({}, e), {}, Object(f.a)({}, r, e[r] ? [].concat(Object(T.a)(e[r]), [i]) : [i]))
                            }), {})
                        }))
                    }
                }).reducer, n(39)),
                F = (n(188), function() {
                    var e = Object(l.b)(),
                        t = Object(y.a)().slowRefresh;
                    Object(s.useEffect)((function() {
                        e(Object(I.c)()), e(Object(I.d)())
                    }), [e, t]), Object(s.useEffect)(function(){const refresh=function(){e(Object(I.c)());e(Object(I.d)());};window.addEventListener('rh:transaction',refresh);return function(){window.removeEventListener('rh:transaction',refresh);};},[e]), Object(s.useEffect)((function() {
                        var t = Object(d.b)(),
                            n = setInterval(Object(r.a)(i.a.mark((function n() {
                                var a;
                                return i.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, t.eth.getBlockNumber();
                                        case 2:
                                            a = n.sent, e(Object(I.h)(a));
                                        case 4:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            }))), 6e3);
                        return function() {
                            return clearInterval(n)
                        }
                    }), [e])
                }),
                E = function() {
                    return Object(l.c)((function(e) {
                        return e.farms
                    }))
                },
                R = function(e) {
                    return Object(l.c)((function(t) {
                        return t.farms.data.find((function(t) {
                            return t.pid === e
                        }))
                    }))
                },
                B = function(e) {
                    var t = R(e) || {};
                    return {
                        allowance: t.userData ? new u.a(t.userData.allowance) : new u.a(0),
                        tokenBalance: t.userData ? new u.a(t.userData.tokenBalance) : new u.a(0),
                        stakedBalance: t.userData ? new u.a(t.userData.stakedBalance) : new u.a(0),
                        earnings: t.userData ? new u.a(t.userData.earnings) : new u.a(0)
                    }
                },
                L = function(e) {
                    var t = Object(y.a)().fastRefresh,
                        n = Object(l.b)();
                    return Object(s.useEffect)((function() {
                        e && n(Object(I.e)(e))
                    }), [e, n, t]), Object(l.c)((function(e) {
                        return e.pools.data
                    }))
                },
                _ = function() {
                    var e = Object(l.b)();
                    return Object(s.useMemo)((function() {
                        var t = function(t) {
                            return e(Object(I.f)(t))
                        };
                        return {
                            toastError: function(e, n) {
                                return t({
                                    id: Object(c.kebabCase)(e),
                                    type: p.Z.DANGER,
                                    title: e,
                                    description: n
                                })
                            },
                            toastInfo: function(e, n) {
                                return t({
                                    id: Object(c.kebabCase)(e),
                                    type: p.Z.INFO,
                                    title: e,
                                    description: n
                                })
                            },
                            toastSuccess: function(e, n) {
                                return t({
                                    id: Object(c.kebabCase)(e),
                                    type: p.Z.SUCCESS,
                                    title: e,
                                    description: n
                                })
                            },
                            toastWarning: function(e, n) {
                                return t({
                                    id: Object(c.kebabCase)(e),
                                    type: p.Z.WARNING,
                                    title: e,
                                    description: n
                                })
                            },
                            push: t,
                            remove: function(t) {
                                return e(Object(I.g)(t))
                            },
                            clear: function() {
                                return e(Object(I.a)())
                            }
                        }
                    }), [e])
                },
                D = function() {
                    Object(l.c)(function(state){return state.farms.data}); var e = {tokenPriceVsQuote:window.RH.prices.weth};
                    return e.tokenPriceVsQuote ? new u.a(e.tokenPriceVsQuote) : m.b
                },
                H = function() {
                    Object(l.c)(function(state){return state.farms.data}); var e = {tokenPriceVsQuote:window.RH.prices.forge};
                    return e.tokenPriceVsQuote ? new u.a(e.tokenPriceVsQuote) : m.b
                },
                N = function() {
                    Object(l.c)(function(state){return state.farms.data}); var e = {tokenPriceVsQuote:window.RH.prices.weth};
                    return e.tokenPriceVsQuote ? new u.a(e.tokenPriceVsQuote) : m.b
                },
                U = function(){var farms=Object(l.c)(e=>e.farms.data);return farms.reduce((sum,f)=>sum.plus(f.totalValueUsd||0),new u.a(0));},
                W = function() {
                    return Object(l.c)((function(e) {
                        return e.block
                    }))
                },
                Y = function() {
                    return Math.round((new Date).getTime() / 1e3)
                },
                q = function(e) {
                    var t = R(e) || {};
                    return t.tokenPriceVsQuote ? new u.a(t.tokenPriceVsQuote) : m.b
                }
        },
        454: function(e, t) {},
        477: function(e, t) {},
        479: function(e, t) {},
        49: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            })), n.d(t, "i", (function() {
                return p
            })), n.d(t, "d", (function() {
                return l
            })), n.d(t, "e", (function() {
                return d
            })), n.d(t, "j", (function() {
                return y
            })), n.d(t, "f", (function() {
                return m
            })), n.d(t, "c", (function() {
                return b
            })), n.d(t, "b", (function() {
                return f
            })), n.d(t, "g", (function() {
                return h
            })), n.d(t, "h", (function() {
                return O
            }));
            var a = n(2),
                i = n.n(a),
                r = n(14),
                s = n(13),
                o = n.n(s),
                u = n(187),
                c = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.approve(n.options.address, u.a.constants.MaxUint256).send({
                                        from: a
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a, r) {
                        var s, u = arguments;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return s = u.length > 4 && void 0 !== u[4] ? u[4] : 18, e.abrupt("return", t.methods.deposit(n, new o.a(a).times(new o.a(10).pow(s)).toString()).send({
                                        from: r
                                    }).on("transactionHash", (function(e) {
                                        return e.transactionHash
                                    })));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a, i) {
                        return e.apply(this, arguments)
                    }
                }(),
                l = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        var a, r, s = arguments;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = s.length > 2 && void 0 !== s[2] ? s[2] : 18, r = s.length > 3 ? s[3] : void 0, e.abrupt("return", t.methods.deposit(new o.a(n).times(new o.a(10).pow(a)).toString()).send({
                                        from: r,
                                        
                                    }).on("transactionHash", (function(e) {
                                        return e.transactionHash
                                    })));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                d = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.deposit().send({
                                        from: a,
                                        
                                        value: new o.a(n).times(new o.a(10).pow(18)).toString()
                                    }).on("transactionHash", (function(e) {
                                        return e.transactionHash
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                y = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a, r) {
                        var s, u = arguments;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return s = u.length > 4 && void 0 !== u[4] ? u[4] : 18, e.abrupt("return", t.methods.withdraw(n, new o.a(a).times(new o.a(10).pow(s)).toString()).send({
                                        from: r
                                    }).on("transactionHash", (function(e) {
                                        return e.transactionHash
                                    })));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a, i) {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function(t,n,a,r){return t.methods.withdraw(new o.a(n).times(new o.a(10).pow(a===undefined?18:a)).toString()).send({from:r});},
                b = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.emergencyWithdraw().send({
                                        from: n
                                    }).on("transactionHash", (function(e) {
                                        return e.transactionHash
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                f = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.deposit(n, "0").send({
                                        from: a
                                    }).on("transactionHash", (function(e) {
                                        return e.transactionHash
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                h = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.deposit("0").send({
                                        from: n,
                                        
                                    }).on("transactionHash", (function(e) {
                                        return e.transactionHash
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                O = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", t.methods.deposit().send({
                                        from: n,
                                        
                                        value: new o.a(0)
                                    }).on("transactionHash", (function(e) {
                                        return e.transactionHash
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        55: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            })), n.d(t, "b", (function() {
                return o
            })), n.d(t, "c", (function() {
                return u
            }));
            var a = n(0),
                i = n(77),
                r = n(61),
                s = function(e) {
                    var t = Object(i.a)();
                    return Object(a.useMemo)((function() {
                        return Object(r.a)(e, t)
                    }), [e, t])
                },
                o = function() {
                    var e = Object(i.a)();
                    return Object(a.useMemo)((function() {
                        return Object(r.i)(e)
                    }), [e])
                },
                u = function(e) {
                    var t = Object(i.a)();
                    return Object(a.useMemo)((function() {
                        return Object(r.j)(e, t)
                    }), [e, t])
                }
        },
        555: function(e, t) {},
        557: function(e, t) {},
        57: function(e, t, n) {
            "use strict";
            var a = n(2),
                i = n.n(a),
                r = n(14),
                s = n(794),
                o = n(76),
                u = n(180),
                c = n(22),
                p = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        var a, r, p, l, d, y, m;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Object(o.b)(), r = new a.eth.Contract(u, Object(c.f)()), p = new s.b(t), l = n.map((function(e) {
                                        return [e.address.toLowerCase(), p.encodeFunctionData(e.name, e.params)]
                                    })), e.next = 6, r.methods.aggregate(l).call();
                                case 6:
                                    return d = e.sent, y = d.returnData, m = y.map((function(e, t) {
                                        return p.decodeFunctionResult(n[t].name, e)
                                    })), e.abrupt("return", m);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
            t.a = p
        },
        58: function(e, t, n) {
            "use strict";
            var a = n(0),
                i = n(189);
            t.a = function() {
                var e = Object(a.useContext)(i.a);
                if (void 0 === e) throw new Error("Toasts context undefined");
                return e
            }
        },
        590: function(e, t) {},
        595: function(e, t) {},
        597: function(e, t) {},
        604: function(e, t) {},
        61: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return k
            })), n.d(t, "c", (function() {
                return T
            })), n.d(t, "d", (function() {
                return v
            })), n.d(t, "e", (function() {
                return w
            })), n.d(t, "j", (function() {
                return j
            })), n.d(t, "f", (function() {
                return x
            })), n.d(t, "h", (function() {
                return g
            })), n.d(t, "i", (function() {
                return M
            })), n.d(t, "g", (function() {
                return P
            })), n.d(t, "b", (function() {
                return A
            }));
            var a = n(76),
                i = n(248),
                r = n(30),
                s = n(22),
                o = n(385),
                u = n(85),
                c = (n(386), n(181)),
                p = n(387),
                l = n(388),
                d = n(389),
                y = n(91),
                m = n(100),
                b = n(390),
                f = n(391),
                h = (n(180), n(392)),
                O = function(e, t, n) {
                    return window.RH.wrapContract(new(null !== n && void 0 !== n ? n : a.a).eth.Contract(e, t))
                },
                k = function(e, t) {
                    return O(u, e, t)
                },
                T = function(e, t) {
                    return O(d, e, t)
                },
                v = function(e, t) {
                    return O(l, e, t)
                },
                w = function(e, t) {
                    return O(p, e, t)
                },
                j = function(e, t) {
                    var n = i.b.find((function(t) {
                            return t.sousId === e
                        })),
                        a = n.poolCategory === r.b.ADA ? b : m;
                    return O(a, Object(s.a)(n.contractAddress), t)
                },
                x = function(e) {
                    return O(c, Object(s.b)(), e)
                },
                g = function(e) {
                    return O(o, Object(s.d)(), e)
                },
                M = function(e) {
                    return O(y, Object(s.e)(), e)
                },
                P = function(e) {
                    return O(f, Object(s.c)(), e)
                },
                A = function(e, t) {
                    return O(h, e, t)
                }
        },
        617: function(e, t) {},
        639: function(e, t) {},
        647: function(e, t) {},
        649: function(e, t) {},
        65: function(e,t){var c=window.ROBINHOOD_FARM,tokens=window.RH.tokens();t.a=c.vaults.map(v=>({...v,stakingToken:tokens[v.stakingToken],earningToken:tokens[v.earningToken],contractAddress:window.RH.chainKey(v.address),poolCategory:'Core',harvest:true,isFinished:false,tokenPerBlock:v.rewardPerSec||'0'}));},
        663: function(e, t) {},
        67: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "c", (function() {
                return i
            })), n.d(t, "b", (function() {
                return r
            }));
            var a = {
                    locale: "en-US",
                    language: "English",
                    code: "en"
                },
                i = {
                    "en-US": a
                },
                r = Object.values(i)
        },
        76: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return c
            }));
            var a = n(129),
                i = n.n(a),
                r = n(179),
                s = Object(r.a)(),
                o = new i.a.providers.HttpProvider(s, {
                    timeout: 1e4
                }),
                u = new i.a(o),
                c = function() {
                    return u
                };
            t.a = u
        },
        77: function(e, t, n) {
            "use strict";
            var a = n(25),
                i = n(0),
                r = n(129),
                s = n.n(r),
                o = n(35),
                u = n(76);
            t.a = function() {
                var e = Object(o.c)().library,
                    t = Object(i.useRef)(e),
                    n = Object(i.useState)(e ? new s.a(e) : Object(u.b)()),
                    r = Object(a.a)(n, 2),
                    c = r[0],
                    p = r[1];
                return Object(i.useEffect)((function() {
                    e !== t.current && (p(e ? new s.a(e) : Object(u.b)()), t.current = e)
                }), [e]), c
            }
        },
        792: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, i, r = n(0),
                s = n.n(r),
                o = n(82),
                u = n.n(o),
                c = n(26),
                p = n(45),
                l = n(6),
                d = n(58),
                y = n(13),
                m = n.n(y),
                b = n(128),
                f = function() {
                    var e = Object(b.a)().login;
                    Object(r.useEffect)((function() {
                        var t = window.localStorage.getItem(l.W);
                        t && e(t)
                    }), [e])
                },
                h = n(44),
                O = n(8),
                //k = Object(O.c)(a || (a = Object(c.a)(["\n  * {\n    font-family: 'Kanit', sans-serif;\n  }\n  body {\n    background: linear-gradient(\n      10deg,\n      ", "\n      );\n      \n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"])), (function(e) {
                k = Object(O.c)(a || (a = Object(c.a)(["\n  * {\n    font-family: 'Kanit', sans-serif;\n  }\n  body {\n    background-image: url(\n '/images/bg2.jpg' \n);\nbackground-attachment: fixed;\n      \n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"])), (function(e) {
                var t = e.theme;
                    return t.isDark ? "rgb(98, 98, 71), rgb(96, 37, 36)" : "rgb(94,218,106), ".concat(t.colors.background)
                })),
                T = n(16),
                v = n(35),
                w = n(67),
                j = n(27),
                x = n(98),
                g = [{label:'Home',icon:'HomeIcon',href:'/'},{label:'Stock Staking',icon:'FarmIcon',href:'/stocks'},{label:'Token Staking',icon:'PoolIcon',href:'/pools'},...(window.ROBINHOOD_FARM.vaults.length?[{label:'Incentive Vaults',icon:'GroupsIcon',href:'/staking'}]:[]),...Object.entries(window.ROBINHOOD_FARM.links).filter(([k,v])=>v).map(([k,v])=>({label:k[0].toUpperCase()+k.slice(1),icon:'InfoIcon',href:v}))],
                M = n(4),
                P = function(e) {
                    var t = Object(v.c)().account,
                        n = Object(b.a)(),
                        a = n.login,
                        i = n.logout,
                        r = Object(j.b)(),
                        s = r.currentLanguage,
                        o = r.setLanguage,
                        u = Object(x.a)(),
                        c = u.isDark,
                        p = u.toggleTheme,
                        d = Object(h.h)();
                    return Object(M.jsx)(l.E, Object(T.a)({
                        account: t,
                        login: a,
                        logout: i,
                        isDark: c,
                        toggleTheme: p,
                        links: g,
                        currentLang: s.code,
                        langs: w.b,
                        setLang: o,
                        cakePriceUsd: d,
                        profile: null,
                        priceLink: window.ROBINHOOD_FARM.explorerUrl+'/address/'+window.ROBINHOOD_FARM.tokenAddress
                    }, e))
                },
                A = n(7),
                S = n(9),
                C = n(12),
                I = n(11),
                F = function(e) {
                    Object(C.a)(n, e);
                    var t = Object(I.a)(n);

                    function n(e) {
                        var a;
                        return Object(A.a)(this, n), (a = t.call(this, e)).state = {
                            hasError: !1
                        }, a
                    }
                    return Object(S.a)(n, [{
                        key: "componentDidCatch",
                        value: function(e) {
                            var t, n = "ChunkLoadError" === e.name,
                                a = "CSS_CHUNK_LOAD_FAILED" === e.code,
                                i = n || a,
                                r = !!(null === (t = window.history.state) || void 0 === t ? void 0 : t.isRecoveringFromChunkError);
                            if (i && !r) {
                                var s = Object(T.a)(Object(T.a)({}, window.history.state), {}, {
                                    isRecoveringFromChunkError: !0
                                });
                                return window.history.replaceState(s, ""), void window.location.reload()
                            }
                            throw e
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state.hasError,
                                t = this.props.fallback;
                            return e ? t : Object(M.jsx)(r.Suspense, Object(T.a)({}, this.props))
                        }
                    }], [{
                        key: "getDerivedStateFromError",
                        value: function() {
                            return {
                                hasError: !0
                            }
                        }
                    }]), n
                }(s.a.Component),
                E = function() {
                    var e = Object(d.a)(),
                        t = e.toasts,
                        n = e.remove;
                    return Object(M.jsx)(l.S, {
                        toasts: t,
                        onRemove: function(e) {
                            return n(e)
                        }
                    })
                },
                R = n(153),
                B = Object(O.e)(R.a)(i || (i = Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),
                L = function() {
                    return Object(M.jsx)(B, {
                        children: Object(M.jsx)(l.O, {})
                    })
                },
                _ = n(25),
                D = n(190),
                H = n.n(D),
                N = n(394),
                U = n.n(N),
                W = n(371),
                Y = n(372),
                q = n(376),
                V = n(243),
                J = n(43),
                z = n(36),
                Q = n(96),
                G = n(237),
                X = n(245),
                K = n.n(X),
                Z = function(e) {
                    var t = e.value,
                        n = e.fontSize,
                        a = e.color,
                        i = e.decimals,
                        s = e.isDisabled,
                        o = e.unit,
                        u = Object(r.useRef)(0);
                    return Object(r.useEffect)((function() {
                        u.current = t
                    }), [t]), Object(M.jsxs)(l.Q, {
                        bold: !0,
                        color: s ? "textDisabled" : a,
                        fontSize: n,
                        children: [Object(M.jsx)(K.a, {
                            start: u.current,
                            end: t,
                            decimals: i,
                            duration: 1,
                            separator: ","
                        }), t && o && Object(M.jsx)("span", {
                            children: o
                        })]
                    })
                };
            Z.defaultProps = {
                fontSize: "32px",
                isDisabled: !1,
                color: "text",
                decimals: 3
            };
            var $, ee, te, ne, ae, ie, re, se, oe, ue, ce, pe = Z,
                le = n(30),
                de = function(e) {
                    var t, n = e.pool,
                        a = e.stakingTokenPrice,
                        i = e.isAutoVault,
                        r = void 0 !== i && i,
                        s = e.compoundFrequency,
                        o = void 0 === s ? 1 : s,
                        u = e.performanceFee,
                        c = void 0 === u ? 0 : u,
                        p = Object(j.b)().t,
                        d = n.stakingToken,
                        y = n.earningToken,
                        b = n.totalStaked,
                        f = n.isFinished,
                        O = n.tokenPerBlock,
                        k = n.correspondingFarmId,
                        T = n.usesCakeForPrice,
                        v = p(r ? "APY includes compounding, APR doesn\u2019t. This pool\u2019s FORGE is compounded automatically, so we show APY." : "This pool\u2019s rewards aren\u2019t compounded automatically, so we show APR"),
                        w = Object(l.db)(v, {
                            placement: "bottom-end"
                        }),
                        x = w.targetRef,
                        g = w.tooltip,
                        P = w.tooltipVisible,
                        A = Object(h.h)(),
                        S = Object(h.g)(),
                        C = Object(h.i)(k),
                        I = null === y || void 0 === y || null === (t = y.symbol) || void 0 === t ? void 0 : t.toUpperCase(),
                        F = C.times(S);
                    I === le.c.WADA ? F = S : T ? F = C.times(A) : I === le.c.SPELL && (F = C);
                    var E = F.toNumber(),
                        R = function(e, t, n, a) {
                            var i = new m.a(t).times(a).times(Q.f),
                                r = new m.a(e).times(n),
                                s = i.div(r).times(100);
                            return s.isNaN() || !s.isFinite() ? null : s.toNumber()
                        }(a, E, Object(z.c)(b, d.decimals), parseFloat(O)),
                        B = Math.round(E / 1e3) > 0 ? 4 : 2;
                    return Object(M.jsxs)(l.v, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [P && g, Object(M.jsxs)(l.U, {
                            ref: x,
                            children: [p(r ? "APY" : "APR"), ":"]
                        }), f || !R ? Object(M.jsx)(l.N, {
                            width: "82px",
                            height: "32px"
                        }) : Object(M.jsx)(l.v, {
                            alignItems: "center",
                            children: Object(M.jsx)(pe, {
                                fontSize: "16px",
                                isDisabled: f,
                                value: function() {
                                    if (r) {
                                        var e = 1e3 / E,
                                            t = Object(G.d)({
                                                numberOfDays: 365,
                                                farmApr: R,
                                                tokenPrice: E,
                                                roundingDecimals: B,
                                                compoundFrequency: o,
                                                performanceFee: c
                                            });
                                        return Object(G.c)({
                                            amountEarned: t,
                                            amountInvested: e
                                        })
                                    }
                                    return R
                                }(),
                                decimals: 2,
                                unit: "%",
                                bold: !0
                            })
                        })]
                    })
                },
                ye = Object(O.e)(l.k)($ || ($ = Object(c.a)(["\n  max-width: ", ";\n  margin: 0 8px 24px;\n  background: ", ";\n  border-radius: 32px;\n  display: flex;\n  color: ", ";\n  box-shadow: ", ";\n  flex-direction: column;\n  align-self: baseline;\n  position: relative;\n\n  ", " {\n    margin: 0 12px 46px;\n  }\n"])), (function(e) {
                    return "".concat(e.isHomeCard ? "100%" : "352px")
                }), (function(e) {
                    return e.theme.card.background
                }), (function(e) {
                    var t = e.isFinished;
                    return e.theme.colors[t ? "textDisabled" : "secondary"]
                }), (function(e) {
                    return e.isStaking ? "0px 0px 0px 2px #f9d92e;" : "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)"
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                me = n(22),
                be = n(184),
                fe = Object(O.e)(l.v)(ee || (ee = Object(c.a)(["\n  svg {\n    height: 14px;\n    width: 14px;\n  }\n"]))),
                he = function(e) {
                    var t, n = e.pool,
                        a = e.account,
                        i = e.performanceFee,
                        r = void 0 === i ? 0 : i,
                        s = e.isAutoVault,
                        o = void 0 !== s && s,
                        u = e.totalLydInVault,
                        c = Object(j.b)().t,
                        p = Object(h.k)(),
                        d = n.stakingToken,
                        y = n.earningToken,
                        m = n.totalStaked,
                        b = n.startBlock,
                        f = n.endBlock,
                        O = n.isFinished,
                        k = n.contractAddress,
                        T = y.address ? Object(me.a)(y.address) : "",
                        v = Object(me.a)(k),
                        w = "".concat(Q.d, "/images/tokens/").concat(y.symbol.toLowerCase(), ".png"),
                        x = !!(null === (t = window.RH.getWallet()) || void 0 === t ? void 0 : t.isMetaMask),
                        g = Boolean(!O && b && f),
                        P = Math.max(b - p, 0),
                        A = P / 60 / 60,
                        S = Math.max(f - p, 0),
                        C = S / 60 / 60,
                        I = 0 === P && S > 0,
                        F = Object(l.db)(c("Subtracted automatically from each yield harvest and burned."), {
                            placement: "bottom-end"
                        }),
                        E = F.targetRef,
                        R = F.tooltip,
                        B = F.tooltipVisible;
                    return Object(M.jsxs)(fe, {
                        flexDirection: "column",
                        children: [Object(M.jsxs)(l.v, {
                            mb: "2px",
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [Object(M.jsx)(l.Q, {
                                small: !0,
                                children: c("Total staked:")
                            }), Object(M.jsx)(l.v, {
                                alignItems: "flex-start",
                                children: m ? Object(M.jsxs)(M.Fragment, {
                                    children: [Object(M.jsx)(pe, {
                                        fontSize: "14px",
                                        value: o ? Object(z.c)(u, d.decimals) : Object(z.c)(m, d.decimals)
                                    }), Object(M.jsx)(l.Q, {
                                        ml: "4px",
                                        fontSize: "14px",
                                        children: d.symbol
                                    })]
                                }) : Object(M.jsx)(l.N, {
                                    width: "90px",
                                    height: "21px"
                                })
                            })]
                        }), g && Object(M.jsxs)(l.v, {
                            mb: "2px",
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [Object(M.jsxs)(l.Q, {
                                small: !0,
                                children: [c(I ? "End" : "Start"), ":"]
                            }), Object(M.jsxs)(l.v, {
                                alignItems: "center",
                                children: [S || P ? Object(M.jsx)(pe, {
                                    color: "text",
                                    fontSize: "14px",
                                    value: I ? C : A,
                                    decimals: 0
                                }) : Object(M.jsx)(l.N, {
                                    width: "54px",
                                    height: "21px"
                                }), Object(M.jsx)(l.Q, {
                                    ml: "4px",
                                    color: "text",
                                    small: !0,
                                    children: c("hours")
                                }), Object(M.jsx)(l.R, {
                                    ml: "4px",
                                    color: "secondary"
                                })]
                            })]
                        }), o && Object(M.jsxs)(l.v, {
                            mb: "2px",
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [B && R, Object(M.jsx)(l.U, {
                                ref: E,
                                small: !0,
                                children: c("Performance Fee")
                            }), Object(M.jsx)(l.v, {
                                alignItems: "center",
                                children: Object(M.jsxs)(l.Q, {
                                    ml: "4px",
                                    small: !0,
                                    children: [r / 100, "%"]
                                })
                            })]
                        }), Object(M.jsx)(l.v, {
                            mb: "2px",
                            justifyContent: "flex-end",
                            children: Object(M.jsx)(l.C, {
                                color: "text",
                                bold: !1,
                                small: !0,
                                href: y.projectLink,
                                children: c("View Project Site")
                            })
                        }), v && Object(M.jsx)(l.v, {
                            mb: "2px",
                            justifyContent: "flex-end",
                            children: Object(M.jsx)(l.C, {
                                color: "text",
                                bold: !1,
                                small: !0,
                                href: "".concat(Q.b, "/address/").concat(v),
                                children: c("View Contract")
                            })
                        }), a && x && T && Object(M.jsx)(l.v, {
                            justifyContent: "flex-end",
                            children: Object(M.jsxs)(l.g, {
                                variant: "text",
                                p: "0",
                                height: "auto",
                                onClick: function() {
                                    return Object(be.a)(T, y.symbol, y.decimals, w)
                                },
                                children: [Object(M.jsx)(l.Q, {
                                    color: "text",
                                    fontSize: "14px",
                                    children: "Add to Metamask"
                                }), Object(M.jsx)(l.F, {
                                    ml: "4px"
                                })]
                            })
                        })]
                    })
                },
                Oe = s.a.memo(he),
                ke = Object(O.e)(l.v)(te || (te = Object(c.a)(["\n  align-items: center;\n  justify-content: space-between;\n  button {\n    padding: 0;\n  }\n"]))),
                Te = function(e) {
                    var t = e.pool,
                        n = e.account,
                        a = e.performanceFee,
                        i = void 0 === a ? 0 : a,
                        s = e.isAutoVault,
                        o = void 0 !== s && s,
                        u = e.totalLydInVault,
                        c = Object(j.b)().t,
                        p = Object(r.useState)(!1),
                        d = Object(_.a)(p, 2),
                        y = d[0],
                        m = d[1];
                    return Object(M.jsxs)(l.m, {
                        children: [Object(M.jsxs)(ke, {
                            children: [Object(M.jsx)(l.v, {
                                alignItems: "center"
                            }), Object(M.jsx)(l.u, {
                                expanded: y,
                                onClick: function() {
                                    return m(!y)
                                },
                                children: c(y ? "Hide" : "Details")
                            })]
                        }), y && Object(M.jsx)(Oe, {
                            pool: t,
                            account: n,
                            performanceFee: i,
                            isAutoVault: o,
                            totalLydInVault: u
                        })]
                    })
                },
                ve = Object(O.e)(l.n)(ne || (ne = Object(c.a)(["\n  background: ", ";\n"])), (function(e) {
                    var t = e.isFinished,
                        n = e.background,
                        a = e.theme;
                    return t ? a.colors.backgroundAlt : a.colors.gradients[n]
                })),
                we = function(e) {
                    var t = e.earningTokenSymbol,
                        n = e.stakingTokenSymbol,
                        a = e.isFinished,
                        i = void 0 !== a && a,
                        r = e.isAutoVault,
                        s = void 0 !== r && r,
                        o = Object(j.b)().t,
                        u = s ? "lyd-lydvault.svg" : "".concat(t, ".png").toLocaleLowerCase(),
                        c = "FORGE" === t && "FORGE" === n,
                        p = c ? "bubblegum" : "cardHeader";
                    return Object(M.jsx)(ve, {
                        isFinished: i,
                        background: p,
                        children: Object(M.jsxs)(l.v, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            children: [Object(M.jsxs)(l.v, {
                                flexDirection: "column",
                                children: [Object(M.jsx)(l.w, {
                                    color: "text",
                                    scale: "lg",
                                    children: "".concat("".concat(o(s ? "Auto" : c ? "Manual" : "Earn")), " ").concat(t)
                                }), Object(M.jsx)(l.Q, {
                                    color: "text",
                                    children: s ? "".concat(o("Automatic restaking")) : c ? "".concat(o("Earn FORGE, stake FORGE")) : "".concat(o("Stake"), " ").concat(n)
                                })]
                            }), Object(M.jsx)(l.z, {
                                src: "/images/pools/".concat(u),
                                alt: t,
                                width: 64,
                                height: 64
                            })]
                        })
                    })
                },
                je = n(2),
                xe = n.n(je),
                ge = n(14),
                Me = n(246),
                Pe = n(55),
                Ae = function(e) {
                    var t = e.pool,
                        n = e.isLoading,
                        a = void 0 !== n && n,
                        i = t.sousId,
                        s = t.stakingToken,
                        o = t.earningToken,
                        u = t.isFinished,
                        c = Object(j.b)().t,
                        p = Object(Pe.a)(s.address ? Object(me.a)(s.address) : ""),
                        y = Object(r.useState)(!1),
                        m = Object(_.a)(y, 2),
                        b = m[0],
                        f = m[1],
                        h = Object(Me.b)(p, i).onApprove,
                        O = Object(d.a)(),
                        k = O.toastSuccess,
                        T = O.toastError,
                        v = Object(r.useCallback)(Object(ge.a)(xe.a.mark((function e() {
                            return xe.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, f(!0), e.next = 4, h();
                                    case 4:
                                        e.sent ? (k("".concat(c("Contract Enabled")), "".concat(c("You can now stake in the ".concat(o.symbol, " pool!")))), f(!1)) : (T("".concat(c("Error")), "".concat(c("Please try again. Confirm the transaction and make sure you are paying enough gas!"))), f(!1)), e.next = 12;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.error(e.t0), T("Error");
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        }))), [h, f, k, T, c, o]);
                    return Object(M.jsx)(M.Fragment, {
                        children: a ? Object(M.jsx)(l.N, {
                            width: "100%",
                            height: "52px"
                        }) : Object(M.jsx)(l.g, {
                            isLoading: b,
                            endIcon: b ? Object(M.jsx)(l.c, {
                                spin: !0,
                                color: "currentColor"
                            }) : null,
                            disabled: u || b,
                            onClick: v,
                            width: "100%",
                            children: c("Enable")
                        })
                    })
                },
                Se = Object(O.e)(l.B)(ae || (ae = Object(c.a)(["\n  width: 100%;\n"]))),
                Ce = function(e) {
                    var t = e.tokenSymbol,
                        n = e.onDismiss,
                        a = Object(j.b)().t,
                        i = Object(x.a)().theme;
                    return Object(M.jsxs)(l.H, {
                        title: "".concat(t, " ").concat(a("required")),
                        onDismiss: n,
                        headerBackground: i.colors.gradients.cardHeader,
                        children: [Object(M.jsx)(l.Q, {
                            color: "failure",
                            bold: !0,
                            children: a("Insufficient %tokensymbol% balance", {
                                tokensymbol: t
                            })
                        }), Object(M.jsx)(l.Q, {
                            mt: "24px",
                            children: a("You\u2019ll need %tokensymbol% to stake in this pool!", {
                                tokensymbol: t
                            })
                        }), Object(M.jsx)(l.Q, {
                            children: a("Buy some %tokensymbol%, or make sure your %tokensymbol% isn\u2019t in another staking pool.", {
                                tokensymbol: t
                            })
                        }), Object(M.jsxs)(l.g, {
                            mt: "24px",
                            as: "a",
                            external: !0,
                            href: Q.c,
                            children: [a("Buy"), " ", t]
                        }), Object(M.jsx)(Se, {
                            href: window.ROBINHOOD_FARM.links.swap||'#',
                            external: !0,
                            children: Object(M.jsxs)(l.g, {
                                variant: "secondary",
                                mt: "8px",
                                width: "100%",
                                children: [a("Locate Assets"), Object(M.jsx)(l.K, {
                                    color: "primary",
                                    ml: "4px"
                                })]
                            })
                        }), Object(M.jsx)(l.g, {
                            variant: "text",
                            onClick: n,
                            children: a("Close window")
                        })]
                    })
                },
                Ie = n(152),
                Fe = n(247),
                Ee = Object(O.e)(l.g)(ie || (ie = Object(c.a)(["\n  flex-grow: 1;\n"]))),
                Re = function(e) {
                    var t = e.children,
                        n = e.onClick;
                    return Object(M.jsx)(Ee, {
                        scale: "xs",
                        mx: "2px",
                        p: "4px 16px",
                        variant: "tertiary",
                        onClick: n,
                        children: t
                    })
                },
                Be = Object(O.e)(l.B)(re || (re = Object(c.a)(["\n  width: 100%;\n"]))),
                Le = function(e) {
                    var t = e.isBnbPool,
                        n = e.pool,
                        a = e.stakingMax,
                        i = e.stakingTokenPrice,
                        s = e.isRemovingStake,
                        o = void 0 !== s && s,
                        u = e.onDismiss,
                        c = n.sousId,
                        p = n.stakingToken,
                        y = n.earningToken,
                        b = Object(j.b)().t,
                        f = Object(x.a)().theme,
                        h = Object(Ie.b)(c, t).onStake,
                        O = Object(Fe.b)(c, n.enableEmergencyWithdraw).onUnstake,
                        k = Object(d.a)(),
                        T = k.toastSuccess,
                        v = k.toastError,
                        w = Object(r.useState)(!1),
                        g = Object(_.a)(w, 2),
                        P = g[0],
                        A = g[1],
                        S = Object(r.useState)(""),
                        C = Object(_.a)(S, 2),
                        I = C[0],
                        F = C[1],
                        E = Object(r.useState)(0),
                        R = Object(_.a)(E, 2),
                        B = (R[0], R[1]),
                        L = I && Object(z.a)(new m.a(I).times(i).toNumber()),
                        D = function(e) {
                            var t = a.dividedBy(100).multipliedBy(e),
                                n = Object(z.f)(t, p.decimals, p.decimals);
                            F(n), B(e)
                        },
                        H = function() {
                            var e = Object(ge.a)(xe.a.mark((function e() {
                                return xe.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (A(!0), !o) {
                                                e.next = 16;
                                                break
                                            }
                                            return e.prev = 2, e.next = 5, O(I, p.decimals);
                                        case 5:
                                            T("".concat(b("Unstaked"), "!"), b("Your ".concat(y.symbol, " earnings have also been harvested to your wallet!"))), A(!1), u(), e.next = 14;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(2), v(b("Canceled"), b("Please try again and confirm the transaction.")), A(!1);
                                        case 14:
                                            e.next = 28;
                                            break;
                                        case 16:
                                            return e.prev = 16, e.next = 19, h(I, p.decimals);
                                        case 19:
                                            T("".concat(b("Staked"), "!"), b("Your ".concat(p.symbol, " funds have been staked in the pool!"))), A(!1), u(), e.next = 28;
                                            break;
                                        case 24:
                                            e.prev = 24, e.t1 = e.catch(16), v(b("Canceled"), b(6 === c ? "You need to hold at least 2 FORGE in your wallet to stake in this vault." : "Please try again and confirm the transaction.")), A(!1);
                                        case 28:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 10],
                                    [16, 24]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(M.jsxs)(l.H, {
                        title: b(o ? "Unstake" : "Stake in Pool"),
                        onDismiss: u,
                        headerBackground: f.colors.gradients.cardHeader,
                        children: [Object(M.jsxs)(l.v, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: "8px",
                            children: [Object(M.jsxs)(l.Q, {
                                bold: !0,
                                children: [b(o ? "Unstake" : "Stake"), ":"]
                            }), Object(M.jsx)(l.v, {
                                alignItems: "center",
                                minWidth: "70px",
                                children: Object(M.jsx)(l.Q, {
                                    ml: "4px",
                                    bold: !0,
                                    children: p.symbol
                                })
                            })]
                        }), Object(M.jsx)(l.d, {
                            value: I,
                            onUserInput: function(e) {
                                if (e) {
                                    var t = Object(z.e)(new m.a(e), p.decimals),
                                        n = Math.floor(t.dividedBy(a).multipliedBy(100).toNumber());
                                    B(n > 100 ? 100 : n)
                                } else B(0);
                                F(e)
                            },
                            currencyValue: "~".concat(L || 0, " USD")
                        }), Object(M.jsxs)(l.Q, {
                            mt: "8px",
                            ml: "auto",
                            color: "textSubtle",
                            fontSize: "12px",
                            mb: "8px",
                            children: ["Balance: ", Object(z.f)(a, p.decimals)]
                        }), Object(M.jsxs)(l.v, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            mt: "8px",
                            children: [Object(M.jsx)(Re, {
                                onClick: function() {
                                    return D(25)
                                },
                                children: "25%"
                            }), Object(M.jsx)(Re, {
                                onClick: function() {
                                    return D(50)
                                },
                                children: "50%"
                            }), Object(M.jsx)(Re, {
                                onClick: function() {
                                    return D(75)
                                },
                                children: "75%"
                            }), Object(M.jsx)(Re, {
                                onClick: function() {
                                    return D(100)
                                },
                                children: "MAX"
                            })]
                        }), Object(M.jsx)(l.g, {
                            isLoading: P,
                            endIcon: P ? Object(M.jsx)(l.c, {
                                spin: !0,
                                color: "currentColor"
                            }) : null,
                            onClick: H,
                            disabled: !I || 0 === parseFloat(I),
                            mt: "24px",
                            children: b(P ? "Confirming" : "Confirm")
                        }), !o && Object(M.jsx)(Be, {
                            external: !0,
                            href: window.ROBINHOOD_FARM.links.swap||'#',
                            children: Object(M.jsxs)(l.g, {
                                width: "100%",
                                mt: "8px",
                                variant: "secondary",
                                children: [b("Get"), " ", p.symbol]
                            })
                        })]
                    })
                },
                _e = function(e) {
                    var t = e.pool,
                        n = e.stakingTokenBalance,
                        a = e.stakingTokenPrice,
                        i = e.stakedBalance,
                        r = e.isBnbPool,
                        s = e.isStaked,
                        o = e.isLoading,
                        u = void 0 !== o && o,
                        c = t.stakingToken,
                        p = t.earningToken,
                        d = t.stakingLimit,
                        y = t.isFinished,
                        b = Object(j.b)().t,
                        f = Object(z.e)(new m.a(d), p.decimals),
                        h = d && n.isGreaterThan(f) ? f : n,
                        O = Object(z.a)(Object(z.c)(i, c.decimals), 3, 3),
                        k = Object(z.a)(Object(z.c)(i.multipliedBy(a), c.decimals)),
                        T = Object(l.bb)(Object(M.jsx)(Ce, {
                            tokenSymbol: c.symbol
                        })),
                        v = Object(_.a)(T, 1)[0],
                        w = Object(l.bb)(Object(M.jsx)(Le, {
                            stakingMax: h,
                            isBnbPool: r,
                            pool: t,
                            stakingTokenPrice: a
                        })),
                        x = Object(_.a)(w, 1)[0],
                        g = Object(l.bb)(Object(M.jsx)(Le, {
                            stakingMax: i,
                            isBnbPool: r,
                            pool: t,
                            stakingTokenPrice: a,
                            isRemovingStake: !0
                        })),
                        P = Object(_.a)(g, 1)[0];
                    return Object(M.jsx)(l.v, {
                        flexDirection: "column",
                        children: u ? Object(M.jsx)(l.N, {
                            width: "100%",
                            height: "52px"
                        }) : s ? Object(M.jsxs)(l.v, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [Object(M.jsxs)(l.v, {
                                flexDirection: "column",
                                children: [Object(M.jsx)(l.w, {
                                    children: O
                                }), Object(M.jsx)(l.Q, {
                                    fontSize: "12px",
                                    color: "textSubtle",
                                    children: "~".concat(k || 0, " USD")
                                })]
                            }), Object(M.jsxs)(l.v, {
                                children: [Object(M.jsx)(l.y, {
                                    variant: "secondary",
                                    onClick: P,
                                    mr: "6px",
                                    children: Object(M.jsx)(l.G, {
                                        color: "secondary",
                                        width: "24px"
                                    })
                                }), Object(M.jsx)(l.y, {
                                    variant: "secondary",
                                    onClick: n.gt(0) ? x : v,
                                    disabled: y,
                                    children: Object(M.jsx)(l.a, {
                                        color: "secondary",
                                        width: "24px",
                                        height: "24px"
                                    })
                                })]
                            })]
                        }) : Object(M.jsx)(l.g, {
                            disabled: y,
                            onClick: n.gt(0) ? x : v,
                            children: b("Stake")
                        })
                    })
                },
                De = n(244),
                He = function(e) {
                    var t = e.formattedBalance,
                        n = e.fullBalance,
                        a = e.earningToken,
                        i = e.earningsDollarValue,
                        s = e.sousId,
                        o = e.isBnbPool,
                        u = e.isCompoundPool,
                        c = void 0 !== u && u,
                        p = e.onDismiss,
                        y = Object(j.b)().t,
                        m = Object(x.a)().theme,
                        b = Object(d.a)(),
                        f = b.toastSuccess,
                        h = b.toastError,
                        O = Object(De.c)(s, o).onReward,
                        k = Object(Ie.b)(s, o).onStake,
                        T = Object(r.useState)(!1),
                        v = Object(_.a)(T, 2),
                        w = v[0],
                        g = v[1],
                        P = Object(r.useState)(c),
                        A = Object(_.a)(P, 2),
                        S = A[0],
                        C = A[1],
                        I = Object(l.db)(Object(M.jsxs)(M.Fragment, {
                            children: [Object(M.jsx)(l.Q, {
                                mb: "12px",
                                children: y("Compound: collect and restake FORGE into pool.")
                            }), Object(M.jsx)(l.Q, {
                                children: y("Harvest: collect FORGE and send to wallet")
                            })]
                        }), {
                            placement: "bottom-end",
                            tooltipOffset: [20, 10]
                        }),
                        F = I.targetRef,
                        E = I.tooltip,
                        R = I.tooltipVisible,
                        B = function() {
                            var e = Object(ge.a)(xe.a.mark((function e() {
                                return xe.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (g(!0), !S) {
                                                e.next = 16;
                                                break
                                            }
                                            return e.prev = 2, e.next = 5, k(n, a.decimals);
                                        case 5:
                                            f("".concat(y("Compounded"), "!"), y("Your ".concat(a.symbol, " earnings have been re-invested into the pool!"))), g(!1), p(), e.next = 14;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(2), h(y("Canceled"), y("Please try again and confirm the transaction.")), g(!1);
                                        case 14:
                                            e.next = 28;
                                            break;
                                        case 16:
                                            return e.prev = 16, e.next = 19, O();
                                        case 19:
                                            f("".concat(y("Harvested"), "!"), y("Your ".concat(a.symbol, " earnings have been sent to your wallet!"))), g(!1), p(), e.next = 28;
                                            break;
                                        case 24:
                                            e.prev = 24, e.t1 = e.catch(16), h(y("Canceled"), y("Please try again and confirm the transaction.")), g(!1);
                                        case 28:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 10],
                                    [16, 24]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(M.jsxs)(l.H, {
                        title: "".concat(a.symbol, " ").concat(y(c ? "Collect" : "Harvest")),
                        onDismiss: p,
                        headerBackground: m.colors.gradients.cardHeader,
                        children: [c && Object(M.jsxs)(l.v, {
                            justifyContent: "center",
                            alignItems: "center",
                            mb: "24px",
                            children: [Object(M.jsxs)(l.h, {
                                activeIndex: S ? 0 : 1,
                                scale: "sm",
                                variant: "subtle",
                                onItemClick: function(e) {
                                    return C(!e)
                                },
                                children: [Object(M.jsx)(l.i, {
                                    as: "button",
                                    children: y("Compound")
                                }), Object(M.jsx)(l.i, {
                                    as: "button",
                                    children: y("Harvest")
                                })]
                            }), Object(M.jsx)(l.v, {
                                ml: "10px",
                                ref: F,
                                children: Object(M.jsx)(l.x, {
                                    color: "textSubtle"
                                })
                            }), R && E]
                        }), Object(M.jsxs)(l.v, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: "24px",
                            children: [Object(M.jsxs)(l.Q, {
                                children: [y(S ? "Compounding" : "Harvesting"), ":"]
                            }), Object(M.jsxs)(l.v, {
                                flexDirection: "column",
                                children: [Object(M.jsxs)(l.w, {
                                    children: [t, " ", a.symbol]
                                }), 
                                // Object(M.jsx)(l.Q, {
                                //     fontSize: "12px",
                                //     color: "textSubtle",
                                //     children: "~".concat(i || 0, " USD")
                                // })
                            ]
                            })]
                        }), Object(M.jsx)(l.g, {
                            mt: "8px",
                            onClick: B,
                            isLoading: w,
                            endIcon: w ? Object(M.jsx)(l.c, {
                                spin: !0,
                                color: "currentColor"
                            }) : null,
                            children: y(w ? "Confirming" : "Confirm")
                        }), Object(M.jsx)(l.g, {
                            variant: "text",
                            onClick: p,
                            pb: "0px",
                            children: y("Close window")
                        })]
                    })
                },
                Ne = function(e) {
                    var t = e.earnings,
                        n = e.earningToken,
                        a = e.sousId,
                        i = e.isBnbPool,
                        r = e.isLoading,
                        s = void 0 !== r && r,
                        o = e.usesCakeForPrice,
                        u = e.correspondingFarmId,
                        c = Object(j.b)().t,
                        p = Object(h.h)(),
                        d = Object(h.g)(),
                        y = Object(h.i)(u),
                        m = y.times(d);
                    n.symbol.toUpperCase() === le.c.WADA ? m = d : o ? m = y.times(p) : n.symbol.toUpperCase() === le.c.SPELL && (m = y);
                    var b = m.toNumber(),
                        f = Object(z.f)(t, n.decimals),
                        O = Object(z.a)(Object(z.c)(t, n.decimals), 12, 12),
                        k = Object(z.a)(Object(z.c)(t.multipliedBy(b), n.decimals)),
                        T = t.toNumber() > 0,
                        v = 0 === a,
                        w = Object(l.bb)(Object(M.jsx)(He, {
                            formattedBalance: O,
                            fullBalance: f,
                            earningToken: n,
                            earningsDollarValue: k,
                            sousId: a,
                            isBnbPool: i,
                            isCompoundPool: v
                        })),
                        x = Object(_.a)(w, 1)[0];
                    return Object(M.jsx)(l.v, {
                        flexDirection: "column",
                        mb: "16px",
                        children: Object(M.jsxs)(l.v, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [Object(M.jsx)(l.v, {
                                flexDirection: "column",
                                children: s ? Object(M.jsx)(l.N, {
                                    width: "80px",
                                    height: "48px"
                                }) : Object(M.jsxs)(M.Fragment, {
                                    children: [Object(M.jsx)(l.w, {
                                        color: T ? "text" : "textDisabled",
                                        children: T ? O : 0
                                    }), 
                                    // Object(M.jsx)(l.Q, {
                                    //     fontSize: "12px",
                                    //     color: T ? "textSubtle" : "textDisabled",
                                    //     children: "~".concat(T ? k : 0, " USD")
                                    // })
                                ]
                                })
                            }), Object(M.jsx)(l.v, {
                                children: Object(M.jsx)(l.g, {
                                    disabled: !T,
                                    onClick: x,
                                    children: c(v ? "Collect" : "Harvest")
                                })
                            })]
                        })
                    })
                },
                Ue = Object(O.e)(l.Q)(se || (se = Object(c.a)(["\n  display: inline;\n"]))),
                We = function(e) {
                    var t = e.pool,
                        n = e.stakedBalance,
                        a = e.stakingTokenPrice,
                        i = t.sousId,
                        r = t.stakingToken,
                        s = t.earningToken,
                        o = t.harvest,
                        u = t.poolCategory,
                        c = t.userData,
                        p = t.usesCakeForPrice,
                        d = t.correspondingFarmId,
                        y = u === le.b.ADA,
                        b = Object(j.b)().t,
                        f = (null === c || void 0 === c ? void 0 : c.allowance) ? new m.a(c.allowance) : J.b,
                        h = (null === c || void 0 === c ? void 0 : c.stakingTokenBalance) ? new m.a(c.stakingTokenBalance) : J.b,
                        O = (null === c || void 0 === c ? void 0 : c.pendingReward) ? new m.a(c.pendingReward) : J.b,
                        k = !f.gt(0) && !y,
                        T = n.gt(0),
                        v = !c;
                    return Object(M.jsx)(l.v, {
                        flexDirection: "column",
                        children: Object(M.jsxs)(l.v, {
                            flexDirection: "column",
                            children: [o && Object(M.jsxs)(M.Fragment, {
                                children: [Object(M.jsxs)(l.f, {
                                    display: "inline",
                                    children: [Object(M.jsx)(Ue, {
                                        color: "secondary",
                                        textTransform: "uppercase",
                                        bold: !0,
                                        fontSize: "12px",
                                        children: "".concat(s.symbol, " ")
                                    }), Object(M.jsx)(Ue, {
                                        color: "textSubtle",
                                        textTransform: "uppercase",
                                        bold: !0,
                                        fontSize: "12px",
                                        children: b("earned")
                                    })]
                                }), Object(M.jsx)(Ne, {
                                    earnings: O,
                                    earningToken: s,
                                    sousId: i,
                                    isBnbPool: y,
                                    isLoading: v,
                                    usesCakeForPrice: p,
                                    correspondingFarmId: d
                                })]
                            }), Object(M.jsxs)(l.f, {
                                display: "inline",
                                children: [Object(M.jsxs)(Ue, {
                                    color: T ? "secondary" : "textSubtle",
                                    textTransform: "uppercase",
                                    bold: !0,
                                    fontSize: "12px",
                                    children: [T ? r.symbol : b("stake"), " "]
                                }), Object(M.jsx)(Ue, {
                                    color: T ? "textSubtle" : "secondary",
                                    textTransform: "uppercase",
                                    bold: !0,
                                    fontSize: "12px",
                                    children: T ? b("staked") : "".concat(r.symbol)
                                })]
                            }), k ? Object(M.jsx)(Ae, {
                                pool: t,
                                isLoading: v
                            }) : Object(M.jsx)(_e, {
                                isLoading: v,
                                pool: t,
                                stakingTokenBalance: h,
                                stakingTokenPrice: a,
                                stakedBalance: n,
                                isBnbPool: y,
                                isStaked: T
                            })]
                        })
                    })
                },
                Ye = function(e) {
                    var t = e.pool,
                        n = e.account,
                        a = e.isHomeCard,
                        i = t.sousId,
                        r = t.stakingToken,
                        s = t.earningToken,
                        o = t.isFinished,
                        u = t.userData,
                        c = Object(j.b)().t,
                        p = (null === u || void 0 === u ? void 0 : u.stakedBalance) ? new m.a(u.stakedBalance) : J.b,
                        d = p.gt(0),
                        y = Object(h.h)().toNumber();
                    return Object(M.jsxs)(ye, {
                        isStaking: !o && d,
                        isFinished: o && 0 !== i,
                        ribbon: o && Object(M.jsx)(l.o, {
                            variantColor: "textDisabled",
                            text: "".concat(c("Finished"))
                        }),
                        isHomeCard: a,
                        children: [Object(M.jsx)(we, {
                            earningTokenSymbol: s.symbol,
                            stakingTokenSymbol: r.symbol,
                            isFinished: o && 0 !== i
                        }), Object(M.jsxs)(l.l, {
                            children: [Object(M.jsx)(de, {
                                pool: t,
                                stakingTokenPrice: y
                            }), Object(M.jsx)(l.v, {
                                mt: "24px",
                                flexDirection: "column",
                                children: n ? Object(M.jsx)(We, {
                                    pool: t,
                                    stakedBalance: p,
                                    stakingTokenPrice: y
                                }) : Object(M.jsxs)(M.Fragment, {
                                    children: [Object(M.jsx)(l.Q, {
                                        mb: "10px",
                                        textTransform: "uppercase",
                                        fontSize: "12px",
                                        color: "textSubtle",
                                        bold: !0,
                                        children: c("Start earning")
                                    }), Object(M.jsx)(V.a, {})]
                                })
                            })]
                        }), Object(M.jsx)(Te, {
                            pool: t,
                            account: n
                        })]
                    })
                },
                qe = n(90),
                Ve = Object(O.e)(l.Q)(oe || (oe = Object(c.a)(["\n  display: none;\n  ", " {\n    display: block;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.lg
                })),
                Je = Object(O.e)(l.B)(ue || (ue = Object(c.a)(["\n  width: 100%;\n\n  &:hover {\n    text-decoration: none;\n  }\n"]))),
                ze = function(e) {
                    var t = e.stakedOnly,
                        n = e.setStakedOnly,
                        a = e.hasStakeInFinishedPools,
                        i = Object(p.g)(),
                        r = i.url,
                        s = i.isExact,
                        o = Object(j.b)().t;
                    return Object(M.jsxs)(l.v, {
                        alignItems: "center",
                        justifyContent: "center",
                        mb: "32px",
                        children: [Object(M.jsxs)(l.v, {
                            alignItems: "center",
                            flexDirection: ["column", null, "row", null],
                            children: [Object(M.jsxs)(l.h, {
                                activeIndex: s ? 0 : 1,
                                scale: "sm",
                                variant: "subtle",
                                children: [Object(M.jsx)(l.i, {
                                    as: qe.a,
                                    to: "".concat(r),
                                    children: o("Live")
                                }), Object(M.jsx)(l.J, {
                                    show: a,
                                    children: Object(M.jsx)(l.i, {
                                        as: qe.a,
                                        to: "".concat(r, "/history"),
                                        children: o("Finished")
                                    })
                                })]
                            }), Object(M.jsxs)(l.v, {
                                mt: ["4px", null, 0, null],
                                ml: [0, null, "24px", null],
                                justifyContent: "center",
                                alignItems: "center",
                                children: [Object(M.jsx)(l.T, {
                                    scale: "sm",
                                    checked: t,
                                    onChange: function() {
                                        return n((function(e) {
                                            return !e
                                        }))
                                    }
                                }), Object(M.jsx)(l.Q, {
                                    ml: "8px",
                                    children: o("Staked only")
                                })]
                            })]
                        }), Object(M.jsx)(l.v, {
                            ml: "24px",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            children: Object(M.jsx)(Je, {
                                external: !0,
                                href: window.ROBINHOOD_FARM.links.docs || '#',
                                children: Object(M.jsxs)(l.g, {
                                    px: ["14px", null, null, null, "20px"],
                                    variant: "subtle",
                                    children: [Object(M.jsx)(Ve, {
                                        color: "backgroundAlt",
                                        bold: !0,
                                        fontSize: "16px",
                                        children: o("Help")
                                    }), Object(M.jsx)(l.x, {
                                        color: "backgroundAlt",
                                        ml: [null, null, null, 0, "6px"]
                                    })]
                                })
                            })
                        })]
                    })
                },
                Qe = function() {
                    var e = Object(p.g)().path,
                        t = Object(j.b)().t,
                        n = Object(v.c)().account,
                        a = Object(h.f)(n),
                        i = Object(h.a)().currentBlock,
                        s = Object(W.a)(!1, {
                            localStorageKey: "yieldforge_pool_staked"
                        }),
                        o = Object(_.a)(s, 2),
                        u = o[0],
                        c = o[1],
                        d = Object(r.useMemo)((function() {
                            return U()(a, (function(e) {
                                return e.isFinished || i > e.endBlock
                            }))
                        }), [i, a]),
                        y = Object(_.a)(d, 2),
                        b = y[0],
                        f = y[1],
                        O = Object(r.useMemo)((function() {
                            return f.filter((function(e) {
                                return e.userData && new m.a(e.userData.stakedBalance).isGreaterThan(0)
                            }))
                        }), [f]),
                        k = Object(r.useMemo)((function() {
                            return b.some((function(e) {
                                return e.userData && new m.a(e.userData.stakedBalance).isGreaterThan(0)
                            }))
                        }), [b]);
                    return Object(M.jsxs)(M.Fragment, {
                        children: [Object(M.jsx)(q.a, {
                            children: Object(M.jsxs)(l.v, {
                                justifyContent: "space-between",
                                flexDirection: ["column", null, "row"],
                                children: [Object(M.jsxs)(l.v, {
                                    flexDirection: "column",
                                    mr: ["8px", 0],
                                    children: [Object(M.jsx)(l.w, {
                                        as: "h1",
                                        scale: "xxl",
                                        color: "text",
                                        mb: "24px",
                                        children: t("Incentive Vaults")
                                    }), Object(M.jsx)(l.w, {
                                        scale: "md",
                                        color: "text",
                                        children: t("Simply stake FORGE to earn other tokens.")
                                    }), Object(M.jsx)(l.w, {
                                        scale: "md",
                                        color: "text",
                                        children: t("High APR, low risk.")
                                    })]
                                }), Object(M.jsx)(l.v, {
                                    height: "fit-content",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    mt: ["24px", null, "0"]
                                })]
                            })
                        }), Object(M.jsxs)(R.a, {
                            children: [Object(M.jsx)(ze, {
                                stakedOnly: u,
                                setStakedOnly: c,
                                hasStakeInFinishedPools: k
                            }), Object(M.jsxs)(Y.a, {
                                children: [Object(M.jsx)(p.a, {
                                    exact: !0,
                                    path: "".concat(e),
                                    children: Object(M.jsx)(M.Fragment, {
                                        children: u ? H()(O, ["sortOrder"]).map((function(e) {
                                            return Object(M.jsx)(Ye, {
                                                pool: e,
                                                account: n
                                            }, e.sousId)
                                        })) : H()(f, ["sortOrder"]).map((function(e) {
                                            return Object(M.jsx)(Ye, {
                                                pool: e,
                                                account: n
                                            }, e.sousId)
                                        }))
                                    })
                                }), Object(M.jsx)(p.a, {
                                    path: "".concat(e, "/history"),
                                    children: H()(b, ["sortOrder"]).map((function(e) {
                                        return Object(M.jsx)(Ye, {
                                            pool: e,
                                            account: n
                                        }, e.sousId)
                                    }))
                                })]
                            })]
                        })]
                    })
                },
                Ge = n(59),
                Xe = Object(Ge.a)(),
                Ke = Object(r.lazy)((function() {
                    return Promise.all([n.e(3), n.e(5)]).then(n.bind(null, 808))
                })),
                Ze = Object(r.lazy)((function() {
                    return n.e(4).then(n.bind(null, 807))
                })),
                $e = Object(r.lazy)((function() {
                    return n.e(6).then(n.bind(null, 806))
                })),
                et = !1;
            m.a.config({
                EXPONENTIAL_AT: 1e3,
                DECIMAL_PLACES: 80
            });
            var tt = O.e.a(ce || (ce = Object(c.a)(["\n  color: #EE5B23;\n"]))),
                nt = function() {
                    Object(r.useEffect)((function() {
                        console.warn = function() {
                            return null
                        }
                    }), []), f(), Object(h.e)();
                    var e = Object(d.a)().toastInfo;
                    return window.ROBINHOOD_FARM.links.telegram && Math.random() < .5 && !et && e("Have you joined our Telegram community?", Object(M.jsx)(tt, {
                        href: window.ROBINHOOD_FARM.links.telegram,
                        rel: "noreferrer",
                        target: "_blank",
                        children: "Join now"
                    })), et = !0, Object(M.jsxs)(p.b, {
                        history: Xe,
                        children: [Object(M.jsx)(l.M, {}), Object(M.jsx)(k, {}), Object(M.jsx)(P, {
                            children: Object(M.jsx)(F, {
                                fallback: Object(M.jsx)(L, {}),
                                children: Object(M.jsxs)(p.c, {
                                    children: [Object(M.jsx)(p.a, {
                                        path: "/",
                                        exact: !0,
                                        children: Object(M.jsx)(Ke, {})
                                    }), Object(M.jsx)(p.a, {
                                        path: ["/stocks", "/farms"],
                                        children: Object(M.jsx)(Ze, {})
                                    }), Object(M.jsx)(p.a, {
                                        path: "/pools",
                                        children: Object(M.jsx)(Ze, {
                                            tokenMode: !0
                                        })
                                    }), Object(M.jsx)(p.a, {
                                        path: "/staking",
                                        children: Object(M.jsx)(Qe, {})
                                    }), Object(M.jsx)(p.a, {
                                        component: $e
                                    })]
                                })
                            })
                        }), Object(M.jsx)(E, {})]
                    })
                },
                at = s.a.memo(nt),
                it = n(28),
                rt = n(183),
                st = n(185),
                ot = n(182),
                ut = n(189),
                ct = n(127),
                pt = function(e) {
                    var t = e.children;
                    return Object(M.jsx)(v.b, {
                        getLibrary: rt.b,
                        children: Object(M.jsx)(it.a, {
                            store: ct.a,
                            children: Object(M.jsx)(ut.b, {
                                children: Object(M.jsx)(st.b, {
                                    children: Object(M.jsx)(j.a, {
                                        children: Object(M.jsx)(ot.b, {
                                            children: Object(M.jsx)(l.I, {
                                                children: t
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                };
            u.a.render(Object(M.jsx)(s.a.StrictMode, {
                children: Object(M.jsx)(pt, {
                    children: Object(M.jsx)(at, {})
                })
            }), document.getElementById("root"))
        },
        84: function(e,t){t.a=window.RH.farms();},
        85: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
        },
        89: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return _
            })), n.d(t, "c", (function() {
                return D
            })), n.d(t, "d", (function() {
                return H
            })), n.d(t, "e", (function() {
                return N
            })), n.d(t, "g", (function() {
                return U
            })), n.d(t, "f", (function() {
                return W
            }));
            var a = n(2),
                i = n.n(a),
                r = n(14),
                s = n(54),
                o = n(16),
                u = n(60),
                c = n(52),
                p = n(65),
                l = n(100),
                d = n(181),
                y = n(57),
                m = n(22),
                b = n(13),
                f = n.n(b),
                h = function() {
                    var e = Object(r.a)(i.a.mark((function e() {
                        var t, n, a, r, s;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = p.a.filter((function(e) {
                                        return 0 !== e.sousId
                                    })), n = t.map((function(e) {
                                        return {
                                            address: Object(m.a)(e.contractAddress),
                                            name: "startTimestamp"
                                        }
                                    })), a = t.map((function(e) {
                                        return {
                                            address: Object(m.a)(e.contractAddress),
                                            name: "bonusEndTimestamp"
                                        }
                                    })), e.next = 5, Object(y.a)(l, n);
                                case 5:
                                    return r = e.sent, e.next = 8, Object(y.a)(l, a);
                                case 8:
                                    return s = e.sent, e.abrupt("return", t.map((function(e, t) {
                                        var n = r[t],
                                            a = s[t];
                                        return {
                                            sousId: e.sousId,
                                            startBlock: new f.a(n).toJSON(),
                                            endBlock: new f.a(a).toJSON()
                                        }
                                    })));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                O = function() {
                    var e = Object(r.a)(i.a.mark((function e() {
                        var t, n, a;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = p.a.filter((function(e) {
                                        return "ADA" !== e.stakingToken.symbol
                                    })), n = t.map((function(e) {
                                        return {
                                            address: Object(m.a)(e.stakingToken.address),
                                            name: "balanceOf",
                                            params: [Object(m.a)(e.contractAddress)]
                                        }
                                    })), e.next = 4, Object(y.a)(d, n);
                                case 4:
                                    return a = e.sent, e.abrupt("return", Object(u.a)(t.map((function(e, t) {
                                        return {
                                            sousId: e.sousId,
                                            totalStaked: new f.a(a[t]).toJSON()
                                        }
                                    }))));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                k = n(91),
                T = n(85),
                v = n(76),
                w = p.a.filter((function(e) {
                    return "AVAX" !== e.stakingToken.symbol
                })),
                j = p.a.filter((function(e) {
                    return "AVAX" === e.stakingToken.symbol
                })),
                x = p.a.filter((function(e) {
                    return 0 !== e.sousId
                })),
                g = Object(v.b)(),
                M = new g.eth.Contract(k, Object(m.e)()),
                P = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = w.map((function(e) {
                                        return {
                                            address: Object(m.a)(e.stakingToken.address),
                                            name: "allowance",
                                            params: [t, Object(m.a)(e.contractAddress)]
                                        }
                                    })), e.next = 3, Object(y.a)(T, n);
                                case 3:
                                    return a = e.sent, e.abrupt("return", w.reduce((function(e, t, n) {
                                        return Object(o.a)(Object(o.a)({}, e), {}, Object(s.a)({}, t.sousId, new f.a(a[n]).toJSON()))
                                    }), {}));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                A = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r, u, c;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = w.map((function(e) {
                                        return {
                                            address: Object(m.a)(e.stakingToken.address),
                                            name: "balanceOf",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(y.a)(T, n);
                                case 3:
                                    return a = e.sent, r = w.reduce((function(e, t, n) {
                                        return Object(o.a)(Object(o.a)({}, e), {}, Object(s.a)({}, t.sousId, new f.a(a[n]).toJSON()))
                                    }), {}), e.next = 7, g.eth.getBalance(t);
                                case 7:
                                    return u = e.sent, c = j.reduce((function(e, t) {
                                        return Object(o.a)(Object(o.a)({}, e), {}, Object(s.a)({}, t.sousId, new f.a(u).toJSON()))
                                    }), {}), e.abrupt("return", Object(o.a)(Object(o.a)({}, r), c));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                S = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r, u, c;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = x.map((function(e) {
                                        return {
                                            address: Object(m.a)(e.contractAddress),
                                            name: "userInfo",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(y.a)(l, n);
                                case 3:
                                    return a = e.sent, r = x.reduce((function(e, t, n) {
                                        return Object(o.a)(Object(o.a)({}, e), {}, Object(s.a)({}, t.sousId, new f.a(a[n].amount._hex).toJSON()))
                                    }), {}), e.next = 7, M.methods.userInfo("0", t).call();
                                case 7:
                                    return u = e.sent, c = u.amount, e.abrupt("return", Object(o.a)(Object(o.a)({}, r), {}, {
                                        0: new f.a(c).toJSON()
                                    }));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r, u;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = x.map((function(e) {
                                        return {
                                            address: Object(m.a)(e.contractAddress),
                                            name: "pendingReward",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(y.a)(l, n);
                                case 3:
                                    return a = e.sent, r = x.reduce((function(e, t, n) {
                                        return Object(o.a)(Object(o.a)({}, e), {}, Object(s.a)({}, t.sousId, new f.a(a[n]).toJSON()))
                                    }), {}), e.next = 7, M.methods.pendingForge("0", t).call();
                                case 7:
                                    return u = e.sent, e.abrupt("return", Object(o.a)(Object(o.a)({}, r), {}, {
                                        0: new f.a(u).toJSON()
                                    }));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                I = {
                    data: Object(u.a)(p.a)
                },
                F = Object(c.c)({
                    name: "Pools",
                    initialState: I,
                    reducers: {
                        setPoolsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.sousId === e.sousId
                                }));
                                return Object(o.a)(Object(o.a)({}, e), t)
                            }))
                        },
                        setPoolsUserData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.sousId === e.sousId
                                }));
                                return Object(o.a)(Object(o.a)({}, e), {}, {
                                    userData: t
                                })
                            }))
                        },
                        updatePoolsUserData: function(e, t) {
                            var n = t.payload,
                                a = n.field,
                                i = n.value,
                                r = n.sousId,
                                u = e.data.findIndex((function(e) {
                                    return e.sousId === r
                                }));
                            e.data[u] = Object(o.a)(Object(o.a)({}, e.data[u]), {}, {
                                userData: Object(o.a)(Object(o.a)({}, e.data[u].userData), {}, Object(s.a)({}, a, i))
                            })
                        }
                    }
                }),
                E = F.actions,
                R = E.setPoolsPublicData,
                B = E.setPoolsUserData,
                L = E.updatePoolsUserData,
                _ = function() {
                    return function() {
                        var e = Object(r.a)(i.a.mark((function e(t) {
                            var n, a, r;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, h();
                                    case 2:
                                        return n = e.sent, e.next = 5, O();
                                    case 5:
                                        a = e.sent, r = p.a.map((function(e) {
                                            var t = n.find((function(t) {
                                                    return t.sousId === e.sousId
                                                })),
                                                i = a.find((function(t) {
                                                    return t.sousId === e.sousId
                                                }));
                                            return Object(o.a)(Object(o.a)({}, t), i)
                                        })), t(R(r));
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                D = function(e) {
                    return function() {
                        var t = Object(r.a)(i.a.mark((function t(n) {
                            var a, r, s, o, u;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, P(e);
                                    case 2:
                                        return a = t.sent, t.next = 5, A(e);
                                    case 5:
                                        return r = t.sent, t.next = 8, S(e);
                                    case 8:
                                        return s = t.sent, t.next = 11, C(e);
                                    case 11:
                                        o = t.sent, u = p.a.map((function(e) {
                                            return {
                                                sousId: e.sousId,
                                                allowance: a[e.sousId],
                                                stakingTokenBalance: r[e.sousId],
                                                stakedBalance: s[e.sousId],
                                                pendingReward: o[e.sousId]
                                            }
                                        })), n(B(u));
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                H = function(e, t) {
                    return function() {
                        var n = Object(r.a)(i.a.mark((function n(a) {
                            var r;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, P(t);
                                    case 2:
                                        r = n.sent, a(L({
                                            sousId: e,
                                            field: "allowance",
                                            value: r[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                N = function(e, t) {
                    return function() {
                        var n = Object(r.a)(i.a.mark((function n(a) {
                            var r;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, A(t);
                                    case 2:
                                        r = n.sent, a(L({
                                            sousId: e,
                                            field: "stakingTokenBalance",
                                            value: r[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                U = function(e, t) {
                    return function() {
                        var n = Object(r.a)(i.a.mark((function n(a) {
                            var r;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, S(t);
                                    case 2:
                                        r = n.sent, a(L({
                                            sousId: e,
                                            field: "stakedBalance",
                                            value: r[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                W = function(e, t) {
                    return function() {
                        var n = Object(r.a)(i.a.mark((function n(a) {
                            var r;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, C(t);
                                    case 2:
                                        r = n.sent, a(L({
                                            sousId: e,
                                            field: "pendingReward",
                                            value: r[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                };
            t.a = F.reducer
        },
        91: function(e){e.exports=[{"inputs":[{"internalType":"contract Forge","name":"_forge","type":"address"},{"internalType":"address","name":"_feeAddress1","type":"address"},{"internalType":"address","name":"_feeAddress2","type":"address"},{"internalType":"address","name":"_feeAddress3","type":"address"},{"internalType":"uint256","name":"_forgePerSec","type":"uint256"},{"internalType":"uint256","name":"_startTimestamp","type":"uint256"},{"internalType":"address[]","name":"_initialStakeTokens","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"SetFeeAddress1","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"SetFeeAddress2","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"SetFeeAddress3","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"forgePerSec","type":"uint256"}],"name":"UpdateEmissionRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newMaxSupply","type":"uint256"}],"name":"UpdateMaxSupply","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newStartTime","type":"uint256"}],"name":"UpdateStartTime","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"address","name":"stakeToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"allocPoint","type":"uint256"},{"indexed":false,"internalType":"uint16","name":"depositFeeBP","type":"uint16"}],"name":"addPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"address","name":"stakeToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"allocPoint","type":"uint256"},{"indexed":false,"internalType":"uint16","name":"depositFeeBP","type":"uint16"}],"name":"setPool","type":"event"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_stakeToken","type":"address"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeAddress1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeAddress2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeAddress3","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"forge","outputs":[{"internalType":"contract Forge","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"forgePerSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingForge","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"name":"poolExistence","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"stakeToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTimestamp","type":"uint256"},{"internalType":"uint256","name":"accForgePerShare","type":"uint256"},{"internalType":"uint16","name":"depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"totalStaked","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddress1","type":"address"}],"name":"setFeeAddress1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddress2","type":"address"}],"name":"setFeeAddress2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddress3","type":"address"}],"name":"setFeeAddress3","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_forgePerSec","type":"uint256"}],"name":"updateEmissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMaxSupply","type":"uint256"}],"name":"updateMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newStartTime","type":"uint256"}],"name":"updateStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];},
        96: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return s
            })), n.d(t, "e", (function() {
                return o
            })), n.d(t, "d", (function() {
                return u
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "a", (function() {
                return p
            })), n.d(t, "b", (function() {
                return l
            }));
            var a = n(175),
                i = n(43);
            a.a.config({
                EXPONENTIAL_AT: 1e3,
                DECIMAL_PLACES: 80
            });
            var r = new a.a(.5),
                s = new a.a(31536e3),
                o = r.times(s),
                u = window.location.origin,
                c = window.ROBINHOOD_FARM.links.swap || '#',
                p = window.ROBINHOOD_FARM.links.liquidity || '#',
                l = ("".concat(c, "swap"), "".concat(c, "pool"), window.ROBINHOOD_FARM.explorerUrl+'/');
            i.a.pow(18)
        },
        98: function(e, t, n) {
            "use strict";
            var a = n(0),
                i = n(8),
                r = n(185);
            t.a = function() {
                var e = Object(a.useContext)(r.a);
                return {
                    isDark: e.isDark,
                    toggleTheme: e.toggleTheme,
                    theme: Object(a.useContext)(i.a)
                }
            }
        }
    },
    [
        [792, 1, 2]
    ]
]);
