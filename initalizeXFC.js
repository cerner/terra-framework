/* eslint-disable import/no-extraneous-dependencies */
import { Provider } from '../xfc/src';

Provider.init({
  acls: ['*'],
  secret: () => (Promise.resolve('Success')),
});
