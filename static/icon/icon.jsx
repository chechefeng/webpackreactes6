import React, {PureComponent} from 'react';
import "./iconfont.css"
export default class Icon extends PureComponent {
    constructor(props) {
        super(props)

    };

    componentDidMount = () => {
    };

    render() {
        //console.log(this.props.type);
        const type = "icon-"+this.props.type+" "+ "iconfont";
        return (

                <i className={type}></i>


        )
    }
}