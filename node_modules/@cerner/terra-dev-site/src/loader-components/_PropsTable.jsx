/* eslint-disable react/forbid-dom-props */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { ThemeContext } from 'terra-application/lib/theme';
import Table, {
  Header,
  HeaderCell,
  Body,
  Cell,
} from 'terra-html-table';
import styles from './PropsTable.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Children for the component.
   */
  children: PropTypes.node,
};

const requiredCellPropTypes = {
  /**
   * Is the cell required?
   */
  isRequired: PropTypes.bool,
};

const PropNameCell = ({ children }) => (
  <Cell
    className={cx('bold')}
  >
    {children}
  </Cell>
);
PropNameCell.propTypes = propTypes;

const TypeCell = ({ children }) => (
  <Cell
    className={cx('code-block-override')}
  >
    {children}
  </Cell>
);
TypeCell.propTypes = propTypes;

const RequiredCell = ({ isRequired }) => (
  <Cell
    className={cx([
      isRequired ? ['required'] : [],
    ])}
  >
    {isRequired ? 'required' : 'optional'}
  </Cell>
);
RequiredCell.propTypes = requiredCellPropTypes;

const DefaultValueCell = ({ children }) => (
  <Cell
    className={cx('code-block-override')}
  >
    {children}
  </Cell>
);
DefaultValueCell.propTypes = propTypes;

const DescriptionCell = ({ children }) => (
  <Cell>{children}</Cell>
);
DescriptionCell.propTypes = propTypes;

const PropsTable = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <Table paddingStyle="compact" className={cx('table', theme.className)}>
      <Header className={cx('header')}>
        <HeaderCell>Prop</HeaderCell>
        <HeaderCell>Type</HeaderCell>
        <HeaderCell>Required</HeaderCell>
        <HeaderCell>Default</HeaderCell>
        <HeaderCell>Description</HeaderCell>
      </Header>
      <Body>
        {children}
      </Body>
    </Table>
  );
};

PropsTable.propTypes = propTypes;

export default PropsTable;
export { Row } from 'terra-html-table';
export {
  PropNameCell,
  TypeCell,
  RequiredCell,
  DefaultValueCell,
  DescriptionCell,
};

