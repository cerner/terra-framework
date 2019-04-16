/* eslint-disable no-underscore-dangle */

class FormValidationUtil {
  static maxLength(value, x) {
    return value.length <= x;
  }

  static minLength(value, x) {
    return value.length >= x;
  }

  static noWhitespace(value) {
    return value.trim() === value;
  }

  static characterCheck(value, chars) {
    return chars.some(substring => value.includes(substring));
  }

  static minValue(value, x) {
    return value >= x;
  }

  static maxValue(value, x) {
    return value <= x;
  }

  static precisionCheck(value, x) {
    const valueSplit = value.split('.');
    return !(valueSplit.length === 2 && valueSplit[1].length > x);
  }

  static negativeCheck(value) {
    return value < 0;
  }
}

export default FormValidationUtil;
