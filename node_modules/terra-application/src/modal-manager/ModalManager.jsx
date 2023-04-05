import React from 'react';
import PropTypes from 'prop-types';
import TerraModalManager from 'terra-modal-manager';

import { navigationPromptResolutionOptionsShape } from '../navigation-prompt';
import DisclosureContainer from '../disclosure-manager/_DisclosureContainer';

const propTypes = {
  /**
   * The components to be rendered in the body of the ModalManager. These components will receive the
   * disclosure capabilities through the DisclosureManger's context API.
   */
  children: PropTypes.node,
  /**
   * The component to render within the Modal above the disclosed content.
   */
  disclosureAccessory: PropTypes.element,
  /**
   * The Object (or function that returns an Object) that specifies the messages
   * used to prompt the user when disclosure dismissal occurs when pending state
   * is present. If not provided, the default messaging will be used.
   */
  navigationPromptResolutionOptions: navigationPromptResolutionOptionsShape,
};

const ModalManager = ({ navigationPromptResolutionOptions, ...terraModalManagerProps }) => (
  <TerraModalManager
    {...terraModalManagerProps}
    withDisclosureContainer={disclosureContent => (
      <DisclosureContainer navigationPromptResolutionOptions={navigationPromptResolutionOptions}>
        {disclosureContent}
      </DisclosureContainer>
    )}
  />
);

ModalManager.propTypes = propTypes;

export default ModalManager;
