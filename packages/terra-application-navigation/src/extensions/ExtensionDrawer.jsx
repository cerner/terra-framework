import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import FocusTrap from 'focus-trap-react';
import onClickOutside from 'react-onclickoutside';
import ApplicationLayoutPropTypes from '../utils/propTypes';
import { isSizeCompact } from '../utils/helpers';
import ExtensionButton from './ExtensionButton';

import styles from '../ApplicationLayout.module.scss';

const cx = classNames.bind(styles);

const KEYCODES = {
  ESCAPE: 27,
};

const propTypes = {
  /**
   * The currently active breakpoint.
   */
  activeBreakpoint: PropTypes.string,
  /**
   * The content to be rendered in the ApplicationLayout's extensions region.
   */
  extensionConfig: ApplicationLayoutPropTypes.extensionConfigPropType,
  /**
   * The configuration values for the ApplicationName component.
   */
  isOpen: PropTypes.bool,
  /**
   * Function callback for closing the drawer.
   */
  onRequestClose: PropTypes.func.isRequired,
};

const defaultProps = {
  activeBreakpoint: '',
  isOpen: false,
};

class ExtensionDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleClickOutside() {
    this.props.onRequestClose();
  }

  handleKeydown(event) {
    if (event.keyCode === KEYCODES.ESCAPE) {
      event.preventDefault();
      this.props.onRequestClose(event);
    }
  }

  render() {
    const {
      activeBreakpoint,
      extensionConfig,
      isOpen,
      onRequestClose,
      ...customProps
    } = this.props;

    if (!extensionConfig || !isOpen) {
      return null;
    }

    // Delete the unnecessary props that come from react-onclickoutside.
    delete customProps.disableOnClickOutside;
    delete customProps.enableOnClickOutside;
    delete customProps.eventTypes;
    delete customProps.excludeScrollbar;
    delete customProps.outsideClickIgnoreClass;
    delete customProps.preventDefault;
    delete customProps.stopPropagation;

    let extensionItems = extensionConfig.extensions;
    if (!isSizeCompact(activeBreakpoint)) {
      extensionItems = extensionConfig.extensions.slice(3);
    }

    const maxIndex = extensionItems.length - 1;
    return (
      <FocusTrap focusTrapOptions={{ returnFocusOnDeactivate: true }}>
        <div {...customProps} className={cx(['extensions-drawer', { 'is-compact': isSizeCompact(activeBreakpoint) }])}>
          {extensionItems.map((item, index) => {
            const key = `${item.text}-${index}`;
            return (
              <ExtensionButton
                key={key}
                image={item.image}
                text={item.text}
                metaData={item.metaData}
                onRequestClose={onRequestClose}
                onSelect={item.onSelect}
                isLastItem={index === maxIndex}
              />
            );
          })}
        </div>
      </FocusTrap>
    );
  }
}

ExtensionDrawer.propTypes = propTypes;
ExtensionDrawer.defaultProps = defaultProps;
const onClickOutsideContent = onClickOutside(ExtensionDrawer);

export default onClickOutsideContent;
