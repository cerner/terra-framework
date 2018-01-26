import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import { withRouter } from 'react-router-dom';
import 'terra-base/lib/baseStyles';
import ApplicationTab from './_ApplicationTab';
import ApplicationTabMenu from './_ApplicationTabMenu';
import TabUtils from './ApplicationTabUtils';
import styles from './ApplicationTabs.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Navigational links that will generate tabs that will update the path. These paths are matched with react-router to selection.
   */
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
    /**
   * The location as provided by the `withRouter()` HOC.
   */
  location: PropTypes.object.isRequired,
  /**
   * The match as provided by the `withRouter()` HOC.
   */
  match: PropTypes.object.isRequired,
  /**
   * The history as provided by the `withRouter()` HOC.
   */
  history: PropTypes.object.isRequired,
  /**
   * The staticContext as provided by the `withRouter()` HOC. This will only be provided when
   * within a StaticRouter.
   */
  staticContext: PropTypes.object,
};

const defaultProps = {
  links: [],
};

class ApplicationTabs extends React.Component {
  constructor(props) {
    super(props);
    this.setContainerNode = this.setContainerNode.bind(this);
    this.setMenuNode = this.setMenuNode.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.resetCalculations();
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver(() => {
      // Resetting the state so that all elements will be rendered face-up for width calculations
      if (this.hiddenStartIndex !== -1 || this.menuHidden || !this.isCalculating) {
        this.resetCalculations();
        this.forceUpdate();
      }
    });
    this.resizeObserver.observe(this.container);
    this.handleResize(this.container.clientWidth);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location !== newProps.location) {
      this.resetCalculations();
    }
  }

  componentDidUpdate() {
    if (this.isCalculating) {
      this.handleResize(this.container.clientWidth);
    }
  }

  componentWillUnmount() {
    this.resizeObserver.disconnect(this.container);
    this.container = null;
  }

  setContainerNode(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.container = node;
  }

  setMenuNode(node) {
    if (node === null) { return; }
    this.menuNode = node;
  }

  resetCalculations() {
    this.hiddenStartIndex = -1;
    this.menuHidden = false;
    this.isCalculating = true;
  }

  handleResize(width) {
    const menuToggleWidth = this.menuNode.getBoundingClientRect().width + 2;
    const availableWidth = width - menuToggleWidth;

    // Calculate hide index
    const childrenCount = this.props.links.length;
    let newHideIndex = childrenCount;
    let calcMinWidth = 0;
    let isMenuHidden = true;
    for (let i = 0; i < childrenCount; i += 1) {
      const tab = this.container.children[i];
      calcMinWidth += tab.clientWidth;
      if (calcMinWidth > availableWidth && !(i === childrenCount - 1 && calcMinWidth <= width)) {
        newHideIndex = i;
        isMenuHidden = false;
        break;
      }
    }

    if (this.hiddenStartIndex !== newHideIndex) {
      this.hiddenStartIndex = newHideIndex;
      this.menuHidden = isMenuHidden;
      this.isCalculating = false;
      this.forceUpdate();
    }
  }

  render() {
    const {
      links,
      location,
      match,
      history,
      staticContext,
      ...customProps
    } = this.props;

    const visibleChildren = [];
    const hiddenChildren = [];

    links.forEach((link, index) => {
      if (this.hiddenStartIndex < 0) {
        visibleChildren.push(<ApplicationTab id={link.id} path={link.path} text={link.text} key={link.path} />);
        hiddenChildren.push(<ApplicationTab id={link.id} path={link.path} text={link.text} key={link.path} isHidden />);
      } else if (index < this.hiddenStartIndex || this.hiddenStartIndex < 0) {
        visibleChildren.push(<ApplicationTab id={link.id} path={link.path} text={link.text} key={link.path} />);
      } else {
        hiddenChildren.push(<ApplicationTab id={link.id} path={link.path} text={link.text} key={link.path} isHidden />);
      }
    });

    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <div {...customProps} className={cx(['application-tabs'])}>
        <div
          className={cx(['tabs-container', { 'is-calculating': this.isCalculating }])}
          tabIndex="0"
          role="tablist"
          ref={this.setContainerNode}
        >
          {visibleChildren}
          <ApplicationTabMenu refCallback={this.setMenuNode} isMenuHidden={this.menuHidden} >
            {hiddenChildren}
          </ApplicationTabMenu>
        </div>
      </div>
      /* eslint-enable jsx-ally/no-static-element-interactions */
    );
  }
}

ApplicationTabs.propTypes = propTypes;
ApplicationTabs.defaultProps = defaultProps;
ApplicationTabs.Utils = TabUtils;

export default withRouter(ApplicationTabs);
