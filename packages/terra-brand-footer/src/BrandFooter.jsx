import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './BrandFooter.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
  * An array of navigation links with each element specifiying text, href and target keys with appropriate values.
  *
  * **DEPRECATED**: Use `sections` prop instead.
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
  *
  * ```
  * Array structured like:
  * [
  *   {
  *     headerText: string,
  *     links: [
  *       text: required string,
  *       href: required string,
  *       target: string,
  *     ],
  *   },
  * ]
  * ```
  */
  sections: PropTypes.arrayOf(PropTypes.shape({
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
  /**
  * If true link sections will be laid out from top to bottom, then left to right if the max width is reached
  */
  isVertical: PropTypes.bool,
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
  sections: [],
  isVertical: false,
  contentLeft: null,
  contentRight: null,
  contentBottom: null,
};

const BrandFooter = ({
  links, sections, isVertical, contentLeft, contentRight, contentBottom, ...customProps
}) => {
  const BrandFooterClassNames = cx([
    'brand-footer',
    customProps.className,
  ]);

  let processedSections;
  if (links.length > 0 && sections.length === 0) {
    processedSections = [{
      headerText: '',
      links,
      id: 0,
    }];
  } else {
    processedSections = sections;

    // Assign ids to use as keys
    for (let i = 0; i < processedSections.length; i += 1) {
      processedSections[i].id = i;
    }
  }

  // The old links prop can't have section headers. Needed for vertical layout to insert padding to keep columns without headers aligned
  const containsASectionHeader = processedSections.some(linkGroup => linkGroup.headerText);

  let navigation;
  if (processedSections.length > 0) {
    navigation = (
      <nav className={cx(['nav', isVertical ? 'nav-vertical' : 'nav-horizontal'])}>
        {processedSections.map(linkGroup => (
          <section className={cx('navigation-section')} key={linkGroup.id}>
            { // When displaying vertically if one column has a header all columns are aligned as if they have a header
              ((containsASectionHeader && isVertical) || linkGroup.headerText) && (
                <h3 className={cx('list-header')} key={linkGroup.headerText}>
                  { // Insert a zero width space to act as a placeholder section header that doesn't display but takes vertical space
                    linkGroup.headerText || '\u200B'
                  }
                </h3>
              )
            }
            <ul className={cx('menu')}>
              {linkGroup.links && linkGroup.links.map((link, index) => {
                const spreadTarget = link.target !== undefined ? { target: link.target } : {};
                const separator = (!isVertical && index >= 1) ? <span className={cx('separator')} aria-hidden>/</span> : '';
                return (
                  <li className={cx('list-item')} key={link.text + link.href}>
                    {separator}
                    <a className={cx('link')} href={link.href} {...spreadTarget}>
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </nav>
    );
  }

  return (
    <footer role="contentinfo" {...customProps} className={BrandFooterClassNames}>
      {navigation}
      <div className={cx('footer-content')}>
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
