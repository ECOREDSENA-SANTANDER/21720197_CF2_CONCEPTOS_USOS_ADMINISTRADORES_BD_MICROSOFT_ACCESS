<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-end.mb-4
      .col-lg-8
        p ¿Para qué le servirá este conocimiento al futuro administrador de bases de datos?
        p En la cotidianidad de cualquier organización, desde una pequeña institución educativa hasta una empresa comercial, los datos constituyen uno de los activos más valiosos. No obstante, una base de datos sin mantenimiento adecuado tiende a corromperse, perder rendimiento y, eventualmente, fallar. El dominio de estas técnicas permitirá al aprendiz prevenir incidentes informáticos, optimizar los tiempos de respuesta y garantizar que la información confidencial se mantenga protegida. Así, este aprendizaje trasciende la simple operación de un #[em software] y contribuye a la formación de un criterio analítico, crítico y preventivo, indispensable en el perfil de un técnico o tecnólogo integral.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/intro/2.svg', alt='')
          .col-lg-10
            p.mb-0 Los contenidos de este documento se desarrollarán desde un enfoque pedagógico constructivista, mediado por las Tecnologías de la Información y la Comunicación (TIC). En este sentido, la teoría no se presentará como un conjunto de conceptos aislados, sino como conocimientos contextualizados en situaciones reales. Cada tema estará vinculado a problemáticas propias de entornos educativos y organizacionales, apoyado en analogías que faciliten la comprensión y en preguntas orientadoras que promuevan la reflexión crítica.
        p La secuencia temática ha sido diseñada de manera progresiva: inicia con la comprensión de los problemas asociados al deterioro de una base de datos, continúa con las estrategias de mantenimiento y culmina con la implementación de medidas de seguridad y control de accesos.
      .col-lg-4.col-md-7.col-9
        img(src='@/assets/curso/temas/intro/1.png', alt='')

    .tarjeta.bg1.p-4.mb-5
      p.mb-0 La relevancia de este curso en el proceso formativo radica en su capacidad para cerrar la brecha entre el conocimiento operativo básico y la administración avanzada. Mientras un usuario estándar de Access se limita al registro de información o a la generación de reportes, el aprendiz que finaliza este proceso asume el rol de administrador, capaz de diseñar, proteger y optimizar sistemas de información. Esta transición, de usuario a gestor del sistema, constituye el principal valor agregado de la formación complementaria del SENA, al fortalecer el pensamiento lógico, el diseño de entornos seguros y la toma de decisiones tecnológicas fundamentadas en evidencia (Ramírez & Vargas, 2022).

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ySdNgTM0x-k?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Video. Ejecución y evaluación del plan de formación 

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
