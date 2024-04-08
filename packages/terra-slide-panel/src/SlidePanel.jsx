import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import { injectIntl } from 'react-intl';
import { v4 as uuidv4 } from 'uuid';
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

  /**
   * @private
   * Callback function to set the slide panel ref.
   */
  setSlidePanelRef: PropTypes.func,

  /**
   * @private
   * Intl object injected from injectIntl
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func, locale: PropTypes.string }),
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
    this.setDisclosingNode = this.setDisclosingNode.bind(this);
    this.mainAriaDescribedByID = `detail-panel-warning-${uuidv4()}`;
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen && this.props.isOpen !== prevProps.isOpen) {
      // Save the disclosing node for returning focus when panel is closed
      this.setDisclosingNode(document.activeElement);
      this.panelNode.focus();
      return;
    }

    if (!this.props.isOpen && this.props.isOpen !== prevProps.isOpen) {
      if (this.disclosingNode?.focus) {
        // Return focus to the disclosing element
        this.disclosingNode.focus();
        return;
      }
      // The disclosing element doesn't exist or isn't focusable, return focus to the main div or body
      if (this.mainNode?.current) {
        this.mainNode.current.focus();
      } else {
        document.body.focus();
      }
    }
  }

  setPanelNode(node) {
    if (this.props.setSlidePanelRef) {
      this.props.setSlidePanelRef(node);
    }
    this.panelNode = node;
  }

  setDisclosingNode(node) {
    if (node) {
      this.disclosingNode = node;
    }
  }

  render() {
    const {
      intl,
      isFullscreen,
      isOpen,
      fill,
      mainAriaLabel,
      mainContent,
      panelAriaLabel,
      panelContent,
      panelBehavior,
      panelPosition,
      panelSize,
      setSlidePanelRef,
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
      <div
        className={cx(['panel'])}
        key="panel"
        tabIndex="-1"
        aria-label={panelAriaLabel || intl.formatMessage({ id: 'Terra.slidePanel.defaultPanelLabel' })}
        aria-hidden={!isOpen ? 'true' : 'false'}
        role="region"
        ref={this.setPanelNode}
      >
        <VisuallyHiddenText
          text={panelAriaLabel || intl.formatMessage({ id: 'Terra.slidePanel.defaultPanelLabel' })}
        />
        {panelContent}
      </div>
    );

    const mainDiv = (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-element-interactions
      <div
        className={cx('main')}
        key="main"
        tabIndex="-1"
        aria-label={mainAriaLabel}
        aria-describedby={this.mainAriaDescribedByID}
        aria-hidden={isOpen && isFullscreen ? 'true' : 'false'}
        ref={this.mainNode}
        role="main"
      >
        <VisuallyHiddenText
          tabIndex="-1"
          id={this.mainAriaDescribedByID}
          text={intl.formatMessage({ id: 'Terra.slidePanel.discloseWarning' })}
        />
        {mainContent}
      </div>
    );

    const content = (panelPosition === SlidePanelPositions.START) ? (
      <React.Fragment>
        {panelDiv}
        {mainContent && mainDiv}
      </React.Fragment>
    ) : (
      <React.Fragment>
        {mainContent && mainDiv}
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

export default injectIntl(SlidePanel);
export { SlidePanelPositions };
