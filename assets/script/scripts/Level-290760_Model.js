var i = (function () {
    function t() {
        this.drinkPos = [
            [219.21, 163.03],
            [219.21, 119.03],
            [219.21, 75.03],
            [219.21, 31.03],
            [164.71, 31.03],
            [110.21, 31.03],
            [55.71, 31.03],
            [1.21, 31.03],
            [-53.29, 31.03],
            [-107.79, 31.03],
            [-162.29, 31.03],
            [-216.79, 31.03],
            [-216.79, -12.97],
            [-216.79, -56.97],
            [-162.29, -56.97],
            [-107.79, -56.97],
            [-53.29, -56.97],
            [1.21, -56.97],
            [55.71, -56.97],
            [110.21, -56.97],
            [164.71, -56.97],
            [219.21, -56.97],
            [219.21, -100.97],
            [219.21, -144.97],
            [164.71, -144.97],
            [110.21, -144.97],
            [55.71, -144.97],
            [1.21, -144.97],
            [1.21, -194.97]
        ];
        this.colors = ["红0", "紫1", "粉2", "黄3", "棕4", "绿5", "浅蓝6", "蓝7"];
        this.colorSort = [0, 3, 4, 7, 1, 2, 5, 6];
        this.boxNameMap = {
            right_4: 300,
            right_6: 600,
            right_8: 900
        };
        this.config = null;
        this.carWeight = [];
        this.extraWeight = [];
        this.waitWeight = [];
        this.sortWeight = [];
        this.drinkAmount = null;
        this.removeDrinkAmount = 0;
    }
    t.prototype.fill = function (t) {
        return new Array(t).fill(0);
    };
    t.prototype.init = function (t) {
        this.config = JSON.parse(JSON.stringify(t));
        this.colorSort = this.shuffleArray(this.colorSort);
        this.carWeight = this.fill(this.colors.length);
        this.extraWeight = this.fill(this.colors.length);
        this.waitWeight = this.fill(this.colors.length);
        this.sortWeight = this.fill(this.colors.length);
    };
    t.prototype.shuffleArray = function (t) {
        var e;
        for (var o = t.length - 1; o > 0; o--) {
            var i = Math.floor(Math.random() * (o + 1));
            e = [t[i], t[o]];
            t[o] = e[0];
            t[i] = e[1];
        }
        return t;
    };
    return t;
})();
exports.default = i;
