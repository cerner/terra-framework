import React from 'react';
import PropTypes from 'prop-types';
import Hookshot from 'terra-hookshot';
import { Portal } from 'react-portal';
import PopupContent, { cornerSize } from './_PopupContent';
import PopupArrow from './_PopupArrow';
import PopupOverlay from './_PopupOverlay';
import PopupUtils from './_PopupUtils';
import PopupHeights from './PopupHeights';
import PopupWidths from './PopupWidths';

const ATTACHMENT_POSITIONS = [
  'top left',
  'top center',
  'top right',
  'middle left',
  'middle center',
  'middle right',
  'bottom left',
  'bottom center',
  'bottom right',
];

const propTypes = {
  /**
   * If the primary attachment is not available, how should the content be positioned. Options
   * include 'auto', 'flip', or 'push'.
   */
  attachmentBehavior: PropTypes.oneOf(['auto', 'flip', 'push']),
  /**
   * The children to be displayed as content within the popup.
   */
  children: PropTypes.node.isRequired,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * Target element for the popup to anchor to.
   */
  targetRef: PropTypes.func,
  /**
   * Bounding container for the popup, will use window if no value provided.
   */
  boundingRef: PropTypes.func,
  /**
   * @private CSS classnames that are append to the arrow.
   */
  classNameArrow: PropTypes.string,
  /**
   * @private CSS classnames that are append to the popup content inner.
   */
  classNameContent: PropTypes.string,
  /**
   * @private CSS classnames that are append to the overlay.
   */
  classNameOverlay: PropTypes.string,
  /**
   * Attachment point for the popup, this will be mirrored to the target. Options include: 'top left',
   * 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left',
   * 'bottom center', or 'bottom right'.
   */
  contentAttachment: PropTypes.oneOf(ATTACHMENT_POSITIONS),
  /**
   * A string representation of the height in px, limited to:
   * 40, 80, 120, 160, 240, 320, 400, 480, 560, 640, 720, 800, 880 or auto.
   */
  contentHeight: PropTypes.oneOf(['40', '80', '120', '160', '240', '320', '400', '480', '560', '640', '720', '800', '880', 'auto']),
  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 400, 640, 960, 1280, 1760 or auto.
   */
  contentWidth: PropTypes.oneOf(['160', '240', '320', '400', '640', '960', '1280', '1760', 'auto']),
  /**
   * Should an arrow be placed at the attachment point.
   */
  isArrowDisplayed: PropTypes.bool,
  /**
   * Set this to `true` if your content has focusable elements and you want them to receive focus instead of focusing on the default popup frame when the popup is opened.
   */
  isContentFocusDisabled: PropTypes.bool,
  /**
   * Should the default behavior, that inserts a header when constraints are breached, be disabled.
   */
  isHeaderDisabled: PropTypes.bool,
  /**
   * Should the popup be presented as open.
   */
  isOpen: PropTypes.bool,
  /**
   * Attachment point for the target. Options include: 'top left', 'top center', 'top right', 'middle left', 'middle center',
   * 'middle right', 'bottom left', 'bottom center', or 'bottom right'.
   */
  targetAttachment: PropTypes.oneOf(ATTACHMENT_POSITIONS),
  /**
   * @private
   * Prop to set role on popup content container
   */
  popupContentRole: PropTypes.string,
  /**
   * String that labels the popup for screen readers.
   */
  ariaLabel: PropTypes.string,
  /**
   * Callback function to handle click events on the popup.
   */
  onClick: PropTypes.func,
  /**
   * To determine if menu is opened inside the popup.
   */
  isMenu: PropTypes.bool,
};

