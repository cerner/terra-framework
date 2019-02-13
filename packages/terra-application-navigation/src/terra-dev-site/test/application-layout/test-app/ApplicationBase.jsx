import React from 'react';
import PropTypes from 'prop-types';
import ModalManager from 'terra-modal-manager';
import { ActiveBreakpointProvider } from 'terra-breakpoints';

const ApplicationBase = props => (
  <div style={{ height: '100%' }}>
    <ActiveBreakpointProvider>
      <ModalManager>
        {props.children}
      </ModalManager>
    </ActiveBreakpointProvider>
  </div>
);

ApplicationBase.propTypes = {
  children: PropTypes.node,
};

export default ApplicationBase;
