
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ToastManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33b68u7R09F36epuHG+j3TN', 'ToastManager');
// scripts/ToastManager.js

"use strict";

var $assetManager = require("./AssetManager");

var a = new (function () {
  function t() {
    this.prefab = null;
  }

  t.prototype.show = function (t, e) {
    if (void 0 === e) {
      e = 0.8;
    }

    return __awaiter(this, void 0, void 0, function () {
      var n;
      var r;
      return __generator(this, function (o) {
        switch (o.label) {
          case 0:
            if (this.prefab) {
              return [3, 2];
            } else {
              return n = this, [4, $assetManager["default"].getRes("bundle", "prefab/Toast", cc.Prefab)];
            }

          case 1:
            n.prefab = o.sent();
            o.label = 2;

          case 2:
            r = cc.instantiate(this.prefab);
            cc.find("Canvas").addChild(r);
            r.getChildByName("text").getComponent(cc.Label).string = t;
            r.active = !0;
            r.stopAllActions();
            r.setPosition(cc.v2(0, -60));
            r.opacity = 0;
            cc.tween(r).by(0.3, {
              position: cc.v3(0, 60, 0),
              opacity: 255
            }).delay(e).by(0.3, {
              position: cc.v3(0, 60, 0),
              opacity: -255
            }).call(function () {
              r.destroy();
            }).start();
            return [2];
        }
      });
    });
  };

  return t;
}())();
exports["default"] = a;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1RvYXN0TWFuYWdlci5qcyJdLCJuYW1lcyI6WyIkYXNzZXRNYW5hZ2VyIiwicmVxdWlyZSIsImEiLCJ0IiwicHJlZmFiIiwicHJvdG90eXBlIiwic2hvdyIsImUiLCJfX2F3YWl0ZXIiLCJuIiwiciIsIl9fZ2VuZXJhdG9yIiwibyIsImxhYmVsIiwiZ2V0UmVzIiwiY2MiLCJQcmVmYWIiLCJzZW50IiwiaW5zdGFudGlhdGUiLCJmaW5kIiwiYWRkQ2hpbGQiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwiYWN0aXZlIiwic3RvcEFsbEFjdGlvbnMiLCJzZXRQb3NpdGlvbiIsInYyIiwib3BhY2l0eSIsInR3ZWVuIiwiYnkiLCJwb3NpdGlvbiIsInYzIiwiZGVsYXkiLCJjYWxsIiwiZGVzdHJveSIsInN0YXJ0IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJQyxDQUFDLEdBQUcsS0FBTSxZQUFZO0VBQ3RCLFNBQVNDLENBQVQsR0FBYTtJQUNULEtBQUtDLE1BQUwsR0FBYyxJQUFkO0VBQ0g7O0VBQ0RELENBQUMsQ0FBQ0UsU0FBRixDQUFZQyxJQUFaLEdBQW1CLFVBQVVILENBQVYsRUFBYUksQ0FBYixFQUFnQjtJQUMvQixJQUFJLEtBQUssQ0FBTCxLQUFXQSxDQUFmLEVBQWtCO01BQ2RBLENBQUMsR0FBRyxHQUFKO0lBQ0g7O0lBQ0QsT0FBT0MsU0FBUyxDQUFDLElBQUQsRUFBTyxLQUFLLENBQVosRUFBZSxLQUFLLENBQXBCLEVBQXVCLFlBQVk7TUFDL0MsSUFBSUMsQ0FBSjtNQUNBLElBQUlDLENBQUo7TUFDQSxPQUFPQyxXQUFXLENBQUMsSUFBRCxFQUFPLFVBQVVDLENBQVYsRUFBYTtRQUNsQyxRQUFRQSxDQUFDLENBQUNDLEtBQVY7VUFDSSxLQUFLLENBQUw7WUFDSSxJQUFJLEtBQUtULE1BQVQsRUFBaUI7Y0FDYixPQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBUDtZQUNILENBRkQsTUFFTztjQUNILE9BQVFLLENBQUMsR0FBRyxJQUFMLEVBQVksQ0FBQyxDQUFELEVBQUlULGFBQWEsV0FBYixDQUFzQmMsTUFBdEIsQ0FBNkIsUUFBN0IsRUFBdUMsY0FBdkMsRUFBdURDLEVBQUUsQ0FBQ0MsTUFBMUQsQ0FBSixDQUFuQjtZQUNIOztVQUNMLEtBQUssQ0FBTDtZQUNJUCxDQUFDLENBQUNMLE1BQUYsR0FBV1EsQ0FBQyxDQUFDSyxJQUFGLEVBQVg7WUFDQUwsQ0FBQyxDQUFDQyxLQUFGLEdBQVUsQ0FBVjs7VUFDSixLQUFLLENBQUw7WUFDSUgsQ0FBQyxHQUFHSyxFQUFFLENBQUNHLFdBQUgsQ0FBZSxLQUFLZCxNQUFwQixDQUFKO1lBQ0FXLEVBQUUsQ0FBQ0ksSUFBSCxDQUFRLFFBQVIsRUFBa0JDLFFBQWxCLENBQTJCVixDQUEzQjtZQUNBQSxDQUFDLENBQUNXLGNBQUYsQ0FBaUIsTUFBakIsRUFBeUJDLFlBQXpCLENBQXNDUCxFQUFFLENBQUNRLEtBQXpDLEVBQWdEQyxNQUFoRCxHQUF5RHJCLENBQXpEO1lBQ0FPLENBQUMsQ0FBQ2UsTUFBRixHQUFXLENBQUMsQ0FBWjtZQUNBZixDQUFDLENBQUNnQixjQUFGO1lBQ0FoQixDQUFDLENBQUNpQixXQUFGLENBQWNaLEVBQUUsQ0FBQ2EsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFDLEVBQVYsQ0FBZDtZQUNBbEIsQ0FBQyxDQUFDbUIsT0FBRixHQUFZLENBQVo7WUFDQWQsRUFBRSxDQUFDZSxLQUFILENBQVNwQixDQUFULEVBQ0txQixFQURMLENBQ1EsR0FEUixFQUNhO2NBQ0xDLFFBQVEsRUFBRWpCLEVBQUUsQ0FBQ2tCLEVBQUgsQ0FBTSxDQUFOLEVBQVMsRUFBVCxFQUFhLENBQWIsQ0FETDtjQUVMSixPQUFPLEVBQUU7WUFGSixDQURiLEVBS0tLLEtBTEwsQ0FLVzNCLENBTFgsRUFNS3dCLEVBTkwsQ0FNUSxHQU5SLEVBTWE7Y0FDTEMsUUFBUSxFQUFFakIsRUFBRSxDQUFDa0IsRUFBSCxDQUFNLENBQU4sRUFBUyxFQUFULEVBQWEsQ0FBYixDQURMO2NBRUxKLE9BQU8sRUFBRSxDQUFDO1lBRkwsQ0FOYixFQVVLTSxJQVZMLENBVVUsWUFBWTtjQUNkekIsQ0FBQyxDQUFDMEIsT0FBRjtZQUNILENBWkwsRUFhS0MsS0FiTDtZQWNBLE9BQU8sQ0FBQyxDQUFELENBQVA7UUFoQ1I7TUFrQ0gsQ0FuQ2lCLENBQWxCO0lBb0NILENBdkNlLENBQWhCO0VBd0NILENBNUNEOztFQTZDQSxPQUFPbEMsQ0FBUDtBQUNILENBbERZLEVBQUwsR0FBUjtBQW1EQW1DLE9BQU8sV0FBUCxHQUFrQnBDLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJGFzc2V0TWFuYWdlciA9IHJlcXVpcmUoXCIuL0Fzc2V0TWFuYWdlclwiKTtcbnZhciBhID0gbmV3ICgoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgIHRoaXMucHJlZmFiID0gbnVsbDtcbiAgICB9XG4gICAgdC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcbiAgICAgICAgICAgIGUgPSAwLjg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoby5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmVmYWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG4gPSB0aGlzKSwgWzQsICRhc3NldE1hbmFnZXIuZGVmYXVsdC5nZXRSZXMoXCJidW5kbGVcIiwgXCJwcmVmYWIvVG9hc3RcIiwgY2MuUHJlZmFiKV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG4ucHJlZmFiID0gby5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuYWRkQ2hpbGQocik7XG4gICAgICAgICAgICAgICAgICAgICAgICByLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgci5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgci5zZXRQb3NpdGlvbihjYy52MigwLCAtNjApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ieSgwLjMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYzKDAsIDYwLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnkoMC4zLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MygwLCA2MCwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC0yNTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHQ7XG59KSgpKSgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gYTtcbiJdfQ==