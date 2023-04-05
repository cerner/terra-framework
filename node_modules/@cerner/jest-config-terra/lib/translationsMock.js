// Allows exports.defaults to be set and not overridden by node.
Object.defineProperty(exports, '__esModule', {
  value: true,
});

// Proxy to reflect the requested translation id back as a translated string.
const messageProxy = new Proxy({}, {
  get: (_, property) => property,
  getOwnPropertyDescriptor: () => ({ configurable: true, enumerable: true }),
});

// export to both messages and default to allow backwards compatibility with react-intl.
exports.messages = messageProxy;
exports.default = messageProxy;
