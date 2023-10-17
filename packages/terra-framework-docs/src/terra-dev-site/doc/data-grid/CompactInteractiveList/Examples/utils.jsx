/* eslint-disable no-alert */
/* eslint-disable react/forbid-dom-props */
/* eslint-disable react/button-has-type */
import React from 'react';
import { IconFeaturedOutlineYellow, IconOverDue } from 'terra-icon';

// eslint-disable-next-line react/button-has-type
const longContent = (
  <span>
    PARoxetine 25mg oral tablet
    {' '}
    <br />
    <span style={{ fontSize: '12px' }}>1 tab, every 6 hours, PRN as needed for pain</span>
  </span>
);

const contentWithOneButton = (
  <div>
    <span>Arterial Sheath Care</span>
    {' '}
    <button onClick={() => alert('button clicked!')}> Action 1 </button>
  </div>
);

const contentWithButtons = (
  <div>
    <span>Arterial Sheath Care</span>
    {' '}
    <button onClick={() => alert('button clicked!')}> Action 1 </button>
    {' '}
    <button onClick={() => alert('button clicked!')}> Action 2 </button>
  </div>
);

const gridDataJSON = {
  cols: [
    { id: 'Column-0', displayName: '1', width: 50 },
    { id: 'Column-1', displayName: '2', width: 300 },
    { id: 'Column-2', displayName: '3', width: 50 },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: <IconOverDue />, position: 'inner', isSelectable: false },
        { content: 'Discern Care Set', position: 'inner', isSelectable: false },
        { content: <IconFeaturedOutlineYellow />, isSelectable: false },
      ],
    },
    {
      id: '2',
      cells: [
        { content: <IconOverDue />, position: 'inner', isSelectable: false },
        { content: contentWithOneButton, position: 'inner', isSelectable: false },
        { content: <IconFeaturedOutlineYellow />, isSelectable: false },
      ],
    },
    {
      id: '3',
      cells: [
        { content: <IconOverDue />, position: 'inner', isSelectable: false },
        { content: contentWithOneButton, position: 'inner', isSelectable: false },
        { content: <IconFeaturedOutlineYellow />, isSelectable: false },
      ],
    },
    {
      id: '4',
      cells: [
        { content: ' ', position: 'inner', isSelectable: false },
        { content: contentWithButtons, position: 'inner', isSelectable: false },
        { content: <IconFeaturedOutlineYellow />, isSelectable: false },
      ],
    },
    {
      id: '5',
      cells: [
        { content: <IconOverDue />, position: 'inner', isSelectable: false },
        { content: longContent, position: 'inner', isSelectable: false },
        { content: <IconFeaturedOutlineYellow />, isSelectable: false },
      ],
    },
    {
      id: '6',
      cells: [
        { content: <IconOverDue />, position: 'inner', isSelectable: false },
        { content: 'Initial observation Care/Day Moderate Severity 99219', position: 'inner', isSelectable: false },
        { content: <IconFeaturedOutlineYellow />, isSelectable: false },
      ],
    },
    {
      id: '7',
      cells: [
        { content: ' ', position: 'inner', isSelectable: false },
        { content: 'Sbsq Observation Care/Day Low Severity 99004', position: 'inner', isSelectable: false },
        { content: <IconFeaturedOutlineYellow />, isSelectable: false },
      ],
    },
    {
      id: '8',
      cells: [
        { content: ' ', position: 'inner', isSelectable: false },
        { content: 'Subsequent Hospital Care 99231', position: 'inner', isSelectable: false },
        { content: <IconFeaturedOutlineYellow />, isSelectable: false },
      ],
    },
    {
      id: '9',
      cells: [
        { content: ' ', position: 'inner', isSelectable: false },
        { content: 'Subsequent Hospital Care 99232', position: 'inner', isSelectable: false },
        { content: <IconFeaturedOutlineYellow />, isSelectable: false },
      ],
    },
    {
      id: '10',
      cells: [
        { content: ' ', position: 'inner', isSelectable: false },
        { content: 'Subsequent Hospital Care 99233', position: 'inner', isSelectable: false },
        { content: <IconFeaturedOutlineYellow />, isSelectable: false },
      ],
    },
    {
      id: '11',
      cells: [
        { content: ' ', position: 'inner', isSelectable: false },
        { content: 'Subsequent Hospital Care 99234', position: 'inner', isSelectable: false },
        { content: <IconFeaturedOutlineYellow />, isSelectable: false },
      ],
    },
    {
      id: '12',
      cells: [
        { content: <IconOverDue />, position: 'inner', isSelectable: false },
        { content: 'Discern Care Set', position: 'inner', isSelectable: false },
        { content: <IconFeaturedOutlineYellow />, isSelectable: false },
      ],
    },
    {
      id: '13',
      cells: [
        { content: ' ', position: 'inner', isSelectable: false },
        { content: 'Arterial Sheath Care', position: 'inner', isSelectable: false },
        { content: <IconFeaturedOutlineYellow />, isSelectable: false },
      ],
    },
    {
      id: '14',
      cells: [
        { content: ' ', position: 'inner', isSelectable: false },
        { content: 'Arterial Sheath Care', position: 'inner', isSelectable: false },
        { content: ' ', isSelectable: false },
      ],
    },
  ],
};

export default gridDataJSON;
