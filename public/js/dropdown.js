function myFunction() {
  var x = document.getElementByName("test");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
