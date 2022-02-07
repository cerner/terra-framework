import Minute from '../../src/_Minute';

describe('Minute', () => {
  describe('Using Minutes in math', () => {
    it('lets you add Minutes and numbers', () => {
      const m = new Minute(1);
      expect(m + 1).toBe(2);
    });
    it('does NOT protect you from invalid values! That is for you to control based on your needs.', () => {
      const m = new Minute(1);
      expect(m + 100).toBe(101);
    });
  });

  describe('constructor', () => {
    it('can be constructed only from a whole number, 0 ≤ number < 59', () => {
      [0, 1, 59].forEach((elem) => {
        expect(new Minute(elem).value).toBe(elem);
      });
      expect(() => new Minute(1.1)).toThrow();
      expect(() => new Minute('1')).toThrow();
      expect(() => new Minute('')).toThrow();
      expect(() => new Minute()).toThrow();
      expect(() => new Minute(undefined)).toThrow();
      expect(() => new Minute(60)).toThrow();
    });

    it('can be used to test if a value is valid', () => {
      const validOrThrow = (v) => new Minute(v);
      expect(() => { validOrThrow(60); }).toThrow();

      let cannotGoAnyHigher = validOrThrow(59);
      expect(() => { validOrThrow(cannotGoAnyHigher += 1); }).toThrow();
    });
  });

  describe('FromString', () => {
    it('can create a minute from a string', () => {
      expect(Minute.FromString('00').value).toBe(0);
      expect(Minute.FromString('0').value).toBe(0);
      expect(Minute.FromString('1').value).toBe(1);
      expect(Minute.FromString('59').value).toBe(59);
    });
    it('returns undefined if a Minute cannot be created from the string', () => {
      expect(Minute.FromString(1)).toBe(undefined);
      expect(Minute.FromString('60')).toBe(undefined);
      expect(Minute.FromString('')).toBe(undefined);
      expect(Minute.FromString()).toBe(undefined);
      expect(Minute.FromString('1.1')).toBe(undefined);
      expect(Minute.FromString(undefined)).toBe(undefined);
    });
  });

  describe('toString', () => {
    it('returns a string version of the value', () => {
      expect(new Minute(10).toString()).toBe('10');
    });
    it('pads single digit values with a leading zero', () => {
      expect(new Minute(1).toString()).toBe('01');
    });
    it('coerces the value into a string when used in a string template', () => {
      expect(`hello ${new Minute(1)}`).toBe('hello 01');
    });
    it('coerces the value into a string when used in join()', () => {
      expect(['hello', new Minute(1)].join(' ')).toBe('hello 01');
    });
  });

  describe('valueOf', () => {
    it('allows the Minute to be coerced into a number for maths', () => {
      expect(new Minute(1) + new Minute(1)).toBe(2);
      let m = new Minute(1);
      expect(m += 1).toBe(2);
    });
  });
});
