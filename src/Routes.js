import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home'
import NotFound from "./containers/NotFound";
//import Login from "./containers/Login";

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            { /* Finally, catch all unmatched routes */ }
            <Route component={NotFound} />
        </Switch>
    );
}