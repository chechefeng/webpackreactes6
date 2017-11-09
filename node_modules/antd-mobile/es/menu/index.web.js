import _extends from 'babel-runtime/helpers/extends';
import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import classNames from 'classnames';
import List from '../list/index.web';
import Flex from '../flex/index.web';
import SubMenu from './SubMenu.web';

var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu(props) {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

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

    _createClass(Menu, [{
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
            return React.createElement(
                'div',
                { className: classNames((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, className, !!className), _classNames)), style: _extends({}, style, heightStyle) },
                React.createElement(
                    Flex,
                    { align: 'top' },
                    level === 2 && React.createElement(
                        Flex.Item,
                        { style: heightStyle },
                        React.createElement(
                            List,
                            { role: 'tablist' },
                            data.map(function (dataItem, index) {
                                return React.createElement(
                                    List.Item,
                                    { className: dataItem.value === firstLevelSelectValue ? prefixCls + '-selected' : '', onClick: function onClick() {
                                            return _this2.onClickFirstLevelItem(dataItem);
                                        }, key: 'listitem-1-' + index, role: 'tab', 'aria-selected': dataItem.value === firstLevelSelectValue },
                                    dataItem.label
                                );
                            })
                        )
                    ),
                    React.createElement(
                        Flex.Item,
                        { style: heightStyle, role: 'tabpanel', 'aria-hidden': 'false' },
                        React.createElement(SubMenu, { subMenuPrefixCls: this.props.subMenuPrefixCls, radioPrefixCls: this.props.radioPrefixCls, subMenuData: subMenuData, selItem: subSelInitItem, onSel: this.onClickSubMenuItem, showSelect: showSelect })
                    )
                )
            );
        }
    }]);

    return Menu;
}(React.Component);

export default Menu;

Menu.defaultProps = {
    prefixCls: 'am-menu',
    subMenuPrefixCls: 'am-sub-menu',
    radioPrefixCls: 'am-radio',
    data: [],
    level: 2,
    onChange: function onChange() {}
};