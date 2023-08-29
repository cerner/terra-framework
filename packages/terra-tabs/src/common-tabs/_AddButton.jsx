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
   * The label to set on the add button.
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
   *  Callback function triggered when add button is clicked.
  */
  onAddClick: PropTypes.func,
  /**
   * Ref callback for button.
   */
  refCallback: PropTypes.func,
  /**
   * Array of id strings,
   */
  tabIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const AddButton = ({
  addAriaLabel,
  onAddClick,
  refCallback,
  index,
  id,
  tabIds,
  intl,
}) => {
  const buttonsuggestion = intl.formatMessage({ id: 'Terra.tabs.addbutton.focus' });
  let ariaLabelAddTabWithSuggestion = `${buttonsuggestion}`;

  if (addAriaLabel) {
    ariaLabelAddTabWithSuggestion = `${addAriaLabel} ${buttonsuggestion}`;
  }
  const AddTabIcon = <IconAdd a11yLabel={ariaLabelAddTabWithSuggestion} />;

  const keyDown = (event, indexTab, ids) => {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      event.preventDefault();
      event.stopPropagation();
      onAddClick();
    } else {
      handleArrows(event, indexTab, ids);
    }
  };

  return (
    <Button
      icon={AddTabIcon}
      isIconOnly
      id={id}
      tabindex="-1"
      index={index}
      text={addAriaLabel}
      variant="de-emphasis"
      data-terra-tabs-show-focus-styles
      className={cx('button')}
      onKeyDown={event => keyDown(event, index, tabIds)}
      ref={refCallback}
      onClick={onAddClick}
      data-terra-tab-add-btn
    />
  );
};

AddButton.propTypes = propTypes;

export default injectIntl(AddButton);
