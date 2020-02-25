"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Nav() {
  return _react.default.createElement("nav", null, _react.default.createElement("a", {
    className: "ui header",
    href: "/"
  }, _react.default.createElement("i", {
    className: "arrow circle left icon",
    style: {
      color: "white",
      float: "left",
      margin: "20px 0px 0px 20px"
    }
  })));
}

var _default = Nav;
exports.default = _default;

//# sourceMappingURL=index.js.map