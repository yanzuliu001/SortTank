
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScreenshotUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '689d8ScQFlDWIZZjoaPqKwB', 'ScreenshotUtils');
// scripts/ScreenshotUtils.js

"use strict";

exports.Screenshot = void 0;

var r = function () {
  function t() {
    this._camera = null;
    this._texture = null;
    this._sprite = null;
  }

  t.prototype.init = function (t) {
    if (cc.sys.isBrowser) {
      var e = new cc.Node();
      e.parent = cc.director.getScene().getChildByName("Canvas");
      var n = e.addComponent(cc.Camera);
      n.enabled = !1;
      var r = cc.winSize.width;
      var o = cc.winSize.height;
      var i = cc.size(1 * r, 1 * o);
      var a = cc.v2(0, 0);
      n.zoomRatio = 1;
      var s = new cc.RenderTexture();
      s.initWithSize(i.width, i.height);
      t.setPosition(a);
      n.targetTexture = s;
      this._camera = n;
      this._texture = s;
      this._sprite = t.getComponent(cc.Sprite);
    }
  };

  t.prototype.btn_image_knife = function (t) {
    console.log("save");

    this._camera.render(void 0);

    var e = this._texture;
    var n = e.readPixels();
    var r = e.width;
    var o = e.height;
    var i = document.createElement("canvas");
    var a = i.getContext("2d");
    i.width = r;
    i.height = o;
    var s = 4 * r;

    for (var c = 0; c < o; c++) {
      var l = o - 1 - c;
      var u = a.createImageData(r, 1);
      var f = l * r * 4;

      for (var d = 0; d < s; d++) {
        u.data[d] = n[f + d];
      }

      a.putImageData(u, 0, c);
    }

    var h = i.toDataURL("image/jpeg").replace(/^data:image[^;]*/, "data:image/octet-stream");
    var p = document.createElement("a");
    p.href = h;
    p.download = t + ".png";
    p.click();
    p.remove();
  };

  return t;
}();

