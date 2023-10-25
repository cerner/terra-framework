import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './CompactInteractiveList.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String that will be used to identify the table. If multiple tables are on the same page, each table should have
   * a unique id.
   */
  id: PropTypes.string.isRequired,

  /**
   * String that identifies the element (or elements) that labels the table.
   */
  ariaLabelledBy: PropTypes.string,

  /**
   * String that labels the table for accessibility. If ariaLabelledBy is specified, ariaLabel will not be used.
   */
  ariaLabel: PropTypes.string,

  /**
   * Boolean indicating whether or not the table columns should be displayed. Setting the value to false will hide the columns,
   * but the voice reader will use the column header values for a11y.
   */
  hasColumnHeaders: PropTypes.bool,
};

const defaultProps = {
  hasColumnHeaders: true,
};

// const defaultColumnMinimumWidth = 60;
// const defaultColumnMaximumWidth = 300;

const CompactInteractiveList = (props) => {
  const {
    id,
    ariaLabelledBy,
    ariaLabel,
    hasColumnHeaders,
  } = props;

  const theme = useContext(ThemeContext);

  return (
    <div
      className={cx('compact-interactive-list-container')}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    >
      <div
        id={id}
        role="grid"
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabel}
        className={cx('compact-interactive-list', theme.className, { headerless: !hasColumnHeaders })}
      >
        <div role="row">
          <div role="gridcell">This is the placeholder div</div>
        </div>
      </div>
    </div>
  );
};

CompactInteractiveList.propTypes = propTypes;
CompactInteractiveList.defaultProps = defaultProps;

export default injectIntl(CompactInteractiveList);
