<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 ¿Qué es bienestar en el contexto de una comunidad campesina?

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 El bienestar en una comunidad campesina se define por el acceso a servicios esenciales como salud, educación, trabajo, alimentos y comunicaciones, entre otros. A menudo, pensamos que el bienestar es algo simple, como estar bien, ser feliz, comer mucho o hacer lo que nos gusta. Sin embargo, es un concepto mucho más complejo de lo que parece.
    
    p.mb-5 Podemos definir el bienestar como el estado en el que las personas y comunidades pueden satisfacer sus necesidades, ejercer sus derechos y vivir con dignidad en condiciones justas y equitativas. Va más allá de los ingresos o la salud física, ya que incluye múltiples dimensiones:

    .row.justify-content-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-4
        .bg-color-5.tarjeta.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Educación
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Vivienda
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Trabajo digno
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Participación social
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Seguridad
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Medio ambiente
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Salud física, mental y emocional

    .bg-color-17.mb-5.tarjeta
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El bienestar es un concepto que depende del entorno sociocultural e histórico. Lo que se considera "bienestar" puede variar entre culturas, clases sociales, géneros o comunidades. A pesar de estas diferencias, existen servicios básicos mínimos que todas las comunidades deben tener, ya que sin ellos su vida, salud o desarrollo futuro pueden estar en riesgo.
    
    p.mb-5 El bienestar es un concepto complejo que se refiere al conjunto de condiciones que permiten a las personas y a las comunidades desarrollarse plenamente en equilibrio con su entorno, con justicia y dignidad. Para que una comunidad campesina se considere en estado de bienestar, debe contar con:

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/4.svg', style="max-width: 90px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-color-18.w-100
            .p-4.text-center
              p.mb-0 Cobertura de servicios básicos
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/5.svg', style="max-width: 90px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-color-23.w-100
            .p-4.text-center
              p.mb-0 Cobertura de servicios básicos
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/6.svg', style="max-width: 90px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-color-info.w-100
            .p-4.text-center
              p.mb-0 Cobertura de servicios básicos

    




</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
