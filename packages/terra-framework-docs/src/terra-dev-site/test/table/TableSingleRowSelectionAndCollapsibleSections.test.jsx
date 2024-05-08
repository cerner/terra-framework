import React, { useState, useCallback } from 'react';
import Table from 'terra-table';

const tableData = {
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
    isCollapsed: false,
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
    isCollapsible: true,
    isCollapsed: false,
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

const TableSingleRowSelectionAndCollapsibleSections = () => {
  const rowHeaderIndex = 0;
  const { cols } = tableData;
  const [tableSections, setTableSections] = useState(tableData.sections);

  const handleSectionSelect = (sectionId) => {
    const newSections = [...tableSections];
    const sectionIndex = newSections.findIndex(section => section.id === sectionId);

    if (sectionIndex > -1) {
      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;
    }

    setTableSections(newSections);
  };

  // const onRowSelect = useCallback((rowSelection) => {
  //   const { rowId } = rowSelection;

  //   const newRowData = [...rowData];

  //   const dataRowToUpdate = newRowData.find(row => row.id === rowId);

  //   newRowData.forEach((row) => {
  //     if (row.id !== dataRowToUpdate.id) {
  //       // eslint-disable-next-line no-return-assign, no-param-reassign
  //       row.isSelected = false;
  //     }
  //   });

  //   dataRowToUpdate.isSelected = !dataRowToUpdate.isSelected;

  //   setRowData(newRowData);
  // }, [rowData]);

  const onRowSelect = useCallback((rowSelection) => {
    const { sectionId, rowId } = rowSelection;

    const newSections = [...tableSections];
    const currentSection = newSections.find(section => section.id === sectionId);

    const currentSectionRows = [...currentSection.rows];
    const dataRowToUpdate = currentSectionRows.find(row => row.id === rowId);

    newSections.forEach((section) => {
      const sectionRowData = [...section.rows];
      sectionRowData.forEach((row) => {
        if (row.id !== dataRowToUpdate.id) {
          // eslint-disable-next-line no-return-assign, no-param-reassign
          row.isSelected = false;
        }
      });

      // eslint-disable-next-line no-param-reassign
      section.rows = sectionRowData;
    });

    dataRowToUpdate.isSelected = !dataRowToUpdate.isSelected;
    setTableSections(newSections);
  }, [tableSections]);

  return (
    <Table
      id="table-with-single-row-selection"
      overflowColumns={cols}
      sections={tableSections}
      rowHeaderIndex={rowHeaderIndex}
      columnWidth="180px"
      ariaLabel="Table with Single Row Selection And Collapsible Sections"
      rowSelectionMode="single" // Prop to turn row selection mode on/off
      onRowSelect={onRowSelect} // For row selection, consumer must provide a callback that the Worklist Data Grid will call when the user selects one or more rows.
      onSectionSelect={handleSectionSelect}
    />
  );
};

export default TableSingleRowSelectionAndCollapsibleSections;
