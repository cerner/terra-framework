import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './DynamicOverlayContainer.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Array of unique overlay objects to render over the child content.
   * Overlays are stacked in index order; the overlay with the highest index
   * will be rendered on top.
   */
  overlays: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    component: PropTypes.element.isRequired,
  })),
  /**
   * The base content to render within the container. This content will
   * be overlaid by all provided overlays.
   */
  children: PropTypes.node,
};

const defaultProps = {
  overlays: [],
};

/* eslint-disable no-param-reassign */
function setLayerInert(inertElement, focusTriggers, focusTriggerKey, focusAnchorElement) {
  if (inertElement.inert) {
    return;
  }

  const { activeElement } = document;

  // If the element to be inerted contains or is the current active element,
  // we cache it to be replayed if and when the element reactivates.
  if (inertElement.contains(activeElement) || inertElement === activeElement) {
    focusTriggers[focusTriggerKey] = activeElement;
    focusAnchorElement.focus();
  }

  inertElement.inert = true;
}

function removeLayerInert(inertElement, focusTriggers, focusTriggerKey, focusAnchorElement) {
  if (!inertElement.inert) {
    return;
  }

  const { activeElement } = document;

  inertElement.inert = false;

  // If a focus trigger has been cached for this element, and if the element still contains or
  // is the active element, and if the focus has not been placed outside of the container since it was rendered inert,
  // the focus is replayed onto the cached element.
  //
  // Consideration is also made for when focus is on the body element, which can occur if a focused element was rendered
  // within the last removed overlay.
  const cachedActiveElement = focusTriggers[focusTriggerKey];
  if (cachedActiveElement && (inertElement.contains(cachedActiveElement) || inertElement === cachedActiveElement) && (document.body === activeElement || focusAnchorElement === activeElement || focusAnchorElement.contains(activeElement))) {
    cachedActiveElement.focus();

    focusTriggers[focusTriggerKey] = undefined;
  }
}
/* eslint-enable no-param-reassign */

const DynamicOverlayContainer = ({ overlays, children }) => {
  const contentRef = React.useRef();
  const focusAnchorRef = React.useRef();
  const focusTriggersRef = React.useRef({});

  // The refs for each overlay are kept in a local variable to ensure
  // it expires after each render to ensure that removed overlays do not
  // persist in memory.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const overlayRefs = [];

  // This effect ensures that the proper layers are rendered
  // as inert prior to painting to the DOM. This effect will execute
  // after every update of the DynamicOverlayContainer; however, the
  // inner inert logic will abort early if the element is already in
  // its assigned state.
  React.useLayoutEffect(() => {
    if (overlays.length !== 0) {
      setLayerInert(contentRef.current, focusTriggersRef.current, '__dynamic-overlay-content__', focusAnchorRef.current);
    } else {
      removeLayerInert(contentRef.current, focusTriggersRef.current, '__dynamic-overlay-content__', focusAnchorRef.current);
    }

    for (let i = 0, count = overlays.length; i < count; i += 1) {
      if (i !== count - 1) {
        setLayerInert(overlayRefs[i].element, focusTriggersRef.current, overlayRefs[i].key, focusAnchorRef.current);
      } else {
        removeLayerInert(overlayRefs[i].element, focusTriggersRef.current, overlayRefs[i].key, focusAnchorRef.current);
      }
    }
  }, [overlayRefs, overlays]);

  return (
    <div className={cx('outer-container')} ref={focusAnchorRef} tabIndex="-1" data-testid="dynamic-overlay-container">
      <div ref={contentRef} className={cx('content-container')}>
        {children}
      </div>
      {overlays.map((overlay, index) => (
        <div
          key={overlay.key}
          ref={(overlayRef) => {
            overlayRefs[index] = {
              key: overlay.key,
              element: overlayRef,
            };
          }}
          className={cx('overlay-container')}
        >
          {overlay.component}
        </div>
      ))}
    </div>
  );
};

DynamicOverlayContainer.propTypes = propTypes;
DynamicOverlayContainer.defaultProps = defaultProps;

export default DynamicOverlayContainer;
