"use strict";

function modifyElements() {
  // eslint-disable-next-line func-names, space-before-function-paren, prefer-arrow-callback, prefer-rest-params
  var args = Array.prototype.slice.call(arguments).filter(function (n) {
    return !!n || n === '';
  });
  var style = args[args.length - 2];
  var value = args[args.length - 1];
  args.splice(-2);
  for (var i = 0; i < args.length; i += 1) {
    for (var j = 0; j < args[i].length; j += 1) {
      var element = args[i][j];
      try {
        element.style.setProperty(style, value, 'important');
      } catch (error) {
        // eslint-disable-next-line prefer-template
        element.setAttribute('style', element.style.cssText + style + ':' + value + '!important;');
      }
    }
  }
}
module.exports = modifyElements;