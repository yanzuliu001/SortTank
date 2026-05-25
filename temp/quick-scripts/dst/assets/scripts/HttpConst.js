
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/HttpConst.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0h0dHBDb25zdC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiaW50ZXJuYWwiLCJ1cmwiLCJjb25maWdBUEkiLCJnZXRBUEkiLCJnZXRNdWx0aUFQSSIsInNhdmVBUEkiLCJnZXRXWE9wZW5pZEFQSSIsInRpbWVBUEkiLCJhYnJvYWQiLCJhcmVhIiwiZ2V0QXJlYUFQSSIsInJhbmtBUEkiLCJpbmNyUmFua0FQSSIsInpoaVNoYW5nIiwiZ2V0U2hhcmVBUEkiLCJnZXRDb25maWdBUEkiLCJnZXRDb25maWdWMkFQSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxXQUFQLEdBQWtCO0VBQ2RDLFFBQVEsRUFBRTtJQUNOQyxHQUFHLEVBQUUsa0NBREM7SUFFTkMsU0FBUyxFQUFFLG9CQUZMO0lBR05DLE1BQU0sRUFBRSxzQkFIRjtJQUlOQyxXQUFXLEVBQUUsNEJBSlA7SUFLTkMsT0FBTyxFQUFFLHVCQUxIO0lBTU5DLGNBQWMsRUFBRSwyQkFOVjtJQU9OQyxPQUFPLEVBQUU7RUFQSCxDQURJO0VBVWRDLE1BQU0sRUFBRTtJQUNKUCxHQUFHLEVBQUU7RUFERCxDQVZNO0VBYWRRLElBQUksRUFBRTtJQUNGUixHQUFHLEVBQUUsa0NBREg7SUFFRlMsVUFBVSxFQUFFLGlCQUZWO0lBR0ZDLE9BQU8sRUFBRSxrQkFIUDtJQUlGQyxXQUFXLEVBQUU7RUFKWCxDQWJRO0VBbUJkQyxRQUFRLEVBQUU7SUFDTlosR0FBRyxFQUFFLHlCQURDO0lBRU5hLFdBQVcsRUFBRSw4QkFGUDtJQUdOQyxZQUFZLEVBQUUsc0JBSFI7SUFJTkMsY0FBYyxFQUFFO0VBSlY7QUFuQkksQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBpbnRlcm5hbDoge1xuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9nYW1lLnp1aXFpYW5neWluZ3l1Lm5ldC9cIixcbiAgICAgICAgY29uZmlnQVBJOiBcImNvbW1vbi9jb25maWcvaW5mb1wiLFxuICAgICAgICBnZXRBUEk6IFwiY29tbW9uL2dhbWUtZGF0YS9nZXRcIixcbiAgICAgICAgZ2V0TXVsdGlBUEk6IFwiY29tbW9uL2dhbWUtZGF0YS9tdWx0aS1nZXRcIixcbiAgICAgICAgc2F2ZUFQSTogXCJjb21tb24vZ2FtZS1kYXRhL3NhdmVcIixcbiAgICAgICAgZ2V0V1hPcGVuaWRBUEk6IFwiY29tbW9uL3Nlc3Npb24vY2hlY2tfY29kZVwiLFxuICAgICAgICB0aW1lQVBJOiBcImNvbW1vbi9jb21tb24vdGltZVwiXG4gICAgfSxcbiAgICBhYnJvYWQ6IHtcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vYm1zLnlhcmtnYW1lLmNvbS9cIlxuICAgIH0sXG4gICAgYXJlYToge1xuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9nYW1lLnp1aXFpYW5neWluZ3l1Lm5ldC9cIixcbiAgICAgICAgZ2V0QXJlYUFQSTogXCJjb21tb24vaXMvdjIvaXNcIixcbiAgICAgICAgcmFua0FQSTogXCJjb21tb24vcmFuay9saXN0XCIsXG4gICAgICAgIGluY3JSYW5rQVBJOiBcImNvbW1vbi9yYW5rL2luY3Itc2NvcmVcIlxuICAgIH0sXG4gICAgemhpU2hhbmc6IHtcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLjMyOHZpcC5jb20vXCIsXG4gICAgICAgIGdldFNoYXJlQVBJOiBcIkNwQXBpL3NldHRpbmcvZ2V0U2hhcmVDb25maWdcIixcbiAgICAgICAgZ2V0Q29uZmlnQVBJOiBcImNwQXBpL3NldHRpbmcvY29uZmlnXCIsXG4gICAgICAgIGdldENvbmZpZ1YyQVBJOiBcImNwQXBpL3NldHRpbmcvY29uZmlnVjJcIlxuICAgIH1cbn07XG4iXX0=