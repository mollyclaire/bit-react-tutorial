"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = List;
exports.ListItem = ListItem;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function List(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "list-overflow-container"
  }, _react.default.createElement("div", {
    className: "ui relaxed divided list"
  }, children));
}

function ListItem(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("div", {
    className: "ui-list"
  }, children);
}

//# sourceMappingURL=index.js.map