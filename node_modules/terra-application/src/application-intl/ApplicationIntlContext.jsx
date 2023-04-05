import { createContext } from 'react';
import { intlShape } from 'react-intl';

const ApplicationIntlContext = createContext();

const contextShape = intlShape;

export default ApplicationIntlContext;
export { contextShape };
