
window.addEventListener('DOMContentLoaded', function (event) {
var state = null;
      var btn = document.getElementById('my-button');
var url = '#form';
btn.addEventListener('click', function Click2(event) {
    if(state==null)
    {history.pushState("1", '', url)
state=history.state; }
    else history.replaceState("2", '', url)
});
$(window).on('popstate', function (e) {

        $('#myModal').modal('hide');
state=null;
    
});

  var nameInput = document.getElementById('field-name');
  var emailInput = document.getElementById('field-email');
  var msgInput = document.getElementById('field-msg');
 
         
       window.onbeforeunload=function(){
localStorage.setItem("name",$('#field-name').val());
localStorage.setItem("email",$('#field-email').val());
localStorage.setItem("msg",$('#field-msg').val());
       }
       window.onload = function(){
        var name= localStorage.getItem("name");
        if(name!=null) $('#field-name').val(name);
        var email= localStorage.getItem("email");
        if(email!=null) $('#field-email').val(email);
        var msg= localStorage.getItem("msg");
        if(msg!=null) $('#field-msg').val(msg);
       }



$(function(){
      $(".ajaxForm").submit(function(e){
          e.preventDefault();
          var href = $(this).attr("action");
          $.ajax({
              type: "POST",
              dataType: "json",
              url: href,
              data: $(this).serialize(),
              success: function(response){
                  if(response.status == "success"){
                      {alert("We received your submission, thank you!");
                      nameInput.value = '';
                      emailInput.value = '';
                       msgInput.value = '';
                    }
                  }else{
                      alert("An error occured: " + response.message);
                      nameInput.value = '';
                      emailInput.value = '';
                       msgInput.value = '';
                  }
              }
          });
      });
  });
    });
    

    
