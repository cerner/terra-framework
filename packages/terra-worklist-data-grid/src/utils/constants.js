const ERRORS = {};
ERRORS.ROW_HEADER_INDEX_EXCEEDS_PINNED = 'Prop rowHeaderIndex exceeds the size of pinned columns. If pinnedColumns is not provided then the first overflowColumn will be pinned and rowHeaderIndex should be set to 0.';
ERRORS.ROW_HEADER_INDEX_LESS_THAN_ZERO = 'Prop rowHeaderIndex must be a positive integer.';
ERRORS.ROW_HEADER_INDEX_NOT_AN_INTEGER='Prop rowHeaderIndex must be an integer.';

export default ERRORS;
