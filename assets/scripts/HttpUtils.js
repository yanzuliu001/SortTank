var $eHttp = require("./EHttp");
var $httpConst = require("./HttpConst");
var $xMLHttpRequestUtils = require("./XMLHttpRequestUtils");
var a = new(function() {
    this.getTime = function(t) {
        if (void 0 === t) {
            t = {};
        }
        return Promise.resolve({
                "code": 0,
                "msg": "\u6210\u529f",
                "data": {
                    "time": Math.floor(Date.now() / 1000),
                    "date_time": "2024-12-19 22:16:10"
                }
            })
            // return $xMLHttpRequestUtils.default.get(
            //     "" + $httpConst.default.internal.url + $httpConst.default.internal.timeAPI,
            //     t
            // );
    };
    this.getMulti = function(t) {
        if (void 0 === t) {
            t = {};
        }
        return $xMLHttpRequestUtils.default.get(
            "" + $httpConst.default.internal.url + $httpConst.default.internal.getMultiAPI,
            t
        );
    };
    this.saveData = function(t) {
        if (void 0 === t) {
            t = {};
        }
        return $xMLHttpRequestUtils.default.post(
            "" + $httpConst.default.internal.url + $httpConst.default.internal.saveAPI,
            t,
            $eHttp.ContentType.form
        );
    };
})();
exports.default = a;