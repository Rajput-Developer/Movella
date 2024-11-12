const initialState = {
    likeArray: [],
}
const movieState = {
    MovieDetailArray: []
}
const catName = {
    name: ''
}
const reducer = (state = initialState, action) => {

    if (action.type == 'like') {
        // Check if the movie is already exist or not 
        const exist = state.likeArray.some((movie) => movie.imdbID === action.payload.imdbID);
        if (exist) {
            return {
                ...state,
            }
        } else {
            return {
                ...state,
                likeArray: [...state.likeArray, { ...action.payload, like: true }],
            }

        }
    } else {
        return state;
    }
}

const MovieDetailReducer = (state = movieState, action) => {
    if (action.type == 'detail') {
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

const Mname = (state = catName, action) => {
    if (action.type == 'name') {
        return {
            ...state,
            name: action.payload,
        }
    } else {
        return state;
    }
}

export { reducer, MovieDetailReducer, Mname };