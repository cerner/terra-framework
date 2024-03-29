import React from 'react';
import SubSection from '../../src/subcomponents/SubSection';

const cols = [
  { id: 'Column-0', displayName: 'Vitals' },
  { id: 'Column-1', displayName: 'March 16' },
  { id: 'Column-2', displayName: 'March 17', isSelectable: false },
];

describe('SubSection', () => {
  it('verifies that the table created is consistent with the rows and overflowColumns props', () => {
    const wrapper = enzyme.shallow(
      <SubSection
        id="subsection-0"
        tableId="table-0"
        subSectionRowIndex={0}
        text="Test SubSection"
        displayedColumns={cols}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
