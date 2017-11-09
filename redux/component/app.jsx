import React, {PureComponent} from 'react';

import AddTodo from "../containers/addtodo"
import TodoList from "../containers/todolist"
import Footer from "../containers/foot"
 export  default class AppTodo extends PureComponent {
    constructor(props) {
        super(props)
        console.log(this.props)
    };

    componentDidMount = () => {
    };

    render() {
        return (
            <div>
                <AddTodo/>
                <TodoList/>
                {/*<Footer/>*/}
            </div>
        )
    }
}








