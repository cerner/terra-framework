import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'terra-application/lib/theme';
import { ApplicationIntlContext } from '../../../application-intl';
import ApplicationBase from '../../../application-base';
import ApplicationNavigation from '../../../application-navigation';
import NavigationPrompt from '../../../navigation-prompt';

const PageContent = ({ title }) => {
  const [hasPendingAction, setHasPendingAction] = useState(false);

  return (
    <div>
      <p>{title}</p>
      <p>
        Toggle pending action:
        {' '}
        <button
          id="pending-action-toggle"
          type="button"
          onClick={() => {
            setHasPendingAction(!hasPendingAction);
          }}
        >
          {hasPendingAction ? 'Disable' : 'Enable'}
        </button>
      </p>
      {hasPendingAction ? <NavigationPrompt description="Testing ApplicationNavigation's navigation prompt handling" /> : undefined}
    </div>
  );
};

PageContent.propTypes = {
  title: PropTypes.string,
};

const ApplicationNavigationDisabledPromptsTest = () => {
  const applicationIntl = useContext(ApplicationIntlContext);
  const theme = React.useContext(ThemeContext);
  const [activeNavItem, setActiveNavItem] = useState('page_1');
  const [loggedOut, setLoggedOut] = useState(false);

  const navigationItems = [{
    key: 'page_1',
    text: 'Page 1',
  }, {
    key: 'page_2',
    text: 'Page 2',
  }, {
    key: 'page_3',
    text: 'Page 3',
  }];

  return (
    // eslint-disable-next-line react/forbid-dom-props
    <div style={{ height: '500px' }}>
      <ApplicationBase locale={applicationIntl.locale} themeName={theme.className}>
        {loggedOut ? <p>Logged Out</p> : (
          <ApplicationNavigation
            titleConfig={{
              title: 'ApplicationNavigation Disabled Prompts Test',
            }}
            navigationItems={navigationItems}
            activeNavigationItemKey={activeNavItem}
            onSelectNavigationItem={(key) => { setActiveNavItem(key); }}
            onSelectLogout={() => {
              setLoggedOut(true);
            }}
            disablePromptsForLogout
            disablePromptsForNavigationItems
          >
            <PageContent key={activeNavItem} title={activeNavItem} />
          </ApplicationNavigation>
        )}
      </ApplicationBase>
    </div>
  );
};

export default ApplicationNavigationDisabledPromptsTest;
