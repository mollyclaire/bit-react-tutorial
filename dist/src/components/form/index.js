"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// export function Input(props) {
//   return (
//     <span className="ui input">
//       <input style={{ float: "left", marginBottom: 10, marginRight: 10 }} className="form-control" {...props} />
//     </span>
//   );
// }
var Form = function Form(props) {
  return _react.default.createElement("button", _extends({}, props, {
    style: {
      marginBottom: 50
    },
    className: "ui button"
  }), props.children);
};

var _default = Form; // export default class Form extends React.Component {
//     render() {
//     return (
//         <form style={{marginLeft: "10.5%"}}>
//       <span className="ui input">
//         <input style={{ float: "left", marginBottom: 10, marginRight: 10 }} className="form-control" {...this.props} />
//       </span>
//       <button {...this.props} style={{ marginBottom: 50 }} className="ui button">
//         {this.props.children}
//       </button>
//       </form>
//     )
//     }
// }

exports.default = _default;

//# sourceMappingURL=index.js.map