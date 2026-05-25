"use strict";
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