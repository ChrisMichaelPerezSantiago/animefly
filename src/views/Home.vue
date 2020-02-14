<template>
  <div>
    <!--
      <div id="nk-nav-mobile" class="nk-navbar nk-navbar-side nk-navbar-right-side nk-navbar-overlay-content d-lg-none">
        <div class="nano">
          <div class="nano-content">
            <a class="nk-nav-logo">
              <h3><span>anime<span class="text-main-1">fly</span></span></h3>
            </a>
            <div class="nk-navbar-mobile-content">
              <ul class="nk-nav">
                <li>
                  <router-link to="/">Descubre</router-link>
                </li>
                <li >
                  <router-link :to="{name: 'MoviesList'}">Películas</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'SpecialList'}">Especial</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'OvaList'}">OVA</router-link>
                </li>
                  <li>
                  <router-link :to="{name: 'TVList'}">TV</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'SearchAnime'}">Buscador</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      -->
    <!-- END: Navbar Mobile -->
    <div class="nk-main">
      <div class="nk-gap-2"></div>
      <div class="container">
        <CustomNavAndroid/>
        <!-- END: Image Slider -->
        <!-- START: Categories -->
        <div class="nk-gap-2"></div>
        <!-- END: Categories -->
        <!-- START: Latest News -->
        <div class="nk-gap-2"></div>
        <h3 class="nk-decorated-h-2"><span><span class="text-main-1">Últimos </span> animes agregados</span></h3>
        <div class="nk-gap"></div>
        <!--<div class="nk-news-box" >
          <div class="nk-news-box-list">
            <div class="nano">
              <div class="nano-content">
                <div class="nk-news-box-item"  v-for="anime in latestAnimeAdded.slice(0,  6)" :key="anime.id">
                  <AnimeAddedTopSix :animes="anime"/>
                </div>
              </div>
            </div>
          </div>
          <div class="nk-news-box-each-info">
            <div class="nano">
              <router-link
                style="text-decoration: none; color: #7f8b92; text-decoration: none; cursor:pointer;"
                :to="{name: 'VideoSection' , params:{id: latestAnimeAdded[0].id , title: latestAnimeAdded[0].title}}"
                >
                <div class="nano-content">
                  <div class="nk-news-box-item-image">
                    <span class="nk-news-box-item-categories">
                    <span class="bg-main-4">{{latestAnimeAdded[0].debut}}</span>
                    </span>
                  </div>
                  <h3 class="nk-news-box-item-title">{{latestAnimeAdded[0].title}}</h3>
                  <div class="nk-news-box-item-text">
                    <p>{{latestAnimeAdded[0].synopsis.substr(9)}}</p>
                  </div>
                  <a class="nk-news-box-item-more">ver</a>
                </div>
              </router-link>
            </div>
          </div>
        </div>-->
        <div class="nk-gap-2"></div>
        <div class="nk-blog-grid">
          <div class="row">
            <div class="col-md-6 col-lg-3" v-for="anime in latestAnimeAdded" :key="anime.id">
              <!-- START: Post -->
              <div class="nk-blog-post">
                <LatestAnimeAdded :animes="anime"/>
              </div>
              <!-- END: Post -->
            </div>
          </div>
        </div>
        <!-- END: Latest News -->
        <div class="nk-gap-2"></div>
        <div class="row vertical-gap">
          <div class="col-lg-8">
            <!-- START: Latest Posts -->
            <h3 class="nk-decorated-h-2"><span><span class="text-main-1">Últimos</span> capítulos emitidos</span></h3>
            <div class="nk-gap"></div>
            <div class="nk-blog-grid">
              <div class="row">
                <div class="col-md-6" v-for="anime in latestEpisodesAdded" :key="anime.id">
                  <!-- START: Post -->
                  <div class="nk-blog-post">
                    <LatestEpisodesAdded :animes="anime"/>
                  </div>
                  <!-- END: Post -->
                </div>
              </div>
            </div>
            <!-- END: Latest Posts -->
            <!-- START: Latest Matches -->
            <div class="nk-gap-2"></div>
            <div class="nk-gap-0"></div>
            <h3 class="nk-decorated-h-2"><span><span class="text-main-1">Listado de</span> Géneros</span></h3>
            <div class="nk-gap"></div>
            <div class="nk-tabs">
              <ul class="nav nav-tabs">
                <Genres/>
              </ul>
            </div>
            <div class="nk-gap-3"></div>
            <h3 class="nk-decorated-h-2"><span><span class="text-main-1">Películas</span> destacadas</span></h3>
            <div class="nk-gap"></div>
            <div class="row vertical-gap">
              <div class="col-md-6" v-for="movie in movies" :key="movie.id">
                <Movie :movies="movie"/>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <aside class="nk-sidebar nk-sidebar-right nk-sidebar-sticky">
              <div class="nk-widget nk-widget-highlighted">
                <h4 class="nk-widget-title"><span><span class="text-main-1">Próximos</span> capítulos</span></h4>
                <div class="nk-widget-content" v-for="anime in inEmissionList" :key="anime.id">
                  <div class="nk-widget-post">
                    <a class="nk-post-image">
                    <img :src="`data:image/png;base64, ${anime.poster}`" :alt="anime.title">
                    </a>
                    <router-link :to="{name: 'EmissionVideoSection' , params:{id: anime.id}}" class="nk-post-img">
                      <h3 class="nk-post-title"><a>{{anime.title}}</a></h3>
                    </router-link>
                    <div class="nk-post-date mt-10 mb-10">
                      <span class="fa fa-angle-double-right"></span> {{anime.type}}
                      <span class="fa fa-star-half-alt"></span> <a>{{anime.rating}}</a>
                    </div>
                    <div class="nk-post-date"><span class="fa fa-calendar"></span>{{anime.episodes[0].nextEpisodeDate}}</div>
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
  import {onCreated , computed} from "vue-function-api";
  import {useState , useStore} from "@u3u/vue-hooks";
  import CustomNavAndroid from "../components/CustomNavAndroid"
  import AnimeAddedTopSix from "../components/AnimeAddedTopSix";
  import LatestAnimeAdded from "../components/LatestAnimeAdded";
  import LatestEpisodesAdded from "../components/LatestEpisodesAdded";
  import Movie from "../components/Movie";
  import Genres from "../components/Genres";
  
  export default {
    name: 'home',
    components:{
      //AnimeAddedTopSix,
      LatestAnimeAdded,
      LatestEpisodesAdded,
      CustomNavAndroid,
      Movie,
      Genres
    },
    setup(){
      const store = useStore();
      const state = {
        ...useState([
          'latestAnimeAdded', 
          'latestEpisodesAdded',
          'movies',
          'inEmissionList',
          'isLoading'
        ])
      };
  
      onCreated(() =>{
        store.value.dispatch('GET_LATEST_ANIME_ADDED'),
        store.value.dispatch('GET_LATEST_CHAPTERS_ADDED'),
        store.value.dispatch('GET_MOVIES'),
        store.value.dispatch('GET_EMISSIONS')
      });
        
      return{
        ...state,
      }
    }
  };
</script>