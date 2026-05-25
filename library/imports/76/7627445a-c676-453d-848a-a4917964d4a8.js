"use strict";
cc._RF.push(module, '76274RaxnZFPYSKpJF5ZNSo', 'DynamicScroll');
// scripts/DynamicScroll.js

"use strict";

var r;
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;

var l = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.itemPrefab = null;
    e.spacingX = 0;
    e.spacingY = 0;
    e.canScroll = !0;
    e.borderTop = 0;
    e.borderBot = 0;
    e.isReverse = !1;
    e._numItems = 0;

    e.onPosCallBack = function () {};

    e._content = null;
    e._items = [];
    e._itemsUidToIndex = {};
    e._updateTimer = 0;
    e._updateInterval = 0.016;
    e._lastContentPosY = 0;
    e._lastContentPosX = 0;
    e._col = 0;
    e._row = 0;
    e._spawnCount = 0;
    e._isHorizon = !1;
    e._itemList = {};
    return e;
  }

  __extends(e, t);

  Object.defineProperty(e.prototype, "numItems", {
    get: function get() {
      return this._numItems;
    },
    set: function set(t) {
      this._numItems = t;
      this.updateAllItem();
    },
    enumerable: !1,
    configurable: !0
  });

  e.prototype.onScrollingCallBack = function () {};

  e.prototype.onLoad = function () {
    var t = this.node.getComponent(cc.ScrollView);
    this._content = t.content;
    this._isHorizon = !t.vertical;

    this._initialize();

    t.enabled = this.canScroll;

    this._regScrollEvent();
  };

  e.prototype.getItemList = function () {
    return this._itemList;
  };

  e.prototype.getContent = function () {
    return this._content;
  };

  e.prototype.scrollTo = function (t, e, n) {
    this.node.getComponent(cc.ScrollView).scrollTo(t, e, n);
  };

  e.prototype.scrollToIndex = function (t, e, n) {
    if (this.numItems) {
      if (this.isReverse) {
        t = this.numItems - t;
      }

      var r = this.node.getComponent(cc.ScrollView);
      var o = cc.v2();

      if (this._isHorizon) {
        var i = t / (this.numItems - 1);
        o = cc.v2(i, 0);
      } else {
        i = (Math.ceil(t / this._col) - 1) / (this._row - 1);
        o = cc.v2(0, 1 - i);
      }

      console.log("pos================", this._content.height);
      r.scrollTo(o, e, n);
    }
  };

  e.prototype.scrollToPos = function (t) {
    var e = this.node.getComponent(cc.ScrollView);
    var n = cc.winSize.height;
    var r = 1 - (t.y - n / 2 + n * (1 - Math.abs(t.y / e.content.height))) / e.content.height * -1;
    e.scrollToPercentVertical(r, 1);
  };

  e.prototype.getContentHeightByUnify = function () {
    var t = this.itemPrefab.data;
    return this._row * (t.height + this.spacingY);
  };

  e.prototype.getPosByUnify = function (t) {
    var e = this.itemPrefab.data;
    var n = 0;
    var r = 0;

    if (this._isHorizon) {
      n = this.borderTop + e.width / 2 + t * (e.width + this.spacingX);
    } else {
      n = 0.5 * (e.width + this.spacingX) - ((this._col - t % this._col) * (e.width + this.spacingX) * 0.5 + (0.5 - e.anchorX) * e.width) + t % this._col * (e.width + this.spacingX) * 0.5;
      r = -this.borderTop - e.height * (1 - e.anchorY) - Math.floor(t / this._col) * (e.height + this.spacingY);
    }

    if (this.isReverse) {
      r = -(this._content.height + r);
    }

    return cc.v2(n, r);
  };

  e.prototype.stopAutoScroll = function () {
    this.node.getComponent(cc.ScrollView).stopAutoScroll();
  };

  e.prototype.updateItem = function (t, e) {
    if (0 != this.numItems) {
      e.active = t < this.numItems;

      if (e.active) {
        this._itemList[t] = e;

        if (this.onItemRender) {
          this.onItemRender(t, e);
        }
      }
    }
  };

  e.prototype.updateAllItem = function () {
    if (0 != this.numItems) {
      for (var t = 0; t < this._items.length; ++t) {
        var e = this._items[t];

        if (e) {
          var n = this._itemsUidToIndex[e.uuid];

          if (n || 0 === n) {
            this.updateItem(n, e);
          }
        }
      }

      if (this._isHorizon) {
        this._updateContentWidth();
      } else {
        this._updateContentHeight();
      }
    }
  };

  e.prototype.scrollComponent = function () {
    return this.node.getComponent(cc.ScrollView);
  };

  e.prototype._initialize = function () {
    if (this._isHorizon) {
      this._content.anchorX = 0;
      this._content.anchorY = 0.5;
      this._content.position = cc.v3(-this.node.width / 2, -this.node.height / 2, 0);

      this._updateContentWidth();

      this._spawnCount = Math.ceil(this.node.width / this.itemPrefab.data.width) + 2;
      console.log("初始化RecycleScroll item, 实例化数量：" + this._spawnCount + " width: " + this._content.width);
    } else {
      this._content.anchorX = 0.5;
      this._content.anchorY = 1;
      this._content.position = cc.v3();

      this._updateContentHeight();

      this._spawnCount = this._col * Math.ceil(this.node.height / this.itemPrefab.data.height) + 2 * this._col;
      console.log("初始化RecycleScroll item, 实例化数量：" + this._spawnCount);
    }

    this._createItem();
  };

  e.prototype._regScrollEvent = function () {
    this.scrollComponent().node.on("scrolling", this.onScrollingCallBack, this);
  };

  e.prototype._updateContentHeight = function () {
    if (this._content) {
      var t = this.itemPrefab.data;
      var e = this.numItems;
      this._col = Math.floor(this.node.width / (t.width + this.spacingX));
      this._row = Math.ceil(e / this._col);
      this._content.height = this.getContentHeightByUnify() + this.borderTop + this.borderBot;
    }
  };

  e.prototype._updateContentWidth = function () {
    if (this._content) {
      var t = this.itemPrefab.data;
      var e = this.numItems;
      this._row = 1;
      this._content.width = t.width * e + this.spacingX * (e - 1) + this.borderTop + this.borderBot;
    }
  };

  e.prototype._createItem = function () {
    var t = this;
    var e = 0;
    u(this._spawnCount, function (n) {
      if (cc.isValid(t.node)) {
        var r = cc.instantiate(t.itemPrefab);

        t._content.addChild(r);

        r.setPosition(t.getPosByUnify(n));
        r.active = n < t.numItems;
        t._items[n] = r;
        t._itemsUidToIndex[r.uuid] = n;
        r.on(cc.Node.EventType.TOUCH_END, function () {
          if (t.onItemClicked) {
            t.onItemClicked(t._itemsUidToIndex[r.uuid], r);
          }
        }, t);
        t.updateItem(n, r);

        if (++e == t._spawnCount) {
          t.onItemFinish();
        }
      }
    });
  };

  e.prototype.onItemFinish = function () {};

  e.prototype._getPositionInView = function (t) {
    var e = t.parent.convertToWorldSpaceAR(t.position);
    return this.node.convertToNodeSpaceAR(e);
  };

  e.prototype.update = function (t) {
    if (this._items.length == this._spawnCount && (this._updateTimer += t, !(this._updateTimer < this._updateInterval))) {
      this._updateTimer = 0;
      var e = this._items;
      var n = this.node.getComponent(cc.ScrollView);

      if (this._lastContentPosX == n.content.x && this._lastContentPosY == n.content.y) {//
      } else {
        this.onPosCallBack();
      }

      if (this._isHorizon) {
        var r = Math.floor(n.content.x) < this._lastContentPosX;

        var o = (this.itemPrefab.data.width + this.spacingX) * Math.ceil(this._items.length / this._row);

        for (var i = 0; i < e.length; ++i) {
          var a = e[i];

          var s = this._getPositionInView(a);

          if (r) {
            if (s.x < -a.width - (1 - this.node.anchorX) * this.node.width && a.x + o <= n.content.width) {
              var c = this._itemsUidToIndex[a.uuid];
              var l = 1;

              if (this.isReverse) {
                l = -1;
              }

              if ((f = c + e.length * l) >= 0) {
                a.x = a.x + o;
                this._itemList[c] = null;
                this._itemList[f] = a;
                this._itemsUidToIndex[a.uuid] = f;
                this.updateItem(f, a);
              }
            }
          } else {
            if (s.x > a.width + (1 - this.node.anchorX) * this.node.width && a.x - o >= 0) {
              c = this._itemsUidToIndex[a.uuid];
              l = 1;

              if (this.isReverse) {
                l = -1;
              }

              if ((f = c - e.length * l) >= 0) {
                a.x = a.x - o;
                this._itemList[c] = null;
                this._itemList[f] = a;
                this._itemsUidToIndex[a.uuid] = f;
                this.updateItem(f, a);
              }
            }
          }
        }

        this._lastContentPosX = n.content.x;
      } else {
        var u = Math.floor(n.content.y) <= this._lastContentPosY;

        o = (this.itemPrefab.data.height + this.spacingY) * Math.ceil(this._items.length / this._col);

        for (i = 0; i < e.length; ++i) {
          a = e[i];
          s = this._getPositionInView(a);

          if (u) {
            if (s.y < -a.height - (1 - this.node.anchorY) * this.node.height && a.y + o <= 0) {
              c = this._itemsUidToIndex[a.uuid];
              l = 1;

              if (this.isReverse) {
                l = -1;
              }

              if ((f = c - e.length * l) >= 0) {
                a.y = a.y + o;
                this._itemList[c] = null;
                this._itemList[f] = a;
                this._itemsUidToIndex[a.uuid] = f;
                this.updateItem(f, a);
              }
            }
          } else if (s.y > a.height + (1 - this.node.anchorY) * this.node.height && a.y - o >= -n.content.height) {
            var f;
            c = this._itemsUidToIndex[a.uuid];
            l = 1;

            if (this.isReverse) {
              l = -1;
            }

            if ((f = c + e.length * l) >= 0) {
              a.y = a.y - o;
              this._itemList[c] = null;
              this._itemList[f] = a;
              this._itemsUidToIndex[a.uuid] = f;
              this.updateItem(f, a);
            }
          }
        }

        this._lastContentPosY = n.content.y;
      }
    }
  };

  __decorate([c({
    type: cc.Prefab,
    tooltip: "item预制体"
  })], e.prototype, "itemPrefab", void 0);

  __decorate([c({
    type: cc.Float,
    tooltip: "item之间x间隔"
  })], e.prototype, "spacingX", void 0);

  __decorate([c({
    type: cc.Float,
    tooltip: "item之间y间隔"
  })], e.prototype, "spacingY", void 0);

  __decorate([c({
    tooltip: "是否可滑动"
  })], e.prototype, "canScroll", void 0);

  __decorate([c({
    type: cc.Float,
    tooltip: "边界填充上/左"
  })], e.prototype, "borderTop", void 0);

  __decorate([c({
    type: cc.Float,
    tooltip: "边界填充下/右"
  })], e.prototype, "borderBot", void 0);

  __decorate([c({
    tooltip: "是否反向排列"
  })], e.prototype, "isReverse", void 0);

  return __decorate([s], e);
}(cc.Component);

function u(t, e, n, r) {
  if (void 0 === n) {
    n = 1;
  }

  if (void 0 === r) {
    r = 0;
  }

  var o = t;
  var i = new Date().getTime();

  for (var a = 0; a < o && !(r >= o); ++a) {
    try {
      if (e) {
        e(r);
      }
    } catch (s) {
      cc.error(s);
    }

    r++;

    if (new Date().getTime() - i > n) {
      return void setTimeout(function () {
        u(t, e, n, r);
      }, 20);
    }
  }
}

exports["default"] = l;

cc._RF.pop();