/* eslint-disable import/no-extraneous-dependencies */
import { Provider } from 'xfc';

Provider.init({
  acls: ['*'],
  secret: () => (Promise.resolve('Success')),
});
