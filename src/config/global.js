export default {
  global: {
    Name: 'Ejecución y evaluación del plan de formación',
    Description:
      'Conceptos y usos para administradores de bases de datos con Microsoft Access desarrolla habilidades para estructurar, proteger y optimizar de forma constante los sistemas de información digital. Promueve la ejecución de mantenimientos preventivos, la configuración de medidas de seguridad robustas y la administración de niveles de acceso según los usuarios, garantizando la integridad, confidencialidad y disponibilidad de los datos frente a los requerimientos del entorno organizacional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo:
          'Identificación de técnicas de mantenimiento y ajustes de bases de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Configuración de herramientas y técnicas de seguridad en los datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Administración de niveles de acceso a los datos según los usuarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Configuración de restricciones e interfaces dinámicas',
        desarrolloContenidos: true,
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
  /*complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],*/
  glosario: [
    {
      termino: 'Administrador de bases de datos',
      significado:
        'Profesional o usuario avanzado responsable del diseño, implementación, mantenimiento y seguridad de un sistema de información estructurado.',
    },
    {
      termino: 'Archivo ejecutable (.accde)',
      significado:
        'Versión compilada de una base de datos de Access donde el código fuente y el diseño de formularios/informes están bloqueados, protegiendo la propiedad intelectual y evitando alteraciones accidentales.',
    },
    {
      termino: '<em>Backend</em> (base de datos final)',
      significado:
        'En una arquitectura dividida, es el archivo que aloja exclusivamente las tablas con los datos crudos, generalmente resguardado en un servidor o carpeta de red segura.',
    },
    {
      termino: '<em>Bloating</em> (hinchazón de datos)',
      significado:
        'Fenómeno técnico donde un archivo de base de datos aumenta su tamaño físico de manera desproporcionada debido a la acumulación de espacios vacíos dejados por registros eliminados temporalmente.',
    },
    {
      termino: 'Cifrado de datos',
      significado:
        'Proceso criptográfico que transforma la información legible de la base de datos en un formato incomprensible (texto cifrado) para usuarios sin la contraseña o clave de desencriptación.',
    },
    {
      termino: 'Compactar y reparar',
      significado:
        'Herramienta nativa de Microsoft Access diseñada para reorganizar el espacio de almacenamiento del archivo, eliminar vacíos y corregir errores en los índices de las tablas.',
    },
    {
      termino: 'Contraseña de base de datos',
      significado:
        'Clave de seguridad exigida por el sistema a nivel de archivo antes de permitir la apertura y lectura de la información cifrada.',
    },
    {
      termino: 'Control de acceso basado en roles',
      significado:
        'Metodología de seguridad que asigna permisos (Lectura, Escritura, Eliminación) a perfiles específicos dentro de la organización, en lugar de asignarlos individualmente a cada persona.',
    },
    {
      termino: 'Copia de seguridad (<em>Backup</em>)',
      significado:
        'Duplicado exacto de la base de datos almacenado en una ubicación secundaria, utilizado para restaurar la información en caso de corrupción, pérdida o ataque cibernético.',
    },
    {
      termino: 'Fragmentación',
      significado:
        'Desorganización interna de los datos y los índices dentro del archivo físico, lo cual provoca lentitud en la ejecución de consultas y en la generación de informes.',
    },
    {
      termino: '<em>Frontend</em> (base de datos frontal)',
      significado:
        'Archivo que contiene la interfaz de usuario (formularios, informes, consultas y código de programación) y que se conecta de manera remota a las tablas ubicadas en el <em>Backend</em>.',
    },
    {
      termino: 'Llave principal (<em>primary key</em>)',
      significado:
        'Campo o conjunto de campos que identifica de manera única cada registro dentro de una tabla, esencial para el mantenimiento de la integridad relacional.',
    },
    {
      termino: 'Macro autoexec',
      significado:
        'Tipo de macro especial en Access que se ejecuta automáticamente al abrir la base de datos, frecuentemente utilizada por los administradores para ocultar barras de herramientas o forzar la apertura del formulario de <em>login</em>.',
    },
    {
      termino: 'Mantenimiento preventivo',
      significado:
        'Conjunto de rutinas técnicas aplicadas de forma periódica a la base de datos para anticipar fallos, optimizar el rendimiento y evitar la corrupción de la información.',
    },
    {
      termino: 'Modo exclusivo',
      significado:
        'Forma específica de abrir una base de datos en Access que bloquea el archivo, impidiendo que cualquier otro usuario en la red pueda conectarse simultáneamente. Es un requisito obligatorio para cifrar o alterar la estructura interna.',
    },
    {
      termino: 'Panel de navegación',
      significado:
        'Barra lateral en la interfaz de Access que muestra todos los objetos (tablas, consultas, formularios). En sistemas seguros, el administrador suele ocultar este panel al usuario final.',
    },
    {
      termino: 'Principio de mínimo privilegio',
      significado:
        'Norma de ciberseguridad que establece que un usuario debe tener únicamente los permisos de acceso estrictamente necesarios para cumplir con sus funciones laborales, ni uno más.',
    },
    {
      termino: 'Sistema de Gestión de Bases de Datos Relacionales (RDBMS)',
      significado:
        '<em>Software</em> que permite crear, administrar y consultar bases de datos basadas en el modelo relacional (como Microsoft Access), organizando los datos en tablas interconectadas.',
    },
    {
      termino: 'Tabla de usuarios (tblUsuarios)',
      significado:
        'Objeto de la base de datos creado por el administrador para almacenar las credenciales (nombres de usuario, contraseñas y roles) necesarias para el control de acceso lógico.',
    },
    {
      termino: '<em>Visual Basic for Applications</em> (VBA)',
      significado:
        'Lenguaje de programación integrado en Microsoft Office que permite a los administradores de Access automatizar procesos complejos, validar credenciales y crear interfaces dinámicas basadas en los roles de usuario.',
    },
  ],
  referencias: [
    {
      referencia:
        'Castillo, J., & Mendoza, L. (2021). Ciberseguridad en entornos educativos: protección de datos desde la gestión administrativa. Editorial TecnoSaberes.',
      link: '',
    },
    {
      referencia:
        'Fernández, A., & Romero, C. (2023). Criptografía aplicada a bases de datos de escritorio: del archivo local a la nube. Ediciones Informáticas Avanzadas.',
      link: '',
    },
    {
      referencia:
        'Gómez, R., & Martínez, S. (2021). Alfabetización digital avanzada en la educación técnica superior. Revista Iberoamericana de Pedagogía y Tecnología, 14(2), 45-60.',
      link: '',
    },
    {
      referencia:
        'Hernández, P., & Silva, M. (2023). Mantenimiento y optimización de sistemas RDBMS en pequeñas y medianas empresas. Journal of Applied Database Management, 8(1), 112-128.',
      link: '',
    },
    {
      referencia:
        'López, E., & Castro, F. (2022). Gestión de la información en Microsoft Access: arquitectura y buenas prácticas. Editorial Sistemas y Redes.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Educación Nacional (MEN). (2023). Lineamientos de competencias TIC para la formación técnica y tecnológica. Gobierno de Colombia.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC). (2021). Guía de protección de datos personales y habeas data para instituciones formativas. Gobierno de Colombia.',
      link: '',
    },
    {
      referencia:
        'Ramírez, C., & Vargas, D. (2022). El rol del administrador de bases de datos: de la operatividad a la estrategia gerencial. Revista Colombiana de Computación, 20(3), 77-94.',
      link: '',
    },
    {
      referencia:
        'Torres, A. (2020). Diseño de interfaces seguras con VBA en Microsoft Office. Publicaciones CodeMaster.',
      link: '',
    },
    {
      referencia:
        'Valencia, H. (2023). Arquitectura <em>front-end</em> y <em>back-end</em> en aplicaciones locales: estrategias de división. Anales del Congreso Latinoamericano de Ingeniería de Software.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Bonza Reyes',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
