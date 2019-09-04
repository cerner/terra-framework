import React from 'react';
import DocTemplate from 'terra-doc-template';
import ImplementationGuidePart1Doc from '../../../../../docs/implementation-guide/IMPLEMENTATION_GUIDE_PART_1.md';

// Example Files
import ImplementationGuidePart1 from '../examples/ImplementationGuidePart1';
import ImplementationGuidePart1Src from '!raw-loader!../../../../../src/terra-dev-site/doc/navigation-prompt/examples/ImplementationGuidePart1';

const ImplementationGuidePage = () => (
  <DocTemplate
    packageName="terra-navigation-prompt"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-navigation-prompt"
    readme={ImplementationGuidePart1Doc}
    examples={[{
      title: 'Part 1 - Implementing the NavigationPrompt and NavigationPromptCheckpoint',
      example: <ImplementationGuidePart1 />,
      source: ImplementationGuidePart1Src,
    }]}
  />
);

export default ImplementationGuidePage;
