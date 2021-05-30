window.__require = function e(t, n, i) {
    function o(a, c) {
        if (!n[a]) {
            if (!t[a]) {
                var s = a.split("/");
                if (s = s[s.length - 1], !t[s]) {
                    var u = "function" == typeof __require && __require;
                    if (!c && u)
                        return u(s, !0);
                    if (r)
                        return r(s, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
            }
            var l = n[a] = { exports: {} };
            t[a][0].call(l.exports, function (e) { return o(t[a][1][e] || e) }, l, l.exports, e, t, n, i)
        }
        return n[a].exports
    }
    for (var r = "function" == typeof __require && __require, a = 0; a < i.length; a++) o(i[a]);
    return o
}({
    AniTools: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "e6159dpEOhBwogHHMk0hhTE", "AniTools");
        var i = {
            doLabStrAni: function (e, t, n) {
                e.node.stopAllActions(), e.string = "";
                var i = t.split(""), o = 0, r = n / i.length;
                e.node.runAction(cc.sequence(cc.callFunc(function () { e.string = e.string + i[o], o++ }), cc.delayTime(r)).repeat(i.length))
            },
            gunNumLabAni: function (e, t) {
                var n = parseInt(e.string);
                if (t != n) {
                    var i = 0, o = t - n >= 50 ? 50 : t - n;
                    e.node.runAction(cc.sequence(cc.callFunc(function () { i >= o - 1 ? e.string = t : (n++, e.string = n), i++ }), cc.delayTime(.02)).repeat(o))
                }
            },
            openUIAni: function (e, t, n, i) {
                e.opacity = 0, t.scale = 0, e.runAction(cc.fadeTo(n, 100)), t.runAction(cc.sequence(cc.scaleTo(n, 1).easing(cc.easeBackOut()), cc.callFunc(i)))
            },
            closeUIAni: function (e, t, n, i) {
                e.runAction(cc.fadeOut(n)), t.runAction(cc.sequence(cc.scaleTo(n, 0).easing(cc.easeBackIn()), cc.callFunc(i)))
            },
            fireColorArr: ["#F5CD4D", "#F77986", "#D0F057", "#7ACCE8", "#E365EE"],
            fireworksAni: function (e, t, n, i) {
                for (var o = 0; o < t; o++) {
                    var r = ToolsJs.newSprite("fire" + this.returnRanNum(1, 4));
                    r.scale = .3 + .5 * Math.random(), r.position = n, r.color = cc.color(this.fireColorArr[this.returnRanNum(0, this.fireColorArr.length - 1)]), e.addChild(r, 88);
                    var a = this.returnRanNum(i - 15, i + 15), c = this.returnRanNum(300, 1e3);
                    this.fireObjAni(r, a, c, 350, .005 * o)
                }
            },
            fireObjAni: function (e, t, n, i) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, r = .1 + .5 * Math.random();
                e.runAction(cc.rotateBy(r, this.returnRanNum(-360, 360)).repeatForever());
                var a = cc.misc.degreesToRadians(t), c = cc.v2(Math.cos(a) * n, Math.sin(a) * n), s = n / i;
                e.runAction(cc.sequence(cc.delayTime(o), cc.jumpBy(s, cc.v2(1.5 * c.x, 0), n, 1), cc.removeSelf(!0)))
            },
            bombObjAni: function (e, t, n, i, o, r) {
                t = t || this.returnRanNum(-180, 180);
                var a = cc.misc.degreesToRadians(t), c = cc.v2(Math.cos(a) * n, Math.sin(a) * n), s = n / i, u = o ? 0 : e.scale, l = r ? 0 : 255;
                e.runAction(cc.sequence(cc.spawn(cc.scaleTo(s + .1, u), cc.moveBy(s, c).easing(cc.easeQuadraticActionOut()), cc.fadeTo(s + .1, l)), cc.fadeOut(.1), cc.removeSelf(!0)))
            },
            playAni: function (e, t) {
                e.getComponent(cc.Animation).play(t)
            },
            stopAni: function (e, t) {
                e.getComponent(cc.Animation).stop(t)
            },
            addNodeAni: function (e, t, n, i, o, r, a) {
                for (var c = e.getComponent(cc.Animation), s = [], u = i; u <= o; u++) {
                    var l = new cc.SpriteFrame(cc.url.raw("resources/" + t + u + ".png"));
                    s.push(l)
                }
                var h = cc.AnimationClip.createWithSpriteFrames(s, 5);
                h.name = n, h.speed = a, h.wrapMode = r ? cc.WrapMode.Loop : cc.WrapMode.Normal, c.addClip(h)
            },
            returnRanNum: function (e, t) {
                return e + Math.floor(Math.random() * (t - e + 1))
            }
        };
        window.AniTools = i, cc._RF.pop()
    }, {}],
    EditorAsset: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "e34dc/R699HfbXc9cgT15Ly", "EditorAsset"), Object.defineProperty(n, "__esModule", { value: !0 });
        var i = function () {
            function e() { }
            return e.load = function (e, t, n) { return cc.warn("[EditorAsset]", "\u8be5\u51fd\u6570\u53ea\u5728\u7f16\u8f91\u5668\u73af\u5883\u5185\u6709\u6548\uff01") }, e
        }();
        n.default = i, cc._RF.pop()
    }, {}],
    FloatScore: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "2f3b7KWUHFPKaAtPdK0kv4m", "FloatScore");
        var i = this && this.__extends || function () {
            var e = function (t, n) {
                return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t } || function (e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(t, n)
            };
            return function (t, n) { function i() { this.constructor = t } e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i) }
        }(), o = this && this.__decorate || function (e, t, n, i) {
            var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("./MapManager"), a = cc._decorator, c = a.ccclass, s = a.property, u = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.add = null, t.score = null, t.addSpriteFrameArr = [], t.scoreFontArr = [], t.ding = null, t.addSprite = null, t
            }
            return i(t, e),
                t.prototype.onLoad = function () {
                    this.addSprite = this.add.getComponent(cc.Sprite)
                },
                t.prototype.start = function () { }, t.prototype.init = function (e) {
                    cc.audioEngine.play(this.ding, !1, .5);
                    var t = e + 1;
                    this.score.string = t.toString(), this.node.setScale(.7 + .05 * e), this.anim(t)
                },
                t.prototype.anim = function (e) {
                    r.default.Instance.MainGame.gainScore(e), this.node.runAction(cc.sequence(cc.spawn(cc.moveBy(1, cc.v2(0, 150)), cc.fadeOut(1).easing(cc.easeExponentialIn())), cc.removeSelf(!0)))
                },
                o([s(cc.Node)], t.prototype, "add", void 0),
                o([s(cc.Label)], t.prototype, "score", void 0),
                o([s(cc.SpriteFrame)], t.prototype, "addSpriteFrameArr", void 0),
                o([s(cc.Font)], t.prototype, "scoreFontArr", void 0),
                o([s({ type: cc.AudioClip })], t.prototype, "ding", void 0),
                t = o([c], t)
        }(cc.Component);
        n.default = u, cc._RF.pop()
    }, { "./MapManager": "MapManager" }],
    Fruit: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "20d34+5En5M1ZgG5lX4DT9s", "Fruit");
        var i = this && this.__extends || function () {
            var e = function (t, n) {
                return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t } || function (e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(t, n)
            };
            return function (t, n) { function i() { this.constructor = t } e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i) }
        }(), o = this && this.__decorate || function (e, t, n, i) {
            var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
            else for (var c = e.length - 1; c >= 0; c--)(o = e[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("../commonJs/GameTools"), a = e("../commonJs/GameConfig"), c = e("./MapManager"), s = e("./MusicManager"), u = e("./PoolManager"), l = cc._decorator, h = l.ccclass, d = l.property, g = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.fruit = null, t.shadow = null, t.type = 0, t.radius = 0, t.currentAngle = 270, t.timePerRound = 10, t.speed = 500, t.addSpeed = 1, t.moveStepCount = 0, t.targetFruitNum = 0, t.enterBeforeOrAfter = 1, t.pushAngle = 0, t.pushStepCount = 0, t.centralAngle = 0, t.backAngle = 0, t.backStepCount = 0, t.createPointTime = .015, t.moveDir = 1, t.onPath = !1, t.canMove = !1, t.match = !1, t.beMatch = !1, t.entering = !1, t.running = !1, t.speedUp = !1, t.pushing = !1, t.back = !1, t.canCreatePoint = !1, t.deathshift = !1, t.collEnter = !1, t.fruitSprite = null, t.collider = null, t.pathFruit = null, t.streak = null, t.realShadow = null, t
            }
            return i(t, e),
                t.prototype.onLoad = function () {
                    this.fruitSprite = this.fruit.getComponent(cc.Sprite), this.collider = this.node.getComponent(cc.CircleCollider)
                },
                t.prototype.start = function () { },
                t.prototype.init = function (e, t) {
                    this.fruitSprite.spriteFrame = t, this.type = e, this.fruit.setContentSize(c.default.Instance.fruitWidthArr[this.type], c.default.Instance.fruitWidthArr[this.type]), this.radius = this.fruit.width / 2, this.collider.radius = this.radius, this.centralAngle = cc.misc.radiansToDegrees(4 * Math.asin(this.radius / 2 / c.default.Instance.ringRadius)), this.realShadow.setContentSize(5 * this.radius / 2, 4 * this.radius / 5), this.shadow.setPosition(cc.v2(0, c.default.Instance.fruitShadowYArr[this.type]))
                },
                t.prototype.enterPath = function (e) {
                    cc.log("\u672a\u78b0\u649e\u5165\u8f68\u903b\u8f91\u5904\u7406"), this.currentAngle = e, this.onPath = !0, this.canMove = !0, this.canCreatePoint = !1;
                    var t = c.default.Instance.findFruitByNum(c.default.Instance.minFruitNum);
                    if (null != t) {
                        var n = t.getComponent("Fruit"), i = c.default.Instance.findFruitByNum(c.default.Instance.maxFruitNum), o = !1;
                        if (c.default.Instance.minFruitNum == c.default.Instance.maxFruitNum)
                            o = n.currentAngle > 180 ? this.currentAngle >= n.currentAngle - 180 && this.currentAngle < n.currentAngle : !(this.currentAngle < n.currentAngle + 180 && this.currentAngle > n.currentAngle);
                        else t.position.sub(this.node.position).mag() > i.position.sub(this.node.position).mag() && (o = !0);
                        o ? (c.default.Instance.insertFruitInNum(this.node, c.default.Instance.maxFruitNum + 1), c.default.Instance.fruitAddSpeed(c.default.Instance.maxFruitNum, c.default.Instance.maxFruitNum - 1)) : (c.default.Instance.insertFruitInNum(this.node, c.default.Instance.minFruitNum), c.default.Instance.fruitAddSpeedBack(this.node, c.default.Instance.minFruitNum + 1))
                    }
                    else c.default.Instance.insertFruitInNum(this.node, c.default.Instance.minFruitNum), this.canMove = !1, a.noTouchBool = !0, cc.log(a.noTouchBool)
                },
                t.prototype.collEnterPath = function (e) {
                    if (!this.collEnter) {
                        cc.log("\u78b0\u649e\u5165\u8f68\u903b\u8f91\u5904\u7406"), this.collEnter = !0, this.node.stopAllActions(), this.canCreatePoint = !1, this.pathFruit = e;
                        var t = this.pathFruit.getComponent("Fruit");
                        this.currentAngle = c.default.Instance.judgeFruitAngle(this.node.position);
                        var n = (255 - this.node.getPosition().mag()) / 1700, i = c.default.Instance.judgeFruitPos(this.currentAngle);
                        if (this.node.runAction(cc.moveTo(n, i)), n > .08 ? this.node.runAction(cc.sequence(cc.delayTime(n), cc.callFunc(function () {
                            this.pathFruit = null, this.onPath = !0, c.default.Instance.judgeGameEnd() ? c.default.Instance.gameEnd() : this.judgeBothSideFruit(1)
                        }, this))) : this.node.runAction(cc.sequence(cc.delayTime(.08), cc.callFunc(function () {
                            this.pathFruit = null, this.onPath = !0, c.default.Instance.judgeGameEnd() ? c.default.Instance.gameEnd() : this.judgeBothSideFruit(1)
                        }, this))), this.currentAngle > t.currentAngle ? this.currentAngle - t.currentAngle > 180 ? this.enterBeforeOrAfter = 1 : this.enterBeforeOrAfter = 0 : t.currentAngle - this.currentAngle > 180 ? this.enterBeforeOrAfter = 0 : this.enterBeforeOrAfter = 1, 1 == this.enterBeforeOrAfter) {
                            cc.log("\u5f80\u524d\u63a8\u78b0\u649e\u6c34\u679c"), c.default.Instance.insertFruitInNum(this.node, this.pathFruit.num + 1);
                            var o = 0;
                            if (o = (a = this.getNextFruitAngle(t.centralAngle, 0)) < t.currentAngle ? a < t.currentAngle - 180 ? a + 360 - t.currentAngle : t.currentAngle - a : a > t.currentAngle + 180 ? t.currentAngle + 360 - a : a - t.currentAngle, a < t.currentAngle && a > t.currentAngle - 180 ? c.default.Instance.pushAfterFruit(c.default.Instance.minFruitNum, this.pathFruit.num, o) : a > t.currentAngle && a > t.currentAngle + 180 ? c.default.Instance.pushAfterFruit(c.default.Instance.minFruitNum, this.pathFruit.num, o) : c.default.Instance.pushManyFruit(c.default.Instance.minFruitNum, this.pathFruit.num, o), this.node.num < c.default.Instance.maxFruitNum) {
                                cc.log("\u5f80\u540e\u63a8\u78b0\u649e\u6c34\u679c\u7684\u540e\u6c34\u679c"), this.pathFruit = c.default.Instance.findFruitByNum(this.node.num + 1);
                                var r = this.pathFruit.getComponent("Fruit");
                                (o = (a = this.getNextFruitAngle(r.centralAngle, 1)) > r.currentAngle ? r.currentAngle + 360 - a : r.currentAngle - a) > 180 ? (o = a - r.currentAngle, c.default.Instance.pushManyFruit(this.node.num + 1, c.default.Instance.maxFruitNum, o)) : c.default.Instance.pushAfterFruit(this.node.num + 1, c.default.Instance.maxFruitNum, o)
                            }
                        }
                        else {
                            c.default.Instance.insertFruitInNum(this.node, this.pathFruit.num), cc.log("\u5f80\u540e\u63a8\u78b0\u649e\u6c34\u679c");
                            var a;
                            o = 0;
                            if ((o = (a = this.getNextFruitAngle(t.centralAngle, 1)) > t.currentAngle ? t.currentAngle + 360 - a : t.currentAngle - a) > 180 ? (o = a - t.currentAngle, c.default.Instance.pushManyFruit(this.node.num + 1, c.default.Instance.maxFruitNum, o)) : c.default.Instance.pushAfterFruit(this.node.num + 1, c.default.Instance.maxFruitNum, o), this.node.num > c.default.Instance.minFruitNum) {
                                cc.log("\u5f80\u524d\u63a8\u78b0\u649e\u6c34\u679c\u7684\u524d\u6c34\u679c"), this.pathFruit = c.default.Instance.findFruitByNum(this.node.num - 1);
                                r = this.pathFruit.getComponent("Fruit");
                                (o = (a = this.getNextFruitAngle(r.centralAngle, 0)) < r.currentAngle ? a + 360 - r.currentAngle : a - r.currentAngle) > 180 ? (o = r.currentAngle - a, c.default.Instance.pushAfterFruit(c.default.Instance.minFruitNum, this.pathFruit.num, o)) : c.default.Instance.pushManyFruit(c.default.Instance.minFruitNum, this.pathFruit.num, o)
                            }
                        }
                    }
                },
                t.prototype.getNextFruitAngle = function (e, t) {
                    var n = this.centralAngle / 2 + e / 2;
                    return 1 == t ? this.currentAngle - n < 0 ? 360 + this.currentAngle - n : this.currentAngle - n : this.currentAngle + n > 360 ? this.currentAngle + n - 360 : this.currentAngle + n
                },
                t.prototype.getNextFruitPos = function (e, t) {
                    var n = this.centralAngle / 2 + e / 2, i = 0;
                    return i = 1 == t ? this.currentAngle - n < 0 ? 360 + this.currentAngle - n : this.currentAngle - n : this.currentAngle + n > 360 ? this.currentAngle + n - 360 : this.currentAngle + n, c.default.Instance.judgeFruitPos(i)
                },
                t.prototype.onCollisionEnter = function (e, t) {
                    if (!(a.updateOver || (this.running && "Fruit" == e.node.group && e.node.num == this.targetFruitNum && (cc.log("\u8ffd\u8d76\u6210\u529f"), this.running = !1, this.canMove = !1, this.speedUp = !1, this.moveDir = 1, this.timePerRound = 10, this.targetFruitNum = NaN, c.default.Instance.revisePosFromNum(this.node.num), this.judgeBothSideFruit(1)), this.beMatch || this.match || this.entering || "Fruit" != e.node.group))) {
                        if (!e.node.getComponent("Fruit").onPath) return;
                        this.onPath || this.collEnter || this.collEnterPath(e.node)
                    }
                },
                t.prototype.toMatch = function (e, t, n) {
                    if (!a.updateOver) {
                        if (cc.log("\u88ab\u5408\u6210\u903b\u8f91"), cc.log("\u5408\u6210\u65b9\u5411" + n), this.beMatch = !0, this.canMove && (this.canMove = !1), this.entering && (this.entering = !1, this.moveStepCount = 0), this.canCreatePoint && (this.canCreatePoint = !1), this.onPath)
                            if (8 != this.type) {
                                var i = cc.misc.radiansToDegrees(4 * Math.asin(c.default.Instance.fruitWidthArr[this.type + 1] / 4 / c.default.Instance.ringRadius)), o = this.centralAngle - (i - this.centralAngle) / 2;
                                this.node.num < e.num && this.node.num > c.default.Instance.minFruitNum ? c.default.Instance.pushAfterFruit(c.default.Instance.minFruitNum, this.node.num - 1, o) : this.node.num > e.num && this.node.num < c.default.Instance.maxFruitNum && c.default.Instance.pushManyFruit(this.node.num + 1, c.default.Instance.maxFruitNum, o), 1 == n ? c.default.Instance.pushAfterFruit(this.node.num + 2, c.default.Instance.maxFruitNum, (i - this.centralAngle) / 2) : 2 == n && this.node.num - 2 >= c.default.Instance.minFruitNum && c.default.Instance.pushManyFruit(c.default.Instance.minFruitNum, this.node.num - 2, (i - this.centralAngle) / 2)
                            }
                            else
                                this.node.num < e.num && this.node.num > c.default.Instance.minFruitNum ? c.default.Instance.pushAfterFruit(c.default.Instance.minFruitNum, this.node.num - 1, this.centralAngle) : this.node.num > e.num && this.node.num < c.default.Instance.maxFruitNum && c.default.Instance.pushManyFruit(this.node.num + 1, c.default.Instance.maxFruitNum, this.centralAngle);
                        void 0 != this.node.num && NaN != this.node.num && (c.default.Instance.deleteFruitByNum(this.node.num), this.node.num = NaN), this.node.stopAllActions(), this.node.zIndex = 10;
                        var r = this.node.position.add(this.node.position.sub(e.position).normalize().mul(30 - 2 * this.type)), s = 1.5 - .03 * this.type;
                        7 != this.type && 8 != this.type || (r = this.node.position.add(this.node.position.sub(e.position).normalize().mul(20 - 2 * this.type)), s = 1.4 - .03 * this.type), this.node.runAction(cc.sequence(cc.spawn(cc.sequence(cc.moveTo(.07, r), cc.moveTo(.13, e.position)), cc.sequence(cc.scaleTo(.13, s).easing(cc.easeSineOut()), cc.scaleTo(.07, 1).easing(cc.easeSineOut()))), cc.callFunc(function () {
                            var e = c.default.Instance.fruitArr.indexOf(this.node);
                            c.default.Instance.fruitArr.splice(e, 1), this.realShadow && this.realShadow.destroy()
                        }, this), cc.removeSelf()))
                    }
                },
                t.prototype.levelUp = function (e, t, n, i) {
                    if (!a.updateOver)
                        if (cc.log("\u5408\u6210\u5347\u7ea7\u903b\u8f91"), cc.log("\u5408\u6210\u65b9\u5411" + i), this.match = !0, 1 == i && (this.canMove = !1), 8 != this.type) {
                            s.default.Instance.playMusic(3, .65 + .05 * this.type, !1), c.default.Instance.createParticle(this.node.position, this.type), c.default.Instance.createRing(this.node.position, this.type), c.default.Instance.createJuice(this.node.position, this.type), c.default.Instance.createFloatScore(this.node.position, this.type);
                            var o = this.radius / c.default.Instance.fruitSpriteFrameArr[this.type + 1].getOriginalSize().width;
                            this.fruit.runAction(cc.sequence(cc.scaleTo(.2, .8).easing(cc.easeSineInOut()), cc.callFunc(function () {
                                this.fruitSprite.spriteFrame = c.default.Instance.fruitSpriteFrameArr[this.type + 1], this.fruit.setContentSize(c.default.Instance.fruitWidthArr[this.type + 1], c.default.Instance.fruitWidthArr[this.type + 1])
                            }, this), cc.scaleTo(.01, o), cc.scaleTo(.09, 1).easing(cc.easeSineOut()), cc.callFunc(function () { c.default.Instance.MainGame.gameBeginner && (c.default.Instance.MainGame.gameBeginner = !1), this.type++, this.match = !1, this.radius = this.fruit.width / 2, this.collider.radius = this.radius, this.centralAngle = cc.misc.radiansToDegrees(4 * Math.asin(this.radius / 2 / c.default.Instance.ringRadius)), this.realShadow.setContentSize(5 * this.radius / 2, 4 * this.radius / 5), this.shadow.setPosition(cc.v2(0, c.default.Instance.fruitShadowYArr[this.type])), c.default.Instance.revisePosBySelf(this.node.num), cc.log("\u5408\u6210\u7ed3\u675f"), c.default.Instance.judgeGameEnd() ? c.default.Instance.gameEnd() : n++ }, this), cc.delayTime(.1), cc.callFunc(function () { this.judgeBothSideFruit(n) }, this)))
                        } else this.boom()
                },
                t.prototype.boom = function () {
                    this.node.stopAllActions(), a.updateOver || this.fruit.runAction(cc.sequence(cc.delayTime(.2), cc.moveTo(.02, cc.v2(8, 7)), cc.moveTo(.02, cc.v2(-13, 3)), cc.moveTo(.02, cc.v2(3, -6)), cc.moveTo(.02, cc.v2(10, 4)), cc.moveTo(.02, cc.v2(0, 0)))), this.node.runAction(cc.sequence(cc.scaleTo(.2, .8).easing(cc.easeSineInOut()), cc.scaleTo(.1, 1.3).easing(cc.easeSineOut()), cc.callFunc(function () {
                        c.default.Instance.createParticle(this.node.position, this.type), c.default.Instance.createRing(this.node.position, this.type), c.default.Instance.createJuice(this.node.position, this.type), c.default.Instance.deleteFruitByNum(this.node.num);
                        var e = c.default.Instance.fruitArr.indexOf(this.node);
                        if (c.default.Instance.fruitArr.splice(e, 1), a.updateOver)
                            s.default.Instance.playMusic(5, 1, !1);
                        else {
                            cc.log("\u897f\u74dc\u7206\u70b8"), s.default.Instance.playMusic(4, 1, !1), c.default.Instance.createFloatScore(this.node.position, this.type), c.default.Instance.createWatermelon(this.node.position), c.default.Instance.cameraShake();
                            var t = this.node.num;
                            this.node.num = NaN, t != c.default.Instance.maxFruitNum + 1 && t != c.default.Instance.minFruitNum ? (c.default.Instance.pushAfterFruit(c.default.Instance.minFruitNum, t - 1, this.centralAngle / 2), c.default.Instance.pushManyFruit(t, c.default.Instance.maxFruitNum, this.centralAngle / 2), t < c.default.Instance.maxFruitNum ? c.default.Instance.findFruitByNum(t).getComponent("Fruit").judgeBothSideFruit(t) : (a.noTouchBool = !0, cc.log(a.noTouchBool))) : (a.noTouchBool = !0, cc.log(a.noTouchBool))
                        }
                        this.realShadow && this.realShadow.destroy()
                    }, this), cc.removeSelf(!0)))
                },
                t.prototype.judgeBothSideFruit = function (e) {
                    if (!a.updateOver) {
                        cc.log("\u5224\u65ad\u4e24\u4fa7\u6c34\u679c\u7c7b\u578b"), cc.log("\u68c0\u6d4b\u6b21\u6570" + e);
                        var t = null, n = null;
                        this.node.num != c.default.Instance.maxFruitNum && (n = c.default.Instance.findFruitByNum(this.node.num + 1)), this.node.num != c.default.Instance.minFruitNum && (t = c.default.Instance.findFruitByNum(this.node.num - 1));
                        var i = 0;
                        if (null != t) {
                            var o = t.getComponent("Fruit");
                            if (o.type == this.type) {
                                var r = t.position.sub(this.node.position).mag() / this.speed;
                                if (null != n)
                                    (s = n.getComponent("Fruit")).type == this.type ? (i = 3, s.toMatch(this.node, e, i)) : i = 1;
                                else
                                    i = 1;
                                return o.toMatch(this.node, e, i), void this.levelUp(r, !1, e, i)
                            }
                            if (null != n) {
                                if ((s = n.getComponent("Fruit")).type == this.type) {
                                    r = n.position.sub(this.node.position).mag() / this.speed;
                                    return i = 2, s.toMatch(this.node, e, i), void this.levelUp(r, !1, e, i)
                                }
                                return void this.tryToOverGame()
                            }
                        }
                        else if (null != n) {
                            var s;
                            if ((s = n.getComponent("Fruit")).type == this.type) {
                                r = n.position.sub(this.node.position).mag() / this.speed;
                                return i = 2, s.toMatch(this.node, e, i), void this.levelUp(r, !1, e, i)
                            }
                            return void this.tryToOverGame()
                        }
                        this.tryToOverGame()
                    }
                },
                t.prototype.tryToOverGame = function () {
                    c.default.Instance.judgeGameEnd() ? c.default.Instance.gameEnd() : c.default.Instance.operationStep >= c.default.Instance.resetOperationStepNum ? c.default.Instance.autoAddFruit() : (a.noTouchBool = !0, cc.log(a.noTouchBool))
                },
                t.prototype.createPoint = function () {
                    var e = u.default.Spawn("point");
                    e.parent = c.default.Instance.Streak, e.setPosition(this.node.position), e.setContentSize(2 * this.radius, 2 * this.radius), e.color = c.default.Instance.strokeColorArr[this.type], e.runAction(cc.sequence(cc.scaleTo(.2, 0), cc.removeSelf(!0)))
                },
                t.prototype.update = function (e) {
                    if (this.deathshift && this.realShadow && this.realShadow.setPosition(r.convetOtherNodeSpaceAR(this.shadow, c.default.Instance.Shadow)), !a.updateOver) {
                        if (this.onPath && this.canMove) {
                            var t = this.currentAngle;
                            this.pushing && (this.pushStepCount < 5 ? (this.pushStepCount++, t += this.pushAngle / 5) : (this.pushing = !1, this.back || (this.canMove = !1), this.pushStepCount = 0)), this.back && (this.backStepCount < 5 ? (this.backStepCount++, t -= this.backAngle / 5) : (this.back = !1, this.pushing || (this.canMove = !1), this.backStepCount = 0)), this.speedUp && (t += e * (360 / this.timePerRound) * this.moveDir, this.timePerRound > c.default.Instance.maxTimePerRound && (this.timePerRound -= this.addSpeed));
                            var n = cc.misc.degreesToRadians(t), i = cc.v2(c.default.Instance.ringRadius * Math.cos(n), c.default.Instance.ringRadius * Math.sin(n));
                            this.node.setPosition(i), this.currentAngle = t, this.currentAngle >= 360 ? this.currentAngle %= 360 : this.currentAngle <= -360 && (this.currentAngle %= -360)
                        }
                        if (this.entering)
                            if (this.moveStepCount < 5) {
                                this.moveStepCount++;
                                var o = this.pathFruit.getComponent("Fruit").getNextFruitPos(this.centralAngle, this.enterBeforeOrAfter), s = this.node.position.lerp(o, .1 * this.moveStepCount);
                                this.node.setPosition(s)
                            }
                            else {
                                this.entering = !1;
                                var u = this.pathFruit.getComponent("Fruit").getNextFruitPos(this.centralAngle, this.enterBeforeOrAfter);
                                this.node.setPosition(u), this.currentAngle = c.default.Instance.judgeFruitAngle(this.node.position), this.pathFruit = null, this.onPath = !0, this.judgeBothSideFruit(1)
                            }
                        this.canCreatePoint && (this.createPointTime -= e, this.createPointTime <= 0 && (this.createPointTime = .015, this.createPoint())), this.realShadow && this.realShadow.setPosition(r.convetOtherNodeSpaceAR(this.shadow, c.default.Instance.Shadow))
                    }
                },
                o([d(cc.Node)], t.prototype, "fruit", void 0),
                o([d(cc.Node)], t.prototype, "shadow", void 0),
                t = o([h], t)
        }(cc.Component);
        n.default = g, cc._RF.pop()
    }, { "../commonJs/GameConfig": "GameConfig", "../commonJs/GameTools": "GameTools", "./MapManager": "MapManager", "./MusicManager": "MusicManager", "./PoolManager": "PoolManager" }],
    GameConfig: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "f0663sWtfNKCKOL+Hvnt0cI", "GameConfig");
        var i = { GameClubButton: null, GameScene: null, launchScene: null, Bros: null, caS: null, MAIN_MENU_NUM: "Classic", gameScore: 0, standScore: 300, GAME_OVER_BOOL: !0, gameMaxScore: 0, updateOver: !1, publicGameBool: !1, ranLinkData: null, recGameData: null, InfoData: null, endShow0: null, endShow1: null, endShow2: null, endShow3: null, infoGameName: null, showText: null, startText: null, moreGameText: null, playAgainText: null, playNum: 0, noTouchBool: !0, returnRanNum: function (e, t) { return e + Math.floor(Math.random() * (t - e + 1)) } };
        t.exports = i, cc._RF.pop()
    }, {}],
    GameData: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "aff05VcW7lIjZOYTq3erU7E", "GameData");
        var i = {
            isOnline: !1,
            getData: function () {
                if (!this.isOnline) {
                    var e = cc.sys.localStorage.getItem("FruitKing_1");
                    return null == e || "" == e ? { gameMaxScore: 0 } : JSON.parse(e)
                }
            },
            setData: function (e) {
                if (!this.isOnline) {
                    var t = { gameMaxScore: e };
                    cc.sys.localStorage.setItem("FruitKing_1", JSON.stringify(t))
                }
            }
        };
        t.exports = i, cc._RF.pop()
    }, {}],
    GameTools: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "9e4e7c2meZG2L0zrZOXU2Q0", "GameTools");
        var i = {
            localConvertWorldPointAR: function (e) {
                return e ? e.convertToWorldSpaceAR(cc.v2(0, 0)) : null
            },
            localConvertWorldPoint: function (e) {
                return e ? e.convertToWorldSpace(cc.v2(0, 0)) : null
            },
            worldConvertLocalPointAR: function (e, t) {
                return e ? e.convertToNodeSpaceAR(t) : null
            },
            worldConvertLocalPoint: function (e, t) {
                return e ? e.convertToNodeSpace(t) : null
            },
            convetOtherNodeSpaceAR: function (e, t) {
                if (!e || !t)
                    return null;
                var n = this.localConvertWorldPointAR(e);
                return this.worldConvertLocalPointAR(t, n)
            },
            convetOtherNodeSpace: function (e, t) {
                if (!e || !t)
                    return null;
                var n = this.localConvertWorldPoint(e);
                return this.worldConvertLocalPoint(t, n)
            },
            LocalCoordinatesToTheWorldAR: function (e, t) {
                return e ? e.convertToWorldSpaceAR(t) : null
            },
            LocalCoordinatesToTheWorld: function (e, t) {
                return e ? e.convertToWorldSpace(t) : null
            },
            vecEquals: function (e, t) {
                return e.x == t.x && e.y == t.y
            },
            PlayBgm: function (e, t) {
                var n = this.bgmId;
                cc.loader.loadRes(this.loadMusicPath + e, cc.AudioClip, function (e, i) { e ? cc.error(e.message || e) : n.id = cc.audioEngine.play(i, !0, t) })
            },
            getRndInteger: function (e, t, n) {
                return n ? Math.floor(Math.random() * (t - e + 1)) + e : Math.random() * (t - e) + e
            }
        };
        t.exports = i, cc._RF.pop()
    }, {}],
    GameUiTools: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "b21e8tF461OFalpptyeuAE2", "GameUiTools");
        e("GameConfig");
        var i = {
            newSprite: function (e, t) {
                var n = new cc.Node;
                return t ? (e = e.split(".")[0], n.addComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(e)) : n.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame("res/raw-assets/resources/" + e), n
            },
            setNodeSpriteFrame: function (e, t) {
                e.getComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(t)
            },
            setButtonClickEvents: function (e, t, n, i, o) {
                var r = new Array;
                void 0 == t.length ? r[0] = t : r = t;
                for (var a = 0; a < r.length; a++) {
                    var c = new cc.Component.EventHandler;
                    c.target = e.node, c.component = e.node.name, c.handler = n, void 0 == t.length ? c.customEventData = i : c.customEventData = a;
                    var s = r[a].addComponent(cc.Button);
                    s.clickEvents.push(c), (void 0 == o || o) && (s.transition = cc.Button.Transition.SCALE, s.duration = .1, s.zoomScale = 1.2)
                }
            },
            scheduleOnce: function (e, t, n) {
                e.runAction(cc.sequence(cc.delayTime(n), cc.callFunc(t, e)))
            },
            loadingScene: function (e, t) {
                t ? cc.loader.loadRes("panel/LoadingLayer", function (t, n) {
                    var i = cc.instantiate(n);
                    cc.director.getScene().children[0].addChild(i), cc.director.preloadScene(e, function () { cc.director.loadScene(e) })
                }) : cc.director.preloadScene(e, function () { cc.director.loadScene(e) })
            },
            loadingLayer: function (e) {
                cc.loader.loadRes(e, function (e, t) {
                    if (!e) {
                        var n = cc.instantiate(t);
                        cc.director.getScene().children[0].addChild(n, 100)
                    }
                })
            }
        };
        t.exports = i, cc._RF.pop()
    }, { GameConfig: "GameConfig" }],
    HttpManagerJs: [function (e, t, n) {
        "use strict";
        var i;
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e
        }
        cc._RF.push(t, "197e1hfNnxIcJx73V3VhUxY", "HttpManagerJs");
        var r = e("GameConfig"), a = (
            o(i = { URL: "http://www.wesane.com/h5service.php/Interface/services", cacheList: null, isBusy: null, req: null, perform: null, retGameId: 0 }, "cacheList", []),
            o(i, "ctor", function () { }),
            o(i, "checkHave", function () { this.isBusy || this.sendOne() }),
            o(i, "httpInitUrl", function (e) { console.log("data", this.URL), this.retGameId = e }),
            o(i, "send", function (e, t, n, i) { this.cacheList.push({ type: e, data: t, func: n, target: i }), this.isBusy || this.sendOne() }),
            o(i, "sendOne", function () {
                if (0 != this.cacheList.length) {
                    this.isBusy = !0, this.perform = this.cacheList.shift(), this.req = cc.loader.getXMLHttpRequest(), this.req.onreadystatechange = this.onDataHandler.bind(this), this.req.onerror = this.onErrorHandler.bind(this), this.req.ontimeout = this.onTimeoutHandler.bind(this), this.req.timeout = 2e3, cc.log("pos", this.URL), this.req.open("POST", this.URL), this.req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
                    var e = this.returnLanguage();
                    console.log("gameIdid", this.retGameId);
                    var t = this.retGameId, n = { type: this.perform.type, gid: t, mid: null, data: this.perform.data, languageType: e }, i = "send=" + JSON.stringify(n);
                    this.req.send(i)
                }
            }),
            o(i, "onDataHandler", function () {
                if (404 != this.req.status) {
                    if (4 == this.req.readyState && this.req.status >= 200 && this.req.status <= 207 && this.req.responseText) {
                        var e = JSON.parse(this.req.responseText);
                        this.isBusy = !1, this.perform.target ? this.perform.func.call(this.perform.target, e.error, e.data, e.commendGame, e.gameInfo) : this.perform.func(e)
                    }
                }
                else {
                    var t = r.launchScene, n = r.Bros;
                    r.caS;
                    cc.director.loadScene(t, null, function () {
                        if (n) {
                            "";
                            var e = document.getElementById("GameDiv");
                            e && (e.style.backgroundImage = "")
                        }
                        cc.loader.onProgress = null, console.log("Success to load scene: " + t)
                    })
                }
            }),
            o(i, "returnLanguage", function () { return ("" + window.navigator.language).toLocaleLowerCase() }),
            o(i, "onErrorHandler", function () { cc.log("\u7f51\u7edc\u9519\u8bef"), this.isBusy = !1, this.perform.target ? this.perform.func.call(this.perform.target, -1) : this.perform.func(-1) }),
            o(i, "onTimeoutHandler", function () { cc.log("\u8bf7\u6c42\u8d85\u65f6"), this.isBusy = !1, this.perform.target ? this.perform.func.call(this.perform.target, -1) : this.perform.func(-1) }),
            o(i, "clearAll", function () { for (var e = this.cacheList.length, t = 0; t < e; t++) { var n = this.cacheList[t]; n && (n.target ? n.func.call(n.target, -1) : n.func(-1)) } this.cacheList.length = 0 }),
            i);
        t.exports = a, cc._RF.pop()
    }, { GameConfig: "GameConfig" }],
    LanguageSetJs: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "4754e8KuPZJCqklCNyKpG29", "LanguageSetJs");
        t.exports = {
            language_1: {
                game_name: "\u300c\u6c34\u679c\u5927\u738b\u300d",
                game_name1: "\u6c34\u679c\u5927\u738b",
                game_info: "\u70b9\u51fb\u5c4f\u5e55\uff0c\u53d1\u5c04\u6c34\u679c\uff0c\u76f8\u540c\u7684\u6c34\u679c\u53ef\u4ee5\u5408\u6210\u5347\u7ea7\u6210\u66f4\u9ad8\u7ea7\u7684\u6c34\u679c\u3002", txtStart: "\u5f00\u59cb",
                txtMore: "\u66f4\u591a\u6e38\u620f",
                txtAgain: "\u518d\u73a9\u4e00\u6b21",
                txtShare1: "\u5728\u6e38\u620f\u4e2d ",
                txtShare2: "\u5f97\u5206\u4e86\uff0c\u597d\u554a!\u4f60\u548c\u6211\u4e00\u8d77\u6765\u6bd4\u8d5b!",
                bgRgb: "#3698C5",
                gameT1: "\u5173\u6ce8\u6211\u4eec",
                gameT2: "\u7eb8\u724c\u63a5\u9f99",
                gameT3: "\u9526\u4e0a\u6dfb\u82b1",
                gameUrl1: "http://g.regogame.com/game/9/",
                gameUrl2: "http://g.regogame.com/game/3/",
                gameT11: "\u5173\u6ce8\u5fae\u4fe1",
                gameT12: "\u5173\u6ce8Kakao",
                gameT13: "\u5173\u6ce8Line",
                gameEndL: "\u6e38 \u620f \u7ed3 \u675f",
                gameEndL1: "\u7a0d \u5019 \u67e5 \u770b \u5206 \u6570"
            },
            language_2: {
                game_name: "\u300cFruit King\u300d",
                game_name1: "Fruit King",
                game_info: "Tap the screen to launch fruits. The same fruits can be synthesized and upgraded into more advanced fruits.",
                txtStart: "Start",
                txtMore: "More Game",
                txtAgain: "Play Again",
                txtShare1: "In Game ",
                txtShare2: " Let's play together!",
                bgRgb: "#3698C5",
                gameT1: "Follow Us",
                gameT2: "Thousand Flower",
                gameT3: "Eliminate Star",
                gameUrl1: "http://g.fromgame.com/game/53",
                gameUrl2: "http://g.fromgame.com/game/13",
                gameT11: "Focus WeChat",
                gameT12: "Focus Kakao",
                gameT13: "Focus Line",
                gameEndL: "Game OVer",
                gameEndL1: "View the score later"
            }
        }, cc._RF.pop()
    }, {}],
    LoadSceneJs: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "3ef908fwfNIwJsOjET8tCh2", "LoadSceneJs");
        var i = {
            goToCover: function (e, t, n, i, o) {
                var r = e;
                r = null == r || void 0 == r || e, console.log("LoadBoolBeforeLoadS", r), this.needShow = !1, r && r ? (this.needShow = !0, showMyAds()) : this.needShow = !1, this.needShow ? (void 0 == preloader && this.startGoToGame(n, i, o), resCompleteFlag = !0, adCompleteFlag && resCompleteFlag && this.startGoToGame(n, i, o)) : this.startGoToGame(n, i, o)
            },
            startGoToGame: function (e, t, n) {
                console.log("goToScene"), noAdGoToScene()
            }
        };
        t.exports = i, cc._RF.pop()
    }, {}],
    MainGameJS: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "0e7a8SkMLxEY7nCB1Bqi8WZ", "MainGameJS");
        var i = e("GameConfig"), o = e("GameUiTools"), r = e("MainManage"), a = e("GameData"), c = e("GameTools");
        cc.Class(
            {
                extends: cc.Component,
                properties: {
                    UIManager: cc.Node, MapManager: cc.Node, bgLayer: cc.Node, mainCamera: cc.Node, sceneScore: cc.Label, mute: { type: cc.AudioClip, default: null }, over: { type: cc.AudioClip, default: null }
                },
                onLoad: function () {
                    this.platFromNum = 1, this.judgeCurPlatform(), this.adapterScreen(), this.UICon = this.UIManager.getComponent("UIManager"), this.MapCon = this.MapManager.getComponent("MapManager"), this.CollisionFun(), this.gameData = a.getData(), this.gameBeginner = !0, i.gameMaxScore = this.gameData.gameMaxScore, i.noTouchBool = !0, i.GAME_OVER_BOOL = !0, this.gameWidth = cc.winSize.width, this.gameHeight = cc.winSize.height, this.sceneScore.node.y = this.gameHeight / 2 - 90, this.bgLayer.height = this.gameHeight, this.bgLayer.y = -this.gameHeight / 2, o.loadingLayer("panel/LinkIconSpr"), cc.audioEngine.play(this.mute, !1, 0)
                },
                CollisionFun: function () {
                    cc.director.getPhysicsManager().enabled = !0, this.manager = cc.director.getCollisionManager(), this.manager.enabled = !0, this.manager.enabledDebugDraw = !0, cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit | cc.PhysicsManager.DrawBits.e_pairBit | cc.PhysicsManager.DrawBits.e_centerOfMassBit | cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit, cc.director.getPhysicsManager().debugDrawFlags = 0, cc.director.getCollisionManager().enabledDebugDraw = !1
                },
                judgeCurPlatform: function () {
                    console.log(navigator.userAgent);
                    var e = function () {
                        var e = navigator.userAgent, t = /(?:Windows Phone)/.test(e), n = /(?:SymbianOS)/.test(e) || t, i = /(?:Android)/.test(e), o = /(?:Firefox)/.test(e), r = (/(?:Chrome|CriOS)/.test(e), /(?:iPad|PlayBook)/.test(e) || i && !/(?:Mobile)/.test(e) || o && /(?:Tablet)/.test(e)), a = /(?:iPhone)/.test(e) && !r;
                        return { isTablet: r, isPhone: a, isAndroid: i, isPc: !a && !i && !n }
                    }();
                    e.isAndroid || e.isPhone ? this.platFromNum = 1 : e.isTablet ? this.platFromNum = 2 : e.isPc && (this.platFromNum = 3)
                },
                adapterScreen: function () {
                    var e = cc.find("Canvas").getComponent(cc.Canvas);
                    2 == this.platFromNum || 3 == this.platFromNum ? (e.fitWidth = !0, e.fitHeight = !0) : (e.fitWidth = !0, e.fitHeight = !1)
                },
                init: function () {
                    this.addTouchEvents(), this.gameScore = 0, this.gameStart = !0, this.gameOver = !1
                },
                PlayBgm: function (e, t) {
                    var n = this;
                    cc.loader.loadRes("music/" + e, cc.AudioClip, function (e, i) { if (e) cc.error(e.message || e); else { var o = cc.audioEngine.play(i, !0, t); n.bgm = o } })
                },
                addTouchEvents: function () {
                    var e = this;
                    this.node.on(cc.Node.EventType.TOUCH_START, function (t) { if (i.GAME_OVER_BOOL && i.noTouchBool && !i.updateOver) return e.gameBeginner && e.UICon.beginnerOverAction(), i.noTouchBool = !1, e.MapCon.shotFruit(c.worldConvertLocalPointAR(e.MapManager, t.getLocation())), !0 }, this)
                },
                on_touch_move: function () {
                    console.log("touchMoved")
                },
                on_touch_end: function () {
                    console.log("touchEnd")
                },
                on_touch_cancel: function () {
                    console.log("touchCancel")
                },
                gainScore: function (e) {
                    this.gameScore += e, this.sceneScore.string = this.gameScore.toString()
                },
                gameEnd: function () {
                    this.gameOver || (cc.audioEngine.play(this.over, !1, 1), this.gameOver = !0, this.UICon.canNotTouch = !0, i.gameScore = this.gameScore, i.gameMaxScore < this.gameScore && (i.gameMaxScore = this.gameScore), i.GAME_OVER_BOOL = !1, a.setData(i.gameMaxScore), r.gameOverShowText(i.gameScore, 1), this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(this.gameEnd1.bind(this)))))
                },
                gameEnd1: function () {
                    this.UICon.gameOver()
                },
                initEndLayer: function () {
                    r.gotoEndLayer()
                },
                play: function () {
                    console.log(1);
                    var e = this;
                    //adBreak({ type: "next", name: "restart-game", beforeBreak: function () { e.enableButtons() }, afterBreak: function () { e.enableButtons() } })
                },
                enableButtons: function () { },
                start: function () {
                    this.init()
                },
                getGcd: function (e, t) {
                    var n = Math.max(e, t), i = Math.min(e, t);
                    return n % i == 0 ? i : this.getGcd(n % i, i)
                },
                getLcm: function (e, t) {
                    return e * t / this.getGcd(e, t)
                },
                update: function (e) { }
            }), cc._RF.pop()
    }, { GameConfig: "GameConfig", GameData: "GameData", GameTools: "GameTools", GameUiTools: "GameUiTools", MainManage: "MainManage" }],
    MainManage: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "946adGkxvdBmZXnlD952XtK", "MainManage");
        var i = e("HttpManagerJs"), o = e("LanguageSetJs"), r = e("GameConfig"), a = e("LoadSceneJs"), c = (e("GameUiTools"),
        {
            gameHttpId: 0,
            subScoreHttp: null,
            gameNameText: null,
            gameInfoText: null,
            txtStartText: null,
            txtMoreText: null,
            txtAgainText: null,
            gameEndLText: null,
            gameEndL1Text: null,
            bgLayRgb: null,
            gameEndName1: null,
            gameEndName2: null,
            gameEndUrl1: null,
            gameEndUrl2: null,
            langugeType: 1,
            ranLinkData: null,
            adShowBefore: !1,
            adShowAfter: !0,
            endLayCol: null,
            moreBtnBgCol: null,
            moreBtnTextCol: null,
            recGameData: null,
            recGameUrl: null,
            recGameDelPau: null,
            recGameDelPer: null,
            recGameimg1: null,
            recGameimg2: null,
            recGamePos: null,
            InfoData: null,
            endShow0: null,
            endShow1: null,
            endShow2: null,
            endShow3: null,
            infoGameName: null,
            showText: null,
            startText: null,
            moreGameText: null,
            playAgainText: null,
            endHttpShowInfo: null,
            moreGameUrl: null,
            init: function (e, t, n) {
                if (!r.publicGameBool) {
                    if (r.playNum >= 1)
                        return;
                    r.playNum++
                }
                r.launchScene = e, r.Bros = t, r.caS = n, this.curType = 1, this.getHttpGameId(), this.gamePV_load(), console.log("thisg", this.gameHttpId), i.httpInitUrl(this.gameHttpId);
                var o = this.initLanguage();
                this.gameNameText = o.game_name, this.gameInfoText = o.game_info, this.txtStartText = o.txtStart, this.txtMoreText = o.txtMore, this.txtAgainText = o.txtAgain, this.gameEndLText = o.gameEndL, this.gameEndL1Text = o.gameEndL1, this.bgLayRgb = o.bgRgb, this.gameEndName1 = o.gameT2, this.gameEndName2 = o.gameT3, this.gameEndUrl1 = o.gameUrl1, this.gameEndUrl2 = o.gameUrl2, this.langugeType = this.curType, a.goToCover(this.adShowBefore, this.adShowAfter, e, t, n)
            },
            getHttpGameId: function () {
                var e = window.location.href, t = e.substring(0, e.lastIndexOf("//") + 2), n = window.location.host, i = t + n + "/Service/Share/index";
                this.gameAllHttp = i, cc.log("gameAll", this.gameAllHttp), this.subScoreHttp = t + n + "/Service/Score/index", this.gamePvHttp = t + n + "/Service/GamePv/index";
                var o = document.URL, r = 0, a = o.substring(o.lastIndexOf("/game/") + 1, o.length).split("/");
                a.length >= 2 && (r = a[1]), this.gameHttpId = r, cc.log("gameId", r);
                e.substring(e.lastIndexOf("//") + 4, e.lastIndexOf("com") + 3);
                this.moreGameUrl = "http://m.wesane.com/"
            },
            gameOverShowText: function (e, t) {
                //this.ajaxLoad("http://www.wesane.com/admin.php/Gamescore/saveGamescore", "gameScore=" + e + "&gameId=" + this.gameHttpId + "&gameType=" + t, this.scoreResult)
            },
            gamePV_load: function () {
                //this.ajaxLoad("http://www.wesane.com/admin.php/Activityshow/gamelogo", "gameID=" + this.gameHttpId, this.ajaxOnLogoResult)
            },
            ajaxOnLogoResult: function () { },
            ajaxLoad: function (e, t, n) {
                var i = cc.loader.getXMLHttpRequest();
                i.onreadystatechange = n, i.open("POST", e), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.send(t)
            },
            scoreResult: function (e) {
                if (null != e.currentTarget.response && "" != e.currentTarget.response) {
                    var t = JSON.parse(e.currentTarget.response); cc.log("endshow", t.content), c.endHttpShowInfo = t.content
                }
            },
            initLanguage: function () {
                var e = null;
                return cc.sys.language == cc.sys.LANGUAGE_CHINESE ? (this.curType = 1, e = o.language_1) : (cc.log("\u82f1\u6587"), this.curType = 2, e = o.language_2), e
            },
            getLinkGameReturn: function (e, t, n, i) {
                if (console.log("err0", e), console.log("err1", t), console.log("err2", n), console.log("err3", i), 0 == e) {
                    this.ranLinkData = t, console.log("LoadMainGameScnee");
                    var o = r.launchScene, c = r.Bros, s = r.caS;
                    a.goToCover(this.adShowBefore, this.adShowAfter, o, c, s)
                }
            },
            ranRecGameData: function () {
                if (null != this.recGameData && "" != this.recGameData) {
                    this.returnBool = !1;
                    var e = this.recGameData.length, t = r.returnRanNum(1, e) - 1;
                    cc.log("ranNNN", t), this.recGameUrl = this.recGameData[t].data_link, this.recGameDelPer = this.recGameData[t].delay_per, this.recGameDelPau = this.recGameData[t].delay_pau, this.recGameimg1 = this.recGameData[t].img_1, this.recGameimg2 = this.recGameData[t].img_2, this.recGamePos = this.recGameData[t].poistion
                }
            },
            ranLinkUrl: function () {
                if (null != this.ranLinkData && this.ranLinkData.gameList && null != this.ranLinkData.gameList) {
                    var e = this.ranLinkData.gameList.length, t = r.returnRanNum(1, e) - 1;
                    return cc.log("templ", t, this.ranLinkData.gameList), cc.log("url", this.ranLinkData.gameList[0].gameName, this.ranLinkData.gameList[0].gameUrl), t
                }
                return null
            },
            gotoEndLayer: function () {
                if (cc.find("Canvas").getComponent("MainGameJS").UICon.count++, console.log("\u8c03\u7528\u5e7f\u544a"), r.publicGameBool)
                    this.showGameEndLayer();
                else {
                    if (adEndComplete = !1, resEndComplete = !1, this.needShow = null, 1 == window.navigator.onLine) {
                        var e = this.adShowAfter;
                        console.log("ad", e), (e = null == e || void 0 == e || this.adShowAfter) ? (this.needShow = !0, console.log("showMyad"), showMyAds()) : this.needShow = !1
                    }
                    else
                        console.log("showOver1"), this.showGameEndLayer(), this.needShow = null;
                    console.log("showMyad2", this.needShow), null != this.needShow && (console.log("showMyad3"), this.needShow ? (console.log("pre", preloader), void 0 == preloader && this.showGameEndLayer(), resEndComplete = !0, adEndComplete && resEndComplete && (console.log("showOver1"), this.showGameEndLayer())) : (console.log("gam"), this.showGameEndLayer()))
                }
            },
            showGameEndLayer: function () { cc.find("Canvas").getComponent("MainGameJS").gameEnd1() }
        });
        t.exports = c, cc._RF.pop()
    }, { GameConfig: "GameConfig", GameUiTools: "GameUiTools", HttpManagerJs: "HttpManagerJs", LanguageSetJs: "LanguageSetJs", LoadSceneJs: "LoadSceneJs" }],
    MapManager: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "90655Wr6VtFWZFbE+GZoVXW", "MapManager");
        var i = this && this.__extends || function () {
            var e = function (t, n) { return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t } || function (e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(t, n) };
            return function (t, n) { function i() { this.constructor = t } e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i) }
        }(), o = this && this.__decorate || function (e, t, n, i) {
            var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (o = e[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r, a = e("../commonJs/GameTools"), c = e("../commonJs/GameConfig"), s = e("./PoolManager"), u = e("./MusicManager");
        (function (e) { e[e.GS_INIT = 0] = "GS_INIT", e[e.GS_PLAYING = 1] = "GS_PLAYING", e[e.GS_END = 2] = "GS_END" })(r || (r = {}));
        var l = function () { return function () { } }(), h = cc._decorator, d = h.ccclass, g = h.property, m = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.mainGame = null, t.Shadow = null, t.Streak = null, t.Fruit = null, t.center = null, t.ring = null, t.sineWave = null, t.fruitSpriteFrameArr = [], t.particle1SpriteFrameArr = [], t.particle2SpriteFrameArr = [], t.ringSpriteFrameArr = [], t.juiceSpriteFrameArr = [], t.watermelonSpriteFrameArr = [], t.ringRadius = 255, t.maxFruitNum = 0, t.minFruitNum = 0, t.maxTimePerRound = 1, t.typeNum = 0, t.operationStep = 0, t.resetOperationStepNum = 3, t.autoAddFruitNum = 1, t.testFruitBoom = !1, t.fruitArr = [], t.pathArr = [], t.fruitWidthArr = [39, 55, 78, 102, 120, 142, 168, 198, 220], t.fruitShadowYArr = [-20, -27, -37, -50, -58, -68, -82, -94, -109], t.strokeColorArr = [new cc.Color(108, 212, 255), new cc.Color(255, 118, 154), new cc.Color(238, 81, 240), new cc.Color(255, 252, 66), new cc.Color(255, 189, 66), new cc.Color(255, 128, 184), new cc.Color(45, 225, 91), new cc.Color(178, 111, 59), new cc.Color(45, 225, 91)], t.typeArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 7], t.MainGame = null, t.memberZIndex = { fruit: 5, particle: 100, watermelon: 120 }, t.sineWaveEffect = null, t.currentFruit = null, t._curState = r.GS_INIT, t
            }
            var n;
            return i(t, e), n = t,
                t.prototype.onLoad = function () {
                    null != n.Instance && n.Instance.destroy(), n.Instance = this, this.MainGame = this.mainGame.getComponent("MainGameJS"), this.node.width = this.MainGame.gameWidth, this.node.height = this.MainGame.gameHeight
                },
                t.prototype.start = function () {
                    this.curState = r.GS_PLAYING, c.updateOver = !1, this.createFruit(cc.v2(0, -this.ringRadius), 0), this.fruitArr[0].setScale(1), this.fruitArr[0].getComponent("Fruit").realShadow.setScale(1), this.fruitArr[0].getComponent("Fruit").onPath = !0, this.fruitArr[0].num = 0, this.MainGame.gameBeginner && this.MainGame.UICon.beginnerHandAction(cc.v2(0, -this.ringRadius)), this.createFruit(cc.v2(0, 0), 0), this.currentFruit = this.fruitArr[1], this.fruitArr[1].setScale(1), this.fruitArr[1].getComponent("Fruit").realShadow.setScale(1)
                },
                Object.defineProperty(t.prototype, "curState",
                    {
                        set: function (e) {
                            var t = this;
                            switch (e) {
                                case r.GS_PLAYING: setTimeout(function () { t.MainGame.addTouchEvents() }, .1);
                                    break;
                                case r.GS_END: setTimeout(function () { t.MainGame.reMoveTouchEvents() }, .1)
                            }
                            this._curState = e
                        }, enumerable: !0, configurable: !0
                    }),
                t.prototype.createFruit = function (e, t) {
                    var n = s.default.Spawn("fruit");
                    this.Fruit.addChild(n, this.memberZIndex.fruit), n.setPosition(e), n.setScale(0);
                    var i = n.getComponent("Fruit");
                    i.realShadow = this.createShadow(e), i.init(t, this.fruitSpriteFrameArr[t]), this.fruitArr.push(n)
                },
                t.prototype.createShadow = function (e) {
                    var t = s.defa
                    ult.Spawn("shadow"); return t.parent = this.Shadow, t.setPosition(e), t
                },
                t.prototype.shotFruit = function (e) {
                    cc.log("\u53d1\u5c04\u6c34\u679c");
                    var t = e.sub(cc.v2(0, 0)).normalize().mul(this.ringRadius), n = this.judgeFruitAngle(t);
                    u.default.Instance.playMusic(0, .3, !1), this.operationStep++, this.currentFruit.getComponent("Fruit").canCreatePoint = !0, this.currentFruit.runAction(cc.sequence(cc.moveTo(.15, t), cc.callFunc(function (e, t) { e.getComponent("Fruit").enterPath(n) }, this, this))), this.preShot()
                },
                t.prototype.autoAddFruit = function () {
                    cc.log("\u65b0\u589e\u6c34\u679c\u5230\u961f\u5c3e"), this.operationStep = 0;
                    for (var e = (0 == this.autoAddFruitNum ? this.findFruitByNum(this.minFruitNum) : this.findFruitByNum(this.maxFruitNum)).getComponent("Fruit"), t = cc.v2(600, 600), n = a.getRndInteger(0, 2, !0); n == e.type;)
                        n = a.getRndInteger(0, 2, !0);
                    this.createFruit(t, n);
                    var i = this.fruitArr[this.fruitArr.length - 1], o = i.getComponent("Fruit");
                    o.onPath = !0, o.currentAngle = e.getNextFruitAngle(o.centralAngle, this.autoAddFruitNum);
                    var r = e.getNextFruitPos(o.centralAngle, this.autoAddFruitNum);
                    i.setPosition(r), 0 == this.autoAddFruitNum ? (this.insertFruitInNum(i, this.minFruitNum), this.autoAddFruitNum = 1) : (this.insertFruitInNum(i, this.maxFruitNum + 1), this.autoAddFruitNum = 0), o.realShadow.setScale(1), i.runAction(cc.sequence(cc.scaleTo(.2, 1.2).easing(cc.easeSineInOut()), cc.scaleTo(.1, 1).easing(cc.easeSineOut()), cc.callFunc(function () { this.tryToOverGame() }, o)))
                },
                t.prototype.judgeFruitAngle = function (e) {
                    var t = cc.misc.radiansToDegrees(Math.atan2(e.y, e.x));
                    return t < 0 && (t += 360), t
                },
                t.prototype.judgeFruitPos = function (e) {
                    var t = cc.misc.degreesToRadians(e);
                    return cc.v2(this.ringRadius * Math.cos(t), this.ringRadius * Math.sin(t))
                },
                t.prototype.preShot = function () {
                    var e = a.getRndInteger(0, 9, !1), t = 0;
                    e < 2.5 ? t = 0 : e >= 2.5 && e < 5 ? t = 1 : e >= 5 && e < 8 ? t = 2 : e >= 8 && (t = 3), this.testFruitBoom && (t = this.typeArr[this.typeNum], this.typeNum++), this.createFruit(cc.v2(0, 0), t), this.currentFruit = this.fruitArr[this.fruitArr.length - 1], this.currentFruit.runAction(cc.scaleTo(.4, 1)), this.currentFruit.getComponent("Fruit").realShadow.runAction(cc.scaleTo(.4, 1))
                },
                t.prototype.revisePosFromNum = function (e) {
                    var t = this.findFruitByNum(e);
                    if (t) {
                        var n = t.getComponent("Fruit"), i = null, o = 0;
                        if (e == this.maxFruitNum ? (i = this.findFruitByNum(e - 1), o = 1) : i = this.findFruitByNum(e + 1), i) {
                            var r = i.getComponent("Fruit");
                            n.canMove = !1, t.setPosition(r.getNextFruitPos(n.centralAngle, o)), n.currentAngle = this.judgeFruitAngle(t.position), cc.log("\u4fee\u6b63\u81ea\u8eab\u4f4d\u7f6e\u6210\u529f")
                        }
                    }
                },
                t.prototype.revisePosBySelf = function (e) {
                    cc.log("\u6839\u636e" + e + "\u53f7\u6c34\u679c\u4fee\u6b63\u4e24\u4fa7\u6c34\u679c\u4f4d\u7f6e");
                    for (var t = e; t < this.maxFruitNum; t++) {
                        var n = this.findFruitByNum(t).getComponent("Fruit"), i = this.findFruitByNum(t + 1), o = i.getComponent("Fruit");
                        i.setPosition(n.getNextFruitPos(o.centralAngle, 1)), o.currentAngle = this.judgeFruitAngle(i.position)
                    }
                    for (t = e; t > this.minFruitNum; t--) {
                        n = this.findFruitByNum(t).getComponent("Fruit");
                        var r = this.findFruitByNum(t - 1), a = r.getComponent("Fruit");
                        r.setPosition(n.getNextFruitPos(a.centralAngle, 0)), a.currentAngle = this.judgeFruitAngle(r.position)
                    }
                },
                t.prototype.pushManyFruit = function (e, t, n) {
                    cc.log("\u5f80\u524d\u63a8\u52a8" + e + "\u5230" + t + "\u7684\u6c34\u679c" + n + "\u5ea6");
                    for (var i = e; i <= t; i++) {
                        var o = this.findFruitByNum(i).getComponent("Fruit");
                        o.canMove = !0, o.pushing = !0, o.pushStepCount = 0, o.pushAngle = n
                    }
                },
                t.prototype.pushAfterFruit = function (e, t, n) {
                    cc.log("\u5f80\u540e\u63a8\u52a8" + e + "\u5230" + t + "\u7684\u6c34\u679c" + n + "\u5ea6");
                    for (var i = e; i <= t; i++) {
                        var o = this.findFruitByNum(i).getComponent("Fruit");
                        o.canMove = !0, o.back = !0, o.backStepCount = 0, o.backAngle = n
                    }
                },
                t.prototype.findFruitByNum = function (e) {
                    for (var t = 0; t < this.fruitArr.length; t++)
                        if (this.fruitArr[t].num == e)
                            return this.fruitArr[t];
                    return null
                },
                t.prototype.insertFruitInNum = function (e, t) {
                    if (cc.log("\u5728" + t + "\u5904\u63d2\u5165\u6c34\u679c"), t > this.maxFruitNum)
                        this.maxFruitNum++;
                    else
                        for (var n = 0; n < this.fruitArr.length; n++)
                            void 0 != this.fruitArr[n].num && this.fruitArr[n].num >= t && (this.fruitArr[n].num++, this.fruitArr[n].num > this.maxFruitNum && (this.maxFruitNum = this.fruitArr[n].num));
                    e.num = t, cc.log("\u5f53\u524d\u5e8f\u53f7\u6700\u5927\u4e3a" + this.maxFruitNum)
                },
                t.prototype.deleteFruitByNum = function (e) {
                    for (var t = 0; t < this.fruitArr.length; t++)
                        void 0 != this.fruitArr[t].num && this.fruitArr[t].num > e && this.fruitArr[t].num--;
                    this.maxFruitNum--
                },
                t.prototype.fruitAddSpeed = function (e, t) {
                    cc.log("\u5c06" + e + "\u53f7\u6c34\u679c\u5f80\u524d\u52a0\u901f");
                    for (var n = 0; n < this.fruitArr.length; n++) {
                        var i = this.fruitArr[n].getComponent("Fruit");
                        i.onPath && this.fruitArr[n].num >= e && (i.timePerRound = 10, i.speedUp = !0, i.moveDir = 1, this.fruitArr[n].num == e && (i.targetFruitNum = t, i.running = !0))
                    }
                },
                t.prototype.fruitNormalSpeedAfter = function (e) {
                    for (var t = 0; t < this.fruitArr.length; t++) {
                        var n = this.fruitArr[t].getComponent("Fruit");
                        n.onPath && this.fruitArr[t].num >= e && (n.timePerRound = 10, n.speedUp = !1)
                    }
                },
                t.prototype.fruitAddSpeedBack = function (e, t) {
                    cc.log("\u5c06" + e.num + "\u53f7\u6c34\u679c\u5f80\u540e\u52a0\u901f");
                    var n = e.getComponent("Fruit");
                    n.moveDir = -1, n.timePerRound = 10, n.speedUp = !0, n.running = !0, n.targetFruitNum = t
                },
                t.prototype.createParticle = function (e, t) {
                    for (var n = a.getRndInteger(25, 30, !0), i = 0; i < n; i++) {
                        var o = s.default.Spawn("particle");
                        this.node.addChild(o, this.memberZIndex.particle), o.getComponent(cc.Sprite).spriteFrame = i % 2 == 0 ? this.particle1SpriteFrameArr[t] : this.particle2SpriteFrameArr[t];
                        var r = e.x + a.getRndInteger(-10, 10, !1), c = e.y + a.getRndInteger(-10, 10, !1);
                        o.setPosition(cc.v2(r, c)), 8 == t ? o.setScale(a.getRndInteger(1, 2, !1), a.getRndInteger(1, 2, !1)) : o.setScale(a.getRndInteger(2, 3, !1), a.getRndInteger(2, 3, !1)), o.opacity = a.getRndInteger(150, 255, !0), o.angle = a.getRndInteger(0, 360, !1);
                        var u = a.getRndInteger(0, 360, !1), l = cc.misc.degreesToRadians(a.getRndInteger(0, 360, !0)), h = a.getRndInteger(10, this.fruitWidthArr[t] + 90, !0);
                        8 == t && (h += a.getRndInteger(50, 150, !1));
                        var d = cc.v2(e.x + h * Math.cos(l), e.y + h * Math.sin(l));
                        o.runAction(cc.sequence(cc.spawn(cc.rotateTo(.3, u), cc.moveTo(.3, d)), cc.scaleTo(.5, 0), cc.removeSelf()))
                    }
                },
                t.prototype.createRing = function (e, t) {
                    var n = this, i = [e, cc.v2(0, 0), cc.v2(0, 0)], o = a.getRndInteger(0, 360, !1), r = a.getRndInteger(10, 20, !1), c = o + a.getRndInteger(45, 90, !1), u = a.getRndInteger(30, 40, !1);
                    i[1] = cc.v2(e.x + r * Math.cos(o), e.y + r * Math.sin(o)), i[2] = cc.v2(e.x + u * Math.cos(c), e.y + u * Math.sin(c));
                    for (var l = function (e) {
                        setTimeout(function () {
                            var o = s.default.Spawn("ring");
                            n.node.addChild(o, n.memberZIndex.particle), o.getComponent(cc.Sprite).spriteFrame = n.ringSpriteFrameArr[t], o.setPosition(i[e]), o.setScale(0), o.runAction(cc.sequence(cc.spawn(cc.scaleTo(.6 - .1 * e, 2 - .2 * e), cc.fadeOut(.6 - .1 * e).easing(cc.easeExponentialIn())), cc.removeSelf(!0)))
                        }, .1 * e)
                    }, h = 0; h < 1; h++)
                        l(h)
                },
                t.prototype.createJuice = function (e, t) {
                    var n = s.default.Spawn("juice");
                    this.node.addChild(n, this.memberZIndex.particle), n.getComponent(cc.Sprite).spriteFrame = this.juiceSpriteFrameArr[t], n.setPosition(e), n.setScale(0), n.angle = a.getRndInteger(0, 360, !1);
                    var i = a.getRndInteger(150, 255, !0);
                    n.runAction(cc.sequence(cc.spawn(cc.scaleTo(.15, 1.5), cc.fadeTo(.15, i)), cc.spawn(cc.fadeOut(.75).easing(cc.easeExponentialIn()), cc.moveBy(.75, cc.v2(0, -20))), cc.removeSelf(!0)))
                },
                t.prototype.createFloatScore = function (e, t) {
                    var n = s.default.Spawn("floatScore");
                    this.node.addChild(n, this.memberZIndex.particle), n.setPosition(e), n.getComponent("FloatScore").init(t)
                },
                t.prototype.createWatermelon = function (e) {
                    for (var t = 0; t < a.getRndInteger(40, 50, !0); t++) {
                        var n = new cc.Node;
                        this.node.addChild(n, this.memberZIndex.watermelon), n.setPosition(cc.v2(e.x + a.getRndInteger(-60, 60, !1), e.y + a.getRndInteger(-60, 60, !1))), n.setScale(.1 + .021 * t), n.angle = a.getRndInteger(0, 360, !1), n.addComponent(cc.Sprite).spriteFrame = this.watermelonSpriteFrameArr[a.getRndInteger(0, 4, !0)];
                        var i = cc.misc.degreesToRadians(a.getRndInteger(0, 360, !1));
                        e.x < -180 ? i = 1 == a.getRndInteger(0, 1, !0) ? cc.misc.degreesToRadians(a.getRndInteger(0, 90, !1)) : cc.misc.degreesToRadians(a.getRndInteger(180, 360, !1)) : e.x > 180 && (i = 1 == a.getRndInteger(0, 1, !0) ? cc.misc.degreesToRadians(a.getRndInteger(90, 270, !1)) : cc.misc.degreesToRadians(a.getRndInteger(0, 360, !1)));
                        var o = this.MainGame.gameHeight, r = cc.v2(n.x + o * Math.cos(i), n.y + o * Math.sin(i)), c = 0;
                        c = r.x < n.x ? 200 * a.getRndInteger(2, 5, !1) : 200 * a.getRndInteger(-5, -2, !1);
                        n.y, a.getRndInteger(100, 300, !1);
                        var s = a.getRndInteger(1, 1.8, !1);
                        n.runAction(cc.sequence(cc.spawn(cc.moveTo(s, r).easing(cc.easeQuarticActionOut()), cc.rotateTo(s, c)), cc.removeSelf(!0)))
                    }
                },
                t.prototype.cameraShake = function () {
                    this.MainGame.mainCamera.runAction(cc.sequence(cc.moveTo(.03, cc.v2(8, 7)), cc.moveTo(.03, cc.v2(-9, 7)), cc.moveTo(.03, cc.v2(-13, 3)), cc.moveTo(.03, cc.v2(3, -6)), cc.moveTo(.03, cc.v2(-5, 5)), cc.moveTo(.03, cc.v2(7, -8)), cc.moveTo(.03, cc.v2(-14, -10)), cc.moveTo(.03, cc.v2(3, 10)), cc.moveTo(.03, cc.v2(0, 0))))
                },
                t.prototype.judgeGameEnd = function () {
                    for (var e = this.fruitArr, t = 0, n = 0; n < e.length; n++) {
                        var i = e[n].getComponent("Fruit");
                        i.onPath && (t += i.centralAngle)
                    }
                    if (cc.log("\u68c0\u6d4b\u6e38\u620f\u80fd\u5426\u7ed3\u675f" + t), t >= 359) {
                        var o = this.findFruitByNum(this.minFruitNum), r = this.findFruitByNum(this.maxFruitNum);
                        o.getChildByName("sprite").runAction(cc.sequence(cc.tintTo(.5, 255, 0, 0), cc.tintTo(.5, 255, 255, 255), cc.tintTo(.5, 255, 0, 0), cc.tintTo(.5, 255, 255, 255))), r.getChildByName("sprite").runAction(cc.sequence(cc.tintTo(.5, 255, 0, 0), cc.tintTo(.5, 255, 255, 255), cc.tintTo(.5, 255, 0, 0), cc.tintTo(.5, 255, 255, 255)));
                        var c = o.getComponent("Fruit"), s = r.getComponent("Fruit");
                        if (c.type >= s.type) {
                            (d = new l).center = a.localConvertWorldPointAR(r), d.radius = s.radius + c.radius;
                            var u = this.findFruitByNum(this.minFruitNum + 1);
                            (g = new l).center = a.localConvertWorldPointAR(u), g.radius = u.getComponent("Fruit").radius + c.radius;
                            var h = a.worldConvertLocalPointAR(this.Fruit, this.getCircleIntersection(d, g));
                            c.deathshift = !0, cc.tween(o).to(.2, { position: h }).call(function () { c.deathshift = !1 }).start()
                        }
                        else {
                            var d;
                            (d = new l).center = a.localConvertWorldPointAR(o), d.radius = c.radius + s.radius;
                            var g, m = this.findFruitByNum(this.maxFruitNum - 1);
                            (g = new l).center = a.localConvertWorldPointAR(m), g.radius = m.getComponent("Fruit").radius + s.radius;
                            h = a.worldConvertLocalPointAR(this.Fruit, this.getCircleIntersection(d, g));
                            s.deathshift = !0, cc.tween(r).to(.2, { position: h }).call(function () { s.deathshift = !1 }).start()
                        }
                        return !0
                    }
                    return !1
                },
                t.prototype.getCircleIntersection = function (e, t) {
                    var n, i, o = e.center.x, r = e.center.y, c = e.radius, s = t.center.x, u = t.center.y, l = t.radius, h = Math.sqrt(Math.pow(s - o, 2) + Math.pow(u - r, 2)), d = -1 / ((u - r) / (s - o)), g = (Math.pow(c, 2) - Math.pow(l, 2) + Math.pow(h, 2)) / (2 * h);
                    n = o + g * (s - o) / h, i = r + g * (u - r) / h;
                    var m = Math.sqrt(Math.pow(c, 2) - Math.pow(g, 2)), p = cc.v2(0, 0), f = cc.v2(0, 0);
                    return p.x = n - m / Math.sqrt(1 + Math.pow(d, 2)), p.y = i + d * (p.x - n), f.x = n + m / Math.sqrt(1 + Math.pow(d, 2)), f.y = i + d * (f.x - n), p.sub(a.localConvertWorldPointAR(this.node)).mag() > f.sub(a.localConvertWorldPointAR(this.node)).mag() ? p : f
                },
                t.prototype.gameEnd = function () {
                    if (this._curState != r.GS_END) {
                        this._curState = r.GS_END, cc.log("\u6e38\u620f\u7ed3\u675f"), c.updateOver = !0, c.noTouchBool = !1;
                        for (var e = 0; e < this.fruitArr[e].length; e++)
                            this.fruitArr[e].stopAllActions();
                        this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(this.destroyAllFruit.bind(this))));
                        var t = .1 * this.fruitArr.length + 2.5;
                        this.node.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(function () { this.MainGame.gameEnd() }, this)))
                    }
                },
                t.prototype.destroyAllFruit = function () {
                    this.currentFruit.stopAllActions(), this.currentFruit.runAction(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.1, 0), cc.removeSelf(!0))), this.currentFruit.getComponent("Fruit").realShadow.destroy();
                    for (var e = 0; e < this.fruitArr.length; e++)
                        this.fruitArr[e] != this.currentFruit && this.fruitArr[e].runAction(cc.sequence(cc.delayTime(.1 * e), cc.callFunc(function (e) { e.getComponent("Fruit").boom() }, this)))
                },
                t.Instance = null,
                o([g(cc.Node)], t.prototype, "mainGame", void 0),
                o([g(cc.Node)], t.prototype, "Shadow", void 0),
                o([g(cc.Node)], t.prototype, "Streak", void 0),
                o([g(cc.Node)], t.prototype, "Fruit", void 0),
                o([g(cc.Node)], t.prototype, "center", void 0),
                o([g(cc.Node)], t.prototype, "ring", void 0),
                o([g(cc.Node)], t.prototype, "sineWave", void 0),
                o([g([cc.SpriteFrame])], t.prototype, "fruitSpriteFrameArr", void 0),
                o([g([cc.SpriteFrame])], t.prototype, "particle1SpriteFrameArr", void 0),
                o([g([cc.SpriteFrame])], t.prototype, "particle2SpriteFrameArr", void 0),
                o([g([cc.SpriteFrame])], t.prototype, "ringSpriteFrameArr", void 0),
                o([g([cc.SpriteFrame])], t.prototype, "juiceSpriteFrameArr", void 0),
                o([g([cc.SpriteFrame])], t.prototype, "watermelonSpriteFrameArr", void 0),
                t = n = o([d], t)
        }(cc.Component);
        n.default = m, cc._RF.pop()
    }, { "../commonJs/GameConfig": "GameConfig", "../commonJs/GameTools": "GameTools", "./MusicManager": "MusicManager", "./PoolManager": "PoolManager" }],
    MusicManager: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "29b70ylQlVLNbeDp3lvsygj", "MusicManager");
        var i = this && this.__extends || function () {
            var e = function (t, n) {
                return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t } || function (e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                })(t, n)
            };
            return function (t, n) {
                function i() { this.constructor = t } e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }(), o = this && this.__decorate || function (e, t, n, i) {
            var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (o = e[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = cc._decorator, a = r.ccclass, c = r.property, s = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.allMusic = [], t
            } var n;
            return i(t, e), n = t, t.prototype.onLoad = function () {
                null != n.Instance && n.Instance.destroy(), n.Instance = this
            },
                t.prototype.start = function () { },
                t.prototype.playMusic = function (e, t, n) {
                    cc.audioEngine.play(this.allMusic[e], n, t)
                },
                t.Instance = null, o([c({ type: cc.AudioClip })], t.prototype, "allMusic", void 0), t = n = o([a], t)
        }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],
    PoolManager: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "1e5c17orU9FKYboWaaUobsX", "PoolManager");
        var i = this && this.__extends || function () {
            var e = function (t, n) {
                return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t } || function (e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                })(t, n)
            };
            return function (t, n) {
                function i() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }(), o = this && this.__decorate || function (e, t, n, i) {
            var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (o = e[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        }
            ;
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = cc._decorator, a = r.ccclass, c = r.property, s = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.allPrefab = [], t.allPrefabMap = null, t.poolMap = null, t
            }
            var n;
            return i(t, e), n = t, t.prototype.onLoad = function () {
                null != n.Instance && n.Instance.destroy(), n.Instance = this, this.allPrefabMap = new Map, this.poolMap = new Map;
                for (var e = 0; e < this.allPrefab.length; e++) {
                    this.allPrefabMap.set(this.allPrefab[e].name, this.allPrefab[e]), cc.log(this.allPrefab[e].name);
                    var t = new cc.NodePool;
                    this.poolMap.set(this.allPrefab[e].name, t)
                }
            },
                t.Spawn = function (e, t) {
                    if (void 0 === t && (t = null), !n.Instance.poolMap.has(e))
                        return cc.warn("no prefab named " + e), null;
                    var i = n.Instance.poolMap.get(e);
                    if (i.size() > 0) {
                        var o = i.get();
                        return null != t && (o.parent = t), o
                    }
                    var r = cc.instantiate(n.Instance.allPrefabMap.get(e));
                    return null != t && (r.parent = t), r
                },
                t.Despawn = function (e, t) {
                    if (!n.Instance.poolMap.has(e))
                        return cc.log("\u56de\u6536\u5931\u8d25,\u8282\u70b9\u540d : " + e), null;
                    n.Instance.poolMap.get(e).put(t)
                },
                t.GetPrefab = function (e) {
                    return n.Instance.allPrefabMap.has(e) ? n.Instance.allPrefabMap.get(e) : null
                },
                t.Preload = function (e, t) {
                    if (!n.Instance.poolMap.has(e))
                        return null;
                    for (var i = n.Instance.poolMap.get(e), o = 0; o < t; o++) {
                        var r = cc.instantiate(n.Instance.allPrefabMap.get(e));
                        i.put(r)
                    }
                },
                t.Instance = null,
                o([c([cc.Prefab])], t.prototype, "allPrefab", void 0),
                t = n = o([a], t)
        }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],
    Ribbon: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "9fc656MHrxPCJia7/r9vf0c", "Ribbon");
        var i = this && this.__extends || function () {
            var e = function (t, n) {
                return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t } || function (e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                })(t, n)
            };
            return function (t, n) { function i() { this.constructor = t } e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i) }
        }(),
            o = this && this.__decorate || function (e, t, n, i) {
                var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    a = Reflect.decorate(e, t, n, i);
                else
                    for (var c = e.length - 1; c >= 0; c--)
                        (o = e[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
                return r > 3 && a && Object.defineProperty(t, n, a), a
            };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("../commonJs/GameTools"), a = cc._decorator, c = a.ccclass, s = a.property, u = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.ribbonPre = null, t.ribbonSpriteFrame = [], t.ribbonPool = null, t.ribbonArr = [], t
            }
            return i(t, e), t.prototype.onLoad = function () {
                this.ribbonPool = new cc.NodePool;
                for (var e = 0; e < 80; e++) {
                    var t = cc.instantiate(this.ribbonPre);
                    t.getComponent(cc.Sprite).spriteFrame = this.ribbonSpriteFrame[r.getRndInteger(0, 4, !0)], this.ribbonPool.put(t)
                }
            },
                t.prototype.start = function () { },
                t.prototype.createRibbon = function (e) {
                    for (var t = [[360, 0], [-360, 0], [360, -71], [-360, -71]], n = 0; n < t.length; n++) {
                        if (t[n][0] >= 0)
                            var i = 1;
                        else
                            i = -1;
                        for (var o = 0; o < e; o++) {
                            var a = null;
                            (a = this.ribbonPool.size() > 0 ? this.ribbonPool.get() : cc.instantiate(this.ribbonPre)).parent = this.node, a.setPosition(cc.v2(t[n][0], t[n][1])), this.ribbonArr.push(a);
                            var c = a.position, s = c.x + r.getRndInteger(.5 * -cc.winSize.width, .05 * -cc.winSize.width, !0) * i, u = c.y + r.getRndInteger(100, 500, !0), l = cc.v2(c.x + .8 * (s - c.x), c.y + .5 * (u - c.y) + 200);
                            a.runAction(cc.spawn(cc.bezierTo(1, [c, l, cc.v2(s, u)]).easing(cc.easeCircleActionOut()), cc.moveBy(2.8, 0, 1.5 * -cc.winSize.height * r.getRndInteger(8, 12, !0) / 10).easing(cc.easeCubicActionIn()), cc.moveBy(2.8, r.getRndInteger(-300, 0, !0) * i, 0), cc.rotateBy(2, r.getRndInteger(360, 720, !0) * (2 * Math.round(Math.random()) - 1)), cc.sequence(cc.moveBy(2 * (.1 * Math.random() + .3), (25 * Math.random() + 25) * (2 * Math.round(Math.random()) - 1), 0), cc.moveBy(2 * (.1 * Math.random() + .3), (25 * Math.random() + 25) * (2 * Math.round(Math.random()) - 1), 0), cc.moveBy(2 * (.1 * Math.random() + .3), (25 * Math.random() + 25) * (2 * Math.round(Math.random()) - 1), 0))))
                        }
                    }
                    this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function () {
                        for (var e = 0; e < this.ribbonArr.length; e++)
                            this.ribbonPool.put(this.ribbonArr[e]);
                        this.ribbonArr = []
                    }, this)))
                },
                o([s(cc.Prefab)], t.prototype, "ribbonPre", void 0),
                o([s([cc.SpriteFrame])], t.prototype, "ribbonSpriteFrame", void 0),
                t = o([c], t)
        }(cc.Component);
        n.default = u, cc._RF.pop()
    }, { "../commonJs/GameTools": "GameTools" }],
    SineWave: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "bcb48mqOWtCO7QfOE93dTIu", "SineWave");
        var i = this && this.__extends || function () {
            var e = function (t, n) {
                return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t } || function (e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                })(t, n)
            };
            return function (t, n) { function i() { this.constructor = t } e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i) }
        }(), o = this && this.__decorate || function (e, t, n, i) {
            var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (o = e[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        }, r = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function a(e) {
                    try {
                        s(i.next(e))
                    }
                    catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        s(i.throw(e))
                    }
                    catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    e.done ? o(e.value) : new n(function (t) { t(e.value) }).then(a, c)
                }
                s((i = i.apply(e, t || [])).next())
            })
        }, a = this && this.__generator || function (e, t) {
            var n, i, o, r, a = {
                label: 0, sent: function () {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                }, trys: [], ops: []
            };
            return r = { next: c(0), throw: c(1), return: c(2) }, "function" == typeof Symbol && (r[Symbol.iterator] = function () { return this }), r;
            function c(e) {
                return function (t) {
                    return s([e, t])
                }
            }
            function s(r) {
                if (n)
                    throw new TypeError("Generator is already executing.");
                for (; a;)
                    try {
                        if (n = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done)
                            return o;
                        switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                            case 0:
                            case 1: o = r;
                                break;
                            case 4: return a.label++, { value: r[1], done: !1 };
                            case 5: a.label++, i = r[1], r = [0];
                                continue;
                            case 7: r = a.ops.pop(), a.trys.pop();
                                continue;
                            default: if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                a = 0;
                                continue
                            }
                                if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < o[1]) {
                                    a.label = o[1], o = r;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(r);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }r = t.call(e, a)
                    }
                    catch (e) {
                        r = [6, e], i = 0
                    }
                    finally {
                        n = o = 0
                    }
                if (5 & r[0])
                    throw r[1];
                return {
                    value: r[0] ? r[1] : void 0, done: !0
                }
            }
        };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c, s = cc._decorator, u = s.ccclass, l = s.property, h = s.requireComponent, d = s.executeInEditMode, g = s.disallowMultiple, m = s.executionOrder;
        (function (e) {
            e[e.Left = 1] = "Left", e[e.Right = 2] = "Right"
        })
            (c = n.SineWaveDirection || (n.SineWaveDirection = {}));
        var p = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._effect = null, t._amplitude = .05, t._angularVelocity = 10, t._frequency = 10, t._height = .5, t._direction = c.Left, t.sprite = null, t.material = null, t
            }
            return i(t, e),
                Object.defineProperty(t.prototype, "effect", { get: function () { return this._effect }, set: function (e) { this._effect = e, this.init() }, enumerable: !0, configurable: !0 }),
                Object.defineProperty(t.prototype, "amplitude", { get: function () { return this._amplitude }, set: function (e) { this._amplitude = e, this.updateProperties() }, enumerable: !0, configurable: !0 }),
                Object.defineProperty(t.prototype, "angularVelocity", { get: function () { return this._angularVelocity }, set: function (e) { this._angularVelocity = e, this.updateProperties() }, enumerable: !0, configurable: !0 }),
                Object.defineProperty(t.prototype, "frequency", { get: function () { return this._frequency }, set: function (e) { this._frequency = e, this.updateProperties() }, enumerable: !0, configurable: !0 }),
                Object.defineProperty(t.prototype, "height", { get: function () { return this._height }, set: function (e) { this._height = e, this.updateProperties() }, enumerable: !0, configurable: !0 }),
                Object.defineProperty(t.prototype, "direction", { get: function () { return this._direction }, set: function (e) { this._direction = e, this.updateProperties() }, enumerable: !0, configurable: !0 }),
                t.prototype.onLoad = function () {
                    this.init()
                },
                t.prototype.resetInEditor = function () {
                    this.init()
                },
                t.prototype.init = function () {
                    return r(this, void 0, void 0, function () {
                        return a(this, function (e) {
                            return this.sprite = this.node.getComponent(cc.Sprite), this.material = this.sprite.getMaterial(0), this.updateProperties(), [2]
                        })
                    })
                },
                t.prototype.setSpriteFrame = function (e) { this.sprite.spriteFrame = e, this.sprite.spriteFrame.getTexture().packable = !1, this.updateProperties() },
                t.prototype.updateProperties = function () {
                    if (!this.effect)
                        return cc.warn("[SineWave]", "\u8bf7\u6307\u5b9a Effect \u8d44\u6e90\uff01");
                    this.material.setProperty("amplitude", this._amplitude), this.material.setProperty("angularVelocity", this._angularVelocity), this.material.setProperty("frequency", this._frequency), this.material.setProperty("offset", 1 - this._height + this._amplitude), this.material.setProperty("toLeft", this._direction === c.Left)
                },
                o([l], t.prototype, "_effect", void 0),
                o([l({ type: cc.EffectAsset, tooltip: !1, readonly: !0 })], t.prototype, "effect", null),
                o([l], t.prototype, "_amplitude", void 0),
                o([l({ tooltip: !1 })], t.prototype, "amplitude", null),
                o([l], t.prototype, "_angularVelocity", void 0),
                o([l({ tooltip: !1 })], t.prototype, "angularVelocity", null),
                o([l], t.prototype, "_frequency", void 0),
                o([l({ tooltip: !1 })], t.prototype, "frequency", null),
                o([l], t.prototype, "_height", void 0),
                o([l({ tooltip: !1 })], t.prototype, "height", null),
                o([l], t.prototype, "_direction", void 0),
                o([l({ type: cc.Enum(c), tooltip: !1 })], t.prototype, "direction", null),
                t = o([u, h(cc.Sprite), d, g, m(-100)], t)
        }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {}],
    ToolsJs: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "8eb19UW+mdM4YMqlqTLtShF", "ToolsJs");
        var i = {
            SpriteFrameJs: null,
            AudioArrJs: null,
            setStorage: function (e, t, n) {
                CC_WECHATGAME ? wx.setStorage({ key: e, data: t }) : (n && (t = JSON.stringify(t)), cc.sys.localStorage.setItem(e, t))
            },
            getStorage: function (e, t) {
                if (CC_WECHATGAME)
                    return wx.getStorageSync(e);
                var n = cc.sys.localStorage.getItem(e);
                return isNaN(n) || (n = parseInt(n)), "NaN" == n.toString() && (n = null), t && null != n && (n = JSON.parse(n)), n
            },
            logJsonObject: function (e) {
                console.log(JSON.stringify(e))
            },
            loadJson: function (e, t) { },
            writeJson: function (e, t) {
                if (cc.sys.isBrowser) {
                    console.log("\u6d4f\u89c8\u5668");
                    var n = new Blob([e], { type: "application/json" }), i = document.createElement("a");
                    i.download = t, i.innerHTML = "Download File", null != window.webkitURL ? i.href = window.webkitURL.createObjectURL(n) : (i.href = window.URL.createObjectURL(n), i.onclick = destroyClickedElement, i.style.display = "none", document.body.appendChild(i)), i.click()
                }
            },
            addNoArr: function (e, t) {
                return e.indexOf(t) < 0 && (e.push(t), !0)
            },
            newSprite: function (e) {
                if (null != this.SpriteFrameJs.getSpriteFrame(e)) {
                    var t = new cc.Node;
                    return t.addComponent(cc.Sprite).spriteFrame = this.SpriteFrameJs.getSpriteFrame(e), t
                }
                return null
            },
            setTexture: function (e, t) {
                e.getComponent(cc.Sprite).spriteFrame = this.SpriteFrameJs.getSpriteFrame(t)
            },
            clonePrefabs: function (e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, o = this.PrefabArrJs.getPrefabs(e);
                if (null != o) {
                    var r = cc.instantiate(o);
                    return null != t && t.addChild(r, i), null != n && (r.position = n), r
                }
                return console.log("\u514b\u9686\u9884\u5236\u4f53\u5931\u8d25:" + e), null
            },
            newLabel: function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .5, r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, a = new cc.Node;
                a.anchorX = i, a.anchorY = o;
                var c = a.addComponent(cc.Label);
                return c.string = e, c.fontSize = n, t.addChild(a, r), a
            },
            playAudio: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return null != this.AudioArrJs ? this.AudioArrJs.playAudio(e, t, n) : cc.audioEngine.play(cc.url.raw("resources/music/" + e + ".mp3"), n, t)
            },
            stopAudio: function (e) {
                null != e && cc.audioEngine.stop(e)
            },
            newAduioSource: function (e) {
                var t = void 0;
                if (null != this.AudioArrJs)
                    t = this.AudioArrJs.getAudioClip(e);
                else {
                    if (null == e)
                        return console.log("clip\u4e0d\u80fd\u4e3a\u7a7a\uff01"), null;
                    t = e
                }
                var n = new cc.Node;
                return n.addComponent(cc.AudioSource).clip = t, n.getComponent(cc.AudioSource)
            },
            delayTimeCall: function (e, t, n, i) {
                e.runAction(cc.sequence(cc.delayTime(n), cc.callFunc(t, i)))
            },
            getDistance: function (e, t) {
                return e.sub(t).mag()
            },
            getToNodePos: function (e, t) {
                var n = e.parent.convertToWorldSpaceAR(e.position);
                return t.convertToNodeSpaceAR(n)
            },
            getToWorldPosAR: function (e) {
                return e.parent.convertToWorldSpaceAR(e.position)
            },
            getToWorldPos: function (e) {
                return e.parent.convertToWorldSpace(e.position)
            },
            isBoxContainPos: function (e, t) {
                return e.getBoundingBox().contains(t)
            },
            isBoxContainWorldPos: function (e, t) {
                return e.getBoundingBoxToWorld().contains(t)
            },
            isRectInterRect: function (e, t) {
                return e.getBoundingBoxToWorld().intersects(t.getBoundingBoxToWorld())
            },
            returnRandom: function (e, t) {
                return e + Math.floor(Math.random() * (t - e + 1))
            }
        };
        window.ToolsJs = i, cc._RF.pop()
    }, {}],
    UIManager: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "b1cf83DTC9Fd4n4Be2sz1Oz", "UIManager");
        var i = e("GameUiTools"), o = e("MainManage"), r = (e("LoadSceneJs"), e("GameConfig"));
        e("GameData"), e("GameTools");
        cc.Class(
            {
                extends: cc.Component,
                properties: { mainGame: cc.Node, startGamePlanel: cc.Node, Particale: cc.Node, FloatScore: cc.Node, maskFloor: cc.Node, gameOverInfo: cc.Node, gameOverPanel: cc.Node, continue: cc.Node, hand: cc.Node, gameSuccessPanel: cc.Node, di: cc.Node, guan: cc.Node, handSpriteFrame: [cc.SpriteFrame], lv: cc.Label, gameMaxScore: cc.Label, overInfoT: cc.Label, score: cc.Label, moreBtn: cc.Button },
                onLoad: function () {
                    this.MainGame = this.mainGame.getComponent("MainGameJS"), this.handSprite = this.hand.getComponent(cc.Sprite), this.scaleHeight = this.MainGame.gameHeight / 1280, this.gameSuccessPanel.y = this.MainGame.gameHeight / 2 + 145, this.moreBtn.node.x = -this.MainGame.gameWidth / 2 + 95, this.moreBtn.node.y = this.MainGame.gameHeight / 2 - 120, this.score.node.y = 300 * this.scaleHeight, this.gameOverPanel.getChildByName("info").y = 160 * this.scaleHeight, this.gameOverPanel.getChildByName("button").y = -this.MainGame.gameHeight / 4, this.standardScore = r.standScore, this.canNotTouch = !0, this.game_max_score = 3e3, this.over = !1, this.gameOverInfo1StringArr = ["\u6e38  \u620f  \u7ed3  \u675f", "\u904a  \u6232  \u7d50  \u675f", "Game Over", "\uac8c\uc784 \ub05d"], this.gameOverInfo2StringArr = ["\u70b9 \u51fb \u67e5 \u770b \u5206 \u6570", "\u9ede \u64ca \u67e5 \u770b \u5206 \u6578", "Click to view points", "\ud3ec\uc778\ud2b8\ub97c \ubcf4\ub824\uba74 \ud074\ub9ad\ud558\uc138\uc694"], this.gameSuccessTitleStringArr = ["\u606d \u559c \u4f60 \u5df2 \u7a81 \u7834", "\u606d \u559c \u4f60 \u5df2 \u7a81 \u7834", "Level Up", "\ub808\ubca8 \uc5c5"], this.gameSuccessUintStringArr = ["\u5206", "\u5206", "P", "\ubd84"], this.continueStringArr = ["\u70b9\u51fb\u7ee7\u7eed", "\u9ede\u64ca\u7e7c\u7e8c", "Click to continue", "\uacc4\uc18d\ud558\ub824\uba74 \ud074\ub9ad\ud558\uc138\uc694"], this.moreGameStringArr = ["\u66f4\u591a\u6e38\u620f", "\u66f4\u591a\u904a\u6232", "More Game", "\ub354 \ub9ce\uc740 \uac8c\uc784"], this.maxScoreStringArr = ["\u6700\u9ad8\u5f97\u5206\uff1a", "\u6700\u9ad8\u5f97\u5206\uff1a", "Highest score:", "\ucd5c\uace0 \uc810\uc218 :"], this.langNumType = this.returnCurrentLanType(), this.continue.getComponent(cc.Label).string = this.continueStringArr[this.langNumType - 1], this.gameOverInfo.children[0].getComponent(cc.Label).string = this.gameOverInfo1StringArr[this.langNumType - 1], this.gameOverInfo.children[1].getComponent(cc.Label).string = this.gameOverInfo2StringArr[this.langNumType - 1], this.addClickBtns()
                },
                start: function () { },
                beginnerHandAction: function (e) {
                    this.hand.active = !0, r.noTouchBool = !0, this.hand.setPosition(cc.v2(e.x + 50, e.y - 20)), this.handSprite.spriteFrame = this.handSpriteFrame[0], this.hand.runAction(cc.repeatForever(cc.sequence(cc.delayTime(.5), cc.callFunc(function () { this.handSprite.spriteFrame = this.handSpriteFrame[1] }, this), cc.delayTime(.5), cc.callFunc(function () { this.handSprite.spriteFrame = this.handSpriteFrame[0] }, this))))
                },
                beginnerOverAction: function () {
                    this.hand.stopAllActions(), this.hand.active = !1
                },
                returnCurrentLanType: function () {
                    var e = 1;
                    switch (cc.sys.language) {
                        case cc.sys.LANGUAGE_CHINESE: "zh-TW" == window.navigator.language || "zh-tw" == window.navigator.language || "zh-HK" == window.navigator.language || "zh-hk" == window.navigator.language ? (cc.log("\u7e41\u4f53"), e = 2) : (cc.log("\u7b80\u4f53"), e = 1);
                            break;
                        case cc.sys.LANGUAGE_KOREAN: e = 4;
                            break;
                        default: e = 3
                    }
                    return e
                },
                addTouchEvents: function () {
                    var e = this, t = {
                        event: cc.EventListener.TOUCH_ONE_BY_ONE,
                        onTouchBegan: function (t, n) {
                            if (!e.canNotTouch)
                                return e.MainGame.gameOver && i.loadingScene("MainGameScene"), !0
                        },
                        onTouchMoved: function (e, t) { },
                        onTouchEnded: function (e, t) { }
                    };
                    cc.eventManager.addListener(t, e.node)
                },
                initGameSuccessPanel: function () {
                    this.gameSuccessPanel.y = this.MainGame.gameHeight / 2 + 416, this.gameSuccessPanel.opacity = 0, this.gameSuccessPanel.active = !1, this.continue.stopAllActions(), this.continue.active = !1, this.continue.opacity = 255, this.maskFloor.active = !1
                },
                gameSuccessAction: function () {
                    this.maskFloor.active = !0, this.MainGame.sceneScore.node.active = !1, this.lv.string = this.MainGame.gameScore.toString(), this.MainGame.gameScore >= 10 && this.MainGame.gameScore < 100 ? (this.di.x = -95, this.guan.x = 95) : this.MainGame.gameScore >= 100 && this.MainGame.gameScore < 1e3 ? (this.di.x = -115, this.guan.x = 115) : this.MainGame.gameScore >= 1e3 && this.MainGame.gameScore < 1e4 ? (this.di.x = -135, this.guan.x = 135) : this.MainGame.gameScore >= 1e4 && this.MainGame.gameScore < 1e5 ? (this.di.x = -155, this.guan.x = 155) : this.MainGame.gameScore >= 1e5 && this.MainGame.gameScore < 1e6 ? (this.di.x = -180, this.guan.x = 180) : this.MainGame.gameScore >= 1e6 && (this.di.x = -200, this.guan.x = 200), this.gameSuccessPanel.active = !0, this.gameSuccessPanel.runAction(cc.sequence(cc.spawn(cc.fadeIn(.2), cc.moveTo(.2, cc.v2(0, 50))), cc.moveTo(.1, cc.v2(0, 110)), cc.moveTo(.1, cc.v2(0, 100)), cc.callFunc(function () { this.continue.active = !0, this.continue.setPosition(cc.v2(0, -150)), this.continue.runAction(cc.repeatForever(cc.sequence(cc.fadeTo(.7, 50), cc.fadeTo(.7, 255)))), this.canNotTouch = !1 }, this)))
                },
                gameOver: function () {
                    this.maskFloor.active = !0, this.MainGame.sceneScore.node.active = !1, this.gameOverInfo.active = !0, this.gameOverInfo.runAction(cc.sequence(cc.delayTime(.2), cc.spawn(cc.fadeIn(1), cc.moveBy(1, 0, -50)), cc.callFunc(function () { this.canNotTouch = !1 }, this)))
                },
                gameOverAction: function () {
                    this.over || (this.over = !0, this.score.string = this.MainGame.gameScore.toString(), this.gameMaxScore.string = r.gameMaxScore.toString(), r.gameMaxScore >= 1e4 && r.gameMaxScore < 1e5 ? (this.gameOverPanel.getChildByName("info").children[0].x = -92, this.gameOverPanel.getChildByName("info").children[1].x = 36) : (this.gameOverPanel.getChildByName("info").children[0].x = -110, this.gameOverPanel.getChildByName("info").children[1].x = 36), this.UIPosChange(), this.gameOverPanel.active = !0, this.gameOverPanel.runAction(cc.sequence(cc.fadeIn(.2), cc.callFunc(function () { this.gameOverPanel.getChildByName("button").runAction(cc.repeatForever(cc.sequence(cc.delayTime(2), cc.rotateTo(.2, 10), cc.rotateTo(.4, -10), cc.rotateTo(.4, 10), cc.rotateTo(.4, -10), cc.rotateTo(.2, 0), cc.delayTime(2), cc.scaleTo(.5, 1.2), cc.scaleTo(.5, 1), cc.scaleTo(.5, 1.2), cc.scaleTo(.5, 1)))), this.canNotTouch = !1 }, this))))
                },
                addClickBtns: function () {
                    var e = this;
                    e.moreBtn.node.on(cc.Node.EventType.TOUCH_START, function (e) { }), e.moreBtn.node.on(cc.Node.EventType.TOUCH_END, function (e) { console.log("MoreGame"), window.location.href = o.moreGameUrl }), e.gameSuccessPanel.on(cc.Node.EventType.TOUCH_START, function (e) { }), e.gameSuccessPanel.on(cc.Node.EventType.TOUCH_END, function (t) { e.canNotTouch || (r.noTouchBool = !0, e.canNotTouch = !0, r.publicGameBool || adBreak({ type: "next", name: "restart-game" }), e.initGameSuccessPanel()) }), e.gameOverInfo.on(cc.Node.EventType.TOUCH_START, function (e) { }), e.gameOverInfo.on(cc.Node.EventType.TOUCH_END, function (t) { e.canNotTouch || (r.publicGameBool || adBreak({ type: "next", name: "restart-game" }), e.gameOverAction(), e.gameOverInfo.destroy()) }), e.gameOverPanel.on(cc.Node.EventType.TOUCH_START, function (e) { }), e.gameOverPanel.on(cc.Node.EventType.TOUCH_END, function (t) { e.canNotTouch || (r.publicGameBool || adBreak({ type: "next", name: "restart-game" }), r.playNum++, i.loadingScene("MainGameScene")) })
                },
                UIPosChange: function () {
                    console.log("lang", o.langugeType);
                    var e = null, t = null;
                    1 == o.langugeType ? (e = this.getContentByScore(r.gameScore, o.gameNameText, !0), t = this.getContentByScore(r.gameScore, o.gameNameText, !1)) : (e = this.getContentByScore2(r.gameScore, o.gameNameText, !0), t = this.getContentByScore(r.gameScore, o.gameNameText, !1)), console.log("nihao", o.endHttpShowInfo), null != o.endHttpShowInfo && "" != o.endHttpShowInfo && (cc.log("gototo"), t = o.endHttpShowInfo), this.overInfoT.string = e, document.title = t
                }, getContentByScore: function (e, t, n) {
                    var i = "\u6211\u771f\u662f\u592a\u5389\u5bb3\uff0c\u5728" + t + "\u4e2d\u7adf\u7136\u5f97\u4e860\u5206\uff0c\u5168\u7403\u53ea\u67091\u4e2a\u4eba\u5f970\u5206\uff01", o = "\u51fb\u8d25\u4e86\u5168\u74030%\u7684\u73a9\u5bb6\uff01";
                    if (e >= 0 && e <= 200)
                        i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u771f\u662f\u592a\u68d2\u4e86\uff0c\u518d\u7ec3\u7ec3\u5c31\u80fd\u5f97\u5fc3\u5e94\u624b!", o = "\u51fb\u8d25\u4e86\u5168\u7403" + Math.floor(10 * e / 200) + "%\u7684\u73a9\u5bb6\uff01";
                    else if (e > 200 && e <= this.standardScore) {
                        i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u771f\u662f\u592a\u68d2\u4e86\uff0c\u518d\u7ec3\u7ec3\u5c31\u80fd\u8fbe\u5230\u6e38\u5203\u6709\u4f59\u7684\u5883\u754c\uff01", o = "\u51fb\u8d25\u4e86\u5168\u7403" + (Math.floor(10 * (e - this.standardScore) / (200 - this.standardScore)) + 40) + "%\u7684\u73a9\u5bb6\uff01"
                    }
                    else if (e > this.standardScore && e <= 500) {
                        var r = Math.floor(20 * (e - this.standardScore) / (500 - this.standardScore)) + 50;
                        i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u7403" + r + "%\u7684\u73a9\u5bb6\uff0c\u8fdb\u5165\u4e86\u4fe1\u624b\u62c8\u6765\u7684\u5883\u754c\uff01", o = "\u51fb\u8d25\u4e86\u5168\u7403" + r + "%\u7684\u73a9\u5bb6\uff01"
                    }
                    else if (e > 500 && e <= 1300) {
                        var a = Math.floor(15 * (e - 500) / 800) + 70;
                        i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u7403" + a + "%\u7684\u73a9\u5bb6\uff0c\u8fdb\u5165\u4e86\u8fd0\u7528\u81ea\u5982\u7684\u5883\u754c\uff01", o = "\u51fb\u8d25\u4e86\u5168\u7403" + a + "%\u7684\u73a9\u5bb6\uff01"
                    }
                    else if (e > 1300 && e <= 2700) {
                        i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u740399%\u7684\u73a9\u5bb6\uff0c\u8fbe\u5230\u4e86\u884c\u4e91\u6d41\u6c34\u7684\u5883\u754c\uff01", o = "\u51fb\u8d25\u4e86\u5168\u7403" + (Math.floor(10 * (e - 1300) / 1400) + 85) + "%\u7684\u73a9\u5bb6\uff01"
                    }
                    else if (e > 2700 && e < this.game_max_score) {
                        i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u636e\u8bf4\u5168\u7403\u53ea\u6709 " + (20 - Math.ceil(17 * (e - 2700) / (this.game_max_score - 2700))) + "\u4e2a\u4eba\u8fbe\u5230\u8fd9\u4e2a\u6c34\u5e73\uff0c\u72ec\u5b64\u6c42\u8d25\uff01", o = "\u51fb\u8d25\u4e86\u5168\u740399%\u7684\u73a9\u5bb6\uff01"
                    }
                    else
                        e >= this.game_max_score && (i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u8d85\u8d8a\u4e86\u72ec\u5b64\u6c42\u8d25\uff0c\u5fc3\u6709\u7075\u7280\uff01", o = "\u51fb\u8d25\u4e86\u5168\u7403100%\u7684\u73a9\u5bb6\uff01");
                    return n ? o : i
                },
                getContentByScore2: function (e, t, n) {
                    var i = "I'm awesome\uff0cin" + t + "get 0 score\uff0conly one person in the world has a 0\uff01", o = "Only 0 points, the only one in the world!";
                    if (e >= 0 && e <= 300)
                        i = "I got " + e + " points in the game, really great\uff01", o = "Defeated " + Math.floor(10 * e / 300) + "% of players worldwide!";
                    else if (e > 300 && e <= this.standardScore) {
                        i = "I got " + e + " points in the game, really great\uff01", o = "Defeated " + (Math.floor(10 * (e - this.standardScore) / (300 - this.standardScore)) + 40) + "% of players worldwide!"
                    }
                    else if (e > this.standardScore && e <= 600) {
                        var r = Math.floor(20 * (e - this.standardScore) / (600 - this.standardScore)) + 50;
                        i = "I got in the game in " + e + " points, beating out " + r + "% of global players\uff01", o = "Defeated " + r + "% of players worldwide!"
                    }
                    else if (e > 600 && e <= 1700) {
                        var a = Math.floor(15 * (e - 600) / 1100) + 70;
                        i = "I got in the game in " + e + " points, beating out " + a + "% of global players\uff01", o = "Defeated " + a + "% of players worldwide!"
                    }
                    else if (e > 1700 && e <= 2700) {
                        i = "I got in the game in " + e + " points, beating out 99% of global players\uff01", o = "Defeated " + (Math.floor(10 * (e - 1700) / 1e3) + 85) + "% of players worldwide!"
                    }
                    else if (e > 2700 && e < this.game_max_score) {
                        i = "I got " + e + " points in the game, it said to be the world's only " + (20 - Math.ceil(17 * (e - 2700) / (this.game_max_score - 2700))) + " people to reach this level! Have you?", o = "Defeated 99% of players worldwide!"
                    }
                    else
                        e >= this.game_max_score && (i = "I got " + e + " points in the game, defeating all players worldwide, waiting for you to fight!", o = "Defeated 100% of players worldwide!");
                    return n ? o : i
                },
                getContentByScore3: function (e, t, n) {
                    var i = "\u6211\u771f\u662f\u592a\u5389\u5bb3\uff0c\u5728" + t + "\u4e2d\u7adf\u7136\u5f97\u4e860\u5206\uff0c\u5168\u7403\u53ea\u67091\u4e2a\u4eba\u5f970\u5206\uff01", o = "\u64ca\u6557\u4e86\u5168\u74030%\u7684\u73a9\u5bb6\uff01";
                    if (e >= 0 && e <= 300)
                        i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u771f\u662f\u592a\u68d2\u4e86\uff0c\u518d\u7ec3\u7ec3\u5c31\u80fd\u5f97\u5fc3\u5e94\u624b!", o = "\u64ca\u6557\u4e86\u5168\u7403" + Math.floor(10 * e / 300) + "%\u7684\u73a9\u5bb6\uff01";
                    else if (e > 300 && e <= this.standardScore) {
                        i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u771f\u662f\u592a\u68d2\u4e86\uff0c\u518d\u7ec3\u7ec3\u5c31\u80fd\u8fbe\u5230\u6e38\u5203\u6709\u4f59\u7684\u5883\u754c\uff01", o = "\u64ca\u6557\u4e86\u5168\u7403" + (Math.floor(10 * (e - this.standardScore) / (300 - this.standardScore)) + 40) + "%\u7684\u73a9\u5bb6\uff01"
                    }
                    else if (e > this.standardScore && e <= 600) {
                        var r = Math.floor(20 * (e - this.standardScore) / (600 - this.standardScore)) + 50;
                        i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u7403" + r + "%\u7684\u73a9\u5bb6\uff0c\u8fdb\u5165\u4e86\u4fe1\u624b\u62c8\u6765\u7684\u5883\u754c\uff01", o = "\u64ca\u6557\u4e86\u5168\u7403" + r + "%\u7684\u73a9\u5bb6\uff01"
                    }
                    else if (e > 600 && e <= 1700) {
                        var a = Math.floor(15 * (e - 600) / 1100) + 70;
                        i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u7403" + a + "%\u7684\u73a9\u5bb6\uff0c\u8fdb\u5165\u4e86\u8fd0\u7528\u81ea\u5982\u7684\u5883\u754c\uff01", o = "\u64ca\u6557\u4e86\u5168\u7403" + a + "%\u7684\u73a9\u5bb6\uff01"
                    }
                    else if (e > 1700 && e <= 2700) {
                        i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u740399%\u7684\u73a9\u5bb6\uff0c\u8fbe\u5230\u4e86\u884c\u4e91\u6d41\u6c34\u7684\u5883\u754c\uff01", o = "\u64ca\u6557\u4e86\u5168\u7403" + (Math.floor(10 * (e - 1700) / 1e3) + 85) + "%\u7684\u73a9\u5bb6\uff01"
                    }
                    else if (e > 2700 && e < this.game_max_score) {
                        i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u636e\u8bf4\u5168\u7403\u53ea\u6709 " + (20 - Math.ceil(17 * (e - 2700) / (this.game_max_score - 2700))) + "\u4e2a\u4eba\u8fbe\u5230\u8fd9\u4e2a\u6c34\u5e73\uff0c\u72ec\u5b64\u6c42\u8d25\uff01", o = "\u64ca\u6557\u4e86\u5168\u740399%\u7684\u73a9\u5bb6\uff01"
                    }
                    else
                        e >= this.game_max_score && (i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u8d85\u8d8a\u4e86\u72ec\u5b64\u6c42\u8d25\uff0c\u5fc3\u6709\u7075\u7280\uff01", o = "\u64ca\u6557\u4e86\u5168\u7403100%\u7684\u73a9\u5bb6\uff01");
                    return n ? o : i
                },
                getContentByScore4: function (e, t, n) {
                    var i = "\u6211\u771f\u662f\u592a\u5389\u5bb3\uff0c\u5728" + t + "\u4e2d\u7adf\u7136\u5f97\u4e860\u5206\uff0c\u5168\u7403\u53ea\u67091\u4e2a\u4eba\u5f970\u5206\uff01", o = "\uc804 \uc138\uacc4 \ud50c\ub808\uc774\uc5b4 0%\ub97c \ubb3c\ub9ac \ucce4\uc2b5\ub2c8\ub2e4!";
                    if (e >= 0 && e <= 300)
                        i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u771f\u662f\u592a\u68d2\u4e86\uff0c\u518d\u7ec3\u7ec3\u5c31\u80fd\u5f97\u5fc3\u5e94\u624b!", o = "\uc804 \uc138\uacc4 \ud50c\ub808\uc774\uc5b4 " + Math.floor(10 * e / 300) + "%\ub97c \ubb3c\ub9ac \ucce4\uc2b5\ub2c8\ub2e4!";
                    else if (e > 300 && e <= this.standardScore) {
                        i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u771f\u662f\u592a\u68d2\u4e86\uff0c\u518d\u7ec3\u7ec3\u5c31\u80fd\u8fbe\u5230\u6e38\u5203\u6709\u4f59\u7684\u5883\u754c\uff01", o = "\uc804 \uc138\uacc4 \ud50c\ub808\uc774\uc5b4 " + (Math.floor(10 * (e - this.standardScore) / (300 - this.standardScore)) + 40) + "%\ub97c \ubb3c\ub9ac \ucce4\uc2b5\ub2c8\ub2e4!"
                    }
                    else if (e > this.standardScore && e <= 600) {
                        var r = Math.floor(20 * (e - this.standardScore) / (600 - this.standardScore)) + 50;
                        i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u7403" + r + "%\u7684\u73a9\u5bb6\uff0c\u8fdb\u5165\u4e86\u4fe1\u624b\u62c8\u6765\u7684\u5883\u754c\uff01", o = "\uc804 \uc138\uacc4 \ud50c\ub808\uc774\uc5b4 " + r + "%\ub97c \ubb3c\ub9ac \ucce4\uc2b5\ub2c8\ub2e4!"
                    }
                    else if (e > 600 && e <= 1700) {
                        var a = Math.floor(15 * (e - 600) / 1100) + 70;
                        i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u7403" + a + "%\u7684\u73a9\u5bb6\uff0c\u8fdb\u5165\u4e86\u8fd0\u7528\u81ea\u5982\u7684\u5883\u754c\uff01", o = "\uc804 \uc138\uacc4 \ud50c\ub808\uc774\uc5b4 " + a + "%\ub97c \ubb3c\ub9ac \ucce4\uc2b5\ub2c8\ub2e4!"
                    }
                    else if (e > 1700 && e <= 2700) {
                        i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u740399%\u7684\u73a9\u5bb6\uff0c\u8fbe\u5230\u4e86\u884c\u4e91\u6d41\u6c34\u7684\u5883\u754c\uff01", o = "\uc804 \uc138\uacc4 \ud50c\ub808\uc774\uc5b4 " + (Math.floor(10 * (e - 1700) / 1e3) + 85) + "%\ub97c \ubb3c\ub9ac \ucce4\uc2b5\ub2c8\ub2e4!"
                    }
                    else if (e > 2700 && e < this.game_max_score) {
                        i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u636e\u8bf4\u5168\u7403\u53ea\u6709 " + (20 - Math.ceil(17 * (e - 2700) / (this.game_max_score - 2700))) + "\u4e2a\u4eba\u8fbe\u5230\u8fd9\u4e2a\u6c34\u5e73\uff0c\u72ec\u5b64\u6c42\u8d25\uff01", o = "\uc804 \uc138\uacc4 \ud50c\ub808\uc774\uc5b4 99%\ub97c \ubb3c\ub9ac \ucce4\uc2b5\ub2c8\ub2e4!"
                    }
                    else
                        e >= this.game_max_score && (i = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u8d85\u8d8a\u4e86\u72ec\u5b64\u6c42\u8d25\uff0c\u5fc3\u6709\u7075\u7280\uff01", o = "\uc804 \uc138\uacc4 \ud50c\ub808\uc774\uc5b4 100%\ub97c \ubb3c\ub9ac \ucce4\uc2b5\ub2c8\ub2e4!");
                    return n ? o : i
                },
                update: function (e) { }
            }), cc._RF.pop()
    }, { GameConfig: "GameConfig", GameData: "GameData", GameTools: "GameTools", GameUiTools: "GameUiTools", LoadSceneJs: "LoadSceneJs", MainManage: "MainManage" }],
    gameOverJs: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "3621brbM61BsYFG7fM/74TL", "gameOverJs");
        var i = e("GameUiTools"), o = e("GameConfig"), r = e("MainManage");
        cc.Class({
            extends: cc.Component,
            properties: { bgLayer: cc.Node, scoreBg: cc.Node, overScoreT: cc.Label, overInfoT: cc.Label, moreBtn: cc.Button, leftBtn: cc.Button, rightBtn: cc.Button, midGameText: cc.Label, leftBtnText: cc.Label, rightBtnText: cc.Label, maxScoreText: cc.Label },
            onLoad: function () {
                this.bgLayer.color = cc.color("#68b951"), this.standardScore = o.standScore, this.game_max_score = 200, this.rigthBtnGameName = null, this.rightBtnGameUrl = null, this.UIPosChange(), this.addClickBtns();
                var e = "\u6700\u9ad8\u7eaa\u5f55:", t = this.returnCurrentLanType();
                e = 1 == t ? "\u6700\u9ad8\u7eaa\u5f55:" : 2 == t ? "\u6700\u9ad8\u7d00\u9304:" : 4 == t ? "\ucd5c\uace0 \uae30\ub85d:" : "Highest Record:";
                var n = o.gameScore, i = this.getHighScore();
                i ? i < o.gameScore && (this.setHisSocre(o.gameScore), i = o.gameScore) : (this.setHisSocre(o.gameScore), i = n), this.maxScoreText.string = e + i
            }, returnCurrentLanType: function () {
                var e = 1;
                switch (cc.sys.language) {
                    case cc.sys.LANGUAGE_CHINESE: "zh-TW" == window.navigator.language || "zh-tw" == window.navigator.language || "zh-HK" == window.navigator.language || "zh-hk" == window.navigator.language ? (cc.log("\u7e41\u4f53"), e = 2) : (cc.log("\u7b80\u4f53"), e = 1);
                        break;
                    case cc.sys.LANGUAGE_KOREAN: e = 4;
                        break;
                    default: e = 3
                }
                return e
            },
            setHisSocre: function (e) {
                cc.sys.localStorage.setItem("HigScore_JiaoTong", e)
            },
            getHighScore: function () {
                return cc.sys.localStorage.getItem("HigScore_JiaoTong")
            },
            UIPosChange: function () {
                this.overScoreT.string = o.gameScore, console.log("lang", r.langugeType);
                var e = null;
                e = 1 == r.langugeType ? this.getContentByScore(o.gameScore, r.gameNameText) : this.getContentByScore2(o.gameScore, r.gameNameText), console.log("nihao", r.endHttpShowInfo), null != r.endHttpShowInfo && "" != r.endHttpShowInfo && (cc.log("gototo"), e = r.endHttpShowInfo), this.overInfoT.string = e;
                var t = this.overInfoT.node.height;
                if (this.overInfoT.node.height = Math.ceil(e.length * this.overInfoT.fontSize / this.overInfoT.node.width) * t, document.title = e, console.log("gameOver txtMoreText", r.txtMoreText), this.midGameText.string = r.txtMoreText, this.leftBtnText.string = r.txtAgainText, this.tempArr = this.gameFocus(), null != r.ranLinkUrl()) {
                    var n = r.ranLinkUrl(), i = r.ranLinkData.gameList[n].gameName;
                    this.rigthBtnGameName = i, this.rightBtnGameUrl = r.ranLinkData.gameList[n].gameUrl
                }
                null != this.rigthBtnGameName && "" != this.rigthBtnGameName ? this.rightBtnText.string = this.rigthBtnGameName : this.rightBtnText.string = this.tempArr[0]
            },
            gameFocus: function () {
                var e = [], t = null, n = null;
                return Math.random() <= .5 ? (t = r.gameEndName1, n = r.gameEndUrl1) : (t = r.gameEndName2, n = r.gameEndUrl2), e.push(t), e.push(n), e
            },
            addClickBtns: function () {
                var e = this;
                e.moreBtn.node.on(cc.Node.EventType.TOUCH_START, function (e) { }), e.moreBtn.node.on(cc.Node.EventType.TOUCH_END, function (e) { console.log("MoreGame"), window.location.href = r.moreGameUrl }), e.leftBtn.node.on(cc.Node.EventType.TOUCH_START, function (e) { }), e.leftBtn.node.on(cc.Node.EventType.TOUCH_END, function (e) { o.GAME_OVER_BOOL = !0, o.gameScore = 0, i.loadingScene("MainGameScene") }), e.rightBtn.node.on(cc.Node.EventType.TOUCH_START, function (e) { }), e.rightBtn.node.on(cc.Node.EventType.TOUCH_END, function (t) {
                    var n = null;
                    n = null != e.rightBtnGameUrl && "" != e.rightBtnGameUrl ? e.rightBtnGameUrl : e.tempArr[1], window.location.href = n
                })
            },
            getContentByScore: function (e, t) {
                var n = "\u6211\u771f\u662f\u592a\u5389\u5bb3\uff0c\u5728" + t + "\u4e2d\u7adf\u7136\u5f97\u4e861\u5206\uff0c\u5168\u7403\u53ea\u67091\u4e2a\u4eba\u5f971\u5206\uff01", i = parseInt(.3 * this.standardScore), o = parseInt(1.5 * this.standardScore), r = parseInt(2.5 * this.standardScore), a = parseInt(4 * this.standardScore);
                if (e > 0 && e <= i)
                    n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u771f\u662f\u592a\u68d2\u4e86\uff0c\u518d\u7ec3\u7ec3\u5c31\u80fd\u8fbe\u5230\u6e38\u5203\u6709\u4f59\u7684\u5883\u754c\uff01";
                else if (e > i && e <= this.standardScore)
                    n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u771f\u662f\u592a\u68d2\u4e86\uff0c\u518d\u7ec3\u7ec3\u5c31\u80fd\u8fbe\u5230\u6e38\u5203\u6709\u4f59\u7684\u5883\u754c\uff01";
                else if (e > this.standardScore && e <= o) {
                    n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u7403" + (Math.floor(12 * (e - this.standardScore) / (o - this.standardScore)) + 80) + "%\u7684\u73a9\u5bb6\uff0c\u8fdb\u5165\u4e86\u4fe1\u624b\u62c8\u6765\u7684\u5883\u754c\uff01"
                }
                else if (e > o && e <= r) {
                    n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u7403" + (Math.floor(7 * (e - o) / (r - o)) + 92) + "%\u7684\u73a9\u5bb6\uff0c\u8fdb\u5165\u4e86\u8fd0\u7528\u81ea\u5982\u7684\u5883\u754c\uff01"
                }
                else if (e > r && e <= a)
                    n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u740399%\u7684\u73a9\u5bb6\uff0c\u8fbe\u5230\u4e86\u884c\u4e91\u6d41\u6c34\u7684\u5883\u754c\uff01";
                else if (e > a && e < this.game_max_score) {
                    n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u636e\u8bf4\u5168\u7403\u53ea\u6709 " + (20 - Math.ceil(17 * (e - a) / (this.game_max_score - a))) + "\u4e2a\u4eba\u8fbe\u5230\u8fd9\u4e2a\u6c34\u5e73\uff0c\u72ec\u5b64\u6c42\u8d25\uff01"
                }
                else
                    e >= this.game_max_score && (n = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u8d85\u8d8a\u4e86\u72ec\u5b64\u6c42\u8d25\uff0c\u5fc3\u6709\u7075\u7280\uff01");
                return n
            }, strlen: function (e) {
                for (var t = 0, n = 0; n < e.length; n++) {
                    var i = e.charCodeAt(n);
                    i >= 1 && i <= 126 || 65376 <= i && i <= 65439 ? t++ : t += 2
                } return t
            }, getContentByScore2: function (e, t) {
                var n = "I'm awesome\uff0cin" + t + "get 0 score\uff0conly one person in the world has a 0\uff01", i = parseInt(.3 * this.standardScore), o = parseInt(1.5 * this.standardScore), r = parseInt(2.5 * this.standardScore), a = parseInt(4 * this.standardScore);
                if (e >= this.game_max_score)
                    n = "I got " + e + " points in the game, defeating all players worldwide, waiting for you to fight!";
                else if (e > 0 && e <= i)
                    n = "I got " + e + " points in the game, really great\uff01";
                else if (e > i && e <= this.standardScore)
                    n = "I got " + e + " points in the game, really great\uff01";
                else if (e > this.standardScore && e <= o) {
                    n = "I got in the game in " + e + " points, beating out " + (Math.floor(12 * (e - this.standardScore) / (o - this.standardScore)) + 80) + "% of global players\uff01"
                }
                else if (e > o && e <= r) {
                    n = "I got in the game in " + e + " points, beating out " + (Math.floor(7 * (e - o) / (r - o)) + 92) + "% of global players\uff01"
                }
                else if (e > r && e <= a)
                    n = "I got in the game in " + e + " points, beating out 99% of global players\uff01";
                else if (e > a && e < this.game_max_score) {
                    n = "I got " + e + " points in the game, it said to be the world's only " + (20 - Math.ceil(17 * (e - a) / (this.game_max_score - a))) + " people to reach this level! Have you?"
                }
                return n
            }, start: function () { }
        }), cc._RF.pop()
    }, { GameConfig: "GameConfig", GameUiTools: "GameUiTools", MainManage: "MainManage" }],
    linkHttpIconJs: [function (e, t, n) {
        "use strict"; cc._RF.push(t, "95474fr0oNDP7SAidILF03q", "linkHttpIconJs"); var i = e("MainManage"), o = e("GameConfig");
        cc.Class({
            extends: cc.Component, properties: { iconSpr: cc.Node, iconSpr1: cc.Node }, onLoad: function () {
                if (this._imageArr = [], this.stopUpdateBool = !0, this.gameWidth = cc.director.getWinSize().width, this.gameHeight = cc.director.getWinSize().height, null != i.recGameData && "" != i.recGameData && null != i.recGameimg1 && "" != i.recGameimg1) {
                    var e = 50 - this.gameWidth / 2, t = this.gameHeight - 50 - this.gameHeight / 2;
                    null != i.recGamePos && "" != i.recGamePos && (1 == i.recGamePos ? (e = 50 - this.gameWidth / 2, t = this.gameHeight - 50 - this.gameHeight / 2) : 2 == i.recGamePos ? (e = this.gameWidth - 50 - this.gameWidth / 2, t = this.gameHeight - 50 - this.gameHeight / 2) : 3 == i.recGamePos ? (e = this.gameWidth - 50 - this.gameWidth / 2, t = 50 - this.gameHeight / 2) : 4 == i.recGamePos && (e = 50 - this.gameWidth / 2, t = 50 - this.gameHeight / 2));
                    var n = i.recGameimg1, o = i.recGameimg2, r = this.iconSpr, a = this.iconSpr1, c = this;
                    cc.loader.load(n, function (n, i) { r.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(i), c.iconSpr.opacity = 0, c.iconSpr.x = e, c.iconSpr.y = t, c._imageArr.push(c.iconSpr) }), cc.loader.load(o, function (n, i) { a.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(i), c.iconSpr1.opacity = 0, c.iconSpr1.x = e, c.iconSpr1.y = t, c._imageArr.push(c.iconSpr1) })
                } this.addTouchEvents()
            },
            showLinkPic: function () {
                var e = 0, t = 0;
                e = null != i.recGameDelPau ? i.recGameDelPau : 6, cc.log("dMainManager.recGameDelPer", i.recGameDelPer), t = null != i.recGameDelPer ? i.recGameDelPer : .7, this._imageArr[0].opacity = 255, this._imageArr[0].runAction(cc.repeatForever(cc.sequence(cc.delayTime(e), cc.rotateBy(t, 0, 180), cc.callFunc(function () { this._imageArr[0].setRotation(0), this._imageArr[0].opacity = 0, this._imageArr[1].opacity = 255 }, this), cc.delayTime(e), cc.callFunc(function () { this.flowerAction(this._imageArr[1], t) }, this), cc.delayTime(t), cc.callFunc(function () { this._imageArr[1].opacity = 0, this._imageArr[0].opacity = 255 }, this))))
            },
            flowerAction: function (e, t) {
                e.runAction(cc.sequence(cc.rotateBy(t, 0, 180), cc.callFunc(function () { e.setRotation(0) })))
            },
            start: function () { },
            addTouchEvents: function () {
                var e = this, t = {
                    event: cc.EventListener.TOUCH_ONE_BY_ONE, onTouchBegan: function (t, n) {
                        var r = t.getLocation();
                        if (e._imageArr.length >= 2) {
                            var a = Math.abs(r.x - e.gameWidth / 2 - e._imageArr[0].x), c = Math.abs(r.y - e.gameHeight / 2 - e._imageArr[0].y);
                            a <= 30 && c <= 30 && (o.noTouchBool = !1, null != i.recGameUrl && "" != i.recGameUrl && (e._imageArr[0].runAction(cc.sequence(cc.scaleTo(.1, .8), cc.scaleTo(.1, 1), cc.callFunc(function () { window.location.href = i.recGameUrl }))), e._imageArr[1].runAction(cc.sequence(cc.scaleTo(.1, .8), cc.scaleTo(.1, 1)))), console.log("touchLinkHttp"))
                        }
                        return !0
                    },
                    onTouchMoved: function (e, t) { }, onTouchEnded: function (e, t) { }
                };
                cc.eventManager.addListener(t, e.node)
            }, update: function (e) { this.stopUpdateBool && this._imageArr.length >= 2 && (this.stopUpdateBool = !1, this.showLinkPic()) }
        }), cc._RF.pop()
    }, { GameConfig: "GameConfig", MainManage: "MainManage" }],
    resArr: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "36b14EoJxtHtJEeP2jXVvPf", "resArr"), cc.Class({
            extends: cc.Component, properties: { SpriteFrameArr: [cc.SpriteFrame], PrefabArr: [cc.Prefab], audiosArr: { type: cc.AudioClip, default: [] } }, onLoad: function () {
                void 0 != ToolsJs && (ToolsJs.PrefabArrJs = this, ToolsJs.SpriteFrameJs = this, ToolsJs.AudioArrJs = this), this.addPrefabs(), this.addSpriteFrame(), this.audioClipDic = {};
                for (var e = 0; e < this.audiosArr.length; e++) {
                    var t = this.audiosArr[e];
                    this.audioClipDic[t.name] = t
                }
            },
            playAudio: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .3, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return null != this.audioClipDic[e] ? cc.audioEngine.play(this.audioClipDic[e], n, t) : (console.log("\u6ca1\u6709\u627e\u5230\u97f3\u9891\uff1a" + e), null)
            },
            getAudioClip: function (e) {
                return null != this.audioClipDic[e] ? this.audioClipDic[e] : (console.log("\u6ca1\u6709\u627e\u5230\u97f3\u9891\uff1a" + e), null)
            },
            addSpriteFrame: function () {
                this.spriteArr = {};
                for (var e = 0; e < this.SpriteFrameArr.length; e++) {
                    var t = this.SpriteFrameArr[e];
                    null != t && (this.spriteArr[t.name] = t)
                }
            },
            getSpriteFrame: function (e) {
                return null != this.spriteArr[e] ? this.spriteArr[e] : (console.log("\u6ca1\u6709\u6dfb\u52a0\u56fe\u7247\uff1a" + e), null)
            },
            addPrefabs: function () {
                this.prefabsArr = {};
                for (var e = 0; e < this.PrefabArr.length; e++) {
                    var t = this.PrefabArr[e];
                    this.prefabsArr[t.name] = t
                }
            },
            getPrefabs: function (e) {
                return null != this.prefabsArr[e] ? this.prefabsArr[e] : (console.log("\u6ca1\u6709\u9884\u5236\u4f53\uff1a" + e), null)
            }
        }), cc._RF.pop()
    }, {}],
    startGameJs: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "280c3rsZJJKnZ9RqbALVwtK", "startGameJs");
        var i = e("GameUiTools"), o = (e("HttpManagerJs"), e("MainManage")), r = (e("LoadSceneJs"), e("GameConfig"));
        cc.Class({
            extends: cc.Component,
            properties: { showInfoT: cc.Label, startT: cc.Label },
            onLoad: function () { r.publicGameBool && o.init(), this.showInfoT.string = o.gameInfoText, this.startT.string = o.txtStartText, this.node.on("touchend", function (e) { this.node.x = -2e3 }, this) }, addTouchEvents: function () {
                var e = { event: cc.EventListener.TOUCH_ONE_BY_ONE, onTouchBegan: function (e, t) { return i.loadingScene("MainGameScene"), !0 }, onTouchMoved: function (e, t) { }, onTouchEnded: function (e, t) { } };
                cc.eventManager.addListener(e, this.node)
            }, update: function (e) { }
        }), cc._RF.pop()
    }, { GameConfig: "GameConfig", GameUiTools: "GameUiTools", HttpManagerJs: "HttpManagerJs", LoadSceneJs: "LoadSceneJs", MainManage: "MainManage" }],
    "use_v2.1.x_cc.Action": [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "c382eNvNvFEVqcM3zUHzwkK", "use_v2.1.x_cc.Action"), cc.macro.ROTATE_ACTION_CCW = !0, cc._RF.pop()
    }, {}]
}, {}, ["EditorAsset", "FloatScore", "Fruit", "MapManager", "MusicManager", "PoolManager", "Ribbon", "SineWave", "HttpManagerJs", "LanguageSetJs", "LoadSceneJs", "AniTools", "MainGameJS", "ToolsJs", "UIManager", "resArr", "MainManage", "GameConfig", "GameData", "GameTools", "GameUiTools", "gameOverJs", "linkHttpIconJs", "startGameJs", "use_v2.1.x_cc.Action"]);
