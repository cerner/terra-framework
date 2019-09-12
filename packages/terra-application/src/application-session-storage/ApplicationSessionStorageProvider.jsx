import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

// import queryString from 'query-string';
import ApplicationSessionStorageContext from './ApplicationSessionStorageContext';

const propTypes = {
  /**
   * A String identifying the SessionStorageProvider. This value is used to generate the root sessionStorage entry.
   */
  id: PropTypes.string,
  /**
   * The components to render within the context of the SessionStorageProvider. Components rendered here are able to use
   * the following Contexts:
   * - `ApplicationSessionStorageContext` for access to session storage management APIs
   */
  children: PropTypes.node,
};

// const ApplicationQueryStorageProvider = ({ id, children }) => {
//   const sessionStorageId = `session-storage-${id}`;

//   useEffect(() => () => {
//     // If SessionStorageProvider unmounts, the session storage state is reset.
//     // Note: This unmount handler is not executed during a page refresh/reload.
//     const currentQueryParams = queryString.parse(window.location.search);
//     delete currentQueryParams[sessionStorageId];

//     window.history.pushState({}, null, `${window.location.origin}${window.location.pathname}?${queryString.stringify(currentQueryParams)}`);
//   }, [sessionStorageId]);

//   const sessionStorageContextAPI = useMemo(() => ({
//     set: (key, value) => {
//       const currentQueryString = queryString.parse(window.location.search);

//       let currentData;
//       if (currentQueryString[sessionStorageId]) {
//         currentData = JSON.parse(currentQueryString[sessionStorageId]);

//         currentData[key] = value;
//         currentQueryString[sessionStorageId] = JSON.stringify(currentData);
//       } else {
//         currentQueryString[sessionStorageId] = JSON.stringify({ [`${key}`]: value });
//       }

//       window.history.replaceState(window.location.state, null, `${window.location.origin}${window.location.pathname}?${queryString.stringify(currentQueryString)}`);
//     },
//     get: (key) => {
//       const currentQueryString = queryString.parse(window.location.search);

//       if (!currentQueryString[sessionStorageId]) {
//         return undefined;
//       }

//       const currentData = JSON.parse(currentQueryString[sessionStorageId]);
//       return currentData && currentData[key];
//     },
//     remove: (key) => {
//       const currentQueryString = queryString.parse(window.location.search);

//       if (!currentQueryString[sessionStorageId]) {
//         return;
//       }

//       const currentData = JSON.parse(currentQueryString[sessionStorageId]);
//       if (!(currentData || currentData[key])) {
//         return;
//       }

//       delete currentData[key];
//       currentQueryString[sessionStorageId] = JSON.stringify(currentData);
//       window.history.replaceState(window.location.state, null, `${window.location.origin}${window.location.pathname}?${queryString.stringify(currentQueryString)}`);
//     },
//   }), [sessionStorageId]);

//   return (
//     <ApplicationSessionStorageContext.Provider value={sessionStorageContextAPI}>
//       {children}
//     </ApplicationSessionStorageContext.Provider>
//   );
// };

const ApplicationSessionStorageProvider = ({ id, children }) => {
  const sessionStorageId = `session-storage-${id}`;

  useEffect(() => () => {
    // If ApplicationSessionStorageProvider unmounts, the session storage state is reset.
    // Note: This unmount handler is not executed during a page refresh/reload.
    window.sessionStorage.removeItem(sessionStorageId);
  }, []);

  const sessionStorageContextAPI = useMemo(() => ({
    set: (key, value) => {
      const currentState = JSON.parse(window.sessionStorage.getItem(sessionStorageId));
      const newState = {
        ...currentState,
        [`${key}`]: value,
      };

      window.sessionStorage.setItem(sessionStorageId, JSON.stringify(newState));
    },
    get: (key) => {
      const currentState = JSON.parse(window.sessionStorage.getItem(sessionStorageId));
      return currentState && currentState[key];
    },
    remove: (key) => {
      const currentState = JSON.parse(window.sessionStorage.getItem(sessionStorageId));

      const newState = {
        ...currentState,
      };

      delete newState[key];

      window.sessionStorage.setItem(sessionStorageId, JSON.stringify(newState));
    },
  }), [sessionStorageId]);

  return (
    <ApplicationSessionStorageContext.Provider value={sessionStorageContextAPI}>
      {children}
    </ApplicationSessionStorageContext.Provider>
  );
};

ApplicationSessionStorageProvider.propTypes = propTypes;

export default ApplicationSessionStorageProvider;
