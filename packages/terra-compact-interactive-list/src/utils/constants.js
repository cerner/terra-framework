export const widthUnitTypes = {
  PX: 'px',
  EM: 'em',
  REM: 'rem',
};

export const DefaultListValues = {
  columnMinimumWidth: {
    [widthUnitTypes.PX]: 60,
    [widthUnitTypes.EM]: 2,
    [widthUnitTypes.REM]: 2,
  },
  minimumWidth: {
    [widthUnitTypes.PX]: 500,
    [widthUnitTypes.EM]: 10,
    [widthUnitTypes.REM]: 10,
  },
  columnMaximumWidth: {
    [widthUnitTypes.PX]: 1000,
    [widthUnitTypes.EM]: 100,
    [widthUnitTypes.REM]: 100,
  },
  maximumWidth: {
    [widthUnitTypes.PX]: 5000,
    [widthUnitTypes.EM]: 500,
    [widthUnitTypes.REM]: 500,
  },
};
