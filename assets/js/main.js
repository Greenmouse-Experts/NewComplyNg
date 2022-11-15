window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    if (document.documentElement.scrollTop > 100) {
      document.getElementById("header").style.backgroundColor = "#fff";
      document.getElementById("header").style.boxShadow =
        "";
    } else {
      document.getElementById("header").style.background = "none";
      document.getElementById("header").style.boxShadow = "none";
    }
}

 //Copyright Date
 function newDate() {
  return new Date().getFullYear();
}
document.onload = document.getElementById("autodate").innerHTML = newDate();
