import React from 'react';
import CompactInteractiveList from 'terra-compact-interactive-list';
import dataFile from './dataFile';

const CompactInteractiveListSetWidth = () => (
  <CompactInteractiveList rows={dataFile.rows} columns={dataFile.cols} width="800px" numberOfColumns={2} />
);

export default CompactInteractiveListSetWidth;
