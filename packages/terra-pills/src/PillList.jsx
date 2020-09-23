import React from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Pill.module.scss';
import Pill from './Pill';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The aria label string value for the pills container.
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * The content to be shown in the pills container. Should only contain the sub-component pills
   */
  children: PropTypes.node,
  /**
   * Determines if the Pill List rolls up or not.
   */
  isCollapsible: PropTypes.bool,
};

const defaultProps = {
  isCollapsible: false,
};

const PillList = (props) => {
  const {
    ariaLabel,
    children,
    isCollapsible
  } = props;
  const theme = React.useContext(ThemeContext);
  const PillListClassNames = cx([
    'pill-list',
    theme.className,
  ]);

  return (
    <div
      aria-label={ariaLabel}
      className={PillListClassNames}
    >
      {children}
    </div>
  );
};

PillList.propTypes = propTypes;
PillList.defaultProps = defaultProps;

export default PillList;
export { Pill };
