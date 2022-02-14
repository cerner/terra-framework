class Minute {
  static NUMBERS = [...Array(60).keys()];

  static STRINGS = [...Minute.NUMBERS.map((num) => String(num).padStart(2, 0)), ...Minute.NUMBERS.map((num) => String(num))];

  /**
   * Factory method to create a Minute from a string. Use this to take form input and normalize it for later operations.
   * @param {String} string A string expressing an minute. Can be be like '1' or '01'.
   * @returns a Minute object or undefined if the minute doesn't make sense.
   */
  static fromString(string) {
    if (!Minute.STRINGS.includes(string)) {
      return undefined;
    }

    try {
      return new Minute(Number(string));
    } catch {
      return undefined;
    }
  }

  /**
   * @param {Number} number A number between 0 and 59.
   * @throws An error if the number is not valid.
   * @see fromString
   */
  constructor(number) {
    if (!Minute.NUMBERS.includes(number)) {
      throw new Error(`Expected number to be in ${number}`);
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
  valueOf() {
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
  toString() {
    return String(this.value).padStart(2, 0);
  }
}

export default Minute;
