import React from 'react';
import PropTypes from 'prop-types';
import * as KeyCode from 'keycode-js';
import classNames from 'classnames/bind';
import '../_elementPolyfill';
import styles from '../WorklistDataGrid.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String identifier of the row.
   */
  id: PropTypes.string.isRequired,
  /**
   * String that specifies height of the row. Any valid CSS width value is accepted.
   */
  height: PropTypes.string,
  /**
   * Boolean indicating whether the row is actively selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Boolean indicating whether or not the DataGrid should allow entire rows to be selectable. An additional column will be
   * rendered to allow for row selection to occur.
   */
  isRowSelectionModeEnabled: PropTypes.bool,
  /**
   * Function that will be called when a row is selected. Parameters: `onRowSelect(rowId)`
   */
  onRowSelect: PropTypes.func,

  onClearRowSelection: PropTypes.func,
  /**
   * Content that will rendered within the row.
   */
  children: PropTypes.node,
};

const defaultProps = {
  isRowSelectionModeEnabled: false,
};

function Row(props) {
  const {
    id,
    height,
    isSelected,
    isRowSelectionModeEnabled,
    onRowSelect,
    onClearRowSelection,
    children,
    ...customProps
  } = props;

  const selectAllRows = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_A:
        if (!isRowSelectionModeEnabled) return false;

        if (event.ctrlKey || event.metaKey) {
          if (onRowSelect) {
            onRowSelect(null, true);
          }
          return true;
        }
        break;
      default:
    }
    return false;
  };

  const handleKeyDown = (event) => {
    if (selectAllRows(event)) {
      // Prevent default behavior of selecting everything on the screen.
      event.preventDefault();
    }
  };

  const handleKeyUp = (event) => {
    if (!isRowSelectionModeEnabled) {
      return;
    }
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_RETURN:
        return;
      case KeyCode.KEY_SPACE:
        if (onRowSelect) {
          onRowSelect(id, false, customProps.rowIndex);
        }
        event.preventDefault();
        break;
      case KeyCode.KEY_ESCAPE:
        if (isRowSelectionModeEnabled) {
          if (onClearRowSelection) {
            onClearRowSelection();
          }
        }
        event.preventDefault();
        break;
      default:
    }
  };

  const handleClick = () => {
    if (!isRowSelectionModeEnabled) {
      return;
    }
    if (onRowSelect) {
      onRowSelect(id, false, customProps.rowIndex);
    }
  };

  return (
    <tr
      key={id}
      id={id}
      className={
        cx([isSelected ? 'worklist-data-grid-row-selected' : 'worklist-data-grid-row'])
      }
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    // eslint-disable-next-line react/forbid-dom-props
      style={{ height }}
    >
      {children}
    </tr>
  );
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
