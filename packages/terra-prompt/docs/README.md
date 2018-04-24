# Terra Prompt

`terra-prompt` is a notification dialog component built over the `terra-abstract-modal`. It has the highest z-index of 8001. It is a common component to be used for confirmation/acceptance criteria style dialogs. 

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-prompt`

## Usage

```jsx
import React from 'react';
import Button from 'terra-button';
import Prompt from '../../src/Prompt';

const clickOK = () => {
  alert('You clicked OK');
};

class CompletePrompt extends React.Component {
  constructor() {
    super();

    this.state = {
      showprompt: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showprompt: true });
  }

  handleCloseModal() {
    this.setState({ showprompt: false });
  }

  render() {
    return (
      <div>
        <Prompt
          showprompt={this.state.showprompt}
          onRequestClose={this.handleCloseModal}
          title="This is the title"
          message="This is the message"
          actions={[
            <Button
              text="Ok"
              onClick={clickOK}
            />,
            <Button
              text="Close"
              onClick={this.handleCloseModal}
            />,
          ]}
        />
        <Button text="Trigger Prompt" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

export default CompletePrompt;
```

## Component Features


 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
 * [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
