import FormValidationUtil from '../../lib/FormValidationUtil';

describe('isUnderMaxLength', () => {
  it('should return true if length of value is less than given maximum', () => {
    expect(FormValidationUtil.isUnderMaxLength('Test', 7)).toBe(true);
  });

  it('should return false if length of value is greater than given maximum', () => {
    expect(FormValidationUtil.isUnderMaxLength('Test', 2)).toBe(false);
  });

  it('should return true if length of value is equal to given maximum', () => {
    expect(FormValidationUtil.isUnderMaxLength('Test', 4)).toBe(true);
  });

  it('should return false if given maximum is not a whole number', () => {
    expect(FormValidationUtil.isUnderMaxLength('Test', 5.03)).toBe(false);
  });

  it('should return false if given maximum is negative', () => {
    expect(FormValidationUtil.isUnderMaxLength('Test', -2)).toBe(false);
  });

  it('should return false if given maximum is not a number', () => {
    expect(FormValidationUtil.isUnderMaxLength('Test', '1231')).toBe(false);
    expect(FormValidationUtil.isUnderMaxLength('Test', null)).toBe(false);
  });

  it('should return false if given value is not a string', () => {
    expect(FormValidationUtil.isUnderMaxLength(0, 5)).toBe(false);
    expect(FormValidationUtil.isUnderMaxLength(null, 5)).toBe(false);
  });
});

describe('isOverMinLength', () => {
  it('should return false if length of value is less than given minimum', () => {
    expect(FormValidationUtil.isOverMinLength('Test', 7)).toBe(false);
  });

  it('should return true if length of value is greater than given minimum', () => {
    expect(FormValidationUtil.isOverMinLength('Test', 2)).toBe(true);
  });

  it('should return true if length of value is equal to given minimum', () => {
    expect(FormValidationUtil.isOverMinLength('Test', 4)).toBe(true);
  });

  it('should return false if given minimum is not a whole number', () => {
    expect(FormValidationUtil.isOverMinLength('Test', 2.03)).toBe(false);
  });

  it('should return false if given minimum is negative', () => {
    expect(FormValidationUtil.isOverMinLength('Test', -2)).toBe(false);
  });

  it('should return false if given minimum is not a number', () => {
    expect(FormValidationUtil.isOverMinLength('Test', '1231')).toBe(false);
    expect(FormValidationUtil.isOverMinLength('Test', null)).toBe(false);
  });

  it('should return false if given value is not a string', () => {
    expect(FormValidationUtil.isOverMinLength(0, 5)).toBe(false);
    expect(FormValidationUtil.isOverMinLength(null, 5)).toBe(false);
  });
});

describe('hasNoWhitespace', () => {
  it('should return true if given value has no whitesspace', () => {
    expect(FormValidationUtil.hasNoWhitespace('Test')).toBe(true);
  });

  it('should return false if given value has whitesspace', () => {
    expect(FormValidationUtil.hasNoWhitespace('Test     ')).toBe(false);
    expect(FormValidationUtil.hasNoWhitespace('    Test')).toBe(false);
    expect(FormValidationUtil.hasNoWhitespace('Test Test')).toBe(false);
    expect(FormValidationUtil.hasNoWhitespace('Test Test')).toBe(false);
  });

  it('should return false if given value is not a string', () => {
    expect(FormValidationUtil.hasNoWhitespace(0)).toBe(false);
    expect(FormValidationUtil.hasNoWhitespace(null)).toBe(false);
  });
});

describe('containsCharacters', () => {
  it('should return false if given value contains any strings in the chars array', () => {
    expect(FormValidationUtil.containsCharacters('Test', ['a', 'e'])).toBe(true);
  });

  it('should return true if given value does not contain any strings in the chars array', () => {
    expect(FormValidationUtil.containsCharacters('Test', ['a', 'b'])).toBe(false);
  });

  it('should return false if given chars is not an array', () => {
    expect(FormValidationUtil.containsCharacters('Test', -2)).toBe(false);
    expect(FormValidationUtil.containsCharacters('Test', 'Test')).toBe(false);
  });

  it('should return false if given value is not a string', () => {
    expect(FormValidationUtil.containsCharacters(0, ['a', 'e'])).toBe(false);
    expect(FormValidationUtil.containsCharacters(null, ['a', 'e'])).toBe(false);
  });
});

