import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PopupCascader from 'rmc-cascader/es/Popup';
import Cascader from 'rmc-cascader/es/Cascader';
import MultiPicker from 'rmc-picker/es/MultiPicker';
import treeFilter from 'array-tree-filter';
export function getDefaultProps() {
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
    _inherits(AbstractPicker, _React$Component);

    function AbstractPicker() {
        _classCallCheck(this, AbstractPicker);

        var _this = _possibleConstructorReturn(this, (AbstractPicker.__proto__ || Object.getPrototypeOf(AbstractPicker)).apply(this, arguments));

        _this.getSel = function () {
            var value = _this.props.value || [];
            var treeChildren = void 0;
            if (_this.props.cascade) {
                treeChildren = treeFilter(_this.props.data, function (c, level) {
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

    _createClass(AbstractPicker, [{
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
                cascader = React.createElement(Cascader, { prefixCls: props.prefixCls, pickerPrefixCls: props.pickerPrefixCls, data: props.data, cols: props.cols, onChange: props.onPickerChange, pickerItemStyle: itemStyle });
            } else {
                cascader = React.createElement(
                    MultiPicker,
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
            return React.createElement(
                PopupCascader,
                _extends({ cascader: cascader }, this.popupProps, props, { prefixCls: popupPrefixCls, value: value, dismissText: dismissText, okText: okText }, popupMoreProps),
                React.cloneElement(children, { extra: this.getSel() || extra })
            );
        }
    }]);

    return AbstractPicker;
}(React.Component);

export default AbstractPicker;