"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// The ...props means, spread all of the passed props onto this element
function DeleteBtn(props) {
  return _react.default.createElement("span", _extends({
    className: "delete-btn"
  }, props, {
    role: "button",
    tabIndex: "0"
  }), "\u2717");
}

var _default = DeleteBtn;
exports.default = _default;

//# sourceMappingURL=index.js.map