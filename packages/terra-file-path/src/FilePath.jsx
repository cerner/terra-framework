import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
// import classNames from 'classnames/bind';
// import styles from './FilePath.module.scss';

// const cx = classNames.bind(styles);

const propTypes = {
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {};

const FilePath = () => (
  <div>test</div>
);

FilePath.propTypes = propTypes;
FilePath.defaultProps = defaultProps;

export default injectIntl(FilePath);
