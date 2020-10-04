const mainReducer = (state,action) => {
    switch(action.type){
        case 'set_games':
            return {...state,games:action.data}
        default:
            return state;
    }
}

export default mainReducer;