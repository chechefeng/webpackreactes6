import React from 'react';
import topView from 'rn-topview';
import AlertContainer from './AlertContainer';
export default function a() {
    var title = arguments.length <= 0 ? undefined : arguments[0];
    var content = arguments.length <= 1 ? undefined : arguments[1];
    var actions = (arguments.length <= 2 ? undefined : arguments[2]) || [{ text: '确定' }];
    var onAnimationEnd = function onAnimationEnd(visible) {
        if (!visible) {
            topView.remove();
        }
    };
    topView.set(React.createElement(AlertContainer, { title: title, content: content, actions: actions, onAnimationEnd: onAnimationEnd }));
}