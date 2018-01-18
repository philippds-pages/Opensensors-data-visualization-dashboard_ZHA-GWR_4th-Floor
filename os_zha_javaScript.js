function changeColor(id) {

  if(id == "i0") { document.getElementById("i0").style.color = "red"; }
  else { document.getElementById("i0").style.color = "black"; }
  if(id == "i1") { document.getElementById("i1").style.color = "red"; }
  else { document.getElementById("i1").style.color = "black"; }
  if(id == "i2") { document.getElementById("i2").style.color = "red"; }
  else { document.getElementById("i2").style.color = "black"; }
  if(id == "i3") { document.getElementById("i3").style.color = "red"; }
  else { document.getElementById("i3").style.color = "black"; }
  if(id == "i4") { document.getElementById("i4").style.color = "red"; }
  else { document.getElementById("i4").style.color = "black"; }

}

function changeImage0(a) {
    document.getElementById("img").src=a;
    changeColor("i0");
}

function changeImage1(a) {
    document.getElementById("img").src=a;
    changeColor("i1");
}

function changeImage2(a) {
    document.getElementById("img").src=a;
    changeColor("i2");
}

function changeImage3(a) {
    document.getElementById("img").src=a;
    changeColor("i3");
}

function changeImage4(a) {
    document.getElementById("img").src=a;
    changeColor("i4");
}
