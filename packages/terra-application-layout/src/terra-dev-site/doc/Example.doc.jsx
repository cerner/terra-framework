/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import Markdown from 'terra-markdown';
import ContentContainer from 'terra-content-container';
import Button from 'terra-button';
import SlidePanel from 'terra-slide-panel';
import ExampleApplicationSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ExampleApplication.jsx';

import { version } from '../../../package.json';
import ExampleDoc from '../../../docs/example.md';

import ExampleApplication from './example/ExampleApplication';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = { panelIsOpen: false };

    this.handlePanelToggle = this.handlePanelToggle.bind(this);
  }

  handlePanelToggle() {
    this.setState({ panelIsOpen: !this.state.panelIsOpen });
  }

  render() {
    const { panelIsOpen } = this.state;

    return (
      <div style={{ height: '100%' }}>
        <ContentContainer
          fill
          header={(
            <div>
              <div id="version">Version: {version}</div>
              <Markdown id="readme" src={ExampleDoc} />
              <Button text={panelIsOpen ? 'Show Example' : 'Show Source Code'} onClick={this.handlePanelToggle} />
            </div>
          )}
        >
          <SlidePanel
            mainContent={<ExampleApplication />}
            panelContent={<Markdown src={`${'```'}jsx\n${ExampleApplicationSrc}${'```'}`} />}
            isOpen={this.state.panelIsOpen}
            isFullscreen
            fill
          />
        </ContentContainer>
      </div>
    );
  }
}

export default Example;
