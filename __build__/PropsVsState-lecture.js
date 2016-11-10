webpackJsonp([37],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(70);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(103);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ContentToggle = function (_React$Component) {\n  _inherits(ContentToggle, _React$Component);\n\n  function ContentToggle() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, ContentToggle);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContentToggle.__proto__ || Object.getPrototypeOf(ContentToggle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      isOpen: false\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(ContentToggle, [{\n    key: 'handleClick',\n    value: function handleClick() {\n      var _this2 = this;\n\n      this.setState({ isOpen: !this.state.isOpen }, function () {\n        if (_this2.props.onToggle) _this2.props.onToggle(_this2.state.isOpen);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var summaryClassName = 'ContentToggle__Summary';\n\n      if (this.state.isOpen) summaryClassName += ' ContentToggle__Summary--is-open';\n\n      return _react2.default.createElement(\n        'div',\n        _extends({}, this.props, { className: 'ContentToggle' }),\n        _react2.default.createElement(\n          'button',\n          { onClick: function onClick() {\n              return _this3.handleClick();\n            }, className: summaryClassName },\n          this.props.summary\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'ContentToggle__Details' },\n          this.state.isOpen && this.props.children\n        )\n      );\n    }\n  }]);\n\n  return ContentToggle;\n}(_react2.default.Component);\n\nvar App = function (_React$Component2) {\n  _inherits(App, _React$Component2);\n\n  function App() {\n    var _ref2;\n\n    var _temp2, _this4, _ret2;\n\n    _classCallCheck(this, App);\n\n    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, (_ref2 = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref2, [this].concat(args))), _this4), _this4.state = {\n      tacos: [{ id: 0, name: 'Carnitas', src: 'tacos/carnitas.png' }, { id: 1, name: 'Pollo', src: 'tacos/pollo.png' }, { id: 2, name: 'Asada', src: 'tacos/asada.png' }]\n    }, _temp2), _possibleConstructorReturn(_this4, _ret2);\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          null,\n          this.state.tacos.map(function (taco) {\n            return _react2.default.createElement(\n              ContentToggle,\n              {\n                key: taco.name,\n                style: { width: 300 },\n                summary: taco.name\n              },\n              _react2.default.createElement('div', {\n                style: {\n                  height: 200,\n                  background: 'url(' + taco.src + ')',\n                  backgroundSize: 'cover'\n                }\n              })\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\n_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));\n\n////////////////////////////////////////////////////////////////////////////\n// But what about when we add this feature?\n// <button>Toggle All</button>\n\n//class ContentToggle extends React.Component {\n//  state = { isOpen: this.props.isOpen }\n//\n//  componentWillReceiveProps(nextProps) {\n//    if (nextProps.isOpen != null)\n//      this.setState({ isOpen: nextProps.isOpen })\n//  }\n//\n//  handleClick() {\n//    this.setState({ isOpen: !this.state.isOpen }, () => {\n//      if (this.props.onToggle)\n//        this.props.onToggle(this.state.isOpen)\n//    })\n//  }\n//\n//  render() {\n//    let summaryClassName = \"ContentToggle__Summary\"\n//    if (this.state.isOpen)\n//      summaryClassName += \" ContentToggle__Summary--is-open\"\n//    return (\n//      <div {...this.props} className=\"ContentToggle\">\n//        <button onClick={this.handleClick} className={summaryClassName}>\n//          {this.props.summary}\n//        </button>\n//        <div className=\"ContentToggle__Details\">\n//          {this.state.isOpen && this.props.children}\n//        </div>\n//      </div>\n//    )\n//  }\n//}\n//\n//class App extends React.Component {\n//  state = {\n//    allOpen: true,\n//    tacos: [\n//      { id: 0, name: 'Carnitas', src: 'tacos/carnitas.png' },\n//      { id: 1, name: 'Pollo', src: 'tacos/pollo.png' },\n//      { id: 2, name: 'Asada', src: 'tacos/asada.png' }\n//    ]\n//  }\n//\n//  openAll() {\n//    this.setState({ allOpen: true })\n//  }\n//\n//  closeAll() {\n//    this.setState({ allOpen: false })\n//  }\n//\n//  render() {\n//    return (\n//      <div>\n//        {this.state.allOpen ? (\n//          <button onClick={() => this.closeAll()}>Close All</button>\n//        ) : (\n//          <button onClick={() => this.openAll()}>Open All</button>\n//        )}\n//        <div>\n//          {this.state.tacos.map((taco) => (\n//            <ContentToggle\n//              key={taco.name}\n//              style={{ width: 300 }}\n//              summary={taco.name}\n//              isOpen={this.state.allOpen}\n//            >\n//              <div style={{\n//                height: 200,\n//                background: `url(${taco.src})`,\n//                backgroundSize: 'cover'\n//              }}/>\n//            </ContentToggle>\n//          ))}\n//        </div>\n//      </div>\n//    )\n//  }\n//}\n//\n//ReactDOM.render(<App/>, document.getElementById('app'))\n\n////////////////////////////////////////////////////////////////////////////////\n// This is cool, until we screw up the state by clicking the button, then\n// clicking every item to the other state, and then clicking the button again,\n// now that the parent owns the toggle state, we need it know each toggler's\n// state and synchronize it\n\n//class ContentToggle extends React.Component {\n//  state = {\n//    isOpen: this.props.isOpen\n//  }\n//\n//  handleClick() {\n//    this.setState({ isOpen: !this.state.isOpen }, () => {\n//      if (this.props.onToggle)\n//        this.props.onToggle(this.state.isOpen)\n//    })\n//  }\n//\n//  componentWillReceiveProps(nextProps) {\n//    this.setState({ isOpen: nextProps.isOpen })\n//  }\n//\n//  render() {\n//    let summaryClassName = \"ContentToggle__Summary\"\n//    if (this.state.isOpen)\n//      summaryClassName += \" ContentToggle__Summary--is-open\"\n//    return (\n//      <div {...this.props} className=\"ContentToggle\">\n//        <button onClick={() => this.handleClick()} className={summaryClassName}>\n//          {this.props.summary}\n//        </button>\n//        <div className=\"ContentToggle__Details\">\n//          {this.state.isOpen && this.props.children}\n//        </div>\n//      </div>\n//    )\n//  }\n//}\n//\n//class App extends React.Component {\n//  state = {\n//    tacos: [\n//      { name: 'Carnitas', src: 'tacos/carnitas.png', isOpen: false },\n//      { name: 'Pollo', src: 'tacos/pollo.png', isOpen: false },\n//      { name: 'Asada', src: 'tacos/asada.png', isOpen: false }\n//    ]\n//  }\n//\n//  openAll() {\n//    this.setState({\n//      tacos: this.state.tacos.map(taco => {\n//        taco.isOpen = true\n//        return taco\n//      })\n//    })\n//  }\n//\n//  closeAll() {\n//    this.setState({\n//      tacos: this.state.tacos.map(taco => {\n//        taco.isOpen = false\n//        return taco\n//      })\n//    })\n//  }\n//\n//  handleTacoToggle(toggledTaco, isOpen) {\n//    this.setState({\n//      tacos: this.state.tacos.map(taco => {\n//        if (taco.name === toggledTaco.name)\n//          taco.isOpen = isOpen\n//        return taco\n//      })\n//    })\n//  }\n//\n//  render() {\n//    const shouldCloseAll = this.state.tacos.every(taco => taco.isOpen)\n//    return (\n//      <div>\n//        {shouldCloseAll ? (\n//          <button onClick={() => this.closeAll()}>Close All</button>\n//        ) : (\n//          <button onClick={() => this.openAll()}>Open All</button>\n//        )}\n//        <div>\n//          {this.state.tacos.map(taco => (\n//            <ContentToggle\n//              key={taco.name}\n//              style={{ width: 300 }}\n//              summary={taco.name}\n//              isOpen={taco.isOpen}\n//              onToggle={isOpen => this.handleTacoToggle(taco, isOpen)}\n//            >\n//              <div style={{\n//                height: 200,\n//                background: `url(${taco.src})`,\n//                backgroundSize: 'cover'\n//              }}/>\n//            </ContentToggle>\n//          ))}\n//        </div>\n//      </div>\n//    )\n//  }\n//}\n//\n//ReactDOM.render(<App/>, document.getElementById('app'))\n\n////////////////////////////////////////////////////////////////////////////////\n// Our state is now fully synchronized, but do we even need state in\n// ContentToggle anymore?\n\n//class ContentToggle extends React.Component {\n//  handleClick() {\n//    if (this.props.onToggle)\n//      this.props.onToggle(!this.props.isOpen)\n//  }\n//\n//  render() {\n//    let summaryClassName = \"ContentToggle__Summary\"\n//    if (this.props.isOpen)\n//      summaryClassName += \" ContentToggle__Summary--is-open\"\n//    return (\n//      <div {...this.props} className=\"ContentToggle\">\n//        <button onClick={() => this.handleClick()} className={summaryClassName}>\n//          {this.props.summary}\n//        </button>\n//        <div className=\"ContentToggle__Details\">\n//          {this.props.isOpen && this.props.children}\n//        </div>\n//      </div>\n//    )\n//  }\n//}\n\n////////////////////////////////////////////////////////////////////////////////\n// - We didn't really get rid of state, we just pushed it up a level\n// - got rid of synchronizing state :)\n// - component is super simple, just a function of its props\n//\n// But its not as portable anymore\n// - Must implement `onToggle` :\\\n// - Must manage state in the owner, always :\\\n\n// We can create a controlled component that wraps our pure component.\n\n//class StatefulContentToggle extends React.Component {\n//  state = { isOpen: false }\n//\n//  render() {\n//    return <ContentToggle\n//      {...this.props}\n//      isOpen={this.state.isOpen}\n//      onToggle={isOpen => this.setState({ isOpen })}\n//    />\n//  }\n//}\n//\n//ReactDOM.render(<App/>, document.getElementById('app'))\n\n////////////////////////////////////////////////////////////////////////////////\n// You don't inherit from base classes, you compose by wrapping, just like you\n// compose functions, call one inside of another\n\n//////////////////\n// WEBPACK FOOTER\n// ./subjects/PropsVsState/lecture.js\n// module id = 0\n// module chunks = 37\n//# sourceURL=webpack:///./subjects/PropsVsState/lecture.js?");

/***/ }
]);