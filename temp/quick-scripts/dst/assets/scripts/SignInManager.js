
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SignInManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2098bxGltFP5IC+VY6fSSaX', 'SignInManager');
// scripts/SignInManager.js

"use strict";

var r = new (function () {
  function t() {
    this.key = "signIn";
    this.todayIsSigned = !1;
  }

  t.prototype.init = function () {
    console.log("初始化签到系统");
    var t = this.getItem() || [new Date().getTime(), 0];
    this.setItem(t);

    if (this.isSameDay(new Date().getTime(), t[0])) {
      this.todayIsSigned = !0;
    } else {
      this.todayIsSigned = !1;
    }
  };

  t.prototype.signIn = function (t) {
    if (void 0 === t) {
      t = 1;
    }

    console.log("点击签到按钮");

    if (this.todayIsSigned) {
      return console.log("今天已经签到");
    }

    var e = this.getItem();
    e[0] = new Date().getTime();
    e[1] += 1;
    this.setItem(e);
    console.log("签到奖励");
    cc.game.emit("signInReward", t);
  };

  t.prototype.getItem = function () {
    var t = cc.sys.localStorage.getItem(this.key) || null;
    return JSON.parse(t);
  };

  t.prototype.setItem = function (t) {
    return cc.sys.localStorage.setItem(this.key, JSON.stringify(t));
  };

  t.prototype.isSameDay = function (t, e) {
    var n = new Date(t);
    var r = new Date(e);
    return n.getDate() === r.getDate() && n.getMonth() === r.getMonth() && n.getFullYear() === r.getFullYear();
  };

  return t;
}())();
exports["default"] = r;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NpZ25Jbk1hbmFnZXIuanMiXSwibmFtZXMiOlsiciIsInQiLCJrZXkiLCJ0b2RheUlzU2lnbmVkIiwicHJvdG90eXBlIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJnZXRJdGVtIiwiRGF0ZSIsImdldFRpbWUiLCJzZXRJdGVtIiwiaXNTYW1lRGF5Iiwic2lnbkluIiwiZSIsImNjIiwiZ2FtZSIsImVtaXQiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJuIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBRyxLQUFNLFlBQVk7RUFDdEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsS0FBS0MsR0FBTCxHQUFXLFFBQVg7SUFDQSxLQUFLQyxhQUFMLEdBQXFCLENBQUMsQ0FBdEI7RUFDSDs7RUFDREYsQ0FBQyxDQUFDRyxTQUFGLENBQVlDLElBQVosR0FBbUIsWUFBWTtJQUMzQkMsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtJQUNBLElBQUlOLENBQUMsR0FBRyxLQUFLTyxPQUFMLE1BQWtCLENBQUMsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQUQsRUFBdUIsQ0FBdkIsQ0FBMUI7SUFDQSxLQUFLQyxPQUFMLENBQWFWLENBQWI7O0lBQ0EsSUFBSSxLQUFLVyxTQUFMLENBQWUsSUFBSUgsSUFBSixHQUFXQyxPQUFYLEVBQWYsRUFBcUNULENBQUMsQ0FBQyxDQUFELENBQXRDLENBQUosRUFBZ0Q7TUFDNUMsS0FBS0UsYUFBTCxHQUFxQixDQUFDLENBQXRCO0lBQ0gsQ0FGRCxNQUVPO01BQ0gsS0FBS0EsYUFBTCxHQUFxQixDQUFDLENBQXRCO0lBQ0g7RUFDSixDQVREOztFQVVBRixDQUFDLENBQUNHLFNBQUYsQ0FBWVMsTUFBWixHQUFxQixVQUFVWixDQUFWLEVBQWE7SUFDOUIsSUFBSSxLQUFLLENBQUwsS0FBV0EsQ0FBZixFQUFrQjtNQUNkQSxDQUFDLEdBQUcsQ0FBSjtJQUNIOztJQUNESyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaOztJQUNBLElBQUksS0FBS0osYUFBVCxFQUF3QjtNQUNwQixPQUFPRyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLENBQVA7SUFDSDs7SUFDRCxJQUFJTyxDQUFDLEdBQUcsS0FBS04sT0FBTCxFQUFSO0lBQ0FNLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBTyxJQUFJTCxJQUFKLEdBQVdDLE9BQVgsRUFBUDtJQUNBSSxDQUFDLENBQUMsQ0FBRCxDQUFELElBQVEsQ0FBUjtJQUNBLEtBQUtILE9BQUwsQ0FBYUcsQ0FBYjtJQUNBUixPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0lBQ0FRLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRQyxJQUFSLENBQWEsY0FBYixFQUE2QmhCLENBQTdCO0VBQ0gsQ0FkRDs7RUFlQUEsQ0FBQyxDQUFDRyxTQUFGLENBQVlJLE9BQVosR0FBc0IsWUFBWTtJQUM5QixJQUFJUCxDQUFDLEdBQUdjLEVBQUUsQ0FBQ0csR0FBSCxDQUFPQyxZQUFQLENBQW9CWCxPQUFwQixDQUE0QixLQUFLTixHQUFqQyxLQUF5QyxJQUFqRDtJQUNBLE9BQU9rQixJQUFJLENBQUNDLEtBQUwsQ0FBV3BCLENBQVgsQ0FBUDtFQUNILENBSEQ7O0VBSUFBLENBQUMsQ0FBQ0csU0FBRixDQUFZTyxPQUFaLEdBQXNCLFVBQVVWLENBQVYsRUFBYTtJQUMvQixPQUFPYyxFQUFFLENBQUNHLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQlIsT0FBcEIsQ0FBNEIsS0FBS1QsR0FBakMsRUFBc0NrQixJQUFJLENBQUNFLFNBQUwsQ0FBZXJCLENBQWYsQ0FBdEMsQ0FBUDtFQUNILENBRkQ7O0VBR0FBLENBQUMsQ0FBQ0csU0FBRixDQUFZUSxTQUFaLEdBQXdCLFVBQVVYLENBQVYsRUFBYWEsQ0FBYixFQUFnQjtJQUNwQyxJQUFJUyxDQUFDLEdBQUcsSUFBSWQsSUFBSixDQUFTUixDQUFULENBQVI7SUFDQSxJQUFJRCxDQUFDLEdBQUcsSUFBSVMsSUFBSixDQUFTSyxDQUFULENBQVI7SUFDQSxPQUFPUyxDQUFDLENBQUNDLE9BQUYsT0FBZ0J4QixDQUFDLENBQUN3QixPQUFGLEVBQWhCLElBQStCRCxDQUFDLENBQUNFLFFBQUYsT0FBaUJ6QixDQUFDLENBQUN5QixRQUFGLEVBQWhELElBQWdFRixDQUFDLENBQUNHLFdBQUYsT0FBb0IxQixDQUFDLENBQUMwQixXQUFGLEVBQTNGO0VBQ0gsQ0FKRDs7RUFLQSxPQUFPekIsQ0FBUDtBQUNILENBM0NZLEVBQUwsR0FBUjtBQTRDQTBCLE9BQU8sV0FBUCxHQUFrQjNCLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgciA9IG5ldyAoKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiB0KCkge1xuICAgICAgICB0aGlzLmtleSA9IFwic2lnbkluXCI7XG4gICAgICAgIHRoaXMudG9kYXlJc1NpZ25lZCA9ICExO1xuICAgIH1cbiAgICB0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuWIneWni+WMluetvuWIsOezu+e7n1wiKTtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmdldEl0ZW0oKSB8fCBbbmV3IERhdGUoKS5nZXRUaW1lKCksIDBdO1xuICAgICAgICB0aGlzLnNldEl0ZW0odCk7XG4gICAgICAgIGlmICh0aGlzLmlzU2FtZURheShuZXcgRGF0ZSgpLmdldFRpbWUoKSwgdFswXSkpIHtcbiAgICAgICAgICAgIHRoaXMudG9kYXlJc1NpZ25lZCA9ICEwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2RheUlzU2lnbmVkID0gITE7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNpZ25JbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgIHQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwi54K55Ye7562+5Yiw5oyJ6ZKuXCIpO1xuICAgICAgICBpZiAodGhpcy50b2RheUlzU2lnbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCLku4rlpKnlt7Lnu4/nrb7liLBcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGUgPSB0aGlzLmdldEl0ZW0oKTtcbiAgICAgICAgZVswXSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBlWzFdICs9IDE7XG4gICAgICAgIHRoaXMuc2V0SXRlbShlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLnrb7liLDlpZblirFcIik7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcInNpZ25JblJld2FyZFwiLCB0KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldEl0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KSB8fCBudWxsO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldEl0ZW0gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCBKU09OLnN0cmluZ2lmeSh0KSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5pc1NhbWVEYXkgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKHQpO1xuICAgICAgICB2YXIgciA9IG5ldyBEYXRlKGUpO1xuICAgICAgICByZXR1cm4gbi5nZXREYXRlKCkgPT09IHIuZ2V0RGF0ZSgpICYmIG4uZ2V0TW9udGgoKSA9PT0gci5nZXRNb250aCgpICYmIG4uZ2V0RnVsbFllYXIoKSA9PT0gci5nZXRGdWxsWWVhcigpO1xuICAgIH07XG4gICAgcmV0dXJuIHQ7XG59KSgpKSgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gcjtcbiJdfQ==