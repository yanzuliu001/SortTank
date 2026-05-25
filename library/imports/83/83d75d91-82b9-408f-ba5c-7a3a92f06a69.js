"use strict";
cc._RF.push(module, '83d752RgrlAj7pcejqS8Gpp', 'Skin');
// scripts/Skin.js

"use strict";

var r;

var $recycleScroll = require("./RecycleScroll");

var $configConst = require("./ConfigConst");

var $eventConst = require("./EventConst");

var $configManager = require("./ConfigManager");

var $eventManager = require("./EventManager");

var $popupManager = require("./PopupManager");

var $skinItem = require("./SkinItem");

var $uIBase = require("./UIBase");

var $localStorageConst = require("./LocalStorageConst");

var $localStorageManager = require("./LocalStorageManager");

var v = cc._decorator;
var w = v.ccclass;
var _ = v.property;

var b = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.scroll = null;
    e.scroll1 = null;
    e.scroll2 = null;
    e.currentPage = 0;
    e.currentChooseID = 0;
    e.skinStateList = [];
    e.skin_sort = [];
    e.skinStateList1 = [];
    e.skinStateList2 = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.node.setContentSize(cc.winSize);
    var e = $localStorageManager["default"].get($localStorageConst["default"].SkinList) || {};

    if (e[0]) {//
    } else {
      e[0] = [0];
    }

    if (e[1]) {//
    } else {
      e[1] = [0];
    }

    var n = $localStorageManager["default"].get($localStorageConst["default"].UseSkin) || {};

    if (n[0]) {//
    } else {
      n[0] = 0;
    }

    if (n[1]) {//
    } else {
      n[1] = 0;
    }

    $localStorageManager["default"].set($localStorageConst["default"].SkinList, e);
    $localStorageManager["default"].set($localStorageConst["default"].UseSkin, n);
    this.localStorageUIData[$localStorageConst["default"].SkinList] = this.updateSkinList.bind(this);
    this.addBtnOn("noBtn", this.noBtn, this);

    for (var r = 0; r < this.dict.list.children.length; r++) {
      var o = this.dict.list.children[r];
      o.name = "" + r;
      o.on(cc.Node.EventType.TOUCH_START, this.clickColorBtn, this);
    }

    this.initView();
  };

  e.prototype.updateSkinList = function () {
    this.updateView();
  };

  e.prototype.clickColorBtn = function (t) {
    var e = t.target;
    var n = Number(e.name);

    if (n != this.currentPage) {
      this.currentPage = n;
      this.initView();
    }
  };

  e.prototype.initView = function () {
    var t = this;
    this.initBtnView();
    this.initContentView();
    this.scheduleOnce(function () {
      t.updateView();
    }, 0);
  };

  e.prototype.initBtnView = function () {
    var t = this;

    for (var e = 0; e < this.dict.list.children.length; e++) {
      var n = this.dict.list.children[e];
      n.getComponent(cc.Sprite).enabled = !1;
      n.children[1].color = cc.Color.WHITE;
      n.getChildByName("mask").active = !0;
    }

    this.scheduleOnce(function () {
      t.dict.list.children[t.currentPage].getComponent(cc.Sprite).enabled = !0;
      t.dict.list.children[t.currentPage].children[1].color = new cc.Color().fromHEX("#ae6534");
      t.dict.list.children[t.currentPage].getChildByName("mask").active = !1;
    }, 0);
  };

  e.prototype.initContentView = function () {
    this.scroll.node.active = !1;
    this.scroll1.node.active = !1;
    this.scroll2.node.active = !1;

    if (0 == this.currentPage) {
      this.scroll.node.active = !0;
    } else {
      if (1 == this.currentPage) {
        this.scroll1.node.active = !0;
      } else {
        this.scroll2.node.active = !0;
      }
    }
  };

  e.prototype.noBtn = function () {
    $popupManager["default"].hide();
  };

  e.prototype.onEnable = function () {
    $eventManager.Event.on($eventConst["default"].update_use_skin, this.updateView, this);
  };

  e.prototype.onDisable = function () {
    $eventManager.Event.off($eventConst["default"].update_use_skin, this.updateView, this);
  };

  e.prototype.updateView = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var n;
      var r = this;
      return __generator(this, function (o) {
        switch (o.label) {
          case 0:
            t = $localStorageManager["default"].get($localStorageConst["default"].SkinList) || {};
            e = $localStorageManager["default"].get($localStorageConst["default"].UseSkin) || {};
            this.currentChooseID = e[this.currentPage];
            this.skin_sort = [];
            $configManager.Config.get($configConst.ConfigConst.Skin).then(function (n) {
              r.skinStateList = new Array(n.length).fill(0);
              r.skinStateList = r.skinStateList.map(function (o, i) {
                if (t[r.currentPage].includes(n[i].id - 1)) {
                  if (e[r.currentPage] == n[i].id - 1) {
                    return $skinItem["default"].state.unlockUse;
                  } else {
                    return $skinItem["default"].state.unlockNoUse;
                  }
                }

                switch (n[i].type) {
                  case 1:
                    return $skinItem["default"].state.lockByRole;

                  case 2:
                    return $skinItem["default"].state.lockByCoin;

                  case 3:
                    return $skinItem["default"].state.lockByVideo;
                }
              });
              n.forEach(function (t, e) {
                r.skin_sort.push({
                  skinID: t.id - 1,
                  skinStateList: r.skinStateList[e]
                });
              });
              r.scroll.onItemRender = r.onItemRender.bind(r);
              r.scroll.onItemClicked = r.onItemClicked.bind(r);
              r.scroll.numItems = r.skinStateList.length;
            });
            return [4, $configManager.Config.get($configConst.ConfigConst.Dragon)];

          case 1:
            n = o.sent();
            this.skinStateList1 = new Array(n.length).fill(0);
            this.skinStateList1 = this.skinStateList1.map(function (r, o) {
              if (t[1].includes(n[o].id - 1)) {
                if (e[1] == n[o].id - 1) {
                  return $skinItem["default"].state.unlockUse;
                } else {
                  return $skinItem["default"].state.unlockNoUse;
                }
              }

              switch (n[o].type) {
                case 1:
                  return $skinItem["default"].state.lockByRole;

                case 2:
                  return $skinItem["default"].state.lockByCoin;

                case 3:
                  return $skinItem["default"].state.lockByVideo;
              }
            });
            this.scroll1.onItemRender = this.onItemRender1.bind(this);
            this.scroll1.onItemClicked = this.onItemClicked.bind(this);
            this.scroll1.numItems = this.skinStateList1.length;
            return [2];
        }
      });
    });
  };

  e.prototype.onItemRender = function (t, e) {
    var n = e.getComponent($skinItem["default"]);
    var r = {
      index: t,
      eState: this.skin_sort[t].skinStateList,
      skinID: this.skin_sort[t].skinID
    };
    n.setData(r, 0);
  };

  e.prototype.onItemRender1 = function (t, e) {
    var n = e.getComponent($skinItem["default"]);
    var r = ($skinItem["default"].state, {
      index: t,
      skinID: t,
      eState: this.skinStateList1[t]
    });
    n.setData(r, 1);
  };

  e.prototype.onItemRender2 = function () {};

  e.prototype.onItemClicked = function () {};

  __decorate([_($recycleScroll["default"])], e.prototype, "scroll", void 0);

  __decorate([_($recycleScroll["default"])], e.prototype, "scroll1", void 0);

  __decorate([_($recycleScroll["default"])], e.prototype, "scroll2", void 0);

  return __decorate([w], e);
}($uIBase["default"]);

exports["default"] = b;

cc._RF.pop();