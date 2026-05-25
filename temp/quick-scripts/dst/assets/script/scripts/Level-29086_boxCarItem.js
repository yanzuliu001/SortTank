
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scripts/Level-29086_boxCarItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53e1bbd1FhHG5X+t6tsCBMT', 'Level-29086_boxCarItem');
// script/scripts/Level-29086_boxCarItem.js

"use strict";

var i;

var $audioManager = require("../../scripts/AudioManager");

var $level_249667_chain = require("./Level-249667_chain");

var $level_249667_uTransport = require("./Level-249667_uTransport");

var $level_29086_config = require("./Level-29086_config");

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
    e.carState = $level_29086_config.CarState.Idle;
    e.speed = 750;
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
      if (this.carState == $level_29086_config.CarState.Normal) {
        if (this.path > 1 || this.isTramcar) {
          this.isCanClick = !1;
          var t = this.getWPosByNode(this.node);
          var e = Math.round(Math.abs(this.node.angle));
          var i = void 0;

          if (90 == e) {
            i = [this.node.convertToWorldSpaceAR(cc.v2(-this.node.width / 2, 0)), this.node.convertToWorldSpaceAR(cc.v2(this.node.width / 2, 0))];
          }

          for (var r = 0; r < this.otherCarNode.length; r++) {
            var n = this.otherCarNode[r];

            try {
              if (n && n.getComponent(o).carState == $level_29086_config.CarState.Idle) {
                var a = [n.convertToWorldSpaceAR(cc.v2(0, 0)), n.convertToWorldSpaceAR(cc.v2(0, -n.height))];
                var s = [n.convertToWorldSpaceAR(cc.v2(-n.width / 2, 0)), n.convertToWorldSpaceAR(cc.v2(n.width / 2, 0))];
                var h = [n.convertToWorldSpaceAR(cc.v2(-n.width / 2, -n.height)), n.convertToWorldSpaceAR(cc.v2(n.width / 2, -n.height))];

                if (a[0]) {
                  if (90 == e) {
                    if (cc.Intersection.pointLineDistance(i[0], a[0], a[1], !0) < this.minLen || cc.Intersection.pointLineDistance(i[0], s[0], s[1], !0) < this.minLen || cc.Intersection.pointLineDistance(i[0], h[0], h[1], !0) < this.minLen || cc.Intersection.pointLineDistance(i[1], a[0], a[1], !0) < this.minLen || cc.Intersection.pointLineDistance(i[1], s[0], s[1], !0) < this.minLen || cc.Intersection.pointLineDistance(i[1], h[0], h[1], !0) < this.minLen) {
                      this.checkTouch(n);
                      break;
                    }
                  } else if (cc.Intersection.pointLineDistance(t, a[0], a[1], !0) < this.minLen || cc.Intersection.pointLineDistance(t, s[0], s[1], !0) < this.minLen || cc.Intersection.pointLineDistance(t, h[0], h[1], !0) < this.minLen) {
                    this.checkTouch(n);
                    break;
                  }
                }
              }
            } catch (f) {
              console.log(f);
            }
          }
        }

        var p = this.mgr.dict.road.parent.convertToWorldSpaceAR(this.mgr.dict.road.position);
        var d = this.node.parent.convertToNodeSpaceAR(p);

        if (this.node.y >= d.y - 2 * this.minLen) {
          console.log("检测碰到公路");

          if (this.isUTransportCar) {
            if (-1 !== (r = this.mgr.dict.carRoot.getComponent($level_249667_uTransport["default"]).carArr.indexOf(this.node))) {
              this.mgr.dict.carRoot.getComponent($level_249667_uTransport["default"]).carArr[r] = null;
              this.mgr.dict.carRoot.getComponent($level_249667_uTransport["default"]).reduceUpdate();
            }

            this.mgr.dict.carRoot.getComponent($level_249667_uTransport["default"]).isTransportCarMove = !0;
          }

          return void (this.isCollision || (this.isCollision = !0, this.mgr.collision(this.node)));
        }

        if (this.node.x <= -(this.mgr.boundary / 2 + this.node.width / 2)) {
          this.carState = $level_29086_config.CarState.GoingRoad;
          return void this.mgr.changeCar(this.node, 2);
        }

        if (this.node.x >= this.mgr.boundary / 2 + this.node.width / 2) {
          this.carState = $level_29086_config.CarState.GoingRoad;
          return void this.mgr.changeCar(this.node, 2);
        }

        if (this.node.y <= -620 && this.node.x > 0) {
          this.carState = $level_29086_config.CarState.OnBottomRight;
          return void this.mgr.changeCar(this.node, 1, 1, "01" + this.lenImgName + "-1");
        }

        if (this.node.y <= -620 && this.node.x < 0) {
          this.carState = $level_29086_config.CarState.OnBottomLeft;
          return void this.mgr.changeCar(this.node, 1, 2, "01" + this.lenImgName + "-0");
        }

        if (this.leftObliqueCar && this.node.x >= -189.008) {
          this.carState = $level_29086_config.CarState.GoingRoad;
          this.mgr.changeCar(this.node, 2);
        } else {
          if (this.rightObliqueCar && this.node.x <= 189.008) {
            this.carState = $level_29086_config.CarState.GoingRoad, this.mgr.changeCar(this.node, 2);
          } else {
            if ((this.isUTransportCar || this.isUTransportCar_noIn) && (-90 == Math.round(this.node.angle) || -52 == Math.round(this.node.angle) || -128 == Math.round(this.node.angle)) && this.node.x >= 0) {
              this.carState = $level_29086_config.CarState.GoingRoad, this.node.x = 0, this.mgr.changeCar(this.node, 2), this.isUTransportCar && this.mgr.dict.carRoot.getComponent($level_249667_uTransport["default"]).reduceUpdate();
            } else {
              (this.isUTransportCar || this.isUTransportCar_noIn) && (90 == Math.round(this.node.angle) || 52 == Math.round(this.node.angle) || 128 == Math.round(this.node.angle)) && this.node.x <= 0 && (this.carState = $level_29086_config.CarState.GoingRoad, this.node.x = 0, this.mgr.changeCar(this.node, 2), this.isUTransportCar && this.mgr.dict.carRoot.getComponent($level_249667_uTransport["default"]).reduceUpdate());
            }
          }
        }

        if (this.isTramcar && this.railCarTurn[this.tramcarPosIndex]) {
          var u = this.railCarTurn[this.tramcarPosIndex].name.split("-");
          var g = u[0];
          var m = u[1];

          if ("0" == g) {
            if (this.getWPosByNode(this.node).x <= this.getWPosByNode(this.railCarTurn[this.tramcarPosIndex]).x) {
              this.railCarTurnChange(m);
            }
          } else {
            if ("1" == g) {
              this.getWPosByNode(this.node).x >= this.getWPosByNode(this.railCarTurn[this.tramcarPosIndex]).x && this.railCarTurnChange(m);
            } else {
              "2" == g || "3" == g && this.getWPosByNode(this.node).y <= this.getWPosByNode(this.railCarTurn[this.tramcarPosIndex]).y && this.railCarTurnChange(m);
            }
          }
        }
      }

      if (this.carState == $level_29086_config.CarState.OnBottomLeft && this.node.x <= -(this.mgr.boundary / 2 + this.node.width / 2)) {
        this.carState = $level_29086_config.CarState.GoingRoad;
        return void this.mgr.changeCar(this.node, 2);
      }

      if (this.carState == $level_29086_config.CarState.OnBottomRight && this.node.x >= this.mgr.boundary / 2 + this.node.width / 2) {
        this.carState = $level_29086_config.CarState.GoingRoad;
        return void this.mgr.changeCar(this.node, 2);
      }

      if (this.carState == $level_29086_config.CarState.OutParking && this.node.x >= cc.winSize.width / 2 + 6 * this.node.width) {
        this.mgr.checkRes();
        this.node.destroy();
      }

      if (this.carState == $level_29086_config.CarState.WaterSprayLeave && this.node.x <= -(cc.winSize.width / 2 + this.node.height)) {
        console.log("销毁消防车");
        this.node.destroy();
      }
    }
  };

  e.prototype.railCarTurnChange = function (t) {
    this.carState = $level_29086_config.CarState.Normal;

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
    this.carState = $level_29086_config.CarState.Idle;

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
      n.getComponent(o).carState = $level_29086_config.CarState.Idle;
      this.mgr.moveCarAmount -= 1;
      cc.tween(n).to(0.15, {
        position: n.getComponent(o).oldPos
      }).call(function () {
        n.getComponent(o).isCanClick = !0;
      }).start();
    }

    if (h && (h.getChildByName("chain") && 1 == h.getChildByName("chain").getComponent($level_249667_chain["default"]).linkType || this.node.getChildByName("chain") && 1 == this.node.getChildByName("chain").getComponent($level_249667_chain["default"]).linkType)) {
      h.getComponent(o).carState = $level_29086_config.CarState.Idle;
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
    this.carState = $level_29086_config.CarState.Idle;

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
      i.getComponent(o).carState = $level_29086_config.CarState.Idle;
      cc.tween(i).to(0.15, {
        position: i.getComponent(o).oldPos
      }).call(function () {
        i.getComponent(o).isCanClick = !0;
      }).start();
    }

    if (r && (r.getChildByName("chain") && 1 == r.getChildByName("chain").getComponent($level_249667_chain["default"]).linkType || this.node.getChildByName("chain") && 1 == this.node.getChildByName("chain").getComponent($level_249667_chain["default"]).linkType)) {
      r.getComponent(o).carState = $level_29086_config.CarState.Idle;
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2NyaXB0cy9MZXZlbC0yOTA4Nl9ib3hDYXJJdGVtLmpzIl0sIm5hbWVzIjpbImkiLCIkYXVkaW9NYW5hZ2VyIiwicmVxdWlyZSIsIiRsZXZlbF8yNDk2NjdfY2hhaW4iLCIkbGV2ZWxfMjQ5NjY3X3VUcmFuc3BvcnQiLCIkbGV2ZWxfMjkwODZfY29uZmlnIiwiaCIsImNjIiwiX2RlY29yYXRvciIsInAiLCJjY2NsYXNzIiwiZCIsInByb3BlcnR5IiwidSIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJzZWF0VG90YWxBbW91bnQiLCJyYWlsQ2FyVHVybiIsImNhckNvbG9yIiwiY2FySUQiLCJwYXRoIiwiZW1wdHlTZWF0QW1vdW50IiwiZGlyIiwiY29sb3JJbWdOYW1lIiwiZGlySW1nTmFtZSIsImxlbkltZ05hbWUiLCJtZ3IiLCJpc1RyYW5zcG9ydENhciIsImlzQmxhY2tDYXIiLCJpc1R1cm50YWJsZUNhciIsInR1cm50YWJsZVBvc0luZGV4IiwicHJldkNhciIsIm5leHRDYXIiLCJsZWZ0T2JsaXF1ZUNhciIsInJpZ2h0T2JsaXF1ZUNhciIsImlzVVRyYW5zcG9ydENhciIsImlzVVRyYW5zcG9ydENhcl9ub0luIiwiaXNGaXJlRW5naW5lIiwiaXNQb2xpY2VDYXIiLCJpc1JpY2hDYXIiLCJpc1RyYW1jYXIiLCJ0cmFtY2FyUG9zSW5kZXgiLCJvdGhlckNhck5vZGUiLCJtaW5MZW4iLCJvbGRQb3MiLCJmbG9hdFBvcyIsImNhclN0YXRlIiwiQ2FyU3RhdGUiLCJJZGxlIiwic3BlZWQiLCJpc0NhbkNsaWNrIiwiaXNDb2xsaXNpb24iLCJpc1JlYWR5RGVzdHJveSIsIm8iLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJub2RlIiwicG9zaXRpb24iLCJuYW1lIiwidXBkYXRlIiwiTm9ybWFsIiwiZ2V0V1Bvc0J5Tm9kZSIsIk1hdGgiLCJyb3VuZCIsImFicyIsImFuZ2xlIiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwidjIiLCJ3aWR0aCIsInIiLCJsZW5ndGgiLCJuIiwiZ2V0Q29tcG9uZW50IiwiYSIsImhlaWdodCIsInMiLCJJbnRlcnNlY3Rpb24iLCJwb2ludExpbmVEaXN0YW5jZSIsImNoZWNrVG91Y2giLCJmIiwiY29uc29sZSIsImxvZyIsImRpY3QiLCJyb2FkIiwicGFyZW50IiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJ5IiwiY2FyUm9vdCIsImNhckFyciIsImluZGV4T2YiLCJyZWR1Y2VVcGRhdGUiLCJpc1RyYW5zcG9ydENhck1vdmUiLCJjb2xsaXNpb24iLCJ4IiwiYm91bmRhcnkiLCJHb2luZ1JvYWQiLCJjaGFuZ2VDYXIiLCJPbkJvdHRvbVJpZ2h0IiwiT25Cb3R0b21MZWZ0Iiwic3BsaXQiLCJnIiwibSIsInJhaWxDYXJUdXJuQ2hhbmdlIiwiT3V0UGFya2luZyIsIndpblNpemUiLCJjaGVja1JlcyIsImRlc3Ryb3kiLCJXYXRlclNwcmF5TGVhdmUiLCJBdWRpbyIsImdldEVmZmVjdE11dGUiLCJwbGF5UmVtb3RlU291bmQiLCJoaXQiLCJpc0NhclBhcmsiLCJpc1dlbiIsInN0b3BBbGxBY3Rpb25zIiwicnVuQWN0aW9uIiwic2hhY2tBY3Rpb24iLCJtb3ZlQ2FyQW1vdW50IiwidHdlZW4iLCJ0byIsImNhbGwiLCJzdGFydCIsImdldENoaWxkQnlOYW1lIiwibGlua1R5cGUiLCJ1bmlvbiIsInJlcGVhdEZvcmV2ZXIiLCJjYXJCYWNrIiwibW92ZUJ5IiwiYyIsImwiLCJzZXF1ZW5jZSIsIl9fZGVjb3JhdGUiLCJOb2RlIiwiQ29tcG9uZW50IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLGFBQWEsR0FBR0MsT0FBTyxDQUFDLDRCQUFELENBQTNCOztBQUNBLElBQUlDLG1CQUFtQixHQUFHRCxPQUFPLENBQUMsc0JBQUQsQ0FBakM7O0FBQ0EsSUFBSUUsd0JBQXdCLEdBQUdGLE9BQU8sQ0FBQywyQkFBRCxDQUF0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QUQsQ0FBRixDQUFELEVBQWlCeEgsQ0FBQyxDQUFDMEMsU0FBbkIsRUFBOEIsYUFBOUIsRUFBNkMsS0FBSyxDQUFsRCxDQUFWOztFQUNBLE9BQVFGLENBQUMsR0FBRytFLFVBQVUsQ0FBQyxDQUFDN0gsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBdEI7QUFDSCxDQXBjTyxDQW9jTFIsRUFBRSxDQUFDaUksU0FwY0UsQ0FBUjs7QUFxY0FDLE9BQU8sV0FBUCxHQUFrQjVILENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciAkYXVkaW9NYW5hZ2VyID0gcmVxdWlyZShcIi4uLy4uL3NjcmlwdHMvQXVkaW9NYW5hZ2VyXCIpO1xudmFyICRsZXZlbF8yNDk2NjdfY2hhaW4gPSByZXF1aXJlKFwiLi9MZXZlbC0yNDk2NjdfY2hhaW5cIik7XG52YXIgJGxldmVsXzI0OTY2N191VHJhbnNwb3J0ID0gcmVxdWlyZShcIi4vTGV2ZWwtMjQ5NjY3X3VUcmFuc3BvcnRcIik7XG52YXIgJGxldmVsXzI5MDg2X2NvbmZpZyA9IHJlcXVpcmUoXCIuL0xldmVsLTI5MDg2X2NvbmZpZ1wiKTtcbnZhciBoID0gY2MuX2RlY29yYXRvcjtcbnZhciBwID0gaC5jY2NsYXNzO1xudmFyIGQgPSBoLnByb3BlcnR5O1xudmFyIHUgPSAoZnVuY3Rpb24gKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgZS5zZWF0VG90YWxBbW91bnQgPSA0O1xuICAgICAgICBlLnJhaWxDYXJUdXJuID0gW107XG4gICAgICAgIGUuY2FyQ29sb3IgPSBudWxsO1xuICAgICAgICBlLmNhcklEID0gbnVsbDtcbiAgICAgICAgZS5wYXRoID0gMDtcbiAgICAgICAgZS5lbXB0eVNlYXRBbW91bnQgPSAwO1xuICAgICAgICBlLmRpciA9IDA7XG4gICAgICAgIGUuY29sb3JJbWdOYW1lID0gbnVsbDtcbiAgICAgICAgZS5kaXJJbWdOYW1lID0gbnVsbDtcbiAgICAgICAgZS5sZW5JbWdOYW1lID0gbnVsbDtcbiAgICAgICAgZS5tZ3IgPSBudWxsO1xuICAgICAgICBlLmlzVHJhbnNwb3J0Q2FyID0gITE7XG4gICAgICAgIGUuaXNCbGFja0NhciA9ICExO1xuICAgICAgICBlLmlzVHVybnRhYmxlQ2FyID0gITE7XG4gICAgICAgIGUudHVybnRhYmxlUG9zSW5kZXggPSAtMTtcbiAgICAgICAgZS5wcmV2Q2FyID0gbnVsbDtcbiAgICAgICAgZS5uZXh0Q2FyID0gbnVsbDtcbiAgICAgICAgZS5sZWZ0T2JsaXF1ZUNhciA9ICExO1xuICAgICAgICBlLnJpZ2h0T2JsaXF1ZUNhciA9ICExO1xuICAgICAgICBlLmlzVVRyYW5zcG9ydENhciA9ICExO1xuICAgICAgICBlLmlzVVRyYW5zcG9ydENhcl9ub0luID0gITE7XG4gICAgICAgIGUuaXNGaXJlRW5naW5lID0gITE7XG4gICAgICAgIGUuaXNQb2xpY2VDYXIgPSAhMTtcbiAgICAgICAgZS5pc1JpY2hDYXIgPSAhMTtcbiAgICAgICAgZS5pc1RyYW1jYXIgPSAhMTtcbiAgICAgICAgZS50cmFtY2FyUG9zSW5kZXggPSAwO1xuICAgICAgICBlLm90aGVyQ2FyTm9kZSA9IFtdO1xuICAgICAgICBlLm1pbkxlbiA9IDEwO1xuICAgICAgICBlLm9sZFBvcyA9IG51bGw7XG4gICAgICAgIGUuZmxvYXRQb3MgPSBudWxsO1xuICAgICAgICBlLmNhclN0YXRlID0gJGxldmVsXzI5MDg2X2NvbmZpZy5DYXJTdGF0ZS5JZGxlO1xuICAgICAgICBlLnNwZWVkID0gNzUwO1xuICAgICAgICBlLmlzQ2FuQ2xpY2sgPSAhMDtcbiAgICAgICAgZS5pc0NvbGxpc2lvbiA9ICExO1xuICAgICAgICBlLmlzUmVhZHlEZXN0cm95ID0gITE7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICB2YXIgbztcbiAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgbyA9IGU7XG4gICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVtcHR5U2VhdEFtb3VudCA9IHRoaXMuc2VhdFRvdGFsQW1vdW50O1xuICAgICAgICB0aGlzLm9sZFBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcbiAgICAgICAgaWYgKFwiMVwiID09IHRoaXMubm9kZS5uYW1lWzBdICYmIFwiMlwiID09IHRoaXMubm9kZS5uYW1lWzFdKSB7XG4gICAgICAgICAgICB0aGlzLmlzRmlyZUVuZ2luZSA9ICEwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcIjFcIiA9PSB0aGlzLm5vZGUubmFtZVswXSAmJiBcIjBcIiA9PSB0aGlzLm5vZGUubmFtZVsxXSkge1xuICAgICAgICAgICAgdGhpcy5pc1BvbGljZUNhciA9ICEwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcIjFcIiA9PSB0aGlzLm5vZGUubmFtZVswXSAmJiBcIjFcIiA9PSB0aGlzLm5vZGUubmFtZVsxXSkge1xuICAgICAgICAgICAgdGhpcy5pc1JpY2hDYXIgPSAhMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXCIxXCIgPT0gdGhpcy5ub2RlLm5hbWVbMF0gJiYgXCIzXCIgPT0gdGhpcy5ub2RlLm5hbWVbMV0pIHtcbiAgICAgICAgICAgIHRoaXMuaXNUcmFtY2FyID0gITA7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhZHlEZXN0cm95KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYXJTdGF0ZSA9PSAkbGV2ZWxfMjkwODZfY29uZmlnLkNhclN0YXRlLk5vcm1hbCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhdGggPiAxIHx8IHRoaXMuaXNUcmFtY2FyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDYW5DbGljayA9ICExO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuZ2V0V1Bvc0J5Tm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IE1hdGgucm91bmQoTWF0aC5hYnModGhpcy5ub2RlLmFuZ2xlKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoOTAgPT0gZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKC10aGlzLm5vZGUud2lkdGggLyAyLCAwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52Mih0aGlzLm5vZGUud2lkdGggLyAyLCAwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCB0aGlzLm90aGVyQ2FyTm9kZS5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLm90aGVyQ2FyTm9kZVtyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gJiYgbi5nZXRDb21wb25lbnQobykuY2FyU3RhdGUgPT0gJGxldmVsXzI5MDg2X2NvbmZpZy5DYXJTdGF0ZS5JZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgLW4uaGVpZ2h0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52Migtbi53aWR0aCAvIDIsIDApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKG4ud2lkdGggLyAyLCAwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52Migtbi53aWR0aCAvIDIsIC1uLmhlaWdodCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIobi53aWR0aCAvIDIsIC1uLmhlaWdodCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoOTAgPT0gZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuSW50ZXJzZWN0aW9uLnBvaW50TGluZURpc3RhbmNlKGlbMF0sIGFbMF0sIGFbMV0sICEwKSA8IHRoaXMubWluTGVuIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5wb2ludExpbmVEaXN0YW5jZShpWzBdLCBzWzBdLCBzWzFdLCAhMCkgPCB0aGlzLm1pbkxlbiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ucG9pbnRMaW5lRGlzdGFuY2UoaVswXSwgaFswXSwgaFsxXSwgITApIDwgdGhpcy5taW5MZW4gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuSW50ZXJzZWN0aW9uLnBvaW50TGluZURpc3RhbmNlKGlbMV0sIGFbMF0sIGFbMV0sICEwKSA8IHRoaXMubWluTGVuIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5wb2ludExpbmVEaXN0YW5jZShpWzFdLCBzWzBdLCBzWzFdLCAhMCkgPCB0aGlzLm1pbkxlbiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ucG9pbnRMaW5lRGlzdGFuY2UoaVsxXSwgaFswXSwgaFsxXSwgITApIDwgdGhpcy5taW5MZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1RvdWNoKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5wb2ludExpbmVEaXN0YW5jZSh0LCBhWzBdLCBhWzFdLCAhMCkgPCB0aGlzLm1pbkxlbiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5wb2ludExpbmVEaXN0YW5jZSh0LCBzWzBdLCBzWzFdLCAhMCkgPCB0aGlzLm1pbkxlbiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5wb2ludExpbmVEaXN0YW5jZSh0LCBoWzBdLCBoWzFdLCAhMCkgPCB0aGlzLm1pbkxlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1RvdWNoKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwID0gdGhpcy5tZ3IuZGljdC5yb2FkLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5tZ3IuZGljdC5yb2FkLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB2YXIgZCA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS55ID49IGQueSAtIDIgKiB0aGlzLm1pbkxlbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuajgOa1i+eisOWIsOWFrOi3r1wiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNVVHJhbnNwb3J0Q2FyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEgIT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHIgPSB0aGlzLm1nci5kaWN0LmNhclJvb3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3VUcmFuc3BvcnQuZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhckFyci5pbmRleE9mKHRoaXMubm9kZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1nci5kaWN0LmNhclJvb3QuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfdVRyYW5zcG9ydC5kZWZhdWx0KS5jYXJBcnJbcl0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWdyLmRpY3QuY2FyUm9vdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N191VHJhbnNwb3J0LmRlZmF1bHQpLnJlZHVjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZ3IuZGljdC5jYXJSb290LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3VUcmFuc3BvcnQuZGVmYXVsdCkuaXNUcmFuc3BvcnRDYXJNb3ZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgKHRoaXMuaXNDb2xsaXNpb24gfHwgKCh0aGlzLmlzQ29sbGlzaW9uID0gITApLCB0aGlzLm1nci5jb2xsaXNpb24odGhpcy5ub2RlKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLnggPD0gLSh0aGlzLm1nci5ib3VuZGFyeSAvIDIgKyB0aGlzLm5vZGUud2lkdGggLyAyKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhclN0YXRlID0gJGxldmVsXzI5MDg2X2NvbmZpZy5DYXJTdGF0ZS5Hb2luZ1JvYWQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMubWdyLmNoYW5nZUNhcih0aGlzLm5vZGUsIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLnggPj0gdGhpcy5tZ3IuYm91bmRhcnkgLyAyICsgdGhpcy5ub2RlLndpZHRoIC8gMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhclN0YXRlID0gJGxldmVsXzI5MDg2X2NvbmZpZy5DYXJTdGF0ZS5Hb2luZ1JvYWQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMubWdyLmNoYW5nZUNhcih0aGlzLm5vZGUsIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLnkgPD0gLTYyMCAmJiB0aGlzLm5vZGUueCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJTdGF0ZSA9ICRsZXZlbF8yOTA4Nl9jb25maWcuQ2FyU3RhdGUuT25Cb3R0b21SaWdodDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgdGhpcy5tZ3IuY2hhbmdlQ2FyKHRoaXMubm9kZSwgMSwgMSwgXCIwMVwiICsgdGhpcy5sZW5JbWdOYW1lICsgXCItMVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS55IDw9IC02MjAgJiYgdGhpcy5ub2RlLnggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyU3RhdGUgPSAkbGV2ZWxfMjkwODZfY29uZmlnLkNhclN0YXRlLk9uQm90dG9tTGVmdDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgdGhpcy5tZ3IuY2hhbmdlQ2FyKHRoaXMubm9kZSwgMSwgMiwgXCIwMVwiICsgdGhpcy5sZW5JbWdOYW1lICsgXCItMFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdE9ibGlxdWVDYXIgJiYgdGhpcy5ub2RlLnggPj0gLTE4OS4wMDgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJTdGF0ZSA9ICRsZXZlbF8yOTA4Nl9jb25maWcuQ2FyU3RhdGUuR29pbmdSb2FkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1nci5jaGFuZ2VDYXIodGhpcy5ub2RlLCAyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yaWdodE9ibGlxdWVDYXIgJiYgdGhpcy5ub2RlLnggPD0gMTg5LjAwOCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuY2FyU3RhdGUgPSAkbGV2ZWxfMjkwODZfY29uZmlnLkNhclN0YXRlLkdvaW5nUm9hZCksIHRoaXMubWdyLmNoYW5nZUNhcih0aGlzLm5vZGUsIDIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmlzVVRyYW5zcG9ydENhciB8fCB0aGlzLmlzVVRyYW5zcG9ydENhcl9ub0luKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgtOTAgPT0gTWF0aC5yb3VuZCh0aGlzLm5vZGUuYW5nbGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC01MiA9PSBNYXRoLnJvdW5kKHRoaXMubm9kZS5hbmdsZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEyOCA9PSBNYXRoLnJvdW5kKHRoaXMubm9kZS5hbmdsZSkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPj0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuY2FyU3RhdGUgPSAkbGV2ZWxfMjkwODZfY29uZmlnLkNhclN0YXRlLkdvaW5nUm9hZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLm5vZGUueCA9IDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1nci5jaGFuZ2VDYXIodGhpcy5ub2RlLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1VUcmFuc3BvcnRDYXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWdyLmRpY3QuY2FyUm9vdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N191VHJhbnNwb3J0LmRlZmF1bHQpLnJlZHVjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5pc1VUcmFuc3BvcnRDYXIgfHwgdGhpcy5pc1VUcmFuc3BvcnRDYXJfbm9JbikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDkwID09IE1hdGgucm91bmQodGhpcy5ub2RlLmFuZ2xlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTIgPT0gTWF0aC5yb3VuZCh0aGlzLm5vZGUuYW5nbGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMjggPT0gTWF0aC5yb3VuZCh0aGlzLm5vZGUuYW5nbGUpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCA8PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgodGhpcy5jYXJTdGF0ZSA9ICRsZXZlbF8yOTA4Nl9jb25maWcuQ2FyU3RhdGUuR29pbmdSb2FkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMubm9kZS54ID0gMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWdyLmNoYW5nZUNhcih0aGlzLm5vZGUsIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVVRyYW5zcG9ydENhciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZ3IuZGljdC5jYXJSb290XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3VUcmFuc3BvcnQuZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlVXBkYXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVHJhbWNhciAmJiB0aGlzLnJhaWxDYXJUdXJuW3RoaXMudHJhbWNhclBvc0luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IHRoaXMucmFpbENhclR1cm5bdGhpcy50cmFtY2FyUG9zSW5kZXhdLm5hbWUuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZyA9IHVbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBtID0gdVsxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiMFwiID09IGcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFdQb3NCeU5vZGUodGhpcy5ub2RlKS54IDw9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRXUG9zQnlOb2RlKHRoaXMucmFpbENhclR1cm5bdGhpcy50cmFtY2FyUG9zSW5kZXhdKS54XG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJhaWxDYXJUdXJuQ2hhbmdlKG0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiMVwiID09IGcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFdQb3NCeU5vZGUodGhpcy5ub2RlKS54ID49XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0V1Bvc0J5Tm9kZSh0aGlzLnJhaWxDYXJUdXJuW3RoaXMudHJhbWNhclBvc0luZGV4XSkueCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJhaWxDYXJUdXJuQ2hhbmdlKG0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjJcIiA9PSBnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcIjNcIiA9PSBnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFdQb3NCeU5vZGUodGhpcy5ub2RlKS55IDw9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRXUG9zQnlOb2RlKHRoaXMucmFpbENhclR1cm5bdGhpcy50cmFtY2FyUG9zSW5kZXhdKS55ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJhaWxDYXJUdXJuQ2hhbmdlKG0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmNhclN0YXRlID09ICRsZXZlbF8yOTA4Nl9jb25maWcuQ2FyU3RhdGUuT25Cb3R0b21MZWZ0ICYmXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPD0gLSh0aGlzLm1nci5ib3VuZGFyeSAvIDIgKyB0aGlzLm5vZGUud2lkdGggLyAyKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJTdGF0ZSA9ICRsZXZlbF8yOTA4Nl9jb25maWcuQ2FyU3RhdGUuR29pbmdSb2FkO1xuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMubWdyLmNoYW5nZUNhcih0aGlzLm5vZGUsIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuY2FyU3RhdGUgPT0gJGxldmVsXzI5MDg2X2NvbmZpZy5DYXJTdGF0ZS5PbkJvdHRvbVJpZ2h0ICYmXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPj0gdGhpcy5tZ3IuYm91bmRhcnkgLyAyICsgdGhpcy5ub2RlLndpZHRoIC8gMlxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJTdGF0ZSA9ICRsZXZlbF8yOTA4Nl9jb25maWcuQ2FyU3RhdGUuR29pbmdSb2FkO1xuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMubWdyLmNoYW5nZUNhcih0aGlzLm5vZGUsIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuY2FyU3RhdGUgPT0gJGxldmVsXzI5MDg2X2NvbmZpZy5DYXJTdGF0ZS5PdXRQYXJraW5nICYmXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPj0gY2Mud2luU2l6ZS53aWR0aCAvIDIgKyA2ICogdGhpcy5ub2RlLndpZHRoXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1nci5jaGVja1JlcygpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJTdGF0ZSA9PSAkbGV2ZWxfMjkwODZfY29uZmlnLkNhclN0YXRlLldhdGVyU3ByYXlMZWF2ZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54IDw9IC0oY2Mud2luU2l6ZS53aWR0aCAvIDIgKyB0aGlzLm5vZGUuaGVpZ2h0KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLplIDmr4HmtojpmLLovaZcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmFpbENhclR1cm5DaGFuZ2UgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0aGlzLmNhclN0YXRlID0gJGxldmVsXzI5MDg2X2NvbmZpZy5DYXJTdGF0ZS5Ob3JtYWw7XG4gICAgICAgIGlmIChcInVwXCIgPT0gdCkge1xuICAgICAgICAgICAgdGhpcy50cmFtY2FyUG9zSW5kZXggKz0gMTtcbiAgICAgICAgICAgIHRoaXMubWdyLmNoYW5nZUNhcih0aGlzLm5vZGUsIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKFwibGVmdFVwXCIgPT0gdCkge1xuICAgICAgICAgICAgICAgICh0aGlzLnRyYW1jYXJQb3NJbmRleCArPSAxKSwgdGhpcy5tZ3IuY2hhbmdlQ2FyKHRoaXMubm9kZSwgNCwgMik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChcImxlZnREb3duXCIgPT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAodGhpcy50cmFtY2FyUG9zSW5kZXggKz0gMSksIHRoaXMubWdyLmNoYW5nZUNhcih0aGlzLm5vZGUsIDUsIDIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcInJpZ2h0XCIgPT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMudHJhbWNhclBvc0luZGV4ICs9IDEpLCB0aGlzLm1nci5jaGFuZ2VDYXIodGhpcy5ub2RlLCAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiID09IHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICgodGhpcy50cmFtY2FyUG9zSW5kZXggKz0gMSksIHRoaXMubWdyLmNoYW5nZUNhcih0aGlzLm5vZGUsIDEsIDIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyaWdodFVwXCIgPT0gdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKCh0aGlzLnRyYW1jYXJQb3NJbmRleCArPSAxKSwgdGhpcy5tZ3IuY2hhbmdlQ2FyKHRoaXMubm9kZSwgNCwgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJpZ2h0RG93blwiID09IHQgJiYgKCh0aGlzLnRyYW1jYXJQb3NJbmRleCArPSAxKSwgdGhpcy5tZ3IuY2hhbmdlQ2FyKHRoaXMubm9kZSwgNSwgMSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja1RvdWNoID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBpZiAoJGF1ZGlvTWFuYWdlci5BdWRpby5nZXRFZmZlY3RNdXRlKCkpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1nci5wbGF5UmVtb3RlU291bmQoXCJhdWRpby9mMjczMTIvZjI3MzEyX0NyYXNoXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWdyLmhpdCh0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLmNhclN0YXRlID0gJGxldmVsXzI5MDg2X2NvbmZpZy5DYXJTdGF0ZS5JZGxlO1xuICAgICAgICBpZiAodGhpcy5ub2RlLmlzQ2FyUGFyaykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmlzV2VuID0gITA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHQucnVuQWN0aW9uKHRoaXMuc2hhY2tBY3Rpb24oMC4xLCAyKSk7XG4gICAgICAgIHRoaXMubWdyLm1vdmVDYXJBbW91bnQgLT0gMTtcbiAgICAgICAgaWYgKHRoaXMuaXNUcmFtY2FyKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgLTMwKSk7XG4gICAgICAgICAgICB2YXIgciA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoaSk7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAgICAgLnRvKDAuMTUsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5pc0NhbkNsaWNrID0gITA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgICAgICAudG8oMC4xNSwge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5vbGRQb3NcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5pc0NhbkNsaWNrID0gITA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmlzVHJhbnNwb3J0Q2FyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLm1nci5pc1RyYW5zcG9ydENhck1vdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5pc1VUcmFuc3BvcnRDYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUubWdyLmRpY3QuY2FyUm9vdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N191VHJhbnNwb3J0LmRlZmF1bHQpLmlzVHJhbnNwb3J0Q2FyTW92ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGUuZmxvYXQoZS5ub2RlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuID0gdGhpcy5uZXh0Q2FyO1xuICAgICAgICB2YXIgaCA9IHRoaXMucHJldkNhcjtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbiAmJlxuICAgICAgICAgICAgKCh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFpblwiKSAmJlxuICAgICAgICAgICAgICAgIDAgPT0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY2hhaW5cIikuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2hhaW4uZGVmYXVsdCkubGlua1R5cGUpIHx8XG4gICAgICAgICAgICAgICAgKG4uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFpblwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAwID09IG4uZ2V0Q2hpbGRCeU5hbWUoXCJjaGFpblwiKS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jaGFpbi5kZWZhdWx0KS5saW5rVHlwZSkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgbi5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgbi5nZXRDb21wb25lbnQobykuY2FyU3RhdGUgPSAkbGV2ZWxfMjkwODZfY29uZmlnLkNhclN0YXRlLklkbGU7XG4gICAgICAgICAgICB0aGlzLm1nci5tb3ZlQ2FyQW1vdW50IC09IDE7XG4gICAgICAgICAgICBjYy50d2VlbihuKVxuICAgICAgICAgICAgICAgIC50bygwLjE1LCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuLmdldENvbXBvbmVudChvKS5vbGRQb3NcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbi5nZXRDb21wb25lbnQobykuaXNDYW5DbGljayA9ICEwO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgaCAmJlxuICAgICAgICAgICAgKChoLmdldENoaWxkQnlOYW1lKFwiY2hhaW5cIikgJiZcbiAgICAgICAgICAgICAgICAxID09IGguZ2V0Q2hpbGRCeU5hbWUoXCJjaGFpblwiKS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jaGFpbi5kZWZhdWx0KS5saW5rVHlwZSkgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY2hhaW5cIikgJiZcbiAgICAgICAgICAgICAgICAgICAgMSA9PSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFpblwiKS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jaGFpbi5kZWZhdWx0KS5saW5rVHlwZSkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgaC5nZXRDb21wb25lbnQobykuY2FyU3RhdGUgPSAkbGV2ZWxfMjkwODZfY29uZmlnLkNhclN0YXRlLklkbGU7XG4gICAgICAgICAgICBoLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICB0aGlzLm1nci5tb3ZlQ2FyQW1vdW50IC09IDE7XG4gICAgICAgICAgICBjYy50d2VlbihoKVxuICAgICAgICAgICAgICAgIC50bygwLjE1LCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBoLmdldENvbXBvbmVudChvKS5vbGRQb3NcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaC5nZXRDb21wb25lbnQobykuaXNDYW5DbGljayA9ICEwO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZsb2F0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHQuZ2V0Q29tcG9uZW50KG8pLmZsb2F0UG9zKSB7XG4gICAgICAgICAgICBjYy50d2Vlbih0KVxuICAgICAgICAgICAgICAgIC50bygwLjYsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHQuZ2V0Q29tcG9uZW50KG8pLmZsb2F0UG9zXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMC42LCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0LmdldENvbXBvbmVudChvKS5vbGRQb3NcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC51bmlvbigpXG4gICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jYXJCYWNrID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBpZiAoJGF1ZGlvTWFuYWdlci5BdWRpby5nZXRFZmZlY3RNdXRlKCkpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1nci5wbGF5UmVtb3RlU291bmQoXCJhdWRpby9mMjczMTIvZjI3MzEyX0NyYXNoXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWdyLmhpdCh0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLmNhclN0YXRlID0gJGxldmVsXzI5MDg2X2NvbmZpZy5DYXJTdGF0ZS5JZGxlO1xuICAgICAgICBpZiAodGhpcy5ub2RlLmlzQ2FyUGFyaykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmlzV2VuID0gITA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHQucnVuQWN0aW9uKHRoaXMuc2hhY2tBY3Rpb24oMC4xLCAyKSk7XG4gICAgICAgIHRoaXMubWdyLm1vdmVDYXJBbW91bnQgLT0gMTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuMTUsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5vbGRQb3NcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZS5pc0NhbkNsaWNrID0gITA7XG4gICAgICAgICAgICAgICAgaWYgKGUuaXNUcmFuc3BvcnRDYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5tZ3IuaXNUcmFuc3BvcnRDYXJNb3ZlID0gITA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlLmlzVVRyYW5zcG9ydENhcikge1xuICAgICAgICAgICAgICAgICAgICBlLm1nci5kaWN0LmNhclJvb3QuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfdVRyYW5zcG9ydC5kZWZhdWx0KS5pc1RyYW5zcG9ydENhck1vdmUgPSAhMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIHZhciBpID0gdGhpcy5uZXh0Q2FyO1xuICAgICAgICB2YXIgciA9IHRoaXMucHJldkNhcjtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgaSAmJlxuICAgICAgICAgICAgKCh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFpblwiKSAmJlxuICAgICAgICAgICAgICAgIDAgPT0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY2hhaW5cIikuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2hhaW4uZGVmYXVsdCkubGlua1R5cGUpIHx8XG4gICAgICAgICAgICAgICAgKGkuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFpblwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAwID09IGkuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFpblwiKS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jaGFpbi5kZWZhdWx0KS5saW5rVHlwZSkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgaS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgaS5nZXRDb21wb25lbnQobykuY2FyU3RhdGUgPSAkbGV2ZWxfMjkwODZfY29uZmlnLkNhclN0YXRlLklkbGU7XG4gICAgICAgICAgICBjYy50d2VlbihpKVxuICAgICAgICAgICAgICAgIC50bygwLjE1LCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBpLmdldENvbXBvbmVudChvKS5vbGRQb3NcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaS5nZXRDb21wb25lbnQobykuaXNDYW5DbGljayA9ICEwO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgciAmJlxuICAgICAgICAgICAgKChyLmdldENoaWxkQnlOYW1lKFwiY2hhaW5cIikgJiZcbiAgICAgICAgICAgICAgICAxID09IHIuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFpblwiKS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jaGFpbi5kZWZhdWx0KS5saW5rVHlwZSkgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY2hhaW5cIikgJiZcbiAgICAgICAgICAgICAgICAgICAgMSA9PSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFpblwiKS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jaGFpbi5kZWZhdWx0KS5saW5rVHlwZSkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgci5nZXRDb21wb25lbnQobykuY2FyU3RhdGUgPSAkbGV2ZWxfMjkwODZfY29uZmlnLkNhclN0YXRlLklkbGU7XG4gICAgICAgICAgICByLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBjYy50d2VlbihyKVxuICAgICAgICAgICAgICAgIC50bygwLjE1LCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByLmdldENvbXBvbmVudChvKS5vbGRQb3NcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQobykuaXNDYW5DbGljayA9ICEwO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNoYWNrQWN0aW9uID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSBjYy5tb3ZlQnkodCwgZSwgZSk7XG4gICAgICAgIHZhciBpID0gY2MubW92ZUJ5KHQsIC1lLCAtZSk7XG4gICAgICAgIHZhciByID0gY2MubW92ZUJ5KDAuOCAqIHQsIDAuOCAqIGUsIDAuOCAqIGUpO1xuICAgICAgICB2YXIgbiA9IGNjLm1vdmVCeSgwLjggKiB0LCAwLjggKiAtZSwgMC44ICogLWUpO1xuICAgICAgICB2YXIgYSA9IGNjLm1vdmVCeSgwLjYgKiB0LCAwLjYgKiBlLCAwLjYgKiBlKTtcbiAgICAgICAgdmFyIHMgPSBjYy5tb3ZlQnkoMC42ICogdCwgMC42ICogLWUsIDAuNiAqIC1lKTtcbiAgICAgICAgdmFyIGMgPSBjYy5tb3ZlQnkoMC40ICogdCwgMC40ICogZSwgMC40ICogZSk7XG4gICAgICAgIHZhciBsID0gY2MubW92ZUJ5KDAuNCAqIHQsIDAuNCAqIC1lLCAwLjQgKiAtZSk7XG4gICAgICAgIHZhciBoID0gY2MubW92ZUJ5KDAuMiAqIHQsIDAuMiAqIGUsIDAuMiAqIGUpO1xuICAgICAgICB2YXIgcCA9IGNjLm1vdmVCeSgwLjIgKiB0LCAwLjIgKiAtZSwgMC4yICogLWUpO1xuICAgICAgICByZXR1cm4gY2Muc2VxdWVuY2UobywgaSwgciwgbiwgYSwgcywgYywgbCwgaCwgcCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRXUG9zQnlOb2RlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0LnBvc2l0aW9uKTtcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW2RdLCBlLnByb3RvdHlwZSwgXCJzZWF0VG90YWxBbW91bnRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtkKFtjYy5Ob2RlXSldLCBlLnByb3RvdHlwZSwgXCJyYWlsQ2FyVHVyblwiLCB2b2lkIDApO1xuICAgIHJldHVybiAobyA9IF9fZGVjb3JhdGUoW3BdLCBlKSk7XG59KShjYy5Db21wb25lbnQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gdTtcbiJdfQ==