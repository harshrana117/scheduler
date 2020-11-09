

import React from 'react';
import styled from 'styled-components';
import './App.css'
import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from './pages/index';
import Attendance from './pages/Attendance';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ErrorPage from './components/404';
import Signup from './components/Signup';
import { LoginFormElement } from './components/LoginForm';


const App = () => {
    return (
        <HashRouter>
            <ContentWrapper>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/attendance" exact component={Attendance} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/login" exact component={LoginFormElement} />
                    {/* <Route path="/schedule" exact component={schedule}/> */}
                    <Route path="*" component={ErrorPage} />
                </Switch>
            </ContentWrapper>
            <Footer />
        </HashRouter>
    )
}

export default App;






const ContentWrapper = styled.div`
    min-height:90vh;
`;