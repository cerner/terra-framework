import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './CardLayout.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Items to be rendered inside the card.
   */
  children: PropTypes.node,
};

const CardLayout = ({ children }) => {
  let cardContent;

  if (React.Children.count(children) === 1) {
    cardContent = children;
  } else {
    cardContent = React.Children.map(children, (child) => (
      <div className={cx('card-container')}>
        {child}
      </div>
    ));
  }

  return (
    <div
      className={cx('card-layout')}
      data-application-overflow-container
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex="0"
    >
      {cardContent}
    </div>
  );
};

CardLayout.propTypes = propTypes;

export default CardLayout;
