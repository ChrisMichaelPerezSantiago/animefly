<template>
  <header class="nk-header nk-header-opaque">
    <nav class="nk-navbar nk-navbar-top nk-navbar-sticky nk-navbar-autohide">
      <div class="container">
        <div class="nk-nav-table">
          <router-link to="/"
            style="
            text-decoration: none;
            color: #7f8b92;
            text-decoration: none;
            cursor:pointer;
            "
            href="" 
            class="nk-nav-logo"
            >
            <h3><span>anime<span class="text-main-1">fly</span></span></h3>
          </router-link>
          <ul class="nk-nav nk-nav-right d-none d-lg-table-cell" data-nav-mobile="#nk-nav-mobile">
            <li>
              <router-link to="/">Descubre</router-link>
            </li>
            <li>
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
          <ul class="nk-nav nk-nav-right nk-nav-icons">
            <!--<li class="single-icon d-lg-none">
              <a href="#" class="no-link-effect" data-nav-toggle="#nk-nav-mobile">
                <span class="nk-icon-burger">
                  <span class="nk-t-1"></span>
                  <span class="nk-t-2"></span>
                  <span class="nk-t-3"></span>
                </span>
              </a>
              </li>-->                      
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>