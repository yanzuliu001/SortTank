
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/TouchSound.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b953e1zrb9M/qKTsTH7RYXQ', 'TouchSound');
// scripts/TouchSound.js

"use strict";

var r;
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;

var l = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.clickSound = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchStart, this);

    if (this.node._touchListener) {
      this.node._touchListener.setSwallowTouches(!1);
    }
  };

  e.prototype.onTouchStart = function () {
    cc.audioEngine.playEffect(this.clickSound, !1);
  };

  __decorate([c({
    type: cc.AudioClip
  })], e.prototype, "clickSound", void 0);

  return __decorate([s], e);
}(cc.Component);

exports["default"] = l;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1RvdWNoU291bmQuanMiXSwibmFtZXMiOlsiciIsImEiLCJjYyIsIl9kZWNvcmF0b3IiLCJzIiwiY2NjbGFzcyIsImMiLCJwcm9wZXJ0eSIsImwiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiY2xpY2tTb3VuZCIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uTG9hZCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJvblRvdWNoU3RhcnQiLCJfdG91Y2hMaXN0ZW5lciIsInNldFN3YWxsb3dUb3VjaGVzIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0IiwiX19kZWNvcmF0ZSIsInR5cGUiLCJBdWRpb0NsaXAiLCJDb21wb25lbnQiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNNLFFBQVY7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFVBQVVDLENBQVYsRUFBYTtFQUNsQixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLFVBQUYsR0FBZSxJQUFmO0lBQ0EsT0FBT0gsQ0FBUDtFQUNIOztFQUNESSxTQUFTLENBQUNKLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNLLFNBQUYsQ0FBWUMsTUFBWixHQUFxQixZQUFZO0lBQzdCLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhaEIsRUFBRSxDQUFDaUIsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxTQUEvQixFQUEwQyxLQUFLQyxZQUEvQyxFQUE2RCxJQUE3RDs7SUFDQSxJQUFJLEtBQUtMLElBQUwsQ0FBVU0sY0FBZCxFQUE4QjtNQUMxQixLQUFLTixJQUFMLENBQVVNLGNBQVYsQ0FBeUJDLGlCQUF6QixDQUEyQyxDQUFDLENBQTVDO0lBQ0g7RUFDSixDQUxEOztFQU1BZCxDQUFDLENBQUNLLFNBQUYsQ0FBWU8sWUFBWixHQUEyQixZQUFZO0lBQ25DcEIsRUFBRSxDQUFDdUIsV0FBSCxDQUFlQyxVQUFmLENBQTBCLEtBQUtiLFVBQS9CLEVBQTJDLENBQUMsQ0FBNUM7RUFDSCxDQUZEOztFQUdBYyxVQUFVLENBQ04sQ0FDSXJCLENBQUMsQ0FBQztJQUNFc0IsSUFBSSxFQUFFMUIsRUFBRSxDQUFDMkI7RUFEWCxDQUFELENBREwsQ0FETSxFQU1ObkIsQ0FBQyxDQUFDSyxTQU5JLEVBT04sWUFQTSxFQVFOLEtBQUssQ0FSQyxDQUFWOztFQVVBLE9BQU9ZLFVBQVUsQ0FBQyxDQUFDdkIsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQTNCTyxDQTJCTFIsRUFBRSxDQUFDNEIsU0EzQkUsQ0FBUjs7QUE0QkFDLE9BQU8sV0FBUCxHQUFrQnZCLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcjtcbnZhciBhID0gY2MuX2RlY29yYXRvcjtcbnZhciBzID0gYS5jY2NsYXNzO1xudmFyIGMgPSBhLnByb3BlcnR5O1xudmFyIGwgPSAoZnVuY3Rpb24gKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgZS5jbGlja1NvdW5kID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5fdG91Y2hMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5ub2RlLl90b3VjaExpc3RlbmVyLnNldFN3YWxsb3dUb3VjaGVzKCExKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY2xpY2tTb3VuZCwgITEpO1xuICAgIH07XG4gICAgX19kZWNvcmF0ZShcbiAgICAgICAgW1xuICAgICAgICAgICAgYyh7XG4gICAgICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBlLnByb3RvdHlwZSxcbiAgICAgICAgXCJjbGlja1NvdW5kXCIsXG4gICAgICAgIHZvaWQgMFxuICAgICk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW3NdLCBlKTtcbn0pKGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBsO1xuIl19