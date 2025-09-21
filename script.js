const buttons = document.getElementsByClassName("exploreBtn");

  for (let btn of buttons) {
    btn.addEventListener("click", function() {
      alert("Country ready to be explored!");
    });
  }

const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting us!");
});







