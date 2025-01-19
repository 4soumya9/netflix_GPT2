import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    upcomingMovies: null,
    topRatedMovies: null,
    overviewTrailer: null,
    cast: null,
   
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addOverviewTrailer: (state, action) => {
      state.overviewTrailer = action.payload;
    },

    addMovieCast: (state, action) => {
      state.cast = action.payload;
    },
    
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
  addOverviewTrailer,
  addMovieCast,
  
} = movieSlice.actions;
export default movieSlice.reducer;
