import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import 'terra-base/lib/baseStyles';
import ApplicationTab from './_ApplicationTab';
import ApplicationTabMenu from './_ApplicationTabMenu';
import TabUtils from './ApplicationTabUtils';
import styles from './ApplicationTabs.scss';

const cx = classNames.bind(styles);

const propTypes = {
  links: PropTypes.arrayOf({
    id: PropTypes.string,
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

const defaultProps = {
  links: [],
};

class ApplicationTabs extends React.Component {
  constructor(props) {
    super(props);
    this.setContainer = this.setContainer.bind(this);
    this.setMenuRef = this.setMenuRef.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleFocusLeft = this.handleFocusLeft.bind(this);
    this.handleFocusRight = this.handleFocusRight.bind(this);
    this.state = {
      hiddenStartIndex: -1,
      menuHidden: false,
      isCalculating: true,
    };
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver((entries) => {
      // Resetting the state so that all elements will be rendered face-up for width calculations
      if (this.state.hiddenStartIndex !== -1 || this.state.menuHidden || !this.state.isCalculating) {
        this.setState({ hiddenStartIndex: -1, menuHidden: false, isCalculating: true });
      }
      this.handleResize(entries[0].contentRect.width);
    });
    this.resizeObserver.observe(this.container);
  }

  componentWillUnmount() {
    this.resizeObserver.disconnect(this.container);
    this.container = null;
  }

  setContainer(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.container = node;
  }

  setMenuRef(node) {
    if (node === null) { return; }
    this.menuRef = node;
  }

  handleResize(width) {
    const menuMarginLeft = parseInt(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-left'), 10);
    const menuMarginRight = parseInt(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-right'), 10);
    const menuToggleWidth = this.menuRef.getBoundingClientRect().width + menuMarginLeft + menuMarginRight;
    const availableWidth = width - menuToggleWidth;

    // Calculate hide index
    const childrenCount = this.props.links.length;
    let newHideIndex = childrenCount;
    let calcMinWidth = 0;
    let isMenuHidden = true;
    for (let i = 0; i < childrenCount; i += 1) {
      const tab = this.container.children[i];
      const tabMarginLeft = parseInt(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-left'), 10);
      const tabMarginRight = parseInt(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-right'), 10);
      const minWidth = parseInt(window.getComputedStyle(tab, null).getPropertyValue('min-width'), 10);
      calcMinWidth += (minWidth + tabMarginLeft + tabMarginRight);
      if (calcMinWidth > availableWidth && !(i === childrenCount - 1 && calcMinWidth <= width)) {
        newHideIndex = i;
        isMenuHidden = false;
        break;
      }
    }

    if (this.state.hiddenStartIndex !== newHideIndex) {
      this.setState({ hiddenStartIndex: newHideIndex, menuHidden: isMenuHidden, isCalculating: false });
    }
  }

  handleOnKeyDown(event) {
    // If there are less than 2 children we don't need to worry about keyboard navigation
    if (this.props.links.length < 2) {
      return;
    }

    const isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
    const visibleChildren = this.container.children;

    if (event.nativeEvent.keyCode === TabUtils.KEYCODES.LEFT_ARROW) {
      if (isRTL) {
        this.handleFocusRight(visibleChildren);
      } else {
        this.handleFocusLeft();
      }
    } else if (event.nativeEvent.keyCode === TabUtils.KEYCODES.RIGHT_ARROW) {
      if (isRTL) {
        this.handleFocusLeft();
      } else {
        this.handleFocusRight(visibleChildren);
      }
    }
  }

  handleFocusRight(event, visibleChildren) {
    const currentItem = this.container.querySelector('[aria-current="true"]');
    const startIndex = currentItem.data['tab-index'];
    if (startIndex >= this.state.hiddenStartIndex) {
      return;
    }

    for (let i = startIndex + 1; i < visibleChildren.length; i += 1) {
      if (visibleChildren[i] === this.menuRef) {
        this.menuRef.focus();
        break;
      } else {
        this.container.children[i].click();
        break;
      }
    }
  }

  handleFocusLeft() {
    const currentItem = this.container.querySelector('[aria-current="true"]');
    let startIndex = currentItem.data['tab-index'];
    if (startIndex >= this.state.hiddenStartIndex || document.activeElement === this.menuRef) {
      startIndex = this.state.hiddenStartIndex - 1;
    }

    for (let i = startIndex; i >= 0; i -= 1) {
      if (document.activeElement === this.menuRef) {
        this.container.focus();
      }
      this.container.children[i].click();
      break;
    }
  }

  render() {
    const visibleChildren = [];
    const hiddenChildren = [];

    this.props.links.forEach((link, index) => {
      if (index < this.state.hiddenStartIndex || this.state.hiddenStartIndex < 0) {
        visibleChildren.push(<ApplicationTab id={link.id} path={link.path} text={link.text} key={link.path} />);
      } else {
        hiddenChildren.push(<ApplicationTab id={link.id} path={link.path} text={link.text} key={link.path} isHidden />);
      }
    });

    const menu = this.state.menuHidden ? null : (
      <ApplicationTabMenu refCallback={this.setMenuRef}>
        {hiddenChildren}
      </ApplicationTabMenu>
    );

    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <div
        className={cx(['tabs-container', { 'is-calculating': this.state.isCalculating }])}
        ref={this.setContainer}
        tabIndex="0"
        onKeyDown={this.handleOnKeyDown}
        role="tablist"
      >
        {visibleChildren}
        {menu}
      </div>
      /* eslint-enable jsx-ally/no-static-element-interactions */
    );
  }
}

ApplicationTabs.propTypes = propTypes;
ApplicationTabs.defaultProps = defaultProps;
ApplicationTabs.Utils = TabUtils;

export default ApplicationTabs;
