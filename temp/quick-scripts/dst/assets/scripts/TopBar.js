
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/TopBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd961c44celOt79AcjzUSiXb', 'TopBar');
// scripts/TopBar.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $eventConst = require("./EventConst");

var $platformConst = require("./PlatformConst");

var $eventManager = require("./EventManager");

var $platformManager = require("./PlatformManager");

var f = cc._decorator;
var d = f.ccclass;
var h = (f.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.key = null;
    e.power = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.addBtnOn("backBtn", this.clickBack, this);
    this.addBtnOn("backBtn_tt", this.clickBack, this);
    this.addBtnOn("backBtn_ks", this.clickBack, this);
    this.initPlatformUI();
  };

  e.prototype.initPlatformUI = function () {
    this.dict.normal.active = !1;
    this.dict.tt.active = !1;
    this.dict.ks.active = !1;

    if ($platformManager.Platform.getConfig().fitUIType == $platformConst.FitUIType.TT) {
      this.dict.tt.active = !0;
    } else {
      if ($platformManager.Platform.getConfig().fitUIType == $platformConst.FitUIType.KS) {
        this.dict.ks.active = !0;
      } else {
        this.dict.normal.active = !0;
      }
    }
  };

  e.prototype.clickBack = function () {
    $eventManager.Event.emit($eventConst["default"].CLICK_BACK);
  };

  return __decorate([d], e);
}($baseUI["default"]));
exports["default"] = h;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1RvcEJhci5qcyJdLCJuYW1lcyI6WyJyIiwiJGJhc2VVSSIsInJlcXVpcmUiLCIkZXZlbnRDb25zdCIsIiRwbGF0Zm9ybUNvbnN0IiwiJGV2ZW50TWFuYWdlciIsIiRwbGF0Zm9ybU1hbmFnZXIiLCJmIiwiY2MiLCJfZGVjb3JhdG9yIiwiZCIsImNjY2xhc3MiLCJoIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwicG93ZXIiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJjYWxsIiwiYWRkQnRuT24iLCJjbGlja0JhY2siLCJpbml0UGxhdGZvcm1VSSIsImRpY3QiLCJub3JtYWwiLCJhY3RpdmUiLCJ0dCIsImtzIiwiUGxhdGZvcm0iLCJnZXRDb25maWciLCJmaXRVSVR5cGUiLCJGaXRVSVR5cGUiLCJUVCIsIktTIiwiRXZlbnQiLCJlbWl0IiwiQ0xJQ0tfQkFDSyIsIl9fZGVjb3JhdGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFyQjs7QUFDQSxJQUFJQyxXQUFXLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlFLGNBQWMsR0FBR0YsT0FBTyxDQUFDLGlCQUFELENBQTVCOztBQUNBLElBQUlHLGFBQWEsR0FBR0gsT0FBTyxDQUFDLGdCQUFELENBQTNCOztBQUNBLElBQUlJLGdCQUFnQixHQUFHSixPQUFPLENBQUMsbUJBQUQsQ0FBOUI7O0FBQ0EsSUFBSUssQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0EsVUFBVUMsQ0FBVixFQUFhO0VBQ1YsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxHQUFGLEdBQVEsSUFBUjtJQUNBSCxDQUFDLENBQUNJLEtBQUYsR0FBVSxJQUFWO0lBQ0EsT0FBT0osQ0FBUDtFQUNIOztFQUNESyxTQUFTLENBQUNMLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNNLFNBQUYsQ0FBWUMsTUFBWixHQUFxQixZQUFZO0lBQzdCUixDQUFDLENBQUNPLFNBQUYsQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEI7SUFDQSxLQUFLQyxRQUFMLENBQWMsU0FBZCxFQUF5QixLQUFLQyxTQUE5QixFQUF5QyxJQUF6QztJQUNBLEtBQUtELFFBQUwsQ0FBYyxZQUFkLEVBQTRCLEtBQUtDLFNBQWpDLEVBQTRDLElBQTVDO0lBQ0EsS0FBS0QsUUFBTCxDQUFjLFlBQWQsRUFBNEIsS0FBS0MsU0FBakMsRUFBNEMsSUFBNUM7SUFDQSxLQUFLQyxjQUFMO0VBQ0gsQ0FORDs7RUFPQVgsQ0FBQyxDQUFDTSxTQUFGLENBQVlLLGNBQVosR0FBNkIsWUFBWTtJQUNyQyxLQUFLQyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLE1BQWpCLEdBQTBCLENBQUMsQ0FBM0I7SUFDQSxLQUFLRixJQUFMLENBQVVHLEVBQVYsQ0FBYUQsTUFBYixHQUFzQixDQUFDLENBQXZCO0lBQ0EsS0FBS0YsSUFBTCxDQUFVSSxFQUFWLENBQWFGLE1BQWIsR0FBc0IsQ0FBQyxDQUF2Qjs7SUFDQSxJQUFJdkIsZ0JBQWdCLENBQUMwQixRQUFqQixDQUEwQkMsU0FBMUIsR0FBc0NDLFNBQXRDLElBQW1EOUIsY0FBYyxDQUFDK0IsU0FBZixDQUF5QkMsRUFBaEYsRUFBb0Y7TUFDaEYsS0FBS1QsSUFBTCxDQUFVRyxFQUFWLENBQWFELE1BQWIsR0FBc0IsQ0FBQyxDQUF2QjtJQUNILENBRkQsTUFFTztNQUNILElBQUl2QixnQkFBZ0IsQ0FBQzBCLFFBQWpCLENBQTBCQyxTQUExQixHQUFzQ0MsU0FBdEMsSUFBbUQ5QixjQUFjLENBQUMrQixTQUFmLENBQXlCRSxFQUFoRixFQUFvRjtRQUNoRixLQUFLVixJQUFMLENBQVVJLEVBQVYsQ0FBYUYsTUFBYixHQUFzQixDQUFDLENBQXZCO01BQ0gsQ0FGRCxNQUVPO1FBQ0gsS0FBS0YsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxNQUFqQixHQUEwQixDQUFDLENBQTNCO01BQ0g7SUFDSjtFQUNKLENBYkQ7O0VBY0FkLENBQUMsQ0FBQ00sU0FBRixDQUFZSSxTQUFaLEdBQXdCLFlBQVk7SUFDaENwQixhQUFhLENBQUNpQyxLQUFkLENBQW9CQyxJQUFwQixDQUF5QnBDLFdBQVcsV0FBWCxDQUFvQnFDLFVBQTdDO0VBQ0gsQ0FGRDs7RUFHQSxPQUFPQyxVQUFVLENBQUMsQ0FBQy9CLENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0FqQ0QsQ0FpQ0dkLE9BQU8sV0FqQ1YsQ0FGQyxDQUFMO0FBb0NBeUMsT0FBTyxXQUFQLEdBQWtCOUIsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByO1xudmFyICRiYXNlVUkgPSByZXF1aXJlKFwiLi9CYXNlVUlcIik7XG52YXIgJGV2ZW50Q29uc3QgPSByZXF1aXJlKFwiLi9FdmVudENvbnN0XCIpO1xudmFyICRwbGF0Zm9ybUNvbnN0ID0gcmVxdWlyZShcIi4vUGxhdGZvcm1Db25zdFwiKTtcbnZhciAkZXZlbnRNYW5hZ2VyID0gcmVxdWlyZShcIi4vRXZlbnRNYW5hZ2VyXCIpO1xudmFyICRwbGF0Zm9ybU1hbmFnZXIgPSByZXF1aXJlKFwiLi9QbGF0Zm9ybU1hbmFnZXJcIik7XG52YXIgZiA9IGNjLl9kZWNvcmF0b3I7XG52YXIgZCA9IGYuY2NjbGFzcztcbnZhciBoID1cbiAgICAoZi5wcm9wZXJ0eSxcbiAgICAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICAgICAgZS5rZXkgPSBudWxsO1xuICAgICAgICAgICAgZS5wb3dlciA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQucHJvdG90eXBlLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5hZGRCdG5PbihcImJhY2tCdG5cIiwgdGhpcy5jbGlja0JhY2ssIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5hZGRCdG5PbihcImJhY2tCdG5fdHRcIiwgdGhpcy5jbGlja0JhY2ssIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5hZGRCdG5PbihcImJhY2tCdG5fa3NcIiwgdGhpcy5jbGlja0JhY2ssIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5pbml0UGxhdGZvcm1VSSgpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5pbml0UGxhdGZvcm1VSSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5ub3JtYWwuYWN0aXZlID0gITE7XG4gICAgICAgICAgICB0aGlzLmRpY3QudHQuYWN0aXZlID0gITE7XG4gICAgICAgICAgICB0aGlzLmRpY3Qua3MuYWN0aXZlID0gITE7XG4gICAgICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5maXRVSVR5cGUgPT0gJHBsYXRmb3JtQ29uc3QuRml0VUlUeXBlLlRUKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0LnR0LmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5maXRVSVR5cGUgPT0gJHBsYXRmb3JtQ29uc3QuRml0VUlUeXBlLktTKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5rcy5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3Qubm9ybWFsLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuY2xpY2tCYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5lbWl0KCRldmVudENvbnN0LmRlZmF1bHQuQ0xJQ0tfQkFDSyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFtkXSwgZSk7XG4gICAgfSkoJGJhc2VVSS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBoO1xuIl19