import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ApplicationUtility.scss';

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

const ApplicationUtility = ({ name, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const ApplicationUtilityClassNames = cx([
    'application-utility',
    attributes.className,
  ]);

  return (<div {...attributes} className={ApplicationUtilityClassNames} >{name}</div>);
};

ApplicationUtility.propTypes = propTypes;
ApplicationUtility.defaultProps = defaultProps;

export default ApplicationUtility;
