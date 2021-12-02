import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login"
import Books from "./pages/Books"
import AddBook from "./pages/AddBook";

export default function Rota() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/books" exact component={Books} />
                <Route path="/books/new" exact component={AddBook} />
            </Switch>
        </BrowserRouter>
    );
}