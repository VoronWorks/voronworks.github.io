window.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");
  });
    function click1() {
      let f1 = document.getElementsByName("field1");
      let f2 = document.getElementsByName("field2");
      let r = document.getElementById("result"); r.innerHTML = f1[0].value * f2[0].value;
      if(!isNaN(r.innerHTML)){
  
       alert(r.innerHTML);
      return false;
   }else{
    alert("Ошибка ввода");
       r.innerHTML="Неправильный ввод. Введите данные ещё раз.";
       return false;
   }
    }
    function onClick(event) {
    event.preventDefault();
  
  }
