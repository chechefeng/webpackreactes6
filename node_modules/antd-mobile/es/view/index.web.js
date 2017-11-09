import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';

var View = function (_React$Component) {
    _inherits(View, _React$Component);

    function View() {
        _classCallCheck(this, View);

        return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
    }

    _createClass(View, [{
        key: 'render',
        value: function render() {
            var props = _extends({}, this.props);
            if (Array.isArray(props.style)) {
                var style = {};
                props.style.forEach(function (s) {
                    style = _extends({}, style, s);
                });
                props.style = style;
            }
            var Component = props.Component;

            return React.createElement(Component, props);
        }
    }]);

    return View;
}(React.Component);

export default View;

View.defaultProps = {
    Component: 'div'
};