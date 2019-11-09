const nSQL = require('@nano-sql/core').nSQL;

nSQL().createDatabase({
  id: 'animeflydb',
  model: 'PERM',
  tables: [
    {
      name: 'latestAnimeAdded',
      model:{
        "title:string": {},
        "poster:string": {},
        "synopsis:string": {},
        "debut:string": {},
        "type:string": {},
        "rating:string": {},
        "episodes:array": {
          "episode:number": {},
          "id:string": {},
          "nextEpisodeDate:string": {}
        },
      }
    },
    {
      name: 'latestEpisodesAdded',
      model:{
        "title:string": {},
        "poster:string": {},
        "episode:number": {},
        "servers:array":{
          "server:string": {},
          "type:string": {},
          "allow_mobile:boolean": {},
          "code:string": {}
        }
      }
    },
    {
      name: 'movies',
      model:{
        "title:string": {},
        "poster:string": {},
        "synopsis:string": {},
        "debut:string": {},
        "type:string": {},
        "rating:string": {},
        "episodes:array": {
          "episode:number": {},
          "id:string": {},
          "nextEpisodeDate:string": {}
        },
      }
    },
    {
      name: 'genres',
      model:{
        "title:string": {},
        "poster:string": {},
        "synopsis:string": {},
        "debut:string": {},
        "type:string": {},
        "rating:string": {},
        "episodes:array": {
          "episode:number": {},
          "id:string": {},
          "nextEpisodeDate:string": {}
        },
      }
    },
    {
      name: 'special',
      model:{
        "title:string": {},
        "poster:string": {},
        "synopsis:string": {},
        "debut:string": {},
        "type:string": {},
        "rating:string": {},
        "episodes:array": {
          "episode:number": {},
          "id:string": {},
          "nextEpisodeDate:string": {}
        },
      }
    },
    {
      name: 'ovas',
      model:{
        "title:string": {},
        "poster:string": {},
        "synopsis:string": {},
        "debut:string": {},
        "type:string": {},
        "rating:string": {},
        "episodes:array": {
          "episode:number": {},
          "id:string": {},
          "nextEpisodeDate:string": {}
        },
      }
    },
    {
      name: 'television',
      model:{
        "title:string": {},
        "poster:string": {},
        "synopsis:string": {},
        "debut:string": {},
        "type:string": {},
        "rating:string": {},
        "episodes:array": {
          "episode:number": {},
          "id:string": {},
          "nextEpisodeDate:string": {}
        },
      }
    },
    {
      name: 'searchAnime',
      model:{
        "title:string": {},
        "poster:string": {},
        "synopsis:string": {},
        "debut:string": {},
        "type:string": {},
        "rating:string": {},
        "episodes:array": {
          "episode:number": {},
          "id:string": {},
          "nextEpisodeDate:string": {}
        },
      }
    },
    {
      name: 'emissions',
      model:{
        "title:string": {},
        "poster:string": {},
        "synopsis:string": {},
        "debut:string": {},
        "type:string": {},
        "rating:string": {},
        "episodes:array": {
          "episode:number": {},
          "id:string": {},
          "nextEpisodeDate:string": {}
        },
      }
    },
  ],
  version: 1,
  onVersionUpdate: (prevVersion) =>{
    return new Promise((resolve, reject) =>{
      switch(prevVersion){
        case 1:
          resolve(2);
          break;
        case 2:
          resolve(3);
          break;
      }
    })
  }
});
