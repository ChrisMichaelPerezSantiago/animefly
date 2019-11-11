import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VideoSection from "../views/VideoSection";
import EpisodeVideoSection from "../views/EpisodeVideoSection";
import MovieVideoSection from "../views/MovieVideoSection";
import ByGenre from "../views/ByGenre";
import GenreVideoSection from "../views/GenreVideoSection";
import MoviesList from "../views/MoviesList";
import SpecialList from "../views/SpecialList";
import SpecialVideoSection from "../views/SpecialVideoSection";
import OvaList from "../views/OvaList";
import OvaVideoSection from "../views/OvaVideoSection";
import TVList from "../views/TVList";
import TVListVideoSection from "../views/TVListVideoSection";
import SearchAnime from "../views/SearchAnime";
import SearchVideoSection from "../views/SearchVideoSection";
import EmissionVideoSection from "../views/EmissionVideoSection";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/VideoSection/:id",
    name: "VideoSection",
    component: VideoSection
  },
  {
    path: "/EpisodeVideoSection/:_id",
    name: "EpisodeVideoSection",
    component: EpisodeVideoSection
  },
  {
    path: "/MovieVideoSection/:_id",
    name: "MovieVideoSection",
    component: MovieVideoSection
  },
  {
    path: "/Genre/:genre",
    name: "ByGenre",
    component: ByGenre
  },
  {
    path: "/GenreVideoSection/:_id",
    name: "GenreVideoSection",
    component: GenreVideoSection
  },
  {
    path: "/MoviesList",
    name: "MoviesList",
    component: MoviesList
  },
  {
    path: "/SpecialList",
    name: "SpecialList",
    component: SpecialList
  },
  {
    path: "/SpecialVideoSection/:_id",
    name: "SpecialVideoSection",
    component: SpecialVideoSection
  },
  {
    path: "/OvaList",
    name: "OvaList",
    component: OvaList
  },
  {
    path: "/OvaVideoSection/:_id",
    name: "OvaVideoSection",
    component: OvaVideoSection
  },
  {
    path: "/TVList",
    name: "TVList",
    component: TVList
  },
  {
    path: "/TVListVideoSection/:_id",
    name: "TVListVideoSection",
    component: TVListVideoSection
  },
  {
    path: "/SearchAnime",
    name: "SearchAnime",
    component: SearchAnime
  },
  {
    path: "/SearchVideoSection/:_id",
    name: "SearchVideoSection",
    component: SearchVideoSection
  },
  {
    path: "/EmissionVideoSection/:_id",
    name: "EmissionVideoSection",
    component: EmissionVideoSection
  }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
