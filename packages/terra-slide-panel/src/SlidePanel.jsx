import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import { injectIntl } from 'react-intl';
import styles from './SlidePanel.module.scss';
import SlidePanelUtils from './_SlidePanelUtils';

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
   * An ID or space-separated string of IDs that describe the Main content area for screen readers. For MacOS VoiceOver only.
   * Example: "patient-details" or "patient-details-1 patient-details-2 patient-details-3" are valid.
   */
  mainAriaDescribedBy: PropTypes.string,

  /**
   * Whether the mainAriaDescribedBy should replace the default or be appended to it. For   MacOS VoiceOver only.
   */
  replaceMainAriaDescribedBy: PropTypes.bool,

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
  replaceMainAriaDescribedBy: false,
};

class SlidePanel extends React.Component {
  constructor(props) {
    super(props);
    this.setPanelNode = this.setPanelNode.bind(this);
    this.mainNode = React.createRef();
    this.setLastClicked = this.setLastClicked.bind(this);
    this.setDisclosingNode = this.setDisclosingNode.bind(this);
    this.defaultMainAriaDescribedByID = 'detail-panel-warning';
    this.mainAriaDescribedByList = this.defaultMainAriaDescribedByID;

    if(SlidePanelUtils.isMac()){

      if (this.props.replaceMainAriaDescribedBy) {
        this.mainAriaDescribedByList = this.props.mainAriaDescribedBy;
      } else if (this.props.mainAriaDescribedBy) {
        this.mainAriaDescribedByList = this.mainAriaDescribedByList.concat(' ', this.props.mainAriaDescribedBy);
      }

    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen && this.props.isOpen !== prevProps.isOpen) {
      // Save the disclosing node for returning focus when panel is closed
      this.setDisclosingNode(this.lastClicked);
      this.panelNode.focus();
      return;
    }

    if (!this.props.isOpen && this.props.isOpen !== prevProps.isOpen) {
      if (this.disclosingNode) {
        // Return focus to the disclosing element
        this.disclosingNode.setAttribute('aria-expanded', 'false');
        this.disclosingNode.focus();
        return;
      }
      // The disclosing element doesn't exist and return focus to the main div
      this.mainNode.current.focus();
    }
  }

  setPanelNode(node) {
    if (this.props.setSlidePanelRef) {
      this.props.setSlidePanelRef(node);
    }
    this.panelNode = node;
  }

  setLastClicked(event) {
    this.lastClicked = event.target;
  }

  setDisclosingNode(node) {
    if (node) {
      node.setAttribute('aria-expanded', 'true');
      this.disclosingNode = node;
    }
  }

  render() {
    const {
      intl,
      isFullscreen,
      isOpen,
      fill,
      mainAriaDescribedBy,
      mainAriaLabel,
      mainContent,
      panelAriaLabel,
      panelContent,
      panelBehavior,
      panelPosition,
      panelSize,
      replaceMainAriaDescribedBy,
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
        aria-describedby={this.mainAriaDescribedByList}
        ref={this.mainNode}
        role="main"
        onClick={this.setLastClicked}
        onKeyUp={this.setLastClicked}
      >
        <VisuallyHiddenText
          tabIndex="-1"
          id={this.defaultMainAriaDescribedByID}
          text={intl.formatMessage({ id: 'Terra.slidePanel.discloseWarning' })}
        />
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

export default injectIntl(SlidePanel);
export { SlidePanelPositions };
