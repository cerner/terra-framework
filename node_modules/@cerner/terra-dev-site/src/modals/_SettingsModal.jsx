import React, { useState } from 'react';
import Button from 'terra-button';
import ActionFooter from 'terra-action-footer';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';
import Field from 'terra-form-field';
import classNamesBind from 'classnames/bind';
import { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';
import AppSettingsContext from '../site/_AppSettingsContext';

import styles from './SettingsModal.module.scss';

const cx = classNamesBind.bind(styles);

const SettingsModal = () => {
  const appSettings = React.useContext(AppSettingsContext);
  const [state, setState] = useState({ locale: appSettings.currentLocale, theme: appSettings.currentTheme, direction: appSettings.currentDirection });
  const {
    locale, theme, direction,
  } = state;
  const { locales, themes, directions } = appSettings;
  const disclosureManager = React.useContext(DisclosureManagerContext);

  return (
    <ContentContainer
      fill
      header={(
        <ActionHeader title="Settings" onBack={disclosureManager.goBack} onClose={disclosureManager.closeDisclosure} />
      )}
      footer={(
        <ActionFooter
          end={(
            <>
              <Button
                text="Submit"
                id="submit"
                variant={Button.Opts.Variants.EMPHASIS}
                className={cx('button')}
                onClick={() => {
                  appSettings.onUpdate({
                    locale,
                    theme,
                    direction,
                  });
                  disclosureManager.dismiss();
                }}
              />
              <Button
                text="Cancel"
                id="cancel"
                className={cx('button')}
                onClick={() => {
                  disclosureManager.dismiss();
                }}
              />
            </>
          )}
        />
      )}
    >
      <div className={cx('container')}>
        {locales.length > 1 ? (
          <Field
            label="Locale"
            htmlFor="terra-dev-site-locale-select"
          >
            <NativeSelect
              isFilterStyle
              ariaLabel="Locale"
              id="terra-dev-site-locale-select"
              value={locale}
              onChange={event => {
                setState({
                  locale: event.currentTarget.value,
                  theme,
                  direction,
                });
              }}
              options={locales.map(value => ({ value, display: value }))}
            />
          </Field>
        ) : undefined}
        {themes.length > 1 ? (
          <Field
            label="Theme"
            htmlFor="terra-dev-site-theme-select"
          >
            <NativeSelect
              isFilterStyle
              ariaLabel="Theme"
              id="terra-dev-site-theme-select"
              value={theme}
              onChange={event => {
                setState({
                  locale,
                  theme: event.currentTarget.value,
                  direction,
                });
              }}
              options={themes.map(value => ({ value, display: value }))}
            />
          </Field>
        ) : undefined}
        {directions.length > 1 ? (
          <Field
            label="Direction"
            htmlFor="terra-dev-site-direction-select"
          >
            <NativeSelect
              isFilterStyle
              ariaLabel="Direction"
              id="terra-dev-site-direction-select"
              value={direction}
              onChange={event => {
                setState({
                  locale,
                  theme,
                  direction: event.currentTarget.value,
                });
              }}
              options={directions.map(value => ({ value, display: value }))}
            />
          </Field>
        ) : undefined}
      </div>
    </ContentContainer>
  );
};

export default SettingsModal;
