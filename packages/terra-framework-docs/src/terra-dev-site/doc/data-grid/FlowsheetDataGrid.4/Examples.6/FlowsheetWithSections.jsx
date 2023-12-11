import React, { useCallback, useState } from 'react';
import { FlowsheetDataGrid } from 'terra-data-grid';

const gridDataJSON = {
  cols: [
    {
      id: 'Column-0', displayName: 'Patient', isSelectable: true,
    },
    {
      id: 'Column-1', displayName: 'Location', isSelectable: true,
    },
    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },
    { id: 'Column-3', displayName: 'Visit' },
    { id: 'Column-4', displayName: 'Allergy' },
    { id: 'Column-5', displayName: 'Primary Contact' },

  ],
  sections: [{
    id: 'section-0',
    isCollapsible: true,
    text: 'Test Section',
    rows: [
      {
        id: '1',
        cells: [
          { content: 'Fleck, Arthur' },
          { content: '1007-MTN' },
          { content: 'Unstable' },
          { content: 'Inpatient, 2 months' },
          { content: '' },
          { content: 'Quinzell, Harleen' },
        ],
      },
      {
        id: '2',
        cells: [
          { content: 'Wayne, Bruce' },
          { content: '1007-MTN-DR' },
          { content: 'Stable' },
          { content: 'Outpatient, 2 days' },
          { content: 'Phytochemicals' },
          { content: 'Grayson, Richard' },
        ],
      },
    ],
  },
  {
    id: 'section-1',
    text: 'Test Section #2',
    rows: [
      {
        id: '3',
        cells: [
          { content: 'Parker, Peter' },
          { content: '1007-MTN' },
          { content: 'Unstable' },
          { content: 'Inpatient, 2 months' },
          { content: '' },
          { content: 'Octopus, Doctor' },
        ],
      },
      {
        id: '4',
        cells: [
          { content: 'Stark, Tony' },
          { content: '1007-MTN-DR' },
          { content: 'Stable' },
          { content: 'Outpatient, 2 days' },
          { content: 'Phytochemicals' },
          { content: 'America, Captain' },
        ],
      },
    ],
  }],
};

const FlowsheetWithSections = () => {
  const [tableSections, setTableSections] = useState(gridDataJSON.sections);

  const handleSectionSelect = (sectionId) => {
    const newSections = [...tableSections];
    const sectionIndex = newSections.findIndex(section => section.id === sectionId);

    const sectionToClear = newSections.find(section => section.id === sectionId);

    sectionToClear.rows = sectionToClear.rows.map(row => ({
      ...row,
      cells: row.cells.map(cell => ({
        ...cell,
        isSelected: false,
      })),
    }));

    if (sectionIndex > -1) {
      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;
    }

    setTableSections(newSections);
  };

  const getClearedSections = useCallback(() => tableSections.map(section => ({
    ...section,
    rows: section.rows.map(row => ({
      ...row,
      cells: row.cells.map(cell => ({
        ...cell,
        isSelected: false,
      })),
    })),
  })), [tableSections]);

  const onCellSelect = useCallback((selectedCell) => {
    let selectedSection = tableSections.find(section => section.id === selectedCell.sectionId);

    const columnIndex = gridDataJSON.cols.findIndex(col => col.id === selectedCell.columnId);
    const rowIndex = selectedSection.rows.findIndex(row => row.id === selectedCell.rowId);
    const previousCell = selectedSection.rows[rowIndex].cells[columnIndex];

    const newSections = getClearedSections();

    //   // If the current cell is the only selected cell, toggle it to unselected. Otherwise, set it to selected.
    selectedSection = newSections.find(section => section.id === selectedCell.sectionId);
    selectedSection.rows[rowIndex].cells[columnIndex].isSelected = !previousCell.isSelected;
    setTableSections(newSections);
  }, [tableSections, getClearedSections]);

  const handleCellRangeSelection = useCallback((cells) => {
    const columnIndexesToUpdate = new Set(cells
      .map(cell => cell.columnId)
      .map(id => gridDataJSON.cols.findIndex(col => col.id === id)));

    const rowsToUpdate = new Set(cells.map(cell => cell.rowId));

    const newSections = getClearedSections();
    const selectedSection = newSections.find(section => section.id === cells[0].sectionId);

    selectedSection.rows = selectedSection.rows.map(row => ({
      ...row,
      cells: row.cells.map((cell, cellIndex) => ({
        ...cell,
        isSelected: columnIndexesToUpdate.has(cellIndex) && rowsToUpdate.has(row.id),
      })),
    }));

    setTableSections(newSections);
  }, [getClearedSections]);

  const onClearSelectedCells = () => {
    setTableSections(getClearedSections());
  };

  return (
    <FlowsheetDataGrid
      id="flowsheet-with-sections"
      columns={gridDataJSON.cols}
      sections={tableSections}
      onSectionSelect={handleSectionSelect}
      onCellRangeSelect={handleCellRangeSelection}
      onCellSelect={onCellSelect}
      onClearSelectedCells={onClearSelectedCells}
    />
  );
};

export default FlowsheetWithSections;
