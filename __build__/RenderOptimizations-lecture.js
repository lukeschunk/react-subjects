webpackJsonp([43],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(70);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(103);\n\nvar _reactAddonsPerf = __webpack_require__(377);\n\nvar _reactAddonsPerf2 = _interopRequireDefault(_reactAddonsPerf);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar guid = 0;\n\nvar ITEMS = [];\nfor (var i = 0; i < 200; i++) {\n  ITEMS.push({ id: ++guid, body: 'item ' + guid });\n}\nvar TodoItem = function (_React$Component) {\n  _inherits(TodoItem, _React$Component);\n\n  function TodoItem() {\n    _classCallCheck(this, TodoItem);\n\n    return _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).apply(this, arguments));\n  }\n\n  _createClass(TodoItem, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'span',\n          null,\n          _react2.default.createElement('input', { type: 'checkbox' }),\n          ' '\n        ),\n        _react2.default.createElement(\n          'span',\n          null,\n          _react2.default.createElement(\n            'span',\n            null,\n            _react2.default.createElement(\n              'b',\n              null,\n              'item:'\n            ),\n            ' '\n          ),\n          _react2.default.createElement('span', { className: 'stuff' }),\n          _react2.default.createElement('span', { className: 'stuff' }),\n          _react2.default.createElement('span', { className: 'stuff' }),\n          _react2.default.createElement('span', { className: 'stuff' }),\n          _react2.default.createElement('span', { className: 'stuff' }),\n          _react2.default.createElement('span', { className: 'stuff' }),\n          _react2.default.createElement('span', { className: 'stuff' }),\n          _react2.default.createElement('span', { className: 'stuff' }),\n          _react2.default.createElement('span', { className: 'stuff' })\n        ),\n        _react2.default.createElement(\n          'span',\n          { tabIndex: '-1' },\n          _react2.default.createElement(\n            'span',\n            { className: 'thing' },\n            _react2.default.createElement(\n              'span',\n              { style: { color: 'blue' } },\n              this.props.body\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return TodoItem;\n}(_react2.default.Component);\n\nvar TodoList = function (_React$Component2) {\n  _inherits(TodoList, _React$Component2);\n\n  function TodoList() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, TodoList);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {\n      items: ITEMS\n    }, _this2.handleSubmit = function (event) {\n      event.preventDefault();\n\n      var item = {\n        id: ++guid,\n        body: event.target.elements[0].value\n      };\n\n      event.target.reset();\n\n      _this2.setState({\n        items: [item].concat(_this2.state.items)\n      });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  _createClass(TodoList, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'form',\n          { onSubmit: this.handleSubmit },\n          _react2.default.createElement('input', { ref: 'input' })\n        ),\n        _react2.default.createElement(\n          'ul',\n          null,\n          this.state.items.map(function (item) {\n            return _react2.default.createElement(TodoItem, { key: item.id, body: item.body });\n          })\n        )\n      );\n    }\n  }]);\n\n  return TodoList;\n}(_react2.default.Component);\n\n(0, _reactDom.render)(_react2.default.createElement(TodoList, null), document.getElementById('app'));\n\n//import React, { PropTypes } from 'react'\n//import { render, findDOMNode } from 'react-dom'\n//import Perf from 'react-addons-perf'\n//import { convertNumberToEnglish } from './NumberUtils'\n//import { createRange } from './RangeUtils'\n//\n//const TodoItem = React.createClass({\n//  propTypes: {\n//    text: PropTypes.string,\n//    isDone: PropTypes.bool.isRequired,\n//    onChange: PropTypes.func.isRequired\n//  },\n//\n//  handleChange(event) {\n//    this.props.onChange(event.target.checked)\n//  },\n//\n//  //shouldComponentUpdate(nextProps) {\n//  //  return nextProps.text !== this.props.text || nextProps.isDone !== this.props.isDone\n//  //},\n//\n//  render() {\n//    const { text, isDone } = this.props\n//\n//    return (\n//      <li>\n//        <label>\n//          <input type=\"checkbox\" checked={isDone} onChange={this.handleChange}/>\n//          <strong>{isDone ? 'done' : 'todo'}: </strong>\n//          <span style={{ color: 'blue' }}>{text}</span>\n//        </label>\n//      </li>\n//    )\n//  }\n//})\n//\n//const TodoList = React.createClass({\n//  getInitialState() {\n//    this.guid = 0\n//\n//    return {\n//      items: createRange(5000).map(n => ({\n//        key: ++this.guid,\n//        text: convertNumberToEnglish(n + 1),\n//        isDone: Math.random() < 0.5\n//      }))\n//    }\n//  },\n//\n//  updateItem(item, isDone) {\n//    item.isDone = isDone\n//\n//    Perf.start()\n//\n//    this.forceUpdate(() => {\n//      Perf.stop()\n//      Perf.printWasted()\n//    })\n//  },\n//\n//  handleSubmit(event) {\n//    event.preventDefault()\n//\n//    const item = {\n//      key: ++this.guid,\n//      text: event.target.elements[0].value,\n//      isDone: false\n//    }\n//\n//    event.target.reset()\n//\n//    Perf.start()\n//\n//    this.setState({\n//      items: [ item ].concat(this.state.items)\n//    }, () => {\n//      Perf.stop()\n//      Perf.printWasted()\n//      //Perf.printInclusive()\n//    })\n//  },\n//\n//  componentDidMount() {\n//    findDOMNode(this).querySelector('input').focus()\n//  },\n//\n//  render() {\n//    return (\n//      <div>\n//        <form onSubmit={this.handleSubmit}>\n//          <input ref=\"input\"/>\n//        </form>\n//        <ul>\n//          {this.state.items.map(item => (\n//            <TodoItem\n//              key={item.key}\n//              text={item.text}\n//              isDone={item.isDone}\n//              onChange={isDone => this.updateItem(item, isDone)}\n//            />\n//          ))}\n//        </ul>\n//      </div>\n//    )\n//  }\n//})\n//\n//render(<TodoList/>, document.getElementById('app'))\n\n///////////////////////////////////////////////////////////////////////////////\n// Rendering large lists can be super slow. This is an old UI problem.\n\n///////////////////////////////////////////////////////////////////////////////\n// One possible solution is to only render the stuff that's actually in the\n// view. Native mobile frameworks have been doing this for years:\n//\n// https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITableView_Class/index.html\n\n///////////////////////////////////////////////////////////////////////////////\n// I'd really like to do this in my web app! What does it look like when we\n// try to do this with imperative JavaScript?\n//\n// https://github.com/airbnb/infinity\n// https://github.com/emberjs/list-view\n\n//////////////////\n// WEBPACK FOOTER\n// ./subjects/RenderOptimizations/lecture.js\n// module id = 0\n// module chunks = 43\n//# sourceURL=webpack:///./subjects/RenderOptimizations/lecture.js?");

