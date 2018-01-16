import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ExternalComponent.scss';

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

const ExternalComponent = ({ name, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const ExternalComponentClassNames = cx([
    'external-component',
    attributes.className,
  ]);

  return (<div {...attributes} className={ExternalComponentClassNames} />);
};

ExternalComponent.propTypes = propTypes;
ExternalComponent.defaultProps = defaultProps;

export default ExternalComponent;
