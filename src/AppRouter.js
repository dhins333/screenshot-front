import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import MainPage from './components/MainPage';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component = {MainPage}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;