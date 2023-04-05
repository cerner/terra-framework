import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './MarkdownTags.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The html tag for this component. Assumed to be an H tag.
   */
  Tag: PropTypes.string,
  /**
   * Props to apply to this component tag
   */
  props: PropTypes.shape({
    className: PropTypes.string.isRequired,
    children: PropTypes.node,
    id: PropTypes.string,
  }),
};

/**
 * A component to represent an H tag for MDX.
 * @param {{ Tag, props: componentProps }} props
 */
const H = ({ Tag, props: componentProps }) => {
  const aRef = useRef(null);
  const theme = React.useContext(ThemeContext);
  // This effect is for scrolling the h-tag into view after initial load of the page.
  useEffect(() => {
    if (!window.location || window.location.length < 2) {
      return;
    }
    const requestedId = window.location.hash.slice(1);
    if (componentProps.id === requestedId) {
      aRef.current.scrollIntoView();
    }
  }, [componentProps.id]);
  return (
    <Tag {...componentProps} className={[cx(Tag), componentProps.className].join(' ')}>
      <a ref={aRef} aria-hidden="true" href={`#${componentProps.id}`} tabIndex="-1" className={cx('a', 'anchor')}>
        <span className={cx('icon', 'icon-link', theme.className)} />
      </a>
      { componentProps.children }
    </Tag>
  );
};

H.propTypes = propTypes;

export default H;
