<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Mantenimiento, seguridad y niveles de acceso en Microsoft Access',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los conceptos fundamentales relacionados con el mantenimiento preventivo, la seguridad de los datos y la administración de niveles de acceso en Microsoft Access.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué describe el fenómeno de "hinchazón" o <em>bloating</em> en una base de datos de Access?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El aumento del tamaño del archivo por espacios vacíos dejados por registros eliminados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La creación automática de tablas nuevas en la base de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La pérdida total de las contraseñas del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La conversión del archivo a formato ejecutable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con que la hinchazón del archivo ocurre por la acumulación de espacios vacíos y fragmentación interna.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el fenómeno de bloating y la fragmentación en Access.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la finalidad principal de la herramienta "compactar y reparar" en Microsoft Access?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear usuarios con diferentes roles de acceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reorganizar el archivo, recuperar espacio y corregir errores de integridad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Convertir formularios en informes automáticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ocultar el panel de navegación al iniciar la base de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la función de compactar y reparar para optimizar el archivo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la herramienta compactar y reparar.',
        },
        {
          id: 3,
          texto:
            '¿Qué acción debe realizarse siempre antes de ejecutar un proceso de reparación en una base de datos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generar una copia de seguridad del archivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cambiar el nombre de las tablas principales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar los formularios antiguos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Desactivar todos los informes del sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la importancia del respaldo previo antes de intervenir la base de datos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con copias de seguridad y mantenimiento preventivo.',
        },
        {
          id: 4,
          texto:
            '¿Para qué se utiliza el modo exclusivo al abrir una base de datos en Access?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para permitir que varios usuarios modifiquen el archivo al mismo tiempo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para exportar automáticamente las tablas a Excel.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para bloquear temporalmente el acceso de otros usuarios y realizar cambios estructurales o de seguridad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Para activar el formulario de <em>login</em> sin programación adicional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que reconoce que el modo exclusivo es necesario para realizar procesos sensibles como cifrado o ajustes estructurales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el apartado del componente formativo relacionado con la apertura en modo exclusivo.',
        },
        {
          id: 5,
          texto:
            '¿Qué beneficio aporta configurar la opción "Compactar al cerrar"?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permite crear claves primarias automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Impide que se usen formularios emergentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elimina de forma permanente los usuarios inactivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Asegura un mantenimiento preventivo al optimizar el archivo cada vez que se cierra.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la automatización del mantenimiento preventivo en Access.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la opción Compactar al cerrar.',
        },
        {
          id: 6,
          texto:
            '¿Qué busca proteger la seguridad de una base de datos en Microsoft Access?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente la velocidad de digitación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La confidencialidad, integridad y disponibilidad de los datos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo el diseño visual de los formularios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente el tamaño físico del archivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los principios fundamentales de la seguridad de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la seguridad de los datos en Access.',
        },
        {
          id: 7,
          texto:
            '¿Qué efecto produce el cifrado con contraseña en una base de datos de Access?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Convierte todos los formularios en tablas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Impide la creación de reportes estadísticos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Transforma los datos en información ilegible sin la clave correcta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Permite abrir el archivo sin autenticación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el papel del cifrado como barrera para evitar accesos no autorizados al archivo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el apartado del componente formativo relacionado con cifrado con contraseña.',
        },
        {
          id: 8,
          texto:
            'En una arquitectura dividida de Access, ¿qué contiene el archivo <em>back end</em>?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo formularios, informes y macros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exclusivamente el formulario de autenticación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los comentarios del evaluador instruccional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente las tablas con los datos almacenados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la separación entre almacenamiento de datos e interfaz de usuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la arquitectura front end y back end.',
        },
        {
          id: 9,
          texto:
            '¿Qué objetos se alojan principalmente en el archivo <em>front end</em> de una base de datos dividida?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tablas con datos crudos únicamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Formularios, informes, consultas y código de programación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo claves primarias y relaciones físicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Copias de seguridad del archivo original.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el papel del front end como interfaz de trabajo del usuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el diseño e implementación de macros.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el propósito principal de compilar una base de datos a formato .accde?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir que cualquier usuario modifique el diseño de formularios e informes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aumentar el tamaño del archivo para mejorar el rendimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Bloquear la Vista Diseño y proteger el código fuente de la aplicación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de autenticación por roles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la compilación del <em>front end</em> para proteger su estructura interna.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el archivo ejecutable .accde.',
        },
        {
          id: 11,
          texto:
            '¿Qué establece el principio del mínimo privilegio en la administración de accesos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que un usuario debe tener solo los permisos estrictamente necesarios para su función.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Que todos los usuarios deben tener permisos de administrador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que el acceso a la base de datos debe ser completamente libre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que los permisos se definen al azar según el número de usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el principio del mínimo privilegio como base para restringir el acceso de forma segura.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el apartado del componente formativo relacionado con el principio del mínimo privilegio.',
        },
        {
          id: 12,
          texto: '¿Cómo funciona el control de acceso basado en roles?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permite que todos los usuarios editen todas las tablas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Asigna permisos a perfiles o cargos en lugar de asignarlos individualmente a cada persona.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Desactiva la autenticación mediante contraseña.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplaza la necesidad de formularios y consultas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la asignación de permisos por roles dentro del sistema.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el control de acceso basado en roles y niveles de acceso.',
        },
        {
          id: 13,
          texto:
            'En el ejemplo del sistema de gestión bibliotecaria, ¿qué puede hacer el usuario con rol Aprendiz?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Consultar títulos y disponibilidad sin modificar la información.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar libros del inventario maestro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar multas y devoluciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear nuevos usuarios bibliotecarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el nivel de acceso lector en un contexto educativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el ejemplo de roles en la biblioteca.',
        },
        {
          id: 14,
          texto:
            '¿Qué función cumple la tabla tblUsuarios en una base de datos con autenticación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Almacenar únicamente los reportes impresos del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar la tabla de roles del sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Guardar las credenciales y el rol asociado a cada usuario.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Controlar el tamaño físico del archivo .accdb.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la finalidad de la tabla de usuarios como base del control de acceso lógico.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el apartado del componente formativo relacionado con la estructura de usuarios y roles.',
        },
        {
          id: 15,
          texto:
            '¿Por qué el formulario de <em>login</em> debe configurarse como emergente y modal?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para obligar al usuario a autenticarse antes de interactuar con otras partes de la aplicación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Para permitir que se abran varias tablas simultáneamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para eliminar la necesidad de contraseña.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para convertir automáticamente el archivo en .accde.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el papel del formulario de autenticación como puerta de entrada al sistema.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el diseño del formulario de login.',
        },
        {
          id: 16,
          texto:
            '¿Qué debe hacer el código VBA del botón "Ingresar" cuando las credenciales son incorrectas?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Otorgar acceso temporal al usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Denegar el acceso y emitir una alerta de autenticación fallida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cambiar automáticamente el rol del usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar el registro del usuario de la tabla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la validación de credenciales mediante programación en VBA.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la validación de usuarios en el login.',
        },
        {
          id: 17,
          texto:
            '¿Para qué se utiliza una variable temporal como TempVars!RolUsuario después del inicio de sesión?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para almacenar el tamaño del archivo de la base de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para reemplazar la contraseña original.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para guardar en memoria el rol del usuario y controlar el comportamiento del sistema.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Para crear automáticamente nuevas tablas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la utilidad de almacenar el rol del usuario en memoria para aplicar restricciones dinámicas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el apartado del componente formativo relacionado con variables temporales y control de roles.',
        },
        {
          id: 18,
          texto:
            'Si el usuario tiene rol Lector y abre un formulario sensible, ¿qué configuración ayuda a restringir sus acciones?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Me.AllowEdits = False, Me.AllowDeletions = False y Me.AllowAdditions = False.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Me.Visible = False y Me.Caption = "Administrador".',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'DoCmd.Quit y Application.CloseCurrentDatabase.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'CurrentDb.CreateTableDef y OpenRecordset dinámico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la restricción dinámica de formularios según el rol del usuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con restricciones dinámicas de la interfaz.',
        },
        {
          id: 19,
          texto:
            '¿Qué efecto tiene ocultar el panel de navegación y deshabilitar la tecla <em>Shift</em> en Access?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite modificar libremente la estructura de la base de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Obliga a los usuarios a interactuar solo por la interfaz autorizada y evita atajos de omisión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Desactiva la contraseña del archivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Convierte todas las consultas en tablas permanentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el blindaje de la interfaz frente a accesos no autorizados.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el panel de navegación y la Bypass Key.',
        },
        {
          id: 20,
          texto:
            '¿Cuál de las siguientes acciones refleja mejor una administración segura y preventiva en Microsoft Access?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Trabajar siempre con un único archivo sin respaldo ni cifrado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permitir que todos los usuarios editen formularios y tablas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aplicar <em>backups</em>, cifrado, división <em>front end</em>/<em>back end</em> y control de roles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Desactivar las validaciones para acelerar la digitación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio integral de los conceptos relacionados con mantenimiento, seguridad y administración de accesos en Access.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para integrar mantenimiento, seguridad y niveles de acceso.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el mantenimiento, la seguridad y los niveles de acceso en Microsoft Access.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
