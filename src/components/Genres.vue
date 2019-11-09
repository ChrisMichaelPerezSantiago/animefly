<template>
  <div class="nav">
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'accion'}}">accion</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'artes-marciales'}}">artes-marciales</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'aventura'}}">aventura</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'carreras'}}">carreras</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'ciencia-ficcion'}}">ciencia-ficcion</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'comedia'}}">comedia</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'demencia'}}">demencia</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'demonios'}}">demonios</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'deportes'}}">deportes</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'drama'}}">drama</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'ecchi'}}">ecchi</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'escolares'}}">escolares</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'espacial'}}">espacial</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'fantasia'}}">fantasia</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'harem'}}">harem</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'historico'}}">historico</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'infantil'}}">infantil</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'josei'}}">josei</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'juegos'}}">juegos</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'magia'}}">magia</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'mecha'}}">mecha</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'militar'}}">militar</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'misterio'}}">misterio</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'musica'}}">musica</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'parodia'}}">parodia</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'psicologico'}}">psicologico</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'recuentos-de-la-vida'}}">recuentos-de-la-vida</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'romance'}}">romance</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'samurai'}}">samurai</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'seinen	'}}">seinen</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'shoujo'}}">shoujo</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'shounen'}}">shounen</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'sobrenatural'}}">sobrenatural</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'superpoderes'}}">superpoderes</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'suspenso'}}">suspenso</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'terror'}}">terror</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'vampiros'}}">vampiros</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'yaoi'}}">yaoi</router-link></li>
    <li><router-link class="nav-link active" :to="{name: 'ByGenre' , params:{genre:'yuri'}}">yuri</router-link></li>
  </div>
</template>

<script>
  export default {
    name: 'Genres'
  };
</script>


<style>
  li{
    margin-left: 7px;
    margin-bottom: 5px;
  }
</style>

   