import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/misc/Navbar';

const Router = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/login'>Login</Route>
                <Route path='/register'>Register</Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;