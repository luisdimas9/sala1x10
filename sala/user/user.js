import { updatePassword } from './user.controller.js';


$(document).ready(function() {
    $('#update-password').on('click', function(event) {
        event.preventDefault(); // Evitamos que se cierre la modal
      
        var password1 = $('#password1').val();
        var password2 = $('#password2').val();
      
        if (password1 === password2) {
          updatePassword(password2);
        } else {
          alert('Las contraseñas no coinciden');
        }
      });

});