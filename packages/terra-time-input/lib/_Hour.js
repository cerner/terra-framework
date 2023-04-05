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
var Hour = /*#__PURE__*/function () {
  /**
   * @param {Number} number A number found within the mode (see below).
   * @param {Hour.MODES} mode Tells the factory how to interpret the number. Is it a 24-hour hour? A
   * 12-hour AM number, or a 12-hour PM number? Knowing the mode lets the constructor normalize the value to be
   * a 24-hour clock hour value. The number is always converted into its 24-hour value for storage.
   * @throws An error if the number is not found in mode. For example: 13 isn't found in the 12-AM or 12-PM mode.
   * @see fromString
   */
  function Hour(number) {
    var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Hour.TWENTY_FOUR_HOUR;
    (0, _classCallCheck2.default)(this, Hour);
    switch (mode) {
      case Hour.TWENTY_FOUR_HOUR:
        if (Hour.NUMBERS.includes(number)) {
          this.value = number;
        } else {
          throw new Error("Unrecognized number. Must be one of ".concat(Hour.NUMBERS));
        }
        break;
      case Hour.TWELVE_HOUR_AM:
        if (Hour.NUMBERS_12.includes(number)) {
          this.value = Hour.NUMBERS[Hour.NUMBERS_12.indexOf(number)];
        } else {
          throw new Error("Unrecognized number. Must be one of ".concat(Hour.NUMBERS_12));
        }
        break;
      case Hour.TWELVE_HOUR_PM:
        if (Hour.NUMBERS_12.includes(number)) {
          this.value = Hour.NUMBERS[Hour.NUMBERS_12.indexOf(number) + 12];
        } else {
          throw new Error("Unrecognized number. Must be one of ".concat(Hour.NUMBERS_12));
        }
        break;
      default:
        throw new Error("Unrecognized mode. Must be one of ".concat(Hour.MODES));
    }
  }

  /**
   * valueOf() is called automatically anytime an Hour needs to be coerced into a primitive value OTHER THAN a string.
   * This means you can do math on Hours like this:
   *
   * >> Hour(1) += 1;
   * 2
   * >> Hour(1) + Hour(1);
   * 2
   *
   * @returns {Number} The hour number as seen on the 24-hour clock.
   * @see twelveHourValueOf
   */
  (0, _createClass2.default)(Hour, [{
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }

    /**
     * Unlike valueOf(), this method must be manually called.
     *
     * >> Hour(13).twelveHourValueOf();
     * 1
     * >> Hour(0).twelveHourValueOf();
     * 12
     *
     * @returns {Number} The hour number as seen on the 12-hour clock.
     * @see valueOf
     */
  }, {
    key: "twelveHourValueOf",
    value: function twelveHourValueOf() {
      return Hour.NUMBERS_12[this.value % 12];
    }

    /**
     * toString() is automatically called anytime an Hour needs to be coerced into a String. This means you can 'print'
     * an Hour easily:
     *
     * >> console.log(new Hour(1))
     * '01'
     * >> `Hello ${new Hour(1)}`
     * 'Hello 01'
     *
     * @returns {String} The two-digit string representation of the hour as seen on the 24-hour clock.
     * @see toTwelveHourString
     */
  }, {
    key: "toString",
    value: function toString() {
      return String(this.value).padStart(2, 0);
    }

    /**
     * Unlike toString, this must be called manually.
     *
     * >> const h = new Hour(23)
     * undefined
     * >> h.toTwelveHourString()
     * '11'
     * @returns {String} The two-digit string representation of the hour as seen on the 12-hour clock.
     * @see toSTring
     */
  }, {
    key: "toTwelveHourString",
    value: function toTwelveHourString() {
      return String(this.twelveHourValueOf()).padStart(2, 0);
    }
  }], [{
    key: "fromString",
    value:
    /**
     * Factory method to create an Hour from a string. Use this to take form input and normalize it for later operations.
     * @param {String} string A string expressing an hour found within the mode(see below). Can be be like '1' or '01'.
     * @param {Hours.MODES} mode Tells the factory how to interpret the string literal. Is it a 24-hour hour? A
     * 12-hour AM value, or a 12-hour PM value? Knowing the mode lets the constructor normalize the value to be
     * a 24-hour clock hour value.
     * @returns an Hour object or undefined if the hour doesn't make sense.
     */
    function fromString(string) {
      var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Hour.TWENTY_FOUR_HOUR;
      if (!Hour.STRINGS.includes(string)) {
        return undefined;
      }
      try {
        return new Hour(Number(string), mode);
      } catch (_unused) {
        return undefined;
      }
    }
  }]);
  return Hour;
}();
(0, _defineProperty2.default)(Hour, "TWENTY_FOUR_HOUR", 0);
(0, _defineProperty2.default)(Hour, "TWELVE_HOUR_AM", 1);
(0, _defineProperty2.default)(Hour, "TWELVE_HOUR_PM", 2);
(0, _defineProperty2.default)(Hour, "MODES", [Hour.TWENTY_FOUR_HOUR, Hour.TWELVE_HOUR_AM, Hour.TWELVE_HOUR_PM]);
(0, _defineProperty2.default)(Hour, "NUMBERS", (0, _toConsumableArray2.default)(Array(24).keys()));
(0, _defineProperty2.default)(Hour, "NUMBERS_12", [12].concat((0, _toConsumableArray2.default)(Hour.NUMBERS.slice(1, 12))));
(0, _defineProperty2.default)(Hour, "STRINGS", [].concat((0, _toConsumableArray2.default)(Hour.NUMBERS.map(function (num) {
  return String(num).padStart(2, 0);
})), (0, _toConsumableArray2.default)(Hour.NUMBERS.map(function (num) {
  return String(num);
}))));
var _default = Hour;
exports.default = _default;