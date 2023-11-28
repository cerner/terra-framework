export const widthUnitTypes = {
  PX: 'px',
  EM: 'em',
  REM: 'rem',
};

export const DefaultListValues = {
  // minimumWidth and maximumWidth names are reserved for columns
  minimumWidth: {
    [widthUnitTypes.PX]: '60px',
    [widthUnitTypes.EM]: '3em',
    [widthUnitTypes.REM]: '3rem',
  },
  listMinimumWidth: {
    [widthUnitTypes.PX]: '500px',
    [widthUnitTypes.EM]: '10em',
    [widthUnitTypes.REM]: '10rem',
  },
  rowDefaultHeight: {
    [widthUnitTypes.PX]: '40px',
    [widthUnitTypes.EM]: '3.5em',
    [widthUnitTypes.REM]: '3.5rem',
  },
};

export const alignTypes = {
  CENTER: 'center',
  LEFT: 'left',
  RIGHT: 'right',
};

export const WARNINGS = {
  COLUMN_MIN_WIDTH_UNIT_TYPE: 'columnMinimumWidth prop has different unitType than the one used in columns. It will be disregarded and the default value will be used instead.',
  COLUMN_MAX_WIDTH_UNIT_TYPE: 'columnMaximumWidth prop has different unitType than the one used in columns. It will be disregarded.',
  COLUMN_WIDTH_INCONSISTENT_TYPE: 'width, minimumWidth, and maximumWidth properties should be of the same unit type across all the columns (px, em, and rem are supported types).',
};
