import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom';
import './App.css'
import ErrorPage from './pages/errorPage';
import LandingPage from './pages/LandingPage';
import AttendancePage from './pages/AttendancePage';
import {BottomNav, TopBar} from './components/NavigationComponent';
import SignupPage from './pages/SignupPage'


const App = () => {
  return (
    <HashRouter>
      <TopBar/>
      <BottomNav />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/attendance" exact component={AttendancePage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </HashRouter>
  )
}

export default App


