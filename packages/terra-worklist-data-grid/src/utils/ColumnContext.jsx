import React from 'react';

const ColumnContext = React.createContext({
  pinnedColumnsLength: 0,
  pinnedColumnOffsets: [],
});

export default ColumnContext;
