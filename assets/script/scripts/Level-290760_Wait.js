var i;
var $level_290760_WaitItem = require("./Level-290760_WaitItem");
var s = cc._decorator;
var c = s.ccclass;
var l =
    (s.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.mgr = null;
            return e;
        }
        __extends(e, t);
        e.prototype.init = function (t) {
            var e = this;
            this.mgr = t;
            this.node.children.forEach(function (t) {
                t.addComponent($level_290760_WaitItem.default).init(e);
            });
        };
        return __decorate([c], e);
    })(cc.Component));
exports.default = l;
