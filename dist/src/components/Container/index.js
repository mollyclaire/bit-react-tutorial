"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = Container;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Container(_ref) {
  var fluid = _ref.fluid,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: "container".concat(fluid ? "-fluid" : "")
  }, children);
}

//# sourceMappingURL=index.js.map