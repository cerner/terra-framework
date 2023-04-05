import React from 'react';

/**
 * Custom hook that returns a function that will trigger functional component updates when executed.
 * @returns {Function} A static update function
 */
const useForceUpdate = () => {
  const setState = React.useState(false)[1];
  const forceUpdateRef = React.useRef(() => { setState(currentState => !currentState); });

  return forceUpdateRef.current;
};

export default useForceUpdate;
