<template>
  <footer class="nk-footer">
    <div class="container">
      <div class="nk-gap-3"></div>
      <div class="row vertical-gap">
        <div class="col-md-6">
          <div class="nk-widget">
            <h4 class="nk-widget-title">Sobre <span>anime<span class="text-main-1">fly</span></span></h4>
            <p>
              <strong>Animefly</strong> es una plataforma que brinda un amplio catálogo de animes con subtítulos en español 
              de forma gratuita y excelente calidad. Estarás actualizado con todos los mejores animes en emisión, 
              pronto a estrenarse o ya finalizados.
            </p>
            <p>
              La creación de la plataforma <strong>Animefly</strong> no sería posible sin la existencia de la página web <strong>Animeflv</strong>.
              Es decir, todo el contenido que ofrece <strong>Animefly</strong> proviene de <strong>Animeflv</strong>. Para esto se ha implementado un 
              <strong><a href="https://github.com/ChrisMichaelPerezSantiago/animeflv"> <span style="color:red;">API personalizado</span></a></strong>
              que se alimenta de su plataforma y nos ayuda a obtener todo el catálogo anime
              en general.
            </p>
          </div>
          <div class="nk-widget">
          </div>
        </div>
      </div>
      <div class="nk-gap-3"></div>
    </div>
    <div class="nk-copyright">
      <div class="container">
        <div class="nk-copyright-left">
          Copyright &copy; {{year}} <span style="color:red;">AnimeFly</span> |
          <a href="https://github.com/ChrisMichaelPerezSantiago/animeflv"> <span style="color:red;">API</span></a> | 
          <a href="https://github.com/ChrisMichaelPerezSantiago/animefly"> <span style="color:red;">GITHUB</span></a>
        </div>
        <div class="nk-copyright-right">
          <p>
            Ninguno de los videos son de nuestra propiedad y mucho menos se encuentran alojados en nuestros servidores.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name:'Footer', 
    
    setup(){
      const state = {
        year: new Date().getFullYear()
      }
      return{
        ...state
      }
    }
  };
</script>