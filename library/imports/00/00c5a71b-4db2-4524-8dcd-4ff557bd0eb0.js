"use strict";
cc._RF.push(module, '00c5acbTbJFJI3NT/VXvQ6w', 'Level-249667_turntable');
// script/scripts/Level-249667_turntable.js

"use strict";

var i;

var $audioManager = require("../../scripts/AudioManager");

var $limitRepeat = require("../../scripts/LimitRepeat");

var $collision = require("./Collision");

var $level_249667_busConfig = require("./Level-249667_busConfig");

var $level_249667_carItem = require("./Level-249667_carItem");

var p = cc._decorator;
var d = p.ccclass;
var u = p.property;

var g = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.pressSpriteFrame = null;
    e.oldSpriteFrame = null;
    e.mgr = null;
    e.cars = [];
    e.amount = 0;
    e.isTouch = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.oldSpriteFrame = this.node.getChildByName("rotateBtn").getComponent(cc.Sprite).spriteFrame;
    this.node.getChildByName("pos").active = !1;
    this.node.getChildByName("rotateBtn").on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    this.node.getChildByName("rotateBtn").on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    this.node.getChildByName("rotateBtn").on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    this.node.getComponent($collision["default"]).onCollisionEnter = this.onCollisionEnter.bind(this);
  };

  e.prototype.onCollisionEnter = function (t, e) {
    if (t.node.parent != e.node) {
      if (!t.node.canCollision) {
        return;
      }

      var o = t.node.parent;
      var i = o.getComponent($level_249667_carItem["default"]);

      if (!i.mgr) {
        return;
      }

      console.log("撞到");

      if ($audioManager.Audio.getEffectMute()) {//
      } else {
        i.mgr.playLevelSound("Crash");
      }

      i.mgr.hit(o);
      i.carState = $level_249667_busConfig.CarState.Idle;

      if (i.node.isCarPark) {
        i.node.isWen = !0;
      }

      i.node.stopAllActions();
      cc.tween(i.node).to(0.15, {
        position: i.oldPos
      }).call(function () {
        i.isCanClick = !0;

        if (i.isTransportCar) {
          i.mgr.isTransportCarMove = !0;
        }
      }).start();
      var r = i.nextCar;

      if (r) {
        r.stopAllActions();
        cc.tween(r).to(0.15, {
          position: r.getComponent($level_249667_carItem["default"]).oldPos
        }).start();
      }
    }
  };

  e.prototype.init = function (t) {
    this.mgr = t;

    for (var e = 0; e < this.node.children.length; e++) {
      var o = this.node.children[e];
      o.zIndex = e;

      if (o.childrenCount > 0 && "pos" != o.name) {
        this.cars.push(o);
        o.getComponent($level_249667_carItem["default"]).isTurntableCar = !0;

        for (var i = 0; i < this.node.getChildByName("pos").children.length; i++) {
          var r = this.node.getChildByName("pos").children[i];
          var n = r.parent.convertToWorldSpaceAR(r.position);
          var a = o.getChildByName("car").getComponent(cc.PolygonCollider);

          if (cc.Intersection.pointInPolygon(n, this.mgr.getWPosByPolygon(a))) {
            o.getComponent($level_249667_carItem["default"]).turntablePosIndex = Number(r.name);
            this.correctCarPos(r, o);
          }
        }
      }
    }
  };

  e.prototype.correctCarPos = function (t, e) {
    var o = t.convertToWorldSpaceAR(cc.v2(0, e.height / 2));
    var i = e.parent.convertToNodeSpaceAR(o);
    e.position = i;
  };

  e.prototype.getCars = function () {
    return this.cars;
  };

  e.prototype.touchStart = function () {
    var t = this;

    if (!this.mgr.isRemove && !this.isTouch) {
      this.isTouch = !0;
      this.amount = 0;
      this.node.getChildByName("rotateBtn").getComponent(cc.Sprite).spriteFrame = this.pressSpriteFrame;
      var e = this.cars.length;
      this.mgr.isRotateCreate = !0;

      for (var o = 0; o < e; o++) {
        var i = this.cars[o];

        if (i && i.getComponent($level_249667_carItem["default"])) {
          var r = i.getComponent($level_249667_carItem["default"]).turntablePosIndex;
          var n = r + 2;

          if (6 == r) {
            n = 0;
          }

          if (7 == r) {
            n = 1;
          }

          this.changeCarByTurntable(o, i, n, function () {
            t.amount += 1;

            if (t.amount >= e) {
              t.mgr.updateTurntableCar();
              t.mgr.updateCarWeight();

              for (var o = 0; o < t.node.children.length; o++) {
                var i = t.node.children[o];

                if (i.childrenCount > 0 && "pos" != i.name) {
                  if (i.getComponent($level_249667_carItem["default"]).turntablePosIndex <= 3) {
                    i.zIndex = i.getComponent($level_249667_carItem["default"]).turntablePosIndex;
                  } else {
                    i.zIndex = i.getComponent($level_249667_carItem["default"]).turntablePosIndex + 2;
                  }
                } else {
                  if ("column" == i.name) {
                    i.zIndex = 4;
                  } else {
                    "rotateBtn" == i.name && (i.zIndex = 5);
                  }
                }
              }

              t.mgr.isRotateCreate = !1;
            }
          });
        }
      }
    }
  };

  e.prototype.changeCarByTurntable = function (t, e, o, i) {
    var r;
    var n;
    var a;
    var s = this;
    var c = e.getComponent($level_249667_carItem["default"]).colorImgName;
    var p = e.getComponent($level_249667_carItem["default"]).lenImgName;
    var d = e.parent.getChildByName("pos");

    switch (o) {
      case $level_249667_busConfig.TurntablePosDir.LeftTop:
        a = 4;
        n = "04" + p + "-0";
        break;

      case $level_249667_busConfig.TurntablePosDir.Top:
        a = 2;
        n = "02" + p;
        break;

      case $level_249667_busConfig.TurntablePosDir.RightTop:
        a = 4;
        n = "04" + p + "-1";
        break;

      case $level_249667_busConfig.TurntablePosDir.Right:
        a = 1;
        n = "01" + p + "-1";
        break;

      case $level_249667_busConfig.TurntablePosDir.RightBottom:
        a = 5;
        n = "05" + p + "-1";
        break;

      case $level_249667_busConfig.TurntablePosDir.Bottom:
        a = 3;
        n = "03" + p;
        break;

      case $level_249667_busConfig.TurntablePosDir.LeftBottom:
        a = 5;
        n = "05" + p + "-0";
        break;

      case $level_249667_busConfig.TurntablePosDir.Left:
        a = 1;
        n = "01" + p + "-0";
    }

    (r = cc.instantiate(this.mgr.dict.carPrefab.getChildByName(n))).active = !1;
    this.node.addChild(r);
    r.getComponent($level_249667_carItem["default"]).mgr = this.mgr;
    r.getComponent($level_249667_carItem["default"]).colorImgName = c;
    r.getComponent($level_249667_carItem["default"]).lenImgName = p;
    r.getComponent($level_249667_carItem["default"]).dirImgName = a;
    r.getComponent($level_249667_carItem["default"]).carColor = e.getComponent($level_249667_carItem["default"]).carColor;
    r.getComponent($level_249667_carItem["default"]).isTurntableCar = !0;
    r.getComponent($level_249667_carItem["default"]).turntablePosIndex = o;

    if (this.mgr.isDebug) {
      var u = new cc.Node();
      u.name = "path";
      u.color = cc.Color.WHITE;
      u.addComponent(cc.Label);
      r.addChild(u);
      u.position = cc.v2(-13.105, -26.21);
    }

    var g;
    var m = d.children[o].convertToWorldSpaceAR(cc.v2(0, r.height / 2));
    var f = r.parent.convertToNodeSpaceAR(m);
    r.position = f;
    var v = "" + c + a + p;
    g = "texture/" + this.mgr.folder + "/" + this.mgr.folder + "_" + v;
    cc.resources.load(g, function (o, n) {
      e.destroy();

      if (o) {//
      } else {
        if (n) {
          r.getChildByName("car").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n);
        }

        r.active = !0;
        s.cars[t] = r;
        i();
      }
    });
  };

  e.prototype.load = function (t, e, o) {
    return new Promise(function (i) {
      cc.resources.load(t, function (t, r) {
        e.destroy();

        if (r) {
          o.getChildByName("car").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(r);
        }

        o.active = !0;
        i(1);
      });
    });
  };

  e.prototype.touchEnd = function () {
    this.isTouch = !1;
    this.node.getChildByName("rotateBtn").getComponent(cc.Sprite).spriteFrame = this.oldSpriteFrame;
  };

  __decorate([u(cc.SpriteFrame)], e.prototype, "pressSpriteFrame", void 0);

  __decorate([$limitRepeat.LimitRepeat(0.3)], e.prototype, "touchStart", null);

  return __decorate([d], e);
}(cc.Component);

exports["default"] = g;

cc._RF.pop();