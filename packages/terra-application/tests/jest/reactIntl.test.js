import {
  intlShape, // eslint-disable-line import/named
  defineMessages, // eslint-disable-line import/named
  injectIntl, // eslint-disable-line import/named
  IntlProvider, // eslint-disable-line import/named
  FormattedDate, // eslint-disable-line import/named
  FormattedTime, // eslint-disable-line import/named
  FormattedRelative, // eslint-disable-line import/named
  FormattedNumber, // eslint-disable-line import/named
  FormattedPlural, // eslint-disable-line import/named
  FormattedMessage, // eslint-disable-line import/named
  FormattedHTMLMessage, // eslint-disable-line import/named
} from '../../src/react-intl';

describe('reactIntl', () => {
  it('should export intlShape', () => {
    expect(intlShape).toBeDefined();
  });

  it('should export defineMessages', () => {
    expect(defineMessages).toBeDefined();
  });

  it('should export injectIntl', () => {
    expect(injectIntl).toBeDefined();
  });

  it('should export IntlProvider', () => {
    expect(IntlProvider).toBeDefined();
  });

  it('should export FormattedDate', () => {
    expect(FormattedDate).toBeDefined();
  });

  it('should export FormattedTime', () => {
    expect(FormattedTime).toBeDefined();
  });

  it('should export FormattedRelative', () => {
    expect(FormattedRelative).toBeDefined();
  });

  it('should export FormattedNumber', () => {
    expect(FormattedNumber).toBeDefined();
  });

  it('should export FormattedPlural', () => {
    expect(FormattedPlural).toBeDefined();
  });

  it('should export FormattedMessage', () => {
    expect(FormattedMessage).toBeDefined();
  });

  it('should export FormattedHTMLMessage', () => {
    expect(FormattedHTMLMessage).toBeDefined();
  });
});
