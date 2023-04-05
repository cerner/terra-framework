import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ModalManager from 'terra-application/lib/modal-manager';

import DevSiteLayout from '../layouts/_DevSiteLayout';
import AppSettingsProvider from './_AppSettingsProvider';
import siteConfigShape from './siteConfigShapes';
import TerraMdxProvider from '../mdx/_TerraMdxProvider';
import Router from './_DevSiteRouter';
import DevSiteApplicationBase from './_DevSiteApplicationBase';

const propTypes = {
  /**
   * The site config for the application.
   */
  siteConfig: siteConfigShape.isRequired,
  /**
   * The component representing the providers layer of terra-dev-site. Must render children.
   */
  Providers: PropTypes.func,
  /**
   * An override component for a custom application base. Must render children and adhere to the terra application base api.
   */
  ApplicationBase: PropTypes.func,
  /**
   * An override component for a custom application base. Must render children and adhere to the terra application base api.
   */
  ApplicationNavigation: PropTypes.func,
};

const Site = ({
  siteConfig, Providers, ApplicationBase, ApplicationNavigation,
}) => (
  <AppSettingsProvider settingsConfig={siteConfig.settingsConfig}>
    <BrowserRouter basename={siteConfig.basename}>
      <Router sites={siteConfig.sites} routesMap={siteConfig.routesMap}>
        <DevSiteApplicationBase ApplicationBase={ApplicationBase}>
          <TerraMdxProvider>
            <ModalManager>
              {Providers ? (
                <Providers>
                  <DevSiteLayout siteConfig={siteConfig} ApplicationNavigation={ApplicationNavigation} />
                </Providers>
              ) : (
                <DevSiteLayout siteConfig={siteConfig} ApplicationNavigation={ApplicationNavigation} />
              )}
            </ModalManager>
          </TerraMdxProvider>
        </DevSiteApplicationBase>
      </Router>
    </BrowserRouter>
  </AppSettingsProvider>
);

Site.propTypes = propTypes;

export default Site;