const defaultProps = {
  attachmentBehavior: 'auto',
  boundingRef: null,
  classNameArrow: null,
  classNameContent: null,
  classNameOverlay: null,
  contentAttachment: 'top center',
  contentHeight: '80',
  contentWidth: '240',
  isArrowDisplayed: false,
  isContentFocusDisabled: false,
  isHeaderDisabled: false,
  isOpen: false,
  popupContentRole: 'dialog',
  isMenu: false,
};

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnPosition = this.handleOnPosition.bind(this);
    this.setArrowNode = this.setArrowNode.bind(this);
    this.validateContentNode = this.validateContentNode.bind(this);
    this.handleOnResize = this.handleOnResize.bind(this);
    this.handleOnContentResize = this.handleOnContentResize.bind(this);
    this.isContentSized = props.contentHeight !== 'auto' && props.contentWidth !== 'auto';
    this.contentHeight = PopupHeights[props.contentHeight];
    this.contentWidth = PopupWidths[props.contentWidth];
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentDidMount() {
    const { targetRef } = this.props;
    if (targetRef()) {
      targetRef().setAttribute('aria-haspopup', 'true');
    }
  }

  shouldComponentUpdate(nextProps) {
    this.isContentSized = nextProps.contentHeight !== 'auto' && nextProps.contentWidth !== 'auto';
    this.contentHeight = PopupHeights[nextProps.contentHeight];
    this.contentWidth = PopupWidths[nextProps.contentWidth];
    return true;
  }

  handleRequestClose() {
    const { targetRef } = this.props;
    targetRef().focus();
    this.props.onRequestClose();
  }

  handleOnPosition(event, positions) {
    if (this.arrowNode) {
      this.setArrowPosition(positions.content, positions.target);
    }
  }

  handleOnContentResize() {
    this.isContentSized = this.props.contentHeight !== 'auto' && this.props.contentWidth !== 'auto';
    this.contentHeight = PopupHeights[this.props.contentHeight];
    this.contentWidth = PopupWidths[this.props.contentWidth];
    this.forceUpdate();
  }

  handleOnResize(event, width) {
    // Close the popup if the window width is resized.
    if (window.innerWidth !== width) {
      this.windowWidth = window.innerWidth;
      this.props.onRequestClose();
    } else {
      this.isContentSized = this.props.contentHeight !== 'auto' && this.props.contentWidth !== 'auto';
      this.contentHeight = PopupHeights[this.props.contentHeight];
      this.contentWidth = PopupWidths[this.props.contentWidth];
      this.forceUpdate();
    }
  }

  setArrowPosition(contentPosition, targetPosition) {
    const arrowPosition = PopupUtils.getArrowPosition(contentPosition, targetPosition, PopupArrow.Opts.arrowSize, cornerSize);
    if (!arrowPosition) {
      this.arrowNode.removeAttribute(PopupArrow.Opts.positionAttr);
      return;
    }
    this.arrowNode.setAttribute(PopupArrow.Opts.positionAttr, arrowPosition);

    if (arrowPosition === 'top' || arrowPosition === 'bottom') {
      this.arrowNode.style.left = PopupUtils.leftOffset(contentPosition, targetPosition, PopupArrow.Opts.arrowSize, cornerSize);
      this.arrowNode.style.top = '';
    } else {
      this.arrowNode.style.left = '';
      this.arrowNode.style.top = PopupUtils.topOffset(contentPosition, targetPosition, PopupArrow.Opts.arrowSize, cornerSize);
    }
  }

  setArrowNode(node) {
    this.arrowNode = node;
  }

  validateContentNode(node) {
    if (node) {
      const contentRect = Hookshot.Utils.getBounds(node);
      if (this.contentHeight !== contentRect.height || this.contentWidth !== contentRect.width) {
        this.contentHeight = contentRect.height;
        this.contentWidth = contentRect.width;
        this.forceUpdate();
      }
      this.isContentSized = true;
    }
  }

  createPopupContent(boundingFrame, showArrow, hookshotPostionFixed, isMenu) {
    const boundsProps = {
      contentHeight: PopupHeights[this.props.contentHeight] || PopupHeights['80'],
      contentWidth: PopupWidths[this.props.contentWidth] || PopupWidths['240'],
    };
    if (boundsProps.contentHeight <= 0 && this.contentHeight) {
      boundsProps.contentHeight = this.contentHeight;
    }
    if (boundsProps.contentWidth <= 0 && this.contentWidth) {
      boundsProps.contentWidth = this.contentWidth;
    }

    if (boundingFrame) {
      boundsProps.contentHeightMax = boundingFrame.clientHeight;
      boundsProps.contentWidthMax = boundingFrame.clientWidth;
    } else {
      boundsProps.contentHeightMax = window.innerHeight;
      boundsProps.contentWidthMax = window.innerWidth;
    }

    let arrow;
    if (showArrow) {
      arrow = <PopupArrow className={this.props.classNameArrow} refCallback={this.setArrowNode} />;
    }
    return (
      <PopupContent
        {...boundsProps}
        arrow={arrow}
        aria-label={this.props.ariaLabel}
        classNameInner={this.props.classNameContent}
        isHeaderDisabled={this.props.isHeaderDisabled}
        onRequestClose={this.handleRequestClose}
        onContentResize={this.handleOnContentResize}
        onResize={this.handleOnResize}
        popupContentRole={this.props.popupContentRole}
        refCallback={this.validateContentNode}
        isHeightAutomatic={this.props.contentHeight === 'auto'}
        isWidthAutomatic={this.props.contentWidth === 'auto'}
        isFocusedDisabled={this.props.isContentFocusDisabled}
        onClick={this.props.onClick}
        hookshotPostionFixed={hookshotPostionFixed}
        isMenu={isMenu}
      >
        {this.props.children}
      </PopupContent>
    );
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      attachmentBehavior,
      boundingRef,
      children,
      classNameArrow,
      classNameContent,
      classNameOverlay,
      contentAttachment,
      contentHeight,
      contentWidth,
      isArrowDisplayed,
      isContentFocusDisabled,
      isHeaderDisabled,
      isOpen,
      onRequestClose,
      targetRef,
      targetAttachment,
      isMenu,
      ...customProps
    } = this.props;
    /* eslint-enable no-unused-vars */

    if (!isOpen) {
      return null;
    }

    let tAttachment;
    const cAttachment = PopupUtils.parseAttachment(contentAttachment);
    if (targetAttachment) {
      tAttachment = PopupUtils.parseAttachment(targetAttachment);
    } else {
      tAttachment = PopupUtils.mirrorAttachment(cAttachment);
    }

    let cOffset;
    const showArrow = isArrowDisplayed && contentAttachment !== 'middle center';
    if (showArrow) {
      cOffset = PopupUtils.getContentOffset(cAttachment, tAttachment, this.props.targetRef(), PopupArrow.Opts.arrowSize, cornerSize);
    }

    const hookshotContent = this.createPopupContent(boundingRef ? boundingRef() : undefined, showArrow, customProps.hookshotPostionFixed, isMenu);

    return (
      <React.Fragment>
        <Portal isOpened={isOpen}>
          <PopupOverlay
            className={this.props.classNameOverlay}
            onRequestClose={this.props.onRequestClose}
          />
        </Portal>
        <Hookshot
          attachmentBehavior={attachmentBehavior}
          attachmentMargin={showArrow ? PopupArrow.Opts.arrowSize : 0}
          boundingRef={boundingRef}
          contentAttachment={cAttachment}
          contentOffset={cOffset}
          isEnabled={this.isContentSized}
          isOpen={isOpen}
          onPosition={this.handleOnPosition}
          targetRef={targetRef}
          targetAttachment={tAttachment}
        >
          {hookshotContent}
        </Hookshot>
      </React.Fragment>
    );
  }
}

Popup.propTypes = propTypes;
Popup.defaultProps = defaultProps;
Popup.Opts = {
  attachmentPositions: ATTACHMENT_POSITIONS,
  heights: PopupHeights,
  widths: PopupWidths,
};

export default Popup;
