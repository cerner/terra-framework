import React from 'react';
import DocTemplate from 'terra-doc-template';
import ImplementationGuide from '../../../../docs/IMPLEMENTATION_GUIDE.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Example Files
import ImplementationGuideStep1 from './examples/ImplementationGuideStep1';
import ImplementationGuideStep1Src from '!raw-loader!../../../../src/terra-dev-site/doc/navigation-prompt/examples/ImplementationGuideStep1';
import ImplementationGuideStep2 from './examples/ImplementationGuideStep2';
import ImplementationGuideStep2Src from '!raw-loader!../../../../src/terra-dev-site/doc/navigation-prompt/examples/ImplementationGuideStep2';
import ImplementationGuideStep3 from './examples/ImplementationGuideStep3';
import ImplementationGuideStep3Src from '!raw-loader!../../../../src/terra-dev-site/doc/navigation-prompt/examples/ImplementationGuideStep3';
import ImplementationGuideStep4 from './examples/ImplementationGuideStep4';
import ImplementationGuideStep4Src from '!raw-loader!../../../../src/terra-dev-site/doc/navigation-prompt/examples/ImplementationGuideStep4';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const ImplementationGuidePage = () => (
  <DocTemplate
    packageName="terra-navigation-prompt"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-navigation-prompt"
    readme={ImplementationGuide}
    examples={[{
      title: 'Step 1',
      example: <ImplementationGuideStep1 />,
      source: ImplementationGuideStep1Src,
    }, {
      title: 'Step 2',
      example: <ImplementationGuideStep2 />,
      source: ImplementationGuideStep2Src,
    }, {
      title: 'Step 3',
      example: <ImplementationGuideStep3 />,
      source: ImplementationGuideStep3Src,
    }, {
      title: 'Step 4',
      example: <ImplementationGuideStep4 />,
      source: ImplementationGuideStep4Src,
    }]}
  />
);

export default ImplementationGuidePage;
