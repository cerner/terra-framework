import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './EmbeddedComponent.scss';

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

const EmbeddedComponent = ({ name, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const EmbeddedComponentClassNames = cx([
    'embedded-component',
    attributes.className,
  ]);

  return (<div {...attributes} className={EmbeddedComponentClassNames}>{name}</div>);
};

EmbeddedComponent.propTypes = propTypes;
EmbeddedComponent.defaultProps = defaultProps;

export default EmbeddedComponent;
