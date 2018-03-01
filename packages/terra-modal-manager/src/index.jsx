import ModalManager, { disclosureType } from './ModalManager';
import withModalManager from './withModalManager';
import modalManagerReducers from './reducers';
import { open, close, push, pop, maximize, minimize, gainFocus, loseFocus } from './actions';

const mapStateToProps = state => (
  (disclosureState => ({
    modalComponentData: disclosureState.componentKeys.map(key => (disclosureState.components[key])),
    size: disclosureState.size,
    isOpen: disclosureState.isOpen,
    isMaximized: disclosureState.isMaximized,
    isFocused: disclosureState.isFocused,
  }))(state.modalManager)
);

export { mapStateToProps };

const mapDispatchToProps = dispatch => ({
  openModal: (data) => { dispatch(open(data)); },
  closeModal: (data) => { dispatch(close(data)); },
  pushModal: (data) => { dispatch(push(data)); },
  popModal: (data) => { dispatch(pop(data)); },
  maximizeModal: (data) => { dispatch(maximize(data)); },
  minimizeModal: (data) => { dispatch(minimize(data)); },
  gainFocus: (data) => { dispatch(gainFocus(data)); },
  loseFocus: (data) => { dispatch(loseFocus(data)); },
});

export { mapDispatchToProps };

const reducers = {
  modalManager: modalManagerReducers,
};
export { reducers };

export default ModalManager;
export { disclosureType };

export { withModalManager };
