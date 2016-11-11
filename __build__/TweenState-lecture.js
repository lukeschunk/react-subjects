webpackJsonp([64],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(70);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(103);\n\nvar _reactAddonsTransitionGroup = __webpack_require__(495);\n\nvar _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);\n\nvar _HeightFader = __webpack_require__(496);\n\nvar _HeightFader2 = _interopRequireDefault(_HeightFader);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar List = _react2.default.createClass({\n  displayName: 'List',\n  getInitialState: function getInitialState() {\n    return {\n      items: []\n    };\n  },\n  addItem: function addItem(e) {\n    if (e.key === 'Enter') {\n      if (this.guid == null) this.guid = 1;\n\n      var newItem = {\n        id: this.guid++,\n        label: e.target.value\n      };\n\n      this.setState({\n        items: [newItem].concat(this.state.items)\n      });\n\n      e.target.value = '';\n    }\n  },\n  removeItem: function removeItem(item) {\n    this.setState({\n      items: this.state.items.filter(function (i) {\n        return i !== item;\n      })\n    });\n  },\n  render: function render() {\n    var _this = this;\n\n    return _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        this.props.name\n      ),\n      _react2.default.createElement('input', { onKeyPress: this.addItem }),\n      _react2.default.createElement(\n        'ul',\n        null,\n        this.state.items.map(function (item) {\n          return _react2.default.createElement(\n            'li',\n            { key: item.id },\n            item.label,\n            ' ',\n            _react2.default.createElement(\n              'button',\n              { onClick: function onClick() {\n                  return _this.removeItem(item);\n                } },\n              'remove'\n            )\n          );\n        })\n      )\n    );\n  }\n});\n\nvar App = _react2.default.createClass({\n  displayName: 'App',\n  render: function render() {\n    return _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(List, { name: 'Transition Group' })\n    );\n  }\n});\n\n(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('app'));\n\n//////////////////\n// WEBPACK FOOTER\n// ./subjects/TweenState/lecture.js\n// module id = 0\n// module chunks = 64\n//# sourceURL=webpack:///./subjects/TweenState/lecture.js?");

