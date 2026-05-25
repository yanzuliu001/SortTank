
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Rewrite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8add7WBV1VP/YNHb8pdLFFP', 'Rewrite');
// scripts/Rewrite.js

"use strict";

((function () {}).prototype = cc.Button.prototype)._onTouchEnded = function (t) {
  if (this.interactable && this.enabledInHierarchy) {
    if (this._pressed) {
      cc.Component.EventHandler.emitEvents(this.clickEvents, t);
      this.node.emit("click", this);
    }

    this._pressed = !1;

    this._updateState();

    t.stopPropagation();
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1Jld3JpdGUuanMiXSwibmFtZXMiOlsicHJvdG90eXBlIiwiY2MiLCJCdXR0b24iLCJfb25Ub3VjaEVuZGVkIiwidCIsImludGVyYWN0YWJsZSIsImVuYWJsZWRJbkhpZXJhcmNoeSIsIl9wcmVzc2VkIiwiQ29tcG9uZW50IiwiRXZlbnRIYW5kbGVyIiwiZW1pdEV2ZW50cyIsImNsaWNrRXZlbnRzIiwibm9kZSIsImVtaXQiLCJfdXBkYXRlU3RhdGUiLCJzdG9wUHJvcGFnYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBQyxDQUFDLFlBQVksQ0FBRSxDQUFmLEVBQWlCQSxTQUFqQixHQUE2QkMsRUFBRSxDQUFDQyxNQUFILENBQVVGLFNBQXhDLEVBQW1ERyxhQUFuRCxHQUFtRSxVQUFVQyxDQUFWLEVBQWE7RUFDNUUsSUFBSSxLQUFLQyxZQUFMLElBQXFCLEtBQUtDLGtCQUE5QixFQUFrRDtJQUM5QyxJQUFJLEtBQUtDLFFBQVQsRUFBbUI7TUFDZk4sRUFBRSxDQUFDTyxTQUFILENBQWFDLFlBQWIsQ0FBMEJDLFVBQTFCLENBQXFDLEtBQUtDLFdBQTFDLEVBQXVEUCxDQUF2RDtNQUNBLEtBQUtRLElBQUwsQ0FBVUMsSUFBVixDQUFlLE9BQWYsRUFBd0IsSUFBeEI7SUFDSDs7SUFDRCxLQUFLTixRQUFMLEdBQWdCLENBQUMsQ0FBakI7O0lBQ0EsS0FBS08sWUFBTDs7SUFDQVYsQ0FBQyxDQUFDVyxlQUFGO0VBQ0g7QUFDSixDQVZEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIoKGZ1bmN0aW9uICgpIHt9KS5wcm90b3R5cGUgPSBjYy5CdXR0b24ucHJvdG90eXBlKS5fb25Ub3VjaEVuZGVkID0gZnVuY3Rpb24gKHQpIHtcbiAgICBpZiAodGhpcy5pbnRlcmFjdGFibGUgJiYgdGhpcy5lbmFibGVkSW5IaWVyYXJjaHkpIHtcbiAgICAgICAgaWYgKHRoaXMuX3ByZXNzZWQpIHtcbiAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyh0aGlzLmNsaWNrRXZlbnRzLCB0KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiY2xpY2tcIiwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcHJlc3NlZCA9ICExO1xuICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSgpO1xuICAgICAgICB0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbn07XG4iXX0=