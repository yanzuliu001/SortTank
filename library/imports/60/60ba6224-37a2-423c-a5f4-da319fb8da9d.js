"use strict";
cc._RF.push(module, '60ba6IkN6JCPKX02jGfuNqd', 'Collect');
// scripts/Collect.js

"use strict";

var r;

var $configConst = require("./ConfigConst");

var $configManager = require("./ConfigManager");

var $languageManager = require("./LanguageManager");

var $popupManager = require("./PopupManager");

var $baseUICtrl = require("./BaseUICtrl");

var $dynamicScroll = require("./DynamicScroll");

var $localStorageConst = require("./LocalStorageConst");

var $localStorageManager = require("./LocalStorageManager");

var $collectItem = require("./CollectItem");

var y = cc._decorator;
var v = y.ccclass;
var w = (y.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.currentPage = 0;
    e.currentChooseID = 0;
    e.goodsType = 0;
    e.collectConfig = null;
    e.scroll = null;
    e.collectData = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.node.setContentSize(cc.winSize);
    this.initData();
    this.localStorageUIData[$localStorageConst["default"].Collect] = this.updateCollect.bind(this);
    this.initView();
  };

  e.prototype.initData = function () {
    this.collectConfig = $localStorageManager["default"].get($localStorageConst["default"].Collect) || {
      0: []
    };
    $localStorageManager["default"].set($localStorageConst["default"].Collect, this.collectConfig);
  };

  e.prototype.initView = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      return __generator(this, function (e) {
        switch (e.label) {
          case 0:
            this.scroll = this.dict.scrollView.getComponent($dynamicScroll["default"]);
            this.scroll.onItemRender = this.onItemRender.bind(this);
            this.scroll.onItemClicked = this.onItemClicked.bind(this);
            t = this;
            return [4, $configManager.Config.get($configConst.ConfigConst.Collect)];

          case 1:
            t.collectData = e.sent();
            this.scroll.numItems = this.collectData.length;
            this.dict.progress.getComponent(cc.Label).string = $languageManager["default"].formatStr("当前收集进度%s", this.collectConfig[0].length + " / " + this.collectData.length);
            return [2];
        }
      });
    });
  };

  e.prototype.onItemRender = function (t, e) {
    var n = e.getComponent($collectItem["default"]);
    var r = {
      index: t,
      goodsID: this.collectData[t].goodsID,
      goodsName: this.collectData[t].goodsName
    };
    n.setData(r);
  };

  e.prototype.onItemClicked = function () {};

  e.prototype.updateCollect = function () {};

  e.prototype.noBtn = function () {
    $popupManager["default"].hide();
  };

  return __decorate([v], e);
}($baseUICtrl["default"]));
exports["default"] = w;

cc._RF.pop();