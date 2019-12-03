<template>
  <div>
    <!-- END: Navbar Mobile -->
    <div class="nk-main">
      <div class="nk-gap-2"></div>
      <div class="container">
        <div class="row vertical-gap">
          <div class="col-lg-8">
            <!-- END: Latest Matches -->
            <!-- START: Tabbed News  -->
            <div class="nk-gap-0"></div>
            <h3 class="nk-decorated-h-2"><span><span class="text-main-1">Buscar</span> Anime</span></h3>
            <div class="nk-gap"></div>
            <div class="nk-tabs">
              <div class="nk-widget">
                <div class="nk-widget-content">
                  <form class="nk-form nk-form-style-1">
                    <div class="input-group">
                      <input  v-model="query" type="text" class="form-control" placeholder="Buscar Anime ...">
                    </div>
                  </form>
                </div>
              </div>
              
              <div class="tab-content">
                <div class="tab-pane fade show active">
                  <div class="nk-gap"></div>
                  <div class="nk-blog-post" v-for="anime in filteredDataObj" :key="anime.id">
                    <div class="row vertical-gap">
                      <div class="col-lg-3 col-md-5">
                        <a class="nk-post-img">
                        <img style="height:180px;" :src="anime.poster" :alt="anime.title">
                        <span class="nk-post-categories">
                        </span>
                        </a>
                      </div>
                      <div class="col-lg-9 col-md-7">
                        <router-link :to="{name: 'SearchVideoSection' , params:{id: anime.id , title: anime.title}}" class="nk-post-img">
                          <h2 class="nk-post-title h4"><a>{{anime.title}}</a></h2>
                        </router-link>
                        <div class="nk-post-date mt-10 mb-10">
                          <span class="fa fa-angle-double-right"></span> {{anime.type}}
                          <span class="fa fa-star-half-alt"></span> <a>{{anime.rating}}</a>
                        </div>
                        <div class="nk-post-text">
                          <p>{{anime.synopsis.substr(9)}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <aside class="nk-sidebar nk-sidebar-right nk-sidebar-sticky">
              <div class="nk-widget nk-widget-highlighted">
                <h4 class="nk-widget-title"><span><span class="text-main-1">Series</span></span></h4>
                <div class="nk-widget-content">
                  <div 
                    class="nk-widget-post" 
                    v-for="anime in latestAnimeAdded.slice([Math.floor(Math.random()*latestAnimeAdded.length)]).slice(0 , 3)" 
                    :key="anime.id"
                    >
                    <a class="nk-post-image">
                    <img :src="anime.poster" :alt="anime.title">
                    </a>
                    <h3 class="nk-post-title"><a>{{anime.title}}</a></h3>
                    <div class="nk-product-rating"> <i class="fa fa-star"></i> {{anime.rating}}</div>
                    <div class="nk-gap-1"></div>
                    <router-link 
                      :to="{name: 'VideoSection' , params:{id: anime.id , title: anime.title}}"
                      class="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                      >
                      ver
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="nk-widget nk-widget-highlighted">
                <h4 class="nk-widget-title"><span><span class="text-main-1">Capítulos</span></span></h4>
                <div class="nk-widget-content">
                  <div 
                    class="nk-widget-post" 
                    v-for="anime in latestEpisodesAdded.slice([Math.floor(Math.random()*latestEpisodesAdded.length)]).slice(0 , 3)" 
                    :key="anime.id"
                    >
                    <a class="nk-post-image">
                    <img :src="anime.poster" :alt="anime.title">
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
              <div class="nk-widget nk-widget-highlighted">
                <h4 class="nk-widget-title"><span><span class="text-main-1">Películas</span></span></h4>
                <div class="nk-widget-content">
                  <div 
                    class="nk-widget-post" 
                    v-for="movie in movies.slice([Math.floor(Math.random()*movies.length)]).slice(0 , 3)" 
                    :key="movie.id"
                    >
                    <a class="nk-post-image">
                    <img :src="movie.poster" :alt="movie.title">
                    </a>
                    <h3 class="nk-post-title"><a>{{movie.title}}</a></h3>
                    <div class="nk-product-rating"> <i class="fa fa-star"></i> {{movie.rating}}</div>
                    <div class="nk-gap-1"></div>
                    <router-link 
                      :to="{name: 'MovieVideoSection' , params:{id: movie.id , title: movie.title}}"
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
      <div class="nk-gap-4"></div>
    </div>
    <!-- START: Page Background -->
    <img class="nk-page-background-top" src="https://html.nkdev.info/goodgames/assets/images/bg-top.png" alt="">
    <img class="nk-page-background-bottom" src="https://html.nkdev.info/goodgames/assets/images/bg-bottom.png" alt="">
    <!-- END: Page Background -->
  </div>
</template>

<script>
  import {onCreated , value , watch , computed} from "vue-function-api"
  import {useState , useGetters  , useStore} from '@u3u/vue-hooks';
  
  export default {
    name: 'SearchAnime',
    setup(){
      const store = useStore();
  
      const state = {
        ...useState([
          'searchList',
          'latestAnimeAdded',
          'latestEpisodesAdded',
          'isLoading',
          'movies',
        ])
      };

      const getter = {
        ...useGetters(['FILTER_SPESIFIC_DATA'])
      };

      const query = value("");

      const filteredDataObj = computed(() =>{
        return getter.FILTER_SPESIFIC_DATA.value(query.value)
      });

       watch(() =>
        query.value , (value) =>{
          query.value = value;
          init(query)
        }
      );

      const init = (query) =>{
        store.value.dispatch('SEARCH_ANIME' , query.value);
      }

      onCreated(() =>{
        store.value.dispatch('SEARCH_ANIME' , query.value);
        store.value.dispatch('GET_LATEST_CHAPTERS_ADDED');
        store.value.dispatch('GET_LATEST_ANIME_ADDED');
        store.value.dispatch('GET_MOVIES');
      });
  
      return{
        ...state,
        filteredDataObj,
        query,
        init
      }
    }
  };
</script>