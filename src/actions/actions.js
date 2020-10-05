import axios from 'axios';

export const getGames = () => {
    return(async (dispatch) => {
        try{
            const games = await axios.get('/api/games');
            dispatch({
                type:'set_games',
                data:games.data
            })
        }
        catch(e){
            window.location.replace('/error');
        }
    })
}

export const getScreenshots = (id) => {
    return(async (dispatch) => {
        try{
            const screenshots = await axios.get(`/api/screenshots/${id}`);
            dispatch({
                type:'set_screenshots',
                data:screenshots.data
            })
        }
        catch(e){
            window.location.replace('/error');
        }
    })
}