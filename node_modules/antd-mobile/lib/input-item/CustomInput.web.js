'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _CustomKeyboard = require('./CustomKeyboard.web');

var _CustomKeyboard2 = _interopRequireDefault(_CustomKeyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var NumberInput = function (_React$Component) {
    (0, _inherits3['default'])(NumberInput, _React$Component);

    function NumberInput(props) {
        (0, _classCallCheck3['default'])(this, NumberInput);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).call(this, props));

        _this._blurEventListener = function (ev) {
            var value = _this.props.value;

            if (ev.target !== _this.refs['input-container']) {
                _this.onInputBlur(value);
            }
        };
        _this.onInputBlur = function (value) {
            var focused = _this.state.focused;

            if (focused) {
                _this.setState({
                    focused: false
                });
                _this.props.onBlur(value);
            }
        };
        _this.onInputFocus = function (value) {
            _this.setState({
                focused: true
            });
            _this.props.onFocus(value);
        };
        _this.onKeyboardClick = function (KeyboardItemValue) {
            var _this$props = _this.props,
                value = _this$props.value,
                onChange = _this$props.onChange,
                maxLength = _this$props.maxLength;
            // 删除键

            if (KeyboardItemValue === 'delete') {
                onChange({ target: { value: value.substring(0, value.length - 1) } });
                // 确认键
            } else if (KeyboardItemValue === 'confirm') {
                onChange({ target: { value: value } });
                _this.onInputBlur(value);
                // 收起键
            } else if (KeyboardItemValue === 'hide') {
                _this.onInputBlur(value);
            } else {
                if (maxLength !== undefined && +maxLength >= 0 && (value + KeyboardItemValue).length > maxLength) {
                    onChange({ target: { value: (value + KeyboardItemValue).substr(0, maxLength) } });
                } else {
                    onChange({ target: { value: value + KeyboardItemValue } });
                }
            }
        };
        _this.onFakeInputClick = function () {
            var value = _this.props.value;
            var focused = _this.state.focused;

            if (!focused) {
                _this.onInputFocus(value);
            }
        };
        _this.state = {
            focused: false
        };
        return _this;
    }

    (0, _createClass3['default'])(NumberInput, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            if ('focused' in nextProps && nextProps.focused !== this.state.focused) {
                this.debounceFocusTimeout = setTimeout(function () {
                    var _props = _this2.props,
                        disabled = _props.disabled,
                        editable = _props.editable;

                    if (nextProps.focused && !disabled && editable) {
                        _this2.onInputFocus(_this2.props.value);
                    }
                }, 10);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props2 = this.props,
                autoFocus = _props2.autoFocus,
                focused = _props2.focused,
                value = _props2.value,
                disabled = _props2.disabled,
                editable = _props2.editable;

            if ((autoFocus || focused) && !disabled && editable) {
                this.onInputFocus(value);
            }
            document.addEventListener('click', this._blurEventListener, false);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('click', this._blurEventListener, false);
            if (this.debounceFocusTimeout) {
                clearTimeout(this.debounceFocusTimeout);
                this.debounceFocusTimeout = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _props3 = this.props,
                placeholder = _props3.placeholder,
                value = _props3.value,
                keyboardPrefixCls = _props3.keyboardPrefixCls,
                disabled = _props3.disabled,
                editable = _props3.editable,
                confirmLabel = _props3.confirmLabel;
            var focused = this.state.focused;

            var preventKeyboard = disabled || !editable;
            var fakeInputCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, 'fake-input', true), (0, _defineProperty3['default'])(_classNames, 'focus', focused), (0, _defineProperty3['default'])(_classNames, 'fake-input-disabled', disabled), _classNames));
            return _react2['default'].createElement(
                'div',
                { className: 'fake-input-container' },
                value === '' && _react2['default'].createElement(
                    'div',
                    { className: 'fake-input-placeholder' },
                    placeholder
                ),
                _react2['default'].createElement(
                    'div',
                    { className: fakeInputCls, ref: 'input-container', onClick: preventKeyboard ? function () {} : this.onFakeInputClick },
                    value
                ),
                !preventKeyboard && _react2['default'].createElement(_CustomKeyboard2['default'], { onClick: this.onKeyboardClick, hide: !focused, confirmDisabled: value === '', preixCls: keyboardPrefixCls, confirmLabel: confirmLabel })
            );
        }
    }]);
    return NumberInput;
}(_react2['default'].Component); /* tslint:disable:jsx-no-multiline-js */


NumberInput.defaultProps = {
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    placeholder: '',
    value: '',
    disabled: false,
    editable: true,
    prefixCls: 'am-input',
    keyboardPrefixCls: 'am-number-keyboard'
};
exports['default'] = NumberInput;
module.exports = exports['default'];