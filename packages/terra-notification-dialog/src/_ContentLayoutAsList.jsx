import React from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import styles from './ContentLayoutAsList.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The list of strings to display in a list format.
   */
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const NotificationDialogContentList = ({ items }) => {
  const theme = React.useContext(ThemeContext);

  /* eslint-disable react/no-array-index-key */
  return (
    <ul className={cx('list', theme.className)}>
      {items.map((item, index) => (<li className={cx('list-item')} key={index}>{item}</li>))}
    </ul>
  );
  /* eslint-enable react/no-array-index-key */
};

NotificationDialogContentList.propTypes = propTypes;

export default NotificationDialogContentList;
