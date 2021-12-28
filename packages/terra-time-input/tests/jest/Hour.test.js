import Hour from '../../src/_Hour';

describe('Hour', () => {
  describe('Using Hours in math', () => {
    it('lets you add Hours and numbers', () => {
      const h = new Hour(1);
      expect(h + 1).toBe(2);
    });
    it('does NOT protect you from invalid values! That is for you to control based on your needs.', () => {
      const h = new Hour(1);
      expect(h + 100).toBe(101);
    });
  });

  describe('constructor', () => {
    it('can be constructed only from a whole number, 0 ≤ number < 24', () => {
      [0, 1, 2, 11, 12, 13, 22, 23].forEach((elem) => {
        expect(new Hour(elem).value).toBe(elem);
      });
      expect(() => new Hour(1.1)).toThrow();
      expect(() => new Hour('1')).toThrow();
      expect(() => new Hour('')).toThrow();
      expect(() => new Hour()).toThrow();
      expect(() => new Hour(undefined)).toThrow();
      expect(() => new Hour(24)).toThrow();
    });

    it('can be used to test if a value is valid (can be found in the mode)', () => {
      const validOrThrow = (v) => new Hour(v);
      expect(() => { validOrThrow(101); }).toThrow();

      let cannotGoAnyHigher = validOrThrow(23);
      expect(() => { validOrThrow(cannotGoAnyHigher += 1); }).toThrow();
    });

    describe('12-hour AM mode', () => {
      it('can be constructed only form a whole number, 1 ≤ number < 13', () => {
        const twelveHour = (number) => new Hour(number, Hour.TWELVE_HOUR_AM);
        expect(twelveHour(12).value).toBe(0);
        expect(twelveHour(1).value).toBe(1);
        expect(twelveHour(2).value).toBe(2);
        expect(twelveHour(10).value).toBe(10);
        expect(twelveHour(11).value).toBe(11);
        expect(() => twelveHour(0)).toThrow();
        expect(() => twelveHour(13)).toThrow();
      });
    });
    describe('12-hour PM mode', () => {
      it('can be constructed only form a whole number, 1 ≤ number < 13', () => {
        const twelveHour = (number) => new Hour(number, Hour.TWELVE_HOUR_PM);
        expect(twelveHour(12).value).toBe(12);
        expect(twelveHour(1).value).toBe(13);
        expect(twelveHour(2).value).toBe(14);
        expect(twelveHour(10).value).toBe(22);
        expect(twelveHour(11).value).toBe(23);
        expect(() => twelveHour(0)).toThrow();
        expect(() => twelveHour(13)).toThrow();
      });
    });
  });

  describe('FromString', () => {
    it('can create an Hour from a 24-hour string', () => {
      expect(Hour.FromString('00').value).toBe(0);
      expect(Hour.FromString('0').value).toBe(0);
      expect(Hour.FromString('1').value).toBe(1);
      expect(Hour.FromString('12').value).toBe(12);
      expect(Hour.FromString('13').value).toBe(13);
      expect(Hour.FromString('23').value).toBe(23);
    });
    it('returns undefined if the Hour cannot be created from the 24-hour string', () => {
      expect(Hour.FromString(1)).toBe(undefined);
      expect(Hour.FromString('24')).toBe(undefined);
      expect(Hour.FromString('')).toBe(undefined);
      expect(Hour.FromString()).toBe(undefined);
      expect(Hour.FromString('1.1')).toBe(undefined);
      expect(Hour.FromString(undefined)).toBe(undefined);
    });
    it('can create an Hour from a 12-hour AM string', () => {
      expect(Hour.FromString('12', Hour.TWELVE_HOUR_AM).value).toBe(0);
      expect(Hour.FromString('1', Hour.TWELVE_HOUR_AM).value).toBe(1);
      expect(Hour.FromString('01', Hour.TWELVE_HOUR_AM).value).toBe(1);
      expect(Hour.FromString('11', Hour.TWELVE_HOUR_AM).value).toBe(11);
    });
    it('returns undefined if an Hour cannot be created from the 12-hour AM string', () => {
      expect(Hour.FromString('0', Hour.TWELVE_HOUR_AM)).toBe(undefined);
      expect(Hour.FromString('00', Hour.TWELVE_HOUR_AM)).toBe(undefined);
      expect(Hour.FromString('13', Hour.TWELVE_HOUR_AM)).toBe(undefined);
    });
    it('can create an Hour from a 12-hour PM string', () => {
      expect(Hour.FromString('12', Hour.TWELVE_HOUR_PM).value).toBe(12);
      expect(Hour.FromString('1', Hour.TWELVE_HOUR_PM).value).toBe(13);
      expect(Hour.FromString('01', Hour.TWELVE_HOUR_PM).value).toBe(13);
      expect(Hour.FromString('2', Hour.TWELVE_HOUR_PM).value).toBe(14);
      expect(Hour.FromString('02', Hour.TWELVE_HOUR_PM).value).toBe(14);
      expect(Hour.FromString('10', Hour.TWELVE_HOUR_PM).value).toBe(22);
      expect(Hour.FromString('11', Hour.TWELVE_HOUR_PM).value).toBe(23);
    });
    it('returns undefined if an Hour cannot be created by a 12-hour PM string', () => {
      expect(Hour.FromString('-1', Hour.TWELVE_HOUR_PM)).toBe(undefined);
      expect(Hour.FromString('0', Hour.TWELVE_HOUR_PM)).toBe(undefined);
      expect(Hour.FromString('24', Hour.TWELVE_HOUR_PM)).toBe(undefined);
    });
  });

  describe('toString', () => {
    it('returns a string version of the value', () => {
      expect(new Hour(10).toString()).toBe('10');
    });
    it('pads single digit values with a leading zero', () => {
      expect(new Hour(1).toString()).toBe('01');
    });
    it('coerces the value into a string when used in a string template', () => {
      expect(`hello ${new Hour(1)}`).toBe('hello 01');
    });
    it('coerces the value into a string when used in join()', () => {
      expect(['hello', new Hour(1)].join(' ')).toBe('hello 01');
    });
  });

  describe('valueOf', () => {
    it('allows the Hour to be coerced into a number for maths', () => {
      expect(new Hour(1) + new Hour(1)).toBe(2);
      let h = new Hour(1);
      expect(h += 1).toBe(2);
    });
  });

  describe('twelveHourValueOf', () => {
    it('returns a number that is the 12-hour version of the value.', () => {
      let h = new Hour(0);
      expect(h.twelveHourValueOf()).toBe(12);

      h = new Hour(1);
      expect(h.twelveHourValueOf()).toBe(1);

      h = new Hour(2);
      expect(h.twelveHourValueOf()).toBe(2);

      h = new Hour(11);
      expect(h.twelveHourValueOf()).toBe(11);

      h = new Hour(12);
      expect(h.twelveHourValueOf()).toBe(12);

      h = new Hour(13);
      expect(h.twelveHourValueOf()).toBe(1);

      h = new Hour(14);
      expect(h.twelveHourValueOf()).toBe(2);

      h = new Hour(23);
      expect(h.twelveHourValueOf()).toBe(11);
    });
  });

  describe('toTwelveHourString', () => {
    it('returns a string that is the 12-hour version of the value.', () => {
      let h = new Hour(0);
      expect(h.toTwelveHourString()).toBe('12');

      h = new Hour(1);
      expect(h.toTwelveHourString()).toBe('01');

      h = new Hour(2);
      expect(h.toTwelveHourString()).toBe('02');

      h = new Hour(11);
      expect(h.toTwelveHourString()).toBe('11');

      h = new Hour(12);
      expect(h.toTwelveHourString()).toBe('12');

      h = new Hour(13);
      expect(h.toTwelveHourString()).toBe('01');

      h = new Hour(14);
      expect(h.toTwelveHourString()).toBe('02');

      h = new Hour(23);
      expect(h.toTwelveHourString()).toBe('11');
    });
  });
});