exports.Screenshot = new r();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NjcmVlbnNob3RVdGlscy5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiU2NyZWVuc2hvdCIsInIiLCJ0IiwiX2NhbWVyYSIsIl90ZXh0dXJlIiwiX3Nwcml0ZSIsInByb3RvdHlwZSIsImluaXQiLCJjYyIsInN5cyIsImlzQnJvd3NlciIsImUiLCJOb2RlIiwicGFyZW50IiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImdldENoaWxkQnlOYW1lIiwibiIsImFkZENvbXBvbmVudCIsIkNhbWVyYSIsImVuYWJsZWQiLCJ3aW5TaXplIiwid2lkdGgiLCJvIiwiaGVpZ2h0IiwiaSIsInNpemUiLCJhIiwidjIiLCJ6b29tUmF0aW8iLCJzIiwiUmVuZGVyVGV4dHVyZSIsImluaXRXaXRoU2l6ZSIsInNldFBvc2l0aW9uIiwidGFyZ2V0VGV4dHVyZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImJ0bl9pbWFnZV9rbmlmZSIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJyZWFkUGl4ZWxzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZ2V0Q29udGV4dCIsImMiLCJsIiwidSIsImNyZWF0ZUltYWdlRGF0YSIsImYiLCJkIiwiZGF0YSIsInB1dEltYWdlRGF0YSIsImgiLCJ0b0RhdGFVUkwiLCJyZXBsYWNlIiwicCIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLENBQUNDLFVBQVIsR0FBcUIsS0FBSyxDQUExQjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULEdBQWE7SUFDVCxLQUFLQyxPQUFMLEdBQWUsSUFBZjtJQUNBLEtBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7SUFDQSxLQUFLQyxPQUFMLEdBQWUsSUFBZjtFQUNIOztFQUNESCxDQUFDLENBQUNJLFNBQUYsQ0FBWUMsSUFBWixHQUFtQixVQUFVTCxDQUFWLEVB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QUFDLEdBQUdDLENBQUwsQ0FBYjtNQUNIOztNQUNEdkIsQ0FBQyxDQUFDeUIsWUFBRixDQUFlTCxDQUFmLEVBQWtCLENBQWxCLEVBQXFCRixDQUFyQjtJQUNIOztJQUNELElBQUlRLENBQUMsR0FBRzVCLENBQUMsQ0FBQzZCLFNBQUYsQ0FBWSxZQUFaLEVBQTBCQyxPQUExQixDQUFrQyxrQkFBbEMsRUFBc0QseUJBQXRELENBQVI7SUFDQSxJQUFJQyxDQUFDLEdBQUdkLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFSO0lBQ0FhLENBQUMsQ0FBQ0MsSUFBRixHQUFTSixDQUFUO0lBQ0FHLENBQUMsQ0FBQ0UsUUFBRixHQUFheEQsQ0FBQyxHQUFHLE1BQWpCO0lBQ0FzRCxDQUFDLENBQUNHLEtBQUY7SUFDQUgsQ0FBQyxDQUFDSSxNQUFGO0VBQ0gsQ0EzQkQ7O0VBNEJBLE9BQU8xRCxDQUFQO0FBQ0gsQ0F2RE8sRUFBUjs7QUF3REFILE9BQU8sQ0FBQ0MsVUFBUixHQUFxQixJQUFJQyxDQUFKLEVBQXJCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLlNjcmVlbnNob3QgPSB2b2lkIDA7XG52YXIgciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gdCgpIHtcbiAgICAgICAgdGhpcy5fY2FtZXJhID0gbnVsbDtcbiAgICAgICAgdGhpcy5fdGV4dHVyZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3Nwcml0ZSA9IG51bGw7XG4gICAgfVxuICAgIHQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzQnJvd3Nlcikge1xuICAgICAgICAgICAgdmFyIGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgdmFyIG4gPSBlLmFkZENvbXBvbmVudChjYy5DYW1lcmEpO1xuICAgICAgICAgICAgbi5lbmFibGVkID0gITE7XG4gICAgICAgICAgICB2YXIgciA9IGNjLndpblNpemUud2lkdGg7XG4gICAgICAgICAgICB2YXIgbyA9IGNjLndpblNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIGkgPSBjYy5zaXplKDEgKiByLCAxICogbyk7XG4gICAgICAgICAgICB2YXIgYSA9IGNjLnYyKDAsIDApO1xuICAgICAgICAgICAgbi56b29tUmF0aW8gPSAxO1xuICAgICAgICAgICAgdmFyIHMgPSBuZXcgY2MuUmVuZGVyVGV4dHVyZSgpO1xuICAgICAgICAgICAgcy5pbml0V2l0aFNpemUoaS53aWR0aCwgaS5oZWlnaHQpO1xuICAgICAgICAgICAgdC5zZXRQb3NpdGlvbihhKTtcbiAgICAgICAgICAgIG4udGFyZ2V0VGV4dHVyZSA9IHM7XG4gICAgICAgICAgICB0aGlzLl9jYW1lcmEgPSBuO1xuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZSA9IHM7XG4gICAgICAgICAgICB0aGlzLl9zcHJpdGUgPSB0LmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5idG5faW1hZ2Vfa25pZmUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNhdmVcIik7XG4gICAgICAgIHRoaXMuX2NhbWVyYS5yZW5kZXIodm9pZCAwKTtcbiAgICAgICAgdmFyIGUgPSB0aGlzLl90ZXh0dXJlO1xuICAgICAgICB2YXIgbiA9IGUucmVhZFBpeGVscygpO1xuICAgICAgICB2YXIgciA9IGUud2lkdGg7XG4gICAgICAgIHZhciBvID0gZS5oZWlnaHQ7XG4gICAgICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgdmFyIGEgPSBpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgaS53aWR0aCA9IHI7XG4gICAgICAgIGkuaGVpZ2h0ID0gbztcbiAgICAgICAgdmFyIHMgPSA0ICogcjtcbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBvOyBjKyspIHtcbiAgICAgICAgICAgIHZhciBsID0gbyAtIDEgLSBjO1xuICAgICAgICAgICAgdmFyIHUgPSBhLmNyZWF0ZUltYWdlRGF0YShyLCAxKTtcbiAgICAgICAgICAgIHZhciBmID0gbCAqIHIgKiA0O1xuICAgICAgICAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCBzOyBkKyspIHtcbiAgICAgICAgICAgICAgICB1LmRhdGFbZF0gPSBuW2YgKyBkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEucHV0SW1hZ2VEYXRhKHUsIDAsIGMpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoID0gaS50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIpLnJlcGxhY2UoL15kYXRhOmltYWdlW147XSovLCBcImRhdGE6aW1hZ2Uvb2N0ZXQtc3RyZWFtXCIpO1xuICAgICAgICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBwLmhyZWYgPSBoO1xuICAgICAgICBwLmRvd25sb2FkID0gdCArIFwiLnBuZ1wiO1xuICAgICAgICBwLmNsaWNrKCk7XG4gICAgICAgIHAucmVtb3ZlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gdDtcbn0pKCk7XG5leHBvcnRzLlNjcmVlbnNob3QgPSBuZXcgcigpO1xuIl19