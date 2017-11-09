'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.getDefaultProps = getDefaultProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Popup = require('rmc-cascader/lib/Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _Cascader = require('rmc-cascader/lib/Cascader');

var _Cascader2 = _interopRequireDefault(_Cascader);

var _MultiPicker = require('rmc-picker/lib/MultiPicker');

var _MultiPicker2 = _interopRequireDefault(_MultiPicker);

var _arrayTreeFilter = require('array-tree-filter');

var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getDefaultProps() {
    var defaultFormat = function defaultFormat(values) {
        return values.join(',');
    };
    return {
        triggerType: 'onClick',
        prefixCls: 'am-picker',
        pickerPrefixCls: 'am-picker-col',
        popupPrefixCls: 'am-picker-popup',
        format: defaultFormat,
        cols: 3,
        cascade: true,
        extra: '请选择',
        okText: '确定',
        dismissText: '取消',
        title: ''
    };
}

var AbstractPicker = function (_React$Component) {
    (0, _inherits3['default'])(AbstractPicker, _React$Component);

    function AbstractPicker() {
        (0, _classCallCheck3['default'])(this, AbstractPicker);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (AbstractPicker.__proto__ || Object.getPrototypeOf(AbstractPicker)).apply(this, arguments));

        _this.getSel = function () {
            var value = _this.props.value || [];
            var treeChildren = void 0;
            if (_this.props.cascade) {
                treeChildren = (0, _arrayTreeFilter2['default'])(_this.props.data, function (c, level) {
                    return c.value === value[level];
                });
            } else {
                treeChildren = value.map(function (v, i) {
                    return _this.props.data[i].filter(function (d) {
                        return d.value === v;
                    })[0];
                });
            }
            return _this.props.format && _this.props.format(treeChildren.map(function (v) {
                return v.label;
            }));
        };
        return _this;
    }

    (0, _createClass3['default'])(AbstractPicker, [{
        key: 'render',
        value: function render() {
            var props = this.props;
            var children = props.children,
                _props$value = props.value,
                value = _props$value === undefined ? [] : _props$value,
                extra = props.extra,
                okText = props.okText,
                itemStyle = props.itemStyle,
                dismissText = props.dismissText,
                popupPrefixCls = props.popupPrefixCls,
                cascade = props.cascade;

            var cascader = void 0;
            var popupMoreProps = {};
            if (cascade) {
                cascader = _react2['default'].createElement(_Cascader2['default'], { prefixCls: props.prefixCls, pickerPrefixCls: props.pickerPrefixCls, data: props.data, cols: props.cols, onChange: props.onPickerChange, pickerItemStyle: itemStyle });
            } else {
                cascader = _react2['default'].createElement(
                    _MultiPicker2['default'],
                    { prefixCls: props.prefixCls, pickerPrefixCls: props.pickerPrefixCls, pickerItemStyle: itemStyle },
                    props.data.map(function (d) {
                        return { props: { children: d } };
                    })
                );
                popupMoreProps = {
                    pickerValueProp: 'selectedValue',
                    pickerValueChangeProp: 'onValueChange'
                };
            }
            return _react2['default'].createElement(
                _Popup2['default'],
                (0, _extends3['default'])({ cascader: cascader }, this.popupProps, props, { prefixCls: popupPrefixCls, value: value, dismissText: dismissText, okText: okText }, popupMoreProps),
                _react2['default'].cloneElement(children, { extra: this.getSel() || extra })
            );
        }
    }]);
    return AbstractPicker;
}(_react2['default'].Component);

exports['default'] = AbstractPicker;