import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Header from './components/Header';
import ErrorPage from './components/ErrorPage';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' component = {MainPage} exact = {true}></Route>
                <Route path = '*' component = {ErrorPage}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;