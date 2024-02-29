import ERRORS from '../utils/constants';

// eslint-disable-next-line consistent-return
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
};

// eslint-disable-next-line consistent-return
const validateAction = (props) => {
  if (props.action) {
    if (!props.action.label || props.action.label.length < 1) {
      return new Error(ERRORS.ACTION_LABEL_MISSING);
    }

    if (!props.action.onClick) {
      return new Error(ERRORS.ACTION_ONCLICK_MISSING);
    }

    if (props.action.onClick && typeof props.action.onClick !== 'function') {
      return new Error(ERRORS.ACTION_ONCLICK_IS_NOT_A_FUNCTION);
    }
  }
};

export { validateRowHeaderIndex, validateAction };
