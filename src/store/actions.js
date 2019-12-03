const type = require('./types');
const axios = require('axios');
const nSQL = require('@nano-sql/core').nSQL;

nSQL().useDatabase('animeflydb');


export const actions = {
  GET_LATEST_ANIME_ADDED({commit}){
    axios.get('https://animeflv.chrismichael.now.sh/api/v1/LatestAnimeAdded')
      .then(res =>{
        nSQL('latestAnimeAdded')
        .query('upsert' , res.data.animes)
        .exec()
        .then(doc =>{
          commit(type.LATEST_ANIMED_ADDED , doc)
          setTimeout(() => {
            commit(type.IS_LOADING , false)
          }, 1000);
        }).catch((err) =>{
          //console.log(err)
        })
      });
  },
  GET_LATEST_CHAPTERS_ADDED({commit}){
    axios.get('https://animeflv.chrismichael.now.sh/api/v1/LatestEpisodesAdded')
      .then(res =>{
        nSQL('latestEpisodesAdded')
        .query('upsert' , res.data.episodes)
        .exec()
        .then(doc =>{
          commit(type.LATEST_CHAPTERS_ADDED , doc)
          setTimeout(() => {
            commit(type.IS_LOADING , false)
          }, 1000);
        }).catch((err) =>{
          //console.log(err)
        })
      });
  },
  GET_MOVIES({commit}){
    axios.get('https://animeflv.chrismichael.now.sh/api/v1/Movies/default/1')
      .then(res =>{
        nSQL('movies')
        .query('upsert' , res.data.movies)
        .exec()
        .then(doc =>{
          commit(type.SET_MOVIES , doc)
          setTimeout(() => {
            commit(type.IS_LOADING , false)
          }, 1000);
        }).catch((err) =>{
          //console.log(err)
        })
      });
  },
  GET_ALL_MOVIES({commit} , info){
    axios.get(`https://animeflv.chrismichael.now.sh/api/v1/Movies/${info.sortBy}/${info.page}`)
      .then(res =>{
        nSQL('movies')
        .query('upsert' , res.data.movies)
        .exec()
        .then(doc =>{
          commit(type.SET_ALL_MOVIES , doc)
          setTimeout(() => {
            commit(type.IS_LOADING , false)
          }, 1000);
        }).catch((err) =>{
          //console.log(err)
        })
      });
  },
  GET_ALL_SPECIALS({commit} , info){
    axios.get(`https://animeflv.chrismichael.now.sh/api/v1/Special/${info.sortBy}/${info.page}`)
      .then(res =>{
        nSQL('special')
        .query('upsert' , res.data.special)
        .exec()
        .then(doc =>{
          commit(type.SET_SPECIAL , doc)
          setTimeout(() => {
            commit(type.IS_LOADING , false)
          }, 1000);
        }).catch((err) =>{
          //console.log(err)
        })
      });
  },
  GET_ALL_OVAS({commit} , info){
    axios.get(`https://animeflv.chrismichael.now.sh/api/v1/Ova/${info.sortBy}/${info.page}`)
      .then(res =>{
        nSQL('ovas')
        .query('upsert' , res.data.ova)
        .exec()
        .then(doc =>{
          commit(type.SET_OVAS , doc)
          setTimeout(() => {
            commit(type.IS_LOADING , false)
          }, 1000);
        }).catch((err) =>{
          //console.log(err)
        })
      });
  },
  GET_TV({commit} , info){
    axios.get(`https://animeflv.chrismichael.now.sh/api/v1/TV/${info.sortBy}/${info.page}`)
      .then(res =>{
        nSQL('television')
        .query('upsert' , res.data.tv)
        .exec()
        .then(doc =>{
          commit(type.SET_TV , doc)
          setTimeout(() => {
            commit(type.IS_LOADING , false)
          }, 1000);
        }).catch((err) =>{
          //console.log(err)
        })
      });
  },
  GET_GENRES({commit} , info){
    axios.get(`https://animeflv.chrismichael.now.sh/api/v1/Genres/${info.genre}/${info.sortBy}/${info.page}`)
      .then(res =>{
        nSQL('genres')
        .query('upsert' , res.data.animes)
        .exec()
        .then(doc =>{
          commit(type.SET_GENRES , doc)
          setTimeout(() => {
            commit(type.IS_LOADING , false)
          }, 1000);
        }).catch((err) =>{
          //console.log(err)
        })
      });
  },
  GET_EMISSIONS({commit}){
    axios.get(`https://animeflv.chrismichael.now.sh/api/v1/AnimeByState/1/updated/1`)
      .then(res =>{
        nSQL('emissions')
        .query('upsert' , res.data.animes)
        .exec()
        .then(doc =>{
          commit(type.SET_IN_EMISSION , doc)
          setTimeout(() => {
            commit(type.IS_LOADING , false)
          }, 1000);
        }).catch((err) =>{
          //console.log(err)
        })
      });
  },
  SEARCH_ANIME({commit} , query){
    axios.get(`https://animeflv.chrismichael.now.sh/api/v1/Search/${query}`)
      .then(res =>{
        nSQL('searchAnime')
        .query('upsert' , res.data.search)
        .exec()
        .then(doc =>{
          commit(type.SET_SEARCH_ANIME , doc)
          setTimeout(() => {
            commit(type.IS_LOADING , false)
          }, 1000);
        }).catch((err) =>{
          //console.log(err)
        })
      });
  },
  GET_VIDEO_ANIME({commit} , id){
    axios.get(`https://animeflv.chrismichael.now.sh/api/v1/GetAnimeServers/${id}`)
      .then(doc =>{
        commit(type.SET_ANIME_VIDEO , doc.data.servers);
        setTimeout(() => {
          commit(type.IS_LOADING , false)
        }, 1000);
      }).catch((err) =>{
        //console.log(err)
      })
  }
};