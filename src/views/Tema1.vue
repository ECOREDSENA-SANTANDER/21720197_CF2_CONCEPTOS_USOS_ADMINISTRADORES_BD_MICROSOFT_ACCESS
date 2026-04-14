<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Identificación de técnicas de mantenimiento y ajustes de bases de datos
        
    .bloque-texto-g.bg5.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para iniciar el abordaje de la administración de bases de datos, resulta pertinente formular una pregunta esencial: ¿qué sucede con un sistema de información cuando se utiliza de manera ininterrumpida a lo largo de los meses o años? Al igual que un motor físico que acumula residuos tras largos trayectos, los archivos de Microsoft Access, debido a su arquitectura de almacenamiento de base de datos relacional de escritorio (RDBMS), sufren un fenómeno conocido como "hinchazón" o #[em bloating] y fragmentación de índices.


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ps-3.p-md-2.ps-lg-4.pe-lg-5 Definición y fundamentación del mantenimiento en Access

    .row.justify-content-center.mb-2.mb-md-4
      .col-lg-5.col-md-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/2.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/3.svg', alt='')
          .col-lg-10
            p.mb-0 El mantenimiento de una base de datos en Microsoft Access se define como el conjunto sistemático de procedimientos técnicos destinados a reorganizar la estructura interna del archivo, recuperar espacio de almacenamiento desperdiciado, reparar cadenas de registros corruptos y optimizar la velocidad de ejecución de las consultas.
        p A nivel técnico, cuando un usuario elimina un registro (por ejemplo, el expediente de un estudiante), Access no borra físicamente ese espacio de inmediato; simplemente marca el registro como "eliminado" y lo oculta. Con el tiempo, estos espacios vacíos o "fantasmas" hacen que el tamaño del archivo crezca desproporcionadamente.        

    p.mb-4 Para ilustrar este concepto, se puede utilizar la analogía de un archivero físico en una oficina: si se retiran carpetas de diferentes cajones, pero no se recorren las demás para agruparlas, el mueble seguirá ocupando el mismo espacio físico en la habitación, aunque esté medio vacío. Las técnicas de mantenimiento y ajuste, como la herramienta "Compactar y reparar", actúan como el oficinista que reorganiza todas las carpetas, elimina los vacíos, reestructura los índices de búsqueda y devuelve el archivero a su estado más eficiente y compacto.

    .mb-5(data-aos="fade")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 1. 
        span Compactación de base de datos de Access
      figure
        img(src='@/assets/curso/temas/t1/fig1.svg', alt="Comparativa sobre el mantenimiento de bases de datos en Access. A la izquierda, se ilustra un archivo fragmentado con bloques de datos dispersos y espacios vacíos, lo que genera lentitud. En el centro, se muestra el proceso de 'compactar y reparar', que da como resultado la imagen de la derecha: un archivo optimizado con los datos organizados de forma contigua, mejorando la velocidad de acceso y reduciendo el tamaño del archivo.")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Para aterrizar este concepto, imagínese una base de datos de Access diseñada para gestionar la matrícula, calificaciones y asistencia de un centro de formación técnica. Al inicio del año lectivo, el archivo pesa 15 Megabytes (MB) y funciona con fluidez. Sin embargo, a medida que los instructores suben calificaciones diarias, corrigen errores, eliminan registros duplicados de aprendices y actualizan horarios, la base de datos comienza a registrar lentitud al abrir los reportes finales. Para el tercer trimestre, el archivo pesa 150 MB y muestra errores ocasionales de lectura.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-auto.col-md-2.d-none.d-md-block
            img(src='@/assets/curso/temas/t1/4.svg', alt='')
          .col-lg-10.col-md-10
            p.mb-0 En este escenario, el administrador (el aprendiz en formación) debe identificar que el problema no radica en el equipo de cómputo ni en la red, sino en la fragmentación interna de Access. Al ejecutar un mantenimiento preventivo, el administrador reestructura las tablas, logrando que el archivo vuelva a pesar 18 MB y recuperando la velocidad de procesamiento al generar los boletines de calificaciones. Este ejemplo evidencia cómo una acción de mantenimiento técnico impacta directamente en la eficiencia administrativa de toda una institución educativa.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/5.png', alt='')


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ps-3.p-md-2.ps-lg-4.pe-lg-5 Ejecutar mantenimientos y ajustes de bases de datos

    p.mb-4 La comprensión conceptual debe materializarse en la ejecución procedimental. El proceso de ejecutar mantenimientos en Microsoft Access obedece a un protocolo riguroso que el administrador debe interiorizar y aplicar metodológicamente. No se trata simplemente de presionar un botón, sino de seguir un ciclo de aseguramiento de la información.

    .tarjeta.bgi-1.p-4.pt-5.mb-4(data-aos="fade")
      SlyderE(indicadores="centro")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-3.col-11
            h4 a) Diagnóstico y auditoría previa:
            p Antes de cualquier intervención, el administrador debe evaluar el estado del archivo. Se deben revisar síntomas como bloqueos repentinos de la aplicación, tamaño de archivo inusualmente grande (generalmente acercándose al límite de 2 GB de Access) o lentitud extrema al ejecutar consultas de referencias cruzadas.
          .col-lg-7.col-11
            img(src='@/assets/curso/temas/t1/slider1-1.png', alt='')
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-3.col-11
            h4 b) Aseguramiento mediante copias de respaldo (#[em backups]):
            p Es una regla de oro e inquebrantable en la administración de bases de datos: jamás se ejecuta un procedimiento de reparación sin antes haber generado una copia de seguridad física del archivo .accdb (formato de base de datos de Access). Si el proceso de compactación se interrumpe por un corte de energía, el archivo original puede corromperse de manera irreversible (Hernández & Silva, 2023).
          .col-lg-7.col-11
            img(src='@/assets/curso/temas/t1/slider1-2.png', alt='')
        .row.justify-content-center.mb-4
          .col-lg-3.col-11
            h4 c) Ejecución de la herramienta "compactar y reparar":
            p Access cuenta con una utilidad integrada diseñada específicamente para este propósito. El administrador debe asegurarse de que ningún otro usuario esté conectado a la base de datos (acceso exclusivo). Posteriormente, a través del menú de opciones de la base de datos, se ejecuta la herramienta que realiza dos acciones simultáneas:
          .col-lg-7.col-11
            .tarjeta.bg8.h-100.p-4.p-lg-5.d-flex.flex-column.justify-content-center
              ul.lista-ul.fa-lista.l-circle.mb-0
                li
                  i.fas.fa-circle
                  span.mb-0 #[b Compactar:] reescribe el archivo, eliminando el espacio dejado por los registros borrados y reordenando las tablas según sus claves principales.
                hr.dark
                li.mb-0
                  i.fas.fa-circle
                  span.mb-0 #[b Reparar:] analiza la integridad de las relaciones entre las tablas y repara índices rotos o metadatos dañados que puedan estar causando errores de lectura.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-3.col-11
            h4 d) Automatización de ajustes (mantenimiento preventivo):
            p Un administrador eficiente no espera a que el archivo presente fallas. Como parte del ajuste continuo, se debe configurar la base de datos para que ejecute la opción "compactar al cerrar". Esta técnica asegura que cada vez que el último usuario cierre la aplicación, el sistema se auto-depure, garantizando que al día siguiente la base de datos amanezca optimizada para su uso continuo.
          .col-lg-7.col-11
            img(src='@/assets/curso/temas/t1/slider1-4.png', alt='')



  </template>

<script>
export default {
  name: 'Tema1',
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
