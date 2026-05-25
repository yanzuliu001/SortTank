
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/HttpUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '828c1W5pdxNQJ+HSWL5Oqxf', 'HttpUtils');
// scripts/HttpUtils.js

"use strict";

var $eHttp = require("./EHttp");

var $httpConst = require("./HttpConst");

var $xMLHttpRequestUtils = require("./XMLHttpRequestUtils");

var a = new function () {
  this.getTime = function (t) {
    if (void 0 === t) {
      t = {};
    }

    return Promise.resolve({
      "code": 0,
      "msg": "\u6210\u529F",
      "data": {
        "time": Math.floor(Date.now() / 1000),
        "date_time": "2024-12-19 22:16:10"
      }
    }); // return $xMLHttpRequestUtils.default.get(
    //     "" + $httpConst.default.internal.url + $httpConst.default.internal.timeAPI,
    //     t
    // );
  };

  this.getMulti = function (t) {
    if (void 0 === t) {
      t = {};
    }

    return $xMLHttpRequestUtils["default"].get("" + $httpConst["default"].internal.url + $httpConst["default"].internal.getMultiAPI, t);
  };

  this.saveData = function (t) {
    if (void 0 === t) {
      t = {};
    }

    return $xMLHttpRequestUtils["default"].post("" + $httpConst["default"].internal.url + $httpConst["default"].internal.saveAPI, t, $eHttp.ContentType.form);
  };
}();
exports["default"] = a;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0h0dHBVdGlscy5qcyJdLCJuYW1lcyI6WyIkZUh0dHAiLCJyZXF1aXJlIiwiJGh0dHBDb25zdCIsIiR4TUxIdHRwUmVxdWVzdFV0aWxzIiwiYSIsImdldFRpbWUiLCJ0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiZ2V0TXVsdGkiLCJnZXQiLCJpbnRlcm5hbCIsInVybCIsImdldE11bHRpQVBJIiwic2F2ZURhdGEiLCJwb3N0Iiwic2F2ZUFQSSIsIkNvbnRlbnRUeXBlIiwiZm9ybSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFwQjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlFLG9CQUFvQixHQUFHRixPQUFPLENBQUMsdUJBQUQsQ0FBbEM7O0FBQ0EsSUFBSUcsQ0FBQyxHQUFHLElBQUksWUFBVztFQUNuQixLQUFLQyxPQUFMLEdBQWUsVUFBU0MsQ0FBVCxFQUFZO0lBQ3ZCLElBQUksS0FBSyxDQUFMLEtBQVdBLENBQWYsRUFBa0I7TUFDZEEsQ0FBQyxHQUFHLEVBQUo7SUFDSDs7SUFDRCxPQUFPQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0I7TUFDZixRQUFRLENBRE87TUFFZixPQUFPLGNBRlE7TUFHZixRQUFRO1FBQ0osUUFBUUMsSUFBSSxDQUFDQyxLQUFMLENBQVdDLElBQUksQ0FBQ0MsR0FBTCxLQUFhLElBQXhCLENBREo7UUFFSixhQUFhO01BRlQ7SUFITyxDQUFoQixDQUFQLENBSnVCLENBWW5CO0lBQ0E7SUFDQTtJQUNBO0VBQ1AsQ0FoQkQ7O0VBaUJBLEtBQUtDLFFBQUwsR0FBZ0IsVUFBU1AsQ0FBVCxFQUFZO0lBQ3hCLElBQUksS0FBSyxDQUFMLEtBQVdBLENBQWYsRUFBa0I7TUFDZEEsQ0FBQyxHQUFHLEVBQUo7SUFDSDs7SUFDRCxPQUFPSCxvQkFBb0IsV0FBcEIsQ0FBNkJXLEdBQTdCLENBQ0gsS0FBS1osVUFBVSxXQUFWLENBQW1CYSxRQUFuQixDQUE0QkMsR0FBakMsR0FBdUNkLFVBQVUsV0FBVixDQUFtQmEsUUFBbkIsQ0FBNEJFLFdBRGhFLEVBRUhYLENBRkcsQ0FBUDtFQUlILENBUkQ7O0VBU0EsS0FBS1ksUUFBTCxHQUFnQixVQUFTWixDQUFULEVBQVk7SUFDeEIsSUFBSSxLQUFLLENBQUwsS0FBV0EsQ0FBZixFQUFrQjtNQUNkQSxDQUFDLEdBQUcsRUFBSjtJQUNIOztJQUNELE9BQU9ILG9CQUFvQixXQUFwQixDQUE2QmdCLElBQTdCLENBQ0gsS0FBS2pCLFVBQVUsV0FBVixDQUFtQmEsUUFBbkIsQ0FBNEJDLEdBQWpDLEdBQXVDZCxVQUFVLFdBQVYsQ0FBbUJhLFFBQW5CLENBQTRCSyxPQURoRSxFQUVIZCxDQUZHLEVBR0hOLE1BQU0sQ0FBQ3FCLFdBQVAsQ0FBbUJDLElBSGhCLENBQVA7RUFLSCxDQVREO0FBVUgsQ0FyQ08sRUFBUjtBQXNDQUMsT0FBTyxXQUFQLEdBQWtCbkIsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciAkZUh0dHAgPSByZXF1aXJlKFwiLi9FSHR0cFwiKTtcbnZhciAkaHR0cENvbnN0ID0gcmVxdWlyZShcIi4vSHR0cENvbnN0XCIpO1xudmFyICR4TUxIdHRwUmVxdWVzdFV0aWxzID0gcmVxdWlyZShcIi4vWE1MSHR0cFJlcXVlc3RVdGlsc1wiKTtcbnZhciBhID0gbmV3KGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2V0VGltZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgIFwiY29kZVwiOiAwLFxuICAgICAgICAgICAgICAgIFwibXNnXCI6IFwiXFx1NjIxMFxcdTUyOWZcIixcbiAgICAgICAgICAgICAgICBcImRhdGFcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInRpbWVcIjogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0ZV90aW1lXCI6IFwiMjAyNC0xMi0xOSAyMjoxNjoxMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIHJldHVybiAkeE1MSHR0cFJlcXVlc3RVdGlscy5kZWZhdWx0LmdldChcbiAgICAgICAgICAgIC8vICAgICBcIlwiICsgJGh0dHBDb25zdC5kZWZhdWx0LmludGVybmFsLnVybCArICRodHRwQ29uc3QuZGVmYXVsdC5pbnRlcm5hbC50aW1lQVBJLFxuICAgICAgICAgICAgLy8gICAgIHRcbiAgICAgICAgICAgIC8vICk7XG4gICAgfTtcbiAgICB0aGlzLmdldE11bHRpID0gZnVuY3Rpb24odCkge1xuICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICB0ID0ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICR4TUxIdHRwUmVxdWVzdFV0aWxzLmRlZmF1bHQuZ2V0KFxuICAgICAgICAgICAgXCJcIiArICRodHRwQ29uc3QuZGVmYXVsdC5pbnRlcm5hbC51cmwgKyAkaHR0cENvbnN0LmRlZmF1bHQuaW50ZXJuYWwuZ2V0TXVsdGlBUEksXG4gICAgICAgICAgICB0XG4gICAgICAgICk7XG4gICAgfTtcbiAgICB0aGlzLnNhdmVEYXRhID0gZnVuY3Rpb24odCkge1xuICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICB0ID0ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICR4TUxIdHRwUmVxdWVzdFV0aWxzLmRlZmF1bHQucG9zdChcbiAgICAgICAgICAgIFwiXCIgKyAkaHR0cENvbnN0LmRlZmF1bHQuaW50ZXJuYWwudXJsICsgJGh0dHBDb25zdC5kZWZhdWx0LmludGVybmFsLnNhdmVBUEksXG4gICAgICAgICAgICB0LFxuICAgICAgICAgICAgJGVIdHRwLkNvbnRlbnRUeXBlLmZvcm1cbiAgICAgICAgKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGE7Il19