<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 ¿Qué son los servicios básicos o esenciales?
    
    p.mb-5 En Colombia y a nivel internacional, se han establecido una serie de servicios esenciales que deben estar garantizados para el 100 % de la población, ya que su acceso está directamente relacionado con el cumplimiento de los derechos humanos fundamentales.

    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El acceso efectivo a estos servicios permite a las personas alcanzar condiciones mínimas de bienestar y satisfacer sus necesidades básicas. La cobertura de estos servicios constituye un indicador clave del nivel de desarrollo y de la calidad de vida de una población. Por ello, el objetivo es avanzar hacia una cobertura total.
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Agua potable y saneamiento básico
    
    .row.mb-5.align-items-
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.tarjeta.p-4.h-100.d-flex.flex-column.justify-content-center.align-items-center.text-center(data-aos="fade-left")
          p.mb-0(data-aos="fade-left")
            | El acceso al agua potable y al saneamiento básico es un derecho fundamental, ya que son condiciones necesarias para preservar la salud, garantizar la higiene y prevenir enfermedades. Estos servicios son esenciales para mejorar la calidad de vida, especialmente en comunidades vulnerables o en situación de pobreza.
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png" data-aos="zoom-in")
      .col-lg-5.mb-3.mb-lg-0
        img(src='@/assets/curso/tema2/3.svg', style="max-width: 80px" alt='AvatarTop').mb-3
        p(data-aos="fade-left")
          | El agua potable es aquella que está limpia y es segura para el consumo humano, sin causar enfermedades. Para considerarse potable, debe estar libre de gérmenes, bacterias, suciedad, olores o colores extraños, y debe ser apta para beber, cocinar, lavar y otros usos domésticos sin riesgo. Su importancia radica en que previene enfermedades como la diarrea, el cólera y diversas infecciones, siendo además fundamental para una alimentación adecuada y condiciones higiénicas óptimas.

    p.mb-5 Por su parte, el saneamiento básico incluye un conjunto de servicios que permiten mantener un entorno limpio, seguro y saludable, especialmente en lo relacionado con el manejo de agua, excrementos, residuos y prácticas higiénicas. A continuación se describen sus principales componentes:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Baños y/o letrinas higiénicas
              p Espacios adecuados para hacer las necesidades fisiológicas que evitan la contaminación del suelo y del agua.
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Baño convencional: Funciona con agua.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Baño ecológico o seco: No utiliza agua y transforma los desechos en abono (compost) para siembra.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Manejo de aguas residualesBaños y/o letrinas higiénicas
              p Se refiere al tratamiento adecuado de las aguas provenientes del baño, ducha, cocina y lavadero. Su descarga directa contamina aire, suelo, fauna y agua.
              p Opciones correctas:
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Plantas de tratamiento.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Pozos sépticos.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Redes de alcantarillado.
              p También se recomienda:
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 No verter aceites ni residuos de animales
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Evitar productos químicos nocivos
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Usar jabones ecológicos
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Mantener pozos sépticos en buen estado
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Recolección y manejo de basuras
              p Separar los residuos en:
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 <b>Orgánicos</b>: restos de alimentos, cáscaras, estiércol, residuos de cosechas.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 <b>Inorgánicos</b>: plásticos, latas, textiles, vidrios.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 <b>Peligrosos o especiales</b>: pilas, envases de agroquímicos, medicamentos vencidos.
              p Recomendaciones:
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Hacer compostaje cerrado para residuos orgánicos.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 No quemar residuos inorgánicos (genera gases tóxicos).
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Llevar los residuos peligrosos a puntos autorizados como supermercados, droguerías o a través del programa <b>Campo Limpio</b>.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Educación sobre higiene
              p Conjunto de conocimientos, prácticas y hábitos que se enseñan para prevenir enfermedades y mejorar la salud, especialmente en zonas rurales con recursos sanitarios limitados.
              p Ámbitos clave:
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 <b>Higiene personal</b>: lavado correcto de manos, baño regular, cuidado dental, uso de ropa limpia
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 <b>Higiene alimentaria:</b> lavado y almacenamiento adecuado de alimentos, cocción completa.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 <b>Higiene del agua</b>: uso de agua potable, hervida o tratada, y protección de fuentes hídricas.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 <b>Higiene del entorno</b>: manejo correcto de residuos, control de plagas, limpieza de viviendas.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 <b>Prevención de enfermedades</b>: vacunación, visitas médicas, prácticas seguras en el trabajo agrícola

    p.mb-5 La importancia del saneamiento básico es: 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-18.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0.ms-3
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Previene enfermedades como la diarrea, parásitos o infecciones de la piel.
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Mejora la calidad de vida y el bienestar de las familias.
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Protege el medio ambiente, el agua y el suelo.
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Fortalece la conciencia comunitaria y promueve el desarrollo sostenible.
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Es parte fundamental de los <b>derechos humanos y del desarrollo de una comunidad</b>
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Energía 
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El acceso a una fuente de energía confiable es un componente esencial del bienestar humano y del desarrollo de las comunidades. La electricidad, el gas y otras fuentes seguras de energía son indispensables para preparar alimentos, mantener condiciones de salubridad, garantizar el acceso a la educación, la salud y la comunicación, y mejorar la productividad en el hogar, el campo y la industria.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Electricidad
    
    p.mb-5 A continuación, se presenta un recurso educativo que expone la importancia de la electricidad en la vida cotidiana, destacando su papel en la educación, la salud, el trabajo, el hogar y el bienestar de las comunidades: 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    p.mb-5 La electricidad puede generarse a partir de diversas fuentes, entre ellas:

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar.pst
          img(src='@/assets/curso/tema2/10.svg', style="max-width: 90px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .bg-color-26.w-100
            .p-4.text-center
              h5 Energía hidráulica 
          p.mb-0.bg-color-27.p-4 Agua en movimiento - hidroeléctricas
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar.pst
          img(src='@/assets/curso/tema2/11.svg', style="max-width: 90px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .bg-color-26.w-100
            .p-4.text-center
              h5 Energía térmica 
          p.mb-0.bg-color-27.p-3.p-xl-4 Combustión de carbón, gas o petróleo - termoeléctricas
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar.pst
          img(src='@/assets/curso/tema2/12.svg', style="max-width: 90px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .bg-color-26.w-100
            .p-4.text-center
              h5 Energía solar 
          p.mb-0.bg-color-27.p-4 Luz del sol - paneles o plantas solares

    p.mb-5 La electricidad es un servicio básico y un indicador de bienestar. En el contexto actual, es indispensable para estudiar, comunicarse, acceder a servicios de salud y operar herramientas que facilitan el trabajo. Por ello, se considera un derecho esencial, especialmente cuando está vinculado a otros derechos fundamentales como:

    .row.mb-5.justify-content-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
      .col-lg-5
        .bg-color-4.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0.ms-3
            li.mb-3.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 El derecho a una vida digna.
            li.mb-3.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 El derecho a la salud.
            li.mb-3.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 El derecho a la educación.
            li.mb-3.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 El derecho al desarrollo social y económico.
    
    p.mb-5 Aunque no siempre se menciona de forma literal como “derecho a la electricidad” en las constituciones, muchos países incluido Colombia, reconocen el acceso a los servicios públicos esenciales como parte del conjunto de los derechos fundamentales. El acceso a la electricidad es indispensable para el desarrollo, el bienestar y el funcionamiento de casi todas las actividades humanas. Sin este servicio, muchas tareas cotidianas serían más difíciles o incluso imposibles.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Gas y otras fuentes seguras para la preparación de alimentos

    p.mb-5 Contar con una fuente energética segura para preparar, calentar o procesar alimentos es un aspecto fundamental del bienestar, ya que está directamente relacionado con la nutrición, la salud y la igualdad de condiciones entre poblaciones urbanas y rurales. La disponibilidad y el tipo de fuente dependen del contexto social, económico y geográfico de cada comunidad. Las principales fuentes para cocinar alimentos se describen a continuación:

    TabsC.color-acento-contenido.mb-5
      .p-5(titulo="Gas")
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-lg-2
            h4 Gas
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Gas natural: distribuido por tuberías (zonas urbanas).
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Gas licuado de petróleo (GLP): usado en cilindros o pipetas (común en zonas rurales).
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Ventajas</b>: limpio, rápido, controlable.
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Requiere</b> instalaciones seguras.
        
          .col-lg-5.order-lg-1
            figure
              img(src='@/assets/curso/tema2/14.png', alt='Texto que describa la imagen')
      .p-5(titulo="Electricidad")
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-lg-2
            h4 Electricidad
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Usada en cocinas, hornos, microondas, freidoras de aire, etc.
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Ventajas</b>: no produce humo ni llama abierta.
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Limitación</b>: depende del servicio eléctrico constante y puede ser costosa.
        
          .col-lg-5.order-lg-1
            figure
              img(src='@/assets/curso/tema2/15.png', alt='Texto que describa la imagen')
      .p-5(titulo="Leña o carbón")
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-lg-2
            h4 Leña o carbón
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Muy usada en zonas rurales sin acceso a gas o electricidad.
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Utilizada en fogones o parrillas.
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Ventajas</b>: recurso local disponible.
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Desventajas</b>: produce humo (afecta la salud), menor eficiencia energética.
        
          .col-lg-5.order-lg-1
            figure
              img(src='@/assets/curso/tema2/16.png', alt='Texto que describa la imagen')
      .p-5(titulo="Biogás")
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-lg-2
            h4 Biogás
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Generado por descomposición de materia orgánica (residuos, estiércol).
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Usado en <b>biodigestores rurales</b>.
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Ventajas</b>: renovable, ecológico.
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Requiere</b> inversión inicial y manejo técnico adecuado.
        
          .col-lg-5.order-lg-1
            figure
              img(src='@/assets/curso/tema2/17.png', alt='Texto que describa la imagen')
      .p-5(titulo="Energía solar")
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-lg-2
            h4 Energía solar
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Utilizada en <b>cocinas solares</b>, principalmente en zonas con alta radiación solar.
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Ventajas</b>: no contamina, no requiere combustible.
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Limitaciones</b>: depende del clima, cocción más lenta.
        
          .col-lg-5.order-lg-1
            figure
              img(src='@/assets/curso/tema2/18.png', alt='Texto que describa la imagen')

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") Además de la disponibilidad técnica, el uso de ciertas fuentes como la leña o el carbón ha generado impactos negativos en la salud y el medio ambiente. La exposición continua al humo de fogones tradicionales afecta especialmente a las mujeres rurales, provocando enfermedades pulmonares crónicas. A nivel ambiental, el uso indiscriminado de leña proveniente de bosques nativos sin programas de reforestación contribuye a la pérdida de biodiversidad, la disminución de la humedad del suelo, y la degradación de fuentes hídricas.
    
        .row.align-items-start
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/tema2/20.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Por esta razón, en los últimos años se han promovido campañas para sustituir los fogones tradicionales por tecnologías limpias, más eficientes y con menos emisiones contaminantes, como los fogones mejorados, el uso de GLP, biogás o cocinas solares.
    
    .bg-color-20.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Contar con una fuente energética segura para la preparación de alimentos es un componente clave del desarrollo rural. No solo garantiza una mejor nutrición y salud, sino que también contribuye al bienestar, la equidad y la sostenibilidad ambiental. Se considera, por tanto, un servicio básico esencial para garantizar una vida digna y con igualdad de oportunidades.
    
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Vivienda digna
    
    p.mb-5 Aunque el acceso a una vivienda digna no es un servicio básico que el Estado o una empresa privada preste directamente, sí es responsabilidad del Estado crear las condiciones para que la población pueda acceder a ella, especialmente a través de:

    .row.mb-5.justify-content-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/21.png", data-aos="zoom-in")
      .col-lg-5
        .bg-color-4.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0.ms-3
            li.mb-3.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Programas de vivienda de interés social.
            li.mb-3.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Préstamos con tasas de interés subsidiadas.
            li.mb-3.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Programas de acceso a la tierra y la vivienda para población campesina.

    p.mb-5 Una vivienda digna en zona rural debe cumplir con condiciones mínimas que garanticen el bienestar, la seguridad, la salud y la calidad de vida de quienes la habitan. Aunque los parámetros pueden variar según la legislación de cada país, existen lineamientos comunes reconocidos a nivel nacional e internacional, como los definidos en la Constitución Política de Colombia (Art. 51) y en los Objetivos de Desarrollo Sostenible (ODS).

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Parámetros de una vivienda digna en el campo
    
    p.mb-5 Para ser considerada digna, una vivienda rural debe contar con infraestructura segura, acceso a servicios básicos, condiciones de habitabilidad adecuadas, y estar adaptada al entorno. Además, debe ofrecer espacios para las actividades cotidianas y productivas propias de la vida en el campo. A continuación, se presentan los principales criterios que definen una vivienda rural digna:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/22.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Estructura segura
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Construcción sólida (paredes, techo, pisos firmes).
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Resistencia al clima (lluvia, viento, calor).
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Espacios sin riesgo de derrumbe o accidentes.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/23.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Acceso a servicios básicos
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Agua potable para consumo y aseo.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Energía eléctrica para iluminación, refrigeración, cocina y comunicación.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Saneamiento básico (pozo séptico u otro sistema).
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Manejo adecuado de aguas residuales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/24.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Espacio suficiente
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Áreas separadas para dormir, cocinar y convivir.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Evitar hacinamiento (demasiadas personas en un solo cuarto).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/25.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Ventilación e iluminación
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Ventanas o aberturas que permitan el paso del aire y la luz natural.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Protección contra frío, calor excesivo o humedad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/26.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Seguridad y protección
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Cierres adecuados (puertas, ventanas).
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Ubicación segura, lejos de deslizamientos, inundaciones, incendios o situaciones de violencia.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/27.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Ubicación adecuada
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Cercanía a fuentes de agua, vías de acceso, escuelas, centros de salud y mercados.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 No estar en zonas de alto riesgo (riberas, laderas inestables, etc.).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/28.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Adaptación rural
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Espacios para actividades productivas: huertas, corrales, herramientas, cosechas.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Uso de materiales locales (bahareque, guadua, ladrillo, etc.).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/29.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Condiciones de habitabilidad
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Privacidad, limpieza y ambientes saludables.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Espacios aptos para el descanso, la alimentación y la convivencia.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Marco legal y normativo en Colombia
    
    .row.mb-5.align-items-
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.tarjeta.p-4.h-100.d-flex.flex-column.justify-content-center.align-items-center.text-center(data-aos="fade-left")
          p.mb-0(data-aos="fade-left")
            | Según la Corte Constitucional y el Ministerio de Vivienda, la vivienda digna es un derecho fundamental, establecido en el Artículo 51 de la Constitución de 1991, el cual señala que:
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/30.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        img(src='@/assets/curso/tema2/31.svg', style="max-width: 80px" alt='AvatarTop').mb-3
        p(data-aos="fade-left")
          | Toda familia tiene derecho a una vivienda digna. El Estado fijará las condiciones necesarias para hacer efectivo este derecho y promoverá planes de vivienda de interés social, sistemas adecuados de financiación y formas asociativas de ejecución de estos programas.
    
    p.mb-5 Esto implica garantizar un lugar adecuado para vivir, con servicios públicos esenciales, espacio suficiente y condiciones de seguridad, salubridad y accesibilidad. Una vivienda digna rural debe ser segura, saludable, funcional y adaptada al entorno, con acceso a servicios básicos como agua, energía y saneamiento, y con condiciones adecuadas para vivir y trabajar con dignidad. Es un factor clave para el desarrollo humano y social de las comunidades campesinas.

    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Salud
    
    p.mb-5 El acceso a los servicios de salud en Colombia forma parte de los llamados servicios esenciales que deben ser garantizados por el Estado. De acuerdo con la Legislación vigente, especialmente la Ley Estatutaria 1751 de 2015, la salud es un derecho fundamental autónomo, lo que significa que todas las personas deben recibir atención médica sin importar su condición económica, social, lugar de residencia o afiliación al sistema de salud.

    .row.justify-content-center
      .col-lg-10
        .bg-color-5.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/32.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Los servicios básicos de salud comprenden un conjunto de atenciones esenciales orientadas a la prevención, tratamiento, rehabilitación y promoción de la salud, en todas las etapas del ciclo de vida. Estos están establecidos en el Plan de Beneficios en Salud (PBS) y deben ser garantizados tanto en zonas urbanas como rurales.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Componentes de los servicios básicos de salud en Colombia
    
    p.mb-5 El sistema de salud colombiano establece una serie de atenciones esenciales que deben garantizarse a toda la población como parte del Plan de Beneficios en Salud (PBS). Estas atenciones cubren las diferentes etapas del ciclo vital e incluyen acciones de prevención, promoción, diagnóstico, tratamiento y rehabilitación. A continuación, se detallan los principales servicios que componen la oferta básica de salud en Colombia:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/33.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Prevención y promoción
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Vacunación (niños, adultos, adultos mayores)
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Control prenatal y del recién nacido
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Programas de nutrición y crecimiento
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Control de enfermedades transmisibles (dengue, malaria, VIH)
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Educación para la salud (higiene, sexualidad, planificación familiar)
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Prevención de enfermedades crónicas (diabetes, hipertensión, obesidad)
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/34.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Atención médica general
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Consultas con medicina general
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Atención de urgencias
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Atención ambulatoria (sin hospitalización)
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Tratamiento de enfermedades comunes
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/35.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Medicamentos esenciales
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Entrega de medicamentos incluidos en el PBS
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Recetados por médicos
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Distribución gratuita en centros de salud o farmacias autorizadas
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/36.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Atención materno-infantil
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Controles prenatales y postparto
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Parto institucional
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Atención al recién nacido
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Vacunación y seguimiento del crecimiento y desarrollo
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/37.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Salud oral básica
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Limpieza e higiene oral
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Detección y tratamiento de caries
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Educación en salud bucal
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/38.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Salud mental básica
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Atención psicológica primaria
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Detección de trastornos mentales comunes
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Derivación a servicios especializados si es necesario
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/39.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Exámenes de laboratorio
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Pruebas de sangre, orina, embarazo, VIH, etc.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Diagnóstico precoz de enfermedades

    

                


</template>

<script>
export default {
  name: 'Tema2',
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
