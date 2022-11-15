function updatePrice() {

  let s = document.getElementsByName("prodType");
  let select = s[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }
  let im = document.getElementById("image");
  im.src="work6/image"+select.value+".png";
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = (select.value == "2" ? "block" : "none");
  

  let radios = document.getElementsByName("myradios");
  radios.forEach(function(radio) {
    if (radio.checked) {
      let optionPrice = prices.myradios[radio.value];
      if (optionPrice !== undefined) {
        price += optionPrice;
        im.src="work6/image"+select.value+radio.value+".png";
      }
      if(select.value!=2)
      radio.checked=false;
    }

    
  });


  let checkDiv = document.getElementById("checkboxes");
  checkDiv.style.display = (select.value == "3" ? "block" : "none");

  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      if (propPrice !== undefined) {
        price += propPrice;
        im.src="work6/image"+select.value+checkbox.name+".png";
      }
      if(select.value!=3)
      checkbox.checked=false;
    }
  });
  
  let prodPrice = document.getElementById("prodPrice");

  let f1 = document.getElementsByName("price");
    
  if(!isNaN(f1[0].value)&& f1[0].value>0)
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
      prop1:15,
      prop2: 20,
    }
  };
}

window.addEventListener('DOMContentLoaded', function (event) {

  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = "none";

  
window.addEventListener('change', function (event)
    {
      updatePrice();
    });
  updatePrice();
});
