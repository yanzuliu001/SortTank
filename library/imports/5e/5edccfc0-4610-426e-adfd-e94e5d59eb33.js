"use strict";
cc._RF.push(module, '5edcc/ARhBCbq396U5dWesz', 'index');
// scripts/index.js

"use strict";

var $report = require("./Report");

var $show = require("./Show");

var $hide = require("./Hide");

var $login = require("./Login");

var $api = require("./Api");

var $timeManage = require("./TimeManage");

var $config = require("./config");

window.wxapi = Object.assign({}, window.tt);

var $reportQueue = require("./ReportQueue");

window.reportQueue = $reportQueue["default"];

var $params = require("./Params");

window.params = $params["default"];

var $localStorage = require("./LocalStorage");

var $logger = require("./Logger");

var p = new (function () {
  function t() {
    this._initFlag = !1;
    this._showFlag = !1;
    $localStorage["default"].removeItem($timeManage["default"].lockGetFirstServerTime);
    $hide["default"].hide(function () {
      if (window.reportQueue.len() > 0) {
        window.Logger.info("## 处理退出未上报事件(共计" + window.reportQueue.len() + "条)");
        $report["default"].reportQueue();
      }

      window.Logger.info("## 退出上报在线时长，当前在线时长为：", $timeManage["default"].getOnlineTime());
      $report["default"].online();
      clearInterval(window.wonder_online);
      window.wonder_online = null;
    });
  }

  t.prototype.initParams = function (t) {
    var e = this;
    window.Logger = new $logger["default"]($config.DEFAULT_LOG_LEVEL);
    window.Logger.setLogLevel(t.log_level);
    window.Logger.info("## 初始化渠道参数：", t, window.params);
    window.params.setGameParams(t);

    if (window.tt) {
      var n = window.tt.getLaunchOptionsSync();
      window.Logger.info("## 启动参数：", n.query);
      window.params.setShowParams(n.query);

      if (n && n.group_id) {
        window.video_id = n.group_id;
      } else {
        window.video_id = "";
      }

      window.Logger.info("## 视频ID：", window.video_id);

      if (n.query) {
        if (n.query.promotionid) {
          window.ad_id = n.query.promotionid;
        } else {
          if (n.query.adid) {
            window.ad_id = n.query.adid;
          } else {
            n.query.aid && (window.ad_id = n.query.aid);
          }
        }

        if (n.query.creativeid) {
          window.creative_id = n.query.creativeid;
        }

        if (n.query.projectid) {
          window.projectid = n.query.projectid;
        }

        if (n.query.promotionid) {
          window.promotionid = n.query.promotionid;
        }

        if (n.query.mid1) {
          window.mid1 = n.query.mid1;
        }

        if (n.query.mid2) {
          window.mid2 = n.query.mid2;
        }

        if (n.query.mid3) {
          window.mid3 = n.query.mid3;
        }

        if (n.query.mid4) {
          window.mid4 = n.query.mid4;
        }

        if (n.query.mid5) {
          window.mid5 = n.query.mid5;
        }

        if (n.query.mid6) {
          window.mid6 = n.query.mid6;
        }
      }
    }

    this.initReport();
    this.setInterval();
    $show["default"].show(function () {
      e.setInterval();
    });
  };

  t.prototype.setInterval = function () {
    if (window.wonder_online) {//
    } else {
      $timeManage["default"].setStartClientTime();
      window.wonder_online = setInterval(function () {
        $timeManage["default"].setEndClientTime();
        window.Logger.info("## 在线时长心跳:", $timeManage["default"].getOnlineTime());
        $report["default"].checkReportQueue(!1);
      }, $config.ONLINE_DEFAULT_INTERVAL);
    }
  };

  t.prototype.report = function (t, e) {
    if (window.tt) {
      $report["default"].other(t, e);
    }
  };

  t.prototype.initReport = function () {
    if (window.tt) {
      if (window.params.getUserParams("openid")) {
        $login["default"].login({
          success: function success() {
            window.game_loginDone = !0;
          }
        }), window.openid = window.params.getUserParams("openid"), window.Logger.info("## 检查上次是否有异常退出导致在线时长未上报", $timeManage["default"].getOnlineTime()), $timeManage["default"].getOnlineTime() > 0 && $report["default"].online(), window.Logger.info("## 检查上次是否有异常退出导致事件队列未上报", window.reportQueue.len()), window.reportQueue.len() > 0 && $report["default"].reportQueue(), $report["default"].click(), $report["default"].active(), $report["default"].userInfo();
      } else {
        window.Logger.info("## 重新调用登录获取openid"), $login["default"].login({
          success: function success(t) {
            window.game_loginDone = !0;
            window.Logger.info("## login: ", t);
            window.Logger.info("## app_name: " + window.params.getGameParams("app_name"));
            $api.getOpenid({
              code: t.code,
              app_name: window.params.getGameParams("app_name")
            }, function (t) {
              if (0 == t.data.code) {
                window.Logger.info("## 获取openid成功 ：", t.data.data.openid);
                window.openid = t.data.data.openid;
                window.params.setUserParams({
                  openid: t.data.data.openid
                });
                $timeManage["default"].getOnlineTime() > 0 && (window.Logger.info("## 处理异常退出导致未上报的在线时长"), $report["default"].online());
                window.reportQueue.len() > 0 && (window.Logger.info("## 处理异常退出导致未上报的事件队列"), $report["default"].reportQueue());
                $report["default"].click();
                $report["default"].active();
                $report["default"].userInfo();
              } else {
                window.Logger.warn("## 获取openid失败，返回参数为：", t.data);
              }
            }, function (t) {
              window.Logger.warn("## 调用获取openid接口失败：", t);
            });
          },
          fail: function fail(t) {
            window.Logger.warn("调用wx.login失败：", t);
          }
        });
      }
    }
  };

  t.prototype.getReportList = function () {
    return window.reportQueue.getList();
  };

  t.prototype.getFirstReportServerTime = function () {
    return $timeManage["default"].getFirstReportServerTime();
  };

  t.prototype.getFirstReportClientTime = function () {
    return $timeManage["default"].getFirstReportClientTime();
  };

  t.prototype.getOnlineTime = function () {
    return $timeManage["default"].getOnlineTime();
  };

  return t;
}())();
exports["default"] = p;

cc._RF.pop();