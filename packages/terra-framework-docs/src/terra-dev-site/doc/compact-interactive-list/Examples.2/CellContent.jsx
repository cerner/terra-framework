import React, { useState, useCallback, useRef } from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';
import {
  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,
} from 'terra-icon';
import Button from 'terra-button';
import Hyperlink from 'terra-hyperlink';
import Checkbox, { CheckboxField } from 'terra-form-checkbox';
import Popup from 'terra-popup';
import BasicMenu from '../../menu/example/BasicMenu';

// eslint-disable-next-line no-alert
const buttonCell = <Button text="Learn more" onClick={() => alert('Learn more button was clicked')} />;
const anchorCell = <Hyperlink href="https://www.cerner.com" text="Documents" />;
const iconResultsNormal = <IconMultipleResultsNormal a11yLabel="Results normal" height="1.5em" width="1.5em" />;
const iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel="Results not normal" height="1.5em" width="1.5em" />;
const iconResultsCritical = <IconMultipleResultsCritical a11yLabel="Results critical" height="1.5em" width="1.5em" />;

const updateRows = (rowsToUpdate, columns, selectionDetails) => {
  const columnIndex = columns.findIndex(column => selectionDetails?.columnId === column.id);
  return [...rowsToUpdate.map(row => {
    const newRow = {
      ...row,
      cells: [...row.cells.map((cell, index) => {
        const isSelectedCell = selectionDetails?.rowId === row.id && index === columnIndex;
        // eslint-disable-next-line no-nested-ternary
        const isSelected = isSelectedCell ? !cell.isSelected : false;
        return { ...cell, isSelected };
      })],
    };
    return newRow;
  })];
};

const FeaturedIcon = () => {
  const [isFeatured, setIsFeatured] = useState(false);
  const onButtonClick = () => setIsFeatured(!isFeatured);
  return (
    isFeatured
      ? <Button variant="utility" text="Unfavorite item" icon={<IconFeatured />} onClick={onButtonClick} />
      : <Button variant="utility" text="Favorite item" icon={<IconFeaturedOff />} onClick={onButtonClick} />
  );
};

const PopupWithInteractiveContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const buttonRef = useRef(null);

  const setButtonNode = useCallback((node) => { buttonRef.current = node; }, []);
  const getButtonNode = useCallback(() => buttonRef.current, []);
  const handleButtonClick = useCallback(() => { setIsOpen(true); }, []);
  const handleRequestClose = useCallback(() => { setIsOpen(false); }, []);
  const closeAndSetFocus = useCallback(() => {
    handleRequestClose();
    buttonRef.current.focus();
  }, [handleRequestClose]);

  const handleOnChange = useCallback((e) => {
    const selectedAnswers = [...selected];
    if (e.currentTarget.checked) {
      selectedAnswers.push(e.currentTarget.value);
    } else {
      selectedAnswers.splice(selectedAnswers.indexOf(e.currentTarget.value), 1);
    }
    setSelected(selectedAnswers);
  }, [selected]);

  return (
    <>
      <Button text="Clinical Suite" onClick={handleButtonClick} refCallback={setButtonNode} />
      <Popup
        isOpen={isOpen}
        targetRef={getButtonNode}
        onRequestClose={handleRequestClose}
        contentHeight="auto"
      >
        {/* eslint-disable-next-line react/forbid-dom-props */}
        <div style={{ padding: '1em' }}>
          <CheckboxField legend="Do you want to use any of our clinical applications?">
            <Checkbox id="drug-database" name="applications[]" labelText="Drug Database" onChange={handleOnChange} value="drug-database" />
            <Checkbox id="vitals-collection" name="applications[]" labelText="Vitals Collection" onChange={handleOnChange} value="vitals-collection" />
            <Checkbox id="immunization-manager" name="applications[]" labelText="Immunization Manager" onChange={handleOnChange} value="immunization-manager" />
          </CheckboxField>
          <Button text="Submit Request" onClick={closeAndSetFocus} />
        </div>
      </Popup>
    </>
  );
};

const rows = [
  {
    id: 'row_1',
    cells: [
      { content: iconResultsNormal },
      { content: 'Discern Care Set (1)' },
      { content: <BasicMenu /> },
      { content: <FeaturedIcon /> },
    ],
  },
  {
    id: 'row_2',
    cells: [
      { content: iconResultsNormal },
      { content: 'Initial Observation Care/Day High Severity 99220 (2)' },
      { content: buttonCell },
      { content: <FeaturedIcon /> },
    ],
  },
  {
    id: 'row_3',
    cells: [
      { content: iconResultsNotNormal },
      { content: 'Arterial Sheath Care (3)' },
      { content: anchorCell },
      { content: <FeaturedIcon /> },
    ],
  },
  {
    id: 'row_4',
    cells: [
      { content: ' ' },
      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },
      { content: <PopupWithInteractiveContent /> },
      { content: <FeaturedIcon /> },
    ],
  },
  {
    id: 'row_5',
    cells: [
      { content: iconResultsCritical },
      { content: 'Arterial Sheath Care (5)' },
      { content: anchorCell },
      { content: <FeaturedIcon /> },
    ],
  },
];

const cols = [
  {
    id: 'Column-0',
    displayName: 'Status',
    width: '50px',
    align: alignTypes.CENTER,
    isSelectable: true,
  },
  {
    id: 'Column-1',
    displayName: 'Service name',
    width: '250px', // will be used as a css flexBasis
    flexGrow: true, // makes the column grow or shrink
    maximumWidth: '350px',
    minimumWidth: '100px',
    isSelectable: true,
  },
  {
    id: 'Column-2',
    displayName: 'Details',
    width: '225px',
    align: alignTypes.RIGHT,
    isSelectable: true,
  },
  {
    id: 'Column-3',
    displayName: 'Featured',
    width: '50px',
    align: alignTypes.CENTER,
    isSelectable: true,
  },
];

const CellContent = () => {
  const [displayedRows, setDisplayedRows] = useState(rows);

  const onCellSelect = useCallback(({ rowId, columnId }) => {
    setDisplayedRows(updateRows(displayedRows, cols, { rowId, columnId }));
  }, [displayedRows]);

  const onClearSelection = useCallback(() => {
    setDisplayedRows(updateRows(displayedRows, cols));
  }, [displayedRows]);

  return (
    <CompactInteractiveList
      id="compact-interactive-list-cell-content"
      ariaLabel="Compact Interactive List"
      rows={displayedRows}
      columns={cols}
      numberOfColumns={2}
      columnMinimumWidth="234px"
      onCellSelect={onCellSelect} // a callback function for cell selection
      onClearSelection={onClearSelection}
      rowHeaderIndex={1}
      rowHeight="50px"
    />
  );
};

export default CellContent;
