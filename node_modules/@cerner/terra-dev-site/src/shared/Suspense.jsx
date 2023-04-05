import React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from './ErrorBoundary';

const CallbackFallback = ({ children, onMount }) => {
  React.useLayoutEffect(() => {
    onMount(true);

    return () => onMount(false);
  }, [onMount]);

  return children || <div />;
};

CallbackFallback.propTypes = {
  onMount: PropTypes.func,
  children: PropTypes.node,
};

const Suspense = ({
  onLoadStart, onLoadEnd, onError, fallback, children,
}) => {
  const [fallbackIsRendered, setFallbackIsRendered] = React.useState(false);
  const loadingIndicatorRef = React.useRef(false);

  React.useEffect(() => {
    if (onLoadStart && fallbackIsRendered && !loadingIndicatorRef.current) {
      loadingIndicatorRef.current = true;
      onLoadStart();
    }
  }, [onLoadStart, fallbackIsRendered]);

  React.useEffect(() => {
    if (onLoadEnd && !fallbackIsRendered && loadingIndicatorRef.current) {
      onLoadEnd();
    }
  }, [onLoadEnd, fallbackIsRendered]);

  return (
    <ErrorBoundary
      onCatchError={(caughtError) => {
        if (onError) {
          onError(caughtError);
        }
      }}
    >
      <React.Suspense
        fallback={(
          <CallbackFallback onMount={setFallbackIsRendered}>
            {fallback}
          </CallbackFallback>
        )}
      >
        {children}
      </React.Suspense>
    </ErrorBoundary>
  );
};

Suspense.propTypes = {
  onLoadStart: PropTypes.func,
  onLoadEnd: PropTypes.func,
  onError: PropTypes.func,
  fallback: PropTypes.node,
  children: PropTypes.node,
};
export default Suspense;
