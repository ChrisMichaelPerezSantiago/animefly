<template>
  <router-link :to="{name: 'EpisodeVideoSection' , params:{id: anime.id}}" class="nk-post-img">
    <div class="nk-blog-post">
      <a class="nk-post-img">
      <img :src="anime.poster" alt="He made his passenger captain of one">
      <span class="nk-post-comments-count">EPS {{anime.episode}}</span>
      </a>
      <div class="nk-gap"></div>
      <h2 class="nk-post-title h4"><a href="blog-article.html">{{anime.title}}</a></h2>
    </div>
  </router-link>
</template>

<script>
  import {value} from 'vue-function-api';
  
  export default{
    name: 'LatestEpisodesAdded',
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