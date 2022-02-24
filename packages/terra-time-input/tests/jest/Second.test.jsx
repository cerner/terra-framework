import Second from '../../src/_Second';

describe('Second', () => {
  describe('Using Seconds in math', () => {
    it('lets you add Seconds and numbers', () => {
      const m = new Second(1);
      expect(m + 1).toBe(2);
    });
    it('does NOT protect you from invalid values! That is for you to control based on your needs.', () => {
      const m = new Second(1);
      expect(m + 100).toBe(101);
    });
  });

  describe('constructor', () => {
    it('can be constructed only from a whole number, 0 ≤ number < 59', () => {
      [0, 1, 59].forEach((elem) => {
        expect(new Second(elem).value).toBe(elem);
      });
      expect(() => new Second(1.1)).toThrow();
      expect(() => new Second('1')).toThrow();
      expect(() => new Second('')).toThrow();
      expect(() => new Second()).toThrow();
      expect(() => new Second(undefined)).toThrow();
      expect(() => new Second(60)).toThrow();
    });

    it('can be used to test if a value is valid', () => {
      const validOrThrow = (v) => new Second(v);
      expect(() => { validOrThrow(60); }).toThrow();

      let cannotGoAnyHigher = validOrThrow(59);
      expect(() => { validOrThrow(cannotGoAnyHigher += 1); }).toThrow();
    });
  });

  describe('fromString', () => {
    it('can create a second from a string', () => {
      expect(Second.fromString('00').value).toBe(0);
      expect(Second.fromString('0').value).toBe(0);
      expect(Second.fromString('1').value).toBe(1);
      expect(Second.fromString('59').value).toBe(59);
    });
    it('will return undefined if a second cannot be created from the string', () => {
      expect(Second.fromString(1)).toBe(undefined);
      expect(Second.fromString('60')).toBe(undefined);
      expect(Second.fromString('')).toBe(undefined);
      expect(Second.fromString()).toBe(undefined);
      expect(Second.fromString('1.1')).toBe(undefined);
      expect(Second.fromString(undefined)).toBe(undefined);
    });
  });

  describe('toString', () => {
    it('returns a string version of the value', () => {
      expect(new Second(10).toString()).toBe('10');
    });
    it('pads single digit values with a leading zero', () => {
      expect(new Second(1).toString()).toBe('01');
    });
    it('coerces the value into a string when used in a string template', () => {
      expect(`hello ${new Second(1)}`).toBe('hello 01');
    });
    it('coerces the value into a string when used in join()', () => {
      expect(['hello', new Second(1)].join(' ')).toBe('hello 01');
    });
  });

  describe('valueOf', () => {
    it('allows the Second to be coerced into a number for maths', () => {
      expect(new Second(1) + new Second(1)).toBe(2);
      let m = new Second(1);
      expect(m += 1).toBe(2);
    });
  });
});
