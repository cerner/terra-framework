import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import NavigationItem, { NavigationItemContext } from './secondary-navigation-layout/navigation-item';
import PageContainer from './page-container';

import SecondaryNavigationLayout from './secondary-navigation-layout/SecondaryNavigationLayout';
import SecondaryNavigationGroup from './secondary-navigation-layout/SecondaryNavigationGroup';

import DevSitePage from '../pages/_DevSitePage';
import NotFoundPage from '../pages/_NotFoundPage';
import { contentImportsShape, navigationConfigShape } from '../site/siteConfigShapes';

const propTypes = {
  /**
   * The unique id for secondary navigation layout.
   */
  id: PropTypes.string.isRequired,
  /**
   * The map linking the route to the content component to load.
   */
  contentImports: contentImportsShape.isRequired,
  /**
   * The navigation configuration describing the secondary navigation
   */
  config: navigationConfigShape,
  /**
   * The label to apply to secondary navigation.
   */
  label: PropTypes.string.isRequired,
};
const retrieveNavItems = (navItems, contentImports) => (
  navItems.map((navItem) => {
    if (navItem.children) {
      return (
        <SecondaryNavigationGroup
          key={navItem.label}
          label={navItem.label}
        >
          {retrieveNavItems(navItem.children, contentImports)}
        </SecondaryNavigationGroup>
      );
    }
    return (
      <NavigationItem
        key={navItem.path}
        navigationKey={navItem.path}
        label={navItem.label}
        renderPage={() => (
          <DevSitePage pageContentConfig={navItem} contentImports={contentImports} />
        )}
      />
    );
  })
);

const DevSiteSecondaryNavigationLayout = ({
  id, label, config, contentImports,
}) => {
  const location = useLocation();
  const history = useHistory();
  const { isActive } = React.useContext(NavigationItemContext);

  const navItems = React.useMemo(() => retrieveNavItems(config, contentImports), [config, contentImports]);

  if (!isActive) {
    return null;
  }

  return (
    <SecondaryNavigationLayout
      id={id}
      activeNavigationKey={location.pathname.toLocaleLowerCase()}
      label={label}
      onSelectNavigationItem={(key) => history.push(key)}
      renderNavigationFallback={() => (
        <PageContainer isMain>
          <NotFoundPage />
        </PageContainer>
      )}
    >
      {navItems}
    </SecondaryNavigationLayout>
  );
};

DevSiteSecondaryNavigationLayout.propTypes = propTypes;

export default DevSiteSecondaryNavigationLayout;
