import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import { withRouter } from 'react-router-dom';
import 'terra-base/lib/baseStyles';
import Tab from './_Tab';
import TabMenu from './_TabMenu';
import TabUtils from './_TabUtils';
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

  resetCalculations() {
    this.hiddenStartIndex = -1;
    this.menuHidden = false;
    this.isCalculating = true;
  }

  handleResize(width) {
    // Calculate hide index
    const childrenCount = this.props.links.length;
    const tabWidth = childrenCount > 1 ? this.container.children[0].getBoundingClientRect().width : 0;
    const availableWidth = width - tabWidth;

    let newHideIndex = childrenCount;
    let calcMinWidth = 0;
    let isMenuHidden = true;
    for (let i = 0; i < childrenCount; i += 1) {
      calcMinWidth += tabWidth;
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
        visibleChildren.push(<Tab id={link.id} path={link.path} text={link.text} key={link.path} />);
        hiddenChildren.push(<Tab id={link.id} path={link.path} text={link.text} key={link.path} isCollapsed />);
      } else if (index < this.hiddenStartIndex) {
        visibleChildren.push(<Tab id={link.id} path={link.path} text={link.text} key={link.path} />);
      } else {
        hiddenChildren.push(<Tab id={link.id} path={link.path} text={link.text} key={link.path} isCollapsed />);
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
          <TabMenu isHidden={this.menuHidden}>
            {hiddenChildren}
          </TabMenu>
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
