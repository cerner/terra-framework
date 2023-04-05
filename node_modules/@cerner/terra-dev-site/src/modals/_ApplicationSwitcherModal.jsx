import React from 'react';
import List, { Item } from 'terra-list';
import Hyperlink from 'terra-hyperlink';
import { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';

import { sitesShape } from '../site/siteConfigShapes';

const propTypes = {
  /**
   * Sites to display.
   */
  sites: sitesShape.isRequired,
};

const ApplicationSwitcherModal = ({ sites }) => {
  const disclosureManager = React.useContext(DisclosureManagerContext);

  return (
    <ContentContainer
      header={(
        <ActionHeader title="Application Switcher" onBack={disclosureManager.goBack} onClose={disclosureManager.closeDisclosure} />
      )}
      fill
    >
      <List dividerStyle="bottom-only" paddingStyle="standard">
        {sites.map(site => (
          <Item key={site.url}>
            <Hyperlink data-app-switcher-link href={site.url}>{site.title}</Hyperlink>
          </Item>
        ))}
      </List>
    </ContentContainer>
  );
};

ApplicationSwitcherModal.propTypes = propTypes;

export default ApplicationSwitcherModal;
