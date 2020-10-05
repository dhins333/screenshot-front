import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Header from './components/Header';
import ErrorPage from './components/ErrorPage';
import ScreenshotsPage from './components/ScreenshotsPage';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' component = {MainPage} exact = {true}></Route>
                <Route path='/games/:id' component = {ScreenshotsPage} exact = {true}></Route>
                <Route path='/error' component = {ErrorPage} exact = {true}></Route>
                <Route path = '*' component = {ErrorPage}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;