describe('isOverMinValue', () => {
  it('should return true if value is greater than given minimum', () => {
    expect(FormValidationUtil.isOverMinValue('4', 3)).toBe(true);
  });

  it('should return true if value is equal to given minimum', () => {
    expect(FormValidationUtil.isOverMinValue('4', 4)).toBe(true);
  });

  it('should return false if value is less than given minimum', () => {
    expect(FormValidationUtil.isOverMinValue('3', 4)).toBe(false);
  });

  it('should return false if given minimum is not a number', () => {
    expect(FormValidationUtil.isOverMinValue('4', '1231')).toBe(false);
    expect(FormValidationUtil.isOverMinValue('4', null)).toBe(false);
  });

  it('should return false if given value is not a string', () => {
    expect(FormValidationUtil.isOverMinValue(0, 4)).toBe(false);
    expect(FormValidationUtil.isOverMinValue(null, 4)).toBe(false);
  });
});

describe('isUnderMaxValue', () => {
  it('should return true if value is less than given maximum', () => {
    expect(FormValidationUtil.isUnderMaxValue('3', 4)).toBe(true);
  });

  it('should return true if value is equal to given maximum', () => {
    expect(FormValidationUtil.isUnderMaxValue('4', 4)).toBe(true);
  });

  it('should return false if value is greater than given maximum', () => {
    expect(FormValidationUtil.isUnderMaxValue('4', 3)).toBe(false);
  });

  it('should return false if given maximum is not a number', () => {
    expect(FormValidationUtil.isUnderMaxValue('4', '1231')).toBe(false);
    expect(FormValidationUtil.isUnderMaxValue('4', null)).toBe(false);
  });

  it('should return false if given value is not a string', () => {
    expect(FormValidationUtil.isUnderMaxValue(0, 4)).toBe(false);
    expect(FormValidationUtil.isUnderMaxValue(null, 4)).toBe(false);
  });
});

describe('isPrecise', () => {
  it('should return true if value is equal to or less than given maximum', () => {
    expect(FormValidationUtil.isPrecise('4.3333', 4)).toBe(true);
    expect(FormValidationUtil.isPrecise('4.33', 4)).toBe(true);
  });

  it('should return false if value is greater than given maximum', () => {
    expect(FormValidationUtil.isPrecise('4.333333', 3)).toBe(false);
  });

  it('should return false if given precision is not a number', () => {
    expect(FormValidationUtil.isPrecise('4.333', '1231')).toBe(false);
    expect(FormValidationUtil.isPrecise('4.333', null)).toBe(false);
  });

  it('should return false if given precision is not a whole number', () => {
    expect(FormValidationUtil.isPrecise('4.333', 4.03)).toBe(false);
  });

  it('should return false if given precision is less than 0', () => {
    expect(FormValidationUtil.isPrecise('4.333', -2)).toBe(false);
  });

  it('should return false if given value is not a string', () => {
    expect(FormValidationUtil.isPrecise(0, 4)).toBe(false);
    expect(FormValidationUtil.isPrecise(null, 4)).toBe(false);
  });
});

describe('isNonnegative', () => {
  it('should return true if given value is not negative', () => {
    expect(FormValidationUtil.isNonnegative('22')).toBe(true);
    expect(FormValidationUtil.isNonnegative('0')).toBe(true);
  });

  it('should return false if given value is negative', () => {
    expect(FormValidationUtil.isNonnegative('-2')).toBe(false);
    expect(FormValidationUtil.isNonnegative('-0.33')).toBe(false);
  });

  it('should return false if given value is not a string', () => {
    expect(FormValidationUtil.isNonnegative(0)).toBe(false);
    expect(FormValidationUtil.isNonnegative(null)).toBe(false);
  });
});
