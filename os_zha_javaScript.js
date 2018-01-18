function changeColor(id) {
  document.getElementById("0").style.color = "black";
  document.getElementById("1").style.color = "black";
  document.getElementById("2").style.color = "black";
  document.getElementById("3").style.color = "black";
  document.getElementById("4").style.color = "black";

  document.getElementById(id).style.color = "red";
}

function changeImage0(a) {
    document.getElementById("img").src=a;
    changeColor("0");
}

function changeImage1(a) {
    document.getElementById("img").src=a;
    changeColor("1");
}

function changeImage2(a) {
    document.getElementById("img").src=a;
    changeColor("2");
}

function changeImage3(a) {
    document.getElementById("img").src=a;
    changeColor("3");
}

function changeImage4(a) {
    document.getElementById("img").src=a;
    changeColor("4");
}
