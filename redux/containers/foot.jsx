import React, {PureComponent} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setVisibilityFilter} from "../action"
class Foot extends PureComponent {
    constructor(props) {
        super(props)

    };

    componentDidMount = () => {
    };
    _All=(res)=>{
        return ()=>{
            this.props.all(res)

        }
    }
    render() {
        return (
            <div>

                Show:
                {" "}
                <a  onClick={this._All("SHOW_ALL")}>
                    All
                </a>
                {", "}
                <a  onClick={this._All("SHOW_ACTIVE")}>
                    Active
                </a>
                {", "}
                <a  onClick={this._All("SHOW_COMPLETED")}>
                    Completed
                </a>
            </div>
        )
    }
}
function mapStateToProps (state){
     console.log(state)
    return{
         asd:state
    }


};
function mapDispatchToProps(dispatch) {
    return bindActionCreators({

        all:setVisibilityFilter
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Foot);
