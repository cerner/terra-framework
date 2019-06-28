import React from 'react';

const DisclosureManagerHeaderContext = React.createContext({
  registerHeaderData: (data = {}) => {
    if (process.env.NODE_ENV !== 'production') {
      /* eslint-disable no-console */
      console.warn(`DisclosureManagerHeaderContext: Attempting to register header data with title ${data.title} to missing Provider.`);
      /* eslint-enable no-console */
    }
  },
});

export default DisclosureManagerHeaderContext;
