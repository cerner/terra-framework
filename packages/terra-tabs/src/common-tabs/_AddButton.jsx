import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import Button from 'terra-button';
import { injectIntl } from 'react-intl';
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
  addAriaLabel: PropTypes.string.isRequired,
  /**
   * id value to use for navigation.
   */
  id: PropTypes.string.isRequired,
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
};

const AddButton = ({
  addAriaLabel,
  onSelect,
  refCallback,
  index,
  id,
  tabIds,
}) => {
  const AddTabIcon = <IconAdd a11yLabel={addAriaLabel} />;

  const keyDown = (event, indextab, ids) => {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      event.preventDefault();
      event.stopPropagation();
      onSelect();
    } else {
      handleArrows(event, indextab, ids);
    }
  };

  return (
    <Button
      icon={AddTabIcon}
      isIconOnly
      id={id}
      index={index}
      text={addAriaLabel}
      variant="de-emphasis"
      data-terra-tabs-show-focus-styles
      className={cx('button')}
      onKeyDown={event => keyDown(event, index, tabIds)}
      ref={refCallback}
      onClick={onSelect}
    />
  );
};

AddButton.propTypes = propTypes;

export default injectIntl(AddButton);
