"use strict";
cc._RF.push(module, '744aaCvWehP/7983o23OIIb', 'HttpConst');
// scripts/HttpConst.js

"use strict";

exports["default"] = {
  internal: {
    url: "https://game.zuiqiangyingyu.net/",
    configAPI: "common/config/info",
    getAPI: "common/game-data/get",
    getMultiAPI: "common/game-data/multi-get",
    saveAPI: "common/game-data/save",
    getWXOpenidAPI: "common/session/check_code",
    timeAPI: "common/common/time"
  },
  abroad: {
    url: "https://bms.yarkgame.com/"
  },
  area: {
    url: "https://game.zuiqiangyingyu.net/",
    getAreaAPI: "common/is/v2/is",
    rankAPI: "common/rank/list",
    incrRankAPI: "common/rank/incr-score"
  },
  zhiShang: {
    url: "https://api.328vip.com/",
    getShareAPI: "CpApi/setting/getShareConfig",
    getConfigAPI: "cpApi/setting/config",
    getConfigV2API: "cpApi/setting/configV2"
  }
};

cc._RF.pop();