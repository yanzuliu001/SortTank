"use strict";
cc._RF.push(module, 'da3d8iaoJpDxpRzaZMmhQzO', 'Report');
// scripts/Report.js

"use strict";

var $api = require("./Api");

var $function = require("./function");

var $timeManage = require("./TimeManage");

var $config = require("./config");

var s = function () {
  function t() {}

  t.prototype.click = function () {
    if (window.params.getShowParams("w_cid") || window.params.getShowParams("clickid")) {
      var t = {
        yw_track_channel: "tt_ttmn",
        yw_app_name: window.params.getGameParams("app_name"),
        yw_channel: window.params.getGameParams("channel"),
        yw_version: window.params.getGameParams("version"),
        yw_opi: window.params.getUserParams("openid")
      };
      t = Object.assign(t, window.params.getShowParams());
      window.Logger.info("## 上报监测数据", t);
      $api.click(t, function (t) {
        window.Logger.info("## 上报监测数据完成", t);
      }, function (t) {
        window.Logger.error("## 监测数据上报失败;", t);
      }, function () {});
    }
  };

  t.prototype.active = function () {
    $function.getServerTime(function (t) {
      var e = [{
        d_type: "u_op",
        t: $function.getClientTime(),
        act: "active",
        wds: "激活",
        clickid: window.params.getShowParams("clickid")
      }];
      var n = {
        app_name: window.params.getGameParams("app_name"),
        channel: window.params.getGameParams("channel"),
        version: window.params.getGameParams("version"),
        uuid: window.params.getUserParams("openid"),
        m_data: JSON.stringify(e),
        b_t: t.data.data.time
      };
      n = $function.getSign(n);
      window.Logger.info("## 上报激活", n);
      $api.report(n, function () {}, function (t) {
        window.Logger.error("## 激活上报失败;", t);
      }, function () {});
    });
  };

  t.prototype.online = function () {
    var t = $timeManage["default"].getEndClientTime();
    var e = $timeManage["default"].getOnlineTime();
    $timeManage["default"].removeStartClientTime();
    $timeManage["default"].removeEndClientTime();
    $function.getServerTime(function (n) {
      var i = [{
        d_type: "u_op",
        t: t,
        act: "time",
        wds: "时长",
        tab1: e,
        clickid: window.params.getShowParams("clickid")
      }];
      var a = {
        app_name: window.params.getGameParams("app_name"),
        channel: window.params.getGameParams("channel"),
        version: window.params.getGameParams("version"),
        uuid: window.params.getUserParams("openid"),
        m_data: JSON.stringify(i),
        b_t: n.data.data.time
      };
      a = $function.getSign(a);
      window.Logger.info("## 上报在线时长", a);
      $api.report(a, function () {}, function (t) {
        window.Logger.error("## 在线时长上报失败;", t);
      }, function () {});
    });
  };

  t.prototype.userInfo = function () {
    $function.getServerTime(function (t) {
      var e = [{
        d_type: "u",
        platform: "tt_minigame",
        t: $function.getClientTime(),
        clickid: window.params.getShowParams("clickid"),
        requestid: window.params.getShowParams("requestid"),
        os: window.params.getShowParams("os"),
        imei: window.params.getShowParams("imei"),
        android_id: window.params.getShowParams("android_id"),
        mac: window.params.getShowParams("mac"),
        idfa: window.params.getShowParams("idfa"),
        idfa_md5: window.params.getShowParams("idfa_md5"),
        d_m: window.params.getShowParams("d_m"),
        idfv: window.params.getShowParams("idfv"),
        oaid: window.params.getShowParams("oaid")
      }];
      var n = {
        app_name: window.params.getGameParams("app_name"),
        channel: window.params.getGameParams("channel"),
        version: window.params.getGameParams("version"),
        uuid: window.params.getUserParams("openid"),
        m_data: JSON.stringify(e),
        b_t: t.data.data.time
      };
      n = $function.getSign(n);
      window.Logger.info("## 上报用户信息", n);
      $api.report(n, function (t) {
        window.Logger.info("## 上报用户信息成功;", t);
      }, function (t) {
        window.Logger.error("## 上报用户信息失败;", t);
      }, function () {});
    });
  };

  t.prototype.adRequest = function (t) {
    var e = {
      d_type: "ad_ac",
      t: $function.getClientTime(),
      clickid: window.params.getShowParams("clickid"),
      act: "ad_request",
      wds: "广告请求",
      ad_t: t,
      tab1: "字节"
    };
    window.reportQueue.push(e);
    this.checkReportQueue();
  };

  t.prototype.adFill = function (t) {
    var e = {
      d_type: "ad_ac",
      t: $function.getClientTime(),
      clickid: window.params.getShowParams("clickid"),
      act: "ad_fill",
      wds: "广告填充",
      ad_t: t,
      tab1: "字节"
    };
    window.reportQueue.push(e);
    this.checkReportQueue();
  };

  t.prototype.adClick = function (t) {
    var e = {
      d_type: "ad_ac",
      t: $function.getClientTime(),
      clickid: window.params.getShowParams("clickid"),
      act: "ad_click",
      wds: "广告触发",
      ad_t: t,
      tab1: "字节"
    };
    window.reportQueue.push(e);
    this.checkReportQueue();
  };

  t.prototype.adImpression = function (t) {
    var e = {
      d_type: "ad_ac",
      t: $function.getClientTime(),
      clickid: window.params.getShowParams("clickid"),
      act: "ad_impression",
      wds: "广告展示",
      ad_t: t,
      tab1: "字节"
    };
    window.reportQueue.push(e);
    this.checkReportQueue();
  };

  t.prototype.adImpressionDone = function (t) {
    var e = {
      d_type: "ad_ac",
      t: $function.getClientTime(),
      clickid: window.params.getShowParams("clickid"),
      act: "ad_impression_done",
      wds: "广告播放完成",
      ad_t: t,
      tab1: "字节"
    };
    window.reportQueue.push(e);
    this.checkReportQueue();
  };

  t.prototype.other = function (t, e) {
    var n = {
      d_type: "u_op",
      t: $function.getClientTime(),
      clickid: window.params.getShowParams("clickid"),
      act: t,
      wds: e
    };
    window.reportQueue.push(n);
    this.checkReportQueue();
  };

  t.prototype.checkReportQueue = function (t) {
    var e = this;

    if (void 0 === t) {
      t = !0;
    }

    if (t && !$timeManage["default"].getFirstReportServerTime()) {
      $timeManage["default"].setFirstReportServerTime();
      $timeManage["default"].setFirstReportClientTime();
    }

    window.Logger.info("## 当前事件队列情况;", "事件队列总数（" + window.reportQueue.len() + "）（限制数为：" + $config.LIMIT_REPORT_COUNT + "）", "距离首个事件时长（" + ($function.getClientTime() - $timeManage["default"].getFirstReportClientTime()) + "）（限制时长为：" + $config.LIMIT_REPORT_INTERVAL + "）", $timeManage["default"].getFirstReportClientTime(), window.reportQueue.len() >= $config.LIMIT_REPORT_COUNT || $timeManage["default"].getFirstReportClientTime() && $function.getClientTime() - $timeManage["default"].getFirstReportClientTime() >= $config.LIMIT_REPORT_INTERVAL);

    if (window.reportQueue.len() > 0 && (window.reportQueue.len() >= $config.LIMIT_REPORT_COUNT || $timeManage["default"].getFirstReportClientTime() && $function.getClientTime() - $timeManage["default"].getFirstReportClientTime() >= $config.LIMIT_REPORT_INTERVAL)) {
      setTimeout(function () {
        e.reportQueue();
      }, 500);
    }
  };

  t.prototype.reportQueue = function (t) {
    if (void 0 === t) {
      t = 0;
    }

    if (!(Object.keys(window.params.getGameParams()).length <= 0) && window.params.getUserParams("openid")) {
      var e = window.reportQueue.range(0, 0 === t ? window.reportQueue.len() : t);
      var n = {
        app_name: window.params.getGameParams("app_name"),
        channel: window.params.getGameParams("channel"),
        version: window.params.getGameParams("version"),
        uuid: window.params.getUserParams("openid"),
        m_data: JSON.stringify(e),
        b_t: $timeManage["default"].getFirstReportServerTime()
      };
      $timeManage["default"].removeFirstReportServerTime();
      $timeManage["default"].removeFirstReportClientTime();
      n = $function.getSign(n);
      window.Logger.info("## 上报事件队列", n, e);
      $api.report(n, function () {}, function (t) {
        window.Logger.error("## 事件队列上报失败;", t);
      }, function () {});
    }
  };

  return t;
}();

exports["default"] = new s();

cc._RF.pop();