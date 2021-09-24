import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from './pages/Home';
import SignUp from "./pages/SignUp";
import { GlobalStyles } from "./styles/GlobalStyles";
import 'react-toastify/dist/ReactToastify.css'
import SignIn from "./pages/SignIn";

const Routes = () => {
    return (
        <Router>
            <ToastContainer newestOnTop={true} theme="light" />
            <GlobalStyles />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/signup">
                    <SignUp/>
                </Route>
                <Route path="/signin">
                    <SignIn/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes 