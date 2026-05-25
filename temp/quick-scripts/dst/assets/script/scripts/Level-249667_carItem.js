
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scripts/Level-249667_carItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '275aa06b15Bo41Bty//FBo3', 'Level-249667_carItem');
// script/scripts/Level-249667_carItem.js

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
    e.speed = 900;
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
          var e = Math.round(Math.abs(this.node.angle));
          var i = void 0;

          if (90 == e) {
            i = [this.node.convertToWorldSpaceAR(cc.v2(-this.node.width / 2, 0)), this.node.convertToWorldSpaceAR(cc.v2(this.node.width / 2, 0))];
          }

          for (var r = 0; r < this.otherCarNode.length; r++) {
            var n = this.otherCarNode[r];

            try {
              if (n && n.getComponent(o).carState == $level_249667_busConfig.CarState.Idle) {
                var a = [n.convertToWorldSpaceAR(cc.v2(0, 0)), n.convertToWorldSpaceAR(cc.v2(0, -n.height))];
                var c = [n.convertToWorldSpaceAR(cc.v2(-n.width / 2, 0)), n.convertToWorldSpaceAR(cc.v2(n.width / 2, 0))];
                var h = [n.convertToWorldSpaceAR(cc.v2(-n.width / 2, -n.height)), n.convertToWorldSpaceAR(cc.v2(n.width / 2, -n.height))];

                if (a[0]) {
                  if (90 == e) {
                    if (cc.Intersection.pointLineDistance(i[0], a[0], a[1], !0) < this.minLen || cc.Intersection.pointLineDistance(i[0], c[0], c[1], !0) < this.minLen || cc.Intersection.pointLineDistance(i[0], h[0], h[1], !0) < this.minLen || cc.Intersection.pointLineDistance(i[1], a[0], a[1], !0) < this.minLen || cc.Intersection.pointLineDistance(i[1], c[0], c[1], !0) < this.minLen || cc.Intersection.pointLineDistance(i[1], h[0], h[1], !0) < this.minLen) {
                      this.checkTouch(n);
                      break;
                    }
                  } else if (cc.Intersection.pointLineDistance(t, a[0], a[1], !0) < this.minLen || cc.Intersection.pointLineDistance(t, c[0], c[1], !0) < this.minLen || cc.Intersection.pointLineDistance(t, h[0], h[1], !0) < this.minLen) {
                    this.checkTouch(n);
                    break;
                  }
                }
              }
            } catch (f) {
              console.log(f);

              if (this.node) {
                this.node.destroy();
              }
            }
          }
        }

        var p = this.mgr.dict.road.parent.convertToWorldSpaceAR(this.mgr.dict.road.position);
        var d = this.node.parent.convertToNodeSpaceAR(p);

        if (this.node.y >= d.y - 2 * this.minLen) {
          console.log("检测碰到公路");

          if (this.isTransportCar) {
            if (-1 !== (r = this.mgr.transportCarArr.indexOf(this.node))) {
              this.mgr.transportCarArr.splice(r, 1);
            }

            this.mgr.isTransportCarMove = !0;
            this.mgr.updateTransportAmount();
          }

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
      this.mgr.playLevelSound("Crash");
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
      this.mgr.playLevelSound("Crash");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2NyaXB0cy9MZXZlbC0yNDk2NjdfY2FySXRlbS5qcyJdLCJuYW1lcyI6WyJpIiwiJGF1ZGlvTWFuYWdlciIsInJlcXVpcmUiLCIkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZyIsIiRsZXZlbF8yNDk2NjdfY2hhaW4iLCIkbGV2ZWxfMjQ5NjY3X3VUcmFuc3BvcnQiLCJoIiwiY2MiLCJfZGVjb3JhdG9yIiwicCIsImNjY2xhc3MiLCJkIiwicHJvcGVydHkiLCJ1IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsInNlYXRUb3RhbEFtb3VudCIsInJhaWxDYXJUdXJuIiwiY2FyQ29sb3IiLCJjYXJJRCIsInBhdGgiLCJlbXB0eVNlYXRBbW91bnQiLCJkaXIiLCJjb2xvckltZ05hbWUiLCJkaXJJbWdOYW1lIiwibGVuSW1nTmFtZSIsIm1nciIsImlzVHJhbnNwb3J0Q2FyIiwiaXNCbGFja0NhciIsImlzVHVybnRhYmxlQ2FyIiwidHVybnRhYmxlUG9zSW5kZXgiLCJwcmV2Q2FyIiwibmV4dENhciIsImxlZnRPYmxpcXVlQ2FyIiwicmlnaHRPYmxpcXVlQ2FyIiwiaXNVVHJhbnNwb3J0Q2FyIiwiaXNVVHJhbnNwb3J0Q2FyX25vSW4iLCJpc0ZpcmVFbmdpbmUiLCJpc1BvbGljZUNhciIsImlzUmljaENhciIsImlzVHJhbWNhciIsInRyYW1jYXJQb3NJbmRleCIsIm90aGVyQ2FyTm9kZSIsIm1pbkxlbiIsIm9sZFBvcyIsImZsb2F0UG9zIiwiY2FyU3RhdGUiLCJDYXJTdGF0ZSIsIklkbGUiLCJzcGVlZCIsImlzQ2FuQ2xpY2siLCJpc0NvbGxpc2lvbiIsImlzUmVhZHlEZXN0cm95IiwibyIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uTG9hZCIsIm5vZGUiLCJwb3NpdGlvbiIsIm5hbWUiLCJ1cGRhdGUiLCJOb3JtYWwiLCJnZXRXUG9zQnlOb2RlIiwiTWF0aCIsInJvdW5kIiwiYWJzIiwiYW5nbGUiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJ2MiIsIndpZHRoIiwiciIsImxlbmd0aCIsIm4iLCJnZXRDb21wb25lbnQiLCJhIiwiaGVpZ2h0IiwiYyIsIkludGVyc2VjdGlvbiIsInBvaW50TGluZURpc3RhbmNlIiwiY2hlY2tUb3VjaCIsImYiLCJjb25zb2xlIiwibG9nIiwiZGVzdHJveSIsImRpY3QiLCJyb2FkIiwicGFyZW50IiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJ5IiwidHJhbnNwb3J0Q2FyQXJyIiwiaW5kZXhPZiIsInNwbGljZSIsImlzVHJhbnNwb3J0Q2FyTW92ZSIsInVwZGF0ZVRyYW5zcG9ydEFtb3VudCIsImNhclJvb3QiLCJjYXJBcnIiLCJyZWR1Y2VVcGRhdGUiLCJjb2xsaXNpb24iLCJ4IiwiYm91bmRhcnkiLCJHb2luZ1JvYWQiLCJjaGFuZ2VDYXIiLCJPbkJvdHRvbVJpZ2h0IiwiT25Cb3R0b21MZWZ0Iiwic3BsaXQiLCJnIiwibSIsInJhaWxDYXJUdXJuQ2hhbmdlIiwiT3V0UGFya2luZyIsIndpblNpemUiLCJjaGVja1JlcyIsIldhdGVyU3ByYXlMZWF2ZSIsIkF1ZGlvIiwiZ2V0RWZmZWN0TXV0ZSIsInBsYXlMZXZlbFNvdW5kIiwiaGl0IiwiaXNDYXJQYXJrIiwiaXNXZW4iLCJzdG9wQWxsQWN0aW9ucyIsInJ1bkFjdGlvbiIsInNoYWNrQWN0aW9uIiwibW92ZUNhckFtb3VudCIsInR3ZWVuIiwidG8iLCJjYWxsIiwic3RhcnQiLCJnZXRDaGlsZEJ5TmFtZSIsImxpbmtUeXBlIiwidW5pb24iLCJyZXBlYXRGb3JldmVyIiwiY2FyQmFjayIsIm1vdmVCeSIsInMiLCJsIiwic2VxdWVuY2UiLCJfX2RlY29yYXRlIiwiTm9kZSIsIkNvbXBvbmVudCIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdDLE9BQU8sQ0FBQyw0QkFBRCxDQUEzQjs7QUFDQSxJQUFJQyx1QkFBdUIsR0FBR0QsT0FBTyxDQUFDLDBCQUFE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RUFBa0J3RSxDQUFsQixFQUFxQkUsQ0FBckIsRUFBd0JFLENBQXhCLEVBQTJCMEQsQ0FBM0IsRUFBOEJ4RCxDQUE5QixFQUFpQ3lELENBQWpDLEVBQW9DakksQ0FBcEMsRUFBdUNHLENBQXZDLENBQVA7RUFDSCxDQVpEOztFQWFBTSxDQUFDLENBQUMwQyxTQUFGLENBQVlPLGFBQVosR0FBNEIsVUFBVWxELENBQVYsRUFBYTtJQUNyQyxPQUFPQSxDQUFDLENBQUMwRSxNQUFGLENBQVNuQixxQkFBVCxDQUErQnZELENBQUMsQ0FBQzhDLFFBQWpDLENBQVA7RUFDSCxDQUZEOztFQUdBNkUsVUFBVSxDQUFDLENBQUM5SCxDQUFELENBQUQsRUFBTUksQ0FBQyxDQUFDMEMsU0FBUixFQUFtQixpQkFBbkIsRUFBc0MsS0FBSyxDQUEzQyxDQUFWOztFQUNBZ0YsVUFBVSxDQUFDLENBQUM5SCxDQUFDLENBQUMsQ0FBQ0osRUFBRSxDQUFDbUksSUFBSixDQUFELENBQUYsQ0FBRCxFQUFpQjNILENBQUMsQ0FBQzBDLFNBQW5CLEVBQThCLGFBQTlCLEVBQTZDLEtBQUssQ0FBbEQsQ0FBVjs7RUFDQSxPQUFRRixDQUFDLEdBQUdrRixVQUFVLENBQUMsQ0FBQ2hJLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQXRCO0FBQ0gsQ0E5Y08sQ0E4Y0xSLEVBQUUsQ0FBQ29JLFNBOWNFLENBQVI7O0FBK2NBQyxPQUFPLFdBQVAsR0FBa0IvSCxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgJGF1ZGlvTWFuYWdlciA9IHJlcXVpcmUoXCIuLi8uLi9zY3JpcHRzL0F1ZGlvTWFuYWdlclwiKTtcbnZhciAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZyA9IHJlcXVpcmUoXCIuL0xldmVsLTI0OTY2N19idXNDb25maWdcIik7XG52YXIgJGxldmVsXzI0OTY2N19jaGFpbiA9IHJlcXVpcmUoXCIuL0xldmVsLTI0OTY2N19jaGFpblwiKTtcbnZhciAkbGV2ZWxfMjQ5NjY3X3VUcmFuc3BvcnQgPSByZXF1aXJlKFwiLi9MZXZlbC0yNDk2NjdfdVRyYW5zcG9ydFwiKTtcbnZhciBoID0gY2MuX2RlY29yYXRvcjtcbnZhciBwID0gaC5jY2NsYXNzO1xudmFyIGQgPSBoLnByb3BlcnR5O1xudmFyIHUgPSAoZnVuY3Rpb24gKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgZS5zZWF0VG90YWxBbW91bnQgPSA0O1xuICAgICAgICBlLnJhaWxDYXJUdXJuID0gW107XG4gICAgICAgIGUuY2FyQ29sb3IgPSBudWxsO1xuICAgICAgICBlLmNhcklEID0gbnVsbDtcbiAgICAgICAgZS5wYXRoID0gMDtcbiAgICAgICAgZS5lbXB0eVNlYXRBbW91bnQgPSAwO1xuICAgICAgICBlLmRpciA9IDA7XG4gICAgICAgIGUuY29sb3JJbWdOYW1lID0gbnVsbDtcbiAgICAgICAgZS5kaXJJbWdOYW1lID0gbnVsbDtcbiAgICAgICAgZS5sZW5JbWdOYW1lID0gbnVsbDtcbiAgICAgICAgZS5tZ3IgPSBudWxsO1xuICAgICAgICBlLmlzVHJhbnNwb3J0Q2FyID0gITE7XG4gICAgICAgIGUuaXNCbGFja0NhciA9ICExO1xuICAgICAgICBlLmlzVHVybnRhYmxlQ2FyID0gITE7XG4gICAgICAgIGUudHVybnRhYmxlUG9zSW5kZXggPSAtMTtcbiAgICAgICAgZS5wcmV2Q2FyID0gbnVsbDtcbiAgICAgICAgZS5uZXh0Q2FyID0gbnVsbDtcbiAgICAgICAgZS5sZWZ0T2JsaXF1ZUNhciA9ICExO1xuICAgICAgICBlLnJpZ2h0T2JsaXF1ZUNhciA9ICExO1xuICAgICAgICBlLmlzVVRyYW5zcG9ydENhciA9ICExO1xuICAgICAgICBlLmlzVVRyYW5zcG9ydENhcl9ub0luID0gITE7XG4gICAgICAgIGUuaXNGaXJlRW5naW5lID0gITE7XG4gICAgICAgIGUuaXNQb2xpY2VDYXIgPSAhMTtcbiAgICAgICAgZS5pc1JpY2hDYXIgPSAhMTtcbiAgICAgICAgZS5pc1RyYW1jYXIgPSAhMTtcbiAgICAgICAgZS50cmFtY2FyUG9zSW5kZXggPSAwO1xuICAgICAgICBlLm90aGVyQ2FyTm9kZSA9IFtdO1xuICAgICAgICBlLm1pbkxlbiA9IDEwO1xuICAgICAgICBlLm9sZFBvcyA9IG51bGw7XG4gICAgICAgIGUuZmxvYXRQb3MgPSBudWxsO1xuICAgICAgICBlLmNhclN0YXRlID0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuSWRsZTtcbiAgICAgICAgZS5zcGVlZCA9IDkwMDtcbiAgICAgICAgZS5pc0NhbkNsaWNrID0gITA7XG4gICAgICAgIGUuaXNDb2xsaXNpb24gPSAhMTtcbiAgICAgICAgZS5pc1JlYWR5RGVzdHJveSA9ICExO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgdmFyIG87XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIG8gPSBlO1xuICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbXB0eVNlYXRBbW91bnQgPSB0aGlzLnNlYXRUb3RhbEFtb3VudDtcbiAgICAgICAgdGhpcy5vbGRQb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XG4gICAgICAgIGlmIChcIjFcIiA9PSB0aGlzLm5vZGUubmFtZVswXSAmJiBcIjJcIiA9PSB0aGlzLm5vZGUubmFtZVsxXSkge1xuICAgICAgICAgICAgdGhpcy5pc0ZpcmVFbmdpbmUgPSAhMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXCIxXCIgPT0gdGhpcy5ub2RlLm5hbWVbMF0gJiYgXCIwXCIgPT0gdGhpcy5ub2RlLm5hbWVbMV0pIHtcbiAgICAgICAgICAgIHRoaXMuaXNQb2xpY2VDYXIgPSAhMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXCIxXCIgPT0gdGhpcy5ub2RlLm5hbWVbMF0gJiYgXCIxXCIgPT0gdGhpcy5ub2RlLm5hbWVbMV0pIHtcbiAgICAgICAgICAgIHRoaXMuaXNSaWNoQ2FyID0gITA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFwiMVwiID09IHRoaXMubm9kZS5uYW1lWzBdICYmIFwiM1wiID09IHRoaXMubm9kZS5uYW1lWzFdKSB7XG4gICAgICAgICAgICB0aGlzLmlzVHJhbWNhciA9ICEwO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWR5RGVzdHJveSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FyU3RhdGUgPT0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuTm9ybWFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGF0aCA+IDEgfHwgdGhpcy5pc1RyYW1jYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NhbkNsaWNrID0gITE7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5nZXRXUG9zQnlOb2RlKHRoaXMubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gTWF0aC5yb3VuZChNYXRoLmFicyh0aGlzLm5vZGUuYW5nbGUpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICg5MCA9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoLXRoaXMubm9kZS53aWR0aCAvIDIsIDApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKHRoaXMubm9kZS53aWR0aCAvIDIsIDApKVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IHRoaXMub3RoZXJDYXJOb2RlLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHRoaXMub3RoZXJDYXJOb2RlW3JdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobiAmJiBuLmdldENvbXBvbmVudChvKS5jYXJTdGF0ZSA9PSAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5JZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgLW4uaGVpZ2h0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52Migtbi53aWR0aCAvIDIsIDApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKG4ud2lkdGggLyAyLCAwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52Migtbi53aWR0aCAvIDIsIC1uLmhlaWdodCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIobi53aWR0aCAvIDIsIC1uLmhlaWdodCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoOTAgPT0gZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuSW50ZXJzZWN0aW9uLnBvaW50TGluZURpc3RhbmNlKGlbMF0sIGFbMF0sIGFbMV0sICEwKSA8IHRoaXMubWluTGVuIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5wb2ludExpbmVEaXN0YW5jZShpWzBdLCBjWzBdLCBjWzFdLCAhMCkgPCB0aGlzLm1pbkxlbiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ucG9pbnRMaW5lRGlzdGFuY2UoaVswXSwgaFswXSwgaFsxXSwgITApIDwgdGhpcy5taW5MZW4gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuSW50ZXJzZWN0aW9uLnBvaW50TGluZURpc3RhbmNlKGlbMV0sIGFbMF0sIGFbMV0sICEwKSA8IHRoaXMubWluTGVuIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5wb2ludExpbmVEaXN0YW5jZShpWzFdLCBjWzBdLCBjWzFdLCAhMCkgPCB0aGlzLm1pbkxlbiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ucG9pbnRMaW5lRGlzdGFuY2UoaVsxXSwgaFswXSwgaFsxXSwgITApIDwgdGhpcy5taW5MZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1RvdWNoKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5wb2ludExpbmVEaXN0YW5jZSh0LCBhWzBdLCBhWzFdLCAhMCkgPCB0aGlzLm1pbkxlbiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5wb2ludExpbmVEaXN0YW5jZSh0LCBjWzBdLCBjWzFdLCAhMCkgPCB0aGlzLm1pbkxlbiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5wb2ludExpbmVEaXN0YW5jZSh0LCBoWzBdLCBoWzFdLCAhMCkgPCB0aGlzLm1pbkxlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1RvdWNoKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHAgPSB0aGlzLm1nci5kaWN0LnJvYWQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm1nci5kaWN0LnJvYWQucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLnkgPj0gZC55IC0gMiAqIHRoaXMubWluTGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5qOA5rWL56Kw5Yiw5YWs6LevXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1RyYW5zcG9ydENhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xICE9PSAociA9IHRoaXMubWdyLnRyYW5zcG9ydENhckFyci5pbmRleE9mKHRoaXMubm9kZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZ3IudHJhbnNwb3J0Q2FyQXJyLnNwbGljZShyLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWdyLmlzVHJhbnNwb3J0Q2FyTW92ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZ3IudXBkYXRlVHJhbnNwb3J0QW1vdW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNVVHJhbnNwb3J0Q2FyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEgIT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHIgPSB0aGlzLm1nci5kaWN0LmNhclJvb3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3VUcmFuc3BvcnQuZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhckFyci5pbmRleE9mKHRoaXMubm9kZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1nci5kaWN0LmNhclJvb3QuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfdVRyYW5zcG9ydC5kZWZhdWx0KS5jYXJBcnJbcl0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWdyLmRpY3QuY2FyUm9vdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N191VHJhbnNwb3J0LmRlZmF1bHQpLnJlZHVjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZ3IuZGljdC5jYXJSb290LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3VUcmFuc3BvcnQuZGVmYXVsdCkuaXNUcmFuc3BvcnRDYXJNb3ZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgKHRoaXMuaXNDb2xsaXNpb24gfHwgKCh0aGlzLmlzQ29sbGlzaW9uID0gITApLCB0aGlzLm1nci5jb2xsaXNpb24odGhpcy5ub2RlKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLnggPD0gLSh0aGlzLm1nci5ib3VuZGFyeSAvIDIgKyB0aGlzLm5vZGUud2lkdGggLyAyKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhclN0YXRlID0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuR29pbmdSb2FkO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCB0aGlzLm1nci5jaGFuZ2VDYXIodGhpcy5ub2RlLCAyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS54ID49IHRoaXMubWdyLmJvdW5kYXJ5IC8gMiArIHRoaXMubm9kZS53aWR0aCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJTdGF0ZSA9ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhclN0YXRlLkdvaW5nUm9hZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgdGhpcy5tZ3IuY2hhbmdlQ2FyKHRoaXMubm9kZSwgMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUueSA8PSAtNjIwICYmIHRoaXMubm9kZS54ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhclN0YXRlID0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuT25Cb3R0b21SaWdodDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgdGhpcy5tZ3IuY2hhbmdlQ2FyKHRoaXMubm9kZSwgMSwgMSwgXCIwMVwiICsgdGhpcy5sZW5JbWdOYW1lICsgXCItMVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS55IDw9IC02MjAgJiYgdGhpcy5ub2RlLnggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyU3RhdGUgPSAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5PbkJvdHRvbUxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMubWdyLmNoYW5nZUNhcih0aGlzLm5vZGUsIDEsIDIsIFwiMDFcIiArIHRoaXMubGVuSW1nTmFtZSArIFwiLTBcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlZnRPYmxpcXVlQ2FyICYmIHRoaXMubm9kZS54ID49IC0xODkuMDA4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyU3RhdGUgPSAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5Hb2luZ1JvYWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWdyLmNoYW5nZUNhcih0aGlzLm5vZGUsIDIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0T2JsaXF1ZUNhciAmJiB0aGlzLm5vZGUueCA8PSAxODkuMDA4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5jYXJTdGF0ZSA9ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhclN0YXRlLkdvaW5nUm9hZCksIHRoaXMubWdyLmNoYW5nZUNhcih0aGlzLm5vZGUsIDIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmlzVVRyYW5zcG9ydENhciB8fCB0aGlzLmlzVVRyYW5zcG9ydENhcl9ub0luKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgtOTAgPT0gTWF0aC5yb3VuZCh0aGlzLm5vZGUuYW5nbGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC01MiA9PSBNYXRoLnJvdW5kKHRoaXMubm9kZS5hbmdsZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEyOCA9PSBNYXRoLnJvdW5kKHRoaXMubm9kZS5hbmdsZSkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPj0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuY2FyU3RhdGUgPSAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5Hb2luZ1JvYWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5ub2RlLnggPSAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZ3IuY2hhbmdlQ2FyKHRoaXMubm9kZSwgMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNVVHJhbnNwb3J0Q2FyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1nci5kaWN0LmNhclJvb3QuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfdVRyYW5zcG9ydC5kZWZhdWx0KS5yZWR1Y2VVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuaXNVVHJhbnNwb3J0Q2FyIHx8IHRoaXMuaXNVVHJhbnNwb3J0Q2FyX25vSW4pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg5MCA9PSBNYXRoLnJvdW5kKHRoaXMubm9kZS5hbmdsZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUyID09IE1hdGgucm91bmQodGhpcy5ub2RlLmFuZ2xlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTI4ID09IE1hdGgucm91bmQodGhpcy5ub2RlLmFuZ2xlKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPD0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHRoaXMuY2FyU3RhdGUgPSAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5Hb2luZ1JvYWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5ub2RlLnggPSAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZ3IuY2hhbmdlQ2FyKHRoaXMubm9kZSwgMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNVVHJhbnNwb3J0Q2FyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1nci5kaWN0LmNhclJvb3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfdVRyYW5zcG9ydC5kZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2VVcGRhdGUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNUcmFtY2FyICYmIHRoaXMucmFpbENhclR1cm5bdGhpcy50cmFtY2FyUG9zSW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1ID0gdGhpcy5yYWlsQ2FyVHVyblt0aGlzLnRyYW1jYXJQb3NJbmRleF0ubmFtZS5zcGxpdChcIi1cIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBnID0gdVswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSB1WzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCIwXCIgPT0gZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0V1Bvc0J5Tm9kZSh0aGlzLm5vZGUpLnggPD1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFdQb3NCeU5vZGUodGhpcy5yYWlsQ2FyVHVyblt0aGlzLnRyYW1jYXJQb3NJbmRleF0pLnhcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmFpbENhclR1cm5DaGFuZ2UobSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCIxXCIgPT0gZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0V1Bvc0J5Tm9kZSh0aGlzLm5vZGUpLnggPj1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRXUG9zQnlOb2RlKHRoaXMucmFpbENhclR1cm5bdGhpcy50cmFtY2FyUG9zSW5kZXhdKS54ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmFpbENhclR1cm5DaGFuZ2UobSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMlwiID09IGcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFwiM1wiID09IGcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0V1Bvc0J5Tm9kZSh0aGlzLm5vZGUpLnkgPD1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFdQb3NCeU5vZGUodGhpcy5yYWlsQ2FyVHVyblt0aGlzLnRyYW1jYXJQb3NJbmRleF0pLnkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmFpbENhclR1cm5DaGFuZ2UobSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuY2FyU3RhdGUgPT0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuT25Cb3R0b21MZWZ0ICYmXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPD0gLSh0aGlzLm1nci5ib3VuZGFyeSAvIDIgKyB0aGlzLm5vZGUud2lkdGggLyAyKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJTdGF0ZSA9ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhclN0YXRlLkdvaW5nUm9hZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCB0aGlzLm1nci5jaGFuZ2VDYXIodGhpcy5ub2RlLCAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmNhclN0YXRlID09ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhclN0YXRlLk9uQm90dG9tUmlnaHQgJiZcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCA+PSB0aGlzLm1nci5ib3VuZGFyeSAvIDIgKyB0aGlzLm5vZGUud2lkdGggLyAyXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhclN0YXRlID0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuR29pbmdSb2FkO1xuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMubWdyLmNoYW5nZUNhcih0aGlzLm5vZGUsIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuY2FyU3RhdGUgPT0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuT3V0UGFya2luZyAmJlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ID49IGNjLndpblNpemUud2lkdGggLyAyICsgNiAqIHRoaXMubm9kZS53aWR0aFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZ3IuY2hlY2tSZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuY2FyU3RhdGUgPT0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuV2F0ZXJTcHJheUxlYXZlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPD0gLShjYy53aW5TaXplLndpZHRoIC8gMiArIHRoaXMubm9kZS5oZWlnaHQpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIumUgOavgea2iOmYsui9plwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yYWlsQ2FyVHVybkNoYW5nZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHRoaXMuY2FyU3RhdGUgPSAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5Ob3JtYWw7XG4gICAgICAgIGlmIChcInVwXCIgPT0gdCkge1xuICAgICAgICAgICAgdGhpcy50cmFtY2FyUG9zSW5kZXggKz0gMTtcbiAgICAgICAgICAgIHRoaXMubWdyLmNoYW5nZUNhcih0aGlzLm5vZGUsIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKFwibGVmdFVwXCIgPT0gdCkge1xuICAgICAgICAgICAgICAgICh0aGlzLnRyYW1jYXJQb3NJbmRleCArPSAxKSwgdGhpcy5tZ3IuY2hhbmdlQ2FyKHRoaXMubm9kZSwgNCwgMik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChcImxlZnREb3duXCIgPT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAodGhpcy50cmFtY2FyUG9zSW5kZXggKz0gMSksIHRoaXMubWdyLmNoYW5nZUNhcih0aGlzLm5vZGUsIDUsIDIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcInJpZ2h0XCIgPT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMudHJhbWNhclBvc0luZGV4ICs9IDEpLCB0aGlzLm1nci5jaGFuZ2VDYXIodGhpcy5ub2RlLCAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiID09IHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICgodGhpcy50cmFtY2FyUG9zSW5kZXggKz0gMSksIHRoaXMubWdyLmNoYW5nZUNhcih0aGlzLm5vZGUsIDEsIDIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyaWdodFVwXCIgPT0gdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKCh0aGlzLnRyYW1jYXJQb3NJbmRleCArPSAxKSwgdGhpcy5tZ3IuY2hhbmdlQ2FyKHRoaXMubm9kZSwgNCwgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJpZ2h0RG93blwiID09IHQgJiYgKCh0aGlzLnRyYW1jYXJQb3NJbmRleCArPSAxKSwgdGhpcy5tZ3IuY2hhbmdlQ2FyKHRoaXMubm9kZSwgNSwgMSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja1RvdWNoID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBpZiAoJGF1ZGlvTWFuYWdlci5BdWRpby5nZXRFZmZlY3RNdXRlKCkpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1nci5wbGF5TGV2ZWxTb3VuZChcIkNyYXNoXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWdyLmhpdCh0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLmNhclN0YXRlID0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuSWRsZTtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5pc0NhclBhcmspIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5pc1dlbiA9ICEwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0LnJ1bkFjdGlvbih0aGlzLnNoYWNrQWN0aW9uKDAuMSwgMikpO1xuICAgICAgICB0aGlzLm1nci5tb3ZlQ2FyQW1vdW50IC09IDE7XG4gICAgICAgIGlmICh0aGlzLmlzVHJhbWNhcikge1xuICAgICAgICAgICAgdmFyIGkgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIC0zMCkpO1xuICAgICAgICAgICAgdmFyIHIgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGkpO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgICAgIC50bygwLjE1LCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuaXNDYW5DbGljayA9ICEwO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAgICAgLnRvKDAuMTUsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMub2xkUG9zXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuaXNDYW5DbGljayA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5pc1RyYW5zcG9ydENhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5tZ3IuaXNUcmFuc3BvcnRDYXJNb3ZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuaXNVVHJhbnNwb3J0Q2FyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLm1nci5kaWN0LmNhclJvb3QuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfdVRyYW5zcG9ydC5kZWZhdWx0KS5pc1RyYW5zcG9ydENhck1vdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlLmZsb2F0KGUubm9kZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbiA9IHRoaXMubmV4dENhcjtcbiAgICAgICAgdmFyIGggPSB0aGlzLnByZXZDYXI7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG4gJiZcbiAgICAgICAgICAgICgodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY2hhaW5cIikgJiZcbiAgICAgICAgICAgICAgICAwID09IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNoYWluXCIpLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2NoYWluLmRlZmF1bHQpLmxpbmtUeXBlKSB8fFxuICAgICAgICAgICAgICAgIChuLmdldENoaWxkQnlOYW1lKFwiY2hhaW5cIikgJiZcbiAgICAgICAgICAgICAgICAgICAgMCA9PSBuLmdldENoaWxkQnlOYW1lKFwiY2hhaW5cIikuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2hhaW4uZGVmYXVsdCkubGlua1R5cGUpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIG4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIG4uZ2V0Q29tcG9uZW50KG8pLmNhclN0YXRlID0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuSWRsZTtcbiAgICAgICAgICAgIHRoaXMubWdyLm1vdmVDYXJBbW91bnQgLT0gMTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKG4pXG4gICAgICAgICAgICAgICAgLnRvKDAuMTUsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IG4uZ2V0Q29tcG9uZW50KG8pLm9sZFBvc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBuLmdldENvbXBvbmVudChvKS5pc0NhbkNsaWNrID0gITA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBoICYmXG4gICAgICAgICAgICAoKGguZ2V0Q2hpbGRCeU5hbWUoXCJjaGFpblwiKSAmJlxuICAgICAgICAgICAgICAgIDEgPT0gaC5nZXRDaGlsZEJ5TmFtZShcImNoYWluXCIpLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2NoYWluLmRlZmF1bHQpLmxpbmtUeXBlKSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFpblwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAxID09IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNoYWluXCIpLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2NoYWluLmRlZmF1bHQpLmxpbmtUeXBlKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBoLmdldENvbXBvbmVudChvKS5jYXJTdGF0ZSA9ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhclN0YXRlLklkbGU7XG4gICAgICAgICAgICBoLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICB0aGlzLm1nci5tb3ZlQ2FyQW1vdW50IC09IDE7XG4gICAgICAgICAgICBjYy50d2VlbihoKVxuICAgICAgICAgICAgICAgIC50bygwLjE1LCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBoLmdldENvbXBvbmVudChvKS5vbGRQb3NcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaC5nZXRDb21wb25lbnQobykuaXNDYW5DbGljayA9ICEwO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZsb2F0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHQuZ2V0Q29tcG9uZW50KG8pLmZsb2F0UG9zKSB7XG4gICAgICAgICAgICBjYy50d2Vlbih0KVxuICAgICAgICAgICAgICAgIC50bygwLjYsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHQuZ2V0Q29tcG9uZW50KG8pLmZsb2F0UG9zXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMC42LCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0LmdldENvbXBvbmVudChvKS5vbGRQb3NcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC51bmlvbigpXG4gICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jYXJCYWNrID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBpZiAoJGF1ZGlvTWFuYWdlci5BdWRpby5nZXRFZmZlY3RNdXRlKCkpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1nci5wbGF5TGV2ZWxTb3VuZChcIkNyYXNoXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWdyLmhpdCh0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLmNhclN0YXRlID0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuSWRsZTtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5pc0NhclBhcmspIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5pc1dlbiA9ICEwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0LnJ1bkFjdGlvbih0aGlzLnNoYWNrQWN0aW9uKDAuMSwgMikpO1xuICAgICAgICB0aGlzLm1nci5tb3ZlQ2FyQW1vdW50IC09IDE7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC50bygwLjE1LCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMub2xkUG9zXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGUuaXNDYW5DbGljayA9ICEwO1xuICAgICAgICAgICAgICAgIGlmIChlLmlzVHJhbnNwb3J0Q2FyKSB7XG4gICAgICAgICAgICAgICAgICAgIGUubWdyLmlzVHJhbnNwb3J0Q2FyTW92ZSA9ICEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZS5pc1VUcmFuc3BvcnRDYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5tZ3IuZGljdC5jYXJSb290LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3VUcmFuc3BvcnQuZGVmYXVsdCkuaXNUcmFuc3BvcnRDYXJNb3ZlID0gITA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB2YXIgaSA9IHRoaXMubmV4dENhcjtcbiAgICAgICAgdmFyIHIgPSB0aGlzLnByZXZDYXI7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGkgJiZcbiAgICAgICAgICAgICgodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY2hhaW5cIikgJiZcbiAgICAgICAgICAgICAgICAwID09IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNoYWluXCIpLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2NoYWluLmRlZmF1bHQpLmxpbmtUeXBlKSB8fFxuICAgICAgICAgICAgICAgIChpLmdldENoaWxkQnlOYW1lKFwiY2hhaW5cIikgJiZcbiAgICAgICAgICAgICAgICAgICAgMCA9PSBpLmdldENoaWxkQnlOYW1lKFwiY2hhaW5cIikuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2hhaW4uZGVmYXVsdCkubGlua1R5cGUpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGkuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIGkuZ2V0Q29tcG9uZW50KG8pLmNhclN0YXRlID0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuSWRsZTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGkpXG4gICAgICAgICAgICAgICAgLnRvKDAuMTUsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGkuZ2V0Q29tcG9uZW50KG8pLm9sZFBvc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpLmdldENvbXBvbmVudChvKS5pc0NhbkNsaWNrID0gITA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICByICYmXG4gICAgICAgICAgICAoKHIuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFpblwiKSAmJlxuICAgICAgICAgICAgICAgIDEgPT0gci5nZXRDaGlsZEJ5TmFtZShcImNoYWluXCIpLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2NoYWluLmRlZmF1bHQpLmxpbmtUeXBlKSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFpblwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAxID09IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNoYWluXCIpLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2NoYWluLmRlZmF1bHQpLmxpbmtUeXBlKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByLmdldENvbXBvbmVudChvKS5jYXJTdGF0ZSA9ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhclN0YXRlLklkbGU7XG4gICAgICAgICAgICByLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBjYy50d2VlbihyKVxuICAgICAgICAgICAgICAgIC50bygwLjE1LCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByLmdldENvbXBvbmVudChvKS5vbGRQb3NcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQobykuaXNDYW5DbGljayA9ICEwO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNoYWNrQWN0aW9uID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSBjYy5tb3ZlQnkodCwgZSwgZSk7XG4gICAgICAgIHZhciBpID0gY2MubW92ZUJ5KHQsIC1lLCAtZSk7XG4gICAgICAgIHZhciByID0gY2MubW92ZUJ5KDAuOCAqIHQsIDAuOCAqIGUsIDAuOCAqIGUpO1xuICAgICAgICB2YXIgbiA9IGNjLm1vdmVCeSgwLjggKiB0LCAwLjggKiAtZSwgMC44ICogLWUpO1xuICAgICAgICB2YXIgYSA9IGNjLm1vdmVCeSgwLjYgKiB0LCAwLjYgKiBlLCAwLjYgKiBlKTtcbiAgICAgICAgdmFyIHMgPSBjYy5tb3ZlQnkoMC42ICogdCwgMC42ICogLWUsIDAuNiAqIC1lKTtcbiAgICAgICAgdmFyIGMgPSBjYy5tb3ZlQnkoMC40ICogdCwgMC40ICogZSwgMC40ICogZSk7XG4gICAgICAgIHZhciBsID0gY2MubW92ZUJ5KDAuNCAqIHQsIDAuNCAqIC1lLCAwLjQgKiAtZSk7XG4gICAgICAgIHZhciBoID0gY2MubW92ZUJ5KDAuMiAqIHQsIDAuMiAqIGUsIDAuMiAqIGUpO1xuICAgICAgICB2YXIgcCA9IGNjLm1vdmVCeSgwLjIgKiB0LCAwLjIgKiAtZSwgMC4yICogLWUpO1xuICAgICAgICByZXR1cm4gY2Muc2VxdWVuY2UobywgaSwgciwgbiwgYSwgcywgYywgbCwgaCwgcCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRXUG9zQnlOb2RlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0LnBvc2l0aW9uKTtcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW2RdLCBlLnByb3RvdHlwZSwgXCJzZWF0VG90YWxBbW91bnRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtkKFtjYy5Ob2RlXSldLCBlLnByb3RvdHlwZSwgXCJyYWlsQ2FyVHVyblwiLCB2b2lkIDApO1xuICAgIHJldHVybiAobyA9IF9fZGVjb3JhdGUoW3BdLCBlKSk7XG59KShjYy5Db21wb25lbnQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gdTtcbiJdfQ==