const nextURL = 'https://voronworks.github.io/index8.html';
const nextTitle = 'My new page title';
const nextState = { additionalInformation: 'Updated the URL with JS' };  
window.addEventListener('DOMContentLoaded', function (event) {
b.addEventListener("click", click1);
let b = document.getElementById("my-button");
});
function click1() {
window.history.pushState(nextState, nextTitle, nextURL);
}