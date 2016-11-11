webpackJsonp([22],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(70);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(103);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _formSerialize = __webpack_require__(304);\n\nvar _formSerialize2 = _interopRequireDefault(_formSerialize);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } ////////////////////////////////////////////////////////////////////////////////\n// Exercise\n//\n// - When the checkbox is checked:\n//   - Fill in the shipping fields with the values from billing\n//   - Disable the shipping fields so they are not directly editable\n//   - Keep the shipping fields up to date as billing fields change\n//   - Hint: you can get the checkbox value from `event.target.checked`\n// - When the form submits, console.log the values\n//\n// Got extra time?\n//\n// - If there are more than two characters in the \"state\" field, let the user\n//   know they should use the two-character abbreviation\n// - If the user types something into shipping, then checks the checkbox, then\n//   unchecks the checkbox, ensure the field has the information from\n//   before clicking the checkbox the first time\n\n\nvar CheckoutForm = function (_React$Component) {\n  _inherits(CheckoutForm, _React$Component);\n\n  function CheckoutForm() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CheckoutForm);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CheckoutForm.__proto__ || Object.getPrototypeOf(CheckoutForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      billingName: 'Michael Jackson',\n      billingState: 'CA',\n      shippingName: '',\n      shippingState: '',\n      shippingSameAsBilling: false\n    }, _this.handleSubmit = function (event) {\n      event.preventDefault();\n\n      var values = (0, _formSerialize2.default)(event.target, { hash: true });\n\n      console.log(values);\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(CheckoutForm, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _state = this.state,\n          billingName = _state.billingName,\n          billingState = _state.billingState,\n          shippingName = _state.shippingName,\n          shippingState = _state.shippingState,\n          shippingSameAsBilling = _state.shippingSameAsBilling;\n\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Checkout'\n        ),\n        _react2.default.createElement(\n          'form',\n          { onSubmit: this.handleSubmit },\n          _react2.default.createElement(\n            'fieldset',\n            null,\n            _react2.default.createElement(\n              'legend',\n              null,\n              'Billing Address'\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              _react2.default.createElement(\n                'label',\n                null,\n                'Billing Name: ',\n                _react2.default.createElement('input', {\n                  type: 'text',\n                  name: 'billingName',\n                  defaultValue: billingName,\n                  onChange: function onChange(event) {\n                    return _this2.setState({ billingName: event.target.value });\n                  }\n                })\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              _react2.default.createElement(\n                'label',\n                null,\n                'Billing State: ',\n                _react2.default.createElement('input', {\n                  type: 'text',\n                  size: '3',\n                  name: 'billingState',\n                  defaultValue: billingState,\n                  onChange: function onChange(event) {\n                    return _this2.setState({ billingState: event.target.value });\n                  }\n                })\n              )\n            )\n          ),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(\n            'fieldset',\n            null,\n            _react2.default.createElement(\n              'label',\n              null,\n              _react2.default.createElement('input', {\n                type: 'checkbox',\n                onChange: function onChange(event) {\n                  return _this2.setState({ shippingSameAsBilling: event.target.checked });\n                }\n              }),\n              ' Same as billing'\n            ),\n            _react2.default.createElement(\n              'legend',\n              null,\n              'Shipping Address'\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              _react2.default.createElement(\n                'label',\n                null,\n                'Shipping Name: ',\n                _react2.default.createElement('input', {\n                  type: 'text',\n                  name: 'shippingName',\n                  value: shippingSameAsBilling ? billingName : shippingName,\n                  disabled: shippingSameAsBilling,\n                  onChange: function onChange(event) {\n                    return _this2.setState({ shippingName: event.target.value });\n                  }\n                })\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              _react2.default.createElement(\n                'label',\n                null,\n                'Shipping State: ',\n                _react2.default.createElement('input', {\n                  type: 'text',\n                  size: '2',\n                  name: 'shippingState',\n                  value: shippingSameAsBilling ? billingState : shippingState,\n                  disabled: shippingSameAsBilling,\n                  onChange: function onChange(event) {\n                    return _this2.setState({ shippingState: event.target.value });\n                  }\n                })\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return CheckoutForm;\n}(_react2.default.Component);\n\n_reactDom2.default.render(_react2.default.createElement(CheckoutForm, null), document.getElementById('app'));\n\n//////////////////\n// WEBPACK FOOTER\n// ./subjects/Forms/solution.js\n// module id = 0\n// module chunks = 22\n//# sourceURL=webpack:///./subjects/Forms/solution.js?");

