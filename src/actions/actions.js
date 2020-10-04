import axios from 'axios';

export const getGames = () => {
    return(async (dispatch) => {
        const games = await axios.get('/games');
        dispatch({
            type:'set_games',
            data:games.data
        })
    })
}