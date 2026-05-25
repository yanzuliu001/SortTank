
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UniversalCard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ec22Jzh6RAn4URso/Tx6Qe', 'UniversalCard');
// scripts/UniversalCard.js

"use strict";

var r;

var $uIBase = require("./UIBase");

var $localStorageConst = require("./LocalStorageConst");

var $popupManager = require("./PopupManager");

var $paymentSystem = require("./PaymentSystem");

var $shuShuConst = require("./ShuShuConst");

var f = cc._decorator;
var d = f.ccclass;
var h = (f.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.node.setContentSize(cc.winSize);
    this.localStorageUIData[$localStorageConst["default"].cardAmount] = this.updateCardAmount.bind(this);
    this.localStorageUIData[$localStorageConst["default"].starter_pack] = this.updatestarter_pack.bind(this);
    this.addBtnOn("cardBtn0", this.buyBtn.bind(this, "small_st"), this);
    this.addBtnOn("cardBtn1", this.buyBtn.bind(this, "medium_st"), this);
    this.addBtnOn("cardBtn2", this.buyBtn.bind(this, "big_st"), this);
    this.addBtnOn("cardBtn3", this.buyBtn.bind(this, "huge_st"), this);
    this.addBtnOn("cardBtn4", this.buyBtn.bind(this, "mega_st"), this);
    this.addBtnOn("cardBtn5", this.buyBtn.bind(this, "brilliant_st"), this);
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Gift_page, {
      id: 3
    });
    var e = ["small_st", "medium_st", "big_st", "huge_st", "mega_st", "brilliant_st"];

    for (var n = 0; n < this.dict.layout.children.length; n++) {
      var r = this.dict.layout.children[n].getChildByName("money");
      var o = e[n];
      $paymentSystem["default"].getGoodsLocalPrice(r, o);
    }
  };

  e.prototype.buyBtn = function (t) {
    $paymentSystem["default"].clickBuy(t);
  };

  e.prototype.updateCardAmount = function (t) {
    this.dict.cardAmount.getComponent(cc.Label).string = "" + t;
  };

  e.prototype.updatestarter_pack = function (t) {
    if (t) {
      this.dict.universalCard.y = 534.669;
    }
  };

  e.prototype.start = function () {
    t.prototype.start.call(this);
    this.addBtnOn("noBtn", this.noBtn, this);
  };

  e.prototype.noBtn = function () {
    console.log("测试");
    $popupManager["default"].hide();
  };

  return __decorate([d], e);
}($uIBase["default"]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1VuaXZlcnNhbENhcmQuanMiXSwibmFtZXMiOlsiciIsIiR1SUJhc2UiLCJyZXF1aXJlIiwiJGxvY2FsU3RvcmFnZUNvbnN0IiwiJHBvcHVwTWFuYWdlciIsIiRwYXltZW50U3lzdGVtIiwiJHNodVNodUNvbnN0IiwiZiIsImNjIiwiX2RlY29yYXRvciIsImQiLCJjY2NsYXNzIiwiaCIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uTG9hZCIsImNhbGwiLCJub2RlIiwic2V0Q29udGVudFNpemUiLCJ3aW5TaXplIiwibG9jYWxTdG9yYWdlVUlEYXRhIiwiY2FyZEFtb3VudCIsInVwZGF0ZUNhcmRBbW91bnQiLCJiaW5kIiwic3RhcnRlcl9wYWNrIiwidXBkYXRlc3RhcnRlcl9wYWNrIiwiYWRkQnRuT24iLCJidXlCdG4iLCJnYW1lIiwiZW1pdCIsIlNodVNodUNvbnN0IiwiR2lmdF9wYWdlIiwiaWQiLCJuIiwiZGljdCIsImxheW91dCIsImNoaWxkcmVuIiwibGVuZ3RoIiwiZ2V0Q2hpbGRCeU5hbWUiLCJvIiwiZ2V0R29vZHNMb2NhbFByaWNlIiwiY2xpY2tCdXkiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsInVuaXZlcnNhbENhcmQiLCJ5Iiwic3RhcnQiLCJub0J0biIsImNvbnNvbGUiLCJsb2ciLCJoaWRlIiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXJCOztBQUNBLElBQUlDLGtCQUFrQixHQUFHRCxPQUFPLENBQUMscUJBQUQsQ0FBaEM7O0FBQ0EsSUFBSUUsYUFBYSxHQUFHRixPQUFPLENBQUMsZ0JBQUQsQ0FBM0I7O0FBQ0EsSUFBSUcsY0FBYyxHQUFHSCxPQUFPLENBQUMsaUJB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InNvdXJjZXNDb250ZW50IjpbInZhciByO1xudmFyICR1SUJhc2UgPSByZXF1aXJlKFwiLi9VSUJhc2VcIik7XG52YXIgJGxvY2FsU3RvcmFnZUNvbnN0ID0gcmVxdWlyZShcIi4vTG9jYWxTdG9yYWdlQ29uc3RcIik7XG52YXIgJHBvcHVwTWFuYWdlciA9IHJlcXVpcmUoXCIuL1BvcHVwTWFuYWdlclwiKTtcbnZhciAkcGF5bWVudFN5c3RlbSA9IHJlcXVpcmUoXCIuL1BheW1lbnRTeXN0ZW1cIik7XG52YXIgJHNodVNodUNvbnN0ID0gcmVxdWlyZShcIi4vU2h1U2h1Q29uc3RcIik7XG52YXIgZiA9IGNjLl9kZWNvcmF0b3I7XG52YXIgZCA9IGYuY2NjbGFzcztcbnZhciBoID1cbiAgICAoZi5wcm9wZXJ0eSxcbiAgICAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICAgIHJldHVybiAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgX19leHRlbmRzKGUsIHQpO1xuICAgICAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LnByb3RvdHlwZS5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplKTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlVUlEYXRhWyRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LmNhcmRBbW91bnRdID0gdGhpcy51cGRhdGVDYXJkQW1vdW50LmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVVJRGF0YVskbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5zdGFydGVyX3BhY2tdID0gdGhpcy51cGRhdGVzdGFydGVyX3BhY2suYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQnRuT24oXCJjYXJkQnRuMFwiLCB0aGlzLmJ1eUJ0bi5iaW5kKHRoaXMsIFwic21hbGxfc3RcIiksIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5hZGRCdG5PbihcImNhcmRCdG4xXCIsIHRoaXMuYnV5QnRuLmJpbmQodGhpcywgXCJtZWRpdW1fc3RcIiksIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5hZGRCdG5PbihcImNhcmRCdG4yXCIsIHRoaXMuYnV5QnRuLmJpbmQodGhpcywgXCJiaWdfc3RcIiksIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5hZGRCdG5PbihcImNhcmRCdG4zXCIsIHRoaXMuYnV5QnRuLmJpbmQodGhpcywgXCJodWdlX3N0XCIpLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQnRuT24oXCJjYXJkQnRuNFwiLCB0aGlzLmJ1eUJ0bi5iaW5kKHRoaXMsIFwibWVnYV9zdFwiKSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiY2FyZEJ0bjVcIiwgdGhpcy5idXlCdG4uYmluZCh0aGlzLCBcImJyaWxsaWFudF9zdFwiKSwgdGhpcyk7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5HaWZ0X3BhZ2UsIHtcbiAgICAgICAgICAgICAgICBpZDogM1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZSA9IFtcInNtYWxsX3N0XCIsIFwibWVkaXVtX3N0XCIsIFwiYmlnX3N0XCIsIFwiaHVnZV9zdFwiLCBcIm1lZ2Ffc3RcIiwgXCJicmlsbGlhbnRfc3RcIl07XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHRoaXMuZGljdC5sYXlvdXQuY2hpbGRyZW4ubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXMuZGljdC5sYXlvdXQuY2hpbGRyZW5bbl0uZ2V0Q2hpbGRCeU5hbWUoXCJtb25leVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IGVbbl07XG4gICAgICAgICAgICAgICAgJHBheW1lbnRTeXN0ZW0uZGVmYXVsdC5nZXRHb29kc0xvY2FsUHJpY2Uociwgbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLmJ1eUJ0biA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAkcGF5bWVudFN5c3RlbS5kZWZhdWx0LmNsaWNrQnV5KHQpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS51cGRhdGVDYXJkQW1vdW50ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5jYXJkQW1vdW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIiArIHQ7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLnVwZGF0ZXN0YXJ0ZXJfcGFjayA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC51bml2ZXJzYWxDYXJkLnkgPSA1MzQuNjY5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmFkZEJ0bk9uKFwibm9CdG5cIiwgdGhpcy5ub0J0biwgdGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLm5vQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmtYvor5VcIik7XG4gICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuaGlkZSgpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX19kZWNvcmF0ZShbZF0sIGUpO1xuICAgIH0pKCR1SUJhc2UuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gaDtcbiJdfQ==