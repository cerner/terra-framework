import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './BrandFooter.scss';

const cx = classNames.bind(styles);

const propTypes = {
 /**
  * An array of navigation links with each element specifiying text, href and target keys with appropriate values. *DEPRECATED*: Use `sections` prop instead.
  */
  links: PropTypes.arrayOf(PropTypes.shape({
   /**
    * Text to be disaplyed as navigational link.
    */
    text: PropTypes.string,
   /**
    * URL of the navigational link.
    */
    href: PropTypes.string,
   /**
    * Attribute to open on same or different tab on clicking the navigational link.
    */
    target: PropTypes.string,
  })),
 /**
  * A set of navigation links to be displayed with optional headers. Will override the `links` prop if both are provided.
  */
  sections: PropTypes.shape({
   /**
    * If true link groups will be laid out from top to bottom, left to right
    */
    displayVertically: PropTypes.bool,
   /**
    * Sets of links grouped together with an optional header
    */
    linkGroups: PropTypes.arrayOf(PropTypes.shape({
     /**
      * The optional text to display as a header
      */
      headerText: PropTypes.string,
     /**
      * An array of navigation links with each element specifiying text, href and target keys with appropriate values.
      */
      links: PropTypes.arrayOf(PropTypes.shape({
       /**
        * Text to be disaplyed as navigational link.
        */
        text: PropTypes.string.isRequired,
       /**
        * URL of the navigational link.
        */
        href: PropTypes.string.isRequired,
       /**
        * Attribute to open on same or different tab on clicking the navigational link.
        */
        target: PropTypes.string,
      })),
    })),
  }),
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
  sections: {
    displayVertically: false,
    linkGroups: [],
  },
  contentLeft: null,
  contentRight: null,
  contentBottom: null,
};

const BrandFooter = ({ links, sections, contentLeft, contentRight, contentBottom, ...customProps }) => {
  const BrandFooterClassNames = cx([
    'brand-footer',
    customProps.className,
  ]);

  const displayOldLinks = links.length > 0 && sections.linkGroups.length === 0;

  const containsASectionHeader = !displayOldLinks && sections.linkGroups.some(linkGroup => linkGroup.headerText);

  return (
    <footer role="contentinfo" {...customProps} className={BrandFooterClassNames}>
      {displayOldLinks && (
        <nav className={cx(['nav', 'nav-horizontal'])}>
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
      )}
      { // Don't use !displayOldLinks because we should only display sections links if some have been provided
        sections.linkGroups.length > 0 && (
        <nav className={cx('nav')}>
          <div className={cx(!sections.displayVertically ? 'nav-horizontal' : 'nav-vertical')}>
            {sections.linkGroups.map(linkGroup => (
              <ul className={cx('menu')}>
                {((containsASectionHeader && sections.displayVertically) || linkGroup.headerText) && (
                  <li className={cx('list-header')} key={linkGroup.headerText}>
                    {linkGroup.headerText || (containsASectionHeader && '\u200B')}
                  </li>
                )}
                {linkGroup.links.map((link) => {
                  if (link.target !== undefined) {
                    return <li className={cx('list-item')} key={link.text + link.href}><a className={cx('link')} href={link.href} target={link.target} >{link.text}</a></li>;
                  }

                  return <li className={cx('list-item')} key={link.text + link.href}><a className={cx('link')} href={link.href} >{link.text}</a></li>;
                },
                )}
              </ul>
            ))}
          </div>
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