/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__(378);\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/react-addons-perf/index.js\n// module id = 377\n// module chunks = 43\n//# sourceURL=webpack:///./~/react-addons-perf/index.js?");

/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright 2016-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule ReactPerf\n */\n\n'use strict';\n\nvar _assign = __webpack_require__(73);\n\nvar _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar ReactDebugTool = __webpack_require__(132);\nvar warning = __webpack_require__(80);\nvar alreadyWarned = false;\n\nfunction roundFloat(val) {\n  var base = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];\n\n  var n = Math.pow(10, base);\n  return Math.floor(val * n) / n;\n}\n\nfunction warnInProduction() {\n  if (alreadyWarned) {\n    return;\n  }\n  alreadyWarned = true;\n  if (typeof console !== 'undefined') {\n    console.error('ReactPerf is not supported in the production builds of React. ' + 'To collect measurements, please use the development build of React instead.');\n  }\n}\n\nfunction getLastMeasurements() {\n  if (!(process.env.NODE_ENV !== 'production')) {\n    warnInProduction();\n    return [];\n  }\n\n  return ReactDebugTool.getFlushHistory();\n}\n\nfunction getExclusive() {\n  var flushHistory = arguments.length <= 0 || arguments[0] === undefined ? getLastMeasurements() : arguments[0];\n\n  if (!(process.env.NODE_ENV !== 'production')) {\n    warnInProduction();\n    return [];\n  }\n\n  var aggregatedStats = {};\n  var affectedIDs = {};\n\n  function updateAggregatedStats(treeSnapshot, instanceID, timerType, applyUpdate) {\n    var displayName = treeSnapshot[instanceID].displayName;\n\n    var key = displayName;\n    var stats = aggregatedStats[key];\n    if (!stats) {\n      affectedIDs[key] = {};\n      stats = aggregatedStats[key] = {\n        key: key,\n        instanceCount: 0,\n        counts: {},\n        durations: {},\n        totalDuration: 0\n      };\n    }\n    if (!stats.durations[timerType]) {\n      stats.durations[timerType] = 0;\n    }\n    if (!stats.counts[timerType]) {\n      stats.counts[timerType] = 0;\n    }\n    affectedIDs[key][instanceID] = true;\n    applyUpdate(stats);\n  }\n\n  flushHistory.forEach(function (flush) {\n    var measurements = flush.measurements;\n    var treeSnapshot = flush.treeSnapshot;\n\n    measurements.forEach(function (measurement) {\n      var duration = measurement.duration;\n      var instanceID = measurement.instanceID;\n      var timerType = measurement.timerType;\n\n      updateAggregatedStats(treeSnapshot, instanceID, timerType, function (stats) {\n        stats.totalDuration += duration;\n        stats.durations[timerType] += duration;\n        stats.counts[timerType]++;\n      });\n    });\n  });\n\n  return Object.keys(aggregatedStats).map(function (key) {\n    return _extends({}, aggregatedStats[key], {\n      instanceCount: Object.keys(affectedIDs[key]).length\n    });\n  }).sort(function (a, b) {\n    return b.totalDuration - a.totalDuration;\n  });\n}\n\nfunction getInclusive() {\n  var flushHistory = arguments.length <= 0 || arguments[0] === undefined ? getLastMeasurements() : arguments[0];\n\n  if (!(process.env.NODE_ENV !== 'production')) {\n    warnInProduction();\n    return [];\n  }\n\n  var aggregatedStats = {};\n  var affectedIDs = {};\n\n  function updateAggregatedStats(treeSnapshot, instanceID, applyUpdate) {\n    var _treeSnapshot$instanc = treeSnapshot[instanceID];\n    var displayName = _treeSnapshot$instanc.displayName;\n    var ownerID = _treeSnapshot$instanc.ownerID;\n\n    var owner = treeSnapshot[ownerID];\n    var key = (owner ? owner.displayName + ' > ' : '') + displayName;\n    var stats = aggregatedStats[key];\n    if (!stats) {\n      affectedIDs[key] = {};\n      stats = aggregatedStats[key] = {\n        key: key,\n        instanceCount: 0,\n        inclusiveRenderDuration: 0,\n        renderCount: 0\n      };\n    }\n    affectedIDs[key][instanceID] = true;\n    applyUpdate(stats);\n  }\n\n  var isCompositeByID = {};\n  flushHistory.forEach(function (flush) {\n    var measurements = flush.measurements;\n\n    measurements.forEach(function (measurement) {\n      var instanceID = measurement.instanceID;\n      var timerType = measurement.timerType;\n\n      if (timerType !== 'render') {\n        return;\n      }\n      isCompositeByID[instanceID] = true;\n    });\n  });\n\n  flushHistory.forEach(function (flush) {\n    var measurements = flush.measurements;\n    var treeSnapshot = flush.treeSnapshot;\n\n    measurements.forEach(function (measurement) {\n      var duration = measurement.duration;\n      var instanceID = measurement.instanceID;\n      var timerType = measurement.timerType;\n\n      if (timerType !== 'render') {\n        return;\n      }\n      updateAggregatedStats(treeSnapshot, instanceID, function (stats) {\n        stats.renderCount++;\n      });\n      var nextParentID = instanceID;\n      while (nextParentID) {\n        // As we traverse parents, only count inclusive time towards composites.\n        // We know something is a composite if its render() was called.\n        if (isCompositeByID[nextParentID]) {\n          updateAggregatedStats(treeSnapshot, nextParentID, function (stats) {\n            stats.inclusiveRenderDuration += duration;\n          });\n        }\n        nextParentID = treeSnapshot[nextParentID].parentID;\n      }\n    });\n  });\n\n  return Object.keys(aggregatedStats).map(function (key) {\n    return _extends({}, aggregatedStats[key], {\n      instanceCount: Object.keys(affectedIDs[key]).length\n    });\n  }).sort(function (a, b) {\n    return b.inclusiveRenderDuration - a.inclusiveRenderDuration;\n  });\n}\n\nfunction getWasted() {\n  var flushHistory = arguments.length <= 0 || arguments[0] === undefined ? getLastMeasurements() : arguments[0];\n\n  if (!(process.env.NODE_ENV !== 'production')) {\n    warnInProduction();\n    return [];\n  }\n\n  var aggregatedStats = {};\n  var affectedIDs = {};\n\n  function updateAggregatedStats(treeSnapshot, instanceID, applyUpdate) {\n    var _treeSnapshot$instanc2 = treeSnapshot[instanceID];\n    var displayName = _treeSnapshot$instanc2.displayName;\n    var ownerID = _treeSnapshot$instanc2.ownerID;\n\n    var owner = treeSnapshot[ownerID];\n    var key = (owner ? owner.displayName + ' > ' : '') + displayName;\n    var stats = aggregatedStats[key];\n    if (!stats) {\n      affectedIDs[key] = {};\n      stats = aggregatedStats[key] = {\n        key: key,\n        instanceCount: 0,\n        inclusiveRenderDuration: 0,\n        renderCount: 0\n      };\n    }\n    affectedIDs[key][instanceID] = true;\n    applyUpdate(stats);\n  }\n\n  flushHistory.forEach(function (flush) {\n    var measurements = flush.measurements;\n    var treeSnapshot = flush.treeSnapshot;\n    var operations = flush.operations;\n\n    var isDefinitelyNotWastedByID = {};\n\n    // Find host components associated with an operation in this batch.\n    // Mark all components in their parent tree as definitely not wasted.\n    operations.forEach(function (operation) {\n      var instanceID = operation.instanceID;\n\n      var nextParentID = instanceID;\n      while (nextParentID) {\n        isDefinitelyNotWastedByID[nextParentID] = true;\n        nextParentID = treeSnapshot[nextParentID].parentID;\n      }\n    });\n\n    // Find composite components that rendered in this batch.\n    // These are potential candidates for being wasted renders.\n    var renderedCompositeIDs = {};\n    measurements.forEach(function (measurement) {\n      var instanceID = measurement.instanceID;\n      var timerType = measurement.timerType;\n\n      if (timerType !== 'render') {\n        return;\n      }\n      renderedCompositeIDs[instanceID] = true;\n    });\n\n    measurements.forEach(function (measurement) {\n      var duration = measurement.duration;\n      var instanceID = measurement.instanceID;\n      var timerType = measurement.timerType;\n\n      if (timerType !== 'render') {\n        return;\n      }\n\n      // If there was a DOM update below this component, or it has just been\n      // mounted, its render() is not considered wasted.\n      var updateCount = treeSnapshot[instanceID].updateCount;\n\n      if (isDefinitelyNotWastedByID[instanceID] || updateCount === 0) {\n        return;\n      }\n\n      // We consider this render() wasted.\n      updateAggregatedStats(treeSnapshot, instanceID, function (stats) {\n        stats.renderCount++;\n      });\n\n      var nextParentID = instanceID;\n      while (nextParentID) {\n        // Any parents rendered during this batch are considered wasted\n        // unless we previously marked them as dirty.\n        var isWasted = renderedCompositeIDs[nextParentID] && !isDefinitelyNotWastedByID[nextParentID];\n        if (isWasted) {\n          updateAggregatedStats(treeSnapshot, nextParentID, function (stats) {\n            stats.inclusiveRenderDuration += duration;\n          });\n        }\n        nextParentID = treeSnapshot[nextParentID].parentID;\n      }\n    });\n  });\n\n  return Object.keys(aggregatedStats).map(function (key) {\n    return _extends({}, aggregatedStats[key], {\n      instanceCount: Object.keys(affectedIDs[key]).length\n    });\n  }).sort(function (a, b) {\n    return b.inclusiveRenderDuration - a.inclusiveRenderDuration;\n  });\n}\n\nfunction getOperations() {\n  var flushHistory = arguments.length <= 0 || arguments[0] === undefined ? getLastMeasurements() : arguments[0];\n\n  if (!(process.env.NODE_ENV !== 'production')) {\n    warnInProduction();\n    return [];\n  }\n\n  var stats = [];\n  flushHistory.forEach(function (flush, flushIndex) {\n    var operations = flush.operations;\n    var treeSnapshot = flush.treeSnapshot;\n\n    operations.forEach(function (operation) {\n      var instanceID = operation.instanceID;\n      var type = operation.type;\n      var payload = operation.payload;\n      var _treeSnapshot$instanc3 = treeSnapshot[instanceID];\n      var displayName = _treeSnapshot$instanc3.displayName;\n      var ownerID = _treeSnapshot$instanc3.ownerID;\n\n      var owner = treeSnapshot[ownerID];\n      var key = (owner ? owner.displayName + ' > ' : '') + displayName;\n\n      stats.push({\n        flushIndex: flushIndex,\n        instanceID: instanceID,\n        key: key,\n        type: type,\n        ownerID: ownerID,\n        payload: payload\n      });\n    });\n  });\n  return stats;\n}\n\nfunction printExclusive(flushHistory) {\n  if (!(process.env.NODE_ENV !== 'production')) {\n    warnInProduction();\n    return;\n  }\n\n  var stats = getExclusive(flushHistory);\n  var table = stats.map(function (item) {\n    var key = item.key;\n    var instanceCount = item.instanceCount;\n    var totalDuration = item.totalDuration;\n\n    var renderCount = item.counts.render || 0;\n    var renderDuration = item.durations.render || 0;\n    return {\n      'Component': key,\n      'Total time (ms)': roundFloat(totalDuration),\n      'Instance count': instanceCount,\n      'Total render time (ms)': roundFloat(renderDuration),\n      'Average render time (ms)': renderCount ? roundFloat(renderDuration / renderCount) : undefined,\n      'Render count': renderCount,\n      'Total lifecycle time (ms)': roundFloat(totalDuration - renderDuration)\n    };\n  });\n  console.table(table);\n}\n\nfunction printInclusive(flushHistory) {\n  if (!(process.env.NODE_ENV !== 'production')) {\n    warnInProduction();\n    return;\n  }\n\n  var stats = getInclusive(flushHistory);\n  var table = stats.map(function (item) {\n    var key = item.key;\n    var instanceCount = item.instanceCount;\n    var inclusiveRenderDuration = item.inclusiveRenderDuration;\n    var renderCount = item.renderCount;\n\n    return {\n      'Owner > Component': key,\n      'Inclusive render time (ms)': roundFloat(inclusiveRenderDuration),\n      'Instance count': instanceCount,\n      'Render count': renderCount\n    };\n  });\n  console.table(table);\n}\n\nfunction printWasted(flushHistory) {\n  if (!(process.env.NODE_ENV !== 'production')) {\n    warnInProduction();\n    return;\n  }\n\n  var stats = getWasted(flushHistory);\n  var table = stats.map(function (item) {\n    var key = item.key;\n    var instanceCount = item.instanceCount;\n    var inclusiveRenderDuration = item.inclusiveRenderDuration;\n    var renderCount = item.renderCount;\n\n    return {\n      'Owner > Component': key,\n      'Inclusive wasted time (ms)': roundFloat(inclusiveRenderDuration),\n      'Instance count': instanceCount,\n      'Render count': renderCount\n    };\n  });\n  console.table(table);\n}\n\nfunction printOperations(flushHistory) {\n  if (!(process.env.NODE_ENV !== 'production')) {\n    warnInProduction();\n    return;\n  }\n\n  var stats = getOperations(flushHistory);\n  var table = stats.map(function (stat) {\n    return {\n      'Owner > Node': stat.key,\n      'Operation': stat.type,\n      'Payload': typeof stat.payload === 'object' ? JSON.stringify(stat.payload) : stat.payload,\n      'Flush index': stat.flushIndex,\n      'Owner Component ID': stat.ownerID,\n      'DOM Component ID': stat.instanceID\n    };\n  });\n  console.table(table);\n}\n\nvar warnedAboutPrintDOM = false;\nfunction printDOM(measurements) {\n  process.env.NODE_ENV !== 'production' ? warning(warnedAboutPrintDOM, '`ReactPerf.printDOM(...)` is deprecated. Use ' + '`ReactPerf.printOperations(...)` instead.') : void 0;\n  warnedAboutPrintDOM = true;\n  return printOperations(measurements);\n}\n\nvar warnedAboutGetMeasurementsSummaryMap = false;\nfunction getMeasurementsSummaryMap(measurements) {\n  process.env.NODE_ENV !== 'production' ? warning(warnedAboutGetMeasurementsSummaryMap, '`ReactPerf.getMeasurementsSummaryMap(...)` is deprecated. Use ' + '`ReactPerf.getWasted(...)` instead.') : void 0;\n  warnedAboutGetMeasurementsSummaryMap = true;\n  return getWasted(measurements);\n}\n\nfunction start() {\n  if (!(process.env.NODE_ENV !== 'production')) {\n    warnInProduction();\n    return;\n  }\n\n  ReactDebugTool.beginProfiling();\n}\n\nfunction stop() {\n  if (!(process.env.NODE_ENV !== 'production')) {\n    warnInProduction();\n    return;\n  }\n\n  ReactDebugTool.endProfiling();\n}\n\nfunction isRunning() {\n  if (!(process.env.NODE_ENV !== 'production')) {\n    warnInProduction();\n    return false;\n  }\n\n  return ReactDebugTool.isProfiling();\n}\n\nvar ReactPerfAnalysis = {\n  getLastMeasurements: getLastMeasurements,\n  getExclusive: getExclusive,\n  getInclusive: getInclusive,\n  getWasted: getWasted,\n  getOperations: getOperations,\n  printExclusive: printExclusive,\n  printInclusive: printInclusive,\n  printWasted: printWasted,\n  printOperations: printOperations,\n  start: start,\n  stop: stop,\n  isRunning: isRunning,\n  // Deprecated:\n  printDOM: printDOM,\n  getMeasurementsSummaryMap: getMeasurementsSummaryMap\n};\n\nmodule.exports = ReactPerfAnalysis;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(72)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/react/lib/ReactPerf.js\n// module id = 378\n// module chunks = 43\n//# sourceURL=webpack:///./~/react/lib/ReactPerf.js?");

/***/ }

});