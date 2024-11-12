export const MovieDetail = (movie) => {
    return (dispatch) => {
        dispatch({
            type: 'detail',
            payload: movie
        })
    }
}

export const addLike = (like) => {
    return (dispatch) => {
        dispatch({
            type: 'like',
            payload: like
        })
    }
}