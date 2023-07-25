
import ERRORS from '../utils/constants';

const validateRowHeaderIndex = (props) => {
  if (!Number.isInteger(props.rowHeaderIndex)) {
    return new Error(ERRORS.ROW_HEADER_INDEX_NOT_AN_INTEGER);
  }

  if (props.rowHeaderIndex < 0) {
    return new Error(ERRORS.ROW_HEADER_INDEX_LESS_THAN_ZERO);
  }

  if (props.pinnedColumns.length && props.rowHeaderIndex >= props.pinnedColumns.length) {
    return new Error(ERRORS.ROW_HEADER_INDEX_EXCEEDS_PINNED);
  }

  return;
};

export default validateRowHeaderIndex;
