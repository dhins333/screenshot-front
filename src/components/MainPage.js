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

    const renderCard = () => {
        return(
            <div className = 'card-container'>
                {games.map((game,index) => {
                    return(
                        <Card src = {game.thumbnail} name = {game.name} key = {index} id = {game._id}/>
                    )
                })}
            </div>
        )
    }

    return(
        <div className = 'main-page'>
            {games.length === 0 ? <div className = 'loader'>Loading...</div> : renderCard()}
        </div>
    )
}

export default MainPage;