
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/EHttp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99bf5QxiqFPX5iMoWx5Nv6A', 'EHttp');
// scripts/EHttp.js

"use strict";

exports.HttpMethod = exports.ContentType = void 0;

(function (t) {
  t.text = "text/plain;charset=UTF-8";
  t.json = "application/json;charset=UTF-8";
  t.form = "application/x-www-form-urlencoded;charset=UTF-8";
})(exports.ContentType || (exports.ContentType = {}));

(function (t) {
  t.get = "GET";
  t.post = "POST";
  t.put = "PUT";
  t["delete"] = "DELETE";
})(exports.HttpMethod || (exports.HttpMethod = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0VIdHRwLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJIdHRwTWV0aG9kIiwiQ29udGVudFR5cGUiLCJ0IiwidGV4dCIsImpzb24iLCJmb3JtIiwiZ2V0IiwicG9zdCIsInB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxVQUFSLEdBQXFCRCxPQUFPLENBQUNFLFdBQVIsR0FBc0IsS0FBSyxDQUFoRDs7QUFDQSxDQUFDLFVBQVVDLENBQVYsRUFBYTtFQUNWQSxDQUFDLENBQUNDLElBQUYsR0FBUywwQkFBVDtFQUNBRCxDQUFDLENBQUNFLElBQUYsR0FBUyxnQ0FBVDtFQUNBRixDQUFDLENBQUNHLElBQUYsR0FBUyxpREFBVDtBQUNILENBSkQsRUFJR04sT0FBTyxDQUFDRSxXQUFSLEtBQXdCRixPQUFPLENBQUNFLFdBQVIsR0FBc0IsRUFBOUMsQ0FKSDs7QUFLQSxDQUFDLFVBQVVDLENBQVYsRUFBYTtFQUNWQSxDQUFDLENBQUNJLEdBQUYsR0FBUSxLQUFSO0VBQ0FKLENBQUMsQ0FBQ0ssSUFBRixHQUFTLE1BQVQ7RUFDQUwsQ0FBQyxDQUFDTSxHQUFGLEdBQVEsS0FBUjtFQUNBTixDQUFDLFVBQUQsR0FBVyxRQUFYO0FBQ0gsQ0FMRCxFQUtHSCxPQUFPLENBQUNDLFVBQVIsS0FBdUJELE9BQU8sQ0FBQ0MsVUFBUixHQUFxQixFQUE1QyxDQUxIIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLkh0dHBNZXRob2QgPSBleHBvcnRzLkNvbnRlbnRUeXBlID0gdm9pZCAwO1xuKGZ1bmN0aW9uICh0KSB7XG4gICAgdC50ZXh0ID0gXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLThcIjtcbiAgICB0Lmpzb24gPSBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwiO1xuICAgIHQuZm9ybSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLThcIjtcbn0pKGV4cG9ydHMuQ29udGVudFR5cGUgfHwgKGV4cG9ydHMuQ29udGVudFR5cGUgPSB7fSkpO1xuKGZ1bmN0aW9uICh0KSB7XG4gICAgdC5nZXQgPSBcIkdFVFwiO1xuICAgIHQucG9zdCA9IFwiUE9TVFwiO1xuICAgIHQucHV0ID0gXCJQVVRcIjtcbiAgICB0LmRlbGV0ZSA9IFwiREVMRVRFXCI7XG59KShleHBvcnRzLkh0dHBNZXRob2QgfHwgKGV4cG9ydHMuSHR0cE1ldGhvZCA9IHt9KSk7XG4iXX0=