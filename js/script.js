
'use script';

function hamburgerMenu() {
    var x = document.getElementById("mainNav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }