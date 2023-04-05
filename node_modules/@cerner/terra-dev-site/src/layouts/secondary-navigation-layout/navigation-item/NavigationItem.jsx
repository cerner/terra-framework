import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// import ActiveMainProvider from '../main-container/private/ActiveMainProvider';

import NavigationItemContext from './NavigationItemContext';
import PageContainer from '../../page-container';

const propTypes = {
  /**
   * The string uniquely identifying the navigation item within the application.
   * This value must be globally unique and not shared between multiple tiers of
   * navigation (primary, secondary, etc.).
   */
  navigationKey: PropTypes.string.isRequired,
  /**
   * The string description of the NavigationItem to display to the user.
   */
  label: PropTypes.string.isRequired,
  /**
   * A function called to generate the child content for the NavigationItem.
   * A parameter indicating whether or not the NavigationItem is active is
   * provided.
   *
   * If provided, the `renderPage` and `children` props will be ignored.
   *
   * Signature: `renderLayout({ isActive })`
   */
  renderLayout: PropTypes.func,
  /**
   * A function called to render a single Page component as content for the
   * NavigationItem.
   *
   * If provided, the `children` prop will be ignored.
   *
   * Signature: `renderPage({ isActive })`
   */
  renderPage: PropTypes.func,
  /**
   * The child components to render within the NavigationItem.
   */
  children: PropTypes.node,
  /**
   * @private
   * A boolean indicating whether or not the NavigationItem is considered active
   * based on the determined active navigation key of the layout consuming it.
   */
  isActive: PropTypes.bool,
  /**
   * @private
   * The HTMLElement to which the NavigationItem's content should be rendered.
   */
  portalElement: PropTypes.instanceOf(HTMLElement),
};

const NavigationItem = ({
  navigationKey,
  children,
  renderLayout,
  renderPage,
  isActive,
  portalElement,
}) => {
  const ancestorNavigationItemContext = React.useContext(NavigationItemContext);

  const navigationItemContextValue = React.useMemo(() => ({
    // If an ancestor NavigationItem is inactivated, then we must consider
    // this entire branch inactivated as well.
    isActive: isActive && ancestorNavigationItemContext.isActive,
    navigationKeys: [
      ...ancestorNavigationItemContext.navigationKeys,
      navigationKey,
    ],
  }), [
    isActive,
    navigationKey,
    ancestorNavigationItemContext.isActive,
    ancestorNavigationItemContext.navigationKeys,
  ]);

  let content;
  if (renderLayout) {
    content = renderLayout({ isActive });
  } else if (renderPage) {
    content = (
      <PageContainer>
        {renderPage({ isActive })}
      </PageContainer>
    );
  } else {
    content = children;
  }

  return ReactDOM.createPortal((
    <NavigationItemContext.Provider value={navigationItemContextValue}>
      {/* <ActiveMainProvider> */}
      {content}
      {/* </ActiveMainProvider> */}
    </NavigationItemContext.Provider>
  ), portalElement);
};

NavigationItem.propTypes = propTypes;

export default NavigationItem;
