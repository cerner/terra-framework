import { sliceIndexForBreakpoint } from '../../../src/extensions/_ExtensionUtils';

describe('ExtensionUtils', () => {
  it('sliceIndexForBreakpointshould return correct indexes', () => {
    const tinyIndex = sliceIndexForBreakpoint('tiny', [0, 1, 2]);
    expect(tinyIndex).toEqual(1);

    const smallIndex = sliceIndexForBreakpoint('small', [0, 1, 2]);
    expect(smallIndex).toEqual(1);

    const mediumIndex = sliceIndexForBreakpoint('medium', [0, 1, 2]);
    expect(mediumIndex).toEqual(1);

    const largeIndex = sliceIndexForBreakpoint('large', [0, 1, 2, 3]);
    expect(largeIndex).toEqual(2);

    const hugeIndex = sliceIndexForBreakpoint('huge', [0, 1, 2, 3, 4]);
    expect(hugeIndex).toEqual(3);

    const enormousIndex = sliceIndexForBreakpoint('enormous', [0, 1, 2, 3, 4, 5]);
    expect(enormousIndex).toEqual(4);
  });

  it('sliceIndexForBreakpointshould return min indexes', () => {
    const tinyIndex = sliceIndexForBreakpoint('tiny', [0]);
    expect(tinyIndex).toEqual(1);

    const smallIndex = sliceIndexForBreakpoint('small', [0]);
    expect(smallIndex).toEqual(1);

    const mediumIndex = sliceIndexForBreakpoint('medium', [0]);
    expect(mediumIndex).toEqual(1);

    const largeIndex = sliceIndexForBreakpoint('large', [0, 1]);
    expect(largeIndex).toEqual(2);

    const hugeIndex = sliceIndexForBreakpoint('huge', [0, 1]);
    expect(hugeIndex).toEqual(2);

    const enormousIndex = sliceIndexForBreakpoint('enormous', [0, 1, 2]);
    expect(enormousIndex).toEqual(3);
  });
});
