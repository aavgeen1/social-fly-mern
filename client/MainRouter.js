import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import SignupIn from './components/SignupIn';
import About from './components/about';

class MainRouter extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact strict component={SignupIn}/>
                    <Route path="/about" exact strict component={About}/>
                </Switch>
            </div>
        );
    }
}

export default MainRouter;