
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/NoAD.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8349AE5+ZPpZvR8AKR4YL7', 'NoAD');
// scripts/NoAD.js

"use strict";

var r;

var $uIBase = require("./UIBase");

var $localStorageConst = require("./LocalStorageConst");

var $languageManager = require("./LanguageManager");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var $paymentSystem = require("./PaymentSystem");

var $shuShuConst = require("./ShuShuConst");

var h = cc._decorator;
var p = h.ccclass;
var m = h.property;

var g = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.currentVIP = 0;
    e.bgSF = [];
    e.iconSF = [];
    e.bg2SF = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.node.setContentSize(cc.winSize);
    this.localStorageUIData[$localStorageConst["default"].isNoAD] = this.updateIsNoAD.bind(this);
    this.addBtnOn("noBtn", this.noBtn, this);
    this.addBtnOn("noADBtn", this.noADBtn, this);
    this.addBtnOn("noADBtn1", this.noADBtn1, this);
    this.initView();
  };

  e.prototype.updateIsNoAD = function (t) {
    if (t) {
      $popupManager["default"].hide();
    }
  };

  e.prototype.initView = function () {
    this.dict.skin.getComponent(cc.Label).string = $languageManager["default"].formatStr("获得皮肤：%s", "电音钉");
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Gift_page, {
      id: 1
    });
    $paymentSystem["default"].getGoodsLocalPrice(this.dict.money0, "remove_ads");
    $paymentSystem["default"].getGoodsLocalPrice(this.dict.money1, "remove_ads_pack");
  };

  e.prototype.noBtn = function () {
    if (window.hideIsNeedInsert) {
      window.hideIsNeedInsert = !1;
      $platformManager.Platform.showInsert();
    }

    $popupManager["default"].hide();
  };

  e.prototype.noADBtn = function () {
    $paymentSystem["default"].clickBuy("remove_ads");
  };

  e.prototype.noADBtn1 = function () {
    $paymentSystem["default"].clickBuy("remove_ads_pack");
  };

  __decorate([m([cc.SpriteFrame])], e.prototype, "bgSF", void 0);

  __decorate([m([cc.SpriteFrame])], e.prototype, "iconSF", void 0);

  __decorate([m([cc.SpriteFrame])], e.prototype, "bg2SF", void 0);

  return __decorate([p], e);
}($uIBase["default"]);

