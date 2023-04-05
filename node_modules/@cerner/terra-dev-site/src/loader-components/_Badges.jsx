import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Badges.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * component name.
   */
  name: PropTypes.string.isRequired,
  /**
   * Source code url
   */
  src: PropTypes.string,
  /**
   * url to link to
   */
  url: PropTypes.string,
  /**
   * The package version.
   */
  version: PropTypes.string.isRequired,
};

const Badges = (props) => {
  const {
    src,
    name,
    url,
    version,
  } = props;

  const npmBadge = (
    <a className={cx('badge')} href={url || `https://www.npmjs.org/package/${name}/v/${version}`}>
      <span className={cx('badge-name')}>
        {url ? 'package' : 'npm'}
      </span>
      <span className={cx('badge-version')}>
        {`v${version}`}
      </span>
    </a>
  );

  const srcCodeBadge = (src) ? (
    <a className={cx('badge')} href={src}>
      <span className={cx('badge-name')}>
        github
      </span>
      <span className={cx('badge-version')}>
        source
      </span>
    </a>
  ) : undefined;

  return (
    <div className={cx('badge-container')}>
      { npmBadge }
      { srcCodeBadge }
    </div>
  );
};

Badges.propTypes = propTypes;

export default Badges;
