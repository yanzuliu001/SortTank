var $localStorage = require("./LocalStorage");
var o = (function () {
    function t() {
        this._showParams = {};
        this._gameParams = {
            app_name: "",
            channel: "",
            version: ""
        };
        this._userParams = {
            openid: ""
        };
        this._openidKey = "sdk_openid";
        this._userParams.openid = $localStorage.default.getItem(this._openidKey);
    }
    t.prototype.setShowParams = function (t) {
        return (this._showParams = t);
    };
    t.prototype.getShowParams = function (t) {
        if (void 0 === t) {
            t = "";
        }
        return "" === t ? this._showParams : void 0 === this._showParams[t] ? "" : this._showParams[t];
    };
    t.prototype.setGameParams = function (t) {
        t.channel = "tt_minigame";
        return (this._gameParams = t);
    };
    t.prototype.getGameParams = function (t) {
        if (void 0 === t) {
            t = "";
        }
        return "" === t ? this._gameParams : void 0 === this._gameParams[t] ? "" : this._gameParams[t];
    };
    t.prototype.setUserParams = function (t) {
        $localStorage.default.setItem(this._openidKey, void 0 === t.openid ? "" : t.openid);
        return (this._userParams = t);
    };
    t.prototype.getUserParams = function (t) {
        if (void 0 === t) {
            t = "";
        }
        return "" === t ? this._userParams : void 0 === this._userParams[t] ? "" : this._userParams[t];
    };
    return t;
})();
exports.default = new o();
