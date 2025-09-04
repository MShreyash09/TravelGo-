const buttons = document.getElementsByClassName("exploreBtn");

  for (let btn of buttons) {
    btn.addEventListener("click", function() {
      alert("Country ready to be explored!");
    });
  }