/***/ },

/***/ 304:
/***/ function(module, exports) {

	eval("// get successful control from form and assemble into object\n// http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2\n\n// types which indicate a submit action and are not successful controls\n// these will be ignored\nvar k_r_submitter = /^(?:submit|button|image|reset|file)$/i;\n\n// node names which could be successful controls\nvar k_r_success_contrls = /^(?:input|select|textarea|keygen)/i;\n\n// Matches bracket notation.\nvar brackets = /(\\[[^\\[\\]]*\\])/g;\n\n// serializes form fields\n// @param form MUST be an HTMLForm element\n// @param options is an optional argument to configure the serialization. Default output\n// with no options specified is a url encoded string\n//    - hash: [true | false] Configure the output type. If true, the output will\n//    be a js object.\n//    - serializer: [function] Optional serializer function to override the default one.\n//    The function takes 3 arguments (result, key, value) and should return new result\n//    hash and url encoded str serializers are provided with this module\n//    - disabled: [true | false]. If true serialize disabled fields.\n//    - empty: [true | false]. If true serialize empty fields\nfunction serialize(form, options) {\n    if (typeof options != 'object') {\n        options = { hash: !!options };\n    }\n    else if (options.hash === undefined) {\n        options.hash = true;\n    }\n\n    var result = (options.hash) ? {} : '';\n    var serializer = options.serializer || ((options.hash) ? hash_serializer : str_serialize);\n\n    var elements = form && form.elements ? form.elements : [];\n\n    //Object store each radio and set if it's empty or not\n    var radio_store = Object.create(null);\n\n    for (var i=0 ; i<elements.length ; ++i) {\n        var element = elements[i];\n\n        // ingore disabled fields\n        if ((!options.disabled && element.disabled) || !element.name) {\n            continue;\n        }\n        // ignore anyhting that is not considered a success field\n        if (!k_r_success_contrls.test(element.nodeName) ||\n            k_r_submitter.test(element.type)) {\n            continue;\n        }\n\n        var key = element.name;\n        var val = element.value;\n\n        // we can't just use element.value for checkboxes cause some browsers lie to us\n        // they say \"on\" for value when the box isn't checked\n        if ((element.type === 'checkbox' || element.type === 'radio') && !element.checked) {\n            val = undefined;\n        }\n\n        // If we want empty elements\n        if (options.empty) {\n            // for checkbox\n            if (element.type === 'checkbox' && !element.checked) {\n                val = '';\n            }\n\n            // for radio\n            if (element.type === 'radio') {\n                if (!radio_store[element.name] && !element.checked) {\n                    radio_store[element.name] = false;\n                }\n                else if (element.checked) {\n                    radio_store[element.name] = true;\n                }\n            }\n\n            // if options empty is true, continue only if its radio\n            if (!val && element.type == 'radio') {\n                continue;\n            }\n        }\n        else {\n            // value-less fields are ignored unless options.empty is true\n            if (!val) {\n                continue;\n            }\n        }\n\n        // multi select boxes\n        if (element.type === 'select-multiple') {\n            val = [];\n\n            var selectOptions = element.options;\n            var isSelectedOptions = false;\n            for (var j=0 ; j<selectOptions.length ; ++j) {\n                var option = selectOptions[j];\n                var allowedEmpty = options.empty && !option.value;\n                var hasValue = (option.value || allowedEmpty);\n                if (option.selected && hasValue) {\n                    isSelectedOptions = true;\n\n                    // If using a hash serializer be sure to add the\n                    // correct notation for an array in the multi-select\n                    // context. Here the name attribute on the select element\n                    // might be missing the trailing bracket pair. Both names\n                    // \"foo\" and \"foo[]\" should be arrays.\n                    if (options.hash && key.slice(key.length - 2) !== '[]') {\n                        result = serializer(result, key + '[]', option.value);\n                    }\n                    else {\n                        result = serializer(result, key, option.value);\n                    }\n                }\n            }\n\n            // Serialize if no selected options and options.empty is true\n            if (!isSelectedOptions && options.empty) {\n                result = serializer(result, key, '');\n            }\n\n            continue;\n        }\n\n        result = serializer(result, key, val);\n    }\n\n    // Check for all empty radio buttons and serialize them with key=\"\"\n    if (options.empty) {\n        for (var key in radio_store) {\n            if (!radio_store[key]) {\n                result = serializer(result, key, '');\n            }\n        }\n    }\n\n    return result;\n}\n\nfunction parse_keys(string) {\n    var keys = [];\n    var prefix = /^([^\\[\\]]*)/;\n    var children = new RegExp(brackets);\n    var match = prefix.exec(string);\n\n    if (match[1]) {\n        keys.push(match[1]);\n    }\n\n    while ((match = children.exec(string)) !== null) {\n        keys.push(match[1]);\n    }\n\n    return keys;\n}\n\nfunction hash_assign(result, keys, value) {\n    if (keys.length === 0) {\n        result = value;\n        return result;\n    }\n\n    var key = keys.shift();\n    var between = key.match(/^\\[(.+?)\\]$/);\n\n    if (key === '[]') {\n        result = result || [];\n\n        if (Array.isArray(result)) {\n            result.push(hash_assign(null, keys, value));\n        }\n        else {\n            // This might be the result of bad name attributes like \"[][foo]\",\n            // in this case the original `result` object will already be\n            // assigned to an object literal. Rather than coerce the object to\n            // an array, or cause an exception the attribute \"_values\" is\n            // assigned as an array.\n            result._values = result._values || [];\n            result._values.push(hash_assign(null, keys, value));\n        }\n\n        return result;\n    }\n\n    // Key is an attribute name and can be assigned directly.\n    if (!between) {\n        result[key] = hash_assign(result[key], keys, value);\n    }\n    else {\n        var string = between[1];\n        // +var converts the variable into a number\n        // better than parseInt because it doesn't truncate away trailing\n        // letters and actually fails if whole thing is not a number\n        var index = +string;\n\n        // If the characters between the brackets is not a number it is an\n        // attribute name and can be assigned directly.\n        if (isNaN(index)) {\n            result = result || {};\n            result[string] = hash_assign(result[string], keys, value);\n        }\n        else {\n            result = result || [];\n            result[index] = hash_assign(result[index], keys, value);\n        }\n    }\n\n    return result;\n}\n\n// Object/hash encoding serializer.\nfunction hash_serializer(result, key, value) {\n    var matches = key.match(brackets);\n\n    // Has brackets? Use the recursive assignment function to walk the keys,\n    // construct any missing objects in the result tree and make the assignment\n    // at the end of the chain.\n    if (matches) {\n        var keys = parse_keys(key);\n        hash_assign(result, keys, value);\n    }\n    else {\n        // Non bracket notation can make assignments directly.\n        var existing = result[key];\n\n        // If the value has been assigned already (for instance when a radio and\n        // a checkbox have the same name attribute) convert the previous value\n        // into an array before pushing into it.\n        //\n        // NOTE: If this requirement were removed all hash creation and\n        // assignment could go through `hash_assign`.\n        if (existing) {\n            if (!Array.isArray(existing)) {\n                result[key] = [ existing ];\n            }\n\n            result[key].push(value);\n        }\n        else {\n            result[key] = value;\n        }\n    }\n\n    return result;\n}\n\n// urlform encoding serializer\nfunction str_serialize(result, key, value) {\n    // encode newlines as \\r\\n cause the html spec says so\n    value = value.replace(/(\\r)?\\n/g, '\\r\\n');\n    value = encodeURIComponent(value);\n\n    // spaces should be '+' rather than '%20'.\n    value = value.replace(/%20/g, '+');\n    return result + (result ? '&' : '') + encodeURIComponent(key) + '=' + value;\n}\n\nmodule.exports = serialize;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/form-serialize/index.js\n// module id = 304\n// module chunks = 20 21 22 34 39 41\n//# sourceURL=webpack:///./~/form-serialize/index.js?");

/***/ }

});