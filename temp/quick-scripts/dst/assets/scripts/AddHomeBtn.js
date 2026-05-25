
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/AddHomeBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ceb71XE/U1Ls4IFHKqkFnL7', 'AddHomeBtn');
// scripts/AddHomeBtn.js

"use strict";

var r;

var $tipManager = require("./TipManager");

var $shuShuConst = require("./ShuShuConst");

var c = cc._decorator;
var l = c.ccclass;
var u = (c.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.node.active = !1;

    if (window.tt) {
      var t = this;
      var e = window.tt;

      if (!e.checkShortcut) {
        return console.error("## 字节用户版本过低，没有添加桌面功能");
      }

      e.checkShortcut({
        success: function success(e) {
          console.log("## 检查快捷方式  res.status： ", JSON.stringify(e.status));

          if (0 != e.status.exist && 1 != e.status.needUpdate) {//
          } else {
            t.node.active = !0;
          }
        },
        fail: function fail(t) {
          console.log("## 检查快捷方式失败", JSON.stringify(t.errMsg));
        }
      });
    }
  };

  e.prototype.btnClick_addHome = function () {
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.btn, {
      id: "011"
    });
    var t = this;
    window.tt.addShortcut({
      success: function success() {
        t.node.active = !1;
        console.log("## 添加桌面成功");
        $tipManager.Tip.show("添加桌面成功");
      },
      fail: function fail(t) {
        console.log("## 添加桌面失败", JSON.stringify(t.errMsg));
      }
    });
  };

  return __decorate([l], e);
}(cc.Component));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0FkZEhvbWVCdG4uanMiXSwibmFtZXMiOlsiciIsIiR0aXBNYW5hZ2VyIiwicmVxdWlyZSIsIiRzaHVTaHVDb25zdCIsImMiLCJjYyIsIl9kZWNvcmF0b3IiLCJsIiwiY2NjbGFzcyIsInUiLCJwcm9wZXJ0eSIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJzdGFydCIsIm5vZGUiLCJhY3RpdmUiLCJ3aW5kb3ciLCJ0dCIsImNoZWNrU2hvcnRjdXQiLCJjb25zb2xlIiwiZXJyb3IiLCJzdWNjZXNzIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImV4aXN0IiwibmVlZFVwZGF0ZSIsImZhaWwiLCJlcnJNc2ciLCJidG5DbGlja19hZGRIb21lIiwiZ2FtZSIsImVtaXQiLCJTaHVTaHVDb25zdCIsImJ0biIsImlkIiwiYWRkU2hvcnRjdXQiLCJUaXAiLCJzaG93IiwiX19kZWNvcmF0ZSIsIkNvbXBvbmVudCIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlDLFlBQVksR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUUsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0EsVUFBVUMsQ0FBVixFQUFhO0VBQ1YsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsT0FBUSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQW5EO0VBQ0g7O0VBQ0RDLFNBQVMsQ0FBQ0gsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ0ksU0FBRixDQUFZQyxLQUFaLEdBQW9CLFlBQVk7SUFDNUIsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLENBQUMsQ0FBcEI7O0lBQ0EsSUFBSUMsTUFBTSxDQUFDQyxFQUFYLEVBQWU7TUFDWCxJQUFJVixDQUFDLEdBQUcsSUFBUjtNQUNBLElBQUlDLENBQUMsR0FBR1EsTUFBTSxDQUFDQyxFQUFmOztNQUNBLElBQUksQ0FBQ1QsQ0FBQyxDQUFDVSxhQUFQLEVBQXNCO1FBQ2xCLE9BQU9DLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLHNCQUFkLENBQVA7TUFDSDs7TUFDRFosQ0FBQyxDQUFDVSxhQUFGLENBQWdCO1FBQ1pHLE9BQU8sRUFBRSxpQkFBVWIsQ0FBVixFQUFhO1VBQ2xCVyxPQUFPLENBQUNHLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q0MsSUFBSSxDQUFDQyxTQUFMLENBQWVoQixDQUFDLENBQUNpQixNQUFqQixDQUF2Qzs7VUFDQSxJQUFJLEtBQUtqQixDQUFDLENBQUNpQixNQUFGLENBQVNDLEtBQWQsSUFBdUIsS0FBS2xCLENBQUMsQ0FBQ2lCLE1BQUYsQ0FBU0UsVUFBekMsRUFBcUQsQ0FDakQ7VUFDSCxDQUZELE1BRU87WUFDSHBCLENBQUMsQ0FBQ08sSUFBRixDQUFPQyxNQUFQLEdBQWdCLENBQUMsQ0FBakI7VUFDSDtRQUNKLENBUlc7UUFTWmEsSUFBSSxFQUFFLGNBQVVyQixDQUFWLEVBQWE7VUFDZlksT0FBTyxDQUFDRyxHQUFSLENBQVksYUFBWixFQUEyQkMsSUFBSSxDQUFDQyxTQUFMLENBQWVqQixDQUFDLENBQUNzQixNQUFqQixDQUEzQjtRQUNIO01BWFcsQ0FBaEI7SUFhSDtFQUNKLENBdEJEOztFQXVCQXJCLENBQUMsQ0FBQ0ksU0FBRixDQUFZa0IsZ0JBQVosR0FBK0IsWUFBWTtJQUN2QzdCLEVBQUUsQ0FBQzhCLElBQUgsQ0FBUUMsSUFBUixDQUFhLGtCQUFiLEVBQWlDakMsWUFBWSxDQUFDa0MsV0FBYixDQUF5QkMsR0FBMUQsRUFBK0Q7TUFDM0RDLEVBQUUsRUFBRTtJQUR1RCxDQUEvRDtJQUdBLElBQUk1QixDQUFDLEdBQUcsSUFBUjtJQUNBUyxNQUFNLENBQUNDLEVBQVAsQ0FBVW1CLFdBQVYsQ0FBc0I7TUFDbEJmLE9BQU8sRUFBRSxtQkFBWTtRQUNqQmQsQ0FBQyxDQUFDTyxJQUFGLENBQU9DLE1BQVAsR0FBZ0IsQ0FBQyxDQUFqQjtRQUNBSSxPQUFPLENBQUNHLEdBQVIsQ0FBWSxXQUFaO1FBQ0F6QixXQUFXLENBQUN3QyxHQUFaLENBQWdCQyxJQUFoQixDQUFxQixRQUFyQjtNQUNILENBTGlCO01BTWxCVixJQUFJLEVBQUUsY0FBVXJCLENBQVYsRUFBYTtRQUNmWSxPQUFPLENBQUNHLEdBQVIsQ0FBWSxXQUFaLEVBQXlCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWpCLENBQUMsQ0FBQ3NCLE1BQWpCLENBQXpCO01BQ0g7SUFSaUIsQ0FBdEI7RUFVSCxDQWZEOztFQWdCQSxPQUFPVSxVQUFVLENBQUMsQ0FBQ3BDLENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0E3Q0QsQ0E2Q0dQLEVBQUUsQ0FBQ3VDLFNBN0NOLENBRkMsQ0FBTDtBQWdEQUMsT0FBTyxXQUFQLEdBQWtCcEMsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByO1xudmFyICR0aXBNYW5hZ2VyID0gcmVxdWlyZShcIi4vVGlwTWFuYWdlclwiKTtcbnZhciAkc2h1U2h1Q29uc3QgPSByZXF1aXJlKFwiLi9TaHVTaHVDb25zdFwiKTtcbnZhciBjID0gY2MuX2RlY29yYXRvcjtcbnZhciBsID0gYy5jY2NsYXNzO1xudmFyIHUgPVxuICAgIChjLnByb3BlcnR5LFxuICAgIChmdW5jdGlvbiAodCkge1xuICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgcmV0dXJuIChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgICAgIGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy50dCkge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgZSA9IHdpbmRvdy50dDtcbiAgICAgICAgICAgICAgICBpZiAoIWUuY2hlY2tTaG9ydGN1dCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihcIiMjIOWtl+iKgueUqOaIt+eJiOacrOi/h+S9ju+8jOayoeaciea3u+WKoOahjOmdouWKn+iDvVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS5jaGVja1Nob3J0Y3V0KHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMg5qOA5p+l5b+r5o235pa55byPICByZXMuc3RhdHVz77yaIFwiLCBKU09OLnN0cmluZ2lmeShlLnN0YXR1cykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgIT0gZS5zdGF0dXMuZXhpc3QgJiYgMSAhPSBlLnN0YXR1cy5uZWVkVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5ub2RlLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyDmo4Dmn6Xlv6vmjbfmlrnlvI/lpLHotKVcIiwgSlNPTi5zdHJpbmdpZnkodC5lcnJNc2cpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5idG5DbGlja19hZGRIb21lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QuYnRuLCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiMDExXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICAgICAgd2luZG93LnR0LmFkZFNob3J0Y3V0KHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHQubm9kZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyDmt7vliqDmoYzpnaLmiJDlip9cIik7XG4gICAgICAgICAgICAgICAgICAgICR0aXBNYW5hZ2VyLlRpcC5zaG93KFwi5re75Yqg5qGM6Z2i5oiQ5YqfXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyDmt7vliqDmoYzpnaLlpLHotKVcIiwgSlNPTi5zdHJpbmdpZnkodC5lcnJNc2cpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW2xdLCBlKTtcbiAgICB9KShjYy5Db21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHU7XG4iXX0=