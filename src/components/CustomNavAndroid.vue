<template>
  <!-- START: Categories -->
  <div id="custom-nav" class="row vertical-gap">
    <div class="col-lg-4">
      <router-link to="/">
        <div class="nk-feature-1">
          <div class="nk-feature-icon">
            <i class="fab fa-phoenix-squadron"></i>
          </div>
          <div class="nk-feature-cont">
            <h3 class="nk-feature-title"><a>Descubre</a></h3>
          </div>
        </div>
      </router-link>
    </div>
    <div class="col-lg-4">
      <router-link :to="{name: 'MoviesList'}">
        <div class="nk-feature-1">
          <div class="nk-feature-icon">
            <i class="fab fa-phoenix-squadron"></i>
          </div>
          <div class="nk-feature-cont">
            <h3 class="nk-feature-title"><a>Películas</a></h3>
          </div>
        </div>
      </router-link>
    </div>
    <div class="col-lg-4">
      <router-link :to="{name: 'SpecialList'}">
        <div class="nk-feature-1">
          <div class="nk-feature-icon">
            <i class="fab fa-phoenix-squadron"></i>
          </div>
          <div class="nk-feature-cont">
            <h3 class="nk-feature-title"><a>Especial</a></h3>
          </div>
        </div>
      </router-link>
    </div>
    <div class="col-lg-4" :to="{name: 'OvaList'}">
      <router-link>
        <div class="nk-feature-1">
          <div class="nk-feature-icon">
            <i class="fab fa-phoenix-squadron"></i>
          </div>
          <div class="nk-feature-cont">
            <h3 class="nk-feature-title"><a>OVA</a></h3>
          </div>
        </div>
      </router-link>
    </div>
    <div class="col-lg-4">
      <router-link :to="{name: 'TVList'}">
        <div class="nk-feature-1">
          <div class="nk-feature-icon">
            <i class="fab fa-phoenix-squadron"></i>
          </div>
          <div class="nk-feature-cont">
            <h3 class="nk-feature-title"><a>TV</a></h3>
          </div>
        </div>
      </router-link>
    </div>
    <div class="col-lg-4">
      <router-link :to="{name: 'SearchAnime'}">
        <div class="nk-feature-1">
          <div class="nk-feature-icon">
            <i class="fab fa-phoenix-squadron"></i>
          </div>
          <div class="nk-feature-cont">
            <h3 class="nk-feature-title"><a>Buscador</a></h3>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>