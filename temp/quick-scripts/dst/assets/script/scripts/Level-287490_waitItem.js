
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scripts/Level-287490_waitItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '25508MJl99JoKklR9LzU7Ic', 'Level-287490_waitItem');
// script/scripts/Level-287490_waitItem.js

"use strict";

var i;

var $levelConstant = require("./LevelConstant");

var $levelUtil = require("./LevelUtil");

var c = cc._decorator;
var l = c.ccclass;
var h = (c.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.mgr = null;
    e.placeBox = null;
    e.posIndex = -1;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t, e) {
    var o = this;
    this.mgr = t;
    this.posIndex = e;
    this.node.name = "wait_" + e;

    if (this.node.getChildByName("video")) {
      $levelUtil["default"].onClickEvent(this.node, function () {
        cc.game.emit($levelConstant.LEVEL_EVENT.REWARDVIDEO, function (t) {
          if (0 === t) {
            o.unlockWait();
          }
        });
      });
    }
  };

  e.prototype.unlockWait = function () {
    this.node.getChildByName("video").destroy();
  };

  return __decorate([l], e);
}(cc.Component));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2NyaXB0cy9MZXZlbC0yODc0OTBfd2FpdEl0ZW0uanMiXSwibmFtZXMiOlsiaSIsIiRsZXZlbENvbnN0YW50IiwicmVxdWlyZSIsIiRsZXZlbFV0aWwiLCJjIiwiY2MiLCJfZGVjb3JhdG9yIiwibCIsImNjY2xhc3MiLCJoIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwibWdyIiwicGxhY2VCb3giLCJwb3NJbmRleCIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsImluaXQiLCJvIiwibm9kZSIsIm5hbWUiLCJnZXRDaGlsZEJ5TmFtZSIsIm9uQ2xpY2tFdmVudCIsImdhbWUiLCJlbWl0IiwiTEVWRUxfRVZFTlQiLCJSRVdBUkRWSURFTyIsInVubG9ja1dhaXQiLCJkZXN0cm95IiwiX19kZWNvcmF0ZSIsIkNvbXBvbmVudCIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxjQUFjLEdBQUdDLE9BQU8sQ0FBQyxpQkFBRCxDQUE1Qjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlFLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLElBQ0FMLENBQUMsQ0FBQ00sUUFBRixFQUNBLFVBQVVDLENBQVYsRUFBYTtFQUNWLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csR0FBRixHQUFRLElBQVI7SUFDQUgsQ0FBQyxDQUFDSSxRQUFGLEdBQWEsSUFBYjtJQUNBSixDQUFDLENBQUNLLFFBQUYsR0FBYSxDQUFDLENBQWQ7SUFDQSxPQUFPTCxDQUFQO0VBQ0g7O0VBQ0RNLFNBQVMsQ0FBQ04sQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ08sU0FBRixDQUFZQyxJQUFaLEdBQW1CLFVBQVVULENBQVYsRUFBYUMsQ0FBYixFQUFnQjtJQUMvQixJQUFJUyxDQUFDLEdBQUcsSUFBUjtJQUNBLEtBQUtOLEdBQUwsR0FBV0osQ0FBWDtJQUNBLEtBQUtNLFFBQUwsR0FBZ0JMLENBQWhCO0lBQ0EsS0FBS1UsSUFBTCxDQUFVQyxJQUFWLEdBQWlCLFVBQVVYLENBQTNCOztJQUNBLElBQUksS0FBS1UsSUFBTCxDQUFVRSxjQUFWLENBQXlCLE9BQXpCLENBQUosRUFBdUM7TUFDbkNyQixVQUFVLFdBQVYsQ0FBbUJzQixZQUFuQixDQUFnQyxLQUFLSCxJQUFyQyxFQUEyQyxZQUFZO1FBQ25EakIsRUFBRSxDQUFDcUIsSUFBSCxDQUFRQyxJQUFSLENBQWExQixjQUFjLENBQUMyQixXQUFmLENBQTJCQyxXQUF4QyxFQUFxRCxVQUFVbEIsQ0FBVixFQUFhO1VBQzlELElBQUksTUFBTUEsQ0FBVixFQUFhO1lBQ1RVLENBQUMsQ0FBQ1MsVUFBRjtVQUNIO1FBQ0osQ0FKRDtNQUtILENBTkQ7SUFPSDtFQUNKLENBZEQ7O0VBZUFsQixDQUFDLENBQUNPLFNBQUYsQ0FBWVcsVUFBWixHQUF5QixZQUFZO0lBQ2pDLEtBQUtSLElBQUwsQ0FBVUUsY0FBVixDQUF5QixPQUF6QixFQUFrQ08sT0FBbEM7RUFDSCxDQUZEOztFQUdBLE9BQU9DLFVBQVUsQ0FBQyxDQUFDekIsQ0FBRCxDQUFELEVBQU1LLENBQU4sQ0FBakI7QUFDSCxDQTVCRCxDQTRCR1AsRUFBRSxDQUFDNEIsU0E1Qk4sQ0FGQyxDQUFMO0FBK0JBQyxPQUFPLFdBQVAsR0FBa0J6QixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgJGxldmVsQ29uc3RhbnQgPSByZXF1aXJlKFwiLi9MZXZlbENvbnN0YW50XCIpO1xudmFyICRsZXZlbFV0aWwgPSByZXF1aXJlKFwiLi9MZXZlbFV0aWxcIik7XG52YXIgYyA9IGNjLl9kZWNvcmF0b3I7XG52YXIgbCA9IGMuY2NjbGFzcztcbnZhciBoID1cbiAgICAoYy5wcm9wZXJ0eSxcbiAgICAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICAgICAgZS5tZ3IgPSBudWxsO1xuICAgICAgICAgICAgZS5wbGFjZUJveCA9IG51bGw7XG4gICAgICAgICAgICBlLnBvc0luZGV4ID0gLTE7XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgICAgIGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5tZ3IgPSB0O1xuICAgICAgICAgICAgdGhpcy5wb3NJbmRleCA9IGU7XG4gICAgICAgICAgICB0aGlzLm5vZGUubmFtZSA9IFwid2FpdF9cIiArIGU7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidmlkZW9cIikpIHtcbiAgICAgICAgICAgICAgICAkbGV2ZWxVdGlsLmRlZmF1bHQub25DbGlja0V2ZW50KHRoaXMubm9kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoJGxldmVsQ29uc3RhbnQuTEVWRUxfRVZFTlQuUkVXQVJEVklERU8sIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8udW5sb2NrV2FpdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUudW5sb2NrV2FpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZpZGVvXCIpLmRlc3Ryb3koKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW2xdLCBlKTtcbiAgICB9KShjYy5Db21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGg7XG4iXX0=