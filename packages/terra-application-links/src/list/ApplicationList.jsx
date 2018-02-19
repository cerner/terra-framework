import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import List from 'terra-list';
import { NavLink } from 'react-router-dom';
import ChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import styles from './ApplicationList.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Navigational links that will generate list items that will update the path. These paths are matched with react-router to selection.
   */
  links: PropTypes.arrayOf(PropTypes.shape({
    hasSubMenu: PropTypes.bool,
    id: PropTypes.string,
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
};

const defaultProps = {
  links: [],
};

const ApplicationList = ({
  links,
  ...customProps
}) => {
  const listItems = links.map(link => (
    <List.Item
      content={
        <NavLink
          aria-label={link.text}
          className={cx(['list-item'])}
          id={link.id}
          to={link.path}
          key={link.path}
          activeClassName={cx(['selected'])}
        >
          <div className={cx('title')}>
            {link.text}
          </div>
          {link.hasSubMenu && <span className={cx('chevron')}><ChevronRight height="0.8em" width="0.8em" /></span>}
        </NavLink>
      }
      key={link.path}
    />
  ));

  return (
    <List {...customProps} className={cx(['list'])}>
      {listItems}
    </List>
  );
};

ApplicationList.propTypes = propTypes;
ApplicationList.defaultProps = defaultProps;

export default ApplicationList;
