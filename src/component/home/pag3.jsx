import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


class ModalSwitch extends React.Component {
    render() {

        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Homes}/>
                    <Route path='/img/:id' component={ImageView}/>
                </Switch>
            </div>
        )
    }
}

const Homes = () => (
    <div>
        <ul>
            <li><Link to='/img/2'>Tomato</Link></li>
            <li><Link to='/img/4'>Crimson</Link></li>
        </ul>
    </div>
)
const ImageView = ({ match }) => {
    return (
        <div className="asdsdd">
            <div style={{width: '100%', height: 400,
                background: "red"
            }}></div>
        </div>
    )
}


const ModalGallery = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Homes}/>
            <Route path='/img/:id' component={ImageView}/>
        </Switch>

    </Router>
)

export default ModalGallery