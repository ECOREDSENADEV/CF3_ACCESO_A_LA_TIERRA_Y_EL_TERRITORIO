<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        p.mb-5 El bienestar en las comunidades campesinas se sustenta en la posibilidad de acceder a servicios básicos que garanticen condiciones dignas de vida. Aspectos como el agua potable, la energía, la vivienda, la salud y la educación constituyen derechos fundamentales, reconocidos en la Constitución colombiana y en acuerdos internacionales, que buscan asegurar equidad y justicia social para la población rural.

        .row.mb-5
          .col-lg-3.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/1.svg", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .bg-color-5.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/intro/2.png', alt='')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") En Colombia, las comunidades campesinas enfrentan dificultades históricas para garantizar el acceso a estos servicios. La falta de infraestructura, las barreras geográficas y la desigualdad social han limitado el desarrollo en las zonas rurales, generando brechas significativas frente al entorno urbano. Estos retos impactan de manera directa en la calidad de vida y en las oportunidades de progreso.
            p(data-aos="fade-left") Por esta razón, estudiar y comprender la prestación de los servicios básicos en el campo permite identificar avances, problemáticas y necesidades, orientando la formulación de políticas y estrategias que promuevan el desarrollo sostenible. De esta manera, se busca que los campesinos puedan ejercer plenamente sus derechos, fortalecer su autonomía y contribuir activamente a la construcción de un país más equitativo.
        
            

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
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
