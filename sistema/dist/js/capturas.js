// Variables globales
var anchoPantalla = $(window).width(); // Ancho de pantalla
var transitions = false; // Transiciones por defecto desactivadas

/* Document Ready
	========================================================================== */
$(document).ready(function () {
  /* Deteccion de javascript */
  $('html').removeClass('js-off');
});

/* Capturas de pantalla de URL (poner url del sitio a capturar en atributo 'data-url')
========================================================================== */
$('img[data-url]').each(function () {
  $.ajax({
    url: 'https://www.googleapis.com/pagespeedonline/v1/runPagespeed?url=' + $(this).data('url') + '&screenshot=true',
    context: this,
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      data = data.screenshot.data.replace(/_/g, '/').replace(/-/g, '+');
      $(this).attr('src', 'data:image/jpeg;base64,' + data);
    }
  });
});
