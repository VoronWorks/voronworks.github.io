window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
       let b = document.getElementById("my-button");
  b.addEventListener("click", click1);

  });
    function click1() {
      let f1 = document.getElementsByName("field1");
      let f2 = document.getElementsByName("field2");
      let r = document.getElementById("result"); r.innerHTML = f1[0].value * f2[0].value;
      if(!isNaN(r.innerHTML)&& r.innerHTML>=0 && f1[0].value>0){
  
       alert(r.innerHTML);
      return false;
   }else{
    alert("Invalid input");
    r.innerHTML="Неправильный ввод. Попробуйте ввести данные ещё раз.";
    if(isNaN(f1[0].value))
    f1[0].value="";
    if(isNaN(f2[0].value)){
      f2[0].value="";
    }
    return false;
   }
    
    }
 

