import React from 'react';
import Button from 'terra-button';
import PropTypes from 'prop-types';
import ActionHeader from 'terra-action-header';
import ActionFooter from 'terra-action-footer';
import DialogModal from '../../src/DialogModal';

const propTypes = {
  width: PropTypes.string,
  isFocused: PropTypes.bool,
};

const defaultProps = {
  isFocused: false,
};

class DialogModalExample extends React.Component {
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
          ariaLabel="Dialog Modal Example"
          isOpen={this.state.isOpen}
          isFocused={this.props.isFocused}
          onRequestClose={this.handleCloseModal}
          header={<ActionHeader title="Action Header used here" onClose={this.handleCloseModal} />}
          footer={<ActionFooter start="Footer Goes here" />}
          width={this.props.width}
        >
          <p>{paraOne}</p>
        </DialogModal>
        <Button text="Trigger Dialog Modal" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

DialogModalExample.propTypes = propTypes;
DialogModalExample.defaultProps = defaultProps;
export default DialogModalExample;
