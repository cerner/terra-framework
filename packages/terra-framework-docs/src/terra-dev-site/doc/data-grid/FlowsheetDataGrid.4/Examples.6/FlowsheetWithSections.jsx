import React, { useState, useCallback } from 'react';
import { FlowsheetDataGrid } from 'terra-data-grid';

const gridDataJSON = {
  cols: [
    {
      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', isSelectable: true,
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
  const { cols, sections } = gridDataJSON;
  const [sectionData, setSectionData] = useState(sections);

  const handleSectionSelect = (sectionId) => {
    const newSections = [...sectionData];
    const sectionIndex = newSections.findIndex(section => section.id === sectionId);

    if (sectionIndex > -1) {
      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;
    }

    setSectionData(newSections);
  };

  const onCellSelect = useCallback((sectionId, rowId, columnId) => {
    const sectionIndex = sectionData.findIndex(section => section.id === sectionId);

    const rowIndex = sectionData[sectionIndex].rows.findIndex(row => row.id === rowId);
    const columnIndex = cols.findIndex(column => column.id === columnId);

    // Remove cell selections, excluding current cell
    const newSectionData = [...sectionData];
    for (let section = 0; section < sectionData.length; section += 1) {
      newSectionData[section].rows = [...sectionData[section].rows];
      for (let row = 0; row < sectionData[section].rows.length; row += 1) {
        const newRowData = { ...sectionData[section].rows[row] };
        newSectionData[section].rows[row] = newRowData;
        newRowData.cells = [...newRowData.cells];
        for (let cell = 0; cell < newRowData.cells.length; cell += 1) {
          const newCellData = { ...newRowData.cells[cell] };
          newRowData.cells[cell] = newCellData;

          const currentCell = newCellData;
          if (currentCell.isSelected && !(section === sectionIndex && row === rowIndex && cell === columnIndex)) {
            currentCell.isSelected = false;
          }
        }
      }
    }

    // Toggle selection state of selected cell
    newSectionData[sectionIndex].rows[rowIndex].cells[columnIndex].isSelected = !newSectionData[sectionIndex].rows[rowIndex].cells[columnIndex].isSelected;
    setSectionData(newSectionData);
  }, [cols, sectionData]);

  const onClearSelectedCells = useCallback(() => {
    // Remove current selections
    const newSectionData = [...sectionData];
    for (let section = 0; section < sectionData.length; section += 1) {
      newSectionData[section].rows = [...sectionData[section].rows];
      for (let row = 0; row < sectionData[section].rows.length; row += 1) {
        const newRowData = { ...sectionData[section].rows[row] };
        newSectionData[section].rows[row] = newRowData;
        newRowData.cells = [...newRowData.cells];
        for (let cell = 0; cell < newRowData.cells.length; cell += 1) {
          const newCellData = { ...newRowData.cells[cell] };
          newRowData.cells[cell] = newCellData;
          newCellData.isSelected = false;
        }
      }
    }

    setSectionData(newSectionData);
  }, [sectionData]);

  const onCellRangeSelect = useCallback((cells) => {
    // Remove current selections
    const newSectionData = [...sectionData];
    for (let section = 0; section < sectionData.length; section += 1) {
      newSectionData[section].rows = [...sectionData[section].rows];
      for (let row = 0; row < sectionData[section].rows.length; row += 1) {
        const newRowData = { ...sectionData[section].rows[row] };
        newSectionData[section].rows[row] = newRowData;
        newRowData.cells = [...newRowData.cells];
        for (let cell = 0; cell < newRowData.cells.length; cell += 1) {
          const newCellData = { ...newRowData.cells[cell] };
          newRowData.cells[cell] = newCellData;
          newCellData.isSelected = false;
        }
      }
    }

    cells.forEach((cell) => {
      const sectionIndex = sectionData.findIndex(section => section.id === cell.sectionId);
      const rowIndex = sectionData[sectionIndex].rows.findIndex(row => row.id === cell.rowId);
      const columnIndex = cols.findIndex(column => column.id === cell.columnId);

      newSectionData[sectionIndex].rows[rowIndex].cells[columnIndex].isSelected = true;
    });

    setSectionData(newSectionData);
  }, [cols, sectionData]);

  return (
    <FlowsheetDataGrid
      id="flowsheet-with-sections"
      columns={gridDataJSON.cols}
      sections={sectionData}
      onSectionSelect={handleSectionSelect}
      onCellSelect={onCellSelect}
      onClearSelectedCells={onClearSelectedCells}
      onCellRangeSelect={onCellRangeSelect}
      isStriped
    />
  );
};

export default FlowsheetWithSections;
