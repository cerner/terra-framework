import React from 'react';
import DocTemplate from 'terra-doc-template';
import ImplementationGuidePart0Doc from '../../../../../docs/implementation-guide/IMPLEMENTATION_GUIDE_PART_0.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Example Files
import ImplementationGuidePart0 from '../examples/ImplementationGuidePart0';
import ImplementationGuidePart0Src from '!raw-loader!../../../../../src/terra-dev-site/doc/navigation-prompt/examples/ImplementationGuidePart0';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const ImplementationGuidePage = () => (
  <DocTemplate
    packageName="terra-navigation-prompt"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-navigation-prompt"
    readme={ImplementationGuidePart0Doc}
    examples={[{
      title: 'Part 0 - Reviewing the Initial FormSwitcher Implementation',
      example: <ImplementationGuidePart0 />,
      source: ImplementationGuidePart0Src,
    }]}
  />
);

export default ImplementationGuidePage;
