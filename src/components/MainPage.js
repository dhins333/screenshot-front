import React,{ useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getGames } from '../actions/actions';
import Card from './Card';

const MainPage = () => {

    const games = useSelector((state) => {
        return state.games;
    })
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGames());
    },[dispatch])


    return(
        <div className = 'main-page'>
            {games.length === 0 ? <div className = 'loader'>Loading...</div> : <Card />}
        </div>
    )
}

export default MainPage;