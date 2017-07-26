
import React from 'react'
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import Home from "./home"
import Page1 from "./pag1"
import Page2 from "./pag2"
import { Button } from 'antd-mobile';
console.log(Button);
const Basic = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/page2">Page2</Link></li>
                <Button>sddfd</Button>
            </ul>
            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/page1" component={Page1}/>
            <Route path="/page2" component={Page2}/>
        </div>
    </Router>
);

export default Basic;
