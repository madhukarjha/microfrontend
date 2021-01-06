"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./MyButton.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyButton = function MyButton(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === undefined ? "button" : _ref$type,
      label = _ref.label,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? "" : _ref$value,
      _onChange = _ref.onChange;
  return _react2.default.createElement(
    "div",
    { className: "simple-form-group" },
    _react2.default.createElement(
      "button",
      {
        type: type,
        className: "simple-text-input",
        value: value,
        onChange: function onChange(e) {
          return _onChange && _onChange(e.target.value);
        }
      },
      label && _react2.default.createElement(
        "label",
        { className: "simple-text-label" },
        label
      )
    )
  );
};

exports.default = MyButton;