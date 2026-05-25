"use strict";
cc._RF.push(module, 'e87d1ZTFUdOKoUxDxjvcQmw', 'Level-29076_boxCarItem');
// script/scripts/Level-29076_boxCarItem.js

"use strict";

var i;

var $audioManager = require("../../scripts/AudioManager");

var $level_249667_busConfig = require("./Level-249667_busConfig");

var $level_249667_chain = require("./Level-249667_chain");

var $level_249667_uTransport = require("./Level-249667_uTransport");

var h = cc._decorator;
var p = h.ccclass;
var d = h.property;

var u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.seatTotalAmount = 4;
    e.railCarTurn = [];
    e.carColor = null;
    e.carID = null;
    e.path = 0;
    e.emptySeatAmount = 0;
    e.dir = 0;
    e.colorImgName = null;
    e.dirImgName = null;
    e.lenImgName = null;
    e.mgr = null;
    e.isTransportCar = !1;
    e.isBlackCar = !1;
    e.isTurntableCar = !1;
    e.turntablePosIndex = -1;
    e.prevCar = null;
    e.nextCar = null;
    e.leftObliqueCar = !1;
    e.rightObliqueCar = !1;
    e.isUTransportCar = !1;
    e.isUTransportCar_noIn = !1;
    e.isFireEngine = !1;
    e.isPoliceCar = !1;
    e.isRichCar = !1;
    e.isTramcar = !1;
    e.tramcarPosIndex = 0;
    e.otherCarNode = [];
    e.minLen = 10;
    e.oldPos = null;
    e.floatPos = null;
    e.carState = $level_249667_busConfig.CarState.Idle;
    e.speed = 1170;
    e.isCanClick = !0;
    e.isCollision = !1;
    e.isReadyDestroy = !1;
    return e;
  }

  var o;

  __extends(e, t);

  o = e;

  e.prototype.onLoad = function () {
    this.emptySeatAmount = this.seatTotalAmount;
    this.oldPos = this.node.position;

    if ("1" == this.node.name[0] && "2" == this.node.name[1]) {
      this.isFireEngine = !0;
    }

    if ("1" == this.node.name[0] && "0" == this.node.name[1]) {
      this.isPoliceCar = !0;
    }

    if ("1" == this.node.name[0] && "1" == this.node.name[1]) {
      this.isRichCar = !0;
    }

    if ("1" == this.node.name[0] && "3" == this.node.name[1]) {
      this.isTramcar = !0;
    }
  };

  e.prototype.update = function () {
    if (!this.isReadyDestroy) {
      if (this.carState == $level_249667_busConfig.CarState.Normal) {
        if (this.path > 1 || this.isTramcar) {
          this.isCanClick = !1;
          var t = this.getWPosByNode(this.node);

          if (90 == Math.round(Math.abs(this.node.angle))) {
            this.node.convertToWorldSpaceAR(cc.v2(-this.node.width / 2, 0));
            this.node.convertToWorldSpaceAR(cc.v2(this.node.width / 2, 0));
          }

          for (var e = 0; e < this.otherCarNode.length; e++) {
            var i = this.otherCarNode[e];

            try {
              if (i && i.getComponent(o).carState == $level_249667_busConfig.CarState.Idle) {
                var r = [i.convertToWorldSpaceAR(cc.v2(-i.width / 2, 0)), i.convertToWorldSpaceAR(cc.v2(-i.width / 2, -i.height))];
                var n = [i.convertToWorldSpaceAR(cc.v2(i.width / 2, 0)), i.convertToWorldSpaceAR(cc.v2(i.width / 2, -i.height))];
                var a = [i.convertToWorldSpaceAR(cc.v2(-i.width / 2, 0)), i.convertToWorldSpaceAR(cc.v2(i.width / 2, 0))];
                var c = [i.convertToWorldSpaceAR(cc.v2(-i.width / 2, -i.height)), i.convertToWorldSpaceAR(cc.v2(i.width / 2, -i.height))];

                if (cc.Intersection.pointLineDistance(t, a[0], a[1], !0) < this.minLen || cc.Intersection.pointLineDistance(t, c[0], c[1], !0) < this.minLen || cc.Intersection.pointLineDistance(t, r[0], r[1], !0) < this.minLen || cc.Intersection.pointLineDistance(t, n[0], n[1], !0) < this.minLen) {
                  this.checkTouch(i);
                  break;
                }
              }
            } catch (m) {
              console.log(m);

              if (this.node) {
                this.node.destroy();
              }
            }
          }
        }

        var h = this.mgr.dict.road.parent.convertToWorldSpaceAR(this.mgr.dict.road.position);
        var p = this.node.parent.convertToNodeSpaceAR(h);

        if (this.node.y >= p.y - 2 * this.minLen) {
          console.log("检测碰到公路");

          if (this.isUTransportCar) {
            if (-1 !== (e = this.mgr.dict.carRoot.getComponent($level_249667_uTransport["default"]).carArr.indexOf(this.node))) {
              this.mgr.dict.carRoot.getComponent($level_249667_uTransport["default"]).carArr[e] = null;
              this.mgr.dict.carRoot.getComponent($level_249667_uTransport["default"]).reduceUpdate();
            }

            this.mgr.dict.carRoot.getComponent($level_249667_uTransport["default"]).isTransportCarMove = !0;
          }

          return void (this.isCollision || (this.isCollision = !0, this.mgr.collision(this.node)));
        }

        if (this.node.x <= -(this.mgr.boundary / 2 + this.node.width / 2)) {
          this.carState = $level_249667_busConfig.CarState.GoingRoad;
          return void this.mgr.changeCar(this.node, 2);
        }

        if (this.node.x >= this.mgr.boundary / 2 + this.node.width / 2) {
          this.carState = $level_249667_busConfig.CarState.GoingRoad;
          return void this.mgr.changeCar(this.node, 2);
        }

        if (this.node.y <= -620 && this.node.x > 0) {
          this.carState = $level_249667_busConfig.CarState.OnBottomRight;
          return void this.mgr.changeCar(this.node, 1, 1, "01" + this.lenImgName + "-1");
        }

        if (this.node.y <= -620 && this.node.x < 0) {
          this.carState = $level_249667_busConfig.CarState.OnBottomLeft;
          return void this.mgr.changeCar(this.node, 1, 2, "01" + this.lenImgName + "-0");
        }

        if (this.leftObliqueCar && this.node.x >= -189.008) {
          this.carState = $level_249667_busConfig.CarState.GoingRoad;
          this.mgr.changeCar(this.node, 2);
        } else {
          if (this.rightObliqueCar && this.node.x <= 189.008) {
            this.carState = $level_249667_busConfig.CarState.GoingRoad, this.mgr.changeCar(this.node, 2);
          } else {
            if ((this.isUTransportCar || this.isUTransportCar_noIn) && (-90 == Math.round(this.node.angle) || -52 == Math.round(this.node.angle) || -128 == Math.round(this.node.angle)) && this.node.x >= 0) {
              this.carState = $level_249667_busConfig.CarState.GoingRoad, this.node.x = 0, this.mgr.changeCar(this.node, 2), this.isUTransportCar && this.mgr.dict.carRoot.getComponent($level_249667_uTransport["default"]).reduceUpdate();
            } else {
              (this.isUTransportCar || this.isUTransportCar_noIn) && (90 == Math.round(this.node.angle) || 52 == Math.round(this.node.angle) || 128 == Math.round(this.node.angle)) && this.node.x <= 0 && (this.carState = $level_249667_busConfig.CarState.GoingRoad, this.node.x = 0, this.mgr.changeCar(this.node, 2), this.isUTransportCar && this.mgr.dict.carRoot.getComponent($level_249667_uTransport["default"]).reduceUpdate());
            }
          }
        }

        if (this.isTramcar && this.railCarTurn[this.tramcarPosIndex]) {
          var d = this.railCarTurn[this.tramcarPosIndex].name.split("-");
          var u = d[0];
          var g = d[1];

          if ("0" == u) {
            if (this.getWPosByNode(this.node).x <= this.getWPosByNode(this.railCarTurn[this.tramcarPosIndex]).x) {
              this.railCarTurnChange(g);
            }
          } else {
            if ("1" == u) {
              this.getWPosByNode(this.node).x >= this.getWPosByNode(this.railCarTurn[this.tramcarPosIndex]).x && this.railCarTurnChange(g);
            } else {
              "2" == u || "3" == u && this.getWPosByNode(this.node).y <= this.getWPosByNode(this.railCarTurn[this.tramcarPosIndex]).y && this.railCarTurnChange(g);
            }
          }
        }
      }

      if (this.carState == $level_249667_busConfig.CarState.OnBottomLeft && this.node.x <= -(this.mgr.boundary / 2 + this.node.width / 2)) {
        this.carState = $level_249667_busConfig.CarState.GoingRoad;
        return void this.mgr.changeCar(this.node, 2);
      }

      if (this.carState == $level_249667_busConfig.CarState.OnBottomRight && this.node.x >= this.mgr.boundary / 2 + this.node.width / 2) {
        this.carState = $level_249667_busConfig.CarState.GoingRoad;
        return void this.mgr.changeCar(this.node, 2);
      }

      if (this.carState == $level_249667_busConfig.CarState.OutParking && this.node.x >= cc.winSize.width / 2 + 6 * this.node.width) {
        this.mgr.checkRes();
        this.node.destroy();
      }

      if (this.carState == $level_249667_busConfig.CarState.WaterSprayLeave && this.node.x <= -(cc.winSize.width / 2 + this.node.height)) {
        console.log("销毁消防车");
        this.node.destroy();
      }
    }
  };

  e.prototype.railCarTurnChange = function (t) {
    this.carState = $level_249667_busConfig.CarState.Normal;

    if ("up" == t) {
      this.tramcarPosIndex += 1;
      this.mgr.changeCar(this.node, 2);
    } else {
      if ("leftUp" == t) {
        this.tramcarPosIndex += 1, this.mgr.changeCar(this.node, 4, 2);
      } else {
        if ("leftDown" == t) {
          this.tramcarPosIndex += 1, this.mgr.changeCar(this.node, 5, 2);
        } else {
          if ("right" == t) {
            this.tramcarPosIndex += 1, this.mgr.changeCar(this.node, 1, 1);
          } else {
            "left" == t ? (this.tramcarPosIndex += 1, this.mgr.changeCar(this.node, 1, 2)) : "rightUp" == t ? (this.tramcarPosIndex += 1, this.mgr.changeCar(this.node, 4, 1)) : "rightDown" == t && (this.tramcarPosIndex += 1, this.mgr.changeCar(this.node, 5, 1));
          }
        }
      }
    }
  };

  e.prototype.checkTouch = function (t) {
    var e = this;

    if ($audioManager.Audio.getEffectMute()) {//
    } else {
      this.mgr.playRemoteSound("audio/f27312/f27312_Crash");
    }

    this.mgr.hit(this.node);
    this.carState = $level_249667_busConfig.CarState.Idle;

    if (this.node.isCarPark) {
      this.node.isWen = !0;
    }

    this.node.stopAllActions();
    t.runAction(this.shackAction(0.1, 2));
    this.mgr.moveCarAmount -= 1;

    if (this.isTramcar) {
      var i = this.node.convertToWorldSpaceAR(cc.v2(0, -30));
      var r = this.node.parent.convertToNodeSpaceAR(i);
      cc.tween(this.node).to(0.15, {
        position: r
      }).call(function () {
        e.isCanClick = !0;
      }).start();
    } else {
      cc.tween(this.node).to(0.15, {
        position: this.oldPos
      }).call(function () {
        e.isCanClick = !0;

        if (e.isTransportCar) {
          e.mgr.isTransportCarMove = !0;
        }

        if (e.isUTransportCar) {
          e.mgr.dict.carRoot.getComponent($level_249667_uTransport["default"]).isTransportCarMove = !0;
        }

        e["float"](e.node);
      }).start();
    }

    var n = this.nextCar;
    var h = this.prevCar;

    if (n && (this.node.getChildByName("chain") && 0 == this.node.getChildByName("chain").getComponent($level_249667_chain["default"]).linkType || n.getChildByName("chain") && 0 == n.getChildByName("chain").getComponent($level_249667_chain["default"]).linkType)) {
      n.stopAllActions();
      n.getComponent(o).carState = $level_249667_busConfig.CarState.Idle;
      this.mgr.moveCarAmount -= 1;
      cc.tween(n).to(0.15, {
        position: n.getComponent(o).oldPos
      }).call(function () {
        n.getComponent(o).isCanClick = !0;
      }).start();
    }

    if (h && (h.getChildByName("chain") && 1 == h.getChildByName("chain").getComponent($level_249667_chain["default"]).linkType || this.node.getChildByName("chain") && 1 == this.node.getChildByName("chain").getComponent($level_249667_chain["default"]).linkType)) {
      h.getComponent(o).carState = $level_249667_busConfig.CarState.Idle;
      h.stopAllActions();
      this.mgr.moveCarAmount -= 1;
      cc.tween(h).to(0.15, {
        position: h.getComponent(o).oldPos
      }).call(function () {
        h.getComponent(o).isCanClick = !0;
      }).start();
    }
  };

  e.prototype["float"] = function (t) {
    if (t.getComponent(o).floatPos) {
      cc.tween(t).to(0.6, {
        position: t.getComponent(o).floatPos
      }).to(0.6, {
        position: t.getComponent(o).oldPos
      }).union().repeatForever().start();
    }
  };

  e.prototype.carBack = function (t) {
    var e = this;

    if ($audioManager.Audio.getEffectMute()) {//
    } else {
      this.mgr.playRemoteSound("audio/f27312/f27312_Crash");
    }

    this.mgr.hit(this.node);
    this.carState = $level_249667_busConfig.CarState.Idle;

    if (this.node.isCarPark) {
      this.node.isWen = !0;
    }

    this.node.stopAllActions();
    t.runAction(this.shackAction(0.1, 2));
    this.mgr.moveCarAmount -= 1;
    cc.tween(this.node).to(0.15, {
      position: this.oldPos
    }).call(function () {
      e.isCanClick = !0;

      if (e.isTransportCar) {
        e.mgr.isTransportCarMove = !0;
      }

      if (e.isUTransportCar) {
        e.mgr.dict.carRoot.getComponent($level_249667_uTransport["default"]).isTransportCarMove = !0;
      }
    }).start();
    var i = this.nextCar;
    var r = this.prevCar;

    if (i && (this.node.getChildByName("chain") && 0 == this.node.getChildByName("chain").getComponent($level_249667_chain["default"]).linkType || i.getChildByName("chain") && 0 == i.getChildByName("chain").getComponent($level_249667_chain["default"]).linkType)) {
      i.stopAllActions();
      i.getComponent(o).carState = $level_249667_busConfig.CarState.Idle;
      cc.tween(i).to(0.15, {
        position: i.getComponent(o).oldPos
      }).call(function () {
        i.getComponent(o).isCanClick = !0;
      }).start();
    }

    if (r && (r.getChildByName("chain") && 1 == r.getChildByName("chain").getComponent($level_249667_chain["default"]).linkType || this.node.getChildByName("chain") && 1 == this.node.getChildByName("chain").getComponent($level_249667_chain["default"]).linkType)) {
      r.getComponent(o).carState = $level_249667_busConfig.CarState.Idle;
      r.stopAllActions();
      cc.tween(r).to(0.15, {
        position: r.getComponent(o).oldPos
      }).call(function () {
        r.getComponent(o).isCanClick = !0;
      }).start();
    }
  };

  e.prototype.shackAction = function (t, e) {
    var o = cc.moveBy(t, e, e);
    var i = cc.moveBy(t, -e, -e);
    var r = cc.moveBy(0.8 * t, 0.8 * e, 0.8 * e);
    var n = cc.moveBy(0.8 * t, 0.8 * -e, 0.8 * -e);
    var a = cc.moveBy(0.6 * t, 0.6 * e, 0.6 * e);
    var s = cc.moveBy(0.6 * t, 0.6 * -e, 0.6 * -e);
    var c = cc.moveBy(0.4 * t, 0.4 * e, 0.4 * e);
    var l = cc.moveBy(0.4 * t, 0.4 * -e, 0.4 * -e);
    var h = cc.moveBy(0.2 * t, 0.2 * e, 0.2 * e);
    var p = cc.moveBy(0.2 * t, 0.2 * -e, 0.2 * -e);
    return cc.sequence(o, i, r, n, a, s, c, l, h, p);
  };

  e.prototype.getWPosByNode = function (t) {
    return t.parent.convertToWorldSpaceAR(t.position);
  };

  __decorate([d], e.prototype, "seatTotalAmount", void 0);

  __decorate([d([cc.Node])], e.prototype, "railCarTurn", void 0);

  return o = __decorate([p], e);
}(cc.Component);

exports["default"] = u;

cc._RF.pop();