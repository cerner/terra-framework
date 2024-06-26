import React from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import { withRouter } from 'react-router-dom';
import ThemeContext from 'terra-theme-context';
import Tab from './_Tab';
import TabMenu from './_TabMenu';
import CollapsedTab from './_CollapsedTab';
import styles from './ApplicationTabs.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Alignment of the navigational tabs. ( e.g start, center, end )
   */
  alignment: PropTypes.oneOf(['start', 'center', 'end']),
  /**
   * Navigational links that will generate tabs that will update the path. These paths are matched with react-router to selection.
   */
  links: PropTypes.arrayOf(PropTypes.shape({
    /**
     * The id to append to the link.
     */
    id: PropTypes.string,
    /**
     * The path to push to the route.
     */
    path: PropTypes.string.isRequired,
    /**
     * The display text for the link.
     */
    text: PropTypes.string.isRequired,

    icon: PropTypes.icon,
  })),
  /**
   * The click callback of the tab.
   */
  onTabClick: PropTypes.func,
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

  hasIcons: PropTypes.bool,
};

const defaultProps = {
  alignment: 'center',
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
    this.resizeObserver = new ResizeObserver((entries) => {
      this.contentWidth = entries[0].contentRect.width;
      if (!this.isCalculating) {
        this.animationFrameID = window.requestAnimationFrame(() => {
          // Resetting the calculations so that all elements will be rendered face-up for width calculations
          this.resetCalculations();
          this.forceUpdate();
        });
      }
    });
    this.resizeObserver.observe(this.container);
    this.handleResize(this.contentWidth);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.links.length !== nextProps.links.length) {
      this.resetCalculations();
    }
    return true;
  }

  componentDidUpdate() {
    if (this.isCalculating) {
      this.isCalculating = false;
      this.handleResize(this.contentWidth);
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameID);
    this.resizeObserver.disconnect(this.container);
    this.container = null;
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
      this.forceUpdate();
    }
  }

  setContainerNode(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.container = node;
  }

  resetCalculations() {
    this.animationFrameID = null;
    this.hiddenStartIndex = -1;
    this.menuHidden = false;
    this.isCalculating = true;
  }

  render() {
    const {
      alignment,
      links,
      location,
      match,
      history,
      staticContext,
      hasIcons,
      onTabClick,
      ...customProps
    } = this.props;

    const visibleTabs = [];
    const collapsedTabs = [];

    links.forEach((link, index) => {
      const tabProps = {
        id: link.id,
        path: link.path,
        text: link.text,
        key: link.path,
        externalLink: link.externalLink,
        icon: link.icon,
        location,
        onTabClick,
        history,
      };

      if (this.hiddenStartIndex < 0) {
        visibleTabs.push(<Tab {...tabProps} />);
        collapsedTabs.push(<CollapsedTab {...tabProps} />);
      } else if (index < this.hiddenStartIndex) {
        visibleTabs.push(<Tab {...tabProps} />);
      } else {
        collapsedTabs.push(<CollapsedTab {...tabProps} />);
      }
    });
    const tabClass = cx(
      'tabs-container',
      { 'is-calculating': this.isCalculating },
      alignment,
    );
    const theme = this.context;

    return (
      <div {...customProps} className={cx('tabs-wrapper', theme.className)}>
        <div
          className={tabClass}
          ref={this.setContainerNode}
        >
          {visibleTabs}
          <TabMenu location={location} isHidden={this.menuHidden} hasIcons={hasIcons}>
            {collapsedTabs}
          </TabMenu>
          <div className={cx('divider-after-last-tab')} />
        </div>
      </div>
    );
  }
}

ApplicationTabs.propTypes = propTypes;
ApplicationTabs.defaultProps = defaultProps;
ApplicationTabs.contextType = ThemeContext;

export default withRouter(ApplicationTabs);
