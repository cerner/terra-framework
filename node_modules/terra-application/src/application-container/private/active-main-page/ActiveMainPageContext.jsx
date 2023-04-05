import { createContext } from 'react';
import PropTypes from 'prop-types';

const ActiveMainPageContext = createContext();

const contextShape = {
  parentNavigationKeys: PropTypes.array,
  pageKey: PropTypes.string,
  pageLabel: PropTypes.string,
  pageMetaData: PropTypes.object,
};

export default ActiveMainPageContext;
export { contextShape };
