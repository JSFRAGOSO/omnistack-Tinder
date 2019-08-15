import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import LikedDevs from './pages/LikedDevs';

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/dev/:id" exact component={Main} />
            <Route path="/like/:id" exact component={LikedDevs} />
        </BrowserRouter>
    );
}