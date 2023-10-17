import React from 'react';
import { CompactInteractiveList } from 'terra-data-grid';
import gridDataJSON from './utils';

const DefaultCompactInteractiveList = () => {
  const rowHeaderIndex = 0;
  const { cols, rows } = gridDataJSON;

  return (
    <CompactInteractiveList
      id="default-compact-interactive-list"
      columns={cols}
      rows={rows}
      rowHeaderIndex={rowHeaderIndex}
      ariaLabel="Compact Interactive List"
      zebraPatternOn={false}
      numberOfColumns={2}
    />
  );
};

export default DefaultCompactInteractiveList;
