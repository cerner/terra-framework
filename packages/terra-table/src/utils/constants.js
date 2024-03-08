const ERRORS = {
  ROW_HEADER_INDEX_EXCEEDS_PINNED: 'Prop rowHeaderIndex exceeds the size of pinnedColumns.',
  ROW_HEADER_INDEX_LESS_THAN_MINUS_ONE: 'Prop rowHeaderIndex must be either -1 or a positive integer.',
  ROW_HEADER_INDEX_NOT_AN_INTEGER: 'Prop rowHeaderIndex must be an integer.',
  ACTION_LABEL_MISSING: 'Column action must have label property.',
  ACTION_ONCLICK_MISSING: 'Column action must have onClick callback.',
  ACTION_ONCLICK_IS_NOT_A_FUNCTION: 'Column action onClick property type is not a function.',
};

export default ERRORS;
