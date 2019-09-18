import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from './ApplicationLoadingOverlay.md';

import ApplicationLoadingOverlayExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ApplicationLoadingOverlayExample.jsx';
import ApplicationLoadingOverlayExample from '../example/ApplicationLoadingOverlayExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'ApplicationLoadingOverlay Example',
        example: <ApplicationLoadingOverlayExample />,
        source: ApplicationLoadingOverlayExampleSrc,
      },
    ]}
  />
);

export default DocPage;
