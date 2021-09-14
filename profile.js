var myform = document.getElementById("myForm");
var successmessage = document.getElementById("success_message");
var errormessage = document.getElementById("error_message");
var submitButton=document.getElementById("submitButton");
const scriptURL = "https://script.google.com/macros/s/AKfycbz33zpJ36WpMoD7uLAbXZTkXzSSklAcFOQIIFKX-GcQHYn6rUj-ugqEpPe3bZVoERkslg/exec";
const form = document.forms['myForm'];

form.addEventListener('submit', e => {
submitButton.innerText="SENDING...";
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => result("success"))
    .catch(error => result("error"))
})

function generate() {
    var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];

    function populate(a) {
        for (var i = 0; i < 6; i++) {
            var x = Math.round(Math.random() * 14);
            var y = hexValues[x];
            a += y;
        }
        return a;
    }

    var newColor1 = populate('#');
    var newColor2 = populate('#');
    var angle = Math.round(Math.random() * 360);

    var gradient = ("linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")");

    var mainsuper = document.getElementById('super');

    mainsuper.style.background = gradient;
}
generate();


function scrolll(d) {
    var box = document.getElementById("swipable");
    if (d == "left") {
        box.style.left = "-100%";
    }
    if (d == "right") {
        box.style.left = "0%";
    }

    if (d == "clear") {
        box.style.left = "0%";
        myform.style.display = "flex";
        successmessage.style.display = "none";
        errormessage.style.display = "none";
    }
}

function result(res) {
    if (res == "success") {
        successmessage.style.display = "block";
        errormessage.style.display = "none";
        myform.style.display = "none";
        myform.reset();
    }
    if (res == "error") {
        errormessage.style.display = "block";
        successmessage.style.display = "none";
        myform.style.display = "none";
        myform.reset();
    }
    submitButton.innerText = "SUBMIT";
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}