window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
       let b = document.getElementById("my-button");
  b.addEventListener("click", click1);

  });
    function click1() {
      let f1 = document.getElementsByName("field1");
      let f2 = document.getElementsByName("field2");
      let r = document.getElementById("result"); r.innerHTML = f1[0].value * f2[0].value;
      if(!isNaN(r.innerHTML)){
  
       alert(r.innerHTML);
      return false;
   }else{
    alert("Invalid input");
    r.innerHTML="Неправильный ввод";
    return false;
   }
    }
 

