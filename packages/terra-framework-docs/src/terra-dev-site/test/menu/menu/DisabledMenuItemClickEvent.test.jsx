import React from 'react';
import Table from 'terra-table';
import Menu from 'terra-menu';
import Button from 'terra-button';

export default class AppPlan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedKey: null,
      buttonNode: null,
      menuOpen: false,
    };
    this.rowSelected = this.rowSelected.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.createCellsForRow = this.createCellsForRow.bind(this);
    this.createCell = this.createCell.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleRequestClose() {
    this.setState({ menuOpen: false });
  }

  handleButtonClick(event) {
    event.stopPropagation();
    this.setState({ menuOpen: true });
  }

  getButtonNode() {
    return this.state.buttonNode;
  }

  setButtonNode(y) {
    this.setState({ buttonNode: y });
  }

  rowSelected(x) {
    this.setState({ selectedKey: x });
  }

  createCell(cell) {
    if (cell.title === '123-456-7890') {
      /* eslint-disable no-alert */
      const addAlert = () => {
        alert('Menu item is clicked');
      };
      /* eslint-enable no-alert */
      const menu = (
        <div className="wrapper" ref={this.setButtonNode}>
          <Menu
            isOpen={this.state.menuOpen}
            targetRef={this.getButtonNode}
            onRequestClose={this.handleRequestClose}
            isArrowDisplayed
          >
            <Menu.Item text="Manage" key="manage-in-new-tab" className="CarePlanMenu" id="care-plans-rollup-ManageItem" onClick={addAlert} />
            <Menu.Divider key="Divider1" />
            <Menu.Item text="Modify" isDisabled key="modify" id="care-plans-rollup-modifyItem" onClick={addAlert} />
          </Menu>
          <Button onClick={this.handleButtonClick} id="actions" text="Actions" />
        </div>

      );
      return { key: cell.key, children: menu };
    }
    return { key: cell.key, children: cell.title };
  }

  createCellsForRow(cells) {
    return cells.map(cell => this.createCell(cell));
  }

  render() {
    const mockData = [{
      key: 'unique-0',
      toggleText: 'Toggle Power Row 0',
      discloseText: 'Power Row 0 - Details',
      primaryIndex: 1,
      cells: [{
        key: 'unique-0-0',
        title: 'Dave Smith',
      }, {
        key: 'unique-0-1',
        title: '123 Adams Drive',
      }, {
        key: 'unique-0-2',
        title: 'dave.smith@gmail.com',
      }, {
        key: 'unique-0-3',
        title: '123-456-7890',
      }],
    }, {
      key: 'unique-1',
      toggleText: 'Toggle Power Row 1',
      discloseText: 'Power Row 1 - Details',
      primaryIndex: 1,
      cells: [{
        key: 'unique-1-0',
        title: 'Michael Smith',
      }, {
        key: 'unique-1-1',
        title: '345 Raymond Road',
      }, {
        key: 'unique-1-2',
        title: 'michael.smith@gmail.com',
      }, {
        key: 'unique-1-3',
        title: <div id="no-actions">No Actions</div>,
      }],
    }];

    const handleRowToggle = (event, metaData) => {
      event.preventDefault();
      if (this.state.selectedKey !== metaData.key) {
        this.rowSelected(metaData.key);
      }
    };

    const createRow = rowData => (
      {
        key: rowData.key,
        cells: this.createCellsForRow(rowData.cells),
        toggleAction: {
          metaData: { key: rowData.key },
          onToggle: handleRowToggle,
          isToggled: this.state.selectedKey === rowData.key,
          toggleLabel: rowData.toggleText,
        },
      }
    );

    const createRows = data => data.map(childItem => createRow(childItem));

    return (
      <Table
        summaryId="example-single-select"
        summary="This table shows an implementation of single row selection."
        numberOfColumns={4}
        cellPaddingStyle="standard"
        rowStyle="toggle"
        dividerStyle="horizontal"
        headerData={{
          selectAllColumn: {
            checkLabel: 'Single Selection',
          },
          cells: [
            { key: 'cell-0', id: 'toggle-0', children: 'Name' },
            { key: 'cell-1', id: 'toggle-1', children: 'Address' },
            { key: 'cell-2', id: 'toggle-2', children: 'Email Id' },
            { key: 'cell-3', id: 'toggle-3', children: 'Actions' },
          ],
        }}
        bodyData={[
          {
            rows: createRows(mockData),
          },
        ]}
      />
    );
  }
}
