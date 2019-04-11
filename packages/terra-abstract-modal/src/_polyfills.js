/* eslint-disable */

/**
 * Matches polyfill
 */
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

/**
 * MutationObserver polyfill
 */
(function () {
  var MutationObserver;

  if (window.MutationObserver != null) {
    return;
  }

  MutationObserver = (function () {
    function MutationObserver(callBack) {
      this.callBack = callBack;
    }

    MutationObserver.prototype.observe = function (element, options) {
      this.element = element;
      return this.interval = setInterval((function (_this) {
        return function () {
          var html;
          html = _this.element.innerHTML;
          if (html !== _this.oldHtml) {
            _this.oldHtml = html;
            return _this.callBack.apply(null);
          }
        };
      })(this), 200);
    };

    MutationObserver.prototype.disconnect = function () {
      return window.clearInterval(this.interval);
    };

    return MutationObserver;

  })();

  window.MutationObserver = MutationObserver;

}).call(this);
/* eslint-enable */