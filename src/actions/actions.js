import axios from 'axios';

export const getGames = () => {
    return(async (dispatch) => {
        const games = await axios.get('/games');
        console.log(games.data);
        dispatch({
            type:'set_games',
            data:games.data
        })
    })
}