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
  links: PropTypes.arrayOf(PropTypes.shape({
    /**
     * text to be disaplyed as navigational link.
     */
    text: PropTypes.string,
    /**
     * url of the navigational link.
     */
    href: PropTypes.string,
    /**
     * attribute to open on same or different tab on clicking the navigational link.
     */
    target: PropTypes.string,
  })),
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
          <ul className={cx('menu')}>
            {links.map(link => (
              <li className={cx('list-item')} key={link.text + link.href}>
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
        <div className={cx('content-top')}>
          {contentLeft}
          {contentRight}
        </div>
        <div className={cx('content-bottom')}>
          {contentBottom}
        </div>
      </div>
    </footer>
  );
};

BrandFooter.propTypes = propTypes;
BrandFooter.defaultProps = defaultProps;

export default BrandFooter;
