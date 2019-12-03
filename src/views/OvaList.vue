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
            <h3 class="nk-decorated-h-2"><span><span class="text-main-1">Anime</span> Ova</span></h3>
            <div class="nk-gap"></div>
            <div class="nk-tabs">
          
              <div class="tab-content">
                <div class="tab-pane fade show active">
                  <div class="nk-gap"></div>
                  <div class="nk-blog-post" v-for="anime in ovaList" :key="anime.id">
                    <div class="row vertical-gap">
                      <div class="col-lg-3 col-md-5">
                        <a class="nk-post-img">
                        <img style="height:180px;" :src="anime.poster" :alt="anime.title">
                        <span class="nk-post-categories">
                        </span>
                        </a>
                      </div>
                      <div class="col-lg-9 col-md-7">
                        <router-link :to="{name: 'OvaVideoSection' , params:{id: anime.id , title: anime.title}}" class="nk-post-img">
                          <h2 class="nk-post-title h4"><a>{{anime.title}}</a></h2>
                        </router-link>
                        <div class="nk-post-date mt-10 mb-10">
                          <span class="fa fa-angle-double-right"></span> {{anime.type === 'OVA' ? anime.type : 'DESCONOCIDO'}}
                          <span class="fa fa-star-half-alt"></span> <a>{{anime.rating}}</a>
                        </div>
                        <div class="nk-post-text">
                          <p>{{anime.synopsis.substr(7)}}</p>
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
              <div class="nk-widget">
                <div class="nk-widget-content">
                  <select style="border-color: red;" class="form-control" v-model="sortBy">
                    <option disabled value="">Ordenar Por</option>
                    <option v-for="(option, index) in orderByList" :value="option" :key="index">
                      {{option.title}}
                    </option>
                  </select>
                </div>
              </div>
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
        <bPagination align="left" :total-rows="100" :per-page="1" v-model="page" @input=" init({page: page.value});"></bPagination>
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
  import {value , onCreated , watch} from "vue-function-api"
  import {useState , useRouter , useStore} from '@u3u/vue-hooks';
  
  export default {
    name: 'OvaList',
    setup(){
      const store = useStore();
      const {route} = useRouter();
  
      const state = {
        ...useState([
          'latestAnimeAdded',
          'latestEpisodesAdded',
          'movies',
          'ovaList'
        ])
      };
  
      const genre = value(route.value.params.genre);
      const page = value(1);
      const orderByList = [
        {title:'default'},
        {title:'updated'},
        {title:'added'},
        {title:'rating'},
        {title:'title'},
      ];
  
      const sortBy = value({title:'rating'});
    
      watch(() =>
        page.value , (value) =>{
          page.value = value;
          const goto = page.value;
          const info = {sortBy: sortBy.value.title , page: goto}
          init(info)
        }
      );

      watch(() =>
        sortBy.value.title , (value) =>{
          sortBy.value.title = value;
          const title = sortBy.value.title
          store.value.dispatch('GET_ALL_OVAS' , {
            sortBy: title,
            page: page.value
          });
        }
      );
  
      const init = (info) => {
        store.value.dispatch('GET_ALL_OVAS' , {
          sortBy: info.sortBy,
          page: info.page
        });
      }
  
      onCreated(() =>{
        store.value.dispatch('GET_ALL_OVAS' , {
          sortBy: sortBy.value.title,
          page: page.value
        });
        store.value.dispatch('GET_LATEST_CHAPTERS_ADDED')
        store.value.dispatch('GET_LATEST_ANIME_ADDED');
        store.value.dispatch('GET_MOVIES');
      });
  
      return{
        ...state,
        init,
        orderByList,
        sortBy,
        page
      }
    }
  };
</script>