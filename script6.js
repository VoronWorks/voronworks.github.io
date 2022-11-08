function updatePrice() {

  let s = document.getElementsByName("prodType");
  let select = s[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }
  
  
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = (select.value == "3" ? "block" : "none");
  

  let radios = document.getElementsByName("myradios");
  radios.forEach(function(radio) {
    if (radio.checked) {
      let optionPrice = prices.myradios[radio.value];
      if (optionPrice !== undefined) {
        price += optionPrice;
      }
    }

    
  });


  let checkDiv = document.getElementById("checkboxes");
  checkDiv.style.display = (select.value == "2" ? "block" : "none");

  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      if (propPrice !== undefined) {
        price += propPrice;
      }
    }
  });
  
  let prodPrice = document.getElementById("prodPrice");
  let f1 = document.getElementsByName("price");
  if(!isNaN(f1[0].value)&& f1[0].value!=0)
  prodPrice.innerHTML = price*f1[0].value + " рублей";
  else prodPrice.innerHTML = "";
   

}

function getPrices() {
  return {
    prodTypes: [100, 200, 300],
    myradios: {
      option2: 10,
      option3: 30,
    },
    prodProperties: {
      prop1: 10,
      prop2: 20,
    }
  };
}

window.addEventListener('DOMContentLoaded', function (event) {

  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = "none";

  let s = document.getElementsByName("prodType");
  let select = s[0];

  select.addEventListener("change", function(event) {
    let target = event.target;
    console.log(target.value);
    updatePrice();
  });
  

  let radios = document.getElementsByName("myradios");
  radios.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
      console.log(r.value);
      updatePrice();
    });
  });


  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
      let c = event.target;
      console.log(c.name);
      console.log(c.value);
      updatePrice();
    });
  });

  updatePrice();
});
