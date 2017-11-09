'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _index = require('../list/index.web');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../flex/index.web');

var _index4 = _interopRequireDefault(_index3);

var _SubMenu = require('./SubMenu.web');

var _SubMenu2 = _interopRequireDefault(_SubMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Menu = function (_React$Component) {
    (0, _inherits3['default'])(Menu, _React$Component);

    function Menu(props) {
        (0, _classCallCheck3['default'])(this, Menu);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this.onClickFirstLevelItem = function (dataItem) {
            var onChange = _this.props.onChange;

            _this.setState({
                firstLevelSelectValue: dataItem.value
            });
            if (dataItem.isLeaf && onChange) {
                onChange([dataItem.value]);
            }
        };
        _this.onClickSubMenuItem = function (dataItem) {
            var _this$props = _this.props,
                level = _this$props.level,
                onChange = _this$props.onChange;

            var value = level === 2 ? [_this.state.firstLevelSelectValue, dataItem.value] : [dataItem.value];
            _this.setState({ value: value });
            setTimeout(function () {
                if (onChange) {
                    onChange(value);
                }
            }, 300);
        };
        _this.state = {
            firstLevelSelectValue: _this.getNewFsv(props),
            value: props.value
        };
        return _this;
    }

    (0, _createClass3['default'])(Menu, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.value !== this.props.value) {
                this.setState({
                    firstLevelSelectValue: this.getNewFsv(nextProps),
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'getNewFsv',
        value: function getNewFsv(props) {
            var value = props.value,
                data = props.data;

            var firstValue = '';
            if (value && value.length) {
                firstValue = value[0];
            } else if (!data[0].isLeaf) {
                firstValue = data[0].value;
            }
            return firstValue;
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var _props = this.props,
                className = _props.className,
                style = _props.style,
                height = _props.height,
                _props$data = _props.data,
                data = _props$data === undefined ? [] : _props$data,
                prefixCls = _props.prefixCls,
                level = _props.level;
            var _state = this.state,
                firstLevelSelectValue = _state.firstLevelSelectValue,
                value = _state.value;

            var subMenuData = data; // menu only has one level as init
            if (level === 2) {
                var parent = data;
                if (firstLevelSelectValue && firstLevelSelectValue !== '') {
                    parent = data.filter(function (dataItem) {
                        return dataItem.value === firstLevelSelectValue;
                    });
                }
                if (parent[0] && parent[0].children && parent[0].isLeaf !== true) {
                    subMenuData = parent[0].children;
                } else {
                    subMenuData = [];
                }
            }
            var subValue = value && value.length > 0 && value[value.length - 1];
            var parentValue = value && value.length > 1 ? value[0] : null;
            var subSelInitItem = subMenuData.filter(function (dataItem) {
                return dataItem.value === subValue;
            });
            var showSelect = true;
            if (level === 2 && parentValue !== firstLevelSelectValue) {
                showSelect = false;
            }
            var heightStyle = {
                height: Math.round(height || document.documentElement.clientHeight / 2) + 'px'
            };
            return _react2['default'].createElement(
                'div',
                { className: (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls, true), (0, _defineProperty3['default'])(_classNames, className, !!className), _classNames)), style: (0, _extends3['default'])({}, style, heightStyle) },
                _react2['default'].createElement(
                    _index4['default'],
                    { align: 'top' },
                    level === 2 && _react2['default'].createElement(
                        _index4['default'].Item,
                        { style: heightStyle },
                        _react2['default'].createElement(
                            _index2['default'],
                            { role: 'tablist' },
                            data.map(function (dataItem, index) {
                                return _react2['default'].createElement(
                                    _index2['default'].Item,
                                    { className: dataItem.value === firstLevelSelectValue ? prefixCls + '-selected' : '', onClick: function onClick() {
                                            return _this2.onClickFirstLevelItem(dataItem);
                                        }, key: 'listitem-1-' + index, role: 'tab', 'aria-selected': dataItem.value === firstLevelSelectValue },
                                    dataItem.label
                                );
                            })
                        )
                    ),
                    _react2['default'].createElement(
                        _index4['default'].Item,
                        { style: heightStyle, role: 'tabpanel', 'aria-hidden': 'false' },
                        _react2['default'].createElement(_SubMenu2['default'], { subMenuPrefixCls: this.props.subMenuPrefixCls, radioPrefixCls: this.props.radioPrefixCls, subMenuData: subMenuData, selItem: subSelInitItem, onSel: this.onClickSubMenuItem, showSelect: showSelect })
                    )
                )
            );
        }
    }]);
    return Menu;
}(_react2['default'].Component); /* tslint:disable:jsx-no-multiline-js */


exports['default'] = Menu;

Menu.defaultProps = {
    prefixCls: 'am-menu',
    subMenuPrefixCls: 'am-sub-menu',
    radioPrefixCls: 'am-radio',
    data: [],
    level: 2,
    onChange: function onChange() {}
};
module.exports = exports['default'];