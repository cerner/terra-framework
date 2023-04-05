import React from 'react';
import { getPersistentScrollMap, applyScrollData } from '../../utils/scroll-persistence/scroll-persistence';

/**
 * React hook used to manage the presentation of multiple portaled elements within a single container.
 * @param {string} activePortalKey - The identifier of the active portal. Must correspond to a key in the portalRefs value.
 * @param {function} onPortalActivated - The callback function executed upon portal activation.
 * function (activatedPortalKey, activatedPortalElement)
 * @param {function} onPortalDeactivated - The callback function executed upon portal deactivation.
 * function (deactivatedPortalKey, deactivatedPortalElement)
 * @returns {Array} An array containing 1. a ref to be used for the static container, and 2. a ref within which to store the portaled elements.
 */
const usePortalManager = (activePortalKey, onPortalActivated, onPortalDeactivated) => {
  const containerRef = React.useRef();
  const portalsRef = React.useRef({});
  const lastActiveItemKeyRef = React.useRef();

  React.useLayoutEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const dataForActivePortal = portalsRef.current[activePortalKey];

    if (containerRef.current.contains(dataForActivePortal?.element)) {
      /**
       * If the container already contains the element for the active portal,
       * the hook can terminate without changes.
       */
      return;
    }

    if (lastActiveItemKeyRef.current) {
      /**
       * If a portal was previously active and is becoming inactive, its
       * scroll positions are recorded and the element is removed from the DOM.
       */
      const elementToRemove = portalsRef.current[lastActiveItemKeyRef.current].element;

      portalsRef.current[lastActiveItemKeyRef.current].scrollData = getPersistentScrollMap(elementToRemove);

      containerRef.current.removeChild(elementToRemove);

      if (onPortalDeactivated) {
        onPortalDeactivated(lastActiveItemKeyRef.current, elementToRemove);
      }
    }

    if (dataForActivePortal?.element) {
      /**
       * If the activePortalKey matches a known element, that element iis appended to the
       * container and any previously recorded scroll positions are applied.
       */
      containerRef.current.appendChild(dataForActivePortal.element);

      if (dataForActivePortal.scrollData) {
        applyScrollData(dataForActivePortal.scrollData, dataForActivePortal.element);
      }

      lastActiveItemKeyRef.current = activePortalKey;

      if (onPortalActivated) {
        onPortalActivated(activePortalKey, dataForActivePortal.element);
      }
    } else {
      lastActiveItemKeyRef.current = undefined;
    }
  }, [activePortalKey, onPortalActivated, onPortalDeactivated]);

  return [containerRef, portalsRef];
};

/**
 * Generates an element used to house portaled content.
 * @returns {element} The generated element with appropriate styling.
 */
const getPortalElement = () => {
  const portalElement = document.createElement('div');
  portalElement.style.position = 'relative';
  portalElement.style.height = '100%';
  portalElement.style.width = '100%';

  return portalElement;
};

export default usePortalManager;
export { getPortalElement };
