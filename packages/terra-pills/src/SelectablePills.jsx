import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import Pill from './Private/_Pill';
import styles from './Private/Pill.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * A collection of pills to render within the Selectable Pills Container body.
   */
  children: PropTypes.node,
  /**
   * Callback function to remove a pill, returns pillKey, metadata
   */
  onRemove: PropTypes.func,
  /**
  * Callback function to select a pill, returns pillKey, metadata
  */
  onSelect: PropTypes.func,
};

const SelectablePills = (props) => {
  const {
    children,
    onRemove,
    onSelect,
    ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);
  const selectablePillsRef = useRef();

  const handleOnRemove = (pillKey, metaData) => {
    if (onRemove) {
      onRemove(pillKey, metaData);
    }
  };

  const handleOnSelect = (pillKey, metaData) => {
    if (onSelect) {
      onSelect(pillKey, metaData);
    }
  };

  const pillListClassNames = classNames(
    cx([
      'pill-list',
      theme.className,
    ]),
    customProps.className,
  );

  const renderChildren = (items) => React.Children.map(items, (pill) => React.cloneElement(pill, { onRemove: handleOnRemove, onSelect: handleOnSelect, isSelectable: false }));

  return (
    <div
      {...customProps}
      className={pillListClassNames}
      ref={selectablePillsRef}
      tabIndex="-1"
    >
      {children ? renderChildren(children) : []}
    </div>
  );
};

SelectablePills.Pill = Pill;
SelectablePills.propTypes = propTypes;

export default SelectablePills;
