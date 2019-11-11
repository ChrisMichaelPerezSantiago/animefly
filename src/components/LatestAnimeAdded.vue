<template>
  <div>
    <router-link :to="{name: 'VideoSection' , params:{id: anime.id , title: anime.title}}" class="nk-post-img">
      <img style="height:20em;" :src="anime.poster" :alt="anime.title">
      <span class="nk-post-comments-count">{{anime.rating}}</span>  
      <span class="nk-post-categories">
        <span class="bg-main-5">{{anime.debut}}</span>
      </span>
    </router-link>
    <div class="nk-gap"></div>
    <h2 class="nk-post-title h4"><a href="#">{{anime.title}}</a></h2>
    
    <!--<div class="nk-post-text">
      <p>{{anime.synopsis}}</p>
    </div>
    -->
    <div class="nk-gap"></div>
  </div>
</template>

<script>
  import {value} from 'vue-function-api';

  export default{
    name: 'LatestAnimeAdded',
    props:{
      animes: Object
    },
    setup(props){
      const anime = value(props.animes);
      return{
        anime
      }
    }
  };
</script>