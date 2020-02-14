<template>
  <div class="nk-main">
    <img class="nk-page-background-top" src="https://html.nkdev.info/goodgames/assets/images/bg-top-5.png" alt="">
    <img class="nk-page-background-bottom" src="https://html.nkdev.info/goodgames/assets/images/bg-bottom.png" alt="">

    <!-- START: Breadcrumbs -->
    <div class="nk-gap-1"></div>
    <div class="container">
      <ul class="nk-breadcrumbs">
        <li><span><i class="fab fa-phoenix-squadron"></i> {{title}}</span></li>
      </ul>
    </div>
    <div class="nk-gap-1"></div>
    <!-- END: Breadcrumbs -->
    <div class="container">
      <div class="row vertical-gap">
        <div class="col-lg-8">
          <!-- START: Post -->
          <div class="nk-blog-post nk-blog-post-single">
            <!-- START: Post Text -->
            <div class="nk-post-text mt-0">
              <div class="nk-post-img">
                <iframe 
                  height="500px;"
                  width="100%"
                  style="background-color:black;" 
                  :src="servers.code"
                  frameborder="0"
                  allowfullscreen
                  >
                </iframe>
              </div>
              <div class="nk-gap-1"></div>
              <div class="nk-post-by">
                <img src="https://html.nkdev.info/goodgames/assets/images/avatar-2.jpg" alt="anime" class="rounded-circle" width="35"> Por <a href="#">Animeflv</a>                        
                <div class="nk-post-categories">
                  <span class="bg-main-0">
                    <select class="form-control" v-model="episode_selected">
                      <option disabled value="">Episodios</option>
                      <option v-for="(eps , index) in anime[0][0].episodes.slice(1)" :key="index">
                        {{eps.episode}}
                      </option>
                    </select>
                  </span>
                  <span class="bg-main-0">
                    <select class="form-control" v-model="servers">
                      <option disabled value="">Servidores</option>
                      <option v-for="(servers, index) in video" :value="servers" :key="index">
                        {{servers.title}}
                      </option>
                    </select>
                  </span>
                </div>
              </div>
              <div class="nk-gap"></div>
              <p></p>
              <div class="nk-gap"></div>
              <blockquote class="nk-blockquote">
                <div class="nk-blockquote-author"><span>SINOPSIS</span></div>
              </blockquote>
              <div class="nk-gap"></div>
              <img class="float-left mt-0 nk-post-img" height="200em" :src="`data:image/png;base64, ${anime[0][0].poster}`" :alt="anime[0][0].title">
              <h3 class="h4">{{anime[0][0].title}}</h3>
              <p>{{anime[0][0].synopsis.substr(12)}}</p>
              <div class="nk-gap"></div>
            </div>
            
          </div>
          <!-- END: Post -->
        </div>
        <div class="col-lg-4">
          <aside class="nk-sidebar nk-sidebar-right nk-sidebar-sticky">
           
            <div class="nk-widget nk-widget-highlighted">
              <h4 class="nk-widget-title"><span><span class="text-main-1">Capítulos</span> destacadas</span></h4>
              <div class="nk-widget-content">
                  <div 
                  class="nk-widget-post" 
                  v-for="anime in latestEpisodesAdded.slice([Math.floor(Math.random()*latestEpisodesAdded.length)]).slice(0 , 3)" 
                  :key="anime.id"
                  >
                  <a class="nk-post-image">
                  <img :src="`data:image/png;base64, ${anime.poster}`" :alt="anime.title">
                  </a>
                  <h3 class="nk-post-title"><a>{{anime.title}}</a></h3>
                  <div class="nk-gap-1"></div>
                  <router-link 
                    :to="{name: 'EpisodeVideoSection' , params:{id: anime.id , title: anime.title}}"
                    class="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                    >
                    ver
                  </router-link>
                </div>
             
          
              </div>
            </div>
          </aside>
          <!-- END: Sidebar -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {value , watch , onCreated} from 'vue-function-api';
  import {useState , useStore , useRouter} from '@u3u/vue-hooks';
  const nSQL = require('@nano-sql/core').nSQL;
  
  
  export default {
    name: 'MovieVideoSection',
    setup(){
      const store = useStore();
      const {route} = useRouter();

      const anime = value([]);
      const params = {
        id: value(route.value.params.id),
        title: value(route.value.params.title)
      };
  
      nSQL().useDatabase('animeflydb');
      nSQL('movies');
      nSQL()
        .query("select")
        .where(["id" , "=" , params.id.value])
        .exec()
        .then((rows) =>{
          anime.value.push(rows)
        });

      const episode_selected = value('');
      const servers = value('');

      const state = {
        ...useState([
          'video',
          'latestAnimeAdded',
          'latestEpisodesAdded'
        ]),
        title: value(params.title.value),
        anime: value(anime.value),
      };

      watch(() =>
        episode_selected.value , (value) =>{
          episode_selected.value = value;
          const eps = episode_selected.value;
          const data = state.anime.value;
          const allEpsVisible = data[0].map(x => x.episodes.slice(1))
          const ids = allEpsVisible.map(res => res.filter(doc => doc.episode === Number(eps)))
          const id = ids.map(x => x[0].id)[0];
          store.value.dispatch('GET_VIDEO_ANIME' , id);
        }
      );

      onCreated(() =>{
        store.value.dispatch('GET_LATEST_ANIME_ADDED'),
        store.value.dispatch('GET_LATEST_CHAPTERS_ADDED')
      });
  
      return{
        ...state,
        episode_selected,
        servers
      }
    }
  };
</script>