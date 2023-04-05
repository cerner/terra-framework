"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _DisclosureManagerHeaderAdapterContext = _interopRequireDefault(require("./DisclosureManagerHeaderAdapterContext"));
var propTypes = {
  /**
   * A title string to render within the DisclosureManager's header.
   */
  title: _propTypes.default.string,
  /**
   * A CollapsibleMenuView component to render within the DisclosureManager's header.
   */
  collapsibleMenuView: _propTypes.default.element
};

/**
 * A component used to register header data with the DisclosureManager.
 */
var DisclosureManagerHeaderAdapter = function DisclosureManagerHeaderAdapter(_ref) {
  var title = _ref.title,
    collapsibleMenuView = _ref.collapsibleMenuView;
  var adapterContext = (0, _react.useContext)(_DisclosureManagerHeaderAdapterContext.default);
  (0, _react.useLayoutEffect)(function () {
    adapterContext.register({
      title: title,
      collapsibleMenuView: collapsibleMenuView
    });
  }, [title, collapsibleMenuView, adapterContext]);
  return null;
};
DisclosureManagerHeaderAdapter.propTypes = propTypes;
var _default = DisclosureManagerHeaderAdapter;
exports.default = _default;