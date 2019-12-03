<template>
  <div>
    <div class="nk-main">
      <!-- START: Breadcrumbs -->
      <div class="nk-gap-1"></div>
      <div class="container">
      </div>
      <div class="nk-gap-1"></div>
      <!-- END: Breadcrumbs -->
      <div class="container">
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
        <div class="nk-gap-3"></div>

        <div class="row vertical-gap">
          <div class="col-lg-8">
            <div class="nk-store-product">
              <div class="row vertical-gap">
                <div class="col-md-6">
                  <!-- START: Product Photos -->
                  <div class="nk-popup-gallery">
                    <div class="nk-gallery-item-box">
                      <a>
                        <img style="border-radius: 6px;" :src="anime[0][0].poster" :alt="anime[0][0].title">
                      </a>
                    </div>
                    <div class="nk-gap-1"></div>
                  </div>
                  <!-- END: Product Photos -->
                </div>
                <div class="col-md-6">
                  <h2 class="nk-product-title h3"><i class="fab fa-phoenix-squadron"></i> {{anime[0][0].title}} - EPS {{anime[0][0].episode}}</h2>
                  <select class="form-control" v-model="servers">
                    <option disabled value="">Servidores</option>
                    <option v-for="(servers, index) in anime[0][0].servers" :value="servers" :key="index">
                      {{servers.title}}
                    </option>
                  </select>
                </div>
              </div>
            
              <!-- END: Tabs -->
            </div>
            <!-- START: Related Products -->
            <div class="nk-gap-3"></div>
            <h3 class="nk-decorated-h-2"><span><span class="text-main-1">Películas </span></span></h3>
            <div class="nk-gap"></div>
            <div class="row vertical-gap">
              <div class="col-md-6"
                v-for="movie in movies.slice([Math.floor(Math.random()*movies.length)]).slice(0 , 2)" 
                :key="movie.id"
              >
                <div class="nk-product-cat">
                  <a>
                  <img 
                    style="
                      border-radius:6px;
                      height:240px;
                    " 
                    :src="movie.poster" :alt="movie.title">
                  </a>
                  <div class="nk-product-cont">
                    <h3 class="nk-product-title h5"><a>{{movie.title}}</a></h3>
                  </div>
                </div>
                <div class="nk-gap-1"></div>
                 <router-link 
                    :to="{name: 'MovieVideoSection' , params:{id: movie.id , title: movie.title}}"
                    class="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                    >
                    ver
                  </router-link>
              </div>
            </div>
            <!-- END: Related Products -->
          </div>
          <div class="col-lg-4">
     
            <aside class="nk-sidebar nk-sidebar-right nk-sidebar-sticky">
              <div class="nk-widget nk-widget-highlighted">
                <h4 class="nk-widget-title"><span><span class="text-main-1">Series</span> destacadas</span></h4>
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
            </aside>
            <!-- END: Sidebar -->
          </div>
        </div>
      </div>
      <div class="nk-gap-2"></div>
    </div>
    <!-- START: Page Background -->
    <img class="nk-page-background-top" src="https://html.nkdev.info/goodgames/assets/images/bg-top-4.png" alt="">
    <img class="nk-page-background-bottom" src="https://html.nkdev.info/goodgames/assets/images/bg-bottom.png" alt="">
    <!-- END: Page Background -->
    <!-- START: Search Modal -->
   
   
    <!-- END: Login Modal -->
  </div>
</template>
<script>
  import {value , watch , onCreated} from 'vue-function-api';
  import {useState , useStore , useRouter} from '@u3u/vue-hooks';
  const nSQL = require('@nano-sql/core').nSQL;
  
  export default {
    name: 'EpisodeVideoSection', 
    setup(){
      const store = useStore();
      const {route} = useRouter();

        const state = {
        ...useState([
          'latestAnimeAdded', 
          'movies'
        ])
      };
  
      const anime = value([]);
      const params = {
        id: value(route.value.params.id),
      };
  
      nSQL().useDatabase('animeflydb');
      nSQL('latestEpisodesAdded');
      nSQL()
        .query("select")
        .where(["id" , "=" , params.id.value])
        .exec()
        .then((rows) =>{
          anime.value.push(rows)
        });
  
      const servers = value('');

      onCreated(() =>
        store.value.dispatch('GET_MOVIES'),
        store.value.dispatch('GET_LATEST_ANIME_ADDED')
      );
  
      return{
        ...state,
        anime,
        servers
      }
    }
  }
</script>