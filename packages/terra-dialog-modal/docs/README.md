# Terra Dialog Modal

The Dialog Modal would allow for dynamic height modals. Dialog modal would be a limited use case, as dynamic heights breaks with more complicated DOM structures. If content is too complicated, the terra-modal-manager should be used. The components is placed at an 8000 z-index. The dialog supports release and request focus props similar to terra-popup and terra-date-picker, so it can be presented from another modal with focus.


## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-dialog-modal`

## Usage

```jsx
import React from 'react';
import Button from 'terra-button';
import ActionHeader from 'terra-action-header';
import ActionFooter from 'terra-action-footer';
import DialogModal from 'terra-dialog-modal';


class DefaultDialogModal extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  render() {
    const text = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      'Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.',
      'Integer congue feugiat ultricies.',
      ' Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.',
      'Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.',
      ' Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.',
      'Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.',
      'Nam vehicula, arcu vitae egestas porttitor,',
      'turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.'];
    return (
      <div>
        <DialogModal
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          header={<ActionHeader title="Action Header used here" onClose={this.handleCloseModal} />}
          footer={<ActionFooter start="Footer Goes here" />}
        >
          <p>{text}</p>
        </DialogModal>
        <Button id="trigger-dialog-modal" text="Trigger Dialog Modal" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

export default DefaultDialogModal;

```

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)
