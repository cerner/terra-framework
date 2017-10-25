import PropTypes from 'prop-types';
import { getCustomProps } from '../../src/utilities';

describe('utilities', () => {
  describe('getCustomProps', () => {
    it('filters out custom props', () => {
      const propTypes = {
        prop1: PropTypes.string,
        prop2: PropTypes.string,
        prop3: PropTypes.string,
      };

      const props = {
        prop1: '1',
        prop2: '2',
        prop3: '3',
        prop4: '4',
        prop5: '5',
      };

      expect(getCustomProps(props, propTypes)).toEqual({
        prop4: '4',
        prop5: '5',
      });
    });
  });
});
