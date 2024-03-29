/**
 * Returns an object with the section ids and the row ids of the first row and last row in non-collapsed and non-empty sections.
 * @param {Object} Object conforming to the state.columnHighlightRowData shape.
 */
const getFirstAndLastVisibleRowData = (sections) => {
  const rowData = {
    firstRowId: null,
    lastRowId: null,
  };

  if (sections.length < 1) {
    /**
     * If the sections prop is empty, there is no work to do here.
     */
    return rowData;
  }

  const findNotEmptyOrCollapsed = section => {
    if (section.subsections) {
      return section.subsections.length > 0 && !section.isCollapsed;
    }
    return section.rows.length > 0 && !section.isCollapsed;
  };
  const visibleSections = sections.filter(findNotEmptyOrCollapsed);

  if (visibleSections.length < 1) {
    /**
     * If the filtered list is empty after removing sections that contain no rows,
     * plus removing sections that are collapsed, there is no more work to do here.
     */
    return rowData;
  }

  for (let i = 0; i < visibleSections.length; i += 1) {
    const { rows } = visibleSections[i];

    if (rows && rows.length) {
      rowData.firstRowId = rows[0].id;
      break;
    }
  }

  if (!rowData.firstRowId) {
    /**
     * If no first row is found after filtering out rows marked as decorative,
     * no last row will be found either. There is no more work to do here.
     */
    return rowData;
  }

  for (let i = visibleSections.length - 1; i >= 0; i -= 1) {
    const { rows } = visibleSections[i];

    if (rows && rows.length) {
      rowData.lastRowId = rows[rows.length - 1].id;
      break;
    }
  }

  return rowData;
};

const tableUtils = { getFirstAndLastVisibleRowData };

export default tableUtils;
