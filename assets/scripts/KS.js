var r;
exports.KS = void 0;
var i = (function (t) {
    function e() {
        var e = t.call(this) || this;
        e.sdk = window.kwaigame;
        e._rewardAds = null;
        e._rewardAdsCb = null;
        e._insert = null;
        e._recorder = null;
        e._recordStatus = -1;
        e._recordID = null;
        e._recordTime = 0;
        console.log("快手");
        return e;
    }
    __extends(e, t);
    e.prototype.showRewardAds = function (t) {
        var e = this;
        if (this.sdk.createRewardedVideoAd) {
            if (this._config.rewardID) {
                return (
                    (this._rewardAdsCb = t),
                    this._rewardAds ||
                        ((this._rewardAds = this.sdk.createRewardedVideoAd({
                            adUnitId: this._config.rewardID
                        })),
                        this._rewardAds.onClose(function () {
                            e._rewardAdsCb(1);
                        }),
                        this._rewardAds.onReward(function () {
                            e._rewardAdsCb(0);
                        })),
                    void this._rewardAds.show({
                        success: function () {},
                        fail: function () {}
                    })
                );
            } else {
                return t(-3);
            }
        } else {
            return t(-2);
        }
    };
    e.prototype.showInsert = function () {
        var t = this;
        if (this.sdk.createInterstitialAd && this._config.insertID) {
            if (this._insert) {
                //
            } else {
                this._insert = this.sdk.createInterstitialAd({
                    adUnitId: this._config.insertID
                });
                this._insert
                    .show()
                    .then(function () {})
                    .catch(function (t) {
                        console.log("[platform] [KSPlatform] showInsert", t);
                    });
                this._insert.onClose(function () {
                    if (t._insert) {
                        t._insert.destroy();
                        t._insert = null;
                    }
                });
                this._insert.onError(function (e) {
                    console.log("[platform] [KSPlatform] showInsert", e);
                    if (e && 1003 == e.errCode && t._insert) {
                        t._insert.destroy();
                        t._insert = null;
                    }
                });
            }
        }
    };
    e.prototype.shareRecordCap = function (t) {
        var e = this;
        if (this._recorder) {
            if (-1 == this._recordStatus) {
                return t(-1);
            } else {
                if (this._recordID) {
                    return void this._recorder.publishVideo({
                        video: this._recordID,
                        callback: function (n) {
                            if (n) {
                                e._recordStatus = 1;
                                t(1);
                            } else {
                                t(0);
                            }
                        }
                    });
                } else {
                    return t(-3);
                }
            }
        } else {
            return t(-2);
        }
    };
    e.prototype.startRecordCap = function () {
        var t = this;
        if (this.sdk.createMediaRecorder) {
            if (this._recorder) {
                //
            } else {
                this._recorder = this.sdk.createMediaRecorder();
                this._recorder.onStop(function (e) {
                    t._recordID = e.videoID;
                });
                this._recorder.onError(function () {
                    t._recordStatus = -1;
                });
            }
            this._recordID = null;
            this._recorder.start();
            this._recordStatus = 1;
            this._recordTime = Math.floor(new Date().getTime() / 1e3);
        }
    };
    e.prototype.stopRecordCap = function () {
        if (this._recorder && 1 == this._recordStatus) {
            this._recorder.stop();
            if (Math.floor(new Date().getTime() / 1e3) - this._recordTime < 5) {
                this._recordStatus = -1;
            } else {
                this._recordStatus = 0;
            }
        }
    };
    e.prototype.getShareStatus = function () {
        return this._recordStatus;
    };
    return e;
})(require("./BasePlatform").BasePlatform);
exports.KS = i;
