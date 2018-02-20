import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import List from 'terra-list';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './ApplicationList.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Navigational links that will generate list items that will update the path. These paths are matched with react-router to selection.
   */
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
  /**
   * The location as provided by the `withRouter()` HOC.
   */
  location: PropTypes.object.isRequired,
  /**
   * The match as provided by the `withRouter()` HOC.
   */
  match: PropTypes.object.isRequired,
  /**
   * The history as provided by the `withRouter()` HOC.
   */
  history: PropTypes.object.isRequired,
  /**
   * The staticContext as provided by the `withRouter()` HOC. This will only be provided when
   * within a StaticRouter.
   */
  staticContext: PropTypes.object,
};

const defaultProps = {
  links: [],
};

const ApplicationList = ({
  links,
  location,
  match,
  history,
  staticContext,
  ...customProps
}) => {
  const listItems = links.map(link => (
    <List.Item
      content={
        <NavLink
          location={location}
          aria-label={link.text}
          className={cx(['list-item'])}
          id={link.id}
          to={link.path}
          key={link.path}
          activeClassName={cx(['selected'])}
        >
          {link.text}
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

export default withRouter(ApplicationList);
