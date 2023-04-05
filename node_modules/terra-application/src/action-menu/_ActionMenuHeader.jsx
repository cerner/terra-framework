import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import Button from 'terra-button';
import IconClose from 'terra-icon/lib/icon/IconClose';

import styles from './ActionMenuHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The label text to display for the header.
   */
  label: PropTypes.string.isRequired,
  /**
   * Callback function for close button selection.
   * Returns the event e.g. onClose(event).
   */
  onClose: PropTypes.func,
  /**
   * @private
   */
  intl: intlShape,
};

const ActionMenuHeader = ({
  label,
  onClose,
  intl,
}) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div className={cx('action-menu-header', theme.className)}>
      <div aria-hidden className={cx('title')}>
        {label}
      </div>
      <div className={cx('close-button')}>
        {onClose ? (
          <Button
            icon={<IconClose />}
            text={intl.formatMessage({ id: 'terraApplication.actionMenu.headerCloseButtonLabel' })}
            onClick={onClose}
            variant="utility"
          />
        ) : undefined}
      </div>
    </div>
  );
};

ActionMenuHeader.propTypes = propTypes;

export default injectIntl(ActionMenuHeader);
