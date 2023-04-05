"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var Minute = /*#__PURE__*/function () {
  /**
   * @param {Number} number A number between 0 and 59.
   * @throws An error if the number is not valid.
   * @see fromString
   */
  function Minute(number) {
    (0, _classCallCheck2.default)(this, Minute);
    if (!Minute.NUMBERS.includes(number)) {
      throw new Error("Expected number to be in ".concat(number));
    }
    this.value = number;
  }

  /**
   * valueOf() is called automatically anytime an Minute needs to be coerced into a primitive value OTHER THAN a string.
   * This means you can do math on Minutes like this:
   *
   * >> Minute(1) += 1;
   * 2
   * >> Minute(1) + Minute(1);
   * 2
   *
   * @returns {Number} The minute number.
   */
  (0, _createClass2.default)(Minute, [{
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }

    /**
     * toString() is automatically called anytime an Minute needs to be coerced into a String. This means you can 'print'
     * a Minute easily:
     *
     * >> console.log(new Minute(1))
     * '01'
     * >> `Hello ${new Minute(1)}`
     * 'Hello 01'
     *
     * @returns {String} The two-digit string representation of the minute.
     */
  }, {
    key: "toString",
    value: function toString() {
      return String(this.value).padStart(2, 0);
    }
  }], [{
    key: "fromString",
    value:
    /**
     * Factory method to create a Minute from a string. Use this to take form input and normalize it for later operations.
     * @param {String} string A string expressing an minute. Can be be like '1' or '01'.
     * @returns a Minute object or undefined if the minute doesn't make sense.
     */
    function fromString(string) {
      if (!Minute.STRINGS.includes(string)) {
        return undefined;
      }
      try {
        return new Minute(Number(string));
      } catch (_unused) {
        return undefined;
      }
    }
  }]);
  return Minute;
}();
(0, _defineProperty2.default)(Minute, "NUMBERS", (0, _toConsumableArray2.default)(Array(60).keys()));
(0, _defineProperty2.default)(Minute, "STRINGS", [].concat((0, _toConsumableArray2.default)(Minute.NUMBERS.map(function (num) {
  return String(num).padStart(2, 0);
})), (0, _toConsumableArray2.default)(Minute.NUMBERS.map(function (num) {
  return String(num);
}))));
var _default = Minute;
exports.default = _default;