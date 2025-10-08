<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Servicios para el desarrollo y la equidad rural
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para que las comunidades rurales y campesinas puedan alcanzar una vida digna, es fundamental garantizar el acceso a servicios que no solo cubran sus necesidades básicas, sino que impulsen su desarrollo integral. El desarrollo rural no solo se trata de infraestructura, sino de asegurar que todas las personas, sin importar su ubicación, puedan ejercer plenamente sus derechos y oportunidades.
    
    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Educación
    
    p.mb-5 La educación es reconocida como un servicio básico y un derecho fundamental, tanto a nivel nacional como internacional. Este reconocimiento implica que el Estado tiene la obligación de garantizar su acceso, permanencia y calidad, sin discriminación alguna. A continuación, se presentan los principales marcos normativos que sustentan este derecho:

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Declaración Universal de los Derechos Humanos (1948), Art. 26")
            p.ms-5 Toda persona tiene derecho a la educación. Debe ser gratuita en la instrucción elemental y fundamental, y la instrucción elemental será obligatoria.
          div(titulo="Convención sobre los Derechos del Niño (1989)")
            p.ms-5 Obliga a los Estados a garantizar educación primaria gratuita y a fomentar la educación secundaria y superior.
          div(titulo="Constitución Política de Colombia (1991), Art. 67")
            p.ms-5 La educación es un derecho y un servicio público con función social, que busca el acceso al conocimiento, la ciencia, la técnica y los valores de la cultura.
    
    .row.justify-content-center
      .col-lg-10
        .bg-color-18.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/3.png', alt='')
            .col-lg
              .p-4
                h4 ¿Qué implica que la educación sea un derecho fundamental?
                p.mb-0(data-aos="fade-up") El reconocimiento de la educación como derecho fundamental obliga al Estado a garantizarla bajo cuatro condiciones esenciales: accesibilidad, obligatoriedad, gratuidad y calidad. Estas dimensiones buscan asegurar una educación equitativa, inclusiva y efectiva para todos los ciudadanos.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Condiciones del derecho a la educación
    
    p.mb-5 Para que el derecho a la educación sea efectivo y garantice una experiencia formativa integral, el Estado debe cumplir con cuatro condiciones fundamentales que aseguren no solo el acceso, sino también la permanencia y la calidad del proceso educativo. Estas condiciones, reconocidas por organismos internacionales y la legislación colombiana, se describen a continuación:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Accesibilidad
              p Significa que todas las personas deben poder ingresar y permanecer en el sistema educativo, sin barreras físicas, económicas, sociales, culturales o tecnológicas.
              p Tipos de accesibilidad:
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Física: infraestructura cercana y adaptada.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Económica: gratuidad, subsidios y becas.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Cultural y lingüística: respeto por la diversidad y educación bilingüe en comunidades indígenas.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Tecnológica: acceso a internet y dispositivos.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Pedagógica: métodos y materiales adaptados a distintas capacidades.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Obligatoriedad
              p El Estado debe exigir legalmente la asistencia escolar durante la educación básica. Implica deberes compartidos:
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Del Estado: garantizar escuelas públicas suficientes y supervisar la asistencia.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 De las familias: inscribir y mantener a sus hijos en la escuela.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 De los estudiantes: asistir y cumplir con sus responsabilidades.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Gratuidad
              p Supone que la educación pública no tenga costo económico directo para las familias, al menos en los niveles preescolar, primaria y secundaria básica.
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 En media, la gratuidad aún no es plena, aunque se han eliminado costos como matrícula o carné.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Se brindan apoyos económicos a estudiantes de familias vulnerables.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Calidad
              p No basta con asistir a la escuela; la educación debe ser pertinente, inclusiva y formadora de personas íntegras.
              p Incluye:
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Currículos relevantes y contextualizados.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Docentes bien preparados.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Infraestructura adecuada.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Clima escolar positivo.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Recursos didácticos suficientes.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Equidad y permanencia escolar.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Evaluaciones que midan aprendizajes útiles para la vida.
    
    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Alimentación
    
    p.mb-5 El derecho a la alimentación es uno de los pilares fundamentales para garantizar una vida digna, especialmente en comunidades rurales y campesinas. Este derecho está directamente relacionado con otros derechos esenciales como el derecho a la vida, el derecho a la salud, y el derecho a la educación.

    .row.mb-5.justify-content-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
      .col-lg-5
        .bg-color-4.p-4(data-aos="fade-left")
          p Según la Declaración Universal de los Derechos Humanos (1948) y la Constitución Política de Colombia, el Estado tiene la obligación de proteger la producción de alimentos y garantizar una nutrición adecuada, especialmente para niños, mujeres en gestación o lactancia y personas en situación de vulnerabilidad.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Qué implica el derecho a la alimentación?
    
    p.mb-5 Tener acceso a alimentos no significa solamente "no pasar hambre". La alimentación debe ser adecuada, suficiente, nutritiva y digna, y esto implica garantizar los siguientes elementos:

    .bg-full-width.bg-fondo-3
      .p-5
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-5.p-2 Disponibilidad
                p.text-center Que exista una oferta suficiente de alimentos, ya sea por producción local o abastecimiento constante.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-5.p-2 Acceso
                p.text-center Que las personas puedan obtener alimentos física y económicamente, sin barreras.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-5.p-2 Adecuación
                p.text-center Que los alimentos sean nutritivos, seguros, culturalmente apropiados y respeten las costumbres alimentarias de la comunidad.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-5.p-2 Sostenibilidad
                p.text-center Que su producción y distribución no comprometan el medio ambiente ni los recursos de futuras generaciones.
    
          .col-lg-3.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/9.svg', alt='')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Grupos de alimentos para una nutrición adecuada
    
    p.mb-5 Una alimentación equilibrada debe incluir distintos tipos de nutrientes. A continuación se presentan los principales grupos de alimentos y su función en el organismo:
    
    .bg-full-width.bg-fondo-4
      .p-5
        SlyderF(columnas="col-12 col-lg-4").mb-5
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4.bg-color-6.p-2 Proteínas
            p.text-center Construyen y reparan tejidos. Ejemplos: carne, pescado, huevos, legumbres, leche, queso.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4.bg-color-6.p-2 Carbohidratos
            p.text-center Fuente principal de energía. Ejemplos: pan, arroz, pasta, yuca, frutas, azúcar.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4.bg-color-6.p-2 Grasas (lípidos)
            p.text-center Aportan energía concentrada y cumplen funciones celulares. Ejemplos: aceites, aguacate, frutos secos, mantequilla.idad.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4.bg-color-6.p-2 Vitaminas
            p.text-center Regulan funciones metabólicas. Ejemplos: frutas, verduras, legumbres (Vit. A, B, C, D).
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4.bg-color-6.p-2 Minerales
            p.text-center Contribuyen a la formación de huesos, dientes y funciones nerviosas y musculares. Ejemplos: calcio, hierro, potasio, zinc. Que su producción y distribución no comprometan el medio ambiente ni los recursos de futuras generaciones.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto ¿Quién garantiza una alimentación adecuada?

    p A nivel nacional e internacional, los Estados tienen la obligación de garantizar este derecho, especialmente a los grupos más vulnerables. La desnutrición y el hambre son formas graves de exclusión social, y su existencia impide el ejercicio de otros derechos como la salud, la educación o el trabajo.

    p.mb-5 A continuación, se presenta un video que analiza la compleja realidad de la alimentación en zonas rurales, abordando los factores que limitan el acceso a una dieta nutritiva y equilibrada en comunidades campesinas, a pesar de su rol fundamental en la producción de alimentos.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Soluciones y acciones necesarias
    
    p.mb-5 Para mejorar esta situación, es fundamental:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/19.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-18.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0.ms-3
            li.mb-3.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 <b>Realizar seguimiento</b> a través de brigadas, encuestas nutricionales y visitas comunitarias.
            li.mb-3.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 <b>Implementar programas de educación alimentaria y jornadas de capacitación</b> sobre prácticas seguras de consumo y preparación.
            li.mb-3.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 <b>Mejorar los programas de entrega de alimentos</b> para población vulnerable, con monitoreo constante de su calidad, pertinencia y valor nutricional.
            li.mb-3.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 <b>Fortalecer la agricultura familiar</b>, promoviendo la soberanía alimentaria y el acceso equitativo a recursos productivos.
    
    p.mb-5 El derecho a la alimentación implica mucho más que evitar el hambre: se trata de garantizar alimentos suficientes, nutritivos y adecuados para todas las personas, especialmente en las zonas rurales. Una alimentación digna es condición indispensable para el bienestar, la equidad y el desarrollo integral.

    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Seguridad
    
    p.mb-5 La seguridad en las comunidades campesinas, entendida en relación con el orden público, constituye un componente esencial dentro del conjunto de derechos fundamentales, ya que está estrechamente ligada al derecho a la vida, la libertad, la integridad personal y la dignidad humana.

    .row.mb-5.justify-content-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/20.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-4.px-4.py-5(data-aos="fade-left")
          p.mb-0 Aunque el término seguridad no está definido de forma autónoma como un derecho fundamental en la Constitución Política de Colombia, sí forma parte integral de derechos ya reconocidos. En este sentido, el Estado tiene la responsabilidad de garantizar condiciones de seguridad en todo el territorio, incluida la ruralidad, como requisito para la convivencia pacífica y el ejercicio pleno de los derechos del campesinado.
    
    p.mb-5 La seguridad puede definirse como la situación en la que las normas de convivencia, la paz y la autoridad legítima del Estado se mantienen vigentes, evitando cualquier acción que altere el funcionamiento normal de la sociedad, como disturbios, violencia, terrorismo, delincuencia o bloqueos ilegales.

    .bg-color-23.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/21.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 A continuación, se presenta un podcast  que examina las principales amenazas al orden público y la seguridad en las zonas rurales de Colombia, destacando su impacto en la vida cotidiana, los derechos humanos y el desarrollo de las comunidades campesinas.

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/22.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-1.mb-5.tarjeta
          .p-4.p-md-5
            .row.justify-content-center.align-items-center
              .col-lg-5.m-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema3/23.svg", data-aos="zoom-in")
              .col-lg-7
                h4 Pódcast
        
                TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                  texto="Fundamentos de la innovación estratégica"
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Instituciones responsables de garantizar la seguridad
    
    p.mb-5 La seguridad y el orden público en Colombia son responsabilidad del Estado, y su mantenimiento recae en una serie de instituciones nacionales y territoriales, que deben actuar de forma articulada para prevenir riesgos, proteger a la población y asegurar la vigencia del Estado de derecho. 

    .row.mb-5.justify-content-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/24.png", data-aos="zoom-in")
      .col-lg-6
        .bg-color-18.p-4(data-aos="fade-left")
          p Las principales entidades encargadas son:
          ul.lista-ul--color.mb-0.ms-3
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Presidencia de la República
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Ministerio de Defensa Nacional
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Policía Nacional
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Fuerzas Militares
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Gobernaciones y alcaldías (autoridades civiles locales)
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Unidad Nacional de Protección (UNP): para líderes sociales, defensores de derechos humanos y personas en riesgo
    
    p.mb-5 La seguridad, como parte del orden público, es una obligación estatal que permite proteger a la población, mantener la paz y asegurar que se respeten los derechos y la ley. En zonas rurales, esta garantía es clave para que las comunidades campesinas puedan vivir con tranquilidad, desarrollar sus actividades productivas y ejercer su ciudadanía sin temor.

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Medio ambiente sano
    
    p.mb-5 El acceso a un medio ambiente sano es una condición esencial para el bienestar y la vida digna de las comunidades campesinas. Este derecho les permite vivir, cultivar, criar animales, conservar su cultura y proteger su territorio en condiciones que no representen riesgos para su salud ni para la sostenibilidad de los recursos naturales. En Colombia, este derecho está consagrado en la Constitución Política de 1991, en su Artículo 79, que establece:

    .row.justify-content-center
      .col-lg-8
        .bg-color-23.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.order-2
              figure
                img(src='@/assets/curso/tema3/25.png', alt='')
            .col-lg.order-1.mb-3.mb-lg-0
              .bloque-texto-c.bg-color-23.p-4
                i.fas.fa-quote-right
                h4.mb-2 Todas las personas tienen derecho a gozar de un ambiente sano. Es deber del Estado proteger la diversidad e integridad del ambiente…
    
    p.mb-5 Aunque el carácter fundamental del derecho a un ambiente sano puede depender del contexto, en la práctica se entiende como un pilar transversal para el ejercicio de otros derechos fundamentales, como la vida, la salud, el trabajo y la alimentación.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Qué se entiende por un ambiente sano para los campesinos?

    p.mb-5 Un ambiente sano para el campesinado colombiano es aquel en el que el entorno natural permite vivir y producir dignamente, con acceso a recursos como tierra fértil, agua limpia, biodiversidad conservada, y condiciones para una agricultura sostenible. Además, implica el respeto por la identidad cultural de las comunidades y la protección efectiva de su territorio frente a amenazas ambientales. A continuación, se describen los principales parámetros que definen un ambiente sano para las comunidades rurales:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/26.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Acceso a tierras fértiles
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Suelos libres de contaminación por minería ilegal, uso excesivo de agroquímicos o residuos industriales.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Protección frente al acaparamiento de tierras y la deforestación no regulada.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/27.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Agua limpia y suficiente
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Acceso a fuentes de agua no contaminadas para consumo humano, riego, ganado y cultivos.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Promoción de la protección y recuperación de nacimientos, quebradas, ríos y humedales
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/28.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Biodiversidad y ecosistemas sanos
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Conservación de bosques, semillas nativas, fauna y flora.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Protección frente a cultivos transgénicos o monocultivos que agotan el suelo.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Fomento del uso de semillas criollas y biodiversidad local de forma sostenible.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/29.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Agricultura limpia y sostenible
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Promoción de la agroecología y prácticas agrícolas responsables.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Uso controlado de agroquímicos que no afecten la salud humana, animal ni el equilibrio ecológico.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/30.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Identidad cultural y participación
              ul.lista-ul--color.mb-0.ms-3
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Respeto por las prácticas tradicionales, saberes campesinos y formas de relación con la naturaleza.
                li.mb-2.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Derecho a la consulta y participación en decisiones que afectan el territorio, fomentando la soberanía territorial y la autodeterminación de las comunidades rurales.

    p.mb-5 Para las comunidades campesinas, un medio ambiente sano va más allá del aire limpio. Significa tener tierra fértil para cultivar, agua limpia para vivir, biodiversidad para proteger, y respeto por su identidad cultural y territorial. También implica que el Estado adopte legislación ambiental efectiva, promueva la educación ambiental y garantice que el desarrollo rural no comprometa los recursos naturales de las generaciones futuras.

    separador
    
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Transporte público y vías de comunicación

    p.mb-5 El acceso a un transporte público de calidad y a vías de comunicación en buen estado es una condición fundamental para mejorar la calidad de vida, la productividad y el bienestar de las comunidades campesinas en Colombia. Aunque no está expresamente definido como un derecho fundamental autónomo en la Constitución Política, sí puede adquirir ese carácter cuando su ausencia impide el ejercicio de otros derechos, como:

    .row.justify-content-center.mb-5
      .col-md-4.col-p-xl-4l-2.mb-3.mb-xl-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/31.svg', style="max-width: 90px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-color-4.w-100
            .p-4.text-center
              p.mb-0 El derecho a la educación.
      .col-md-4.col-p-xl-4l-2.mb-3.mb-xl-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/31.svg', style="max-width: 90px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-color-4.w-100
            .p-4.text-center
              p.mb-0 El derecho a la salud.
      .col-md-4.col-p-xl-4l-2.mb-3.mb-xl-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/31.svg', style="max-width: 90px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-color-4.w-100
            .p-4.text-center
              p.mb-0 La libertad de locomoción.
      .col-md-4.col-p-xl-4l-2.mb-3.mb-xl-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/31.svg', style="max-width: 90px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-color-4.w-100
            .p-4.text-center
              p.mb-0 El derecho al trabajo.
      .col-md-4.col-p-xl-4l-2.mb-3.mb-xl-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/31.svg', style="max-width: 90px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-color-4.w-100
            .p-4.text-center
              p.mb-0 La igualdad y la no discriminación.
      .col-md-4.col-p-xl-4l-2.mb-3.mb-xl-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/31.svg', style="max-width: 90px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-color-4.w-100
            .p-4.text-center
              p.mb-0 El mínimo vital y la dignidad humana.

    p.mb-5 En este sentido, el Estado tiene la obligación de garantizar la accesibilidad territorial, especialmente en zonas rurales, como una forma de asegurar condiciones de vida digna y el acceso equitativo a servicios esenciales.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Transporte público en zonas rurales: condiciones mínimas

    p.mb-5 En el contexto rural colombiano, un transporte público digno y eficiente va más allá de contar con vehículos disponibles. Implica garantizar un servicio ajustado a las condiciones geográficas y necesidades sociales, coherente con los principios constitucionales de dignidad, accesibilidad, igualdad y bienestar general. A continuación, se presentan las condiciones fundamentales que debe cumplir este servicio:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/32.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Accesibilidad geográfica y física
              p Debe llegar a veredas, corregimientos y caseríos, operar en terrenos difíciles y estar adaptado para personas mayores o con discapacidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/33.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Regularidad y frecuencia
              p Horarios constantes y predecibles, con frecuencia suficiente para permitir el acceso a salud, educación, empleo, mercados y trámites.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/34.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Seguridad y dignidad
              p Vehículos en buen estado, conductores capacitados, trato respetuoso, y protección frente a accidentes y condiciones climáticas adversas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/35.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Costo asequible
              p Tarifas proporcionales al ingreso rural, con subsidios o tarifas diferenciadas para grupos vulnerables (campesinos, niños, adultos mayores, estudiantes, entre otros.).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/36.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Integración territorial
              p Conexión con sistemas regionales, rutas urbanas e intermunicipales, que faciliten el acceso a servicios básicos y actividades económicas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/37.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Participación comunitaria
              p Las comunidades deben tener voz en la planeación, vigilancia y evaluación del servicio, adaptándolo a las condiciones culturales, sociales y económicas del territorio.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Realidad del transporte rural en Colombia
    
    p.mb-5 En muchas zonas del país, estas condiciones no se cumplen debido a:

    .row.mb-5.justify-content-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/38.png", data-aos="zoom-in")
      .col-lg-5
        .bg-color-4.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0.ms-3
            li.mb-3.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Mal estado de las vías terciarias.
            li.mb-3.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Bajo interés comercial por parte de operadores.
            li.mb-3.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Abandono estatal o presencia de actores armados.
            li.mb-3.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Aislamiento geográfico y dificultades topográficas.
    
    p.mb-5 Esto dificulta el acceso a servicios esenciales y limita el ejercicio de múltiples derechos fundamentales.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Qué se considera una vía rural en buen estado?
    
    p.mb-5 Una vía rural eficiente no es simplemente una carretera pavimentada, sino una infraestructura funcional, adaptada a las condiciones del entorno rural y con mantenimiento permanente. A continuación, se presentan los criterios básicos que debe cumplir:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Transitabilidad permanente")
        .row.align-items-center.p-5
          .col-lg-7.mb-4.mb-md-0
            h4 Transitabilidad permanente
            p Permite el paso de vehículos durante todo el año, incluso en invierno; evita interrupciones por deslizamientos, inundaciones o huecos.
          .col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/39.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Seguridad vial")
        .row.align-items-center.p-5
          .col-lg-7.mb-4.mb-md-0
            h4 Seguridad vial
            p Superficie estable, sin hundimientos o erosión; señalización básica y elementos de protección (puentes, cunetas); apta para todo tipo de tránsito rural (peatonal, animal, vehicular).
          .col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/40.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Adaptación al entorno")
        .row.align-items-center.p-5
          .col-lg-7.mb-4.mb-md-0
            h4 Adaptación al entorno
            p Construida con materiales adecuados al clima y suelo local (recebo, placa huella); permite el paso de ambulancias, camiones agrícolas, tractores, etc.
          .col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/41.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Conectividad territorial")
        .row.align-items-center.p-5
          .col-lg-7.mb-4.mb-md-0
            h4 Conectividad territorial
            p Comunica veredas y centros rurales con escuelas, puestos de salud, mercados, cabeceras municipales y vías secundarias o primarias.
          .col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/42.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Mantenimiento regular")
        .row.align-items-center.p-5
          .col-lg-7.mb-4.mb-md-0
            h4 Mantenimiento regular
            p Mantenimiento preventivo y correctivo a cargo de entidades públicas y organizaciones comunitarias; incluida en planes de desarrollo municipales o departamentales.
          .col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/43.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Participación y sostenibilidad")
        .row.align-items-center.p-5
          .col-lg-7.mb-4.mb-md-0
            h4 Participación y sostenibilidad
            p Gestión participativa con Juntas de Acción Comunal y asociaciones campesinas; incorporación de criterios ambientales (drenaje, control de erosión, conservación del entorno).
          .col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/44.png', alt='Texto que describa la imagen')
    
    p.mb-5 El transporte público rural y las vías de comunicación en buen estado son fundamentales para garantizar el acceso a servicios, la integración territorial, el desarrollo económico y el ejercicio pleno de los derechos de las comunidades campesinas. Una vía rural eficiente:

    .row.mb-5.justify-content-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/45.png", data-aos="zoom-in")
      .col-lg-6
        .bg-color-18.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0.ms-3
            li.mb-3.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Permite la movilidad segura y constante de personas y bienes.
            li.mb-3.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Se adapta a las condiciones locales del territorio.
            li.mb-3.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Contribuye al desarrollo social y económico del campo colombiano.
            li.mb-3.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Es parte del derecho al bienestar, la igualdad y la dignidad humana.

    separador
    
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.6 Conectividad 
    
    p.mb-5 En el mundo actual, el acceso a internet y telecomunicaciones se ha convertido en un factor esencial para garantizar el ejercicio de múltiples derechos fundamentales. Si bien la Constitución Política de Colombia no consagra la conectividad como un derecho fundamental autónomo, en la práctica sí puede adquirir ese carácter, especialmente cuando su ausencia impide el acceso efectivo a derechos como:

    .row.mb-5.justify-content-center
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/46.png", data-aos="zoom-in")
      .col-lg-4.order-lg-1
        .bg-color-4.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0.ms-3
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 La educación.
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 El trabajo.
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 La información.
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 La libertad de expresión.
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 La igualdad.
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 El acceso a servicios de salud y justicia.
    
    p.mb-5 Este enfoque ha sido adoptado progresivamente por la Corte Constitucional y por organismos internacionales, al reconocer que la conectividad es un habilitador transversal de derechos fundamentales, particularmente en contextos rurales y vulnerables.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Qué es un servicio de conectividad eficiente en zonas rurales?
    
    p.mb-5 Un servicio eficiente de conectividad en el contexto rural colombiano es aquel que ofrece acceso constante, de buena calidad, a un precio justo, y adaptado a las condiciones locales, permitiendo que las personas puedan:

    .row.mb-5.justify-content-center
      .col-md-4.col-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
        div.bg-color-5.p-4.text-center
          p.mb-0 Estudiar
      .col-md-4.col-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
        div.bg-color-23.p-4.text-center
          p.mb-0 Trabajar
      .col-md-4.col-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
        div.bg-color-5.p-4.text-center
          p.mb-0 Acceder a la salud
      .col-md-4.col-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
        div.bg-color-23.p-4.text-center
          p.mb-0 Comunicarse
      .col-md-4.col-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
        div.bg-color-5.p-2.text-center.h-100
          p.mb-0 Participar activamente en la sociedad

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Características clave de una conectividad rural eficiente
    
    p.mb-5 Para que el acceso a internet y telecomunicaciones sea realmente útil en el contexto rural, no basta con instalar antenas o brindar señal intermitente. Se requiere un servicio que responda a las condiciones específicas del territorio, a las necesidades de la población y a los principios de equidad, inclusión y sostenibilidad. A continuación, se describen los aspectos fundamentales que debe cumplir un servicio de conectividad eficiente en zonas rurales:

    .row.mb-3
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/47.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Cobertura adecuada")
            ul.lista-ul--color.mb-0.ms-5
              li.mb-2.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Llega efectivamente a veredas, caseríos y zonas dispersas.
              li.mb-2.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Usa tecnologías apropiadas para zonas de difícil acceso (móviles, satelitales, comunitarias).
          div(titulo="Calidad del servicio")
            ul.lista-ul--color.mb-0.ms-5
              li.mb-2.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Velocidad suficiente para educación virtual, comercio, videollamadas, telemedicina.
              li.mb-2.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Estabilidad sin interrupciones frecuentes.
          div(titulo="Asequibilidad")
            ul.lista-ul--color.mb-0.ms-5
              li.mb-2.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Tarifas proporcionales a los ingresos rurales.
              li.mb-2.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Acceso a <b>subsidios, tarifas sociales o modelos comunitarios alternativos.</b>

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/48.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Inclusión digital")
            ul.lista-ul--color.mb-0.ms-5
              li.mb-2.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Programas de <b>alfabetización digital básica</b>, especialmente para niños, adultos mayores, mujeres rurales, comunidades indígenas y afrodescendientes.
              li.mb-2.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Acceso a dispositivos, plataformas y contenidos educativos relevantes.
          div(titulo="Enfoque diferencial")
            ul.lista-ul--color.mb-0.ms-5
              li.mb-2.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Adaptación cultural, lingüística y territorial del servicio.
              li.mb-2.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Participación comunitaria en su diseño y monitoreo.
              li.mb-2.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Uso de conectividad para fortalecer la cultura local (radios comunitarias, redes sociales, contenidos educativos).
          div(titulo="Sostenibilidad")
            ul.lista-ul--color.mb-0.ms-5
              li.mb-2.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 El servicio debe ser <b>permanente, continuo y respaldado por políticas públicas.</b>
              li.mb-2.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Requiere inversión estatal y/o alianzas público-comunitarias duraderas.
      
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Contexto rural colombiano
    
    p.mb-5 En Colombia, las brechas de conectividad entre lo urbano y lo rural son profundas. Muchas veredas, corregimientos y caseríos carecen completamente de internet, o cuentan con servicios precarios, intermitentes y costosos. Esta situación limita el acceso de las comunidades campesinas a:

    .row.mb-5.justify-content-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/49.png", data-aos="zoom-in")
      .col-lg-4
        .bg-color-18.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0.ms-3
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 La educación virtual.
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 La telemedicina.
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 La comercialización digital de productos.
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 La participación ciudadana.
            li.mb-2.d-flex
              i.fas.fa-leaf.bg-color-7
              p.mb-0 Los servicios públicos digitales.

    .bg-color-info.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 La falta de conectividad refuerza la desigualdad estructural entre el campo y la ciudad, afectando directamente el desarrollo rural y el ejercicio de derechos fundamentales. La conectividad en zonas rurales no es solo un asunto técnico, es una cuestión de equidad y garantía de derechos. Su eficiencia no se mide únicamente en velocidad o cobertura, sino en su capacidad para integrar a las comunidades rurales a la vida social, económica, educativa y política del país, con dignidad, calidad y sostenibilidad.



        


        
</template>

<script>
export default {
  name: 'Tema3',
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
