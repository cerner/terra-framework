import React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { activeBreakpointForSize } from '../../breakpoints';

/**
 * Takes the given rect value and translates it into the shape desired by the useElementSize hook.
 * @param {Object} rect - A rect object, like the one returned by getBoundingClientRect().
 * @returns {Object} A value containing height, width, and active breakpoint values.
 */
const processRect = (rect) => {
  const { width, height } = rect;
  const activeBreakpoint = activeBreakpointForSize(width);

  return { activeBreakpoint, width, height };
};

/**
 * A custom hook used to detect and report changes to the size of a desired element.
 * @param {Object} elementRef A React ref object bound to the element to test for size changes.
 * @param {Function} updateFilter An optional filter that can be used to limit the updates triggered by the hook.
 * This function must be static, as it is cached upon initial execution and not updated. This function is also
 * executed frequently, once every resize tick, so try to minimize complexity. Return true from the filter
 * if a state update is desired. Ex. filter(newRect, oldRect);
 */
const useElementSize = (elementRef, updateFilter) => {
  // Filter is cached to limit rebinding of the resize observer.
  // The provided function should be static anyway.
  const cachedUpdateFilterRef = React.useRef(updateFilter);

  // An active animation frame id is stored in this ref so it can be cancelled, if necessary.
  const animationFrameRef = React.useRef();

  // The last-returned rect value is stored in this ref so that comparisons can be made against
  // it without reading the state value in the layout effect and re-binding the resize observer.
  const reportedRectRef = React.useRef();

  // The rect stored in this state is returned to the consuming component.
  const [elementRect, setElementRect] = React.useState({});

  React.useLayoutEffect(() => {
    const element = elementRef.current;

    const resizeObserver = new ResizeObserver((entries) => {
      animationFrameRef.current = window.requestAnimationFrame(() => {
        animationFrameRef.current = null;

        // We do not report size changes for elements that have been removed from the DOM.
        // The observer will execute again when the element is added back to the DOM, so we
        // do not have worry about replaying this value later.
        if (!document.contains(entries[0].target)) {
          return;
        }

        const newRect = processRect(entries[0].target.getBoundingClientRect());

        // If the consuming component provides a filter function, we execute it with the current and
        // previous sizes. The state (and thus the consuming component) is only updated if the filter
        // function indicates the update should occur by returning truthy.
        if (!cachedUpdateFilterRef.current || cachedUpdateFilterRef.current(newRect, reportedRectRef.current)) {
          reportedRectRef.current = newRect;
          setElementRect(newRect);
        }
      });
    });

    resizeObserver.observe(elementRef.current);

    // The initial size is kicked off prior to the ResizeObserver initialization.
    // This will get the elements laid out more quickly and correctly.
    const initialRect = processRect(elementRef.current.getBoundingClientRect());
    reportedRectRef.current = initialRect;
    setElementRect(initialRect);

    return () => {
      window.cancelAnimationFrame(animationFrameRef.current);
      resizeObserver.disconnect(element);
    };
  }, [elementRef, cachedUpdateFilterRef]);

  return elementRect;
};

/**
 * A filter function to be used in conjunction with useElementSize.
 * @param {Object} newRect rect object provided by useElementSize representing the most recent determined size.
 * @param {Object} oldRect rect object provided by useElementSize representing the last reported size.
 * @returns Truthy if the activeBreakpoint values in the given rects to not match.
 */
const breakpointFilter = (newRect, oldRect) => newRect.activeBreakpoint !== oldRect.activeBreakpoint;

export default useElementSize;
export { breakpointFilter };
