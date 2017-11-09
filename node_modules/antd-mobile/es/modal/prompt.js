import React from 'react';
import topView from 'rn-topview';
import PromptContainer from './PromptContainer';
export default function a() {
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
            topView.remove();
        }
    };
    topView.set(React.createElement(PromptContainer, { title: title, message: message, actions: args[2], type: type, defaultValue: defaultValue, onAnimationEnd: onAnimationEnd }));
}