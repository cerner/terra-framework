import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './BrandFooter.scss';

const cx = classNames.bind(styles);

const propTypes = {
 /*
 * The children passed to the component.
 */
  children: PropTypes.node,
 /*
 * An array of navigation links with each element specifiying text, href and target keys with appropriate values.
 */
  links: PropTypes.array,
 /*
 * The component to be displayed in logo area of the footer.
 */
  logo: PropTypes.node,
 /*
 * The component to be displayed in copyright area of the footer.
 */
  copyright: PropTypes.node,
 /*
 * The component to be displayed in branding area of the footer.
 */
  branding: PropTypes.node,
};

const defaultProps = {
  links: [],
  logo: null,
  copyright: null,
  branding: null,
};

const BrandFooter = ({ children, links, logo, copyright, branding, ...customProps }) => {
  const BrandFooterClassNames = cx([
    'brand-footer',
    customProps.className,
  ]);

  const linkslength = links.length;
  return (
    <footer role="contentinfo" {...customProps} className={BrandFooterClassNames}>
      {children}
      {linkslength > 0 ?
        <nav className={cx('nav')}>
          <ul className={cx('menu')} role="menu">
            {links.map((link, index) => (
              link.target !== undefined ?
                <li className={cx('list-item')} key={index.toString()}>
                  <a className={cx('link')} href={link.href} target={link.target}>{link.text}</a>
                </li> :
                <li className={cx('list-item')} key={index.toString()}>
                  <a className={cx('link')} href={link.href} >{link.text}</a>
                </li>
              ))
            }
          </ul>
        </nav> : null}
      <div className={cx('footer-branding-copyright')} >
        <div>
          {logo}
          {branding}
        </div>
        {copyright}
      </div>
    </footer>
  );
};

BrandFooter.propTypes = propTypes;
BrandFooter.defaultProps = defaultProps;

export default BrandFooter;
