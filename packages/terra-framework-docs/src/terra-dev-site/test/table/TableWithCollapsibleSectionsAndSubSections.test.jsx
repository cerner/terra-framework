import React, { useState } from 'react';
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
    subsections: [
      {
        id: 'subsection-0',
        text: 'Test SubSection',
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
        id: 'subsection-1',
        text: 'Test SubSection #2',
        rows: [
          {
            id: '3',
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
            id: '4',
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
    ],
  },
  {
    id: 'section-1',
    isCollapsible: true,
    isCollapsed: true,
    text: 'Test Section #2',
    subsections: [
      {
        id: 'subsection-2',
        text: 'Test SubSection',
        rows: [
          {
            id: '5',
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
            id: '6',
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
      },
      {
        id: 'subsection-3',
        text: 'Test SubSection #2',
        rows: [
          {
            id: '7',
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
            id: '8',
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

  return (
    <Table
      id="table-with-sub-sections"
      overflowColumns={tableData.cols}
      sections={tableSections}
      onSectionSelect={handleSectionSelect}
    />
  );
};

export default TableWithCollapsibleSections;
