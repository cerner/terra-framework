import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './SlidePanel.module.scss';

const cx = classNamesBind.bind(styles);

const SlidePanelPositions = {
  START: 'start',
  END: 'end',
};

const propTypes = {
  /**
   * String that labels the Panel content area for screen readers.
   */
  panelAriaLabel: PropTypes.string,

  /**
   * String that labels the Main content area for screen readers.
   */
  mainAriaLabel: PropTypes.string,

  /**
   * The component to display in the main content area.
   */
  mainContent: PropTypes.node,

  /**
   * The component to display in the panel content area.
   */
  panelContent: PropTypes.node,

  /**
   * The style of panel presentation. One of `overlay`, `squish`.
   */
  panelBehavior: PropTypes.oneOf(['overlay', 'squish']),

  /**
   * The position at which the panel will be displayed. This property honors the current direction setting. One of `start`, `end`.
   */
  panelPosition: PropTypes.oneOf(['start', 'end']),

  /**
   * The size at which the panel will be displayed. One of `small`, `large`.
   */
  panelSize: PropTypes.oneOf(['small', 'large']),

  /**
   * Whether or not, when open, the panel should be displayed with the full width of the SlidePanel.
   */
  isFullscreen: PropTypes.bool,

  /**
   * Whether or not the panel should be displayed.
   */
  isOpen: PropTypes.bool,

  /**
   * Whether or not the SlidePanel should be sized relative to its parent container.
   */
  fill: PropTypes.bool,
};

const defaultProps = {
  panelBehavior: 'overlay',
  panelPosition: SlidePanelPositions.END,
  panelSize: 'small',
};

class SlidePanel extends React.Component {
  constructor(props) {
    super(props);
    this.setPanelNode = this.setPanelNode.bind(this);
    this.mainNode = React.createRef();
  }

  componentDidUpdate(prevProps) {
    console.log(this.panelNode);
    console.log(this.panelNode);

    if (this.props.isOpen && this.props.isOpen !== prevProps.isOpen) {
      this.panelNode.focus(); // TODO: Find the interactable element?
    } else if (!this.props.isOpen && this.props.isOpen !== prevProps.isOpen) {
      this.mainNode.current.focus(); // TODO: Find the interactable element?
    }
  }

  setPanelNode(node) {
    this.panelNode = node;
  }

  render() {
    const {
      panelAriaLabel,
      mainAriaLabel,
      mainContent,
      panelContent,
      panelBehavior,
      panelPosition,
      panelSize,
      isFullscreen,
      isOpen,
      fill,
      ...customProps
    } = this.props;

    const theme = this.context;

    const slidePanelClassNames = classNames(cx(
      'slide-panel',
      { 'is-open': isOpen },
      { 'is-fullscreen': isFullscreen },
      { fill },
      theme.className,
    ),
    customProps.className);

    const panelDiv = (
      <div className={cx(['panel'])} key="panel" tabIndex="-1" aria-label={panelAriaLabel} aria-hidden={!isOpen ? 'true' : 'false'} ref={this.setPanelNode}>
        {panelContent}
      </div>
    );

    const mainDiv = (
      <div className={cx('main')} key="main" tabIndex="-1" aria-label={mainAriaLabel} ref={this.mainNode}>
        {mainContent}
      </div>
    );

    const content = (panelPosition === SlidePanelPositions.START) ? (
      <React.Fragment>
        {panelDiv}
        {mainDiv}
      </React.Fragment>
    ) : (
      <React.Fragment>
        {mainDiv}
        {panelDiv}
      </React.Fragment>
    );

    return (
      <div
        {...customProps}
        className={slidePanelClassNames}
        data-slide-panel-panel-behavior={panelBehavior}
        data-slide-panel-panel-position={panelPosition}
        data-slide-panel-panel-size={panelSize}
      >
        {content}
      </div>
    );
  }
}

SlidePanel.propTypes = propTypes;
SlidePanel.defaultProps = defaultProps;
SlidePanel.contextType = ThemeContext;

export default SlidePanel;
export { SlidePanelPositions };
