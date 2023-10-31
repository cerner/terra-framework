import React from 'react';
import CompactInteractiveList from 'terra-compact-interactive-list';
import dataFile from './dataFile';

const CompactInteractiveListGrowColumn = () => (
  <CompactInteractiveList rows={dataFile.rows} columns={dataFile.cols} numberOfColumns={3} />
);

export default CompactInteractiveListGrowColumn;
