import * as utils from '../../src/utils/utils';

describe('Compact Interactive List utils', () => {
  describe('converseColumnTypes', () => {
    it('should converse columns with consistent width props correctly', () => {
      const colsConsistentWidth = [
        {
          id: 'Column-0',
          displayName: 'Col_1',
          width: '40px',
          minimumWidth: '20px',
        },
        {
          id: 'Column-1',
          displayName: 'Col_2',
          width: '200px',
          maximumWidth: '300px',
          minimumWidth: '200px',
        },
        {
          id: 'Column-2',
          displayName: 'Col_3',
          width: '40px',
        },
      ];
      const conversedColsConsistentWidth = [
        {
          id: 'Column-0',
          displayName: 'Col_1',
          width: 40,
          minimumWidth: 20,
        },
        {
          id: 'Column-1',
          displayName: 'Col_2',
          width: 200,
          maximumWidth: 300,
          minimumWidth: 200,
        },
        {
          id: 'Column-2',
          displayName: 'Col_3',
          width: 40,
        },
      ];
      const result = utils.converseColumnTypes(colsConsistentWidth, 'px');
      expect(result[0]).toEqual(conversedColsConsistentWidth);
      expect(result[1]).toEqual('px');
    });

    it('should converse columns with inconsistent width props correctly', () => {
      const colsInconsistentWidth = [
        {
          id: 'Column-0',
          displayName: 'Col_1',
          width: '4em',
          minimumWidth: '20px', // should remove this prop as px inconsistent with em
        },
        {
          id: 'Column-1',
          displayName: 'Col_2',
          width: '200px', // should remove this prop as px inconsistent with em
          maximumWidth: '30em',
          minimumWidth: '10em',
        },
        {
          id: 'Column-2',
          displayName: 'Col_3',
          width: '40px', // should remove this prop as px inconsistent with em
        },
      ];
      const conversedColsInconsistentWidth = [
        {
          id: 'Column-0',
          displayName: 'Col_1',
          width: 4,
        },
        {
          id: 'Column-1',
          displayName: 'Col_2',
          maximumWidth: 30,
          minimumWidth: 10,
        },
        {
          id: 'Column-2',
          displayName: 'Col_3',
        },
      ];
      const result = utils.converseColumnTypes(colsInconsistentWidth, 'px');
      expect(result[0]).toEqual(conversedColsInconsistentWidth);
      expect(result[1]).toEqual('em');
    });

    it('should converse columns with no width props correctly', () => {
      const colsNoWidth = [
        {
          id: 'Column-0',
          displayName: 'Col_1',
        },
        {
          id: 'Column-1',
          displayName: 'Col_2',
        },
        {
          id: 'Column-2',
          displayName: 'Col_3',
        },
      ];
      const result = utils.converseColumnTypes(colsNoWidth, 'px');
      expect(result[0]).toEqual(colsNoWidth);
      expect(result[1]).toEqual('px');
    });
  });
});
