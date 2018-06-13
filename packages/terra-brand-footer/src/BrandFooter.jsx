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
     * Text to be disaplyed as navigational link if `href` is provided. If `href` is not provided the text will be a section header.
     */
    text: PropTypes.string.isRequired,
    /**
     * Url of the navigational link.
     */
    href: PropTypes.string,
    /**
     * Attribute to open on same or different tab on clicking the navigational link.
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
      {linkslength > 0 && (
        <nav className={cx('nav')}>
          <ul className={cx('menu')}>
            {links.map((link) => {
              // It's a link
              if (link.href) {
                return (<li className={cx('list-item')} key={link.text + link.href}>
                  {link.target !== undefined ? (
                    <a className={cx('link')} href={link.href} target={link.target} >{link.text}</a>
                  ) : (
                    <a className={cx('link')} href={link.href} >{link.text}</a>
                  )}
                </li>);
              }

              // It's a section header
              return <li className={cx('list-header')} key={link.text}>{link.text}</li>;
            })}
          </ul>
        </nav>
      )}
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
