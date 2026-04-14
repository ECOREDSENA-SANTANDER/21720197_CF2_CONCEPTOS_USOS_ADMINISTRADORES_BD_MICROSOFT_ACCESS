<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Configuración de herramientas y técnicas de seguridad en los datos

    .bloque-texto-g.bloque-texto-g--inverso.bg3.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez que el administrador de bases de datos ha garantizado la integridad física y el rendimiento del archivo mediante rutinas de mantenimiento, surge un desafío de orden superior: la protección de la información contra accesos no autorizados, alteraciones malintencionadas o fugas accidentales. En la era digital, la información no solo debe estar disponible y rápida, sino que debe ser hermética. Aquí es donde la configuración de herramientas y técnicas de seguridad cobra un papel protagónico dentro del ciclo de vida de una base de datos.


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ps-3.p-md-2.ps-lg-4.pe-lg-5 Definición y fundamentación de la seguridad en bases de datos relacionales de escritorio

    .row.justify-content-center.align-items-center.mb-2.mb-md-4
      .col-lg-7(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-auto.col-md-2.col-3
            img(src='@/assets/curso/temas/t2/3.svg', alt='')
          .col-lg-10.col-md-10.col-9
            p.mb-0 La seguridad en Microsoft Access se define como la implementación de un conjunto de barreras lógicas, arquitectónicas y criptográficas diseñadas para salvaguardar la confidencialidad, integridad y disponibilidad de los datos.  
        p A diferencia de los grandes motores de bases de datos basados en servidores (como SQL Server o un entorno de Oracle), Microsoft Access opera nativamente como una base de datos basada en archivos, lo que significa que, por defecto, cualquier usuario con acceso al archivo físico .accdb podría copiarlo, abrirlo y leer su contenido. Por lo tanto, las técnicas de seguridad en este entorno exigen una configuración multicapa.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/2.png', alt='')

    p.mb-4 Desde una fundamentación técnica, la seguridad en Access se materializa a través de tres mecanismos principales: el cifrado de extremo a extremo, la compilación de código fuente y la arquitectura de división de bases de datos. El cifrado moderno en Access utiliza algoritmos de bloque (como el AES de 128 o 256 bits), los cuales transforman los datos legibles en texto cifrado e incomprensible, exigiendo una clave criptográfica (contraseña) para su desencriptación en tiempo real (Fernández & Romero, 2023).

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/4.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Para comprender este nivel de protección, es útil plantear la siguiente analogía: tener una base de datos sin cifrar es como guardar los expedientes confidenciales de una institución en una caja de cartón en medio de un pasillo público; cualquiera que pase puede tomar la caja y leer los documentos. Por el contrario, aplicar técnicas de seguridad y cifrado equivale a guardar esos expedientes dentro de una bóveda de acero de máxima seguridad. Incluso si un intruso logra robar la bóveda completa (copiar el archivo), le será matemáticamente imposible acceder a los documentos en su interior sin la combinación exacta.

    .mb-5(data-aos="fade")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 2. 
        span Proceso de cifrado de base de datos en Microsoft Access
      figure
        img(src='@/assets/curso/temas/t2/fig2.svg', alt="Proceso de cifrado en Microsoft Access. Muestra el flujo de izquierda a derecha: datos originales legibles en una tabla pasan por un proceso de cifrado (representado por un candado y el algoritmo AES), transformándose en datos ilegibles. Luego, se ilustra que mediante el ingreso de una contraseña (representada por una llave), el usuario final recupera el acceso a los datos nuevamente legibles.")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-6.col-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/5.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p Para ilustrar la importancia vital de la seguridad, considérese el departamento de bienestar estudiantil de un centro de formación. Este departamento maneja una base de datos en Microsoft Access que contiene no solo los nombres y documentos de identidad de los aprendices, sino también registros altamente sensibles: historias clínicas básicas, reportes de atención psicológica, estudios socioeconómicos y adaptaciones curriculares por condiciones de discapacidad.
        p Si este archivo se guarda en una carpeta compartida de la red institucional sin ninguna configuración de seguridad, cualquier aprendiz o funcionario curioso que esté conectado al mismo wifi podría copiar el archivo y exponer públicamente información vulnerable, causando un daño moral irreparable a los estudiantes y enfrentando a la institución a demandas legales.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/6.svg', alt='')
          .col-lg-10
            p.mb-0 Al aplicar las técnicas de seguridad pertinentes, el aprendiz (actuando como administrador) encripta la base de datos con una contraseña robusta. Además, oculta las tablas base para que, cuando el equipo de psicólogos abra el archivo, solo vean formularios limpios para ingresar datos, sin posibilidad de navegar libremente por el historial completo de toda la institución. Así, la tecnología se convierte en un escudo protector de la dignidad de los estudiantes.


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ps-3.p-md-2.ps-lg-4.pe-lg-5 Aplicar aspectos de seguridad y accesibilidad de los datos

    p.mb-5 La transición de la teoría a la práctica requiere que el administrador ejecute un procedimiento técnico escalonado. Aplicar la seguridad en Microsoft Access no es un evento aislado, sino una metodología compuesta por barreras sucesivas. A continuación, se detalla el proceso estructurado que debe dominar el estudiante:

    .subt2.pb-2.mb-4(data-aos="fade-right")
      i.fas.fa-circle
      h4.mb-0 En modo exclusivo y aplicación de cifrado (contraseña de base de datos)

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/7.png', alt='')
      .col-lg-9
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-7.col-10.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t2/8.svg', alt='')
          .col-lg-7
            .bg7.p-4.py-3.h-100.d-flex.flex-column.justify-content-center
              p.mb-0 El primer y más fundamental nivel de seguridad es evitar la apertura no autorizada del archivo físico. Para lograrlo, el administrador debe abrir la base de datos de una manera específica. No basta con hacer doble clic sobre el archivo. El procedimiento exige abrir el programa Microsoft Access primero, dirigirse a la opción "Abrir", buscar el archivo y, en el botón de apertura, desplegar la lista para seleccionar estrictamente "Abrir en modo exclusivo". Este paso le indica al motor de la base de datos que nadie más en la red podrá conectarse en ese instante, previniendo conflictos de escritura.
        p Una vez en modo exclusivo, se navega a la pestaña de "Información" y se ejecuta el comando "Cifrar con contraseña". Aquí, el administrador debe aplicar una clave robusta (combinando caracteres alfanuméricos y símbolos). A partir de este momento, el contenido del archivo se vuelve ilegible a nivel de bits (código binario) para editores de texto o programas de recuperación no autorizados, garantizando que un robo físico del archivo (por ejemplo, en una memoria USB perdida) no resulte en una fuga de datos (López & Castro, 2022).

    .subt2.pb-2.mb-4(data-aos="fade-right")
      i.fas.fa-circle
      h4.mb-0 Arquitectura de división de bases de datos (#[em Frontend] y #[em Backend])

    p La segunda técnica de seguridad se enfoca en la arquitectura. Una base de datos madura nunca debe operar en un solo archivo si varios usuarios van a interactuar con ella. El proceso consiste en utilizar el "Asistente para dividir bases de datos" de Access. Esta herramienta fragmenta el archivo original en dos componentes distintos:

    .row.justify-content-center.mb-4
      .col-lg-6.col-md-6.mb-3.mb-md-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/tarj1-1.png', alt='')
        .bg-color-acento-contenido.text-white.p-4
          h4 El #[em Backend] (base de datos #[em back - end]): 
          p.mb-0.mb-md-4.mb-lg-0 un archivo que contendrá única y exclusivamente las tablas con los datos crudos. Este archivo se aloja en una carpeta de red segura, oculta y restringida.
      .col-lg-6.col-md-6.mb-3.mb-md-0(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/tarj1-2.png', alt='')
        .bg-color-acento-contenido.text-white.p-4
          h4 El #[em Frontend] (base de datos #[em front - end]):
          p.mb-0 un archivo que contiene las consultas, formularios, informes y módulos de programación (macros y VBA). Este archivo no tiene datos propios, sino que se vincula al #[em Backend].

    p.mb-5 Al aplicar esta división, el administrador protege la integridad de los datos. Si un usuario comete un error fatal en su estación de trabajo y corrompe su formulario (#[em Frontend]), los datos almacenados en el servidor (#[em Backend]) permanecen intactos y a salvo.

    .subt2.pb-2.mb-4(data-aos="fade-right")
      i.fas.fa-circle
      h4.mb-0 Compilación del archivo a formato ejecutable (.accde)

    p La segunda técnica de seguridad se enfoca en la arquitectura. Una base de datos madura nunca debe operar en un solo archivo si varios usuarios van a interactuar con ella. El proceso consiste en utilizar el "Asistente para dividir bases de datos" de Access. Esta herramienta fragmenta el archivo original en dos componentes distintos:

    .bg2.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/9.png', alt='')
        .col-lg-7
          .p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-auto.col-md-2.col-3
                img(src='@/assets/curso/temas/t2/10.svg', alt='')
              .col-lg-10.col-md-10.col-9
                p.mb-0 Incluso con un archivo dividido y protegido con contraseña, un usuario malicioso con conocimientos de Access podría abrir el #[em Frontend], ingresar a la "Vista Diseño" y alterar las consultas o modificar el código de programación (#[em Visual Basic for Applications] (VBA)) para saltarse las restricciones lógicas.
            p Para evitar esto, el administrador debe compilar el archivo #[em Frontend]. Mediante la opción "Guardar y publicar", se transforma el archivo editable (con extensión .accdb) en un archivo ejecutable cerrado (con extensión .accde). Al realizar este proceso, el motor de Access compila todo el código fuente y bloquea permanentemente la Vista Diseño de formularios e informes. El usuario final solo podrá interactuar con las interfaces gráficas habilitadas, sin posibilidad alguna de alterar la estructura interna del #[em software].

    .subt2.pb-2.mb-4(data-aos="fade-right")
      i.fas.fa-circle
      h4.mb-0 Ocultamiento de la interfaz de navegación y anulación de teclas de omisión (#[em bypass key])

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p.mb-1 El último paso de este blindaje lógico consiste en configurar las opciones de la aplicación para que, al iniciarse, se oculte el "Panel de navegación" (el menú lateral donde se listan todas las tablas y objetos). El administrador configura un formulario de inicio o menú principal que se abrirá automáticamente.
        p Adicionalmente, se debe aplicar un ajuste avanzado: deshabilitar la tecla #[em Shift] (#[em Bypass Key]). En Access, si un usuario mantiene presionada la tecla #[em Shift] mientras abre la base de datos, el sistema omite las opciones de inicio configuradas y muestra el panel completo. Mediante un breve código de programación o macros (macro AutoExec), el administrador debe anular esta función, forzando a todos los usuarios a interactuar exclusivamente a través de la interfaz visual diseñada y aprobada por el creador del sistema.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-auto.col-md-2.col-3
            img(src='@/assets/curso/temas/t2/11.svg', alt='')
          .col-lg-10.col-md-10.col-9
            p.mb-0 Este entramado de procesos demuestra que la aplicación de aspectos de seguridad y accesibilidad requiere un pensamiento estratégico. El administrador de bases de datos no solo reacciona a los problemas, sino que anticipa los vectores de ataque y diseña una estructura digital resiliente y confiable, lista para operar en entornos reales de alta exigencia académica y corporativa.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/12.png', alt='')

    .bg-color-primario     
      img(src='@/assets/curso/temas/t2/podcast.svg', alt='')
      .p-4
        .bg-white.tarjeta.p-4
          TarjetaAudio.color-primario(
            texto="Ocultamiento de la interfaz de navegación y anulación de teclas de omisión (<em>bypass key</em>)"
            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")



</template>

<script>
export default {
  name: 'Tema2',
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
