
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MemoryStorageManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e9a40fYJ0JEOqiOreD6r+Db', 'MemoryStorageManager');
// scripts/MemoryStorageManager.js

"use strict";

var r = new (function () {
  function t() {
    this.data = {};
  }

  t.prototype.init = function (t) {
    this.data = t;
  };

  t.prototype.set = function (t, e) {
    if (JSON.stringify(this.data[t]) !== JSON.stringify(e)) {
      this.data[t] = e;
      console.log("触发：memoryStorage_" + t);
      cc.game.emit("memoryStorage_" + t, e);
    }
  };

  t.prototype.get = function (t) {
    return this.data[t];
  };

  t.prototype.remove = function (t) {
    delete this.data[t];
  };

  t.prototype.clear = function () {
    this.data = {};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01lbW9yeVN0b3JhZ2VNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbInIiLCJ0IiwiZGF0YSIsInByb3RvdHlwZSIsImluaXQiLCJzZXQiLCJlIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJjYyIsImdhbWUiLCJlbWl0IiwiZ2V0IiwicmVtb3ZlIiwiY2xlYXIiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBRyxLQUFNLFlBQVk7RUFDdEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsS0FBS0MsSUFBTCxHQUFZLEVBQVo7RUFDSDs7RUFDREQsQ0FBQyxDQUFDRSxTQUFGLENBQVlDLElBQVosR0FBbUIsVUFBVUgsQ0FBVixFQUFhO0lBQzVCLEtBQUtDLElBQUwsR0FBWUQsQ0FBWjtFQUNILENBRkQ7O0VBR0FBLENBQUMsQ0FBQ0UsU0FBRixDQUFZRSxHQUFaLEdBQWtCLFVBQVVKLENBQVYsRUFBYUssQ0FBYixFQUFnQjtJQUM5QixJQUFJQyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxLQUFLTixJQUFMLENBQVVELENBQVYsQ0FBZixNQUFpQ00sSUFBSSxDQUFDQyxTQUFMLENBQWVGLENBQWYsQ0FBckMsRUFBd0Q7TUFDcEQsS0FBS0osSUFBTCxDQUFVRCxDQUFWLElBQWVLLENBQWY7TUFDQUcsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQXNCVCxDQUFsQztNQUNBVSxFQUFFLENBQUNDLElBQUgsQ0FBUUMsSUFBUixDQUFhLG1CQUFtQlosQ0FBaEMsRUFBbUNLLENBQW5DO0lBQ0g7RUFDSixDQU5EOztFQU9BTCxDQUFDLENBQUNFLFNBQUYsQ0FBWVcsR0FBWixHQUFrQixVQUFVYixDQUFWLEVBQWE7SUFDM0IsT0FBTyxLQUFLQyxJQUFMLENBQVVELENBQVYsQ0FBUDtFQUNILENBRkQ7O0VBR0FBLENBQUMsQ0FBQ0UsU0FBRixDQUFZWSxNQUFaLEdBQXFCLFVBQVVkLENBQVYsRUFBYTtJQUM5QixPQUFPLEtBQUtDLElBQUwsQ0FBVUQsQ0FBVixDQUFQO0VBQ0gsQ0FGRDs7RUFHQUEsQ0FBQyxDQUFDRSxTQUFGLENBQVlhLEtBQVosR0FBb0IsWUFBWTtJQUM1QixLQUFLZCxJQUFMLEdBQVksRUFBWjtFQUNILENBRkQ7O0VBR0EsT0FBT0QsQ0FBUDtBQUNILENBeEJZLEVBQUwsR0FBUjtBQXlCQWdCLE9BQU8sV0FBUCxHQUFrQmpCLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgciA9IG5ldyAoKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiB0KCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB9XG4gICAgdC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHQ7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhW3RdKSAhPT0gSlNPTi5zdHJpbmdpZnkoZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVt0XSA9IGU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuinpuWPke+8mm1lbW9yeVN0b3JhZ2VfXCIgKyB0KTtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcIm1lbW9yeVN0b3JhZ2VfXCIgKyB0LCBlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVt0XTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGFbdF07XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgfTtcbiAgICByZXR1cm4gdDtcbn0pKCkpKCk7XG5leHBvcnRzLmRlZmF1bHQgPSByO1xuIl19