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
import { GlobalStateProvider } from "./Context/GlobalContext";
import ProtectedRoute from "./components/ProtectedRoute";

const Routes = () => {
    return (
        <GlobalStateProvider>
            <Router>
                <ToastContainer newestOnTop={true} theme="light" />
                <GlobalStyles />
                <Switch>
                    <ProtectedRoute exact path="/">
                        <Home />
                    </ProtectedRoute>
                    <Route path="/signup">
                        <SignUp/>
                    </Route>
                    <Route path="/signin">
                        <SignIn/>
                    </Route>
                </Switch>
            </Router>
        </GlobalStateProvider>
    )
}

export default Routes 