exports["default"] = g;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL05vQUQuanMiXSwibmFtZXMiOlsiciIsIiR1SUJhc2UiLCJyZXF1aXJlIiwiJGxvY2FsU3RvcmFnZUNvbnN0IiwiJGxhbmd1YWdlTWFuYWdlciIsIiRwbGF0Zm9ybU1hbmFnZXIiLCIkcG9wdXBNYW5hZ2VyIiwiJHBheW1lbnRTeXN0ZW0iLCIkc2h1U2h1Q29uc3QiLCJoIiwiY2MiLCJfZGVjb3JhdG9yIiwicCIsImNjY2xhc3MiLCJtIiwicHJvcGVydHkiLCJnIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImN1cnJlbnRWSVAiLCJiZ1NGIiwiaWNvblNGIiwiYmcyU0YiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJjYWxsIiwibm9kZSIsInNldENvbnRlbnRTaXplIiwid2luU2l6ZSIsImxvY2FsU3RvcmFnZVVJRGF0YSIsImlzTm9BRCIsInVwZGF0ZUlzTm9BRCIsImJpbmQiLCJhZGRCdG5PbiIsIm5vQnRuIiwibm9BREJ0biIsIm5vQURCdG4xIiwiaW5pdFZpZXciLCJoaWRlIiwiZGljdCIsInNraW4iLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsImZvcm1hdFN0ciIsImdhbWUiLCJlbWl0IiwiU2h1U2h1Q29uc3QiLCJHaWZ0X3BhZ2UiLCJpZCIsImdldEdvb2RzTG9jYWxQcmljZSIsIm1vbmV5MCIsIm1vbmV5MSIsIndpbmRvdyIsImhpZGVJc05lZWRJbnNlcnQiLCJQbGF0Zm9ybSIsInNob3dJbnNlcnQiLCJjbGlja0J1eSIsIl9fZGVjb3JhdGUiLCJTcHJpdGVGcmFtZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXJCOztBQUNBLElBQUlDLGtCQUFrQixHQUFHRCxPQUFPLENBQUMscUJBQUQsQ0FBaEM7O0FBQ0EsSUFBSUUsZ0JBQWdCLEdBQUdGLE9B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QVAsR0FBMEIsQ0FBQyxDQUEzQjtNQUNBcEQsZ0JBQWdCLENBQUNxRCxRQUFqQixDQUEwQkMsVUFBMUI7SUFDSDs7SUFDRHJELGFBQWEsV0FBYixDQUFzQm1DLElBQXRCO0VBQ0gsQ0FORDs7RUFPQXZCLENBQUMsQ0FBQ1EsU0FBRixDQUFZWSxPQUFaLEdBQXNCLFlBQVk7SUFDOUIvQixjQUFjLFdBQWQsQ0FBdUJxRCxRQUF2QixDQUFnQyxZQUFoQztFQUNILENBRkQ7O0VBR0ExQyxDQUFDLENBQUNRLFNBQUYsQ0FBWWEsUUFBWixHQUF1QixZQUFZO0lBQy9CaEMsY0FBYyxXQUFkLENBQXVCcUQsUUFBdkIsQ0FBZ0MsaUJBQWhDO0VBQ0gsQ0FGRDs7RUFHQUMsVUFBVSxDQUFDLENBQUMvQyxDQUFDLENBQUMsQ0FBQ0osRUFBRSxDQUFDb0QsV0FBSixDQUFELENBQUYsQ0FBRCxFQUF3QjVDLENBQUMsQ0FBQ1EsU0FBMUIsRUFBcUMsTUFBckMsRUFBNkMsS0FBSyxDQUFsRCxDQUFWOztFQUNBbUMsVUFBVSxDQUFDLENBQUMvQyxDQUFDLENBQUMsQ0FBQ0osRUFBRSxDQUFDb0QsV0FBSixDQUFELENBQUYsQ0FBRCxFQUF3QjVDLENBQUMsQ0FBQ1EsU0FBMUIsRUFBcUMsUUFBckMsRUFBK0MsS0FBSyxDQUFwRCxDQUFWOztFQUNBbUMsVUFBVSxDQUFDLENBQUMvQyxDQUFDLENBQUMsQ0FBQ0osRUFBRSxDQUFDb0QsV0FBSixDQUFELENBQUYsQ0FBRCxFQUF3QjVDLENBQUMsQ0FBQ1EsU0FBMUIsRUFBcUMsT0FBckMsRUFBOEMsS0FBSyxDQUFuRCxDQUFWOztFQUNBLE9BQU9tQyxVQUFVLENBQUMsQ0FBQ2pELENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0FqRE8sQ0FpRExqQixPQUFPLFdBakRGLENBQVI7O0FBa0RBOEQsT0FBTyxXQUFQLEdBQWtCL0MsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByO1xudmFyICR1SUJhc2UgPSByZXF1aXJlKFwiLi9VSUJhc2VcIik7XG52YXIgJGxvY2FsU3RvcmFnZUNvbnN0ID0gcmVxdWlyZShcIi4vTG9jYWxTdG9yYWdlQ29uc3RcIik7XG52YXIgJGxhbmd1YWdlTWFuYWdlciA9IHJlcXVpcmUoXCIuL0xhbmd1YWdlTWFuYWdlclwiKTtcbnZhciAkcGxhdGZvcm1NYW5hZ2VyID0gcmVxdWlyZShcIi4vUGxhdGZvcm1NYW5hZ2VyXCIpO1xudmFyICRwb3B1cE1hbmFnZXIgPSByZXF1aXJlKFwiLi9Qb3B1cE1hbmFnZXJcIik7XG52YXIgJHBheW1lbnRTeXN0ZW0gPSByZXF1aXJlKFwiLi9QYXltZW50U3lzdGVtXCIpO1xudmFyICRzaHVTaHVDb25zdCA9IHJlcXVpcmUoXCIuL1NodVNodUNvbnN0XCIpO1xudmFyIGggPSBjYy5fZGVjb3JhdG9yO1xudmFyIHAgPSBoLmNjY2xhc3M7XG52YXIgbSA9IGgucHJvcGVydHk7XG52YXIgZyA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLmN1cnJlbnRWSVAgPSAwO1xuICAgICAgICBlLmJnU0YgPSBbXTtcbiAgICAgICAgZS5pY29uU0YgPSBbXTtcbiAgICAgICAgZS5iZzJTRiA9IFtdO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5wcm90b3R5cGUub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplKTtcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VVSURhdGFbJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuaXNOb0FEXSA9IHRoaXMudXBkYXRlSXNOb0FELmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJub0J0blwiLCB0aGlzLm5vQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcIm5vQURCdG5cIiwgdGhpcy5ub0FEQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcIm5vQURCdG4xXCIsIHRoaXMubm9BREJ0bjEsIHRoaXMpO1xuICAgICAgICB0aGlzLmluaXRWaWV3KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVJc05vQUQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdFZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGljdC5za2luLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJGxhbmd1YWdlTWFuYWdlci5kZWZhdWx0LmZvcm1hdFN0cihcIuiOt+W+l+earuiCpO+8miVzXCIsIFwi55S16Z+z6ZKJXCIpO1xuICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5HaWZ0X3BhZ2UsIHtcbiAgICAgICAgICAgIGlkOiAxXG4gICAgICAgIH0pO1xuICAgICAgICAkcGF5bWVudFN5c3RlbS5kZWZhdWx0LmdldEdvb2RzTG9jYWxQcmljZSh0aGlzLmRpY3QubW9uZXkwLCBcInJlbW92ZV9hZHNcIik7XG4gICAgICAgICRwYXltZW50U3lzdGVtLmRlZmF1bHQuZ2V0R29vZHNMb2NhbFByaWNlKHRoaXMuZGljdC5tb25leTEsIFwicmVtb3ZlX2Fkc19wYWNrXCIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubm9CdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuaGlkZUlzTmVlZEluc2VydCkge1xuICAgICAgICAgICAgd2luZG93LmhpZGVJc05lZWRJbnNlcnQgPSAhMTtcbiAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd0luc2VydCgpO1xuICAgICAgICB9XG4gICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5oaWRlKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5ub0FEQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkcGF5bWVudFN5c3RlbS5kZWZhdWx0LmNsaWNrQnV5KFwicmVtb3ZlX2Fkc1wiKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm5vQURCdG4xID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkcGF5bWVudFN5c3RlbS5kZWZhdWx0LmNsaWNrQnV5KFwicmVtb3ZlX2Fkc19wYWNrXCIpO1xuICAgIH07XG4gICAgX19kZWNvcmF0ZShbbShbY2MuU3ByaXRlRnJhbWVdKV0sIGUucHJvdG90eXBlLCBcImJnU0ZcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFttKFtjYy5TcHJpdGVGcmFtZV0pXSwgZS5wcm90b3R5cGUsIFwiaWNvblNGXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbbShbY2MuU3ByaXRlRnJhbWVdKV0sIGUucHJvdG90eXBlLCBcImJnMlNGXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW3BdLCBlKTtcbn0pKCR1SUJhc2UuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBnO1xuIl19