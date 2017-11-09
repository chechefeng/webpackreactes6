// import React, {PureComponent} from 'react';
// import {BrowserRouter , Route, Link, Switch,NavLink} from "react-router-dom"
// import "./footer.less"
// const Links = () => (
//     <nav>
//         <NavLink exact activeClassName="active" to="/">Home</NavLink>
//         <NavLink activeClassName="active" to={{pathname: '/page1'}}>About</NavLink>
//         <NavLink
//             activeClassName="active"
//             to="/page2">Contact</NavLink>
//     </nav>
// )
// export default class Footer extends PureComponent {
//     constructor(props) {
//         super(props)
//
//     };
//
//     componentDidMount = () => {
//     };
//
//     render() {
//         return (
//                 <div>
//                     <Links></Links>
//                     <Route path="/" render={() => <Home/>} />
//                     <Route path="/page1" render={() => <Page1/>} />
//                     <Route path="/page2" render={() => <Page2/>} />
//                 </div>
//         )
//     }
// }



import React, {PureComponent} from 'react';
import {BrowserRouter , Route, Link, Switch,NavLink} from "react-router-dom"
import Icon from "../../../static/icon/icon"
import "./footer.less"
import Home from "../home/home"
import Page1 from "../home/pag1"
import Page2 from "../home/pag2"

const Links = () => (
    <nav>
        <ul className="foot_wraper">
            <li>
                <NavLink exact activeClassName="active"  to="/">
                    <p>
                        <Icon type="shouye"></Icon>
                    </p>
                    <p>
                        首页
                    </p>
                </NavLink>
            </li>
            <li>
                <NavLink  activeClassName="active"  to="/page1">
                    <p>
                        <Icon type="xinpin"></Icon>
                    </p>
                    <p>
                        新品
                    </p>
                </NavLink>
            </li>
            <li>
                <NavLink  activeClassName="active"  to="/page2">
                    <p>
                        <Icon type="haitao"></Icon>
                    </p>
                    <p>
                        海淘
                    </p>
                </NavLink>
            </li>
            <li>
                <NavLink  activeClassName="active"  to="/page2">
                    <p>
                        <Icon type="sousuo"></Icon>
                    </p>
                    <p>
                        搜索
                    </p>
                </NavLink>
            </li>
            <li>
                <NavLink  activeClassName="active"  to="/page1">
                    <p>
                        <Icon type="gerenzhongxin"></Icon>
                    </p>
                    <p>
                        个人中心
                    </p>
                </NavLink>
            </li>
        </ul>
    </nav>
)

export default class App  extends PureComponent {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Links />

                    {/*<Route exact path="/" render={() => <Home></Home>} />*/}
                    <Route exact path="/" component={Home} />
                    <Route path="/page1" render={() => <Page1/>} />
                    <Route path="/page2" render={() => <Page2/>} />
                </div>
            </BrowserRouter>
        )
    }
}


//render(<App/>, document.getElementById('root'))