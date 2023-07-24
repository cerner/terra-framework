import ERRORS from '../utils/constants';

const validateRowHeader = (props, propName, componentName) => {
  if(!Number.isInteger(props.rowHeaderIndex)) {
    throw new Error(ERRORS.ROW_HEADER_INDEX_NOT_AN_INTEGER);
  }

  if(props.rowHeaderIndex < 0) {
    throw new Error(ERRORS.ROW_HEADER_INDEX_LESS_THAN_ZERO);
  }

  if (props.rowHeaderIndex === 0 && props.pinnedColumns.length === 0) {
    return;
  }

  if(props.rowHeaderIndex >= props.pinnedColumns.length) {
    throw new Error(ERRORS.ROW_HEADER_INDEX_EXCEEDS_PINNED);
  }
}

export default validateRowHeader;
