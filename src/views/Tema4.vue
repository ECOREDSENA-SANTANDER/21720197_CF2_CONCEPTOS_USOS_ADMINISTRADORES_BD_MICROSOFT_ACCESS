<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Configuración de restricciones e interfaces dinámicas

    img.mb-4(src='@/assets/curso/temas/t4/1.png', alt='')  
    p.mb-5 La implementación de estos niveles de acceso en un archivo moderno de Access (formato .accdb) requiere que el administrador domine un proceso lógico secuencial, integrando el diseño de tablas, la creación de formularios y la lógica de programación.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ps-3.p-md-2.ps-lg-4.pe-lg-5 Creación de la estructura de usuarios y roles (tablas maestras)

    .row.justify-content-center.align-items-center.mb-4      
      .col-lg-7(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/3.svg', alt='')
          .col-lg-10
            p.mb-0 El primer paso procedimental consiste en diseñar una tabla en el #[em Backend] denominada #[b tblUsuarios]. Esta tabla no debe ser accesible desde los menús de navegación convencionales. Debe contener campos esenciales como: #[b ID_Usuario, NombreCompleto, NombreUsuario] (#[em username]), #[b Contraseña] (idealmente encriptada mediante una función #[em hash] en VBA, evitando el almacenamiento en texto plano) y un campo clave denominado #[b ID_Rol].
        p De forma paralela, se debe crear la tabla #[b tblRoles] (por ejemplo: 1 = Administrador, 2 = Digitador, 3 = Lector), la cual se relaciona directamente con la tabla de usuarios, permitiendo la gestión estructurada de los niveles de acceso dentro del sistema.
      .col-lg-5.col-md-10.mb-3.mb-lg-0(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/2.png', alt='')

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 4. 
          span Creación de la estructura de usuarios y roles
        figure
          img(src='@/assets/curso/temas/t4/fig4.png', alt="Interfaz de Microsoft Access que muestra la ventana de diagrama de Relaciones de la base de datos. En el centro, las tablas tblRoles y tblUsuarios están conectadas por una línea que representa una relación de uno a varios (1: N), uniendo el campo clave ID_Rol de tblRoles con el campo ID_Rol de tblUsuarios. El panel de navegación de la izquierda muestra los objetos de la base de datos, y la cinta de opciones de la parte superior, las herramientas de Access.")


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ps-3.p-md-2.ps-lg-4.pe-lg-5 Diseño del formulario de autenticación (#[em Login])

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/4.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/5.svg', alt='')
          .col-lg-10
            p.mb-0 El administrador debe diseñar un formulario de inicio de sesión que actúe como la única puerta de entrada al sistema. Este formulario (#[em frmLogin]) debe estar configurado como emergente y modal (propiedades #[em Pop Up] y #[em Modal] en "Sí"), obligando al usuario a interactuar exclusivamente con él antes de poder ver cualquier otra parte de la aplicación.
        p Contendrá dos cuadros de texto: uno para el usuario y otro para la contraseña (con máscara de entrada de contraseña para ocultar los caracteres).

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 5. 
          span Diseño del formulario de autenticación (#[em Login])
        figure
          img(src='@/assets/curso/temas/t4/fig5.png', alt="Ventana emergente modal de inicio de sesión (frmLogin) en Microsoft Access. Contiene campos de texto para 'Usuario' y 'Contraseña' (con los caracteres ocultos por asteriscos), junto con los botones 'Iniciar Sesión' y 'Cancelar', superpuesta sobre el fondo desenfocado de la base de datos.")


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ps-3.p-md-2.ps-lg-4.pe-lg-5 Validación mediante #[em Visual Basic for Applications] (VBA)

    .row.justify-content-center.align-items-center.mb-4      
      .col-lg-7(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/6.svg', alt='')
          .col-lg-10
            p.mb-0 El núcleo de la seguridad lógica reside en el botón "Ingresar" del formulario de #[em Login]. El administrador debe programar un evento Al hacer clic que ejecute una consulta de validación. El código #[em VBA] captura los datos ingresados y busca una coincidencia exacta en la #[b tblUsuarios]. Si las credenciales son incorrectas, se emite una alerta y se deniega el acceso, llevando un contador de intentos fallidos.
        p Si las credenciales son válidas, el proceso no termina ahí; esta es la fase crítica. El código debe capturar en la memoria temporal del sistema (utilizando variables globales o campos ocultos en un formulario maestro) el ID_Rol del usuario que acaba de ingresar. Esta variable (ejemplo: #[b TempVars!RolUsuario = 2]) será el faro que guiará el comportamiento del resto de la base de datos (Ramírez & Vargas, 2022).
      .col-lg-5.col-md-10.mb-3.mb-lg-0(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/7.png', alt='')


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ps-3.p-md-2.ps-lg-4.pe-lg-5 Restricción dinámica de la Interfaz de Usuario (#[em UI])

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/8.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/9.svg', alt='')
          .col-lg-10
            p.mb-0 Con la identidad y el rol del usuario almacenados en memoria, el administrador procede a configurar los eventos de carga (#[em On Load]) de los demás formularios del sistema. Cuando un usuario intenta abrir el Formulario de Calificaciones, el sistema ejecuta una estructura condicional (como #[em If...Then...Else] o #[em Select Case] en VBA).
        p Si el rol almacenado corresponde a “Lector”, el código instruye automáticamente al formulario para modificar sus propiedades: #[b Me.AllowEdits = #[em False]] (impide editar), #[b Me.AllowDeletions = #[em False]] (impide eliminar) y #[b Me.AllowAdditions = #[em False]] (impide agregar). Asimismo, es posible ocultar controles específicos, por ejemplo: #[b cmdEliminar.Visible = #[em False]]. En contraste, si el rol es “Administrador”, el sistema habilita todas estas propiedades, permitiendo un control total sobre la información.




</template>

<script>
export default {
  name: 'Tema4',
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
