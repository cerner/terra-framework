/* eslint-disable react/forbid-dom-props */
import React from 'react';
import CompactInteractiveList from 'terra-compact-interactive-list';
import rows from './rowsData';

const cols = [
  {
    id: 'Column-0',
    displayName: 'Col_1',
    width: 5, // the widthUnit prop is set to "em"
    alignToCenter: true,
  },
  {
    id: 'Column-1',
    displayName: 'Col_2',
    // flexGrow prop is not set here, but as there is no width set, the column will be flex growing anyway
    maximumWidth: 25, // maximumWidth is reccomended for flex growing columns so that they don't grow beyond reasonable.
    minimunWidth: 7, // minimunWidth is reccomended for flex growing columns so that they don't squish beyond reasonable.
    // the widthUnit prop is set to "em", that will influence maximumWidth and minimunWidth props as well
  },
  {
    id: 'Column-2',
    displayName: 'Col_3',
    width: 5, // the widthUnit prop is set to "em"
    alignToCenter: true,
  },
];

const ScalableUnits = () => (
  <>
    <p>Inside the container with the regular font size:</p>
    <CompactInteractiveList
      id="growing-columns"
      rows={rows}
      columns={cols}
      numberOfColumns={2}
      widthUnit="em" // the widthUnit prop is set to "em" for the whole component, including columns props
    />
    <br />
    <p>
      Inside the container with the font size increased to 1.25em:
    </p>
    <div style={{ fontSize: '1.25em' }}>
      <CompactInteractiveList
        id="growing-columns"
        rows={rows}
        columns={cols}
        numberOfColumns={2}
        widthUnit="em" // the widthUnit prop is set to "em"
      />

    </div>

  </>
);

export default ScalableUnits;
