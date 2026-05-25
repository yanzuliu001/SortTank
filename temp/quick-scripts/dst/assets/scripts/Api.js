
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Api.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9c193marbdExb2qZAnPEXpF', 'Api');
// scripts/Api.js

"use strict";

exports.serverTime = exports.getOpenid = exports.report = exports.click = void 0;

var $request = require("./Request");

var $config = require("./config");

var $md5 = require("./md5");

exports.click = function (t, e, n, i) {
  if (void 0 === e) {
    e = function e() {};
  }

  if (void 0 === n) {
    n = function n() {};
  }

  if (void 0 === i) {
    i = function i() {};
  }

  $request["default"].post({
    url: $config.DOMAIN + "/common/app-track/click",
    data: t,
    dataType: "json",
    success: e,
    fail: n,
    complete: i
  });
};

exports.report = function (t, e, n, a) {
  if (void 0 === e) {
    e = function e() {};
  }

  if (void 0 === n) {
    n = function n() {};
  }

  if (void 0 === a) {
    a = function a() {};
  }

  $request["default"].post({
    url: $config.DOMAIN + "/common/user-op/op-merge-report?trace_id=" + $md5.md5((Math.round(Date.now() / 1e3) + 1e3 * Math.random()).toString()),
    data: t,
    dataType: "json",
    success: e,
    fail: n,
    complete: a
  });
};

exports.getOpenid = function (t, e, n, i) {
  if (void 0 === e) {
    e = function e() {};
  }

  if (void 0 === n) {
    n = function n() {};
  }

  if (void 0 === i) {
    i = function i() {};
  }

  $request["default"].post({
    url: $config.DOMAIN + "/common/tt/session/sign_in",
    data: t,
    dataType: "json",
    success: e,
    fail: n,
    complete: i
  });
};

