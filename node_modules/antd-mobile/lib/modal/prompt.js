'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = a;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rnTopview = require('rn-topview');

var _rnTopview2 = _interopRequireDefault(_rnTopview);

var _PromptContainer = require('./PromptContainer');

var _PromptContainer2 = _interopRequireDefault(_PromptContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function a() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    if (!args || !args[2]) {
        console.error('Must specify callbackOrActions');
        return;
    }
    var title = args[0];
    var message = args[1] || '';
    var type = args[3] || 'default';
    var defaultValue = args[4] || '';
    var onAnimationEnd = function onAnimationEnd(visible) {
        if (!visible) {
            _rnTopview2['default'].remove();
        }
    };
    _rnTopview2['default'].set(_react2['default'].createElement(_PromptContainer2['default'], { title: title, message: message, actions: args[2], type: type, defaultValue: defaultValue, onAnimationEnd: onAnimationEnd }));
}
module.exports = exports['default'];