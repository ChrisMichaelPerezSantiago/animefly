const nSQL = require('@nano-sql/core').nSQL;

nSQL().createDatabase({
  id: 'animeflydb',
  mode: 'PERM',
  tables: [
    {
      name: 'latestAnimeAdded',
      model:{
        "id:int": {pk: true, ai: true},
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
        "id:int": {pk: true, ai: true},
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
        "id:int": {pk: true, ai: true},
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
        "id:int": {pk: true, ai: true},
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
        "id:int": {pk: true, ai: true},
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
        "id:int": {pk: true, ai: true},
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
        "id:int": {pk: true, ai: true},
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
        "id:int": {pk: true, ai: true},
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
        "id:int": {pk: true, ai: true},
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