exports.serverTime = function (t, e, n) {
  if (void 0 === t) {
    t = function t() {};
  }

  if (void 0 === e) {
    e = function e() {};
  }

  if (void 0 === n) {
    n = function n() {};
  }

  $request["default"].get({
    url: $config.DOMAIN + "/common/common/time",
    dataType: "json",
    success: t,
    fail: e,
    complete: n
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0FwaS5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwic2VydmVyVGltZSIsImdldE9wZW5pZCIsInJlcG9ydCIsImNsaWNrIiwiJHJlcXVlc3QiLCJyZXF1aXJlIiwiJGNvbmZpZyIsIiRtZDUiLCJ0IiwiZSIsIm4iLCJpIiwicG9zdCIsInVybCIsIkRPTUFJTiIsImRhdGEiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJmYWlsIiwiY29tcGxldGUiLCJhIiwibWQ1IiwiTWF0aCIsInJvdW5kIiwiRGF0ZSIsIm5vdyIsInJhbmRvbSIsInRvU3RyaW5nIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLENBQUNDLFVBQVIsR0FBcUJELE9BQU8sQ0FBQ0UsU0FBUixHQUFvQkYsT0FBTyxDQUFDRyxNQUFSLEdBQWlCSCxPQUFPLENBQUNJLEtBQVIsR0FBZ0IsS0FBSyxDQUEvRTs7QUFDQSxJQUFJQyxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXRCOztBQUNBLElBQUlDLE9BQU8sR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSUUsSUFBSSxHQUFHRixPQUFPLENBQUMsT0FBRCxDQUFsQjs7QUFDQU4sT0FBTyxDQUFDSSxLQUFSLEdBQWdCLFVBQVVLLENBQVYsRUFBYUMsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCO0VBQ2xDLElBQUksS0FBSyxDQUFMLEtBQVdGLENBQWYsRUFBa0I7SUFDZEEsQ0FBQyxHQUFHLGFBQVksQ0FBRSxDQUFsQjtFQUNIOztFQUNELElBQUksS0FBSyxDQUFMLEtBQVdDLENBQWYsRUFBa0I7SUFDZEEsQ0FBQyxHQUFHLGFBQVksQ0FBRSxDQUFsQjtFQUNIOztFQUNELElBQUksS0FBSyxDQUFMLEtBQVdDLENBQWYsRUFBa0I7SUFDZEEsQ0FBQyxHQUFHLGFBQVksQ0FBRSxDQUFsQjtFQUNIOztFQUNEUCxRQUFRLFdBQVIsQ0FBaUJRLElBQWpCLENBQXNCO0lBQ2xCQyxHQUFHLEVBQUVQLE9BQU8sQ0FBQ1EsTUFBUixHQUFpQix5QkFESjtJQUVsQkMsSUFBSSxFQUFFUCxDQUZZO0lBR2xCUSxRQUFRLEVBQUUsTUFIUTtJQUlsQkMsT0FBTyxFQUFFUixDQUpTO0lBS2xCUyxJQUFJLEVBQUVSLENBTFk7SUFNbEJTLFFBQVEsRUFBRVI7RUFOUSxDQUF0QjtBQVFILENBbEJEOztBQW1CQVosT0FBTyxDQUFDRyxNQUFSLEdBQWlCLFVBQVVNLENBQVYsRUFBYUMsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUJVLENBQW5CLEVBQXNCO0VBQ25DLElBQUksS0FBSyxDQUFMLEtBQVdYLENBQWYsRUFBa0I7SUFDZEEsQ0FBQyxHQUFHLGFBQVksQ0FBRSxDQUFsQjtFQUNIOztFQUNELElBQUksS0FBSyxDQUFMLEtBQVdDLENBQWYsRUFBa0I7SUFDZEEsQ0FBQyxHQUFHLGFBQVksQ0FBRSxDQUFsQjtFQUNIOztFQUNELElBQUksS0FBSyxDQUFMLEtBQVdVLENBQWYsRUFBa0I7SUFDZEEsQ0FBQyxHQUFHLGFBQVksQ0FBRSxDQUFsQjtFQUNIOztFQUNEaEIsUUFBUSxXQUFSLENBQWlCUSxJQUFqQixDQUFzQjtJQUNsQkMsR0FBRyxFQUNDUCxPQUFPLENBQUNRLE1BQVIsR0FDQSwyQ0FEQSxHQUVBUCxJQUFJLENBQUNjLEdBQUwsQ0FBUyxDQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsSUFBSSxDQUFDQyxHQUFMLEtBQWEsR0FBeEIsSUFBK0IsTUFBTUgsSUFBSSxDQUFDSSxNQUFMLEVBQXRDLEVBQXFEQyxRQUFyRCxFQUFULENBSmM7SUFLbEJaLElBQUksRUFBRVAsQ0FMWTtJQU1sQlEsUUFBUSxFQUFFLE1BTlE7SUFPbEJDLE9BQU8sRUFBRVIsQ0FQUztJQVFsQlMsSUFBSSxFQUFFUixDQVJZO0lBU2xCUyxRQUFRLEVBQUVDO0VBVFEsQ0FBdEI7QUFXSCxDQXJCRDs7QUFzQkFyQixPQUFPLENBQUNFLFNBQVIsR0FBb0IsVUFBVU8sQ0FBVixFQUFhQyxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0I7RUFDdEMsSUFBSSxLQUFLLENBQUwsS0FBV0YsQ0FBZixFQUFrQjtJQUNkQSxDQUFDLEdBQUcsYUFBWSxDQUFFLENBQWxCO0VBQ0g7O0VBQ0QsSUFBSSxLQUFLLENBQUwsS0FBV0MsQ0FBZixFQUFrQjtJQUNkQSxDQUFDLEdBQUcsYUFBWSxDQUFFLENBQWxCO0VBQ0g7O0VBQ0QsSUFBSSxLQUFLLENBQUwsS0FBV0MsQ0FBZixFQUFrQjtJQUNkQSxDQUFDLEdBQUcsYUFBWSxDQUFFLENBQWxCO0VBQ0g7O0VBQ0RQLFFBQVEsV0FBUixDQUFpQlEsSUFBakIsQ0FBc0I7SUFDbEJDLEdBQUcsRUFBRVAsT0FBTyxDQUFDUSxNQUFSLEdBQWlCLDRCQURKO0lBRWxCQyxJQUFJLEVBQUVQLENBRlk7SUFHbEJRLFFBQVEsRUFBRSxNQUhRO0lBSWxCQyxPQUFPLEVBQUVSLENBSlM7SUFLbEJTLElBQUksRUFBRVIsQ0FMWTtJQU1sQlMsUUFBUSxFQUFFUjtFQU5RLENBQXRCO0FBUUgsQ0FsQkQ7O0FBbUJBWixPQUFPLENBQUNDLFVBQVIsR0FBcUIsVUFBVVEsQ0FBVixFQUFhQyxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQjtFQUNwQyxJQUFJLEtBQUssQ0FBTCxLQUFXRixDQUFmLEVBQWtCO0lBQ2RBLENBQUMsR0FBRyxhQUFZLENBQUUsQ0FBbEI7RUFDSDs7RUFDRCxJQUFJLEtBQUssQ0FBTCxLQUFXQyxDQUFmLEVBQWtCO0lBQ2RBLENBQUMsR0FBRyxhQUFZLENBQUUsQ0FBbEI7RUFDSDs7RUFDRCxJQUFJLEtBQUssQ0FBTCxLQUFXQyxDQUFmLEVBQWtCO0lBQ2RBLENBQUMsR0FBRyxhQUFZLENBQUUsQ0FBbEI7RUFDSDs7RUFDRE4sUUFBUSxXQUFSLENBQWlCd0IsR0FBakIsQ0FBcUI7SUFDakJmLEdBQUcsRUFBRVAsT0FBTyxDQUFDUSxNQUFSLEdBQWlCLHFCQURMO0lBRWpCRSxRQUFRLEVBQUUsTUFGTztJQUdqQkMsT0FBTyxFQUFFVCxDQUhRO0lBSWpCVSxJQUFJLEVBQUVULENBSlc7SUFLakJVLFFBQVEsRUFBRVQ7RUFMTyxDQUFyQjtBQU9ILENBakJEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLnNlcnZlclRpbWUgPSBleHBvcnRzLmdldE9wZW5pZCA9IGV4cG9ydHMucmVwb3J0ID0gZXhwb3J0cy5jbGljayA9IHZvaWQgMDtcbnZhciAkcmVxdWVzdCA9IHJlcXVpcmUoXCIuL1JlcXVlc3RcIik7XG52YXIgJGNvbmZpZyA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcbnZhciAkbWQ1ID0gcmVxdWlyZShcIi4vbWQ1XCIpO1xuZXhwb3J0cy5jbGljayA9IGZ1bmN0aW9uICh0LCBlLCBuLCBpKSB7XG4gICAgaWYgKHZvaWQgMCA9PT0gZSkge1xuICAgICAgICBlID0gZnVuY3Rpb24gKCkge307XG4gICAgfVxuICAgIGlmICh2b2lkIDAgPT09IG4pIHtcbiAgICAgICAgbiA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIH1cbiAgICBpZiAodm9pZCAwID09PSBpKSB7XG4gICAgICAgIGkgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB9XG4gICAgJHJlcXVlc3QuZGVmYXVsdC5wb3N0KHtcbiAgICAgICAgdXJsOiAkY29uZmlnLkRPTUFJTiArIFwiL2NvbW1vbi9hcHAtdHJhY2svY2xpY2tcIixcbiAgICAgICAgZGF0YTogdCxcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICBzdWNjZXNzOiBlLFxuICAgICAgICBmYWlsOiBuLFxuICAgICAgICBjb21wbGV0ZTogaVxuICAgIH0pO1xufTtcbmV4cG9ydHMucmVwb3J0ID0gZnVuY3Rpb24gKHQsIGUsIG4sIGEpIHtcbiAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgIGUgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB9XG4gICAgaWYgKHZvaWQgMCA9PT0gbikge1xuICAgICAgICBuID0gZnVuY3Rpb24gKCkge307XG4gICAgfVxuICAgIGlmICh2b2lkIDAgPT09IGEpIHtcbiAgICAgICAgYSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIH1cbiAgICAkcmVxdWVzdC5kZWZhdWx0LnBvc3Qoe1xuICAgICAgICB1cmw6XG4gICAgICAgICAgICAkY29uZmlnLkRPTUFJTiArXG4gICAgICAgICAgICBcIi9jb21tb24vdXNlci1vcC9vcC1tZXJnZS1yZXBvcnQ/dHJhY2VfaWQ9XCIgK1xuICAgICAgICAgICAgJG1kNS5tZDUoKE1hdGgucm91bmQoRGF0ZS5ub3coKSAvIDFlMykgKyAxZTMgKiBNYXRoLnJhbmRvbSgpKS50b1N0cmluZygpKSxcbiAgICAgICAgZGF0YTogdCxcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICBzdWNjZXNzOiBlLFxuICAgICAgICBmYWlsOiBuLFxuICAgICAgICBjb21wbGV0ZTogYVxuICAgIH0pO1xufTtcbmV4cG9ydHMuZ2V0T3BlbmlkID0gZnVuY3Rpb24gKHQsIGUsIG4sIGkpIHtcbiAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgIGUgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB9XG4gICAgaWYgKHZvaWQgMCA9PT0gbikge1xuICAgICAgICBuID0gZnVuY3Rpb24gKCkge307XG4gICAgfVxuICAgIGlmICh2b2lkIDAgPT09IGkpIHtcbiAgICAgICAgaSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIH1cbiAgICAkcmVxdWVzdC5kZWZhdWx0LnBvc3Qoe1xuICAgICAgICB1cmw6ICRjb25maWcuRE9NQUlOICsgXCIvY29tbW9uL3R0L3Nlc3Npb24vc2lnbl9pblwiLFxuICAgICAgICBkYXRhOiB0LFxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgIHN1Y2Nlc3M6IGUsXG4gICAgICAgIGZhaWw6IG4sXG4gICAgICAgIGNvbXBsZXRlOiBpXG4gICAgfSk7XG59O1xuZXhwb3J0cy5zZXJ2ZXJUaW1lID0gZnVuY3Rpb24gKHQsIGUsIG4pIHtcbiAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgIHQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB9XG4gICAgaWYgKHZvaWQgMCA9PT0gZSkge1xuICAgICAgICBlID0gZnVuY3Rpb24gKCkge307XG4gICAgfVxuICAgIGlmICh2b2lkIDAgPT09IG4pIHtcbiAgICAgICAgbiA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIH1cbiAgICAkcmVxdWVzdC5kZWZhdWx0LmdldCh7XG4gICAgICAgIHVybDogJGNvbmZpZy5ET01BSU4gKyBcIi9jb21tb24vY29tbW9uL3RpbWVcIixcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICBzdWNjZXNzOiB0LFxuICAgICAgICBmYWlsOiBlLFxuICAgICAgICBjb21wbGV0ZTogblxuICAgIH0pO1xufTtcbiJdfQ==