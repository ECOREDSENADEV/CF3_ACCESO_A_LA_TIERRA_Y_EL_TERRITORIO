export default {
  global: {
    Name:
      'Exploremos los servicios básicos como un pilar de bienestar para los campesinos.',
    Description:
      'El componente formativo  analiza cómo los servicios básicos como agua, saneamiento, energía, vivienda, salud, educación, alimentación, seguridad, medio ambiente, transporte y conectividad son fundamentales para el bienestar campesino. Reconoce su carácter de derechos esenciales, necesarios para garantizar dignidad, equidad, desarrollo sostenible y calidad de vida en las comunidades rurales, fortaleciendo la justicia social y la inclusión territorial en Colombia. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '¿Qué es bienestar en el contexto de una comunidad campesina?',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '¿Qué son los servicios básicos o esenciales?',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Agua potable y saneamiento básico',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Energía ',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Vivienda digna',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Salud',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Servicios para el desarrollo y la equidad rural',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Educación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Alimentación ',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Seguridad',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Medio ambiente sano',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Transporte público y vías de comunicación',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Conectividad',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Agua potable y saneamiento básico',
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2017). Agricultura al día – Las reservas naturales, resguardos de agua del campo colombiano [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=D-AkS5YQx8k ',
    },
    {
      tema: 'Vivienda digna',
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio. (2025). Mejoramiento de vivienda. ',
      tipo: 'Programa gubernamental',
      link:
        'https://www.minvivienda.gov.co/viceministerio-de-vivienda/mejoramiento-de-vivienda#:~:text=%C2%BFCu%C3%A1l%20es%20la%20meta%20del,periodo%20de%20gobierno%202022%2D2026',
    },
    {
      tema: 'Servicios para el desarrollo y la equidad rural',
      referencia:
        'Naciones Unidas. (1948). La Declaración Universal de los Derechos Humanos. . ',
      tipo: 'Pagina web',
      link:
        'https://www.un.org/es/about-us/universal-declaration-of-human-rights',
    },
    {
      tema: 'Educación',
      referencia:
        'UNESCO en español (2017, 29 de marzo). Derecho a la educación [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2KEZc4oIB9s',
    },
    {
      tema: 'Medio ambiente sano',
      referencia:
        'Quien es quien. (2019). ¿Cuáles son Objetivos Desarrollo Sostenible, Objetivos del Milenio o ODS? [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GQl-sdFh9Eo',
    },
  ],
  glosario: [
    {
      termino: 'Compostaje',
      significado:
        'es un proceso natural mediante el cual los restos orgánicos (como cáscaras de frutas, verduras, hojas secas o residuos de comida) se descomponen y se convierten en abono o tierra fértil que puede usarse para cultivar plantas.',
    },
    {
      termino: 'Entidades territoriales',
      significado:
        'son las diferentes divisiones del territorio colombiano que tienen autonomía para gobernarse, administrar sus recursos y tomar decisiones propias, dentro de los límites que establece la Constitución. Estas entidades son: los departamentos, los distritos, los municipios y los territorios indígenas.',
    },
    {
      termino: 'Equidad',
      significado:
        'es una forma de justicia social que reconoce que no todas las personas están en igualdad de condiciones, por lo tanto, requieren apoyos o tratos diferentes para alcanzar el mismo nivel de bienestar, acceso o derechos.',
    },
    {
      termino: 'Gas licuado de petróleo (GLP)',
      significado:
        'es una mezcla de gases, principalmente propano y butano, que se obtiene del petróleo y del gas natural. Se almacena en estado líquido bajo presión y se utiliza como combustible para cocinar, calentar agua, calefacción y en algunos vehículos.',
    },
    {
      termino: 'Pozo séptico',
      significado:
        'es un hueco o tanque bajo tierra que sirve para tratar las aguas sucias de una casa, como las del baño o la cocina. Se usa especialmente en zonas rurales donde no hay alcantarillado. Allí se separan los residuos sólidos de los líquidos, y parte de los desechos se descompone antes de que el agua se filtre al suelo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asamblea General de las Naciones Unidas. (1948). Declaración Universal de los Derechos Humanos. ',
      link:
        'https://www.un.org/es/about-us/universal-declaration-of-human-rights',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2012). Lineamientos estratégicos de política pública: Agricultura campesina, familiar y comunitaria. ',
      link: '',
    },
    {
      referencia:
        'República de Colombia. (1991). Constitución política de Colombia.  ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125',
    },
    {
      referencia:
        'Superintendencia de Servicios Públicos Domiciliarios. (2014). Cartilla municipal de los servicios públicos domiciliarios. Imprenta Nacional de Colombia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
