import React from 'react';
import DocTemplate from 'terra-doc-template';
import ImplementationGuidePart2Doc from '../../../../../docs/implementation-guide/IMPLEMENTATION_GUIDE_PART_2.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Example Files
import ImplementationGuidePart2 from '../examples/ImplementationGuidePart2';
import ImplementationGuidePart2Src from '!raw-loader!../../../../../src/terra-dev-site/doc/navigation-prompt/examples/ImplementationGuidePart2';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const ImplementationGuidePage = () => (
  <DocTemplate
    packageName="terra-navigation-prompt"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-navigation-prompt"
    readme={ImplementationGuidePart2Doc}
    examples={[{
      title: 'Part 2 - Implementing a Custom Prompt Handler',
      example: <ImplementationGuidePart2 />,
      source: ImplementationGuidePart2Src,
    }]}
  />
);

export default ImplementationGuidePage;
