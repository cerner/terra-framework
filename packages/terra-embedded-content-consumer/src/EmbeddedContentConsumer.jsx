import React from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Consumer } from 'xfc';
import VisuallyHiddenText from 'terra-visually-hidden-text';

import styles from './EmbeddedContentConsumer.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The source URL of the content to load.
   */
  src: PropTypes.string.isRequired,
  /**
   * The title of the content in the frame.
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue) It is critical to screen reader users that the
   * title of the frame is set to a meaningful title for the content inside the frame, because the iframe content
   * is not accessible without having a proper Title applied, the `title` prop will be required in a future release.
   */
  title: PropTypes.string, // TODO MVB - set `title` prop as required
  /**
   * Notifies the component that the container has been mounted. Provides a reference
   * to this component to allow triggering messages on the embedded application.
   */
  onMount: PropTypes.func,
  /**
   * Notifies the component that the container has been launched.
   */
  onLaunch: PropTypes.func,
  /**
   * Notifies the component that the container has been authorized.
   */
  onAuthorize: PropTypes.func,
  /**
   * The component can be configured with consumer frame options.
   *
   * ![IMPORTANT](https://badgen.net/badge/prop/deprecated/red)
   * Usage of `iframeAttrs: { title: 'Embedded Content Title' }` with the `options` prop to set the title is deprecated in favor of the new `title` prop.
   *
   * Example `options` object:
   *
   * ```
   * options = {{
   *   iframeAttrs: {
   *     id: 'iframe-id', // Sets iframe id
   *     srcdoc: 'inline html', // Sets the inline HTML content to render within the iframe
   *     width: '100%', // Width of the iframe
   *     height: '400px', // Height of the iframe, must not be 100%
   *   },
   *   resizeConfig: {
   *     scrolling: true, // true - enable scrolling within the frame, false - disable scrolling within the frame
   *   },
   * }}
   * ```
   *
   * Note: when `srcdoc` is set, this will override the `src` URL.
   * It's important to know that when this option is used,
   * the [xfc](https://github.com/cerner/xfc) library does not manage
   * [auto resizing](https://github.com/cerner/xfc#iframe-resizing-config)
   * of the content of the iframe even if `resizeConfig` option is set. It's
   * important to specify the `width` and `height` of the frame within `iframeAttrs`.
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue) Iframes that are scrollable but have no actionable elements inside the frames are not natively scrollable by keyboard-only users.
   * It is critical to keyboard-only users that the embedded content is scrollable when it's not fully visible in the current viewport.
   *
   * `resizeConfig.scrolling` - Indicates whether the content inside of the iframe should be scrollable or not. The default is false.
   * When scrolling is set to `true`, it is possible to use keyboard navigation to scroll the content even when there is no
   * interactable element inside the content. When using `srcdoc` attribute, `scrolling` can be set to `'yes'` or `'no'` within `iframeAttrs`.
   *
   * See xfc consumer configuration for details: https://github.com/cerner/xfc
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue) It is critical to keyboard-only users that they see where they are on the page.
   * Terra Embedded Content Consumer adds a visible keyboard focus indicator to the content iframe by default to support these users when the iframe
   * content has focus, (or is scrollable) but has no actionable elements inside it.
   */
  options: PropTypes.object,
  /**
  * A set of event handlers keyed by the event name.
  * Note: Binding the event handler is necessary to make `this` work in the callback.
  */
  eventHandlers: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    handler: PropTypes.func,
  })),
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

class EmbeddedContentConsumer extends React.Component {
  componentDidMount() {
    // Merging the iframe options props
    const frameOptions = { ...this.props.options };
    frameOptions.iframeAttrs = frameOptions.iframeAttrs ? frameOptions.iframeAttrs : {};

    // TODO MVB: remove `console.warn` message on the next major release
    if (frameOptions.iframeAttrs.title) {
      // eslint-disable-next-line no-console
      console.warn('The title attribute within `iframeAttrs` object in the `options` prop is deprecated. Please start using the new `title` prop instead.');
    }

    // TODO MVB: Set `title` prop as required on the next major release
    if (this.props.title) {
      Object.assign(frameOptions.iframeAttrs, { title: this.props.title });
    }

    // Mount the provided source as the application into the content wrapper.
    this.xfcFrame = Consumer.mount(this.embeddedContentWrapper, this.props.src, frameOptions);

    // Notify that the consumer frame has mounted.
    if (this.props.onMount) {
      this.props.onMount(this.xfcFrame);
    }

    // Attach the event handlers to the xfc frame.
    this.addEventListener('xfc.launched', this.props.onLaunch);
    this.addEventListener('xfc.authorized', this.props.onAuthorize);

    // Attach custom event handlers to the xfc frame.
    this.addEventListeners(this.props.eventHandlers);
  }

  addEventListener(eventName, eventHandler) {
    if (eventName && eventHandler) {
      this.xfcFrame.on(eventName, eventHandler);
    }
  }

  addEventListeners(customEvents) {
    (customEvents || []).forEach(e => this.addEventListener(e.key, e.handler));
  }

  render() {
    const {
      src,
      title,
      onMount,
      onLaunch,
      onAuthorize,
      options,
      eventHandlers,
      intl,
      ...customProps
    } = this.props;

    return (
      <>
        <VisuallyHiddenText
          className={cx('visually-hidden-text')}
          text={intl.formatMessage(
            { id: 'Terra.embeddedContentConsumer.beginEmbeddedContent' },
            { name: title },
          )}
        />
        <div
          {...customProps}
          ref={(element) => { this.embeddedContentWrapper = element; }}
        />
        <VisuallyHiddenText
          className={cx('visually-hidden-text')}
          text={intl.formatMessage(
            { id: 'Terra.embeddedContentConsumer.endEmbeddedContent' },
            { name: title },
          )}
        />
      </>
    );
  }
}

EmbeddedContentConsumer.propTypes = propTypes;

export default injectIntl(EmbeddedContentConsumer);
