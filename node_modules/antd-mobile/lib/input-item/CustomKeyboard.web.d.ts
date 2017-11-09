/// <reference types="react" />
import React from 'react';
export declare class KeyboardItem extends React.Component<any, any> {
    static defaultProps: {
        prefixCls: string;
        onClick: () => void;
        disabled: boolean;
    };
    render(): JSX.Element;
}
declare class CustomKeyboard extends React.Component<any, any> {
    static defaultProps: {
        prefixCls: string;
        onClick: () => void;
        confirmDisabled: boolean;
    };
    onKeyboardClick: (e: any, value: any) => null | undefined;
    renderKetboardItem: (item: any, index: any) => JSX.Element;
    render(): JSX.Element;
}
export default CustomKeyboard;
