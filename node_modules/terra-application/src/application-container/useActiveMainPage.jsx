import React from 'react';

import ActiveMainPageContext from './private/active-main-page/ActiveMainPageContext';

const useActiveMainPage = () => {
  const activeMainPage = React.useContext(ActiveMainPageContext);

  return activeMainPage;
};

export default useActiveMainPage;
