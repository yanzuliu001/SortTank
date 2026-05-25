"use strict";
cc._RF.push(module, '9b088stBmREzLyp2d8sDdxH', 'XMLHttpRequestUtils');
// scripts/XMLHttpRequestUtils.js

"use strict";

var $eHttp = require("./EHttp");

var a = function () {
  function t() {}

  t.get = function (t, e) {
    return __awaiter(this, void 0, Promise, function () {
      var n;
      var r;
      return __generator(this, function (o) {
        switch (o.label) {
          case 0:
            n = new XMLHttpRequest();
            r = e ? t + "?" + this.obj2String(e) : "" + t;
            return [4, this.onResponse(r, n, $eHttp.HttpMethod.get)];

          case 1:
            return [2, o.sent()];
        }
      });
    });
  };

  t.post = function (t, e, n) {
    if (void 0 === n) {
      n = $eHttp.ContentType.json;
    }

    return __awaiter(this, void 0, Promise, function () {
      var r;
      return __generator(this, function (o) {
        switch (o.label) {
          case 0:
            r = new XMLHttpRequest();
            return [4, this.onResponse(t, r, $eHttp.HttpMethod.post, e, n)];

          case 1:
            return [2, o.sent()];
        }
      });
    });
  };

  t.obj2String = function (t) {
    var e = [];
    var n = "";

    for (var r in t) {
      e.push(r);
    }

    (e = e.sort()).forEach(function (r, o) {
      n += r + "=" + t[r] + (o == e.length - 1 ? "" : "&");
    });
    return n;
  };

  t.onResponse = function (t, e, n, r, o) {
    var a = this;
    return new Promise(function (s) {
      e.timeout = 5e3;

      e.onreadystatechange = function () {
        if (4 == e.readyState) {
          if (e.status >= 200 && e.status < 400) {
            if ("text" === e.responseType || "json" === e.responseType) {
              return s(JSON.parse(e.responseText));
            }

            s("string" == typeof e.response ? JSON.parse(e.response) : e.response);
          } else {
            s(null);
          }
        }
      };

      e.open(n, t, !0);

      if (n == $eHttp.HttpMethod.post) {
        e.setRequestHeader("Content-Type", o);

        if (o == $eHttp.ContentType.json) {
          e.setRequestHeader("Accept", o);
        }
      }

      e.onabort = function () {
        console.log("abort");
        s(null);
      };

      e.onerror = function (t) {
        console.log(t);
        s(null);
      };

      e.ontimeout = function () {
        console.log("timeout");
        s(null);
      };

      if (n == $eHttp.HttpMethod.get) {
        e.send();
      }

      if (n == $eHttp.HttpMethod.post && o == $eHttp.ContentType.form) {
        e.send(a.obj2String(r));
      }

      if (n == $eHttp.HttpMethod.post && o == $eHttp.ContentType.json) {
        e.send(JSON.stringify(r));
      }
    });
  };

  return t;
}();

exports["default"] = a;

cc._RF.pop();