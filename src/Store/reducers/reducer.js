const initialState = {
    likeArray: [],
}
const movieState = {
    MovieDetailArray: []
}
const reducer = (state = initialState, action) => {

    if (action.type == 'like') {
        console.log('like state is =>', state);

        // Check if the movie is already exist or not 
        const exist = state.likeArray.some((movie) => movie.imdbID === action.payload.imdbID);
        if (exist) {
            return {
                ...state,
            }
        } else {
            // console.log('likeArray_Value ',state.likeArray({...action.payload,like:true}) , '<><><><><><><><><>')
            return {
                ...state,
                likeArray: [...state.likeArray, {...action.payload,like:true}],
            }

        }
    } else {
        return state;
    }
}

const MovieDetailReducer = (state = movieState, action) => {
    if (action.type == 'detail') {
        console.log('Detail State => ', state)
        const exist = state.MovieDetailArray.some((movie) => movie.imdbID === action.payload.imdbID);
        if (exist) {
            return state;
        } else {
            return {
                ...state,
                MovieDetailArray: [action.payload]
            }
        }
    } else {
        return state
    };
}

export { reducer, MovieDetailReducer };