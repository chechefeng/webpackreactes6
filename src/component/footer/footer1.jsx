
import React, {PureComponent} from 'react';
import {BrowserRouter , Route, Link, Switch,NavLink} from "react-router-dom"
import "./footer.less"

const Links = () => (
    <nav>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to={{pathname: '/about'}}>About</NavLink>
        <NavLink
            activeClassName="active"
            to="/contact">Contact</NavLink>
    </nav>
)

export default class App  extends PureComponent {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Links />

                    <Route exact path="/" render={() => <h1>Home</h1>} />
                    <Route path="/about" render={() => <h1>About</h1>} />
                    <Route path="/contact" render={() => <h1>Contact</h1>} />
                </div>
            </BrowserRouter>
        )
    }
}


//render(<App/>, document.getElementById('root'))