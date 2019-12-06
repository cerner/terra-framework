import React from 'react';
import Button from 'terra-button';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import PopupModalContent from './PopupModalContent';

function ModalContainer(props) {
  const disclose = () => {
    props.disclosureManager.disclose({
      preferredType: 'modal',
      size: '',
      content: {
        key: 'PopupModalContent',
        component: <PopupModalContent />,
      },
    });
  };

  return <Button className="disclose" text="Disclose Modal" onClick={disclose} />;
}

ModalContainer.propTypes = {
  disclosureManager: disclosureManagerShape,
};

export default withDisclosureManager(ModalContainer);
