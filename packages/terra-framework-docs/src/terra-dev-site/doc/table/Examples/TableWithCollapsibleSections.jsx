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
    isCollapsed: true,
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

const TableWithCollapsibleSections = () => {
  const [tableSections, setTableSections] = useState(tableData.sections);

  const handleSectionSelect = (sectionId) => {
    const newSections = [...tableSections];
    const sectionIndex = newSections.findIndex(section => section.id === sectionId);

    if (sectionIndex > -1) {
      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;
    }

    setTableSections(newSections);
  };

  const onRowSelect = useCallback((rowSelection) => {
    const { sectionId, rowId } = rowSelection;

    const newSections = [...tableSections];

    const sectionIndex = newSections.findIndex(section => section.id === sectionId);

    const rowIndexToUpdate = newSections[sectionIndex].rows.findIndex(row => row.id === rowId);
    if (rowIndexToUpdate >= 0) {
      newSections[sectionIndex].rows[rowIndexToUpdate] = { ...newSections[sectionIndex].rows[rowIndexToUpdate] };
      newSections[sectionIndex].rows[rowIndexToUpdate].isSelected = !newSections[sectionIndex].rows[rowIndexToUpdate].isSelected;
    }

    setTableSections(newSections);
  }, [tableSections]);

  return (
    <Table
      id="table-with-sections"
      overflowColumns={tableData.cols}
      sections={tableSections}
      rowSelectionMode="multiple"
      onRowSelect={onRowSelect}
      onSectionSelect={handleSectionSelect}
    />
  );
};

export default TableWithCollapsibleSections;
