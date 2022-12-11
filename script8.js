const nextURL = 'https://voronworks.github.io/index8.html';
const nextTitle = 'My new page title';
const nextState = { additionalInformation: 'Updated the URL with JS' };  
window.addEventListener('DOMContentLoaded', function (event) {
let b = document.getElementById("my-button");
b.addEventListener("click", click1);
});
function click1() {
window.history.pushState(nextState, nextTitle, nextURL);
  if (form.style.display === 'none') {

  form.style.display = 'block';
} else {

  form.style.display = 'none';
}
}
