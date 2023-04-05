import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import TerraApplicationBase from 'terra-application';

import AppSettingsContext from './_AppSettingsContext';

const propTypes = {
  /**
   * The remainder of the application to render.
   */
  children: PropTypes.node,
  /**
   * An override component for a custom application base. Must render children and adhere to the terra application base api.
   */
  ApplicationBase: PropTypes.func,
};

const DevSiteApplicationContainer = ({ children, ApplicationBase }) => {
  const isRaw = useRouteMatch('/raw');
  const { currentLocale, currentThemeClassName } = React.useContext(AppSettingsContext);
  const AppBase = ApplicationBase || TerraApplicationBase;
  return (
    <AppBase
      locale={currentLocale}
      themeName={currentThemeClassName}
      themeIsGlobal
      unloadPromptIsDisabled={!!isRaw}
    >
      {children}
    </AppBase>
  );
};

DevSiteApplicationContainer.propTypes = propTypes;

export default DevSiteApplicationContainer;
