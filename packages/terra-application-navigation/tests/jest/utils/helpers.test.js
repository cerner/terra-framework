import { shouldRenderCompactNavigation } from '../../../src/utils/helpers';

describe('helpers', () => {
  it('shouldRenderCompactNavigation return correct values', () => {
    let result = shouldRenderCompactNavigation('tiny');
    expect(result).toEqual(true);

    result = shouldRenderCompactNavigation('small');
    expect(result).toEqual(true);

    result = shouldRenderCompactNavigation('medium');
    expect(result).toEqual(true);

    result = shouldRenderCompactNavigation('large');
    expect(result).toEqual(false);

    result = shouldRenderCompactNavigation('huge');
    expect(result).toEqual(false);

    result = shouldRenderCompactNavigation('enormous');
    expect(result).toEqual(false);
  });
});
