/* eslint-disable no-restricted-globals */

class FormValidationUtil {
  /* Checks given value's length against maximum. Returns true if value's length is less than or equal to the maximum.
   * @value is the value string, @maximum is a nonnegative whole number. */
  static isUnderMaxLength(value, maximum) {
    if (!(typeof value === 'string' || value instanceof String)
    || !(typeof maximum === 'number' && isFinite(maximum))
    || maximum < 0 || !Number.isInteger(maximum)) { return false; }
    return value.length <= maximum;
  }

  /* Checks given value's length against minimum. Returns true if value's length is greater than or equal to the minimum.
   * @value is the value string, @minimum is a nonnegative whole number. */
  static isOverMinLength(value, minimum) {
    if (!(typeof value === 'string' || value instanceof String)
    || !(typeof minimum === 'number' && isFinite(minimum))
    || minimum < 0 || !Number.isInteger(minimum)) { return false; }
    return value.length >= minimum;
  }

  /* Checks given value for extraneous whitespace. return true if there is no whitespace.
   * @value is the value string */
  static hasNoWhitespace(value) {
    if (!(typeof value === 'string' || value instanceof String)) { return false; }
    return !(/\s/.test(value));
  }

  /* Checks given value for any string in given array. return true if value does not contain any of them.
   * @value is the value string, @chars is an array of strings  */
  static containsCharacters(value, chars) {
    if (!(typeof value === 'string' || value instanceof String)
    || !(chars && typeof chars === 'object' && chars.constructor === Array)) { return false; }
    for (let i = 0; i < chars.length; i += 1) {
      if (value.includes(chars[i])) {
        return true;
      }
    }
    return false;
  }

  /* Checks given value against a minimum value. Returns true if value is greater then or equal to the minimum
   * @value is the value string, @minimum is the minimum numeric value  */
  static isOverMinValue(value, minimum) {
    if (!(typeof value === 'string' || value instanceof String)
    || !(typeof minimum === 'number' && isFinite(minimum))) { return false; }
    return value >= minimum;
  }

  /* Checks given value against a maximum value. Returns true if value is less then or equal to the maximum
   * @value is the value string, @maximum is the maximum numeric value  */
  static isUnderMaxValue(value, maximum) {
    if (!(typeof value === 'string' || value instanceof String)
    || !(typeof maximum === 'number' && isFinite(maximum))) { return false; }
    return value <= maximum;
  }

  /* Checks given value for a specific level of precision. Returns true if value has less than or an equal amount of precision
   * @value is the value string, @precision is a nonnegative whole number  */
  static isPrecise(value, precision) {
    if (!(typeof value === 'string' || value instanceof String)
    || !(typeof precision === 'number' && isFinite(precision))
    || precision < 0 || !Number.isInteger(precision)) { return false; }
    const valueSplit = value.split('.');
    if (valueSplit.length === 2 && valueSplit[1].length > precision) {
      return false;
    }
    return true;
  }

  /* Checks given value for if it is a negative value. Returns true if it is nonnegative.
   * @value is the value string */
  static isNonnegative(value) {
    if (!(typeof value === 'string' || value instanceof String)) { return false; }
    return parseFloat(value) >= 0;
  }
}

export default FormValidationUtil;
