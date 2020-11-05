import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/index';
import Attendance from './pages/Attendance';
import Navigation from './components/Navigation';
import ErrorPage from './components/404';



const App = () => {
    return (
        <Router>
            <Navigation/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/attendance" component={Attendance}/>
                <Route component={ErrorPage}/>
            </Switch>
        </Router>
    )
}





ReactDOM.render(<App/>,document.getElementById('root'));

