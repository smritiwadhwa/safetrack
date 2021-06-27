var toggleOn = false;
var navbarprofile = false;
var navbarmap = false;
function myFunction() {
  toggleOn = !toggleOn;
  navbarprofile = !navbarprofile;
  navbarmap = !navbarmap;
  if(navbarprofile == true){
    document.getElementById("checkinbutton").src = "darkcheckinbutton.png";
  } else {
    document.getElementById("checkinbutton").src = "darkcheckinbutton.png";
  }
  if (toggleOn == true){
    document.getElementById("header").style.backgroundImage = "linear-gradient(to bottom right, #141414, #252525)";
    document.getElementById("footer").style.backgroundImage = "linear-gradient(to bottom right,#252525, #141414)";
    document.getElementById("checkinbutton").src = "darkcheckinbutton.png";
    document.getElementById("mapButton").src = "darkmapbutton.png";
    document.getElementById("github").src = "githubdark.png";
    document.getElementById("github1").src = "githubdark.png";
    document.getElementById("title").style.textShadow = "2px 2px 10px #00c4cc";
    document.getElementById("title").style.color = "#99FD36";
    document.getElementById("footerText").style.textShadow = "2px 2px 10px #00c4cc";
    document.getElementById("footerText").style.color = "#99FD36";
    document.getElementById("formbody").style.color = "#fffded";
    document.getElementById("checkinsubmit").style.color = "#141414";
    document.getElementById("checkinsubmit1").style.color = "#141414";
    document.getElementById("body").style.backgroundColor = "#141414";
    document.getElementById("checkinsubmit").style.backgroundColor = "#99FD36";
    document.getElementById("checkinsubmit1").style.backgroundColor = "#99FD36";
    document.getElementById("formbody").style.backgroundColor = "#252525";
    document.getElementById("title").style.textShadow = "2px 2px 10px #00c4cc";
  } else{
    document.getElementById("header").style.backgroundImage = "linear-gradient(to bottom right, #a4dde2, white)";
    document.getElementById("checkinbutton").src = "lightcheckinbutton.png";
    document.getElementById("mapButton").src = "mapbutton.png";
    document.getElementById("title").style.textShadow = "2px 2px 10px white";
    document.getElementById("title").style.color = "#ec6433";
    document.getElementById("github").src = "githublight.png";
    document.getElementById("github1").src = "githublight.png";
    document.getElementById("footer").style.backgroundImage = "linear-gradient(to bottom right, white, #a4dde2)";
    document.getElementById("footerText").style.textShadow = "0 0 10px white";
    document.getElementById("footerText").style.color = "#ec6433";
    document.getElementById("formbody").style.color = "black";
    document.getElementById("checkinsubmit").style.color = "#fffded";
    document.getElementById("checkinsubmit1").style.color = "#fffded";
    document.getElementById("checkinsubmit").style.backgroundColor = "#ec6433";
    document.getElementById("checkinsubmit1").style.backgroundColor = "#ec6433";
    document.getElementById("body").style.backgroundColor = "#d5d4d4";
    document.getElementById("formbody").style.backgroundColor = "white";
  }
}
