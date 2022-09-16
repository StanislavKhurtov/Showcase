(() => {
    var __webpack_modules__ = {
        732: function(module) {
            !function(n, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                function n() {
                    return n = Object.assign || function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        }
                        return n;
                    }, n.apply(this, arguments);
                }
                var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), o = t && "IntersectionObserver" in window, i = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = {
                    elements_selector: ".lazy",
                    container: e || t ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, c = function(t) {
                    return n({}, r, t);
                }, u = function(n, t) {
                    var e, o = "LazyLoad::Initialized", i = new n(t);
                    try {
                        e = new CustomEvent(o, {
                            detail: {
                                instance: i
                            }
                        });
                    } catch (n) {
                        (e = document.createEvent("CustomEvent")).initCustomEvent(o, !1, !1, {
                            instance: i
                        });
                    }
                    window.dispatchEvent(e);
                }, l = "src", s = "srcset", f = "sizes", d = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", p = "applied", h = "error", m = "native", E = "data-", I = "ll-status", y = function(n, t) {
                    return n.getAttribute(E + t);
                }, A = function(n) {
                    return y(n, I);
                }, k = function(n, t) {
                    return function(n, t, e) {
                        var o = "data-ll-status";
                        null !== e ? n.setAttribute(o, e) : n.removeAttribute(o);
                    }(n, 0, t);
                }, L = function(n) {
                    return k(n, null);
                }, w = function(n) {
                    return null === A(n);
                }, O = function(n) {
                    return A(n) === m;
                }, x = [ v, b, p, h ], C = function(n, t, e, o) {
                    n && (void 0 === o ? void 0 === e ? n(t) : n(t, e) : n(t, e, o));
                }, N = function(n, t) {
                    i ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
                }, M = function(n, t) {
                    i ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
                }, z = function(n) {
                    return n.llTempImage;
                }, T = function(n, t) {
                    if (t) {
                        var e = t._observer;
                        e && e.unobserve(n);
                    }
                }, R = function(n, t) {
                    n && (n.loadingCount += t);
                }, G = function(n, t) {
                    n && (n.toLoadCount = t);
                }, D = function(n) {
                    for (var t, e = [], o = 0; t = n.children[o]; o += 1) "SOURCE" === t.tagName && e.push(t);
                    return e;
                }, V = function(n, t) {
                    var e = n.parentNode;
                    e && "PICTURE" === e.tagName && D(e).forEach(t);
                }, F = function(n, t) {
                    D(n).forEach(t);
                }, j = [ l ], B = [ l, d ], J = [ l, s, f ], P = [ g ], S = function(n) {
                    return !!n[_];
                }, U = function(n) {
                    return n[_];
                }, $ = function(n) {
                    return delete n[_];
                }, q = function(n, t) {
                    if (!S(n)) {
                        var e = {};
                        t.forEach((function(t) {
                            e[t] = n.getAttribute(t);
                        })), n[_] = e;
                    }
                }, H = function(n, t) {
                    if (S(n)) {
                        var e = U(n);
                        t.forEach((function(t) {
                            !function(n, t, e) {
                                e ? n.setAttribute(t, e) : n.removeAttribute(t);
                            }(n, t, e[t]);
                        }));
                    }
                }, K = function(n, t, e) {
                    N(n, t.class_loading), k(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
                }, Q = function(n, t, e) {
                    e && n.setAttribute(t, e);
                }, W = function(n, t) {
                    Q(n, f, y(n, t.data_sizes)), Q(n, s, y(n, t.data_srcset)), Q(n, l, y(n, t.data_src));
                }, X = {
                    IMG: function(n, t) {
                        V(n, (function(n) {
                            q(n, J), W(n, t);
                        })), q(n, J), W(n, t);
                    },
                    IFRAME: function(n, t) {
                        q(n, j), Q(n, l, y(n, t.data_src));
                    },
                    VIDEO: function(n, t) {
                        F(n, (function(n) {
                            q(n, j), Q(n, l, y(n, t.data_src));
                        })), q(n, B), Q(n, d, y(n, t.data_poster)), Q(n, l, y(n, t.data_src)), n.load();
                    },
                    OBJECT: function(n, t) {
                        q(n, P), Q(n, g, y(n, t.data_src));
                    }
                }, Y = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], Z = function(n, t) {
                    !t || function(n) {
                        return n.loadingCount > 0;
                    }(t) || function(n) {
                        return n.toLoadCount > 0;
                    }(t) || C(n.callback_finish, t);
                }, nn = function(n, t, e) {
                    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
                }, tn = function(n, t, e) {
                    n.removeEventListener(t, e);
                }, en = function(n) {
                    return !!n.llEvLisnrs;
                }, on = function(n) {
                    if (en(n)) {
                        var t = n.llEvLisnrs;
                        for (var e in t) {
                            var o = t[e];
                            tn(n, e, o);
                        }
                        delete n.llEvLisnrs;
                    }
                }, an = function(n, t, e) {
                    !function(n) {
                        delete n.llTempImage;
                    }(n), R(e, -1), function(n) {
                        n && (n.toLoadCount -= 1);
                    }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
                }, rn = function(n, t, e) {
                    var o = z(n) || n;
                    en(o) || function(n, t, e) {
                        en(n) || (n.llEvLisnrs = {});
                        var o = "VIDEO" === n.tagName ? "loadeddata" : "load";
                        nn(n, o, t), nn(n, "error", e);
                    }(o, (function(i) {
                        !function(n, t, e, o) {
                            var i = O(t);
                            an(t, e, o), N(t, e.class_loaded), k(t, b), C(e.callback_loaded, t, o), i || Z(e, o);
                        }(0, n, t, e), on(o);
                    }), (function(i) {
                        !function(n, t, e, o) {
                            var i = O(t);
                            an(t, e, o), N(t, e.class_error), k(t, h), C(e.callback_error, t, o), e.restore_on_error && H(t, J), 
                            i || Z(e, o);
                        }(0, n, t, e), on(o);
                    }));
                }, cn = function(n, t, e) {
                    !function(n) {
                        n.llTempImage = document.createElement("IMG");
                    }(n), rn(n, t, e), function(n) {
                        S(n) || (n[_] = {
                            backgroundImage: n.style.backgroundImage
                        });
                    }(n), function(n, t, e) {
                        var o = y(n, t.data_bg), i = y(n, t.data_bg_hidpi), r = a && i ? i : o;
                        r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(l, r), 
                        K(n, t, e));
                    }(n, t, e), function(n, t, e) {
                        var o = y(n, t.data_bg_multi), i = y(n, t.data_bg_multi_hidpi), r = a && i ? i : o;
                        r && (n.style.backgroundImage = r, function(n, t, e) {
                            N(n, t.class_applied), k(n, p), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
                        }(n, t, e));
                    }(n, t, e);
                }, un = function(n, t, e) {
                    !function(n) {
                        return Y.indexOf(n.tagName) > -1;
                    }(n) ? cn(n, t, e) : function(n, t, e) {
                        rn(n, t, e), function(n, t, e) {
                            var o = X[n.tagName];
                            o && (o(n, t), K(n, t, e));
                        }(n, t, e);
                    }(n, t, e);
                }, ln = function(n) {
                    n.removeAttribute(l), n.removeAttribute(s), n.removeAttribute(f);
                }, sn = function(n) {
                    V(n, (function(n) {
                        H(n, J);
                    })), H(n, J);
                }, fn = {
                    IMG: sn,
                    IFRAME: function(n) {
                        H(n, j);
                    },
                    VIDEO: function(n) {
                        F(n, (function(n) {
                            H(n, j);
                        })), H(n, B), n.load();
                    },
                    OBJECT: function(n) {
                        H(n, P);
                    }
                }, dn = function(n, t) {
                    (function(n) {
                        var t = fn[n.tagName];
                        t ? t(n) : function(n) {
                            if (S(n)) {
                                var t = U(n);
                                n.style.backgroundImage = t.backgroundImage;
                            }
                        }(n);
                    })(n), function(n, t) {
                        w(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), 
                        M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
                    }(n, t), L(n), $(n);
                }, _n = [ "IMG", "IFRAME", "VIDEO" ], gn = function(n) {
                    return n.use_native && "loading" in HTMLImageElement.prototype;
                }, vn = function(n, t, e) {
                    n.forEach((function(n) {
                        return function(n) {
                            return n.isIntersecting || n.intersectionRatio > 0;
                        }(n) ? function(n, t, e, o) {
                            var i = function(n) {
                                return x.indexOf(A(n)) >= 0;
                            }(n);
                            k(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function(n, t, e) {
                                t.unobserve_entered && T(n, e);
                            }(n, e, o), C(e.callback_enter, n, t, o), i || un(n, e, o);
                        }(n.target, n, t, e) : function(n, t, e, o) {
                            w(n) || (N(n, e.class_exited), function(n, t, e, o) {
                                e.cancel_on_exit && function(n) {
                                    return A(n) === v;
                                }(n) && "IMG" === n.tagName && (on(n), function(n) {
                                    V(n, (function(n) {
                                        ln(n);
                                    })), ln(n);
                                }(n), sn(n), M(n, e.class_loading), R(o, -1), L(n), C(e.callback_cancel, n, t, o));
                            }(n, t, e, o), C(e.callback_exit, n, t, o));
                        }(n.target, n, t, e);
                    }));
                }, bn = function(n) {
                    return Array.prototype.slice.call(n);
                }, pn = function(n) {
                    return n.container.querySelectorAll(n.elements_selector);
                }, hn = function(n) {
                    return function(n) {
                        return A(n) === h;
                    }(n);
                }, mn = function(n, t) {
                    return function(n) {
                        return bn(n).filter(w);
                    }(n || pn(t));
                }, En = function(n, e) {
                    var i = c(n);
                    this._settings = i, this.loadingCount = 0, function(n, t) {
                        o && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                            vn(e, n, t);
                        }), function(n) {
                            return {
                                root: n.container === document ? null : n.container,
                                rootMargin: n.thresholds || n.threshold + "px"
                            };
                        }(n)));
                    }(i, this), function(n, e) {
                        t && window.addEventListener("online", (function() {
                            !function(n, t) {
                                var e;
                                (e = pn(n), bn(e).filter(hn)).forEach((function(t) {
                                    M(t, n.class_error), L(t);
                                })), t.update();
                            }(n, e);
                        }));
                    }(i, this), this.update(e);
                };
                return En.prototype = {
                    update: function(n) {
                        var t, i, a = this._settings, r = mn(n, a);
                        G(this, r.length), !e && o ? gn(a) ? function(n, t, e) {
                            n.forEach((function(n) {
                                -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                                    n.setAttribute("loading", "lazy"), rn(n, t, e), function(n, t) {
                                        var e = X[n.tagName];
                                        e && e(n, t);
                                    }(n, t), k(n, m);
                                }(n, t, e);
                            })), G(e, 0);
                        }(r, a, this) : (i = r, function(n) {
                            n.disconnect();
                        }(t = this._observer), function(n, t) {
                            t.forEach((function(t) {
                                n.observe(t);
                            }));
                        }(t, i)) : this.loadAll(r);
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), pn(this._settings).forEach((function(n) {
                            $(n);
                        })), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount;
                    },
                    loadAll: function(n) {
                        var t = this, e = this._settings;
                        mn(n, e).forEach((function(n) {
                            T(n, t), un(n, e, t);
                        }));
                    },
                    restoreAll: function() {
                        var n = this._settings;
                        pn(n).forEach((function(t) {
                            dn(t, n);
                        }));
                    }
                }, En.load = function(n, t) {
                    var e = c(t);
                    un(n, e);
                }, En.resetStatus = function(n) {
                    L(n);
                }, t && function(n, t) {
                    if (t) if (t.length) for (var e, o = 0; e = t[o]; o += 1) u(n, e); else u(n, t);
                }(En, window.lazyLoadOptions), En;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function addTouchClass() {
            if (isMobile.any()) document.documentElement.classList.add("touch");
        }
        function addLoadedClass() {
            window.addEventListener("load", (function() {
                setTimeout((function() {
                    document.documentElement.classList.add("loaded");
                }), 0);
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function fullVHfix() {
            const fullScreens = document.querySelectorAll("[data-fullscreen]");
            if (fullScreens.length && isMobile.any()) {
                window.addEventListener("resize", fixHeight);
                function fixHeight() {
                    let vh = .01 * window.innerHeight;
                    document.documentElement.style.setProperty("--vh", `${vh}px`);
                }
                fixHeight();
            }
        }
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        class MousePRLX {
            constructor(props, data = null) {
                let defaultConfig = {
                    init: true,
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                if (this.config.init) {
                    const paralaxMouse = document.querySelectorAll("[data-prlx-mouse]");
                    if (paralaxMouse.length) {
                        this.paralaxMouseInit(paralaxMouse);
                        this.setLogging(`Проснулся, слежу за объектами: (${paralaxMouse.length})`);
                    } else this.setLogging("Нет ни одного объекта. Сплю...zzZZZzZZz...");
                }
            }
            paralaxMouseInit(paralaxMouse) {
                paralaxMouse.forEach((el => {
                    const paralaxMouseWrapper = el.closest("[data-prlx-mouse-wrapper]");
                    const paramСoefficientX = el.dataset.prlxCx ? +el.dataset.prlxCx : 100;
                    const paramСoefficientY = el.dataset.prlxCy ? +el.dataset.prlxCy : 100;
                    const directionX = el.hasAttribute("data-prlx-dxr") ? -1 : 1;
                    const directionY = el.hasAttribute("data-prlx-dyr") ? -1 : 1;
                    const paramAnimation = el.dataset.prlxA ? +el.dataset.prlxA : 50;
                    let positionX = 0, positionY = 0;
                    let coordXprocent = 0, coordYprocent = 0;
                    setMouseParallaxStyle();
                    if (paralaxMouseWrapper) mouseMoveParalax(paralaxMouseWrapper); else mouseMoveParalax();
                    function setMouseParallaxStyle() {
                        const distX = coordXprocent - positionX;
                        const distY = coordYprocent - positionY;
                        positionX += distX * paramAnimation / 1e3;
                        positionY += distY * paramAnimation / 1e3;
                        el.style.cssText = `transform: translate3D(${directionX * positionX / (paramСoefficientX / 10)}%,${directionY * positionY / (paramСoefficientY / 10)}%,0);`;
                        requestAnimationFrame(setMouseParallaxStyle);
                    }
                    function mouseMoveParalax(wrapper = window) {
                        wrapper.addEventListener("mousemove", (function(e) {
                            const offsetTop = el.getBoundingClientRect().top + window.scrollY;
                            if (offsetTop >= window.scrollY || offsetTop + el.offsetHeight >= window.scrollY) {
                                const parallaxWidth = window.innerWidth;
                                const parallaxHeight = window.innerHeight;
                                const coordX = e.clientX - parallaxWidth / 2;
                                const coordY = e.clientY - parallaxHeight / 2;
                                coordXprocent = coordX / parallaxWidth * 100;
                                coordYprocent = coordY / parallaxHeight * 100;
                            }
                        }));
                    }
                }));
            }
            setLogging(message) {
                this.config.logging ? FLS(`[PRLX Mouse]: ${message}`) : null;
            }
        }
        flsModules.mousePrlx = new MousePRLX({});
        var lazyload_min = __webpack_require__(732);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    headerItemHeight = document.querySelector(headerItem).offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if ("undefined" !== typeof SmoothScroll) (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
            } else FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
        };
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if ("click" === e.type) {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if ("watcherCallback" === e.type && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if ("navigator" === targetElement.dataset.watch) {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        function headerScroll() {
            addWindowScrollEvent = true;
            const header = document.querySelector("header.header");
            const headerShow = header.hasAttribute("data-scroll-show");
            const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
            const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            let scrollDirection = 0;
            let timer;
            document.addEventListener("windowScroll", (function(e) {
                const scrollTop = window.scrollY;
                clearTimeout(timer);
                if (scrollTop >= startPoint) {
                    !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                    if (headerShow) {
                        if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        timer = setTimeout((() => {
                            !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        }), headerShowTimer);
                    }
                } else {
                    header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                    if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, (function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }), this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, (function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            }));
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, (function(item) {
                    return item.breakpoint === mediaBreakpoint;
                }));
                matchMedia.addListener((function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                }));
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = оbjects.length - 1; i >= 0; i--) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if ("last" === place || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if ("first" === place) {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (void 0 !== parent.children[index]) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if ("min" === this.type) Array.prototype.sort.call(arr, (function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if ("first" === a.place || "last" === b.place) return -1;
                    if ("last" === a.place || "first" === b.place) return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            })); else {
                Array.prototype.sort.call(arr, (function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if ("first" === a.place || "last" === b.place) return 1;
                        if ("last" === a.place || "first" === b.place) return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                }));
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
        "use strict";
        window.onload = function() {
            const parallax = document.querySelector(".home");
            if (parallax) {
                const content = document.querySelector(".home__container");
                const glade = document.querySelector(".images-parallax__glade");
                const mountains = document.querySelector(".images-parallax__mountains");
                const human = document.querySelector(".images-parallax__human");
                const forglade = 40;
                const formountains = 60;
                const forHuman = 20;
                const speed = .05;
                let positionX = 0, positionY = 0;
                let coordXprocent = 0, coordYprocent = 0;
                function setMouseParallaxStyle() {
                    const distX = coordXprocent - positionX;
                    const distY = coordYprocent - positionY;
                    positionX += distX * speed;
                    positionY += distY * speed;
                    glade.style.cssText = `transform: translate(${positionX / forglade}%,${positionY / forglade}%);`;
                    mountains.style.cssText = `transform: translate(${positionX / formountains}%,${positionY / formountains}%);`;
                    human.style.cssText = `transform: translate(${positionX / forHuman}%,${positionY / forHuman}%);`;
                    requestAnimationFrame(setMouseParallaxStyle);
                }
                setMouseParallaxStyle();
                parallax.addEventListener("mousemove", (function(e) {
                    const parallaxWidth = parallax.offsetWidth;
                    const parallaxHeight = parallax.offsetHeight;
                    const coordX = e.pageX - parallaxWidth / 2;
                    const coordY = e.pageY - parallaxHeight / 2;
                    coordXprocent = coordX / parallaxWidth * 100;
                    coordYprocent = coordY / parallaxHeight * 100;
                }));
                let thresholdSets = [];
                for (let i = 0; i <= 1; i += .005) thresholdSets.push(i);
                const callback = function(entries, observer) {
                    const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
                    setParallaxItemsStyle(scrollTopProcent);
                };
                const observer = new IntersectionObserver(callback, {
                    threshold: thresholdSets
                });
                observer.observe(document.querySelector(".about"));
                function setParallaxItemsStyle(scrollTopProcent) {
                    content.style.cssText = `transform: translate(0%,-${scrollTopProcent / 9}%);`;
                    mountains.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 6}%);`;
                    human.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3}%);`;
                }
            }
        };
        function trackScroll() {
            var scrolled = window.pageYOffset;
            var coords = document.documentElement.clientHeight;
            if (scrolled > coords) goTopBtn.classList.add("noselect-show");
            if (scrolled < coords) goTopBtn.classList.remove("noselect-show");
        }
        function backToTop() {
            if (window.pageYOffset > 0) {
                window.scrollBy(0, -300);
                setTimeout(backToTop, 100);
            }
        }
        var goTopBtn = document.querySelector(".noselect");
        window.addEventListener("scroll", trackScroll);
        goTopBtn.addEventListener("click", backToTop);
        gsap.registerPlugin(ScrollTrigger);
        const sections = gsap.utils.toArray(".panel");
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".horizontal",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: "+=3500"
            }
        });
        const tl = gsap.timeline();
        tl.from(".wrapper", {
            opacity: 0,
            duration: .5
        }).from(".images-parallax", {
            opacity: 0,
            duration: 3
        }).from(".header", {
            opacity: 0,
            duration: 1
        }, "-=1").from(".home__text_fonts-size", {
            opacity: 0,
            y: 150,
            duration: .7
        }).from(".home__text_origin", {
            opacity: 0,
            y: 150,
            duration: .7
        }, "-=0.3").from(".home__text_nowrap", {
            opacity: 0,
            y: 150,
            duration: .7
        }, "-=0.3").from(".home__btn", {
            opacity: 0,
            y: -150,
            duration: .7
        });
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".about__title", {
            opacity: 0,
            scale: 1.2,
            duration: 2,
            scrollTrigger: {
                trigger: ".about__title",
                start: "top 80%",
                end: "top 30%"
            }
        });
        gsap.from(".about__image-ibg", {
            opacity: 0,
            scale: .6,
            duration: 3,
            scrollTrigger: {
                trigger: ".about__image-ibg",
                start: "top center"
            }
        });
        gsap.from(".about__text_one", {
            opacity: 0,
            x: 400,
            duration: 2,
            scrollTrigger: {
                trigger: ".about__text_one",
                start: "top 80%",
                end: "top 30%"
            }
        });
        gsap.from(".about__text_two", {
            opacity: 0,
            x: 400,
            duration: 2.3,
            scrollTrigger: {
                trigger: ".about__text_two",
                start: "top 80%",
                end: "top 30%"
            }
        });
        gsap.from(".about__text_three", {
            opacity: 0,
            x: 400,
            duration: 2.7,
            scrollTrigger: {
                trigger: ".about__text_three",
                start: "top 80%",
                end: "top 30%"
            }
        });
        gsap.from(".about__text_four", {
            opacity: 0,
            x: 400,
            duration: 3.2,
            scrollTrigger: {
                trigger: ".about__text_four",
                start: "top 80%",
                end: "top 30%"
            }
        });
        gsap.from(".about__link", {
            opacity: 0,
            x: 400,
            duration: 3.2,
            scrollTrigger: {
                trigger: ".about__link",
                start: "top 80%",
                end: "top 30%"
            }
        });
        gsap.from(".about__decoration", {
            opacity: 0,
            y: 400,
            duration: 3,
            scrollTrigger: {
                trigger: ".about__decoration",
                start: "top 80%",
                end: "top 30%"
            }
        });
        gsap.from(".case__title", {
            opacity: 0,
            scale: 2,
            duration: 3,
            scrollTrigger: {
                trigger: ".case__title",
                start: "center 50%",
                end: "top 30%"
            }
        });
        gsap.from(".case__block_one", {
            opacity: 0,
            x: -300,
            duration: 1,
            scrollTrigger: {
                trigger: ".case__block_one",
                start: "top 60%",
                end: "top 30%"
            }
        });
        gsap.from(".case__block_two", {
            opacity: 0,
            x: 300,
            duration: 1,
            scrollTrigger: {
                trigger: ".case__block_two",
                start: "top 60%",
                end: "top 30%"
            }
        });
        gsap.from(".case__block_three", {
            opacity: 0,
            x: -300,
            duration: 1,
            scrollTrigger: {
                trigger: ".case__block_three",
                start: "top 90%",
                end: "top 30%"
            }
        });
        gsap.from(".case__block_four", {
            opacity: 0,
            x: 300,
            duration: 1,
            scrollTrigger: {
                trigger: ".case__block_four",
                start: "top 90%",
                end: "top 30%"
            }
        });
        gsap.from(".footer__container", {
            opacity: 0,
            y: 100,
            duration: 1,
            scrollTrigger: {
                trigger: ".footer",
                start: "top 90%",
                end: "top 30%"
            }
        });
        window["FLS"] = true;
        isWebp();
        addTouchClass();
        addLoadedClass();
        menuInit();
        fullVHfix();
        pageNavigation();
        headerScroll();
    })();
})();