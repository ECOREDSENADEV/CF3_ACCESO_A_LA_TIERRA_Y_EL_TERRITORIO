<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Servicios básicos para el bienestar campesino y su garantía como derechos fundamentales',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave sobre el acceso a servicios básicos en comunidades campesinas, su importancia para el bienestar, y el marco legal que los respalda como derechos fundamentales en Colombia.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal del acceso a servicios básicos en zonas rurales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Garantizar el desarrollo económico de las ciudades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar la dignidad, equidad y calidad de vida en comunidades campesinas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear dependencia del Estado en las zonas rurales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fomentar el turismo rural.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué práctica NO es recomendable en el manejo de residuos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar compostaje con residuos orgánicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Separar los residuos peligrosos y llevarlos a puntos autorizados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Quemar residuos inorgánicos como plástico y latas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Usar jabones ecológicos para evitar contaminación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué práctica NO es recomendable en el manejo de residuos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar compostaje con residuos orgánicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Separar los residuos peligrosos y llevarlos a puntos autorizados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Quemar residuos inorgánicos como plástico y latas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Usar jabones ecológicos para evitar contaminación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una ventaja del gas licuado de petróleo (GLP) como fuente energética?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es gratuito para las zonas rurales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es limpio, rápido y controlable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No requiere instalaciones seguras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Produce menos calor que la leña.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué criterio NO forma parte de una vivienda rural digna según el documento?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estructura segura y resistente al clima.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Acceso a servicios básicos como agua y energía.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ubicación en zonas alejadas de cualquier vía.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Adaptación a actividades productivas del campo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué ley establece que la salud es un derecho fundamental autónomo en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 100 de 1993.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ley Estatutaria 1751 de 2015.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Código Civil Colombiano.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ley de Seguridad Social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es una de las condiciones para garantizar el derecho a la educación?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asistencia voluntaria según recursos disponibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Accesibilidad sin barreras físicas, económicas o culturales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Pago de mensualidades simbólicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Asistencia exclusiva en zonas urbanas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué característica hace que una alimentación sea considerada adecuada?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tener sabor agradable para todos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ser nutritiva, suficiente y culturalmente apropiada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incluir solo productos locales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tener bajo contenido calórico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de las siguientes es una amenaza a la seguridad en zonas rurales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acceso a internet gratuito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presencia de grupos armados ilegales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Construcción de viviendas de interés social.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Participación ciudadana en decisiones locales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué se requiere para que una vía rural esté en buen estado?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo pavimentación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tener semáforos y cámaras de vigilancia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Transitabilidad permanente y mantenimiento regular.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Estar ubicada cerca de zonas turísticas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La electricidad es un derecho esencial vinculado al acceso a otros derechos como salud y educación.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Las mujeres rurales no se ven afectadas por el uso de fogones de leña tradicionales.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El derecho a un ambiente sano está consagrado en el Artículo 79 de la Constitución Colombiana.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El transporte rural eficiente no influye en el ejercicio de otros derechos fundamentales.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'La conectividad puede considerarse un habilitador de derechos fundamentales en zonas rurales.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
