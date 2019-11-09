<template>
  <div id="app">
    <NavBar/>
    <router-view />
    <br>
    <Footer/>
  </div>
</template>

<script>
  import NavBar from './components/NavBar';
  import Footer from './components/Footer';

  export default {
    components:{
      NavBar,
      Footer
    }
  };
</script>