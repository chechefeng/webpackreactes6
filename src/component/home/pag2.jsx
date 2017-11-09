import React, {PureComponent} from 'react';
import Page3 from "./pag3"
console.log(Page3)
export default class pag2 extends PureComponent {
    constructor(props) {
        super(props)

    };



    render() {
        return (
            <div>
                pag2
                <Page3/>
            </div>
        )
    }
}