import React from 'react';
import Button from 'terra-button';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import DatePicker from '../../../../DatePicker';

const ModalContent = (props) => {
  const { disclosureManager } = props;

  return (
    <div className="content-container" style={{ height: '100%', padding: '10px' }}>
      <DatePicker name="date-picker-in-modal" />
      <br />
      <br />
      <Button className="close-disclosure" text="Close Disclosure" onClick={disclosureManager.closeDisclosure} />
    </div>
  );
};

ModalContent.propTypes = {
  disclosureManager: disclosureManagerShape,
};

export default withDisclosureManager(ModalContent);
