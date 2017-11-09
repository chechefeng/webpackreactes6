import React, {PureComponent} from 'react';
import {bindActionCreators} from "redux";

import {addTodo} from "../action"
import {connect} from "react-redux"


 class AppTodo extends PureComponent {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state={
            iptValue:""
        }

    };

    componentDidMount = () => {
    };

    _fgh=()=>{

        // this.getRequrest1(URL).then(function(json) {
        //     console.log('Contents: ' + JSON.stringify(json));
        //
        //
        // }, function(error) {
        //     console.error('出错了', error);
        // })

        this.props.addtodo1(this.state.iptValue)
        this.setState({
            iptValue:""

        })
    };
    getRequrest1 = (URL) => {

        var promise = new Promise(function (resolve, reject) {
            var client = new XMLHttpRequest();
            client.open("GET", URL);
            client.onreadystatechange = handler;
            client.responseType = "jsonp";
            client.setRequestHeader("Accept", "application/json");
            client.send();

            function handler() {
                if (this.readyState !== 4) {
                    return;
                }
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(new Error(this.statusText));
                }
            };
        });

        return promise;

    };
    _onchange=(event)=>{
        this.setState({
            iptValue:event.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.iptValue} onChange={this._onchange}/>
                <button onClick={this._fgh}>addtodo</button>
            </div>
        )
    }
}



const mapStateToProps = state => ({
    state
});
//
// const mapDispatchToProps =(dispatch)=> ({
//     addtodo1: () => {
//
//         dispatch(addTodo())
//     }
// });



// const mapDispatchToProps = (dispatch, ownProps) => ({
//     addtodo1: () => {
//         dispatch(setVisibilityFilter(ownProps.filter))
//     }
// })
// function mapStateToProps(state) {
//     console.log("state",state)
//     return state
//
//
// }
//

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

        addtodo1:addTodo

    },dispatch)
}

// export default connect(mapStateToProps,(dispatch) => ({addtodo1:(args)=>dispatch(addTodo(args))}) )(AppTodo);这个也可以
export default connect(mapStateToProps, mapDispatchToProps)(AppTodo);


// export default connect(state => ({
//     loading:state.FYDBackMoney.loading
// }), (dispatch) => ({
//     earlyQuery: (args, cb) => dispatch(earlyQuery(args, cb)),
// }))(BackEarly);




