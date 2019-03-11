import React from 'react';
import DocTemplate from 'terra-doc-template';
import ImplementationGuidePart3Doc from '../../../../../docs/implementation-guide/IMPLEMENTATION_GUIDE_PART_3.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Example Files
import ImplementationGuidePart3 from '../examples/ImplementationGuidePart3';
import ImplementationGuidePart3Src from '!raw-loader!../../../../../src/terra-dev-site/doc/navigation-prompt/examples/ImplementationGuidePart3';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const ImplementationGuidePage = () => (
  <DocTemplate
    packageName="terra-navigation-prompt"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-navigation-prompt"
    readme={ImplementationGuidePart3Doc}
    examples={[{
      title: 'Part 3 - Implementing a Custom Prompt Solution',
      example: <ImplementationGuidePart3 />,
      source: ImplementationGuidePart3Src,
    }]}
  />
);

export default ImplementationGuidePage;
