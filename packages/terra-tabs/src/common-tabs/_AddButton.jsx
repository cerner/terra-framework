import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import { injectIntl } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import {
  handleArrows,
} from './_TabUtils';

import styles from './Tab.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The label to set on the tablist element.
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * Identifer for the Tab to be returned with onSelect.
   */
  key: PropTypes.string.isRequired,
  /**
   * Index value to use for navigation.
   */
  index: PropTypes.number.isRequired,
  /**
   * Selection callback function.
   */
  onSelect: PropTypes.func,
  /**
   * Ref callback for button.
   */
  refCallback: PropTypes.func,
  /**
   * Array of id strings,
   */
  tabIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Indicates if the tab is currently selected.
   */
  isSelected: PropTypes.bool,

};

const AddButton = ({
  onSelect,
  refCallback,
  index,
  tabIds,
  isSelected,
  ariaLabel,
}) => {
  const attributes = {};
  const theme = React.useContext(ThemeContext);
  const tabClassNames = cx(
    'tab',
    { 'is-icon-only': true },
    theme.className,
  );

  const keyDown = (event, indextab, ids) => {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      event.preventDefault();
      event.stopPropagation();
      onSelect();
    } else {
      handleArrows(event, indextab, ids);
    }
  };

  /* eslint-disable react/forbid-dom-props */
  return (
    <div
      {...attributes}
      id="tab-add-button"
      index={index}
      role="tab"
      ref={refCallback}
      onClick={onSelect}
      tabIndex="-1"
      aria-label={ariaLabel}
      data-terra-tabs-show-focus-styles
      style={{ zIndex: 1 }}
      className={tabClassNames}
      data-focus-styles-enabled
      onKeyDown={event => keyDown(event, index, tabIds)}
      aria-selected={isSelected}
    >
      <div className={cx('inner')}>
        <div className={cx('icon')}>
          <IconAdd a11yLabel="add tab" />
        </div>
      </div>
    </div>
  );
  /* eslint-disable react/forbid-dom-props */
};

AddButton.propTypes = propTypes;

export default injectIntl(AddButton);

