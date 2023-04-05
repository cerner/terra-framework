import React, { useContext } from 'react';
import { ApplicationIntlContext } from 'terra-application/lib/application-intl';
import { ThemeContext } from 'terra-application/lib/theme';

const TestOverrideTest = () => {
  const applicationIntl = useContext(ApplicationIntlContext);
  const theme = useContext(ThemeContext);
  return (
    <div>
      {'locale: '}
      {applicationIntl.locale}
      <br />
      {'theme: '}
      {theme.name}
    </div>
  );
};

export default TestOverrideTest;
