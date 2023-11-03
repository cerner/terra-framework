export const WidthValueTypes = {
  PX: 'px',
  EM: 'em',
  REM: 'rem',
};

export const DefaultListValues = {
  columnMinimumWidth: {
    [WidthValueTypes.PX]: 60,
    [WidthValueTypes.EM]: 10,
    [WidthValueTypes.REM]: 10,
  },
  minimumWidth: {
    [WidthValueTypes.PX]: 500,
    [WidthValueTypes.EM]: 50,
    [WidthValueTypes.REM]: 50,
  },
  columnMaximumWidth: {
    [WidthValueTypes.PX]: 1000,
    [WidthValueTypes.EM]: 100,
    [WidthValueTypes.REM]: 100,
  },
  maximumWidth: {
    [WidthValueTypes.PX]: 5000,
    [WidthValueTypes.EM]: 500,
    [WidthValueTypes.REM]: 500,
  },
};
