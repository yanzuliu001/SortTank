var i;
var $level_290760_DrinkItem = require("./Level-290760_DrinkItem");
var s = cc._decorator;
var c = s.ccclass;
var l =
    (s.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.drinkPos = [];
            e.drinkQueue = [];
            e.mgr = null;
            e.isReady = !1;
            return e;
        }
        __extends(e, t);
        e.prototype.init = function (t) {
            this.mgr = t;
            for (
                this.drinkPos = JSON.parse(JSON.stringify(this.mgr.model.drinkPos)).reverse();
                this.drinkQueue.length < this.drinkPos.length;

            ) {
                var e = this.getDrinkColor(-1);
                if (!e) {
                    break;
                }
                e.color;
                var o = e.amount;
                for (var i = 0; i < o; i++) {
                    var r = cc.instantiate(this.mgr.dict.drinkPrefab);
                    r.parent = this.node;
                    r.addComponent($level_290760_DrinkItem.default).init(this, e, this.drinkQueue.length);
                    this.drinkQueue.push(r.getComponent($level_290760_DrinkItem.default));
                }
            }
        };
        e.prototype.getDrinkColor = function (t) {
            var e = this.getWeight();
            if (e) {
                var o = this.mgr.model.config.limitRank;
                var i = Math.min(o, e.length);
                var r = [];
                var n = 0;
                for (var a = 0; a < i; a++) {
                    var s = e[a].split("_")[1];
                    r.push(Number(s));
                }
                r.forEach(function (t) {
                    n += Number(t);
                });
                var c = this.mgr.randomNum(1, n);
                var l = 0;
                var h = 0;
                for (var p = 0; p < r.length; p++) {
                    if ((l += r[p]) >= c && this.containerControl.checkHasItemByColor(e[p].split("_")[0])) {
                        h = p;
                        break;
                    }
                }
                var d = e[h].split("_")[0];
                var u = this.containerControl.getBoxGroup(Number(d), t);
                return {
                    color: Number(d),
                    amount: Number(u)
                };
            }
        };
        e.prototype.getWeight = function (t) {
            if (void 0 === t) {
                t = !1;
            }
            var e = {};
            this.colorType.forEach(function (t) {
                return (e[t] = 0);
            });
            var o = this.levelData.blockWeight;
            this.boxQueue.forEach(function (t) {
                var i = t.getComponent(BoxItem);
                if (i.state == BoxState.Idle) {
                    var r;
                    var n = i.colorType;
                    var a = i.coverCount;
                    if (1 === a) {
                        r = o[0];
                    } else {
                        if (2 == a) {
                            r = o[1];
                        } else {
                            r = o[2];
                        }
                    }
                    e[n] += r * i.posCount;
                }
            });
            var i = this.levelData.waitWeight;
            this.getWaitAllBox().forEach(function (t) {
                var o = t.getComponent(BoxItem);
                var r = o.colorType;
                var n = (o.posCount - o.putCount) * i;
                e[r] += n;
            });
            if (t) {
                var r = this.levelData.queueWeight;
                this.drinkQueue.forEach(function (t) {
                    var o = t.getComponent($level_290760_DrinkItem.default).colorType;
                    var i = r;
                    e[o] -= i;
                });
            }
            var n = [];
            for (var s in e) {
                var c = s + "_" + e[s];
                n.push(c);
            }
            if (n) {
                n.sort(function (t, e) {
                    var o = t.split("_");
                    var i = Number(o[1]);
                    var r = e.split("_");
                    return Number(r[1]) - i;
                });
            }
            return n;
        };
        return __decorate([c], e);
    })(cc.Component));
exports.default = l;
