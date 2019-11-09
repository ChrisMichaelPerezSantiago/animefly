const type = require('./types');

export const mutations = {
  [type.LATEST_ANIMED_ADDED](state , payload){
    state.latestAnimeAdded = payload;
  },
  [type.LATEST_CHAPTERS_ADDED](state , payload){
    state.latestEpisodesAdded = payload;
  },
  [type.SET_MOVIES](state , payload){
    state.movies = payload;
  },
  [type.SET_ALL_MOVIES](state , payload){
    state.allMovies = payload;
  },
  [type.SET_GENRES](state , payload){
    state.genreList = payload;
  },
  [type.SET_SPECIAL](state , payload){
    state.specialList = payload;
  },
  [type.SET_OVAS](state , payload){
    state.ovaList = payload;
  },
  [type.SET_TV](state , payload){
    state.tvList = payload;
  },
  [type.SET_SEARCH_ANIME](state , payload){
    state.searchList = payload;
  },
  [type.SET_IN_EMISSION](state , payload){
    state.inEmissionList = payload;
  },
  [type.SET_ANIME_VIDEO](state , payload){
    state.video = payload;
  },
  [type.IS_LOADING](state , payload){
    state.isLoading = payload;
  }
};