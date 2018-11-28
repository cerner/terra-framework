import React from 'react';
import Button from 'terra-button';
import ActionHeader from 'terra-action-header';
import ActionFooter from 'terra-action-footer';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';

import DialogModal from '../../../DialogModal';

const propTypes = {
  disclosureManager: disclosureManagerShape,
};

class DialogModalWithFocus extends React.Component {
  constructor(props) {
    super(props);

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
    const paraOne = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
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
          ariaLabel="Default Dialog Modal"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          header={<ActionHeader title="Action Header used here" onClose={this.handleCloseModal} />}
          footer={<ActionFooter start="Action Footer used here" />}
          requestFocus={this.props.disclosureManager.requestFocus}
          releaseFocus={this.props.disclosureManager.releaseFocus}
        >
          <p>{paraOne}</p>
        </DialogModal>
        <Button text="Trigger Dialog Modal" onClick={this.handleOpenModal} />
        <br />
        <br />
        <Button text="Close Modal Manager" onClick={this.props.disclosureManager.closeDisclosure} />
      </div>
    );
  }
}

DialogModalWithFocus.propTypes = propTypes;
export default withDisclosureManager(DialogModalWithFocus);
