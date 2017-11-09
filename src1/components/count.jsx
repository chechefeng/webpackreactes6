/**
 * Created by lpw on 2017/4/24.
 */
import React ,{Component}from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Decrease,Increase} from "../action/index";

class Counter extends Component{

    render(){
        console.log("this.props",this.props)
        return(
            <div>
                <input type="button" value="增加" onClick={this.props.Increase}/>
                <input type="button" value="减少" onClick={this.props.Decrease}/>
                {this.props.value}
            </div>
        )
    }
}


function mapStateToProps(state) {
    console.log("state",state)
        return state


}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        Increase:Increase,
        Decrease:Decrease,

    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)



