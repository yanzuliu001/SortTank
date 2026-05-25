"use strict";
cc._RF.push(module, '41235LESE1J6oauE1d5FoIs', 'CopyRightDialog');
// scripts/CopyRightDialog.js

"use strict";

var $myXxtea = require("./myXxtea");

var o = cc.Node.EventType;

var i = function () {
  function t() {
    this._root = null;
    this._textNode = null;
    this._lblText = null;
    this.group = null;
  }

  t.prototype.init = function (t) {
    if (void 0 === t) {
      t = "default";
    }

    if (this._root) {//
    } else {
      if (t) {
        this.group = t;
      }

      this._initRoot();

      this._initTouchNode();

      this._initTextNode();
    }
  };

  t.prototype._initRoot = function () {
    var t = cc.director.getScene();
    var e = new cc.Node("CR");
    this._root = e;
    e.parent = t;
    e.zIndex = cc.macro.MAX_ZINDEX;
    e.setContentSize(cc.winSize);
    e.setPosition(cc.winSize.width >> 1, cc.winSize.height >> 1);
    cc.game.addPersistRootNode(e);

    if (this.group) {
      e.group = this.group;
    }
  };

  t.prototype._initTouchNode = function () {
    var t = this;
    var e = new cc.Node("touchNode");
    e.parent = this._root;
    e.setContentSize(200, 150);
    e.anchorY = 1;
    e.setPosition(0, cc.winSize.height >> 1);
    var n = null;
    var r = [];
    var i = [1, 1, 0, 2, 2, 0];
    e.on(o.TOUCH_START, function (t) {
      n = t.getLocation();
    }, this);

    var a = function a(e) {
      var o = e.getLocation().sub(n);

      if (o.mag() > 10) {
        if (o.x < 0) {
          r.push(1);
        } else {
          r.push(2);
        }
      } else {
        r.push(0);
      }

      var a = r.length - 1;

      if (r[a] != i[a]) {
        r = [];
      } else {
        if (r.length == i.length) {
          t.showText(t.copyrightDecrypt());
          r = [];
        }
      }

      cc.log(r);
    };

    e.on(o.TOUCH_END, a, this);
    e.on(o.TOUCH_CANCEL, a, this);

    e._touchListener.setSwallowTouches(!1);
  };

  t.prototype._initTextNode = function () {
    var t = new cc.Node("text");
    this._textNode = t;
    t.parent = this._root;
    t.setPosition(cc.v2());
    var e = new cc.Node("graphics").addComponent(cc.Graphics);
    e.node.parent = t;
    var n = new cc.Node("text").addComponent(cc.Label);
    var r = n.node;
    this._lblText = n;
    n.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
    n.node.parent = t;
    n.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
    n.verticalAlign = cc.Label.VerticalAlign.CENTER;
    r.width = 500;
    n.node.on(cc.Node.EventType.SIZE_CHANGED, function () {
      e.fillColor = cc.color(0, 0, 0, 191);
      e.clear();
      var t = cc.size(r.width + 30, r.height + 30);
      e.roundRect(-t.width >> 1, -t.height >> 1, t.width, t.height, 20);
      e.fill();
    }, this);
  };

  t.prototype.showText = function (t) {
    var e = this;

    this._textNode.setPosition(cc.v2());

    this._textNode.stopAllActions();

    this._textNode.opacity = 255;
    cc.tween(this._textNode).by(0.5, {
      y: 200
    }).delay(1.3).call(function () {
      e._textNode.opacity = 0;
    }).start();
    this._lblText.string = t;
    cc.game.emit("gesture");
  };

  t.prototype.copyrightDecrypt = function () {
    return new $myXxtea.myXxtea().xxtea_decrypt("b3ba6f3fdf954d34325b29de64289ba6e08c3b8f73517d56e115b3585508ce86dc4106f199d57538d3e865e0e02eda4c0f51cd7e31e5626f65202f7b", "sjcoejdhsffstedg");
  };

  return t;
}();

exports["default"] = i;

cc._RF.pop();