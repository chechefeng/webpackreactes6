import React, {PureComponent} from 'react';
import Page4 from "./page4"
import Header from "../header/header"
export default class Home extends PureComponent {
    constructor(props) {
        super(props)

    };

    componentDidMount = ()=>  {
    };

    render() {
        return (
            <div>
                <Header
                    title="拼多多"
                />
                <Page4/>
            </div>
        )
    }
}




