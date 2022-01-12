import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import App from './Home/App';
import Register from './Register/Register';

export default function Index() {
    return (
        <>
        <Router>
            <Navbar/>
            <Switch>
                <App path='/' exact={true} component ={App}/>
                <Register path='/register' exact={true} component ={Register}/>
            </Switch>
            <Footer/>
        </Router>
        </>
    )
}
