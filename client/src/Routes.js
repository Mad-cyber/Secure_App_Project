import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Create from "./Create";


//creating browser routes from react dom and client folder https://v5.reactrouter.com/web/example/basic
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/create" exact component={Create} />


            </Switch>

        </BrowserRouter>

    );

};

export default Routes;