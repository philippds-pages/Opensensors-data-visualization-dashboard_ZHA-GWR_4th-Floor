function changeColor(id) {
  document.getElementById("0").style.color = "black";
  document.getElementById("1").style.color = "black";
  document.getElementById("2").style.color = "black";
  document.getElementById("3").style.color = "black";
  document.getElementById("4").style.color = "black";

  if(id == "0") { document.getElementById("0").style.color = "red"; }
  else { document.getElementById("0").style.color = "black"; }
  if(id == "1") { document.getElementById("1").style.color = "red"; }
  else { document.getElementById("1").style.color = "black"; }
  if(id == "2") { document.getElementById("2").style.color = "red"; }
  else { document.getElementById("2").style.color = "black"; }
  if(id == "3") { document.getElementById("3").style.color = "red"; }
  else { document.getElementById("3").style.color = "black"; }
  if(id == "4") { document.getElementById("4").style.color = "red"; }
  else { document.getElementById("4").style.color = "black"; }

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
