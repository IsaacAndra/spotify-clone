export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remover o a string do token depois que terminar de desenvolver...
    //token: 'BQC1WKxh3_Yw9-1cnTB-vXqfrzTghGHJunZ08Z_5hosHnOMESlkEO8ikWTRmFgunsVgFM2CbzAPlmFpetZqyeLQJ8NqZ_lNGISDTopT14Z5YZL8SViPCewCfEoE1AkPbZH8rwcR9_FNQqgW0aXx-xA7gYAUuLZT5N_QJhJKhOo0wsEiCvSGviZ7XESEg_-FAM_G0nWc',
};

const reducer = (state, action) => {
    console.log(action.discover_weekly);
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token
                };
            
            case 'SET_PLAYLISTS':
                return {
                    ...state,
                    playlists: action.playlists,
                };

            case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,
                    discover_weekly: action.discover_weekly,
                }
                
            default:
                return state;
    }

}

export default reducer;