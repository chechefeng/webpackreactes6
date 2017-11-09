import React, {PureComponent} from 'react';
import {bindActionCreators} from "redux";

import {toggleTodo} from "../action"
import {connect} from "react-redux";
// import TodoList from "../component/todolist";


class TodoList extends PureComponent {
    constructor(props) {
        super(props)
         console.log(this.props )
    };

    componentDidMount = () => {
    };
    _listClick=(res)=>{
        return ()=>{
            this.props.addtodo2(res)

        }
    }
    render() {
        console.log(this.props  )

        return (
            <div>
                <ul>
                    {
                        this.props.todos.map((item,index)=>{
                            return <li key={index}
                                       onClick={this._listClick(index)}
                                       style={{textDecoration: item.completed ? 'line-through' : 'none'}}
                            >
                                {item.text}
                            </li>
                        })
                    }

                </ul>

            </div>
        )
    }
}
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

function mapStateToProps (state){
    console.log(state)
    return{
        // todos:state.values,
        todos:getVisibleTodos(state.values,state.values1)
    }
};
function mapDispatchToProps(dispatch) {
    return bindActionCreators({

        addtodo2:toggleTodo

    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
