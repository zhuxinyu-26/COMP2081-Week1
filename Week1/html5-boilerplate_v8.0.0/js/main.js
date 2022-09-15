const button = document.querySelector("#Etymology");

button.addEventListener("click", colorChange);

function colorChange() {
  console.log("button clicked");
  button.style.color = "pink";
}
