webpackJsonp([13],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(70);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(103);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*eslint-disable no-alert */\n////////////////////////////////////////////////////////////////////////////////\n// Exercise:\n//\n// Using context, implement the <Form>, <SubmitButton>, and <TextInput>\n// components such that:\n//\n// - Clicking the <SubmitButton> \"submits\" the form\n// - Hitting \"Enter\" while in a <TextInput> submits the form\n// - Don't use a <form> element, we're intentionally recreating the\n//   browser's built-in behavior\n//\n// Got extra time?\n//\n// - Send the values of all the <TextInput>s to the <Form onChange> handler\n//   without using DOM traversal APIs\n// - Implement a <ResetButton> that resets the <TextInput>s in the form\n//\n////////////////////////////////////////////////////////////////////////////////\n\n\nvar Form = function (_React$Component) {\n  _inherits(Form, _React$Component);\n\n  function Form() {\n    _classCallCheck(this, Form);\n\n    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));\n  }\n\n  _createClass(Form, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        this.props.children\n      );\n    }\n  }]);\n\n  return Form;\n}(_react2.default.Component);\n\nvar SubmitButton = function (_React$Component2) {\n  _inherits(SubmitButton, _React$Component2);\n\n  function SubmitButton() {\n    _classCallCheck(this, SubmitButton);\n\n    return _possibleConstructorReturn(this, (SubmitButton.__proto__ || Object.getPrototypeOf(SubmitButton)).apply(this, arguments));\n  }\n\n  _createClass(SubmitButton, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'button',\n        null,\n        this.props.children\n      );\n    }\n  }]);\n\n  return SubmitButton;\n}(_react2.default.Component);\n\nvar TextInput = function (_React$Component3) {\n  _inherits(TextInput, _React$Component3);\n\n  function TextInput() {\n    _classCallCheck(this, TextInput);\n\n    return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));\n  }\n\n  _createClass(TextInput, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement('input', {\n        type: 'text',\n        name: this.props.name,\n        placeholder: this.props.placeholder\n      });\n    }\n  }]);\n\n  return TextInput;\n}(_react2.default.Component);\n\nvar App = function (_React$Component4) {\n  _inherits(App, _React$Component4);\n\n  function App() {\n    var _ref;\n\n    var _temp, _this4, _ret;\n\n    _classCallCheck(this, App);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this4 = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this4), _this4.handleSubmit = function () {\n      alert('YOU WIN!');\n    }, _temp), _possibleConstructorReturn(_this4, _ret);\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h1',\n          null,\n          'This isn\\'t even my final ',\n          _react2.default.createElement(\n            'code',\n            null,\n            '<Form/>'\n          ),\n          '!'\n        ),\n        _react2.default.createElement(\n          Form,\n          { onSubmit: this.handleSubmit },\n          _react2.default.createElement(\n            'p',\n            null,\n            _react2.default.createElement(TextInput, { name: 'firstName', placeholder: 'First Name' }),\n            ' ',\n            ' ',\n            _react2.default.createElement(TextInput, { name: 'lastName', placeholder: 'Last Name' })\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            _react2.default.createElement(\n              SubmitButton,\n              null,\n              'Submit'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\n(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('app'));\n\n//////////////////\n// WEBPACK FOOTER\n// ./subjects/Context/exercise.js\n// module id = 0\n// module chunks = 13\n//# sourceURL=webpack:///./subjects/Context/exercise.js?");

/***/ }
]);