import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import List from 'terra-list';
import { NavLink } from 'react-router-dom';
import styles from './ApplicationList.scss';

const cx = classNames.bind(styles);

const propTypes = {
  links: PropTypes.arrayOf({
    id: PropTypes.string,
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  refCallback: PropTypes.func,
};

const defaultProps = {
  links: [],
};

const ApplicationList = ({
  links,
  refCallback,
  ...customProps
}) => {
  const listItems = links.map(link => (
    <List.Item
      content={
        <NavLink className={cx(['list-item'])} id={link.id} to={link.path} key={link.path} activeClassName={cx(['selected'])}>
          {link.text}
        </NavLink>
      }
      key={link.path}
    />
  ));

  return (
    <List {...customProps} className={cx(['list'])} ref={refCallback}>
      {listItems}
    </List>
  );
};

ApplicationList.propTypes = propTypes;
ApplicationList.defaultProps = defaultProps;

export default ApplicationList;
