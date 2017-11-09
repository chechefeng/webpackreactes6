import React, {PureComponent} from 'react';
import "./header.less"
export default class Header extends PureComponent {
    constructor(props) {
        super(props)

    };

    componentDidMount = () => {
    };

    render() {
        const title = this.props.title;
        return (
            <div className="header_wraper">
                <p>{title}</p>
            </div>
        )
    }
}