class Hour {
  static TWENTY_FOUR_HOUR = 0;

  static TWELVE_HOUR_AM = 1;

  static TWELVE_HOUR_PM = 2;

  static MODES = [Hour.TWENTY_FOUR_HOUR, Hour.TWELVE_HOUR_AM, Hour.TWELVE_HOUR_PM];

  static NUMBERS = [...Array(24).keys()];

  static NUMBERS_12 = [12, ...Hour.NUMBERS.slice(1, 12)]

  static STRINGS = [...Hour.NUMBERS.map((num) => String(num).padStart(2, 0)), ...Hour.NUMBERS.map((num) => String(num))];

  /**
   * Factory method to create an Hour from a string. Use this to take form input and normalize it for later operations.
   * @param {String} string A string expressing an hour found within the mode(see below). Can be be like '1' or '01'.
   * @param {Hours.MODES} mode Tells the factory how to interpret the string literal. Is it a 24-hour hour? A
   * 12-hour AM value, or a 12-hour PM value? Knowing the mode lets the constructor normalize the value to be
   * a 24-hour clock hour value.
   * @returns an Hour object or undefined if the hour doesn't make sense.
   */
  static fromString(string, mode = Hour.TWENTY_FOUR_HOUR) {
    if (!Hour.STRINGS.includes(string)) {
      return undefined;
    }

    try {
      return new Hour(Number(string), mode);
    } catch {
      return undefined;
    }
  }

  /**
   * @param {Number} number A number found within the mode (see below).
   * @param {Hour.MODES} mode Tells the factory how to interpret the number. Is it a 24-hour hour? A
   * 12-hour AM number, or a 12-hour PM number? Knowing the mode lets the constructor normalize the value to be
   * a 24-hour clock hour value. The number is always converted into its 24-hour value for storage.
   * @throws An error if the number is not found in mode. For example: 13 isn't found in the 12-AM or 12-PM mode.
   * @see fromString
   */
  constructor(number, mode = Hour.TWENTY_FOUR_HOUR) {
    switch (mode) {
      case Hour.TWENTY_FOUR_HOUR:
        if (Hour.NUMBERS.includes(number)) {
          this.value = number;
        } else {
          throw new Error(`Unrecognized number. Must be one of ${Hour.NUMBERS}`);
        }
        break;
      case Hour.TWELVE_HOUR_AM:
        if (Hour.NUMBERS_12.includes(number)) {
          this.value = Hour.NUMBERS[Hour.NUMBERS_12.indexOf(number)];
        } else {
          throw new Error(`Unrecognized number. Must be one of ${Hour.NUMBERS_12}`);
        }
        break;
      case Hour.TWELVE_HOUR_PM:
        if (Hour.NUMBERS_12.includes(number)) {
          this.value = Hour.NUMBERS[Hour.NUMBERS_12.indexOf(number) + 12];
        } else {
          throw new Error(`Unrecognized number. Must be one of ${Hour.NUMBERS_12}`);
        }
        break;
      default:
        throw new Error(`Unrecognized mode. Must be one of ${Hour.MODES}`);
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
  valueOf() {
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
  twelveHourValueOf() {
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
  toString() {
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
  toTwelveHourString() {
    return String(this.twelveHourValueOf()).padStart(2, 0);
  }
}

export default Hour;
