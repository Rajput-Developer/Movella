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

export const bookmarkAction = (movie) => {
    return (dispatch) => {
        dispatch({
            type: 'bookmarked',
            payload: movie
        })
    }
}

export const dislikeAction = (movie)=>{
    return (dispatch)=>{
        dispatch({
            type:'dislike',
            payload:movie,
        })
    }
}

export const unSave = (movie)=>{
    return (dispatch)=>{
        dispatch({
            type:'unSave',
            payload:movie
        })
    }
}