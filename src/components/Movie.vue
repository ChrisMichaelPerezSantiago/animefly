<template>
  <div class="nk-product-cat">
    <a class="nk-product-image">
    <img :src="`data:image/png;base64, ${movie.poster}`" :alt="movie.title">
    </a>
    <div class="nk-product-cont">
      <h3 class="nk-product-title h5"><a>{{movie.title}}</a></h3>
      <div class="nk-gap-1"></div>
      <span class="nk-product-rating">
      <i class="fa fa-star"></i>{{movie.rating}}
      </span>
      <div class="nk-gap-1"></div>
      <div class="nk-gap-1"></div>
      <router-link 
        :to="{name: 'MovieVideoSection' , params:{id: movie.id , title: movie.title}}"
        class="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
        >
        ver
      </router-link>
    </div>
  </div>
</template>

<script>
  import {value} from 'vue-function-api';
  
  export default {
    name: 'Movie', 
    props:{
      movies: Object
    },
    setup(props){
      const movie = value(props.movies);
      return{
        movie
      }
    }
  };
</script>