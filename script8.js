
window.addEventListener('DOMContentLoaded', function (event) {
var closedModalHashStateId = "";
      var openModalHashStateId = "#form";
       window.location.hash = closedModalHashStateId;
      $('#myModal').on('show.bs.modal', function(e) {
        window.location.hash = openModalHashStateId;
      });  

     
          $(window).on('hashchange', function (event) {
        if(window.location.hash == closedModalHashStateId) {
            $('#myModal').modal('hide');
        }
    });
    fetch('https://api.slapform.com/bB3DyW5Odz', {
      method: "POST",
  body: JSON.stringify({
    name: 'Jon Snow',
    email: 'email.com',
    message: 'Hello World!',
    })
    })
    .then(function (response) {
    console.log('Success', response)
    })
    .catch(function (e) {
    console.error('Fail', e)
    })

    });
