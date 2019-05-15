export default {
  formatDate: () => {},
  formatTime: () => {},
  formatRelative: () => {},
  formatNumber: () => {},
  formatPlural: () => {},
  formatMessage: ({ id }, values) => `${id}${values ? `-${JSON.stringify(values)}` : ''}`,
  formatHTMLMessage: () => {},
  now: () => {},
};
