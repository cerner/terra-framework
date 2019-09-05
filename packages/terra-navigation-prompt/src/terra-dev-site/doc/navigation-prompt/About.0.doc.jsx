import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

// Component Source
import NavigationPromptSrc from '!raw-loader!../../../../src/NavigationPrompt';
import NavigationPromptCheckpointSrc from '!raw-loader!../../../../src/NavigationPromptCheckpoint';

// Example Files
import NavigationPromptExample from './examples/NavigationPromptExample';
import NavigationPromptExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/navigation-prompt/examples/NavigationPromptExample';

const AboutPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        example: <NavigationPromptExample />,
        source: NavigationPromptExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'NavigationPrompt',
        componentSrc: NavigationPromptSrc,
      },
      {
        componentName: 'NavigationPromptCheckpoint',
        componentSrc: NavigationPromptCheckpointSrc,
      },
    ]}
  />
);

export default AboutPage;
