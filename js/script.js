/*javascript code adapted from in class activities and https://www.w3schools.com/howto/howto_js_topnav_responsive.asp*/
'use script';
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function hamburgerMenu() {
    var x = document.getElementById("mainNav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }