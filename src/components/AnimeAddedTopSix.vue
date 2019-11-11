<template>
  <router-link
    style="
    text-decoration: none;
    color: #7f8b92;
    text-decoration: none;
    cursor:pointer;
    "
    :to="{name: 'VideoSection' , params:{id: anime.id , title: anime.title}}"
    >
    <div class="nk-news-box-item-img">
      <img :src="anime.poster" :alt="anime.title">
    </div>
    <img :src="anime.poster" :alt="anime.title" class="nk-news-box-item-full-img">
    <h3 class="nk-news-box-item-title">{{anime.title}}</h3>
    <span class="nk-news-box-item-categories">
    <span class="bg-main-4">{{anime.debut}}</span>
    </span>
    <div class="">
      <p>{{anime.synopsis.substr(9)}}</p>
    </div>
    <br/>
  </router-link>
</template>

<script>
  import {value} from 'vue-function-api';
  
  export default {
    name: 'AnimeAddedTopSix', 
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