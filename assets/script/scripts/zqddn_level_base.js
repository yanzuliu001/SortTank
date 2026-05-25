var i;
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;
var l = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.rightNode = null;
        e.wrongNode = null;
        e.rightSound = null;
        e.wrongSound = null;
        e.clickSound = null;
        e.rightStarSound = null;
        e.xiuSoundAudio = null;
        e.wrongFrams = [];
        e.needClickAudioNode = [];
        e.moveResetNode = null;
        e.bgNode = [];
        e.isGame = !0;
        e.shakeOriginPos = {};
        e.goodsStartPos = [];
        e.clickSoundInterval = 0.1;
        e.clickSoundTimer = 0;
        e.isWin = !1;
        e.isClick = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        var t = this;
        this.rightNode.active = !1;
        if (0 !== this.needClickAudioNode.length) {
            for (var e = 0; e < this.needClickAudioNode.length; e++) {
                this.needClickAudioNode[e].on(cc.Node.EventType.TOUCH_START, this.onClickSound, this);
            }
        }
        if (this.moveResetNode) {
            for (e = 0; e < this.moveResetNode.children.length; e++) {
                this.goodsStartPos.push(this.moveResetNode.children[e].position);
                this.moveResetNode.children[e].on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
                this.moveResetNode.children[e].on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
                this.moveResetNode.children[e].on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
                this.moveResetNode.children[e].on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
            }
        }
        if (0 !== this.bgNode.length) {
            for (e = 0; e < this.bgNode.length; e++) {
                this.bgNode[e].on(cc.Node.EventType.TOUCH_START, this.onTouchStart2, this);
            }
        }
        cc.game.on(
            "play-sound",
            function (e) {
                if (e && "star" == e.name) {
                    t.playRightStarSound();
                }
            },
            this
        );
        cc.game.on(
            "click-sound",
            function () {
                t.playClickSound();
            },
            this
        );
    };
    e.prototype.onDestroy = function () {
        cc.game.targetOff(this);
    };
    e.prototype.onTouchStart2 = function (t) {
        if (this.isGame) {
            this.showWrong(t);
        }
    };
    e.prototype.onTouchStart = function () {
        this.onClickSound();
    };
    e.prototype.onTouchMove = function (t) {
        if (!this.isWin) {
            var e = t.target;
            var o = t.touch.getDelta();
            e.x += o.x;
            e.y += o.y;
        }
    };
    e.prototype.onTouchEnd = function (t) {
        if (!this.isWin) {
            var e = t.target;
            cc.tween(e)
                .to(0.3, {
                    position: this.goodsStartPos[Number(e.name)]
                })
                .start();
            this.wrongNode.position = this.node.convertToNodeSpaceAR(t.getLocation());
            this.showWrong();
        }
    };
    e.prototype.gameRight = function (t, e) {
        var o = this;
        if (void 0 === t) {
            t = 0.2;
        }
        if (this.isGame) {
            this.isGame = !1;
            if (e) {
                var i = e.parent.convertToWorldSpaceAR(e.position);
                var r = this.rightNode.parent.convertToNodeSpaceAR(i);
                this.rightNode.setPosition(r);
            }
            this.scheduleOnce(function () {
                o.rightNode.active = !0;
                o.rightNode.scale = 0;
                cc.game.emit("game_success0");
                cc.tween(o.rightNode)
                    .delay(0.2)
                    .call(function () {
                        cc.game.emit("game_success1");
                        cc.audioEngine.playEffect(o.rightSound, !1);
                    })
                    .to(
                        0.3,
                        {
                            scale: 1
                        },
                        {
                            easing: cc.easing.expoOut
                        }
                    )
                    .delay(1)
                    .call(function () {
                        cc.game.emit("game_success2");
                    })
                    .start();
            }, t);
        }
    };
    e.prototype.showWrong = function (t, e, o, i) {
        if (void 0 === e) {
            e = 0;
        }
        if (void 0 === o) {
            o = !1;
        }
        if (void 0 === i) {
            i = 0;
        }
        if (this.isGame) {
            this.wrongNode.active = !0;
            this.wrongNode.scale = 0;
            this.wrongNode.stopAllActions();
            cc.audioEngine.playEffect(this.wrongSound, !1);
            cc.tween(this.wrongNode)
                .to(0.3, {
                    scale: 1
                })
                .delay(e)
                .to(0.3, {
                    scale: 0
                })
                .start();
            if (t) {
                var r = cc.v2();
                if (t instanceof cc.Event.EventTouch) {
                    r = t.getLocation();
                } else {
                    r = t.parent.convertToWorldSpaceAR(t.position);
                }
                var n = this.wrongNode.parent.convertToNodeSpaceAR(r);
                this.wrongNode.setPosition(n);
            }
            if (o) {
                this.isGame = !1;
                this.scheduleOnce(function () {
                    cc.game.emit("onRestartBtn");
                }, e);
            }
            var a = this.wrongFrams[i];
            if (a) {
                this.wrongNode.getComponent(cc.Sprite).spriteFrame = a;
            }
        }
    };
    e.prototype.onClickSound = function () {
        cc.audioEngine.playEffect(this.clickSound, !1);
    };
    e.prototype.regTouchEvent = function (t, e, o, i) {
        if (e) {
            t.on(cc.Node.EventType.TOUCH_START, e, this);
        }
        if (o) {
            t.on(cc.Node.EventType.TOUCH_MOVE, o, this);
        }
        if (i) {
            t.on(cc.Node.EventType.TOUCH_END, i, this);
        }
        if (i) {
            t.on(cc.Node.EventType.TOUCH_CANCEL, i, this);
        }
    };
    e.prototype.playLikeAnimSound = function () {
        var t = this;
        return new Promise(function (e) {
            var o = 0;
            t.schedule(
                function () {
                    cc.audioEngine.playEffect(t.clickSound, !1);
                    if (30 == ++o) {
                        e();
                    }
                },
                0.1,
                30
            );
        });
    };
    e.prototype.shakeNode = function (t, e) {
        if (void 0 === e) {
            e = 5;
        }
        var o = this.shakeOriginPos[t.uuid];
        if (o) {
            //
        } else {
            o = t.position;
            this.shakeOriginPos[t.uuid] = o;
        }
        t.setPosition(o);
        t.stopAllActions();
        cc.tween(t)
            .by(0.05, {
                x: -e
            })
            .by(0.05, {
                x: e
            })
            .by(0.05, {
                x: e
            })
            .by(0.05, {
                x: -e
            })
            .by(0.05, {
                x: -e
            })
            .by(0.05, {
                x: e
            })
            .by(0.05, {
                x: e
            })
            .by(0.05, {
                x: -e
            })
            .start();
    };
    e.prototype.getInstance = function (t, e) {
        var o = t.parent.convertToWorldSpaceAR(t.position);
        var i = e.parent.convertToWorldSpaceAR(e.position);
        return o.sub(i).mag();
    };
    e.prototype.isIntersects = function (t, e) {
        return t.getBoundingBoxToWorld().intersects(e.getBoundingBoxToWorld());
    };
    e.prototype.playRightStarSound = function () {
        cc.audioEngine.playEffect(this.rightStarSound, !1);
    };
    e.prototype.playClickSoundInterval = function () {
        if (this.clickSoundTimer > this.clickSoundInterval) {
            cc.audioEngine.playEffect(this.clickSound, !1);
            this.clickSoundTimer = 0;
        }
    };
    e.prototype.playClickSound = function () {
        cc.audioEngine.playEffect(this.clickSound, !1);
    };
    e.prototype.playXiuSound = function () {
        cc.audioEngine.playEffect(this.xiuSoundAudio, !1);
    };
    e.prototype.update = function (t) {
        this.clickSoundTimer += t;
    };
    e.prototype.onLongClickSound = function () {
        var t = this;
        if (this.isClick) {
            //
        } else {
            this.isClick = !0;
            this.onClickSound();
            this.scheduleOnce(function () {
                t.isClick = !1;
            }, 0.4);
        }
    };
    e.prototype.fadeOut = function (t, e) {
        cc.tween(t)
            .to(0.3, {
                opacity: 0
            })
            .call(function () {
                if (e) {
                    e();
                }
            })
            .start();
    };
    e.prototype.restart = function () {
        cc.game.emit("onRestartBtn");
    };
    __decorate([c(cc.Node)], e.prototype, "rightNode", void 0);
    __decorate([c(cc.Node)], e.prototype, "wrongNode", void 0);
    __decorate(
        [
            c({
                type: cc.AudioClip
            })
        ],
        e.prototype,
        "rightSound",
        void 0
    );
    __decorate(
        [
            c({
                type: cc.AudioClip
            })
        ],
        e.prototype,
        "wrongSound",
        void 0
    );
    __decorate(
        [
            c({
                type: cc.AudioClip
            })
        ],
        e.prototype,
        "clickSound",
        void 0
    );
    __decorate(
        [
            c({
                type: cc.AudioClip
            })
        ],
        e.prototype,
        "rightStarSound",
        void 0
    );
    __decorate(
        [
            c({
                type: cc.AudioClip
            })
        ],
        e.prototype,
        "xiuSoundAudio",
        void 0
    );
    __decorate(
        [
            c({
                type: [cc.SpriteFrame],
                tooltip: "错误精灵帧，非必须"
            })
        ],
        e.prototype,
        "wrongFrams",
        void 0
    );
    __decorate([c([cc.Node])], e.prototype, "needClickAudioNode", void 0);
    __decorate([c(cc.Node)], e.prototype, "moveResetNode", void 0);
    __decorate([c([cc.Node])], e.prototype, "bgNode", void 0);
    return __decorate([s], e);
})(cc.Component);
exports.default = l;
