import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './BrandFooter.scss';

const cx = classNames.bind(styles);

const propTypes = {
 /**
  * An array of navigation links with each element specifiying text, href and target keys with appropriate values.
  */
  links: PropTypes.array,
 /**
  * The content to be displayed in left side area of the footer.
  */
  contentLeft: PropTypes.node,
 /**
  * The content to be displayed in right side area of the footer.
  */
  contentRight: PropTypes.node,
 /**
  * The content to be displayed in bottom area of the footer.
  */
  contentBottom: PropTypes.node,
};

const defaultProps = {
  links: [],
  contentLeft: null,
  contentRight: null,
  contentBottom: null,
};

const BrandFooter = ({ links, contentLeft, contentRight, contentBottom, ...customProps }) => {
  const BrandFooterClassNames = cx([
    'brand-footer',
    customProps.className,
  ]);

  const linkslength = links.length;
  return (
    <footer role="contentinfo" {...customProps} className={BrandFooterClassNames}>
      {linkslength > 0 ? (
        <nav className={cx('nav')}>
          <ul className={cx('menu')} role="menu">
            {links.map((link, index) => (
              <li className={cx('list-item')} role="menuitem" key={index.toString()}>
                {link.target !== undefined ? (
                  <a className={cx('link')} href={link.href} target={link.target} >{link.text}</a>
                ) : (
                  <a className={cx('link')} href={link.href} >{link.text}</a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
      <div className={cx('footer-content')} >
        <div>
          {contentLeft}
          {contentRight}
        </div>
        {contentBottom}
      </div>
    </footer>
  );
};

BrandFooter.propTypes = propTypes;
BrandFooter.defaultProps = defaultProps;

export default BrandFooter;
