/* eslint-disable react/jsx-boolean-value, import/no-extraneous-dependencies */
import { IntlProvider, intlShape } from 'react-intl';

const messages = new Proxy({}, { get: (_, property) => property });

const locale = 'en';
const intlProvider = new IntlProvider({ locale, messages }, {});
const { intl } = intlProvider.getChildContext();

export const shallowContext = { context: { intl } };
export const mountContext = { context: { intl }, childContextTypes: { intl: intlShape } };

const intlContexts = { shallowContext, mountContext };

export default intlContexts;
