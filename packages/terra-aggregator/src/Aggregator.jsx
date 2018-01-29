import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Aggregator.scss';

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

const Aggregator = ({ name, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const AggregatorClassNames = cx([
    'aggregator',
    attributes.className,
  ]);

  return (<div {...attributes} className={AggregatorClassNames} />);
};

Aggregator.propTypes = propTypes;
Aggregator.defaultProps = defaultProps;

export default Aggregator;
