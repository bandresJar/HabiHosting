function valideKey(evt) {
    var code = (evt.which) ? evt.which : evt.keyCode;
    if (code == 8) {
      return true;
    } else if (code >= 40 && code <= 57) {
      return true;
    } else if (code == 32) {
      return true;
    }
    else { // other keys.
      return false;
    }
  }


  jQuery(document).ready(function ($) {
    'use strict';


    var form = $('#contact-home');
    var formMessages = $('.form-messages');

    $('#contact-home').on('submit', function (event) {
      event.preventDefault(); // prevent reload
      var dataUser = {
        service_id: 'service_4e2r3o8',
        template_id: 'template_bk4jmui',
        user_id: 'user_vAmX9Jhizm0jDMclxhhk1',
        template_params: {
          'to_name': $("#nombre-3").val(),
          'from_name': $("#correo-3").val(),
          'message': $("#conociste-3").val(),
          'telefono': $("#telefono-3").val(),
          'cnd_condominio': $("#condominio-2").val(),
          'n_unidades': $("#unidadesH").val(),
          'direccion': $("#direccionCondominio").val()
        }
      };
      $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(dataUser),
        contentType: 'application/json'
      }).done(function (res) {
        formMessages.show();
        form.hide();
        formMessages.removeClass('error-demo');
        formMessages.addClass('success-demo');
        formMessages.text("Gracias! Estamos configurando su cuenta, en unos momentos un asesor se comunicará con usted, para finalizar el proceso.");
        // Clear the form.
        $('#nombre-3, #correo-3, #telefono-3, #condominio-2, #unidadesH, #direccionCondominio, #conociste-3').val('');

      }).fail(function (error) {
        form.hide();
        formMessages.show();
        formMessages.removeClass('success-demo');
        formMessages.addClass('error-demo');
        $(formMessages).text('Algo salió mal y no pudimos enviar tu mensaje.');

      });
    });
  });