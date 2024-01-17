import { ERRORS } from '../utils/constants';

// eslint-disable-next-line consistent-return
const validateRowHeaderIndex = (props) => {
  if (!Number.isInteger(props.rowHeaderIndex)) {
    return new Error(ERRORS.ROW_HEADER_INDEX_NOT_AN_INTEGER);
  }

  if (props.rowHeaderIndex < 0) {
    return new Error(ERRORS.ROW_HEADER_INDEX_LESS_THAN_ZERO);
  }

  if (props.columns.length && props.rowHeaderIndex >= props.columns.length) {
    return new Error(ERRORS.ROW_HEADER_INDEX_EXCEEDS_COLUMNS);
  }
};

export default validateRowHeaderIndex;
