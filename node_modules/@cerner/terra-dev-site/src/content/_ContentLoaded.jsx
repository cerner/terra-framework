import React from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import { ThemeContext } from 'terra-application/lib/theme';

import styles from './ContentLoaded.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The type of the content loaded
   */
  type: PropTypes.string,
  /**
   * The content to render
   */
  children: PropTypes.element.isRequired,

  /**
   * Set to true if scroll styles should be applied to the container.
   */
  isScrollContainer: PropTypes.bool,
};

const ContentLoaded = ({ children, type, isScrollContainer }) => {
  const theme = React.useContext(ThemeContext);

  // Re enable if hash links aren't working
  // useEffect(() => {
  //   if (!window.location || window.location.length < 2) {
  //     return;
  //   }
  //   const elementName = window.location.hash.slice(1);
  //   const element = document.getElementById(elementName);
  //   if (element) {
  //     element.scrollIntoView();
  //   }
  // }, []);

  return (
    <div
      id="site"
      data-terra-dev-site-content
      data-terra-test-content
      className={
        cx(
          theme.className,
          'dev-site-content',
          {
            markdown: ['md', 'mdx'].includes(type),
            scroll: isScrollContainer,
          },
        )
      }
    >
      {children}
    </div>
  );
};

ContentLoaded.propTypes = propTypes;

export default ContentLoaded;
