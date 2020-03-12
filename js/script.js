/*javascript code adapted from in class activities and https://www.w3schools.com/howto/howto_js_topnav_responsive.asp*/
'use script';
console.log("Javascript is running.");
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }