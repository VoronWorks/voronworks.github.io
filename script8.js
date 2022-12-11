const nextURL = 'https://voronworks.github.io/index8.html';
const nextTitle = 'My new page title';
const nextState = { additionalInformation: 'Updated the URL with JS' };  
 const form = document.getElementById('form');
window.addEventListener('DOMContentLoaded', function (event) {
let b = document.getElementById("my-button");
form.style.display = 'none';
b.addEventListener("click", click1);



});
function click1() {
window.history.pushState(nextState, nextTitle, nextURL);

if (window.location.href == 'https://voronworks.github.io/index8.html') {

  form.style.display = 'block';
} else {

  form.style.display = 'none';
}
}
