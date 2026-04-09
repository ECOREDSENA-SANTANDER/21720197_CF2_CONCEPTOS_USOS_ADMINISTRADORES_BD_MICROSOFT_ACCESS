<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p El recorrido por la administración de bases de datos en Microsoft Access representa una transición fundamental: el aprendiz evoluciona de ser un simple consumidor de interfaces a convertirse en el arquitecto y custodio de la información. A lo largo de este documento, se ha evidenciado que la integridad de los datos no es un estado natural, sino el resultado de la aplicación sistemática de tres pilares interconectados: el mantenimiento físico, el blindaje arquitectónico y el control lógico de accesos. El mantenimiento, mediante herramientas de compactación y reparación, asegura la viabilidad técnica y el rendimiento del archivo frente al uso continuo. La seguridad, expresada en el cifrado y la división de la base de datos (Frontend / Backend), construye una fortaleza inexpugnable contra amenazas externas y fugas de información. Finalmente, la administración de niveles de acceso (control basado en roles) humaniza la seguridad, garantizando que cada usuario interactúe con el sistema bajo el principio del mínimo privilegio. En conjunto, estos saberes dotan al administrador de las competencias técnicas y éticas necesarias para proteger el activo más valioso de cualquier organización moderna: sus datos.

    .row.justify-content-center
      .col-lg-10.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Se organiza en tres ejes: mantenimiento físico (compactación y reparación) con resultado de rendimiento y viabilidad técnica; blindaje arquitectónico (cifrado y división frontend/backend) con resultado de protección ante amenazas y fugas; y control lógico de accesos (roles) con resultado de uso bajo el principio de mínimo privilegio. Todos convergen en un resultado final: desarrollo de competencias técnicas y éticas para proteger los datos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
