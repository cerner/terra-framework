import React from 'react';
import IconStartPresenting from 'terra-icon/lib/icon/IconStartPresenting';
import IconSettings from 'terra-icon/lib/icon/IconSettings';
import { useLocation, useHistory } from 'react-router-dom';
import Button from 'terra-button';
import { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';

import Page, {
  CardLayout,
  Card,
  PageActivityOverlay,
  StatusLayout,
} from './page';

import Suspense from '../shared/Suspense';

import { contentImportsShape, pageContentConfigShape } from '../site/siteConfigShapes';
import ContentLoadedContainer from '../content/_ContentLoaded';
import NotFoundPage from './_NotFoundPage';
import { NavigationItemContext } from '../layouts/secondary-navigation-layout/navigation-item';
import SettingsModal from '../modals/_SettingsModal';

const propTypes = {
  /**
   * Config describing the page
   */
  pageContentConfig: pageContentConfigShape.isRequired,

  /**
   * Function called to request closing the modal
   */
  contentImports: contentImportsShape.isRequired,
};

const DevSitePage = ({ pageContentConfig, contentImports }) => {
  const location = useLocation();
  const history = useHistory();
  const { isActive } = React.useContext(NavigationItemContext);
  const disclosureManager = React.useContext(DisclosureManagerContext);
  const [isLoadingComponent, setIsLoadingComponent] = React.useState();
  const [loadingFailed, setLoadingFailed] = React.useState();

  if (!isActive) {
    return null;
  }

  if (!pageContentConfig) {
    return NotFoundPage;
  }

  const ContentComponent = contentImports[pageContentConfig.path];

  if (!ContentComponent) {
    return NotFoundPage;
  }

  const pageActions = (
    <Page.Actions>
      <Page.Action
        actionKey="raw"
        label="Raw"
        icon={<IconStartPresenting />}
        onSelect={() => { history.push(`/raw${pageContentConfig.path}`); }}
      />
      <Page.Action
        actionKey="settings"
        label="Settings"
        icon={<IconSettings />}
        onSelect={() => {
          disclosureManager.disclose({
            preferredType: 'modal',
            size: 'small',
            content: {
              key: 'terra-dev-site.settings',
              component: (
                <SettingsModal />
              ),
            },
          });
        }}
      />
    </Page.Actions>
  );

  let loadingOverlay;
  if (isLoadingComponent) {
    loadingOverlay = (
      <PageActivityOverlay variant="loading" />
    );
  }

  let statusOverlay;
  if (loadingFailed) {
    statusOverlay = (
      <ContentLoadedContainer type={pageContentConfig.type}>
        <StatusLayout
          message="Chunk failed to load."
          variant="error"
        >
          <Button text="Reload Site" onClick={() => { location.reload(); }} />
        </StatusLayout>
      </ContentLoadedContainer>
    );
  }

  return (
    <Page
      label={pageContentConfig.label}
      pageKey={pageContentConfig.path}
      actions={pageActions}
      activityOverlay={loadingOverlay}
      statusOverlay={statusOverlay}
    >
      <Suspense
        onLoadStart={() => { setIsLoadingComponent(true); }}
        onLoadEnd={() => { setIsLoadingComponent(false); }}
        onError={() => { setLoadingFailed(true); setIsLoadingComponent(false); }}
      >
        <CardLayout>
          <Card minHeightFill>
            <ContentLoadedContainer type={pageContentConfig.type}>
              <ContentComponent key={pageContentConfig.path} />
            </ContentLoadedContainer>
          </Card>
        </CardLayout>
      </Suspense>
    </Page>
  );
};

DevSitePage.propTypes = propTypes;

export default DevSitePage;
