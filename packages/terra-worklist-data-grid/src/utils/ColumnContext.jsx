import React from 'react';

const ColumnContext = React.createContext({
  pinnedColumnsLength: 0,
  pinnedColumnOffsets: [],
  pinnedColumnsTotalWidth: 0,
});

export default ColumnContext;
