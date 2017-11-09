import _defineProperty from 'babel-runtime/helpers/defineProperty';
/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import classNames from 'classnames';
import List from '../list/index.web';
import Radio from '../radio/Radio.web';
export default function SubMenu(props) {
    var onClick = function onClick(dataItem) {
        if (props.onSel) {
            props.onSel(dataItem);
        }
    };
    var subMenuPrefixCls = props.subMenuPrefixCls,
        radioPrefixCls = props.radioPrefixCls,
        subMenuData = props.subMenuData,
        showSelect = props.showSelect,
        selItem = props.selItem;

    var selected = function selected(dataItem) {
        return showSelect && selItem.length > 0 && selItem[0].value === dataItem.value;
    };
    return React.createElement(
        List,
        { style: { paddingTop: 0 }, className: subMenuPrefixCls },
        subMenuData.map(function (dataItem, idx) {
            var _classNames;

            return React.createElement(
                List.Item,
                { className: classNames((_classNames = {}, _defineProperty(_classNames, radioPrefixCls + '-item', true), _defineProperty(_classNames, subMenuPrefixCls + '-item-selected', selected(dataItem)), _defineProperty(_classNames, subMenuPrefixCls + '-item-disabled', dataItem.disabled), _classNames)), key: idx, extra: React.createElement(Radio, { checked: selected(dataItem), disabled: dataItem.disabled, onChange: function onChange() {
                            return onClick(dataItem);
                        } }) },
                dataItem.label
            );
        })
    );
}