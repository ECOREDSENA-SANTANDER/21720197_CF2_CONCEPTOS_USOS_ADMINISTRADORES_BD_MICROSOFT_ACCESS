<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Administración de niveles de acceso a los datos según los usuarios

    .bloque-texto-g.bg5.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Tras haber establecido los cimientos del mantenimiento físico del archivo y haber blindado la base de datos con cifrado y divisiones estructurales, el administrador se enfrenta a un escenario dinámico: la interacción humana. En una organización real, no todos los individuos que ingresan a un sistema de información poseen las mismas responsabilidades ni requieren el mismo grado de interacción con los datos. Es en este punto donde la seguridad transita desde la protección pasiva (evitar que roben el archivo) hacia la gestión activa mediante la administración de niveles de acceso.

    p.mb-5 Si dos usuarios ingresan al mismo sistema, ¿por qué sus pantallas deben lucir diferentes? La respuesta a esta pregunta orientadora reside en el principio del mínimo privilegio, un concepto fundamental en la ciberseguridad y la administración de bases de datos.


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ps-3.p-md-2.ps-lg-4.pe-lg-5 Definición y fundamentación de los niveles de acceso (control basado en roles)

    .row.justify-content-center.mb-2.mb-md-4
      .col-lg-5.col-md-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/2.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.align-items-center.mb-3.mb-md-4
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/3.svg', alt='')
          .col-lg-10
            p.mb-0 La administración de niveles de acceso se define como la estructuración e implementación de reglas lógicas que determinan qué puede ver, modificar, crear o eliminar un usuario específico dentro de una base de datos.
        p Este concepto se sustenta en el modelo de Control de Acceso Basado en Roles (RBAC, por sus siglas en inglés), el cual desvincula los permisos de las identidades individuales y los asocia a perfiles de cargo o funciones específicas dentro de la organización (Castillo & Mendoza, 2021).
    
    p.mb-5 Para comprender esta dinámica, resulta pertinente utilizar la analogía de las llaves dentro de un centro educativo físico. El rector o administrador general posee una llave maestra que abre todas las oficinas, archivos y aulas en cualquier momento; el docente cuenta con una llave que únicamente abre la puerta de su salón de clases asignado; y el estudiante, por su parte, no posee llaves, sino que transita libremente por los pasillos y bibliotecas durante el horario permitido, consumiendo información, pero sin la capacidad de alterar la infraestructura del edificio. En Microsoft Access, estas "llaves" se traducen en permisos de Lectura, Escritura, Edición, Eliminación y Diseño.

    img.mb-4(src='@/assets/curso/temas/t3/4.png', alt='')
    
    p.mb-5 A nivel técnico, es imperativo que el administrador comprenda una transición histórica en el #[em software]: mientras que las versiones antiguas de Access (formato .mdb) poseían un sistema de seguridad a nivel de usuario (#[em Workgroup Security]), los formatos modernos (desde .accdb) eliminaron esta característica nativa. Por consiguiente, el administrador actual debe construir esta arquitectura de permisos de manera lógica, utilizando programación en #[em Visual Basic for Applications] (VBA), tablas de perfiles ocultas o, en escenarios avanzados, migrando las tablas (#[em Back end]) a un servidor robusto como Microsoft SQL Server, heredando así la seguridad del servidor.

    .mb-5(data-aos="fade")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 3. 
        span Control de acceso por roles en Microsoft Access
      figure
        img(src='@/assets/curso/temas/t3/fig3.svg', alt="Muestra a tres usuarios (Administrador, Operador y Lector) pasando por un filtro de roles al iniciar sesión. El filtro redirige a cada uno a una pantalla de menú con opciones exclusivas para su nivel de permisos, aunque todos interactúan con la misma base de datos central.")


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ps-3.p-md-2.ps-lg-4.pe-lg-5 Ejemplo aplicado a un contexto educativo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Considérese el diseño de un sistema de gestión bibliotecaria para un complejo del SENA desarrollado en Microsoft Access. La base de datos contiene miles de registros sobre libros, préstamos, multas y datos personales de la comunidad educativa.
        p Si no existieran niveles de acceso, un aprendiz que ingrese al sistema para consultar la disponibilidad de un libro de matemáticas podría, accidentalmente o de forma deliberada, modificar el estado de su propia multa por retraso de "Pendiente" a "Pagada", o incluso eliminar el registro del libro.
        p Para mitigar este riesgo, el estudiante de administración de bases de datos configura tres niveles de acceso claramente definidos:
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/5.png', alt='')

    .row.justify-content-center.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/6.png', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.tb(tipo="b" clase-tarjeta="tarjeta bg4")
          .row(titulo="a) Rol aprendiz (nivel de lector):")
            .col-11
              p.mb-0 Al autenticarse, el sistema le muestra únicamente un formulario de búsqueda. Puede ver los títulos y la disponibilidad, pero las casillas de texto están bloqueadas (propiedad #[em locked] en verdadero) y no existen botones de guardado ni eliminación.
          .row(titulo="b) Rol bibliotecario (nivel de operador):")
            .col-11
              p.mb-0 Al ingresar con sus credenciales, la interfaz cambia. Se habilitan los botones para registrar nuevos préstamos, recibir devoluciones y registrar multas, pero no puede eliminar libros del inventario maestro.
          .row(titulo="c) Rol coordinador académico (nivel de administrador):")
            .col-11
              p.mb-0 Tiene acceso total. Visualiza paneles de control estadísticos, puede dar de baja libros dañados, purgar registros antiguos y crear nuevos usuarios bibliotecarios.

    p Este ejemplo evidencia cómo un mismo archivo físico (#[em Front end]) muta su comportamiento y restringe sus herramientas de forma inteligente dependiendo de quién sea la persona que se encuentra frente al teclado.


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
