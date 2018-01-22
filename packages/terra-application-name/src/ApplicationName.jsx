import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ApplicationName.scss';

const cx = classNames.bind(styles);

const propTypes = {
 /*
 * Content to be displayed as the name
 */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const ApplicationName = ({ name, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const ApplicationNameClassNames = cx([
    'application-name',
    attributes.className,
  ]);

  return (<div {...attributes} className={ApplicationNameClassNames}>{name}</div>);
};

ApplicationName.propTypes = propTypes;
ApplicationName.defaultProps = defaultProps;

export default ApplicationName;
