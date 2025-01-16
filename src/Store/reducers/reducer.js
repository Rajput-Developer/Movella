const initialState = {
  likeArray: [],
};
const movieState = {
  MovieDetailArray: [],
};

const bookmarkState = {
  bookmarkArray: [],
};

const reducer = (state = initialState, action) => {
  // Check if the movie is already exist or not
  let exist = state.likeArray.some(
    (movie) => movie.imdbID === action.payload.imdbID
  );
  // If action is like movie by user

  switch (action.type) {
    case "like":
      if (exist) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          likeArray: [...state.likeArray, { ...action.payload, like: true }],
        };
      }
    case "dislike":
      const findMovie_index = state.likeArray.findIndex(
        (m) => m.imdbID == action.payload.imdbID
      );
      if (findMovie_index >= 0) {
        state.likeArray.splice(findMovie_index, 1);
        return {
          ...state,
          likeArray: [...state.likeArray],
        };
      } else {
        return initialState;
      }
    default:
      return state;
  }
};

// bookmarkReducer
const bookmarkReducer = (state = bookmarkState, action) => {
  // If action is bookmark or save
  switch (action.type) {
    case "bookmarked":
      const exist = state.bookmarkArray.some(
        (movie) => movie.imdbID === action.payload.imdbID
      );
      if (exist) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          bookmarkArray: [
            ...state.bookmarkArray,
            { ...action.payload, bookmark: true },
          ],
        };
      }
    case "unSave":
      const findMovie_index = state.bookmarkArray.findIndex(
        (m) => m.imdbID == action.payload.imdbID
      );
      if (findMovie_index >= 0) {
        state.bookmarkArray.splice(findMovie_index, 1);
        return {
          ...state,
          bookmarkArray: [...state.bookmarkArray],
        };
      } else {
        return bookmarkState;
      }
    // If no action is performed return the initialState
    default:
      return state;
  }
};

// To see the movie detail
const MovieDetailReducer = (state = movieState, action) => {
  // see the action is movie detail or not
  switch (action.type) {
    case "detail":
      return {
        ...state,
        MovieDetailArray: [action.payload],
      };
    default:
      return state;
  }
};

export { reducer, bookmarkReducer, MovieDetailReducer };