/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright 2013-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule ReactTransitionGroup\n */\n\n'use strict';\n\nvar _assign = __webpack_require__(73);\n\nvar React = __webpack_require__(71);\nvar ReactInstanceMap = __webpack_require__(188);\nvar ReactTransitionChildMapping = __webpack_require__(443);\n\nvar emptyFunction = __webpack_require__(81);\n\n/**\n * A basis for animations. When children are declaratively added or removed,\n * special lifecycle hooks are called.\n * See https://facebook.github.io/react/docs/animation.html#low-level-api-reacttransitiongroup\n */\nvar ReactTransitionGroup = React.createClass({\n  displayName: 'ReactTransitionGroup',\n\n  propTypes: {\n    component: React.PropTypes.any,\n    childFactory: React.PropTypes.func\n  },\n\n  getDefaultProps: function () {\n    return {\n      component: 'span',\n      childFactory: emptyFunction.thatReturnsArgument\n    };\n  },\n\n  getInitialState: function () {\n    return {\n      // TODO: can we get useful debug information to show at this point?\n      children: ReactTransitionChildMapping.getChildMapping(this.props.children)\n    };\n  },\n\n  componentWillMount: function () {\n    this.currentlyTransitioningKeys = {};\n    this.keysToEnter = [];\n    this.keysToLeave = [];\n  },\n\n  componentDidMount: function () {\n    var initialChildMapping = this.state.children;\n    for (var key in initialChildMapping) {\n      if (initialChildMapping[key]) {\n        this.performAppear(key);\n      }\n    }\n  },\n\n  componentWillReceiveProps: function (nextProps) {\n    var nextChildMapping;\n    if (process.env.NODE_ENV !== 'production') {\n      nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children, ReactInstanceMap.get(this)._debugID);\n    } else {\n      nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);\n    }\n    var prevChildMapping = this.state.children;\n\n    this.setState({\n      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)\n    });\n\n    var key;\n\n    for (key in nextChildMapping) {\n      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);\n      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {\n        this.keysToEnter.push(key);\n      }\n    }\n\n    for (key in prevChildMapping) {\n      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);\n      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {\n        this.keysToLeave.push(key);\n      }\n    }\n\n    // If we want to someday check for reordering, we could do it here.\n  },\n\n  componentDidUpdate: function () {\n    var keysToEnter = this.keysToEnter;\n    this.keysToEnter = [];\n    keysToEnter.forEach(this.performEnter);\n\n    var keysToLeave = this.keysToLeave;\n    this.keysToLeave = [];\n    keysToLeave.forEach(this.performLeave);\n  },\n\n  performAppear: function (key) {\n    this.currentlyTransitioningKeys[key] = true;\n\n    var component = this.refs[key];\n\n    if (component.componentWillAppear) {\n      component.componentWillAppear(this._handleDoneAppearing.bind(this, key));\n    } else {\n      this._handleDoneAppearing(key);\n    }\n  },\n\n  _handleDoneAppearing: function (key) {\n    var component = this.refs[key];\n    if (component.componentDidAppear) {\n      component.componentDidAppear();\n    }\n\n    delete this.currentlyTransitioningKeys[key];\n\n    var currentChildMapping;\n    if (process.env.NODE_ENV !== 'production') {\n      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children, ReactInstanceMap.get(this)._debugID);\n    } else {\n      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);\n    }\n\n    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {\n      // This was removed before it had fully appeared. Remove it.\n      this.performLeave(key);\n    }\n  },\n\n  performEnter: function (key) {\n    this.currentlyTransitioningKeys[key] = true;\n\n    var component = this.refs[key];\n\n    if (component.componentWillEnter) {\n      component.componentWillEnter(this._handleDoneEntering.bind(this, key));\n    } else {\n      this._handleDoneEntering(key);\n    }\n  },\n\n  _handleDoneEntering: function (key) {\n    var component = this.refs[key];\n    if (component.componentDidEnter) {\n      component.componentDidEnter();\n    }\n\n    delete this.currentlyTransitioningKeys[key];\n\n    var currentChildMapping;\n    if (process.env.NODE_ENV !== 'production') {\n      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children, ReactInstanceMap.get(this)._debugID);\n    } else {\n      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);\n    }\n\n    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {\n      // This was removed before it had fully entered. Remove it.\n      this.performLeave(key);\n    }\n  },\n\n  performLeave: function (key) {\n    this.currentlyTransitioningKeys[key] = true;\n\n    var component = this.refs[key];\n    if (component.componentWillLeave) {\n      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));\n    } else {\n      // Note that this is somewhat dangerous b/c it calls setState()\n      // again, effectively mutating the component before all the work\n      // is done.\n      this._handleDoneLeaving(key);\n    }\n  },\n\n  _handleDoneLeaving: function (key) {\n    var component = this.refs[key];\n\n    if (component.componentDidLeave) {\n      component.componentDidLeave();\n    }\n\n    delete this.currentlyTransitioningKeys[key];\n\n    var currentChildMapping;\n    if (process.env.NODE_ENV !== 'production') {\n      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children, ReactInstanceMap.get(this)._debugID);\n    } else {\n      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);\n    }\n\n    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {\n      // This entered again before it fully left. Add it again.\n      this.performEnter(key);\n    } else {\n      this.setState(function (state) {\n        var newChildren = _assign({}, state.children);\n        delete newChildren[key];\n        return { children: newChildren };\n      });\n    }\n  },\n\n  render: function () {\n    // TODO: we could get rid of the need for the wrapper node\n    // by cloning a single child\n    var childrenToRender = [];\n    for (var key in this.state.children) {\n      var child = this.state.children[key];\n      if (child) {\n        // You may need to apply reactive updates to a child as it is leaving.\n        // The normal React way to do it won't work since the child will have\n        // already been removed. In case you need this behavior you can provide\n        // a childFactory function to wrap every child, even the ones that are\n        // leaving.\n        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));\n      }\n    }\n\n    // Do not forward ReactTransitionGroup props to primitive DOM nodes\n    var props = _assign({}, this.props);\n    delete props.transitionLeave;\n    delete props.transitionName;\n    delete props.transitionAppear;\n    delete props.transitionEnter;\n    delete props.childFactory;\n    delete props.transitionLeaveTimeout;\n    delete props.transitionEnterTimeout;\n    delete props.transitionAppearTimeout;\n    delete props.component;\n\n    return React.createElement(this.props.component, props, childrenToRender);\n  }\n});\n\nmodule.exports = ReactTransitionGroup;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(72)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/react/lib/ReactTransitionGroup.js\n// module id = 442\n// module chunks = 58 59 64\n//# sourceURL=webpack:///./~/react/lib/ReactTransitionGroup.js?");

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright 2013-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule ReactTransitionChildMapping\n */\n\n'use strict';\n\nvar flattenChildren = __webpack_require__(197);\n\nvar ReactTransitionChildMapping = {\n  /**\n   * Given `this.props.children`, return an object mapping key to child. Just\n   * simple syntactic sugar around flattenChildren().\n   *\n   * @param {*} children `this.props.children`\n   * @param {number=} selfDebugID Optional debugID of the current internal instance.\n   * @return {object} Mapping of key to child\n   */\n  getChildMapping: function (children, selfDebugID) {\n    if (!children) {\n      return children;\n    }\n\n    if (process.env.NODE_ENV !== 'production') {\n      return flattenChildren(children, selfDebugID);\n    }\n\n    return flattenChildren(children);\n  },\n\n  /**\n   * When you're adding or removing children some may be added or removed in the\n   * same render pass. We want to show *both* since we want to simultaneously\n   * animate elements in and out. This function takes a previous set of keys\n   * and a new set of keys and merges them with its best guess of the correct\n   * ordering. In the future we may expose some of the utilities in\n   * ReactMultiChild to make this easy, but for now React itself does not\n   * directly have this concept of the union of prevChildren and nextChildren\n   * so we implement it here.\n   *\n   * @param {object} prev prev children as returned from\n   * `ReactTransitionChildMapping.getChildMapping()`.\n   * @param {object} next next children as returned from\n   * `ReactTransitionChildMapping.getChildMapping()`.\n   * @return {object} a key set that contains all keys in `prev` and all keys\n   * in `next` in a reasonable order.\n   */\n  mergeChildMappings: function (prev, next) {\n    prev = prev || {};\n    next = next || {};\n\n    function getValueForKey(key) {\n      if (next.hasOwnProperty(key)) {\n        return next[key];\n      } else {\n        return prev[key];\n      }\n    }\n\n    // For each key of `next`, the list of keys to insert before that key in\n    // the combined list\n    var nextKeysPending = {};\n\n    var pendingKeys = [];\n    for (var prevKey in prev) {\n      if (next.hasOwnProperty(prevKey)) {\n        if (pendingKeys.length) {\n          nextKeysPending[prevKey] = pendingKeys;\n          pendingKeys = [];\n        }\n      } else {\n        pendingKeys.push(prevKey);\n      }\n    }\n\n    var i;\n    var childMapping = {};\n    for (var nextKey in next) {\n      if (nextKeysPending.hasOwnProperty(nextKey)) {\n        for (i = 0; i < nextKeysPending[nextKey].length; i++) {\n          var pendingNextKey = nextKeysPending[nextKey][i];\n          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);\n        }\n      }\n      childMapping[nextKey] = getValueForKey(nextKey);\n    }\n\n    // Finally, add the keys which didn't appear before any key in `next`\n    for (i = 0; i < pendingKeys.length; i++) {\n      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);\n    }\n\n    return childMapping;\n  }\n};\n\nmodule.exports = ReactTransitionChildMapping;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(72)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/react/lib/ReactTransitionChildMapping.js\n// module id = 443\n// module chunks = 58 59 64\n//# sourceURL=webpack:///./~/react/lib/ReactTransitionChildMapping.js?");

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	eval("!function(e,n){ true?module.exports=n():\"function\"==typeof define&&define.amd?define([],n):\"object\"==typeof exports?exports.tweenState=n():e.tweenState=n()}(this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var t={};return n.m=e,n.c=t,n.p=\"\",n(0)}({0:function(e,n,t){e.exports=t(90)},1:function(e,n){function t(){c=!1,o.length?s=o.concat(s):f=-1,s.length&&r()}function r(){if(!c){var e=setTimeout(t);c=!0;for(var n=s.length;n;){for(o=s,s=[];++f<n;)o&&o[f].run();f=-1,n=s.length}o=null,c=!1,clearTimeout(e)}}function a(e,n){this.fun=e,this.array=n}function u(){}var o,i=e.exports={},s=[],c=!1,f=-1;i.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];s.push(new a(e,n)),1!==s.length||c||setTimeout(r,0)},a.prototype.run=function(){this.fun.apply(null,this.array)},i.title=\"browser\",i.browser=!0,i.env={},i.argv=[],i.version=\"\",i.versions={},i.on=u,i.addListener=u,i.once=u,i.off=u,i.removeListener=u,i.removeAllListeners=u,i.emit=u,i.binding=function(e){throw new Error(\"process.binding is not supported\")},i.cwd=function(){return\"/\"},i.chdir=function(e){throw new Error(\"process.chdir is not supported\")},i.umask=function(){return 0}},90:function(e,n,t){\"use strict\";function r(e){return e&&e.__esModule?e:{\"default\":e}}Object.defineProperty(n,\"__esModule\",{value:!0});var a=t(165),u=r(a),o=t(91),i=r(o),s=\"ADDITIVE\",c=a.easeInOutQuad,f=300,l=0,h={ADDITIVE:\"ADDITIVE\",DESTRUCTIVE:\"DESTRUCTIVE\"},v={_rafID:null,getInitialState:function(){return{tweenQueue:[]}},componentWillUnmount:function(){i[\"default\"].cancel(this._rafID),this._rafID=-1},tweenState:function(e,n){var t=this,r=n.easing,a=n.duration,u=n.delay,o=n.beginValue,v=n.endValue,d=n.onEnd,p=n.stackBehavior;this.setState(function(n){var I=n,w=void 0,g=void 0;if(\"string\"==typeof e)w=e,g=e;else{for(var M=0;M<e.length-1;M++)I=I[e[M]];w=e[e.length-1],g=e.join(\"|\")}var m={easing:r||c,duration:null==a?f:a,delay:null==u?l:u,beginValue:null==o?I[w]:o,endValue:v,onEnd:d,stackBehavior:p||s},x=n.tweenQueue;return m.stackBehavior===h.DESTRUCTIVE&&(x=n.tweenQueue.filter(function(e){return e.pathHash!==g})),x.push({pathHash:g,config:m,initTime:Date.now()+m.delay}),I[w]=m.endValue,1===x.length&&(t._rafID=(0,i[\"default\"])(t._rafCb)),{tweenQueue:x}})},getTweeningValue:function(e){var n=this.state,t=void 0,r=void 0;if(\"string\"==typeof e)t=n[e],r=e;else{t=n;for(var a=0;a<e.length;a++)t=t[e[a]];r=e.join(\"|\")}for(var u=Date.now(),a=0;a<n.tweenQueue.length;a++){var o=n.tweenQueue[a],i=o.pathHash,s=o.initTime,c=o.config;if(i===r){var f=u-s>c.duration?c.duration:Math.max(0,u-s),l=0===c.duration?c.endValue:c.easing(f,c.beginValue,c.endValue,c.duration),h=l-c.endValue;t+=h}}return t},_rafCb:function(){var e=this.state;if(0!==e.tweenQueue.length){for(var n=Date.now(),t=[],r=0;r<e.tweenQueue.length;r++){var a=e.tweenQueue[r],u=a.initTime,o=a.config;n-u<o.duration?t.push(a):o.onEnd&&o.onEnd()}-1!==this._rafID&&(this.setState({tweenQueue:t}),this._rafID=(0,i[\"default\"])(this._rafCb))}}};n[\"default\"]={Mixin:v,easingTypes:u[\"default\"],stackBehavior:h},e.exports=n[\"default\"]},91:function(e,n,t){for(var r=t(92),a=\"undefined\"==typeof window?{}:window,u=[\"moz\",\"webkit\"],o=\"AnimationFrame\",i=a[\"request\"+o],s=a[\"cancel\"+o]||a[\"cancelRequest\"+o],c=0;c<u.length&&!i;c++)i=a[u[c]+\"Request\"+o],s=a[u[c]+\"Cancel\"+o]||a[u[c]+\"CancelRequest\"+o];if(!i||!s){var f=0,l=0,h=[],v=1e3/60;i=function(e){if(0===h.length){var n=r(),t=Math.max(0,v-(n-f));f=t+n,setTimeout(function(){var e=h.slice(0);h.length=0;for(var n=0;n<e.length;n++)if(!e[n].cancelled)try{e[n].callback(f)}catch(t){setTimeout(function(){throw t},0)}},Math.round(t))}return h.push({handle:++l,callback:e,cancelled:!1}),l},s=function(e){for(var n=0;n<h.length;n++)h[n].handle===e&&(h[n].cancelled=!0)}}e.exports=function(e){return i.call(a,e)},e.exports.cancel=function(){s.apply(a,arguments)}},92:function(e,n,t){(function(n){(function(){var t,r,a;\"undefined\"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:\"undefined\"!=typeof n&&null!==n&&n.hrtime?(e.exports=function(){return(t()-a)/1e6},r=n.hrtime,t=function(){var e;return e=r(),1e9*e[0]+e[1]},a=t()):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(n,t(1))},165:function(e,n){\"use strict\";var t={linear:function(e,n,t,r){var a=t-n;return a*e/r+n},easeInQuad:function(e,n,t,r){var a=t-n;return a*(e/=r)*e+n},easeOutQuad:function(e,n,t,r){var a=t-n;return-a*(e/=r)*(e-2)+n},easeInOutQuad:function(e,n,t,r){var a=t-n;return(e/=r/2)<1?a/2*e*e+n:-a/2*(--e*(e-2)-1)+n},easeInCubic:function(e,n,t,r){var a=t-n;return a*(e/=r)*e*e+n},easeOutCubic:function(e,n,t,r){var a=t-n;return a*((e=e/r-1)*e*e+1)+n},easeInOutCubic:function(e,n,t,r){var a=t-n;return(e/=r/2)<1?a/2*e*e*e+n:a/2*((e-=2)*e*e+2)+n},easeInQuart:function(e,n,t,r){var a=t-n;return a*(e/=r)*e*e*e+n},easeOutQuart:function(e,n,t,r){var a=t-n;return-a*((e=e/r-1)*e*e*e-1)+n},easeInOutQuart:function(e,n,t,r){var a=t-n;return(e/=r/2)<1?a/2*e*e*e*e+n:-a/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(e,n,t,r){var a=t-n;return a*(e/=r)*e*e*e*e+n},easeOutQuint:function(e,n,t,r){var a=t-n;return a*((e=e/r-1)*e*e*e*e+1)+n},easeInOutQuint:function(e,n,t,r){var a=t-n;return(e/=r/2)<1?a/2*e*e*e*e*e+n:a/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(e,n,t,r){var a=t-n;return-a*Math.cos(e/r*(Math.PI/2))+a+n},easeOutSine:function(e,n,t,r){var a=t-n;return a*Math.sin(e/r*(Math.PI/2))+n},easeInOutSine:function(e,n,t,r){var a=t-n;return-a/2*(Math.cos(Math.PI*e/r)-1)+n},easeInExpo:function(e,n,t,r){var a=t-n;return 0==e?n:a*Math.pow(2,10*(e/r-1))+n},easeOutExpo:function(e,n,t,r){var a=t-n;return e==r?n+a:a*(-Math.pow(2,-10*e/r)+1)+n},easeInOutExpo:function(e,n,t,r){var a=t-n;return 0===e?n:e===r?n+a:(e/=r/2)<1?a/2*Math.pow(2,10*(e-1))+n:a/2*(-Math.pow(2,-10*--e)+2)+n},easeInCirc:function(e,n,t,r){var a=t-n;return-a*(Math.sqrt(1-(e/=r)*e)-1)+n},easeOutCirc:function(e,n,t,r){var a=t-n;return a*Math.sqrt(1-(e=e/r-1)*e)+n},easeInOutCirc:function(e,n,t,r){var a=t-n;return(e/=r/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+n:a/2*(Math.sqrt(1-(e-=2)*e)+1)+n},easeInElastic:function(e,n,t,r){var a,u,o,i=t-n;return o=1.70158,u=0,a=i,0===e?n:1===(e/=r)?n+i:(u||(u=.3*r),a<Math.abs(i)?(a=i,o=u/4):o=u/(2*Math.PI)*Math.asin(i/a),-(a*Math.pow(2,10*(e-=1))*Math.sin((e*r-o)*(2*Math.PI)/u))+n)},easeOutElastic:function(e,n,t,r){var a,u,o,i=t-n;return o=1.70158,u=0,a=i,0===e?n:1===(e/=r)?n+i:(u||(u=.3*r),a<Math.abs(i)?(a=i,o=u/4):o=u/(2*Math.PI)*Math.asin(i/a),a*Math.pow(2,-10*e)*Math.sin((e*r-o)*(2*Math.PI)/u)+i+n)},easeInOutElastic:function(e,n,t,r){var a,u,o,i=t-n;return o=1.70158,u=0,a=i,0===e?n:2===(e/=r/2)?n+i:(u||(u=r*(.3*1.5)),a<Math.abs(i)?(a=i,o=u/4):o=u/(2*Math.PI)*Math.asin(i/a),1>e?-.5*(a*Math.pow(2,10*(e-=1))*Math.sin((e*r-o)*(2*Math.PI)/u))+n:a*Math.pow(2,-10*(e-=1))*Math.sin((e*r-o)*(2*Math.PI)/u)*.5+i+n)},easeInBack:function(e,n,t,r,a){var u=t-n;return void 0===a&&(a=1.70158),u*(e/=r)*e*((a+1)*e-a)+n},easeOutBack:function(e,n,t,r,a){var u=t-n;return void 0===a&&(a=1.70158),u*((e=e/r-1)*e*((a+1)*e+a)+1)+n},easeInOutBack:function(e,n,t,r,a){var u=t-n;return void 0===a&&(a=1.70158),(e/=r/2)<1?u/2*(e*e*(((a*=1.525)+1)*e-a))+n:u/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+n},easeInBounce:function(e,n,r,a){var u,o=r-n;return u=t.easeOutBounce(a-e,0,o,a),o-u+n},easeOutBounce:function(e,n,t,r){var a=t-n;return(e/=r)<1/2.75?a*(7.5625*e*e)+n:2/2.75>e?a*(7.5625*(e-=1.5/2.75)*e+.75)+n:2.5/2.75>e?a*(7.5625*(e-=2.25/2.75)*e+.9375)+n:a*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOutBounce:function(e,n,r,a){var u,o=r-n;return a/2>e?(u=t.easeInBounce(2*e,0,o,a),.5*u+n):(u=t.easeOutBounce(2*e-a,0,o,a),.5*u+.5*o+n)}};e.exports=t}})});\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/react-tween-state/lib/index.js\n// module id = 492\n// module chunks = 63 64 65\n//# sourceURL=webpack:///./~/react-tween-state/lib/index.js?");

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__(442);\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/react-addons-transition-group/index.js\n// module id = 495\n// module chunks = 64\n//# sourceURL=webpack:///./~/react-addons-transition-group/index.js?");

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(70);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactTweenState = __webpack_require__(492);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction getHeight(node) {\n  return node.scrollHeight;\n}\n\nvar HeightFader = _react2.default.createClass({\n  displayName: 'HeightFader',\n\n\n  mixins: [_reactTweenState.Mixin],\n\n  getDefaultProps: function getDefaultProps() {\n    return {\n      component: 'li'\n    };\n  },\n  getInitialState: function getInitialState() {\n    return {\n      opacity: 0,\n      height: 0\n    };\n  },\n  componentWillEnter: function componentWillEnter(cb) {\n    this.tweenState('opacity', {\n      duration: 250,\n      endValue: 1\n    });\n\n    this.tweenState('height', {\n      duration: 250,\n      endValue: getHeight(_react2.default.findDOMNode(this)),\n      onEnd: cb\n    });\n  },\n  componentWillLeave: function componentWillLeave(cb) {\n    this.tweenState('opacity', {\n      duration: 250,\n      endValue: 0\n    });\n\n    this.tweenState('height', {\n      duration: 250,\n      endValue: 0,\n      onEnd: cb\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(this.props.component, _extends({}, this.props, {\n      style: {\n        opacity: this.getTweeningValue('opacity'),\n        height: this.getTweeningValue('height')\n      }\n    }));\n  }\n});\n\nexports.default = HeightFader;\n\n//////////////////\n// WEBPACK FOOTER\n// ./subjects/TweenState/components/HeightFader.js\n// module id = 496\n// module chunks = 64\n//# sourceURL=webpack:///./subjects/TweenState/components/HeightFader.js?");

/***/ }

});