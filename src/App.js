

import React from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Switch,HashRouter} from 'react-router-dom';
import Home from './pages/index';
import Attendance from './pages/Attendance';
import Navigation from './components/Navigation';
import ErrorPage from './components/404';



const App = () => {
    return (
        <HashRouter>
            <Navigation/>
            <Switch>
                <Route  path="/" exact component={Home}/>
                <Route path="/attendance" exact component={Attendance}/>
                <Route path="*" component={ErrorPage}/>
            </Switch>
        </HashRouter>
    )
}

export default App;