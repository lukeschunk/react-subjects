webpackJsonp([34],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(337);\n\n//////////////////\n// WEBPACK FOOTER\n// ./subjects/MiniRedux/lecture.js\n// module id = 0\n// module chunks = 34\n//# sourceURL=webpack:///./subjects/MiniRedux/lecture.js?");

/***/ },

/***/ 304:
/***/ function(module, exports) {

	eval("// get successful control from form and assemble into object\n// http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2\n\n// types which indicate a submit action and are not successful controls\n// these will be ignored\nvar k_r_submitter = /^(?:submit|button|image|reset|file)$/i;\n\n// node names which could be successful controls\nvar k_r_success_contrls = /^(?:input|select|textarea|keygen)/i;\n\n// Matches bracket notation.\nvar brackets = /(\\[[^\\[\\]]*\\])/g;\n\n// serializes form fields\n// @param form MUST be an HTMLForm element\n// @param options is an optional argument to configure the serialization. Default output\n// with no options specified is a url encoded string\n//    - hash: [true | false] Configure the output type. If true, the output will\n//    be a js object.\n//    - serializer: [function] Optional serializer function to override the default one.\n//    The function takes 3 arguments (result, key, value) and should return new result\n//    hash and url encoded str serializers are provided with this module\n//    - disabled: [true | false]. If true serialize disabled fields.\n//    - empty: [true | false]. If true serialize empty fields\nfunction serialize(form, options) {\n    if (typeof options != 'object') {\n        options = { hash: !!options };\n    }\n    else if (options.hash === undefined) {\n        options.hash = true;\n    }\n\n    var result = (options.hash) ? {} : '';\n    var serializer = options.serializer || ((options.hash) ? hash_serializer : str_serialize);\n\n    var elements = form && form.elements ? form.elements : [];\n\n    //Object store each radio and set if it's empty or not\n    var radio_store = Object.create(null);\n\n    for (var i=0 ; i<elements.length ; ++i) {\n        var element = elements[i];\n\n        // ingore disabled fields\n        if ((!options.disabled && element.disabled) || !element.name) {\n            continue;\n        }\n        // ignore anyhting that is not considered a success field\n        if (!k_r_success_contrls.test(element.nodeName) ||\n            k_r_submitter.test(element.type)) {\n            continue;\n        }\n\n        var key = element.name;\n        var val = element.value;\n\n        // we can't just use element.value for checkboxes cause some browsers lie to us\n        // they say \"on\" for value when the box isn't checked\n        if ((element.type === 'checkbox' || element.type === 'radio') && !element.checked) {\n            val = undefined;\n        }\n\n        // If we want empty elements\n        if (options.empty) {\n            // for checkbox\n            if (element.type === 'checkbox' && !element.checked) {\n                val = '';\n            }\n\n            // for radio\n            if (element.type === 'radio') {\n                if (!radio_store[element.name] && !element.checked) {\n                    radio_store[element.name] = false;\n                }\n                else if (element.checked) {\n                    radio_store[element.name] = true;\n                }\n            }\n\n            // if options empty is true, continue only if its radio\n            if (!val && element.type == 'radio') {\n                continue;\n            }\n        }\n        else {\n            // value-less fields are ignored unless options.empty is true\n            if (!val) {\n                continue;\n            }\n        }\n\n        // multi select boxes\n        if (element.type === 'select-multiple') {\n            val = [];\n\n            var selectOptions = element.options;\n            var isSelectedOptions = false;\n            for (var j=0 ; j<selectOptions.length ; ++j) {\n                var option = selectOptions[j];\n                var allowedEmpty = options.empty && !option.value;\n                var hasValue = (option.value || allowedEmpty);\n                if (option.selected && hasValue) {\n                    isSelectedOptions = true;\n\n                    // If using a hash serializer be sure to add the\n                    // correct notation for an array in the multi-select\n                    // context. Here the name attribute on the select element\n                    // might be missing the trailing bracket pair. Both names\n                    // \"foo\" and \"foo[]\" should be arrays.\n                    if (options.hash && key.slice(key.length - 2) !== '[]') {\n                        result = serializer(result, key + '[]', option.value);\n                    }\n                    else {\n                        result = serializer(result, key, option.value);\n                    }\n                }\n            }\n\n            // Serialize if no selected options and options.empty is true\n            if (!isSelectedOptions && options.empty) {\n                result = serializer(result, key, '');\n            }\n\n            continue;\n        }\n\n        result = serializer(result, key, val);\n    }\n\n    // Check for all empty radio buttons and serialize them with key=\"\"\n    if (options.empty) {\n        for (var key in radio_store) {\n            if (!radio_store[key]) {\n                result = serializer(result, key, '');\n            }\n        }\n    }\n\n    return result;\n}\n\nfunction parse_keys(string) {\n    var keys = [];\n    var prefix = /^([^\\[\\]]*)/;\n    var children = new RegExp(brackets);\n    var match = prefix.exec(string);\n\n    if (match[1]) {\n        keys.push(match[1]);\n    }\n\n    while ((match = children.exec(string)) !== null) {\n        keys.push(match[1]);\n    }\n\n    return keys;\n}\n\nfunction hash_assign(result, keys, value) {\n    if (keys.length === 0) {\n        result = value;\n        return result;\n    }\n\n    var key = keys.shift();\n    var between = key.match(/^\\[(.+?)\\]$/);\n\n    if (key === '[]') {\n        result = result || [];\n\n        if (Array.isArray(result)) {\n            result.push(hash_assign(null, keys, value));\n        }\n        else {\n            // This might be the result of bad name attributes like \"[][foo]\",\n            // in this case the original `result` object will already be\n            // assigned to an object literal. Rather than coerce the object to\n            // an array, or cause an exception the attribute \"_values\" is\n            // assigned as an array.\n            result._values = result._values || [];\n            result._values.push(hash_assign(null, keys, value));\n        }\n\n        return result;\n    }\n\n    // Key is an attribute name and can be assigned directly.\n    if (!between) {\n        result[key] = hash_assign(result[key], keys, value);\n    }\n    else {\n        var string = between[1];\n        // +var converts the variable into a number\n        // better than parseInt because it doesn't truncate away trailing\n        // letters and actually fails if whole thing is not a number\n        var index = +string;\n\n        // If the characters between the brackets is not a number it is an\n        // attribute name and can be assigned directly.\n        if (isNaN(index)) {\n            result = result || {};\n            result[string] = hash_assign(result[string], keys, value);\n        }\n        else {\n            result = result || [];\n            result[index] = hash_assign(result[index], keys, value);\n        }\n    }\n\n    return result;\n}\n\n// Object/hash encoding serializer.\nfunction hash_serializer(result, key, value) {\n    var matches = key.match(brackets);\n\n    // Has brackets? Use the recursive assignment function to walk the keys,\n    // construct any missing objects in the result tree and make the assignment\n    // at the end of the chain.\n    if (matches) {\n        var keys = parse_keys(key);\n        hash_assign(result, keys, value);\n    }\n    else {\n        // Non bracket notation can make assignments directly.\n        var existing = result[key];\n\n        // If the value has been assigned already (for instance when a radio and\n        // a checkbox have the same name attribute) convert the previous value\n        // into an array before pushing into it.\n        //\n        // NOTE: If this requirement were removed all hash creation and\n        // assignment could go through `hash_assign`.\n        if (existing) {\n            if (!Array.isArray(existing)) {\n                result[key] = [ existing ];\n            }\n\n            result[key].push(value);\n        }\n        else {\n            result[key] = value;\n        }\n    }\n\n    return result;\n}\n\n// urlform encoding serializer\nfunction str_serialize(result, key, value) {\n    // encode newlines as \\r\\n cause the html spec says so\n    value = value.replace(/(\\r)?\\n/g, '\\r\\n');\n    value = encodeURIComponent(value);\n\n    // spaces should be '+' rather than '%20'.\n    value = value.replace(/%20/g, '+');\n    return result + (result ? '&' : '') + encodeURIComponent(key) + '=' + value;\n}\n\nmodule.exports = serialize;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/form-serialize/index.js\n// module id = 304\n// module chunks = 20 21 22 34 39 41\n//# sourceURL=webpack:///./~/form-serialize/index.js?");

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(70);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _App = __webpack_require__(338);\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _reactDom = __webpack_require__(103);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.getElementById('app'));\n\n////////////////////////////////////////////////////////////////////////////////\n// - shared state (add sidebar)\n// - drilling holes (remove action)\n// - make store\n// - show solution API\n\n//////////////////\n// WEBPACK FOOTER\n// ./subjects/MiniRedux/lecture/index.js\n// module id = 337\n// module chunks = 34\n//# sourceURL=webpack:///./subjects/MiniRedux/lecture/index.js?");

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(70);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _CreateContactForm = __webpack_require__(339);\n\nvar _CreateContactForm2 = _interopRequireDefault(_CreateContactForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = _react2.default.createClass({\n  displayName: 'App',\n  getInitialState: function getInitialState() {\n    return {\n      contacts: [{ id: 'ryan', first: 'Ryan', last: 'Florence', avatar: 'http://ryanflorence.com/jsconf-avatars/avatars/ryan.jpg' }]\n    };\n  },\n  handleCreateContact: function handleCreateContact(contact) {\n    this.setState({\n      contacts: this.state.contacts.concat([contact])\n    });\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Contacts!'\n      ),\n      _react2.default.createElement(\n        'ul',\n        { style: { listStyleType: 'none', padding: 0 } },\n        this.state.contacts.map(function (contact) {\n          return _react2.default.createElement(\n            'li',\n            { key: contact.id },\n            _react2.default.createElement('img', { src: contact.avatar, height: '50' }),\n            ' ',\n            contact.first,\n            ' ',\n            contact.last\n          );\n        }),\n        _react2.default.createElement(\n          'li',\n          null,\n          _react2.default.createElement(_CreateContactForm2.default, { onCreate: this.handleCreateContact })\n        )\n      )\n    );\n  }\n});\n\nexports.default = App;\n\n//////////////////\n// WEBPACK FOOTER\n// ./subjects/MiniRedux/lecture/components/App.js\n// module id = 338\n// module chunks = 34\n//# sourceURL=webpack:///./subjects/MiniRedux/lecture/components/App.js?");

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(70);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _formSerialize = __webpack_require__(304);\n\nvar _formSerialize2 = _interopRequireDefault(_formSerialize);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar transparentGif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';\n\nfunction generateId() {\n  return Math.random().toString(36).substring(7);\n}\n\nvar CreateContactForm = _react2.default.createClass({\n  displayName: 'CreateContactForm',\n\n\n  propTypes: {\n    onCreate: _react2.default.PropTypes.func.isRequired\n  },\n\n  handleSubmit: function handleSubmit(event) {\n    event.preventDefault();\n    var contact = (0, _formSerialize2.default)(event.target, { hash: true });\n    contact.id = generateId();\n    this.props.onCreate(contact);\n    event.target.reset();\n  },\n  render: function render() {\n    return _react2.default.createElement(\n      'form',\n      { onSubmit: this.handleSubmit, style: { display: 'inline' } },\n      _react2.default.createElement('img', { style: { background: '#ccc' }, height: '50', width: '50', src: transparentGif }),\n      ' ',\n      _react2.default.createElement('input', { name: 'first', type: 'text', placeholder: 'first name', size: '8' }),\n      _react2.default.createElement('input', { name: 'last', type: 'text', placeholder: 'last name', size: '15' }),\n      _react2.default.createElement('input', { name: 'avatar', type: 'text', placeholder: 'avatar url', size: '15' }),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit' },\n        'Create'\n      )\n    );\n  }\n});\n\nexports.default = CreateContactForm;\n\n//////////////////\n// WEBPACK FOOTER\n// ./subjects/MiniRedux/lecture/components/CreateContactForm.js\n// module id = 339\n// module chunks = 34\n//# sourceURL=webpack:///./subjects/MiniRedux/lecture/components/CreateContactForm.js?");

/***/ }

});