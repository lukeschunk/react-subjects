webpackJsonp([25],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(70);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(103);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } ////////////////////////////////////////////////////////////////////////////////\n// Exercise:\n//\n// Make `withMousePosition`a a \"higher-order component\" that sends the mouse\n// position to the component as props.\n//\n// hint: use `event.clientX` and `event.clientY`\n\nvar withMousePosition = function withMousePosition(Component) {\n  return Component;\n};\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h1',\n          null,\n          'With the mouse!'\n        ),\n        _react2.default.createElement(\n          'pre',\n          null,\n          JSON.stringify(this.props.mouse, null, 2)\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\nApp.propTypes = {\n  mouse: _react2.default.PropTypes.shape({\n    x: _react2.default.PropTypes.number.isRequired,\n    y: _react2.default.PropTypes.number.isRequired\n  }).isRequired\n};\n\n\nvar AppWithMouse = withMousePosition(App);\n\n(0, _reactDom.render)(_react2.default.createElement(AppWithMouse, null), document.getElementById('app'));\n\n//////////////////\n// WEBPACK FOOTER\n// ./subjects/HigherOrderComponents/exercise.js\n// module id = 0\n// module chunks = 25\n//# sourceURL=webpack:///./subjects/HigherOrderComponents/exercise.js?");

/***/ }
]);