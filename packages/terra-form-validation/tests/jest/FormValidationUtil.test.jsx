/* eslint-disable import/no-extraneous-dependencies */
import FormValidationUtil from '../../lib/FormValidationUtil';

describe('maxLength', () => {
  it('should return true if length of value is less than given maximum', () => {
    expect(FormValidationUtil.maxLength('Test', 7)).toBe(true);
  });

  it('should return false if length of value is greater than given maximum', () => {
    expect(FormValidationUtil.maxLength('Test', 2)).toBe(false);
  });

  it('should return true if length of value is equal to given maximum', () => {
    expect(FormValidationUtil.maxLength('Test', 4)).toBe(true);
  });

  it('should return false if given maximum is not a whole number', () => {
    expect(FormValidationUtil.maxLength('Test', 5.03)).toBe(false);
  });

  it('should return false if given maximum is negative', () => {
    expect(FormValidationUtil.maxLength('Test', -2)).toBe(false);
  });

  it('should return false if given maximum is not a number', () => {
    expect(FormValidationUtil.maxLength('Test', '1231')).toBe(false);
    expect(FormValidationUtil.maxLength('Test', null)).toBe(false);
  });

  it('should return false if given value is not a string', () => {
    expect(FormValidationUtil.maxLength(0, 5)).toBe(false);
    expect(FormValidationUtil.maxLength(null, 5)).toBe(false);
  });
});

describe('minLength', () => {
  it('should return false if length of value is less than given minimum', () => {
    expect(FormValidationUtil.minLength('Test', 7)).toBe(false);
  });

  it('should return true if length of value is greater than given minimum', () => {
    expect(FormValidationUtil.minLength('Test', 2)).toBe(true);
  });

  it('should return true if length of value is equal to given minimum', () => {
    expect(FormValidationUtil.minLength('Test', 4)).toBe(true);
  });

  it('should return false if given minimum is not a whole number', () => {
    expect(FormValidationUtil.minLength('Test', 2.03)).toBe(false);
  });

  it('should return false if given minimum is negative', () => {
    expect(FormValidationUtil.minLength('Test', -2)).toBe(false);
  });

  it('should return false if given minimum is not a number', () => {
    expect(FormValidationUtil.minLength('Test', '1231')).toBe(false);
    expect(FormValidationUtil.minLength('Test', null)).toBe(false);
  });

  it('should return false if given value is not a string', () => {
    expect(FormValidationUtil.minLength(0, 5)).toBe(false);
    expect(FormValidationUtil.minLength(null, 5)).toBe(false);
  });
});

describe('noWhitespace', () => {
  it('should return true if given value has no whitesspace on either side', () => {
    expect(FormValidationUtil.noWhitespace('Test')).toBe(true);
    expect(FormValidationUtil.noWhitespace('Test  Test')).toBe(true);
  });

  it('should return false if given value has whitesspace on either side', () => {
    expect(FormValidationUtil.noWhitespace('Test     ')).toBe(false);
    expect(FormValidationUtil.noWhitespace('    Test')).toBe(false);
  });

  it('should return false if given value is not a string', () => {
    expect(FormValidationUtil.noWhitespace(0)).toBe(false);
    expect(FormValidationUtil.noWhitespace(null)).toBe(false);
  });
});

describe('characterCheck', () => {
  it('should return false if given value contains any strings in the chars array', () => {
    expect(FormValidationUtil.characterCheck('Test', ['a', 'e'])).toBe(false);
  });

  it('should return true if given value does not contain any strings in the chars array', () => {
    expect(FormValidationUtil.characterCheck('Test', ['a', 'b'])).toBe(true);
  });

  it('should return false if given chars is not an array', () => {
    expect(FormValidationUtil.characterCheck('Test', -2)).toBe(false);
    expect(FormValidationUtil.characterCheck('Test', 'Test')).toBe(false);
  });

  it('should return false if given value is not a string', () => {
    expect(FormValidationUtil.characterCheck(0, ['a', 'e'])).toBe(false);
    expect(FormValidationUtil.characterCheck(null, ['a', 'e'])).toBe(false);
  });
});

describe('minValue', () => {
  it('should return true if value is greater than given minimum', () => {
    expect(FormValidationUtil.minValue('4', 3)).toBe(true);
  });

  it('should return true if value is equal to given minimum', () => {
    expect(FormValidationUtil.minValue('4', 4)).toBe(true);
  });

  it('should return false if value is less than given minimum', () => {
    expect(FormValidationUtil.minValue('3', 4)).toBe(false);
  });

  it('should return false if given minimum is not a number', () => {
    expect(FormValidationUtil.minValue('4', '1231')).toBe(false);
    expect(FormValidationUtil.minValue('4', null)).toBe(false);
  });

  it('should return false if given value is not a string', () => {
    expect(FormValidationUtil.minValue(0, 4)).toBe(false);
    expect(FormValidationUtil.minValue(null, 4)).toBe(false);
  });
});

describe('maxValue', () => {
  it('should return true if value is less than given maximum', () => {
    expect(FormValidationUtil.maxValue('3', 4)).toBe(true);
  });

  it('should return true if value is equal to given maximum', () => {
    expect(FormValidationUtil.maxValue('4', 4)).toBe(true);
  });

  it('should return false if value is greater than given maximum', () => {
    expect(FormValidationUtil.maxValue('4', 3)).toBe(false);
  });

  it('should return false if given maximum is not a number', () => {
    expect(FormValidationUtil.maxValue('4', '1231')).toBe(false);
    expect(FormValidationUtil.maxValue('4', null)).toBe(false);
  });

  it('should return false if given value is not a string', () => {
    expect(FormValidationUtil.maxValue(0, 4)).toBe(false);
    expect(FormValidationUtil.maxValue(null, 4)).toBe(false);
  });
});

describe('precisionCheck', () => {
  it('should return true if value is equal to or less than given maximum', () => {
    expect(FormValidationUtil.precisionCheck('4.3333', 4)).toBe(true);
    expect(FormValidationUtil.precisionCheck('4.33', 4)).toBe(true);
  });

  it('should return false if value is greater than given maximum', () => {
    expect(FormValidationUtil.precisionCheck('4.333333', 3)).toBe(false);
  });

  it('should return false if given precision is not a number', () => {
    expect(FormValidationUtil.precisionCheck('4.333', '1231')).toBe(false);
    expect(FormValidationUtil.precisionCheck('4.333', null)).toBe(false);
  });

  it('should return false if given precision is not a whole number', () => {
    expect(FormValidationUtil.precisionCheck('4.333', 4.03)).toBe(false);
  });

  it('should return false if given precision is less than 0', () => {
    expect(FormValidationUtil.precisionCheck('4.333', -2)).toBe(false);
  });

  it('should return false if given value is not a string', () => {
    expect(FormValidationUtil.precisionCheck(0, 4)).toBe(false);
    expect(FormValidationUtil.precisionCheck(null, 4)).toBe(false);
  });
});

describe('negativeCheck', () => {
  it('should return true if given value is not negative', () => {
    expect(FormValidationUtil.negativeCheck('22')).toBe(true);
    expect(FormValidationUtil.negativeCheck('0')).toBe(true);
  });

  it('should return false if given value is negative', () => {
    expect(FormValidationUtil.negativeCheck('-2')).toBe(false);
    expect(FormValidationUtil.negativeCheck('-0.33')).toBe(false);
  });

  it('should return false if given value is not a string', () => {
    expect(FormValidationUtil.negativeCheck(0)).toBe(false);
    expect(FormValidationUtil.negativeCheck(null)).toBe(false);
  });
});
